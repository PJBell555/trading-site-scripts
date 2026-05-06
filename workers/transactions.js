const DEFAULT_BRANCH = "main";
const DEFAULT_HISTORY_PATH = "transactions.json";
const DEFAULT_BACKUP_DIR = "backups";
const DEFAULT_SETTINGS_PATH = "settings.json";
const DEFAULT_ADVISORY_PATH = "advisory-snapshots.json";
const MAX_ADVISORY_SNAPSHOTS = 20000;
const COINBASE_SANDBOX_BASE_URL = "https://api-sandbox.coinbase.com/api/v3/brokerage";
const DEFAULT_OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";

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

function getAdvisorySnapshotKey(entry) {
  if (entry.snapshotKey) return entry.snapshotKey;

  const time = new Date(entry.time || Date.now());
  const minute = Math.floor(time.getTime() / 60000);
  return [
    entry.commodity || "commodity",
    entry.horizon || "horizon",
    minute
  ].join("|");
}

function normalizeAdvisorySnapshot(entry) {
  const price = Number(entry.price);
  const conviction = Number(entry.conviction);

  if (!entry || !Number.isFinite(price) || !Number.isFinite(conviction)) return null;

  const normalized = {
    snapshotKey: getAdvisorySnapshotKey(entry),
    time: entry.time || new Date().toISOString(),
    commodity: entry.commodity || "oil",
    commodityName: entry.commodityName || entry.commodity || "Oil",
    horizon: entry.horizon || "intraday",
    price,
    priceSource: entry.priceSource || "Unknown",
    bounded: Number(entry.bounded) || 0,
    conviction,
    tone: ["long", "short", "wait"].includes(entry.tone) ? entry.tone : "wait",
    label: entry.label || "Wait",
    action: entry.action || "No trade"
  };

  return normalized;
}

function mergeAdvisorySnapshots(existing = [], incoming = []) {
  const byKey = new Map();

  [...existing, ...incoming].forEach((entry) => {
    const normalized = normalizeAdvisorySnapshot(entry);
    if (!normalized) return;
    byKey.set(normalized.snapshotKey, normalized);
  });

  return Array.from(byKey.values())
    .sort((a, b) => new Date(b.time || 0) - new Date(a.time || 0))
    .slice(0, MAX_ADVISORY_SNAPSHOTS);
}

