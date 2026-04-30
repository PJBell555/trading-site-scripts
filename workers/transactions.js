const DEFAULT_BRANCH = "main";
const DEFAULT_HISTORY_PATH = "transactions.json";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json; charset=utf-8"
  };
}

function jsonResponse(payload, status = 200, origin = "*") {
  return new Response(JSON.stringify(payload), {
    status,
    headers: corsHeaders(origin)
  });
}

function getAllowedOrigin(request, env) {
  const allowed = env.ALLOWED_ORIGIN || "*";
  if (allowed === "*") return "*";

  const origin = request.headers.get("Origin");
  return origin && allowed.split(",").map((item) => item.trim()).includes(origin)
    ? origin
    : allowed.split(",")[0].trim();
}

function decodeBase64(content) {
  const binary = atob(content || "");
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function decodeContent(content) {
  return JSON.parse(decodeBase64(content) || "{}");
}

function encodeContent(payload) {
  return encodeBase64(`${JSON.stringify(payload, null, 2)}\n`);
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

function isClosingTransaction(entry) {
  return Number(entry.pnl) !== 0 || ["TARGET", "STOP"].some((word) => entry.action?.includes(word));
}

function isOpeningTransaction(entry) {
  return !isClosingTransaction(entry) && ["BUY", "SELL SHORT"].includes(entry.action);
}

function getTradeLifecycleKey(entry) {
  return [
    entry.commodity || "commodity",
    entry.contract || "contract",
    entry.side || "side",
    entry.step || "step"
  ].join("|");
}

function mergeTransactions(existing = [], incoming = []) {
  const bySharedKey = new Map();

  [...existing, ...incoming].forEach((entry) => {
    const sharedKey = getTransactionKey(entry);
    bySharedKey.set(sharedKey, { ...entry, sharedKey });
  });

  const activeTrades = new Set();
  const deduped = [];
  const chronological = Array.from(bySharedKey.values()).sort((a, b) => (
    new Date(a.time || 0) - new Date(b.time || 0)
  ));

  chronological.forEach((entry) => {
    const lifecycleKey = getTradeLifecycleKey(entry);

    if (isOpeningTransaction(entry)) {
      if (activeTrades.has(lifecycleKey)) return;
      activeTrades.add(lifecycleKey);
    }

    if (isClosingTransaction(entry)) {
      activeTrades.delete(lifecycleKey);
    }

    deduped.push(entry);
  });

  return deduped.sort((a, b) => new Date(b.time || 0) - new Date(a.time || 0));
}

function compactPayload(payload = {}) {
  const originalTransactions = Array.isArray(payload.transactions) ? payload.transactions : [];
  const transactions = mergeTransactions(originalTransactions, []);

  return {
    generatedAt: new Date().toISOString(),
    source: "cloudflare-github-master-paper-trading-ledger",
    cleaned: true,
    removed: Math.max(originalTransactions.length - transactions.length, 0),
    transactions
  };
}

async function githubRequest(env, path, options = {}) {
  const token = env.GITHUB_TOKEN;
  const repo = env.GITHUB_REPOSITORY || env.REPO_FULL_NAME;

  if (!token || !repo) {
    throw new Error("Missing GITHUB_TOKEN or GITHUB_REPOSITORY");
  }

  const response = await fetch(`https://api.github.com/repos/${repo}${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "User-Agent": "atlas-paper-trade-history-worker",
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

async function getMasterFile(env) {
  const branch = env.GITHUB_BRANCH || DEFAULT_BRANCH;
  const historyPath = env.HISTORY_PATH || DEFAULT_HISTORY_PATH;
  const file = await githubRequest(env, `/contents/${historyPath}?ref=${encodeURIComponent(branch)}`);
  return { file, payload: decodeContent(file.content) };
}

async function saveMasterFile(env, file, payload) {
  const branch = env.GITHUB_BRANCH || DEFAULT_BRANCH;
  const historyPath = env.HISTORY_PATH || DEFAULT_HISTORY_PATH;

  return githubRequest(env, `/contents/${historyPath}`, {
    method: "PUT",
    body: JSON.stringify({
      branch,
      content: encodeContent(payload),
      message: `Sync paper trade history (${payload.transactions.length} rows)`,
      sha: file.sha
    })
  });
}

export default {
  async fetch(request, env) {
    const origin = getAllowedOrigin(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    try {
      if (request.method === "GET") {
        const { payload } = await getMasterFile(env);
        return jsonResponse(payload, 200, origin);
      }

      if (request.method !== "POST") {
        return jsonResponse({ error: "Method not allowed" }, 405, origin);
      }

      const body = await request.json().catch(() => ({}));
      const { file, payload } = await getMasterFile(env);
      const cleanupOnly = body.mode === "cleanup";
      const incoming = cleanupOnly ? [] : Array.isArray(body.transactions) ? body.transactions : [];
      const updatedPayload = cleanupOnly
        ? compactPayload(payload)
        : {
            generatedAt: new Date().toISOString(),
            source: "cloudflare-github-master-paper-trading-ledger",
            transactions: mergeTransactions(payload.transactions, incoming)
          };
      const result = await saveMasterFile(env, file, updatedPayload);

      return jsonResponse({
        commit: result.commit?.sha,
        cleaned: cleanupOnly,
        removed: updatedPayload.removed || 0,
        merged: updatedPayload.transactions.length,
        transactions: updatedPayload.transactions
      }, 200, origin);
    } catch (error) {
      return jsonResponse({ error: error.message }, 500, origin);
    }
  }
};
