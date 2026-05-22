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
const PAPER_SCHEDULER_LOCK_KEY = "paper-trading-scheduler";
const PAPER_SCHEDULER_LOCK_TTL_MS = 4 * 60 * 1000;
const PRICE_SNAPSHOT_MAX_AGE_MS = 5 * 60 * 1000;
const PRICE_TICK_RETENTION_DAYS = 14;
const STALE_UNCLOSED_OPEN_TRADE_MS = 7 * 24 * 60 * 60 * 1000;
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
    ticker: "NOLM6",
    productId: "NOL-19JUN26-CDE",
    productType: "Coinbase futures contract",
    contractMonth: "June 2026",
    contractExpiresAt: "2026-06-19T17:00:00-04:00",
    rollBeforeDays: 3,
    contracts: [
      { ticker: "NOLK6", productId: "NOL-18MAY26-CDE", contractMonth: "May 2026", contractExpiresAt: "2026-05-18T17:00:00-04:00" },
      { ticker: "NOLM6", productId: "NOL-19JUN26-CDE", contractMonth: "June 2026", contractExpiresAt: "2026-06-19T17:00:00-04:00" },
      { ticker: "NOLN6", productId: "NOL-20JUL26-CDE", contractMonth: "July 2026", contractExpiresAt: "2026-07-20T17:00:00-04:00" }
    ],
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

const LEARNING_CONTRACT_COLUMNS = {
  advisory_snapshots: [
    ["contract", "TEXT"],
    ["product_id", "TEXT"]
  ],
  micro_predictions: [
    ["contract", "TEXT"],
    ["product_id", "TEXT"]
  ]
};
const MICRO_EVALUATION_LIMIT = 1500;
const MICRO_EVALUATION_BATCH_SIZE = 40;

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

function cachedJsonResponse(payload, status = 200, origin = "*", cacheControl = "public, max-age=10, stale-while-revalidate=30") {
  const response = jsonResponse(payload, status, origin);
  response.headers.set("Cache-Control", cacheControl);
  return response;
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
  return ["TARGET", "STOP", "PRE-CLOSE", "ROLL", "PROFIT LOCK"].some((word) => action.includes(word));
}

function isOpeningTransaction(entry) {
  const action = String(entry.action || "").trim().toUpperCase();
  return !isClosingTransaction(entry) && ["BUY", "SELL SHORT"].includes(action);
}

const ACCOUNT_EMAIL_ALIASES = {
  "peter@ambeil.com": "peterambiel@gmail.com",
  "pete@ambeil.com": "peterambiel@gmail.com",
  "peter@ambiel.com": "peterambiel@gmail.com"
};
const MARKOV_METHOD_TEST_AGENT_EMAILS = new Set(["peter@pjbell.com", "aretwo3000@gmail.com"]);
const MARKOV_METHOD_STRATEGY_CHANGE_ID = "strategy-change-0003-markov-hedge-fund-method";
const MARKOV_METHOD_STRATEGY_CHANGE_TEXT = "Refinement 5/21/2026: Markov Hedge Fund Method enabled";
const MARKOV_METHOD_STRATEGY_CHANGE_DETAIL = "Markov Hedge Fund Method for Peter Bell and D2 only. Classify oil as bull, bear, or sideways from recent return behavior and transition evidence. Bull state favors long continuation unless breakdown is confirmed. Bear state favors short continuation unless reversal is confirmed. Sideways state raises the entry threshold and reduces size. Paper-only test strategy switch.";

function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  return ACCOUNT_EMAIL_ALIASES[email] || email;
}

function normalizeMergedFrom(value, canonicalEmail) {
  const emails = new Set();
  (Array.isArray(value) ? value : []).forEach((entry) => {
    const email = normalizeEmail(entry);
    if (email && email !== canonicalEmail) emails.add(email);
  });
  return Array.from(emails);
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

function getPaperTradeId(entry = {}) {
  return entry.tradeId || entry.id || "";
}

function getTradeIdentityKey(entry = {}) {
  const tradeId = getPaperTradeId(entry);
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
  const leftTradeId = getPaperTradeId(left);
  const rightTradeId = getPaperTradeId(right);

  return (
    normalizeEmail(left.userEmail || "") === normalizeEmail(right.userEmail || "") &&
    String(left.commodity || "") === String(right.commodity || "") &&
    String(left.contract || "") === String(right.contract || "") &&
    String(left.side || "") === String(right.side || "") &&
    String(left.step || "") === String(right.step || "") &&
    Boolean(leftTradeId && rightTradeId) &&
    String(leftTradeId) === String(rightTradeId)
  );
}

function closingEntryMatchesOpenTrade(closeEntry = {}, openEntry = {}) {
  if (samePaperTradeIdentity(closeEntry, openEntry)) return true;
  if (!isClosingTransaction(closeEntry) || !isOpeningTransaction(openEntry)) return false;
  const closeTradeId = String(getPaperTradeId(closeEntry) || "");
  const openTradeId = String(getPaperTradeId(openEntry) || "");
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
    entry.productId || entry.product_id || entry.contract || "product",
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
    contract: entry.contract || entry.ticker || "",
    productId: entry.productId || entry.product_id || entry.contract || entry.ticker || "",
    contractMonth: entry.contractMonth || "",
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

async function fetchWithTimeout(url, options = {}, timeoutMs = 25000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort("timeout"), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
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
const SERVER_LLM_ADVISORY_MAX_AGE_MS = 6 * 60 * 60 * 1000;
const OPENROUTER_FETCH_TIMEOUT_MS = 25000;
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

  const response = await fetchWithTimeout(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
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
  }, OPENROUTER_FETCH_TIMEOUT_MS);

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

  const response = await fetchWithTimeout(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
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
  }, OPENROUTER_FETCH_TIMEOUT_MS);

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

function getServerAdvisoryTone(value) {
  const tone = String(value || "").trim().toLowerCase();
  return ["long", "short", "wait"].includes(tone) ? tone : "wait";
}

function getServerAdvisoryLabel(tone, conviction) {
  const normalizedTone = getServerAdvisoryTone(tone);
  if (normalizedTone === "wait") return "Wait";
  const strength = Number(conviction) >= 70 ? "Strong" : Number(conviction) >= 55 ? "Moderate" : "Lean";
  return `${strength} ${normalizedTone === "long" ? "Long" : "Short"}`;
}

function getServerAdvisoryAction(tone) {
  const normalizedTone = getServerAdvisoryTone(tone);
  if (normalizedTone === "long") return "Lean long small";
  if (normalizedTone === "short") return "Lean short small";
  return "No trade";
}

function getServerActiveProductKeys(config = {}) {
  return [config.productId, config.ticker]
    .map((item) => String(item || "").trim().toLowerCase())
    .filter((item, index, all) => item && all.indexOf(item) === index);
}

function isServerAdvisoryFreshForContract(advisory, config = {}) {
  if (!advisory) return false;
  const advisoryTime = getTransactionDate(advisory.time || advisory.updatedAt || advisory.updated_at);
  const ageMs = Date.now() - advisoryTime.getTime();
  if (!Number.isFinite(ageMs) || ageMs < 0 || ageMs > SERVER_LLM_ADVISORY_MAX_AGE_MS) return false;

  const price = Number(advisory.price);
  const conviction = Number(advisory.conviction ?? advisory.llmScore ?? advisory.localScore);
  if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(conviction)) return false;

  const activeKeys = getServerActiveProductKeys(config);
  const advisoryKey = String(advisory.productId || advisory.product_id || advisory.contract || advisory.ticker || "").trim().toLowerCase();
  return !activeKeys.length || activeKeys.includes(advisoryKey);
}

function buildServerOpenRouterAdvisoryBody({ user = {}, commodity = "oil", config = {}, price = null, strategySettings = {}, schedulerSettings = {}, previousAdvisory = null }) {
  return {
    commodity,
    commodityName: config.name || commodity,
    horizon: "intraday",
    context: {
      currentPrice: Number(price?.price) || null,
      priceSource: price?.source || "",
      priceTime: price?.time || "",
      contract: config.ticker || "",
      productId: config.productId || config.ticker || "",
      contractMonth: config.contractMonth || "",
      contractExpiresAt: config.contractExpiresAt || "",
      userStrategy: user.strategy?.name || user.strategyName || "",
      entryThreshold: schedulerSettings.entryThreshold,
      maxOpenTrades: schedulerSettings.maxOpenTrades,
      strategySwitches: {
        karpathyEnabled: strategySettings.karpathyEnabled,
        advisoryOutcomeLearner: strategySettings.advisoryOutcomeLearner,
        secondOpinionGate: schedulerSettings.secondOpinionGateEnabled,
        trendCaptureMode: strategySettings.trendCaptureMode,
        breakoutParticipation: strategySettings.breakoutParticipation,
        pullbackEntryRequired: strategySettings.pullbackEntryRequired,
        profitLockTrailingStop: strategySettings.profitLockTrailingStop
      },
      previousAdvisory: previousAdvisory ? {
        time: previousAdvisory.time,
        contract: previousAdvisory.contract || previousAdvisory.productId,
        tone: previousAdvisory.tone,
        conviction: previousAdvisory.conviction,
        price: previousAdvisory.price
      } : null
    }
  };
}

async function createAndStoreServerOpenRouterAdvisory(env, params = {}) {
  const {
    commodity = "oil",
    config = {},
    price = null,
    modelSettings = normalizeServerModelSettings()
  } = params;
  const body = buildServerOpenRouterAdvisoryBody(params);
  const startedAt = Date.now();
  const primary = await createOpenRouterAdvisory(env, body);
  const primaryTokenLog = await safeRecordTokenUsage(env, {
    provider: "OpenRouter",
    model: primary.model,
    job: "scheduled-primary-advisory",
    usage: primary.usage,
    metadata: {
      commodity,
      contract: config.ticker || config.productId,
      productId: config.productId,
      horizon: body.horizon,
      elapsedMs: primary.elapsedMs
    }
  });

  const criticModel = modelSettings.criticModelId
    ? getOpenRouterCriticModel(getServerModelRoute(modelSettings.criticModelId))
    : null;
  let critic = null;
  let criticError = null;
  let criticTokenLog = null;
  if (criticModel) {
    try {
      critic = await createOpenRouterCriticReview(env, primary.advisory, body, criticModel);
      criticTokenLog = await safeRecordTokenUsage(env, {
        provider: "OpenRouter",
        model: critic.model,
        job: "scheduled-critic-review",
        usage: critic.usage,
        metadata: {
          commodity,
          contract: config.ticker || config.productId,
          productId: config.productId,
          horizon: body.horizon,
          elapsedMs: critic.elapsedMs
        }
      });
    } catch (error) {
      criticError = error.message;
    }
  }

  const consolidated = critic ? consolidatePrimaryAndCritic(primary, critic) : primary.advisory;
  const conviction = clamp(Math.round(Number(consolidated?.conviction ?? primary.advisory?.conviction ?? 50)), 0, 100);
  const tone = getServerAdvisoryTone(consolidated?.tone || primary.advisory?.tone);
  const snapshot = normalizeAdvisorySnapshot({
    time: new Date().toISOString(),
    commodity,
    commodityName: config.name || commodity,
    contract: config.ticker || config.productId || "",
    productId: config.productId || config.ticker || "",
    contractMonth: config.contractMonth || "",
    horizon: body.horizon,
    price: Number(price?.price),
    priceSource: price?.source || "Cloudflare scheduler price",
    bounded: 0,
    conviction,
    tone,
    label: getServerAdvisoryLabel(tone, conviction),
    action: getServerAdvisoryAction(tone)
  });

  if (!snapshot) {
    throw new Error("OpenRouter advisory did not produce a storable snapshot");
  }

  await upsertAdvisorySnapshotsD1(env, [snapshot]);
  return {
    advisory: snapshot,
    refreshed: true,
    model: primary.model,
    criticModel,
    criticError,
    elapsedMs: Date.now() - startedAt,
    tokenLog: {
      primary: primaryTokenLog,
      critic: criticTokenLog
    }
  };
}

