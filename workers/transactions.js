const DEFAULT_BRANCH = "main";
const DEFAULT_HISTORY_PATH = "transactions.json";
const DEFAULT_BACKUP_DIR = "backups";
const DEFAULT_SETTINGS_PATH = "settings.json";
const DEFAULT_ADVISORY_PATH = "advisory-snapshots.json";
const MAX_ADVISORY_SNAPSHOTS = 20000;
const COINBASE_SANDBOX_BASE_URL = "https://api-sandbox.coinbase.com/api/v3/brokerage";
const COINBASE_PRODUCTS_BASE_URL = "https://api.coinbase.com/api/v3/brokerage/products";
const DEFAULT_OPENROUTER_BASE_URL = "https://openrouter.ai/api/v1";
const PAPER_SCHEDULER_RUN_LIMIT = 20;
const PAPER_SCHEDULER_DEFAULT_THRESHOLD = 50;
const PAPER_SCHEDULER_PRICE_STALE_MS = 30 * 60 * 1000;
const PAPER_SCHEDULER_MIN_EVALUATION_MS = 4 * 60 * 1000;
const PAPER_SCHEDULER_DEFAULT_MAX_OPEN = 1;
const PAPER_SCHEDULER_DEFAULT_RISK_PCT = 0.75;
const PAPER_SCHEDULER_DEFAULT_START_CAPITAL = 1000;
const PAPER_SCHEDULER_MAX_CONTRACTS = 20;
const PRICE_SNAPSHOT_MAX_AGE_MS = 5 * 60 * 1000;
const OPEN_BRAIN_EVENT_LIMIT = 500;
const DEFAULT_MARKET_CALENDAR = {
  overnightRiskMode: "accept",
  marketTimeZone: "America/New_York",
  weeklyOpenDay: 0,
  weeklyOpenTime: "18:00",
  weeklyCloseDay: 5,
  weeklyCloseTime: "17:00",
  dailyCloseTime: "17:00",
  dailyReopenTime: "18:00",
  closeBeforeMinutes: 30,
  marketCalendarNotes: "Coinbase futures calendar: Sunday 18:00 ET through Friday 17:00 ET, with a 17:00-18:00 ET maintenance break on weekdays."
};
const SERVER_COMMODITIES = {
  oil: {
    id: "oil",
    name: "Oil",
    ticker: "NOLK6",
    productId: "NOL-18MAY26-CDE",
    productType: "Coinbase futures contract",
    contractMonth: "May 2026",
    contractExpiresAt: "2026-05-18T17:00",
    rollBeforeDays: 3,
    contractMultiplier: 10,
    marginRateLong: 1 / 7.2,
    marginRateShort: 1 / 6.2,
    feePerContractSide: 1.17
  },
  "natural-gas": { id: "natural-gas", name: "Natural Gas", ticker: "NATURAL-GAS-USD", productId: "NATURAL-GAS-USD", contractMultiplier: 1, marginRateLong: 1, marginRateShort: 1, feePerContractSide: 0 },
  gold: { id: "gold", name: "Gold", ticker: "GOLD-USD", productId: "GOLD-USD", contractMultiplier: 1, marginRateLong: 1, marginRateShort: 1, feePerContractSide: 0 },
  silver: { id: "silver", name: "Silver", ticker: "SILVER-USD", productId: "SILVER-USD", contractMultiplier: 1, marginRateLong: 1, marginRateShort: 1, feePerContractSide: 0 },
  copper: { id: "copper", name: "Copper", ticker: "COPPER-USD", productId: "COPPER-USD", contractMultiplier: 1, marginRateLong: 1, marginRateShort: 1, feePerContractSide: 0 },
  platinum: { id: "platinum", name: "Platinum", ticker: "PLATINUM-USD", productId: "PLATINUM-USD", contractMultiplier: 1, marginRateLong: 1, marginRateShort: 1, feePerContractSide: 0 }
};

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
  const mode = String(firstPresent(entry.tradeMode, entry.trade_mode, entry.mode) || "").trim().toUpperCase();
  const modePrefix = mode === REAL_TRADE_MODE ? `${REAL_TRADE_MODE}|` : "";

  return [
    `${modePrefix}${entry.tradeId || entry.id || "trade"}`,
    entry.action || "action",
    entry.contract || "contract",
    entry.time || "time",
    Number(entry.price || 0).toFixed(4)
  ].join("|");
}

function isClosingTransaction(entry) {
  const action = String(entry.action || "").toUpperCase();
  return Number(entry.pnl) !== 0 || ["TARGET", "STOP", "PRE-CLOSE", "ROLL"].some((word) => action.includes(word));
}

function isOpeningTransaction(entry) {
  const action = String(entry.action || "").trim().toUpperCase();
  return !isClosingTransaction(entry) && ["BUY", "SELL SHORT"].includes(action);
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getTransactionDate(value) {
  const date = new Date(value || 0);
  return Number.isNaN(date.getTime()) ? new Date(0) : date;
}

function getTradeLifecycleKey(entry) {
  return [
    normalizeEmail(entry.userEmail || entry.profileEmail || entry.accountEmail || ""),
    entry.commodity || "commodity",
    entry.contract || "contract",
    entry.side || "side",
    entry.step || "step"
  ].join("|");
}

function getTradeIdentityKey(entry = {}) {
  const tradeId = entry.tradeId || entry.id;
  if (!tradeId) return "";
  const openedAt = entry.openedAt ? getTransactionDate(entry.openedAt) : null;
  const openedAtKey = openedAt && openedAt.getTime() ? openedAt.toISOString() : "";
  return openedAtKey
    ? `${tradeId}|${openedAtKey}`
    : `${normalizeEmail(entry.userEmail || "")}|${tradeId}`;
}

function samePaperTradeIdentity(left = {}, right = {}) {
  const leftIdentity = getTradeIdentityKey(left);
  const rightIdentity = getTradeIdentityKey(right);
  if (leftIdentity && rightIdentity && leftIdentity === rightIdentity) return true;

  return (
    normalizeEmail(left.userEmail || "") === normalizeEmail(right.userEmail || "") &&
    String(left.commodity || "") === String(right.commodity || "") &&
    String(left.contract || "") === String(right.contract || "") &&
    String(left.side || "") === String(right.side || "") &&
    String(left.step || "") === String(right.step || "") &&
    String(left.tradeId || "") === String(right.tradeId || "")
  );
}

function closingEntryMatchesOpenTrade(closeEntry = {}, openEntry = {}) {
  if (samePaperTradeIdentity(closeEntry, openEntry)) return true;
  if (!isClosingTransaction(closeEntry) || !isOpeningTransaction(openEntry)) return false;
  const closeTradeId = String(closeEntry.tradeId || "");
  const openTradeId = String(openEntry.tradeId || "");
  if (closeTradeId && openTradeId && closeTradeId !== openTradeId) return false;
  const closeOpenedAt = closeEntry.openedAt ? getTransactionDate(closeEntry.openedAt).getTime() : 0;
  const openOpenedAt = openEntry.openedAt ? getTransactionDate(openEntry.openedAt).getTime() : 0;
  if (closeOpenedAt && openOpenedAt && closeOpenedAt !== openOpenedAt) return false;
  if (normalizeEmail(closeEntry.userEmail || "") !== normalizeEmail(openEntry.userEmail || "")) return false;
  if (String(closeEntry.commodity || "") !== String(openEntry.commodity || "")) return false;
  if (closeEntry.contract && openEntry.contract && String(closeEntry.contract) !== String(openEntry.contract)) return false;
  if (String(closeEntry.side || "") !== String(openEntry.side || "")) return false;
  if (String(closeEntry.step || "") !== String(openEntry.step || "")) return false;
  const closeTime = getTransactionDate(closeEntry.closedAt || closeEntry.time).getTime();
  const openTime = getTransactionDate(openEntry.openedAt || openEntry.time).getTime();
  return Number.isFinite(closeTime) && Number.isFinite(openTime) && closeTime >= openTime;
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
    "gpt-5-5": "openai/gpt-5.5",
    "gpt-5-4": "openrouter/auto",
    perplexity: "perplexity/sonar",
    gemini: "google/gemini-2.5-flash",
    claude: "anthropic/claude-3.5-haiku",
    grok: "x-ai/grok-3-mini"
  };

  return models[modelId] || modelId || "openrouter/auto";
}

function getServerModelRoute(modelId, fallbackRoute = ADVISORY_MODEL_DEFAULT) {
  const id = String(modelId || "").trim();
  return SERVER_MODEL_ROUTES[id] || id || fallbackRoute;
}

function normalizeServerModelSettings(settings = {}) {
  const primaryModelId = SERVER_MODEL_ROUTES[settings.primaryModelId]
    ? settings.primaryModelId
    : SERVER_DEFAULT_PRIMARY_MODEL_ID;
  const criticModelId = settings.criticModelId === false || settings.criticModelId === null || settings.criticModelId === ""
    ? null
    : SERVER_MODEL_ROUTES[settings.criticModelId]
      ? settings.criticModelId
      : SERVER_DEFAULT_CRITIC_MODEL_ID;
  return {
    primaryModelId,
    criticModelId: criticModelId === primaryModelId ? null : criticModelId,
    secondOpinionGateEnabled: settings.secondOpinionGateEnabled !== false,
    secondOpinionModels: normalizeServerSecondOpinionModels(settings.secondOpinionModels)
      .filter((modelId) => modelId !== primaryModelId),
    secondOpinionPrompts: normalizeServerSecondOpinionPrompts(settings.secondOpinionPrompts),
    updatedAt: settings.updatedAt || null,
    updatedBy: settings.updatedBy || ""
  };
}

const ADVISORY_MODEL_DEFAULT = "openai/gpt-5.5";
const CRITIC_MODEL_DEFAULT = "openai/gpt-5-mini";
const SERVER_DEFAULT_PRIMARY_MODEL_ID = "gpt-5-5";
const SERVER_DEFAULT_CRITIC_MODEL_ID = "gpt-5-mini";
const SERVER_SECOND_OPINION_DEFAULT_MODELS = ["perplexity", "gemini", "claude"];
const SERVER_SECOND_OPINION_DEFAULT_PROMPTS = ["technician", "risk-manager", "macro"];
const SERVER_SECOND_OPINION_MODELS = {
  "sonnet-4.6": { name: "Sonnet 4.6", tilt: -1 },
  "haiku-4.5": { name: "Haiku 4.5", tilt: 0 },
  "gpt-5-mini": { name: "GPT-5-mini", tilt: 0 },
  sonnet: { name: "Sonnet 4.6", tilt: -1 },
  haiku: { name: "Haiku 4.5", tilt: 0 },
  gpt5mini: { name: "GPT-5-mini", tilt: 0 },
  "gemini-flash": { name: "Gemini 2.5 Flash", tilt: 1 },
  "gpt-5-5": { name: "ChatGPT 5.5", tilt: 0 },
  "gpt-5-4": { name: "ChatGPT 5.4", tilt: -2 },
  perplexity: { name: "Perplexity", tilt: -4 },
  gemini: { name: "Gemini", tilt: 3 },
  claude: { name: "Claude", tilt: -1 },
  grok: { name: "Grok", tilt: 5 }
};
const SERVER_MODEL_ROUTES = {
  "sonnet-4.6": "anthropic/claude-sonnet-4.6",
  "haiku-4.5": "anthropic/claude-haiku-4.5",
  "gpt-5-mini": "openai/gpt-5-mini",
  "gemini-flash": "google/gemini-2.5-flash",
  "gpt-5-5": "openai/gpt-5.5",
  "gpt-5-4": "openai/gpt-5.4",
  perplexity: "perplexity/sonar",
  gemini: "google/gemini-2.5-flash",
  claude: "anthropic/claude-sonnet-4.6",
  grok: "x-ai/grok-4"
};

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
  const modelSettings = hasRuntimeStore(env)
    ? normalizeServerModelSettings((await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload())).modelSettings)
    : normalizeServerModelSettings();
  const model = getOpenRouterAdvisoryModel(getServerModelRoute(modelSettings.primaryModelId));
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

function hasRuntimeStore(env) {
  return hasTokenUsageStore(env);
}

function parseStoredJson(value, fallback = null) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function firstPresent(...values) {
  return values.find((value) => value !== undefined && value !== null && value !== "");
}

function textOrNull(value) {
  const first = firstPresent(value);
  return first === undefined ? null : String(first);
}

function numberOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function integerOrNull(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(number) : null;
}

function getOpenBrainEventKey(entry = {}) {
  if (entry.id) return String(entry.id);
  if (entry.eventKey) return String(entry.eventKey);
  return [
    entry.type || entry.eventType || "memory",
    entry.time || entry.eventTime || new Date().toISOString(),
    entry.summary || "",
    entry.metadata?.tradeId || entry.tradeId || ""
  ].join("|");
}

function normalizeOpenBrainEvent(entry = {}) {
  const metadata = entry.metadata && typeof entry.metadata === "object" ? entry.metadata : {};
  const tags = Array.isArray(entry.tags) ? entry.tags : Array.isArray(metadata.tags) ? metadata.tags : [];
  const eventTime = textOrNull(firstPresent(entry.time, entry.eventTime, metadata.time, new Date().toISOString()));
  const eventType = textOrNull(firstPresent(entry.type, entry.eventType, metadata.type, "memory"));
  const summary = textOrNull(firstPresent(entry.summary, metadata.summary, "Memory event"));
  const eventKey = getOpenBrainEventKey({ ...entry, time: eventTime, type: eventType, summary });
  const payload = {
    ...entry,
    id: eventKey,
    time: eventTime,
    type: eventType,
    summary,
    tags,
    metadata
  };

  return {
    event_key: eventKey,
    event_time: eventTime,
    event_type: eventType,
    summary,
    user_email: textOrNull(firstPresent(entry.userEmail, entry.email, metadata.userEmail, metadata.email)),
    user_name: textOrNull(firstPresent(entry.userName, entry.name, metadata.userName, metadata.name)),
    commodity: textOrNull(firstPresent(entry.commodity, metadata.commodity)),
    source: textOrNull(firstPresent(entry.source, metadata.source)),
    tags_json: JSON.stringify(tags),
    metadata_json: JSON.stringify({ ...metadata, payload }),
    updated_at: new Date().toISOString()
  };
}

function getEntryTime(entry = {}) {
  return textOrNull(firstPresent(
    entry.time,
    entry.transactionTime,
    entry.openedAt,
    entry.closedAt,
    entry.sentAt,
    new Date().toISOString()
  ));
}

const TRANSACTION_TABLES = new Set(["paper_transactions", "actual_transactions"]);
const TRADE_TRANSACTION_TABLE = "trade_transactions";
const PAPER_TRADE_MODE = "P";
const REAL_TRADE_MODE = "R";

function assertTransactionTable(table) {
  if (!TRANSACTION_TABLES.has(table)) {
    throw new Error("Invalid transaction table");
  }
  return table;
}

function normalizeTradeMode(value, fallback = PAPER_TRADE_MODE) {
  const mode = String(value || fallback || PAPER_TRADE_MODE).trim().toUpperCase();
  return mode === REAL_TRADE_MODE ? REAL_TRADE_MODE : PAPER_TRADE_MODE;
}

