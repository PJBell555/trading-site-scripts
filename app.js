const commodities = [
  { id: "oil", name: "Oil", family: "Energy" },
  { id: "natural-gas", name: "Natural Gas", family: "Energy" },
  { id: "gold", name: "Gold", family: "Metals" },
  { id: "silver", name: "Silver", family: "Metals" },
  { id: "copper", name: "Copper", family: "Metals" },
  { id: "platinum", name: "Platinum", family: "Metals" }
];

const accessGateEl = document.querySelector("#access-gate");
const accessFormEl = document.querySelector("#access-form");
const accessEmailEl = document.querySelector("#access-email");
const accessPasswordEl = document.querySelector("#access-password");
const accessErrorEl = document.querySelector("#access-error");
const appShellEl = document.querySelector("#app-shell");
const heroEl = document.querySelector("header.hero");
const noticeEl = document.querySelector(".notice");
const menuButtons = document.querySelectorAll("[data-section-target]");
const appSections = document.querySelectorAll("[data-app-section]");
const userManagementStatusEl = document.querySelector("#user-management-status");
const userTotalCountEl = document.querySelector("#user-total-count");
const userActiveCountEl = document.querySelector("#user-active-count");
const userNewCountEl = document.querySelector("#user-new-count");
const userAddFormEl = document.querySelector("#user-add-form");
const userNameInputEl = document.querySelector("#user-name-input");
const userEmailInputEl = document.querySelector("#user-email-input");
const userSearchInputEl = document.querySelector("#user-search-input");
const userSearchButtonEl = document.querySelector("#user-search-button");
const userTableBodyEl = document.querySelector("#user-table-body");
const userRosterViewEl = document.querySelector("#user-roster-view");
const userDetailViewEl = document.querySelector("#user-detail-view");
const backToUsersButtonEl = document.querySelector("#back-to-users-button");
const selectedUserProfileEl = document.querySelector("#selected-user-profile");
const userInlineDetailPanelEl = document.querySelector("#user-inline-detail-panel");
const userInlineDetailTitleEl = document.querySelector("#user-inline-detail-title");
const userInlineDetailBodyEl = document.querySelector("#user-inline-detail-body");
const userInlineDetailCloseEl = document.querySelector("#user-inline-detail-close");
const userStatCards = Array.from(document.querySelectorAll("[data-user-list-filter]"));
const featureRequestStatusEl = document.querySelector("#feature-request-status");
const featureTypeFiltersEl = document.querySelector("#feature-type-filters");
const featureNewButtonEl = document.querySelector("#feature-new-button");
const featureFormEl = document.querySelector("#feature-form");
const featureTitleInputEl = document.querySelector("#feature-title-input");
const featureTypeInputEl = document.querySelector("#feature-type-input");
const featureTagInputEl = document.querySelector("#feature-tag-input");
const featureDescriptionInputEl = document.querySelector("#feature-description-input");
const featureBoardEl = document.querySelector("#feature-board");
const secondOpinionStatusEl = document.querySelector("#second-opinion-status");
const secondOpinionModelsEl = document.querySelector("#second-opinion-models");
const secondOpinionPromptsEl = document.querySelector("#second-opinion-prompts");
const secondOpinionSelectAllEl = document.querySelector("#second-opinion-select-all");
const secondOpinionRunSelectedEl = document.querySelector("#second-opinion-run-selected");
const secondOpinionRunAllEl = document.querySelector("#second-opinion-run-all");
const secondOpinionResultsLabelEl = document.querySelector("#second-opinion-results-label");
const secondOpinionResultsEl = document.querySelector("#second-opinion-results");
const openBrainStatusEl = document.querySelector("#open-brain-status");
const openBrainEventCountEl = document.querySelector("#open-brain-event-count");
const openBrainEndpointEl = document.querySelector("#open-brain-endpoint");
const saveOpenBrainEndpointEl = document.querySelector("#save-open-brain-endpoint");
const captureOpenBrainAdvisoryEl = document.querySelector("#capture-open-brain-advisory");
const exportOpenBrainMemoryEl = document.querySelector("#export-open-brain-memory");
const openBrainMemoryTableEl = document.querySelector("#open-brain-memory-table");
const strategyEditorEl = document.querySelector("#strategy-editor");
const strategyEditorCancelEl = document.querySelector("#strategy-editor-cancel");
const strategyEditKeyEl = document.querySelector("#strategy-edit-key");
const strategyEditTitleEl = document.querySelector("#strategy-edit-title");
const strategyEditMetaEl = document.querySelector("#strategy-edit-meta");
const strategyEditSummaryEl = document.querySelector("#strategy-edit-summary");
const strategyEditNoteEl = document.querySelector("#strategy-edit-note");
const commoditySelect = document.querySelector("#commodity");
const primaryModelSelect = document.querySelector("#primary-model");
const primaryModelStatEl = document.querySelector("#primary-model-stat");
const commodityStrip = document.querySelector("#commodity-strip");
const inputsTitle = document.querySelector("#inputs-title");
const outputTitle = document.querySelector("#output-title");
const llmRunBtn = document.querySelector("#llm-run-btn");
const llmStatusEl = document.querySelector("#llm-status");
const llmVerificationBody = document.querySelector("#llm-verification-body");
const signalBadge = document.querySelector("#signal-badge");
const convictionEl = document.querySelector("#conviction");
const actionEl = document.querySelector("#action");
const tickerEl = document.querySelector("#ticker");
const contractMonthEl = document.querySelector("#contract-month");
const priceEl = document.querySelector("#price");
const entryLabelEl = document.querySelector("#entry-label");
const targetLabelEl = document.querySelector("#target-label");
const targetBuyEl = document.querySelector("#target-buy");
const targetSellEl = document.querySelector("#target-sell");
const stopLossEl = document.querySelector("#stop-loss");
const buyWindowEl = document.querySelector("#buy-window");
const priceSourceEl = document.querySelector("#price-source");
const minLongEl = document.querySelector("#min-long");
const minShortEl = document.querySelector("#min-short");
const paperEquityEl = document.querySelector("#paper-equity");
const paperRiskEl = document.querySelector("#paper-risk");
const paperEquityInputEl = document.querySelector("#paper-equity-input");
const paperRiskInputEl = document.querySelector("#paper-risk-input");
const paperUserContextEl = document.querySelector("#paper-user-context");
const liveUserContextEl = document.querySelector("#live-user-context");
const userStrategyBannerEl = document.querySelector("#user-strategy-banner");
const advisoryUserAvatarEl = document.querySelector("#advisory-user-avatar");
const advisoryUserNameEl = document.querySelector("#advisory-user-name");
const advisoryUserStrategyNameEl = document.querySelector("#advisory-user-strategy-name");
const paperSizeEl = document.querySelector("#paper-size");
const paperStatusEl = document.querySelector("#paper-status");
const paperCommittedEl = document.querySelector("#paper-committed");
const paperOpenPlEl = document.querySelector("#paper-open-pl");
const paperMartingaleEl = document.querySelector("#paper-martingale");
const paperMarketStatusEl = document.querySelector("#paper-market-status");
const paperKarpathyEl = document.querySelector("#paper-karpathy");
const coinbaseSandboxStatusEl = document.querySelector("#coinbase-sandbox-status");
const paperDecisionTitleEl = document.querySelector("#paper-decision-title");
const paperDecisionDetailEl = document.querySelector("#paper-decision-detail");
const paperStepsEl = document.querySelector("#paper-steps");
const loopCollectEl = document.querySelector("#loop-collect");
const loopEvaluateEl = document.querySelector("#loop-evaluate");
const loopAdjustEl = document.querySelector("#loop-adjust");
const paperTradeSummaryEl = document.querySelector("#paper-trade-summary");
const historyCommodityFiltersEl = document.querySelector("#history-commodity-filters");
const historyPeriodFiltersEl = document.querySelector("#history-period-filters");
const historyTotalAllEl = document.querySelector("#history-total-all");
const historyTotalFilteredEl = document.querySelector("#history-total-filtered");
const historyTotalCountEl = document.querySelector("#history-total-count");
const cleanHistoryEl = document.querySelector("#clean-history");
const exportHistoryEl = document.querySelector("#export-history");
const sharedHistoryStatusEl = document.querySelector("#shared-history-status");
const coinbaseSandboxEnabledEl = document.querySelector("#coinbase-sandbox-enabled");
const transactionHistoryEl = document.querySelector("#transaction-history");
const liveTradeFormEl = document.querySelector("#live-trade-form");
const liveTradeSummaryEl = document.querySelector("#live-trade-summary");
const liveTradeHistoryEl = document.querySelector("#live-trade-history");
const liveTotalPlEl = document.querySelector("#live-total-pl");
const liveFilteredPlEl = document.querySelector("#live-filtered-pl");
const liveTradeCountEl = document.querySelector("#live-trade-count");
const liveLedgerStatusEl = document.querySelector("#live-ledger-status");
const liveAgentSelectEl = document.querySelector("#live-agent-select");
const liveChannelSelectEl = document.querySelector("#live-channel-select");
const advisoryHistoryStatusEl = document.querySelector("#advisory-history-status");
const advisoryCommodityFiltersEl = document.querySelector("#advisory-commodity-filters");
const advisoryHorizonFiltersEl = document.querySelector("#advisory-horizon-filters");
const advisoryPeriodFiltersEl = document.querySelector("#advisory-period-filters");
const syncAdvisoryHistoryEl = document.querySelector("#sync-advisory-history");
const advisorySampleCountEl = document.querySelector("#advisory-sample-count");
const accuracyVerdictCardEl = document.querySelector("#accuracy-verdict-card");
const accuracyVerdictEl = document.querySelector("#accuracy-verdict");
const accuracyVerdictCopyEl = document.querySelector("#accuracy-verdict-copy");
const advisoryScoreThresholdEl = document.querySelector("#advisory-score-threshold");
const accuracyThresholdDisplayEl = document.querySelector("#accuracy-threshold-display");
const accuracyHighConvictionEl = document.querySelector("#accuracy-high-conviction");
const accuracyHighConvictionCountEl = document.querySelector("#accuracy-high-conviction-count");
const accuracyAllCallsEl = document.querySelector("#accuracy-all-calls");
const accuracyAllCountEl = document.querySelector("#accuracy-all-count");
const accuracyAverageMoveEl = document.querySelector("#accuracy-average-move");
const accuracyEvaluationWindowEl = document.querySelector("#accuracy-evaluation-window");
const accuracyBarsEl = document.querySelector("#accuracy-bars");
const accuracyOutcomesEl = document.querySelector("#accuracy-outcomes");
const advisoryChartEl = document.querySelector("#advisory-chart");
const reasonsEl = document.querySelector("#reasons");
const riskCopyEl = document.querySelector("#risk-copy");

const inputs = {
  trend: document.querySelector("#trend"),
  inventory: document.querySelector("#inventory"),
  dollar: document.querySelector("#dollar"),
  geopolitics: document.querySelector("#geopolitics"),
  curve: document.querySelector("#curve"),
  horizon: document.querySelector("#horizon"),
  manualConviction: document.querySelector("#manual-conviction")
};

const horizonWeight = {
  intraday: 0.8,
  swing: 1,
  position: 1.15
};

const riskNotes = {
  oil: "A surprise inventory build, stronger dollar, or easing supply headlines can flip this view quickly.",
  "natural-gas": "Weather shifts and storage surprises can overwhelm momentum in a single session.",
  gold: "Real yield spikes and a stronger dollar usually lean against a bullish metals call.",
  silver: "Silver can swing harder than gold when industrial demand sentiment breaks down.",
  copper: "Growth fears and China demand revisions can reverse a constructive copper setup fast.",
  platinum: "Thin liquidity and industrial demand shocks can make platinum conviction fragile."
};

const commodityTweaks = {
  oil: { trend: 1.2, inventory: 1.5, geopolitics: 2.1, dollar: 0.2, curve: 0.8 },
  "natural-gas": { trend: 0.7, inventory: 0.8, geopolitics: 0.4, dollar: -0.2, curve: 0.3 },
  gold: { trend: 0.2, inventory: -0.8, geopolitics: 0.6, dollar: 1.8, curve: -0.4 },
  silver: { trend: 0.3, inventory: -0.4, geopolitics: 0.2, dollar: 1.1, curve: -0.2 },
  copper: { trend: 0.8, inventory: 0.1, geopolitics: -0.4, dollar: 0.9, curve: 0.4 },
  platinum: { trend: 0.5, inventory: -0.2, geopolitics: 0.3, dollar: 0.7, curve: 0.1 }
};

const marketConfig = {
  oil: {
    ticker: "NOL-18MAY26-CDE",
    productId: "NOL-18MAY26-CDE",
    contractMonth: "May 2026",
    productType: "Coinbase futures contract",
    referencePrice: null,
    contractMultiplier: 10,
    marginRateLong: 0.1,
    marginRateShort: 0.12,
    feePerContractSide: 0.25,
    feeLabel: "Estimated exchange/brokerage fee",
    buyWindow: "09:45-10:30 ET"
  },
  "natural-gas": { ticker: "NG reference", productId: "NATURAL-GAS-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: null, buyWindow: "10:00-11:00 ET" },
  gold: { ticker: "Gold reference", productId: "GOLD-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: null, buyWindow: "09:35-10:15 ET" },
  silver: { ticker: "Silver reference", productId: "SILVER-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: null, buyWindow: "09:35-10:15 ET" },
  copper: { ticker: "Copper reference", productId: "COPPER-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: null, buyWindow: "09:45-10:45 ET" },
  platinum: { ticker: "Platinum reference", productId: "PLATINUM-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: null, buyWindow: "10:00-11:00 ET" }
};

const advisoryModels = [
  { id: "sonnet-4.6", name: "Sonnet 4.6", provider: "Anthropic", badge: "C", tilt: -1, style: "calibrated reasoning (live LLM via OpenRouter)", openrouterId: "anthropic/claude-sonnet-4.6" },
  { id: "haiku-4.5", name: "Haiku 4.5", provider: "Anthropic", badge: "C", tilt: 0, style: "fast LLM via OpenRouter", openrouterId: "anthropic/claude-haiku-4.5" },
  { id: "gpt-5-mini", name: "GPT-5-mini", provider: "OpenAI", badge: "O", tilt: 0, style: "reasoning model (critic / second opinion)", openrouterId: "openai/gpt-5-mini" },
  { id: "gemini-flash", name: "Gemini 2.5 Flash", provider: "Google", badge: "G", tilt: 1, style: "fast LLM via OpenRouter", openrouterId: "google/gemini-2.5-flash" },
  { id: "gpt-5-5", name: "ChatGPT 5.5", provider: "OpenAI", badge: "O", tilt: 0, style: "mapped to gpt-5-mini on the live API", openrouterId: "openai/gpt-5-mini" },
  { id: "gpt-5-4", name: "ChatGPT 5.4", provider: "OpenAI", badge: "O", tilt: -2, style: "mapped to gpt-5-nano on the live API", openrouterId: "openai/gpt-5-nano" },
  { id: "perplexity", name: "Perplexity", provider: "Perplexity", badge: "P", tilt: -4, style: "(falls back to Sonnet 4.6 on the live API for now)" },
  { id: "gemini", name: "Gemini", provider: "Google", badge: "G", tilt: 3, style: "mapped to gemini-2.5-flash on the live API", openrouterId: "google/gemini-2.5-flash" },
  { id: "claude", name: "Claude", provider: "Anthropic", badge: "C", tilt: -1, style: "risk-first critique" },
  { id: "grok", name: "Grok", provider: "xAI", badge: "X", tilt: 5, style: "momentum and narrative scan" }
];

const opinionPromptLabels = {
  technician: "Master Technician Analysis",
  "risk-manager": "Risk Manager Challenge",
  macro: "Macro Cross-Check"
};

const latestPrices = new Map();
const latestPriceTimes = new Map();
const latestPriceSources = new Map();
const confirmedLivePrices = new Map();
const confirmedLivePriceTimes = new Map();
const confirmedLivePriceSources = new Map();
const productMinimums = new Map();
const LIVE_PRICE_REFRESH_MS = 10000;
const SNAPSHOT_PRICE_REFRESH_MS = 60000;
const BACKEND_TRANSACTION_SYNC_MS = 60000;
const BACKEND_SETTINGS_SYNC_MS = 120000;
const BACKEND_ADVISORY_SYNC_MS = 300000;
const BACKEND_FAILURE_BACKOFF_MS = 300000;
const PAPER_START_EQUITY = 100000;
const PAPER_DEFAULT_RISK_PCT = 0.75;
const PAPER_MIN_CONVICTION = 50;
const MARTINGALE_MAX_STEP = 4;
const KARPATHY_SAMPLE_SIZE = 12;
const COINBASE_WS_URL = "wss://advanced-trade-ws.coinbase.com";
const COINBASE_WS_STALE_MS = 180000;
const PAPER_EXIT_PRICE_STALE_MS = 180000;
const DEFAULT_HISTORY_API_URL = "https://trading-site-scripts.peter-bell54.workers.dev";
const UNAVAILABLE_TEXT = "Not available";
const COINBASE_SANDBOX_KEY = "atlas-coinbase-sandbox-enabled";
const ADVISORY_SNAPSHOT_KEY = "atlas-last-advisory-snapshot-key";
const ACCESS_STATE_KEY = "atlas-access-unlocked";
const ACCESS_EMAIL_KEY = "atlas-access-email";
const ACCESS_SESSION_RECORDED_KEY = "atlas-access-session-recorded";
const ACCESS_PASSWORD_HASH = "55bdd6bb9b1839c8f8e7c3459e61f5537d0691c6b4c8fa827d594708f4d63db2";
const USER_ROSTER_KEY = "atlas-user-roster-v1";
const LEGACY_LEDGER_USER_EMAIL = "peter@pjbell.com";
const FEATURE_REQUESTS_KEY = "atlas-feature-requests-v1";
const PRIMARY_MODEL_KEY = "atlas-primary-advisory-model";
const SECOND_OPINION_MODELS_KEY = "atlas-second-opinion-models";
const SECOND_OPINION_PROMPTS_KEY = "atlas-second-opinion-prompts";
const OPEN_BRAIN_MEMORY_KEY = "atlas-open-brain-memory-events-v1";
const OPEN_BRAIN_ENDPOINT_KEY = "atlas-open-brain-endpoint";
const STRATEGY_EDITS_KEY = "comhedge-strategy-edits-v1";
const LIVE_TRADE_LEDGER_KEY = "comhedge-live-trades-v1";
const ADVISORY_SCORE_THRESHOLD_KEY = "atlas-advisory-score-threshold";
const MANUAL_CONVICTION_OVERRIDES_KEY = "comhedge-manual-conviction-overrides-v1";
const ADVISORY_CAPTURE_MS = 120000;
const ADVISORY_HORIZONS = ["intraday", "swing", "position"];
const ADVISORY_PERIODS = {
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 31 * 24 * 60 * 60 * 1000,
  year: 366 * 24 * 60 * 60 * 1000
};
const ADVISORY_EVALUATION_WINDOWS = {
  intraday: 10 * 60 * 1000,
  swing: 60 * 60 * 1000,
  position: 4 * 60 * 60 * 1000
};
const DEFAULT_ADVISORY_SCORE_THRESHOLD = 60;
const DEFAULT_USER_STRATEGY = {
  name: "Martingale with Karpathy loop",
  type: "martingale-karpathy",
  description: "Use four Martingale steps, then let the Karpathy loop adjust the advisory threshold from trade outcomes.",
  martingaleSteps: 4,
  karpathyLoop: true,
  skillsAccess: true,
  openBrainAccess: true,
  skillFocus: "Lessons from Paper Trades",
  openBrainMemory: "Capture trade decisions, advisory context, and outcomes before changing thresholds."
};
const DEFAULT_BROKER_ACCOUNT = {
  provider: "Coinbase",
  environment: "sandbox",
  accountLabel: "",
  apiKeyName: "",
  keyStorage: "Cloudflare Worker secret",
  permissionScope: "view-only",
  canTrade: false,
  webhookUrl: "",
  notes: ""
};

const chipMap = new Map();
const openPaperTrades = new Map();
const transactionHistory = [];
const liveTradeLedger = [];
const advisoryHistory = [];
const PAPER_ACTION_PENDING_TTL_MS = 10000;
const pendingPaperActions = new Map();
let paperEquity = PAPER_START_EQUITY;
let paperBaseEquity = PAPER_START_EQUITY;
let paperRiskPct = PAPER_DEFAULT_RISK_PCT;
let martingaleStep = 1;
let nextTransactionId = 1;
let snapshotPricesPromise = null;
let snapshotPricesLoadedAt = 0;
let activePriceSocket = null;
let activePriceSocketCommodity = null;
let activePriceSocketReconnectTimer = null;
let historyCommodityFilter = "all";
let historyPeriodFilter = "all";
let historyFiltersTouched = false;
let expandedTransactionId = null;
let advisoryCommodityFilter = "oil";
let advisoryHorizonFilter = "intraday";
let advisoryPeriodFilter = "hour";
let lastAdvisorySnapshotKey = "";
let appStarted = false;
let userSearchQuery = "";
let userListFilter = "all";
let expandedUserEmail = "";
let editingUserEmail = "";
let activeSection = "home";
let featureTypeFilter = "all";
let primaryModelId = "sonnet-4.6";
let secondaryModelId = "gpt-5-mini";
let lastVerifiedLLMRun = null;
let llmInFlight = false;
let llmAutoCommodityKey = null;
let advisoryScoreThreshold = DEFAULT_ADVISORY_SCORE_THRESHOLD;
let advisoryScoreThresholdIsManual = false;
let backendSyncInFlight = false;
let backendHistoryWriteInFlight = false;
let backendSettingsSyncInFlight = false;
let backendAdvisorySyncInFlight = false;
let backendHistoryReady = false;
let pendingHistorySaveRetry = false;
let nextBackendTransactionSyncAt = 0;
let nextBackendSettingsSyncAt = 0;
let nextBackendAdvisorySyncAt = 0;
let lastPrimarySignal = null;
let lastTradePlan = null;
let lastCommodityMeta = commodities[0];
const userRoster = [];
const featureRequests = [];
const openBrainMemory = [];
const PAPER_STATE_KEY = "atlas-paper-trading-state-v1";

async function hashAccessPassword(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function showAppShell() {
  accessGateEl.hidden = true;
  appShellEl.hidden = false;
}

function showUserManagement(resetSearch = false) {
  loadUserRoster();
  if (resetSearch) {
    userSearchQuery = "";
    if (userSearchInputEl) userSearchInputEl.value = "";
  }
  userSearchQuery = userSearchInputEl.value.trim();
  renderUserManagement();

  // Pull shared settings without blocking paint (keeps Users consistent across devices).
  loadSharedSettings().then(() => {
    userSearchQuery = userSearchInputEl.value.trim();
    renderUserManagement();
  });

  window.requestAnimationFrame(() => {
    userSearchQuery = userSearchInputEl.value.trim();
    renderUserManagement();
  });
}

function setActiveSection(section) {
  activeSection = section;
  appShellEl.dataset.activeSection = section;
  menuButtons.forEach((button) => {
    button.dataset.active = String(button.dataset.sectionTarget === section);
  });
  appSections.forEach((sectionEl) => {
    sectionEl.hidden = sectionEl.dataset.appSection !== section;
  });

  if (heroEl) heroEl.hidden = section !== "home";
  if (noticeEl) noticeEl.hidden = section !== "home";
  if (section === "advisories") {
    renderCurrentUserStrategy();
    renderAdvisoryChart();
  }
  if (section === "second-opinion") updateSecondOpinionRunState();
  if (section === "open-brain") renderOpenBrainMemory();
  if (section === "users") showUserManagement(true);
  if (section === "actual-trades") renderLiveTradeLedger();
}

function loadOpenBrainMemory() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(OPEN_BRAIN_MEMORY_KEY) || "[]");
    openBrainMemory.splice(0, openBrainMemory.length, ...(Array.isArray(stored) ? stored : []));
  } catch (error) {
    openBrainMemory.splice(0, openBrainMemory.length);
  }
  openBrainEndpointEl.value = window.localStorage.getItem(OPEN_BRAIN_ENDPOINT_KEY) || "";
}

function saveOpenBrainMemory() {
  window.localStorage.setItem(OPEN_BRAIN_MEMORY_KEY, JSON.stringify(openBrainMemory.slice(0, 250)));
}

function recordOpenBrainEvent(type, summary, metadata = {}) {
  const event = {
    id: `memory-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    time: new Date().toISOString(),
    type,
    summary,
    tags: metadata.tags || [],
    metadata
  };

  openBrainMemory.unshift(event);
  saveOpenBrainMemory();
  renderOpenBrainMemory();
  return event;
}

function renderOpenBrainMemory() {
  openBrainEventCountEl.textContent = String(openBrainMemory.length);
  openBrainStatusEl.textContent = openBrainEndpointEl.value ? "Endpoint saved" : "Local memory ready";
  openBrainMemoryTableEl.innerHTML = "";

  if (!openBrainMemory.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 4;
    cell.textContent = "No memory events yet. Capture the current advisory or run second opinions to start.";
    row.append(cell);
    openBrainMemoryTableEl.append(row);
    return;
  }

  openBrainMemory.slice(0, 25).forEach((event) => {
    const row = document.createElement("tr");
    [
      formatTradeTime(event.time),
      event.type,
      event.summary,
      (event.tags || []).join(", ") || "-"
    ].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    openBrainMemoryTableEl.append(row);
  });
}

function captureCurrentAdvisoryMemory(source = "manual") {
  if (!lastPrimarySignal || !lastTradePlan || !lastCommodityMeta) return null;
  if (!lastTradePlan.priceReady) return null;
  return recordOpenBrainEvent(
    "advisory",
    `${lastCommodityMeta.name} ${lastPrimarySignal.label} at ${formatPrice(lastTradePlan.livePrice)} using ${getModelById(primaryModelId).name}`,
    {
      source,
      commodity: lastCommodityMeta.id,
      model: primaryModelId,
      label: lastPrimarySignal.label,
      tone: lastPrimarySignal.tone,
      conviction: lastPrimarySignal.conviction,
      price: lastTradePlan.livePrice,
      target: lastTradePlan.sellPrice,
      stop: lastTradePlan.stopLoss,
      tags: ["advisory", lastCommodityMeta.id, lastPrimarySignal.tone, primaryModelId]
    }
  );
}

function downloadOpenBrainMemory() {
  const payload = {
    generatedAt: new Date().toISOString(),
    source: "atlas-open-brain-local-memory-export",
    nextBackend: "Supabase/Postgres pgvector plus MCP memory server",
    events: openBrainMemory
  };
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `atlas-open-brain-memory-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function getModelById(modelId) {
  return advisoryModels.find(({ id }) => id === modelId) || advisoryModels[0];
}

function getSelectedSecondOpinionModels() {
  return Array.from(secondOpinionModelsEl.querySelectorAll("input[type='checkbox']:checked"))
    .map((input) => input.value)
    .filter((modelId) => modelId !== primaryModelId);
}

function getSelectedSecondOpinionPrompts() {
  const selected = Array.from(secondOpinionPromptsEl.querySelectorAll("input[type='checkbox']:checked"))
    .map((input) => input.value);
  return selected.length ? selected : ["technician"];
}

function saveModelSettings() {
  window.localStorage.setItem(PRIMARY_MODEL_KEY, primaryModelId);
  window.localStorage.setItem(SECOND_OPINION_MODELS_KEY, JSON.stringify(getSelectedSecondOpinionModels()));
  window.localStorage.setItem(SECOND_OPINION_PROMPTS_KEY, JSON.stringify(getSelectedSecondOpinionPrompts()));
}

function loadModelSettings() {
  try {
    const storedPrimary = window.localStorage.getItem(PRIMARY_MODEL_KEY);
    if (advisoryModels.some(({ id }) => id === storedPrimary)) primaryModelId = storedPrimary;
  } catch (error) {
    primaryModelId = "gpt-5-5";
  }
}

function loadStrategyEdits() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(STRATEGY_EDITS_KEY) || "{}");
    return stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
  } catch (error) {
    return {};
  }
}

function saveStrategyEdits(edits) {
  window.localStorage.setItem(STRATEGY_EDITS_KEY, JSON.stringify(edits));
}

function getStrategyCard(strategyKey) {
  return Array.from(document.querySelectorAll("[data-strategy-key]"))
    .find((card) => card.dataset.strategyKey === strategyKey) || null;
}

function getStrategyField(card, field) {
  return card?.querySelector(`[data-strategy-field="${field}"]`) || null;
}

function readStrategyCard(card) {
  return {
    title: getStrategyField(card, "title")?.textContent.trim() || "",
    meta: getStrategyField(card, "meta")?.textContent.trim() || "",
    summary: getStrategyField(card, "summary")?.textContent.trim() || "",
    note: getStrategyField(card, "note")?.textContent.trim() || ""
  };
}

function updateStrategyCard(strategyKey, values) {
  const card = getStrategyCard(strategyKey);
  if (!card) return;

  Object.entries(values).forEach(([field, value]) => {
    const target = getStrategyField(card, field);
    if (target) target.textContent = String(value || "").trim();
  });
}

function applySavedStrategyEdits() {
  const edits = loadStrategyEdits();
  Object.entries(edits).forEach(([strategyKey, values]) => updateStrategyCard(strategyKey, values));
}

function openStrategyEditor(strategyKey) {
  if (!strategyEditorEl || !strategyEditKeyEl) return;
  const card = getStrategyCard(strategyKey);
  if (!card) return;

  const saved = loadStrategyEdits()[strategyKey] || {};
  const current = { ...readStrategyCard(card), ...saved };
  strategyEditKeyEl.value = strategyKey;
  strategyEditTitleEl.value = current.title;
  strategyEditMetaEl.value = current.meta;
  strategyEditSummaryEl.value = current.summary;
  strategyEditNoteEl.value = current.note;
  strategyEditorEl.hidden = false;
  strategyEditorEl.scrollIntoView({ behavior: "smooth", block: "center" });
  strategyEditTitleEl.focus();
}

function closeStrategyEditor() {
  if (!strategyEditorEl) return;
  strategyEditorEl.hidden = true;
  strategyEditorEl.reset();
}

function saveStrategyEditor(event) {
  event.preventDefault();
  if (!strategyEditKeyEl) return;

  const strategyKey = strategyEditKeyEl.value;
  if (!strategyKey) return;

  const values = {
    title: strategyEditTitleEl.value,
    meta: strategyEditMetaEl.value,
    summary: strategyEditSummaryEl.value,
    note: strategyEditNoteEl.value
  };
  const edits = loadStrategyEdits();
  edits[strategyKey] = values;
  saveStrategyEdits(edits);
  updateStrategyCard(strategyKey, values);
  closeStrategyEditor();
}

function renderPrimaryModelSelector() {
  primaryModelSelect.innerHTML = "";
  advisoryModels.forEach((model) => {
    const option = document.createElement("option");
    option.value = model.id;
    option.textContent = `${model.name} (${model.provider})`;
    primaryModelSelect.append(option);
  });
  primaryModelSelect.value = primaryModelId;
  primaryModelStatEl.textContent = getModelById(primaryModelId).name;
}

function renderSecondOpinionControls() {
  let storedModels = null;
  let storedPrompts = null;

  try {
    storedModels = JSON.parse(window.localStorage.getItem(SECOND_OPINION_MODELS_KEY) || "null");
    storedPrompts = JSON.parse(window.localStorage.getItem(SECOND_OPINION_PROMPTS_KEY) || "null");
  } catch (error) {
    storedModels = null;
    storedPrompts = null;
  }

  const selectedModels = new Set(Array.isArray(storedModels) ? storedModels : ["perplexity", "gemini", "claude"]);
  const selectedPrompts = new Set(Array.isArray(storedPrompts) ? storedPrompts : ["technician"]);

  secondOpinionModelsEl.innerHTML = "";
  advisoryModels
    .filter(({ id }) => id !== primaryModelId)
    .forEach((model) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      const badge = document.createElement("span");
      const name = document.createElement("span");

      label.className = "model-choice";
      input.type = "checkbox";
      input.value = model.id;
      input.checked = selectedModels.has(model.id);
      badge.className = "model-badge";
      badge.textContent = model.badge;
      name.textContent = model.name;
      label.append(input, badge, name);
      secondOpinionModelsEl.append(label);
    });

  secondOpinionPromptsEl.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = selectedPrompts.has(input.value);
  });

  updateSecondOpinionRunState();
}

function updateSecondOpinionRunState() {
  const count = getSelectedSecondOpinionModels().length;
  secondOpinionRunSelectedEl.textContent = `Run Selected (${count})`;
  secondOpinionRunSelectedEl.disabled = count === 0;
  secondOpinionStatusEl.textContent = `${getModelById(primaryModelId).name} primary`;
  primaryModelStatEl.textContent = getModelById(primaryModelId).name;
}