function getNewAdvisorySnapshots(existing = [], incoming = []) {
  const existingKeys = new Set(
    existing
      .map((entry) => normalizeAdvisorySnapshot(entry)?.snapshotKey)
      .filter(Boolean)
  );
  const incomingByKey = new Map();

  incoming.forEach((entry) => {
    const normalized = normalizeAdvisorySnapshot(entry);
    if (!normalized || existingKeys.has(normalized.snapshotKey)) return;
    incomingByKey.set(normalized.snapshotKey, normalized);
  });

  return Array.from(incomingByKey.values());
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

function coinbaseSandboxOrderPayload(body = {}) {
  const contracts = Math.max(1, Number(body.contracts) || 1);
  const productId = body.productId || body.contract;
  const side = String(body.side || "").toUpperCase();

  if (!productId || !["BUY", "SELL"].includes(side)) {
    throw new Error("Missing Coinbase sandbox productId or side");
  }

  return {
    client_order_id: body.clientOrderId || crypto.randomUUID(),
    product_id: productId,
    side,
    order_configuration: {
      market_market_ioc: {
        base_size: String(contracts)
      }
    }
  };
}

async function createCoinbaseSandboxOrder(body = {}) {
  const orderPayload = coinbaseSandboxOrderPayload(body);
  const headers = {
    "Content-Type": "application/json"
  };

  if (body.sandboxHeader) {
    headers["X-Sandbox"] = body.sandboxHeader;
  }

  const response = await fetch(`${COINBASE_SANDBOX_BASE_URL}/orders`, {
    method: "POST",
    headers,
    body: JSON.stringify(orderPayload)
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw new Error(data?.error_response?.message || data?.message || `Coinbase sandbox order failed: ${response.status}`);
  }

  return {
    endpoint: `${COINBASE_SANDBOX_BASE_URL}/orders`,
    request: orderPayload,
    response: data
  };
}

function getOpenRouterModel(modelId = "") {
  const models = {
    "gpt-5-5": "openrouter/auto",
    "gpt-5-4": "openrouter/auto",
    perplexity: "perplexity/sonar",
    gemini: "google/gemini-2.5-flash",
    claude: "anthropic/claude-3.5-haiku",
    grok: "x-ai/grok-3-mini"
  };

  return models[modelId] || modelId || "openrouter/auto";
}

const ADVISORY_MODEL_DEFAULT = "anthropic/claude-sonnet-4.6";
const CRITIC_MODEL_DEFAULT = "openai/gpt-5-mini";

const APPROVED_ADVISORY_MODELS = new Set([
  "anthropic/claude-haiku-4.5",
  "anthropic/claude-3.5-haiku",
  "anthropic/claude-sonnet-4.6",
  "google/gemini-2.5-flash",
  "google/gemini-2.5-flash-lite",
  "openai/gpt-5",
  "openai/gpt-5.1",
  "openai/gpt-5.2",
  "openai/gpt-5.3-chat",
  "openai/gpt-5.4",
  "openai/gpt-5.4-mini",
  "openai/gpt-5.4-nano",
  "openai/gpt-5.5",
  "openai/gpt-5-nano",
  "openai/gpt-5-mini",
  "openai/gpt-4o-mini",
  "openai/gpt-4.1-mini",
  "perplexity/sonar",
  "x-ai/grok-3-mini",
  "x-ai/grok-4",
  "google/gemma-4-31b-it:free",
  "qwen/qwen3-next-80b-a3b-instruct:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
  "google/gemma-3-4b-it:free"
]);

function getOpenRouterAdvisoryModel(modelId = "") {
  if (typeof modelId === "string" && APPROVED_ADVISORY_MODELS.has(modelId)) {
    return modelId;
  }
  return ADVISORY_MODEL_DEFAULT;
}

function getOpenRouterCriticModel(modelId) {
  if (modelId === false || modelId === null) return null;
  if (typeof modelId === "string" && APPROVED_ADVISORY_MODELS.has(modelId)) {
    return modelId;
  }
  return CRITIC_MODEL_DEFAULT;
}

function parseAdvisoryContent(content = "") {
  const tryParse = (text) => {
    try {
      return JSON.parse(text);
    } catch (_error) {
      return null;
    }
  };

  let parsed = tryParse(content);

  if (parsed && typeof parsed === "object" && Object.keys(parsed).length === 1
    && typeof parsed.summary === "string") {
    const inner = tryParse(parsed.summary);
    if (inner && typeof inner === "object") {
      parsed = inner;
    }
  }

  if (!parsed) {
    const fence = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (fence) parsed = tryParse(fence[1]);
  }

  if (!parsed) {
    const braced = content.match(/\{[\s\S]*\}/);
    if (braced) parsed = tryParse(braced[0]);
  }

  return parsed && typeof parsed === "object" ? parsed : { summary: content };
}

function buildOpenRouterOpinionMessages(body = {}) {
  const prompt = String(body.prompt || "Master Technician Analysis");
  const context = body.context || {};
  const commodity = context.commodityName || context.commodity || "selected commodity";

  return [
    {
      role: "system",
      content: [
        "You are a cautious commodity futures second-opinion analyst.",
        "This is educational market commentary, not personalized investment advice.",
        "Return compact JSON only with keys: conviction, tone, summary, reasons, risks.",
        "tone must be one of long, short, wait. conviction must be 0-100."
      ].join(" ")
    },
    {
      role: "user",
      content: JSON.stringify({
        prompt,
        task: `Give a second opinion on the current ${commodity} advisory.`,
        context
      })
    }
  ];
}

function buildOpenRouterAdvisoryMessages(body = {}) {
  const commodity = body.commodity || body.commodityName || "the selected commodity";
  const horizon = body.horizon || "intraday";
  const context = body.context || {};

  const systemContent = [
    "You are an experienced commodity futures advisor producing calibrated directional advisories.",
    "This is educational market commentary, not personalized investment advice.",
    "Return compact JSON only with keys: conviction, tone, summary, reasons, risks.",
    "conviction must be an integer 0-100 representing your calibrated directional confidence.",
    "tone must be exactly one of: long, short, wait.",
    "If signals are mixed or weak, prefer wait or a low conviction over forcing a direction.",
    "Reasons should cite specific signal values, not generic statements.",
    "Risks should be concrete events that would invalidate the call."
  ].join(" ");

  const userContent = JSON.stringify({
    task: `Produce a ${horizon}-horizon advisory for ${commodity}.`,
    commodity,
    horizon,
    context
  });

  return [
    { role: "system", content: systemContent },
    { role: "user", content: userContent }
  ];
}

function buildCriticReviewMessages(primaryAdvisory, body = {}) {
  const commodity = body.commodity || body.commodityName || "the selected commodity";
  const horizon = body.horizon || "intraday";
  const context = body.context || {};

  const systemContent = [
    "You are an independent peer reviewer for commodity futures advisories.",
    "You are given the same market context as the primary analyst, plus their advisory output.",
    "Your job is to critically evaluate the primary's call, not rubber-stamp it.",
    "Return compact JSON only with keys: agree, agreementLevel, adjustedConviction, concerns, supportingPoints.",
    "agree must be a boolean: true if you agree with the primary tone, false if not.",
    "agreementLevel must be an integer 0-100 expressing how strongly you agree overall.",
    "adjustedConviction must be an integer 0-100 representing your own suggested conviction (may differ from primary).",
    "concerns is an array of specific concerns about the primary's reasoning, missed signals, or overconfidence.",
    "supportingPoints is an array of specific points where you agree with the primary.",
    "Be willing to disagree. If the primary forced a direction on weak signals or ignored a key risk, say so concretely."
  ].join(" ");

  const userContent = JSON.stringify({
    task: `Review this ${horizon}-horizon advisory for ${commodity}.`,
    commodity,
    horizon,
    context,
    primaryAdvisory
  });

  return [
    { role: "system", content: systemContent },
    { role: "user", content: userContent }
  ];
}

async function createOpenRouterAdvisory(env, body = {}) {
  const apiKey = env.OPENROUTER_API_KEY ? await env.OPENROUTER_API_KEY.get() : null;
  if (!apiKey) {
    throw new Error("Missing OPENROUTER_API_KEY Secrets Store binding or value");
  }

  const baseUrl = env.OPENROUTER_BASE_URL || DEFAULT_OPENROUTER_BASE_URL;
  const model = getOpenRouterAdvisoryModel(body.model || body.modelId);
  const startedAt = Date.now();

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": env.OPENROUTER_SITE_URL || env.ALLOWED_ORIGIN || "https://pjbell555.github.io",
      "X-Title": env.OPENROUTER_APP_NAME || "ComHedge 2"
    },
    body: JSON.stringify({
      model,
      messages: buildOpenRouterAdvisoryMessages(body),
      temperature: 0.2,
      max_tokens: 600,
      // Some providers (e.g. Perplexity Sonar) reject json_object response_format.
      // Skip it for them; the prompt asks for JSON anyway and parseAdvisoryContent
      // is robust to text responses.
      ...(model.startsWith("perplexity/") ? {} : { response_format: { type: "json_object" } })
    })
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    const baseMsg = data?.error?.message || data?.message || `OpenRouter request failed: ${response.status}`;
    const meta = data?.error?.metadata;
    const detail = meta ? ` | provider=${meta.providerName || "?"} raw=${meta.raw || JSON.stringify(meta)}` : "";
    throw new Error(`${baseMsg}${detail}`);
  }

  const content = data?.choices?.[0]?.message?.content || "{}";
  const advisory = parseAdvisoryContent(content);

  return {
    provider: "OpenRouter",
    model,
    advisory,
    usage: data.usage || null,
    elapsedMs: Date.now() - startedAt
  };
}