function normalizeD1Transaction(entry = {}, fallbackTradeMode = PAPER_TRADE_MODE) {
  const transactionKey = getTransactionKey(entry);
  const tradeMode = normalizeTradeMode(firstPresent(entry.tradeMode, entry.trade_mode, entry.mode), fallbackTradeMode);
  const payloadEntry = { ...entry, sharedKey: transactionKey, tradeMode };
  const now = new Date().toISOString();

  return {
    transaction_key: transactionKey,
    trade_mode: tradeMode,
    trade_id: textOrNull(firstPresent(entry.tradeId, entry.id)),
    user_email: textOrNull(firstPresent(entry.userEmail, entry.profileEmail, entry.accountEmail, entry.email)),
    commodity: textOrNull(entry.commodity),
    commodity_name: textOrNull(entry.commodityName),
    action: textOrNull(entry.action),
    side: textOrNull(entry.side),
    step: integerOrNull(entry.step),
    contract: textOrNull(entry.contract),
    price: numberOrNull(entry.price),
    entry_price: numberOrNull(firstPresent(entry.entryPrice, entry.actualEntry, entry.price)),
    target_entry_price: numberOrNull(entry.targetEntryPrice),
    target_price: numberOrNull(firstPresent(entry.targetPrice, entry.targetExitPrice)),
    stop_price: numberOrNull(entry.stopPrice),
    exit_price: numberOrNull(firstPresent(entry.exitPrice, entry.actualExit)),
    committed: numberOrNull(firstPresent(entry.committed, entry.capital, entry.marginRequirement)),
    capital: numberOrNull(firstPresent(entry.capital, entry.marginRequirement, entry.committed)),
    gross_pnl: numberOrNull(entry.grossPnl),
    net_pnl: numberOrNull(firstPresent(entry.netPnl, entry.pnl)),
    pnl: numberOrNull(entry.pnl),
    opened_at: textOrNull(entry.openedAt),
    closed_at: textOrNull(entry.closedAt),
    transaction_time: getEntryTime(entry),
    payload_json: JSON.stringify(payloadEntry),
    updated_at: now
  };
}

async function upsertTransactionRows(env, table, entries = []) {
  assertTransactionTable(table);

  for (const entry of entries) {
    const row = normalizeD1Transaction(entry);
    await env.DB.prepare(`
      INSERT INTO ${table} (
        transaction_key,
        trade_id,
        user_email,
        commodity,
        commodity_name,
        action,
        side,
        step,
        contract,
        price,
        entry_price,
        target_entry_price,
        target_price,
        stop_price,
        exit_price,
        committed,
        capital,
        gross_pnl,
        net_pnl,
        pnl,
        opened_at,
        closed_at,
        transaction_time,
        payload_json,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(transaction_key) DO UPDATE SET
        trade_id = excluded.trade_id,
        user_email = excluded.user_email,
        commodity = excluded.commodity,
        commodity_name = excluded.commodity_name,
        action = excluded.action,
        side = excluded.side,
        step = excluded.step,
        contract = excluded.contract,
        price = excluded.price,
        entry_price = excluded.entry_price,
        target_entry_price = excluded.target_entry_price,
        target_price = excluded.target_price,
        stop_price = excluded.stop_price,
        exit_price = excluded.exit_price,
        committed = excluded.committed,
        capital = excluded.capital,
        gross_pnl = excluded.gross_pnl,
        net_pnl = excluded.net_pnl,
        pnl = excluded.pnl,
        opened_at = excluded.opened_at,
        closed_at = excluded.closed_at,
        transaction_time = excluded.transaction_time,
        payload_json = excluded.payload_json,
        updated_at = excluded.updated_at
    `).bind(
      row.transaction_key,
      row.trade_id,
      row.user_email,
      row.commodity,
      row.commodity_name,
      row.action,
      row.side,
      row.step,
      row.contract,
      row.price,
      row.entry_price,
      row.target_entry_price,
      row.target_price,
      row.stop_price,
      row.exit_price,
      row.committed,
      row.capital,
      row.gross_pnl,
      row.net_pnl,
      row.pnl,
      row.opened_at,
      row.closed_at,
      row.transaction_time,
      row.payload_json,
      row.updated_at
    ).run();
  }
}

async function loadTransactionPayloadD1(env, table, source) {
  assertTransactionTable(table);
  const result = await env.DB.prepare(`
    SELECT payload_json
    FROM ${table}
    ORDER BY transaction_time DESC
  `).all();

  return {
    generatedAt: new Date().toISOString(),
    source,
    transactions: getResults(result)
      .map((row) => parseStoredJson(row.payload_json))
      .filter(Boolean)
  };
}

async function replaceTransactionsD1(env, table, transactions = []) {
  assertTransactionTable(table);
  await env.DB.prepare(`DELETE FROM ${table}`).run();
  await upsertTransactionRows(env, table, transactions);
}

async function upsertUnifiedTransactionRows(env, entries = [], tradeMode = PAPER_TRADE_MODE) {
  await ensureTradeTransactionsTable(env);
  const normalizedMode = normalizeTradeMode(tradeMode);

  for (const entry of entries) {
    const row = normalizeD1Transaction(entry, normalizedMode);
    await env.DB.prepare(`
      INSERT INTO ${TRADE_TRANSACTION_TABLE} (
        transaction_key,
        trade_mode,
        trade_id,
        user_email,
        commodity,
        commodity_name,
        action,
        side,
        step,
        contract,
        price,
        entry_price,
        target_entry_price,
        target_price,
        stop_price,
        exit_price,
        committed,
        capital,
        gross_pnl,
        net_pnl,
        pnl,
        opened_at,
        closed_at,
        transaction_time,
        payload_json,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(transaction_key) DO UPDATE SET
        trade_mode = excluded.trade_mode,
        trade_id = excluded.trade_id,
        user_email = excluded.user_email,
        commodity = excluded.commodity,
        commodity_name = excluded.commodity_name,
        action = excluded.action,
        side = excluded.side,
        step = excluded.step,
        contract = excluded.contract,
        price = excluded.price,
        entry_price = excluded.entry_price,
        target_entry_price = excluded.target_entry_price,
        target_price = excluded.target_price,
        stop_price = excluded.stop_price,
        exit_price = excluded.exit_price,
        committed = excluded.committed,
        capital = excluded.capital,
        gross_pnl = excluded.gross_pnl,
        net_pnl = excluded.net_pnl,
        pnl = excluded.pnl,
        opened_at = excluded.opened_at,
        closed_at = excluded.closed_at,
        transaction_time = excluded.transaction_time,
        payload_json = excluded.payload_json,
        updated_at = excluded.updated_at
    `).bind(
      row.transaction_key,
      row.trade_mode,
      row.trade_id,
      row.user_email,
      row.commodity,
      row.commodity_name,
      row.action,
      row.side,
      row.step,
      row.contract,
      row.price,
      row.entry_price,
      row.target_entry_price,
      row.target_price,
      row.stop_price,
      row.exit_price,
      row.committed,
      row.capital,
      row.gross_pnl,
      row.net_pnl,
      row.pnl,
      row.opened_at,
      row.closed_at,
      row.transaction_time,
      row.payload_json,
      row.updated_at
    ).run();
  }
}

async function loadUnifiedTransactionPayloadD1(env, tradeMode, source) {
  await ensureTradeTransactionsTable(env);
  const normalizedMode = normalizeTradeMode(tradeMode);
  await seedUnifiedTransactionsFromLegacyTable(env, normalizedMode);
  const result = await env.DB.prepare(`
    SELECT payload_json
    FROM ${TRADE_TRANSACTION_TABLE}
    WHERE trade_mode = ?
    ORDER BY transaction_time DESC
  `).bind(normalizedMode).all();

  return {
    generatedAt: new Date().toISOString(),
    source,
    storage: "d1",
    tradeMode: normalizedMode,
    transactions: getResults(result)
      .map((row) => parseStoredJson(row.payload_json))
      .filter(Boolean)
      .map((entry) => ({ ...entry, tradeMode: normalizeTradeMode(entry.tradeMode, normalizedMode) }))
  };
}

async function seedUnifiedTransactionsFromLegacyTable(env, tradeMode) {
  const normalizedMode = normalizeTradeMode(tradeMode);
  const legacyTable = normalizedMode === REAL_TRADE_MODE ? "actual_transactions" : "paper_transactions";
  const existing = await env.DB.prepare(`
    SELECT COUNT(*) AS count
    FROM ${TRADE_TRANSACTION_TABLE}
    WHERE trade_mode = ?
  `).bind(normalizedMode).first();

  if (Number(existing?.count || 0) > 0) return;

  try {
    const legacy = await env.DB.prepare(`
      SELECT payload_json
      FROM ${legacyTable}
      ORDER BY transaction_time DESC
    `).all();
    const entries = getResults(legacy)
      .map((row) => parseStoredJson(row.payload_json))
      .filter(Boolean)
      .map((entry) => ({ ...entry, tradeMode: normalizedMode }));

    if (entries.length) {
      await upsertUnifiedTransactionRows(env, entries, normalizedMode);
    }
  } catch (error) {
    // Legacy tables may not exist in fresh D1 environments.
  }
}

async function replaceUnifiedTransactionsD1(env, tradeMode, transactions = []) {
  await ensureTradeTransactionsTable(env);
  const normalizedMode = normalizeTradeMode(tradeMode);
  await env.DB.prepare(`DELETE FROM ${TRADE_TRANSACTION_TABLE} WHERE trade_mode = ?`).bind(normalizedMode).run();
  await upsertUnifiedTransactionRows(env, transactions, normalizedMode);
}

async function ensureOpenBrainEventsTable(env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS open_brain_events (
      event_key TEXT PRIMARY KEY,
      event_time TEXT NOT NULL,
      event_type TEXT NOT NULL,
      summary TEXT NOT NULL,
      user_email TEXT,
      user_name TEXT,
      commodity TEXT,
      source TEXT,
      tags_json TEXT NOT NULL DEFAULT '[]',
      metadata_json TEXT NOT NULL DEFAULT '{}',
      updated_at TEXT NOT NULL
    )
  `).run();
  await env.DB.prepare(`CREATE INDEX IF NOT EXISTS idx_open_brain_events_time ON open_brain_events (event_time DESC)`).run();
  await env.DB.prepare(`CREATE INDEX IF NOT EXISTS idx_open_brain_events_type ON open_brain_events (event_type, event_time DESC)`).run();
  await env.DB.prepare(`CREATE INDEX IF NOT EXISTS idx_open_brain_events_user ON open_brain_events (user_email, event_time DESC)`).run();
  await env.DB.prepare(`CREATE INDEX IF NOT EXISTS idx_open_brain_events_commodity ON open_brain_events (commodity, event_time DESC)`).run();
}

async function upsertOpenBrainEventsD1(env, events = []) {
  if (!events.length) return 0;
  await ensureOpenBrainEventsTable(env);
  let stored = 0;
  for (const event of events) {
    const row = normalizeOpenBrainEvent(event);
    await env.DB.prepare(`
      INSERT INTO open_brain_events (
        event_key,
        event_time,
        event_type,
        summary,
        user_email,
        user_name,
        commodity,
        source,
        tags_json,
        metadata_json,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(event_key) DO UPDATE SET
        event_time = excluded.event_time,
        event_type = excluded.event_type,
        summary = excluded.summary,
        user_email = excluded.user_email,
        user_name = excluded.user_name,
        commodity = excluded.commodity,
        source = excluded.source,
        tags_json = excluded.tags_json,
        metadata_json = excluded.metadata_json,
        updated_at = excluded.updated_at
    `).bind(
      row.event_key,
      row.event_time,
      row.event_type,
      row.summary,
      row.user_email,
      row.user_name,
      row.commodity,
      row.source,
      row.tags_json,
      row.metadata_json,
      row.updated_at
    ).run();
    stored += 1;
  }
  return stored;
}

async function loadOpenBrainEventsD1(env, limit = OPEN_BRAIN_EVENT_LIMIT) {
  await ensureOpenBrainEventsTable(env);
  const boundedLimit = clamp(Math.round(Number(limit) || OPEN_BRAIN_EVENT_LIMIT), 1, 2000);
  const result = await env.DB.prepare(`
    SELECT event_key, event_time, event_type, summary, user_email, user_name, commodity, source, tags_json, metadata_json
    FROM open_brain_events
    ORDER BY event_time DESC
    LIMIT ?
  `).bind(boundedLimit).all();
  return {
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-open-brain-events",
    events: getResults(result).map((row) => {
      const metadata = parseStoredJson(row.metadata_json, {});
      const payload = metadata?.payload && typeof metadata.payload === "object" ? metadata.payload : {};
      return {
        ...payload,
        id: row.event_key,
        time: row.event_time,
        type: row.event_type,
        summary: row.summary,
        userEmail: row.user_email || payload.userEmail || "",
        userName: row.user_name || payload.userName || "",
        commodity: row.commodity || payload.commodity || "",
        source: row.source || payload.source || "",
        tags: parseStoredJson(row.tags_json, payload.tags || []),
        metadata
      };
    })
  };
}

async function ensureTradeTransactionsTable(env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS ${TRADE_TRANSACTION_TABLE} (
      transaction_key TEXT PRIMARY KEY,
      trade_mode TEXT NOT NULL DEFAULT 'P',
      trade_id TEXT,
      user_email TEXT,
      commodity TEXT,
      commodity_name TEXT,
      action TEXT,
      side TEXT,
      step INTEGER,
      contract TEXT,
      price REAL,
      entry_price REAL,
      target_entry_price REAL,
      target_price REAL,
      stop_price REAL,
      exit_price REAL,
      committed REAL,
      capital REAL,
      gross_pnl REAL,
      net_pnl REAL,
      pnl REAL,
      opened_at TEXT,
      closed_at TEXT,
      transaction_time TEXT NOT NULL,
      payload_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `).run();
  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_trade_transactions_mode_time
    ON ${TRADE_TRANSACTION_TABLE} (trade_mode, transaction_time DESC)
  `).run();
  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_trade_transactions_mode_user
    ON ${TRADE_TRANSACTION_TABLE} (trade_mode, user_email, transaction_time DESC)
  `).run();
  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_trade_transactions_mode_commodity
    ON ${TRADE_TRANSACTION_TABLE} (trade_mode, commodity, transaction_time DESC)
  `).run();
}

async function recordOpenBrainServerEvent(env, type, summary, metadata = {}) {
  if (!hasRuntimeStore(env)) return null;
  const event = {
    id: metadata.id || `srv-memory-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    time: metadata.time || new Date().toISOString(),
    type,
    summary,
    tags: metadata.tags || [],
    metadata
  };
  await upsertOpenBrainEventsD1(env, [event]);
  return event;
}

function normalizeD1AdvisorySnapshot(entry = {}) {
  const snapshot = normalizeAdvisorySnapshot(entry);
  if (!snapshot) return null;

  const snapshotKey = getAdvisorySnapshotKey(snapshot);
  const payloadEntry = { ...snapshot, snapshotKey };
  const now = new Date().toISOString();

  return {
    snapshot_key: snapshotKey,
    snapshot_time: textOrNull(snapshot.time || now),
    commodity: textOrNull(snapshot.commodity),
    commodity_name: textOrNull(snapshot.commodityName),
    price: numberOrNull(snapshot.price),
    conviction: numberOrNull(snapshot.conviction),
    llm_score: numberOrNull(firstPresent(snapshot.llmScore, snapshot.llm_score)),
    local_score: numberOrNull(firstPresent(snapshot.localScore, snapshot.local_score, snapshot.conviction)),
    tone: textOrNull(snapshot.tone),
    label: textOrNull(snapshot.label),
    action: textOrNull(snapshot.action),
    payload_json: JSON.stringify(payloadEntry),
    updated_at: now
  };
}