function getOpinionScore(signal, model, promptIds) {
  const promptTilt = promptIds.reduce((total, promptId) => {
    if (promptId === "risk-manager") return total - 3;
    if (promptId === "macro") return total + 1;
    return total;
  }, 0);
  return Math.max(0, Math.min(100, signal.conviction + model.tilt + promptTilt));
}

function getOpinionTone(signal, score) {
  if (score < 48) return "wait";
  if (signal.tone === "short") return "short";
  if (signal.tone === "long") return "long";
  return "wait";
}

function renderSecondOpinionResults(modelIds) {
  const signal = lastPrimarySignal;
  const tradePlan = lastTradePlan;
  const commodityMeta = lastCommodityMeta;
  const promptIds = getSelectedSecondOpinionPrompts();

  secondOpinionResultsEl.innerHTML = "";

  if (!signal || !tradePlan) {
    secondOpinionResultsLabelEl.textContent = "Results (0 opinions)";
    secondOpinionStatusEl.textContent = "Run the main advisory first";
    return;
  }

  modelIds.forEach((modelId) => {
    const model = getModelById(modelId);
    const score = getOpinionScore(signal, model, promptIds);
    const tone = getOpinionTone(signal, score);
    const card = document.createElement("article");
    const head = document.createElement("div");
    const title = document.createElement("div");
    const titleStrong = document.createElement("strong");
    const titleMeta = document.createElement("span");
    const scoreEl = document.createElement("strong");
    const meta = document.createElement("span");
    const list = document.createElement("ul");
    const promptText = promptIds.map((id) => opinionPromptLabels[id]).join(", ");
    const directionText = tone === "long" ? "leans long" : tone === "short" ? "leans short" : "would wait";

    card.className = "opinion-card";
    card.dataset.tone = tone;
    head.className = "opinion-card-head";
    titleStrong.textContent = promptText;
    titleMeta.textContent = `${model.name} / ${model.style}`;
    title.append(titleStrong, titleMeta);
    scoreEl.className = "opinion-score";
    scoreEl.textContent = String(score);
    meta.className = "opinion-data";
    meta.textContent = tradePlan.priceReady
      ? `Data: ${formatPrice(tradePlan.livePrice)} via ${tradePlan.priceSource}`
      : `Data: ${UNAVAILABLE_TEXT}`;

    [
      `${model.name} ${directionText} on ${commodityMeta.name.toLowerCase()} with ${score}/100 conviction.`,
      `Primary advisory is ${signal.label.toLowerCase()} from ${getModelById(primaryModelId).name}.`,
      tradePlan.priceReady
        ? `Entry ${formatPrice(tradePlan.buyPrice)}, target ${formatPrice(tradePlan.sellPrice)}, stop ${formatPrice(tradePlan.stopLoss)}.`
        : "Entry, target, and stop are not available until a valid price source is loaded.",
      tone === "wait" ? "Main risk: signal strength is not high enough for a clean independent confirmation." : "Main risk: validate price source, spread, and stop distance before using this as trade support."
    ].forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.append(item);
    });

    head.append(title, scoreEl);
    card.append(head, meta, list);
    secondOpinionResultsEl.append(card);
  });

  secondOpinionResultsLabelEl.textContent = `Results (${modelIds.length} opinion${modelIds.length === 1 ? "" : "s"})`;
  secondOpinionStatusEl.textContent = `Prepared ${modelIds.length} local opinion${modelIds.length === 1 ? "" : "s"}`;
  recordOpenBrainEvent("second-opinion", `Ran ${modelIds.length} second opinion${modelIds.length === 1 ? "" : "s"} for ${commodityMeta.name}`, {
    commodity: commodityMeta.id,
    primaryModel: primaryModelId,
    models: modelIds,
    prompts: promptIds,
    primarySignal: signal.label,
    tags: ["second-opinion", commodityMeta.id, primaryModelId]
  });
  saveModelSettings();
}

function getDefaultUsers() {
  const now = new Date();
  const minutesAgo = (minutes) => new Date(now.getTime() - minutes * 60000).toISOString();
  const daysAgo = (days) => new Date(now.getTime() - days * 86400000).toISOString();

  return [
    {
      id: "user-peter-bell",
      name: "Peter Bell",
      email: "peter@pjbell.com",
      createdAt: "2026-02-02T12:00:00.000Z",
      lastActiveAt: minutesAgo(10),
      sessions: 23,
      enabled: true
    },
    {
      id: "user-alex-pensotti",
      name: "Alex Pensotti",
      email: "alexpensotti@gmail.com",
      createdAt: "2026-03-15T12:00:00.000Z",
      lastActiveAt: daysAgo(24),
      sessions: 4,
      enabled: true
    },
    {
      id: "user-hunts-hewett",
      name: "Hunts Hewett",
      email: "hunts@fastmail.com",
      createdAt: "2026-03-10T12:00:00.000Z",
      lastActiveAt: daysAgo(21),
      sessions: 3,
      enabled: true
    },
    {
      id: "user-motochristo-roberts",
      name: "Christopher Roberts",
      email: "motochristo@gmail.com",
      createdAt: "2026-03-10T12:00:00.000Z",
      lastActiveAt: daysAgo(62),
      sessions: 1,
      enabled: true
    },
    {
      id: "user-eric-ramirez",
      name: "Eric Ramirez",
      email: "eric@coquest.com",
      createdAt: "2026-02-06T12:00:00.000Z",
      lastActiveAt: daysAgo(60),
      sessions: 0,
      enabled: true
    },
    {
      id: "user-dennis-weinmann",
      name: "Dennis Weinmann",
      email: "dennis@coquest.com",
      createdAt: "2026-02-05T12:00:00.000Z",
      lastActiveAt: daysAgo(62),
      sessions: 3,
      enabled: true
    },
    {
      id: "user-d2-openclaw",
      name: "D2 OpenClaw",
      email: "aretwo3000@gmail.com",
      createdAt: "2026-02-04T12:00:00.000Z",
      lastActiveAt: null,
      sessions: 0,
      enabled: true
    },
    {
      id: "user-ai4ses-roberts",
      name: "Christopher Roberts",
      email: "ai4ses@gmail.com",
      createdAt: "2026-02-02T12:00:00.000Z",
      lastActiveAt: daysAgo(2),
      sessions: 12,
      enabled: true
    }
  ];
}

function saveUserRoster() {
  window.localStorage.setItem(USER_ROSTER_KEY, JSON.stringify(userRoster));
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function findRegisteredUserByEmail(email) {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) return null;
  return userRoster.find((user) => (
    normalizeEmail(user.email) === normalizedEmail
    && user.enabled !== false
  )) || null;
}

function normalizeUserRecord(user, fallback = {}) {
  const email = normalizeEmail(user?.email || fallback.email);
  if (!email) return null;
  const profileEquity = Number(user?.paperBaseEquity ?? fallback.paperBaseEquity ?? PAPER_START_EQUITY);
  const profileRiskPct = Number(user?.paperRiskPct ?? fallback.paperRiskPct ?? PAPER_DEFAULT_RISK_PCT);
  const avatarDataUrl = String(user?.avatarDataUrl || fallback.avatarDataUrl || "");
  const sessionHistory = Array.isArray(user?.sessionHistory)
    ? user.sessionHistory
    : Array.isArray(fallback.sessionHistory) ? fallback.sessionHistory : [];
  const commoditiesForUser = normalizeCommodityIds(user?.commodities ?? fallback.commodities);
  const commodityAllocations = normalizeCommodityAllocations(
    user?.commodityAllocations ?? fallback.commodityAllocations,
    commoditiesForUser,
    profileEquity
  );

  return {
    id: user?.id || fallback.id || `user-${email.replace(/[^a-z0-9]+/g, "-")}`,
    name: String(user?.name || fallback.name || email.split("@")[0] || "Unnamed user").trim(),
    email,
    createdAt: getTransactionDate(user?.createdAt || fallback.createdAt || new Date()).toISOString(),
    lastActiveAt: user?.lastActiveAt || fallback.lastActiveAt || null,
    sessions: Math.max(0, Number(user?.sessions ?? fallback.sessions ?? 0) || 0),
    paperBaseEquity: Number.isFinite(profileEquity) ? Math.max(0, profileEquity) : PAPER_START_EQUITY,
    paperRiskPct: Number.isFinite(profileRiskPct) ? clamp(profileRiskPct, 0.1, 25) : PAPER_DEFAULT_RISK_PCT,
    avatarDataUrl: avatarDataUrl.startsWith("data:image/") ? avatarDataUrl : "",
    commodities: commoditiesForUser,
    commodityAllocations,
    strategy: normalizeUserStrategy(user?.strategy ?? fallback.strategy),
    brokerAccount: normalizeBrokerAccount(user?.brokerAccount ?? fallback.brokerAccount),
    sessionHistory: sessionHistory
      .filter((session) => session && session.time)
      .slice(0, 25),
    enabled: user?.enabled === false ? false : fallback.enabled !== false
  };
}

function loadUserRoster() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(USER_ROSTER_KEY) || "null");
    const usersByEmail = new Map();

    [...(Array.isArray(stored) ? stored : []), ...getDefaultUsers()].forEach((user) => {
      const normalized = normalizeUserRecord(user);
      if (!normalized) return;
      if (!usersByEmail.has(normalized.email)) {
        usersByEmail.set(normalized.email, normalized);
        return;
      }

      usersByEmail.set(normalized.email, {
        ...normalized,
        ...usersByEmail.get(normalized.email),
        enabled: usersByEmail.get(normalized.email).enabled !== false
      });
    });

    userRoster.splice(0, userRoster.length, ...Array.from(usersByEmail.values()));
    saveUserRoster();
  } catch (error) {
    userRoster.splice(0, userRoster.length, ...getDefaultUsers().map((user) => normalizeUserRecord(user)).filter(Boolean));
    saveUserRoster();
  }
}

function getCurrentAccessEmail() {
  return normalizeEmail(window.sessionStorage.getItem(ACCESS_EMAIL_KEY));
}

function getCurrentUserProfile() {
  return findRegisteredUserByEmail(getCurrentAccessEmail());
}

function getCurrentUserStrategy() {
  return normalizeUserStrategy(getCurrentUserProfile()?.strategy);
}

function getCurrentMartingaleMaxStep() {
  return Math.round(getCurrentUserStrategy().martingaleSteps) || MARTINGALE_MAX_STEP;
}

function getCurrentLedgerEmail() {
  return normalizeEmail(getCurrentUserProfile()?.email || getCurrentAccessEmail() || LEGACY_LEDGER_USER_EMAIL);
}

function formatPossessiveName(name) {
  const cleanName = String(name || "").trim();
  if (!cleanName) return "";
  return `${cleanName}${cleanName.toLowerCase().endsWith("s") ? "'" : "'s"}`;
}

function getPaperUserContextText() {
  const user = getCurrentUserProfile();
  if (user?.name) return `Viewing ${formatPossessiveName(user.name)} paper trades`;
  const email = getCurrentLedgerEmail();
  return email ? `Viewing paper trades for ${email}` : "Viewing shared paper trades";
}

function getLiveUserContextText() {
  const user = getCurrentUserProfile();
  if (user?.name) return `Viewing ${formatPossessiveName(user.name)} live trades`;
  const email = getCurrentLedgerEmail();
  return email ? `Viewing live trades for ${email}` : "Viewing shared live trades";
}

function renderUserContextWithAvatar(element, text) {
  if (!element) return;
  const user = getCurrentUserProfile() || { name: "Current user", email: getCurrentLedgerEmail() };
  const label = document.createElement("span");
  label.textContent = text;
  element.replaceChildren(createUserAvatar(user, "trade-context-avatar"), label);
}

function isCurrentLegacyLedgerOwner() {
  const user = getCurrentUserProfile();
  const email = getCurrentLedgerEmail();
  return email === LEGACY_LEDGER_USER_EMAIL
    || email.startsWith("pete@")
    || email.startsWith("peter@")
    || String(user?.name || "").toLowerCase().includes("peter");
}

function getAllCommodityIds() {
  return commodities.map(({ id }) => id);
}

function normalizeCommodityIds(values, fallbackIds = getAllCommodityIds()) {
  const allowed = new Set(getAllCommodityIds());
  const normalized = (Array.isArray(values) ? values : [])
    .map((value) => String(value || "").trim())
    .filter((value) => allowed.has(value));
  if (normalized.length) return Array.from(new Set(normalized));
  return Array.isArray(fallbackIds) ? fallbackIds.slice() : [];
}

function normalizeSavedCommodityIds(values) {
  return normalizeCommodityIds(values, []);
}

function normalizeCommodityAllocations(allocations = {}, selectedIds = getAllCommodityIds(), defaultStartCapital = PAPER_START_EQUITY) {
  const selected = normalizeCommodityIds(selectedIds);
  const selectedSet = new Set(selected);
  const source = allocations && typeof allocations === "object" && !Array.isArray(allocations) ? allocations : {};
  const defaultPerSelected = selected.length
    ? Math.round((Math.max(0, Number(defaultStartCapital) || 0) / selected.length) * 100) / 100
    : 0;

  return commodities.reduce((result, { id }) => {
    const raw = source[id];
    const rawStart = raw && typeof raw === "object" ? raw.startCapital : raw;
    const startCapital = Number(rawStart);
    result[id] = {
      startCapital: Number.isFinite(startCapital)
        ? Math.max(0, startCapital)
        : selectedSet.has(id) ? defaultPerSelected : 0
    };
    return result;
  }, {});
}

function normalizeUserStrategy(strategy = {}) {
  const merged = { ...DEFAULT_USER_STRATEGY, ...(strategy && typeof strategy === "object" ? strategy : {}) };
  return {
    name: String(merged.name || DEFAULT_USER_STRATEGY.name).trim(),
    type: String(merged.type || DEFAULT_USER_STRATEGY.type).trim(),
    description: String(merged.description || DEFAULT_USER_STRATEGY.description).trim(),
    martingaleSteps: clamp(Number(merged.martingaleSteps) || DEFAULT_USER_STRATEGY.martingaleSteps, 1, 8),
    karpathyLoop: merged.karpathyLoop !== false,
    skillsAccess: merged.skillsAccess !== false,
    openBrainAccess: merged.openBrainAccess !== false,
    skillFocus: String(merged.skillFocus || DEFAULT_USER_STRATEGY.skillFocus).trim(),
    openBrainMemory: String(merged.openBrainMemory || DEFAULT_USER_STRATEGY.openBrainMemory).trim()
  };
}

function normalizeBrokerAccount(account = {}) {
  const merged = { ...DEFAULT_BROKER_ACCOUNT, ...(account && typeof account === "object" ? account : {}) };
  return {
    provider: String(merged.provider || DEFAULT_BROKER_ACCOUNT.provider).trim(),
    environment: ["sandbox", "live"].includes(merged.environment) ? merged.environment : DEFAULT_BROKER_ACCOUNT.environment,
    accountLabel: String(merged.accountLabel || "").trim(),
    apiKeyName: String(merged.apiKeyName || "").trim(),
    keyStorage: String(merged.keyStorage || DEFAULT_BROKER_ACCOUNT.keyStorage).trim(),
    permissionScope: String(merged.permissionScope || DEFAULT_BROKER_ACCOUNT.permissionScope).trim(),
    canTrade: merged.canTrade === true,
    webhookUrl: String(merged.webhookUrl || "").trim(),
    notes: String(merged.notes || "").trim()
  };
}

function getCurrentUserCommodityIds() {
  return normalizeCommodityIds(getCurrentUserProfile()?.commodities);
}

function userCanTradeCommodity(commodity) {
  return getCurrentUserCommodityIds().includes(commodity);
}

function normalizeHistoryCommodityFilter() {
  const allowed = new Set(["all", ...getCurrentUserCommodityIds()]);
  if (!allowed.has(historyCommodityFilter)) {
    historyCommodityFilter = "all";
  }
  return historyCommodityFilter;
}

function ensureSelectedCommodityAllowed() {
  const allowed = getCurrentUserCommodityIds();
  if (allowed.includes(commoditySelect.value)) return false;

  commoditySelect.value = allowed[0] || "oil";
  normalizeHistoryCommodityFilter();
  advisoryCommodityFilter = allowed.includes(advisoryCommodityFilter) ? advisoryCommodityFilter : commoditySelect.value;
  return true;
}

function renderCommodityAccess() {
  const allowed = new Set(getCurrentUserCommodityIds());

  Array.from(commoditySelect.options).forEach((option) => {
    option.hidden = !allowed.has(option.value);
    option.disabled = !allowed.has(option.value);
  });

  chipMap.forEach(({ chip }, commodity) => {
    chip.hidden = !allowed.has(commodity);
  });
}

function recomputePaperEquityFromBase() {
  const closedPnl = getClosedPaperTrades().reduce((total, entry) => total + getDisplayPnl(entry), 0);
  paperEquity = paperBaseEquity + closedPnl;
}

function applyCurrentUserPaperSettings() {
  const user = getCurrentUserProfile();
  if (!user) return false;

  ensureSelectedCommodityAllowed();
  renderCommodityAccess();
  paperBaseEquity = Number.isFinite(Number(user.paperBaseEquity))
    ? Math.max(0, Number(user.paperBaseEquity))
    : PAPER_START_EQUITY;
  paperRiskPct = Number.isFinite(Number(user.paperRiskPct))
    ? clamp(Number(user.paperRiskPct), 0.1, 25)
    : PAPER_DEFAULT_RISK_PCT;
  recomputePaperEquityFromBase();
  syncPaperInputs();
  return true;
}

function saveCurrentUserPaperSettings() {
  const user = getCurrentUserProfile();
  if (!user) return false;

  user.paperBaseEquity = paperBaseEquity;
  user.paperRiskPct = paperRiskPct;
  saveUserRoster();
  renderUserManagement();
  return true;
}

function getSharedUserProfilesPayload() {
  return userRoster.reduce((profiles, user) => {
    const profile = {
      paperBaseEquity: Number.isFinite(Number(user.paperBaseEquity)) ? Number(user.paperBaseEquity) : PAPER_START_EQUITY,
      paperRiskPct: Number.isFinite(Number(user.paperRiskPct)) ? Number(user.paperRiskPct) : PAPER_DEFAULT_RISK_PCT,
      commodities: normalizeSavedCommodityIds(user.commodities),
      commodityAllocations: normalizeCommodityAllocations(user.commodityAllocations, user.commodities, user.paperBaseEquity),
      strategy: normalizeUserStrategy(user.strategy),
      brokerAccount: normalizeBrokerAccount(user.brokerAccount)
    };
    if (String(user.avatarDataUrl || "").startsWith("data:image/")) {
      profile.avatarDataUrl = user.avatarDataUrl;
    }
    profiles[user.email] = profile;
    return profiles;
  }, {});
}

function getSharedUsersPayload() {
  return userRoster.map((user) => normalizeUserRecord(user)).filter(Boolean);
}

function mergeUserRecords(existing, incoming) {
  const existingLastActive = existing.lastActiveAt ? getTransactionDate(existing.lastActiveAt).getTime() : 0;
  const incomingLastActive = incoming.lastActiveAt ? getTransactionDate(incoming.lastActiveAt).getTime() : 0;
  const sessionsByKey = new Map();

  [...(existing.sessionHistory || []), ...(incoming.sessionHistory || [])].forEach((session) => {
    if (!session?.time) return;
    sessionsByKey.set(`${session.time}|${session.device || ""}|${session.location || ""}`, session);
  });

  return {
    ...existing,
    ...incoming,
    id: existing.id || incoming.id,
    createdAt: existing.createdAt && getTransactionDate(existing.createdAt) < getTransactionDate(incoming.createdAt)
      ? existing.createdAt
      : incoming.createdAt,
    lastActiveAt: incomingLastActive > existingLastActive ? incoming.lastActiveAt : existing.lastActiveAt,
    sessions: Math.max(Number(existing.sessions) || 0, Number(incoming.sessions) || 0),
    paperBaseEquity: Number.isFinite(Number(incoming.paperBaseEquity))
      ? Number(incoming.paperBaseEquity)
      : existing.paperBaseEquity,
    paperRiskPct: Number.isFinite(Number(incoming.paperRiskPct))
      ? Number(incoming.paperRiskPct)
      : existing.paperRiskPct,
    commodities: Array.isArray(incoming.commodities)
      ? normalizeSavedCommodityIds(incoming.commodities)
      : normalizeCommodityIds(existing.commodities),
    commodityAllocations: normalizeCommodityAllocations(
      incoming.commodityAllocations || existing.commodityAllocations,
      Array.isArray(incoming.commodities) ? incoming.commodities : existing.commodities,
      Number.isFinite(Number(incoming.paperBaseEquity)) ? incoming.paperBaseEquity : existing.paperBaseEquity
    ),
    strategy: normalizeUserStrategy(incoming.strategy || existing.strategy),
    brokerAccount: normalizeBrokerAccount(incoming.brokerAccount || existing.brokerAccount),
    avatarDataUrl: incoming.avatarDataUrl || existing.avatarDataUrl || "",
    sessionHistory: Array.from(sessionsByKey.values())
      .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time))
      .slice(0, 25),
    enabled: incoming.enabled !== false
  };
}

function mergeSharedUsers(users) {
  if (!Array.isArray(users)) return false;

  const usersByEmail = new Map(userRoster.map((user) => [normalizeEmail(user.email), user]));
  let changed = false;

  users.forEach((user) => {
    const normalized = normalizeUserRecord(user);
    if (!normalized) return;

    const existing = usersByEmail.get(normalized.email);
    if (!existing) {
      usersByEmail.set(normalized.email, normalized);
      changed = true;
      return;
    }

    const merged = mergeUserRecords(existing, normalized);
    if (JSON.stringify(merged) !== JSON.stringify(existing)) changed = true;
    usersByEmail.set(normalized.email, merged);
  });

  if (changed) {
    userRoster.splice(0, userRoster.length, ...Array.from(usersByEmail.values()));
    saveUserRoster();
  }

  return changed;
}

function mergeSharedUserProfiles(profiles) {
  if (!profiles || typeof profiles !== "object" || Array.isArray(profiles)) return false;

  let changed = false;
  userRoster.forEach((user) => {
    const profile = profiles[normalizeEmail(user.email)];
    if (!profile || typeof profile !== "object") return;

    const profileEquity = Number(profile.paperBaseEquity);
    const profileRiskPct = Number(profile.paperRiskPct);
    if (Number.isFinite(profileEquity)) {
      user.paperBaseEquity = Math.max(0, profileEquity);
      changed = true;
    }
    if (Number.isFinite(profileRiskPct)) {
      user.paperRiskPct = clamp(profileRiskPct, 0.1, 25);
      changed = true;
    }
    if (Array.isArray(profile.commodities)) {
      const nextCommodities = normalizeSavedCommodityIds(profile.commodities);
      if (JSON.stringify(nextCommodities) !== JSON.stringify(normalizeCommodityIds(user.commodities))) {
        user.commodities = nextCommodities;
        changed = true;
      }
    }
    if (profile.commodityAllocations && typeof profile.commodityAllocations === "object") {
      const nextAllocations = normalizeCommodityAllocations(profile.commodityAllocations, user.commodities, user.paperBaseEquity);
      if (JSON.stringify(nextAllocations) !== JSON.stringify(normalizeCommodityAllocations(user.commodityAllocations, user.commodities, user.paperBaseEquity))) {
        user.commodityAllocations = nextAllocations;
        changed = true;
      }
    }
    if (profile.strategy && typeof profile.strategy === "object") {
      const nextStrategy = normalizeUserStrategy(profile.strategy);
      if (JSON.stringify(nextStrategy) !== JSON.stringify(normalizeUserStrategy(user.strategy))) {
        user.strategy = nextStrategy;
        changed = true;
      }
    }
    if (profile.brokerAccount && typeof profile.brokerAccount === "object") {
      const nextBrokerAccount = normalizeBrokerAccount(profile.brokerAccount);
      if (JSON.stringify(nextBrokerAccount) !== JSON.stringify(normalizeBrokerAccount(user.brokerAccount))) {
        user.brokerAccount = nextBrokerAccount;
        changed = true;
      }
    }
    if (String(profile.avatarDataUrl || "").startsWith("data:image/") && profile.avatarDataUrl !== user.avatarDataUrl) {
      user.avatarDataUrl = profile.avatarDataUrl;
      changed = true;
    }
  });

  if (changed) saveUserRoster();
  return changed;
}