async function createOpenRouterCriticReview(env, primaryAdvisory, body = {}, criticModel) {
  const apiKey = env.OPENROUTER_API_KEY ? await env.OPENROUTER_API_KEY.get() : null;
  if (!apiKey) {
    throw new Error("Missing OPENROUTER_API_KEY Secrets Store binding or value");
  }

  const baseUrl = env.OPENROUTER_BASE_URL || DEFAULT_OPENROUTER_BASE_URL;
  const startedAt = Date.now();

  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": env.OPENROUTER_SITE_URL || env.ALLOWED_ORIGIN || "https://pjbell555.github.io",
      "X-Title": env.OPENROUTER_APP_NAME || "ComHedge 2"
    },
    body: JSON.stringify({
      model: criticModel,
      messages: buildCriticReviewMessages(primaryAdvisory, body),
      temperature: 0.2,
      max_tokens: 2000,
      reasoning: { effort: "low" },
      response_format: { type: "json_object" }
    })
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    const baseMsg = data?.error?.message || data?.message || `Critic request failed: ${response.status}`;
    const meta = data?.error?.metadata;
    const detail = meta ? ` | provider=${meta.providerName || "?"} raw=${meta.raw || JSON.stringify(meta)}` : "";
    throw new Error(`${baseMsg}${detail}`);
  }

  const content = data?.choices?.[0]?.message?.content || "{}";
  const review = parseAdvisoryContent(content);

  return {
    model: criticModel,
    review,
    usage: data.usage || null,
    elapsedMs: Date.now() - startedAt
  };
}