async function upsertAdvisorySnapshotsD1(env, snapshots = []) {
  for (const snapshot of snapshots) {
    const row = normalizeD1AdvisorySnapshot(snapshot);
    if (!row) continue;

    await env.DB.prepare(`
      INSERT INTO advisory_snapshots (
        snapshot_key,
        snapshot_time,
        commodity,
        commodity_name,
        price,
        conviction,
        llm_score,
        local_score,
        tone,
        label,
        action,
        payload_json,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(snapshot_key) DO UPDATE SET
        snapshot_time = excluded.snapshot_time,
        commodity = excluded.commodity,
        commodity_name = excluded.commodity_name,
        price = excluded.price,
        conviction = excluded.conviction,
        llm_score = excluded.llm_score,
        local_score = excluded.local_score,
        tone = excluded.tone,
        label = excluded.label,
        action = excluded.action,
        payload_json = excluded.payload_json,
        updated_at = excluded.updated_at
    `).bind(
      row.snapshot_key,
      row.snapshot_time,
      row.commodity,
      row.commodity_name,
      row.price,
      row.conviction,
      row.llm_score,
      row.local_score,
      row.tone,
      row.label,
      row.action,
      row.payload_json,
      row.updated_at
    ).run();
  }
}

async function loadAdvisoryPayloadD1(env) {
  const result = await env.DB.prepare(`
    SELECT payload_json
    FROM advisory_snapshots
    ORDER BY snapshot_time DESC
    LIMIT ?
  `).bind(MAX_ADVISORY_SNAPSHOTS).all();

  return {
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-advisory-snapshots",
    snapshots: getResults(result)
      .map((row) => parseStoredJson(row.payload_json))
      .filter(Boolean)
  };
}

function getMicroPredictionKey(entry = {}) {
  if (entry.predictionKey) return entry.predictionKey;
  const horizon = Number(entry.horizonSeconds) || 60;
  const time = new Date(entry.time || Date.now()).getTime();
  const bucket = Number.isFinite(time) ? Math.floor(time / 10000) : Date.now();
  return [
    entry.commodity || "commodity",
    horizon,
    bucket,
    Number(entry.price || 0).toFixed(4)
  ].join("|");
}

function normalizeMicroPrediction(entry = {}) {
  const price = Number(entry.price);
  const score = Number(entry.score);
  const horizonSeconds = Number(entry.horizonSeconds || entry.horizon_seconds || 60);
  if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(score) || !Number.isFinite(horizonSeconds)) return null;

  const predictedTone = ["long", "short", "flat", "wait"].includes(entry.predictedTone)
    ? entry.predictedTone
    : score <= -6 ? "short" : score >= 6 ? "long" : "flat";
  const predictionKey = getMicroPredictionKey({ ...entry, horizonSeconds, predictedTone });
  const payload = {
    ...entry,
    predictionKey,
    horizonSeconds,
    predictedTone,
    time: entry.time || new Date().toISOString()
  };

  return {
    prediction_key: predictionKey,
    prediction_time: textOrNull(payload.time),
    commodity: textOrNull(entry.commodity || "oil"),
    price: numberOrNull(price),
    horizon_seconds: integerOrNull(horizonSeconds),
    score: numberOrNull(score),
    probability_up: numberOrNull(firstPresent(entry.probabilityUp, entry.probability_up)),
    probability_down: numberOrNull(firstPresent(entry.probabilityDown, entry.probability_down)),
    predicted_tone: textOrNull(predictedTone),
    short_trigger: entry.shortTrigger ? 1 : 0,
    long_trigger: entry.longTrigger ? 1 : 0,
    long_invalidated: entry.longInvalidated ? 1 : 0,
    payload_json: JSON.stringify(payload),
    updated_at: new Date().toISOString()
  };
}

async function upsertMicroPredictionsD1(env, predictions = []) {
  let stored = 0;
  for (const prediction of predictions) {
    const row = normalizeMicroPrediction(prediction);
    if (!row) continue;

    await env.DB.prepare(`
      INSERT INTO micro_predictions (
        prediction_key,
        prediction_time,
        commodity,
        price,
        horizon_seconds,
        score,
        probability_up,
        probability_down,
        predicted_tone,
        short_trigger,
        long_trigger,
        long_invalidated,
        payload_json,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(prediction_key) DO UPDATE SET
        prediction_time = excluded.prediction_time,
        commodity = excluded.commodity,
        price = excluded.price,
        horizon_seconds = excluded.horizon_seconds,
        score = excluded.score,
        probability_up = excluded.probability_up,
        probability_down = excluded.probability_down,
        predicted_tone = excluded.predicted_tone,
        short_trigger = excluded.short_trigger,
        long_trigger = excluded.long_trigger,
        long_invalidated = excluded.long_invalidated,
        payload_json = excluded.payload_json,
        updated_at = excluded.updated_at
    `).bind(
      row.prediction_key,
      row.prediction_time,
      row.commodity,
      row.price,
      row.horizon_seconds,
      row.score,
      row.probability_up,
      row.probability_down,
      row.predicted_tone,
      row.short_trigger,
      row.long_trigger,
      row.long_invalidated,
      row.payload_json,
      row.updated_at
    ).run();
    stored += 1;
  }
  return stored;
}

async function evaluateMicroPredictionsD1(env) {
  await env.DB.prepare(`
    UPDATE micro_predictions
    SET
      evaluated_at = (
        SELECT MIN(next.prediction_time)
        FROM micro_predictions next
        WHERE next.commodity = micro_predictions.commodity
          AND strftime('%s', next.prediction_time) >= strftime('%s', micro_predictions.prediction_time) + micro_predictions.horizon_seconds
      ),
      future_price = (
        SELECT next.price
        FROM micro_predictions next
        WHERE next.commodity = micro_predictions.commodity
          AND strftime('%s', next.prediction_time) >= strftime('%s', micro_predictions.prediction_time) + micro_predictions.horizon_seconds
        ORDER BY next.prediction_time ASC
        LIMIT 1
      ),
      updated_at = ?
    WHERE evaluated_at IS NULL
  `).bind(new Date().toISOString()).run();

  await env.DB.prepare(`
    UPDATE micro_predictions
    SET
      move_bps = CASE
        WHEN price > 0 AND future_price IS NOT NULL THEN ((future_price - price) / price) * 10000
        ELSE move_bps
      END,
      correct = CASE
        WHEN future_price IS NULL THEN correct
        WHEN predicted_tone = 'long' AND ((future_price - price) / price) * 10000 > 0.5 THEN 1
        WHEN predicted_tone = 'short' AND ((future_price - price) / price) * 10000 < -0.5 THEN 1
        WHEN predicted_tone IN ('flat', 'wait') AND abs(((future_price - price) / price) * 10000) <= 2 THEN 1
        ELSE 0
      END,
      updated_at = ?
    WHERE evaluated_at IS NOT NULL
      AND future_price IS NOT NULL
      AND correct IS NULL
  `).bind(new Date().toISOString()).run();
}

async function loadMicroPredictionPayloadD1(env, limit = 500) {
  await evaluateMicroPredictionsD1(env);
  const result = await env.DB.prepare(`
    SELECT payload_json, evaluated_at, future_price, move_bps, correct
    FROM micro_predictions
    ORDER BY prediction_time DESC
    LIMIT ?
  `).bind(Math.max(1, Math.min(Number(limit) || 500, 2000))).all();

  const predictions = getResults(result).map((row) => {
    const payload = parseStoredJson(row.payload_json);
    if (!payload) return null;
    return {
      ...payload,
      evaluatedAt: row.evaluated_at,
      futurePrice: row.future_price,
      moveBps: row.move_bps,
      correct: row.correct === null || row.correct === undefined ? null : Boolean(row.correct)
    };
  }).filter(Boolean);

  return {
    generatedAt: new Date().toISOString(),
    source: MICRO_PREDICTION_SOURCE,
    storage: "d1",
    predictions
  };
}

async function getRuntimeDocumentD1(env, documentKey, fallbackPayload) {
  const row = await env.DB.prepare(`
    SELECT payload_json
    FROM runtime_documents
    WHERE document_key = ?
  `).bind(documentKey).first();

  return parseStoredJson(row?.payload_json, fallbackPayload);
}

async function saveRuntimeDocumentD1(env, documentKey, payload) {
  await env.DB.prepare(`
    INSERT INTO runtime_documents (document_key, payload_json, updated_at)
    VALUES (?, ?, ?)
    ON CONFLICT(document_key) DO UPDATE SET
      payload_json = excluded.payload_json,
      updated_at = excluded.updated_at
  `).bind(documentKey, JSON.stringify(payload), new Date().toISOString()).run();

  return { stored: "d1", key: documentKey };
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
    modelSettings: normalizeServerModelSettings(),
    appState: {},
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

const SETTINGS_DOCUMENT_KEY = "settings";
const PAPER_LEDGER_SOURCE = "cloudflare-d1-paper-trading-ledger";
const ACTUAL_LEDGER_SOURCE = "cloudflare-d1-actual-trade-ledger";
const MICRO_PREDICTION_SOURCE = "cloudflare-d1-micro-predictions";

function getEnabledPaperTraderEmails(env) {
  return new Set(String(env.PAPER_TRADER_EMAILS || "")
    .split(",")
    .map(normalizeEmail)
    .filter(Boolean));
}

function normalizeCommodityIds(ids = ["oil"], fallback = ["oil"]) {
  const values = Array.isArray(ids) ? ids : [ids];
  const normalized = values
    .map((id) => String(id || "").trim().toLowerCase())
    .filter((id) => SERVER_COMMODITIES[id]);
  if (normalized.length) return [...new Set(normalized)];
  return Array.isArray(fallback) ? fallback.filter((id) => SERVER_COMMODITIES[id]) : [];
}

function normalizeServerCommodityId(id) {
  const normalized = String(id || "").trim().toLowerCase();
  return SERVER_COMMODITIES[normalized] ? normalized : "";
}

function normalizeMarketTime(value, fallback) {
  const raw = String(value || "").trim();
  return /^\d{2}:\d{2}$/.test(raw) ? raw : fallback;
}

function normalizeMarketCalendarSettings(explicit = {}) {
  return {
    overnightRiskMode: explicit.overnightRiskMode === "flatten-before-close" ? "flatten-before-close" : "accept",
    marketTimeZone: String(explicit.marketTimeZone || DEFAULT_MARKET_CALENDAR.marketTimeZone).trim(),
    weeklyOpenDay: clamp(Math.round(Number(explicit.weeklyOpenDay ?? DEFAULT_MARKET_CALENDAR.weeklyOpenDay)), 0, 6),
    weeklyOpenTime: normalizeMarketTime(explicit.weeklyOpenTime, DEFAULT_MARKET_CALENDAR.weeklyOpenTime),
    weeklyCloseDay: clamp(Math.round(Number(explicit.weeklyCloseDay ?? DEFAULT_MARKET_CALENDAR.weeklyCloseDay)), 0, 6),
    weeklyCloseTime: normalizeMarketTime(explicit.weeklyCloseTime, DEFAULT_MARKET_CALENDAR.weeklyCloseTime),
    dailyCloseTime: normalizeMarketTime(explicit.dailyCloseTime, DEFAULT_MARKET_CALENDAR.dailyCloseTime),
    dailyReopenTime: normalizeMarketTime(explicit.dailyReopenTime, DEFAULT_MARKET_CALENDAR.dailyReopenTime),
    closeBeforeMinutes: clamp(Math.round(Number(explicit.closeBeforeMinutes) || DEFAULT_MARKET_CALENDAR.closeBeforeMinutes), 1, 240),
    marketCalendarNotes: String(explicit.marketCalendarNotes || DEFAULT_MARKET_CALENDAR.marketCalendarNotes).trim()
  };
}

function normalizeServerSecondOpinionModels(value) {
  const values = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value.split(",")
      : [];
  const normalized = values
    .map((id) => String(id || "").trim())
    .filter((id) => SERVER_SECOND_OPINION_MODELS[id]);
  return normalized.length ? [...new Set(normalized)] : [...SERVER_SECOND_OPINION_DEFAULT_MODELS];
}

function normalizeServerSecondOpinionPrompts(value) {
  const values = Array.isArray(value)
    ? value
    : typeof value === "string"
      ? value.split(",")
      : [];
  const normalized = values
    .map((id) => String(id || "").trim())
    .filter((id) => id);
  return normalized.length ? [...new Set(normalized)] : [...SERVER_SECOND_OPINION_DEFAULT_PROMPTS];
}

function getUserPaperSchedulerSettings(user = {}, env, modelSettings = normalizeServerModelSettings()) {
  const email = normalizeEmail(user.email);
  const explicit = user.paperTrading && typeof user.paperTrading === "object"
    ? user.paperTrading
    : {};
  const enabledEmails = getEnabledPaperTraderEmails(env);
  const enabled = typeof explicit.enabled === "boolean"
    ? explicit.enabled
    : Boolean(user.paperTradingEnabled || enabledEmails.has(email));

  return {
    enabled,
    commodities: Object.prototype.hasOwnProperty.call(explicit, "commodities")
      ? normalizeCommodityIds(explicit.commodities, [])
      : normalizeCommodityIds(user.commodities || ["oil"]),
    riskPct: clamp(Number(explicit.riskPct ?? user.paperRiskPct ?? PAPER_SCHEDULER_DEFAULT_RISK_PCT) || PAPER_SCHEDULER_DEFAULT_RISK_PCT, 0.1, 25),
    maxOpenTrades: clamp(Math.round(Number(explicit.maxOpenTrades ?? PAPER_SCHEDULER_DEFAULT_MAX_OPEN) || PAPER_SCHEDULER_DEFAULT_MAX_OPEN), 1, 10),
    entryThreshold: clamp(Math.round(Number(explicit.entryThreshold ?? PAPER_SCHEDULER_DEFAULT_THRESHOLD) || PAPER_SCHEDULER_DEFAULT_THRESHOLD), 1, 100),
    minEvaluationMs: Math.max(60000, Number(explicit.minEvaluationMs) || PAPER_SCHEDULER_MIN_EVALUATION_MS),
    primaryModelId: modelSettings.primaryModelId,
    criticModelId: modelSettings.criticModelId,
    secondOpinionGateEnabled: explicit.secondOpinionGateEnabled ?? modelSettings.secondOpinionGateEnabled,
    secondOpinionModels: Object.prototype.hasOwnProperty.call(explicit, "secondOpinionModels")
      ? normalizeServerSecondOpinionModels(explicit.secondOpinionModels)
      : normalizeServerSecondOpinionModels(modelSettings.secondOpinionModels),
    secondOpinionPrompts: Object.prototype.hasOwnProperty.call(explicit, "secondOpinionPrompts")
      ? normalizeServerSecondOpinionPrompts(explicit.secondOpinionPrompts)
      : normalizeServerSecondOpinionPrompts(modelSettings.secondOpinionPrompts),
    ...normalizeMarketCalendarSettings(explicit),
    lastEvaluationAt: explicit.lastEvaluationAt || null,
    lastDecision: explicit.lastDecision || "Not evaluated yet"
  };
}

function updateUserPaperSchedulerSettings(user, nextSettings = {}) {
  user.paperTrading = {
    ...(user.paperTrading && typeof user.paperTrading === "object" ? user.paperTrading : {}),
    ...nextSettings
  };
}

function getTransactionUserEmail(entry = {}) {
  return normalizeEmail(entry.userEmail || entry.profileEmail || entry.accountEmail || entry.email);
}

function getTransactionsForUser(transactions = [], userEmail) {
  const email = normalizeEmail(userEmail);
  return transactions.filter((entry) => getTransactionUserEmail(entry) === email);
}

function getOpenPaperTradesForUser(transactions = [], userEmail) {
  const active = new Map();
  getTransactionsForUser(transactions, userEmail)
    .slice()
    .sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time))
    .forEach((entry) => {
      const identityKey = getTradeIdentityKey(entry);
      const lifecycleKey = getTradeLifecycleKey(entry);
      const key = identityKey || lifecycleKey;
      if (!key) return;
      if (isOpeningTransaction(entry)) active.set(key, entry);
      if (isClosingTransaction(entry)) {
        if (identityKey) active.delete(identityKey);
        active.delete(lifecycleKey);
        Array.from(active.entries()).forEach(([activeKey, activeEntry]) => {
          if (closingEntryMatchesOpenTrade(entry, activeEntry)) active.delete(activeKey);
        });
      }
    });
  return Array.from(active.values());
}