function formatUserDate(value) {
  const date = getTransactionDate(value);
  return new Intl.DateTimeFormat("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

function formatRelativeDate(value) {
  if (!value) return "Never";

  const ms = Date.now() - getTransactionDate(value).getTime();
  const minutes = Math.max(0, Math.round(ms / 60000));
  if (minutes < 2) return "just now";
  if (minutes < 60) return `${minutes} minutes ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.round(hours / 24);
  if (days < 31) return `${days} day${days === 1 ? "" : "s"} ago`;
  const months = Math.round(days / 30);
  return `about ${months} month${months === 1 ? "" : "s"} ago`;
}

function getUserInitials(user) {
  const name = String(user.name || user.email || "U").trim();
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "U";
}

function resizeUserPhoto(file) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      reject(new Error("Choose an image file"));
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("error", () => reject(new Error("Could not read image")));
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("error", () => reject(new Error("Could not load image")));
      image.addEventListener("load", () => {
        const size = 128;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
        const sourceX = (image.naturalWidth - sourceSize) / 2;
        const sourceY = (image.naturalHeight - sourceSize) / 2;

        canvas.width = size;
        canvas.height = size;
        context.drawImage(image, sourceX, sourceY, sourceSize, sourceSize, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}

async function updateUserPhoto(user, file) {
  try {
    user.avatarDataUrl = await resizeUserPhoto(file);
    saveUserRoster();
    const synced = await saveSharedSettings();
    renderUserManagement();
    userManagementStatusEl.textContent = synced
      ? `${user.name || user.email} photo saved and synced`
      : `${user.name || user.email} photo saved locally. Backend sync failed.`;
  } catch (error) {
    userManagementStatusEl.textContent = error.message || "Photo upload failed";
  }
}

function getUserSessionHistory(user) {
  const sessions = Array.isArray(user.sessionHistory) ? user.sessionHistory : [];
  if (sessions.length) return sessions;
  if (!user.lastActiveAt) return [];

  return [{
    time: user.lastActiveAt,
    device: "Browser",
    platform: "Unknown",
    location: "Unknown",
    colo: "unknown"
  }];
}

function entryBelongsToUser(entry, user) {
  const userEmail = normalizeEmail(user?.email);
  if (!userEmail) return false;
  const entryEmail = normalizeEmail(entry.userEmail || entry.profileEmail || entry.accountEmail || "");
  if (entryEmail) return entryEmail === userEmail;
  return userEmail === LEGACY_LEDGER_USER_EMAIL || userEmail.startsWith("pete@") || userEmail.startsWith("peter@");
}

function getUserCommodityPnl(user, commodity = null) {
  return transactionHistory
    .filter((entry) => entryBelongsToUser(entry, user))
    .filter((entry) => !commodity || entry.commodity === commodity)
    .reduce((total, entry) => total + getDisplayPnl(entry), 0);
}

function getCurrentProfileStartCapital() {
  const user = getCurrentUserProfile();
  if (!user) return Number(paperBaseEquity) || PAPER_START_EQUITY;

  const selected = normalizeCommodityIds(user.commodities);
  const allocations = normalizeCommodityAllocations(user.commodityAllocations, selected, user.paperBaseEquity);
  const allocatedCapital = selected.reduce((total, id) => total + (Number(allocations[id]?.startCapital) || 0), 0);
  if (allocatedCapital > 0) return allocatedCapital;

  const profileEquity = Number(user.paperBaseEquity);
  return Number.isFinite(profileEquity) ? profileEquity : PAPER_START_EQUITY;
}

function getCurrentProfileStartCapitalForCommodity(commodity = "all") {
  const user = getCurrentUserProfile();
  const normalizedCommodity = normalizeCommodityId(commodity);
  if (!user || !normalizedCommodity || normalizedCommodity === "all") {
    return getCurrentProfileStartCapital();
  }

  const selected = normalizeCommodityIds(user.commodities);
  const allocations = normalizeCommodityAllocations(user.commodityAllocations, selected, user.paperBaseEquity);
  const allocation = Number(allocations[normalizedCommodity]?.startCapital);
  return Number.isFinite(allocation) ? Math.max(0, allocation) : 0;
}

function renderPnlWithCapital(element, pnl, startCapital = getCurrentProfileStartCapital()) {
  if (!element) return;
  const currentCapital = Math.max(0, (Number(startCapital) || 0) + (Number(pnl) || 0));
  element.innerHTML = `<span>${formatSignedMoney(pnl)}</span><small>Capital ${formatMoney(currentCapital)}</small>`;
  element.className = pnl >= 0 ? "gain" : "loss";
}

function getSafeHistoryStartCapital(commodity = "all") {
  try {
    return getCurrentProfileStartCapitalForCommodity(commodity);
  } catch (error) {
    console.warn("Using account start capital because profile allocation data could not be read.", error);
    return getCurrentProfileStartCapital();
  }
}

function getUniqueSessionCount(user, field) {
  const values = getUserSessionHistory(user)
    .map((session) => String(session[field] || "").trim().toLowerCase())
    .filter(Boolean);
  return new Set(values).size;
}

function createUserAvatar(user, className = "user-avatar") {
  const avatar = document.createElement("span");
  avatar.className = className;

  if (user.avatarDataUrl) {
    const avatarImage = document.createElement("img");
    avatarImage.alt = "";
    avatarImage.src = user.avatarDataUrl;
    avatar.append(avatarImage);
  } else {
    avatar.textContent = getUserInitials(user);
  }

  return avatar;
}

function ensureUserProfileDialog() {
  let dialog = document.querySelector("#user-profile-dialog");
  if (dialog) return dialog;

  dialog = document.createElement("div");
  dialog.id = "user-profile-dialog";
  dialog.className = "user-profile-dialog";
  dialog.tabIndex = -1;
  dialog.hidden = true;
  dialog.innerHTML = `
    <div class="user-profile-dialog-backdrop" data-close-user-dialog></div>
    <section class="user-profile-dialog-panel" role="dialog" aria-modal="true" aria-label="User profile details">
      <div class="user-profile-dialog-header">
        <strong>User profile</strong>
        <button class="filter-button" type="button" data-close-user-dialog>Close</button>
      </div>
      <div class="user-profile-dialog-body" id="user-profile-dialog-body"></div>
    </section>
  `;
  dialog.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-user-dialog]")) closeUserDetail();
  });
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeUserDetail();
  });
  document.body.append(dialog);
  return dialog;
}

function renderUserProfileDialog(user) {
  const dialog = ensureUserProfileDialog();
  const body = dialog.querySelector("#user-profile-dialog-body");
  body.innerHTML = "";
  body.append(createUserProfilePanel(user));
  dialog.hidden = false;
  dialog.focus?.();
}

function handleProfilePhotoDrop(event, user) {
  event.preventDefault();
  event.currentTarget.dataset.dragging = "false";
  const [file] = event.dataTransfer?.files || [];
  if (file) updateUserPhoto(user, file);
}

function saveExpandedUserProfile(user, nameInput, emailInput) {
  const nextName = nameInput.value.trim();
  const nextEmail = normalizeEmail(emailInput.value);
  const currentEmail = normalizeEmail(user.email);

  if (!nextName || !nextEmail) {
    userManagementStatusEl.textContent = "Name and email required";
    return;
  }

  const emailOwner = userRoster.find((candidate) => (
    normalizeEmail(candidate.email) === nextEmail
    && normalizeEmail(candidate.email) !== currentEmail
  ));
  if (emailOwner) {
    userManagementStatusEl.textContent = "Email already belongs to another user";
    return;
  }

  user.name = nextName;
  user.email = nextEmail;
  expandedUserEmail = nextEmail;
  editingUserEmail = "";
  saveUserRoster();
  saveSharedSettings();
  renderUserManagement();
  userManagementStatusEl.textContent = "Profile saved";
}

function saveUserCommoditySelection(user, container) {
  const rows = Array.from(container.querySelectorAll("[data-commodity-row]"));
  const selected = rows
    .filter((row) => row.querySelector("[data-commodity-enabled]")?.checked)
    .map((row) => row.dataset.commodityRow);
  const nextCommodities = normalizeSavedCommodityIds(selected);
  if (!nextCommodities.length) {
    userManagementStatusEl.textContent = "Choose at least one commodity";
    return;
  }

  const nextAllocations = rows.reduce((allocations, row) => {
    const id = row.dataset.commodityRow;
    const startCapital = Number(row.querySelector("[data-commodity-capital]")?.value);
    allocations[id] = {
      startCapital: Number.isFinite(startCapital) ? Math.max(0, startCapital) : 0
    };
    return allocations;
  }, {});
  const accountStartCapital = nextCommodities.reduce((total, id) => total + (Number(nextAllocations[id]?.startCapital) || 0), 0);

  user.commodities = nextCommodities;
  user.commodityAllocations = normalizeCommodityAllocations(nextAllocations, nextCommodities, accountStartCapital);
  user.paperBaseEquity = accountStartCapital;
  saveUserRoster();
  saveSharedSettings();
  applyCurrentUserPaperSettings();
  calculateSignal();
  renderUserManagement();
  userManagementStatusEl.textContent = `${user.name || user.email} commodity allocations saved`;
}

function saveUserStrategySettings(user, container) {
  const strategy = normalizeUserStrategy({
    name: container.querySelector("[data-strategy-field='name']")?.value,
    type: container.querySelector("[data-strategy-field='type']")?.value,
    description: container.querySelector("[data-strategy-field='description']")?.value,
    martingaleSteps: container.querySelector("[data-strategy-field='martingaleSteps']")?.value,
    karpathyLoop: container.querySelector("[data-strategy-field='karpathyLoop']")?.checked,
    skillsAccess: container.querySelector("[data-strategy-field='skillsAccess']")?.checked,
    openBrainAccess: container.querySelector("[data-strategy-field='openBrainAccess']")?.checked,
    skillFocus: container.querySelector("[data-strategy-field='skillFocus']")?.value,
    openBrainMemory: container.querySelector("[data-strategy-field='openBrainMemory']")?.value
  });

  user.strategy = strategy;
  saveUserRoster();
  saveSharedSettings();
  renderCurrentUserStrategy();
  renderUserManagement();
  userManagementStatusEl.textContent = `${user.name || user.email} strategy saved`;
}

function saveUserBrokerAccountSettings(user, container) {
  user.brokerAccount = normalizeBrokerAccount({
    provider: container.querySelector("[data-broker-field='provider']")?.value,
    environment: container.querySelector("[data-broker-field='environment']")?.value,
    accountLabel: container.querySelector("[data-broker-field='accountLabel']")?.value,
    apiKeyName: container.querySelector("[data-broker-field='apiKeyName']")?.value,
    keyStorage: container.querySelector("[data-broker-field='keyStorage']")?.value,
    permissionScope: container.querySelector("[data-broker-field='permissionScope']")?.value,
    canTrade: container.querySelector("[data-broker-field='canTrade']")?.checked,
    webhookUrl: container.querySelector("[data-broker-field='webhookUrl']")?.value,
    notes: container.querySelector("[data-broker-field='notes']")?.value
  });

  saveUserRoster();
  saveSharedSettings();
  renderUserManagement();
  userManagementStatusEl.textContent = `${user.name || user.email} broker account metadata saved`;
}

function renderCurrentUserStrategy() {
  if (!userStrategyBannerEl) return;

  const user = getCurrentUserProfile();
  const strategy = normalizeUserStrategy(user?.strategy);
  const title = advisoryUserStrategyNameEl;
  const copy = userStrategyBannerEl.querySelector("p");

  if (advisoryUserAvatarEl) {
    const avatar = createUserAvatar(user || { name: "Current user", email: getCurrentLedgerEmail() }, "user-avatar");
    advisoryUserAvatarEl.replaceChildren(...Array.from(avatar.childNodes));
    advisoryUserAvatarEl.className = avatar.className;
  }
  if (advisoryUserNameEl) {
    const name = user?.name || user?.email || getCurrentLedgerEmail() || "Current user";
    advisoryUserNameEl.textContent = name;
  }

  if (title) {
    title.textContent = `${strategy.name} (${strategy.martingaleSteps} step${strategy.martingaleSteps === 1 ? "" : "s"})`;
  }
  if (copy) {
    const access = [
      strategy.skillsAccess ? `Skills: ${strategy.skillFocus}` : "Skills disabled",
      strategy.openBrainAccess ? "Open Brain enabled" : "Open Brain disabled",
      strategy.karpathyLoop ? "Karpathy loop enabled" : "Karpathy loop disabled"
    ].join(" / ");
    copy.textContent = `${strategy.description} ${access}.`;
  }
}

function createUserProfilePanel(user) {
  const wrapper = document.createElement("div");
  const profileCard = document.createElement("section");
  const photoLabel = document.createElement("label");
  const photoInput = document.createElement("input");
  const photoHint = document.createElement("span");
  const profileInfo = document.createElement("div");
  const profileHeader = document.createElement("div");
  const profileTitleRow = document.createElement("div");
  const profileName = document.createElement("strong");
  const editButton = document.createElement("button");
  const profileMeta = document.createElement("div");
  const editFields = document.createElement("div");
  const nameInput = document.createElement("input");
  const emailInput = document.createElement("input");
  const saveButton = document.createElement("button");
  const cancelButton = document.createElement("button");
  const clearPhoto = document.createElement("button");
  const commoditiesCard = document.createElement("section");
  const strategyCard = document.createElement("section");
  const brokerCard = document.createElement("section");
  const statsCard = document.createElement("section");
  const actionsCard = document.createElement("section");
  const historyCard = document.createElement("section");
  const history = getUserSessionHistory(user);
  const emailKey = normalizeEmail(user.email);
  const isEditing = editingUserEmail === emailKey;

  wrapper.className = "user-profile-panel";
  profileCard.className = "user-profile-detail-card";
  photoLabel.className = "profile-photo-dropzone";
  photoLabel.addEventListener("dragover", (event) => {
    event.preventDefault();
    photoLabel.dataset.dragging = "true";
  });
  photoLabel.addEventListener("dragleave", () => {
    photoLabel.dataset.dragging = "false";
  });
  photoLabel.addEventListener("drop", (event) => handleProfilePhotoDrop(event, user));

  photoInput.type = "file";
  photoInput.accept = "image/*";
  photoInput.addEventListener("change", () => {
    const [file] = photoInput.files || [];
    if (file) updateUserPhoto(user, file);
    photoInput.value = "";
  });
  photoHint.textContent = "Click or drag to upload. Images will be resized to 256x256px.";
  photoLabel.append(createUserAvatar(user, "profile-photo-preview"), photoInput, photoHint);

  profileInfo.className = "profile-detail-info";
  profileHeader.className = "profile-header";
  profileTitleRow.className = "profile-title-row";
  profileName.textContent = user.name || "Unnamed user";
  editButton.type = "button";
  editButton.className = "profile-edit-toggle";
  editButton.textContent = isEditing ? "Done" : "Edit";
  editButton.addEventListener("click", () => {
    editingUserEmail = isEditing ? "" : emailKey;
    renderUserManagement();
  });
  profileTitleRow.append(profileName, editButton);

  profileMeta.className = "profile-meta";
  [
    [`Email: ${user.email || "-"}`],
    [`Joined ${formatRelativeDate(user.createdAt)}`],
    [`Last active ${formatRelativeDate(user.lastActiveAt)}`]
  ].forEach(([value]) => {
    const item = document.createElement("span");
    item.textContent = value;
    profileMeta.append(item);
  });
  profileHeader.append(profileTitleRow, profileMeta);
  profileInfo.append(profileHeader);

  editFields.className = "profile-edit-fields";
  editFields.hidden = !isEditing;
  nameInput.type = "text";
  nameInput.value = user.name || "";
  nameInput.placeholder = "User name";
  emailInput.type = "email";
  emailInput.value = user.email || "";
  emailInput.placeholder = "Email address";
  saveButton.type = "button";
  saveButton.className = "access-button profile-save-button";
  saveButton.textContent = "Save profile";
  saveButton.addEventListener("click", () => saveExpandedUserProfile(user, nameInput, emailInput));
  cancelButton.type = "button";
  cancelButton.className = "filter-button";
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", () => {
    editingUserEmail = "";
    renderUserManagement();
  });
  clearPhoto.type = "button";
  clearPhoto.className = "filter-button";
  clearPhoto.textContent = "Clear photo";
  clearPhoto.disabled = !user.avatarDataUrl;
  clearPhoto.addEventListener("click", () => {
    user.avatarDataUrl = "";
    saveUserRoster();
    saveSharedSettings();
    renderUserManagement();
  });

  [
    ["Name", nameInput],
    ["Email", emailInput]
  ].forEach(([labelText, input]) => {
    const label = document.createElement("label");
    label.textContent = labelText;
    label.append(input);
    editFields.append(label);
  });
  editFields.append(saveButton, cancelButton, clearPhoto);
  profileInfo.append(editFields);
  profileCard.append(photoLabel, profileInfo);

  commoditiesCard.className = "user-profile-subcard";
  commoditiesCard.innerHTML = "<h3>Commodities Traded</h3>";
  const commodityEditor = document.createElement("div");
  const accountSummary = document.createElement("div");
  const commoditySave = document.createElement("button");
  commodityEditor.className = "profile-commodity-list";
  accountSummary.className = "profile-account-capital";
  const selectedCommodities = new Set(normalizeCommodityIds(user.commodities));
  const allocations = normalizeCommodityAllocations(user.commodityAllocations, user.commodities, user.paperBaseEquity);
  const accountPnl = getUserCommodityPnl(user);
  let accountStartCapital = 0;
  commodities.forEach(({ id, name }) => {
    const isSelected = selectedCommodities.has(id);
    const startCapital = isSelected ? Number(allocations[id]?.startCapital) || 0 : 0;
    const pnl = getUserCommodityPnl(user, id);
    accountStartCapital += startCapital;

    const row = document.createElement("div");
    const tradedLabel = document.createElement("label");
    const checkbox = document.createElement("input");
    const capitalLabel = document.createElement("label");
    const capitalInput = document.createElement("input");
    const pnlCell = document.createElement("div");
    const totalCell = document.createElement("div");

    row.className = "profile-commodity-row";
    row.dataset.commodityRow = id;
    checkbox.type = "checkbox";
    checkbox.dataset.commodityEnabled = "true";
    checkbox.checked = isSelected;
    capitalInput.type = "number";
    capitalInput.min = "0";
    capitalInput.step = "0.01";
    capitalInput.value = Number.isFinite(startCapital) ? startCapital.toFixed(2) : "0.00";
    capitalInput.dataset.commodityCapital = "true";

    tradedLabel.className = "profile-commodity-name";
    tradedLabel.append(checkbox, document.createTextNode(name));
    capitalLabel.className = "profile-commodity-capital-field";
    capitalLabel.append(document.createTextNode("Start capital"), capitalInput);
    pnlCell.className = pnl >= 0 ? "profile-capital-gain" : "profile-capital-loss";
    pnlCell.innerHTML = `<span>Profit / loss</span><strong>${formatSignedMoney(pnl)}</strong>`;
    totalCell.innerHTML = `<span>Total capital</span><strong>${formatMoney(startCapital + pnl)}</strong>`;

    checkbox.addEventListener("change", () => {
      if (checkbox.checked && Number(capitalInput.value) === 0) {
        capitalInput.value = "1000.00";
      }
    });

    row.append(tradedLabel, capitalLabel, pnlCell, totalCell);
    commodityEditor.append(row);
  });
  accountSummary.innerHTML = `
    <div><span>Account start capital</span><strong>${formatMoney(accountStartCapital)}</strong></div>
    <div class="${accountPnl >= 0 ? "profile-capital-gain" : "profile-capital-loss"}"><span>Account profit / loss</span><strong>${formatSignedMoney(accountPnl)}</strong></div>
    <div><span>Total account capital</span><strong>${formatMoney(accountStartCapital + accountPnl)}</strong></div>
  `;
  commoditySave.type = "button";
  commoditySave.className = "filter-button profile-commodity-save";
  commoditySave.textContent = "Save commodity allocations";
  commoditySave.addEventListener("click", () => saveUserCommoditySelection(user, commodityEditor));
  commoditiesCard.append(commodityEditor, accountSummary, commoditySave);

  const strategy = normalizeUserStrategy(user.strategy);
  strategyCard.className = "user-profile-subcard profile-strategy-card";
  strategyCard.innerHTML = `
    <h3>Strategy, Skills, and Open Brain</h3>
    <div class="profile-strategy-grid">
      <label>
        Strategy name
        <input data-strategy-field="name" type="text" value="${escapeHtml(strategy.name)}">
      </label>
      <label>
        Strategy type
        <select data-strategy-field="type">
          <option value="martingale-karpathy"${strategy.type === "martingale-karpathy" ? " selected" : ""}>Martingale + Karpathy loop</option>
          <option value="fixed-risk"${strategy.type === "fixed-risk" ? " selected" : ""}>Fixed risk</option>
          <option value="manual-review"${strategy.type === "manual-review" ? " selected" : ""}>Manual review</option>
          <option value="custom"${strategy.type === "custom" ? " selected" : ""}>Custom</option>
        </select>
      </label>
      <label>
        Martingale steps
        <input data-strategy-field="martingaleSteps" type="number" min="1" max="8" step="1" value="${strategy.martingaleSteps}">
      </label>
      <label>
        Skill focus
        <select data-strategy-field="skillFocus">
          <option${strategy.skillFocus === "Lessons from Paper Trades" ? " selected" : ""}>Lessons from Paper Trades</option>
          <option${strategy.skillFocus === "Lessons from Trades" ? " selected" : ""}>Lessons from Trades</option>
          <option${strategy.skillFocus === "Market Expertise" ? " selected" : ""}>Market Expertise</option>
          <option${strategy.skillFocus === "Prompts for Advisories" ? " selected" : ""}>Prompts for Advisories</option>
        </select>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="karpathyLoop" type="checkbox"${strategy.karpathyLoop ? " checked" : ""}>
        Karpathy loop enabled
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="skillsAccess" type="checkbox"${strategy.skillsAccess ? " checked" : ""}>
        Allow Skills access
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="openBrainAccess" type="checkbox"${strategy.openBrainAccess ? " checked" : ""}>
        Allow Open Brain access
      </label>
      <label class="profile-strategy-wide">
        Strategy definition
        <textarea data-strategy-field="description" rows="3">${escapeHtml(strategy.description)}</textarea>
      </label>
      <label class="profile-strategy-wide">
        Open Brain memory instruction
        <textarea data-strategy-field="openBrainMemory" rows="3">${escapeHtml(strategy.openBrainMemory)}</textarea>
      </label>
    </div>
  `;
  const strategySave = document.createElement("button");
  strategySave.type = "button";
  strategySave.className = "filter-button profile-commodity-save";
  strategySave.textContent = "Save strategy";
  strategySave.addEventListener("click", () => saveUserStrategySettings(user, strategyCard));
  strategyCard.append(strategySave);

  const brokerAccount = normalizeBrokerAccount(user.brokerAccount);
  brokerCard.className = "user-profile-subcard profile-broker-card";
  brokerCard.innerHTML = `
    <h3>Brokerage Account</h3>
    <div class="profile-security-note">
      Do not paste Coinbase API secrets here. Store secrets only in Cloudflare Worker secrets, a vault, or another backend secret store. This profile saves metadata only.
    </div>
    <div class="profile-strategy-grid">
      <label>
        Provider
        <select data-broker-field="provider">
          <option${brokerAccount.provider === "Coinbase" ? " selected" : ""}>Coinbase</option>
          <option${brokerAccount.provider === "Other" ? " selected" : ""}>Other</option>
        </select>
      </label>
      <label>
        Environment
        <select data-broker-field="environment">
          <option value="sandbox"${brokerAccount.environment === "sandbox" ? " selected" : ""}>Sandbox</option>
          <option value="live"${brokerAccount.environment === "live" ? " selected" : ""}>Live</option>
        </select>
      </label>
      <label>
        Account label
        <input data-broker-field="accountLabel" type="text" value="${escapeHtml(brokerAccount.accountLabel)}" placeholder="Peter Coinbase sandbox">
      </label>
      <label>
        API key name / ID
        <input data-broker-field="apiKeyName" type="text" value="${escapeHtml(brokerAccount.apiKeyName)}" placeholder="organizations/.../apiKeys/...">
      </label>
      <label>
        Secret storage
        <select data-broker-field="keyStorage">
          <option${brokerAccount.keyStorage === "Cloudflare Worker secret" ? " selected" : ""}>Cloudflare Worker secret</option>
          <option${brokerAccount.keyStorage === "Hostinger VPS env file" ? " selected" : ""}>Hostinger VPS env file</option>
          <option${brokerAccount.keyStorage === "Vault" ? " selected" : ""}>Vault</option>
          <option${brokerAccount.keyStorage === "Not configured" ? " selected" : ""}>Not configured</option>
        </select>
      </label>
      <label>
        Permission scope
        <select data-broker-field="permissionScope">
          <option value="view-only"${brokerAccount.permissionScope === "view-only" ? " selected" : ""}>View only</option>
          <option value="trade-sandbox"${brokerAccount.permissionScope === "trade-sandbox" ? " selected" : ""}>Trade sandbox only</option>
          <option value="trade-live"${brokerAccount.permissionScope === "trade-live" ? " selected" : ""}>Trade live</option>
        </select>
      </label>
      <label class="profile-toggle-row">
        <input data-broker-field="canTrade" type="checkbox"${brokerAccount.canTrade ? " checked" : ""}>
        Trading permission enabled in backend
      </label>
      <label class="profile-strategy-wide">
        Backend order endpoint
        <input data-broker-field="webhookUrl" type="url" value="${escapeHtml(brokerAccount.webhookUrl)}" placeholder="https://.../orders">
      </label>
      <label class="profile-strategy-wide">
        Account notes
        <textarea data-broker-field="notes" rows="3">${escapeHtml(brokerAccount.notes)}</textarea>
      </label>
    </div>
  `;
  const brokerSave = document.createElement("button");
  brokerSave.type = "button";
  brokerSave.className = "filter-button profile-commodity-save";
  brokerSave.textContent = "Save brokerage metadata";
  brokerSave.addEventListener("click", () => saveUserBrokerAccountSettings(user, brokerCard));
  brokerCard.append(brokerSave);

  statsCard.className = "user-profile-subcard";
  statsCard.innerHTML = `
    <h3>Session Statistics</h3>
    <div class="profile-stat-grid">
      <div><span>Total Sessions</span><strong>${Number(user.sessions) || history.length}</strong></div>
      <div><span>Unique Devices</span><strong>${getUniqueSessionCount(user, "device") || 1}</strong></div>
      <div><span>Unique Locations</span><strong>${getUniqueSessionCount(user, "location") || 1}</strong></div>
      <div><span>Last Active</span><strong>${formatRelativeDate(user.lastActiveAt)}</strong></div>
    </div>
  `;

  actionsCard.className = "user-profile-subcard";
  actionsCard.innerHTML = "<h3>Admin Actions</h3>";
  const adminActions = document.createElement("div");
  adminActions.className = "profile-admin-actions";
  [
    ["Force Password Reset", "warning"],
    ["Revoke All Sessions", "danger"],
    ["Clear Session History", "neutral"]
  ].forEach(([label, tone]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `profile-action-button ${tone}`;
    button.textContent = label;
    button.addEventListener("click", () => {
      if (label === "Clear Session History") {
        user.sessionHistory = [];
        user.sessions = 0;
        user.lastActiveAt = null;
        saveUserRoster();
        saveSharedSettings();
        renderUserManagement();
      } else {
        userManagementStatusEl.textContent = `${label} marked for ${user.name || user.email}`;
      }
    });
    adminActions.append(button);
  });
  actionsCard.append(adminActions);

  historyCard.className = "user-profile-subcard";
  historyCard.innerHTML = `<h3>Session History <span>${history.length} sessions</span></h3>`;
  const table = document.createElement("table");
  table.className = "profile-session-table";
  table.innerHTML = `
    <thead><tr><th>Timestamp</th><th>Device</th><th>Location</th><th>Colo</th></tr></thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");
  (history.length ? history : [{ time: null, device: "-", location: "-", colo: "-" }]).slice(0, 8).forEach((session) => {
    const row = document.createElement("tr");
    [
      session.time ? `${formatTradeTime(session.time)} (${formatRelativeDate(session.time)})` : "No sessions recorded",
      [session.device || "Unknown", session.platform || ""].filter(Boolean).join(" / "),
      session.location || "Unknown",
      session.colo || "unknown"
    ].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    tbody.append(row);
  });
  historyCard.append(table);

  wrapper.append(profileCard, commoditiesCard, strategyCard, brokerCard, statsCard, actionsCard, historyCard);
  return wrapper;
}

function getUserBuckets() {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 7);

  return {
    activeToday: userRoster.filter((user) => user.enabled !== false && getTransactionDate(user.lastActiveAt) >= todayStart),
    newThisWeek: userRoster.filter((user) => getTransactionDate(user.createdAt) >= weekStart)
  };
}

function getFilteredUsers() {
  const query = userSearchQuery.trim().toLowerCase();
  const { activeToday, newThisWeek } = getUserBuckets();
  let users = userRoster;

  if (userListFilter === "active") users = activeToday;
  if (userListFilter === "new") users = newThisWeek;

  if (!query) return users;

  return users.filter((user) => (
    String(user.name || "").toLowerCase().includes(query)
    || String(user.email || "").toLowerCase().includes(query)
  ));
}

function renderUserListFilterButtons() {
  userStatCards.forEach((card) => {
    card.dataset.active = String(card.dataset.userListFilter === userListFilter);
  });
}

function renderInlineUserDetail() {
  if (!userInlineDetailPanelEl || !userInlineDetailBodyEl || !userInlineDetailTitleEl) return;
  const selectedUser = userRoster.find((user) => normalizeEmail(user.email) === expandedUserEmail);
  userInlineDetailBodyEl.innerHTML = "";

  if (!selectedUser) {
    userInlineDetailPanelEl.hidden = true;
    userInlineDetailTitleEl.textContent = "No user selected";
    return;
  }

  userInlineDetailTitleEl.textContent = `${selectedUser.name || "Unnamed user"} / ${selectedUser.email || "-"}`;
  try {
    userInlineDetailBodyEl.append(createUserProfilePanel(selectedUser));
  } catch (error) {
    console.error("User profile render failed", error);
    const fallback = document.createElement("div");
    fallback.className = "user-profile-render-error";
    fallback.textContent = `User profile could not render: ${error?.message || "unknown error"}`;
    userInlineDetailBodyEl.append(fallback);
  }
  userInlineDetailPanelEl.hidden = false;
}

function openUserDetail(user) {
  expandedUserEmail = normalizeEmail(user.email);
  editingUserEmail = "";
  userRosterViewEl.hidden = false;
  userDetailViewEl.hidden = true;
  selectedUserProfileEl.hidden = true;
  renderUserManagement();
}

function closeUserDetail() {
  expandedUserEmail = "";
  editingUserEmail = "";
  const dialog = document.querySelector("#user-profile-dialog");
  if (dialog) dialog.hidden = true;
  if (userInlineDetailPanelEl) userInlineDetailPanelEl.hidden = true;
  renderUserManagement();
}

function renderSelectedUserProfile() {
  selectedUserProfileEl.innerHTML = "";
  userRosterViewEl.hidden = false;
  userDetailViewEl.hidden = true;
  selectedUserProfileEl.hidden = true;
  renderInlineUserDetail();
}

function getTransactionStateCode(entry) {
  if (isClosingTransaction(entry) || entry.closedAt) return "C";
  const entryTradeId = entry.tradeId || entry.id;
  if (entryTradeId) {
    const matchingClose = getUserScopedTransactions().some((candidate) => (
      candidate !== entry
      && isClosingTransaction(candidate)
      && (candidate.tradeId || candidate.id) === entryTradeId
    ));
    if (matchingClose) return "C";
  }
  return "O";
}

function appendStateCell(row, code, label) {
  const cell = document.createElement("td");
  const badge = document.createElement("span");
  badge.className = "trade-state-badge";
  badge.dataset.state = code;
  badge.title = label;
  badge.textContent = code;
  cell.append(badge);
  row.append(cell);
}

function buildQueuedPaperTradeRow(commodity, signal, tradePlan, decision) {
  const row = document.createElement("tr");
  const openTrade = getOpenPaperTrade(commodity);

  if (openTrade) {
    row.className = "transaction-row open-trade-row";
    appendStateCell(row, "O", "Open");
    [
      formatTradeTime(openTrade.openedAt || openTrade.time),
      `${formatSide(openTrade.side)} open`,
      formatSide(openTrade.side),
      `#${openTrade.martingaleStep || openTrade.step || martingaleStep}`,
      openTrade.contract || marketConfig[commodity]?.ticker || tradePlan.ticker,
      Number.isFinite(Number(openTrade.entryPrice)) ? formatPrice(Number(openTrade.entryPrice)) : UNAVAILABLE_TEXT,
      Number.isFinite(Number(openTrade.capital)) ? formatMoney(Number(openTrade.capital)) : UNAVAILABLE_TEXT,
      Number.isFinite(Number(openTrade.targetPrice)) ? formatPrice(Number(openTrade.targetPrice)) : UNAVAILABLE_TEXT,
      `Watching target ${formatPrice(openTrade.targetPrice)} / stop ${formatPrice(openTrade.stopPrice)}`
    ].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });

    return row;
  }

  const signalSide = getSignalSide(signal);
  const hasExecutablePrice = Boolean(tradePlan?.priceReady && signalSide);
  const clearsThreshold = signalSide && signal.conviction >= tradePlan.entryThreshold;
  const action = signalSide && !clearsThreshold
    ? `Waiting ${signal.conviction}/${tradePlan.entryThreshold}`
    : signalSide
    ? `${signalSide === "short" ? "Sell short" : "Buy"} queued`
    : "Waiting for signal";
  const queuedPrice = signalSide === "short" ? tradePlan.entryPrice : tradePlan.buyPrice;

  row.className = "transaction-row queued-trade-row";
  appendStateCell(row, "Q", "Queued / waiting");
  [
    "Next",
    action,
    signalSide ? formatSide(signalSide) : "-",
    `#${martingaleStep}`,
    marketConfig[commodity]?.ticker || tradePlan.ticker,
    hasExecutablePrice ? formatPrice(queuedPrice) : UNAVAILABLE_TEXT,
    hasExecutablePrice ? formatMoney(tradePlan.nextCapital) : UNAVAILABLE_TEXT,
    hasExecutablePrice ? formatPrice(tradePlan.targetPrice) : UNAVAILABLE_TEXT,
    decision.title
  ].forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.append(cell);
  });

  return row;
}

function buildFallbackPaperTradeRow(message) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 10;
  cell.textContent = message;
  row.append(cell);
  return row;
}

function appendQueuedPaperTradeRow(commodity, signal, tradePlan, decision) {
  if (!transactionHistoryEl) return;
  try {
    const queuedRow = buildQueuedPaperTradeRow(commodity, signal, tradePlan, decision);
    if (queuedRow) {
      transactionHistoryEl.append(queuedRow);
      return;
    }
  } catch (error) {
    console.warn("Paper trade queue row failed to render", error);
  }

  transactionHistoryEl.append(buildFallbackPaperTradeRow("Trade queue is waiting for a complete live price and advisory."));
}

function appendSimplePaperHistoryRows(entries) {
  entries.slice(0, 50).forEach((entry) => {
    const row = document.createElement("tr");
    const pnl = getDisplayPnl(entry);

    appendStateCell(row, getTransactionStateCode(entry), getTransactionStateCode(entry) === "C" ? "Closed" : "Open");
    [
      entry?.time ? formatTradeTime(entry.time) : "-",
      entry?.action || "Trade",
      entry?.side ? formatSide(entry.side) : "-",
      entry?.step ? `#${entry.step}` : "-",
      entry?.contract || "-",
      Number.isFinite(Number(entry?.price)) ? formatPrice(Number(entry.price)) : UNAVAILABLE_TEXT,
      Number.isFinite(Number(entry?.capital)) ? formatMoney(Number(entry.capital)) : "-",
      getTransactionTargetOrExitPrice(entry),
      Number.isFinite(pnl) ? formatSignedMoney(pnl) : "-"
    ].forEach((value, index) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      if (index === 8) {
        if (pnl > 0) cell.className = "gain";
        if (pnl < 0) cell.className = "loss";
      }
      row.append(cell);
    });

    transactionHistoryEl.append(row);
  });
}

function buildQueuedLiveTradeRow() {
  const row = document.createElement("tr");
  const signal = lastPrimarySignal;
  const tradePlan = lastTradePlan;
  const side = signal ? getSignalSide(signal) : null;
  const hasExecutablePrice = Boolean(tradePlan?.priceReady && side);

  row.className = "transaction-row queued-trade-row live-queued-row";
  appendStateCell(row, "Q", "Queued / waiting");
  [
    "Next",
    side ? `Notify ${side === "short" ? "short" : "long"} setup` : "Waiting for advisory",
    side ? formatSide(side) : "-",
    liveAgentSelectEl?.value || "Manual only",
    tradePlan?.ticker || marketConfig[commoditySelect.value]?.ticker || "-",
    hasExecutablePrice ? formatPrice(side === "short" ? tradePlan.entryPrice : tradePlan.buyPrice) : UNAVAILABLE_TEXT,
    hasExecutablePrice ? formatMoney(tradePlan.nextCapital) : UNAVAILABLE_TEXT,
    hasExecutablePrice ? formatPrice(tradePlan.targetPrice) : UNAVAILABLE_TEXT,
    "Queued for trader review"
  ].forEach((value) => {
    const cell = document.createElement("td");
    cell.textContent = value;
    row.append(cell);
  });

  return row;
}

function renderUserManagement() {
  if (!userRoster.length) loadUserRoster();

  const { activeToday, newThisWeek } = getUserBuckets();
  const filteredUsers = getFilteredUsers();
  const filterLabel = userListFilter === "active"
    ? "active today"
    : userListFilter === "new"
      ? "new this week"
      : "visible";

  userTotalCountEl.textContent = String(userRoster.length);
  userActiveCountEl.textContent = String(activeToday.length);
  userNewCountEl.textContent = String(newThisWeek.length);
  userManagementStatusEl.textContent = `${filteredUsers.length} ${filterLabel}`;
  renderUserListFilterButtons();
  userTableBodyEl.innerHTML = "";

  if (!filteredUsers.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.textContent = "No users match the current search.";
    row.append(cell);
    userTableBodyEl.append(row);
    renderSelectedUserProfile();
    return;
  }

  filteredUsers.forEach((user) => {
    const row = document.createElement("tr");
    const profileCell = document.createElement("td");
    const profile = document.createElement("button");
    const profileText = document.createElement("div");
    const name = document.createElement("strong");
    const email = document.createElement("span");
    const status = document.createElement("span");
    const actionCell = document.createElement("td");
    const actions = document.createElement("div");
    const action = document.createElement("button");

    row.className = "user-summary-row";
    row.dataset.expanded = String(expandedUserEmail === normalizeEmail(user.email));
    row.tabIndex = 0;
    row.addEventListener("click", (event) => {
      if (event.target.closest("button, input, a, label")) return;
      if (expandedUserEmail === normalizeEmail(user.email)) closeUserDetail();
      else openUserDetail(user);
    });
    row.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (expandedUserEmail === normalizeEmail(user.email)) closeUserDetail();
      else openUserDetail(user);
    });
    profile.className = "user-profile";
    profile.type = "button";
    profile.addEventListener("click", (event) => {
      event.stopPropagation();
      if (expandedUserEmail === normalizeEmail(user.email)) closeUserDetail();
      else openUserDetail(user);
    });
    name.textContent = user.name || "Unnamed user";
    email.textContent = user.email || "-";
    profileText.append(name, email);
    profile.append(createUserAvatar(user), profileText);
    profileCell.append(profile);

    status.className = "user-status";
    status.dataset.disabled = String(user.enabled === false);
    status.textContent = user.enabled === false ? "Disabled" : "Active";

    actions.className = "user-actions";
    action.type = "button";
    action.className = "view-user-button";
    action.textContent = "View";
    action.addEventListener("click", (event) => {
      event.stopPropagation();
      openUserDetail(user);
    });
    actions.append(action);
    actionCell.append(actions);

    [
      profileCell,
      formatUserDate(user.createdAt),
      formatRelativeDate(user.lastActiveAt),
      String(Number(user.sessions) || 0),
      formatMoney(user.paperBaseEquity ?? PAPER_START_EQUITY),
      `${Number(user.paperRiskPct ?? PAPER_DEFAULT_RISK_PCT).toFixed(2).replace(/\.?0+$/, "")}%`,
      status,
      actionCell
    ].forEach((value) => {
      if (value instanceof HTMLElement) {
        row.append(value);
        return;
      }
      const cell = document.createElement("td");
      if (value instanceof Node) cell.append(value);
      else cell.textContent = value;
      row.append(cell);
    });

    userTableBodyEl.append(row);

  });
  renderSelectedUserProfile();
}