function consolidatePrimaryAndCritic(primary, criticReview) {
  const advisory = primary?.advisory || {};
  const review = criticReview?.review || {};
  const primaryConviction = Number.isFinite(Number(advisory.conviction)) ? Number(advisory.conviction) : 50;
  const criticConviction = Number.isFinite(Number(review.adjustedConviction)) ? Number(review.adjustedConviction) : primaryConviction;
  const agreed = review.agree !== false;

  return {
    conviction: Math.round((primaryConviction + criticConviction) / 2),
    tone: agreed ? (advisory.tone || "wait") : "wait",
    summary: advisory.summary,
    agreed,
    agreementLevel: review.agreementLevel,
    primaryConviction,
    criticConviction
  };
}

function hasTokenUsageStore(env) {
  return Boolean(env?.DB && typeof env.DB.prepare === "function");
}

function toFiniteNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function normalizeOpenRouterUsage(usage = {}) {
  const promptTokens = toFiniteNumber(
    usage.prompt_tokens ?? usage.promptTokens ?? usage.input_tokens ?? usage.inputTokens,
    0
  );
  const completionTokens = toFiniteNumber(
    usage.completion_tokens ?? usage.completionTokens ?? usage.output_tokens ?? usage.outputTokens,
    0
  );
  const totalTokens = toFiniteNumber(
    usage.total_tokens ?? usage.totalTokens,
    promptTokens + completionTokens
  );
  const costUsd = toFiniteNumber(
    usage.cost ?? usage.cost_usd ?? usage.costUsd ?? usage.total_cost ?? usage.totalCost,
    0
  );

  return {
    promptTokens,
    completionTokens,
    totalTokens,
    costUsd
  };
}