function getEnabledCommodityOpenTrades(openTrades = [], enabledCommodities = []) {
  const enabled = new Set((Array.isArray(enabledCommodities) ? enabledCommodities : []).map(normalizeServerCommodityId).filter(Boolean));
  if (!enabled.size) return openTrades;
  return openTrades.filter((trade) => enabled.has(normalizeServerCommodityId(trade.commodity)));
}

function shouldUseExclusiveMartingale(user = {}) {
  const type = String(user.strategy?.type || "").toLowerCase();
  const name = String(user.strategy?.name || "").toLowerCase();
  return type.includes("martingale") || name.includes("martingale");
}

function getServerStrategySettings(user = {}) {
  const strategy = user.strategy && typeof user.strategy === "object" ? user.strategy : {};
  return {
    type: String(strategy.type || "martingale-karpathy"),
    martingaleSteps: clamp(Math.round(Number(strategy.martingaleSteps) || 4), 1, 8),
    karpathyLoop: strategy.karpathyLoop !== false,
    karpathyAutoApply: strategy.karpathyAutoApply !== false,
    regimeAware: strategy.regimeAware !== false,
    flatMaxMartingaleSteps: clamp(Math.round(Number(strategy.flatMaxMartingaleSteps) || 2), 1, 8),
    flatSizeMultiplier: clamp(Number(strategy.flatSizeMultiplier) || 0.5, 0.1, 1),
    flatThresholdBoost: clamp(Math.round(Number(strategy.flatThresholdBoost) || 4), 0, 30),
    flatMinEdgePercent: clamp(Math.round(Number(strategy.flatMinEdgePercent) || 56), 50, 80),
    flatMinVolatilityBps: clamp(Number(strategy.flatMinVolatilityBps) || 0.8, 0, 20),
    trendingMinEdgePercent: clamp(Math.round(Number(strategy.trendingMinEdgePercent) || 58), 50, 85),
    trendingMinVolatilityBps: clamp(Number(strategy.trendingMinVolatilityBps) || 1.2, 0, 20),
    breakoutParticipation: strategy.breakoutParticipation !== false,
    breakoutMinEdgePercent: clamp(Math.round(Number(strategy.breakoutMinEdgePercent) || 55), 50, 80),
    breakoutMinVolatilityBps: clamp(Number(strategy.breakoutMinVolatilityBps) || 0.8, 0, 20),
    breakoutMinMoveBps: clamp(Number(strategy.breakoutMinMoveBps) || 3, 0, 50)
  };
}

function getClosedPaperTradesForUser(transactions = [], userEmail) {
  return getTransactionsForUser(transactions, userEmail)
    .filter(isClosingTransaction)
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));
}

function getNextServerMartingaleStep(transactions = [], userEmail, maxStep = 4) {
  const closed = getClosedPaperTradesForUser(transactions, userEmail);
  let highestLosingStep = 0;
  for (const entry of closed) {
    if (Number(entry.pnl) >= 0) break;
    highestLosingStep = Math.max(highestLosingStep, Number(entry.step) || 1);
  }
  if (!highestLosingStep) return 1;
  return highestLosingStep >= maxStep ? 1 : Math.min(maxStep, highestLosingStep + 1);
}

function getServerLossStreak(closed = []) {
  let streak = 0;
  for (const entry of closed) {
    if (Number(entry.pnl) < 0) streak += 1;
    else break;
  }
  return streak;
}

function getServerKarpathyRecommendation(transactions = [], userEmail, currentThreshold = PAPER_SCHEDULER_DEFAULT_THRESHOLD, strategy = {}) {
  const closed = getClosedPaperTradesForUser(transactions, userEmail);
  const sample = closed.slice(0, 12);
  const wins = sample.filter((entry) => Number(entry.pnl) > 0).length;
  const sampleCount = sample.length;
  const winRate = sampleCount ? wins / sampleCount : 0;
  const netPnl = sample.reduce((total, entry) => total + (Number(entry.pnl) || 0), 0);
  const avgPnl = sampleCount ? netPnl / sampleCount : 0;
  const lossStreak = getServerLossStreak(closed);
  let recommendedThreshold = Number(currentThreshold) || PAPER_SCHEDULER_DEFAULT_THRESHOLD;
  const reasons = [];

  if (!strategy.karpathyLoop) {
    return {
      enabled: false,
      action: "off",
      currentThreshold,
      recommendedThreshold,
      sampleCount,
      winRate,
      avgPnl,
      lossStreak,
      summary: "Karpathy loop is disabled for this user.",
      updatedAt: new Date().toISOString()
    };
  }

  if (sampleCount >= 3) {
    recommendedThreshold = PAPER_SCHEDULER_DEFAULT_THRESHOLD;
    if (winRate < 0.45) {
      recommendedThreshold += 10;
      reasons.push("win rate below 45%");
    } else if (winRate < 0.55) {
      recommendedThreshold += 5;
      reasons.push("win rate below 55%");
    } else if (winRate >= 0.7 && avgPnl > 0) {
      recommendedThreshold -= 5;
      reasons.push("win rate above 70% with positive average P/L");
    }
    if (avgPnl < 0) {
      recommendedThreshold += 3;
      reasons.push("average P/L is negative");
    }
    if (lossStreak) {
      recommendedThreshold += Math.min(lossStreak * 2, 10);
      reasons.push(`${lossStreak} trade loss streak`);
    }
  } else {
    reasons.push("needs at least 3 closed trades before changing threshold");
  }

  recommendedThreshold = clamp(Math.round(recommendedThreshold), 45, 75);
  const delta = recommendedThreshold - currentThreshold;
  const action = sampleCount < 3
    ? "collect"
    : delta > 0 ? "tighten"
      : delta < 0 ? "loosen"
        : "hold";

  return {
    enabled: true,
    action,
    currentThreshold,
    recommendedThreshold,
    delta,
    sampleCount,
    winRate,
    avgPnl,
    netPnl,
    lossStreak,
    autoApply: strategy.karpathyAutoApply === true,
    summary: reasons.length ? `Karpathy coach: ${reasons.join(", ")}.` : "Karpathy coach: threshold is appropriate for recent closed trades.",
    updatedAt: new Date().toISOString()
  };
}

async function getLatestAdvisoryByCommodity(env, commodity) {
  const row = await env.DB.prepare(`
    SELECT payload_json
    FROM advisory_snapshots
    WHERE commodity = ?
    ORDER BY snapshot_time DESC
    LIMIT 1
  `).bind(commodity).first();
  return parseStoredJson(row?.payload_json, null);
}

function getServerCommodityConfig(user = {}, commodity = "oil") {
  const base = SERVER_COMMODITIES[commodity] || SERVER_COMMODITIES.oil;
  const terms = user.commodityTradeTerms && typeof user.commodityTradeTerms === "object"
    ? user.commodityTradeTerms[commodity] || {}
    : {};
  return {
    ...base,
    ...terms,
    id: commodity,
    name: base.name,
    ticker: terms.ticker || base.ticker,
    productId: terms.productId || terms.ticker || base.productId,
    contractMonth: terms.contractMonth || base.contractMonth || "Front month",
    contractExpiresAt: terms.contractExpiresAt || base.contractExpiresAt || "",
    rollBeforeDays: Number.isFinite(Number(terms.rollBeforeDays ?? base.rollBeforeDays))
      ? clamp(Math.round(Number(terms.rollBeforeDays ?? base.rollBeforeDays)), 0, 30)
      : 3
  };
}

async function fetchCoinbaseProductPrice(productId) {
  if (!productId) return null;
  const response = await fetch(`${COINBASE_PRODUCTS_BASE_URL}/${encodeURIComponent(productId)}`, {
    headers: { "Accept": "application/json" }
  });
  if (!response.ok) return null;
  const data = await response.json().catch(() => null);
  const price = Number(data?.price || data?.mid_market_price || data?.approximate_quote_24h);
  return Number.isFinite(price) && price > 0
    ? { price, source: "Coinbase product API", time: new Date().toISOString() }
    : null;
}

function getCoinbaseTickerPrice(data) {
  const bestBid = Number(data?.best_bid);
  const bestAsk = Number(data?.best_ask);
  const lastTrade = Number(data?.trades?.[0]?.price);

  if (Number.isFinite(bestBid) && Number.isFinite(bestAsk) && bestBid > 0 && bestAsk > 0) {
    return {
      price: (bestBid + bestAsk) / 2,
      bestBid,
      bestAsk,
      lastTrade: Number.isFinite(lastTrade) ? lastTrade : null,
      method: "bid_ask_midpoint"
    };
  }

  if (Number.isFinite(lastTrade) && lastTrade > 0) {
    return { price: lastTrade, bestBid: null, bestAsk: null, lastTrade, method: "last_trade" };
  }

  if (Number.isFinite(bestBid) && bestBid > 0) {
    return { price: bestBid, bestBid, bestAsk: null, lastTrade: null, method: "best_bid" };
  }

  if (Number.isFinite(bestAsk) && bestAsk > 0) {
    return { price: bestAsk, bestBid: null, bestAsk, lastTrade: null, method: "best_ask" };
  }

  return null;
}

function getCoinbaseMinimumTradeValue(data, livePrice) {
  const directMinimums = [
    data?.quote_min_size,
    data?.quote_minimum_size,
    data?.min_market_funds,
    data?.minimum_market_funds
  ].map(Number).filter((value) => Number.isFinite(value) && value > 0);

  if (directMinimums.length) return Math.max(...directMinimums);

  const baseMinimums = [
    data?.base_min_size,
    data?.base_increment
  ].map(Number).filter((value) => Number.isFinite(value) && value > 0);

  if (baseMinimums.length) return Math.max(...baseMinimums) * livePrice;
  return livePrice;
}