function markCurrentSessionActive() {
  if (window.sessionStorage.getItem(ACCESS_SESSION_RECORDED_KEY) === "true") return;
  const user = findRegisteredUserByEmail(window.sessionStorage.getItem(ACCESS_EMAIL_KEY));
  if (!user) return;

  user.lastActiveAt = new Date().toISOString();
  user.sessions = Math.max(1, Number(user.sessions || 0) + 1);
  user.sessionHistory = [
    {
      time: user.lastActiveAt,
      device: "Desktop",
      platform: window.navigator?.platform || "Browser",
      location: "Unknown",
      colo: "local"
    },
    ...(Array.isArray(user.sessionHistory) ? user.sessionHistory : [])
  ].slice(0, 25);
  saveUserRoster();
  saveSharedSettings();
  recordOpenBrainEvent("login", `${user.name || user.email} logged in`, {
    userId: user.id,
    email: user.email,
    tags: ["login", normalizeEmail(user.email)]
  });
  window.sessionStorage.setItem(ACCESS_SESSION_RECORDED_KEY, "true");
}

function addUser(name, email) {
  const normalizedEmail = normalizeEmail(email);
  const exists = userRoster.some((user) => String(user.email || "").toLowerCase() === normalizedEmail);

  if (!name.trim() || !normalizedEmail || exists) {
    userManagementStatusEl.textContent = exists ? "User already exists" : "Name and email required";
    return;
  }

  userRoster.unshift({
    id: `user-${Date.now()}`,
    name: name.trim(),
    email: normalizedEmail,
    createdAt: new Date().toISOString(),
    lastActiveAt: new Date().toISOString(),
    sessions: 0,
    paperBaseEquity: PAPER_START_EQUITY,
    paperRiskPct: PAPER_DEFAULT_RISK_PCT,
    enabled: true
  });
  saveUserRoster();
  saveSharedSettings();
  userNameInputEl.value = "";
  userEmailInputEl.value = "";
  renderUserManagement();
}

function getDefaultFeatureRequests() {
  const now = new Date().toISOString();
  return [
    {
      id: "feature-training-video",
      title: "Training / Instructional video",
      description: "Spin up a video on how the system works so we can get users onboarded quickly.",
      type: "feature",
      tag: "ui",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    },
    {
      id: "feature-auto-research",
      title: "Auto Research",
      description: "Download a copy of Auto Research and set up the problem workflow.",
      type: "feature",
      tag: "trading",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    },
    {
      id: "feature-more-markets",
      title: "Different markets like stocks",
      description: "Add views into different markets like stocks and other tradable assets.",
      type: "feature",
      tag: "trading",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    },
    {
      id: "feature-version-control-git",
      title: "Version control with GIT",
      description: "Set up a version control system that saves a snapshot of the project as changes are made.",
      type: "feature",
      tag: "ai",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    },
    {
      id: "feature-cme-data-feed",
      title: "Data feed / implement CME data",
      description: "Integrate API keys from CME provided by Coquest so the app can get real market data.",
      type: "feature",
      tag: "data",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    },
    {
      id: "feature-auto-implement-requests",
      title: "Auto implement new feature requests",
      description: "Automatically pick up new feature requests and move them into an implementation workflow.",
      type: "feature",
      tag: "ai",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    },
    {
      id: "feature-open-brain-video",
      title: "Open Brain",
      description: "Add the Open Brain reference video and download workflow into the product research backlog.",
      type: "feature",
      tag: "trading",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    },
    {
      id: "feature-browser-tab-logo",
      title: "Browser Tab to Display ComHedge Logo",
      description: "Add the ComHedge logo to the browser tab so users can recognize the app quickly.",
      type: "feature",
      tag: "ui",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    },
    {
      id: "bug-screenshot-paste",
      title: "Add screen shot paste to bug report",
      description: "Add screenshot paste ability to the bug report so users can show what they are seeing.",
      type: "bug",
      tag: "ui",
      status: "submitted",
      votes: 0,
      author: "Peter",
      createdAt: now
    }
  ];
}

function saveFeatureRequests() {
  window.localStorage.setItem(FEATURE_REQUESTS_KEY, JSON.stringify(featureRequests));
}

function loadFeatureRequests() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(FEATURE_REQUESTS_KEY) || "null");
    const defaultRequests = getDefaultFeatureRequests();
    const requests = Array.isArray(stored) && stored.length ? stored : defaultRequests;
    const knownIds = new Set(requests.map((request) => request.id));
    defaultRequests.forEach((request) => {
      if (!knownIds.has(request.id)) requests.push(request);
    });
    featureRequests.splice(0, featureRequests.length, ...requests);
  } catch (error) {
    featureRequests.splice(0, featureRequests.length, ...getDefaultFeatureRequests());
  }
}

function getFilteredFeatureRequests(status) {
  return featureRequests.filter((request) => (
    request.status === status
    && (featureTypeFilter === "all" || request.type === featureTypeFilter)
  ));
}

function renderFeatureTypeFilters() {
  featureTypeFiltersEl.querySelectorAll("[data-feature-type]").forEach((button) => {
    const active = button.dataset.featureType === featureTypeFilter;
    button.dataset.active = String(active);
    const label = button.dataset.featureType === "all" ? "All" : button.dataset.featureType === "bug" ? "Bugs" : "Features";
    button.textContent = `${active ? "✓ " : ""}${label}`;
  });
}

function getNextFeatureStatus(status) {
  if (status === "submitted") return "accepted";
  if (status === "accepted") return "in-progress";
  if (status === "in-progress") return "done";
  return "submitted";
}

function renderFeatureRequests() {
  const columns = [
    { id: "submitted", name: "Submitted" },
    { id: "accepted", name: "Accepted" },
    { id: "in-progress", name: "In Progress" },
    { id: "done", name: "Done" }
  ];
  const visibleCount = featureRequests.filter((request) => (
    featureTypeFilter === "all" || request.type === featureTypeFilter
  )).length;

  renderFeatureTypeFilters();
  featureRequestStatusEl.textContent = `${visibleCount} visible`;
  featureBoardEl.innerHTML = "";

  columns.forEach((column) => {
    const items = getFilteredFeatureRequests(column.id);
    const columnEl = document.createElement("section");
    const header = document.createElement("header");
    const title = document.createElement("h3");
    const count = document.createElement("span");

    columnEl.className = "feature-column";
    title.textContent = column.name;
    count.className = "feature-count";
    count.textContent = String(items.length);
    header.append(title, count);
    columnEl.append(header);

    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "feature-empty";
      empty.textContent = "No items";
      columnEl.append(empty);
    }

    items.forEach((request) => {
      const card = document.createElement("article");
      const vote = document.createElement("button");
      const titleEl = document.createElement("h4");
      const description = document.createElement("p");
      const meta = document.createElement("div");
      const tag = document.createElement("span");
      const age = document.createElement("span");
      const move = document.createElement("button");

      card.className = "feature-card";
      vote.type = "button";
      vote.className = "feature-vote";
      vote.textContent = `^ ${Number(request.votes) || 0}`;
      vote.addEventListener("click", () => {
        request.votes = (Number(request.votes) || 0) + 1;
        saveFeatureRequests();
        renderFeatureRequests();
      });
      titleEl.textContent = request.title;
      description.textContent = request.description;
      tag.className = "feature-tag";
      tag.textContent = request.tag || request.type;
      age.textContent = formatRelativeDate(request.createdAt);
      move.type = "button";
      move.className = "filter-button";
      move.textContent = column.id === "done" ? "Reopen" : "Move";
      move.addEventListener("click", () => {
        request.status = getNextFeatureStatus(request.status);
        saveFeatureRequests();
        renderFeatureRequests();
      });
      meta.className = "feature-meta";
      meta.append(tag, age, document.createTextNode(request.author || "Peter"), move);
      card.append(vote, titleEl, description, meta);
      columnEl.append(card);
    });

    featureBoardEl.append(columnEl);
  });
}

function addFeatureRequest() {
  const title = featureTitleInputEl.value.trim();
  const description = featureDescriptionInputEl.value.trim();
  const type = featureTypeInputEl.value;
  const tag = featureTagInputEl.value.trim() || type;
  if (!title || !description) {
    featureRequestStatusEl.textContent = "Title and description required";
    return;
  }

  featureRequests.unshift({
    id: `feature-${Date.now()}`,
    title,
    description,
    type,
    tag,
    status: "submitted",
    votes: 0,
    author: "Peter",
    createdAt: new Date().toISOString()
  });
  featureFormEl.reset();
  featureFormEl.hidden = true;
  saveFeatureRequests();
  renderFeatureRequests();
  recordOpenBrainEvent("feature-request", `Feature request added: ${title}`, {
    title,
    type,
    tag,
    tags: ["feature-request", type]
  });
}

async function handleAccessSubmit(event) {
  event.preventDefault();
  loadUserRoster();
  const email = normalizeEmail(accessEmailEl.value);
  const password = accessPasswordEl.value.trim();
  const registeredUser = findRegisteredUserByEmail(email);

  if (!registeredUser) {
    accessErrorEl.textContent = "Email is not registered for ComHedge 2 access.";
    accessPasswordEl.value = "";
    accessEmailEl.focus();
    return;
  }

  const hash = await hashAccessPassword(password);

  if (hash !== ACCESS_PASSWORD_HASH) {
    accessErrorEl.textContent = "Password does not match.";
    accessPasswordEl.value = "";
    accessPasswordEl.focus();
    return;
  }

  window.sessionStorage.setItem(ACCESS_STATE_KEY, "true");
  window.sessionStorage.setItem(ACCESS_EMAIL_KEY, email);
  window.sessionStorage.removeItem(ACCESS_SESSION_RECORDED_KEY);
  showAppShell();
  initializeApp();
}

for (const commodity of commodities) {
  const option = document.createElement("option");
  option.value = commodity.id;
  option.textContent = `${commodity.name} (${commodity.family})`;
  commoditySelect.append(option);

  const chip = document.createElement("button");
  const name = document.createElement("span");
  const state = document.createElement("span");

  chip.type = "button";
  chip.className = "commodity-chip";
  chip.dataset.commodity = commodity.id;
  name.className = "commodity-name";
  name.textContent = commodity.name;
  state.className = "commodity-state";
  state.textContent = "Wait";
  chip.append(name, state);
  chip.addEventListener("click", () => {
    commoditySelect.value = commodity.id;
    calculateSignal();
    connectCoinbaseWebSocket(commodity.id);
    refreshCoinbasePrice(commodity.id);
  });
  commodityStrip.append(chip);
  chipMap.set(commodity.id, { chip, state });
}

commoditySelect.value = "oil";

function renderHistoryFilterButtons() {
  historyCommodityFiltersEl.innerHTML = "";

  const visibleCommodities = commodities.filter(({ id }) => userCanTradeCommodity(id));
  normalizeHistoryCommodityFilter();
  const filters = [
    { id: "all", name: "All" },
    ...visibleCommodities.map(({ id, name }) => ({ id, name }))
  ];

  filters.forEach(({ id, name }) => {
    const button = document.createElement("button");
    const check = document.createElement("span");

    button.type = "button";
    button.className = "filter-button";
    button.dataset.commodity = id;
    button.dataset.active = String(historyCommodityFilter === id);
    check.className = "check";
    check.textContent = historyCommodityFilter === id ? "✓" : "";
    button.append(check, document.createTextNode(name));
    button.addEventListener("click", () => {
      historyFiltersTouched = true;
      historyCommodityFilter = id;
      expandedTransactionId = null;
      renderHistoryFilterButtons();
      renderPeriodFilterButtons();
      calculateSignal();
    });
    historyCommodityFiltersEl.append(button);
  });
}

function renderPeriodFilterButtons() {
  historyPeriodFiltersEl.querySelectorAll("[data-period]").forEach((button) => {
    const active = button.dataset.period === historyPeriodFilter;
    button.dataset.active = String(active);
    button.textContent = `${active ? "✓ " : ""}${button.dataset.period === "all" ? "All time" : button.dataset.period[0].toUpperCase() + button.dataset.period.slice(1)}`;
  });
}

function renderAdvisoryFilterButtons() {
  advisoryCommodityFiltersEl.innerHTML = "";

  commodities.filter(({ id }) => userCanTradeCommodity(id)).forEach(({ id, name }) => {
    const button = document.createElement("button");
    const check = document.createElement("span");

    button.type = "button";
    button.className = "filter-button";
    button.dataset.advisoryCommodity = id;
    button.dataset.active = String(advisoryCommodityFilter === id);
    check.className = "check";
    check.textContent = advisoryCommodityFilter === id ? "✓" : "";
    button.append(check, document.createTextNode(name));
    advisoryCommodityFiltersEl.append(button);
  });

  advisoryHorizonFiltersEl.querySelectorAll("[data-advisory-horizon]").forEach((button) => {
    const horizon = button.dataset.advisoryHorizon;
    const active = horizon === advisoryHorizonFilter;
    button.dataset.active = String(active);
    button.textContent = `${active ? "✓ " : ""}${horizon[0].toUpperCase()}${horizon.slice(1)}`;
  });

  advisoryPeriodFiltersEl.querySelectorAll("[data-advisory-period]").forEach((button) => {
    const period = button.dataset.advisoryPeriod;
    const active = period === advisoryPeriodFilter;
    button.dataset.active = String(active);
    button.textContent = `${active ? "✓ " : ""}${period[0].toUpperCase()}${period.slice(1)}`;
  });
}

function readBaseSignals() {
  return {
    trend: Number(inputs.trend.value) * 2.3,
    inventory: Number(inputs.inventory.value) * 2.0,
    dollar: Number(inputs.dollar.value) * 1.6,
    geopolitics: Number(inputs.geopolitics.value) * 1.7,
    curve: Number(inputs.curve.value) * 2.4,
    horizon: horizonWeight[inputs.horizon.value]
  };
}

function getManualConvictionOverrides() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(MANUAL_CONVICTION_OVERRIDES_KEY) || "{}");
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
  } catch (error) {
    return {};
  }
}

function getManualConvictionOverride(commodity) {
  const value = Number(getManualConvictionOverrides()[commodity]);
  return Number.isFinite(value) ? clamp(Math.round(value), 0, 100) : null;
}

function setManualConvictionOverride(commodity, value) {
  const overrides = getManualConvictionOverrides();
  if (value === null || value === "") {
    delete overrides[commodity];
    window.localStorage.setItem(MANUAL_CONVICTION_OVERRIDES_KEY, JSON.stringify(overrides));
    return;
  }
  const score = Number(value);
  if (Number.isFinite(score)) {
    overrides[commodity] = clamp(Math.round(score), 0, 100);
  } else {
    delete overrides[commodity];
  }
  window.localStorage.setItem(MANUAL_CONVICTION_OVERRIDES_KEY, JSON.stringify(overrides));
}

function renderManualConvictionInput(commodity) {
  if (!inputs.manualConviction) return;
  const override = getManualConvictionOverride(commodity);
  inputs.manualConviction.value = override === null ? "" : String(override);
}

function scoreCommodity(commodity, baseSignals) {
  const tweak = commodityTweaks[commodity] || { trend: 0, inventory: 0, geopolitics: 0, dollar: 0, curve: 0 };
  const baseScore = (
    baseSignals.trend + tweak.trend +
    baseSignals.inventory + tweak.inventory +
    baseSignals.dollar + tweak.dollar +
    baseSignals.geopolitics + tweak.geopolitics +
    baseSignals.curve + tweak.curve
  ) * baseSignals.horizon;
  const automaticBounded = Math.max(-100, Math.min(100, Math.round(baseScore)));
  const manualConviction = getManualConvictionOverride(commodity);
  const bounded = manualConviction === null
    ? automaticBounded
    : Math.sign(automaticBounded || 1) * Math.max(0, manualConviction - 40);
  const conviction = manualConviction === null
    ? Math.min(100, 40 + Math.abs(bounded))
    : manualConviction;

  let label = "Wait";
  let chipLabel = "Wait";
  let action = "No trade";
  let color = "#735f2d";
  let tone = "wait";

  if (bounded >= 35) {
    label = "Strong Long";
    chipLabel = "Long";
    action = "Buy breakout or dips";
    color = "#006d5b";
    tone = "long";
  } else if (bounded >= 12) {
    label = "Moderate Long";
    chipLabel = "Long";
    action = "Lean long small";
    color = "#1d7f6e";
    tone = "long";
  } else if (bounded <= -35) {
    label = "Strong Short";
    chipLabel = "Short";
    action = "Sell rallies";
    color = "#8d2d2d";
    tone = "short";
  } else if (bounded <= -12) {
    label = "Moderate Short";
    chipLabel = "Short";
    action = "Lean short small";
    color = "#a64040";
    tone = "short";
  }

  return { bounded, conviction, automaticBounded, manualOverride: manualConviction, label, chipLabel, action, color, tone };
}

function formatPrice(value) {
  if (!Number.isFinite(value)) return UNAVAILABLE_TEXT;
  const decimals = value >= 100 ? 2 : value >= 10 ? 2 : 3;
  return `$${value.toFixed(decimals)}`;
}

function formatMoney(value) {
  if (!Number.isFinite(value)) return UNAVAILABLE_TEXT;
  return `$${value.toFixed(2)}`;
}

function formatSignedMoney(value) {
  if (!Number.isFinite(value)) return UNAVAILABLE_TEXT;
  const sign = value > 0 ? "+" : "";
  return `${sign}${formatMoney(value)}`;
}

function formatSide(side) {
  return side === "short" ? "Short" : "Long";
}

function formatTradeDate() {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York"
  }).format(new Date());
}

function formatPriceTime(value) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  }).format(getTransactionDate(value));
}

function formatTradeTime(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  }).format(getTransactionDate(value));
}

function formatEasternDate(value = new Date()) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(value);
}

function addDays(value, days) {
  const date = new Date(value);
  date.setDate(date.getDate() + days);
  return date;
}