async function recordTokenUsage(env, entry = {}) {
  if (!hasTokenUsageStore(env)) {
    return { stored: false, reason: "d1-not-configured" };
  }

  const usage = normalizeOpenRouterUsage(entry.usage);
  const model = String(entry.model || "unknown");
  const provider = String(entry.provider || "OpenRouter");
  const job = String(entry.job || "unknown");
  const metadata = JSON.stringify(entry.metadata || {});
  const freeTier = usage.costUsd <= 0 || /(^|[:/])free\b/i.test(model) ? 1 : 0;

  await env.DB.prepare(`
    INSERT INTO token_usage (
      event_time,
      provider,
      model,
      job,
      prompt_tokens,
      completion_tokens,
      total_tokens,
      cost_usd,
      free_tier,
      metadata_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    new Date().toISOString(),
    provider,
    model,
    job,
    Math.round(usage.promptTokens),
    Math.round(usage.completionTokens),
    Math.round(usage.totalTokens),
    usage.costUsd,
    freeTier,
    metadata
  ).run();

  return { stored: true };
}

async function safeRecordTokenUsage(env, entry = {}) {
  try {
    return await recordTokenUsage(env, entry);
  } catch (error) {
    return { stored: false, error: error.message };
  }
}

function emptyTokenUsagePayload(source = "d1-not-configured", windowHours = 24) {
  return {
    generatedAt: new Date().toISOString(),
    source,
    windowHours,
    totals: {
      apiCalls: 0,
      totalTokens: 0,
      billableCostUsd: 0,
      freeTierCalls: 0
    },
    models: [],
    jobs: []
  };
}

function getTokenWindowHours(url) {
  const hours = Number(url.searchParams.get("hours") || 24);
  if (!Number.isFinite(hours)) return 24;
  return Math.min(744, Math.max(1, Math.round(hours)));
}

function getResults(result) {
  return Array.isArray(result?.results) ? result.results : [];
}

async function getTokenUsageSummary(env, windowHours = 24) {
  if (!hasTokenUsageStore(env)) {
    return emptyTokenUsagePayload("d1-not-configured", windowHours);
  }

  const since = new Date(Date.now() - windowHours * 60 * 60 * 1000).toISOString();
  const totalsResult = await env.DB.prepare(`
    SELECT
      COUNT(*) AS apiCalls,
      COALESCE(SUM(total_tokens), 0) AS totalTokens,
      COALESCE(SUM(cost_usd), 0) AS billableCostUsd,
      COALESCE(SUM(CASE WHEN free_tier = 1 THEN 1 ELSE 0 END), 0) AS freeTierCalls
    FROM token_usage
    WHERE event_time >= ?
  `).bind(since).first();

  const modelsResult = await env.DB.prepare(`
    SELECT
      provider,
      model,
      COUNT(*) AS calls,
      COALESCE(SUM(total_tokens), 0) AS totalTokens,
      COALESCE(SUM(cost_usd), 0) AS billableCostUsd,
      COALESCE(SUM(CASE WHEN free_tier = 1 THEN 1 ELSE 0 END), 0) AS freeTierCalls,
      MAX(event_time) AS lastCalledAt
    FROM token_usage
    WHERE event_time >= ?
    GROUP BY provider, model
    ORDER BY calls DESC, totalTokens DESC
  `).bind(since).all();

  const jobsResult = await env.DB.prepare(`
    SELECT
      job,
      COUNT(*) AS calls,
      COALESCE(SUM(total_tokens), 0) AS totalTokens,
      COALESCE(SUM(cost_usd), 0) AS billableCostUsd,
      COALESCE(SUM(CASE WHEN free_tier = 1 THEN 1 ELSE 0 END), 0) AS freeTierCalls,
      MAX(event_time) AS lastCalledAt
    FROM token_usage
    WHERE event_time >= ?
    GROUP BY job
    ORDER BY calls DESC, totalTokens DESC
  `).bind(since).all();

  return {
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-token-usage",
    windowHours,
    totals: {
      apiCalls: Number(totalsResult?.apiCalls || 0),
      totalTokens: Number(totalsResult?.totalTokens || 0),
      billableCostUsd: Number(totalsResult?.billableCostUsd || 0),
      freeTierCalls: Number(totalsResult?.freeTierCalls || 0)
    },
    models: getResults(modelsResult),
    jobs: getResults(jobsResult)
  };
}

async function createOpenRouterOpinion(env, body = {}) {
  const apiKey = env.OPENROUTER_API_KEY ? await env.OPENROUTER_API_KEY.get() : null;
  if (!apiKey) {
    throw new Error("Missing OPENROUTER_API_KEY Secrets Store binding or value");
  }

  const baseUrl = env.OPENROUTER_BASE_URL || DEFAULT_OPENROUTER_BASE_URL;
  const model = getOpenRouterModel(body.modelId || body.model);
  const response = await fetch(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": env.OPENROUTER_SITE_URL || env.ALLOWED_ORIGIN || "https://pjbell555.github.io",
      "X-Title": env.OPENROUTER_APP_NAME || "ComHedge 2"
    },
    body: JSON.stringify({
      model,
      messages: buildOpenRouterOpinionMessages(body),
      temperature: 0.2,
      max_tokens: 500,
      response_format: { type: "json_object" }
    })
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw new Error(data?.error?.message || data?.message || `OpenRouter request failed: ${response.status}`);
  }

  const content = data?.choices?.[0]?.message?.content || "{}";
  let opinion = {};
  try {
    opinion = JSON.parse(content);
  } catch (error) {
    opinion = { summary: content };
  }

  return {
    provider: "OpenRouter",
    model,
    rawModelId: body.modelId || body.model,
    opinion,
    usage: data.usage || null
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

function defaultSettingsPayload() {
  return {
    generatedAt: new Date().toISOString(),
    source: "cloudflare-github-shared-settings",
    coinbaseSandboxEnabled: false,
    users: [],
    userProfiles: {}
  };
}

async function getFileIfExists(env, path) {
  const branch = env.GITHUB_BRANCH || DEFAULT_BRANCH;

  try {
    return await githubRequest(env, `/contents/${path}?ref=${encodeURIComponent(branch)}`);
  } catch (error) {
    if (/not found/i.test(error.message)) return null;
    throw error;
  }
}

async function getSettingsFile(env) {
  const settingsPath = env.SETTINGS_PATH || DEFAULT_SETTINGS_PATH;
  const file = await getFileIfExists(env, settingsPath);

  return {
    file,
    path: settingsPath,
    payload: file ? decodeContent(file.content) : defaultSettingsPayload()
  };
}

async function getAdvisoryFile(env) {
  const advisoryPath = env.ADVISORY_PATH || DEFAULT_ADVISORY_PATH;
  const file = await getFileIfExists(env, advisoryPath);

  return {
    file,
    path: advisoryPath,
    payload: file ? decodeContent(file.content) : {
      generatedAt: new Date().toISOString(),
      source: "cloudflare-github-advisory-snapshots",
      snapshots: []
    }
  };
}

async function saveJsonFile(env, path, payload, message, sha = null) {
  if (env.PAUSE_GIT_WRITES === "true" || env.PAUSE_GIT_WRITES === true) {
    return {
      paused: true,
      content: { sha: sha || "paused", path },
      commit: { sha: "paused", message }
    };
  }

  const branch = env.GITHUB_BRANCH || DEFAULT_BRANCH;

  return githubRequest(env, `/contents/${path}`, {
    method: "PUT",
    body: JSON.stringify({
      branch,
      content: encodeContent(payload),
      message,
      ...(sha ? { sha } : {})
    })
  });
}

async function saveMasterFile(env, file, payload) {
  const historyPath = env.HISTORY_PATH || DEFAULT_HISTORY_PATH;

  return saveJsonFile(
    env,
    historyPath,
    payload,
    `Sync paper trade history (${payload.transactions.length} rows)`,
    file.sha
  );
}

async function saveDailyBackup(env, payload) {
  const backupDir = env.BACKUP_DIR || DEFAULT_BACKUP_DIR;
  const date = new Date().toISOString().slice(0, 10);
  const backupPath = `${backupDir.replace(/\/$/, "")}/transactions-${date}.json`;
  const existingBackup = await getFileIfExists(env, backupPath);

  if (existingBackup?.sha) {
    return {
      path: backupPath,
      commit: null,
      skipped: true
    };
  }

  const backupPayload = {
    ...payload,
    backupGeneratedAt: new Date().toISOString(),
    backupDate: date,
    source: "cloudflare-github-daily-paper-trading-ledger-backup"
  };

  const result = await saveJsonFile(
    env,
    backupPath,
    backupPayload,
    `Backup paper trade history ${date} (${payload.transactions.length} rows)`,
    existingBackup?.sha
  );

  return {
    path: backupPath,
    commit: result.commit?.sha
  };
}

async function saveSettingsFile(env, file, path, payload) {
  return saveJsonFile(
    env,
    path,
    payload,
    "Update shared app settings",
    file?.sha
  );
}

function mergeUserProfiles(existingProfiles = {}, incomingProfiles = {}) {
  const merged = { ...existingProfiles };

  for (const [email, incomingProfile] of Object.entries(incomingProfiles)) {
    if (!incomingProfile || typeof incomingProfile !== "object" || Array.isArray(incomingProfile)) continue;

    const existingProfile = existingProfiles[email] && typeof existingProfiles[email] === "object"
      ? existingProfiles[email]
      : {};
    const nextProfile = {
      ...existingProfile,
      ...incomingProfile
    };

    if (
      String(existingProfile.avatarDataUrl || "").startsWith("data:image/")
      && !String(incomingProfile.avatarDataUrl || "").startsWith("data:image/")
    ) {
      nextProfile.avatarDataUrl = existingProfile.avatarDataUrl;
    }

    merged[email] = nextProfile;
  }

  return merged;
}

async function saveAdvisoryFile(env, file, path, payload) {
  return saveJsonFile(
    env,
    path,
    payload,
    `Sync advisory snapshots (${payload.snapshots.length} samples)`,
    file?.sha
  );
}

export default {
  async fetch(request, env) {
    const origin = getAllowedOrigin(request, env);
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    try {
      if (url.pathname === "/coinbase/sandbox/orders") {
        if (request.method !== "POST") {
          return jsonResponse({ error: "Method not allowed" }, 405, origin);
        }

        const body = await request.json().catch(() => ({}));
        const sandboxOrder = await createCoinbaseSandboxOrder(body);
        return jsonResponse({
          sandbox: true,
          ...sandboxOrder
        }, 200, origin);
      }

      if (url.pathname === "/token-usage") {
        if (request.method !== "GET") {
          return jsonResponse({ error: "Method not allowed" }, 405, origin);
        }

        const usageSummary = await getTokenUsageSummary(env, getTokenWindowHours(url));
        return jsonResponse(usageSummary, 200, origin);
      }

      if (url.pathname === "/token-usage/log") {
        if (request.method !== "POST") {
          return jsonResponse({ error: "Method not allowed" }, 405, origin);
        }

        const body = await request.json().catch(() => ({}));
        const result = await safeRecordTokenUsage(env, {
          provider: body.provider || "OpenRouter",
          model: body.model,
          job: body.job,
          usage: body.usage,
          metadata: body.metadata
        });
        return jsonResponse(result, result.stored ? 200 : 202, origin);
      }

      if (url.pathname === "/models/openrouter/opinion") {
        if (request.method !== "POST") {
          return jsonResponse({ error: "Method not allowed" }, 405, origin);
        }

        const body = await request.json().catch(() => ({}));
        const opinion = await createOpenRouterOpinion(env, body);
        const tokenLog = await safeRecordTokenUsage(env, {
          provider: "OpenRouter",
          model: opinion.model,
          job: "second-opinion",
          usage: opinion.usage,
          metadata: {
            rawModelId: opinion.rawModelId,
            commodity: body.commodity || body.commodityName,
            horizon: body.horizon
          }
        });
        return jsonResponse({ ...opinion, tokenLog }, 200, origin);
      }

      if (url.pathname === "/models/openrouter/advisory") {
        if (request.method !== "POST") {
          return jsonResponse({ error: "Method not allowed" }, 405, origin);
        }

        const body = await request.json().catch(() => ({}));
        const startedAt = Date.now();
        const primary = await createOpenRouterAdvisory(env, body);
        const primaryTokenLog = await safeRecordTokenUsage(env, {
          provider: "OpenRouter",
          model: primary.model,
          job: "primary-advisory",
          usage: primary.usage,
          metadata: {
            commodity: body.commodity || body.commodityName,
            horizon: body.horizon,
            elapsedMs: primary.elapsedMs
          }
        });

        const criticModel = getOpenRouterCriticModel(body.critic);
        if (!criticModel) {
          return jsonResponse({ ...primary, tokenLog: primaryTokenLog }, 200, origin);
        }

        let critic = null;
        let criticError = null;
        let criticTokenLog = null;
        try {
          critic = await createOpenRouterCriticReview(env, primary.advisory, body, criticModel);
          criticTokenLog = await safeRecordTokenUsage(env, {
            provider: "OpenRouter",
            model: critic.model,
            job: "critic-review",
            usage: critic.usage,
            metadata: {
              commodity: body.commodity || body.commodityName,
              horizon: body.horizon,
              elapsedMs: critic.elapsedMs
            }
          });
        } catch (err) {
          criticError = err.message;
        }

        const consolidated = critic ? consolidatePrimaryAndCritic(primary, critic) : primary.advisory;

        return jsonResponse({
          provider: "OpenRouter",
          primary,
          critic: critic || { model: criticModel, error: criticError },
          consolidated,
          elapsedMs: Date.now() - startedAt,
          tokenLog: {
            primary: primaryTokenLog,
            critic: criticTokenLog
          }
        }, 200, origin);
      }

      if (url.pathname === "/settings") {
        if (request.method === "GET") {
          const { payload } = await getSettingsFile(env);
          return jsonResponse(payload, 200, origin);
        }

        if (request.method !== "POST") {
          return jsonResponse({ error: "Method not allowed" }, 405, origin);
        }

        const body = await request.json().catch(() => ({}));
        const { file, path, payload } = await getSettingsFile(env);
        const settings = {
          ...payload,
          generatedAt: new Date().toISOString(),
          source: "cloudflare-github-shared-settings",
          coinbaseSandboxEnabled: Boolean(body.coinbaseSandboxEnabled),
          users: Array.isArray(body.users) ? body.users : payload.users || [],
          userProfiles: body.userProfiles && typeof body.userProfiles === "object" && !Array.isArray(body.userProfiles)
            ? mergeUserProfiles(payload.userProfiles || {}, body.userProfiles)
            : payload.userProfiles || {}
        };
        const result = await saveSettingsFile(env, file, path, settings);

        return jsonResponse({
          commit: result.commit?.sha,
          settings
        }, 200, origin);
      }

      if (url.pathname === "/advisories") {
        if (request.method === "GET") {
          const { payload } = await getAdvisoryFile(env);
          return jsonResponse(payload, 200, origin);
        }

        if (request.method !== "POST") {
          return jsonResponse({ error: "Method not allowed" }, 405, origin);
        }

        const body = await request.json().catch(() => ({}));
        const { file, path, payload } = await getAdvisoryFile(env);
        const incoming = Array.isArray(body.snapshots) ? body.snapshots : [];
        const newSnapshots = getNewAdvisorySnapshots(payload.snapshots, incoming);

        if (!newSnapshots.length) {
          return jsonResponse({
            commit: null,
            skipped: true,
            reason: "No new advisory snapshots",
            merged: Array.isArray(payload.snapshots) ? payload.snapshots.length : 0,
            snapshots: Array.isArray(payload.snapshots) ? payload.snapshots : []
          }, 200, origin);
        }

        const updatedPayload = {
          generatedAt: new Date().toISOString(),
          source: "cloudflare-github-advisory-snapshots",
          snapshots: mergeAdvisorySnapshots(payload.snapshots, newSnapshots)
        };
        const result = await saveAdvisoryFile(env, file, path, updatedPayload);

        return jsonResponse({
          commit: result.commit?.sha,
          added: newSnapshots.length,
          merged: updatedPayload.snapshots.length,
          snapshots: updatedPayload.snapshots
        }, 200, origin);
      }

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
      const mergedTransactions = cleanupOnly
        ? compactPayload(payload).transactions
        : mergeTransactions(payload.transactions, incoming);

      // Idempotency: if the merged transaction set is byte-identical (by
      // sharedKey set) to the current master, skip the GitHub commit. This
      // prevents the per-frontend auto-sync loop from rewriting the same
      // file every few seconds and DoS-ing the Pages build pipeline.
      const existingKeys = new Set((payload.transactions || []).map((t) => t?.sharedKey || JSON.stringify(t)));
      const mergedKeys = new Set(mergedTransactions.map((t) => t?.sharedKey || JSON.stringify(t)));
      const sameSize = existingKeys.size === mergedKeys.size;
      const sameMembers = sameSize && [...existingKeys].every((k) => mergedKeys.has(k));
      if (!cleanupOnly && sameMembers) {
        return jsonResponse({
          commit: null,
          backup: null,
          unchanged: true,
          cleaned: false,
          removed: 0,
          merged: mergedTransactions.length,
          transactions: payload.transactions
        }, 200, origin);
      }

      const updatedPayload = cleanupOnly
        ? compactPayload(payload)
        : {
            generatedAt: new Date().toISOString(),
            source: "cloudflare-github-master-paper-trading-ledger",
            transactions: mergedTransactions
          };
      const result = await saveMasterFile(env, file, updatedPayload);
      const backup = await saveDailyBackup(env, updatedPayload);

      return jsonResponse({
        commit: result.commit?.sha,
        backup,
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
