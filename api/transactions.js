const DEFAULT_BRANCH = "main";
const DEFAULT_HISTORY_PATH = "transactions.json";

function sendJson(res, status, payload, origin = "*") {
  res.statusCode = status;
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function getAllowedOrigin(req) {
  const allowed = process.env.ALLOWED_ORIGIN || "*";
  if (allowed === "*") return "*";

  const origin = req.headers.origin;
  return origin && allowed.split(",").map((item) => item.trim()).includes(origin) ? origin : allowed;
}

function decodeContent(content) {
  return JSON.parse(Buffer.from(content || "", "base64").toString("utf8") || "{}");
}

function encodeContent(payload) {
  return Buffer.from(JSON.stringify(payload, null, 2) + "\n", "utf8").toString("base64");
}

function getTransactionKey(entry) {
  if (entry.sharedKey) return entry.sharedKey;

  return [
    entry.tradeId || entry.id || "trade",
    entry.action || "action",
    entry.contract || "contract",
    entry.time || "time",
    Number(entry.price || 0).toFixed(4)
  ].join("|");
}

function mergeTransactions(existing = [], incoming = []) {
  const merged = new Map();

  [...existing, ...incoming].forEach((entry) => {
    const sharedKey = getTransactionKey(entry);
    merged.set(sharedKey, { ...entry, sharedKey });
  });

  return Array.from(merged.values()).sort((a, b) => (
    new Date(b.time || 0) - new Date(a.time || 0)
  ));
}

async function readRequestBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function githubRequest(path, options = {}) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPOSITORY || process.env.REPO_FULL_NAME;

  if (!token || !repo) {
    throw new Error("Missing GITHUB_TOKEN or GITHUB_REPOSITORY");
  }

  const response = await fetch(`https://api.github.com/repos/${repo}${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "atlas-paper-trade-history-api",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {})
    }
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(data?.message || `GitHub request failed: ${response.status}`);
  }

  return data;
}

async function getMasterFile() {
  const branch = process.env.GITHUB_BRANCH || DEFAULT_BRANCH;
  const historyPath = process.env.HISTORY_PATH || DEFAULT_HISTORY_PATH;
  const file = await githubRequest(`/contents/${historyPath}?ref=${encodeURIComponent(branch)}`);
  return { file, payload: decodeContent(file.content) };
}

module.exports = async function handler(req, res) {
  const origin = getAllowedOrigin(req);

  if (req.method === "OPTIONS") {
    return sendJson(res, 204, {}, origin);
  }

  try {
    if (req.method === "GET") {
      const { payload } = await getMasterFile();
      return sendJson(res, 200, payload, origin);
    }

    if (req.method !== "POST") {
      return sendJson(res, 405, { error: "Method not allowed" }, origin);
    }

    const branch = process.env.GITHUB_BRANCH || DEFAULT_BRANCH;
    const historyPath = process.env.HISTORY_PATH || DEFAULT_HISTORY_PATH;
    const bodyText = await readRequestBody(req);
    const body = bodyText ? JSON.parse(bodyText) : {};
    const incoming = Array.isArray(body.transactions) ? body.transactions : [];
    const { file, payload } = await getMasterFile();
    const transactions = mergeTransactions(payload.transactions, incoming);
    const updatedPayload = {
      generatedAt: new Date().toISOString(),
      source: "github-master-paper-trading-ledger",
      transactions
    };

    const result = await githubRequest(`/contents/${historyPath}`, {
      method: "PUT",
      body: JSON.stringify({
        branch,
        content: encodeContent(updatedPayload),
        message: `Sync paper trade history (${transactions.length} rows)`,
        sha: file.sha
      })
    });

    return sendJson(res, 200, {
      commit: result.commit?.sha,
      merged: transactions.length,
      transactions
    }, origin);
  } catch (error) {
    return sendJson(res, 500, { error: error.message }, origin);
  }
};