function getEasternMarketParts(value = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
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

function getFuturesMarketStatus(value = new Date()) {
  const { day, minutes } = getEasternMarketParts(value);
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayDate = formatEasternDate(value);
  const isMaintenanceBreak = day >= 1 && day <= 4 && minutes >= 17 * 60 && minutes < 18 * 60;
  const isOpen = (day === 0 && minutes >= 18 * 60)
    || (day >= 1 && day <= 4 && !isMaintenanceBreak)
    || (day === 5 && minutes < 17 * 60);

  if (isOpen) {
    const closeCopy = day >= 1 && day <= 4 && minutes < 17 * 60
      ? `Today is ${todayDate} ET. Maintenance starts today at 5:00 PM ET.`
      : day >= 0 && day <= 4
        ? `Today is ${todayDate} ET. Next maintenance starts at 5:00 PM ET.`
        : `Today is ${todayDate} ET. Closes Friday at 5:00 PM ET.`;
    return {
      isOpen: true,
      label: "Market open",
      shortLabel: "Market open",
      detail: closeCopy
    };
  }

  if (isMaintenanceBreak) {
    return {
      isOpen: false,
      label: "Market closed",
      shortLabel: "Reopens 6:00 PM ET",
      detail: `Today is ${todayDate} ET. Daily maintenance break. Reopens today, ${todayDate}, at 6:00 PM ET.`
    };
  }

  const opensToday = day === 0 && minutes < 18 * 60;
  const nextSundayDate = formatEasternDate(opensToday ? value : addDays(value, (7 - day) % 7));
  return {
    isOpen: false,
    label: "Market closed",
    shortLabel: opensToday ? "Opens 6:00 PM ET" : "Opens Sunday 6:00 PM ET",
    detail: opensToday
      ? `Today is ${todayDate} ET. Weekend close. Opens today, ${todayDate}, at 6:00 PM ET.`
      : `Today is ${todayDate} ET. Weekend close. Opens Sunday, ${nextSundayDate}, at 6:00 PM ET. Today is ${dayNames[day]} ET.`
  };
}

function formatDuration(ms) {
  if (!Number.isFinite(ms) || ms < 0) return "-";

  const totalSeconds = Math.max(0, Math.round(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (days) return `${days}d ${hours}h`;
  if (hours) return `${hours}h ${minutes}m`;
  if (minutes) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

function getCoinbasePrice(data) {
  const bestBid = Number(data?.best_bid);
  const bestAsk = Number(data?.best_ask);
  const lastTrade = Number(data?.trades?.[0]?.price);

  if (Number.isFinite(bestBid) && Number.isFinite(bestAsk) && bestBid > 0 && bestAsk > 0) {
    return (bestBid + bestAsk) / 2;
  }

  if (Number.isFinite(lastTrade) && lastTrade > 0) return lastTrade;
  if (Number.isFinite(bestBid) && bestBid > 0) return bestBid;
  if (Number.isFinite(bestAsk) && bestAsk > 0) return bestAsk;
  return null;
}

function getCoinbaseWebSocketPrice(data) {
  const directPrice = getCoinbasePrice(data);
  if (directPrice) return directPrice;

  const events = Array.isArray(data?.events) ? data.events : [];
  for (const event of events) {
    const tickers = Array.isArray(event?.tickers) ? event.tickers : [];
    for (const ticker of tickers) {
      const tickerPrice = getCoinbasePrice(ticker);
      if (tickerPrice) return tickerPrice;
      const price = Number(ticker?.price);
      if (Number.isFinite(price) && price > 0) return price;
    }

    const trades = Array.isArray(event?.trades) ? event.trades : [];
    for (const trade of trades) {
      const price = Number(trade?.price);
      if (Number.isFinite(price) && price > 0) return price;
    }
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

function getSnapshotUrl() {
  return `./prices.json?ts=${Date.now()}`;
}

async function loadSnapshotPrices() {
  const now = Date.now();
  if (snapshotPricesPromise && now - snapshotPricesLoadedAt < SNAPSHOT_PRICE_REFRESH_MS) {
    return snapshotPricesPromise;
  }

  snapshotPricesLoadedAt = now;
  snapshotPricesPromise = fetch(getSnapshotUrl(), { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("snapshot unavailable");
      return response.json();
    });

  return snapshotPricesPromise;
}

function getSignalSide(signal) {
  if (signal.tone === "long") return "long";
  if (signal.tone === "short") return "short";
  return null;
}

function getBaseRiskCapital() {
  return Math.max(0, paperBaseEquity * (paperRiskPct / 100));
}

function getMartingaleCapital(minTradeValue) {
  if (!Number.isFinite(minTradeValue) || minTradeValue <= 0) return null;
  return minTradeValue * (2 ** (martingaleStep - 1));
}

function getContractMultiplier(config) {
  return Number(config?.contractMultiplier) > 0 ? Number(config.contractMultiplier) : 1;
}

function getMarginRate(config, side) {
  const key = side === "short" ? "marginRateShort" : "marginRateLong";
  return Number(config?.[key]) > 0 ? Number(config[key]) : 1;
}

function getMarginRequirement(config, side, price) {
  if (!Number.isFinite(price) || price <= 0) return null;
  const notional = price * getContractMultiplier(config);
  return notional * getMarginRate(config, side);
}

function getFeePerContractSide(config) {
  return Number(config?.feePerContractSide) >= 0 ? Number(config.feePerContractSide) : 0;
}

function getEstimatedFees(config, contracts, sides = 2) {
  if (!Number.isFinite(contracts) || contracts <= 0) return null;
  return getFeePerContractSide(config) * contracts * sides;
}

function isUsableMarketPrice(commodity) {
  const price = confirmedLivePrices.has(commodity)
    ? confirmedLivePrices.get(commodity)
    : latestPrices.get(commodity);
  const source = confirmedLivePriceSources.has(commodity)
    ? confirmedLivePriceSources.get(commodity)
    : latestPriceSources.get(commodity);
  const updatedAt = confirmedLivePriceTimes.has(commodity)
    ? confirmedLivePriceTimes.get(commodity)
    : latestPriceTimes.get(commodity);
  const updatedDate = updatedAt ? getTransactionDate(updatedAt) : null;
  const ageMs = updatedDate && Number.isFinite(updatedDate.getTime()) ? Date.now() - updatedDate.getTime() : Infinity;
  const liveSource = source === "Coinbase WebSocket" || source === "Coinbase live";
  const freshEnough = liveSource && ageMs <= PAPER_EXIT_PRICE_STALE_MS;
  return Number.isFinite(price) && price > 0 && freshEnough;
}

function getUsableMarketPrice(commodity) {
  if (!isUsableMarketPrice(commodity)) return null;
  return confirmedLivePrices.has(commodity) ? confirmedLivePrices.get(commodity) : latestPrices.get(commodity);
}

function getUsableMarketPriceTime(commodity) {
  if (!isUsableMarketPrice(commodity)) return null;
  return confirmedLivePriceTimes.has(commodity) ? confirmedLivePriceTimes.get(commodity) : latestPriceTimes.get(commodity);
}

function getUsableMarketPriceSource(commodity) {
  if (!isUsableMarketPrice(commodity)) return null;
  return confirmedLivePriceSources.has(commodity) ? confirmedLivePriceSources.get(commodity) : latestPriceSources.get(commodity);
}

function rememberConfirmedLivePrice(commodity, price, source) {
  if (!Number.isFinite(price) || price <= 0) return;
  const now = new Date();
  latestPrices.set(commodity, price);
  latestPriceTimes.set(commodity, now);
  latestPriceSources.set(commodity, source);
  confirmedLivePrices.set(commodity, price);
  confirmedLivePriceTimes.set(commodity, now);
  confirmedLivePriceSources.set(commodity, source);
}

function isBackendBackoffActive(syncAt) {
  return Number.isFinite(syncAt) && syncAt > Date.now();
}

function getBackendBackoffText(syncAt) {
  const seconds = Math.max(1, Math.ceil((syncAt - Date.now()) / 1000));
  const minutes = Math.ceil(seconds / 60);
  return `Backend offline; retrying in ${minutes} min`;
}

function getTradeGrossPnl(trade, exitPrice) {
  const priceMove = trade.side === "short"
    ? trade.entryPrice - exitPrice
    : exitPrice - trade.entryPrice;
  const multiplier = Number(trade.contractMultiplier) > 0 ? trade.contractMultiplier : 1;
  const contracts = Number(trade.contracts) > 0 ? trade.contracts : Number(trade.quantity) || 1;
  return priceMove * multiplier * contracts;
}

function getTradeNetPnl(trade, exitPrice) {
  const grossPnl = getTradeGrossPnl(trade, exitPrice);
  const openFee = Number(trade.openFee) || 0;
  const estimatedExitFee = Number(trade.estimatedExitFee) || 0;
  return grossPnl - openFee - estimatedExitFee;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getClosedPaperTrades() {
  return getUserScopedTransactions().filter((entry) => entry.pnl !== 0);
}

function getLossStreak(closedTrades) {
  let streak = 0;
  for (const trade of closedTrades) {
    if (trade.pnl >= 0) break;
    streak += 1;
  }
  return streak;
}

function getConsecutiveLosingCloses() {
  const losses = [];
  const closedTrades = getUserScopedTransactions()
    .filter(isClosingTransaction)
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));

  for (const trade of closedTrades) {
    if (getDisplayPnl(trade) >= 0) break;
    losses.push(trade);
  }

  return losses;
}

function getNextMartingaleStepFromHistory() {
  const maxStep = getCurrentMartingaleMaxStep();
  const losingCloses = getConsecutiveLosingCloses();
  if (!losingCloses.length) return 1;

  const highestLosingStep = losingCloses.reduce((highest, entry) => (
    Math.max(highest, Number(entry.step) || 1)
  ), 1);

  if (highestLosingStep >= maxStep) return 1;
  return Math.max(1, Math.min(maxStep, highestLosingStep + 1));
}

function getKarpathyLoop(side) {
  const closedTrades = getClosedPaperTrades();
  const sideTrades = side ? closedTrades.filter((entry) => entry.side === side) : [];
  const trainingSet = (sideTrades.length >= 3 ? sideTrades : closedTrades).slice(0, KARPATHY_SAMPLE_SIZE);
  const wins = trainingSet.filter((entry) => entry.pnl > 0).length;
  const winRate = trainingSet.length ? wins / trainingSet.length : 0;
  const netPnl = trainingSet.reduce((total, entry) => total + entry.pnl, 0);
  const avgPnl = trainingSet.length ? netPnl / trainingSet.length : 0;
  const lossStreak = getLossStreak(sideTrades.length >= 3 ? sideTrades : closedTrades);
  let threshold = PAPER_MIN_CONVICTION;

  if (trainingSet.length >= 3) {
    if (winRate < 0.45) threshold += 10;
    else if (winRate < 0.55) threshold += 5;
    else if (winRate >= 0.7 && avgPnl > 0) threshold -= 5;

    if (avgPnl < 0) threshold += 3;
    threshold += Math.min(lossStreak * 2, 10);
  }

  threshold = clamp(Math.round(threshold), 45, 75);

  return {
    avgPnl,
    closedCount: closedTrades.length,
    lossStreak,
    netPnl,
    sampleCount: trainingSet.length,
    threshold,
    winRate
  };
}

function getPaperEntryThreshold(side) {
  const learnedThreshold = getKarpathyLoop(side).threshold;
  return advisoryScoreThresholdIsManual ? advisoryScoreThreshold : learnedThreshold;
}

function getPaperEntryThresholdSource() {
  return advisoryScoreThresholdIsManual ? "manual" : "Karpathy";
}

function buildTradePlan(commodity, signal) {
  const config = marketConfig[commodity];
  const userStrategy = getCurrentUserStrategy();
  const maxMartingaleStep = getCurrentMartingaleMaxStep();
  const priceReady = isUsableMarketPrice(commodity);
  const updatedAt = getUsableMarketPriceTime(commodity);
  const priceSource = getUsableMarketPriceSource(commodity);
  const livePrice = getUsableMarketPrice(commodity);
  const contractMultiplier = getContractMultiplier(config);
  const longBias = signal.tone === "long";
  const shortBias = signal.tone === "short";
  const tradeSide = shortBias ? "short" : "long";
  const waitBias = signal.tone === "wait";
  const entryOffset = waitBias ? 0.004 : 0.0025;
  const targetOffset = waitBias ? 0.006 : 0.01;
  const stopOffset = waitBias ? 0.005 : 0.0075;
  const longEntry = priceReady ? livePrice * (1 - entryOffset) : null;
  const shortEntry = priceReady ? livePrice * (1 + entryOffset) : null;
  const buyPrice = priceReady ? (longBias ? longEntry : shortBias ? shortEntry : livePrice * (1 - 0.001)) : null;
  const sellPrice = priceReady ? (longBias ? livePrice * (1 + targetOffset) : shortBias ? livePrice * (1 - targetOffset) : livePrice * (1 + 0.003)) : null;
  const stopLoss = priceReady ? (longBias ? livePrice * (1 - stopOffset) : shortBias ? livePrice * (1 + stopOffset) : livePrice * (1 - 0.0035)) : null;
  const entryPrice = shortBias ? shortEntry : longEntry;
  const targetPrice = sellPrice;
  const riskPct = `${paperRiskPct.toFixed(2).replace(/\.?0+$/, "")}%`;
  const status = waitBias ? "Stand by" : "Armed";
  const learnedThreshold = getKarpathyLoop(getSignalSide(signal)).threshold;
  const entryThreshold = getPaperEntryThreshold(getSignalSide(signal));
  const entryThresholdSource = getPaperEntryThresholdSource();
  const entryLabel = shortBias ? "Entry (sell short)" : longBias ? "Entry (buy)" : "Entry";
  const targetLabel = shortBias ? "Cover target" : longBias ? "Profit target" : "Profit target";
  const longMargin = getMarginRequirement(config, "long", livePrice);
  const shortMargin = getMarginRequirement(config, "short", livePrice);
  const minTradeValue = tradeSide === "short" ? shortMargin : longMargin;
  const feePerContractSide = getFeePerContractSide(config);
  const nextCapital = getMartingaleCapital(minTradeValue);
  const plannedContracts = Number.isFinite(nextCapital) && Number.isFinite(minTradeValue)
    ? Math.max(1, Math.floor(nextCapital / minTradeValue))
    : null;
  const notionalValue = Number.isFinite(livePrice) && Number.isFinite(plannedContracts)
    ? livePrice * contractMultiplier * plannedContracts
    : null;
  const estimatedRoundTripFees = getEstimatedFees(config, plannedContracts, 2);
  const marginSource = config.productType === "Coinbase futures contract"
    ? "Estimated margin"
    : "Reference margin";
  const strategyName = userStrategy.name || "Profile strategy";
  const loopName = userStrategy.karpathyLoop ? "Karpathy loop" : "profile threshold";
  const skillText = userStrategy.skillsAccess
    ? ` Use ${userStrategy.skillFocus || "selected skills"} as supporting context.`
    : "";
  const memoryText = userStrategy.openBrainAccess
    ? ` Capture context in Open Brain before changing thresholds.`
    : "";

  return {
    ticker: config.ticker,
    contractMonth: config.contractMonth || "Front month",
    productType: config.productType,
    livePrice,
    entryPrice,
    targetPrice,
    tradeSide,
    contractMultiplier,
    plannedContracts,
    notionalValue,
    longMargin,
    shortMargin,
    estimatedRoundTripFees,
    feePerContractSide,
    feeLabel: config.feeLabel || "Estimated fee",
    entryLabel,
    targetLabel,
    buyPrice,
    sellPrice,
    stopLoss,
    buyWindow: `${formatTradeDate()} / ${config.buyWindow}`,
    priceReady,
    priceSource: updatedAt && priceReady ? `${priceSource || "Coinbase live"} / ${formatPriceTime(updatedAt)}` : UNAVAILABLE_TEXT,
    minTradeValue,
    minLong: `1 contract / ${formatMoney(longMargin)}`,
    minShort: `1 contract / ${formatMoney(shortMargin)}`,
    nextCapital,
    learnedThreshold,
    entryThresholdSource,
    entryThreshold,
    riskPct,
    size: Number.isFinite(plannedContracts) ? `${plannedContracts} contract${plannedContracts === 1 ? "" : "s"}` : UNAVAILABLE_TEXT,
    status,
    steps: [
      `${strategyName}: auto-enter long or short when conviction clears the ${entryThresholdSource} trading threshold of ${entryThreshold}. Learned Karpathy recommendation is ${learnedThreshold}.`,
      `Commit Martingale step ${martingaleStep} of ${maxMartingaleStep}, currently ${formatMoney(nextCapital)}, for ${Number.isFinite(plannedContracts) ? plannedContracts : UNAVAILABLE_TEXT} contract${plannedContracts === 1 ? "" : "s"} of ${contractMultiplier} units each.`,
      `Model ${formatMoney(notionalValue)} notional exposure, subtract about ${formatMoney(estimatedRoundTripFees)} estimated round-trip fees, and use ${marginSource.toLowerCase()} for long/short minimums.`,
      `Close at ${formatPrice(targetPrice)} target or ${formatPrice(stopLoss)} stop, then let the ${loopName} adjust the next trade.${skillText}${memoryText}`
    ]
  };
}

async function refreshCoinbasePrice(commodity, options = {}) {
  const runCloseSweep = options.runCloseSweep !== false;
  const lastWebSocketUpdate = latestPriceTimes.get(commodity);
  const webSocketFresh = lastWebSocketUpdate
    && Date.now() - getTransactionDate(lastWebSocketUpdate).getTime() <= COINBASE_WS_STALE_MS;

  if (
    latestPriceSources.get(commodity) === "Coinbase WebSocket" &&
    activePriceSocketCommodity === commodity &&
    activePriceSocket?.readyState === WebSocket.OPEN &&
    webSocketFresh
  ) {
    return;
  }

  if (
    latestPriceSources.get(commodity) === "Coinbase WebSocket" &&
    activePriceSocketCommodity === commodity &&
    activePriceSocket?.readyState === WebSocket.OPEN &&
    !webSocketFresh
  ) {
    latestPriceSources.set(commodity, "Coinbase WebSocket stale");
    closeCoinbaseWebSocket();
    connectCoinbaseWebSocket(commodity);
  }

  const config = marketConfig[commodity];
  if (!config) return;

  try {
    const response = await fetch(`https://api.coinbase.com/api/v3/brokerage/market/products/${config.productId}/ticker?ts=${Date.now()}`, {
      cache: "no-store"
    });
    if (!response.ok) throw new Error("price unavailable");
    const data = await response.json();
    const livePrice = getCoinbasePrice(data);
    if (livePrice) {
      rememberConfirmedLivePrice(commodity, livePrice, "Coinbase live");
      await refreshCoinbaseProductDetails(commodity, livePrice);
      if (runCloseSweep) closeOnlyPaperSweep();
      if (commoditySelect.value === commodity) calculateSignal();
    }
  } catch (error) {
    await refreshSnapshotPrice(commodity);
  }
}

function closeCoinbaseWebSocket() {
  if (activePriceSocketReconnectTimer) {
    window.clearTimeout(activePriceSocketReconnectTimer);
    activePriceSocketReconnectTimer = null;
  }

  if (activePriceSocket) {
    activePriceSocket.onclose = null;
    activePriceSocket.close();
    activePriceSocket = null;
  }

  activePriceSocketCommodity = null;
}

function connectCoinbaseWebSocket(commodity) {
  const config = marketConfig[commodity];

  if (!config || config.productType !== "Coinbase futures contract") {
    closeCoinbaseWebSocket();
    return;
  }

  if (
    activePriceSocket &&
    activePriceSocketCommodity === commodity &&
    [WebSocket.CONNECTING, WebSocket.OPEN].includes(activePriceSocket.readyState)
  ) {
    return;
  }

  closeCoinbaseWebSocket();
  activePriceSocketCommodity = commodity;

  try {
    const socket = new WebSocket(COINBASE_WS_URL);
    activePriceSocket = socket;

    socket.onopen = () => {
      const subscriptions = [
        { type: "subscribe", channel: "ticker", product_ids: [config.productId] },
        { type: "subscribe", channel: "heartbeats", product_ids: [config.productId] }
      ];

      subscriptions.forEach((message) => socket.send(JSON.stringify(message)));
    };

    socket.onmessage = (event) => {
      let data;
      try {
        data = JSON.parse(event.data);
      } catch (error) {
        return;
      }

      const socketPrice = getCoinbaseWebSocketPrice(data);
      if (!socketPrice) return;

      rememberConfirmedLivePrice(commodity, socketPrice, "Coinbase WebSocket");
      refreshCoinbaseProductDetails(commodity, socketPrice);
      closeOnlyPaperSweep();

      if (commoditySelect.value === commodity) calculateSignal();
    };

    socket.onerror = () => {
      refreshCoinbasePrice(commodity);
    };

    socket.onclose = () => {
      if (activePriceSocket !== socket) return;
      activePriceSocket = null;

      if (commoditySelect.value === commodity) {
        if (latestPriceSources.get(commodity) === "Coinbase WebSocket") {
          latestPriceSources.set(commodity, "Coinbase WebSocket stale");
        }
        refreshCoinbasePrice(commodity);
        activePriceSocketReconnectTimer = window.setTimeout(() => {
          connectCoinbaseWebSocket(commodity);
        }, 15000);
      }
    };
  } catch (error) {
    refreshCoinbasePrice(commodity);
  }
}

async function refreshSnapshotPrice(commodity) {
  try {
    const data = await loadSnapshotPrices();
    const snapshot = data?.prices?.[commodity];
    const snapshotPrice = Number(snapshot?.price);

    if (!Number.isFinite(snapshotPrice) || snapshotPrice <= 0) {
      throw new Error("snapshot price unavailable");
    }

    latestPrices.set(commodity, snapshotPrice);
    latestPriceTimes.set(commodity, new Date(snapshot.fetchedAt || data.generatedAt || Date.now()));
    latestPriceSources.set(commodity, snapshot.ok ? "GitHub snapshot" : "Unavailable snapshot");

    const minimumTradeValue = Number(snapshot.minimumTradeValue);
    if (Number.isFinite(minimumTradeValue) && minimumTradeValue > 0) {
      productMinimums.set(commodity, minimumTradeValue);
    }

    if (commoditySelect.value === commodity) calculateSignal();
  } catch (error) {
    if (!latestPrices.has(commodity)) {
      latestPriceTimes.delete(commodity);
      latestPriceSources.delete(commodity);
      if (commoditySelect.value === commodity) calculateSignal();
    }
  }
}

async function refreshCoinbaseProductDetails(commodity, livePrice) {
  if (productMinimums.has(commodity)) return;

  const config = marketConfig[commodity];
  if (!config) return;

  try {
    const response = await fetch(`https://api.coinbase.com/api/v3/brokerage/products/${config.productId}`);
    if (!response.ok) throw new Error("product unavailable");
    const data = await response.json();
    const minimumTradeValue = getCoinbaseMinimumTradeValue(data, livePrice);
    productMinimums.set(commodity, minimumTradeValue);
    if (commoditySelect.value === commodity) calculateSignal();
  } catch (error) {
    productMinimums.set(commodity, livePrice);
  }
}

function refreshSelectedCoinbasePrice() {
  refreshCoinbasePrice(commoditySelect.value);
}

function getOpenPaperTrade(commodity) {
  return openPaperTrades.get(commodity) || null;
}

function getCommodityFromContract(contract) {
  return commodities.find(({ id }) => marketConfig[id]?.ticker === contract)?.id || null;
}

function getTransactionDate(value) {
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function normalizeTransactionEntry(entry) {
  const commodity = entry.commodity || getCommodityFromContract(entry.contract);
  const time = getTransactionDate(entry.time);
  const openedAt = entry.openedAt ? getTransactionDate(entry.openedAt) : null;
  const closedAt = entry.closedAt ? getTransactionDate(entry.closedAt) : null;
  const userEmail = normalizeEmail(entry.userEmail || entry.profileEmail || entry.accountEmail || LEGACY_LEDGER_USER_EMAIL);

  return {
    ...entry,
    commodity,
    commodityName: entry.commodityName || commodities.find(({ id }) => id === commodity)?.name,
    userEmail,
    time,
    openedAt,
    closedAt
  };
}

function isTransactionForCurrentUser(entry) {
  const entryEmail = normalizeEmail(entry.userEmail || LEGACY_LEDGER_USER_EMAIL);
  return entryEmail === getCurrentLedgerEmail()
    || (entryEmail === LEGACY_LEDGER_USER_EMAIL && isCurrentLegacyLedgerOwner());
}

function parseOptionalNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function formatOptionalMoney(value) {
  return Number.isFinite(Number(value)) ? formatMoney(Number(value)) : "-";
}

function formatOptionalNumber(value) {
  return Number.isFinite(Number(value)) ? String(Number(value)) : "-";
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getCommodityName(commodity) {
  return commodities.find(({ id }) => id === commodity)?.name || commodity || "-";
}

function normalizeLiveTradeEntry(entry) {
  const commodity = entry.commodity || getCommodityFromContract(entry.contract) || commoditySelect.value || "oil";
  const time = getTransactionDate(entry.time);

  return {
    id: entry.id || `live-${Date.now()}`,
    time,
    userEmail: normalizeEmail(entry.userEmail || getCurrentLedgerEmail()),
    userName: entry.userName || getCurrentUserProfile()?.name || "",
    commodity,
    commodityName: entry.commodityName || getCommodityName(commodity),
    contract: entry.contract || marketConfig[commodity]?.ticker || "",
    orderId: entry.orderId || "",
    side: entry.side === "short" ? "short" : "long",
    action: entry.action || "OPEN",
    orderType: entry.orderType || "market",
    contracts: parseOptionalNumber(entry.contracts),
    tradeValue: parseOptionalNumber(entry.tradeValue),
    entryPrice: parseOptionalNumber(entry.entryPrice),
    limitPrice: parseOptionalNumber(entry.limitPrice),
    stopPrice: parseOptionalNumber(entry.stopPrice),
    targetPrice: parseOptionalNumber(entry.targetPrice),
    timeInForce: entry.timeInForce || "GTC",
    status: entry.status || "Submitted",
    fees: parseOptionalNumber(entry.fees),
    pnl: parseOptionalNumber(entry.pnl) || 0,
    agent: entry.agent || liveAgentSelectEl?.value || "Manual only",
    channel: entry.channel || liveChannelSelectEl?.value || "Manual",
    notes: entry.notes || ""
  };
}

function loadLiveTradeLedger() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(LIVE_TRADE_LEDGER_KEY) || "[]");
    liveTradeLedger.splice(0, liveTradeLedger.length, ...(Array.isArray(stored) ? stored.map(normalizeLiveTradeEntry) : []));
  } catch (error) {
    liveTradeLedger.splice(0, liveTradeLedger.length);
  }
  renderLiveTradeLedger();
}

function saveLiveTradeLedger() {
  window.localStorage.setItem(LIVE_TRADE_LEDGER_KEY, JSON.stringify(liveTradeLedger));
  if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = `Local live ledger saved ${liveTradeLedger.length} rows`;
}

function getLiveTradeTargetOrExitPrice(trade) {
  const isClosed = String(trade.action || "").toUpperCase().includes("CLOSE");
  const price = isClosed
    ? Number(trade.exitPrice ?? trade.entryPrice ?? trade.limitPrice)
    : Number(trade.targetPrice);
  return Number.isFinite(price) ? formatPrice(price) : UNAVAILABLE_TEXT;
}

function appendLiveTradeDetail(parent, label, value) {
  const item = document.createElement("div");
  const labelEl = document.createElement("span");
  const valueEl = document.createElement("strong");
  labelEl.className = "stat-label";
  labelEl.textContent = label;
  valueEl.textContent = value || "-";
  item.append(labelEl, valueEl);
  parent.append(item);
}

function renderLiveTradeLedger() {
  if (!liveTradeHistoryEl) return;

  renderUserContextWithAvatar(liveUserContextEl, getLiveUserContextText());
  liveTradeHistoryEl.innerHTML = "";
  const scopedTrades = liveTradeLedger.filter((trade) => trade.userEmail === getCurrentLedgerEmail());
  const totalPl = scopedTrades.reduce((total, trade) => total + (Number(trade.pnl) || 0), 0);
  const committed = scopedTrades.reduce((total, trade) => total + (Number(trade.tradeValue) || 0), 0);

  renderPnlWithCapital(liveTotalPlEl, totalPl);
  renderPnlWithCapital(liveFilteredPlEl, totalPl);
  if (liveTradeCountEl) liveTradeCountEl.textContent = `${scopedTrades.length} row${scopedTrades.length === 1 ? "" : "s"}`;
  if (liveTradeSummaryEl) {
    liveTradeSummaryEl.textContent = scopedTrades.length
      ? `Showing ${scopedTrades.length} live trade record${scopedTrades.length === 1 ? "" : "s"} for ${getCurrentUserProfile()?.name || getCurrentLedgerEmail()}. Committed ${formatMoney(committed)}.`
      : "No live trades recorded. This ledger will be separate from paper trade history.";
  }
  if (liveLedgerStatusEl && !liveLedgerStatusEl.textContent.includes("saved")) {
    liveLedgerStatusEl.textContent = "Live ledger local only";
  }

  if (!scopedTrades.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    liveTradeHistoryEl.append(buildQueuedLiveTradeRow());
    cell.colSpan = 10;
    cell.textContent = "No live trades recorded yet. Use the Coinbase mirror entry form above to capture actual trade details.";
    row.append(cell);
    liveTradeHistoryEl.append(row);
    return;
  }

  liveTradeHistoryEl.append(buildQueuedLiveTradeRow());
  scopedTrades.forEach((trade) => {
    const row = document.createElement("tr");
    appendStateCell(row, String(trade.action || "").toUpperCase().includes("CLOSE") ? "C" : "O", "Live trade state");
    [
      formatTradeTime(trade.time),
      trade.action,
      formatSide(trade.side),
      trade.agent,
      trade.contract || "-",
      formatOptionalMoney(trade.entryPrice ?? trade.limitPrice),
      formatOptionalMoney(trade.tradeValue),
      getLiveTradeTargetOrExitPrice(trade),
      formatSignedMoney(Number(trade.pnl) || 0)
    ].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });

    const detailRow = document.createElement("tr");
    detailRow.className = "live-trade-detail";
    const detailCell = document.createElement("td");
    detailCell.colSpan = 10;
    const detailGrid = document.createElement("div");
    detailGrid.className = "transaction-detail-grid live-detail-grid";

    appendLiveTradeDetail(detailGrid, "User", trade.userName || trade.userEmail);
    appendLiveTradeDetail(detailGrid, "Commodity", trade.commodityName);
    appendLiveTradeDetail(detailGrid, "Order ID", trade.orderId);
    appendLiveTradeDetail(detailGrid, "Order type", trade.orderType);
    appendLiveTradeDetail(detailGrid, "Contracts", formatOptionalNumber(trade.contracts));
    appendLiveTradeDetail(detailGrid, "Entry price", formatOptionalMoney(trade.entryPrice));
    appendLiveTradeDetail(detailGrid, "Limit price", formatOptionalMoney(trade.limitPrice));
    appendLiveTradeDetail(detailGrid, "Stop price", formatOptionalMoney(trade.stopPrice));
    appendLiveTradeDetail(detailGrid, "Target price", formatOptionalMoney(trade.targetPrice));
    appendLiveTradeDetail(detailGrid, "Time in force", trade.timeInForce);
    appendLiveTradeDetail(detailGrid, "Status", trade.status);
    appendLiveTradeDetail(detailGrid, "Fees", formatOptionalMoney(trade.fees));
    appendLiveTradeDetail(detailGrid, "Channel", trade.channel);
    appendLiveTradeDetail(detailGrid, "Notes", trade.notes);

    detailCell.append(detailGrid);
    detailRow.append(detailCell);
    liveTradeHistoryEl.append(row, detailRow);
  });
}

function addLiveTradeFromForm(event) {
  event.preventDefault();
  const formData = new FormData(liveTradeFormEl);
  const commodity = formData.get("commodity") || commoditySelect.value || "oil";
  const trade = normalizeLiveTradeEntry({
    id: `live-${Date.now()}`,
    time: new Date().toISOString(),
    userEmail: getCurrentLedgerEmail(),
    userName: getCurrentUserProfile()?.name || "",
    commodity,
    commodityName: getCommodityName(commodity),
    contract: String(formData.get("contract") || marketConfig[commodity]?.ticker || "").trim(),
    orderId: String(formData.get("orderId") || "").trim(),
    side: formData.get("side"),
    action: formData.get("action"),
    orderType: formData.get("orderType"),
    contracts: formData.get("contracts"),
    tradeValue: formData.get("tradeValue"),
    entryPrice: formData.get("entryPrice"),
    limitPrice: formData.get("limitPrice"),
    stopPrice: formData.get("stopPrice"),
    targetPrice: formData.get("targetPrice"),
    timeInForce: formData.get("timeInForce"),
    status: formData.get("status"),
    fees: formData.get("fees"),
    pnl: formData.get("pnl"),
    agent: liveAgentSelectEl?.value || "Manual only",
    channel: liveChannelSelectEl?.value || "Manual",
    notes: String(formData.get("notes") || "").trim()
  });

  liveTradeLedger.unshift(trade);
  saveLiveTradeLedger();
  renderLiveTradeLedger();
  liveTradeFormEl.reset();
  const contractInput = document.querySelector("#live-trade-contract");
  if (contractInput) contractInput.value = marketConfig[commoditySelect.value]?.ticker || "";
}

function getUserScopedTransactions() {
  const source = transactionHistory.length ? transactionHistory : getBundledTransactionEntries();
  return source.filter((entry) => !entry.commodity || userCanTradeCommodity(entry.commodity));
}

function getBundledTransactionEntries() {
  const bundledLedger = window.COMHEDGE_BUNDLED_TRANSACTIONS;
  const bundledEntries = Array.isArray(bundledLedger?.transactions) ? bundledLedger.transactions : [];
  if (!bundledEntries.length) return [];
  return bundledEntries
    .map(normalizeTransactionEntry)
    .filter(Boolean)
    .map((entry) => ({
      ...entry,
      sharedKey: entry.sharedKey || getTransactionKey(entry),
    }))
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));
}

function getDisplayTransactionSource() {
  return getUserScopedTransactions().slice();
}

async function loadBundledTransactionHistory() {
  const bundledLedger = window.COMHEDGE_BUNDLED_TRANSACTIONS;
  const bundledEntries = Array.isArray(bundledLedger?.transactions) ? bundledLedger.transactions : [];
  if (bundledEntries.length) {
    const before = transactionHistory.length;
    const added = mergeTransactionHistory(bundledEntries, { persist: false });
    if (!before && !added) replaceTransactionHistory(bundledEntries);
    reconcilePaperStateFromHistory();
    sharedHistoryStatusEl.textContent = `Local ledger loaded ${transactionHistory.length} row${transactionHistory.length === 1 ? "" : "s"}`;
    calculateSignal();
    return added > 0 || !before;
  }

  if (transactionHistory.length) return false;

  try {
    sharedHistoryStatusEl.textContent = "Loading local ledger";
    const response = await fetch(`./transactions.json?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("local ledger unavailable");

    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    if (!entries.length) return false;

    replaceTransactionHistory(entries);
    reconcilePaperStateFromHistory();
    sharedHistoryStatusEl.textContent = `Local ledger loaded ${entries.length} row${entries.length === 1 ? "" : "s"}`;
    calculateSignal();
    return true;
  } catch (error) {
    sharedHistoryStatusEl.textContent = "Local ledger unavailable";
    return false;
  }
}

function getTransactionKey(entry) {
  if (entry.sharedKey) return entry.sharedKey;

  return [
    entry.tradeId || entry.id || "trade",
    entry.action || "action",
    entry.contract || "contract",
    getTransactionDate(entry.time).toISOString(),
    Number(entry.price || 0).toFixed(4)
  ].join("|");
}

function sortTransactionHistory() {
  transactionHistory.sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));
}

function resetLocalTradeState() {
  transactionHistory.length = 0;
  openPaperTrades.clear();
  paperBaseEquity = PAPER_START_EQUITY;
  paperEquity = paperBaseEquity;
  paperRiskPct = PAPER_DEFAULT_RISK_PCT;
  martingaleStep = 1;
  nextTransactionId = 1;
  expandedTransactionId = null;
}

function replaceTransactionHistory(entries, options = {}) {
  const preserveOpenTrades = options.preserveOpenTrades !== false;
  const localOpenTrades = preserveOpenTrades ? new Map(openPaperTrades) : new Map();
  resetLocalTradeState();
  mergeTransactionHistory(entries, { persist: false });
  rebuildPaperStateFromHistory();

  localOpenTrades.forEach((trade, commodity) => {
    if (!trade || hasClosingTransactionForTrade(trade)) return;
    const alreadyActive = Array.from(openPaperTrades.values()).some((activeTrade) => {
      if (!activeTrade) return false;
      const sameTradeId = activeTrade.id && trade.id && String(activeTrade.id) === String(trade.id);
      const sameLifecycle = activeTrade.commodity === trade.commodity
        && activeTrade.contract === trade.contract
        && activeTrade.side === trade.side
        && Number(activeTrade.martingaleStep || activeTrade.step || 1) === Number(trade.martingaleStep || trade.step || 1);
      return sameTradeId || sameLifecycle;
    });

    if (!alreadyActive && commodity) {
      openPaperTrades.set(commodity, trade);
    }
  });

  const maxId = transactionHistory.reduce((max, entry) => (
    Number.isInteger(entry.id) ? Math.max(max, entry.id) : max
  ), 0);
  nextTransactionId = maxId + 1;
  savePaperState();
}

function mergeTransactionHistory(entries, options = {}) {
  const persist = options.persist !== false;
  const existing = new Map(transactionHistory.map((entry) => [getTransactionKey(entry), entry]));
  let added = 0;

  entries.map(normalizeTransactionEntry).forEach((entry) => {
    const sharedKey = getTransactionKey(entry);
    if (existing.has(sharedKey)) return;

    transactionHistory.push({ ...entry, sharedKey });
    existing.set(sharedKey, entry);
    added += 1;
  });

  if (added) {
    sortTransactionHistory();
    if (persist) savePaperState();
  }

  return added;
}

function getMergedTransactionEntries(incomingEntries = []) {
  const byKey = new Map();

  [...incomingEntries, ...transactionHistory].map(normalizeTransactionEntry).forEach((entry) => {
    const sharedKey = getTransactionKey(entry);
    byKey.set(sharedKey, { ...entry, sharedKey });
  });

  return Array.from(byKey.values())
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));
}

function getTradeLifecycleKey(entry) {
  return [
    entry.userEmail || LEGACY_LEDGER_USER_EMAIL,
    entry.commodity || "commodity",
    entry.contract || "contract",
    entry.side || "side",
    entry.step || "step"
  ].join("|");
}

function getTransactionConviction(entry) {
  const stored = Number(entry?.conviction);
  if (Number.isFinite(stored) && stored > 0) return stored;

  const noteMatch = String(entry?.note || "").match(/opened at\s+(\d+(?:\.\d+)?)\s+conviction/i);
  if (noteMatch) {
    const parsed = Number(noteMatch[1]);
    if (Number.isFinite(parsed)) return parsed;
  }

  return 0;
}

function tradeFromOpeningEntry(entry) {
  const config = marketConfig[entry.commodity];
  const contracts = Number(entry.contracts) > 0 ? entry.contracts : 1;
  const contractMultiplier = Number(entry.contractMultiplier) > 0 ? entry.contractMultiplier : getContractMultiplier(config);
  const openFee = Number(entry.openFee) || getEstimatedFees(config, contracts, 1);
  const estimatedExitFee = Number(entry.estimatedExitFee) || getEstimatedFees(config, contracts, 1);

  return {
    id: entry.tradeId || entry.id,
    commodity: entry.commodity,
    commodityName: entry.commodityName,
    contract: entry.contract,
    side: entry.side,
    martingaleStep: entry.step || 1,
    entryPrice: Number(entry.entryPrice ?? entry.price),
    targetEntryPrice: Number(entry.targetEntryPrice ?? entry.entryPrice ?? entry.price),
    targetPrice: Number(entry.targetPrice),
    stopPrice: Number(entry.stopPrice),
    contractMultiplier,
    contracts,
    marginRequirement: Number(entry.marginRequirement),
    notionalValue: Number(entry.notionalValue),
    capital: Number(entry.capital) || 0,
    quantity: contracts,
    openFee,
    estimatedExitFee,
    totalEstimatedFees: Number(entry.totalEstimatedFees) || openFee + estimatedExitFee,
    feePerContractSide: Number(entry.feePerContractSide) || getFeePerContractSide(config),
    feeLabel: entry.feeLabel,
    conviction: getTransactionConviction(entry),
    openedAt: entry.openedAt ? new Date(entry.openedAt) : new Date(entry.time)
  };
}

function rebuildPaperStateFromHistory() {
  const activeTrades = new Map();
  const chronological = getUserScopedTransactions().sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time));
  let latestClosed = null;

  chronological.forEach((entry) => {
    const key = getTradeLifecycleKey(entry);
    if (isOpeningTransaction(entry)) {
      activeTrades.set(key, tradeFromOpeningEntry(entry));
      return;
    }

    if (isClosingTransaction(entry)) {
      activeTrades.delete(key);
      latestClosed = entry;
    }
  });

  openPaperTrades.clear();
  activeTrades.forEach((trade) => {
    if (trade.commodity) openPaperTrades.set(trade.commodity, trade);
  });

  const closedEntries = getUserScopedTransactions().filter(isClosingTransaction);
  paperEquity = paperBaseEquity + closedEntries.reduce((total, entry) => total + getDisplayPnl(entry), 0);

  martingaleStep = latestClosed ? getNextMartingaleStepFromHistory() : 1;
}

function hasClosingTransactionForTrade(trade) {
  if (!trade) return false;
  const tradeId = String(trade.id || "");
  const openedAt = getTransactionDate(trade.openedAt || trade.time);

  return getUserScopedTransactions().some((entry) => {
    if (!isClosingTransaction(entry)) return false;
    const sameTradeId = tradeId && String(entry.tradeId || entry.id || "") === tradeId;
    const sameLifecycle = entry.commodity === trade.commodity
      && entry.contract === trade.contract
      && entry.side === trade.side
      && Number(entry.step || 1) === Number(trade.martingaleStep || trade.step || 1);
    if (!sameTradeId && !sameLifecycle) return false;

    const closedAt = getTransactionDate(entry.closedAt || entry.time);
    return !Number.isNaN(closedAt.getTime())
      && (Number.isNaN(openedAt.getTime()) || closedAt >= openedAt);
  });
}

function reconcilePaperStateFromHistory() {
  const localOpenTrades = new Map(openPaperTrades);
  rebuildPaperStateFromHistory();

  localOpenTrades.forEach((trade, commodity) => {
    if (!trade || hasClosingTransactionForTrade(trade)) return;
    const alreadyActive = Array.from(openPaperTrades.values()).some((activeTrade) => {
      if (!activeTrade) return false;
      const sameTradeId = activeTrade.id && trade.id && String(activeTrade.id) === String(trade.id);
      const sameLifecycle = activeTrade.commodity === trade.commodity
        && activeTrade.contract === trade.contract
        && activeTrade.side === trade.side
        && Number(activeTrade.martingaleStep || activeTrade.step || 1) === Number(trade.martingaleStep || trade.step || 1);
      return sameTradeId || sameLifecycle;
    });

    if (!alreadyActive && commodity) {
      openPaperTrades.set(commodity, trade);
    }
  });

  savePaperState();
}

function getTradePnl(trade, exitPrice) {
  return getTradeNetPnl(trade, exitPrice);
}

function savePaperState() {
  try {
    const state = {
      paperEquity,
      paperBaseEquity,
      paperRiskPct,
      martingaleStep,
      nextTransactionId,
      openPaperTrades: Array.from(openPaperTrades.entries()),
      transactionHistory
    };
    window.localStorage.setItem(PAPER_STATE_KEY, JSON.stringify(state));
  } catch (error) {
    // Keep paper trading functional even if browser storage is unavailable.
  }
}

function syncPaperInputs() {
  paperEquityInputEl.value = String(Math.round(paperBaseEquity * 100) / 100);
  paperRiskInputEl.value = String(Math.round(paperRiskPct * 100) / 100);
}

function updatePaperEquitySetting() {
  const value = Number(paperEquityInputEl.value);
  if (!Number.isFinite(value) || value < 0) {
    paperEquityInputEl.value = String(paperBaseEquity);
    return;
  }

  const closedPnl = getClosedPaperTrades().reduce((total, entry) => total + getDisplayPnl(entry), 0);
  paperBaseEquity = value;
  paperEquity = paperBaseEquity + closedPnl;
  saveCurrentUserPaperSettings();
  savePaperState();
  saveSharedSettings();
  calculateSignal();
}

function updatePaperRiskSetting() {
  const value = Number(paperRiskInputEl.value);
  if (!Number.isFinite(value) || value <= 0) {
    paperRiskInputEl.value = String(paperRiskPct);
    return;
  }

  paperRiskPct = clamp(value, 0.1, 25);
  paperRiskInputEl.value = String(Math.round(paperRiskPct * 100) / 100);
  saveCurrentUserPaperSettings();
  savePaperState();
  saveSharedSettings();
  calculateSignal();
}

function loadPaperState() {
  try {
    const stored = window.localStorage.getItem(PAPER_STATE_KEY);
    if (!stored) return;

    const state = JSON.parse(stored);
    if (Number.isFinite(state.paperBaseEquity)) paperBaseEquity = Math.max(0, Number(state.paperBaseEquity));
    else if (Number.isFinite(state.paperEquity)) paperBaseEquity = Math.max(0, Number(state.paperEquity));
    if (Number.isFinite(state.paperEquity)) paperEquity = state.paperEquity;
    if (Number.isFinite(state.paperRiskPct)) paperRiskPct = clamp(Number(state.paperRiskPct), 0.1, 25);
    if (Number.isInteger(state.martingaleStep)) {
      martingaleStep = Math.max(1, Math.min(getCurrentMartingaleMaxStep(), state.martingaleStep));
    }
    if (Number.isInteger(state.nextTransactionId)) nextTransactionId = state.nextTransactionId;
    if (Array.isArray(state.openPaperTrades)) {
      state.openPaperTrades.forEach(([commodity, trade]) => {
        const config = marketConfig[commodity];
        const contracts = Number(trade.contracts) > 0 ? trade.contracts : Math.max(1, Math.round(Number(trade.quantity) || 1));
        const contractMultiplier = Number(trade.contractMultiplier) > 0 ? trade.contractMultiplier : getContractMultiplier(config);
        const openFee = Number(trade.openFee) || getEstimatedFees(config, contracts, 1);
        openPaperTrades.set(commodity, {
          ...trade,
          contracts,
          contractMultiplier,
          openFee,
          estimatedExitFee: Number(trade.estimatedExitFee) || getEstimatedFees(config, contracts, 1),
          openedAt: new Date(trade.openedAt)
        });
      });
    }
    if (Array.isArray(state.transactionHistory)) {
      mergeTransactionHistory(state.transactionHistory);
    }
  } catch (error) {
    window.localStorage.removeItem(PAPER_STATE_KEY);
  }
}

function getSharedHistoryPayload() {
  sortTransactionHistory();

  return {
    generatedAt: new Date().toISOString(),
    source: "github-master-paper-trading-ledger",
    transactions: transactionHistory
  };
}

function downloadSharedHistory() {
  const payload = JSON.stringify(getSharedHistoryPayload(), null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "transactions.json";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  sharedHistoryStatusEl.textContent = `${transactionHistory.length} rows exported for GitHub`;
}

function getHistoryApiUrl() {
  return DEFAULT_HISTORY_API_URL;
}

function hasHistoryBackend() {
  return Boolean(getHistoryApiUrl());
}

function initializeHistoryApiControls() {
  backendHistoryReady = true;
  sharedHistoryStatusEl.textContent = "Backend auto-sync ready";
  setCoinbaseSandboxEnabled(true);
}

function getMasterHistoryUrl() {
  return getHistoryApiUrl();
}

function isCoinbaseSandboxEnabled() {
  return window.localStorage.getItem(COINBASE_SANDBOX_KEY) !== "false";
}

function setCoinbaseSandboxEnabled(enabled) {
  const sandboxEnabled = true;
  window.localStorage.setItem(COINBASE_SANDBOX_KEY, String(sandboxEnabled));
  coinbaseSandboxEnabledEl.checked = sandboxEnabled;
  coinbaseSandboxEnabledEl.disabled = true;
  coinbaseSandboxStatusEl.textContent = "Sandbox armed";
}

function getCoinbaseSandboxOrderUrl() {
  return `${getHistoryApiUrl()}/coinbase/sandbox/orders`;
}

function getSharedSettingsUrl() {
  return `${getHistoryApiUrl()}/settings`;
}

function getCoinbaseOrderId(orderResult) {
  return orderResult?.response?.success_response?.order_id
    || orderResult?.response?.order_id
    || orderResult?.response?.orderId
    || "-";
}

function getCoinbaseReturnedProduct(orderResult) {
  return orderResult?.response?.success_response?.product_id
    || orderResult?.response?.product_id
    || orderResult?.request?.product_id
    || "-";
}

const COINBASE_SANDBOX_ORDER_TIMEOUT_MS = 1500;

function timeoutAfter(ms, message) {
  return new Promise((_, reject) => {
    window.setTimeout(() => reject(new Error(message)), ms);
  });
}

function submitCoinbaseSandboxOrderWithTimeout(trade, side, intent) {
  return Promise.race([
    submitCoinbaseSandboxOrder(trade, side, intent),
    timeoutAfter(COINBASE_SANDBOX_ORDER_TIMEOUT_MS, `Coinbase sandbox ${intent} timed out`)
  ]);
}

async function submitCoinbaseSandboxOrder(trade, side, intent) {
  if (!isCoinbaseSandboxEnabled()) return null;
  if (!hasHistoryBackend()) throw new Error("Backend required for Coinbase sandbox");

  coinbaseSandboxStatusEl.textContent = `Sending ${intent}`;
  const response = await fetch(getCoinbaseSandboxOrderUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      intent,
      productId: trade.contract,
      side,
      contracts: trade.contracts,
      price: trade.entryPrice,
      targetPrice: trade.targetPrice,
      stopPrice: trade.stopPrice,
      clientOrderId: `atlas-${intent}-${trade.id}-${Date.now()}`
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data?.error || "Coinbase sandbox order failed");

  coinbaseSandboxStatusEl.textContent = `Sandbox ${intent} sent`;
  return {
    sandbox: true,
    intent,
    orderId: getCoinbaseOrderId(data),
    productId: trade.contract,
    submittedProductId: trade.contract,
    returnedProductId: getCoinbaseReturnedProduct(data),
    side,
    sentAt: new Date().toISOString(),
    request: data.request,
    response: data.response
  };
}

async function loadSharedSettings(manual = false) {
  if (!hasHistoryBackend()) return false;
  if (!manual && isBackendBackoffActive(nextBackendSettingsSyncAt)) return false;
  if (backendSettingsSyncInFlight) return false;
  backendSettingsSyncInFlight = true;

  try {
    const response = await fetch(`${getSharedSettingsUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("settings unavailable");

    const settings = await response.json();
    const usersChanged = mergeSharedUsers(settings.users);
    const profilesChanged = mergeSharedUserProfiles(settings.userProfiles);
    if (usersChanged || profilesChanged) {
      applyCurrentUserPaperSettings();
      renderUserManagement();
    }
    setCoinbaseSandboxEnabled(true);
    calculateSignal();
    nextBackendSettingsSyncAt = 0;
    return true;
  } catch (error) {
    nextBackendSettingsSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    if (manual) coinbaseSandboxStatusEl.textContent = "Settings sync failed";
    return false;
  } finally {
    backendSettingsSyncInFlight = false;
  }
}

async function saveSharedSettings() {
  if (!hasHistoryBackend()) {
    coinbaseSandboxStatusEl.textContent = "Backend required";
    return false;
  }

  try {
    coinbaseSandboxStatusEl.textContent = "Saving setting";
    const response = await fetch(getSharedSettingsUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coinbaseSandboxEnabled: isCoinbaseSandboxEnabled(),
        users: getSharedUsersPayload(),
        userProfiles: getSharedUserProfilesPayload()
      })
    });
    if (!response.ok) throw new Error("settings save failed");

    const data = await response.json();
    setCoinbaseSandboxEnabled(true);
    return true;
  } catch (error) {
    nextBackendSettingsSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    coinbaseSandboxStatusEl.textContent = "Settings save failed";
    return false;
  }
}