async function fetchJson(url) {
  const response = await fetch(url, {
    headers: {
      "Accept": "application/json",
      "Cache-Control": "no-cache"
    }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function fetchCoinbasePriceSnapshot(config) {
  const productId = config.productId || config.ticker;
  const fetchedAt = new Date().toISOString();

  try {
    const tickerData = await fetchJson(`${COINBASE_PRODUCTS_BASE_URL.replace("/products", "/market/products")}/${encodeURIComponent(productId)}/ticker?ts=${Date.now()}`);
    const priceData = getCoinbaseTickerPrice(tickerData);

    if (!priceData) {
      throw new Error("No usable ticker price in Coinbase response");
    }

    let minimumTradeValue = priceData.price;
    try {
      const productData = await fetchJson(`${COINBASE_PRODUCTS_BASE_URL}/${encodeURIComponent(productId)}?ts=${Date.now()}`);
      minimumTradeValue = getCoinbaseMinimumTradeValue(productData, priceData.price);
    } catch (_error) {
      minimumTradeValue = priceData.price;
    }

    return {
      id: config.id,
      ticker: config.ticker,
      productId,
      productType: config.productType || "Coinbase futures contract",
      contractMonth: config.contractMonth || "Front month",
      fetchedAt,
      minimumTradeValue,
      ok: true,
      ...priceData
    };
  } catch (error) {
    return {
      id: config.id,
      ticker: config.ticker,
      productId,
      productType: config.productType || "Coinbase futures contract",
      contractMonth: config.contractMonth || "Front month",
      fetchedAt,
      minimumTradeValue: null,
      ok: false,
      price: null,
      error: error.message,
      method: "unavailable"
    };
  }
}

function normalizeStoredPriceSnapshot(row) {
  return parseStoredJson(row?.payload_json, null);
}

function isFreshPriceSnapshot(snapshot) {
  const fetchedAt = getTransactionDate(snapshot?.fetchedAt);
  return Date.now() - fetchedAt.getTime() <= PRICE_SNAPSHOT_MAX_AGE_MS;
}

async function savePriceSnapshot(env, snapshot) {
  const now = new Date().toISOString();
  await env.DB.prepare(`
    INSERT INTO price_snapshots (
      commodity, product_id, ticker, price, best_bid, best_ask, last_trade,
      minimum_trade_value, method, ok, error, fetched_at, source, payload_json, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(commodity) DO UPDATE SET
      product_id = excluded.product_id,
      ticker = excluded.ticker,
      price = excluded.price,
      best_bid = excluded.best_bid,
      best_ask = excluded.best_ask,
      last_trade = excluded.last_trade,
      minimum_trade_value = excluded.minimum_trade_value,
      method = excluded.method,
      ok = excluded.ok,
      error = excluded.error,
      fetched_at = excluded.fetched_at,
      source = excluded.source,
      payload_json = excluded.payload_json,
      updated_at = excluded.updated_at
  `).bind(
    snapshot.id,
    snapshot.productId || null,
    snapshot.ticker || null,
    Number.isFinite(Number(snapshot.price)) ? Number(snapshot.price) : null,
    Number.isFinite(Number(snapshot.bestBid)) ? Number(snapshot.bestBid) : null,
    Number.isFinite(Number(snapshot.bestAsk)) ? Number(snapshot.bestAsk) : null,
    Number.isFinite(Number(snapshot.lastTrade)) ? Number(snapshot.lastTrade) : null,
    Number.isFinite(Number(snapshot.minimumTradeValue)) ? Number(snapshot.minimumTradeValue) : null,
    snapshot.method || null,
    snapshot.ok ? 1 : 0,
    snapshot.error || null,
    snapshot.fetchedAt || now,
    "cloudflare-d1-price-snapshot",
    JSON.stringify(snapshot),
    now
  ).run();
}

async function loadStoredPriceSnapshots(env) {
  const result = await env.DB.prepare(`
    SELECT payload_json
    FROM price_snapshots
  `).all();

  return Object.fromEntries((result.results || [])
    .map(normalizeStoredPriceSnapshot)
    .filter(Boolean)
    .map((snapshot) => [snapshot.id, snapshot]));
}

async function getPriceSnapshots(env, forceRefresh = false) {
  const stored = await loadStoredPriceSnapshots(env);
  const entries = await Promise.all(Object.values(SERVER_COMMODITIES).map(async (commodity) => {
    const existing = stored[commodity.id];
    if (!forceRefresh && existing?.ok && isFreshPriceSnapshot(existing)) return existing;

    const snapshot = await fetchCoinbasePriceSnapshot(commodity);
    if (snapshot.ok || !existing) {
      await savePriceSnapshot(env, snapshot);
      return snapshot;
    }

    return {
      ...existing,
      stale: true,
      refreshError: snapshot.error || "Refresh failed"
    };
  }));

  return {
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-price-snapshots",
    maxAgeSeconds: Math.round(PRICE_SNAPSHOT_MAX_AGE_MS / 1000),
    prices: Object.fromEntries(entries.map((snapshot) => [snapshot.id, snapshot]))
  };
}

async function handlePriceSnapshotsRoute(env, request, origin) {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const url = new URL(request.url);
  const forceRefresh = url.searchParams.get("refresh") === "1" || url.searchParams.get("refresh") === "true";
  const payload = await getPriceSnapshots(env, forceRefresh);
  return jsonResponse(payload, 200, origin);
}

async function getServerMarketPrice(env, user, commodity, advisory = null) {
  const config = getServerCommodityConfig(user, commodity);
  let live = null;
  try {
    const snapshot = await fetchCoinbasePriceSnapshot(config);
    if (snapshot.ok && Number.isFinite(Number(snapshot.price)) && Number(snapshot.price) > 0) {
      await savePriceSnapshot(env, snapshot);
      live = {
        price: Number(snapshot.price),
        source: "Coinbase ticker API",
        time: snapshot.fetchedAt
      };
    } else {
      live = await fetchCoinbaseProductPrice(config.productId);
    }
  } catch (_error) {
    live = null;
  }
  if (live) return live;

  const advisoryPrice = Number(advisory?.price);
  const advisoryTime = getTransactionDate(advisory?.time);
  const advisoryFresh = Date.now() - advisoryTime.getTime() <= PAPER_SCHEDULER_PRICE_STALE_MS;
  if (Number.isFinite(advisoryPrice) && advisoryPrice > 0 && advisoryFresh) {
    return {
      price: advisoryPrice,
      source: "Latest advisory snapshot",
      time: advisoryTime.toISOString()
    };
  }

  const micro = await env.DB.prepare(`
    SELECT price, prediction_time
    FROM micro_predictions
    WHERE commodity = ?
    ORDER BY prediction_time DESC
    LIMIT 1
  `).bind(commodity).first();
  const microPrice = Number(micro?.price);
  const microTime = getTransactionDate(micro?.prediction_time);
  const microFresh = Date.now() - microTime.getTime() <= PAPER_SCHEDULER_PRICE_STALE_MS;
  if (Number.isFinite(microPrice) && microPrice > 0 && microFresh) {
    return {
      price: microPrice,
      source: "Latest micro prediction tick",
      time: microTime.toISOString()
    };
  }

  return null;
}

function getServerSignal(advisory = {}) {
  const tone = ["long", "short", "wait"].includes(advisory?.tone) ? advisory.tone : "wait";
  const conviction = Number(advisory?.conviction ?? advisory?.llmScore ?? advisory?.localScore ?? 0);
  return {
    tone,
    side: tone === "long" || tone === "short" ? tone : null,
    conviction: Number.isFinite(conviction) ? Math.round(conviction) : 0,
    label: advisory?.label || tone
  };
}

function getServerOpinionScore(signal, model, promptIds = []) {
  const promptTilt = promptIds.reduce((total, promptId) => {
    if (promptId === "risk-manager") return total - 3;
    if (promptId === "macro") return total + 1;
    return total;
  }, 0);
  return clamp(Math.round((Number(signal?.conviction) || 0) + (Number(model?.tilt) || 0) + promptTilt), 0, 100);
}

function getServerOpinionTone(signal, score) {
  if (score < 48) return "wait";
  if (signal?.tone === "short") return "short";
  if (signal?.tone === "long") return "long";
  return "wait";
}

function getServerSecondOpinionConsensus(signal, settings = {}) {
  const enabled = settings.secondOpinionGateEnabled !== false;
  const side = signal?.side || null;
  const primaryModelId = settings.primaryModelId || SERVER_DEFAULT_PRIMARY_MODEL_ID;
  const modelIds = normalizeServerSecondOpinionModels(settings.secondOpinionModels)
    .filter((modelId) => modelId !== primaryModelId);
  const promptIds = normalizeServerSecondOpinionPrompts(settings.secondOpinionPrompts);
  const opinions = enabled
    ? modelIds.map((modelId) => {
      const model = SERVER_SECOND_OPINION_MODELS[modelId];
      const score = getServerOpinionScore(signal, model, promptIds);
      const tone = getServerOpinionTone(signal, score);
      return { modelId, modelName: model.name, score, tone };
    })
    : [];
  const counts = opinions.reduce((total, opinion) => {
    total[opinion.tone] = (total[opinion.tone] || 0) + 1;
    return total;
  }, { long: 0, short: 0, wait: 0 });
  const required = opinions.length >= 3 ? Math.max(2, Math.ceil(opinions.length / 2)) : opinions.length;
  const confirmCount = side ? counts[side] || 0 : 0;
  const oppositeSide = side === "long" ? "short" : side === "short" ? "long" : null;
  const oppositeCount = oppositeSide ? counts[oppositeSide] || 0 : 0;
  const waitCount = counts.wait || 0;
  let thresholdBoost = 0;
  let blocksEntry = false;
  let label = enabled ? "Second opinions neutral" : "Second opinion gate off";
  let detail = enabled
    ? "No directional primary advisory for second opinions to gate."
    : "Server-side second opinion gate is disabled for this account.";

  if (!enabled || !opinions.length) {
    return {
      enabled,
      opinions,
      counts,
      required: 0,
      confirmCount: 0,
      thresholdBoost: 0,
      blocksEntry: false,
      label,
      detail: enabled ? "No server-side second-opinion models are selected." : detail
    };
  }

  if (side) {
    if (oppositeCount >= required) {
      blocksEntry = true;
      thresholdBoost = 10;
      label = "Second opinions disagree";
      detail = `${oppositeCount}/${opinions.length} server-side second opinions lean ${oppositeSide}; blocking the ${side} entry.`;
    } else if (waitCount >= required) {
      thresholdBoost = 4;
      label = "Second opinions say wait";
      detail = `${waitCount}/${opinions.length} server-side second opinions say wait; adding a ${thresholdBoost}-point caution buffer instead of blocking the ${side} entry.`;
    } else if (confirmCount < required) {
      blocksEntry = true;
      thresholdBoost = 5;
      label = "Second opinions not confirmed";
      detail = `${confirmCount}/${opinions.length} server-side second opinions confirm ${side}; need ${required}.`;
    } else {
      thresholdBoost = waitCount || oppositeCount ? 3 : 0;
      label = "Second opinions confirm";
      detail = `${confirmCount}/${opinions.length} server-side second opinions confirm ${side}.${thresholdBoost ? " Mixed votes add a small threshold buffer." : ""}`;
    }
  }

  return {
    enabled: true,
    opinions,
    counts,
    required,
    confirmCount,
    thresholdBoost,
    blocksEntry,
    label,
    detail
  };
}

async function getLatestServerMicroPrediction(env, commodity) {
  const row = await env.DB.prepare(`
    SELECT probability_up, probability_down, predicted_tone, short_trigger, long_trigger, payload_json, prediction_time
    FROM micro_predictions
    WHERE commodity = ?
    ORDER BY prediction_time DESC
    LIMIT 1
  `).bind(commodity).first();
  if (!row) return null;
  const payload = parseStoredJson(row.payload_json, {});
  return {
    ready: true,
    probabilityUp: Number(row.probability_up),
    probabilityDown: Number(row.probability_down),
    predictedTone: row.predicted_tone,
    shortTrigger: Boolean(row.short_trigger),
    longTrigger: Boolean(row.long_trigger),
    ret10: Number(payload.ret10),
    ret30: Number(payload.ret30),
    ret60: Number(payload.ret60),
    ret180: Number(payload.ret180),
    vwapDistance: Number(payload.vwapDistance),
    volatility: Number(payload.volatility),
    predictionTime: row.prediction_time
  };
}

async function getServerAdvisoryBreakoutContext(env, commodity, strategy) {
  if (!strategy.breakoutParticipation) return null;
  const result = await env.DB.prepare(`
    SELECT payload_json
    FROM advisory_snapshots
    WHERE commodity = ?
    ORDER BY snapshot_time DESC
    LIMIT 80
  `).bind(commodity).all();
  const snapshots = getResults(result)
    .map((row) => parseStoredJson(row.payload_json))
    .filter((entry) => entry && Number.isFinite(Number(entry.price)) && ["long", "short", "wait"].includes(entry.tone));

  if (snapshots.length < 6) return null;

  const latest = snapshots[0];
  const oldest = snapshots[snapshots.length - 1];
  const latestPrice = Number(latest.price);
  const oldestPrice = Number(oldest.price);
  const moveBps = oldestPrice > 0 ? ((latestPrice - oldestPrice) / oldestPrice) * 10000 : 0;
  const longCount = snapshots.filter((entry) => entry.tone === "long").length;
  const shortCount = snapshots.filter((entry) => entry.tone === "short").length;
  const longShare = Math.round((longCount / snapshots.length) * 100);
  const shortShare = Math.round((shortCount / snapshots.length) * 100);
  const ordered = snapshots
    .slice()
    .sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
  const evaluated = { long: { total: 0, correct: 0 }, short: { total: 0, correct: 0 } };
  ordered.forEach((entry, index) => {
    if (entry.tone !== "long" && entry.tone !== "short") return;
    const entryTime = new Date(entry.time || 0).getTime();
    const entryPrice = Number(entry.price);
    if (!Number.isFinite(entryTime) || !Number.isFinite(entryPrice) || entryPrice <= 0) return;
    const after = ordered.slice(index + 1).find((candidate) => {
      const candidateTime = new Date(candidate.time || 0).getTime();
      return Number.isFinite(candidateTime) && candidateTime >= entryTime + 60 * 1000 && Number.isFinite(Number(candidate.price));
    });
    if (!after) return;
    const afterPrice = Number(after.price);
    const delta = afterPrice - entryPrice;
    evaluated[entry.tone].total += 1;
    if ((entry.tone === "long" && delta > 0) || (entry.tone === "short" && delta < 0)) {
      evaluated[entry.tone].correct += 1;
    }
  });
  const longAccuracy = evaluated.long.total ? Math.round((evaluated.long.correct / evaluated.long.total) * 100) : 0;
  const shortAccuracy = evaluated.short.total ? Math.round((evaluated.short.correct / evaluated.short.total) * 100) : 0;
  const minMove = Number(strategy.breakoutMinMoveBps) || 0;
  const minAccuracy = Math.max(60, Number(strategy.breakoutMinEdgePercent) || 60);
  const minForecasts = 6;

  return {
    ready: true,
    count: snapshots.length,
    longCount,
    shortCount,
    longShare,
    shortShare,
    longEvaluated: evaluated.long.total,
    shortEvaluated: evaluated.short.total,
    longAccuracy,
    shortAccuracy,
    moveBps,
    longConfirmed: evaluated.long.total >= minForecasts && longAccuracy >= minAccuracy && moveBps >= minMove,
    shortConfirmed: evaluated.short.total >= minForecasts && shortAccuracy >= minAccuracy && moveBps <= -minMove
  };
}

function getServerBreakoutParticipationSignal(signal, micro, strategy, advisoryBreakout = null) {
  if (!strategy.breakoutParticipation || (!micro?.ready && !advisoryBreakout?.ready)) return null;

  const upEdge = Math.round((Number.isFinite(Number(micro?.probabilityUp)) ? Number(micro.probabilityUp) : 0.5) * 100);
  const downEdge = Math.round((Number.isFinite(Number(micro?.probabilityDown)) ? Number(micro.probabilityDown) : 0.5) * 100);
  const volatility = Number(micro?.volatility) || 0;
  const minMove = Number(strategy.breakoutMinMoveBps) || 0;
  const ret10 = Number(micro?.ret10) || 0;
  const ret30 = Number(micro?.ret30) || 0;
  const ret60 = Number(micro?.ret60) || 0;
  const vwapDistance = Number(micro?.vwapDistance) || 0;
  const microLongConfirmed = Boolean(
    micro?.ready
    && (micro.longTrigger || (ret10 > 0 && ret30 > 0))
    && ret60 >= minMove
    && vwapDistance > 0
    && upEdge >= strategy.breakoutMinEdgePercent
    && volatility >= strategy.breakoutMinVolatilityBps
  );
  const microShortConfirmed = Boolean(
    micro?.ready
    && (micro.shortTrigger || (ret10 < 0 && ret30 < 0))
    && ret60 <= -minMove
    && vwapDistance < 0
    && downEdge >= strategy.breakoutMinEdgePercent
    && volatility >= strategy.breakoutMinVolatilityBps
  );
  const longConfirmed = microLongConfirmed || Boolean(advisoryBreakout?.longConfirmed);
  const shortConfirmed = microShortConfirmed || Boolean(advisoryBreakout?.shortConfirmed);
  const advisorySide = signal?.side || null;
  const advisoryConviction = Number(signal?.conviction) || 0;

  if (longConfirmed && !(advisorySide === "short" && advisoryConviction >= 58)) {
    const detail = microLongConfirmed
      ? `Breakout participation: up edge ${upEdge}%, 60s move ${ret60.toFixed(2)} bps, VWAP +${vwapDistance.toFixed(2)} bps, volatility ${volatility.toFixed(2)} bps.`
      : `Breakout participation: long forecast accuracy is ${advisoryBreakout.longAccuracy}% across ${advisoryBreakout.longEvaluated} evaluated samples while price moved ${advisoryBreakout.moveBps.toFixed(2)} bps.`;
    return {
      side: "long",
      label: "Breakout Long",
      conviction: Math.max(advisoryConviction, strategy.breakoutMinEdgePercent),
      detail
    };
  }

  if (shortConfirmed && !(advisorySide === "long" && advisoryConviction >= 58)) {
    const detail = microShortConfirmed
      ? `Breakout participation: down edge ${downEdge}%, 60s move ${ret60.toFixed(2)} bps, VWAP ${vwapDistance.toFixed(2)} bps, volatility ${volatility.toFixed(2)} bps.`
      : `Breakout participation: short forecast accuracy is ${advisoryBreakout.shortAccuracy}% across ${advisoryBreakout.shortEvaluated} evaluated samples while price moved ${advisoryBreakout.moveBps.toFixed(2)} bps.`;
    return {
      side: "short",
      label: "Breakout Short",
      conviction: Math.max(advisoryConviction, strategy.breakoutMinEdgePercent),
      detail
    };
  }

  return null;
}

function getServerRegimeAssessment(signal, micro, strategy) {
  const side = signal.side;
  const probability = side === "short" ? Number(micro?.probabilityDown) : Number(micro?.probabilityUp);
  const edgePercent = Math.round((Number.isFinite(probability) ? probability : 0.5) * 100);
  const volatility = Number(micro?.volatility) || 0;
  const vwapDistance = Math.abs(Number(micro?.vwapDistance) || 0);
  const momentumAligned = side === "long"
    ? Boolean(micro?.longTrigger || (Number(micro?.ret10) > 0 && Number(micro?.ret30) > 0 && Number(micro?.vwapDistance) > 0))
    : side === "short"
      ? Boolean(micro?.shortTrigger || (Number(micro?.ret10) < 0 && Number(micro?.ret30) < 0 && Number(micro?.vwapDistance) < 0))
      : false;
  const trending = Boolean(
    micro?.ready
    && momentumAligned
    && edgePercent >= strategy.trendingMinEdgePercent
    && volatility >= strategy.trendingMinVolatilityBps
  );
  const flat = !micro?.ready || !side || edgePercent < strategy.trendingMinEdgePercent || volatility < strategy.trendingMinVolatilityBps || !momentumAligned || vwapDistance < 0.8;
  const regime = trending ? "trending" : flat ? "flat" : "mixed";
  return {
    enabled: strategy.regimeAware,
    regime,
    edgePercent,
    volatility,
    momentumAligned,
    maxMartingaleStep: regime === "trending" ? strategy.martingaleSteps : strategy.flatMaxMartingaleSteps,
    sizeMultiplier: regime === "trending" ? 1 : strategy.flatSizeMultiplier,
    thresholdBoost: regime === "trending" ? 0 : strategy.flatThresholdBoost,
    confirmationOk: regime === "trending" || (
      edgePercent >= strategy.flatMinEdgePercent
      && volatility >= strategy.flatMinVolatilityBps
      && momentumAligned
    )
  };
}

function getServerTradeTerms(config, side, price, step, sizeMultiplier = 1) {
  const contractMultiplier = Number(config.contractMultiplier) > 0 ? Number(config.contractMultiplier) : 1;
  const marginRate = side === "short"
    ? Number(config.marginRateShort) || 1
    : Number(config.marginRateLong) || 1;
  const marginRequirement = price * contractMultiplier * marginRate;
  const targetOffset = 0.01;
  const stopOffset = 0.0075;
  const targetPrice = side === "short" ? price * (1 - targetOffset) : price * (1 + targetOffset);
  const stopPrice = side === "short" ? price * (1 + stopOffset) : price * (1 - stopOffset);
  const plannedCapital = marginRequirement * (2 ** Math.max(0, step - 1)) * clamp(Number(sizeMultiplier) || 1, 0.1, 1);
  const contracts = Math.max(1, Math.min(PAPER_SCHEDULER_MAX_CONTRACTS, Math.floor(plannedCapital / marginRequirement) || 1));
  const feePerContractSide = Number(config.feePerContractSide) >= 0 ? Number(config.feePerContractSide) : 0;
  const openFee = feePerContractSide * contracts;
  const estimatedExitFee = feePerContractSide * contracts;

  return {
    contractMultiplier,
    marginRequirement,
    contracts,
    capital: marginRequirement * contracts,
    notionalValue: price * contractMultiplier * contracts,
    targetPrice,
    stopPrice,
    feePerContractSide,
    openFee,
    estimatedExitFee,
    totalEstimatedFees: openFee + estimatedExitFee
  };
}

function getServerTradeGrossPnl(trade, exitPrice) {
  const entryPrice = Number(trade.entryPrice ?? trade.price);
  const multiplier = Number(trade.contractMultiplier) > 0 ? Number(trade.contractMultiplier) : 1;
  const contracts = Number(trade.contracts) > 0 ? Number(trade.contracts) : Number(trade.quantity) || 1;
  const move = trade.side === "short" ? entryPrice - exitPrice : exitPrice - entryPrice;
  return move * multiplier * contracts;
}

function getServerExitTrigger(trade, price) {
  const targetPrice = Number(trade.targetPrice);
  const stopPrice = Number(trade.stopPrice);
  if (!Number.isFinite(price) || !Number.isFinite(targetPrice) || !Number.isFinite(stopPrice)) return null;
  const hitTarget = trade.side === "short" ? price <= targetPrice : price >= targetPrice;
  const hitStop = trade.side === "short" ? price >= stopPrice : price <= stopPrice;
  if (hitTarget) return trade.side === "short" ? "COVER TARGET" : "SELL TARGET";
  if (hitStop) return trade.side === "short" ? "COVER STOP" : "SELL STOP";
  return null;
}

function parseMarketMinutes(value, fallback) {
  const [hours, minutes] = normalizeMarketTime(value, fallback).split(":").map(Number);
  return (hours * 60) + minutes;
}

function getMarketLocalParts(value = new Date(), timeZone = DEFAULT_MARKET_CALENDAR.marketTimeZone) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(value).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const hour = Number(parts.hour) === 24 ? 0 : Number(parts.hour);
  return {
    day: dayMap[parts.weekday] ?? 0,
    minutes: (hour * 60) + Number(parts.minute || 0)
  };
}

function isWeekMinuteInRange(current, open, close) {
  return open <= close
    ? current >= open && current < close
    : current >= open || current < close;
}

function getMinutesUntilWeekMinute(current, target) {
  const weekMinutes = 7 * 24 * 60;
  return (target - current + weekMinutes) % weekMinutes;
}

function getUserMarketScheduleStatus(settings, value = new Date()) {
  const schedule = normalizeMarketCalendarSettings(settings);
  const { day, minutes } = getMarketLocalParts(value, schedule.marketTimeZone);
  const currentWeekMinute = (day * 24 * 60) + minutes;
  const weeklyOpenMinute = (schedule.weeklyOpenDay * 24 * 60) + parseMarketMinutes(schedule.weeklyOpenTime, DEFAULT_MARKET_CALENDAR.weeklyOpenTime);
  const weeklyCloseMinute = (schedule.weeklyCloseDay * 24 * 60) + parseMarketMinutes(schedule.weeklyCloseTime, DEFAULT_MARKET_CALENDAR.weeklyCloseTime);
  const dailyCloseMinute = parseMarketMinutes(schedule.dailyCloseTime, DEFAULT_MARKET_CALENDAR.dailyCloseTime);
  const dailyReopenMinute = parseMarketMinutes(schedule.dailyReopenTime, DEFAULT_MARKET_CALENDAR.dailyReopenTime);
  const insideWeeklySession = isWeekMinuteInRange(currentWeekMinute, weeklyOpenMinute, weeklyCloseMinute);
  const dailyMaintenanceClosed = day >= 1
    && day <= 4
    && minutes >= dailyCloseMinute
    && minutes < dailyReopenMinute;
  const isOpen = insideWeeklySession && !dailyMaintenanceClosed;

  const closeCandidates = [getMinutesUntilWeekMinute(currentWeekMinute, weeklyCloseMinute)]
    .filter((delta) => delta > 0);
  for (let offset = 0; offset < 7; offset += 1) {
    const candidateDay = (day + offset) % 7;
    if (candidateDay < 1 || candidateDay > 4) continue;
    const candidateWeekMinute = (candidateDay * 24 * 60) + dailyCloseMinute;
    const delta = getMinutesUntilWeekMinute(currentWeekMinute, candidateWeekMinute);
    if (delta > 0) closeCandidates.push(delta);
  }

  const minutesUntilClose = isOpen && closeCandidates.length ? Math.min(...closeCandidates) : null;
  const flattenWindow = isOpen
    && schedule.overnightRiskMode === "flatten-before-close"
    && Number.isFinite(minutesUntilClose)
    && minutesUntilClose <= schedule.closeBeforeMinutes;

  return {
    isOpen,
    flattenWindow,
    minutesUntilClose,
    shortLabel: isOpen ? "Market open" : "Market closed",
    detail: isOpen
      ? `${Math.round(minutesUntilClose || 0)} minute(s) until configured close.`
      : "Configured calendar says this market is closed."
  };
}

function getServerContractRollStatus(config, value = new Date()) {
  const expiration = config?.contractExpiresAt ? new Date(config.contractExpiresAt) : null;
  if (!expiration || Number.isNaN(expiration.getTime())) {
    return { shouldOpen: true, shouldFlatten: false, detail: "No contract expiration configured." };
  }

  const rollBeforeMs = Math.max(0, Number(config.rollBeforeDays) || 0) * 24 * 60 * 60 * 1000;
  const now = value.getTime();
  const rollAt = expiration.getTime() - rollBeforeMs;
  if (now >= expiration.getTime()) {
    return {
      shouldOpen: false,
      shouldFlatten: true,
      detail: `${config.ticker || "Contract"} is past configured expiration.`
    };
  }
  if (now >= rollAt) {
    return {
      shouldOpen: false,
      shouldFlatten: true,
      detail: `${config.ticker || "Contract"} is inside the ${Number(config.rollBeforeDays) || 0}-day roll window.`
    };
  }
  return { shouldOpen: true, shouldFlatten: false, detail: "Contract is outside the roll window." };
}

function makeServerTransaction(entry = {}) {
  return {
    id: entry.id || `srv-${Date.now()}`,
    time: entry.time || new Date().toISOString(),
    source: "cloudflare-paper-scheduler",
    ...entry
  };
}

function makeServerCloseTransaction({ user, email, commodity, config, openTrade, price, action, note }) {
  const grossPnl = getServerTradeGrossPnl(openTrade, price.price);
  const closeFee = Number(openTrade.estimatedExitFee) || Number(openTrade.feePerContractSide || 0) * (Number(openTrade.contracts) || 1);
  const totalFees = (Number(openTrade.openFee) || 0) + closeFee;
  const pnl = grossPnl - totalFees;

  return makeServerTransaction({
    id: `srv-close-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    tradeId: openTrade.tradeId || openTrade.id,
    userEmail: email,
    userName: user.name || "",
    commodity,
    commodityName: config.name,
    action,
    side: openTrade.side,
    step: Number(openTrade.step) || 1,
    contract: openTrade.contract || config.ticker,
    price: price.price,
    entryPrice: Number(openTrade.entryPrice ?? openTrade.price),
    targetPrice: Number(openTrade.targetPrice),
    stopPrice: Number(openTrade.stopPrice),
    exitPrice: price.price,
    contractMultiplier: Number(openTrade.contractMultiplier) || config.contractMultiplier,
    contracts: Number(openTrade.contracts) || 1,
    marginRequirement: Number(openTrade.marginRequirement) || null,
    notionalValue: Number(openTrade.notionalValue) || null,
    openFee: Number(openTrade.openFee) || 0,
    closeFee,
    estimatedExitFee: Number(openTrade.estimatedExitFee) || closeFee,
    totalEstimatedFees: totalFees,
    grossPnl,
    netPnl: pnl,
    pnl,
    capital: Number(openTrade.capital) || null,
    openedAt: openTrade.openedAt || openTrade.time,
    closedAt: new Date().toISOString(),
    note
  });
}

async function recordPaperSchedulerRun(env, run) {
  await env.DB.prepare(`
    INSERT INTO paper_scheduler_runs (
      run_id,
      started_at,
      finished_at,
      status,
      evaluated_users,
      opened_trades,
      closed_trades,
      skipped_trades,
      payload_json
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    run.runId,
    run.startedAt,
    run.finishedAt || new Date().toISOString(),
    run.status || "completed",
    run.evaluatedUsers || 0,
    run.openedTrades || 0,
    run.closedTrades || 0,
    run.skippedTrades || 0,
    JSON.stringify(run)
  ).run();
}

async function loadPaperSchedulerRuns(env) {
  const result = await env.DB.prepare(`
    SELECT payload_json
    FROM paper_scheduler_runs
    ORDER BY started_at DESC
    LIMIT ?
  `).bind(PAPER_SCHEDULER_RUN_LIMIT).all();
  return getResults(result).map((row) => parseStoredJson(row.payload_json)).filter(Boolean);
}

async function runPaperTradingScheduler(env, options = {}) {
  if (!hasRuntimeStore(env)) {
    return { status: "skipped", reason: "d1-not-configured" };
  }

  const startedAt = new Date().toISOString();
  const run = {
    runId: `paper-scheduler-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    startedAt,
    status: "running",
    evaluatedUsers: 0,
    openedTrades: 0,
    closedTrades: 0,
    skippedTrades: 0,
    decisions: []
  };

  const settings = await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload());
  const modelSettings = normalizeServerModelSettings(settings.modelSettings);
  const users = Array.isArray(settings.users) ? settings.users : [];
  const payload = await loadUnifiedTransactionPayloadD1(env, PAPER_TRADE_MODE, PAPER_LEDGER_SOURCE);
  const transactions = payload.transactions || [];

  try {
    for (const user of users) {
      const email = normalizeEmail(user.email);
      if (!email) continue;
      const schedulerSettings = getUserPaperSchedulerSettings(user, env, modelSettings);
      if (!schedulerSettings.enabled) continue;
      const lastEvaluationAt = schedulerSettings.lastEvaluationAt ? getTransactionDate(schedulerSettings.lastEvaluationAt) : null;
      if (!options.force && lastEvaluationAt && Date.now() - lastEvaluationAt.getTime() < schedulerSettings.minEvaluationMs) {
        run.skippedTrades += 1;
        continue;
      }

      run.evaluatedUsers += 1;
      const openTrades = getOpenPaperTradesForUser(transactions, email);
      const enabledOpenTrades = getEnabledCommodityOpenTrades(openTrades, schedulerSettings.commodities);
      let activeOpenCount = enabledOpenTrades.length;
      const strategySettings = getServerStrategySettings(user);
      const exclusiveMartingale = shouldUseExclusiveMartingale(user);
      const coachRecommendation = getServerKarpathyRecommendation(transactions, email, schedulerSettings.entryThreshold, strategySettings);
      user.strategy = {
        ...(user.strategy && typeof user.strategy === "object" ? user.strategy : {}),
        karpathyRecommendation: coachRecommendation
      };
      if (coachRecommendation.enabled && coachRecommendation.autoApply && coachRecommendation.sampleCount >= 3) {
        schedulerSettings.entryThreshold = coachRecommendation.recommendedThreshold;
        updateUserPaperSchedulerSettings(user, {
          ...schedulerSettings,
          entryThreshold: coachRecommendation.recommendedThreshold,
          karpathyRecommendationAppliedAt: coachRecommendation.updatedAt
        });
      }
      let lastDecision = "No eligible commodities evaluated";
      const marketSchedule = getUserMarketScheduleStatus(schedulerSettings);

      for (const commodity of schedulerSettings.commodities) {
        const config = getServerCommodityConfig(user, commodity);
        const contractRoll = getServerContractRollStatus(config);
        const advisory = await getLatestAdvisoryByCommodity(env, commodity);
        const price = await getServerMarketPrice(env, user, commodity, advisory);
        if (!price) {
          lastDecision = `${commodity}: skipped, no fresh price`;
          run.skippedTrades += 1;
          continue;
        }

        const commodityOpenTrades = openTrades.filter((trade) => trade.commodity === commodity);
        for (const openTrade of commodityOpenTrades) {
          let closeAction = null;
          let closeReason = "";
          if (marketSchedule.isOpen && contractRoll.shouldFlatten) {
            closeAction = openTrade.side === "short" ? "COVER ROLL" : "SELL ROLL";
            closeReason = contractRoll.detail;
          } else if (marketSchedule.flattenWindow) {
            closeAction = openTrade.side === "short" ? "COVER PRE-CLOSE" : "SELL PRE-CLOSE";
            closeReason = `User setting flattened ${Math.round(marketSchedule.minutesUntilClose || 0)} minute(s) before configured market close.`;
          } else if (marketSchedule.isOpen) {
            closeAction = getServerExitTrigger(openTrade, price.price);
            closeReason = `Server scheduler closed ${config.name} ${openTrade.side} via ${price.source}`;
          }
          if (!closeAction) continue;
          const close = makeServerCloseTransaction({
            user,
            email,
            commodity,
            config,
            openTrade,
            price,
            action: closeAction,
            note: closeReason
          });
          transactions.push(close);
          await recordOpenBrainServerEvent(
            env,
            "paper-trade",
            `${close.action} ${close.contract} at ${price.price.toFixed(2)} with net P/L ${Number(close.pnl || 0).toFixed(2)}`,
            {
              id: `memory-${getTransactionKey(close)}`,
              source: "cloudflare-paper-scheduler",
              tradeId: close.tradeId,
              userEmail: email,
              userName: user.name || "",
              commodity,
              action: close.action,
              side: close.side,
              step: close.step,
              price: close.price,
              pnl: close.pnl,
              tags: ["paper-trade", commodity, close.side, close.action]
            }
          );
          run.closedTrades += 1;
          activeOpenCount = Math.max(0, activeOpenCount - 1);
          lastDecision = `${commodity}: closed ${openTrade.side} at ${price.price}`;
        }

        if (!marketSchedule.isOpen) {
          lastDecision = `${commodity}: market closed by user calendar`;
          run.skippedTrades += 1;
          continue;
        }

        if (marketSchedule.flattenWindow) {
          lastDecision = `${commodity}: pre-close flatten window, no new trades`;
          run.skippedTrades += 1;
          continue;
        }

        if (!contractRoll.shouldOpen) {
          lastDecision = `${commodity}: ${contractRoll.detail}`;
          run.skippedTrades += 1;
          continue;
        }

        if (activeOpenCount >= schedulerSettings.maxOpenTrades) {
          if (lastDecision === "No eligible commodities evaluated") lastDecision = `${commodity}: max open trades reached`;
          continue;
        }

        const latestEnabledOpenTrades = getEnabledCommodityOpenTrades(getOpenPaperTradesForUser(transactions, email), schedulerSettings.commodities);
        const hasCommodityOpen = latestEnabledOpenTrades.some((trade) => normalizeServerCommodityId(trade.commodity) === commodity);
        if (hasCommodityOpen) continue;
        if (exclusiveMartingale && latestEnabledOpenTrades.length > 0) {
          if (lastDecision === "No eligible commodities evaluated") lastDecision = `${commodity}: martingale sequence already has an open trade`;
          continue;
        }

        const signal = getServerSignal(advisory);
        const micro = (strategySettings.regimeAware || strategySettings.breakoutParticipation)
          ? await getLatestServerMicroPrediction(env, commodity)
          : null;
        const regime = getServerRegimeAssessment(signal, micro, strategySettings);
        const secondOpinionConsensus = getServerSecondOpinionConsensus(signal, schedulerSettings);
        const advisoryBreakout = strategySettings.breakoutParticipation
          ? await getServerAdvisoryBreakoutContext(env, commodity, strategySettings)
          : null;
        const breakoutSignal = getServerBreakoutParticipationSignal(signal, micro, strategySettings, advisoryBreakout);
        const effectiveThreshold = clamp(
          schedulerSettings.entryThreshold
            + (regime.enabled ? regime.thresholdBoost : 0)
            + (secondOpinionConsensus.enabled ? secondOpinionConsensus.thresholdBoost : 0),
          1,
          100
        );
        if ((!signal.side || signal.conviction < effectiveThreshold) && !breakoutSignal) {
          lastDecision = `${commodity}: no open, ${signal.label} ${signal.conviction}/${effectiveThreshold}${secondOpinionConsensus.thresholdBoost ? `, ${secondOpinionConsensus.label}` : ""}`;
          run.skippedTrades += 1;
          continue;
        }

        if (secondOpinionConsensus.blocksEntry && !breakoutSignal) {
          lastDecision = `${commodity}: ${secondOpinionConsensus.label} - ${secondOpinionConsensus.detail}`;
          run.skippedTrades += 1;
          continue;
        }

        const activeSignal = breakoutSignal
          ? { ...signal, side: breakoutSignal.side, label: breakoutSignal.label, conviction: breakoutSignal.conviction }
          : signal;
        const step = exclusiveMartingale
          ? getNextServerMartingaleStep(transactions, email, strategySettings.martingaleSteps)
          : 1;
        if (!breakoutSignal && regime.enabled && step > regime.maxMartingaleStep) {
          lastDecision = `${commodity}: ${regime.regime} regime capped step ${step}/${regime.maxMartingaleStep}`;
          run.skippedTrades += 1;
          continue;
        }
        if (!breakoutSignal && regime.enabled && !regime.confirmationOk) {
          lastDecision = `${commodity}: ${regime.regime} regime waiting for confirmation`;
          run.skippedTrades += 1;
          continue;
        }
        const sizeMultiplier = breakoutSignal && exclusiveMartingale
          ? 1
          : breakoutSignal
            ? strategySettings.flatSizeMultiplier
            : regime.enabled ? regime.sizeMultiplier : 1;
        const terms = getServerTradeTerms(config, activeSignal.side, price.price, step, sizeMultiplier);
        const open = makeServerTransaction({
          id: `srv-open-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          tradeId: `srv-${email.replace(/[^a-z0-9]/g, "").slice(0, 12)}-${Date.now()}`,
          userEmail: email,
          userName: user.name || "",
          commodity,
          commodityName: config.name,
          action: activeSignal.side === "short" ? "SELL SHORT" : "BUY",
          side: activeSignal.side,
          step,
          contract: config.ticker,
          contractMonth: config.contractMonth,
          contractExpiresAt: config.contractExpiresAt || "",
          price: price.price,
          entryPrice: price.price,
          targetEntryPrice: price.price,
          targetPrice: terms.targetPrice,
          stopPrice: terms.stopPrice,
          contractMultiplier: terms.contractMultiplier,
          contracts: terms.contracts,
          marginRequirement: terms.marginRequirement,
          notionalValue: terms.notionalValue,
          openFee: terms.openFee,
          estimatedExitFee: terms.estimatedExitFee,
          totalEstimatedFees: terms.totalEstimatedFees,
          feePerContractSide: terms.feePerContractSide,
          capital: terms.capital,
          pnl: 0,
          openedAt: new Date().toISOString(),
          note: breakoutSignal
            ? `Server scheduler opened ${config.name} ${activeSignal.side} step ${step} via ${price.source}; ${breakoutSignal.detail}`
            : `Server scheduler opened ${config.name} ${activeSignal.side} at ${activeSignal.conviction} conviction via ${price.source}; regime ${regime.regime}, edge ${regime.edgePercent}%, vol ${regime.volatility.toFixed(2)} bps; ${secondOpinionConsensus.detail}`
        });
        transactions.push(open);
        await recordOpenBrainServerEvent(
          env,
          "paper-trade",
            `${open.action} ${open.contract} at ${price.price.toFixed(2)} with net P/L 0.00`,
          {
            id: `memory-${getTransactionKey(open)}`,
            source: "cloudflare-paper-scheduler",
            tradeId: open.tradeId,
            userEmail: email,
            userName: user.name || "",
            commodity,
            action: open.action,
            side: open.side,
            step: open.step,
            price: open.price,
            pnl: 0,
            tags: ["paper-trade", commodity, open.side, open.action]
          }
        );
        run.openedTrades += 1;
        activeOpenCount += 1;
        lastDecision = breakoutSignal
          ? `${commodity}: opened ${activeSignal.side} breakout at ${price.price}`
          : `${commodity}: opened ${activeSignal.side} at ${price.price}`;
      }

      updateUserPaperSchedulerSettings(user, {
        ...schedulerSettings,
        lastEvaluationAt: new Date().toISOString(),
        lastDecision
      });
      run.decisions.push({ email, name: user.name || "", decision: lastDecision });
    }

    const mergedTransactions = mergeTransactions(payload.transactions || [], transactions);
    await replaceUnifiedTransactionsD1(env, PAPER_TRADE_MODE, mergedTransactions);
    await saveRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, {
      ...settings,
      users,
      generatedAt: new Date().toISOString(),
      source: "cloudflare-d1-shared-settings"
    });
    run.status = "completed";
  } catch (error) {
    run.status = "failed";
    run.error = error.message;
  } finally {
    run.finishedAt = new Date().toISOString();
    await recordPaperSchedulerRun(env, run);
  }

  return run;
}