async function getOrRefreshServerOpenRouterAdvisory(env, params = {}) {
  const existing = params.previousAdvisory || await getLatestAdvisoryByCommodity(env, params.commodity, params.config);
  if (!params.force && isServerAdvisoryFreshForContract(existing, params.config)) {
    return { advisory: existing, refreshed: false, reason: "fresh" };
  }
  if (!params.price || !Number.isFinite(Number(params.price.price)) || Number(params.price.price) <= 0) {
    return { advisory: existing, refreshed: false, reason: "no-fresh-price" };
  }
  try {
    return await createAndStoreServerOpenRouterAdvisory(env, params);
  } catch (error) {
    return { advisory: existing, refreshed: false, reason: "openrouter-error", error: error.message };
  }
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

async function safeD1Run(env, sql, bindings = []) {
  try {
    const statement = env.DB.prepare(sql);
    await (bindings.length ? statement.bind(...bindings) : statement).run();
    return true;
  } catch (_error) {
    return false;
  }
}

function sqlStringLiteral(value) {
  return `'${String(value ?? "").replace(/'/g, "''")}'`;
}

async function getD1TableColumns(env, table) {
  try {
    const result = await env.DB.prepare(`PRAGMA table_info(${table})`).all();
    return new Set(getResults(result).map((row) => row.name).filter(Boolean));
  } catch (_error) {
    return new Set();
  }
}

async function ensureLearningContractColumnsD1(env) {
  if (!hasRuntimeStore(env)) return;

  for (const [table, columns] of Object.entries(LEARNING_CONTRACT_COLUMNS)) {
    const existing = await getD1TableColumns(env, table);
    if (!existing.size) continue;
    for (const [column, type] of columns) {
      if (!existing.has(column)) {
        await safeD1Run(env, `ALTER TABLE ${table} ADD COLUMN ${column} ${type}`);
      }
    }
  }

  await safeD1Run(env, `
    UPDATE advisory_snapshots
    SET
      contract = COALESCE(contract, json_extract(payload_json, '$.contract'), json_extract(payload_json, '$.ticker')),
      product_id = COALESCE(product_id, json_extract(payload_json, '$.productId'), json_extract(payload_json, '$.product_id'), json_extract(payload_json, '$.contract'), json_extract(payload_json, '$.ticker'))
    WHERE contract IS NULL OR product_id IS NULL
  `);
  await safeD1Run(env, `
    UPDATE micro_predictions
    SET
      contract = COALESCE(contract, json_extract(payload_json, '$.contract'), json_extract(payload_json, '$.ticker')),
      product_id = COALESCE(product_id, json_extract(payload_json, '$.productId'), json_extract(payload_json, '$.product_id'), json_extract(payload_json, '$.contract'), json_extract(payload_json, '$.ticker'))
    WHERE contract IS NULL OR product_id IS NULL
  `);
  await safeD1Run(env, `CREATE INDEX IF NOT EXISTS idx_advisory_snapshots_contract_time ON advisory_snapshots (commodity, product_id, snapshot_time DESC)`);
  await safeD1Run(env, `CREATE INDEX IF NOT EXISTS idx_micro_predictions_contract_eval ON micro_predictions (commodity, product_id, prediction_time)`);
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

function inferServerCommodityFromContract(contract) {
  const text = String(contract || "").trim().toLowerCase();
  if (!text) return "";
  const direct = Object.values(SERVER_COMMODITIES).find((commodity) => (
    [commodity.ticker, commodity.productId].some((value) => String(value || "").toLowerCase() === text)
  ));
  if (direct) return direct.id;
  if (text.startsWith("nol") || text.includes("oil")) return "oil";
  if (text.includes("natural-gas") || text.includes("natgas") || text.includes("ng reference")) return "natural-gas";
  if (text.includes("gold")) return "gold";
  if (text.includes("silver")) return "silver";
  if (text.includes("copper")) return "copper";
  if (text.includes("platinum")) return "platinum";
  return "";
}

function normalizeD1Transaction(entry = {}, fallbackTradeMode = PAPER_TRADE_MODE) {
  const transactionKey = getTransactionKey(entry);
  const tradeMode = normalizeTradeMode(firstPresent(entry.tradeMode, entry.trade_mode, entry.mode), fallbackTradeMode);
  const commodity = firstPresent(entry.commodity, inferServerCommodityFromContract(entry.contract));
  const payloadEntry = { ...entry, commodity, sharedKey: transactionKey, tradeMode };
  const now = new Date().toISOString();

  return {
    transaction_key: transactionKey,
    trade_mode: tradeMode,
    trade_id: textOrNull(firstPresent(entry.tradeId, entry.id)),
    user_email: textOrNull(firstPresent(entry.userEmail, entry.profileEmail, entry.accountEmail, entry.email)),
    commodity: textOrNull(commodity),
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
      .map((entry) => ({
        ...entry,
        commodity: firstPresent(entry.commodity, inferServerCommodityFromContract(entry.contract)),
        tradeMode: normalizeTradeMode(entry.tradeMode, normalizedMode)
      }))
  };
}

async function loadOpenPaperTradesForUserD1(env, transactions = [], userEmail) {
  if (!hasRuntimeStore(env)) return getOpenPaperTradesForUser(transactions, userEmail);
  await ensureTradeTransactionsTable(env);
  const email = normalizeEmail(userEmail);
  if (!email) return [];
  const result = await env.DB.prepare(`
    SELECT o.payload_json
    FROM ${TRADE_TRANSACTION_TABLE} o
    WHERE o.trade_mode = ?
      AND o.user_email = ?
      AND UPPER(o.action) IN ('BUY', 'SELL SHORT')
      AND NOT EXISTS (
        SELECT 1
        FROM ${TRADE_TRANSACTION_TABLE} c
        WHERE c.trade_mode = o.trade_mode
          AND c.user_email = o.user_email
          AND c.trade_id = o.trade_id
          AND c.transaction_time >= o.transaction_time
          AND (
            UPPER(c.action) LIKE '%TARGET%'
            OR UPPER(c.action) LIKE '%STOP%'
            OR UPPER(c.action) LIKE '%PRE-CLOSE%'
            OR UPPER(c.action) LIKE '%ROLL%'
            OR UPPER(c.action) LIKE '%PROFIT LOCK%'
          )
      )
    ORDER BY o.transaction_time ASC
  `).bind(PAPER_TRADE_MODE, email).all();
  const directOpenTrades = getResults(result)
    .map((row) => parseStoredJson(row.payload_json))
    .filter(Boolean)
    .map((entry) => ({
      ...entry,
      commodity: firstPresent(entry.commodity, inferServerCommodityFromContract(entry.contract)),
      tradeMode: PAPER_TRADE_MODE
    }))
    .filter((entry) => isOpeningTransaction(entry) && !isStaleUnclosedOpeningTrade(entry));

  if (directOpenTrades.length) return directOpenTrades;
  return getOpenPaperTradesForUser(transactions, email);
}

async function getD1OpenPaperTradeRows(env) {
  await ensureTradeTransactionsTable(env);
  const result = await env.DB.prepare(`
    SELECT o.user_email, o.payload_json
    FROM ${TRADE_TRANSACTION_TABLE} o
    WHERE o.trade_mode = ?
      AND UPPER(o.action) IN ('BUY', 'SELL SHORT')
      AND NOT EXISTS (
        SELECT 1
        FROM ${TRADE_TRANSACTION_TABLE} c
        WHERE c.trade_mode = o.trade_mode
          AND c.user_email = o.user_email
          AND c.trade_id = o.trade_id
          AND c.transaction_time >= o.transaction_time
          AND (
            UPPER(c.action) LIKE '%TARGET%'
            OR UPPER(c.action) LIKE '%STOP%'
            OR UPPER(c.action) LIKE '%PRE-CLOSE%'
            OR UPPER(c.action) LIKE '%ROLL%'
            OR UPPER(c.action) LIKE '%PROFIT LOCK%'
          )
      )
    ORDER BY o.transaction_time ASC
  `).bind(PAPER_TRADE_MODE).all();
  return getResults(result)
    .map((row) => ({
      userEmail: normalizeEmail(row.user_email),
      trade: parseStoredJson(row.payload_json)
    }))
    .filter((row) => row.userEmail && isOpeningTransaction(row.trade) && !isStaleUnclosedOpeningTrade(row.trade));
}

async function getFirstStoredExitTick(env, openTrade, config, openedAt) {
  const commodity = normalizeServerCommodityId(openTrade.commodity || config.id || inferServerCommodityFromContract(openTrade.contract));
  const productKeys = Array.from(new Set(getServerConfigProductKeys(config)));
  const productClause = productKeys.length
    ? `AND lower(COALESCE(product_id, ticker, '')) IN (${productKeys.map(() => "?").join(", ")})`
    : "";
  const targetPrice = Number(openTrade.targetPrice);
  const stopPrice = Number(openTrade.originalStopPrice ?? openTrade.stopPrice);
  if (!commodity || !Number.isFinite(targetPrice) || !Number.isFinite(stopPrice)) return null;
  await ensurePriceTicksTable(env);
  const condition = openTrade.side === "short"
    ? "(price <= ? OR price >= ?)"
    : "(price >= ? OR price <= ?)";
  const row = await env.DB.prepare(`
    SELECT price, tick_time, source
    FROM price_ticks
    WHERE commodity = ?
      AND tick_time >= ?
      ${productClause}
      AND ${condition}
    ORDER BY tick_time ASC
    LIMIT 1
  `).bind(
    commodity,
    openedAt.toISOString(),
    ...productKeys,
    targetPrice,
    stopPrice
  ).first();
  if (!row) return null;
  const price = Number(row.price);
  const action = getServerExitTrigger(openTrade, price);
  if (!action) return null;
  return {
    action,
    price: getServerExitBoundaryPrice(openTrade, action, price),
    source: `${row.source || "Cloudflare price tick"} protective sweep`,
    time: row.tick_time
  };
}

async function sweepBreachedOpenPaperTradesD1(env, settings = null) {
  if (!hasRuntimeStore(env)) return { closedTrades: 0, decisions: [] };
  const activeSettings = settings || canonicalizeSettingsPayload(await mergeUserStrategyRecordsD1(
    env,
    await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload())
  ));
  const usersByEmail = new Map((Array.isArray(activeSettings.users) ? activeSettings.users : [])
    .map((user) => [normalizeEmail(user.email), user]));
  const openRows = await getD1OpenPaperTradeRows(env);
  const closes = [];
  const decisions = [];

  for (const row of openRows) {
    const openTrade = {
      ...row.trade,
      commodity: firstPresent(row.trade.commodity, inferServerCommodityFromContract(row.trade.contract)),
      tradeMode: PAPER_TRADE_MODE
    };
    const user = usersByEmail.get(row.userEmail) || { email: row.userEmail, name: openTrade.userName || row.userEmail };
    const commodity = normalizeServerCommodityId(openTrade.commodity || inferServerCommodityFromContract(openTrade.contract));
    if (!commodity) continue;
    const config = getServerCommodityConfigForContract(user, commodity, openTrade.contract || "");
    const openedAt = getTransactionDate(openTrade.openedAt || openTrade.time);
    if (Number.isNaN(openedAt.getTime())) continue;
    const tickExit = await getFirstStoredExitTick(env, openTrade, config, openedAt);
    let exit = tickExit;
    if (!exit) {
      const currentPrice = await getServerMarketPrice(env, user, commodity, null, config);
      const currentAction = currentPrice ? getServerExitTrigger(openTrade, currentPrice.price) : null;
      if (currentAction) {
        exit = {
          action: currentAction,
          price: getServerExitBoundaryPrice(openTrade, currentAction, currentPrice.price),
          source: currentPrice.source || "Current server price protective sweep",
          time: currentPrice.time || new Date().toISOString()
        };
      }
    }
    if (!exit) continue;
    const close = makeServerCloseTransaction({
      user,
      email: row.userEmail,
      commodity,
      config,
      openTrade,
      price: { price: exit.price, source: exit.source, time: exit.time },
      action: exit.action,
      note: `Protective stop/target sweep closed ${config.name} ${openTrade.side} from D1 tick history at ${exit.time}. Hard stops and targets are evaluated before advisory logic.`
    });
    closes.push(close);
    decisions.push({
      email: row.userEmail,
      name: user.name || "",
      decision: `${commodity}: protective sweep ${close.action} ${close.contract} at ${close.price}`
    });
  }

  if (closes.length) {
    await upsertUnifiedTransactionRows(env, closes, PAPER_TRADE_MODE);
  }
  return { closedTrades: closes.length, decisions };
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
  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_trade_transactions_open_lookup
    ON ${TRADE_TRANSACTION_TABLE} (trade_mode, user_email, trade_id, transaction_time DESC, action)
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
    contract: textOrNull(snapshot.contract),
    product_id: textOrNull(snapshot.productId),
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
  await ensureLearningContractColumnsD1(env);
  for (const snapshot of snapshots) {
    const row = normalizeD1AdvisorySnapshot(snapshot);
    if (!row) continue;

    await env.DB.prepare(`
      INSERT INTO advisory_snapshots (
        snapshot_key,
        snapshot_time,
        commodity,
        commodity_name,
        contract,
        product_id,
        price,
        conviction,
        llm_score,
        local_score,
        tone,
        label,
        action,
        payload_json,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(snapshot_key) DO UPDATE SET
        snapshot_time = excluded.snapshot_time,
        commodity = excluded.commodity,
        commodity_name = excluded.commodity_name,
        contract = excluded.contract,
        product_id = excluded.product_id,
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
      row.contract,
      row.product_id,
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
  await ensureLearningContractColumnsD1(env);
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
    entry.productId || entry.product_id || entry.contract || "product",
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
    contract: textOrNull(entry.contract || entry.ticker),
    product_id: textOrNull(entry.productId || entry.product_id || entry.contract || entry.ticker),
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
  await ensureLearningContractColumnsD1(env);
  let stored = 0;
  for (const prediction of predictions) {
    const row = normalizeMicroPrediction(prediction);
    if (!row) continue;

    await env.DB.prepare(`
      INSERT INTO micro_predictions (
        prediction_key,
        prediction_time,
        commodity,
        contract,
        product_id,
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
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(prediction_key) DO UPDATE SET
        prediction_time = excluded.prediction_time,
        commodity = excluded.commodity,
        contract = excluded.contract,
        product_id = excluded.product_id,
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
      row.contract,
      row.product_id,
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
  await ensureLearningContractColumnsD1(env);
  const result = await env.DB.prepare(`
    SELECT *
    FROM (
      SELECT
        prediction_key,
        prediction_time,
        commodity,
        COALESCE(product_id, contract, '') AS product_key,
        price,
        horizon_seconds,
        predicted_tone,
        correct
      FROM micro_predictions
      WHERE COALESCE(product_id, contract, '') <> ''
      ORDER BY prediction_time DESC
      LIMIT ?
    )
    ORDER BY prediction_time ASC
  `).bind(MICRO_EVALUATION_LIMIT).all();

  const rows = getResults(result);
  const groups = new Map();
  rows.forEach((row) => {
    const groupKey = `${row.commodity || ""}|${row.product_key || ""}`;
    if (!groups.has(groupKey)) groups.set(groupKey, []);
    groups.get(groupKey).push(row);
  });

  const updates = [];
  groups.forEach((groupRows) => {
    for (let index = 0; index < groupRows.length; index += 1) {
      const row = groupRows[index];
      if (row.correct !== null && row.correct !== undefined) continue;
      const predictionTime = getTransactionDate(row.prediction_time).getTime();
      const horizonMs = (Number(row.horizon_seconds) || 60) * 1000;
      const price = Number(row.price);
      if (!Number.isFinite(predictionTime) || !Number.isFinite(price) || price <= 0) continue;
      const future = groupRows.slice(index + 1).find((candidate) => {
        const futureTime = getTransactionDate(candidate.prediction_time).getTime();
        return Number.isFinite(futureTime) && futureTime >= predictionTime + horizonMs;
      });
      if (!future) continue;
      const futurePrice = Number(future.price);
      if (!Number.isFinite(futurePrice) || futurePrice <= 0) continue;
      const moveBps = ((futurePrice - price) / price) * 10000;
      const tone = row.predicted_tone;
      const correct = tone === "long"
        ? moveBps > 0.5
        : tone === "short"
          ? moveBps < -0.5
          : Math.abs(moveBps) <= 2;
      updates.push({
        predictionKey: row.prediction_key,
        evaluatedAt: future.prediction_time,
        futurePrice,
        moveBps,
        correct: correct ? 1 : 0
      });
    }
  });

  const now = new Date().toISOString();
  for (let index = 0; index < updates.length; index += MICRO_EVALUATION_BATCH_SIZE) {
    const batch = updates.slice(index, index + MICRO_EVALUATION_BATCH_SIZE);
    const keys = batch.map((item) => sqlStringLiteral(item.predictionKey)).join(",");
    const evaluatedCase = batch.map((item) => `WHEN ${sqlStringLiteral(item.predictionKey)} THEN ${sqlStringLiteral(item.evaluatedAt)}`).join(" ");
    const futureCase = batch.map((item) => `WHEN ${sqlStringLiteral(item.predictionKey)} THEN ${Number(item.futurePrice)}`).join(" ");
    const moveCase = batch.map((item) => `WHEN ${sqlStringLiteral(item.predictionKey)} THEN ${Number(item.moveBps)}`).join(" ");
    const correctCase = batch.map((item) => `WHEN ${sqlStringLiteral(item.predictionKey)} THEN ${Number(item.correct)}`).join(" ");
    await env.DB.prepare(`
      UPDATE micro_predictions
      SET
        evaluated_at = CASE prediction_key ${evaluatedCase} ELSE evaluated_at END,
        future_price = CASE prediction_key ${futureCase} ELSE future_price END,
        move_bps = CASE prediction_key ${moveCase} ELSE move_bps END,
        correct = CASE prediction_key ${correctCase} ELSE correct END,
        updated_at = ?
      WHERE prediction_key IN (${keys})
    `).bind(now).run();
  }
}

async function loadMicroPredictionPayloadD1(env, limit = 500) {
  await evaluateMicroPredictionsD1(env);
  const result = await env.DB.prepare(`
    SELECT payload_json, contract, product_id, evaluated_at, future_price, move_bps, correct
    FROM micro_predictions
    ORDER BY prediction_time DESC
    LIMIT ?
  `).bind(Math.max(1, Math.min(Number(limit) || 500, 2000))).all();

  const predictions = getResults(result).map((row) => {
    const payload = parseStoredJson(row.payload_json);
    if (!payload) return null;
    return {
      ...payload,
      contract: payload.contract || row.contract || "",
      productId: payload.productId || row.product_id || "",
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
  const response = await fetchWithTimeout(`${baseUrl.replace(/\/$/, "")}/chat/completions`, {
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
  }, OPENROUTER_FETCH_TIMEOUT_MS);

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

function hasMarkovMethodHistoryEntry(history = []) {
  return (Array.isArray(history) ? history : []).some((entry) => entry?.id === MARKOV_METHOD_STRATEGY_CHANGE_ID);
}

function applyMarkovMethodSeedToRecord(record = {}, email = "") {
  const normalizedEmail = normalizeEmail(email || record.email);
  if (!MARKOV_METHOD_TEST_AGENT_EMAILS.has(normalizedEmail)) return record;

  const history = Array.isArray(record.strategyHistory) ? record.strategyHistory : [];
  if (hasMarkovMethodHistoryEntry(history)) return record;

  const strategy = record.strategy && typeof record.strategy === "object" && !Array.isArray(record.strategy)
    ? record.strategy
    : {};
  const before = {
    ...strategy,
    markovHedgeFundMethod: false
  };
  const after = {
    ...strategy,
    markovHedgeFundMethod: true,
    markovRegimeMoveBps: Number(strategy.markovRegimeMoveBps) || 8,
    markovSidewaysThresholdBoost: Number(strategy.markovSidewaysThresholdBoost) || 5,
    markovSidewaysSizeMultiplier: Number(strategy.markovSidewaysSizeMultiplier) || 0.5
  };
  const historyEntry = {
    id: MARKOV_METHOD_STRATEGY_CHANGE_ID,
    changedAt: "2026-05-21T00:00:00.000Z",
    changedByName: "Peter Bell",
    changedByEmail: "peter@pjbell.com",
    summary: MARKOV_METHOD_STRATEGY_CHANGE_TEXT,
    detail: MARKOV_METHOD_STRATEGY_CHANGE_DETAIL,
    before,
    after
  };

  return {
    ...record,
    strategy: after,
    strategyHistory: [historyEntry, ...history].slice(0, 50)
  };
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

function isStaleUnclosedOpeningTrade(entry) {
  if (!isOpeningTransaction(entry)) return false;
  const openedAt = getTransactionDate(entry.openedAt || entry.time).getTime();
  return Number.isFinite(openedAt) && Date.now() - openedAt > STALE_UNCLOSED_OPEN_TRADE_MS;
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
  return Array.from(active.values()).filter((entry) => !isStaleUnclosedOpeningTrade(entry));
}

function getEnabledCommodityOpenTrades(openTrades = [], enabledCommodities = []) {
  const enabled = new Set((Array.isArray(enabledCommodities) ? enabledCommodities : []).map(normalizeServerCommodityId).filter(Boolean));
  if (!enabled.size) return openTrades;
  return openTrades.filter((trade) => enabled.has(normalizeServerCommodityId(trade.commodity || inferServerCommodityFromContract(trade.contract))));
}

function shouldUseExclusiveMartingale(user = {}) {
  const type = String(user.strategy?.type || "").toLowerCase();
  const name = String(user.strategy?.name || "").toLowerCase();
  return type.includes("martingale") || name.includes("martingale");
}

function isMarkovMethodTestAgent(user = {}) {
  return MARKOV_METHOD_TEST_AGENT_EMAILS.has(normalizeEmail(user.email || user.userEmail || ""));
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
    breakoutMinMoveBps: clamp(Number(strategy.breakoutMinMoveBps) || 3, 0, 50),
    trendCaptureMode: strategy.trendCaptureMode !== false,
    markovHedgeFundMethod: Object.prototype.hasOwnProperty.call(strategy, "markovHedgeFundMethod")
      ? strategy.markovHedgeFundMethod === true
      : isMarkovMethodTestAgent(user),
    markovRegimeMoveBps: clamp(Number(strategy.markovRegimeMoveBps) || 8, 1, 100),
    markovSidewaysThresholdBoost: clamp(Math.round(Number(strategy.markovSidewaysThresholdBoost) || 5), 0, 30),
    markovSidewaysSizeMultiplier: clamp(Number(strategy.markovSidewaysSizeMultiplier) || 0.5, 0.1, 1),
    trendDayDirectionalHold: strategy.trendDayDirectionalHold !== false,
    blockLongsInFallingTrend: strategy.blockLongsInFallingTrend !== false,
    volatilityAwareStops: strategy.volatilityAwareStops !== false,
    postStopShortReentry: strategy.postStopShortReentry !== false,
    trendDayBias: strategy.trendDayBias !== false,
    noChaseEntries: strategy.noChaseEntries !== false,
    pullbackEntryRequired: strategy.pullbackEntryRequired !== false,
    profitLockTrailingStop: strategy.profitLockTrailingStop !== false,
    missedOpportunityLearner: strategy.missedOpportunityLearner !== false,
    noChaseMoveBps: clamp(Number(strategy.noChaseMoveBps) || 18, 0, 100),
    pullbackMinRetraceBps: clamp(Number(strategy.pullbackMinRetraceBps) || 2, 0, 30),
    profitLockMinMoveBps: clamp(Number(strategy.profitLockMinMoveBps) || 10, 0, 100),
    profitLockGivebackPct: clamp(Number(strategy.profitLockGivebackPct) || 35, 5, 80),
    missedOpportunityMoveBps: clamp(Number(strategy.missedOpportunityMoveBps) || 20, 5, 200)
  };
}

function getClosedPaperTradesForUser(transactions = [], userEmail) {
  return getTransactionsForUser(transactions, userEmail)
    .filter(isClosingTransaction)
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));
}

function getNextServerMartingaleStep(transactions = [], userEmail, maxStep = 4, commodity = "") {
  const normalizedCommodity = normalizeServerCommodityId(commodity);
  const closed = getClosedPaperTradesForUser(transactions, userEmail)
    .filter((entry) => {
      if (!normalizedCommodity) return true;
      return normalizeServerCommodityId(entry.commodity || inferServerCommodityFromContract(entry.contract)) === normalizedCommodity;
    });
  const latest = closed[0];
  if (!latest || Number(latest.pnl) >= 0) return 1;

  const latestStep = clamp(Math.round(Number(latest.step) || 1), 1, maxStep);
  return latestStep >= maxStep ? 1 : Math.min(maxStep, latestStep + 1);
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

function getServerConfigProductKeys(config = {}) {
  return [
    config.productId,
    config.ticker,
    ...(Array.isArray(config.contracts) ? config.contracts.flatMap((contract) => [contract.productId, contract.ticker]) : [])
  ]
    .map((item) => String(item || "").trim().toLowerCase())
    .filter((item, index, all) => item && all.indexOf(item) === index);
}

async function getLatestAdvisoryByCommodity(env, commodity, config = null) {
  await ensureLearningContractColumnsD1(env);
  const productKeys = getServerConfigProductKeys(config || {});
  const placeholders = productKeys.map(() => "?").join(", ");
  const bindings = productKeys.length ? [commodity, ...productKeys] : [commodity];
  const row = await env.DB.prepare(`
    SELECT payload_json
    FROM advisory_snapshots
    WHERE commodity = ?
      ${productKeys.length ? `AND lower(COALESCE(product_id, contract, '')) IN (${placeholders})` : ""}
    ORDER BY snapshot_time DESC
    LIMIT 1
  `).bind(...bindings).first();
  return parseStoredJson(row?.payload_json, null);
}

function getServerCommodityConfig(user = {}, commodity = "oil") {
  const base = SERVER_COMMODITIES[commodity] || SERVER_COMMODITIES.oil;
  const terms = user.commodityTradeTerms && typeof user.commodityTradeTerms === "object"
    ? user.commodityTradeTerms[commodity] || {}
    : {};
  return getServerActiveCommodityContract({
    ...base,
    ...terms,
    contracts: Array.isArray(base.contracts) ? base.contracts : [],
    id: commodity,
    name: base.name,
    ticker: terms.ticker || base.ticker,
    productId: terms.productId || terms.ticker || base.productId,
    contractMonth: terms.contractMonth || base.contractMonth || "Front month",
    contractExpiresAt: terms.contractExpiresAt || base.contractExpiresAt || "",
    rollBeforeDays: Number.isFinite(Number(terms.rollBeforeDays ?? base.rollBeforeDays))
      ? clamp(Math.round(Number(terms.rollBeforeDays ?? base.rollBeforeDays)), 0, 30)
      : 3
  });
}

function getServerActiveCommodityContract(config = {}, value = new Date()) {
  const contracts = Array.isArray(config.contracts) ? config.contracts : [];
  if (!contracts.length) return config;

  const key = String(config.productId || config.ticker || "").toLowerCase();
  let index = contracts.findIndex((contract) => (
    [contract.productId, contract.ticker].some((item) => String(item || "").toLowerCase() === key)
  ));
  if (index < 0) index = 0;
  const current = contracts[index] || {};
  const expiration = current.contractExpiresAt ? new Date(current.contractExpiresAt) : null;
  const rollBeforeMs = Math.max(0, Number(config.rollBeforeDays) || 0) * 24 * 60 * 60 * 1000;
  const inRollWindow = expiration
    && !Number.isNaN(expiration.getTime())
    && value.getTime() >= expiration.getTime() - rollBeforeMs
    && contracts[index + 1];
  const active = inRollWindow ? contracts[index + 1] : current;
  return {
    ...config,
    ...active,
    contracts,
    rolledFromTicker: inRollWindow ? current.ticker || config.ticker : "",
    rolledFromProductId: inRollWindow ? current.productId || config.productId : "",
    rollReason: inRollWindow ? `${current.ticker || "Front contract"} is inside the roll window; new entries use ${active.ticker || active.productId}.` : ""
  };
}

function getServerCommodityConfigForContract(user = {}, commodity = "oil", contractId = "") {
  const activeConfig = getServerCommodityConfig(user, commodity);
  const key = String(contractId || "").toLowerCase();
  const match = (Array.isArray(activeConfig.contracts) ? activeConfig.contracts : []).find((contract) => (
    [contract.productId, contract.ticker].some((item) => String(item || "").toLowerCase() === key)
  ));
  return match
    ? { ...activeConfig, ...match, rolledFromTicker: "", rolledFromProductId: "", rollReason: "" }
    : activeConfig;
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
  await savePriceTick(env, snapshot);
  await pruneOldPriceTicks(env);
}

async function ensurePriceTicksTable(env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS price_ticks (
      tick_key TEXT PRIMARY KEY,
      commodity TEXT NOT NULL,
      product_id TEXT,
      ticker TEXT,
      price REAL NOT NULL,
      best_bid REAL,
      best_ask REAL,
      last_trade REAL,
      method TEXT,
      ok INTEGER NOT NULL DEFAULT 1,
      tick_time TEXT NOT NULL,
      source TEXT,
      payload_json TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `).run();
  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_price_ticks_commodity_time
    ON price_ticks (commodity, tick_time DESC)
  `).run();
  await env.DB.prepare(`
    CREATE INDEX IF NOT EXISTS idx_price_ticks_product_time
    ON price_ticks (product_id, tick_time DESC)
  `).run();
}

function getPriceTickKey(snapshot) {
  return [
    snapshot?.id || "commodity",
    snapshot?.productId || snapshot?.ticker || "product",
    snapshot?.fetchedAt || new Date().toISOString()
  ].join("|");
}

async function savePriceTick(env, snapshot) {
  const price = Number(snapshot?.price);
  if (!snapshot?.id || !Number.isFinite(price) || price <= 0) return;
  const now = new Date().toISOString();
  const tickTime = snapshot.fetchedAt || now;
  await ensurePriceTicksTable(env);
  await env.DB.prepare(`
    INSERT INTO price_ticks (
      tick_key, commodity, product_id, ticker, price, best_bid, best_ask,
      last_trade, method, ok, tick_time, source, payload_json, updated_at
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(tick_key) DO UPDATE SET
      product_id = excluded.product_id,
      ticker = excluded.ticker,
      price = excluded.price,
      best_bid = excluded.best_bid,
      best_ask = excluded.best_ask,
      last_trade = excluded.last_trade,
      method = excluded.method,
      ok = excluded.ok,
      source = excluded.source,
      payload_json = excluded.payload_json,
      updated_at = excluded.updated_at
  `).bind(
    getPriceTickKey(snapshot),
    snapshot.id,
    snapshot.productId || null,
    snapshot.ticker || null,
    price,
    Number.isFinite(Number(snapshot.bestBid)) ? Number(snapshot.bestBid) : null,
    Number.isFinite(Number(snapshot.bestAsk)) ? Number(snapshot.bestAsk) : null,
    Number.isFinite(Number(snapshot.lastTrade)) ? Number(snapshot.lastTrade) : null,
    snapshot.method || null,
    snapshot.ok ? 1 : 0,
    tickTime,
    "cloudflare-d1-price-tick",
    JSON.stringify(snapshot),
    now
  ).run();
}

async function pruneOldPriceTicks(env) {
  const cutoff = new Date(Date.now() - (PRICE_TICK_RETENTION_DAYS * 24 * 60 * 60 * 1000)).toISOString();
  await ensurePriceTicksTable(env);
  await env.DB.prepare(`
    DELETE FROM price_ticks
    WHERE tick_time < ?
  `).bind(cutoff).run();
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
    const activeCommodity = getServerActiveCommodityContract(commodity);
    const existing = stored[commodity.id];
    const existingMatchesActiveContract = existing
      && [existing.productId, existing.ticker].some((item) => (
        String(item || "").toLowerCase() === String(activeCommodity.productId || activeCommodity.ticker || "").toLowerCase()
      ));
    if (!forceRefresh && existingMatchesActiveContract && existing?.ok && isFreshPriceSnapshot(existing)) return existing;

    const snapshot = await fetchCoinbasePriceSnapshot(activeCommodity);
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

function toLitePriceSnapshot(snapshot = {}) {
  return {
    id: snapshot.id,
    ticker: snapshot.ticker,
    productId: snapshot.productId,
    productType: snapshot.productType,
    contractMonth: snapshot.contractMonth,
    fetchedAt: snapshot.fetchedAt,
    price: snapshot.price,
    bestBid: snapshot.bestBid,
    bestAsk: snapshot.bestAsk,
    lastTrade: snapshot.lastTrade,
    minimumTradeValue: snapshot.minimumTradeValue,
    method: snapshot.method,
    ok: snapshot.ok,
    stale: snapshot.stale,
    error: snapshot.error,
    refreshError: snapshot.refreshError
  };
}

function toLitePriceSnapshotsPayload(payload = {}) {
  return {
    ...payload,
    prices: Object.fromEntries(Object.entries(payload.prices || {}).map(([commodity, snapshot]) => [
      commodity,
      toLitePriceSnapshot(snapshot)
    ]))
  };
}

async function handlePriceSnapshotsRoute(env, request, origin) {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const url = new URL(request.url);
  const forceRefresh = url.searchParams.get("refresh") === "1" || url.searchParams.get("refresh") === "true";
  const lite = url.searchParams.get("lite") === "1" || url.searchParams.get("lite") === "true";
  const payload = await getPriceSnapshots(env, forceRefresh);
  return cachedJsonResponse(lite ? toLitePriceSnapshotsPayload(payload) : payload, 200, origin);
}

function getPriceHistoryCutoff(period = "day") {
  const now = Date.now();
  if (period === "hour") return now - (60 * 60 * 1000);
  if (period === "day") return now - (24 * 60 * 60 * 1000);
  if (period === "week") return now - (7 * 24 * 60 * 60 * 1000);
  if (period === "month") return now - (31 * 24 * 60 * 60 * 1000);
  if (period === "all") return 0;
  return now - (24 * 60 * 60 * 1000);
}

function getPriceHistoryBucketMs(period = "day") {
  if (period === "hour") return 30 * 1000;
  if (period === "day") return 5 * 60 * 1000;
  if (period === "week") return 30 * 60 * 1000;
  if (period === "month") return 2 * 60 * 60 * 1000;
  if (period === "all") return 6 * 60 * 60 * 1000;
  return 5 * 60 * 1000;
}

function downsamplePriceHistory(samples = [], period = "day") {
  const bucketMs = getPriceHistoryBucketMs(period);
  const buckets = new Map();
  for (const sample of samples) {
    const time = getTransactionDate(sample.time).getTime();
    if (!Number.isFinite(time)) continue;
    buckets.set(Math.floor(time / bucketMs), sample);
  }
  return Array.from(buckets.values()).sort((a, b) => (
    getTransactionDate(a.time).getTime() - getTransactionDate(b.time).getTime()
  ));
}

async function getPriceHistory(env, commodity = "oil", period = "day") {
  const normalizedCommodity = normalizeServerCommodityId(commodity);
  const baseConfig = SERVER_COMMODITIES[normalizedCommodity] || SERVER_COMMODITIES.oil;
  const config = getServerActiveCommodityContract(baseConfig);
  const cutoff = getPriceHistoryCutoff(period);
  const productKeys = [config.productId, config.ticker]
    .map((item) => String(item || "").trim().toLowerCase())
    .filter(Boolean);
  const productClause = productKeys.length
    ? `AND lower(COALESCE(product_id, ticker, '')) IN (${productKeys.map(() => "?").join(", ")})`
    : "";

  await ensurePriceTicksTable(env);
  const result = await env.DB.prepare(`
    SELECT tick_time, price, product_id, ticker, source
    FROM price_ticks
    WHERE commodity = ?
      AND tick_time >= ?
      ${productClause}
    ORDER BY tick_time ASC
    LIMIT 2500
  `).bind(
    normalizedCommodity,
    new Date(cutoff || 0).toISOString(),
    ...productKeys
  ).all();

  const rawSamples = getResults(result)
    .map((row) => ({
      time: row.tick_time,
      price: Number(row.price),
      productId: row.product_id || "",
      ticker: row.ticker || "",
      source: row.source || "cloudflare-d1-price-tick"
    }))
    .filter((sample) => Number.isFinite(sample.price) && sample.price > 0);
  const samples = downsamplePriceHistory(rawSamples, period);

  return {
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-price-history",
    commodity: normalizedCommodity,
    period,
    rawSampleCount: rawSamples.length,
    sampleCount: samples.length,
    bucketMs: getPriceHistoryBucketMs(period),
    ticker: config.ticker,
    productId: config.productId,
    contractMonth: config.contractMonth,
    samples
  };
}

async function handlePriceHistoryRoute(env, request, origin) {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }
  if (!hasRuntimeStore(env)) {
    return jsonResponse({ error: "Price history requires the Cloudflare D1 runtime store." }, 503, origin);
  }

  const url = new URL(request.url);
  const commodity = url.searchParams.get("commodity") || "oil";
  const period = url.searchParams.get("period") || "day";
  const payload = await getPriceHistory(env, commodity, period);
  return cachedJsonResponse(payload, 200, origin, "public, max-age=30, stale-while-revalidate=120");
}

function getLeaderboardCutoff(period = "all") {
  const now = Date.now();
  if (period === "hour") return now - (60 * 60 * 1000);
  if (period === "day") return now - (24 * 60 * 60 * 1000);
  if (period === "week") return now - (7 * 24 * 60 * 60 * 1000);
  if (period === "month") return now - (30 * 24 * 60 * 60 * 1000);
  if (period === "year") return now - (365 * 24 * 60 * 60 * 1000);
  return 0;
}

const LEADERBOARD_PERIODS = ["all", "hour", "day", "week", "month", "year"];
const LEADERBOARD_SUMMARY_CACHE_PREFIX = "leaderboard-summary";
const LEADERBOARD_SUMMARY_MAX_AGE_MS = 10 * 60 * 1000;
const ADVISORY_SUMMARY_CACHE_KEY = "advisory-summary";
const ADVISORY_SUMMARY_MAX_AGE_MS = 2 * 60 * 1000;

function normalizeLeaderboardPeriod(period = "all") {
  const normalized = String(period || "all").toLowerCase();
  return LEADERBOARD_PERIODS.includes(normalized) ? normalized : "all";
}

function getLeaderboardSummaryCacheKey(period = "all") {
  return `${LEADERBOARD_SUMMARY_CACHE_PREFIX}:${normalizeLeaderboardPeriod(period)}`;
}

function getServerDisplayPnl(entry = {}) {
  const value = Number(firstPresent(entry.netPnl, entry.pnl, entry.grossPnl));
  return Number.isFinite(value) ? value : 0;
}

function getServerEntryTime(entry = {}) {
  return getTransactionDate(entry.time || entry.closedAt || entry.openedAt).getTime();
}

function getServerOpenPnl(entry = {}, priceSnapshots = {}) {
  const commodity = normalizeServerCommodityId(entry.commodity || inferServerCommodityFromContract(entry.contract));
  const snapshot = priceSnapshots[commodity];
  const livePrice = Number(snapshot?.price);
  if (!Number.isFinite(livePrice) || livePrice <= 0) return 0;
  const pnl = getServerTradeNetPnl({
    ...entry,
    entryPrice: Number(entry.entryPrice ?? entry.price),
    contractMultiplier: Number(entry.contractMultiplier),
    contracts: Number(entry.contracts),
    quantity: Number(entry.quantity),
    openFee: Number(entry.openFee),
    estimatedExitFee: Number(entry.estimatedExitFee)
  }, livePrice);
  return Number.isFinite(pnl) ? pnl : 0;
}

function getServerLeaderboardSeries(entries = []) {
  let closedPnl = 0;
  let opened = 0;
  let closed = 0;
  let wins = 0;
  return entries
    .slice()
    .sort((a, b) => getServerEntryTime(a) - getServerEntryTime(b))
    .map((entry) => {
      if (isOpeningTransaction(entry)) opened += 1;
      if (isClosingTransaction(entry)) {
        const pnl = getServerDisplayPnl(entry);
        closedPnl += pnl;
        closed += 1;
        if (pnl > 0) wins += 1;
      }
      return {
        time: getServerEntryTime(entry),
        closedPnl,
        trades: opened,
        winRate: closed ? (wins / closed) * 100 : 0,
        expectancy: closed ? closedPnl / closed : 0
      };
    })
    .filter((point) => Number.isFinite(point.time) && point.time > 0);
}

function getMatchedClosingTransactions(entries = [], allEntries = entries) {
  const openings = allEntries.filter(isOpeningTransaction);
  const byOpening = new Map();
  entries.filter(isClosingTransaction).forEach((entry) => {
    const opening = openings.find((candidate) => closingEntryMatchesOpenTrade(entry, candidate));
    if (!opening) return;
    const key = getTradeIdentityKey(opening)
      || `${getTradeLifecycleKey(opening)}|${getTransactionDate(opening.openedAt || opening.time).toISOString()}`;
    const existing = byOpening.get(key);
    if (!existing || getServerEntryTime(entry) > getServerEntryTime(existing)) {
      byOpening.set(key, entry);
    }
  });
  return Array.from(byOpening.values());
}

function getServerLeaderboardRows(settings = {}, transactions = [], priceSnapshots = {}, period = "all") {
  const normalizedPeriod = normalizeLeaderboardPeriod(period);
  const cutoff = getLeaderboardCutoff(normalizedPeriod);
  const modelSettings = normalizeServerModelSettings(settings.modelSettings);
  const users = Array.isArray(settings.users) ? settings.users : [];
  return users.map((user) => {
    const email = normalizeEmail(user.email);
    const scheduler = getUserPaperSchedulerSettings(user, {}, modelSettings);
    const enabledCommodities = new Set((scheduler.commodities || []).map(normalizeServerCommodityId).filter(Boolean));
    const userEntries = transactions.filter((entry) => {
      if (getTransactionUserEmail(entry) !== email) return false;
      const commodity = normalizeServerCommodityId(entry.commodity || inferServerCommodityFromContract(entry.contract));
      return !enabledCommodities.size || enabledCommodities.has(commodity);
    });
    const periodEntries = userEntries.filter((entry) => !cutoff || getServerEntryTime(entry) >= cutoff);
    const closed = getMatchedClosingTransactions(periodEntries, userEntries);
    const openTrades = getEnabledCommodityOpenTrades(getOpenPaperTradesForUser(transactions, email), scheduler.commodities || []);
    const closedPnl = closed.reduce((total, entry) => total + getServerDisplayPnl(entry), 0);
    const openPnl = openTrades.reduce((total, entry) => total + getServerOpenPnl(entry, priceSnapshots), 0);
    const tradeCount = periodEntries.filter(isOpeningTransaction).length;
    const wins = closed.filter((entry) => getServerDisplayPnl(entry) > 0).length;
    const lastTradeTime = userEntries.reduce((latest, entry) => Math.max(latest, getServerEntryTime(entry)), 0);

    return {
      user: {
        name: user.name || email,
        email,
        avatarDataUrl: user.avatarDataUrl || "",
        paperTrading: user.paperTrading || {},
        strategy: user.strategy || {},
        strategyHistory: user.strategyHistory || []
      },
      name: user.name || email,
      email,
      closedPnl,
      openPnl,
      totalPnl: closedPnl + openPnl,
      tradeCount,
      closedCount: closed.length,
      activeOpenCount: openTrades.length,
      rawRowCount: periodEntries.length,
      winRate: closed.length ? (wins / closed.length) * 100 : null,
      expectancy: closed.length ? closedPnl / closed.length : null,
      lastTradeTime: lastTradeTime ? new Date(lastTradeTime).toISOString() : null,
      schedulerSummary: `${scheduler.lastEvaluationAt ? scheduler.lastEvaluationAt : "Never"}: ${scheduler.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision}`,
      groupNote: "",
      series: getServerLeaderboardSeries(periodEntries.filter((entry) => (
        isOpeningTransaction(entry) || closed.some((close) => close === entry)
      )))
    };
  });
}

function buildServerLeaderboardSummary(settings = {}, transactions = [], priceSnapshots = {}, period = "all", source = "cloudflare-d1-leaderboard") {
  const normalizedPeriod = normalizeLeaderboardPeriod(period);
  return {
    generatedAt: new Date().toISOString(),
    source,
    storage: "d1",
    period: normalizedPeriod,
    rows: getServerLeaderboardRows(settings, transactions, priceSnapshots, normalizedPeriod)
  };
}

async function saveLeaderboardSummaryCache(env, settings = {}, transactions = [], priceSnapshots = {}, periods = LEADERBOARD_PERIODS) {
  const normalizedPeriods = Array.from(new Set((Array.isArray(periods) ? periods : LEADERBOARD_PERIODS).map(normalizeLeaderboardPeriod)));
  for (const period of normalizedPeriods) {
    await saveRuntimeDocumentD1(
      env,
      getLeaderboardSummaryCacheKey(period),
      buildServerLeaderboardSummary(settings, transactions, priceSnapshots, period, "cloudflare-d1-leaderboard-cache")
    );
  }
}

async function loadLeaderboardSummaryCache(env, period = "all", { allowStale = true } = {}) {
  const normalizedPeriod = normalizeLeaderboardPeriod(period);
  const cached = await getRuntimeDocumentD1(env, getLeaderboardSummaryCacheKey(normalizedPeriod), null);
  if (!cached || !Array.isArray(cached.rows)) return null;
  const generatedAt = getTransactionDate(cached.generatedAt).getTime();
  const ageMs = Number.isFinite(generatedAt) ? Date.now() - generatedAt : Number.POSITIVE_INFINITY;
  const fresh = ageMs <= LEADERBOARD_SUMMARY_MAX_AGE_MS;
  if (!fresh && !allowStale) return null;
  return {
    ...cached,
    source: fresh ? cached.source || "cloudflare-d1-leaderboard-cache" : "cloudflare-d1-leaderboard-cache-stale",
    cacheAgeMs: Number.isFinite(ageMs) ? ageMs : null,
    stale: !fresh
  };
}

async function refreshLeaderboardSummaryCache(env, periods = LEADERBOARD_PERIODS) {
  const settings = canonicalizeSettingsPayload(await mergeUserStrategyRecordsD1(
    env,
    await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload())
  ));
  const payload = await loadUnifiedTransactionPayloadD1(env, PAPER_TRADE_MODE, PAPER_LEDGER_SOURCE);
  const priceSnapshots = await loadStoredPriceSnapshots(env);
  await saveLeaderboardSummaryCache(env, settings, payload.transactions || [], priceSnapshots, periods);
  return buildServerLeaderboardSummary(settings, payload.transactions || [], priceSnapshots, normalizeLeaderboardPeriod(periods[0]), "cloudflare-d1-leaderboard-refreshed");
}

async function handleLeaderBoardRoute(env, request, origin, ctx = null) {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }
  const url = new URL(request.url);
  const period = normalizeLeaderboardPeriod(url.searchParams.get("period") || "all");
  const forceRefresh = url.searchParams.get("refresh") === "1" || url.searchParams.get("refresh") === "true";
  const cached = !forceRefresh ? await loadLeaderboardSummaryCache(env, period, { allowStale: true }) : null;
  if (cached && !cached.stale) {
    return jsonResponse(cached, 200, origin);
  }
  if (cached && ctx?.waitUntil) {
    ctx.waitUntil(refreshLeaderboardSummaryCache(env, [period]).catch((error) => {
      console.error("leaderboard cache refresh failed", error);
    }));
    return jsonResponse(cached, 200, origin);
  }

  try {
    const fresh = await refreshLeaderboardSummaryCache(env, [period]);
    return jsonResponse(fresh, 200, origin);
  } catch (error) {
    if (cached) return jsonResponse({ ...cached, error: error.message }, 200, origin);
    throw error;
  }
}

async function buildAdvisorySummary(env, source = "cloudflare-d1-advisory-summary") {
  await ensureLearningContractColumnsD1(env);
  const rows = await env.DB.prepare(`
    SELECT payload_json
    FROM advisory_snapshots
    ORDER BY snapshot_time DESC
    LIMIT 400
  `).all();
  const byCommodity = new Map();
  getResults(rows)
    .map((row) => parseStoredJson(row.payload_json))
    .filter(Boolean)
    .forEach((snapshot) => {
      const commodity = normalizeServerCommodityId(snapshot.commodity || "oil");
      if (!commodity || byCommodity.has(commodity)) return;
      const config = getServerCommodityConfig({}, commodity);
      const productKey = String(snapshot.productId || snapshot.product_id || snapshot.contract || "").trim().toLowerCase();
      const activeProductKeys = getServerConfigProductKeys(config);
      if (productKey && activeProductKeys.length && !activeProductKeys.includes(productKey)) return;
      byCommodity.set(commodity, snapshot);
    });

  const marketStatus = getUserMarketScheduleStatus(normalizeMarketCalendarSettings({}));
  const prices = await loadStoredPriceSnapshots(env);
  return {
    generatedAt: new Date().toISOString(),
    source,
    storage: "d1",
    snapshots: Array.from(byCommodity.values()),
    prices,
    marketStatus
  };
}

async function saveAdvisorySummaryCache(env) {
  const summary = await buildAdvisorySummary(env, "cloudflare-d1-advisory-summary-cache");
  await saveRuntimeDocumentD1(env, ADVISORY_SUMMARY_CACHE_KEY, summary);
  return summary;
}

async function loadAdvisorySummaryCache(env, { allowStale = true } = {}) {
  const cached = await getRuntimeDocumentD1(env, ADVISORY_SUMMARY_CACHE_KEY, null);
  if (!cached || !Array.isArray(cached.snapshots)) return null;
  const generatedAt = getTransactionDate(cached.generatedAt).getTime();
  const ageMs = Number.isFinite(generatedAt) ? Date.now() - generatedAt : Number.POSITIVE_INFINITY;
  const fresh = ageMs <= ADVISORY_SUMMARY_MAX_AGE_MS;
  if (!fresh && !allowStale) return null;
  return {
    ...cached,
    source: fresh ? cached.source || "cloudflare-d1-advisory-summary-cache" : "cloudflare-d1-advisory-summary-cache-stale",
    cacheAgeMs: Number.isFinite(ageMs) ? ageMs : null,
    stale: !fresh
  };
}

async function handleAdvisorySummaryRoute(env, request, origin, ctx = null) {
  if (request.method !== "GET") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }
  const url = new URL(request.url);
  const forceRefresh = url.searchParams.get("refresh") === "1" || url.searchParams.get("refresh") === "true";
  const cached = !forceRefresh ? await loadAdvisorySummaryCache(env, { allowStale: true }) : null;
  if (cached && !cached.stale) return jsonResponse(cached, 200, origin);
  if (cached && ctx?.waitUntil) {
    ctx.waitUntil(saveAdvisorySummaryCache(env).catch((error) => {
      console.error("advisory summary cache refresh failed", error);
    }));
    return jsonResponse(cached, 200, origin);
  }

  try {
    const fresh = await saveAdvisorySummaryCache(env);
    return jsonResponse(fresh, 200, origin);
  } catch (error) {
    if (cached) return jsonResponse({ ...cached, error: error.message }, 200, origin);
    throw error;
  }
}

async function getServerMarketPrice(env, user, commodity, advisory = null, overrideConfig = null) {
  const config = overrideConfig || getServerCommodityConfig(user, commodity);
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

  try {
    const stored = await loadStoredPriceSnapshots(env);
    const snapshot = stored[commodity];
    const snapshotPrice = Number(snapshot?.price);
    const snapshotMatchesContract = !snapshot
      || !config.productId
      || [snapshot.productId, snapshot.ticker].some((item) => String(item || "").toLowerCase() === String(config.productId || config.ticker || "").toLowerCase());
    if (snapshot?.ok && snapshotMatchesContract && Number.isFinite(snapshotPrice) && snapshotPrice > 0 && isFreshPriceSnapshot(snapshot)) {
      return {
        price: snapshotPrice,
        source: "Cloudflare price snapshot",
        time: snapshot.fetchedAt || new Date().toISOString()
      };
    }
  } catch (_error) {
    // If the snapshot table is unavailable, continue to advisory and micro fallbacks.
  }

  const advisoryPrice = Number(advisory?.price);
  const advisoryTime = getTransactionDate(advisory?.time);
  const advisoryFresh = Date.now() - advisoryTime.getTime() <= PAPER_SCHEDULER_PRICE_STALE_MS;
  const advisoryProductKey = String(advisory?.productId || advisory?.product_id || advisory?.contract || "").trim().toLowerCase();
  const configProductKeys = getServerConfigProductKeys(config);
  const advisoryMatchesContract = !advisoryProductKey || !configProductKeys.length || configProductKeys.includes(advisoryProductKey);
  if (Number.isFinite(advisoryPrice) && advisoryPrice > 0 && advisoryFresh && advisoryMatchesContract) {
    return {
      price: advisoryPrice,
      source: "Latest advisory snapshot",
      time: advisoryTime.toISOString()
    };
  }

  await ensureLearningContractColumnsD1(env);
  const productKeys = getServerConfigProductKeys(config);
  const placeholders = productKeys.map(() => "?").join(", ");
  const micro = await env.DB.prepare(`
    SELECT price, prediction_time
    FROM micro_predictions
    WHERE commodity = ?
      ${productKeys.length ? `AND lower(COALESCE(product_id, contract, '')) IN (${placeholders})` : ""}
    ORDER BY prediction_time DESC
    LIMIT 1
  `).bind(...(productKeys.length ? [commodity, ...productKeys] : [commodity])).first();
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

async function getLatestServerMicroPrediction(env, commodity, config = null) {
  await ensureLearningContractColumnsD1(env);
  const productKeys = getServerConfigProductKeys(config || {});
  const placeholders = productKeys.map(() => "?").join(", ");
  const row = await env.DB.prepare(`
    SELECT probability_up, probability_down, predicted_tone, short_trigger, long_trigger, payload_json, prediction_time, contract, product_id
    FROM micro_predictions
    WHERE commodity = ?
      ${productKeys.length ? `AND lower(COALESCE(product_id, contract, '')) IN (${placeholders})` : ""}
    ORDER BY prediction_time DESC
    LIMIT 1
  `).bind(...(productKeys.length ? [commodity, ...productKeys] : [commodity])).first();
  if (!row) return null;
  const payload = parseStoredJson(row.payload_json, {});
  return {
    ready: true,
    contract: payload.contract || row.contract || "",
    productId: payload.productId || row.product_id || "",
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

async function getServerAdvisoryBreakoutContext(env, commodity, strategy, config = null) {
  if (!strategy.breakoutParticipation) return null;
  await ensureLearningContractColumnsD1(env);
  const productKeys = getServerConfigProductKeys(config || {});
  const placeholders = productKeys.map(() => "?").join(", ");
  const result = await env.DB.prepare(`
    SELECT payload_json
    FROM advisory_snapshots
    WHERE commodity = ?
      ${productKeys.length ? `AND lower(COALESCE(product_id, contract, '')) IN (${placeholders})` : ""}
    ORDER BY snapshot_time DESC
    LIMIT 80
  `).bind(...(productKeys.length ? [commodity, ...productKeys] : [commodity])).all();
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
      const entryProductId = String(entry.productId || entry.product_id || entry.contract || "").toLowerCase();
      const candidateProductId = String(candidate.productId || candidate.product_id || candidate.contract || "").toLowerCase();
      const sameContract = !entryProductId || !candidateProductId || entryProductId === candidateProductId;
      return sameContract && Number.isFinite(candidateTime) && candidateTime >= entryTime + 60 * 1000 && Number.isFinite(Number(candidate.price));
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

function getServerDirectionalContext(micro, advisoryBreakout = null) {
  const upEdge = Math.round((Number.isFinite(Number(micro?.probabilityUp)) ? Number(micro.probabilityUp) : 0.5) * 100);
  const downEdge = Math.round((Number.isFinite(Number(micro?.probabilityDown)) ? Number(micro.probabilityDown) : 0.5) * 100);
  const ret10 = Number(micro?.ret10) || 0;
  const ret30 = Number(micro?.ret30) || 0;
  const ret60 = Number(micro?.ret60) || 0;
  const ret180 = Number(micro?.ret180) || 0;
  const vwapDistance = Number(micro?.vwapDistance) || 0;
  const volatility = Number(micro?.volatility) || 0;
  const recentMove = Number(advisoryBreakout?.moveBps) || 0;
  const shortShare = Number(advisoryBreakout?.shortShare) || 0;
  const longShare = Number(advisoryBreakout?.longShare) || 0;
  const bearishTape = Boolean(
    micro?.ready
    && downEdge >= 55
    && (ret180 <= -8 || ret60 <= -4 || (ret30 < 0 && vwapDistance < 0))
  );
  const bullishTape = Boolean(
    micro?.ready
    && upEdge >= 55
    && (ret180 >= 8 || ret60 >= 4 || (ret30 > 0 && vwapDistance > 0))
  );
  const bearishAdvisoryTape = Boolean(advisoryBreakout?.ready && recentMove <= -8 && shortShare >= Math.max(35, longShare));
  const bullishAdvisoryTape = Boolean(advisoryBreakout?.ready && recentMove >= 8 && longShare >= Math.max(35, shortShare));
  const isBearishTrend = bearishTape || bearishAdvisoryTape;
  const isBullishTrend = bullishTape || bullishAdvisoryTape;
  const longReversalConfirmed = Boolean(
    !isBearishTrend
    || (
      micro?.ready
      && upEdge >= 60
      && ret60 >= 6
      && ret30 > 0
      && vwapDistance > 0
      && volatility >= 0.8
    )
  );
  const shortContinuationConfirmed = Boolean(
    isBearishTrend
    && (
      (micro?.ready && downEdge >= 55 && (ret60 <= -2 || ret30 < 0 || vwapDistance < 0))
      || bearishAdvisoryTape
    )
  );
  const longContinuationConfirmed = Boolean(
    isBullishTrend
    && (
      (micro?.ready && upEdge >= 55 && (ret60 >= 2 || ret30 > 0 || vwapDistance > 0))
      || bullishAdvisoryTape
    )
  );
  return {
    side: isBearishTrend && !isBullishTrend ? "short" : isBullishTrend && !isBearishTrend ? "long" : null,
    isBearishTrend,
    isBullishTrend,
    longReversalConfirmed,
    longContinuationConfirmed,
    shortContinuationConfirmed,
    upEdge,
    downEdge,
    ret10,
    ret30,
    ret60,
    ret180,
    vwapDistance,
    volatility,
    recentMove,
    longShare,
    shortShare
  };
}

function getServerMarkovMethodAssessment(signal, micro, strategy, directionalContext) {
  if (!strategy.markovHedgeFundMethod) {
    return { enabled: false, state: "off", expectedSide: null, counterState: false, thresholdBoost: 0, sizeMultiplier: 1, reason: "" };
  }

  const threshold = Number(strategy.markovRegimeMoveBps) || 8;
  const recentMove = Number(directionalContext?.ret180) || Number(directionalContext?.ret60) || Number(directionalContext?.recentMove) || 0;
  const upEdge = Number(directionalContext?.upEdge) || Math.round((Number.isFinite(Number(micro?.probabilityUp)) ? Number(micro.probabilityUp) : 0.5) * 100);
  const downEdge = Number(directionalContext?.downEdge) || Math.round((Number.isFinite(Number(micro?.probabilityDown)) ? Number(micro.probabilityDown) : 0.5) * 100);
  const bull = Boolean(
    directionalContext?.isBullishTrend
    || (micro?.ready && (recentMove >= threshold || (upEdge >= 58 && Number(directionalContext?.vwapDistance) > 0 && Number(directionalContext?.ret30) > 0)))
  );
  const bear = Boolean(
    directionalContext?.isBearishTrend
    || (micro?.ready && (recentMove <= -threshold || (downEdge >= 58 && Number(directionalContext?.vwapDistance) < 0 && Number(directionalContext?.ret30) < 0)))
  );
  const state = bear && !bull ? "bear" : bull && !bear ? "bull" : "sideways";
  const expectedSide = state === "bear" ? "short" : state === "bull" ? "long" : null;
  const activeSide = signal?.side || null;
  const counterState = Boolean(expectedSide && activeSide && activeSide !== expectedSide);
  const sideways = state === "sideways";

  return {
    enabled: true,
    state,
    expectedSide,
    counterState,
    thresholdBoost: sideways ? Number(strategy.markovSidewaysThresholdBoost) || 0 : 0,
    sizeMultiplier: sideways ? Number(strategy.markovSidewaysSizeMultiplier) || 1 : 1,
    reason: `Markov state ${state}: recent move ${recentMove.toFixed(2)} bps, up edge ${upEdge}%, down edge ${downEdge}%.`
  };
}

function shouldHoldServerDirectionalShort(openTrade, price, strategy, directionalContext) {
  if (!strategy.trendDayDirectionalHold || openTrade.side !== "short" || !directionalContext?.shortContinuationConfirmed) return false;
  const stopPrice = Number(openTrade.stopPrice);
  const entryPrice = Number(openTrade.entryPrice ?? openTrade.price);
  if (!Number.isFinite(price) || !Number.isFinite(stopPrice) || !Number.isFinite(entryPrice) || entryPrice <= 0) return false;
  const volatilityBufferBps = clamp(Math.max(20, Number(directionalContext.volatility || 0) * 12), 20, 80);
  const hardStop = stopPrice * (1 + (volatilityBufferBps / 10000));
  return price < hardStop;
}

function shouldHoldServerDirectionalLong(openTrade, price, strategy, directionalContext) {
  if (!strategy.trendCaptureMode || openTrade.side !== "long" || !directionalContext?.longContinuationConfirmed) return false;
  const stopPrice = Number(openTrade.stopPrice);
  const entryPrice = Number(openTrade.entryPrice ?? openTrade.price);
  if (!Number.isFinite(price) || !Number.isFinite(stopPrice) || !Number.isFinite(entryPrice) || entryPrice <= 0) return false;
  const volatilityBufferBps = clamp(Math.max(20, Number(directionalContext.volatility || 0) * 12), 20, 80);
  const hardStop = stopPrice * (1 - (volatilityBufferBps / 10000));
  return price > hardStop;
}

function applyServerProfitLockStop(openTrade, price, strategy, directionalContext) {
  if (!strategy.profitLockTrailingStop) return null;
  const currentPrice = Number(price);
  const entryPrice = Number(openTrade.entryPrice ?? openTrade.price);
  const currentStop = Number(openTrade.stopPrice);
  if (!Number.isFinite(currentPrice) || !Number.isFinite(entryPrice) || !Number.isFinite(currentStop) || entryPrice <= 0) return null;
  if (!Number.isFinite(Number(openTrade.originalStopPrice))) {
    openTrade.originalStopPrice = currentStop;
  }

  const favorableMoveBps = openTrade.side === "short"
    ? ((entryPrice - currentPrice) / entryPrice) * 10000
    : ((currentPrice - entryPrice) / entryPrice) * 10000;
  const minMoveBps = Math.max(Number(strategy.profitLockMinMoveBps) || 0, (Number(directionalContext?.volatility) || 0) * 6);
  if (favorableMoveBps < minMoveBps) return null;

  const givebackPct = clamp(Number(strategy.profitLockGivebackPct) || 35, 5, 80) / 100;
  const lockedMoveBps = favorableMoveBps * (1 - givebackPct);
  const lockedStop = openTrade.side === "short"
    ? entryPrice * (1 - (lockedMoveBps / 10000))
    : entryPrice * (1 + (lockedMoveBps / 10000));
  const minimumNetProfit = 0.25;
  const lockedNetPnl = getServerTradeNetPnl(openTrade, lockedStop);
  if (!Number.isFinite(lockedNetPnl) || lockedNetPnl < minimumNetProfit) return null;
  const improved = openTrade.side === "short"
    ? lockedStop < currentStop && lockedStop < entryPrice
    : lockedStop > currentStop && lockedStop > entryPrice;
  if (!improved) return null;

  openTrade.stopPrice = lockedStop;
  openTrade.profitLockStopPrice = lockedStop;
  openTrade.note = `${openTrade.note || ""} Profit-lock trailing stop moved to ${lockedStop.toFixed(2)} after ${favorableMoveBps.toFixed(2)} bps favorable move.`.trim();
  return {
    stopPrice: lockedStop,
    favorableMoveBps,
    minMoveBps,
    lockedNetPnl
  };
}

function getServerEntryQualityGate(activeSignal, price, strategy, directionalContext, breakoutSignal = null, reentrySignal = null, markovMethod = null) {
  if (!activeSignal?.side) return { ok: true, reason: "" };
  if (reentrySignal) return { ok: true, reason: "post-stop re-entry override" };

  const side = activeSignal.side;
  const ret10 = Number(directionalContext?.ret10) || 0;
  const ret30 = Number(directionalContext?.ret30) || 0;
  const ret60 = Number(directionalContext?.ret60) || 0;
  const ret180 = Number(directionalContext?.ret180) || 0;
  const vwapDistance = Number(directionalContext?.vwapDistance) || 0;
  const downEdge = Number(directionalContext?.downEdge) || 50;
  const volatility = Number(directionalContext?.volatility) || 0;
  const noChaseMoveBps = Number(strategy.noChaseMoveBps) || 0;
  const pullbackMinRetraceBps = Number(strategy.pullbackMinRetraceBps) || 0;

  if (markovMethod?.enabled && markovMethod.counterState && !breakoutSignal) {
    if (side === "long" && markovMethod.state === "bear" && !directionalContext?.longReversalConfirmed) {
      return { ok: false, reason: `Markov bear state blocks long without reversal confirmation. ${markovMethod.reason}` };
    }
    if (side === "short" && markovMethod.state === "bull" && !(ret30 < 0 && vwapDistance < 0 && downEdge >= 58)) {
      return { ok: false, reason: `Markov bull state blocks short without breakdown confirmation. ${markovMethod.reason}` };
    }
  }

  if (strategy.trendDayBias) {
    if (side === "short" && directionalContext?.isBullishTrend && !(ret30 < 0 && vwapDistance < 0)) {
      return { ok: false, reason: `trend-day bias blocks short while tape is bullish; need breakdown below VWAP and negative 30s momentum.` };
    }
    if (side === "long" && directionalContext?.isBearishTrend && !directionalContext?.longReversalConfirmed) {
      return { ok: false, reason: `trend-day bias blocks long while tape is bearish; need reversal confirmation.` };
    }
  }

  if (strategy.noChaseEntries && !breakoutSignal) {
    if (side === "long" && ret180 >= noChaseMoveBps && ret10 > 0 && ret30 > 0) {
      return { ok: false, reason: `no-chase rule blocks long after ${ret180.toFixed(2)} bps fast rise; wait for pullback/reclaim.` };
    }
    if (side === "short" && ret180 <= -noChaseMoveBps && ret10 < 0 && ret30 < 0) {
      return { ok: false, reason: `no-chase rule blocks short after ${ret180.toFixed(2)} bps fast drop; wait for bounce/failure.` };
    }
  }

  if (strategy.pullbackEntryRequired && !breakoutSignal) {
    const minimumVolatility = Math.max(0.5, Math.min(2, volatility || 0.5));
    const longPullbackReclaim = ret60 >= 0 && ret30 <= -pullbackMinRetraceBps && ret10 > 0 && vwapDistance >= 0 && volatility >= minimumVolatility;
    const shortBounceFailure = ret60 <= 0 && ret30 >= pullbackMinRetraceBps && ret10 < 0 && vwapDistance <= 0 && volatility >= minimumVolatility;
    if (side === "long" && directionalContext?.isBullishTrend && !longPullbackReclaim) {
      return { ok: false, reason: `pullback entry waits for a long retest/reclaim; current 10s ${ret10.toFixed(2)} bps, 30s ${ret30.toFixed(2)} bps, VWAP ${vwapDistance.toFixed(2)} bps.` };
    }
    if (side === "short" && directionalContext?.isBearishTrend && !shortBounceFailure) {
      return { ok: false, reason: `pullback entry waits for a short bounce/failure; current 10s ${ret10.toFixed(2)} bps, 30s ${ret30.toFixed(2)} bps, VWAP ${vwapDistance.toFixed(2)} bps.` };
    }
  }

  return { ok: true, reason: "entry quality accepted" };
}

function getServerTrendCaptureSignal(signal, micro, strategy, directionalContext, advisoryBreakout = null) {
  if (!strategy.trendCaptureMode || !directionalContext) return null;
  const advisorySide = signal?.side || null;
  const advisoryConviction = Number(signal?.conviction) || 0;
  const minEdge = Math.max(55, Math.min(Number(strategy.breakoutMinEdgePercent) || 55, Number(strategy.trendingMinEdgePercent) || 58));
  const minVolatility = Math.max(0.5, Number(strategy.breakoutMinVolatilityBps) || 0.8);
  const minMove = Math.max(4, Number(strategy.breakoutMinMoveBps) || 3);
  const longMoveConfirmed = directionalContext.ret60 >= minMove
    || directionalContext.ret180 >= minMove
    || directionalContext.recentMove >= minMove
    || directionalContext.longShare >= 55;
  const shortMoveConfirmed = directionalContext.ret60 <= -minMove
    || directionalContext.ret180 <= -minMove
    || directionalContext.recentMove <= -minMove
    || directionalContext.shortShare >= 55;

  if (
    directionalContext.longContinuationConfirmed
    && directionalContext.upEdge >= minEdge
    && directionalContext.volatility >= minVolatility
    && longMoveConfirmed
    && !(advisorySide === "short" && advisoryConviction >= 65)
  ) {
    return {
      side: "long",
      label: "Trend Capture Long",
      conviction: Math.max(advisoryConviction, minEdge),
      detail: `Trend capture: bullish day tape, up edge ${directionalContext.upEdge}%, 60s move ${directionalContext.ret60.toFixed(2)} bps, 180s move ${directionalContext.ret180.toFixed(2)} bps, VWAP ${directionalContext.vwapDistance.toFixed(2)} bps, volatility ${directionalContext.volatility.toFixed(2)} bps.`
    };
  }

  if (
    directionalContext.shortContinuationConfirmed
    && directionalContext.downEdge >= minEdge
    && directionalContext.volatility >= minVolatility
    && shortMoveConfirmed
    && !(advisorySide === "long" && advisoryConviction >= 65)
  ) {
    return {
      side: "short",
      label: "Trend Capture Short",
      conviction: Math.max(advisoryConviction, minEdge),
      detail: `Trend capture: bearish day tape, down edge ${directionalContext.downEdge}%, 60s move ${directionalContext.ret60.toFixed(2)} bps, 180s move ${directionalContext.ret180.toFixed(2)} bps, VWAP ${directionalContext.vwapDistance.toFixed(2)} bps, volatility ${directionalContext.volatility.toFixed(2)} bps.`
    };
  }

  return null;
}

async function recordServerMissedOpportunity(env, { email, user, commodity, signal, price, strategy, directionalContext, advisoryBreakout, reason }) {
  if (!strategy.missedOpportunityLearner || !advisoryBreakout?.ready) return;
  const moveBps = Number(advisoryBreakout.moveBps) || Number(directionalContext?.recentMove) || 0;
  if (Math.abs(moveBps) < (Number(strategy.missedOpportunityMoveBps) || 20)) return;
  const side = moveBps > 0 ? "long" : "short";
  const eventKey = `missed-${normalizeEmail(email)}-${commodity}-${side}-${new Date().toISOString().slice(0, 13)}`;
  await recordOpenBrainServerEvent(
    env,
    "missed-opportunity",
    `Missed ${side} opportunity in ${commodity}: price moved ${moveBps.toFixed(2)} bps but no trade opened. Reason: ${reason}`,
    {
      id: eventKey,
      source: "cloudflare-paper-scheduler",
      userEmail: email,
      userName: user?.name || "",
      commodity,
      side,
      price: price?.price,
      signal: signal?.label || "",
      conviction: signal?.conviction || 0,
      moveBps,
      reason,
      tags: ["missed-opportunity", commodity, side]
    }
  );
}

function getLatestServerClosedTrade(transactions = [], userEmail, commodity, side, action) {
  return getClosedPaperTradesForUser(transactions, userEmail)
    .find((entry) => normalizeServerCommodityId(entry.commodity || inferServerCommodityFromContract(entry.contract)) === commodity
      && (!side || entry.side === side)
      && (!action || entry.action === action)) || null;
}

function getServerPostStopReentrySignal(transactions, userEmail, commodity, signal, strategy, directionalContext) {
  if (strategy.postStopShortReentry && directionalContext?.shortContinuationConfirmed) {
    const stoppedShort = getLatestServerClosedTrade(transactions, userEmail, commodity, "short", "COVER STOP");
    if (stoppedShort) {
      const stoppedAt = getTransactionDate(stoppedShort.closedAt || stoppedShort.time).getTime();
      if (Number.isFinite(stoppedAt) && Date.now() - stoppedAt <= 90 * 60 * 1000) {
        if (!(signal?.side === "long" && Number(signal.conviction) >= 58 && !directionalContext.isBearishTrend)) {
          return {
            side: "short",
            label: "Post-stop Short Re-entry",
            conviction: Math.max(Number(signal?.conviction) || 0, 56),
            detail: `Post-stop re-entry: prior short was stopped ${Math.round((Date.now() - stoppedAt) / 60000)} minute(s) ago, but broader tape remains bearish; down edge ${directionalContext.downEdge}%, 60s move ${directionalContext.ret60.toFixed(2)} bps, VWAP ${directionalContext.vwapDistance.toFixed(2)} bps.`
          };
        }
      }
    }
  }

  if (strategy.trendCaptureMode && directionalContext?.longContinuationConfirmed) {
    const stoppedLong = getLatestServerClosedTrade(transactions, userEmail, commodity, "long", "SELL STOP");
    if (!stoppedLong) return null;
    const stoppedAt = getTransactionDate(stoppedLong.closedAt || stoppedLong.time).getTime();
    if (!Number.isFinite(stoppedAt) || Date.now() - stoppedAt > 90 * 60 * 1000) return null;
    if (signal?.side === "short" && Number(signal.conviction) >= 58 && !directionalContext.isBullishTrend) return null;
    return {
      side: "long",
      label: "Post-stop Long Re-entry",
      conviction: Math.max(Number(signal?.conviction) || 0, 56),
      detail: `Trend capture re-entry: prior long was stopped ${Math.round((Date.now() - stoppedAt) / 60000)} minute(s) ago, but broader tape remains bullish; up edge ${directionalContext.upEdge}%, 60s move ${directionalContext.ret60.toFixed(2)} bps, VWAP ${directionalContext.vwapDistance.toFixed(2)} bps.`
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
  const highEdgeVolatilitySetup = Boolean(side)
    && edgePercent >= Math.max(65, Number(strategy.flatMinEdgePercent || 56) + 8)
    && volatility >= Math.max(1.2, Number(strategy.flatMinVolatilityBps || 0.8) * 1.5);
  return {
    enabled: strategy.regimeAware,
    regime,
    edgePercent,
    volatility,
    momentumAligned,
    highEdgeVolatilitySetup,
    maxMartingaleStep: regime === "trending" ? strategy.martingaleSteps : strategy.flatMaxMartingaleSteps,
    sizeMultiplier: regime === "trending" ? 1 : strategy.flatSizeMultiplier,
    thresholdBoost: regime === "trending" ? 0 : strategy.flatThresholdBoost,
    confirmationOk: regime === "trending" || (
      highEdgeVolatilitySetup
      || (
        edgePercent >= strategy.flatMinEdgePercent
        && volatility >= strategy.flatMinVolatilityBps
        && momentumAligned
      )
    )
  };
}

function getServerTradeTerms(config, side, price, step, sizeMultiplier = 1, strategy = {}, micro = null, directionalContext = null) {
  const contractMultiplier = Number(config.contractMultiplier) > 0 ? Number(config.contractMultiplier) : 1;
  const marginRate = side === "short"
    ? Number(config.marginRateShort) || 1
    : Number(config.marginRateLong) || 1;
  const marginRequirement = price * contractMultiplier * marginRate;
  const targetOffset = 0.01;
  let stopOffset = 0.0075;
  if (strategy.volatilityAwareStops) {
    const volatility = Number(micro?.volatility) || Number(directionalContext?.volatility) || 0;
    const volatilityStopBps = clamp(volatility * 20, 75, 180);
    const trendFloorBps = directionalContext?.side === side ? 110 : 75;
    stopOffset = Math.max(stopOffset, Math.max(volatilityStopBps, trendFloorBps) / 10000);
  }
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

function getServerTradeNetPnl(trade, exitPrice) {
  const grossPnl = getServerTradeGrossPnl(trade, exitPrice);
  const openFee = Number(trade.openFee) || 0;
  const estimatedExitFee = Number(trade.estimatedExitFee) || 0;
  return grossPnl - openFee - estimatedExitFee;
}

function getServerExitTrigger(trade, price) {
  const targetPrice = Number(trade.targetPrice);
  const stopPrice = Number(trade.originalStopPrice ?? trade.stopPrice);
  const profitLockStopPrice = Number(trade.profitLockStopPrice);
  if (!Number.isFinite(price) || !Number.isFinite(targetPrice) || !Number.isFinite(stopPrice)) return null;
  const hitTarget = trade.side === "short" ? price <= targetPrice : price >= targetPrice;
  const hitStop = trade.side === "short" ? price >= stopPrice : price <= stopPrice;
  const hitProfitLock = Number.isFinite(profitLockStopPrice)
    ? trade.side === "short" ? price >= profitLockStopPrice : price <= profitLockStopPrice
    : false;
  if (hitTarget) return trade.side === "short" ? "COVER TARGET" : "SELL TARGET";
  if (hitProfitLock) return trade.side === "short" ? "COVER PROFIT LOCK" : "SELL PROFIT LOCK";
  if (hitStop) return trade.side === "short" ? "COVER STOP" : "SELL STOP";
  return null;
}

function getServerExitBoundaryPrice(trade, action, fallbackPrice) {
  if (String(action || "").includes("TARGET")) {
    const targetPrice = Number(trade.targetPrice);
    return Number.isFinite(targetPrice) ? targetPrice : fallbackPrice;
  }
  if (String(action || "").includes("PROFIT LOCK")) {
    const profitLockStopPrice = Number(trade.profitLockStopPrice);
    return Number.isFinite(profitLockStopPrice) ? profitLockStopPrice : fallbackPrice;
  }
  if (String(action || "").includes("STOP")) {
    const stopPrice = Number(trade.originalStopPrice ?? trade.stopPrice);
    return Number.isFinite(stopPrice) ? stopPrice : fallbackPrice;
  }
  return fallbackPrice;
}

async function getServerExitTriggerFromTicks(env, trade, config, fallbackPrice) {
  if (!hasRuntimeStore(env)) return null;
  const openedAt = getTransactionDate(trade.openedAt || trade.time);
  if (Number.isNaN(openedAt.getTime())) return null;
  const commodity = normalizeServerCommodityId(trade.commodity || config.id || inferServerCommodityFromContract(trade.contract));
  const productKeys = Array.from(new Set(getServerConfigProductKeys(config)));
  const productClause = productKeys.length
    ? `AND lower(COALESCE(product_id, ticker, '')) IN (${productKeys.map(() => "?").join(", ")})`
    : "";
  await ensurePriceTicksTable(env);
  const result = await env.DB.prepare(`
    SELECT price, tick_time, source
    FROM price_ticks
    WHERE commodity = ?
      AND tick_time >= ?
      ${productClause}
    ORDER BY tick_time ASC
    LIMIT 2000
  `).bind(
    commodity,
    openedAt.toISOString(),
    ...productKeys
  ).all();

  for (const tick of getResults(result)) {
    const tickPrice = Number(tick.price);
    const action = getServerExitTrigger(trade, tickPrice);
    if (!action) continue;
    const exitPrice = getServerExitBoundaryPrice(trade, action, tickPrice);
    return {
      action,
      price: exitPrice,
      source: `${tick.source || "Cloudflare price tick"} history`,
      time: tick.tick_time
    };
  }

  const latestPrice = Number(fallbackPrice?.price);
  const latestAction = getServerExitTrigger(trade, latestPrice);
  if (!latestAction) return null;
  return {
    action: latestAction,
    price: getServerExitBoundaryPrice(trade, latestAction, latestPrice),
    source: fallbackPrice?.source || "Current server price",
    time: fallbackPrice?.time || new Date().toISOString()
  };
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
  if (config?.rolledFromTicker || config?.rolledFromProductId) {
    return {
      shouldOpen: true,
      shouldFlatten: false,
      detail: config.rollReason || `${config.ticker || "Contract"} selected as the active rolled contract.`
    };
  }
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
    originalStopPrice: Number(openTrade.originalStopPrice ?? openTrade.stopPrice),
    profitLockStopPrice: Number(openTrade.profitLockStopPrice),
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
    markovMethodEnabled: Boolean(openTrade.markovMethodEnabled),
    markovState: openTrade.markovState || "",
    markovExpectedSide: openTrade.markovExpectedSide || "",
    markovCounterState: Boolean(openTrade.markovCounterState),
    markovThresholdBoost: Number(openTrade.markovThresholdBoost) || 0,
    markovSizeMultiplier: Number(openTrade.markovSizeMultiplier) || null,
    markovReason: openTrade.markovReason || "",
    openedAt: openTrade.openedAt || openTrade.time,
    closedAt: new Date().toISOString(),
    note
  });
}

async function ensurePaperSchedulerLocksTable(env) {
  await env.DB.prepare(`
    CREATE TABLE IF NOT EXISTS paper_scheduler_locks (
      lock_key TEXT PRIMARY KEY,
      owner TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `).run();
}

async function acquirePaperSchedulerLock(env) {
  if (!hasRuntimeStore(env)) return "";
  const now = new Date().toISOString();
  const randomPart = typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(16).slice(2);
  const owner = `scheduler-${Date.now()}-${randomPart}`;
  const expiresAt = new Date(Date.now() + PAPER_SCHEDULER_LOCK_TTL_MS).toISOString();
  await ensurePaperSchedulerLocksTable(env);
  await env.DB.prepare(`
    INSERT INTO paper_scheduler_locks (lock_key, owner, expires_at, updated_at)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(lock_key) DO UPDATE SET
      owner = excluded.owner,
      expires_at = excluded.expires_at,
      updated_at = excluded.updated_at
    WHERE paper_scheduler_locks.expires_at < ?
  `).bind(
    PAPER_SCHEDULER_LOCK_KEY,
    owner,
    expiresAt,
    now,
    now
  ).run();
  const current = await env.DB.prepare(`
    SELECT owner
    FROM paper_scheduler_locks
    WHERE lock_key = ?
  `).bind(PAPER_SCHEDULER_LOCK_KEY).first();
  return current?.owner === owner ? owner : "";
}

async function releasePaperSchedulerLock(env, owner) {
  if (!owner || !hasRuntimeStore(env)) return;
  await ensurePaperSchedulerLocksTable(env);
  await env.DB.prepare(`
    DELETE FROM paper_scheduler_locks
    WHERE lock_key = ?
      AND owner = ?
  `).bind(PAPER_SCHEDULER_LOCK_KEY, owner).run();
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
    runId: `paper-scheduler-d1-open-v2-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    startedAt,
    schedulerSchema: "d1-open-trade-lookup-v2",
    status: "running",
    evaluatedUsers: 0,
    openedTrades: 0,
    closedTrades: 0,
    skippedTrades: 0,
    decisions: []
  };

  let lockOwner = "";
  lockOwner = await acquirePaperSchedulerLock(env);
  if (!lockOwner) {
    run.status = "skipped";
    run.finishedAt = new Date().toISOString();
    run.decisions.push({ email: "system", name: "Paper scheduler", decision: "another scheduler run is active" });
    await recordPaperSchedulerRun(env, run);
    return run;
  }

  try {
    const settings = canonicalizeSettingsPayload(await mergeUserStrategyRecordsD1(
      env,
      await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload())
    ));
    const modelSettings = normalizeServerModelSettings(settings.modelSettings);
    const users = Array.isArray(settings.users) ? settings.users : [];
    const payload = await loadUnifiedTransactionPayloadD1(env, PAPER_TRADE_MODE, PAPER_LEDGER_SOURCE);
    const transactions = payload.transactions || [];
    const advisoryRefreshCache = new Map();

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
      const openTrades = await loadOpenPaperTradesForUserD1(env, transactions, email);
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
        let advisory = await getLatestAdvisoryByCommodity(env, commodity, config);
        const price = await getServerMarketPrice(env, user, commodity, advisory);
        if (!price) {
          lastDecision = `${commodity}: skipped, no fresh price`;
          run.skippedTrades += 1;
          continue;
        }
        const advisoryCacheKey = [
          commodity,
          String(config.productId || config.ticker || "").toLowerCase()
        ].join("|");
        let advisoryRefresh = advisoryRefreshCache.get(advisoryCacheKey);
        if (!advisoryRefresh) {
          advisoryRefresh = await getOrRefreshServerOpenRouterAdvisory(env, {
            user,
            commodity,
            config,
            price,
            strategySettings,
            schedulerSettings,
            previousAdvisory: advisory,
            modelSettings,
            force: options.forceAdvisory === true
          });
          advisoryRefreshCache.set(advisoryCacheKey, advisoryRefresh);
        }
        if (advisoryRefresh.advisory) {
          advisory = advisoryRefresh.advisory;
        }
        if (advisoryRefresh.refreshed) {
          run.decisions.push({
            email: "system",
            name: "OpenRouter advisory",
            decision: `${commodity}: refreshed ${config.ticker || config.productId} via ${advisoryRefresh.model}${advisoryRefresh.criticModel ? ` + ${advisoryRefresh.criticModel}` : ""}`
          });
        } else if (advisoryRefresh.error) {
          run.decisions.push({
            email: "system",
            name: "OpenRouter advisory",
            decision: `${commodity}: refresh failed for ${config.ticker || config.productId} - ${advisoryRefresh.error}`
          });
        }

        const signal = getServerSignal(advisory);
        const micro = (strategySettings.regimeAware
          || strategySettings.breakoutParticipation
          || strategySettings.trendCaptureMode
          || strategySettings.trendDayDirectionalHold
          || strategySettings.blockLongsInFallingTrend
          || strategySettings.volatilityAwareStops
          || strategySettings.postStopShortReentry
          || strategySettings.trendDayBias
          || strategySettings.noChaseEntries
          || strategySettings.pullbackEntryRequired
          || strategySettings.profitLockTrailingStop
          || strategySettings.missedOpportunityLearner)
          ? await getLatestServerMicroPrediction(env, commodity, config)
          : null;
        const advisoryBreakout = (strategySettings.breakoutParticipation
          || strategySettings.trendCaptureMode
          || strategySettings.trendDayDirectionalHold
          || strategySettings.blockLongsInFallingTrend
          || strategySettings.postStopShortReentry
          || strategySettings.trendDayBias
          || strategySettings.noChaseEntries
          || strategySettings.pullbackEntryRequired
          || strategySettings.missedOpportunityLearner)
          ? await getServerAdvisoryBreakoutContext(env, commodity, { ...strategySettings, breakoutParticipation: true }, config)
          : null;
        const directionalContext = getServerDirectionalContext(micro, advisoryBreakout);
        const commodityOpenTrades = openTrades.filter((trade) => (
          normalizeServerCommodityId(trade.commodity || inferServerCommodityFromContract(trade.contract)) === commodity
        ));
        for (const openTrade of commodityOpenTrades) {
          const openTradeConfig = getServerCommodityConfigForContract(user, commodity, openTrade.contract || config.ticker);
          const openTradePrice = openTradeConfig.productId === config.productId
            ? price
            : await getServerMarketPrice(env, user, commodity, advisory, openTradeConfig);
          if (!openTradePrice) {
            lastDecision = `${commodity}: skipped close, no fresh price for ${openTrade.contract || openTradeConfig.ticker}`;
            continue;
          }
          const openTradeRoll = getServerContractRollStatus(openTradeConfig);
          let closeAction = null;
          let closePrice = openTradePrice;
          let closeReason = "";
          if (marketSchedule.isOpen && openTradeRoll.shouldFlatten) {
            closeAction = openTrade.side === "short" ? "COVER ROLL" : "SELL ROLL";
            closeReason = openTradeRoll.detail;
          } else if (marketSchedule.flattenWindow) {
            closeAction = openTrade.side === "short" ? "COVER PRE-CLOSE" : "SELL PRE-CLOSE";
            closeReason = `User setting flattened ${Math.round(marketSchedule.minutesUntilClose || 0)} minute(s) before configured market close.`;
          } else if (marketSchedule.isOpen) {
            const currentExitAction = getServerExitTrigger(openTrade, openTradePrice.price);
            if (currentExitAction) {
              closeAction = currentExitAction;
              closePrice = {
                ...openTradePrice,
                price: getServerExitBoundaryPrice(openTrade, currentExitAction, openTradePrice.price)
              };
              closeReason = `Server scheduler closed ${openTradeConfig.name} ${openTrade.side} via current ${openTradePrice.source || "server price"} at ${openTradePrice.time || new Date().toISOString()}`;
            }
            const tickExit = closeAction ? null : await getServerExitTriggerFromTicks(env, openTrade, openTradeConfig, openTradePrice);
            if (tickExit) {
              closeAction = tickExit.action;
              closePrice = {
                ...openTradePrice,
                price: tickExit.price,
                source: tickExit.source,
                time: tickExit.time
              };
              closeReason = `Server scheduler closed ${openTradeConfig.name} ${openTrade.side} via ${tickExit.source} at ${tickExit.time}`;
            }
            if (!closeAction) {
              applyServerProfitLockStop(openTrade, openTradePrice.price, strategySettings, directionalContext);
              const profitLockExitAction = getServerExitTrigger(openTrade, openTradePrice.price);
              if (profitLockExitAction) {
                closeAction = profitLockExitAction;
                closePrice = {
                  ...openTradePrice,
                  price: getServerExitBoundaryPrice(openTrade, profitLockExitAction, openTradePrice.price)
                };
                closeReason = `Server scheduler closed ${openTradeConfig.name} ${openTrade.side} via current ${openTradePrice.source || "server price"} after profit-lock update`;
              }
            }
            if (closeAction === "COVER STOP" || closeAction === "SELL STOP") {
              closeReason = `${closeReason} Hard stop honored; directional hold rules cannot suppress protective stops.`.trim();
            }
          }
          if (!closeAction) continue;
          const close = makeServerCloseTransaction({
            user,
            email,
            commodity,
            config: openTradeConfig,
            openTrade,
            price: closePrice,
            action: closeAction,
            note: closeReason
          });
          transactions.push(close);
          await recordOpenBrainServerEvent(
            env,
            "paper-trade",
            `${close.action} ${close.contract} at ${closePrice.price.toFixed(2)} with net P/L ${Number(close.pnl || 0).toFixed(2)}`,
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
          lastDecision = `${commodity}: closed ${openTrade.side} at ${closePrice.price}`;
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
        const hasCommodityOpen = latestEnabledOpenTrades.some((trade) => (
          normalizeServerCommodityId(trade.commodity || inferServerCommodityFromContract(trade.contract)) === commodity
        ));
        if (hasCommodityOpen) continue;
        if (exclusiveMartingale && latestEnabledOpenTrades.length > 0) {
          if (lastDecision === "No eligible commodities evaluated") lastDecision = `${commodity}: martingale sequence already has an open trade`;
          continue;
        }

        const secondOpinionConsensus = getServerSecondOpinionConsensus(signal, schedulerSettings);
        const breakoutSignal = getServerBreakoutParticipationSignal(signal, micro, strategySettings, advisoryBreakout);
        const reentrySignal = getServerPostStopReentrySignal(transactions, email, commodity, signal, strategySettings, directionalContext);
        const trendCaptureSignal = getServerTrendCaptureSignal(signal, micro, strategySettings, directionalContext, advisoryBreakout);
        const directionalOverrideSignal = breakoutSignal || reentrySignal || trendCaptureSignal;
        const activeSignal = reentrySignal
          ? { ...signal, side: reentrySignal.side, label: reentrySignal.label, conviction: reentrySignal.conviction }
          : breakoutSignal
            ? { ...signal, side: breakoutSignal.side, label: breakoutSignal.label, conviction: breakoutSignal.conviction }
            : trendCaptureSignal
              ? { ...signal, side: trendCaptureSignal.side, label: trendCaptureSignal.label, conviction: trendCaptureSignal.conviction }
              : signal;
        const regime = getServerRegimeAssessment(activeSignal, micro, strategySettings);
        const markovMethod = getServerMarkovMethodAssessment(activeSignal, micro, strategySettings, directionalContext);
        const effectiveThreshold = clamp(
          schedulerSettings.entryThreshold
            + (regime.enabled ? regime.thresholdBoost : 0)
            + (secondOpinionConsensus.enabled ? secondOpinionConsensus.thresholdBoost : 0)
            + (markovMethod.enabled ? markovMethod.thresholdBoost : 0),
          1,
          100
        );
        if ((!signal.side || signal.conviction < effectiveThreshold) && !directionalOverrideSignal) {
          lastDecision = `${commodity}: no open, ${signal.label} ${signal.conviction}/${effectiveThreshold}${secondOpinionConsensus.thresholdBoost ? `, ${secondOpinionConsensus.label}` : ""}${markovMethod.enabled ? `, Markov ${markovMethod.state}` : ""}`;
          await recordServerMissedOpportunity(env, { email, user, commodity, signal, price, strategy: strategySettings, directionalContext, advisoryBreakout, reason: lastDecision });
          run.skippedTrades += 1;
          continue;
        }

        if (secondOpinionConsensus.blocksEntry && !directionalOverrideSignal) {
          lastDecision = `${commodity}: ${secondOpinionConsensus.label} - ${secondOpinionConsensus.detail}`;
          await recordServerMissedOpportunity(env, { email, user, commodity, signal, price, strategy: strategySettings, directionalContext, advisoryBreakout, reason: lastDecision });
          run.skippedTrades += 1;
          continue;
        }

        if (strategySettings.blockLongsInFallingTrend && activeSignal.side === "long" && directionalContext.isBearishTrend && !directionalContext.longReversalConfirmed) {
          lastDecision = `${commodity}: falling trend blocks long without reversal confirmation`;
          await recordServerMissedOpportunity(env, { email, user, commodity, signal: activeSignal, price, strategy: strategySettings, directionalContext, advisoryBreakout, reason: lastDecision });
          run.skippedTrades += 1;
          continue;
        }
        const entryQuality = getServerEntryQualityGate(activeSignal, price, strategySettings, directionalContext, breakoutSignal || trendCaptureSignal, reentrySignal, markovMethod);
        if (!entryQuality.ok) {
          lastDecision = `${commodity}: ${entryQuality.reason}`;
          await recordServerMissedOpportunity(env, { email, user, commodity, signal: activeSignal, price, strategy: strategySettings, directionalContext, advisoryBreakout, reason: lastDecision });
          run.skippedTrades += 1;
          continue;
        }
        const step = exclusiveMartingale
          ? getNextServerMartingaleStep(transactions, email, strategySettings.martingaleSteps, commodity)
          : 1;
        if (!directionalOverrideSignal && regime.enabled && step > regime.maxMartingaleStep) {
          lastDecision = `${commodity}: ${regime.regime} regime capped step ${step}/${regime.maxMartingaleStep}`;
          run.skippedTrades += 1;
          continue;
        }
        if (!directionalOverrideSignal && regime.enabled && !regime.confirmationOk) {
          lastDecision = `${commodity}: ${regime.regime} regime waiting for confirmation`;
          run.skippedTrades += 1;
          continue;
        }
        const sizeMultiplier = directionalOverrideSignal && exclusiveMartingale
          ? 1
          : directionalOverrideSignal
            ? strategySettings.flatSizeMultiplier
            : (regime.enabled ? regime.sizeMultiplier : 1) * (markovMethod.enabled ? markovMethod.sizeMultiplier : 1);
        const terms = getServerTradeTerms(config, activeSignal.side, price.price, step, sizeMultiplier, strategySettings, micro, directionalContext);
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
          originalStopPrice: terms.stopPrice,
          contractMultiplier: terms.contractMultiplier,
          contracts: terms.contracts,
          marginRequirement: terms.marginRequirement,
          notionalValue: terms.notionalValue,
          openFee: terms.openFee,
          estimatedExitFee: terms.estimatedExitFee,
          totalEstimatedFees: terms.totalEstimatedFees,
          feePerContractSide: terms.feePerContractSide,
          markovMethodEnabled: Boolean(markovMethod.enabled),
          markovState: markovMethod.state,
          markovExpectedSide: markovMethod.expectedSide,
          markovCounterState: Boolean(markovMethod.counterState),
          markovThresholdBoost: markovMethod.thresholdBoost,
          markovSizeMultiplier: markovMethod.sizeMultiplier,
          markovReason: markovMethod.reason,
          capital: terms.capital,
          pnl: 0,
          openedAt: new Date().toISOString(),
          note: reentrySignal
            ? `Server scheduler opened ${config.name} ${activeSignal.side} step ${step} via ${price.source}; ${reentrySignal.detail}; ${markovMethod.enabled ? markovMethod.reason : "Markov method off"}`
            : breakoutSignal
            ? `Server scheduler opened ${config.name} ${activeSignal.side} step ${step} via ${price.source}; ${breakoutSignal.detail}; ${markovMethod.enabled ? markovMethod.reason : "Markov method off"}`
            : trendCaptureSignal
            ? `Server scheduler opened ${config.name} ${activeSignal.side} step ${step} via ${price.source}; ${trendCaptureSignal.detail}; ${markovMethod.enabled ? markovMethod.reason : "Markov method off"}`
            : `Server scheduler opened ${config.name} ${activeSignal.side} at ${activeSignal.conviction} conviction via ${price.source}; regime ${regime.regime}, edge ${regime.edgePercent}%, vol ${regime.volatility.toFixed(2)} bps${regime.highEdgeVolatilitySetup ? ", high-edge override" : ""}; ${markovMethod.enabled ? markovMethod.reason : "Markov method off"}; ${secondOpinionConsensus.detail}`
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
        const markovDecisionText = markovMethod.enabled ? `; Markov ${markovMethod.state}` : "";
        lastDecision = reentrySignal
          ? `${commodity}: opened ${activeSignal.side} post-stop re-entry at ${price.price}`
          : breakoutSignal
          ? `${commodity}: opened ${activeSignal.side} breakout at ${price.price}`
          : trendCaptureSignal
          ? `${commodity}: opened ${activeSignal.side} trend capture at ${price.price}`
          : `${commodity}: opened ${activeSignal.side} at ${price.price}`;
        lastDecision = `${lastDecision}${markovDecisionText}`;
      }

      updateUserPaperSchedulerSettings(user, {
        ...schedulerSettings,
        lastEvaluationAt: new Date().toISOString(),
        lastDecision
      });
      run.decisions.push({
        email,
        name: user.name || "",
        decision: lastDecision,
        openTradeCount: openTrades.length,
        enabledOpenTradeCount: enabledOpenTrades.length,
        activeOpenCount,
        openTradeIds: openTrades.slice(0, 5).map((trade) => ({
          id: trade.tradeId || trade.id || "",
          action: trade.action || "",
          side: trade.side || "",
          commodity: normalizeServerCommodityId(trade.commodity || inferServerCommodityFromContract(trade.contract)),
          contract: trade.contract || "",
          entryPrice: Number(trade.entryPrice ?? trade.price ?? 0) || null,
          targetPrice: Number(trade.targetPrice ?? 0) || null,
          stopPrice: Number(trade.originalStopPrice ?? trade.stopPrice ?? 0) || null
        }))
      });
    }

    await upsertUnifiedTransactionRows(env, transactions, PAPER_TRADE_MODE);
    await saveRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, {
      ...settings,
      users,
      generatedAt: new Date().toISOString(),
      source: "cloudflare-d1-shared-settings"
    });
    await upsertUserStrategyRecordsD1(env, {
      ...settings,
      users
    });
    if (options.skipCacheRefresh) {
      run.cacheRefreshSkipped = true;
    } else {
      const priceSnapshots = await loadStoredPriceSnapshots(env);
      await saveLeaderboardSummaryCache(env, settings, transactions, priceSnapshots);
      await saveAdvisorySummaryCache(env);
    }
    run.status = "completed";
  } catch (error) {
    run.status = "failed";
    run.error = error.message;
  } finally {
    run.finishedAt = new Date().toISOString();
    try {
      await recordPaperSchedulerRun(env, run);
    } finally {
      await releasePaperSchedulerLock(env, lockOwner);
    }
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
  const protectiveSweep = await sweepBreachedOpenPaperTradesD1(env);
  const run = await runPaperTradingScheduler(env, {
    force: body.force === true || url.searchParams.get("force") === "true",
    forceAdvisory: body.forceAdvisory === true || url.searchParams.get("forceAdvisory") === "true"
  });
  run.protectiveSweep = protectiveSweep;
  return jsonResponse(run, run.status === "failed" ? 500 : 200, origin);
}

function mergeSettingsPayload(current = defaultSettingsPayload(), incoming = {}) {
  const currentGeneratedAt = getTransactionDate(current.generatedAt).getTime();
  const clientLoadedAt = incoming.settingsLoadedAt ? getTransactionDate(incoming.settingsLoadedAt).getTime() : 0;
  const acceptUserState = Boolean(clientLoadedAt && (!currentGeneratedAt || clientLoadedAt >= currentGeneratedAt - 1000));

  return {
    ...current,
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-shared-settings",
    coinbaseSandboxEnabled: typeof incoming.coinbaseSandboxEnabled === "boolean"
      ? incoming.coinbaseSandboxEnabled
      : Boolean(current.coinbaseSandboxEnabled),
    users: acceptUserState && Array.isArray(incoming.users) ? incoming.users : current.users || [],
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
    userProfiles: acceptUserState && incoming.userProfiles && typeof incoming.userProfiles === "object" && !Array.isArray(incoming.userProfiles)
      ? mergeUserProfiles(current.userProfiles || {}, incoming.userProfiles)
      : current.userProfiles || {}
  };
}

function canonicalizeSettingsPayload(settings = defaultSettingsPayload()) {
  const usersByEmail = new Map();
  const profilesByEmail = {};
  const users = Array.isArray(settings.users) ? settings.users : [];
  const profiles = settings.userProfiles && typeof settings.userProfiles === "object" && !Array.isArray(settings.userProfiles)
    ? settings.userProfiles
    : {};

  users.forEach((user) => {
    const email = normalizeEmail(user.email);
    if (!email) return;
    const existing = usersByEmail.get(email) || {};
    usersByEmail.set(email, {
      ...existing,
      ...user,
      email,
      name: email === "peterambiel@gmail.com" ? "Peter Ambiel" : user.name || existing.name || email,
      mergedFrom: normalizeMergedFrom([...(existing.mergedFrom || []), ...(user.mergedFrom || [])], email)
    });
  });

  Object.entries(profiles).forEach(([key, profile]) => {
    const email = normalizeEmail(profile?.email || key);
    if (!email) return;
    const normalizedProfile = profile && typeof profile === "object" && !Array.isArray(profile) ? profile : {};
    profilesByEmail[email] = {
      ...(profilesByEmail[email] || {}),
      ...normalizedProfile,
      email,
      name: email === "peterambiel@gmail.com" ? "Peter Ambiel" : normalizedProfile.name || profilesByEmail[email]?.name || "",
      mergedFrom: normalizeMergedFrom([...(profilesByEmail[email]?.mergedFrom || []), ...(normalizedProfile.mergedFrom || [])], email)
    };
    const existingUser = usersByEmail.get(email) || {};
    usersByEmail.set(email, {
      ...normalizedProfile,
      ...existingUser,
      email,
      name: email === "peterambiel@gmail.com" ? "Peter Ambiel" : existingUser.name || normalizedProfile.name || email,
      avatarDataUrl: existingUser.avatarDataUrl || normalizedProfile.avatarDataUrl || "",
      mergedFrom: normalizeMergedFrom([...(normalizedProfile.mergedFrom || []), ...(existingUser.mergedFrom || [])], email)
    });
  });

  const normalizedUsers = Array.from(usersByEmail.values()).map((user) => applyMarkovMethodSeedToRecord(user, user.email));
  const normalizedProfiles = Object.fromEntries(Object.entries(profilesByEmail).map(([email, profile]) => [
    email,
    applyMarkovMethodSeedToRecord(profile, email)
  ]));

  return {
    ...settings,
    users: normalizedUsers,
    userProfiles: normalizedProfiles
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

async function handleD1Settings(env, request, origin, ctx = null) {
  if (request.method === "GET") {
    const settings = await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload());
    const enrichedSettings = canonicalizeSettingsPayload(await mergeUserStrategyRecordsD1(env, settings));
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
  const settings = canonicalizeSettingsPayload(mergeSettingsPayload(current, body));
  await saveRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, settings);
  await upsertUserStrategyRecordsD1(env, settings);
  const refresh = async () => {
    const payload = await loadUnifiedTransactionPayloadD1(env, PAPER_TRADE_MODE, PAPER_LEDGER_SOURCE);
    const priceSnapshots = await loadStoredPriceSnapshots(env);
    await saveLeaderboardSummaryCache(env, settings, payload.transactions || [], priceSnapshots);
  };
  if (ctx?.waitUntil) {
    ctx.waitUntil(refresh().catch((error) => {
      console.error("leaderboard cache refresh after settings save failed", error);
    }));
  } else {
    await refresh();
  }

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

async function handleD1UserCapitalUpdate(env, request, origin) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405, origin);
  }

  const body = await request.json().catch(() => ({}));
  const updates = Array.isArray(body.updates) ? body.updates : [];
  if (!updates.length) {
    return jsonResponse({ error: "No user capital updates provided" }, 400, origin);
  }

  const settings = await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload());
  const users = Array.isArray(settings.users) ? settings.users : [];
  const profiles = settings.userProfiles && typeof settings.userProfiles === "object" && !Array.isArray(settings.userProfiles)
    ? { ...settings.userProfiles }
    : {};
  const applied = [];

  updates.forEach((update) => {
    const email = normalizeEmail(update.email);
    const capital = Number(update.paperBaseEquity ?? update.startCapital);
    if (!email || !Number.isFinite(capital) || capital < 0) return;

    const user = users.find((candidate) => normalizeEmail(candidate.email) === email);
    const nextCapital = Math.round(capital * 100) / 100;
    if (user) {
      user.paperBaseEquity = nextCapital;
      user.commodityAllocations = user.commodityAllocations && typeof user.commodityAllocations === "object" && !Array.isArray(user.commodityAllocations)
        ? user.commodityAllocations
        : {};
      user.commodityAllocations.oil = {
        ...(user.commodityAllocations.oil && typeof user.commodityAllocations.oil === "object" ? user.commodityAllocations.oil : {}),
        startCapital: nextCapital
      };
    }

    const profile = profiles[email] && typeof profiles[email] === "object" && !Array.isArray(profiles[email])
      ? { ...profiles[email] }
      : {};
    profile.paperBaseEquity = nextCapital;
    profile.commodityAllocations = profile.commodityAllocations && typeof profile.commodityAllocations === "object" && !Array.isArray(profile.commodityAllocations)
      ? profile.commodityAllocations
      : {};
    profile.commodityAllocations.oil = {
      ...(profile.commodityAllocations.oil && typeof profile.commodityAllocations.oil === "object" ? profile.commodityAllocations.oil : {}),
      startCapital: nextCapital
    };
    profiles[email] = profile;
    applied.push({ email, paperBaseEquity: nextCapital });
  });

  if (!applied.length) {
    return jsonResponse({ error: "No valid user capital updates provided" }, 400, origin);
  }

  const nextSettings = {
    ...settings,
    users,
    userProfiles: profiles,
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-shared-settings"
  };
  await saveRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, nextSettings);

  return jsonResponse({ storage: "d1", applied, settings: nextSettings }, 200, origin);
}

async function handleD1Advisories(env, request, origin, ctx = null) {
  if (request.method === "GET") {
    const url = new URL(request.url);
    if (url.searchParams.get("summary") === "1" || url.searchParams.get("summary") === "true") {
      return handleAdvisorySummaryRoute(env, request, origin, ctx);
    }
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
  if (ctx?.waitUntil) {
    ctx.waitUntil(saveAdvisorySummaryCache(env).catch((error) => {
      console.error("advisory summary cache save failed", error);
    }));
  }

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
    if (normalizedMode === PAPER_TRADE_MODE) {
      const settings = canonicalizeSettingsPayload(await mergeUserStrategyRecordsD1(
        env,
        await getRuntimeDocumentD1(env, SETTINGS_DOCUMENT_KEY, defaultSettingsPayload())
      ));
      const priceSnapshots = await loadStoredPriceSnapshots(env);
      payload.summary = buildServerLeaderboardSummary(
        settings,
        payload.transactions || [],
        priceSnapshots,
        "all",
        "cloudflare-d1-paper-ledger-summary"
      );
    }
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
  if (!taggedIncoming.length) {
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

  await upsertUnifiedTransactionRows(env, taggedIncoming, normalizedMode);
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

async function handleSettingsRoute(env, request, origin, ctx = null) {
  if (hasRuntimeStore(env)) {
    return handleD1Settings(env, request, origin, ctx);
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

async function handleAdvisoriesRoute(env, request, origin, ctx = null) {
  if (hasRuntimeStore(env)) {
    return handleD1Advisories(env, request, origin, ctx);
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
  async fetch(request, env, ctx) {
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
        return handleSettingsRoute(env, request, origin, ctx);
      }

      if (url.pathname === "/settings/strategy-change") {
        return handleD1StrategyChange(env, request, origin);
      }

      if (url.pathname === "/settings/user-capital") {
        return handleD1UserCapitalUpdate(env, request, origin);
      }

      if (url.pathname === "/advisories") {
        return handleAdvisoriesRoute(env, request, origin, ctx);
      }

      if (url.pathname === "/micro-predictions") {
        return handleMicroPredictionsRoute(env, request, origin);
      }

      if (url.pathname === "/prices") {
        return handlePriceSnapshotsRoute(env, request, origin);
      }

      if (url.pathname === "/price-history") {
        return handlePriceHistoryRoute(env, request, origin);
      }

      if (url.pathname === "/leaderboard") {
        return handleLeaderBoardRoute(env, request, origin, ctx);
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
    ctx.waitUntil(getPriceSnapshots(env, true).catch((error) => {
      console.error("price snapshot refresh failed", error);
    }));
    ctx.waitUntil(sweepBreachedOpenPaperTradesD1(env).then(() => (
      runPaperTradingScheduler(env, { skipCacheRefresh: true })
    )).then(() => (
      refreshLeaderboardSummaryCache(env).catch((error) => {
        console.error("leaderboard cache refresh failed", error);
      })
    )).then(() => (
      saveAdvisorySummaryCache(env).catch((error) => {
        console.error("advisory summary cache refresh failed", error);
      })
    )).catch((error) => {
      console.error("paper scheduler failed", error);
    }));
  }
};