function getAdvisoryHistoryUrl() {
  return `${getHistoryApiUrl()}/advisories`;
}

function mergeAdvisoryHistory(entries = []) {
  const byKey = new Map(advisoryHistory.map((entry) => [entry.snapshotKey, entry]));

  entries.forEach((entry) => {
    const price = Number(entry.price);
    const conviction = Number(entry.conviction);
    if (!entry.snapshotKey || !Number.isFinite(price) || !Number.isFinite(conviction)) return;
    byKey.set(entry.snapshotKey, {
      ...entry,
      price,
      conviction,
      bounded: Number(entry.bounded) || 0
    });
  });

  advisoryHistory.splice(
    0,
    advisoryHistory.length,
    ...Array.from(byKey.values()).sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0))
  );
}

async function loadSharedAdvisoryHistory(manual = false) {
  if (!hasHistoryBackend()) {
    advisoryHistoryStatusEl.textContent = "Backend required";
    renderAdvisoryChart();
    return false;
  }
  if (!manual && isBackendBackoffActive(nextBackendAdvisorySyncAt)) return false;
  if (backendAdvisorySyncInFlight) return false;
  backendAdvisorySyncInFlight = true;

  try {
    advisoryHistoryStatusEl.textContent = "Syncing advisory chart";
    const response = await fetch(`${getAdvisoryHistoryUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("advisory history unavailable");

    const data = await response.json();
    mergeAdvisoryHistory(Array.isArray(data?.snapshots) ? data.snapshots : []);
    advisoryHistoryStatusEl.textContent = `Chart synced ${advisoryHistory.length} sample${advisoryHistory.length === 1 ? "" : "s"}`;
    renderAdvisoryChart();
    nextBackendAdvisorySyncAt = 0;
    return true;
  } catch (error) {
    nextBackendAdvisorySyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    advisoryHistoryStatusEl.textContent = advisoryHistory.length
      ? `Chart using ${advisoryHistory.length} local sample${advisoryHistory.length === 1 ? "" : "s"}; ${getBackendBackoffText(nextBackendAdvisorySyncAt)}`
      : manual ? "Chart sync failed" : "Chart backend offline";
    renderAdvisoryChart();
    return false;
  } finally {
    backendAdvisorySyncInFlight = false;
  }
}

async function saveSharedAdvisorySnapshots(snapshots) {
  if (!hasHistoryBackend() || !snapshots.length) return false;

  try {
    advisoryHistoryStatusEl.textContent = "Saving advisory sample";
    const response = await fetch(getAdvisoryHistoryUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ snapshots })
    });
    if (!response.ok) throw new Error("advisory save failed");

    const data = await response.json();
    mergeAdvisoryHistory(Array.isArray(data?.snapshots) ? data.snapshots : snapshots);
    advisoryHistoryStatusEl.textContent = `Chart saved ${advisoryHistory.length} samples`;
    renderAdvisoryChart();
    return true;
  } catch (error) {
    nextBackendAdvisorySyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    advisoryHistoryStatusEl.textContent = "Chart save failed";
    return false;
  }
}

function getAdvisorySnapshotKey(commodity, horizon, time) {
  const minute = Math.floor(new Date(time).getTime() / ADVISORY_CAPTURE_MS);
  return `${commodity}|${horizon}|${minute}`;
}

function buildAdvisorySnapshot(commodity, horizon, baseSignals, price, priceSource) {
  const signals = { ...baseSignals, horizon: horizonWeight[horizon] };
  const signal = scoreCommodity(commodity, signals);
  const time = new Date();

  return {
    snapshotKey: getAdvisorySnapshotKey(commodity, horizon, time),
    time: time.toISOString(),
    commodity,
    commodityName: commodities.find(({ id }) => id === commodity)?.name || commodity,
    horizon,
    price,
    priceSource,
    bounded: signal.bounded,
    conviction: signal.conviction,
    tone: signal.tone,
    label: signal.label,
    action: signal.action,
    primaryModel: primaryModelId,
    primaryModelName: getModelById(primaryModelId).name,
    secondOpinionModel: secondaryModelId,
    secondOpinionModelName: getModelById(secondaryModelId).name
  };
}

function maybeRecordAdvisorySnapshot(commodity, baseSignals, tradePlan) {
  if (!tradePlan.priceReady || !hasHistoryBackend()) return;

  const minute = Math.floor(Date.now() / ADVISORY_CAPTURE_MS);
  const batchKey = `${commodity}|${minute}`;
  const savedBatchKey = window.localStorage.getItem(ADVISORY_SNAPSHOT_KEY);
  if (batchKey === lastAdvisorySnapshotKey || batchKey === savedBatchKey) return;
  lastAdvisorySnapshotKey = batchKey;
  window.localStorage.setItem(ADVISORY_SNAPSHOT_KEY, batchKey);

  const snapshots = ADVISORY_HORIZONS.map((horizon) => (
    buildAdvisorySnapshot(commodity, horizon, baseSignals, tradePlan.livePrice, tradePlan.priceSource)
  ));
  mergeAdvisoryHistory(snapshots);
  renderAdvisoryChart();
  saveSharedAdvisorySnapshots(snapshots);
}

function getAdvisoryPeriodStart() {
  const ms = ADVISORY_PERIODS[advisoryPeriodFilter] || ADVISORY_PERIODS.hour;
  return Date.now() - ms;
}

function getFilteredAdvisorySamples() {
  const start = getAdvisoryPeriodStart();
  const snapshotSamples = advisoryHistory.filter((entry) => (
    entry.commodity === advisoryCommodityFilter
    && entry.horizon === advisoryHorizonFilter
    && new Date(entry.time || 0).getTime() >= start
  ));
  if (advisoryHorizonFilter !== "intraday") return snapshotSamples;

  const byKey = new Map(snapshotSamples.map((entry) => [entry.snapshotKey, entry]));
  transactionHistory
    .filter((entry) => (
      isOpeningTransaction(entry)
      && entry.commodity === advisoryCommodityFilter
      && getTransactionDate(entry.time).getTime() >= start
    ))
    .forEach((entry) => {
      const side = entry.side;
      const tone = side === "short" ? "short" : side === "long" ? "long" : "wait";
      const price = Number(entry.entryPrice ?? entry.price);
      const conviction = getTransactionConviction(entry);
      if (!Number.isFinite(price)) return;

      byKey.set(`paper|${entry.sharedKey || getTransactionKey(entry)}`, {
        snapshotKey: `paper|${entry.sharedKey || getTransactionKey(entry)}`,
        time: getTransactionDate(entry.time).toISOString(),
        commodity: entry.commodity,
        commodityName: entry.commodityName,
        horizon: "intraday",
        price,
        priceSource: "Paper trade ledger",
        bounded: conviction,
        conviction,
        tone,
        label: `Paper ${tone}`,
        action: entry.action
      });
    });

  return Array.from(byKey.values()).sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
}

function getPaperTradeAdvisoryEvaluations() {
  if (advisoryHorizonFilter !== "intraday") return [];

  const start = getAdvisoryPeriodStart();

  return transactionHistory
    .filter((entry) => (
      isClosingTransaction(entry)
      && entry.commodity === advisoryCommodityFilter
      && getTransactionDate(entry.time).getTime() >= start
    ))
    .map((entry) => {
      const openingEntry = getOpeningEntry(entry);
      const detail = getEntryDetail(entry);
      const side = entry.side || openingEntry?.side;
      const tone = side === "short" ? "short" : side === "long" ? "long" : "wait";
      const startPrice = Number(detail.entryPrice);
      const endPrice = Number(detail.exitPrice);
      const conviction = getTransactionConviction(openingEntry) || getTransactionConviction(entry);
      const netPnl = getDisplayPnl(entry);

      if (!Number.isFinite(startPrice) || !Number.isFinite(endPrice)) return null;

      return {
        entry: {
          time: openingEntry?.time || detail.openedAt || entry.openedAt || entry.time,
          label: `Paper ${tone}`,
          tone,
          conviction
        },
        future: {
          time: entry.closedAt || entry.time,
          price: endPrice
        },
        startPrice,
        endPrice,
        move: endPrice - startPrice,
        correct: netPnl > 0,
        qualified: conviction >= advisoryScoreThreshold,
        source: "paper-trade",
        pnl: netPnl
      };
    })
    .filter(Boolean);
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return "-";
  return `${Math.round(value)}%`;
}

function loadAdvisoryScoreThreshold() {
  const rawStored = window.localStorage.getItem(ADVISORY_SCORE_THRESHOLD_KEY);
  const stored = Number(rawStored);
  // Older builds wrote the default 60 to localStorage even when the user had not
  // intentionally chosen a trading threshold. Treat that value as "use Karpathy"
  // so the paper trader does not silently wait behind an obsolete default.
  advisoryScoreThresholdIsManual = rawStored !== null && stored !== DEFAULT_ADVISORY_SCORE_THRESHOLD;
  advisoryScoreThreshold = Number.isFinite(stored)
    ? clamp(Math.round(stored), 0, 100)
    : DEFAULT_ADVISORY_SCORE_THRESHOLD;
  advisoryScoreThresholdEl.value = String(advisoryScoreThreshold);
  accuracyThresholdDisplayEl.textContent = `${advisoryScoreThreshold}+`;
}

function saveAdvisoryScoreThreshold() {
  const value = Number(advisoryScoreThresholdEl.value);
  advisoryScoreThresholdIsManual = true;
  advisoryScoreThreshold = Number.isFinite(value)
    ? clamp(Math.round(value), 0, 100)
    : DEFAULT_ADVISORY_SCORE_THRESHOLD;
  window.localStorage.setItem(ADVISORY_SCORE_THRESHOLD_KEY, String(advisoryScoreThreshold));
  advisoryScoreThresholdEl.value = String(advisoryScoreThreshold);
  accuracyThresholdDisplayEl.textContent = `${advisoryScoreThreshold}+`;
  if (lastPrimarySignal && lastTradePlan) {
    calculateSignal();
  }
  renderAdvisoryChart();
}

function getAdvisoryEvaluationWindow() {
  return ADVISORY_EVALUATION_WINDOWS[advisoryHorizonFilter] || ADVISORY_EVALUATION_WINDOWS.intraday;
}

function getCorrectnessThreshold(price) {
  return Math.max(0.05, Math.abs(Number(price) || 0) * 0.0005);
}

function evaluateAdvisorySamples(samples) {
  const sorted = [...samples].sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
  const evaluationWindow = getAdvisoryEvaluationWindow();

  return sorted.map((entry, index) => {
    const entryTime = new Date(entry.time || 0).getTime();
    const future = sorted.find((candidate, candidateIndex) => (
      candidateIndex > index
      && new Date(candidate.time || 0).getTime() - entryTime >= evaluationWindow
    )) || sorted[index + 1];

    if (!future) return null;

    const startPrice = Number(entry.price);
    const endPrice = Number(future.price);
    if (!Number.isFinite(startPrice) || !Number.isFinite(endPrice)) return null;

    const move = endPrice - startPrice;
    const threshold = getCorrectnessThreshold(startPrice);
    let correct = false;

    if (entry.tone === "long") correct = move > threshold;
    else if (entry.tone === "short") correct = move < -threshold;
    else correct = Math.abs(move) <= threshold;

    return {
      entry,
      future,
      startPrice,
      endPrice,
      move,
      correct,
      qualified: Number(entry.conviction) >= advisoryScoreThreshold
    };
  }).filter(Boolean);
}

function summarizeEvaluations(evaluations, predicate = () => true) {
  const selected = evaluations.filter(predicate);
  const correct = selected.filter((item) => item.correct).length;
  const averageMove = selected.length
    ? selected.reduce((total, item) => total + item.move, 0) / selected.length
    : 0;

  return {
    count: selected.length,
    correct,
    accuracy: selected.length ? (correct / selected.length) * 100 : NaN,
    averageMove
  };
}

function renderAccuracyBars(evaluations) {
  const tones = [
    { id: "long", label: "Long" },
    { id: "wait", label: "Wait" },
    { id: "short", label: "Short" }
  ];

  accuracyBarsEl.innerHTML = "";
  tones.forEach(({ id, label }) => {
    const summary = summarizeEvaluations(evaluations, (item) => item.entry.tone === id);
    const row = document.createElement("div");
    const text = document.createElement("span");
    const track = document.createElement("div");
    const fill = document.createElement("i");
    const value = document.createElement("strong");
    const width = Number.isFinite(summary.accuracy) ? Math.max(4, summary.accuracy) : 0;

    row.className = "accuracy-bar-row";
    row.dataset.tone = id;
    text.textContent = label;
    track.className = "accuracy-bar-track";
    fill.style.width = `${width}%`;
    value.textContent = summary.count ? `${formatPercent(summary.accuracy)} / ${summary.count}` : "No calls";
    track.append(fill);
    row.append(text, track, value);
    accuracyBarsEl.append(row);
  });
}

function renderAccuracyOutcomes(evaluations) {
  accuracyOutcomesEl.innerHTML = "";
  const recentEvaluations = evaluations
    .filter((item) => item && item.entry && Number.isFinite(Number(item.startPrice)) && Number.isFinite(Number(item.endPrice)))
    .slice(-12)
    .reverse();

  if (!recentEvaluations.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.textContent = advisoryHorizonFilter === "intraday"
      ? "No evaluated outcomes in this window. Use Week or Month to include older paper trade outcomes."
      : "No evaluated outcomes yet. More snapshots are needed after each advisory.";
    row.append(cell);
    accuracyOutcomesEl.append(row);
    return;
  }

  recentEvaluations.forEach((item) => {
    const row = document.createElement("tr");
    row.dataset.result = item.correct ? "correct" : "wrong";
    [
      formatTradeTime(item.entry.time),
      item.entry.label || item.entry.tone,
      `${Math.round(Number(item.entry.conviction) || 0)}${item.qualified ? " qualified" : ""}`,
      formatPrice(item.startPrice),
      `${formatPrice(item.endPrice)} (${item.move >= 0 ? "+" : ""}${formatPrice(item.move)})`,
      item.correct ? "Correct" : "Wrong"
    ].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    accuracyOutcomesEl.append(row);
  });
}

function renderAdvisoryAccuracy(samples) {
  const evaluations = [
    ...evaluateAdvisorySamples(samples),
    ...getPaperTradeAdvisoryEvaluations()
  ].sort((a, b) => new Date(a.entry.time || 0) - new Date(b.entry.time || 0));
  const allSummary = summarizeEvaluations(evaluations);
  const qualifiedSummary = summarizeEvaluations(evaluations, (item) => item.qualified);
  const averageAbsMove = evaluations.length
    ? evaluations.reduce((total, item) => total + Math.abs(item.move), 0) / evaluations.length
    : NaN;
  const windowMinutes = Math.round(getAdvisoryEvaluationWindow() / 60000);
  const sampleFloor = 10;
  const isReady = qualifiedSummary.count >= sampleFloor && qualifiedSummary.accuracy >= 60;

  accuracyVerdictCardEl.dataset.ready = String(isReady);
  accuracyThresholdDisplayEl.textContent = `${advisoryScoreThreshold}+`;
  accuracyVerdictEl.textContent = qualifiedSummary.count < sampleFloor
    ? "Needs more calls"
    : isReady
      ? "Passing"
      : "Below 60%";
  accuracyVerdictCopyEl.textContent = qualifiedSummary.count < sampleFloor
    ? `Need ${sampleFloor - qualifiedSummary.count} more evaluated calls with score ${advisoryScoreThreshold}+.`
    : isReady
      ? "Qualified calls are above the 60% accuracy target."
      : "Qualified calls are not reliable enough yet.";
  accuracyHighConvictionEl.textContent = formatPercent(qualifiedSummary.accuracy);
  accuracyHighConvictionCountEl.textContent = `${qualifiedSummary.correct} of ${qualifiedSummary.count} calls with score ${advisoryScoreThreshold}+`;
  accuracyAllCallsEl.textContent = formatPercent(allSummary.accuracy);
  accuracyAllCountEl.textContent = `${allSummary.correct} of ${allSummary.count} evaluated`;
  accuracyAverageMoveEl.textContent = Number.isFinite(averageAbsMove) ? formatPrice(averageAbsMove) : "-";
  accuracyEvaluationWindowEl.textContent = `Each call judged about ${windowMinutes} min later`;
  renderAccuracyBars(evaluations);
  renderAccuracyOutcomes(evaluations);
}

function drawChartMessage(context, canvas, message) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#dbeafe";
  context.font = "700 28px Aptos, Segoe UI, sans-serif";
  context.textAlign = "center";
  context.fillText(message, canvas.width / 2, canvas.height / 2);
}

function renderAdvisoryChart() {
  if (!advisoryChartEl) return;

  const rect = advisoryChartEl.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const width = Math.max(640, Math.round((rect.width || 900) * scale));
  const height = Math.max(320, Math.round((rect.height || 360) * scale));
  advisoryChartEl.width = width;
  advisoryChartEl.height = height;

  const context = advisoryChartEl.getContext("2d");
  const samples = getFilteredAdvisorySamples();
  advisorySampleCountEl.textContent = `${samples.length} sample${samples.length === 1 ? "" : "s"}`;
  renderAdvisoryAccuracy(samples);

  if (!samples.length) {
    drawChartMessage(context, advisoryChartEl, "No advisory samples in this window yet");
    return;
  }

  const padding = { top: 42 * scale, right: 42 * scale, bottom: 58 * scale, left: 72 * scale };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const priceHeight = plotHeight * 0.66;
  const laneGap = 24 * scale;
  const laneTop = padding.top + priceHeight + laneGap;
  const laneHeight = plotHeight - priceHeight - laneGap;
  const times = samples.map((entry) => new Date(entry.time).getTime());
  const prices = samples.map((entry) => entry.price);
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = Math.max(maxPrice - minPrice, Math.max(maxPrice * 0.01, 1));
  const minY = minPrice - priceRange * 0.14;
  const maxY = maxPrice + priceRange * 0.14;
  const yRange = Math.max(maxY - minY, 1);
  const xFor = (time) => padding.left + ((time - minTime) / Math.max(maxTime - minTime, 1)) * plotWidth;
  const yForPrice = (value) => padding.top + (1 - ((value - minY) / yRange)) * priceHeight;
  const signalYFor = (tone) => {
    if (tone === "long") return laneTop + laneHeight * 0.15;
    if (tone === "short") return laneTop + laneHeight * 0.85;
    return laneTop + laneHeight * 0.5;
  };
  const signalValues = samples.map((entry) => signalYFor(entry.tone));

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#020617";
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "rgba(191, 219, 254, 0.22)";
  context.lineWidth = 1 * scale;
  context.font = `${12 * scale}px Aptos, Segoe UI, sans-serif`;
  context.fillStyle = "#dbeafe";
  context.textAlign = "right";

  for (let index = 0; index <= 4; index += 1) {
    const y = padding.top + (priceHeight / 4) * index;
    const value = maxY - (yRange / 4) * index;
    context.beginPath();
    context.moveTo(padding.left, y);
    context.lineTo(width - padding.right, y);
    context.stroke();
    context.fillText(formatPrice(value), padding.left - 10 * scale, y + 4 * scale);
  }

  function drawLine(values, color, dash = [], yFor = yForPrice) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = 3 * scale;
    context.setLineDash(dash.map((value) => value * scale));
    values.forEach((value, index) => {
      const x = xFor(times[index]);
      const y = yFor(value, index);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.stroke();
    context.setLineDash([]);
  }

  drawLine(prices, "#f8fafc");
  drawLine(signalValues, "#facc15", [10, 7], (value) => value);

  context.strokeStyle = "rgba(96, 165, 250, 0.58)";
  context.lineWidth = 1.5 * scale;
  context.beginPath();
  context.moveTo(padding.left, laneTop - laneGap * 0.5);
  context.lineTo(width - padding.right, laneTop - laneGap * 0.5);
  context.stroke();

  const signalRows = [
    ["Long", "long", "#22d3a6"],
    ["Wait", "wait", "#f4c152"],
    ["Short", "short", "#fb7185"]
  ];
  context.font = `700 ${12 * scale}px Aptos, Segoe UI, sans-serif`;
  signalRows.forEach(([label, tone, color]) => {
    const y = signalYFor(tone);
    context.strokeStyle = "rgba(191, 219, 254, 0.18)";
    context.lineWidth = 1 * scale;
    context.beginPath();
    context.moveTo(padding.left, y);
    context.lineTo(width - padding.right, y);
    context.stroke();
    context.fillStyle = color;
    context.textAlign = "right";
    context.fillText(label, padding.left - 10 * scale, y + 4 * scale);
  });

  context.textAlign = "left";
  context.fillStyle = "#f8fafc";
  context.font = `700 ${15 * scale}px Aptos, Segoe UI, sans-serif`;
  const title = `${commodities.find(({ id }) => id === advisoryCommodityFilter)?.name || "Commodity"} ${advisoryHorizonFilter} advisory`;
  context.fillText(title, padding.left, 24 * scale);

  context.fillStyle = "#bfdbfe";
  context.font = `${12 * scale}px Aptos, Segoe UI, sans-serif`;
  context.fillText(formatTradeTime(new Date(minTime)), padding.left, height - 24 * scale);
  context.textAlign = "right";
  context.fillText(formatTradeTime(new Date(maxTime)), width - padding.right, height - 24 * scale);

  samples.forEach((entry, index) => {
    if (index % Math.max(1, Math.floor(samples.length / 80)) !== 0) return;
    const x = xFor(times[index]);
    const signalY = signalValues[index];
    const color = entry.tone === "short" ? "#fb7185" : entry.tone === "long" ? "#22d3a6" : "#f4c152";

    context.beginPath();
    context.fillStyle = color;
    context.arc(x, signalY, 5 * scale, 0, Math.PI * 2);
    context.fill();
  });

  const latest = samples[samples.length - 1];
  const latestX = xFor(times[samples.length - 1]);
  const latestY = signalValues[samples.length - 1];
  const latestText = latest.tone === "short" ? "Short advisory" : latest.tone === "long" ? "Long advisory" : "Wait advisory";
  context.textAlign = latestX > width * 0.72 ? "right" : "left";
  context.fillStyle = latest.tone === "short" ? "#fb7185" : latest.tone === "long" ? "#22d3a6" : "#f4c152";
  context.font = `700 ${12 * scale}px Aptos, Segoe UI, sans-serif`;
  context.fillText(latestText, latestX + (latestX > width * 0.72 ? -10 : 10) * scale, latestY - 10 * scale);
}

async function saveSharedTransactionHistory() {
  const apiUrl = getHistoryApiUrl();
  if (!apiUrl) {
    sharedHistoryStatusEl.textContent = "Add backend URL to save";
    pendingHistorySaveRetry = true;
    return false;
  }
  if (backendHistoryWriteInFlight) {
    pendingHistorySaveRetry = true;
    return false;
  }
  backendHistoryWriteInFlight = true;

  try {
    sharedHistoryStatusEl.textContent = "Saving to backend";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getSharedHistoryPayload())
    });
    if (!response.ok) throw new Error("backend save failed");

    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    replaceTransactionHistory(entries);
    reconcilePaperStateFromHistory();
    sharedHistoryStatusEl.textContent = `Backend saved ${entries.length || transactionHistory.length} rows`;
    backendHistoryReady = true;
    nextBackendTransactionSyncAt = 0;
    pendingHistorySaveRetry = false;
    return true;
  } catch (error) {
    nextBackendTransactionSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    pendingHistorySaveRetry = true;
    sharedHistoryStatusEl.textContent = getBackendBackoffText(nextBackendTransactionSyncAt);
    return false;
  } finally {
    backendHistoryWriteInFlight = false;
  }
}

function queueSharedTransactionHistorySave() {
  saveSharedTransactionHistory().catch(() => {
    pendingHistorySaveRetry = true;
  });
}

async function cleanSharedTransactionHistory() {
  const apiUrl = getHistoryApiUrl();
  if (!apiUrl) {
    sharedHistoryStatusEl.textContent = "Add backend URL to clean";
    return false;
  }

  try {
    sharedHistoryStatusEl.textContent = "Cleaning backend ledger";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mode: "cleanup" })
    });
    if (!response.ok) throw new Error("backend cleanup failed");

    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    const removed = Number(data?.removed || 0);
    replaceTransactionHistory(entries);
    reconcilePaperStateFromHistory();
    sharedHistoryStatusEl.textContent = `Backend cleaned ${removed} duplicate row${removed === 1 ? "" : "s"}`;
    calculateSignal();
    return true;
  } catch (error) {
    sharedHistoryStatusEl.textContent = "Backend cleanup failed";
    return false;
  }
}

async function loadSharedTransactionHistory(manual = false) {
  if (!hasHistoryBackend()) {
    sharedHistoryStatusEl.textContent = "Backend required";
    return false;
  }
  if (!manual && isBackendBackoffActive(nextBackendTransactionSyncAt)) return false;
  if (backendSyncInFlight || backendHistoryWriteInFlight) return false;
  backendSyncInFlight = true;

  try {
    sharedHistoryStatusEl.textContent = "Syncing backend";
    const response = await fetch(`${getMasterHistoryUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("master history unavailable");

    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    const mergedEntries = getMergedTransactionEntries(entries);
    const hasLocalOnlyRows = mergedEntries.length > entries.length;
    replaceTransactionHistory(mergedEntries);
    reconcilePaperStateFromHistory();
    backendHistoryReady = true;
    if (hasLocalOnlyRows) {
      pendingHistorySaveRetry = true;
      saveSharedTransactionHistory();
      sharedHistoryStatusEl.textContent = `Backend merged ${mergedEntries.length} rows`;
    } else {
      sharedHistoryStatusEl.textContent = `Backend synced ${entries.length} row${entries.length === 1 ? "" : "s"}`;
    }
    nextBackendTransactionSyncAt = 0;
    calculateSignal();
    return true;
  } catch (error) {
    backendHistoryReady = true;
    nextBackendTransactionSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    sharedHistoryStatusEl.textContent = manual
      ? "Backend sync failed; using local ledger"
      : `Backend offline; using local ledger. ${getBackendBackoffText(nextBackendTransactionSyncAt)}`;
    await loadBundledTransactionHistory();
    calculateSignal();
    return false;
  } finally {
    backendSyncInFlight = false;
  }
}

async function autoSyncTransactionHistory() {
  if (!hasHistoryBackend() || backendSyncInFlight || backendHistoryWriteInFlight) return false;
  if (isBackendBackoffActive(nextBackendTransactionSyncAt)) return false;

  if (pendingHistorySaveRetry) {
    const saved = await saveSharedTransactionHistory();
    if (!saved) return false;
  }

  return loadSharedTransactionHistory(false);
}

async function initializeBackendState() {
  if (hasHistoryBackend()) {
    sharedHistoryStatusEl.textContent = "Loading backend ledger";
  }

  const historyLoad = autoSyncTransactionHistory();
  const settingsLoad = loadSharedSettings();
  const advisoryLoad = loadSharedAdvisoryHistory();
  const [loadedHistory] = await Promise.all([
    historyLoad,
    settingsLoad,
    advisoryLoad
  ]);

  calculateSignal();
  closeOnlyPaperSweep();
  return loadedHistory;
}

async function recordTransaction(entry) {
  const transaction = normalizeTransactionEntry({
    id: nextTransactionId,
    time: new Date(),
    userEmail: getCurrentLedgerEmail(),
    userName: getCurrentUserProfile()?.name || "",
    ...entry
  });

  transaction.sharedKey = getTransactionKey(transaction);
  transactionHistory.unshift(transaction);
  nextTransactionId += 1;
  savePaperState();

  try {
    recordOpenBrainEvent(
      "paper-trade",
      `${transaction.action} ${transaction.contract} at ${formatPrice(transaction.price)} with net P/L ${formatSignedMoney(Number(transaction.pnl) || 0)}`,
      {
        tradeId: transaction.tradeId,
        commodity: transaction.commodity,
        action: transaction.action,
        side: transaction.side,
        step: transaction.step,
        price: transaction.price,
        pnl: transaction.pnl,
        tags: ["paper-trade", transaction.commodity, transaction.side, transaction.action]
      }
    );
  } catch (error) {
    openBrainStatusEl.textContent = "Open Brain log skipped; trade ledger saved";
  }

  queueSharedTransactionHistorySave();
  return transaction;
}

function isPaperActionPending(commodity) {
  const markedAt = pendingPaperActions.get(commodity);
  if (!markedAt) return false;
  if (Date.now() - markedAt > PAPER_ACTION_PENDING_TTL_MS) {
    pendingPaperActions.delete(commodity);
    return false;
  }
  return true;
}

function markPaperActionPending(commodity) {
  pendingPaperActions.set(commodity, Date.now());
}

function clearPaperActionPending(commodity) {
  pendingPaperActions.delete(commodity);
}

async function openPaperTrade(commodity, commodityMeta, signal, tradePlan) {
  const side = getSignalSide(signal);
  if (!side) return;
  if (getOpenPaperTrade(commodity) || isPaperActionPending(commodity)) return;
  markPaperActionPending(commodity);

  const entryPrice = tradePlan.livePrice;
  const contracts = tradePlan.plannedContracts;
  const marginRequirement = side === "short" ? tradePlan.shortMargin : tradePlan.longMargin;
  const capital = marginRequirement * contracts;
  const notionalValue = entryPrice * tradePlan.contractMultiplier * contracts;
  const openFee = getEstimatedFees(marketConfig[commodity], contracts, 1);
  const estimatedExitFee = getEstimatedFees(marketConfig[commodity], contracts, 1);
  const trade = {
    id: nextTransactionId,
    commodity,
    commodityName: commodityMeta.name,
    contract: tradePlan.ticker,
    side,
    martingaleStep,
    entryPrice,
    targetEntryPrice: tradePlan.entryPrice,
    targetPrice: tradePlan.targetPrice,
    stopPrice: tradePlan.stopLoss,
    contractMultiplier: tradePlan.contractMultiplier,
    contracts,
    marginRequirement,
    notionalValue,
    capital,
    quantity: contracts,
    openFee,
    estimatedExitFee,
    totalEstimatedFees: openFee + estimatedExitFee,
    feePerContractSide: tradePlan.feePerContractSide,
    feeLabel: tradePlan.feeLabel,
    conviction: signal.conviction,
    openedAt: new Date()
  };
  let sandboxOrder = null;

  openPaperTrades.set(commodity, trade);
  savePaperState();

  try {
    sandboxOrder = await submitCoinbaseSandboxOrderWithTimeout(trade, side === "short" ? "SELL" : "BUY", "open");
  } catch (error) {
    coinbaseSandboxStatusEl.textContent = "Sandbox open failed; paper open recorded";
    sandboxOrder = {
      sandbox: true,
      intent: "open",
      side: side === "short" ? "SELL" : "BUY",
      error: error.message || "Coinbase sandbox open failed",
      sentAt: new Date().toISOString()
    };
  }

  try {
    await recordTransaction({
      tradeId: trade.id,
      commodity,
      commodityName: commodityMeta.name,
      action: side === "short" ? "SELL SHORT" : "BUY",
      side,
      step: trade.martingaleStep,
      contract: trade.contract,
      price: entryPrice,
      entryPrice,
      targetEntryPrice: trade.targetEntryPrice,
      targetPrice: trade.targetPrice,
      stopPrice: trade.stopPrice,
      contractMultiplier: trade.contractMultiplier,
      contracts: trade.contracts,
      marginRequirement: trade.marginRequirement,
      notionalValue: trade.notionalValue,
      openFee: trade.openFee,
      estimatedExitFee: trade.estimatedExitFee,
      totalEstimatedFees: trade.totalEstimatedFees,
      feePerContractSide: trade.feePerContractSide,
      feeLabel: trade.feeLabel,
      coinbaseSandbox: sandboxOrder,
      openedAt: trade.openedAt,
      capital,
      pnl: 0,
      note: `${commodityMeta.name} ${side} opened at ${signal.conviction} conviction`
    });
  } catch (error) {
    sharedHistoryStatusEl.textContent = "Paper trade opened locally; backend save retrying";
    pendingHistorySaveRetry = true;
  } finally {
    clearPaperActionPending(commodity);
    calculateSignal();
  }
}

async function closePaperTrade(commodity, exitPrice, reason) {
  const trade = getOpenPaperTrade(commodity);
  if (!trade) return;
  if (isPaperActionPending(commodity)) return;
  markPaperActionPending(commodity);

  const grossPnl = getTradeGrossPnl(trade, exitPrice);
  const closeFee = Number(trade.estimatedExitFee) || getEstimatedFees(marketConfig[commodity], trade.contracts, 1);
  const totalFees = (Number(trade.openFee) || 0) + closeFee;
  const pnl = grossPnl - totalFees;
  paperEquity += pnl;
  openPaperTrades.delete(commodity);
  const closedAt = new Date();
  let sandboxOrder = null;
  savePaperState();

  try {
    sandboxOrder = await submitCoinbaseSandboxOrderWithTimeout(trade, trade.side === "short" ? "BUY" : "SELL", "close");
  } catch (error) {
    coinbaseSandboxStatusEl.textContent = "Sandbox close failed; paper close recorded";
    sandboxOrder = {
      sandbox: true,
      intent: "close",
      error: error.message || "Coinbase sandbox close failed",
      productId: trade.contract,
      side: trade.side === "short" ? "BUY" : "SELL",
      sentAt: new Date().toISOString()
    };
  }

  try {
    await recordTransaction({
      tradeId: trade.id,
      commodity,
      commodityName: trade.commodityName,
      action: reason,
      side: trade.side,
      step: trade.martingaleStep,
      contract: trade.contract,
      price: exitPrice,
      entryPrice: trade.entryPrice,
      targetEntryPrice: trade.targetEntryPrice,
      targetPrice: trade.targetPrice,
      stopPrice: trade.stopPrice,
      contractMultiplier: trade.contractMultiplier,
      contracts: trade.contracts,
      marginRequirement: trade.marginRequirement,
      notionalValue: trade.notionalValue,
      openFee: trade.openFee,
      closeFee,
      estimatedExitFee: trade.estimatedExitFee,
      totalEstimatedFees: totalFees,
      feePerContractSide: trade.feePerContractSide,
      feeLabel: trade.feeLabel,
      coinbaseSandbox: sandboxOrder,
      grossPnl,
      netPnl: pnl,
      exitPrice,
      openedAt: trade.openedAt,
      closedAt,
      durationMs: closedAt - new Date(trade.openedAt),
      capital: trade.capital,
      pnl,
      note: `${trade.commodityName} ${trade.side} closed from ${formatPrice(trade.entryPrice)}`
    });
    martingaleStep = getNextMartingaleStepFromHistory();
    savePaperState();
  } finally {
    clearPaperActionPending(commodity);
  }
}

function executePaperTrading(commodity, commodityMeta, signal, tradePlan, options = {}) {
  if (!tradePlan.priceReady) return;
  reconcilePaperStateFromHistory();

  const openTrade = getOpenPaperTrade(commodity);
  if (openTrade) {
    const hitTarget = openTrade.side === "short"
      ? tradePlan.livePrice <= openTrade.targetPrice
      : tradePlan.livePrice >= openTrade.targetPrice;
    const hitStop = openTrade.side === "short"
      ? tradePlan.livePrice >= openTrade.stopPrice
      : tradePlan.livePrice <= openTrade.stopPrice;

    if (hitTarget) {
      closePaperTrade(commodity, tradePlan.livePrice, openTrade.side === "short" ? "COVER TARGET" : "SELL TARGET");
      return;
    }

    if (hitStop) {
      closePaperTrade(commodity, tradePlan.livePrice, openTrade.side === "short" ? "COVER STOP" : "SELL STOP");
    }

    return;
  }

  const allowOpen = options.allowOpen !== false;
  if (allowOpen && getSignalSide(signal) && signal.conviction >= tradePlan.entryThreshold) {
    openPaperTrade(commodity, commodityMeta, signal, tradePlan);
  }
}

async function closeOnlyPaperSweep() {
  const baseSignals = readBaseSignals();
  for (const commodityMeta of commodities.filter(({ id }) => userCanTradeCommodity(id))) {
    const commodity = commodityMeta.id;
    if (!openPaperTrades.has(commodity)) continue;

    if (!isUsableMarketPrice(commodity)) {
      await refreshCoinbasePrice(commodity, { runCloseSweep: false });
    }

    const signal = scoreCommodity(commodity, baseSignals);
    const tradePlan = buildTradePlan(commodity, signal);
    executePaperTrading(commodity, commodityMeta, signal, tradePlan, { allowOpen: false });
  }
}

function getPaperDecision(signal, tradePlan, openTrade) {
  const signalSide = getSignalSide(signal);
  const priceText = formatPrice(tradePlan.livePrice);
  const thresholdText = `${signal.conviction}/${tradePlan.entryThreshold}`;
  const thresholdSource = tradePlan.entryThresholdSource || "trading";
  const karpathyText = ` Advisory conviction is ${signal.conviction}; ${thresholdSource} trading threshold is ${tradePlan.entryThreshold}; learned Karpathy recommendation is ${tradePlan.learnedThreshold}.`;

  if (!hasHistoryBackend()) {
    return {
      title: "Backend not connected",
      detail: "The paper trader will not open or sync trades until the Backend API is connected."
    };
  }

  if (!tradePlan.priceReady) {
    return {
      title: "Waiting for live price",
      detail: "The paper trader needs Coinbase WebSocket, Coinbase REST, or a valid GitHub snapshot before it can evaluate entries."
    };
  }

  if (openTrade) {
    return {
      title: `${formatSide(openTrade.side)} trade open`,
      detail: `Watching ${priceText} against target ${formatPrice(openTrade.targetPrice)} and stop ${formatPrice(openTrade.stopPrice)}.`
    };
  }

  if (!signalSide) {
    return {
      title: "No trade: advisory is Wait",
      detail: `Oil can move without a trade opening. The bot only trades long/short advisories, and the current advisory is ${signal.label} at ${signal.conviction} conviction.`
    };
  }

  if (signal.conviction < tradePlan.entryThreshold) {
    return {
      title: `No trade: conviction ${thresholdText}`,
      detail: `The next trade is Martingale step ${martingaleStep}, but it waits until the ${signalSide} advisory reaches the ${thresholdSource} threshold of ${tradePlan.entryThreshold}. Current price is ${priceText}.${karpathyText}`
    };
  }

  if (isPaperActionPending(commoditySelect.value)) {
    return {
      title: "Trade order pending",
      detail: "A sandbox/open or close request is already in flight, so the bot is avoiding duplicate trades."
    };
  }

  return {
    title: `Ready to open ${signalSide}`,
    detail: `Conviction ${thresholdText} clears the ${thresholdSource} trading threshold. Step ${martingaleStep} would commit about ${formatMoney(tradePlan.nextCapital)} at ${priceText}.${karpathyText}`
  };
}

function renderKarpathyLoop(signal, tradePlan) {
  const loop = getKarpathyLoop(getSignalSide(signal));
  const winRateText = loop.sampleCount ? `${Math.round(loop.winRate * 100)}% win` : "No sample";
  const avgPnlText = loop.sampleCount ? `${formatSignedMoney(loop.avgPnl)} avg` : "No sample yet";

  paperKarpathyEl.textContent = `${tradePlan.entryThresholdSource || "Trading"} ${tradePlan.entryThreshold} / Karpathy ${loop.threshold}`;
  loopCollectEl.textContent = `${loop.closedCount} closed trades`;
  loopEvaluateEl.textContent = `${winRateText} / ${avgPnlText}`;
  loopAdjustEl.textContent = `${tradePlan.entryThresholdSource || "Trading"} ${tradePlan.entryThreshold}, recommendation ${loop.threshold}, losses ${loop.lossStreak}`;

  if (loop.sampleCount < 3) {
    loopAdjustEl.textContent = `${tradePlan.entryThresholdSource || "Trading"} ${tradePlan.entryThreshold}, needs 3 trades`;
  } else if (tradePlan.learnedThreshold > PAPER_MIN_CONVICTION) {
    loopAdjustEl.textContent = `Karpathy suggests more selective: ${loop.threshold}`;
  } else if (tradePlan.learnedThreshold < PAPER_MIN_CONVICTION) {
    loopAdjustEl.textContent = `Karpathy suggests more permissive: ${loop.threshold}`;
  }
}

function getPeriodStart(period) {
  const now = new Date();
  const start = new Date(now);

  if (period === "day") {
    start.setHours(0, 0, 0, 0);
    return start;
  }

  if (period === "week") {
    start.setDate(now.getDate() - 6);
    start.setHours(0, 0, 0, 0);
    return start;
  }

  if (period === "month") {
    start.setMonth(now.getMonth() - 1);
    start.setHours(0, 0, 0, 0);
    return start;
  }

  return null;
}

function isEntryInPeriod(entry, period) {
  const start = getPeriodStart(period);
  return !start || getTransactionDate(entry.time).getTime() >= start.getTime();
}

function getFilteredTransactions() {
  normalizeHistoryCommodityFilter();
  return getUserScopedTransactions().filter((entry) => {
    const commodityMatch = historyCommodityFilter === "all" || entry.commodity === historyCommodityFilter;
    return commodityMatch && isEntryInPeriod(entry, historyPeriodFilter);
  });
}

function getProfitTotal(entries) {
  return entries.reduce((total, entry) => total + getDisplayPnl(entry), 0);
}

function isClosingTransaction(entry) {
  return Number(entry.pnl) !== 0 || ["TARGET", "STOP"].some((word) => entry.action?.includes(word));
}

function getTransactionTargetOrExitPrice(entry) {
  if (isClosingTransaction(entry)) {
    const exitPrice = Number(entry.exitPrice ?? entry.price);
    return Number.isFinite(exitPrice) ? formatPrice(exitPrice) : UNAVAILABLE_TEXT;
  }

  const entryTradeId = entry.tradeId || entry.id;
  if (entryTradeId) {
    const matchingClose = getUserScopedTransactions().find((candidate) => (
      candidate !== entry
      && isClosingTransaction(candidate)
      && (candidate.tradeId || candidate.id) === entryTradeId
    ));

    if (matchingClose) {
      const exitPrice = Number(matchingClose.exitPrice ?? matchingClose.price);
      return Number.isFinite(exitPrice) ? formatPrice(exitPrice) : UNAVAILABLE_TEXT;
    }
  }

  const targetPrice = Number(entry.targetPrice);
  return Number.isFinite(targetPrice) ? formatPrice(targetPrice) : UNAVAILABLE_TEXT;
}

function isOpeningTransaction(entry) {
  return !isClosingTransaction(entry) && ["BUY", "SELL SHORT"].includes(entry.action);
}

function getLatestUnclosedOpeningTrade(commodity) {
  const chronological = getUserScopedTransactions().sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time));
  const active = new Map();

  chronological.forEach((entry) => {
    const key = getTradeLifecycleKey(entry);
    if (isOpeningTransaction(entry)) active.set(key, entry);
    if (isClosingTransaction(entry)) active.delete(key);
  });

  return Array.from(active.values())
    .reverse()
    .find((entry) => entry.commodity === commodity) || null;
}