async function handlePaperSchedulerRoute(env, request, origin) {
  if (!hasRuntimeStore(env)) {
    return jsonResponse({ error: "Paper scheduler requires the Cloudflare D1 runtime store." }, 503, origin);
  }

  const url = new URL(request.url);
  if (request.method === "GET") {
    const settings = await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload());
    const modelSettings = normalizeServerModelSettings(settings.modelSettings);
    const enabledEmails = getEnabledPaperTraderEmails(env);
    const users = (Array.isArray(settings.users) ? settings.users : []).map((user) => {
      const scheduler = getUserPaperSchedulerSettings(user, env, modelSettings);
      return {
        name: user.name || "",
        email: user.email || "",
        enabled: scheduler.enabled,
        enabledByWorkerList: enabledEmails.has(normalizeEmail(user.email)),
        commodities: scheduler.commodities,
        riskPct: scheduler.riskPct,
        maxOpenTrades: scheduler.maxOpenTrades,
        entryThreshold: scheduler.entryThreshold,
        overnightRiskMode: scheduler.overnightRiskMode,
        marketTimeZone: scheduler.marketTimeZone,
        weeklyOpenDay: scheduler.weeklyOpenDay,
        weeklyOpenTime: scheduler.weeklyOpenTime,
        weeklyCloseDay: scheduler.weeklyCloseDay,
        weeklyCloseTime: scheduler.weeklyCloseTime,
        dailyCloseTime: scheduler.dailyCloseTime,
        dailyReopenTime: scheduler.dailyReopenTime,
        closeBeforeMinutes: scheduler.closeBeforeMinutes,
        marketCalendarNotes: scheduler.marketCalendarNotes,
        primaryModelId: scheduler.primaryModelId,
        criticModelId: scheduler.criticModelId,
        secondOpinionGateEnabled: scheduler.secondOpinionGateEnabled,
        secondOpinionModels: scheduler.secondOpinionModels,
        secondOpinionPrompts: scheduler.secondOpinionPrompts,
        lastEvaluationAt: scheduler.lastEvaluationAt,
        lastDecision: scheduler.lastDecision
      };
    });
    return jsonResponse({
      generatedAt: new Date().toISOString(),
      storage: "d1",
      users,
      runs: await loadPaperSchedulerRuns(env)
    }, 200, origin);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const run = await runPaperTradingScheduler(env, {
    force: body.force === true || url.searchParams.get("force") === "true"
  });
  return jsonResponse(run, run.status === "failed" ? 500 : 200, origin);
}