function getClosedFromPrice(entry) {
  const match = String(entry.note || "").match(/closed from\s+\$?([\d,.]+)/i);
  if (!match) return NaN;
  return Number(match[1].replace(/,/g, ""));
}

function isSameTradePair(left, right) {
  return (
    left &&
    right &&
    left.id !== right.id &&
    left.contract === right.contract &&
    left.side === right.side &&
    left.step === right.step &&
    (!left.commodity || !right.commodity || left.commodity === right.commodity)
  );
}

function getOpeningEntry(entry) {
  const scopedTransactions = getUserScopedTransactions();
  if (entry.tradeId) {
    const exact = scopedTransactions.find((candidate) => (
      candidate.tradeId === entry.tradeId &&
      candidate.id !== entry.id &&
      isOpeningTransaction(candidate)
    ));
    if (exact) return exact;
  }

  const entryTime = getTransactionDate(entry.time).getTime();
  return scopedTransactions
    .filter((candidate) => (
      isOpeningTransaction(candidate) &&
      isSameTradePair(candidate, entry) &&
      getTransactionDate(candidate.time).getTime() <= entryTime
    ))
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time))[0] || null;
}

function getClosingEntry(entry) {
  const scopedTransactions = getUserScopedTransactions();
  if (entry.tradeId) {
    const exact = scopedTransactions.find((candidate) => (
      candidate.tradeId === entry.tradeId &&
      candidate.id !== entry.id &&
      isClosingTransaction(candidate)
    ));
    if (exact) return exact;
  }

  const entryTime = getTransactionDate(entry.time).getTime();
  return scopedTransactions
    .filter((candidate) => (
      isClosingTransaction(candidate) &&
      isSameTradePair(candidate, entry) &&
      getTransactionDate(candidate.time).getTime() >= entryTime
    ))
    .sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time))[0] || null;
}

function getEntryDetail(entry) {
  const openingEntry = getOpeningEntry(entry);
  const closingEntry = getClosingEntry(entry);
  const closingAction = entry.action || closingEntry?.action || "";
  const inferredEntryPrice = getClosedFromPrice(entry);
  const entryPrice = Number(
    entry.entryPrice ??
    openingEntry?.entryPrice ??
    openingEntry?.price ??
    (Number.isFinite(inferredEntryPrice) ? inferredEntryPrice : NaN)
  );
  const targetEntryPrice = Number(entry.targetEntryPrice ?? openingEntry?.targetEntryPrice);
  const exitPrice = Number(entry.exitPrice ?? closingEntry?.exitPrice ?? (isClosingTransaction(entry) ? entry.price : NaN));
  const targetPrice = Number(entry.targetPrice ?? openingEntry?.targetPrice ?? closingEntry?.targetPrice ?? (closingAction.includes("TARGET") ? exitPrice : NaN));
  const stopPrice = Number(entry.stopPrice ?? openingEntry?.stopPrice ?? closingEntry?.stopPrice ?? (closingAction.includes("STOP") ? exitPrice : NaN));
  const hasStoredContractCount = Number(entry.contracts ?? openingEntry?.contracts ?? closingEntry?.contracts) > 0;
  const contracts = hasStoredContractCount
    ? Number(entry.contracts ?? openingEntry?.contracts ?? closingEntry?.contracts)
    : isClosingTransaction(entry) ? 1 : Number(entry.quantity ?? openingEntry?.quantity ?? 1);
  const contractMultiplier = Number(entry.contractMultiplier ?? openingEntry?.contractMultiplier ?? closingEntry?.contractMultiplier ?? getContractMultiplier(marketConfig[entry.commodity]));
  const marginRequirement = Number(entry.marginRequirement ?? openingEntry?.marginRequirement ?? closingEntry?.marginRequirement);
  const capital = Number(entry.capital ?? openingEntry?.capital ?? closingEntry?.capital);
  const notionalValue = Number(entry.notionalValue ?? openingEntry?.notionalValue ?? closingEntry?.notionalValue ?? (Number.isFinite(entryPrice) ? entryPrice * contractMultiplier * contracts : NaN));
  const openFee = Number(entry.openFee ?? openingEntry?.openFee ?? closingEntry?.openFee ?? 0);
  const closeFee = Number(entry.closeFee ?? closingEntry?.closeFee ?? entry.estimatedExitFee ?? closingEntry?.estimatedExitFee ?? 0);
  const totalFees = Number(entry.totalEstimatedFees ?? closingEntry?.totalEstimatedFees ?? openFee + closeFee);
  const feeLabel = entry.feeLabel || openingEntry?.feeLabel || closingEntry?.feeLabel || "Estimated fees";
  const grossPnl = Number(entry.grossPnl ?? closingEntry?.grossPnl ?? (Number.isFinite(entryPrice) && Number.isFinite(exitPrice)
    ? ((entry.side === "short" ? entryPrice - exitPrice : exitPrice - entryPrice) * contractMultiplier * contracts)
    : NaN));
  const netPnl = Number(entry.netPnl ?? closingEntry?.netPnl ?? (Number(entry.pnl) || (Number.isFinite(grossPnl) ? grossPnl - totalFees : NaN)));
  const priceMove = Number.isFinite(entryPrice) && Number.isFinite(exitPrice)
    ? (entry.side === "short" ? entryPrice - exitPrice : exitPrice - entryPrice)
    : NaN;
  const marginReturn = Number.isFinite(netPnl) && Number.isFinite(capital) && capital > 0
    ? (netPnl / capital) * 100
    : NaN;
  const notionalReturn = Number.isFinite(netPnl) && Number.isFinite(notionalValue) && notionalValue > 0
    ? (netPnl / notionalValue) * 100
    : NaN;
  const openedAt = entry.openedAt
    ? new Date(entry.openedAt)
    : openingEntry?.openedAt ? new Date(openingEntry.openedAt)
    : openingEntry?.time ? new Date(openingEntry.time)
    : null;
  const closedAt = entry.closedAt
    ? new Date(entry.closedAt)
    : closingEntry?.closedAt ? new Date(closingEntry.closedAt)
    : isClosingTransaction(entry) ? new Date(entry.time)
    : null;
  const durationMs = Number.isFinite(entry.durationMs)
    ? entry.durationMs
    : Number.isFinite(closingEntry?.durationMs) ? closingEntry.durationMs
    : closedAt && openedAt ? closedAt - openedAt : null;

  return {
    entryPrice,
    targetEntryPrice,
    targetPrice,
    stopPrice,
    exitPrice,
    contracts,
    contractMultiplier,
    marginRequirement,
    capital,
    notionalValue,
    openFee,
    closeFee,
    totalFees,
    feeLabel,
    priceMove,
    grossPnl,
    netPnl: Number.isFinite(netPnl) ? netPnl : Number(entry.pnl) || 0,
    marginReturn,
    notionalReturn,
    openedAt,
    closedAt,
    durationMs
  };
}

function getDisplayPnl(entry) {
  if (!isClosingTransaction(entry)) return 0;

  const detail = getEntryDetail(entry);
  if (Number.isFinite(detail.netPnl)) return detail.netPnl;
  return Number(entry.pnl) || 0;
}

function getSandboxSubmittedProduct(entry) {
  return entry.coinbaseSandbox?.submittedProductId
    || entry.coinbaseSandbox?.productId
    || entry.coinbaseSandbox?.request?.product_id
    || entry.contract
    || "-";
}

function getSandboxReturnedProduct(entry) {
  return entry.coinbaseSandbox?.returnedProductId
    || entry.coinbaseSandbox?.response?.success_response?.product_id
    || entry.coinbaseSandbox?.response?.product_id
    || "-";
}

function getSandboxClientOrderId(entry) {
  return entry.coinbaseSandbox?.request?.client_order_id
    || entry.coinbaseSandbox?.response?.success_response?.client_order_id
    || "-";
}

function renderTransactionDetail(entry) {
  const detail = getEntryDetail(entry);
  const hasSandboxOrder = Boolean(entry.coinbaseSandbox?.sandbox);
  const labels = [
    ["Actual entry", Number.isFinite(detail.entryPrice) ? formatPrice(detail.entryPrice) : "-"],
    ["Target entry", Number.isFinite(detail.targetEntryPrice) ? formatPrice(detail.targetEntryPrice) : "-"],
    ["Actual exit", Number.isFinite(detail.exitPrice) ? formatPrice(detail.exitPrice) : entry.pnl === 0 ? "Open" : "-"],
    ["Target exit", Number.isFinite(detail.targetPrice) ? formatPrice(detail.targetPrice) : "-"],
    ["Stop", Number.isFinite(detail.stopPrice) ? formatPrice(detail.stopPrice) : "-"],
    ["Contracts", Number.isFinite(detail.contracts) ? `${detail.contracts} x ${detail.contractMultiplier} units` : "-"],
    ["Notional exposure", Number.isFinite(detail.notionalValue) ? formatMoney(detail.notionalValue) : "-"],
    ["Margin/contract", Number.isFinite(detail.marginRequirement) ? formatMoney(detail.marginRequirement) : "-"],
    ["Margin committed", Number.isFinite(detail.capital) ? formatMoney(detail.capital) : "-"],
    ["Open fee", Number.isFinite(detail.openFee) ? formatMoney(detail.openFee) : "-"],
    ["Close fee", Number.isFinite(detail.closeFee) ? formatMoney(detail.closeFee) : "-"],
    ["Total fees", Number.isFinite(detail.totalFees) ? formatMoney(detail.totalFees) : "-"],
    ["Price move x multiplier", Number.isFinite(detail.priceMove) ? `${formatSignedMoney(detail.priceMove)} x ${detail.contractMultiplier} x ${detail.contracts}` : "-"],
    ["Gross P/L", Number.isFinite(detail.grossPnl) ? formatSignedMoney(detail.grossPnl) : "-"],
    ["Net P/L", Number.isFinite(detail.netPnl) ? formatSignedMoney(detail.netPnl) : "-"],
    ["Return on margin", Number.isFinite(detail.marginReturn) ? `${detail.marginReturn >= 0 ? "+" : ""}${detail.marginReturn.toFixed(1)}%` : "-"],
    ["Return on notional", Number.isFinite(detail.notionalReturn) ? `${detail.notionalReturn >= 0 ? "+" : ""}${detail.notionalReturn.toFixed(2)}%` : "-"],
    ["Fee model", detail.feeLabel],
    ["Opened", detail.openedAt ? formatTradeTime(detail.openedAt) : "-"],
    ["Closed", detail.closedAt ? formatTradeTime(detail.closedAt) : entry.pnl === 0 ? "Open" : "-"],
    ["Time open", Number.isFinite(detail.durationMs) ? formatDuration(detail.durationMs) : entry.pnl === 0 ? "Still open" : "-"],
    ["Sandbox order id", hasSandboxOrder ? entry.coinbaseSandbox.orderId || "Sent" : "-"],
    ["Sandbox action", hasSandboxOrder ? `${entry.coinbaseSandbox.intent} ${entry.coinbaseSandbox.side}` : "-"],
    ["Submitted product", hasSandboxOrder ? getSandboxSubmittedProduct(entry) : "-"],
    ["Sandbox returned product", hasSandboxOrder ? getSandboxReturnedProduct(entry) : "-"],
    ["Client order id", hasSandboxOrder ? getSandboxClientOrderId(entry) : "-"],
    ["Mock response", hasSandboxOrder ? "Yes - Coinbase sandbox returns static test data" : "-"],
    ["Visible in Coinbase UI", hasSandboxOrder ? "No - stored in this app ledger only" : "-"],
    ["Commodity", entry.commodityName || entry.commodity || "-"],
    ["Note", entry.note || "-"]
  ];

  const wrap = document.createElement("div");
  wrap.className = "detail-grid";

  labels.forEach(([label, value]) => {
    const item = document.createElement("div");
    const labelEl = document.createElement("span");
    const valueEl = document.createElement("strong");

    labelEl.className = "stat-label";
    labelEl.textContent = label;
    valueEl.textContent = value;
    item.append(labelEl, valueEl);
    wrap.append(item);
  });

  return wrap;
}

function renderPaperTrading(commodity, signal, tradePlan) {
  const scopedTransactions = getUserScopedTransactions();
  const openTrade = getOpenPaperTrade(commodity);
  const openTrades = Array.from(openPaperTrades.values())
    .filter((trade) => userCanTradeCommodity(trade.commodity));
  const hasOpenTradeWithoutPrice = openTrades.some((trade) => !isUsableMarketPrice(trade.commodity));
  const openPl = openTrades.reduce((total, trade) => {
    const currentPrice = getUsableMarketPrice(trade.commodity);
    if (!Number.isFinite(currentPrice)) return total;
    return total + getTradePnl(trade, currentPrice);
  }, 0);
  const committedCapital = openTrade ? Number(openTrade.capital) || 0 : 0;
  const displayEquity = hasOpenTradeWithoutPrice ? null : paperEquity + openPl;
  const signalSide = getSignalSide(signal);
  const nextCapital = getMartingaleCapital(tradePlan.minTradeValue);
  const decision = getPaperDecision(signal, tradePlan, openTrade);
  const staleStopTrade = !openTrade && getLatestUnclosedOpeningTrade(commodity);
  const marketStatus = getFuturesMarketStatus();
  const maxMartingaleStep = getCurrentMartingaleMaxStep();

  syncPaperInputs();
  renderUserContextWithAvatar(paperUserContextEl, getPaperUserContextText());
  paperEquityEl.textContent = formatMoney(displayEquity);
  paperRiskEl.textContent = tradePlan.riskPct;
  paperSizeEl.textContent = openTrade ? `${openTrade.contracts || openTrade.quantity} contract${(openTrade.contracts || openTrade.quantity) === 1 ? "" : "s"}` : "Minimum trade";
  paperCommittedEl.textContent = openTrade ? formatMoney(committedCapital) : formatMoney(nextCapital);
  paperCommittedEl.previousElementSibling.textContent = openTrade ? "Committed capital" : "Next trade capital";
  paperOpenPlEl.textContent = hasOpenTradeWithoutPrice ? UNAVAILABLE_TEXT : formatSignedMoney(openPl);
  paperOpenPlEl.className = hasOpenTradeWithoutPrice ? "" : openPl >= 0 ? "gain" : "loss";
  paperMartingaleEl.textContent = `Step ${martingaleStep} / ${maxMartingaleStep} (${formatMoney(nextCapital)}) - ${marketStatus.shortLabel}`;
  if (paperMarketStatusEl) {
    paperMarketStatusEl.textContent = `${marketStatus.label}: ${marketStatus.detail}`;
    paperMarketStatusEl.dataset.open = String(marketStatus.isOpen);
  }
  paperDecisionTitleEl.textContent = decision.title;
  paperDecisionDetailEl.textContent = decision.detail;

  if (!hasHistoryBackend()) {
    paperStatusEl.textContent = "Connect backend API";
  } else if (!latestPrices.has(commodity)) {
    paperStatusEl.textContent = "Waiting for live price";
  } else if (openTrade) {
    paperStatusEl.textContent = `${formatSide(openTrade.side)} open`;
  } else if (signalSide && signal.conviction >= tradePlan.learnedThreshold) {
    paperStatusEl.textContent = isCoinbaseSandboxEnabled() ? `Sandbox ready to ${signalSide}` : `Ready to ${signalSide}`;
  } else {
    paperStatusEl.textContent = `Waiting for signal > ${tradePlan.learnedThreshold}`;
  }

  if (openTrade) {
    paperTradeSummaryEl.textContent = `Open ${openTrade.side} ${openTrade.contract}: step ${openTrade.martingaleStep}, ${openTrade.contracts || openTrade.quantity} contract${(openTrade.contracts || openTrade.quantity) === 1 ? "" : "s"}, entry ${formatPrice(openTrade.entryPrice)}, target ${formatPrice(openTrade.targetPrice)}, stop ${formatPrice(openTrade.stopPrice)}, est. fees ${formatMoney(openTrade.totalEstimatedFees || 0)}.`;
  } else if (staleStopTrade) {
    paperTradeSummaryEl.textContent = `Ledger has an unclosed ${staleStopTrade.side} trade from ${formatTradeTime(staleStopTrade.time)} with stop ${formatPrice(Number(staleStopTrade.stopPrice))}; reconciling before the next trade.`;
  } else {
    paperTradeSummaryEl.textContent = `No open paper trade for the selected contract. Next trade uses Martingale step ${martingaleStep}.`;
  }

  transactionHistoryEl.innerHTML = "";
  if (!historyFiltersTouched) {
    historyCommodityFilter = "all";
    historyPeriodFilter = "all";
  }
  renderHistoryFilterButtons();
  renderPeriodFilterButtons();

  const displaySourceEntries = getDisplayTransactionSource();

  if (!displaySourceEntries.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    renderPnlWithCapital(historyTotalAllEl, 0);
    renderPnlWithCapital(historyTotalFilteredEl, 0, getSafeHistoryStartCapital(historyCommodityFilter));
    historyTotalCountEl.textContent = "0 rows";
    appendQueuedPaperTradeRow(commodity, signal, tradePlan, decision);
    cell.colSpan = 10;
    cell.textContent = "Waiting for a long or short advisory above 50 conviction.";
    row.append(cell);
    transactionHistoryEl.append(row);
    return;
  }

  let periodEntries = displaySourceEntries.slice();
  let rowsToRender = displaySourceEntries.slice();

  if (historyFiltersTouched) {
    periodEntries = displaySourceEntries.filter((entry) => isEntryInPeriod(entry, historyPeriodFilter));
    if (!periodEntries.length) periodEntries = displaySourceEntries.slice();

    rowsToRender = historyCommodityFilter === "all"
      ? periodEntries.slice()
      : periodEntries.filter((entry) => entry.commodity === historyCommodityFilter);

    if (!rowsToRender.length) {
      historyCommodityFilter = "all";
      historyPeriodFilter = "all";
      historyFiltersTouched = false;
      renderHistoryFilterButtons();
      renderPeriodFilterButtons();
      periodEntries = displaySourceEntries.slice();
      rowsToRender = displaySourceEntries.slice();
    }
  }

  if (!rowsToRender.length && displaySourceEntries.length) {
    historyCommodityFilter = "all";
    historyPeriodFilter = "all";
    historyFiltersTouched = false;
    renderHistoryFilterButtons();
    renderPeriodFilterButtons();
    periodEntries = displaySourceEntries.slice();
    rowsToRender = displaySourceEntries.slice();
  }

  if (!rowsToRender.length && displaySourceEntries.length) {
    rowsToRender = displaySourceEntries.slice();
    periodEntries = displaySourceEntries.slice();
  }

  const allTotal = getProfitTotal(periodEntries.length ? periodEntries : displaySourceEntries);
  const filteredTotal = getProfitTotal(rowsToRender);

  renderPnlWithCapital(historyTotalAllEl, allTotal);
  renderPnlWithCapital(historyTotalFilteredEl, filteredTotal, getSafeHistoryStartCapital(historyCommodityFilter));
  historyTotalCountEl.textContent = `${rowsToRender.length} row${rowsToRender.length === 1 ? "" : "s"}`;
  if (sharedHistoryStatusEl && displaySourceEntries.length) {
    sharedHistoryStatusEl.textContent = `Ledger loaded ${displaySourceEntries.length} rows; showing ${rowsToRender.length} (${historyCommodityFilter}, ${historyPeriodFilter})`;
  }

  if (!rowsToRender.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    appendQueuedPaperTradeRow(commodity, signal, tradePlan, decision);
    cell.colSpan = 10;
    cell.textContent = "No transactions match the selected filters.";
    row.append(cell);
    transactionHistoryEl.append(row);
    return;
  }

  appendQueuedPaperTradeRow(commodity, signal, tradePlan, decision);
  const rowsBeforeHistory = transactionHistoryEl.children.length;
  rowsToRender.slice(0, 50).forEach((entry) => {
    try {
      const row = document.createElement("tr");
      const displayPnl = getDisplayPnl(entry);
      const pnlClass = displayPnl > 0 ? "gain" : displayPnl < 0 ? "loss" : "";
      const expanded = expandedTransactionId === entry.id;
      appendStateCell(row, getTransactionStateCode(entry), getTransactionStateCode(entry) === "C" ? "Closed" : "Open");
      const values = [
        formatTradeTime(entry.time),
        null,
        entry.side ? formatSide(entry.side) : "-",
        entry.step ? `#${entry.step}` : "-",
        entry.contract,
        formatPrice(entry.price),
        formatMoney(entry.capital),
        getTransactionTargetOrExitPrice(entry),
        formatSignedMoney(displayPnl)
      ];

      row.className = "transaction-row";
      row.tabIndex = 0;
      row.setAttribute("aria-expanded", String(expanded));
      row.addEventListener("click", () => {
        expandedTransactionId = expanded ? null : entry.id;
        calculateSignal();
      });
      row.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          expandedTransactionId = expanded ? null : entry.id;
          calculateSignal();
        }
      });

      values.forEach((value, index) => {
        const cell = document.createElement("td");
        if (index === 1) {
          const toggle = document.createElement("button");
          const chevron = document.createElement("span");

          toggle.type = "button";
          toggle.className = "transaction-toggle";
          toggle.setAttribute("aria-label", `${expanded ? "Collapse" : "Expand"} ${entry.action || "trade"} transaction`);
          chevron.className = "chevron";
          chevron.textContent = expanded ? "▾" : "▸";
          toggle.append(chevron, document.createTextNode(entry.action || "Trade"));
          toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            expandedTransactionId = expanded ? null : entry.id;
            calculateSignal();
          });
          cell.append(toggle);
        } else {
          cell.textContent = value;
        }
        if (index === 8 && pnlClass) cell.className = pnlClass;
        row.append(cell);
      });
      transactionHistoryEl.append(row);

      if (expanded) {
        const detailRow = document.createElement("tr");
        const detailCell = document.createElement("td");

        detailRow.className = "transaction-detail";
        detailCell.colSpan = 10;
        detailCell.append(renderTransactionDetail(entry));
        detailRow.append(detailCell);
        transactionHistoryEl.append(detailRow);
      }
    } catch (error) {
      console.warn("Transaction row failed to render; using fallback row.", error, entry);
      const row = document.createElement("tr");
      appendStateCell(row, getTransactionStateCode(entry), getTransactionStateCode(entry) === "C" ? "Closed" : "Open");
      [
        entry?.time ? formatTradeTime(entry.time) : "-",
        entry?.action || "Trade",
        entry?.side ? formatSide(entry.side) : "-",
        entry?.step ? `#${entry.step}` : "-",
        entry?.contract || "-",
        Number.isFinite(Number(entry?.price)) ? formatPrice(Number(entry.price)) : UNAVAILABLE_TEXT,
        Number.isFinite(Number(entry?.capital)) ? formatMoney(Number(entry.capital)) : "-",
        "-",
        Number.isFinite(Number(entry?.pnl)) ? formatSignedMoney(Number(entry.pnl)) : "-"
      ].forEach((value, index) => {
        const cell = document.createElement("td");
        cell.textContent = value;
        if (index === 8) {
          const pnl = Number(entry?.pnl);
          if (pnl > 0) cell.className = "gain";
          if (pnl < 0) cell.className = "loss";
        }
        row.append(cell);
      });
      transactionHistoryEl.append(row);
    }
  });

  if (rowsToRender.length && transactionHistoryEl.children.length === rowsBeforeHistory) {
    console.warn("Paper history renderer appended no rows; using simple fallback renderer.", {
      loaded: displaySourceEntries.length,
      filtered: rowsToRender.length,
      historyCommodityFilter,
      historyPeriodFilter
    });
    appendSimplePaperHistoryRows(rowsToRender);
    if (sharedHistoryStatusEl) {
      sharedHistoryStatusEl.textContent = `Ledger loaded ${displaySourceEntries.length} rows; fallback rendered ${Math.min(rowsToRender.length, 50)}`;
    }
  }
}

function calculateSignal() {
  const selectionChanged = ensureSelectedCommodityAllowed();
  renderCommodityAccess();
  if (selectionChanged) {
    connectCoinbaseWebSocket(commoditySelect.value);
    refreshCoinbasePrice(commoditySelect.value);
  }

  const commodity = commoditySelect.value;
  const commodityMeta = commodities.find(({ id }) => id === commodity) || commodities[0];
  renderManualConvictionInput(commodity);
  const baseSignals = readBaseSignals();
  const primarySignal = scoreCommodity(commodity, baseSignals);
  const tradePlan = buildTradePlan(commodity, primarySignal);
  if (!tradePlan.priceReady) {
    connectCoinbaseWebSocket(commodity);
    refreshCoinbasePrice(commodity);
  }

  lastPrimarySignal = primarySignal;
  lastTradePlan = tradePlan;
  lastCommodityMeta = commodityMeta;

  const reasons = [];
  const trend = baseSignals.trend;
  const inventory = baseSignals.inventory;
  const dollar = baseSignals.dollar;
  const geopolitics = baseSignals.geopolitics;
  const curve = baseSignals.curve;

  if (trend > 8) reasons.push("Price trend is supportive, which keeps buyers in control.");
  if (trend < -8) reasons.push("Trend is rolling over, which favors patience or short exposure.");
  if (inventory > 6) reasons.push("Inventory draws point to tighter supply.");
  if (inventory < -6) reasons.push("Inventory builds argue demand may be softer than price implies.");
  if (dollar > 5) reasons.push("A softer dollar tends to help commodity pricing breathe.");
  if (dollar < -5) reasons.push("A stronger dollar adds headwind to commodity upside.");
  if (geopolitics > 6) reasons.push("Supply risk is elevated, so the market may keep a risk premium.");
  if (geopolitics < -6) reasons.push("Calmer supply conditions remove some urgency from the long side.");
  if (curve > 6) reasons.push("Backwardation suggests nearby demand is healthy.");
  if (curve < -6) reasons.push("Contango implies looser prompt conditions and weaker urgency.");

  if (reasons.length < 3) {
    reasons.push("The setup is mixed, so conviction depends more on execution quality than raw direction.");
  }

  commodities.forEach(({ id }) => {
    const chipSignal = scoreCommodity(id, baseSignals);
    const chipEntry = chipMap.get(id);
    chipEntry.state.textContent = chipSignal.chipLabel;
    chipEntry.chip.dataset.tone = chipSignal.tone;
    chipEntry.chip.dataset.selected = String(id === commodity);
    chipEntry.chip.setAttribute("aria-pressed", String(id === commodity));
  });

  inputsTitle.textContent = `Advisor inputs: ${commodityMeta.name}`;
  const primaryModelName = getModelById(primaryModelId).name;
  const secondaryModelName = secondaryModelId ? getModelById(secondaryModelId).name : "";
  const verified = lastVerifiedLLMRun && lastVerifiedLLMRun.commodity === commodity ? lastVerifiedLLMRun : null;
  if (verified) {
    outputTitle.textContent = `Advisor output: ${commodityMeta.name} — VERIFIED ${verified.primaryModel} + ${verified.criticModel} at ${verified.time}`;
    primaryModelStatEl.textContent = `${verified.primaryModel} + ${verified.criticModel} (verified)`;
  } else {
    outputTitle.textContent = `Advisor output: ${commodityMeta.name} — Loading ${primaryModelName}${secondaryModelName ? " + " + secondaryModelName + " critic" : ""}…`;
    primaryModelStatEl.textContent = `Loading ${primaryModelName}${secondaryModelName ? " + " + secondaryModelName : ""}…`;
  }
  signalBadge.textContent = primarySignal.label;
  signalBadge.style.background = primarySignal.color;
  convictionEl.textContent = primarySignal.manualOverride === null
    ? `${primarySignal.conviction} / 100`
    : `${primarySignal.conviction} / 100 manual`;
  actionEl.textContent = primarySignal.action;
  tickerEl.textContent = tradePlan.ticker;
  contractMonthEl.textContent = tradePlan.contractMonth;
  priceEl.textContent = tradePlan.priceReady ? formatPrice(tradePlan.livePrice) : UNAVAILABLE_TEXT;
  entryLabelEl.textContent = tradePlan.entryLabel;
  targetLabelEl.textContent = tradePlan.targetLabel;
  targetBuyEl.textContent = tradePlan.priceReady ? formatPrice(tradePlan.buyPrice) : UNAVAILABLE_TEXT;
  targetSellEl.textContent = tradePlan.priceReady ? formatPrice(tradePlan.sellPrice) : UNAVAILABLE_TEXT;
  stopLossEl.textContent = tradePlan.priceReady ? formatPrice(tradePlan.stopLoss) : UNAVAILABLE_TEXT;
  buyWindowEl.textContent = tradePlan.buyWindow;
  priceSourceEl.textContent = tradePlan.priceSource;
  minLongEl.textContent = tradePlan.priceReady ? tradePlan.minLong : UNAVAILABLE_TEXT;
  minShortEl.textContent = tradePlan.priceReady ? tradePlan.minShort : UNAVAILABLE_TEXT;
  riskCopyEl.textContent = riskNotes[commodity];
  reasonsEl.innerHTML = "";
  paperStepsEl.innerHTML = "";

  reasons.slice(0, 4).forEach((reason) => {
    const item = document.createElement("li");
    item.textContent = reason;
    reasonsEl.append(item);
  });

  tradePlan.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    paperStepsEl.append(item);
  });

  executePaperTrading(commodity, commodityMeta, primarySignal, tradePlan, { allowOpen: true });
  renderKarpathyLoop(primarySignal, tradePlan);
  renderPaperTrading(commodity, primarySignal, tradePlan);
  maybeRecordAdvisorySnapshot(commodity, baseSignals, tradePlan);
  applyLLMDisplayOverride(commodity);
  maybeAutoTriggerLLM();
}

[
  commoditySelect,
  primaryModelSelect,
  inputs.trend,
  inputs.inventory,
  inputs.dollar,
  inputs.geopolitics,
  inputs.curve,
  inputs.horizon
].forEach((element) => {
  element.addEventListener("input", calculateSignal);
  element.addEventListener("change", calculateSignal);
});

if (inputs.manualConviction) {
  inputs.manualConviction.addEventListener("input", () => {
    setManualConvictionOverride(commoditySelect.value, inputs.manualConviction.value.trim() === "" ? null : inputs.manualConviction.value);
    calculateSignal();
  });
  inputs.manualConviction.addEventListener("change", () => {
    setManualConvictionOverride(commoditySelect.value, inputs.manualConviction.value.trim() === "" ? null : inputs.manualConviction.value);
    calculateSignal();
  });
}

function escapeHtml(value) {
  return String(value == null ? "" : value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[ch]);
}

function getLiveAdvisoryContext() {
  const commodity = commoditySelect ? commoditySelect.value : "oil";
  const baseSignals = readBaseSignals ? readBaseSignals() : {};
  const livePrice = lastTradePlan && lastTradePlan.priceReady ? lastTradePlan.livePrice : null;
  const primaryEntry = getModelById(primaryModelId);
  const secondaryEntry = getModelById(secondaryModelId);
  const body = {
    commodity,
    horizon: "intraday",
    context: {
      currentPrice: livePrice,
      signals: baseSignals,
      uiPrimaryModel: primaryEntry.name,
      uiSecondaryModel: secondaryEntry.name
    }
  };
  if (primaryEntry.openrouterId) body.model = primaryEntry.openrouterId;
  if (secondaryEntry.openrouterId) body.critic = secondaryEntry.openrouterId;
  return body;
}

function formatVerifiedTime(date) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    }).format(date);
  } catch (_e) {
    return date.toLocaleTimeString();
  }
}

function renderLLMVerification(data, requestPayload) {
  if (!llmVerificationBody) return;
  const primary = data && data.primary ? data.primary : {};
  const critic = data && data.critic ? data.critic : {};
  const consolidated = data && data.consolidated ? data.consolidated : (primary && primary.advisory) || {};
  const advisory = primary.advisory || {};
  const review = critic.review || {};
  const primaryUsage = primary.usage || {};
  const criticUsage = critic.usage || {};
  const totalCost = (Number(primaryUsage.cost) || 0) + (Number(criticUsage.cost) || 0);
  const fmt = (n) => (typeof n === "number" && isFinite(n)) ? n.toFixed(4) : "?";

  llmVerificationBody.hidden = false;
  llmVerificationBody.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
      <div style="background:#0a0e15;border:1px solid #1f2530;border-radius:8px;padding:12px;">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:.05em;opacity:.6;">Primary (verified from API)</div>
        <div style="font-family:ui-monospace,monospace;font-size:12px;margin-top:4px;color:#5eead4;">${escapeHtml(primary.model || "?")}</div>
        <div style="margin-top:8px;font-size:13px;">conviction: <strong>${escapeHtml(advisory.conviction ?? "?")}</strong> &middot; tone: <strong>${escapeHtml(advisory.tone ?? "?")}</strong></div>
        <div style="margin-top:6px;font-size:12px;opacity:.7;">cost: $${fmt(primaryUsage.cost)} &middot; latency: ${primary.elapsedMs ?? "?"}ms &middot; ${primaryUsage.total_tokens ?? "?"} tokens</div>
      </div>
      <div style="background:#0a0e15;border:1px solid #1f2530;border-radius:8px;padding:12px;">
        <div style="font-size:11px;text-transform:uppercase;letter-spacing:.05em;opacity:.6;">Critic (verified from API)</div>
        <div style="font-family:ui-monospace,monospace;font-size:12px;margin-top:4px;color:#5eead4;">${escapeHtml(critic.model || "?")}</div>
        <div style="margin-top:8px;font-size:13px;">agree: <strong>${escapeHtml(review.agree ?? "?")}</strong> &middot; adjustedConviction: <strong>${escapeHtml(review.adjustedConviction ?? "?")}</strong></div>
        <div style="margin-top:6px;font-size:12px;opacity:.7;">cost: $${fmt(criticUsage.cost)} &middot; latency: ${critic.elapsedMs ?? "?"}ms &middot; ${criticUsage.total_tokens ?? "?"} tokens</div>
      </div>
    </div>
    <div style="background:rgba(94,234,212,0.06);border:1px solid rgba(94,234,212,0.25);border-radius:8px;padding:12px;margin-bottom:8px;">
      <div style="font-size:11px;text-transform:uppercase;letter-spacing:.05em;color:#5eead4;">Consolidated (averaged, tone falls to wait on disagreement)</div>
      <div style="margin-top:6px;font-size:14px;">conviction: <strong>${escapeHtml(consolidated.conviction ?? "?")}</strong> &middot; tone: <strong>${escapeHtml(consolidated.tone ?? "?")}</strong> &middot; total cost this advisory: <strong>$${fmt(totalCost)}</strong></div>
    </div>
    ${advisory.summary ? `<div style="margin-top:8px;font-size:13px;line-height:1.5;">${escapeHtml(advisory.summary)}</div>` : ""}
    <details style="margin-top:12px;">
      <summary style="cursor:pointer;font-size:12px;opacity:.7;">Show raw API response (proof)</summary>
      <pre style="background:#05080d;border:1px solid #1f2530;border-radius:6px;padding:10px;font-size:11px;line-height:1.4;white-space:pre-wrap;word-break:break-word;margin-top:8px;max-height:400px;overflow:auto;">${escapeHtml(JSON.stringify({ request: requestPayload, response: data }, null, 2))}</pre>
    </details>
  `;
}

function llmDerivedLabel(tone, conviction) {
  const c = Math.max(0, Math.min(100, Number(conviction) || 50));
  if (tone === "long") return c >= 70 ? "Strong Long" : c >= 50 ? "Moderate Long" : "Lean Long";
  if (tone === "short") return c >= 70 ? "Strong Short" : c >= 50 ? "Moderate Short" : "Lean Short";
  return "Wait";
}

function llmDerivedAction(tone, conviction) {
  const c = Math.max(0, Math.min(100, Number(conviction) || 50));
  if (tone === "long") return c >= 70 ? "Long, full size" : c >= 50 ? "Lean long small" : "Lean long minimal";
  if (tone === "short") return c >= 70 ? "Short, full size" : c >= 50 ? "Lean short small" : "Lean short minimal";
  return "Wait for clarity";
}

function llmDerivedColor(tone) {
  if (tone === "long") return "#1d8456";
  if (tone === "short") return "#c4524d";
  return "#a47b22";
}

function applyLoadingPlaceholders() {
  const primaryName = getModelById(primaryModelId).name;
  const secondaryName = secondaryModelId ? getModelById(secondaryModelId).name : "";
  convictionEl.textContent = "Loading…";
  signalBadge.textContent = "Loading";
  signalBadge.style.background = "#374151";
  actionEl.textContent = `Calling ${primaryName}${secondaryName ? " + " + secondaryName + " critic" : ""}…`;
  reasonsEl.innerHTML = `<li style="opacity:.7">Calling ${escapeHtml(primaryName)} primary${secondaryName ? " + " + escapeHtml(secondaryName) + " critic" : ""} via OpenRouter…</li>`;
  riskCopyEl.textContent = "Risks pending — LLM call in flight.";
}

function applyLLMDisplayOverride(commodity) {
  const haveVerified = lastVerifiedLLMRun
    && lastVerifiedLLMRun.commodity === commodity
    && lastVerifiedLLMRun.advisory
    && typeof lastVerifiedLLMRun.advisory === "object";

  if (!haveVerified) {
    applyLoadingPlaceholders();
    return;
  }

  const adv = lastVerifiedLLMRun.advisory;
  const convictionRaw = Number(adv.conviction);
  const conviction = Number.isFinite(convictionRaw) ? convictionRaw : null;
  const tone = String(adv.tone || "wait").toLowerCase();

  convictionEl.textContent = conviction !== null
    ? `${conviction} / 100 (LLM)`
    : "— / 100 (LLM returned no numeric conviction)";
  signalBadge.textContent = llmDerivedLabel(tone, conviction ?? 50);
  signalBadge.style.background = llmDerivedColor(tone);
  actionEl.textContent = llmDerivedAction(tone, conviction ?? 50);

  if (Array.isArray(adv.reasons) && adv.reasons.length) {
    reasonsEl.innerHTML = "";
    adv.reasons.slice(0, 6).forEach((reason) => {
      const item = document.createElement("li");
      item.textContent = String(reason);
      reasonsEl.append(item);
    });
  } else {
    reasonsEl.innerHTML = '<li style="opacity:.6">(LLM returned no reasons array)</li>';
  }
  if (Array.isArray(adv.risks) && adv.risks.length) {
    riskCopyEl.textContent = adv.risks.join(" ");
  } else if (typeof adv.summary === "string") {
    riskCopyEl.textContent = adv.summary;
  } else {
    riskCopyEl.textContent = "(LLM returned no risks)";
  }
}

async function runLiveLLMAdvisor() {
  if (!llmRunBtn || !llmStatusEl) return;
  if (llmInFlight) return;
  llmInFlight = true;
  llmRunBtn.disabled = true;
  llmStatusEl.textContent = "calling Sonnet 4.6 + GPT-5-mini critic…";
  const payload = getLiveAdvisoryContext();
  const t0 = Date.now();
  try {
    const url = `${getMasterHistoryUrl()}/models/openrouter/advisory`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || `HTTP ${response.status}`);
    renderLLMVerification(data, payload);
    const consolidatedAdv = (data && data.consolidated) || (data && data.primary && data.primary.advisory) || {};
    const primaryAdv = (data && data.primary && data.primary.advisory) || {};
    lastVerifiedLLMRun = {
      commodity: payload.commodity,
      primaryModel: (data.primary && data.primary.model) || "?",
      criticModel: (data.critic && data.critic.model) || "?",
      time: formatVerifiedTime(new Date()),
      advisory: {
        conviction: consolidatedAdv.conviction ?? primaryAdv.conviction,
        tone: consolidatedAdv.tone ?? primaryAdv.tone,
        summary: primaryAdv.summary,
        reasons: primaryAdv.reasons,
        risks: primaryAdv.risks
      }
    };
    if (typeof calculateSignal === "function") calculateSignal();
    const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
    llmStatusEl.textContent = `done in ${elapsed}s · ${new Date().toLocaleTimeString()}`;
  } catch (err) {
    if (llmVerificationBody) {
      llmVerificationBody.hidden = false;
      llmVerificationBody.innerHTML = `<div style="color:#f87171;font-size:13px;padding:10px;background:rgba(248,113,113,0.08);border-radius:6px;">Error: ${escapeHtml(err.message)}</div>`;
    }
    llmStatusEl.textContent = "failed";
  } finally {
    llmInFlight = false;
    llmRunBtn.disabled = false;
  }
}

function maybeAutoTriggerLLM(force) {
  const commodity = commoditySelect ? commoditySelect.value : null;
  if (!commodity) return;
  const key = `${commodity}|${primaryModelId}|${secondaryModelId}`;
  if (!force && key === llmAutoCommodityKey) return;
  llmAutoCommodityKey = key;
  if (llmInFlight) return;
  if (lastVerifiedLLMRun && lastVerifiedLLMRun.commodity === commodity) return;
  setTimeout(() => { runLiveLLMAdvisor(); }, 50);
}

[
  commoditySelect,
  inputs.trend,
  inputs.inventory,
  inputs.dollar,
  inputs.geopolitics,
  inputs.curve,
  inputs.horizon
].forEach((el) => {
  if (el && el.addEventListener) {
    el.addEventListener("change", () => { lastVerifiedLLMRun = null; });
  }
});

if (llmRunBtn) {
  llmRunBtn.addEventListener("click", runLiveLLMAdvisor);
}

primaryModelSelect.addEventListener("change", () => {
  primaryModelId = primaryModelSelect.value;
  lastVerifiedLLMRun = null;
  llmAutoCommodityKey = null;
  renderSecondOpinionControls();
  saveModelSettings();
  calculateSignal();
});
commoditySelect.addEventListener("change", refreshSelectedCoinbasePrice);
commoditySelect.addEventListener("change", () => {
  connectCoinbaseWebSocket(commoditySelect.value);
  const contractInput = document.querySelector("#live-trade-contract");
  const commodityInput = document.querySelector("#live-trade-commodity");
  if (commodityInput) commodityInput.value = commoditySelect.value;
  if (contractInput && !contractInput.value.trim()) contractInput.value = marketConfig[commoditySelect.value]?.ticker || "";
});
historyPeriodFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-period]");
  if (!button) return;

  historyFiltersTouched = true;
  historyPeriodFilter = button.dataset.period;
  expandedTransactionId = null;
  calculateSignal();
});
advisoryCommodityFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-advisory-commodity]");
  if (!button) return;

  advisoryCommodityFilter = button.dataset.advisoryCommodity;
  renderAdvisoryFilterButtons();
  renderAdvisoryChart();
});
advisoryHorizonFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-advisory-horizon]");
  if (!button) return;

  advisoryHorizonFilter = button.dataset.advisoryHorizon;
  renderAdvisoryFilterButtons();
  renderAdvisoryChart();
});
advisoryPeriodFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-advisory-period]");
  if (!button) return;

  advisoryPeriodFilter = button.dataset.advisoryPeriod;
  renderAdvisoryFilterButtons();
  renderAdvisoryChart();
});
syncAdvisoryHistoryEl.addEventListener("click", () => loadSharedAdvisoryHistory(true));
advisoryScoreThresholdEl.addEventListener("change", saveAdvisoryScoreThreshold);
cleanHistoryEl.addEventListener("click", cleanSharedTransactionHistory);
exportHistoryEl.addEventListener("click", downloadSharedHistory);
liveTradeFormEl?.addEventListener("submit", addLiveTradeFromForm);
paperEquityInputEl.addEventListener("change", updatePaperEquitySetting);
paperRiskInputEl.addEventListener("change", updatePaperRiskSetting);
coinbaseSandboxEnabledEl.addEventListener("change", () => {
  setCoinbaseSandboxEnabled(true);
  saveSharedSettings();
  calculateSignal();
});
secondOpinionModelsEl.addEventListener("change", () => {
  updateSecondOpinionRunState();
  saveModelSettings();
});
secondOpinionPromptsEl.addEventListener("change", () => {
  updateSecondOpinionRunState();
  saveModelSettings();
});
secondOpinionSelectAllEl.addEventListener("click", () => {
  const boxes = Array.from(secondOpinionModelsEl.querySelectorAll("input[type='checkbox']"));
  const shouldSelectAll = boxes.some((input) => !input.checked);
  boxes.forEach((input) => {
    input.checked = shouldSelectAll;
  });
  updateSecondOpinionRunState();
  saveModelSettings();
});
secondOpinionRunSelectedEl.addEventListener("click", () => {
  renderSecondOpinionResults(getSelectedSecondOpinionModels());
});
secondOpinionRunAllEl.addEventListener("click", () => {
  const modelIds = advisoryModels
    .map(({ id }) => id)
    .filter((id) => id !== primaryModelId);
  secondOpinionModelsEl.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = modelIds.includes(input.value);
  });
  renderSecondOpinionResults(modelIds);
});
saveOpenBrainEndpointEl.addEventListener("click", () => {
  window.localStorage.setItem(OPEN_BRAIN_ENDPOINT_KEY, openBrainEndpointEl.value.trim());
  renderOpenBrainMemory();
});
captureOpenBrainAdvisoryEl.addEventListener("click", () => {
  const event = captureCurrentAdvisoryMemory("manual");
  openBrainStatusEl.textContent = event ? "Advisory captured" : "No advisory to capture";
});
exportOpenBrainMemoryEl.addEventListener("click", downloadOpenBrainMemory);
strategyEditorEl?.addEventListener("submit", saveStrategyEditor);
strategyEditorCancelEl?.addEventListener("click", closeStrategyEditor);
document.querySelectorAll("[data-strategy-edit]").forEach((button) => {
  button.addEventListener("click", () => openStrategyEditor(button.dataset.strategyEdit));
});
appShellEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-section-target]");
  if (!button || !appShellEl.contains(button)) return;
  setActiveSection(button.dataset.sectionTarget);
});
userAddFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  addUser(userNameInputEl.value, userEmailInputEl.value);
});
userSearchInputEl.addEventListener("input", () => {
  userSearchQuery = userSearchInputEl.value;
  renderUserManagement();
});
userSearchButtonEl.addEventListener("click", () => {
  userSearchQuery = userSearchInputEl.value;
  renderUserManagement();
});
backToUsersButtonEl.addEventListener("click", closeUserDetail);
userInlineDetailCloseEl?.addEventListener("click", closeUserDetail);
userStatCards.forEach((card) => {
  card.addEventListener("click", () => {
    userListFilter = card.dataset.userListFilter || "all";
    expandedUserEmail = "";
    editingUserEmail = "";
    renderUserManagement();
  });
});
featureTypeFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-feature-type]");
  if (!button) return;
  featureTypeFilter = button.dataset.featureType;
  renderFeatureRequests();
});
featureNewButtonEl.addEventListener("click", () => {
  featureFormEl.hidden = !featureFormEl.hidden;
  if (!featureFormEl.hidden) featureTitleInputEl.focus();
});
featureFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  addFeatureRequest();
});

accessFormEl.addEventListener("submit", handleAccessSubmit);

function hasValidAccessSession() {
  if (window.sessionStorage.getItem(ACCESS_STATE_KEY) !== "true") return false;
  loadUserRoster();
  const user = findRegisteredUserByEmail(window.sessionStorage.getItem(ACCESS_EMAIL_KEY));
  if (user) return true;

  window.sessionStorage.removeItem(ACCESS_STATE_KEY);
  window.sessionStorage.removeItem(ACCESS_EMAIL_KEY);
  return false;
}

function initializeApp() {
  if (appStarted) return;
  appStarted = true;

  loadUserRoster();
  loadPaperState();
  applyCurrentUserPaperSettings();
  loadModelSettings();
  applySavedStrategyEdits();
  loadOpenBrainMemory();
  loadAdvisoryScoreThreshold();
  loadFeatureRequests();
  loadLiveTradeLedger();
  const liveCommodityInput = document.querySelector("#live-trade-commodity");
  const liveContractInput = document.querySelector("#live-trade-contract");
  if (liveCommodityInput) liveCommodityInput.value = commoditySelect.value;
  if (liveContractInput) liveContractInput.value = marketConfig[commoditySelect.value]?.ticker || "";
  markCurrentSessionActive();
  renderPrimaryModelSelector();
  renderSecondOpinionControls();
  renderOpenBrainMemory();
  renderCurrentUserStrategy();
  showUserManagement();
  renderFeatureRequests();
  setActiveSection(activeSection);
  initializeHistoryApiControls();
  renderHistoryFilterButtons();
  renderPeriodFilterButtons();
  renderAdvisoryFilterButtons();
  loadBundledTransactionHistory();
  calculateSignal();
  initializeBackendState();
  connectCoinbaseWebSocket(commoditySelect.value);
  refreshSelectedCoinbasePrice();
  window.setInterval(refreshSelectedCoinbasePrice, LIVE_PRICE_REFRESH_MS);
  window.setInterval(loadSharedSettings, BACKEND_SETTINGS_SYNC_MS);
  window.setInterval(autoSyncTransactionHistory, BACKEND_TRANSACTION_SYNC_MS);
  window.setInterval(loadSharedAdvisoryHistory, BACKEND_ADVISORY_SYNC_MS);
  // Even if the user is viewing a different commodity, keep stop/target logic moving for any open paper trades.
  window.setInterval(closeOnlyPaperSweep, Math.max(5000, Math.floor(LIVE_PRICE_REFRESH_MS / 2)));
  window.addEventListener("resize", renderAdvisoryChart);
}

if (hasValidAccessSession()) {
  showAppShell();
  initializeApp();
} else {
  accessEmailEl.focus();
}