function mergeSettingsPayload(current = defaultSettingsPayload(), incoming = {}) {
  return {
    ...current,
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-shared-settings",
    coinbaseSandboxEnabled: typeof incoming.coinbaseSandboxEnabled === "boolean"
      ? incoming.coinbaseSandboxEnabled
      : Boolean(current.coinbaseSandboxEnabled),
    users: Array.isArray(incoming.users) ? incoming.users : current.users || [],
    modelSettings: normalizeServerModelSettings({
      ...(current.modelSettings && typeof current.modelSettings === "object" ? current.modelSettings : {}),
      ...(incoming.modelSettings && typeof incoming.modelSettings === "object" ? incoming.modelSettings : {})
    }),
    appState: incoming.appState && typeof incoming.appState === "object" && !Array.isArray(incoming.appState)
      ? {
        ...(current.appState && typeof current.appState === "object" && !Array.isArray(current.appState) ? current.appState : {}),
        ...incoming.appState
      }
      : current.appState || {},
    userProfiles: incoming.userProfiles && typeof incoming.userProfiles === "object" && !Array.isArray(incoming.userProfiles)
      ? mergeUserProfiles(current.userProfiles || {}, incoming.userProfiles)
      : current.userProfiles || {}
  };
}

async function ensureUserStrategyRecordsTable(env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS user_strategy_records (
      user_email TEXT PRIMARY KEY,
      user_name TEXT,
      strategy_json TEXT NOT NULL DEFAULT '{}',
      strategy_history_json TEXT NOT NULL DEFAULT '[]',
      updated_at TEXT NOT NULL
    )
  `).run();
  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_user_strategy_records_updated
    ON user_strategy_records (updated_at DESC)
  `).run();
}

async function upsertUserStrategyRecordsD1(env, settings = {}) {
  await ensureUserStrategyRecordsTable(env);
  const profiles = settings.userProfiles && typeof settings.userProfiles === "object" && !Array.isArray(settings.userProfiles)
    ? settings.userProfiles
    : {};
  const usersByEmail = new Map((Array.isArray(settings.users) ? settings.users : []).map((user) => [
    normalizeEmail(user.email),
    user
  ]));
  const emails = new Set([
    ...Object.keys(profiles).map(normalizeEmail),
    ...usersByEmail.keys()
  ]);
  const now = new Date().toISOString();

  for (const email of emails) {
    if (!email) continue;
    const profile = profiles[email] || {};
    const user = usersByEmail.get(email) || {};
    const strategy = profile.strategy || user.strategy;
    const strategyHistory = Array.isArray(profile.strategyHistory)
      ? profile.strategyHistory
      : Array.isArray(user.strategyHistory) ? user.strategyHistory : [];
    if (!strategy && !strategyHistory.length) continue;

    await env.DB.prepare(`
      INSERT INTO user_strategy_records (user_email, user_name, strategy_json, strategy_history_json, updated_at)
      VALUES (?, ?, ?, ?, ?)
      ON CONFLICT(user_email) DO UPDATE SET
        user_name = excluded.user_name,
        strategy_json = excluded.strategy_json,
        strategy_history_json = excluded.strategy_history_json,
        updated_at = excluded.updated_at
    `).bind(
      email,
      user.name || profile.name || "",
      JSON.stringify(strategy || {}),
      JSON.stringify(strategyHistory),
      now
    ).run();
  }
}

async function mergeUserStrategyRecordsD1(env, settings = {}) {
  await ensureUserStrategyRecordsTable(env);
  const result = await env.DB.prepare(`
    SELECT user_email, user_name, strategy_json, strategy_history_json, updated_at
    FROM user_strategy_records
  `).all();
  const profiles = {
    ...(settings.userProfiles && typeof settings.userProfiles === "object" && !Array.isArray(settings.userProfiles) ? settings.userProfiles : {})
  };
  const strategyRecords = {};

  getResults(result).forEach((row) => {
    const email = normalizeEmail(row.user_email);
    if (!email) return;
    const strategy = parseStoredJson(row.strategy_json, {});
    const strategyHistory = parseStoredJson(row.strategy_history_json, []);
    profiles[email] = {
      ...(profiles[email] || {}),
      strategy,
      strategyHistory
    };
    strategyRecords[email] = {
      userEmail: email,
      userName: row.user_name || "",
      strategy,
      strategyHistory,
      updatedAt: row.updated_at
    };
  });

  return {
    ...settings,
    userProfiles: profiles,
    userStrategyRecords: strategyRecords
  };
}

async function handleD1Settings(env, request, origin) {
  if (request.method === "GET") {
    const settings = await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload());
    const enrichedSettings = await mergeUserStrategyRecordsD1(env, settings);
    return jsonResponse({
      ...defaultSettingsPayload(),
      ...enrichedSettings,
      source: "cloudflare-d1-shared-settings",
      storage: "d1"
    }, 200, origin);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const current = await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload());
  const settings = mergeSettingsPayload(current, body);
  await saveRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, settings);
  await upsertUserStrategyRecordsD1(env, settings);

  return jsonResponse({
    commit: null,
    storage: "d1",
    settings
  }, 200, origin);
}

async function handleD1StrategyChange(env, request, origin) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const email = normalizeEmail(body.email);
  if (!email) {
    return jsonResponse({ error: "User email is required" }, 400, origin);
  }

  const patch = body.strategyPatch && typeof body.strategyPatch === "object" && !Array.isArray(body.strategyPatch)
    ? body.strategyPatch
    : {};
  const settings = await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload());
  const profiles = settings.userProfiles && typeof settings.userProfiles === "object" && !Array.isArray(settings.userProfiles)
    ? settings.userProfiles
    : {};
  const users = Array.isArray(settings.users) ? settings.users : [];
  const user = users.find((candidate) => normalizeEmail(candidate.email) === email) || { email };
  const profile = profiles[email] && typeof profiles[email] === "object" && !Array.isArray(profiles[email])
    ? profiles[email]
    : {};
  const before = {
    ...(user.strategy && typeof user.strategy === "object" ? user.strategy : {}),
    ...(profile.strategy && typeof profile.strategy === "object" ? profile.strategy : {})
  };
  const after = {
    ...before,
    ...patch
  };
  const changedAt = new Date().toISOString();
  const historyEntry = {
    id: String(body.id || `strategy-change-${Date.now()}`),
    changedAt,
    changedByName: String(body.changedByName || "Cloudflare Worker").trim(),
    changedByEmail: normalizeEmail(body.changedByEmail || ""),
    summary: String(body.summary || "Strategy updated").trim(),
    detail: String(body.detail || "").trim(),
    before,
    after
  };
  const strategyHistory = [
    historyEntry,
    ...(Array.isArray(profile.strategyHistory) ? profile.strategyHistory : Array.isArray(user.strategyHistory) ? user.strategyHistory : [])
  ].slice(0, 50);

  profile.strategy = after;
  profile.strategyHistory = strategyHistory;
  profiles[email] = profile;
  user.strategy = after;
  user.strategyHistory = strategyHistory;
  if (!users.some((candidate) => normalizeEmail(candidate.email) === email)) users.push(user);

  const nextSettings = {
    ...settings,
    users,
    userProfiles: profiles,
    generatedAt: changedAt,
    source: "cloudflare-d1-shared-settings"
  };
  await saveRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, nextSettings);
  await upsertUserStrategyRecordsD1(env, nextSettings);

  return jsonResponse({
    storage: "d1",
    email,
    strategy: after,
    historyEntry
  }, 200, origin);
}

async function handleD1Advisories(env, request, origin) {
  if (request.method === "GET") {
    const payload = await loadAdvisoryPayloadD1(env);
    return jsonResponse({ ...payload, storage: "d1" }, 200, origin);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const current = await loadAdvisoryPayloadD1(env);
  const incoming = Array.isArray(body.snapshots) ? body.snapshots : [];
  const newSnapshots = getNewAdvisorySnapshots(current.snapshots, incoming);

  if (!newSnapshots.length) {
    return jsonResponse({
      commit: null,
      storage: "d1",
      skipped: true,
      reason: "No new advisory snapshots",
      merged: current.snapshots.length,
      snapshots: current.snapshots
    }, 200, origin);
  }

  const snapshots = mergeAdvisorySnapshots(current.snapshots, newSnapshots);
  await upsertAdvisorySnapshotsD1(env, snapshots);
  const saved = await loadAdvisoryPayloadD1(env);

  return jsonResponse({
    commit: null,
    storage: "d1",
    added: newSnapshots.length,
    merged: saved.snapshots.length,
    snapshots: saved.snapshots
  }, 200, origin);
}

async function handleMicroPredictionsRoute(env, request, origin) {
  if (!hasRuntimeStore(env)) {
    return jsonResponse({
      error: "Micro predictor learning requires the Cloudflare D1 runtime store."
    }, 503, origin);
  }

  if (request.method === "GET") {
    const url = new URL(request.url);
    const payload = await loadMicroPredictionPayloadD1(env, url.searchParams.get("limit") || 500);
    return jsonResponse(payload, 200, origin);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const incoming = Array.isArray(body.predictions) ? body.predictions : [];
  const added = await upsertMicroPredictionsD1(env, incoming);
  const payload = await loadMicroPredictionPayloadD1(env, body.limit || 500);

  return jsonResponse({
    ...payload,
    added
  }, 200, origin);
}

async function handleOpenBrainRoute(env, request, origin) {
  if (!hasRuntimeStore(env)) {
    return jsonResponse({
      generatedAt: new Date().toISOString(),
      source: "d1-not-configured",
      events: []
    }, request.method === "GET" ? 200 : 503, origin);
  }

  const url = new URL(request.url);
  if (request.method === "GET") {
    const payload = await loadOpenBrainEventsD1(env, url.searchParams.get("limit") || OPEN_BRAIN_EVENT_LIMIT);
    return jsonResponse({ ...payload, storage: "d1" }, 200, origin);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const incoming = Array.isArray(body.events) ? body.events : body.event ? [body.event] : [];
  const stored = await upsertOpenBrainEventsD1(env, incoming);
  const payload = await loadOpenBrainEventsD1(env, body.limit || OPEN_BRAIN_EVENT_LIMIT);
  return jsonResponse({
    ...payload,
    storage: "d1",
    stored
  }, 200, origin);
}

function transactionSetsMatch(existing = [], next = []) {
  const existingKeys = new Set(existing.map((transaction) => transaction?.sharedKey || JSON.stringify(transaction)));
  const nextKeys = new Set(next.map((transaction) => transaction?.sharedKey || JSON.stringify(transaction)));
  return existingKeys.size === nextKeys.size && [...existingKeys].every((key) => nextKeys.has(key));
}

async function handleD1TransactionLedger(env, request, table, source, origin) {
  if (request.method === "GET") {
    const payload = await loadTransactionPayloadD1(env, table, source);
    return jsonResponse({ ...payload, storage: "d1" }, 200, origin);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const current = await loadTransactionPayloadD1(env, table, source);
  const cleanupOnly = body.mode === "cleanup";

  if (cleanupOnly) {
    const compacted = compactPayload(current);
    await replaceTransactionsD1(env, table, compacted.transactions);
    const saved = await loadTransactionPayloadD1(env, table, source);

    return jsonResponse({
      commit: null,
      backup: null,
      storage: "d1",
      cleaned: true,
      removed: compacted.removed || 0,
      merged: saved.transactions.length,
      transactions: saved.transactions
    }, 200, origin);
  }

  const incoming = Array.isArray(body.transactions) ? body.transactions : [];
  const mergedTransactions = mergeTransactions(current.transactions, incoming);
  if (transactionSetsMatch(current.transactions, mergedTransactions)) {
    return jsonResponse({
      commit: null,
      backup: null,
      storage: "d1",
      unchanged: true,
      cleaned: false,
      removed: 0,
      merged: current.transactions.length,
      transactions: current.transactions
    }, 200, origin);
  }

  await upsertTransactionRows(env, table, mergedTransactions);
  const saved = await loadTransactionPayloadD1(env, table, source);

  return jsonResponse({
    commit: null,
    backup: null,
    storage: "d1",
    cleaned: false,
    removed: 0,
    merged: saved.transactions.length,
    transactions: saved.transactions
  }, 200, origin);
}

async function handleD1UnifiedTransactionLedger(env, request, tradeMode, source, origin) {
  const normalizedMode = normalizeTradeMode(tradeMode);
  if (request.method === "GET") {
    const payload = await loadUnifiedTransactionPayloadD1(env, normalizedMode, source);
    return jsonResponse(payload, 200, origin);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const current = await loadUnifiedTransactionPayloadD1(env, normalizedMode, source);
  const cleanupOnly = body.mode === "cleanup";

  if (cleanupOnly) {
    const compacted = compactPayload(current);
    await replaceUnifiedTransactionsD1(env, normalizedMode, compacted.transactions);
    const saved = await loadUnifiedTransactionPayloadD1(env, normalizedMode, source);

    return jsonResponse({
      commit: null,
      backup: null,
      storage: "d1",
      tradeMode: normalizedMode,
      cleaned: true,
      removed: compacted.removed || 0,
      merged: saved.transactions.length,
      transactions: saved.transactions
    }, 200, origin);
  }

  const incoming = Array.isArray(body.transactions) ? body.transactions : [];
  const taggedIncoming = incoming.map((entry) => ({ ...entry, tradeMode: normalizeTradeMode(entry.tradeMode, normalizedMode) }));
  const mergedTransactions = mergeTransactions(current.transactions, taggedIncoming);
  if (transactionSetsMatch(current.transactions, mergedTransactions)) {
    return jsonResponse({
      commit: null,
      backup: null,
      storage: "d1",
      tradeMode: normalizedMode,
      unchanged: true,
      cleaned: false,
      removed: 0,
      merged: current.transactions.length,
      transactions: current.transactions
    }, 200, origin);
  }

  await upsertUnifiedTransactionRows(env, mergedTransactions, normalizedMode);
  const saved = await loadUnifiedTransactionPayloadD1(env, normalizedMode, source);

  return jsonResponse({
    commit: null,
    backup: null,
    storage: "d1",
    tradeMode: normalizedMode,
    cleaned: false,
    removed: 0,
    merged: saved.transactions.length,
    transactions: saved.transactions
  }, 200, origin);
}

async function handleSettingsRoute(env, request, origin) {
  if (hasRuntimeStore(env)) {
    return handleD1Settings(env, request, origin);
  }

  if (request.method === "GET") {
    const { payload } = await getSettingsFile(env);
    return jsonResponse({ ...payload, storage: "github-fallback" }, 200, origin);
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
    modelSettings: normalizeServerModelSettings({
      ...(payload.modelSettings && typeof payload.modelSettings === "object" ? payload.modelSettings : {}),
      ...(body.modelSettings && typeof body.modelSettings === "object" ? body.modelSettings : {})
    }),
    appState: body.appState && typeof body.appState === "object" && !Array.isArray(body.appState)
      ? {
        ...(payload.appState && typeof payload.appState === "object" && !Array.isArray(payload.appState) ? payload.appState : {}),
        ...body.appState
      }
      : payload.appState || {},
    users: Array.isArray(body.users) ? body.users : payload.users || [],
    userProfiles: body.userProfiles && typeof body.userProfiles === "object" && !Array.isArray(body.userProfiles)
      ? mergeUserProfiles(payload.userProfiles || {}, body.userProfiles)
      : payload.userProfiles || {}
  };
  const result = await saveSettingsFile(env, file, path, settings);

  return jsonResponse({
    commit: result.commit?.sha,
    storage: "github-fallback",
    settings
  }, 200, origin);
}

async function handleAdvisoriesRoute(env, request, origin) {
  if (hasRuntimeStore(env)) {
    return handleD1Advisories(env, request, origin);
  }

  if (request.method === "GET") {
    const { payload } = await getAdvisoryFile(env);
    return jsonResponse({ ...payload, storage: "github-fallback" }, 200, origin);
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
      storage: "github-fallback",
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
    storage: "github-fallback",
    added: newSnapshots.length,
    merged: updatedPayload.snapshots.length,
    snapshots: updatedPayload.snapshots
  }, 200, origin);
}

async function handlePaperLedgerRoute(env, request, origin) {
  if (hasRuntimeStore(env)) {
    return handleD1UnifiedTransactionLedger(env, request, PAPER_TRADE_MODE, PAPER_LEDGER_SOURCE, origin);
  }

  if (request.method === "GET") {
    const { payload } = await getMasterFile(env);
    return jsonResponse({ ...payload, storage: "github-fallback" }, 200, origin);
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

  if (!cleanupOnly && transactionSetsMatch(payload.transactions || [], mergedTransactions)) {
    return jsonResponse({
      commit: null,
      backup: null,
      storage: "github-fallback",
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
    storage: "github-fallback",
    cleaned: cleanupOnly,
    removed: updatedPayload.removed || 0,
    merged: updatedPayload.transactions.length,
    transactions: updatedPayload.transactions
  }, 200, origin);
}

async function handleActualTradesRoute(env, request, origin) {
  if (hasRuntimeStore(env)) {
    return handleD1UnifiedTransactionLedger(env, request, REAL_TRADE_MODE, ACTUAL_LEDGER_SOURCE, origin);
  }

  if (request.method === "GET") {
    return jsonResponse({
      generatedAt: new Date().toISOString(),
      source: "github-fallback-unavailable-actual-trades",
      storage: "github-fallback",
      transactions: []
    }, 200, origin);
  }

  return jsonResponse({
    error: "Actual trades require the Cloudflare D1 runtime store."
  }, 503, origin);
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
        const modelSettings = hasRuntimeStore(env)
          ? normalizeServerModelSettings((await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload())).modelSettings)
          : normalizeServerModelSettings();
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

        const criticModel = modelSettings.criticModelId
          ? getOpenRouterCriticModel(getServerModelRoute(modelSettings.criticModelId))
          : null;
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
        return handleSettingsRoute(env, request, origin);
      }

      if (url.pathname === "/settings/strategy-change") {
        return handleD1StrategyChange(env, request, origin);
      }

      if (url.pathname === "/advisories") {
        return handleAdvisoriesRoute(env, request, origin);
      }

      if (url.pathname === "/micro-predictions") {
        return handleMicroPredictionsRoute(env, request, origin);
      }

      if (url.pathname === "/prices") {
        return handlePriceSnapshotsRoute(env, request, origin);
      }

      if (url.pathname === "/open-brain") {
        return handleOpenBrainRoute(env, request, origin);
      }

      if (url.pathname === "/actual-trades") {
        return handleActualTradesRoute(env, request, origin);
      }

      if (url.pathname === "/paper-scheduler" || url.pathname === "/paper-scheduler/run") {
        return handlePaperSchedulerRoute(env, request, origin);
      }

      return handlePaperLedgerRoute(env, request, origin);
    } catch (error) {
      return jsonResponse({ error: error.message }, 500, origin);
    }
  },

  async scheduled(_controller, env, ctx) {
    ctx.waitUntil(runPaperTradingScheduler(env).catch((error) => {
      console.error("paper scheduler failed", error);
    }));
  }
};
