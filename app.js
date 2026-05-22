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
const homeMarketPreviewEl = document.querySelector("#home-market-preview");
const homeMarketTitleEl = document.querySelector("#home-market-title");
const homeMarketDetailEl = document.querySelector("#home-market-detail");
const homeMarketContractEl = document.querySelector("#home-market-contract");
const homeMarketPriceEl = document.querySelector("#home-market-price");
const homeMarketSourceEl = document.querySelector("#home-market-source");
const homeMarketSwitcherEl = document.querySelector("#home-market-switcher");
const homeMarketChartEl = document.querySelector("#home-market-chart");
const homeMarketRangesEl = document.querySelector("#home-market-ranges");
const homeMarketAlertsEl = document.querySelector("#home-market-alerts");
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
const leaderboardRefreshEl = document.querySelector("#leaderboard-refresh");
const leaderboardTeamPnlEl = document.querySelector("#leaderboard-team-pnl");
const leaderboardTopPnlEl = document.querySelector("#leaderboard-top-pnl");
const leaderboardTopNameEl = document.querySelector("#leaderboard-top-name");
const leaderboardActiveCountEl = document.querySelector("#leaderboard-active-count");
const leaderboardWinRateEl = document.querySelector("#leaderboard-win-rate");
const leaderboardUpdatedEl = document.querySelector("#leaderboard-updated");
const leaderboardChartEl = document.querySelector("#leaderboard-chart");
const leaderboardBodyEl = document.querySelector("#leaderboard-body");
const leaderboardRankControlsEl = document.querySelector("#leaderboard-rank-controls");
const leaderboardRankLabelEl = document.querySelector("#leaderboard-rank-label");
const leaderboardPeriodControlsEl = document.querySelector("#leaderboard-period-controls");
const leaderboardPeriodLabelEl = document.querySelector("#leaderboard-period-label");
const leaderboardUserDetailPanelEl = document.querySelector("#leaderboard-user-detail-panel");
const leaderboardUserDetailTitleEl = document.querySelector("#leaderboard-user-detail-title");
const leaderboardUserDetailBodyEl = document.querySelector("#leaderboard-user-detail-body");
const leaderboardUserDetailCloseEl = document.querySelector("#leaderboard-user-detail-close");
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
let skillSystemButtons = Array.from(document.querySelectorAll("[data-skill-system]"));
const skillsSidebarEl = document.querySelector("#skills-sidebar");
const skillsDetailCardEl = document.querySelector("#skills-detail-card");
const skillAddNewEl = document.querySelector("#skill-add-new");
const skillVoiceButtonEl = document.querySelector("#skill-voice-button");
const skillInspectButtonEl = document.querySelector("#skill-inspect-button");
const skillSearchInputEl = document.querySelector("#skill-search-input");
const skillEditorFormEl = document.querySelector("#skill-editor-form");
const skillEditIdEl = document.querySelector("#skill-edit-id");
const skillNameInputEl = document.querySelector("#skill-name-input");
const skillBodyInputEl = document.querySelector("#skill-body-input");
const skillTagsInputEl = document.querySelector("#skill-tags-input");
const skillAdoptAdvisoryInputEl = document.querySelector("#skill-adopt-advisory-input");
const skillAdoptOpinionInputEl = document.querySelector("#skill-adopt-opinion-input");
const skillEditorResetEl = document.querySelector("#skill-editor-reset");
const skillVoiceStatusEl = document.querySelector("#skill-voice-status");
const customSkillListEl = document.querySelector("#custom-skill-list");
const strategyEditorEl = document.querySelector("#strategy-editor");
const strategyEditorCancelEl = document.querySelector("#strategy-editor-cancel");
const strategyEditKeyEl = document.querySelector("#strategy-edit-key");
const strategyEditTitleEl = document.querySelector("#strategy-edit-title");
const strategyEditMetaEl = document.querySelector("#strategy-edit-meta");
const strategyEditSummaryEl = document.querySelector("#strategy-edit-summary");
const strategyEditNoteEl = document.querySelector("#strategy-edit-note");
const strategyReferenceButtonEl = document.querySelector("#strategy-reference-button");
const strategyEnginePanelEl = document.querySelector("#strategy-engine-panel");
const strategyHistoryPanelEl = document.querySelector("#strategy-history-panel");
const coachTelemetryEl = document.querySelector("#coach-telemetry");
const tokenCostsRefreshEl = document.querySelector("#token-costs-refresh");
const tokenCostsStatusEl = document.querySelector("#token-costs-status");
const tokenRefreshHoursEl = document.querySelector("#token-llm-refresh-hours");
const tokenScheduleSlotsEl = document.querySelector("#token-schedule-slots");
const tokenEstimatedCallsEl = document.querySelector("#token-estimated-calls");
const tokenModelListEl = document.querySelector("#token-model-list");
const tokenJobBreakdownEl = document.querySelector("#token-job-breakdown");
const commoditySelect = document.querySelector("#commodity");
const primaryModelSelect = document.querySelector("#primary-model");
const primaryModelStatEl = document.querySelector("#primary-model-stat");
const commodityStrip = document.querySelector("#commodity-strip");
const inputsTitle = document.querySelector("#inputs-title");
const outputTitle = document.querySelector("#output-title");
const advisorDetailToggleEl = document.querySelector("#advisor-detail-toggle");
const advisorDecisionDetailEl = document.querySelector("#advisor-decision-detail");
const advisorDecisionDetailBodyEl = document.querySelector("#advisor-decision-detail-body");
const llmRunBtn = document.querySelector("#llm-run-btn");
const llmStatusEl = document.querySelector("#llm-status");
const llmVerificationBody = document.querySelector("#llm-verification-body");
const signalBadge = document.querySelector("#signal-badge");
const signalStabilityStrip = document.querySelector("#signal-stability-strip");
const signalExplanationEl = document.querySelector("#signal-explanation");
const advisoryMarketStatusCardEl = document.querySelector("#advisory-market-status-card");
const advisoryMarketStatusEl = document.querySelector("#advisory-market-status");
const advisoryMarketDetailEl = document.querySelector("#advisory-market-detail");
const convictionEl = document.querySelector("#conviction");
const localConvictionUpdatedEl = document.querySelector("#local-conviction-updated");
const llmConvictionEl = document.querySelector("#llm-conviction");
const llmConvictionUpdatedEl = document.querySelector("#llm-conviction-updated");
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
const setupGradeEl = document.querySelector("#setup-grade");
const rewardRiskEl = document.querySelector("#reward-risk");
const keyDriverEl = document.querySelector("#key-driver");
const microEdgeEl = document.querySelector("#micro-edge");
const shortTriggerEl = document.querySelector("#short-trigger");
const microReadEl = document.querySelector("#micro-read");
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
const advisoryAdoptedSystemsEl = document.querySelector("#advisory-adopted-systems");
const advisoryStrategyToggleEl = document.querySelector("#advisory-strategy-toggle");
const advisoryStrategyDetailEl = document.querySelector("#advisory-strategy-detail");
const lowPowerModeToggleEl = document.querySelector("#low-power-mode-toggle");
const lowPowerModeStatusEl = document.querySelector("#low-power-mode-status");
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
const paperDecisionLogEl = document.querySelector("#paper-decision-log");
const paperDecisionLogStatusEl = document.querySelector("#paper-decision-log-status");
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
const refreshLiveLedgerEl = document.querySelector("#refresh-live-ledger");
const liveAgentSelectEl = document.querySelector("#live-agent-select");
const liveChannelSelectEl = document.querySelector("#live-channel-select");
const comparePaperPnlEl = document.querySelector("#compare-paper-pnl");
const compareRealPnlEl = document.querySelector("#compare-real-pnl");
const compareDifferenceEl = document.querySelector("#compare-difference");
const compareRecordsEl = document.querySelector("#compare-records");
const paperRealBreakdownEl = document.querySelector("#paper-real-breakdown");
const advisoryHistoryStatusEl = document.querySelector("#advisory-history-status");
const advisoryCommodityFiltersEl = document.querySelector("#advisory-commodity-filters");
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
const accuracyCalibrationGridEl = document.querySelector("#accuracy-calibration-grid");
const accuracyBarsEl = document.querySelector("#accuracy-bars");
const accuracyOutcomesEl = document.querySelector("#accuracy-outcomes");
const edgeDashboardStatusEl = document.querySelector("#edge-dashboard-status");
const edgeLongExpectancyEl = document.querySelector("#edge-long-expectancy");
const edgeLongDetailEl = document.querySelector("#edge-long-detail");
const edgeShortExpectancyEl = document.querySelector("#edge-short-expectancy");
const edgeShortDetailEl = document.querySelector("#edge-short-detail");
const edgeOverallExpectancyEl = document.querySelector("#edge-overall-expectancy");
const edgeOverallDetailEl = document.querySelector("#edge-overall-detail");
const edgeFeeDragEl = document.querySelector("#edge-fee-drag");
const edgeFeeDetailEl = document.querySelector("#edge-fee-detail");
const edgeBreakdownEl = document.querySelector("#edge-breakdown");
const advisoryChartEl = document.querySelector("#advisory-chart");
const microLearningStatusEl = document.querySelector("#micro-learning-status");
const microLearningLongEl = document.querySelector("#micro-learning-long");
const microLearningShortEl = document.querySelector("#micro-learning-short");
const microLearningFlatEl = document.querySelector("#micro-learning-flat");
const microLearningGuidanceEl = document.querySelector("#micro-learning-guidance");
const microLearningBarsEl = document.querySelector("#micro-learning-bars");
const reasonsEl = document.querySelector("#reasons");
const riskCopyEl = document.querySelector("#risk-copy");

const inputs = {
  trend: document.querySelector("#trend"),
  inventory: document.querySelector("#inventory"),
  dollar: document.querySelector("#dollar"),
  geopolitics: document.querySelector("#geopolitics"),
  curve: document.querySelector("#curve"),
  manualConviction: document.querySelector("#manual-conviction")
};

const ADVISORY_SIGNAL_WEIGHT = 1;

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
    ticker: "NOLM6",
    productId: "NOL-19JUN26-CDE",
    contractMonth: "June 2026",
    productType: "Coinbase futures contract",
    contractExpiresAt: "2026-06-19T17:00:00-04:00",
    rollBeforeDays: 3,
    contracts: [
      { ticker: "NOLK6", productId: "NOL-18MAY26-CDE", contractMonth: "May 2026", contractExpiresAt: "2026-05-18T17:00:00-04:00" },
      { ticker: "NOLM6", productId: "NOL-19JUN26-CDE", contractMonth: "June 2026", contractExpiresAt: "2026-06-19T17:00:00-04:00" },
      { ticker: "NOLN6", productId: "NOL-20JUL26-CDE", contractMonth: "July 2026", contractExpiresAt: "2026-07-20T17:00:00-04:00" }
    ],
    referencePrice: null,
    contractMultiplier: 10,
    marginRateLong: 1 / 7.2,
    marginRateShort: 1 / 6.2,
    feePerContractSide: 1.17,
    feeLabel: "Coinbase displayed futures fee estimate",
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
  { id: "gpt-5-5", name: "ChatGPT 5.5", provider: "OpenAI", badge: "O", tilt: 0, style: "OpenAI flagship (live LLM via OpenRouter)", openrouterId: "openai/gpt-5.5" },
  { id: "gpt-5-4", name: "ChatGPT 5.4", provider: "OpenAI", badge: "O", tilt: -2, style: "cost-aware OpenAI (live LLM via OpenRouter)", openrouterId: "openai/gpt-5.4" },
  { id: "perplexity", name: "Perplexity", provider: "Perplexity", badge: "P", tilt: -4, style: "search-augmented LLM (live LLM via OpenRouter)", openrouterId: "perplexity/sonar" },
  { id: "gemini", name: "Gemini", provider: "Google", badge: "G", tilt: 3, style: "mapped to gemini-2.5-flash on the live API", openrouterId: "google/gemini-2.5-flash" },
  { id: "claude", name: "Claude", provider: "Anthropic", badge: "C", tilt: -1, style: "Anthropic flagship (mapped to claude-sonnet-4.6)", openrouterId: "anthropic/claude-sonnet-4.6" },
  { id: "grok", name: "Grok", provider: "xAI", badge: "X", tilt: 5, style: "xAI momentum scan (mapped to grok-4)", openrouterId: "x-ai/grok-4" }
];

const opinionPromptLabels = {
  technician: "Master Technician Analysis",
  "risk-manager": "Risk Manager Challenge",
  macro: "Macro Cross-Check"
};

const DEFAULT_SECOND_OPINION_ANALYST_SKILLS = [
  {
    id: "technician",
    name: "Master Technician Analysis",
    body: "Review price trend, VWAP behavior, momentum, support, resistance, and setup quality. Confirm only when the technical structure supports the main advisory.",
    tags: ["analyst", "second-opinion", "technical"],
    adoptAdvisory: false,
    adoptOpinion: true,
    createdAt: "2026-05-10T00:00:00.000Z",
    updatedAt: "2026-05-10T00:00:00.000Z"
  },
  {
    id: "risk-manager",
    name: "Risk Manager Challenge",
    body: "Challenge the advisory from a capital-preservation view. Look for weak conviction, poor reward/risk, unstable direction, overnight gap risk, and conditions where waiting is better than forcing a trade.",
    tags: ["analyst", "second-opinion", "risk"],
    adoptAdvisory: false,
    adoptOpinion: true,
    createdAt: "2026-05-10T00:00:00.000Z",
    updatedAt: "2026-05-10T00:00:00.000Z"
  },
  {
    id: "macro",
    name: "Macro Cross-Check",
    body: "Cross-check the commodity call against dollar pressure, inventory context, rates, geopolitics, energy headlines, and broad risk tone before confirming the advisory.",
    tags: ["analyst", "second-opinion", "macro"],
    adoptAdvisory: false,
    adoptOpinion: true,
    createdAt: "2026-05-10T00:00:00.000Z",
    updatedAt: "2026-05-10T00:00:00.000Z"
  }
];

const latestPrices = new Map();
const latestPriceTimes = new Map();
const latestPriceSources = new Map();
const latestPriceProductIds = new Map();
const confirmedLivePrices = new Map();
const confirmedLivePriceTimes = new Map();
const confirmedLivePriceSources = new Map();
const confirmedLivePriceProductIds = new Map();
const priceTickHistory = new Map();
const productMinimums = new Map();
const advisorySideState = new Map();
const LIVE_PRICE_REFRESH_MS = 30000;
const PAPER_CLOSE_PRICE_REFRESH_MS = 5000;
const SNAPSHOT_PRICE_REFRESH_MS = 60000;
const BACKEND_TRANSACTION_SYNC_MS = 300000;
const BACKEND_SETTINGS_SYNC_MS = 120000;
const BACKEND_ADVISORY_SYNC_MS = 300000;
const BACKEND_FAILURE_BACKOFF_MS = 300000;
const BACKEND_REQUEST_TIMEOUT_MS = 10000;
const CLOUD_SOURCE_FETCH_TIMEOUT_MS = 30000;
const ADVISORY_SUMMARY_TIMEOUT_MS = 5000;
const BACKEND_HISTORY_SAVE_DEBOUNCE_MS = 120000;
const BACKEND_HISTORY_MIN_WRITE_INTERVAL_MS = 300000;
const CLOUDFLARE_SOURCE_OF_TRUTH_REQUIRED = true;
const STALE_UNCLOSED_OPEN_TRADE_MS = 7 * 24 * 60 * 60 * 1000;
const LOCAL_MOCK_BACKEND_PARAM = "mock-backend";
const LOCAL_MOCK_BACKEND_LEDGER_URL = "./dev/mock-ledger.json";
const LLM_SCHEDULE_CHECK_MS = 60000;
const DEFAULT_LLM_REFRESH_HOURS = 6;
const LLM_REFRESH_HOUR_OPTIONS = [1, 2, 3, 4, 6, 8, 12, 24];
const LLM_REFRESH_HOURS_KEY = "comhedge-llm-refresh-hours-v1";
const LLM_SCHEDULE_SLOT_KEY = "comhedge-llm-schedule-slot-v1";
const LLM_LAST_RUN_KEY = "comhedge-llm-last-run-v1";
const DEFAULT_PRIMARY_MODEL_ID = "gpt-5-5";
const PAPER_START_EQUITY = 1000;
const PAPER_DEFAULT_RISK_PCT = 0.75;
const PAPER_MIN_CONVICTION = 50;
const MARTINGALE_MAX_STEP = 4;
const KARPATHY_SAMPLE_SIZE = 12;
const COINBASE_WS_URL = "wss://advanced-trade-ws.coinbase.com";
const COINBASE_WS_STALE_MS = 180000;
const PAPER_EXIT_PRICE_STALE_MS = 180000;
const DEFAULT_HISTORY_API_URL = "https://trading-site-scripts.peter-bell54.workers.dev";
const UNAVAILABLE_TEXT = "Not available";
const PRICE_TICK_WINDOW_MS = 10 * 60 * 1000;
const MICRO_PREDICTOR_MIN_TICKS = 6;
const MICRO_SHORT_TRIGGER_BPS = -3.5;
const MICRO_LONG_TRIGGER_BPS = 3.5;
const ADVISORY_SIDE_FLIP_HOLD_MS = 120000;
const ADVISORY_STRONG_FLIP_BOUNDED = 35;
const COINBASE_SANDBOX_KEY = "atlas-coinbase-sandbox-enabled";
const ADVISORY_SNAPSHOT_KEY = "atlas-last-advisory-snapshot-key";
const ACCESS_STATE_KEY = "atlas-access-unlocked";
const ACCESS_EMAIL_KEY = "atlas-access-email";
const ACCESS_SESSION_RECORDED_KEY = "atlas-access-session-recorded";
const ACCESS_SESSION_ID_KEY = "atlas-access-session-id";
const SESSION_HEARTBEAT_MS = 300000;
const ACTIVE_SESSION_WINDOW_MS = 10 * 60 * 1000;
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
const CUSTOM_STRATEGIES_KEY = "comhedge-custom-strategies-v1";
const LIVE_TRADE_LEDGER_KEY = "comhedge-live-trades-v1";
const KARPATHY_AUTO_APPLY_MIGRATION_KEY = "comhedge-karpathy-auto-apply-migration-v1";
const MARKOV_TEST_AGENT_MIGRATION_KEY = "comhedge-markov-test-agent-migration-v2";
const PETER_MISSED_REENTRY_MIGRATION_KEY = "comhedge-peter-missed-reentry-migration-v1";
const PAPER_TRADE_MODE = "P";
const REAL_TRADE_MODE = "R";
const DEFAULT_NON_EXEMPT_USER_EQUITY = 1000;
const OIL_ONLY_COMMODITIES = ["oil"];
const ADVISORY_SCORE_THRESHOLD_KEY = "atlas-advisory-score-threshold";
const MANUAL_CONVICTION_OVERRIDES_KEY = "comhedge-manual-conviction-overrides-v1";
const ADVISORY_HISTORY_LOCAL_KEY = "comhedge-advisory-history-v1";
const ADVISORY_PENDING_LOCAL_KEY = "comhedge-pending-advisory-snapshots-v1";
const MICRO_PREDICTION_HISTORY_LOCAL_KEY = "comhedge-micro-predictions-v1";
const MICRO_PREDICTION_PENDING_LOCAL_KEY = "comhedge-pending-micro-predictions-v1";
const MICRO_PREDICTION_CAPTURE_KEY = "comhedge-last-micro-prediction-key-v1";
const LEADERBOARD_RANK_KEY = "comhedge-leaderboard-rank-v2";
const LEADERBOARD_PERIOD_KEY = "comhedge-leaderboard-period-v1";
const LEADERBOARD_DISPLAY_CACHE_KEY = "comhedge-leaderboard-display-cache-v1";
const LEADERBOARD_DISPLAY_CACHE_MAX_AGE_MS = 10 * 60 * 1000;
const LOW_POWER_MODE_KEY = "comhedge-low-power-mode-v1";
const DIRECT_COINBASE_FEED_KEY = "comhedge-direct-coinbase-feed-v1";
const NORMAL_SIGNAL_THROTTLE_MS = 1000;
const LOW_POWER_SIGNAL_THROTTLE_MS = 10000;
const HIDDEN_SIGNAL_THROTTLE_MS = 15000;
const NORMAL_CHART_THROTTLE_MS = 3000;
const LOW_POWER_CHART_THROTTLE_MS = 30000;
const HIDDEN_CHART_THROTTLE_MS = 60000;
const NORMAL_PAPER_SWEEP_THROTTLE_MS = 2000;
const LOW_POWER_PAPER_SWEEP_THROTTLE_MS = 10000;
const HIDDEN_PAPER_SWEEP_THROTTLE_MS = 30000;
const NORMAL_LIVE_PRICE_PAINT_MS = 250;
const LOW_POWER_LIVE_PRICE_PAINT_MS = 750;
const HIDDEN_LIVE_PRICE_PAINT_MS = 5000;
const BROWSER_PAPER_EXECUTION_ENABLED = false;
const LEADERBOARD_DEFAULT_RANK = "closed-pnl";
const LEADERBOARD_DEFAULT_PERIOD = "all";
const LEADERBOARD_RANK_OPTIONS = {
  "closed-pnl": { label: "Closed P/L", emptyLast: true },
  "total-pnl": { label: "Total P/L", emptyLast: true },
  "open-pnl": { label: "Open P/L", emptyLast: true },
  trades: { label: "Trades", emptyLast: true },
  "win-rate": { label: "Win Rate", emptyLast: true },
  expectancy: { label: "Ave Trade Profit", emptyLast: true }
};
const LEADERBOARD_PERIOD_OPTIONS = {
  all: { label: "All Time", ms: null },
  hour: { label: "Hour", ms: 60 * 60 * 1000 },
  day: { label: "Day", ms: 24 * 60 * 60 * 1000 },
  week: { label: "Week", ms: 7 * 24 * 60 * 60 * 1000 },
  month: { label: "Month", ms: 31 * 24 * 60 * 60 * 1000 },
  year: { label: "Year", ms: 366 * 24 * 60 * 60 * 1000 }
};
const ADVISORY_CAPTURE_MS = 120000;
const MICRO_PREDICTION_CAPTURE_MS = 60000;
const MICRO_PREDICTION_HORIZONS = [60, 180, 300, 600];
const ADVISORY_HORIZON = "intraday";
const ADVISORY_PERIODS = {
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 31 * 24 * 60 * 60 * 1000,
  year: 366 * 24 * 60 * 60 * 1000
};
const HOME_MARKET_PERIODS = {
  hour: { label: "1H", ms: 60 * 60 * 1000 },
  day: { label: "1D", ms: 24 * 60 * 60 * 1000 },
  week: { label: "1W", ms: 7 * 24 * 60 * 60 * 1000 },
  month: { label: "1M", ms: 31 * 24 * 60 * 60 * 1000 },
  all: { label: "All", ms: null }
};
const HOME_MARKET_REFRESH_MS = 60000;
const ADVISORY_EVALUATION_WINDOW_MS = 10 * 60 * 1000;
const ADVISORY_OUTCOME_LEARNER_MIN_SAMPLES = 8;
const ADVISORY_OUTCOME_LEARNER_SAMPLE_SIZE = 160;
const ADVISORY_CALIBRATION_MIN_SIDE_SAMPLES = 8;
const ADVISORY_EXPLORATION_MODE = false;
const DEFAULT_ADVISORY_SCORE_THRESHOLD = 60;
const ADVISORY_SCORE_BANDS = [
  { label: "Below 50", min: 0, max: 49 },
  { label: "50-54", min: 50, max: 54 },
  { label: "55-60", min: 55, max: 60 },
  { label: "61-70", min: 61, max: 70 },
  { label: "71+", min: 71, max: 100 }
];
const KARPATHY_OIL_COACH_TEXT = "Use the Karpathy loop to improve oil trading decisions by learning from closed trade outcomes and forecast accuracy. The advisory model makes the initial long, short, or wait call. The Karpathy loop reviews outcomes after the fact and adjusts thresholds over time. It should make the advisor more selective in flat or mixed markets. It should increase confidence only when market structure, momentum, and confirmation agree. It should not force extra trades or increase size without stronger evidence. Goal: better long/short/wait decisions, fewer weak trades, and smarter behavior in choppy oil markets.";
const MARKOV_HEDGE_FUND_METHOD_TEXT = "Markov Hedge Fund Method overlay: classify oil into bull, bear, or sideways states from recent returns and transition evidence, then use the state as a probability gate. In bull state, prefer long continuation unless breakdown is confirmed. In bear state, prefer short continuation unless reversal is confirmed. In sideways state, raise the entry bar and reduce size. Treat the matrix-style regime read as a risk filter, not a reason to overtrade.";
const DEFAULT_USER_STRATEGY = {
  name: "Martingale with Karpathy loop",
  type: "martingale-karpathy",
  description: "Use four Martingale steps, then let the Karpathy loop adjust the advisory threshold from trade outcomes.",
  martingaleSteps: 4,
  karpathyLoop: true,
  karpathyCoachText: KARPATHY_OIL_COACH_TEXT,
  karpathyFlatSelectivity: true,
  karpathyConfirmationGate: true,
  karpathyAutoApply: true,
  karpathyRecommendation: null,
  advisoryOutcomeLearner: true,
  skillsAccess: true,
  openBrainAccess: true,
  skillFocus: "Lessons from Paper Trades",
  openBrainMemory: "Capture trade decisions, advisory context, and outcomes before changing thresholds.",
  regimeAware: true,
  flatMaxMartingaleSteps: 2,
  flatSizeMultiplier: 0.5,
  flatThresholdBoost: 4,
  flatMinEdgePercent: 56,
  flatMinVolatilityBps: 0.8,
  trendingMinEdgePercent: 58,
  trendingMinVolatilityBps: 1.2,
  breakoutParticipation: true,
  breakoutMinEdgePercent: 55,
  breakoutMinVolatilityBps: 0.8,
  breakoutMinMoveBps: 3,
  trendCaptureMode: true,
  markovHedgeFundMethod: false,
  markovRegimeMoveBps: 8,
  markovSidewaysThresholdBoost: 5,
  markovSidewaysSizeMultiplier: 0.5,
  trendDayDirectionalHold: true,
  blockLongsInFallingTrend: true,
  volatilityAwareStops: true,
  postStopShortReentry: true,
  trendDayBias: true,
  noChaseEntries: true,
  pullbackEntryRequired: true,
  profitLockTrailingStop: true,
  missedOpportunityLearner: true,
  missedOpportunityReentry: false,
  noChaseMoveBps: 18,
  pullbackMinRetraceBps: 2,
  profitLockMinMoveBps: 10,
  profitLockGivebackPct: 35,
  missedOpportunityMoveBps: 20
};
const D2_OIL_TEST_AGENT_STRATEGY = {
  ...DEFAULT_USER_STRATEGY,
  name: "D2 Oil Futures Test Agent",
  type: "oil-paper-learning-agent",
  oilMissionEnabled: true,
  description: "Use D2 as the ComHedge oil futures experiment account. Paper trade the active Coinbase oil contract, compare advisory calls against outcomes, and only tighten or loosen rules when closed-trade evidence supports it.",
  martingaleSteps: 3,
  skillFocus: "Coinbase oil futures paper-trade learning",
  openBrainMemory: "For D2, capture every oil futures paper decision with contract, product ID, advisory tone, conviction, price, target, stop, exit reason, and what rule should change before the next experiment.",
  flatMaxMartingaleSteps: 1,
  flatSizeMultiplier: 0.4,
  flatThresholdBoost: 6,
  flatMinEdgePercent: 58,
  trendingMinEdgePercent: 60,
  breakoutMinEdgePercent: 57,
  markovHedgeFundMethod: true,
  missedOpportunityReentry: false,
  noChaseMoveBps: 14,
  pullbackMinRetraceBps: 3,
  profitLockMinMoveBps: 8,
  missedOpportunityMoveBps: 16
};
const PETER_OIL_TEST_AGENT_STRATEGY = {
  ...DEFAULT_USER_STRATEGY,
  name: "Peter Oil Futures Test Agent",
  type: "oil-paper-learning-agent",
  oilMissionEnabled: true,
  description: "Use Peter Bell as a live-observed ComHedge oil futures paper account. Follow the same active Coinbase oil contract as D2, compare advisories against paper outcomes, and use the profile to inspect what the system is doing.",
  martingaleSteps: 3,
  skillFocus: "Coinbase oil futures paper-trade learning",
  openBrainMemory: "For Peter, capture every oil futures paper decision with contract, product ID, advisory tone, conviction, price, target, stop, exit reason, and what should be watched while Peter follows the trade.",
  flatMaxMartingaleSteps: 1,
  flatSizeMultiplier: 0.4,
  flatThresholdBoost: 6,
  flatMinEdgePercent: 58,
  trendingMinEdgePercent: 60,
  breakoutMinEdgePercent: 57,
  markovHedgeFundMethod: true,
  missedOpportunityReentry: true,
  noChaseMoveBps: 14,
  pullbackMinRetraceBps: 3,
  profitLockMinMoveBps: 8,
  missedOpportunityMoveBps: 16
};
const OIL_TEST_AGENT_EMAILS = new Set(["peter@pjbell.com", "aretwo3000@gmail.com"]);
const OIL_TEST_AGENT_GOAL = "Use Peter Bell and D2 as paired paper-only Coinbase oil futures test cases, improving strategy quality from closed-trade evidence, advisory outcomes, and active-contract history.";
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
const DEFAULT_SERVER_PAPER_TRADING = {
  enabled: false,
  commodities: [],
  riskPct: PAPER_DEFAULT_RISK_PCT,
  maxOpenTrades: 1,
  entryThreshold: PAPER_MIN_CONVICTION,
  overnightRiskMode: "accept",
  marketTimeZone: "America/New_York",
  weeklyOpenDay: 0,
  weeklyOpenTime: "18:00",
  weeklyCloseDay: 5,
  weeklyCloseTime: "17:00",
  dailyCloseTime: "17:00",
  dailyReopenTime: "18:00",
  closeBeforeMinutes: 30,
  marketCalendarNotes: "Coinbase futures calendar: Sunday 18:00 ET through Friday 17:00 ET, with a 17:00-18:00 ET maintenance break on weekdays.",
  lastEvaluationAt: null,
  lastDecision: "Not evaluated yet"
};
const SKILL_SYSTEM_DETAILS = {
  "micro-predictor": {
    label: "Current system map",
    title: "Microstructure Predictor",
    subtitle: "Short-term classifier for the next oil move.",
    sections: [
      ["Inputs", "Coinbase ticks, latest confirmed price, 10s/30s/60s returns, acceleration, VWAP distance, volatility, and current advisory tone."],
      ["Signals Produced", "Long probability, short probability, flat read, short trigger, long trigger, long invalidation, and move basis points after evaluation."],
      ["Where It Stores Learning", "Predictions are written to Cloudflare D1 micro_predictions, then evaluated when a future price at the target horizon exists."],
      ["What Users Can Tune", "Return windows, trigger basis points, flat band, minimum tick count, and whether micro evidence can veto a stale long bias."]
    ],
    note: "Use this panel when short calls are lagging. The safest next control is a short-trigger threshold backed by enough evaluated short samples."
  },
  "d1-learning": {
    label: "Shared learning store",
    title: "D1 Learning Store",
    subtitle: "Runtime memory for trades, advisories, predictions, token usage, and scheduler runs.",
    sections: [
      ["Tables", "trade_transactions with P/R tags, advisory_snapshots, micro_predictions, token_usage, runtime_documents, and paper_scheduler_runs."],
      ["Why It Exists", "D1 keeps runtime records out of GitHub, removes commit races, and gives every browser the same shared truth."],
      ["Data Quality", "Rows keep payload_json plus indexed columns, so the UI can render rich detail while queries stay efficient."],
      ["What Users Can Tune", "Retention windows, cleanup rules, per-user scheduler settings, and what metrics are surfaced in dashboards."]
    ],
    note: "D1 is the operating ledger now. GitHub should hold source code and static seed snapshots, not live trading records."
  },
  "advisory-evaluator": {
    label: "Score quality lab",
    title: "Advisory Evaluator",
    subtitle: "Separates conviction from demonstrated forecast accuracy.",
    sections: [
      ["Inputs", "Advisory snapshots, price at call time, future evaluated price, local score, LLM score, tone, and user threshold."],
      ["Accuracy Rules", "Long is correct when price rises after the evaluation window. Short is correct when price falls. Wait/flat calls are measured separately."],
      ["Dashboards", "Forecast accuracy, trade accuracy, threshold tests, side-specific average trade profit, and recent outcome rows."],
      ["What Users Can Tune", "Score threshold, evaluation window, side-specific minimum sample count, and when to allow microstructure vetoes."]
    ],
    note: "Raising the threshold may improve selectivity, but it can reduce sample count. The useful test is average trade profit by side, not headline accuracy alone."
  },
  "paper-execution": {
    label: "Execution simulator",
    title: "Paper Trading Engine",
    subtitle: "Turns qualified advisories into paper positions with target, stop, and P/L accounting.",
    sections: [
      ["Browser Engine", "The open page still manages the current user's visible paper-trade panel and local decision log."],
      ["Server Scheduler", "Cloudflare now evaluates enabled users every five minutes and can open or close paper trades while browsers are closed."],
      ["Risk Rules", "Per-user commodities, risk percent, max open trades, entry threshold, Martingale step, margin, multiplier, and estimated fees."],
      ["What Users Can Tune", "Enable/disable server trading, commodities, risk %, max open trades, entry threshold, leverage, fees, and contract multiplier."]
    ],
    note: "This remains paper-only. Live brokerage execution should stay disabled until average trade profit is positive and duplicate-order protections are audited."
  },
  "karpathy-coach": {
    label: "Feedback coach",
    title: "Karpathy Feedback Loop",
    subtitle: "Small empirical loop that adjusts how selective the system should be.",
    sections: [
      ["Training Set", "Closed trades and evaluated micro predictions, with side-specific samples preferred when enough data exists."],
      ["Adjustment Logic", "Raises thresholds after low win rate, negative average P/L, or loss streaks; lowers cautiously when win rate and average P/L improve."],
      ["Short-Side Focus", "Tracks when the model misses oil drops and can recommend tighter long entries or stronger short triggers."],
      ["What Users Can Tune", "Sample size, loss-streak penalty, side-specific thresholds, minimum samples, and whether recommendations become automatic."]
    ],
    note: "The coach should recommend before it acts. Automatic threshold changes need guardrails because short-term samples can be noisy."
  },
  "scheduled-advisor": {
    label: "Scheduled model checkpoint",
    title: "LLM Advisory Checkpoint",
    subtitle: "Periodic model review that stays separate from the local micro predictor.",
    sections: [
      ["Inputs", "Commodity context, current price, macro inputs, local score, recent micro reads, and existing advisory state."],
      ["Cadence", "Runs on configured slots and stores the latest verified model conviction so the UI can show local plus scheduled LLM views."],
      ["Model Roles", "Primary model produces the advisory. Optional critic challenges the call before consolidation."],
      ["What Users Can Tune", "Primary model, critic model, refresh interval, prompt style, and whether the LLM can change local conviction."]
    ],
    note: "The LLM is a slower checkpoint, not the tick engine. Keep second-by-second prediction in microstructure logic and use LLMs for context review."
  }
};
const CUSTOM_SKILLS_KEY = "comhedge-custom-skills-v1";
const DEFAULT_CUSTOM_SKILLS = [
  ...DEFAULT_SECOND_OPINION_ANALYST_SKILLS,
  {
    id: "skill-short-bias-confirmation",
    name: "Require Short Bias Confirmation",
    body: "When the scheduled LLM and second opinions lean short, avoid flipping long on one or two rising ticks. Require sustained reclaim of VWAP and improving 30s/60s returns before changing the advisory side.",
    tags: ["oil", "short", "stability"],
    adoptAdvisory: true,
    adoptOpinion: true,
    createdAt: "2026-05-08T00:00:00.000Z",
    updatedAt: "2026-05-08T00:00:00.000Z"
  },
  {
    id: "skill-market-close-gap-risk",
    name: "Respect Market-Close Gap Risk",
    body: "Before the Coinbase futures maintenance break or weekly close, check whether the user accepts overnight gap risk. If not, flatten open positions before the configured close window.",
    tags: ["risk", "calendar", "execution"],
    adoptAdvisory: true,
    adoptOpinion: false,
    createdAt: "2026-05-08T00:00:00.000Z",
    updatedAt: "2026-05-08T00:00:00.000Z"
  },
  {
    id: "skill-d2-oil-research-loop",
    name: "D2 Oil Research Loop",
    body: "Treat D2 as the experimental oil futures account. Prefer the active Coinbase oil futures contract, record the product ID on every paper trade, and review closed P/L, side accuracy, missed short moves, and drawdown before changing thresholds. Do not increase size after a win unless the last sample shows positive average trade profit after fees.",
    tags: ["oil", "D2", "paper-trading", "research"],
    adoptAdvisory: true,
    adoptOpinion: true,
    createdAt: "2026-05-18T00:00:00.000Z",
    updatedAt: "2026-05-18T00:00:00.000Z"
  }
];

const chipMap = new Map();
const openPaperTrades = new Map();
const transactionHistory = [];
const liveTradeLedger = [];
const advisoryHistory = [];
const microPredictionHistory = [];
const PAPER_ACTION_PENDING_TTL_MS = 10000;
const pendingPaperActions = new Map();
const lastPaperClosePriceChecks = new Map();
const lastUnrealizedPnlByTradeId = new Map();
let paperEquity = PAPER_START_EQUITY;
let paperBaseEquity = PAPER_START_EQUITY;
let paperRiskPct = PAPER_DEFAULT_RISK_PCT;
let martingaleStep = 1;
let nextTransactionId = 1;
let snapshotPricesPromise = null;
let snapshotPricesLoadedAt = 0;
let activePriceSocket = null;
let activePriceSocketCommodity = null;
let activePriceSocketProductId = "";
let activePriceSocketReconnectTimer = null;
let lowPowerMode = true;
let signalRecalcTimer = null;
let lastSignalRecalcAt = 0;
let chartRenderTimer = null;
let lastChartRenderAt = 0;
let advisorySectionRefreshTimer = null;
let paperSweepTimer = null;
let lastPaperSweepAt = 0;
let livePricePaintTimer = null;
let lastLivePricePaintAt = 0;
let historyCommodityFilter = "all";
let historyPeriodFilter = "all";
let historyFiltersTouched = false;
let expandedTransactionId = null;
let advisoryCommodityFilter = "oil";
let advisoryPeriodFilter = "hour";
let homeMarketCommodity = "oil";
let homeMarketPeriod = "day";
let homeMarketRefreshTimer = null;
let lastHomeMarketRenderAt = 0;
let homeMarketHistory = null;
let homeMarketHistoryKey = "";
let homeMarketHistoryError = "";
let homeMarketHistoryLoadedAt = 0;
let homeMarketHistoryRequest = null;
let lastAdvisorySnapshotKey = "";
let appStarted = false;
let userSearchQuery = "";
let userListFilter = "all";
let expandedUserEmail = "";
let editingUserEmail = "";
let expandedLeaderBoardUserEmail = "";
let leaderBoardDetailMode = "profile";
let activeSection = "home";
let leaderboardRankMode = LEADERBOARD_DEFAULT_RANK;
let leaderboardPeriodMode = LEADERBOARD_DEFAULT_PERIOD;
const leaderBoardSchedulerStatus = new Map();
let leaderBoardSchedulerLoadedAt = 0;
let leaderBoardSchedulerHealth = null;
let leaderBoardSummaryRows = [];
let leaderBoardSummaryLoadedAt = 0;
let leaderBoardSummaryPeriod = "";
let leaderBoardSummaryError = "";
let leaderBoardSummaryRefreshing = false;
let leaderBoardSummaryFromDisplayCache = false;
let paperLedgerSummaryRows = [];
let paperLedgerSummaryLoadedAt = 0;
let activeSkillSystem = "micro-predictor";
let activeCustomSkillId = "";
let skillSearchQuery = "";
let activeSkillVoiceRecognizer = null;
let featureTypeFilter = "all";
let primaryModelId = DEFAULT_PRIMARY_MODEL_ID;
let secondaryModelId = "gpt-5-mini";
let sharedModelSettings = {
  primaryModelId: DEFAULT_PRIMARY_MODEL_ID,
  criticModelId: "gpt-5-mini",
  secondOpinionModels: ["perplexity", "gemini", "claude"],
  secondOpinionPrompts: ["technician"],
  updatedAt: null,
  updatedBy: ""
};
let lastVerifiedLLMRun = null;
let llmInFlight = false;
let llmAutoCommodityKey = null;
let advisoryScoreThreshold = DEFAULT_ADVISORY_SCORE_THRESHOLD;
let advisoryScoreThresholdIsManual = false;
let manualConvictionOverrides = {};
let strategyEdits = {};
let backendSyncInFlight = false;
let backendHistoryWriteInFlight = false;
let backendSettingsSyncInFlight = false;
let backendAdvisorySyncInFlight = false;
let backendMicroPredictionSyncInFlight = false;
let backendHistoryReady = false;
let transactionHistoryLoadedFromBackend = false;
let sharedSettingsLoadedFromBackend = false;
let pendingHistorySaveRetry = false;
let nextBackendTransactionSyncAt = 0;
let nextBackendSettingsSyncAt = 0;
let sharedSettingsLoadedAt = "";
let nextBackendAdvisorySyncAt = 0;
let nextBackendMicroPredictionSyncAt = 0;
let nextBackendOpenBrainSyncAt = 0;
let backendHistoryDirty = false;
let backendHistorySaveTimer = null;
let lastBackendHistorySaveAttemptAt = 0;
let lastPrimarySignal = null;
let lastTradePlan = null;
let lastCommodityMeta = commodities[0];
const userRoster = [];
const featureRequests = [];
const openBrainMemory = [];
const customSkills = [];
const customStrategies = [];
const PAPER_STATE_KEY = "atlas-paper-trading-state-v1";
const PAPER_DECISION_LOG_KEY = "comhedge-paper-decision-log-v1";
const PAPER_DECISION_LOG_LIMIT = 300;
const PAPER_DECISION_LOG_CAPTURE_MS = 60000;
let paperDecisionLog = [];
let lastPaperDecisionLogKey = "";
let lastPaperDecisionLogAt = 0;
let lastMicroPredictionKey = "";
let manualConvictionCommittedBefore = null;

function syncLowPowerModeControls() {
  if (lowPowerModeToggleEl) lowPowerModeToggleEl.checked = lowPowerMode;
  if (lowPowerModeStatusEl) {
    lowPowerModeStatusEl.textContent = lowPowerMode
      ? "Low power mode batches live ticks, chart redraws, and advisory recalculations."
      : "Live mode recalculates more often and can use more CPU.";
  }
}

function loadLowPowerMode() {
  lowPowerMode = localStorage.getItem(LOW_POWER_MODE_KEY) !== "false";
  syncLowPowerModeControls();
}

function saveLowPowerMode() {
  localStorage.setItem(LOW_POWER_MODE_KEY, String(lowPowerMode));
  syncLowPowerModeControls();
}

function isDirectCoinbaseFeedEnabled() {
  const params = new URLSearchParams(window.location.search || "");
  return params.get("direct-feed") === "1" || localStorage.getItem(DIRECT_COINBASE_FEED_KEY) === "true";
}

function getVisibleThrottle(normalMs, lowPowerMs, hiddenMs) {
  if (document.hidden) return hiddenMs;
  return lowPowerMode ? lowPowerMs : normalMs;
}

function scheduleAdaptiveInterval(callback, visibleMs, hiddenMs = Math.max(visibleMs, 120000)) {
  const run = () => {
    const delay = document.hidden ? hiddenMs : visibleMs;
    window.setTimeout(async () => {
      try {
        await callback();
      } finally {
        run();
      }
    }, delay);
  };
  run();
}

function queueSignalRecalculation(reason = "live-update", options = {}) {
  const immediate = options.immediate === true;
  const now = Date.now();
  const throttleMs = immediate ? 0 : getVisibleThrottle(
    NORMAL_SIGNAL_THROTTLE_MS,
    LOW_POWER_SIGNAL_THROTTLE_MS,
    HIDDEN_SIGNAL_THROTTLE_MS
  );
  const delay = Math.max(0, throttleMs - (now - lastSignalRecalcAt));

  if (delay === 0 && !signalRecalcTimer) {
    lastSignalRecalcAt = now;
    calculateSignal();
    return;
  }

  if (signalRecalcTimer) return;
  signalRecalcTimer = window.setTimeout(() => {
    signalRecalcTimer = null;
    lastSignalRecalcAt = Date.now();
    calculateSignal();
  }, delay);
}

function queueAdvisoryChartRender(options = {}) {
  const immediate = options.immediate === true;
  const now = Date.now();
  const throttleMs = immediate ? 0 : getVisibleThrottle(
    NORMAL_CHART_THROTTLE_MS,
    LOW_POWER_CHART_THROTTLE_MS,
    HIDDEN_CHART_THROTTLE_MS
  );
  const delay = Math.max(0, throttleMs - (now - lastChartRenderAt));

  if (delay === 0 && !chartRenderTimer) {
    lastChartRenderAt = now;
    renderAdvisoryChart();
    return;
  }

  if (chartRenderTimer) return;
  chartRenderTimer = window.setTimeout(() => {
    chartRenderTimer = null;
    lastChartRenderAt = Date.now();
    renderAdvisoryChart();
  }, delay);
}

function scheduleAdvisorySectionRefresh() {
  if (advisorySectionRefreshTimer) return;
  advisorySectionRefreshTimer = window.setTimeout(() => {
    advisorySectionRefreshTimer = null;
    if (activeSection !== "advisories") return;
    queueAdvisoryChartRender();
    loadSharedAdvisorySummary();
  }, 160);
}

function queuePaperSweep(options = {}) {
  const immediate = options.immediate === true;
  const now = Date.now();
  const throttleMs = immediate ? 0 : getVisibleThrottle(
    NORMAL_PAPER_SWEEP_THROTTLE_MS,
    LOW_POWER_PAPER_SWEEP_THROTTLE_MS,
    HIDDEN_PAPER_SWEEP_THROTTLE_MS
  );
  const delay = Math.max(0, throttleMs - (now - lastPaperSweepAt));

  if (delay === 0 && !paperSweepTimer) {
    lastPaperSweepAt = now;
    closeOnlyPaperSweep();
    return;
  }

  if (paperSweepTimer) return;
  paperSweepTimer = window.setTimeout(() => {
    paperSweepTimer = null;
    lastPaperSweepAt = Date.now();
    closeOnlyPaperSweep();
  }, delay);
}

function paintLivePriceFields(commodity) {
  if (!commodity || commoditySelect?.value !== commodity) return;
  const price = confirmedLivePrices.has(commodity) ? confirmedLivePrices.get(commodity) : latestPrices.get(commodity);
  const updatedAt = confirmedLivePriceTimes.has(commodity) ? confirmedLivePriceTimes.get(commodity) : latestPriceTimes.get(commodity);
  const source = confirmedLivePriceSources.has(commodity) ? confirmedLivePriceSources.get(commodity) : latestPriceSources.get(commodity);

  if (priceEl && Number.isFinite(price) && price > 0) {
    priceEl.textContent = formatPrice(price);
  }

  if (priceSourceEl) {
    priceSourceEl.textContent = updatedAt && !Number.isNaN(getTransactionDate(updatedAt).getTime())
      ? `${source || "Coinbase live"} / ${formatPriceTime(updatedAt)}`
      : UNAVAILABLE_TEXT;
  }
}

function queueLivePricePaint(commodity, options = {}) {
  const immediate = options.immediate === true;
  const now = Date.now();
  const throttleMs = immediate ? 0 : getVisibleThrottle(
    NORMAL_LIVE_PRICE_PAINT_MS,
    LOW_POWER_LIVE_PRICE_PAINT_MS,
    HIDDEN_LIVE_PRICE_PAINT_MS
  );
  const delay = Math.max(0, throttleMs - (now - lastLivePricePaintAt));

  if (delay === 0 && !livePricePaintTimer) {
    lastLivePricePaintAt = now;
    paintLivePriceFields(commodity);
    return;
  }

  if (livePricePaintTimer) return;
  livePricePaintTimer = window.setTimeout(() => {
    livePricePaintTimer = null;
    lastLivePricePaintAt = Date.now();
    paintLivePriceFields(commodity);
  }, delay);
}

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
  if (homeMarketPreviewEl) homeMarketPreviewEl.hidden = section !== "home";
  if (section === "home") refreshHomeMarketPreview();
  if (section === "advisories") {
    paintLivePriceFields(commoditySelect.value);
    renderAdvisoryMarketStatus();
    renderCurrentUserStrategy();
    queueSignalRecalculation("advisory-open");
    scheduleAdvisorySectionRefresh();
    loadSharedAdvisoryHistory();
    loadSharedMicroPredictions();
  }
  if (section === "second-opinion") updateSecondOpinionRunState();
  if (section === "open-brain") {
    renderOpenBrainMemory();
    loadOpenBrainEventsFromBackend();
  }
  if (section === "leaderboard") {
    renderLeaderBoard();
    loadLeaderBoardSummary();
    loadLeaderBoardSchedulerStatus();
  }
  if (section === "skills") renderSkillsWorkspace();
  if (section === "users") showUserManagement(true);
  if (section === "trading") loadSharedTransactionHistory();
  if (section === "actual-trades") {
    renderLiveTradeLedger();
    loadSharedTransactionHistory();
  }
  if (section === "token-costs") renderTokenCosts();
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

function mergeOpenBrainEvents(incoming = []) {
  const byId = new Map();
  [...openBrainMemory, ...incoming].forEach((event) => {
    if (!event) return;
    const id = event.id || `memory-${event.time || Date.now()}-${event.type || "event"}-${event.summary || ""}`;
    byId.set(id, { ...event, id });
  });
  openBrainMemory.splice(
    0,
    openBrainMemory.length,
    ...Array.from(byId.values())
      .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time))
      .slice(0, 500)
  );
  saveOpenBrainMemory();
}

function getOpenBrainApiUrl() {
  return `${getHistoryApiUrl()}/open-brain`;
}

async function saveOpenBrainEventsToBackend(events = openBrainMemory, { silent = false } = {}) {
  if (!hasHistoryBackend() || !events.length) return false;
  if (isBackendBackoffActive(nextBackendOpenBrainSyncAt)) return false;

  try {
    if (!silent) openBrainStatusEl.textContent = "Saving Open Brain to D1";
    const response = await fetchWithTimeout(getOpenBrainApiUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ events, limit: 500 })
    });
    if (!response.ok) throw new Error("Open Brain backend save failed");
    const data = await response.json();
    mergeOpenBrainEvents(Array.isArray(data?.events) ? data.events : []);
    nextBackendOpenBrainSyncAt = 0;
    if (!silent) openBrainStatusEl.textContent = `D1 memory saved ${Number(data?.stored || 0)} event${Number(data?.stored || 0) === 1 ? "" : "s"}`;
    renderOpenBrainMemory();
    return true;
  } catch (error) {
    nextBackendOpenBrainSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    if (!silent) openBrainStatusEl.textContent = `Local memory active; ${getBackendBackoffText(nextBackendOpenBrainSyncAt)}`;
    return false;
  }
}

async function loadOpenBrainEventsFromBackend({ manual = false } = {}) {
  if (!hasHistoryBackend()) {
    renderOpenBrainMemory();
    return false;
  }
  if (!manual && isBackendBackoffActive(nextBackendOpenBrainSyncAt)) return false;

  try {
    openBrainStatusEl.textContent = "Loading D1 memory";
    const response = await fetchWithTimeout(`${getOpenBrainApiUrl()}?limit=500&ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Open Brain backend unavailable");
    const data = await response.json();
    mergeOpenBrainEvents(Array.isArray(data?.events) ? data.events : []);
    nextBackendOpenBrainSyncAt = 0;
    openBrainStatusEl.textContent = `D1 memory synced ${openBrainMemory.length} event${openBrainMemory.length === 1 ? "" : "s"}`;
    if (openBrainMemory.length) saveOpenBrainEventsToBackend(openBrainMemory, { silent: true });
    renderOpenBrainMemory();
    return true;
  } catch (error) {
    nextBackendOpenBrainSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    openBrainStatusEl.textContent = `Local memory active; ${getBackendBackoffText(nextBackendOpenBrainSyncAt)}`;
    renderOpenBrainMemory();
    return false;
  }
}

function recordOpenBrainEvent(type, summary, metadata = {}, options = {}) {
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
  if (options.sync !== false) {
    saveOpenBrainEventsToBackend([event], { silent: true });
  }
  return event;
}

function renderOpenBrainMemory() {
  openBrainEventCountEl.textContent = String(openBrainMemory.length);
  if (!openBrainStatusEl.textContent || openBrainStatusEl.textContent === "Local memory ready" || openBrainStatusEl.textContent === "Endpoint saved") {
    openBrainStatusEl.textContent = hasHistoryBackend() ? "D1 memory ready" : "Local memory ready";
  }
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

function renderSkillSystemDetail() {
  if (!skillsDetailCardEl) return;
  if (activeCustomSkillId) {
    renderCustomSkillDetail(activeCustomSkillId);
    return;
  }
  const detail = SKILL_SYSTEM_DETAILS[activeSkillSystem] || SKILL_SYSTEM_DETAILS["micro-predictor"];

  skillSystemButtons.forEach((button) => {
    const isActive = button.dataset.skillSystem === activeSkillSystem;
    if (button.classList.contains("skills-category")) {
      button.classList.toggle("is-active", isActive);
    }
    if (button.classList.contains("system-skill-card")) {
      button.dataset.systemTone = isActive ? "active" : "";
    }
    button.setAttribute("aria-selected", String(isActive));
  });

  const label = document.createElement("span");
  const title = document.createElement("h3");
  const subtitle = document.createElement("p");
  const grid = document.createElement("div");
  const note = document.createElement("div");

  label.className = "stat-label";
  label.textContent = detail.label;
  title.textContent = detail.title;
  subtitle.className = "skills-detail-subtitle";
  subtitle.textContent = detail.subtitle;
  grid.className = "system-adjust-grid";
  detail.sections.forEach(([sectionTitle, sectionCopy]) => {
    const item = document.createElement("div");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    strong.textContent = sectionTitle;
    span.textContent = sectionCopy;
    item.append(strong, span);
    grid.append(item);
  });
  note.className = "system-note";
  note.textContent = detail.note;

  skillsDetailCardEl.replaceChildren(label, title, subtitle, grid, note);
}

function bindSkillSidebarButtons() {
  document.querySelectorAll("[data-skill-system]").forEach((button) => {
    if (button.dataset.skillBound === "true") return;
    button.dataset.skillBound = "true";
    button.addEventListener("click", () => selectSkillSystem(button.dataset.skillSystem));
    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectSkillSystem(button.dataset.skillSystem);
    });
  });

  document.querySelectorAll("[data-custom-skill-id]").forEach((button) => {
    if (button.dataset.skillBound === "true") return;
    button.dataset.skillBound = "true";
    button.addEventListener("click", () => selectCustomSkill(button.dataset.customSkillId));
    button.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectCustomSkill(button.dataset.customSkillId);
    });
  });
}

function getSkillAdoptionLabel(skill) {
  if (skill.adoptAdvisory && skill.adoptOpinion) return "Adv + 2nd";
  if (skill.adoptAdvisory) return "Advisor";
  if (skill.adoptOpinion) return "2nd";
  return "Not adopted";
}

function getVisibleSkillRows() {
  return customSkills.filter((skill) => skill.adoptAdvisory || skill.adoptOpinion);
}

function getSkillSystemNavLabel(systemId) {
  return {
    "micro-predictor": "Micro",
    "d1-learning": "D1",
    "advisory-evaluator": "Score",
    "paper-execution": "Paper",
    "karpathy-coach": "Loop",
    "scheduled-advisor": "LLM"
  }[systemId] || "Sys";
}

function renderSkillsSidebar() {
  if (!skillsSidebarEl) return;
  skillsSidebarEl.innerHTML = "";

  Object.entries(SKILL_SYSTEM_DETAILS).forEach(([systemId, detail]) => {
    const item = document.createElement("div");
    const label = document.createElement("span");
    const title = document.createElement("strong");
    item.className = "skills-category";
    item.dataset.skillSystem = systemId;
    item.dataset.skillKind = "system";
    item.setAttribute("role", "button");
    item.tabIndex = 0;
    label.textContent = getSkillSystemNavLabel(systemId);
    title.textContent = detail.title;
    item.append(label, title);
    skillsSidebarEl.append(item);
  });

  const adoptedSkills = getVisibleSkillRows();
  if (adoptedSkills.length) {
    const divider = document.createElement("div");
    divider.className = "skills-sidebar-divider";
    divider.textContent = `${adoptedSkills.length} adopted user skill${adoptedSkills.length === 1 ? "" : "s"}`;
    skillsSidebarEl.append(divider);
  }

  adoptedSkills.forEach((skill) => {
    const item = document.createElement("div");
    const label = document.createElement("span");
    const title = document.createElement("strong");
    item.className = "skills-category user-skill-nav";
    item.dataset.customSkillId = skill.id;
    item.dataset.skillKind = "custom";
    item.setAttribute("role", "button");
    item.tabIndex = 0;
    label.textContent = getSkillAdoptionLabel(skill);
    title.textContent = skill.name;
    item.append(label, title);
    skillsSidebarEl.append(item);
  });

  skillSystemButtons = Array.from(document.querySelectorAll("[data-skill-system]"));
  bindSkillSidebarButtons();
}

function selectSkillSystem(systemId) {
  if (!SKILL_SYSTEM_DETAILS[systemId]) return;
  activeCustomSkillId = "";
  activeSkillSystem = systemId;
  renderSkillSystemDetail();
  renderCustomSkills();
}

function normalizeSkillTags(value) {
  const values = Array.isArray(value) ? value : String(value || "").split(",");
  return [...new Set(values.map((tag) => String(tag || "").trim()).filter(Boolean))].slice(0, 8);
}

function normalizeCustomSkill(skill = {}) {
  const now = new Date().toISOString();
  const name = String(skill.name || "").trim();
  const adoptAdvisory = skill.adoptAdvisory !== false;
  const adoptOpinion = skill.adoptOpinion === true;
  if (!name) return null;
  return {
    id: String(skill.id || `skill-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    name,
    body: String(skill.body || "").trim(),
    tags: normalizeSkillTags(skill.tags),
    adoptAdvisory,
    adoptOpinion,
    adoptedAdvisoryAt: adoptAdvisory ? (skill.adoptedAdvisoryAt || now) : (skill.adoptedAdvisoryAt || null),
    adoptedOpinionAt: adoptOpinion ? (skill.adoptedOpinionAt || now) : (skill.adoptedOpinionAt || null),
    createdAt: skill.createdAt || now,
    updatedAt: skill.updatedAt || now
  };
}

function getMetricStartDate(value) {
  const date = getTransactionDate(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function getClosedTradesSince(value) {
  const start = getMetricStartDate(value);
  if (!start) return [];
  return getDedupedPaperCloseEntries(transactionHistory)
    .filter(isClosingTransaction)
    .filter((entry) => getTransactionDate(entry.closedAt || entry.time) >= start);
}

function summarizeClosedTradePerformanceSince(value) {
  const closed = getClosedTradesSince(value);
  const netPnl = closed.reduce((total, entry) => total + getDisplayPnl(entry), 0);
  const wins = closed.filter((entry) => getDisplayPnl(entry) > 0).length;
  const winRate = closed.length ? (wins / closed.length) * 100 : NaN;
  const expectancy = closed.length ? netPnl / closed.length : NaN;
  return { closedCount: closed.length, netPnl, wins, winRate, expectancy };
}

function formatDurationSince(value) {
  const start = getMetricStartDate(value);
  if (!start) return "Not started";
  const days = Math.max(0, Math.floor((Date.now() - start.getTime()) / 86400000));
  if (days >= 1) return `${days} day${days === 1 ? "" : "s"}`;
  const hours = Math.max(0, Math.floor((Date.now() - start.getTime()) / 3600000));
  if (hours >= 1) return `${hours} hour${hours === 1 ? "" : "s"}`;
  const minutes = Math.max(0, Math.floor((Date.now() - start.getTime()) / 60000));
  return `${minutes} min`;
}

function formatPerformanceSummary(summary) {
  if (!summary.closedCount) return "No closed trades yet";
  const winRate = Number.isFinite(summary.winRate) ? formatPercent(summary.winRate) : "-";
  const expectancy = Number.isFinite(summary.expectancy) ? formatSignedMoney(summary.expectancy) : "-";
  return `${formatSignedMoney(summary.netPnl)} / ${summary.closedCount} closed / ${winRate} win / ${expectancy} ave trade profit`;
}

function mergeDefaultCustomSkills(rows) {
  const normalizedRows = (Array.isArray(rows) ? rows : []).map(normalizeCustomSkill).filter(Boolean);
  const existingIds = new Set(normalizedRows.map((skill) => skill.id));
  DEFAULT_CUSTOM_SKILLS.forEach((skill) => {
    if (!existingIds.has(skill.id)) {
      normalizedRows.push(normalizeCustomSkill(skill));
      existingIds.add(skill.id);
    }
  });
  return normalizedRows;
}

function loadCustomSkills() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(CUSTOM_SKILLS_KEY) || "null");
    const rows = Array.isArray(stored) ? stored : DEFAULT_CUSTOM_SKILLS;
    customSkills.splice(0, customSkills.length, ...mergeDefaultCustomSkills(rows));
    saveCustomSkills();
    syncSecondOpinionPromptSettings();
  } catch (error) {
    customSkills.splice(0, customSkills.length, ...mergeDefaultCustomSkills(DEFAULT_CUSTOM_SKILLS));
    saveCustomSkills();
    syncSecondOpinionPromptSettings();
  }
}

function saveCustomSkills() {
  window.localStorage.setItem(CUSTOM_SKILLS_KEY, JSON.stringify(customSkills));
}

function saveCustomSkillsShared() {
  saveCustomSkills();
  saveSharedSettings();
}

function applySharedCustomSkills(rows) {
  if (!Array.isArray(rows)) return false;
  const next = mergeDefaultCustomSkills(rows);
  const changed = JSON.stringify(next) !== JSON.stringify(customSkills);
  if (changed) {
    customSkills.splice(0, customSkills.length, ...next);
    saveCustomSkills();
    syncSecondOpinionPromptSettings();
  }
  return changed;
}

function getAdoptedSkills(target = "advisory") {
  const key = target === "opinion" ? "adoptOpinion" : "adoptAdvisory";
  return customSkills.filter((skill) => skill[key]);
}

function getAdoptedOpinionAnalysts() {
  return getAdoptedSkills("opinion");
}

function syncSecondOpinionPromptSettings(options = {}) {
  const promptIds = getAdoptedOpinionAnalysts().map((skill) => skill.id);
  sharedModelSettings.secondOpinionPrompts = promptIds.length ? promptIds : ["technician"];
  if (options.persist) saveModelSettings();
}

function getOpinionPromptLabel(promptId) {
  const skill = customSkills.find((candidate) => candidate.id === promptId);
  return skill?.name || opinionPromptLabels[promptId] || promptId;
}

function getAdoptedSkillSummary(target = "advisory", limit = 3) {
  const adopted = getAdoptedSkills(target).slice(0, limit);
  if (!adopted.length) return "";
  return adopted.map((skill) => `${skill.name}: ${skill.body || "No instructions yet"}`).join(" ");
}

function resetSkillEditor(skill = null) {
  if (!skillEditorFormEl) return;
  skillEditIdEl.value = skill?.id || "";
  skillNameInputEl.value = skill?.name || "";
  skillBodyInputEl.value = skill?.body || "";
  skillTagsInputEl.value = (skill?.tags || []).join(", ");
  skillAdoptAdvisoryInputEl.checked = skill?.adoptAdvisory !== false;
  skillAdoptOpinionInputEl.checked = skill?.adoptOpinion === true;
  if (!skill && skillNameInputEl) skillNameInputEl.focus();
}

function renderCustomSkills() {
  if (!customSkillListEl) return;
  const query = skillSearchQuery.toLowerCase();
  const filtered = customSkills.filter((skill) => {
    const haystack = [skill.name, skill.body, ...(skill.tags || [])].join(" ").toLowerCase();
    return !query || haystack.includes(query);
  });

  customSkillListEl.innerHTML = "";
  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "skills-empty compact";
    empty.textContent = "No user skills match the current search.";
    customSkillListEl.append(empty);
    return;
  }

  filtered.forEach((skill) => {
    const card = document.createElement("article");
    const meta = document.createElement("span");
    const title = document.createElement("strong");
    const copy = document.createElement("p");
    const performance = document.createElement("p");
    const chips = document.createElement("div");
    const adoptedAt = skill.adoptedAdvisoryAt || skill.adoptedOpinionAt || skill.createdAt;
    const summary = summarizeClosedTradePerformanceSince(adoptedAt);

    card.className = "custom-skill-card";
    card.dataset.active = String(skill.id === activeCustomSkillId);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.addEventListener("click", () => selectCustomSkill(skill.id));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectCustomSkill(skill.id);
    });
    meta.textContent = [
      skill.adoptAdvisory ? "Advisory" : "",
      skill.adoptOpinion ? "Second Opinion" : ""
    ].filter(Boolean).join(" + ") || "Not adopted";
    title.textContent = skill.name;
    copy.textContent = skill.body || "No instructions yet.";
    performance.className = "skill-performance-line";
    performance.textContent = `Started ${formatTradeTime(adoptedAt)} / active ${formatDurationSince(adoptedAt)} / ${formatPerformanceSummary(summary)}`;
    chips.className = "skill-tag-row";
    (skill.tags || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      chips.append(chip);
    });
    card.append(meta, title, copy, performance, chips);
    customSkillListEl.append(card);
  });
}

function renderCustomSkillDetail(skillId) {
  const skill = customSkills.find((candidate) => candidate.id === skillId);
  if (!skillsDetailCardEl || !skill) {
    activeCustomSkillId = "";
    renderSkillSystemDetail();
    return;
  }

  document.querySelectorAll("[data-skill-system], [data-custom-skill-id]").forEach((button) => {
    const isCustomActive = button.dataset.customSkillId === skill.id;
    button.classList.toggle("is-active", isCustomActive && button.classList.contains("skills-category"));
    if (button.classList.contains("system-skill-card")) button.dataset.systemTone = "";
    button.setAttribute("aria-selected", String(isCustomActive));
  });

  const label = document.createElement("span");
  const title = document.createElement("h3");
  const subtitle = document.createElement("p");
  const grid = document.createElement("div");
  const note = document.createElement("div");
  const actions = document.createElement("div");
  const adoptAdvisory = document.createElement("button");
  const adoptOpinion = document.createElement("button");
  const edit = document.createElement("button");
  const remove = document.createElement("button");
  const adoptedAt = skill.adoptedAdvisoryAt || skill.adoptedOpinionAt || skill.createdAt;
  const summary = summarizeClosedTradePerformanceSince(adoptedAt);

  label.className = "stat-label";
  label.textContent = "User skill";
  title.textContent = skill.name;
  subtitle.className = "skills-detail-subtitle";
  subtitle.textContent = skill.body || "No detailed instructions yet.";
  grid.className = "system-adjust-grid";
  [
    ["Adopted In", [
      skill.adoptAdvisory ? "Advisories" : "",
      skill.adoptOpinion ? "Second opinions" : ""
    ].filter(Boolean).join(", ") || "Not adopted"],
    ["Tags", (skill.tags || []).join(", ") || "No tags"],
    ["Started", `${formatTradeTime(adoptedAt)} (${formatDurationSince(adoptedAt)})`],
    ["Success", formatPerformanceSummary(summary)],
    ["Updated", formatTradeTime(skill.updatedAt)],
    ["Created", formatTradeTime(skill.createdAt)]
  ].forEach(([sectionTitle, sectionCopy]) => {
    const item = document.createElement("div");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    strong.textContent = sectionTitle;
    span.textContent = sectionCopy;
    item.append(strong, span);
    grid.append(item);
  });
  note.className = "system-note";
  note.textContent = "Adopted skills are inserted as lightweight context in the advisory plan and second-opinion output. Keep them specific and testable.";
  actions.className = "skill-detail-actions";
  adoptAdvisory.className = "filter-button skill-seed-button";
  adoptAdvisory.type = "button";
  adoptAdvisory.textContent = skill.adoptAdvisory ? "Remove from advisories" : "Adopt in advisories";
  adoptAdvisory.addEventListener("click", () => toggleCustomSkillAdoption(skill.id, "advisory"));
  adoptOpinion.className = "filter-button skill-seed-button";
  adoptOpinion.type = "button";
  adoptOpinion.textContent = skill.adoptOpinion ? "Remove from second opinions" : "Adopt in second opinions";
  adoptOpinion.addEventListener("click", () => toggleCustomSkillAdoption(skill.id, "opinion"));
  edit.className = "filter-button skill-seed-button";
  edit.type = "button";
  edit.textContent = "Edit";
  edit.addEventListener("click", () => resetSkillEditor(skill));
  remove.className = "filter-button";
  remove.type = "button";
  remove.textContent = "Delete";
  remove.addEventListener("click", () => deleteCustomSkill(skill.id));
  actions.append(adoptAdvisory, adoptOpinion, edit, remove);
  skillsDetailCardEl.replaceChildren(label, title, subtitle, grid, note, actions);
}

function selectCustomSkill(skillId) {
  if (!customSkills.some((skill) => skill.id === skillId)) return;
  activeCustomSkillId = skillId;
  renderSkillSystemDetail();
  renderCustomSkills();
}

function saveCustomSkillFromForm(event) {
  event?.preventDefault();
  const name = skillNameInputEl?.value.trim();
  if (!name) return;
  const now = new Date().toISOString();
  const existingId = skillEditIdEl?.value || "";
  const existing = customSkills.find((skill) => skill.id === existingId);
  const nextAdoptAdvisory = skillAdoptAdvisoryInputEl?.checked;
  const nextAdoptOpinion = skillAdoptOpinionInputEl?.checked;
  const next = normalizeCustomSkill({
    id: existing?.id,
    name,
    body: skillBodyInputEl?.value || "",
    tags: skillTagsInputEl?.value || "",
    adoptAdvisory: nextAdoptAdvisory,
    adoptOpinion: nextAdoptOpinion,
    adoptedAdvisoryAt: nextAdoptAdvisory && !existing?.adoptAdvisory ? now : existing?.adoptedAdvisoryAt,
    adoptedOpinionAt: nextAdoptOpinion && !existing?.adoptOpinion ? now : existing?.adoptedOpinionAt,
    createdAt: existing?.createdAt || now,
    updatedAt: now
  });
  if (!next) return;

  if (existing) {
    Object.assign(existing, next);
  } else {
    customSkills.unshift(next);
  }
  activeCustomSkillId = next.id;
  saveCustomSkillsShared();
  syncSecondOpinionPromptSettings({ persist: true });
  resetSkillEditor();
  renderSkillsWorkspace();
  renderSecondOpinionControls();
  calculateSignal();
}

function toggleCustomSkillAdoption(skillId, target) {
  const skill = customSkills.find((candidate) => candidate.id === skillId);
  if (!skill) return;
  const now = new Date().toISOString();
  if (target === "opinion") {
    skill.adoptOpinion = !skill.adoptOpinion;
    if (skill.adoptOpinion && !skill.adoptedOpinionAt) skill.adoptedOpinionAt = now;
  } else {
    skill.adoptAdvisory = !skill.adoptAdvisory;
    if (skill.adoptAdvisory && !skill.adoptedAdvisoryAt) skill.adoptedAdvisoryAt = now;
  }
  skill.updatedAt = now;
  activeCustomSkillId = skill.id;
  saveCustomSkillsShared();
  syncSecondOpinionPromptSettings({ persist: true });
  renderSkillsWorkspace();
  renderSecondOpinionControls();
  calculateSignal();
}

function deleteCustomSkill(skillId) {
  const index = customSkills.findIndex((skill) => skill.id === skillId);
  if (index < 0) return;
  customSkills.splice(index, 1);
  if (activeCustomSkillId === skillId) activeCustomSkillId = "";
  saveCustomSkillsShared();
  syncSecondOpinionPromptSettings({ persist: true });
  resetSkillEditor();
  renderSkillsWorkspace();
  renderSecondOpinionControls();
  calculateSignal();
}

function renderSkillsWorkspace() {
  renderSkillsSidebar();
  renderSkillSystemDetail();
  renderCustomSkills();
}

function parseVoiceSkillTranscript(transcript) {
  const text = String(transcript || "").trim();
  if (!text) return;
  const titleMatch = text.match(/(?:called|named|title)\s+(.+?)(?:\s+(?:that|which|and|with)\s+|$)/i);
  if (titleMatch && !skillNameInputEl.value.trim()) {
    skillNameInputEl.value = titleMatch[1].trim();
  } else if (!skillNameInputEl.value.trim()) {
    skillNameInputEl.value = text.split(/[.!?]/)[0].slice(0, 70);
  }
  skillBodyInputEl.value = skillBodyInputEl.value
    ? `${skillBodyInputEl.value}\n${text}`
    : text;
  const lowered = text.toLowerCase();
  if (lowered.includes("second opinion")) skillAdoptOpinionInputEl.checked = true;
  if (lowered.includes("do not adopt") || lowered.includes("don't adopt")) {
    skillAdoptAdvisoryInputEl.checked = false;
    skillAdoptOpinionInputEl.checked = false;
  }
  if (skillVoiceStatusEl) skillVoiceStatusEl.textContent = "Voice captured. Review and save the skill.";
}

function startSkillVoiceCapture() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    if (skillVoiceStatusEl) skillVoiceStatusEl.textContent = "Voice input is not supported in this browser.";
    return;
  }
  if (activeSkillVoiceRecognizer) {
    activeSkillVoiceRecognizer.stop();
    activeSkillVoiceRecognizer = null;
    return;
  }
  const recognizer = new SpeechRecognition();
  activeSkillVoiceRecognizer = recognizer;
  recognizer.lang = "en-US";
  recognizer.continuous = false;
  recognizer.interimResults = false;
  recognizer.onstart = () => {
    if (skillVoiceStatusEl) skillVoiceStatusEl.textContent = "Listening for a skill...";
    if (skillVoiceButtonEl) skillVoiceButtonEl.textContent = "Stop Voice";
  };
  recognizer.onresult = (event) => {
    const transcript = Array.from(event.results || [])
      .map((result) => result[0]?.transcript || "")
      .join(" ");
    parseVoiceSkillTranscript(transcript);
  };
  recognizer.onerror = () => {
    if (skillVoiceStatusEl) skillVoiceStatusEl.textContent = "Voice capture failed.";
  };
  recognizer.onend = () => {
    activeSkillVoiceRecognizer = null;
    if (skillVoiceButtonEl) skillVoiceButtonEl.textContent = "Voice";
  };
  recognizer.start();
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
  const selected = getAdoptedOpinionAnalysts().map((skill) => skill.id);
  if (selected.length) return selected;
  if (!secondOpinionPromptsEl) return ["technician"];
  const selectedInputs = Array.from(secondOpinionPromptsEl.querySelectorAll("input[type='checkbox']:checked"))
    .map((input) => input.value);
  return selectedInputs.length ? selectedInputs : ["technician"];
}

function normalizeModelSettings(settings = {}) {
  const known = new Set(advisoryModels.map(({ id }) => id));
  const primaryModel = known.has(settings.primaryModelId) ? settings.primaryModelId : DEFAULT_PRIMARY_MODEL_ID;
  const criticModel = settings.criticModelId === null || settings.criticModelId === false || settings.criticModelId === ""
    ? null
    : known.has(settings.criticModelId)
      ? settings.criticModelId
      : "gpt-5-mini";
  const secondOpinionModels = Array.isArray(settings.secondOpinionModels)
    ? settings.secondOpinionModels.filter((modelId) => known.has(modelId) && modelId !== primaryModel)
    : ["perplexity", "gemini", "claude"].filter((modelId) => modelId !== primaryModel);
  const secondOpinionPrompts = Array.isArray(settings.secondOpinionPrompts) && settings.secondOpinionPrompts.length
    ? settings.secondOpinionPrompts.filter(Boolean)
    : ["technician"];

  return {
    primaryModelId: primaryModel,
    criticModelId: criticModel === primaryModel ? null : criticModel,
    secondOpinionGateEnabled: settings.secondOpinionGateEnabled !== false,
    secondOpinionModels,
    secondOpinionPrompts,
    updatedAt: settings.updatedAt || null,
    updatedBy: settings.updatedBy || ""
  };
}

function applyModelSettings(settings = sharedModelSettings) {
  sharedModelSettings = normalizeModelSettings(settings);
  primaryModelId = sharedModelSettings.primaryModelId;
  secondaryModelId = sharedModelSettings.criticModelId;
  renderPrimaryModelSelector();
  renderSecondOpinionControls();
}

function getSharedModelSettingsPayload() {
  syncSecondOpinionPromptSettings();
  return normalizeModelSettings({
    ...sharedModelSettings,
    primaryModelId,
    criticModelId: secondaryModelId,
    secondOpinionModels: getSelectedSecondOpinionModels(),
    secondOpinionPrompts: getSelectedSecondOpinionPrompts(),
    updatedAt: new Date().toISOString(),
    updatedBy: getCurrentUserProfile()?.email || getCurrentAccessEmail() || ""
  });
}

function saveModelSettings() {
  sharedModelSettings = getSharedModelSettingsPayload();
  saveSharedSettings();
}

function loadModelSettings() {
  applyModelSettings(sharedModelSettings);
  try {
    window.localStorage.removeItem(PRIMARY_MODEL_KEY);
    window.localStorage.removeItem(SECOND_OPINION_MODELS_KEY);
    window.localStorage.removeItem(SECOND_OPINION_PROMPTS_KEY);
  } catch (_error) {
    // Model roles now follow Cloudflare shared settings.
  }
}

function applySharedAppState(appState = {}) {
  if (!appState || typeof appState !== "object" || Array.isArray(appState)) return false;
  let changed = false;

  if (appState.manualConvictionOverrides && typeof appState.manualConvictionOverrides === "object" && !Array.isArray(appState.manualConvictionOverrides)) {
    manualConvictionOverrides = Object.entries(appState.manualConvictionOverrides).reduce((overrides, [commodity, value]) => {
      const score = Number(value);
      if (Number.isFinite(score)) overrides[commodity] = clamp(Math.round(score), 0, 100);
      return overrides;
    }, {});
    window.localStorage.setItem(MANUAL_CONVICTION_OVERRIDES_KEY, JSON.stringify(manualConvictionOverrides));
    changed = true;
  }

  if (appState.advisoryScoreThreshold && typeof appState.advisoryScoreThreshold === "object") {
    const score = Number(appState.advisoryScoreThreshold.value);
    advisoryScoreThresholdIsManual = appState.advisoryScoreThreshold.isManual === true;
    advisoryScoreThreshold = Number.isFinite(score)
      ? clamp(Math.round(score), 0, 100)
      : DEFAULT_ADVISORY_SCORE_THRESHOLD;
    if (advisoryScoreThresholdEl) advisoryScoreThresholdEl.value = String(advisoryScoreThreshold);
    if (accuracyThresholdDisplayEl) accuracyThresholdDisplayEl.textContent = `${advisoryScoreThreshold}+`;
    window.localStorage.setItem(ADVISORY_SCORE_THRESHOLD_KEY, String(advisoryScoreThreshold));
    changed = true;
  }

  if (appState.strategyEdits && typeof appState.strategyEdits === "object" && !Array.isArray(appState.strategyEdits)) {
    strategyEdits = appState.strategyEdits;
    window.localStorage.setItem(STRATEGY_EDITS_KEY, JSON.stringify(strategyEdits));
    changed = true;
  }

  if (Array.isArray(appState.customStrategies)) {
    changed = applySharedCustomStrategies(appState.customStrategies) || changed;
  }

  if (Array.isArray(appState.customSkills)) {
    changed = applySharedCustomSkills(appState.customSkills) || changed;
  }

  return changed;
}

function getSharedAppStatePayload() {
  return {
    manualConvictionOverrides: getManualConvictionOverrides(),
    advisoryScoreThreshold: {
      value: advisoryScoreThreshold,
      isManual: advisoryScoreThresholdIsManual
    },
    strategyEdits: loadStrategyEdits(),
    customStrategies,
    customSkills
  };
}

function loadStrategyEdits() {
  if (strategyEdits && typeof strategyEdits === "object" && !Array.isArray(strategyEdits)) {
    return strategyEdits;
  }
  try {
    const stored = JSON.parse(window.localStorage.getItem(STRATEGY_EDITS_KEY) || "{}");
    strategyEdits = stored && typeof stored === "object" && !Array.isArray(stored) ? stored : {};
    return strategyEdits;
  } catch (error) {
    strategyEdits = {};
    return strategyEdits;
  }
}

function saveStrategyEdits(edits) {
  strategyEdits = edits && typeof edits === "object" && !Array.isArray(edits) ? edits : {};
  window.localStorage.setItem(STRATEGY_EDITS_KEY, JSON.stringify(strategyEdits));
}

function saveStrategyEditsShared(edits) {
  saveStrategyEdits(edits);
  saveSharedSettings();
}

function loadCustomStrategies() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(CUSTOM_STRATEGIES_KEY) || "[]");
    customStrategies.splice(0, customStrategies.length, ...(Array.isArray(stored) ? stored.map(normalizeCustomStrategy).filter(Boolean) : []));
  } catch (error) {
    customStrategies.splice(0, customStrategies.length);
  }
}

function saveCustomStrategies() {
  window.localStorage.setItem(CUSTOM_STRATEGIES_KEY, JSON.stringify(customStrategies));
}

function saveCustomStrategiesShared() {
  saveCustomStrategies();
  saveSharedSettings();
}

function applySharedCustomStrategies(rows) {
  if (!Array.isArray(rows)) return false;
  const next = rows.map(normalizeCustomStrategy).filter(Boolean);
  const changed = JSON.stringify(next) !== JSON.stringify(customStrategies);
  if (changed) {
    customStrategies.splice(0, customStrategies.length, ...next);
    saveCustomStrategies();
  }
  return changed;
}

function normalizeCustomStrategy(strategy = {}) {
  const now = new Date().toISOString();
  const title = String(strategy.title || "").trim();
  if (!title) return null;
  return {
    key: String(strategy.key || `custom-strategy-${Date.now()}-${Math.random().toString(16).slice(2)}`),
    title,
    meta: String(strategy.meta || "Custom / draft").trim(),
    summary: String(strategy.summary || "").trim(),
    note: String(strategy.note || "").trim(),
    startedAt: strategy.startedAt || strategy.createdAt || now,
    createdAt: strategy.createdAt || now,
    updatedAt: strategy.updatedAt || now
  };
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
  renderCustomStrategies();
  const edits = loadStrategyEdits();
  Object.entries(edits).forEach(([strategyKey, values]) => updateStrategyCard(strategyKey, values));
}

function openStrategyEditor(strategyKey = "") {
  if (!strategyEditorEl || !strategyEditKeyEl) return;
  const isNew = !strategyKey;
  const card = isNew ? null : getStrategyCard(strategyKey);
  if (!isNew && !card) return;

  const saved = loadStrategyEdits()[strategyKey] || {};
  const current = isNew
    ? {
      title: "",
      meta: "Custom / draft",
      summary: "",
      note: ""
    }
    : { ...readStrategyCard(card), ...saved };
  strategyEditKeyEl.value = isNew ? "" : strategyKey;
  strategyEditTitleEl.value = current.title;
  strategyEditMetaEl.value = current.meta;
  strategyEditSummaryEl.value = current.summary;
  strategyEditNoteEl.value = current.note;
  const heading = strategyEditorEl.querySelector(".strategy-editor-head strong");
  const subheading = strategyEditorEl.querySelector(".strategy-editor-head span");
  if (heading) heading.textContent = isNew ? "Add strategy" : "Edit strategy";
  if (subheading) subheading.textContent = isNew
    ? "Create a new strategy card in the arsenal."
    : "Update the card copy shown in the strategy arsenal.";
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

  const values = {
    title: strategyEditTitleEl.value,
    meta: strategyEditMetaEl.value,
    summary: strategyEditSummaryEl.value,
    note: strategyEditNoteEl.value
  };
  if (!strategyKey) {
    customStrategies.unshift(normalizeCustomStrategy(values));
    saveCustomStrategiesShared();
    renderCustomStrategies();
    closeStrategyEditor();
    return;
  }
  const customStrategy = customStrategies.find((strategy) => strategy.key === strategyKey);
  if (customStrategy) {
    Object.assign(customStrategy, normalizeCustomStrategy({
      ...customStrategy,
      ...values,
      updatedAt: new Date().toISOString()
    }));
    saveCustomStrategies();
    renderCustomStrategies();
    closeStrategyEditor();
    return;
  }
  const edits = loadStrategyEdits();
  edits[strategyKey] = values;
  saveStrategyEditsShared(edits);
  updateStrategyCard(strategyKey, values);
  closeStrategyEditor();
}

function renderCustomStrategies() {
  const grid = document.querySelector(".strategy-card-grid");
  if (!grid) return;
  grid.querySelectorAll("[data-custom-strategy='true']").forEach((card) => card.remove());
  customStrategies.forEach((strategy) => {
    const performance = summarizeClosedTradePerformanceSince(strategy.startedAt);
    const card = document.createElement("article");
    const head = document.createElement("div");
    const titleWrap = document.createElement("div");
    const title = document.createElement("h3");
    const meta = document.createElement("span");
    const summary = document.createElement("p");
    const note = document.createElement("div");
    const metric = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const remove = document.createElement("button");

    card.className = "strategy-method-card";
    card.dataset.strategyKey = strategy.key;
    card.dataset.customStrategy = "true";
    title.dataset.strategyField = "title";
    meta.dataset.strategyField = "meta";
    summary.dataset.strategyField = "summary";
    note.dataset.strategyField = "note";
    title.textContent = strategy.title || "Untitled strategy";
    meta.textContent = strategy.meta || "Custom";
    summary.textContent = strategy.summary || "No summary yet.";
    note.className = "strategy-note";
    note.textContent = strategy.note || "No execution note yet.";
    metric.className = "strategy-note";
    metric.dataset.strategyMetric = "true";
    metric.textContent = `Started ${formatTradeTime(strategy.startedAt)} / active ${formatDurationSince(strategy.startedAt)} / ${formatPerformanceSummary(performance)}`;
    actions.className = "strategy-card-actions";
    edit.className = "strategy-pill strategy-edit-button";
    edit.type = "button";
    edit.dataset.strategyEdit = strategy.key;
    edit.textContent = "Edit";
    edit.addEventListener("click", () => openStrategyEditor(strategy.key));
    remove.className = "strategy-pill";
    remove.type = "button";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
      const index = customStrategies.findIndex((candidate) => candidate.key === strategy.key);
      if (index >= 0) {
        customStrategies.splice(index, 1);
        saveCustomStrategiesShared();
        renderCustomStrategies();
      }
    });
    titleWrap.append(title, meta);
    head.append(titleWrap);
    actions.append(edit, remove);
    card.append(head, summary, note, metric, actions);
    grid.prepend(card);
  });
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
  const selectedModels = new Set(sharedModelSettings.secondOpinionModels || ["perplexity", "gemini", "claude"]);

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

  if (secondOpinionPromptsEl) {
    renderSecondOpinionAnalystSkills();
  }

  updateSecondOpinionRunState();
}

function renderSecondOpinionAnalystSkills() {
  if (!secondOpinionPromptsEl) return;
  const analysts = getAdoptedOpinionAnalysts();
  secondOpinionPromptsEl.innerHTML = "";

  if (!analysts.length) {
    const empty = document.createElement("div");
    const strong = document.createElement("strong");
    const span = document.createElement("span");
    empty.className = "second-opinion-analyst-empty";
    strong.textContent = "No analyst skills adopted";
    span.textContent = "Adopt skills into second opinions from the Skills screen.";
    empty.append(strong, span);
    secondOpinionPromptsEl.append(empty);
    return;
  }

  analysts.forEach((skill) => {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const name = document.createElement("strong");
    const detail = document.createElement("span");
    button.className = "model-choice second-opinion-analyst-choice";
    button.type = "button";
    button.dataset.skillId = skill.id;
    label.className = "model-badge";
    label.textContent = "S";
    name.textContent = skill.name;
    detail.textContent = "Adopted Skill - click to edit";
    button.append(label, name, detail);
    button.addEventListener("click", () => {
      selectCustomSkill(skill.id);
      setActiveSection("skills");
    });
    secondOpinionPromptsEl.append(button);
  });
}

function updateSecondOpinionRunState() {
  const count = getSelectedSecondOpinionModels().length;
  if (secondOpinionRunSelectedEl) {
    secondOpinionRunSelectedEl.textContent = `Selected (${count})`;
    secondOpinionRunSelectedEl.disabled = true;
  }
  if (secondOpinionRunAllEl) secondOpinionRunAllEl.disabled = true;
  secondOpinionStatusEl.textContent = `${getModelById(primaryModelId).name} primary / ${count} gate model${count === 1 ? "" : "s"}`;
  primaryModelStatEl.textContent = getModelById(primaryModelId).name;
  renderSecondOpinionInfluence();
}

function getStoredSecondOpinionModelIds() {
  if (Array.isArray(sharedModelSettings.secondOpinionModels)) {
    return sharedModelSettings.secondOpinionModels
      .filter((modelId) => modelId !== primaryModelId && advisoryModels.some(({ id }) => id === modelId));
  }
  return secondOpinionModelsEl ? getSelectedSecondOpinionModels() : [];
}

function getLLMRefreshHours() {
  try {
    const stored = Number(window.localStorage.getItem(LLM_REFRESH_HOURS_KEY));
    if (LLM_REFRESH_HOUR_OPTIONS.includes(stored)) return stored;
  } catch (_error) {
    // Use the default interval if localStorage is unavailable.
  }
  return DEFAULT_LLM_REFRESH_HOURS;
}

function setLLMRefreshHours(hours) {
  const parsed = Number(hours);
  const value = LLM_REFRESH_HOUR_OPTIONS.includes(parsed) ? parsed : DEFAULT_LLM_REFRESH_HOURS;
  try {
    window.localStorage.setItem(LLM_REFRESH_HOURS_KEY, String(value));
    window.localStorage.removeItem(LLM_SCHEDULE_SLOT_KEY);
  } catch (_error) {
    // The schedule still works in-memory when storage fails.
  }
  return value;
}

function getLLMScheduleEtHours() {
  const interval = getLLMRefreshHours();
  const hours = [];
  for (let hour = 0; hour < 24; hour += interval) hours.push(hour);
  return hours.length ? hours : [0, 6, 12, 18];
}

function formatEtHour(hour) {
  if (hour === 0) return "12 AM";
  if (hour < 12) return `${hour} AM`;
  if (hour === 12) return "12 PM";
  return `${hour - 12} PM`;
}

function getLLMScheduleLabel() {
  return `${getLLMScheduleEtHours().map(formatEtHour).join(", ")} ET`;
}

function getNextLLMScheduleSlot(date = new Date()) {
  const scheduleHours = getLLMScheduleEtHours();
  const candidate = new Date(date);
  candidate.setMinutes(0, 0, 0);
  candidate.setHours(candidate.getHours() + 1);

  for (let index = 0; index < 72; index += 1) {
    const eastern = getEasternParts(candidate);
    if (scheduleHours.includes(eastern.hour)) {
      return {
        date: new Date(candidate),
        label: `${formatEtHour(eastern.hour)} ET`
      };
    }
    candidate.setHours(candidate.getHours() + 1);
  }

  return null;
}

function formatDurationUntil(date) {
  const diffMs = new Date(date).getTime() - Date.now();
  if (!Number.isFinite(diffMs) || diffMs <= 0) return "due now";
  const totalMinutes = Math.ceil(diffMs / 60000);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours && minutes) return `${hours}h ${minutes}m`;
  if (hours) return `${hours}h`;
  return `${minutes}m`;
}

function getLLMScheduleStatusText(lastRun = null) {
  const next = getNextLLMScheduleSlot();
  const schedule = getLLMScheduleLabel();
  const nextText = next
    ? `next ${next.label} in ${formatDurationUntil(next.date)}`
    : `schedule ${schedule}`;
  if (!lastRun) return `No LLM run yet; ${nextText}`;
  return `Last LLM run ${lastRun}; ${nextText}`;
}

function getTokenCostsWindowHours() {
  const activeButton = document.querySelector(".token-window-button[data-active='true']");
  const label = (activeButton?.textContent || "24h").trim().toLowerCase();
  const windows = {
    "1h": 1,
    "2h": 2,
    "10h": 10,
    "24h": 24,
    "48h": 48,
    "72h": 72,
    "1w": 168,
    "2w": 336,
    "1m": 720,
    "custom": 24
  };
  return windows[label] || 24;
}

function formatTokenCount(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "0";
  return Math.round(number).toLocaleString();
}

function formatTokenCost(value) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return "FREE";
  return `$${number.toFixed(number < 1 ? 4 : 2)}`;
}

function formatTokenDateTime(value) {
  if (!value) return "Never";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Never";
  return date.toLocaleString([], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

function renderTokenSummaryCards(totals = {}) {
  const values = [
    formatTokenCount(totals.apiCalls),
    formatTokenCount(totals.totalTokens),
    formatTokenCost(totals.billableCostUsd),
    formatTokenCount(totals.freeTierCalls)
  ];
  document.querySelectorAll(".token-cost-card strong").forEach((node, index) => {
    node.textContent = values[index] || "0";
  });
}

async function fetchTokenUsageTelemetry(windowHours) {
  try {
    const response = await fetchWithTimeout(
      `${getMasterHistoryUrl()}/token-usage?hours=${encodeURIComponent(windowHours)}`,
      { cache: "no-store" },
      8000
    );
    if (!response.ok) throw new Error(`Token usage request failed: ${response.status}`);
    return await response.json();
  } catch (error) {
    return {
      generatedAt: new Date().toISOString(),
      source: "unavailable",
      error: error.message,
      windowHours,
      totals: { apiCalls: 0, totalTokens: 0, billableCostUsd: 0, freeTierCalls: 0 },
      models: [],
      jobs: []
    };
  }
}

async function renderTokenCosts() {
  if (!tokenModelListEl) return;

  const interval = getLLMRefreshHours();
  const windowHours = getTokenCostsWindowHours();
  const scheduleHours = getLLMScheduleEtHours();
  const scheduledRunsPerDay = scheduleHours.length;
  const primaryModel = getModelById(primaryModelId);
  const criticModel = secondaryModelId ? getModelById(secondaryModelId) : null;
  const secondOpinionIds = new Set(getStoredSecondOpinionModelIds());
  const selectedCommodity = commodities.find(({ id }) => id === (commoditySelect?.value || "oil")) || commodities[0];
  const scheduledModelCalls = scheduledRunsPerDay * (criticModel ? 2 : 1);
  const telemetry = await fetchTokenUsageTelemetry(windowHours);
  const hasRealTelemetry = telemetry?.source === "cloudflare-d1-token-usage";

  if (tokenRefreshHoursEl) tokenRefreshHoursEl.value = String(interval);
  if (tokenScheduleSlotsEl) tokenScheduleSlotsEl.textContent = getLLMScheduleLabel();
  if (tokenEstimatedCallsEl) {
    tokenEstimatedCallsEl.textContent = `${scheduledModelCalls} per day per active commodity`;
  }
  if (tokenCostsStatusEl) {
    const scheduleText = `Scheduled advisory uses ${primaryModel.name}${criticModel ? ` plus ${criticModel.name} critic` : ""} every ${interval} hour${interval === 1 ? "" : "s"} for ${selectedCommodity.name}.`;
    if (hasRealTelemetry) {
      tokenCostsStatusEl.textContent = `${scheduleText} Showing real backend token usage for the last ${windowHours} hour${windowHours === 1 ? "" : "s"}.`;
    } else if (telemetry?.source === "d1-not-configured") {
      tokenCostsStatusEl.textContent = `${scheduleText} D1 token telemetry is not configured yet, so totals show schedule estimates only.`;
    } else {
      tokenCostsStatusEl.textContent = `${scheduleText} Token telemetry unavailable: ${telemetry?.error || "backend not reachable"}.`;
    }
  }
  renderTokenSummaryCards(telemetry?.totals);

  const usageByModel = new Map((telemetry?.models || []).map((row) => [row.model, row]));
  const configuredRoutes = new Set(advisoryModels.map((model) => model.openrouterId).filter(Boolean));
  const extraUsageRows = (telemetry?.models || []).filter((row) => row.model && !configuredRoutes.has(row.model));
  const modelRows = advisoryModels.map((model) => {
    const roles = [];
    if (model.id === primaryModelId) roles.push("Primary advisory");
    if (criticModel && model.id === criticModel.id) roles.push("Critic");
    if (secondOpinionIds.has(model.id)) roles.push("Second opinion");
    const scheduled = roles.includes("Primary advisory") || roles.includes("Critic");
    const callCadence = scheduled
      ? `${scheduledRunsPerDay}/day per active commodity`
      : roles.includes("Second opinion")
        ? "On demand"
        : "Available";
    const roleMarkup = roles.length
      ? roles.map((role) => `<span class="token-role-pill">${escapeHtml(role)}</span>`).join("")
      : `<span class="token-role-pill token-role-muted">Available</span>`;
    const isPrimary = model.id === primaryModelId;
    const isCritic = Boolean(criticModel && model.id === criticModel.id);
    const isSecondOpinion = secondOpinionIds.has(model.id);
    const roleControls = `
      <div class="token-role-actions" aria-label="${escapeHtml(model.name)} model role controls">
        <button class="token-role-button" type="button" data-token-primary="${escapeHtml(model.id)}" ${isPrimary ? "disabled" : ""}>Primary</button>
        <button class="token-role-button" type="button" data-token-critic="${escapeHtml(model.id)}" ${isPrimary || isCritic ? "disabled" : ""}>Critic</button>
        <label class="token-role-check">
          <input type="checkbox" data-token-second-opinion="${escapeHtml(model.id)}" ${isSecondOpinion ? "checked" : ""} ${isPrimary ? "disabled" : ""}>
          <span>2nd</span>
        </label>
      </div>
    `;
    const usage = usageByModel.get(model.openrouterId || model.id);
    const cadenceText = usage
      ? `${formatTokenCount(usage.calls)} calls / ${formatTokenCount(usage.totalTokens)} tokens / ${formatTokenCost(usage.billableCostUsd)}`
      : callCadence;

    return `
      <div class="token-model-row" data-active="${roles.length ? "true" : "false"}">
        <div class="token-model-name">
          <strong>${escapeHtml(model.name)}</strong>
          <span>${escapeHtml(model.provider)}</span>
        </div>
        <code>${escapeHtml(model.openrouterId || "Not configured")}</code>
        <div>
          <div class="token-role-pills">${roleMarkup}</div>
          ${roleControls}
        </div>
        <span>${escapeHtml(cadenceText)}</span>
      </div>
    `;
  }).join("") + extraUsageRows.map((row) => `
    <div class="token-model-row" data-active="true">
      <div class="token-model-name">
        <strong>${escapeHtml(row.model)}</strong>
        <span>${escapeHtml(row.provider || "OpenRouter")}</span>
      </div>
      <code>${escapeHtml(row.model)}</code>
      <div class="token-role-pills"><span class="token-role-pill">Observed</span></div>
      <span>${escapeHtml(`${formatTokenCount(row.calls)} calls / ${formatTokenCount(row.totalTokens)} tokens / ${formatTokenCost(row.billableCostUsd)}`)}</span>
    </div>
  `).join("");

  tokenModelListEl.innerHTML = `
    <div class="token-model-table">
      <div class="token-model-row token-model-header">
        <span>Model</span>
        <span>Route</span>
        <span>Role</span>
        <span>Cadence</span>
      </div>
      ${modelRows}
    </div>
  `;

  if (tokenJobBreakdownEl) {
    const observedJobs = (telemetry?.jobs || []).map((job) => `
      <div class="token-job-row">
        <span>${escapeHtml(job.job || "unknown")}</span>
        <strong>${escapeHtml(`${formatTokenCount(job.calls)} calls / ${formatTokenCount(job.totalTokens)} tokens / ${formatTokenCost(job.billableCostUsd)} / last ${formatTokenDateTime(job.lastCalledAt)}`)}</strong>
      </div>
    `).join("");
    tokenJobBreakdownEl.innerHTML = observedJobs || `
      <div class="token-job-row">
        <span>Primary advisory refresh</span>
        <strong>${scheduledRunsPerDay}/day per active commodity</strong>
      </div>
      <div class="token-job-row">
        <span>Critic model refresh</span>
        <strong>${criticModel ? `${scheduledRunsPerDay}/day per active commodity` : "Off"}</strong>
      </div>
      <div class="token-job-row">
        <span>Second Opinion models</span>
        <strong>${secondOpinionIds.size ? `${secondOpinionIds.size} models on demand` : "None selected"}</strong>
      </div>
      <p class="token-job-note">Real token usage will appear here after the Worker is connected to D1 and OpenRouter calls are made.</p>
    `;
  }
}

function persistModelRoleChanges() {
  sharedModelSettings = normalizeModelSettings({
    ...sharedModelSettings,
    primaryModelId,
    criticModelId: secondaryModelId,
    updatedAt: new Date().toISOString(),
    updatedBy: getCurrentUserProfile()?.email || getCurrentAccessEmail() || ""
  });
  saveSharedSettings();
  renderPrimaryModelSelector();
  renderSecondOpinionControls();
  renderTokenCosts();
  lastVerifiedLLMRun = null;
  llmAutoCommodityKey = null;
  calculateSignal();
}

function setPrimaryModelRole(modelId) {
  if (!advisoryModels.some(({ id }) => id === modelId)) return;
  primaryModelId = modelId;
  if (secondaryModelId === modelId) secondaryModelId = modelId === "gpt-5-mini" ? null : "gpt-5-mini";
  sharedModelSettings.secondOpinionModels = (sharedModelSettings.secondOpinionModels || []).filter((id) => id !== modelId);
  persistModelRoleChanges();
}

function setCriticModelRole(modelId) {
  if (!advisoryModels.some(({ id }) => id === modelId) || modelId === primaryModelId) return;
  secondaryModelId = modelId;
  persistModelRoleChanges();
}

function setSecondOpinionModelRole(modelId, enabled) {
  if (!advisoryModels.some(({ id }) => id === modelId) || modelId === primaryModelId) return;
  const current = new Set(sharedModelSettings.secondOpinionModels || []);
  if (enabled) current.add(modelId);
  else current.delete(modelId);
  sharedModelSettings.secondOpinionModels = Array.from(current);
  persistModelRoleChanges();
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

function getSecondOpinionConsensusModelIds() {
  const defaults = ["perplexity", "gemini", "claude"];
  const selected = getStoredSecondOpinionModelIds();
  const modelIds = selected.length ? selected : defaults;
  return modelIds
    .filter((modelId) => modelId !== primaryModelId)
    .filter((modelId) => advisoryModels.some(({ id }) => id === modelId));
}

function getSecondOpinionConsensus(signal) {
  const side = getSignalSide(signal);
  const modelIds = getSecondOpinionConsensusModelIds();
  const promptIds = getSelectedSecondOpinionPrompts();
  const opinions = modelIds.map((modelId) => {
    const model = getModelById(modelId);
    const score = getOpinionScore(signal, model, promptIds);
    const tone = getOpinionTone(signal, score);
    return { modelId, modelName: model.name, score, tone };
  });
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
  let label = "Second opinions neutral";
  let detail = "No directional primary advisory for second opinions to gate.";

  if (!opinions.length) {
    return {
      enabled: false,
      opinions,
      counts,
      required: 0,
      confirmCount: 0,
      thresholdBoost: 0,
      blocksEntry: false,
      label: "Second opinion gate off",
      detail: "No second-opinion models are selected."
    };
  }

  if (side) {
    if (oppositeCount >= required) {
      blocksEntry = true;
      thresholdBoost = 10;
      label = "Second opinions disagree";
      detail = `${oppositeCount}/${opinions.length} second opinions lean ${oppositeSide}; blocking the ${side} entry.`;
    } else if (waitCount >= required) {
      thresholdBoost = 4;
      label = "Second opinions say wait";
      detail = `${waitCount}/${opinions.length} second opinions say wait; adding a ${thresholdBoost}-point caution buffer instead of blocking the ${side} entry.`;
    } else if (confirmCount < required) {
      blocksEntry = true;
      thresholdBoost = 5;
      label = "Second opinions not confirmed";
      detail = `${confirmCount}/${opinions.length} second opinions confirm ${side}; need ${required}.`;
    } else {
      thresholdBoost = waitCount || oppositeCount ? 3 : 0;
      label = "Second opinions confirm";
      detail = `${confirmCount}/${opinions.length} second opinions confirm ${side}.${thresholdBoost ? " Mixed votes add a small threshold buffer." : ""}`;
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

function renderSecondOpinionInfluence() {
  renderSecondOpinionResults(getSecondOpinionConsensusModelIds(), { recordEvent: false });
}

function renderSecondOpinionResults(modelIds, options = {}) {
  const signal = lastPrimarySignal;
  const tradePlan = lastTradePlan;
  const commodityMeta = lastCommodityMeta;
  const promptIds = getSelectedSecondOpinionPrompts();
  const adoptedOpinionSkills = getAdoptedSkills("opinion").slice(0, 3);

  secondOpinionResultsEl.innerHTML = "";

  if (!signal || !tradePlan) {
    secondOpinionResultsLabelEl.textContent = "Influence values (0 opinions)";
    secondOpinionStatusEl.textContent = "Waiting for main advisory";
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
    const promptText = promptIds.map(getOpinionPromptLabel).join(", ");
    const directionText = tone === "long" ? "leans long" : tone === "short" ? "leans short" : "would wait";

    card.className = "opinion-card";
    card.dataset.tone = tone;
    head.className = "opinion-card-head";
    titleStrong.textContent = promptText;
    titleMeta.textContent = `${model.name} / ${model.style}`;
    title.append(titleStrong, titleMeta);
    scoreEl.className = "opinion-score";
    scoreEl.textContent = `${tone.toUpperCase()} ${score}`;
    scoreEl.title = `${tone.toUpperCase()} with ${score}/100 conviction`;
    meta.className = "opinion-data";
    meta.textContent = tradePlan.priceReady
      ? `Data: ${formatPrice(tradePlan.livePrice)} via ${tradePlan.priceSource}`
      : `Data: ${UNAVAILABLE_TEXT}`;

    const opinionBullets = [
      `${model.name} ${directionText} on ${commodityMeta.name.toLowerCase()} with ${score}/100 conviction.`,
      `Primary advisory is ${signal.label.toLowerCase()} from ${getModelById(primaryModelId).name}.`,
      tradePlan.priceReady
        ? `Entry ${formatPrice(tradePlan.buyPrice)}, target ${formatPrice(tradePlan.sellPrice)}, stop ${formatPrice(tradePlan.stopLoss)}.`
        : "Entry, target, and stop are not available until a valid price source is loaded.",
      tone === "wait" ? "Main risk: signal strength is not high enough for a clean independent confirmation." : "Main risk: validate price source, spread, and stop distance before using this as trade support."
    ];
    adoptedOpinionSkills.forEach((skill) => {
      opinionBullets.push(`Adopted skill - ${skill.name}: ${skill.body || "No instructions yet."}`);
    });
    opinionBullets.forEach((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      list.append(item);
    });

    head.append(title, scoreEl);
    card.append(head, meta, list);
    secondOpinionResultsEl.append(card);
  });

  const consensus = getSecondOpinionConsensus(signal);
  secondOpinionResultsLabelEl.textContent = `Influence values (${modelIds.length} opinion${modelIds.length === 1 ? "" : "s"}) - ${consensus.label}`;
  secondOpinionStatusEl.textContent = `${modelIds.length} second-opinion gate model${modelIds.length === 1 ? "" : "s"} saved in Cloudflare`;
  if (options.recordEvent) {
    recordOpenBrainEvent("second-opinion", `Viewed ${modelIds.length} second opinion${modelIds.length === 1 ? "" : "s"} for ${commodityMeta.name}`, {
      commodity: commodityMeta.id,
      primaryModel: primaryModelId,
      models: modelIds,
      prompts: promptIds,
      primarySignal: signal.label,
      tags: ["second-opinion", commodityMeta.id, primaryModelId]
    });
  }
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
      strategy: PETER_OIL_TEST_AGENT_STRATEGY,
      paperTrading: {
        enabled: true,
        commodities: ["oil"],
        riskPct: PAPER_DEFAULT_RISK_PCT,
        maxOpenTrades: 1,
        entryThreshold: 58,
        overnightRiskMode: "flatten-before-close"
      },
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
      paperBaseEquity: 1000,
      paperRiskPct: PAPER_DEFAULT_RISK_PCT,
      strategy: D2_OIL_TEST_AGENT_STRATEGY,
      paperTrading: {
        enabled: true,
        commodities: ["oil"],
        riskPct: PAPER_DEFAULT_RISK_PCT,
        maxOpenTrades: 1,
        entryThreshold: 58,
        overnightRiskMode: "flatten-before-close"
      },
      enabled: true
    },
    {
      id: "user-ai4ses-roberts",
      name: "Christopher Roberts",
      email: "ai4ses@gmail.com",
      createdAt: "2026-02-02T12:00:00.000Z",
      lastActiveAt: daysAgo(2),
      sessions: 12,
      paperTrading: {
        enabled: true,
        commodities: ["oil"],
        riskPct: PAPER_DEFAULT_RISK_PCT,
        maxOpenTrades: 1,
        entryThreshold: PAPER_MIN_CONVICTION
      },
      enabled: true
    }
  ];
}

function saveUserRoster() {
  window.localStorage.setItem(USER_ROSTER_KEY, JSON.stringify(userRoster));
}

const ACCOUNT_EMAIL_ALIASES = {
  "peter@ambeil.com": "peterambiel@gmail.com",
  "pete@ambeil.com": "peterambiel@gmail.com",
  "peter@ambiel.com": "peterambiel@gmail.com"
};

function normalizeEmail(value) {
  const email = String(value || "").trim().toLowerCase();
  return ACCOUNT_EMAIL_ALIASES[email] || email;
}

function getDefaultUserEquity(user = {}, fallback = DEFAULT_NON_EXEMPT_USER_EQUITY) {
  const explicit = Number(user.paperBaseEquity);
  if (Number.isFinite(explicit)) return Math.max(0, explicit);

  const fallbackValue = Number(fallback);
  if (Number.isFinite(fallbackValue)) return Math.max(0, fallbackValue);

  return DEFAULT_NON_EXEMPT_USER_EQUITY;
}

function buildOilOnlyAllocations(startCapital) {
  return commodities.reduce((allocations, { id }) => {
    allocations[id] = { startCapital: id === "oil" ? Math.max(0, Number(startCapital) || 0) : 0 };
    return allocations;
  }, {});
}

function normalizeOilOnlyPaperTrading(settings = {}, fallback = {}, riskPct = PAPER_DEFAULT_RISK_PCT) {
  const normalized = normalizeServerPaperTrading(settings, fallback);
  return {
    ...normalized,
    enabled: true,
    commodities: OIL_ONLY_COMMODITIES.slice(),
    riskPct: Number.isFinite(Number(normalized.riskPct)) ? normalized.riskPct : riskPct
  };
}

function formatNumberInput(value, decimals = 2) {
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  return number.toFixed(decimals).replace(/\.?0+$/, "");
}

function formatPercentInput(rate) {
  const number = Number(rate);
  if (!Number.isFinite(number)) return "";
  return (number * 100).toFixed(3).replace(/\.?0+$/, "");
}

function parsePercentInput(value, fallbackRate) {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return fallbackRate;
  return number / 100;
}

function formatLeverageInput(rate) {
  const number = Number(rate);
  if (!Number.isFinite(number) || number <= 0) return "";
  return formatNumberInput(1 / number, 2);
}

function parseLeverageInput(value, fallbackRate) {
  const cleaned = String(value || "").replace(/x/gi, "").trim();
  const leverage = Number(cleaned);
  if (!Number.isFinite(leverage) || leverage <= 0) return fallbackRate;
  return 1 / leverage;
}

function normalizeStoredMarginRate(rate, commodityId, side) {
  const number = Number(rate);
  if (!Number.isFinite(number)) return number;
  if (commodityId !== "oil") return number;

  const legacyRate = side === "short" ? 0.17410 : 0.14924;
  const currentRate = side === "short" ? 1 / 6.2 : 1 / 7.2;
  return Math.abs(number - legacyRate) < 0.00001 ? currentRate : number;
}

function normalizeCommodityTradeTerms(terms = {}, commodityId) {
  const config = marketConfig[commodityId] || {};
  const source = terms && typeof terms === "object" && !Array.isArray(terms) ? terms : {};
  const contractMultiplier = Number(source.contractMultiplier ?? config.contractMultiplier);
  const marginRateLong = normalizeStoredMarginRate(source.marginRateLong ?? config.marginRateLong, commodityId, "long");
  const marginRateShort = normalizeStoredMarginRate(source.marginRateShort ?? config.marginRateShort, commodityId, "short");
  const feePerContractSide = Number(source.feePerContractSide ?? config.feePerContractSide);
  const feeLabel = String(source.feeLabel || config.feeLabel || "Estimated fee").trim();
  const ticker = String(source.ticker || config.ticker || "").trim();
  const productId = String(source.productId || config.productId || ticker).trim();
  const contractMonth = String(source.contractMonth || config.contractMonth || "Front month").trim();
  const contractExpiresAt = String(source.contractExpiresAt || config.contractExpiresAt || "").trim();
  const rollBeforeDays = Number(source.rollBeforeDays ?? config.rollBeforeDays ?? 3);

  return getActiveCommodityContract({
    ticker,
    productId: productId || ticker,
    contractMonth,
    contractExpiresAt,
    rollBeforeDays: Number.isFinite(rollBeforeDays) ? clamp(Math.round(rollBeforeDays), 0, 30) : 3,
    contracts: Array.isArray(config.contracts) ? config.contracts : [],
    contractMultiplier: Number.isFinite(contractMultiplier) && contractMultiplier > 0 ? contractMultiplier : 1,
    marginRateLong: Number.isFinite(marginRateLong) && marginRateLong > 0 ? marginRateLong : 1,
    marginRateShort: Number.isFinite(marginRateShort) && marginRateShort > 0 ? marginRateShort : 1,
    feePerContractSide: Number.isFinite(feePerContractSide) && feePerContractSide >= 0 ? feePerContractSide : 0,
    feeLabel: feeLabel || "Estimated fee"
  });
}

function getActiveCommodityContract(config = {}, value = new Date()) {
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

function normalizeCommodityTradeTermsMap(map = {}) {
  const source = map && typeof map === "object" && !Array.isArray(map) ? map : {};
  return commodities.reduce((result, { id }) => {
    result[id] = normalizeCommodityTradeTerms(source[id], id);
    return result;
  }, {});
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
  const profileIdentity = {
    name: user?.name || fallback.name || "",
    email,
    paperBaseEquity: user?.paperBaseEquity ?? fallback.paperBaseEquity
  };
  const profileEquity = getDefaultUserEquity(profileIdentity, fallback.paperBaseEquity ?? PAPER_START_EQUITY);
  const profileRiskPct = Number(user?.paperRiskPct ?? fallback.paperRiskPct ?? PAPER_DEFAULT_RISK_PCT);
  const avatarDataUrl = String(user?.avatarDataUrl || fallback.avatarDataUrl || "");
  const sessionHistory = Array.isArray(user?.sessionHistory)
    ? user.sessionHistory
    : Array.isArray(fallback.sessionHistory) ? fallback.sessionHistory : [];
  const commoditiesForUser = OIL_ONLY_COMMODITIES.slice();
  const commodityAllocations = normalizeCommodityAllocations(
    buildOilOnlyAllocations(profileEquity),
    commoditiesForUser,
    profileEquity
  );
  const commodityTradeTerms = normalizeCommodityTradeTermsMap(user?.commodityTradeTerms ?? fallback.commodityTradeTerms);
  const defaultServerPaperTrading = { enabled: true, commodities: OIL_ONLY_COMMODITIES, riskPct: profileRiskPct, maxOpenTrades: 1, entryThreshold: PAPER_MIN_CONVICTION };

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
    commodityTradeTerms,
    strategy: normalizeUserStrategy(user?.strategy ?? fallback.strategy),
    strategyHistory: normalizeStrategyHistory(user?.strategyHistory ?? fallback.strategyHistory),
    brokerAccount: normalizeBrokerAccount(user?.brokerAccount ?? fallback.brokerAccount),
    paperTrading: normalizeOilOnlyPaperTrading(user?.paperTrading ?? defaultServerPaperTrading, fallback.paperTrading, profileRiskPct),
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
    applyUserAccountDefaults();
    saveUserRoster();
  } catch (error) {
    userRoster.splice(0, userRoster.length, ...getDefaultUsers().map((user) => normalizeUserRecord(user)).filter(Boolean));
    applyUserAccountDefaults();
    saveUserRoster();
  }
}

function applyUserAccountDefaults() {
  userRoster.forEach((user) => {
    user.paperBaseEquity = getDefaultUserEquity(user, user.paperBaseEquity);
    user.commodities = OIL_ONLY_COMMODITIES.slice();
    user.commodityAllocations = normalizeCommodityAllocations(buildOilOnlyAllocations(user.paperBaseEquity), OIL_ONLY_COMMODITIES, user.paperBaseEquity);
    user.paperTrading = normalizeOilOnlyPaperTrading(user.paperTrading, {}, user.paperRiskPct);
  });
}

function migrateKarpathyAutoApplyForAllUsers() {
  let alreadyApplied = false;
  try {
    alreadyApplied = window.localStorage.getItem(KARPATHY_AUTO_APPLY_MIGRATION_KEY) === "true";
  } catch (_error) {
    alreadyApplied = false;
  }
  if (alreadyApplied) return false;

  let changed = false;
  userRoster.forEach((user) => {
    const strategy = normalizeUserStrategy(user.strategy);
    if (strategy.karpathyAutoApply !== true) changed = true;
    user.strategy = {
      ...strategy,
      karpathyAutoApply: true
    };
  });

  try {
    window.localStorage.setItem(KARPATHY_AUTO_APPLY_MIGRATION_KEY, "true");
  } catch (_error) {
    // Migration state is also persisted to Cloudflare through user strategies.
  }

  if (changed) {
    saveUserRoster();
  }
  return changed;
}

function migrateMarkovMethodForTestAgents() {
  let alreadyApplied = false;
  try {
    alreadyApplied = window.localStorage.getItem(MARKOV_TEST_AGENT_MIGRATION_KEY) === "true";
  } catch (_error) {
    alreadyApplied = false;
  }
  if (alreadyApplied) return false;

  let changed = false;
  userRoster.forEach((user) => {
    const email = normalizeEmail(user.email);
    const strategy = normalizeUserStrategy(user.strategy);
    const shouldEnable = OIL_TEST_AGENT_EMAILS.has(email);
    if (strategy.markovHedgeFundMethod !== shouldEnable) changed = true;
    user.strategy = {
      ...strategy,
      markovHedgeFundMethod: shouldEnable
    };
  });

  try {
    window.localStorage.setItem(MARKOV_TEST_AGENT_MIGRATION_KEY, "true");
  } catch (_error) {
    // Migration state is also persisted to Cloudflare through user strategies.
  }

  const seededHistory = seedMarkovStrategyHistoryForTestAgents();
  changed = seededHistory || changed;
  if (changed) {
    saveUserRoster();
  }
  return changed;
}

function migratePeterMissedOpportunityReentry() {
  let alreadyApplied = false;
  try {
    alreadyApplied = window.localStorage.getItem(PETER_MISSED_REENTRY_MIGRATION_KEY) === "true";
  } catch (_error) {
    alreadyApplied = false;
  }
  if (alreadyApplied) return false;

  let changed = false;
  userRoster.forEach((user) => {
    const email = normalizeEmail(user.email);
    if (email !== "peter@pjbell.com" && email !== "aretwo3000@gmail.com") return;
    const strategy = normalizeUserStrategy(user.strategy);
    const shouldEnable = email === "peter@pjbell.com";
    if (strategy.missedOpportunityReentry !== shouldEnable) changed = true;
    user.strategy = {
      ...strategy,
      missedOpportunityReentry: shouldEnable
    };
    const history = normalizeStrategyHistory(user.strategyHistory);
    if (shouldEnable && !history.some((entry) => entry.id === "strategy-change-0004-peter-missed-opportunity-reentry")) {
      changed = true;
      user.strategyHistory = normalizeStrategyHistory([
        {
          id: "strategy-change-0004-peter-missed-opportunity-reentry",
          changedAt: new Date().toISOString(),
          changedByName: "Peter Bell",
          changedByEmail: "peter@pjbell.com",
          summary: "Refinement 5/21/2026: Peter missed-opportunity re-entry enabled",
          detail: "Peter only. If oil has already made a large intraday move, Markov favors the same side, and live tape confirms continuation after a pullback or bounce, the Cloudflare scheduler may open a small step-1 paper trade instead of waiting for the slow advisory score. D2 remains off for this rule.",
          before: { ...strategy, missedOpportunityReentry: false },
          after: { ...strategy, missedOpportunityReentry: true }
        },
        ...history
      ]);
    } else {
      user.strategyHistory = history;
    }
  });

  try {
    window.localStorage.setItem(PETER_MISSED_REENTRY_MIGRATION_KEY, "true");
  } catch (_error) {
    // Migration state is also persisted to Cloudflare through user strategies.
  }

  if (changed) saveUserRoster();
  return changed;
}

function getCurrentAccessEmail() {
  return normalizeEmail(window.sessionStorage.getItem(ACCESS_EMAIL_KEY));
}

function getCurrentUserProfile() {
  return findRegisteredUserByEmail(getCurrentAccessEmail());
}

function hasCurrentUserProfile() {
  return Boolean(getCurrentUserProfile());
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

function getCurrentPaperLedgerSummaryRow() {
  const email = getCurrentLedgerEmail();
  if (!email || !paperLedgerSummaryRows.length) return null;
  return paperLedgerSummaryRows.find((row) => normalizeEmail(row?.email || row?.user?.email) === email) || null;
}

function shouldUsePaperLedgerSummaryTotals() {
  return Boolean(
    transactionHistoryLoadedFromBackend
    && !historyFiltersTouched
    && normalizeHistoryCommodityFilter() === "all"
    && historyPeriodFilter === "all"
  );
}

function getPaperLedgerSummaryCounts(row = {}) {
  return {
    active: Number(row.activeOpenCount) || 0,
    entries: Number(row.tradeCount) || 0,
    exits: Number(row.closedCount) || 0,
    auditRows: Number(row.rawRowCount) || 0
  };
}

function getPaperLedgerSummaryLabel(row = {}, displayedRows = 0) {
  const counts = getPaperLedgerSummaryCounts(row);
  return `Cloudflare summary: ${counts.active} active / ${counts.entries} entries / ${counts.exits} matched exits / ${counts.auditRows} audit rows; table shows ${displayedRows} display rows`;
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

function normalizeCommodityId(value) {
  if (!value) return "";
  const trimmed = String(value).trim();
  if (trimmed === "all") return "all";
  return new Set(getAllCommodityIds()).has(trimmed) ? trimmed : "";
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
    oilMissionEnabled: merged.oilMissionEnabled !== false,
    description: String(merged.description || DEFAULT_USER_STRATEGY.description).trim(),
    martingaleSteps: clamp(Number(merged.martingaleSteps) || DEFAULT_USER_STRATEGY.martingaleSteps, 1, 8),
    karpathyLoop: merged.karpathyLoop !== false,
    karpathyCoachText: String(merged.karpathyCoachText || DEFAULT_USER_STRATEGY.karpathyCoachText).trim(),
    karpathyFlatSelectivity: merged.karpathyFlatSelectivity !== false,
    karpathyConfirmationGate: merged.karpathyConfirmationGate !== false,
    karpathyAutoApply: merged.karpathyAutoApply === true,
    karpathyRecommendation: merged.karpathyRecommendation && typeof merged.karpathyRecommendation === "object"
      ? merged.karpathyRecommendation
      : null,
    advisoryOutcomeLearner: merged.advisoryOutcomeLearner !== false,
    skillsAccess: merged.skillsAccess !== false,
    openBrainAccess: merged.openBrainAccess !== false,
    skillFocus: String(merged.skillFocus || DEFAULT_USER_STRATEGY.skillFocus).trim(),
    openBrainMemory: String(merged.openBrainMemory || DEFAULT_USER_STRATEGY.openBrainMemory).trim(),
    regimeAware: merged.regimeAware !== false,
    flatMaxMartingaleSteps: clamp(Math.round(Number(merged.flatMaxMartingaleSteps) || DEFAULT_USER_STRATEGY.flatMaxMartingaleSteps), 1, 8),
    flatSizeMultiplier: clamp(Number(merged.flatSizeMultiplier) || DEFAULT_USER_STRATEGY.flatSizeMultiplier, 0.1, 1),
    flatThresholdBoost: clamp(Math.round(Number(merged.flatThresholdBoost) || DEFAULT_USER_STRATEGY.flatThresholdBoost), 0, 30),
    flatMinEdgePercent: clamp(Math.round(Number(merged.flatMinEdgePercent) || DEFAULT_USER_STRATEGY.flatMinEdgePercent), 50, 80),
    flatMinVolatilityBps: clamp(Number(merged.flatMinVolatilityBps) || DEFAULT_USER_STRATEGY.flatMinVolatilityBps, 0, 20),
    trendingMinEdgePercent: clamp(Math.round(Number(merged.trendingMinEdgePercent) || DEFAULT_USER_STRATEGY.trendingMinEdgePercent), 50, 85),
    trendingMinVolatilityBps: clamp(Number(merged.trendingMinVolatilityBps) || DEFAULT_USER_STRATEGY.trendingMinVolatilityBps, 0, 20),
    breakoutParticipation: merged.breakoutParticipation !== false,
    breakoutMinEdgePercent: clamp(Math.round(Number(merged.breakoutMinEdgePercent) || DEFAULT_USER_STRATEGY.breakoutMinEdgePercent), 50, 80),
    breakoutMinVolatilityBps: clamp(Number(merged.breakoutMinVolatilityBps) || DEFAULT_USER_STRATEGY.breakoutMinVolatilityBps, 0, 20),
    breakoutMinMoveBps: clamp(Number(merged.breakoutMinMoveBps) || DEFAULT_USER_STRATEGY.breakoutMinMoveBps, 0, 50),
    trendCaptureMode: merged.trendCaptureMode !== false,
    markovHedgeFundMethod: merged.markovHedgeFundMethod === true,
    markovRegimeMoveBps: clamp(Number(merged.markovRegimeMoveBps) || DEFAULT_USER_STRATEGY.markovRegimeMoveBps, 1, 100),
    markovSidewaysThresholdBoost: clamp(Math.round(Number(merged.markovSidewaysThresholdBoost) || DEFAULT_USER_STRATEGY.markovSidewaysThresholdBoost), 0, 30),
    markovSidewaysSizeMultiplier: clamp(Number(merged.markovSidewaysSizeMultiplier) || DEFAULT_USER_STRATEGY.markovSidewaysSizeMultiplier, 0.1, 1),
    trendDayDirectionalHold: merged.trendDayDirectionalHold !== false,
    blockLongsInFallingTrend: merged.blockLongsInFallingTrend !== false,
    volatilityAwareStops: merged.volatilityAwareStops !== false,
    postStopShortReentry: merged.postStopShortReentry !== false,
    trendDayBias: merged.trendDayBias !== false,
    noChaseEntries: merged.noChaseEntries !== false,
    pullbackEntryRequired: merged.pullbackEntryRequired !== false,
    profitLockTrailingStop: merged.profitLockTrailingStop !== false,
    missedOpportunityLearner: merged.missedOpportunityLearner !== false,
    missedOpportunityReentry: merged.missedOpportunityReentry === true,
    noChaseMoveBps: clamp(Number(merged.noChaseMoveBps) || DEFAULT_USER_STRATEGY.noChaseMoveBps, 0, 100),
    pullbackMinRetraceBps: clamp(Number(merged.pullbackMinRetraceBps) || DEFAULT_USER_STRATEGY.pullbackMinRetraceBps, 0, 30),
    profitLockMinMoveBps: clamp(Number(merged.profitLockMinMoveBps) || DEFAULT_USER_STRATEGY.profitLockMinMoveBps, 0, 100),
    profitLockGivebackPct: clamp(Number(merged.profitLockGivebackPct) || DEFAULT_USER_STRATEGY.profitLockGivebackPct, 5, 80),
    missedOpportunityMoveBps: clamp(Number(merged.missedOpportunityMoveBps) || DEFAULT_USER_STRATEGY.missedOpportunityMoveBps, 5, 200)
  };
}

function normalizeStrategyHistoryEntry(entry = {}) {
  const changedAt = getTransactionDate(entry.changedAt || entry.time || new Date()).toISOString();
  return {
    id: String(entry.id || `strategy-change-${changedAt}-${Math.random().toString(16).slice(2)}`),
    changedAt,
    changedByName: String(entry.changedByName || "").trim(),
    changedByEmail: normalizeEmail(entry.changedByEmail || ""),
    summary: String(entry.summary || "Strategy updated").trim(),
    detail: String(entry.detail || "").trim(),
    before: normalizeUserStrategy(entry.before || {}),
    after: normalizeUserStrategy(entry.after || {})
  };
}

function normalizeStrategyHistory(history = []) {
  return (Array.isArray(history) ? history : [])
    .map(normalizeStrategyHistoryEntry)
    .sort((a, b) => getTransactionDate(b.changedAt) - getTransactionDate(a.changedAt))
    .slice(0, 50);
}

function recordUserStrategyChange(user, before, after, actor = getCurrentUserProfile()) {
  if (!user) return false;
  const normalizedBefore = normalizeUserStrategy(before);
  const normalizedAfter = normalizeUserStrategy(after);
  const changed = JSON.stringify(normalizedBefore) !== JSON.stringify(normalizedAfter);
  if (!changed) return false;
  const changedAt = new Date().toISOString();
  user.strategyHistory = normalizeStrategyHistory([
    {
      id: `strategy-change-${Date.now()}`,
      changedAt,
      changedByName: actor?.name || "Unknown user",
      changedByEmail: actor?.email || getCurrentAccessEmail(),
      summary: getStrategyChangeSummary(normalizedBefore, normalizedAfter),
      before: normalizedBefore,
      after: normalizedAfter
    },
    ...(user.strategyHistory || [])
  ]);
  user.strategy = normalizedAfter;
  return true;
}

const STRATEGY_HISTORY_FIELDS = [
  ["name", "Strategy name"],
  ["type", "Strategy type"],
  ["oilMissionEnabled", "Oil mission"],
  ["description", "Strategy definition"],
  ["martingaleSteps", "Martingale max steps"],
  ["karpathyLoop", "Karpathy loop"],
  ["karpathyCoachText", "Karpathy coach policy"],
  ["karpathyFlatSelectivity", "Karpathy flat selectivity"],
  ["karpathyConfirmationGate", "Karpathy confirmation gate"],
  ["karpathyAutoApply", "Karpathy auto-apply"],
  ["advisoryOutcomeLearner", "Advisory outcome learner"],
  ["skillsAccess", "Skills access"],
  ["openBrainAccess", "Open Brain access"],
  ["skillFocus", "Skill focus"],
  ["openBrainMemory", "Open Brain instruction"],
  ["regimeAware", "Regime-aware Martingale"],
  ["flatMaxMartingaleSteps", "Flat/mixed step cap"],
  ["flatSizeMultiplier", "Flat/mixed size multiplier"],
  ["flatThresholdBoost", "Flat/mixed threshold boost"],
  ["flatMinEdgePercent", "Flat/mixed minimum edge"],
  ["flatMinVolatilityBps", "Flat/mixed minimum volatility"],
  ["trendingMinEdgePercent", "Trending minimum edge"],
  ["trendingMinVolatilityBps", "Trending minimum volatility"],
  ["breakoutParticipation", "Breakout participation"],
  ["breakoutMinEdgePercent", "Breakout minimum edge"],
  ["breakoutMinVolatilityBps", "Breakout minimum volatility"],
  ["breakoutMinMoveBps", "Breakout minimum move"],
  ["markovHedgeFundMethod", "Markov Hedge Fund Method"],
  ["markovRegimeMoveBps", "Markov regime move"],
  ["markovSidewaysThresholdBoost", "Markov sideways threshold boost"],
  ["markovSidewaysSizeMultiplier", "Markov sideways size multiplier"],
  ["trendDayBias", "Trend-day bias"],
  ["noChaseEntries", "No-chase entries"],
  ["pullbackEntryRequired", "Pullback entry required"],
  ["profitLockTrailingStop", "Profit-lock trailing stop"],
  ["missedOpportunityLearner", "Missed-opportunity learner"],
  ["missedOpportunityReentry", "Missed-opportunity re-entry"],
  ["noChaseMoveBps", "No-chase move"],
  ["pullbackMinRetraceBps", "Pullback minimum retrace"],
  ["profitLockMinMoveBps", "Profit-lock minimum move"],
  ["profitLockGivebackPct", "Profit-lock giveback"],
  ["missedOpportunityMoveBps", "Missed-opportunity move"]
];

function formatStrategyFieldValue(key, value) {
  if (typeof value === "boolean") return value ? "On" : "Off";
  if (key.toLowerCase().includes("percent")) return `${value}%`;
  if (key.toLowerCase().includes("volatility")) return `${formatNumberInput(value, 2)} bps`;
  if (key === "breakoutMinMoveBps" || key === "markovRegimeMoveBps" || key === "noChaseMoveBps" || key === "pullbackMinRetraceBps" || key === "profitLockMinMoveBps" || key === "missedOpportunityMoveBps") return `${formatNumberInput(value, 2)} bps`;
  if (key === "profitLockGivebackPct") return `${formatNumberInput(value, 0)}%`;
  if (key === "flatSizeMultiplier" || key === "markovSidewaysSizeMultiplier") return `${formatNumberInput(value, 2)}x`;
  return String(value ?? "");
}

function getStrategyDiffRows(before = {}, after = {}) {
  const normalizedBefore = normalizeUserStrategy(before);
  const normalizedAfter = normalizeUserStrategy(after);
  return STRATEGY_HISTORY_FIELDS
    .map(([key, label]) => ({
      key,
      label,
      before: formatStrategyFieldValue(key, normalizedBefore[key]),
      after: formatStrategyFieldValue(key, normalizedAfter[key])
    }))
    .filter((row) => row.before !== row.after);
}

function getRegimeAwareSeedBefore(strategy = getCurrentUserStrategy()) {
  return normalizeUserStrategy({
    ...strategy,
    description: "Current profile default: trade only when advisory clears the learned threshold, stop exits immediately, reset after the fourth losing step.",
    regimeAware: false,
    flatMaxMartingaleSteps: strategy.martingaleSteps,
    flatSizeMultiplier: 1,
    flatThresholdBoost: 0,
    flatMinEdgePercent: 50,
    flatMinVolatilityBps: 0,
    trendingMinEdgePercent: 50,
    trendingMinVolatilityBps: 0
  });
}

const STRATEGY_BASELINE_TEXT = "Current profile default: trade only when advisory clears the learned threshold, stop exits immediately, reset after the fourth losing step.";
const STRATEGY_REGIME_REFINEMENT_TEXT = "Refinement 5/9/2026: Regime-aware Martingale for Oil. Use the 4-step Martingale structure only when oil is trading with clear directional confirmation and real volatility. When the market is flat, mixed, or choppy, reduce Martingale aggressiveness instead of disabling it entirely. Flat / mixed regime: treat 1-minute edge near 50% as a wait condition, not a strong trade. Require sustained trend confirmation, VWAP reclaim, and improving 10s/30s momentum before increasing size. Reduce Martingale step size and/or cap the number of recovery steps. Do not let Martingale amplify weak C-grade setups. Volatile / trending regime: restore fuller Martingale sizing only when price, tape, and momentum are aligned. Allow the recovery sequence to work when there is genuine directional movement. Keep the Karpathy loop active so it can adjust advisory thresholds from closed-trade outcomes. Coach logic: the Karpathy loop should adjust thresholds, not force more trades. Martingale should respond to market regime, not stay fixed. The default in uncertainty should be smaller size, fewer recovery steps, and more confirmation.";
const STRATEGY_MARKOV_REFINEMENT_TEXT = "Refinement 5/21/2026: Markov Hedge Fund Method for Peter Bell and D2 only. Use a Markov-style state transition overlay to classify oil as bull, bear, or sideways from recent return behavior and transition evidence. Bull state favors long continuation unless breakdown is confirmed. Bear state favors short continuation unless reversal is confirmed. Sideways state raises the entry threshold and reduces size. This is a paper-only test strategy switch, not personalized investment advice.";

function ensureStrategySeedHistory(user, strategy = getCurrentUserStrategy()) {
  const existing = normalizeStrategyHistory(user?.strategyHistory);
  if (!user || existing.length || strategy.regimeAware === false) return existing;
  const now = Date.now();
  const baseline = normalizeUserStrategy({
    ...strategy,
    description: STRATEGY_BASELINE_TEXT,
    regimeAware: false,
    flatMaxMartingaleSteps: strategy.martingaleSteps,
    flatSizeMultiplier: 1,
    flatThresholdBoost: 0,
    flatMinEdgePercent: 50,
    flatMinVolatilityBps: 0,
    trendingMinEdgePercent: 50,
    trendingMinVolatilityBps: 0
  });
  const refinement = normalizeUserStrategy({
    ...strategy,
    description: `${STRATEGY_BASELINE_TEXT} ${STRATEGY_REGIME_REFINEMENT_TEXT}`
  });
  user.strategy = refinement;
  user.strategyHistory = normalizeStrategyHistory([
    {
      id: "strategy-change-0002-regime-aware-oil",
      changedAt: new Date(now).toISOString(),
      changedByName: "Peter Bell",
      changedByEmail: "peter@pjbell.com",
      summary: "Refinement 5/9/2026: Regime-aware Martingale for Oil",
      detail: STRATEGY_REGIME_REFINEMENT_TEXT,
      before: baseline,
      after: refinement
    },
    {
      id: "strategy-change-0001-baseline",
      changedAt: new Date(now - 60000).toISOString(),
      changedByName: "Peter Bell",
      changedByEmail: "peter@pjbell.com",
      summary: "Baseline strategy recorded",
      detail: STRATEGY_BASELINE_TEXT,
      before: normalizeUserStrategy({ ...baseline, description: "No prior strategy baseline recorded." }),
      after: baseline
    }
  ]);
  saveUserRoster();
  return normalizeStrategyHistory(user.strategyHistory);
}

function seedMarkovStrategyHistoryForTestAgents() {
  let changed = false;
  userRoster.forEach((user) => {
    if (!OIL_TEST_AGENT_EMAILS.has(normalizeEmail(user.email))) return;
    const history = normalizeStrategyHistory(user.strategyHistory);
    if (history.some((entry) => entry.id === "strategy-change-0003-markov-hedge-fund-method")) {
      user.strategyHistory = history;
      return;
    }
    const after = normalizeUserStrategy(user.strategy);
    const before = normalizeUserStrategy({
      ...after,
      markovHedgeFundMethod: false
    });
    user.strategyHistory = normalizeStrategyHistory([
      {
        id: "strategy-change-0003-markov-hedge-fund-method",
        changedAt: "2026-05-21T00:00:00.000Z",
        changedByName: "Peter Bell",
        changedByEmail: "peter@pjbell.com",
        summary: "Refinement 5/21/2026: Markov Hedge Fund Method enabled",
        detail: STRATEGY_MARKOV_REFINEMENT_TEXT,
        before,
        after
      },
      ...history
    ]);
    changed = true;
  });
  if (changed) saveUserRoster();
  return changed;
}

function getStrategyChangeSummary(before, after) {
  const changes = [];
  if (before.name !== after.name) changes.push("name");
  if (before.type !== after.type) changes.push("type");
  if (before.description !== after.description) changes.push("definition");
  if (before.martingaleSteps !== after.martingaleSteps) changes.push(`martingale steps ${before.martingaleSteps} to ${after.martingaleSteps}`);
  if (before.karpathyLoop !== after.karpathyLoop) changes.push(after.karpathyLoop ? "enabled Karpathy loop" : "disabled Karpathy loop");
  if (before.skillsAccess !== after.skillsAccess) changes.push(after.skillsAccess ? "enabled Skills access" : "disabled Skills access");
  if (before.openBrainAccess !== after.openBrainAccess) changes.push(after.openBrainAccess ? "enabled Open Brain access" : "disabled Open Brain access");
  if (before.karpathyCoachText !== after.karpathyCoachText) changes.push("Karpathy coach policy");
  if (before.karpathyFlatSelectivity !== after.karpathyFlatSelectivity) changes.push(after.karpathyFlatSelectivity ? "enabled Karpathy flat selectivity" : "disabled Karpathy flat selectivity");
  if (before.karpathyConfirmationGate !== after.karpathyConfirmationGate) changes.push(after.karpathyConfirmationGate ? "enabled Karpathy confirmation gate" : "disabled Karpathy confirmation gate");
  if (before.karpathyAutoApply !== after.karpathyAutoApply) changes.push(after.karpathyAutoApply ? "enabled Karpathy auto-apply" : "disabled Karpathy auto-apply");
  if (before.advisoryOutcomeLearner !== after.advisoryOutcomeLearner) changes.push(after.advisoryOutcomeLearner ? "enabled advisory outcome learner" : "disabled advisory outcome learner");
  if (before.skillFocus !== after.skillFocus) changes.push("skill focus");
  if (before.openBrainMemory !== after.openBrainMemory) changes.push("Open Brain instruction");
  if (before.regimeAware !== after.regimeAware) changes.push(after.regimeAware ? "enabled regime awareness" : "disabled regime awareness");
  if (before.flatMaxMartingaleSteps !== after.flatMaxMartingaleSteps) changes.push("flat-regime step cap");
  if (before.flatSizeMultiplier !== after.flatSizeMultiplier) changes.push("flat-regime size multiplier");
  if (before.flatThresholdBoost !== after.flatThresholdBoost) changes.push("flat-regime threshold boost");
  if (before.flatMinEdgePercent !== after.flatMinEdgePercent) changes.push("flat-regime edge minimum");
  if (before.flatMinVolatilityBps !== after.flatMinVolatilityBps) changes.push("flat-regime volatility minimum");
  if (before.trendingMinEdgePercent !== after.trendingMinEdgePercent) changes.push("trending edge minimum");
  if (before.trendingMinVolatilityBps !== after.trendingMinVolatilityBps) changes.push("trending volatility minimum");
  if (before.breakoutParticipation !== after.breakoutParticipation) changes.push(after.breakoutParticipation ? "enabled breakout participation" : "disabled breakout participation");
  if (before.breakoutMinEdgePercent !== after.breakoutMinEdgePercent) changes.push("breakout edge minimum");
  if (before.breakoutMinVolatilityBps !== after.breakoutMinVolatilityBps) changes.push("breakout volatility minimum");
  if (before.breakoutMinMoveBps !== after.breakoutMinMoveBps) changes.push("breakout move minimum");
  if (before.markovHedgeFundMethod !== after.markovHedgeFundMethod) changes.push(after.markovHedgeFundMethod ? "enabled Markov Hedge Fund Method" : "disabled Markov Hedge Fund Method");
  if (before.markovRegimeMoveBps !== after.markovRegimeMoveBps) changes.push("Markov regime move");
  if (before.markovSidewaysThresholdBoost !== after.markovSidewaysThresholdBoost) changes.push("Markov sideways threshold boost");
  if (before.markovSidewaysSizeMultiplier !== after.markovSidewaysSizeMultiplier) changes.push("Markov sideways size multiplier");
  if (before.trendCaptureMode !== after.trendCaptureMode) changes.push(after.trendCaptureMode ? "enabled trend capture mode" : "disabled trend capture mode");
  if (before.trendDayDirectionalHold !== after.trendDayDirectionalHold) changes.push(after.trendDayDirectionalHold ? "enabled trend-day directional hold" : "disabled trend-day directional hold");
  if (before.blockLongsInFallingTrend !== after.blockLongsInFallingTrend) changes.push(after.blockLongsInFallingTrend ? "enabled falling-trend long block" : "disabled falling-trend long block");
  if (before.volatilityAwareStops !== after.volatilityAwareStops) changes.push(after.volatilityAwareStops ? "enabled volatility-aware stops" : "disabled volatility-aware stops");
  if (before.postStopShortReentry !== after.postStopShortReentry) changes.push(after.postStopShortReentry ? "enabled post-stop short re-entry" : "disabled post-stop short re-entry");
  if (before.trendDayBias !== after.trendDayBias) changes.push(after.trendDayBias ? "enabled trend-day bias" : "disabled trend-day bias");
  if (before.noChaseEntries !== after.noChaseEntries) changes.push(after.noChaseEntries ? "enabled no-chase entries" : "disabled no-chase entries");
  if (before.pullbackEntryRequired !== after.pullbackEntryRequired) changes.push(after.pullbackEntryRequired ? "enabled pullback entry requirement" : "disabled pullback entry requirement");
  if (before.profitLockTrailingStop !== after.profitLockTrailingStop) changes.push(after.profitLockTrailingStop ? "enabled profit-lock trailing stop" : "disabled profit-lock trailing stop");
  if (before.missedOpportunityLearner !== after.missedOpportunityLearner) changes.push(after.missedOpportunityLearner ? "enabled missed-opportunity learner" : "disabled missed-opportunity learner");
  if (before.noChaseMoveBps !== after.noChaseMoveBps) changes.push("no-chase move threshold");
  if (before.pullbackMinRetraceBps !== after.pullbackMinRetraceBps) changes.push("pullback retrace minimum");
  if (before.profitLockMinMoveBps !== after.profitLockMinMoveBps) changes.push("profit-lock minimum move");
  if (before.profitLockGivebackPct !== after.profitLockGivebackPct) changes.push("profit-lock giveback");
  if (before.missedOpportunityMoveBps !== after.missedOpportunityMoveBps) changes.push("missed-opportunity threshold");
  return changes.length ? `Changed ${changes.join(", ")}` : "No material strategy change";
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

function normalizeMarketTime(value, fallback) {
  const raw = String(value || "").trim();
  return /^\d{2}:\d{2}$/.test(raw) ? raw : fallback;
}

function normalizeServerPaperTrading(settings = {}, fallback = {}) {
  const merged = {
    ...DEFAULT_SERVER_PAPER_TRADING,
    ...(fallback && typeof fallback === "object" ? fallback : {}),
    ...(settings && typeof settings === "object" ? settings : {})
  };
  return {
    enabled: merged.enabled === true,
    commodities: normalizeSavedCommodityIds(merged.commodities || merged.commodityIds || DEFAULT_SERVER_PAPER_TRADING.commodities),
    riskPct: clamp(Number(merged.riskPct) || PAPER_DEFAULT_RISK_PCT, 0.1, 25),
    maxOpenTrades: clamp(Math.round(Number(merged.maxOpenTrades) || 1), 1, 10),
    entryThreshold: clamp(Math.round(Number(merged.entryThreshold) || PAPER_MIN_CONVICTION), 1, 100),
    overnightRiskMode: merged.overnightRiskMode === "flatten-before-close" ? "flatten-before-close" : "accept",
    marketTimeZone: String(merged.marketTimeZone || DEFAULT_SERVER_PAPER_TRADING.marketTimeZone).trim(),
    weeklyOpenDay: clamp(Math.round(Number(merged.weeklyOpenDay ?? DEFAULT_SERVER_PAPER_TRADING.weeklyOpenDay)), 0, 6),
    weeklyOpenTime: normalizeMarketTime(merged.weeklyOpenTime, DEFAULT_SERVER_PAPER_TRADING.weeklyOpenTime),
    weeklyCloseDay: clamp(Math.round(Number(merged.weeklyCloseDay ?? DEFAULT_SERVER_PAPER_TRADING.weeklyCloseDay)), 0, 6),
    weeklyCloseTime: normalizeMarketTime(merged.weeklyCloseTime, DEFAULT_SERVER_PAPER_TRADING.weeklyCloseTime),
    dailyCloseTime: normalizeMarketTime(merged.dailyCloseTime, DEFAULT_SERVER_PAPER_TRADING.dailyCloseTime),
    dailyReopenTime: normalizeMarketTime(merged.dailyReopenTime, DEFAULT_SERVER_PAPER_TRADING.dailyReopenTime),
    closeBeforeMinutes: clamp(Math.round(Number(merged.closeBeforeMinutes) || DEFAULT_SERVER_PAPER_TRADING.closeBeforeMinutes), 1, 240),
    marketCalendarNotes: String(merged.marketCalendarNotes || DEFAULT_SERVER_PAPER_TRADING.marketCalendarNotes).trim(),
    lastEvaluationAt: merged.lastEvaluationAt || null,
    lastDecision: String(merged.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision).trim()
  };
}

function getCurrentUserCommodityIds() {
  return normalizeCommodityIds(getCurrentUserProfile()?.commodities);
}

function userCanTradeCommodity(commodity) {
  if (!hasCurrentUserProfile()) return true;
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
  paperBaseEquity = getUserProfileStartCapital(user);
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
  renderLeaderBoard();
  return true;
}

function getSharedUserProfilesPayload() {
  return userRoster.reduce((profiles, user) => {
    const paperBaseEquity = getDefaultUserEquity(user, user.paperBaseEquity);
    const profile = {
      paperBaseEquity,
      paperRiskPct: Number.isFinite(Number(user.paperRiskPct)) ? Number(user.paperRiskPct) : PAPER_DEFAULT_RISK_PCT,
      commodities: OIL_ONLY_COMMODITIES.slice(),
      commodityAllocations: normalizeCommodityAllocations(buildOilOnlyAllocations(paperBaseEquity), OIL_ONLY_COMMODITIES, paperBaseEquity),
      commodityTradeTerms: normalizeCommodityTradeTermsMap(user.commodityTradeTerms),
      strategy: normalizeUserStrategy(user.strategy),
      strategyHistory: normalizeStrategyHistory(user.strategyHistory),
      brokerAccount: normalizeBrokerAccount(user.brokerAccount),
      paperTrading: normalizeOilOnlyPaperTrading(user.paperTrading, {}, user.paperRiskPct)
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
    paperBaseEquity: getDefaultUserEquity(incoming, existing.paperBaseEquity),
    paperRiskPct: Number.isFinite(Number(incoming.paperRiskPct))
      ? Number(incoming.paperRiskPct)
      : existing.paperRiskPct,
    commodities: OIL_ONLY_COMMODITIES.slice(),
    commodityAllocations: normalizeCommodityAllocations(
      buildOilOnlyAllocations(getDefaultUserEquity(incoming, existing.paperBaseEquity)),
      OIL_ONLY_COMMODITIES,
      getDefaultUserEquity(incoming, existing.paperBaseEquity)
    ),
    commodityTradeTerms: normalizeCommodityTradeTermsMap(incoming.commodityTradeTerms || existing.commodityTradeTerms),
    strategy: normalizeUserStrategy(incoming.strategy || existing.strategy),
    strategyHistory: normalizeStrategyHistory([...(incoming.strategyHistory || []), ...(existing.strategyHistory || [])]),
    brokerAccount: normalizeBrokerAccount(incoming.brokerAccount || existing.brokerAccount),
    paperTrading: normalizeOilOnlyPaperTrading(incoming.paperTrading, existing.paperTrading, incoming.paperRiskPct ?? existing.paperRiskPct),
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
  const usersByEmail = new Map(userRoster.map((user) => [normalizeEmail(user.email), user]));
  Object.entries(profiles).forEach(([profileEmail, profile]) => {
    const email = normalizeEmail(profileEmail || profile?.email);
    if (!email || usersByEmail.has(email) || !profile || typeof profile !== "object") return;

    const normalized = normalizeUserRecord({
      ...profile,
      email,
      name: profile.name || profile.displayName || email.split("@")[0],
      avatarDataUrl: profile.avatarDataUrl || "",
      enabled: profile.enabled !== false
    });
    if (!normalized) return;
    userRoster.push(normalized);
    usersByEmail.set(email, normalized);
    changed = true;
  });

  userRoster.forEach((user) => {
    const profile = profiles[normalizeEmail(user.email)];
    if (!profile || typeof profile !== "object") return;

    const profileEquity = Number(profile.paperBaseEquity);
    const profileRiskPct = Number(profile.paperRiskPct);
    if (Number.isFinite(profileEquity)) {
      user.paperBaseEquity = getDefaultUserEquity({ ...user, paperBaseEquity: profileEquity }, user.paperBaseEquity);
      changed = true;
    }
    if (Number.isFinite(profileRiskPct)) {
      user.paperRiskPct = clamp(profileRiskPct, 0.1, 25);
      changed = true;
    }
    if (Array.isArray(profile.commodities)) {
      const nextCommodities = OIL_ONLY_COMMODITIES.slice();
      if (JSON.stringify(nextCommodities) !== JSON.stringify(normalizeCommodityIds(user.commodities))) {
        user.commodities = nextCommodities;
        changed = true;
      }
    }
    if (profile.commodityAllocations && typeof profile.commodityAllocations === "object") {
      const nextAllocations = normalizeCommodityAllocations(buildOilOnlyAllocations(user.paperBaseEquity), OIL_ONLY_COMMODITIES, user.paperBaseEquity);
      if (JSON.stringify(nextAllocations) !== JSON.stringify(normalizeCommodityAllocations(user.commodityAllocations, user.commodities, user.paperBaseEquity))) {
        user.commodityAllocations = nextAllocations;
        changed = true;
      }
    }
    if (profile.commodityTradeTerms && typeof profile.commodityTradeTerms === "object") {
      const nextTradeTerms = normalizeCommodityTradeTermsMap(profile.commodityTradeTerms);
      if (JSON.stringify(nextTradeTerms) !== JSON.stringify(normalizeCommodityTradeTermsMap(user.commodityTradeTerms))) {
        user.commodityTradeTerms = nextTradeTerms;
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
    if (Array.isArray(profile.strategyHistory)) {
      const nextHistory = normalizeStrategyHistory([...(profile.strategyHistory || []), ...(user.strategyHistory || [])]);
      if (JSON.stringify(nextHistory) !== JSON.stringify(normalizeStrategyHistory(user.strategyHistory))) {
        user.strategyHistory = nextHistory;
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
    if (profile.paperTrading && typeof profile.paperTrading === "object") {
      const nextPaperTrading = normalizeOilOnlyPaperTrading(profile.paperTrading, user.paperTrading, user.paperRiskPct);
      if (JSON.stringify(nextPaperTrading) !== JSON.stringify(normalizeServerPaperTrading(user.paperTrading))) {
        user.paperTrading = nextPaperTrading;
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
  return getDedupedPaperCloseEntries(transactionHistory)
    .filter((entry) => entryBelongsToUser(entry, user))
    .filter((entry) => !commodity || entry.commodity === commodity)
    .reduce((total, entry) => total + getDisplayPnl(entry), 0);
}

function getUserCurrentPnl(user) {
  return getUserCommodityPnl(user);
}

function getUserPaperLedgerEntries(user) {
  const source = transactionHistory.length ? transactionHistory : getBundledTransactionEntries();
  const entries = transactionHistoryLoadedFromBackend
    ? source.map(normalizeTransactionEntry).filter(isPaperTradeEntry)
    : getDedupedPaperCloseEntries(source);
  return entries.filter((entry) => entryBelongsToUser(entry, user));
}

function getRawUserPaperLedgerEntries(user) {
  const source = (transactionHistory.length ? transactionHistory : getBundledTransactionEntries()).filter(isPaperTradeEntry);
  return source
    .map(normalizeTransactionEntry)
    .filter((entry) => entryBelongsToUser(entry, user));
}

function getLeaderBoardPeriodCutoff(mode = leaderboardPeriodMode) {
  const option = LEADERBOARD_PERIOD_OPTIONS[mode] || LEADERBOARD_PERIOD_OPTIONS[LEADERBOARD_DEFAULT_PERIOD];
  return Number.isFinite(option.ms) ? Date.now() - option.ms : null;
}

function isEntryInLeaderBoardPeriod(entry, cutoff = getLeaderBoardPeriodCutoff()) {
  if (!Number.isFinite(cutoff)) return true;
  const time = getTransactionDate(entry.closedAt || entry.time || entry.openedAt).getTime();
  return Number.isFinite(time) && time >= cutoff;
}

function isStaleUnclosedOpeningTrade(entry) {
  if (!isOpeningTransaction(entry)) return false;
  const openedAt = getTransactionDate(entry.openedAt || entry.time).getTime();
  return Number.isFinite(openedAt) && Date.now() - openedAt > STALE_UNCLOSED_OPEN_TRADE_MS;
}

function getUserLeaderBoardEntries(user, cutoff = getLeaderBoardPeriodCutoff()) {
  return getUserPaperLedgerEntries(user).filter((entry) => isEntryInLeaderBoardPeriod(entry, cutoff));
}

function getRawUserLeaderBoardEntries(user, cutoff = getLeaderBoardPeriodCutoff()) {
  return getRawUserPaperLedgerEntries(user).filter((entry) => isEntryInLeaderBoardPeriod(entry, cutoff));
}

function getUserOpenPaperTrades(user, entries = getUserPaperLedgerEntries(user)) {
  const active = new Map();
  entries
    .slice()
    .sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time))
    .forEach((entry) => {
      const identityKey = getTradeIdentityKey(entry);
      const lifecycleKey = getTradeLifecycleKey(entry);
      const key = identityKey || lifecycleKey;
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

function userCanTradeCommodityForProfile(user, commodity) {
  if (!commodity) return false;
  const paperTrading = normalizeServerPaperTrading(user?.paperTrading);
  const selected = paperTrading.enabled && paperTrading.commodities.length
    ? normalizeCommodityIds(paperTrading.commodities)
    : normalizeCommodityIds(user?.commodities);
  return selected.includes(normalizeCommodityId(commodity));
}

function getUserEnabledOpenPaperTrades(user, entries = getUserPaperLedgerEntries(user)) {
  return getUserOpenPaperTrades(user, entries).filter((entry) => userCanTradeCommodityForProfile(user, entry.commodity));
}

function getUserOpenPnl(user, entries = getUserPaperLedgerEntries(user)) {
  return getUserEnabledOpenPaperTrades(user, entries).reduce((total, entry) => {
    const commodity = entry.commodity || "oil";
    const livePrice = getUsableMarketPrice(commodity);
    if (!Number.isFinite(livePrice) || livePrice <= 0) return total;
    const pnl = getTradeNetPnl({
      ...entry,
      id: entry.tradeId || entry.id,
      side: entry.side,
      entryPrice: Number(entry.entryPrice ?? entry.price),
      contractMultiplier: Number(entry.contractMultiplier),
      contracts: Number(entry.contracts),
      quantity: Number(entry.quantity),
      openFee: Number(entry.openFee),
      estimatedExitFee: Number(entry.estimatedExitFee)
    }, livePrice);
    return Number.isFinite(pnl) ? total + pnl : total;
  }, 0);
}

function getUserLastTradeTime(user, entries = getUserPaperLedgerEntries(user)) {
  const times = entries
    .map((entry) => getTransactionDate(entry.time).getTime())
    .filter(Number.isFinite);
  if (!times.length) return null;
  return new Date(Math.max(...times));
}

function getUserSchedulerSummary(user) {
  const liveStatus = leaderBoardSchedulerStatus.get(normalizeEmail(user?.email));
  if (liveStatus) {
    const evaluated = liveStatus.lastEvaluationAt ? formatRelativeDate(liveStatus.lastEvaluationAt) : "Run seen";
    const decision = liveStatus.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision;
    return `${evaluated}: ${decision}`;
  }

  const paperTrading = normalizeServerPaperTrading(user?.paperTrading);
  const evaluated = paperTrading.lastEvaluationAt ? formatRelativeDate(paperTrading.lastEvaluationAt) : "Never";
  const decision = paperTrading.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision;
  return `${evaluated}: ${decision}`;
}

function getUserSchedulerHint(user) {
  const liveStatus = leaderBoardSchedulerStatus.get(normalizeEmail(user?.email));
  const paperTrading = normalizeServerPaperTrading(user?.paperTrading);
  const status = liveStatus || paperTrading;
  const evaluated = status.lastEvaluationAt ? formatTradeTime(status.lastEvaluationAt) : "Recent run timestamp";
  const decision = status.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision;
  const source = liveStatus?.source || (liveStatus ? "Live Cloudflare scheduler status" : "Profile fallback status");
  const loaded = leaderBoardSchedulerLoadedAt ? `Status refreshed ${formatRelativeDate(leaderBoardSchedulerLoadedAt)}.` : "Live scheduler status has not loaded yet.";

  return [
    source,
    `Last checked: ${evaluated}.`,
    `Decision: ${decision}.`,
    "Common meanings: Wait 48/58 means the advisory is Wait or below the effective threshold; max open trades reached means an existing enabled trade blocks new entries; market closed means the user calendar says trading is closed.",
    loaded
  ].join(" ");
}

function getUserTradeCount(user, entries = getUserPaperLedgerEntries(user)) {
  return entries.filter((entry) => isOpeningTransaction(entry)).length;
}

function getUserAccountGroupNote(user) {
  const normalizedName = String(user?.name || "").trim().toLowerCase();
  if (!normalizedName) return "";
  const sameNameAccounts = userRoster.filter((candidate) => (
    candidate !== user
    && String(candidate.name || "").trim().toLowerCase() === normalizedName
    && normalizeEmail(candidate.email) !== normalizeEmail(user.email)
  ));
  if (!sameNameAccounts.length) return "";
  return `${sameNameAccounts.length + 1} accounts for this user name`;
}

function getUserClosedPaperTrades(user, entries = getUserPaperLedgerEntries(user)) {
  return entries.filter(isClosingTransaction);
}

function getUserWinRate(user, entries = getUserPaperLedgerEntries(user)) {
  const closedTrades = getUserClosedPaperTrades(user, entries);
  if (!closedTrades.length) return NaN;
  const wins = closedTrades.filter((entry) => getDisplayPnl(entry) > 0).length;
  return (wins / closedTrades.length) * 100;
}

function getUserTradeExpectancy(user, entries = getUserPaperLedgerEntries(user)) {
  const closedTrades = getUserClosedPaperTrades(user, entries);
  if (!closedTrades.length) return NaN;
  const total = closedTrades.reduce((sum, entry) => sum + getDisplayPnl(entry), 0);
  return total / closedTrades.length;
}

function getUserRecentClosedPaperTrades(user, limit = 12, entries = getUserPaperLedgerEntries(user)) {
  return getUserClosedPaperTrades(user, entries)
    .slice()
    .sort((left, right) => getTransactionDate(right.closedAt || right.time) - getTransactionDate(left.closedAt || left.time))
    .slice(0, limit);
}

function getUserLossStreak(user, entries = getUserPaperLedgerEntries(user)) {
  const recentClosed = getUserRecentClosedPaperTrades(user, 25, entries);
  let streak = 0;
  for (const trade of recentClosed) {
    if (getDisplayPnl(trade) >= 0) break;
    streak += 1;
  }
  return streak;
}

function getUserDayPnl(user, entries = getUserPaperLedgerEntries(user)) {
  const cutoff = Date.now() - (24 * 60 * 60 * 1000);
  return getUserClosedPaperTrades(user, entries)
    .filter((entry) => getTransactionDate(entry.closedAt || entry.time).getTime() >= cutoff)
    .reduce((total, entry) => total + getDisplayPnl(entry), 0);
}

function getOilDayMoveSummary() {
  const cutoff = Date.now() - (24 * 60 * 60 * 1000);
  const serverSamples = homeMarketHistoryKey === "oil:day" && Array.isArray(homeMarketHistory?.samples)
    ? normalizeHomeMarketHistorySamples(homeMarketHistory.samples)
    : [];
  const fallbackSamples = normalizeHomeMarketHistorySamples(advisoryHistory
    .filter((entry) => entry.commodity === "oil" && getTransactionDate(entry.time).getTime() >= cutoff)
    .map((entry) => ({ time: entry.time, price: entry.price, source: "advisory snapshot" })));
  const samples = (serverSamples.length ? serverSamples : fallbackSamples)
    .filter((sample) => sample.time >= cutoff);
  const currentPrice = confirmedLivePrices.has("oil") ? confirmedLivePrices.get("oil") : latestPrices.get("oil");
  const currentTime = confirmedLivePriceTimes.has("oil") ? confirmedLivePriceTimes.get("oil") : latestPriceTimes.get("oil");
  if (Number.isFinite(currentPrice) && currentPrice > 0) {
    samples.push({
      time: getTransactionDate(currentTime || new Date()).getTime(),
      price: currentPrice,
      source: "current price"
    });
  }
  const sorted = normalizeHomeMarketHistorySamples(samples);
  if (sorted.length < 2) {
    return {
      ready: false,
      label: "Oil day move unavailable",
      expectedSide: "wait",
      detail: "Waiting for Cloudflare price history or advisory samples before scoring day-move capture."
    };
  }
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const change = last.price - first.price;
  const changePct = first.price ? (change / first.price) * 100 : 0;
  const expectedSide = change < 0 ? "short" : change > 0 ? "long" : "wait";
  return {
    ready: true,
    startPrice: first.price,
    endPrice: last.price,
    change,
    changePct,
    expectedSide,
    label: `${formatPrice(first.price)} to ${formatPrice(last.price)} (${formatSignedMoney(change).replace("$", "")}, ${formatPercent(changePct)})`,
    detail: expectedSide === "short"
      ? "Oil fell today; the right paper bias should have been short or flat, not long."
      : expectedSide === "long"
        ? "Oil rose today; the right paper bias should have been long or flat, not short."
        : "Oil was flat enough that the right paper bias should have been selective."
  };
}

function isOilTestAgent(user = {}) {
  return OIL_TEST_AGENT_EMAILS.has(normalizeEmail(user.email));
}

function setOilMissionEnabled(user, enabled) {
  if (!user || !isOilTestAgent(user)) return;
  const before = normalizeUserStrategy(user.strategy);
  const after = normalizeUserStrategy({
    ...before,
    oilMissionEnabled: enabled === true
  });
  const changed = recordUserStrategyChange(user, before, after);
  if (!changed) user.strategy = after;
  saveUserRoster();
  saveSharedSettings();
  renderCurrentUserStrategy();
  renderUserManagement();
  userManagementStatusEl.textContent = `${user.name || user.email} oil mission ${after.oilMissionEnabled ? "enabled" : "disabled"}`;
}

function getOilMissionStatus(user) {
  const entries = getUserPaperLedgerEntries(user);
  const closedTrades = getUserClosedPaperTrades(user, entries);
  const openTrades = getUserEnabledOpenPaperTrades(user, entries);
  const closedPnl = closedTrades.reduce((total, entry) => total + getDisplayPnl(entry), 0);
  const winRate = getUserWinRate(user, entries);
  const expectancy = getUserTradeExpectancy(user, entries);
  const paperTrading = normalizeServerPaperTrading(user.paperTrading);
  const strategy = normalizeUserStrategy(user.strategy);
  const oilTerms = normalizeCommodityTradeTerms(user.commodityTradeTerms?.oil, "oil");
  const needsSample = closedTrades.length < ADVISORY_OUTCOME_LEARNER_MIN_SAMPLES;
  const profitable = Number.isFinite(expectancy) && expectancy > 0;
  return {
    activeContract: `${oilTerms.ticker || "NOL"} / ${oilTerms.productId || "Coinbase product"}`,
    contractMonth: oilTerms.contractMonth || "Front month",
    entryThreshold: paperTrading.entryThreshold,
    riskPct: paperTrading.riskPct,
    maxOpenTrades: paperTrading.maxOpenTrades,
    overnightRiskMode: paperTrading.overnightRiskMode,
    enabled: strategy.oilMissionEnabled,
    closedCount: closedTrades.length,
    openCount: openTrades.length,
    closedPnl,
    winRate,
    expectancy,
    evidenceState: !strategy.oilMissionEnabled ? "Mission off" : needsSample ? "Collecting evidence" : profitable ? "Positive sample" : "Needs rule review",
    nextStep: needsSample
      ? `Collect at least ${ADVISORY_OUTCOME_LEARNER_MIN_SAMPLES - closedTrades.length} more closed oil paper trade${ADVISORY_OUTCOME_LEARNER_MIN_SAMPLES - closedTrades.length === 1 ? "" : "s"} for ${user.name || user.email} before trusting threshold changes.`
      : profitable
        ? "Review winning conditions before cautiously lowering friction or expanding sample size."
        : "Review losing setups, side accuracy, and missed moves before changing size or lowering thresholds.",
    guardrail: "Paper-only. Do not enable live trading or increase size until average trade profit is positive after fees across a meaningful sample."
  };
}

function createOilMissionCard(user) {
  const status = getOilMissionStatus(user);
  const card = document.createElement("section");
  card.className = "user-profile-subcard d2-mission-card";
  card.innerHTML = `
    <h3>Oil Trading Mission <span>${escapeHtml(user.name || user.email || "Test account")} / ${escapeHtml(status.evidenceState)}</span></h3>
    <div class="d2-mission-body">
      <label class="d2-mission-switch">
        <input type="checkbox" data-oil-mission-enabled${status.enabled ? " checked" : ""}>
        <span class="d2-mission-check" aria-hidden="true"></span>
        <strong>${status.enabled ? "Mission on" : "Mission off"}</strong>
      </label>
      <div class="d2-mission-goal">
        <span class="stat-label">Goal</span>
        <strong>${escapeHtml(OIL_TEST_AGENT_GOAL)}</strong>
        <p>${escapeHtml(status.guardrail)}</p>
      </div>
      <div class="d2-mission-grid">
        <div><span>Active contract</span><strong>${escapeHtml(status.activeContract)}</strong><small>${escapeHtml(status.contractMonth)}</small></div>
        <div><span>Paper gate</span><strong>${status.entryThreshold}/100</strong><small>${formatNumberInput(status.riskPct, 2)}% risk, max ${status.maxOpenTrades} open</small></div>
        <div><span>Closed P/L</span><strong class="${status.closedPnl >= 0 ? "gain" : "loss"}">${formatSignedMoney(status.closedPnl)}</strong><small>${status.closedCount} closed, ${status.openCount} open</small></div>
        <div><span>Win rate</span><strong>${Number.isFinite(status.winRate) ? formatPercent(status.winRate) : "-"}</strong><small>Average trade ${Number.isFinite(status.expectancy) ? formatSignedMoney(status.expectancy) : "-"}</small></div>
      </div>
      <div class="d2-mission-next">
        <span class="stat-label">Next learning step</span>
        <p>${escapeHtml(status.nextStep)}</p>
      </div>
    </div>
  `;
  card.querySelector("[data-oil-mission-enabled]")?.addEventListener("change", (event) => {
    setOilMissionEnabled(user, event.currentTarget.checked);
  });
  return card;
}

function getOilLearningProgress(user) {
  const entries = getUserPaperLedgerEntries(user);
  const closedTrades = getUserClosedPaperTrades(user, entries);
  const recentClosed = getUserRecentClosedPaperTrades(user, 12, entries);
  const closedPnl = closedTrades.reduce((total, entry) => total + getDisplayPnl(entry), 0);
  const recentPnl = recentClosed.reduce((total, entry) => total + getDisplayPnl(entry), 0);
  const dayPnl = getUserDayPnl(user, entries) + getUserOpenPnl(user, entries);
  const lossStreak = getUserLossStreak(user, entries);
  const winRate = getUserWinRate(user, entries);
  const expectancy = getUserTradeExpectancy(user, entries);
  const strategy = normalizeUserStrategy(user.strategy);
  const paperTrading = normalizeServerPaperTrading(user.paperTrading);
  const marketMove = getOilDayMoveSummary();
  const missedDirectionalMove = marketMove.ready
    && ((marketMove.expectedSide === "short" && dayPnl <= 0) || (marketMove.expectedSide === "long" && dayPnl <= 0));
  const targetSample = ADVISORY_OUTCOME_LEARNER_MIN_SAMPLES;
  const sampleGap = Math.max(0, targetSample - closedTrades.length);
  const losing = Number.isFinite(expectancy) && expectancy < 0;
  const enoughSample = closedTrades.length >= targetSample;
  const action = !strategy.oilMissionEnabled
    ? "Mission is paused. No learning action is being taken for this profile."
    : !closedTrades.length
      ? "Waiting for closed paper trades before changing rules."
      : !enoughSample
        ? "Collecting evidence. The system should not loosen thresholds or increase size yet."
        : losing
          ? "Tightening behavior: keep the higher entry gate, review failed setups, and avoid increasing size."
          : "Positive sample: review winning setups before cautiously lowering friction.";
  const ruleResponse = lossStreak >= 2
    ? "Loss streak detected. Bias toward fewer entries, no size increase, and stricter confirmation."
    : missedDirectionalMove
      ? `Missed ${marketMove.expectedSide} day detected. Audit why the scheduler did not hold or enter ${marketMove.expectedSide}: stale data, entry gate, stop placement, or advisory side.`
    : losing
      ? "Average trade is negative. Keep the paper gate strict until the sample improves."
      : closedTrades.length
        ? "No active loss streak. Keep collecting evidence before changing live risk."
        : "No closed sample yet.";

  return {
    closedCount: closedTrades.length,
    sampleGap,
    closedPnl,
    recentPnl,
    dayPnl,
    lossStreak,
    winRate,
    expectancy,
    entryThreshold: paperTrading.entryThreshold,
    riskPct: paperTrading.riskPct,
    maxOpenTrades: paperTrading.maxOpenTrades,
    action,
    ruleResponse,
    marketMove,
    missedDirectionalMove,
    schedulerSummary: getUserSchedulerSummary(user),
    runLocation: "Cloudflare Worker scheduler evaluates enabled paper accounts every five minutes. Your computer only needs to be on when you want to watch the UI update in the browser.",
    evidenceQuality: enoughSample ? "Reviewable sample" : `Need ${sampleGap} more closed trade${sampleGap === 1 ? "" : "s"} for a minimum review sample`
  };
}

function createOilLearningCard(user) {
  const progress = getOilLearningProgress(user);
  const card = document.createElement("section");
  card.className = "user-profile-subcard oil-learning-card";
  card.innerHTML = `
    <h3>Learning Progress <span>${escapeHtml(progress.evidenceQuality)}</span></h3>
    <div class="oil-learning-body">
      <div class="oil-learning-grid">
        <div><span>All closed P/L</span><strong class="${progress.closedPnl >= 0 ? "gain" : "loss"}">${formatSignedMoney(progress.closedPnl)}</strong><small>${progress.closedCount} closed paper trades</small></div>
        <div><span>Recent closed P/L</span><strong class="${progress.recentPnl >= 0 ? "gain" : "loss"}">${formatSignedMoney(progress.recentPnl)}</strong><small>Last 12 closed trades</small></div>
        <div><span>Today vs oil move</span><strong class="${progress.dayPnl >= 0 ? "gain" : "loss"}">${formatSignedMoney(progress.dayPnl)}</strong><small>${escapeHtml(progress.marketMove.label)}</small></div>
        <div><span>Average trade</span><strong class="${Number.isFinite(progress.expectancy) && progress.expectancy >= 0 ? "gain" : "loss"}">${Number.isFinite(progress.expectancy) ? formatSignedMoney(progress.expectancy) : "-"}</strong><small>${Number.isFinite(progress.winRate) ? `${formatPercent(progress.winRate)} win rate` : "No win-rate sample"}</small></div>
        <div><span>Risk gate</span><strong>${progress.entryThreshold}/100</strong><small>${formatNumberInput(progress.riskPct, 2)}% risk, max ${progress.maxOpenTrades} open</small></div>
      </div>
      <div class="oil-learning-notes">
        <div>
          <span class="stat-label">What I am doing now</span>
          <p>${escapeHtml(progress.action)}</p>
        </div>
        <div>
          <span class="stat-label">Market move capture</span>
          <p>${escapeHtml(progress.missedDirectionalMove ? `Missed ${progress.marketMove.expectedSide} capture. ${progress.marketMove.detail}` : progress.marketMove.detail)}</p>
        </div>
        <div>
          <span class="stat-label">Response to losing money</span>
          <p>${escapeHtml(progress.ruleResponse)}</p>
        </div>
        <div>
          <span class="stat-label">Computer required?</span>
          <p>${escapeHtml(progress.runLocation)}</p>
        </div>
        <div>
          <span class="stat-label">Latest scheduler read</span>
          <p>${escapeHtml(progress.schedulerSummary)}</p>
        </div>
      </div>
    </div>
  `;
  return card;
}

function getSchedulerDecisionGateLabel(status = {}) {
  const gate = String(status.gate || status.audit?.gate || "").trim();
  if (gate) {
    return {
      "opened": "Opened trade",
      "closed": "Closed trade",
      "threshold": "Entry threshold",
      "second-opinion": "Second opinion",
      "trend-bias": "Trend bias",
      "entry-quality": "Entry quality",
      "regime-step-cap": "Regime step cap",
      "regime-confirmation": "Regime confirmation",
      "max-open": "Max open trades",
      "open-trade": "Existing open trade",
      "market": "Market calendar",
      "price": "Price freshness",
      "contract-roll": "Contract roll",
      "not-evaluated": "Not evaluated"
    }[gate] || gate;
  }

  const decision = String(status.lastDecision || "").toLowerCase();
  if (decision.includes("opened")) return "Opened trade";
  if (decision.includes("closed")) return "Closed trade";
  if (decision.includes("max open")) return "Max open trades";
  if (decision.includes("market closed") || decision.includes("pre-close")) return "Market calendar";
  if (decision.includes("no fresh price")) return "Price freshness";
  if (decision.includes("second opinion")) return "Second opinion";
  if (decision.includes("falling trend") || decision.includes("trend blocks")) return "Trend bias";
  if (decision.includes("markov") && decision.includes("not confirmed")) return "Markov confirmation";
  if (decision.includes("no open") || decision.includes("/")) return "Entry threshold";
  return "Latest decision";
}

function getUserMarkovTradeEvidence(user) {
  const entries = getUserPaperLedgerEntries(user);
  const markovEntries = entries.filter((entry) => entry.markovMethodEnabled || entry.markovState);
  const closed = markovEntries.filter(isClosingTransaction);
  const open = markovEntries.filter(isOpeningTransaction);
  const pnl = closed.reduce((total, entry) => total + getDisplayPnl(entry), 0);
  const latest = markovEntries
    .slice()
    .sort((left, right) => getTransactionDate(right.closedAt || right.openedAt || right.time) - getTransactionDate(left.closedAt || left.openedAt || left.time))[0];
  return {
    total: markovEntries.length,
    openCount: open.length,
    closedCount: closed.length,
    pnl,
    latest
  };
}

function getOilExecutionReview(user) {
  const email = normalizeEmail(user?.email);
  const liveStatus = leaderBoardSchedulerStatus.get(email);
  const fallbackPaper = normalizeServerPaperTrading(user?.paperTrading);
  const status = liveStatus || {
    source: "Profile fallback status",
    enabled: fallbackPaper.enabled,
    commodities: fallbackPaper.commodities,
    entryThreshold: fallbackPaper.entryThreshold,
    maxOpenTrades: fallbackPaper.maxOpenTrades,
    lastEvaluationAt: fallbackPaper.lastEvaluationAt,
    lastDecision: fallbackPaper.lastDecision
  };
  const audit = status.audit || {};
  const markov = audit.markov || status.markov || null;
  const marketMove = getOilDayMoveSummary();
  const entries = getUserPaperLedgerEntries(user);
  const dayPnl = getUserDayPnl(user, entries) + getUserOpenPnl(user, entries);
  const markovEvidence = getUserMarkovTradeEvidence(user);
  const lock = leaderBoardSchedulerHealth?.lock || null;
  const schedulerHealth = lock
    ? (lock.active ? `Active run lock until ${formatTradeTime(lock.expiresAt)}.` : "No active scheduler lock.")
    : (leaderBoardSchedulerLoadedAt ? "Scheduler responded, lock detail unavailable." : "Scheduler status has not loaded yet.");
  const lastChecked = status.lastEvaluationAt ? formatTradeTime(status.lastEvaluationAt) : "Never";
  const missed = marketMove.ready && marketMove.expectedSide !== "wait" && dayPnl <= 0;
  const missedText = missed
    ? `Audit ${marketMove.expectedSide} capture: oil moved ${marketMove.label}, but this account has ${formatSignedMoney(dayPnl)} today.`
    : marketMove.detail;
  const markovText = markov?.enabled
    ? `Markov is ${markov.state || "active"}${markov.expectedSide ? ` and favors ${markov.expectedSide}` : ""}. ${markov.overrideReady ? "Override was ready on the last scheduler pass." : "Override was not confirmed on the last scheduler pass."}`
    : "Markov status is not present on the latest scheduler pass yet.";
  const evidenceText = markovEvidence.total
    ? `${markovEvidence.closedCount} closed Markov-tagged rows, ${formatSignedMoney(markovEvidence.pnl)} closed P/L. Latest: ${markovEvidence.latest?.action || "trade"} ${markovEvidence.latest?.contract || ""} ${markovEvidence.latest?.markovState ? `(${markovEvidence.latest.markovState})` : ""}.`
    : "No Markov-tagged trade rows yet. New opens and closes will show Markov state in transaction detail.";

  return {
    source: status.source || "Scheduler status",
    lastChecked,
    lastDecision: status.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision,
    gateLabel: getSchedulerDecisionGateLabel(status),
    schedulerHealth,
    missedText,
    markovText,
    evidenceText,
    actionText: missed
      ? "Next improvement: compare the blocking gate against the move, then tighten the rule that blocked a valid short or long."
      : "Next improvement: keep collecting closed-trade and missed-move evidence before loosening entries.",
    threshold: status.entryThreshold || fallbackPaper.entryThreshold,
    maxOpenTrades: status.maxOpenTrades || fallbackPaper.maxOpenTrades
  };
}

function createOilExecutionReviewCard(user) {
  const review = getOilExecutionReview(user);
  const card = document.createElement("section");
  card.className = "user-profile-subcard oil-execution-card";
  card.innerHTML = `
    <h3>Execution Review <span>${escapeHtml(review.gateLabel)}</span></h3>
    <div class="oil-execution-body">
      <div class="oil-execution-grid">
        <div><span>Last checked</span><strong>${escapeHtml(review.lastChecked)}</strong><small>${escapeHtml(review.source)}</small></div>
        <div><span>Blocking gate</span><strong>${escapeHtml(review.gateLabel)}</strong><small>${escapeHtml(review.lastDecision)}</small></div>
        <div><span>Paper gate</span><strong>${escapeHtml(String(review.threshold || "-"))}/100</strong><small>Max ${escapeHtml(String(review.maxOpenTrades || "-"))} open trade${Number(review.maxOpenTrades) === 1 ? "" : "s"}</small></div>
        <div><span>Scheduler health</span><strong>${leaderBoardSchedulerHealth?.lock?.active ? "Running" : "Ready"}</strong><small>${escapeHtml(review.schedulerHealth)}</small></div>
      </div>
      <div class="oil-execution-notes">
        <div>
          <span class="stat-label">Missed opportunity audit</span>
          <p>${escapeHtml(review.missedText)}</p>
        </div>
        <div>
          <span class="stat-label">Markov strategy read</span>
          <p>${escapeHtml(review.markovText)}</p>
        </div>
        <div>
          <span class="stat-label">Trade evidence</span>
          <p>${escapeHtml(review.evidenceText)}</p>
        </div>
        <div>
          <span class="stat-label">Next rule work</span>
          <p>${escapeHtml(review.actionText)}</p>
        </div>
      </div>
    </div>
  `;
  return card;
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
    const entryTime = getTransactionDate(entry.closedAt || entry.time).getTime();
    const existingTime = existing ? getTransactionDate(existing.closedAt || existing.time).getTime() : 0;
    if (!existing || entryTime > existingTime) {
      byOpening.set(key, entry);
    }
  });
  return Array.from(byOpening.values());
}

function getLeaderBoardRows() {
  if (leaderBoardSummaryLoadedAt && leaderBoardSummaryPeriod === leaderboardPeriodMode) {
    return leaderBoardSummaryRows.map((row) => {
      const email = normalizeEmail(row.email);
      const rosterUser = userRoster.find((user) => normalizeEmail(user.email) === email);
      const user = rosterUser || normalizeUserRecord(row.user || { name: row.name, email }) || { name: row.name, email };
      return {
        ...row,
        user,
        name: row.name || user.name || "Unnamed user",
        email: row.email || user.email || "-",
        closedPnl: Number(row.closedPnl) || 0,
        openPnl: Number(row.openPnl) || 0,
        totalPnl: Number(row.totalPnl) || 0,
        tradeCount: Number(row.tradeCount) || 0,
        closedCount: Number(row.closedCount) || 0,
        activeOpenCount: Number(row.activeOpenCount) || 0,
        rawRowCount: Number(row.rawRowCount) || 0,
        winRate: Number.isFinite(Number(row.winRate)) ? Number(row.winRate) : NaN,
        expectancy: Number.isFinite(Number(row.expectancy)) ? Number(row.expectancy) : NaN,
        lastTradeTime: row.lastTradeTime ? getTransactionDate(row.lastTradeTime) : null,
        schedulerSummary: row.schedulerSummary || getUserSchedulerSummary(user),
        groupNote: row.groupNote || getUserAccountGroupNote(user),
        series: Array.isArray(row.series) ? row.series : []
      };
    });
  }
  if (!hasFreshCloudTradingState()) return [];
  const cutoff = getLeaderBoardPeriodCutoff();
  return userRoster.map((user) => {
    const entries = getUserLeaderBoardEntries(user, cutoff)
      .filter((entry) => userCanTradeCommodityForProfile(user, entry.commodity));
    const rawEntries = getRawUserLeaderBoardEntries(user, cutoff)
      .filter((entry) => userCanTradeCommodityForProfile(user, entry.commodity));
    const closed = getMatchedClosingTransactions(entries, rawEntries.length ? rawEntries : entries);
    const closedPnl = closed.reduce((total, entry) => total + getDisplayPnl(entry), 0);
    const openPnl = getUserOpenPnl(user, entries);
    const totalPnl = closedPnl + openPnl;
    const tradeCount = entries.filter(isOpeningTransaction).length;
    const closedCount = closed.length;
    const activeOpenCount = getUserEnabledOpenPaperTrades(user, entries).length;
    const winRate = getUserWinRate(user, entries);
    const expectancy = getUserTradeExpectancy(user, entries);
    const lastTradeTime = getUserLastTradeTime(user, entries);
    const groupNote = getUserAccountGroupNote(user);

    return {
      user,
      name: user.name || "Unnamed user",
      email: user.email || "-",
      closedPnl,
      openPnl,
      totalPnl,
      tradeCount,
      closedCount,
      activeOpenCount,
      rawRowCount: rawEntries.length,
      winRate,
      expectancy,
      lastTradeTime,
      schedulerSummary: getUserSchedulerSummary(user),
      groupNote
    };
  }).sort((left, right) => {
    const nameDelta = String(left.name).toLowerCase().localeCompare(String(right.name).toLowerCase());
    if (nameDelta) return nameDelta;
    const pnlDelta = right.totalPnl - left.totalPnl;
    if (pnlDelta) return pnlDelta;
    return normalizeEmail(left.email).localeCompare(normalizeEmail(right.email));
  });
}

function getLeaderBoardRankValue(row, mode = leaderboardRankMode) {
  if (mode === "closed-pnl") return row.closedPnl;
  if (mode === "open-pnl") return row.openPnl;
  if (mode === "trades") return row.tradeCount;
  if (mode === "win-rate") return Number.isFinite(row.winRate) ? row.winRate : Number.NEGATIVE_INFINITY;
  if (mode === "expectancy") return Number.isFinite(row.expectancy) ? row.expectancy : Number.NEGATIVE_INFINITY;
  return row.totalPnl;
}

function getRankedLeaderBoardRows(mode = leaderboardRankMode) {
  const safeMode = LEADERBOARD_RANK_OPTIONS[mode] ? mode : LEADERBOARD_DEFAULT_RANK;
  return getLeaderBoardRows().sort((left, right) => {
    const leftHasTrades = left.tradeCount > 0;
    const rightHasTrades = right.tradeCount > 0;
    if (leftHasTrades !== rightHasTrades) return rightHasTrades ? 1 : -1;

    const rankDelta = getLeaderBoardRankValue(right, safeMode) - getLeaderBoardRankValue(left, safeMode);
    if (rankDelta) return rankDelta;
    const pnlDelta = right.totalPnl - left.totalPnl;
    if (pnlDelta) return pnlDelta;
    return String(left.name).localeCompare(String(right.name));
  });
}

function loadLeaderBoardRankMode() {
  try {
    const stored = window.localStorage.getItem(LEADERBOARD_RANK_KEY);
    leaderboardRankMode = LEADERBOARD_RANK_OPTIONS[stored] ? stored : LEADERBOARD_DEFAULT_RANK;
  } catch (error) {
    leaderboardRankMode = LEADERBOARD_DEFAULT_RANK;
  }
}

function loadLeaderBoardPeriodMode() {
  try {
    const stored = window.localStorage.getItem(LEADERBOARD_PERIOD_KEY);
    leaderboardPeriodMode = LEADERBOARD_PERIOD_OPTIONS[stored] ? stored : LEADERBOARD_DEFAULT_PERIOD;
  } catch (error) {
    leaderboardPeriodMode = LEADERBOARD_DEFAULT_PERIOD;
  }
}

function saveLeaderBoardRankMode() {
  try {
    window.localStorage.setItem(LEADERBOARD_RANK_KEY, leaderboardRankMode);
  } catch (error) {
    // Ignore storage failures; the selected rank mode still applies for this session.
  }
}

function saveLeaderBoardPeriodMode() {
  try {
    window.localStorage.setItem(LEADERBOARD_PERIOD_KEY, leaderboardPeriodMode);
  } catch (error) {
    // Ignore storage failures; the selected period still applies for this session.
  }
}

function getLeaderBoardDisplayCacheKey(period = leaderboardPeriodMode) {
  return `${LEADERBOARD_DISPLAY_CACHE_KEY}:${period}`;
}

function saveLeaderBoardDisplayCache(payload = {}) {
  try {
    if (!leaderBoardSummaryRows.length) return;
    const cachePayload = {
      savedAt: leaderBoardSummaryLoadedAt || Date.now(),
      period: leaderBoardSummaryPeriod || leaderboardPeriodMode,
      rows: leaderBoardSummaryRows,
      generatedAt: payload.generatedAt || payload.updatedAt || ""
    };
    window.sessionStorage.setItem(getLeaderBoardDisplayCacheKey(cachePayload.period), JSON.stringify(cachePayload));
  } catch (error) {
    // Display cache is best-effort only; Cloudflare remains the source of truth.
  }
}

function loadLeaderBoardDisplayCache(period = leaderboardPeriodMode) {
  try {
    const raw = window.sessionStorage.getItem(getLeaderBoardDisplayCacheKey(period));
    if (!raw) return false;
    const cached = JSON.parse(raw);
    if (!cached || cached.period !== period || !Array.isArray(cached.rows) || !cached.rows.length) return false;
    if (Date.now() - Number(cached.savedAt || 0) > LEADERBOARD_DISPLAY_CACHE_MAX_AGE_MS) return false;
    leaderBoardSummaryRows = cached.rows;
    leaderBoardSummaryLoadedAt = Number(cached.savedAt) || Date.now();
    leaderBoardSummaryPeriod = cached.period;
    leaderBoardSummaryFromDisplayCache = true;
    return true;
  } catch (error) {
    return false;
  }
}

function getLeaderBoardUpdatedText() {
  if (leaderBoardSummaryError) {
    if (leaderBoardSummaryLoadedAt) {
      return `${leaderBoardSummaryError}; showing last server snapshot from ${new Date(leaderBoardSummaryLoadedAt).toLocaleTimeString()}`;
    }
    return leaderBoardSummaryError;
  }
  if (leaderBoardSummaryRefreshing && !leaderBoardSummaryLoadedAt) return "Loading leaderboard from server";
  if (leaderBoardSummaryLoadedAt) {
    const suffix = leaderBoardSummaryFromDisplayCache ? " (session snapshot)" : "";
    return `Updated ${new Date(leaderBoardSummaryLoadedAt).toLocaleTimeString()}${suffix}`;
  }
  return `Updated ${new Date().toLocaleTimeString()}`;
}

function renderLeaderBoardRankControls() {
  const option = LEADERBOARD_RANK_OPTIONS[leaderboardRankMode] || LEADERBOARD_RANK_OPTIONS[LEADERBOARD_DEFAULT_RANK];
  if (leaderboardRankLabelEl) leaderboardRankLabelEl.textContent = option.label;
  if (!leaderboardRankControlsEl) return;
  leaderboardRankControlsEl.querySelectorAll("[data-leaderboard-rank]").forEach((button) => {
    button.dataset.active = button.dataset.leaderboardRank === leaderboardRankMode ? "true" : "false";
  });
}

function renderLeaderBoardPeriodControls() {
  const option = LEADERBOARD_PERIOD_OPTIONS[leaderboardPeriodMode] || LEADERBOARD_PERIOD_OPTIONS[LEADERBOARD_DEFAULT_PERIOD];
  if (leaderboardPeriodLabelEl) leaderboardPeriodLabelEl.textContent = option.label;
  if (!leaderboardPeriodControlsEl) return;
  leaderboardPeriodControlsEl.querySelectorAll("[data-leaderboard-period]").forEach((button) => {
    button.dataset.active = button.dataset.leaderboardPeriod === leaderboardPeriodMode ? "true" : "false";
  });
}

function closeLeaderBoardUserDetail() {
  expandedLeaderBoardUserEmail = "";
  leaderBoardDetailMode = "profile";
  if (leaderboardUserDetailPanelEl) leaderboardUserDetailPanelEl.hidden = true;
  if (leaderboardUserDetailBodyEl) leaderboardUserDetailBodyEl.innerHTML = "";
}

function getLeaderBoardSelectedUser() {
  return userRoster.find((user) => normalizeEmail(user.email) === expandedLeaderBoardUserEmail) || null;
}

function appendLeaderBoardTradeCell(row, value, className = "") {
  const cell = document.createElement("td");
  if (className) cell.className = className;
  cell.textContent = value;
  row.append(cell);
}

function createLeaderBoardTradeHistoryPanel(user) {
  const entries = getUserLeaderBoardEntries(user)
    .filter((entry) => userCanTradeCommodityForProfile(user, entry.commodity))
    .slice()
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));
  const wrap = document.createElement("div");
  const summary = document.createElement("div");
  const tableWrap = document.createElement("div");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  const rawEntries = getRawUserLeaderBoardEntries(user)
    .filter((entry) => userCanTradeCommodityForProfile(user, entry.commodity));
  const matchedClosed = getMatchedClosingTransactions(entries, rawEntries.length ? rawEntries : entries);
  const closedPnl = matchedClosed.reduce((total, entry) => total + getDisplayPnl(entry), 0);
  const openTrades = getUserEnabledOpenPaperTrades(user, entries);
  const openedCount = entries.filter(isOpeningTransaction).length;
  const closedCount = matchedClosed.length;
  const rawRowCount = rawEntries.length;

  wrap.className = "leaderboard-trade-detail";
  summary.className = "ledger-totals";
  summary.innerHTML = `
    <div><span class="stat-label">Period</span><strong>${escapeHtml(LEADERBOARD_PERIOD_OPTIONS[leaderboardPeriodMode]?.label || "All Time")}</strong></div>
    <div><span class="stat-label">Closed P/L</span><strong class="${closedPnl >= 0 ? "gain" : "loss"}">${formatSignedMoney(closedPnl)}</strong></div>
    <div><span class="stat-label">Entries / matched exits</span><strong>${openedCount} / ${closedCount}</strong></div>
    <div><span class="stat-label">Active enabled trades</span><strong>${openTrades.length}</strong></div>
    <div><span class="stat-label">Cloudflare audit rows</span><strong>${rawRowCount}</strong></div>
  `;

  tableWrap.className = "history-wrap";
  table.className = "history-table leaderboard-detail-table";
  thead.innerHTML = `
    <tr>
      <th>Time</th>
      <th>Action</th>
      <th>Side</th>
      <th>Step</th>
      <th>Contract</th>
      <th>Entry</th>
      <th>Exit</th>
      <th>Target</th>
      <th>Stop</th>
      <th>Net P/L</th>
    </tr>
  `;

  if (!entries.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 10;
    cell.textContent = "No paper trades for this leaderboard time window.";
    row.append(cell);
    tbody.append(row);
  } else {
    entries.slice(0, 75).forEach((entry) => {
      const row = document.createElement("tr");
      const pnl = getDisplayPnl(entry);
      const detail = getEntryDetail(entry);
      appendLeaderBoardTradeCell(row, formatTradeTime(entry.time));
      appendLeaderBoardTradeCell(row, entry.action || "Trade");
      appendLeaderBoardTradeCell(row, entry.side ? formatSide(entry.side) : "-");
      appendLeaderBoardTradeCell(row, entry.step ? `#${entry.step}` : "-");
      appendLeaderBoardTradeCell(row, entry.contract || "-");
      appendLeaderBoardTradeCell(row, Number.isFinite(detail.entryPrice) ? formatPrice(detail.entryPrice) : getTransactionEntryPriceDisplay(entry));
      appendLeaderBoardTradeCell(row, Number.isFinite(detail.exitPrice) ? formatPrice(detail.exitPrice) : isClosingTransaction(entry) ? formatOptionalMoney(entry.price) : "Open");
      appendLeaderBoardTradeCell(row, Number.isFinite(detail.targetPrice) ? formatPrice(detail.targetPrice) : UNAVAILABLE_TEXT);
      appendLeaderBoardTradeCell(row, Number.isFinite(detail.stopPrice) ? formatPrice(detail.stopPrice) : UNAVAILABLE_TEXT);
      appendLeaderBoardTradeCell(row, isClosingTransaction(entry) ? formatSignedMoney(pnl) : "$0.00", pnl >= 0 ? "gain" : "loss");
      tbody.append(row);
    });
  }

  table.append(thead, tbody);
  tableWrap.append(table);
  wrap.append(summary, tableWrap);
  return wrap;
}

function renderLeaderBoardUserDetail() {
  if (!leaderboardUserDetailPanelEl || !leaderboardUserDetailTitleEl || !leaderboardUserDetailBodyEl) return;
  const user = getLeaderBoardSelectedUser();
  leaderboardUserDetailBodyEl.innerHTML = "";

  if (!user) {
    closeLeaderBoardUserDetail();
    return;
  }

  const suffix = leaderBoardDetailMode === "trades" ? "trades" : "profile";
  leaderboardUserDetailTitleEl.textContent = `${user.name || "Unnamed user"} / ${user.email || "-"} / ${suffix}`;
  try {
    leaderboardUserDetailBodyEl.append(
      leaderBoardDetailMode === "trades"
        ? createLeaderBoardTradeHistoryPanel(user)
        : createUserProfilePanel(user)
    );
  } catch (error) {
    console.error("Leader board detail render failed", error);
    const fallback = document.createElement("div");
    fallback.className = "user-profile-render-error";
    fallback.textContent = `Detail could not render: ${error?.message || "unknown error"}`;
    leaderboardUserDetailBodyEl.append(fallback);
  }
  leaderboardUserDetailPanelEl.hidden = false;
}

function openLeaderBoardUserDetail(user, mode = "profile") {
  expandedLeaderBoardUserEmail = normalizeEmail(user?.email);
  leaderBoardDetailMode = mode === "trades" ? "trades" : "profile";
  renderLeaderBoardUserDetail();
  leaderboardUserDetailPanelEl?.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function getLeaderBoardDisplayValue(row, mode = leaderboardRankMode) {
  return getLeaderBoardRankValue(row, mode);
}

function getLeaderBoardChartValueLabel(mode = leaderboardRankMode) {
  return LEADERBOARD_RANK_OPTIONS[mode]?.label || LEADERBOARD_RANK_OPTIONS[LEADERBOARD_DEFAULT_RANK].label;
}

function getCumulativeLeaderBoardSeries(row, mode = leaderboardRankMode) {
  if (Array.isArray(row.series) && row.series.length) {
    const points = row.series.map((point) => {
      const time = Number(point.time) || getTransactionDate(point.time).getTime();
      const value = (() => {
        if (mode === "trades") return Number(point.trades);
        if (mode === "win-rate") return Number(point.winRate);
        if (mode === "expectancy") return Number(point.expectancy);
        return Number(point.closedPnl);
      })();
      return { time, value };
    }).filter((point) => Number.isFinite(point.time) && Number.isFinite(point.value));

    if (points.length) {
      points.push({
        time: Date.now(),
        value: getLeaderBoardDisplayValue(row, mode)
      });
    }
    return points;
  }

  const user = row.user;
  let total = 0;
  let opened = 0;
  let closed = 0;
  let wins = 0;
  const cutoff = getLeaderBoardPeriodCutoff();
  const points = getUserLeaderBoardEntries(user, cutoff)
    .slice()
    .sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time))
    .map((entry) => {
      if (isOpeningTransaction(entry)) opened += 1;
      if (isClosingTransaction(entry)) {
        const pnl = getDisplayPnl(entry);
        total += pnl;
        closed += 1;
        if (pnl > 0) wins += 1;
      }
      const metricValue = (() => {
        if (mode === "trades") return opened;
        if (mode === "win-rate") return closed ? (wins / closed) * 100 : 0;
        if (mode === "expectancy") return closed ? total / closed : 0;
        return total;
      })();
      return {
        time: getTransactionDate(entry.time).getTime(),
        value: metricValue
      };
    })
    .filter((point) => Number.isFinite(point.time) && Number.isFinite(point.value));

  if (points.length) {
    let currentValue = points[points.length - 1].value;
    if (mode === "total-pnl") currentValue = row.totalPnl;
    if (mode === "open-pnl") currentValue = row.openPnl;
    if (mode === "closed-pnl") currentValue = row.closedPnl;
    if (mode === "trades") currentValue = row.tradeCount;
    if (mode === "win-rate") currentValue = Number.isFinite(row.winRate) ? row.winRate : currentValue;
    if (mode === "expectancy") currentValue = Number.isFinite(row.expectancy) ? row.expectancy : currentValue;
    points.push({
      time: Date.now(),
      value: currentValue
    });
  }

  return points;
}

function drawLeaderBoardChart(rows) {
  if (!leaderboardChartEl) return;
  const rect = leaderboardChartEl.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const width = Math.max(640, Math.round((rect.width || 900) * scale));
  const height = Math.max(260, Math.round((rect.height || 320) * scale));
  leaderboardChartEl.width = width;
  leaderboardChartEl.height = height;
  const context = leaderboardChartEl.getContext("2d");
  const pad = 42 * scale;
  const chartWidth = width - (pad * 2);
  const chartHeight = height - (pad * 1.7);
  const activeRows = (Array.isArray(rows) ? rows : getRankedLeaderBoardRows())
    .filter((row) => row.tradeCount > 0)
    .filter((row) => Number.isFinite(getLeaderBoardDisplayValue(row, leaderboardRankMode)));
  const leaders = activeRows.slice(0, 5);
  const negativeRows = activeRows
    .filter((row) => getLeaderBoardDisplayValue(row, leaderboardRankMode) < 0)
    .sort((left, right) => getLeaderBoardDisplayValue(left, leaderboardRankMode) - getLeaderBoardDisplayValue(right, leaderboardRankMode))
    .slice(0, 3);
  const chartRows = [...leaders, ...negativeRows]
    .filter((row, index, all) => all.findIndex((candidate) => normalizeEmail(candidate.email) === normalizeEmail(row.email)) === index)
    .slice(0, 8);
  const series = chartRows.map((row) => ({
    row,
    points: getCumulativeLeaderBoardSeries(row, leaderboardRankMode)
  })).filter((entry) => entry.points.length);
  const allPoints = series.flatMap((entry) => entry.points);

  context.clearRect(0, 0, width, height);
  context.fillStyle = "#020617";
  context.fillRect(0, 0, width, height);

  if (!allPoints.length) {
    context.fillStyle = "#dbeafe";
    context.font = `700 ${18 * scale}px Aptos, Segoe UI, sans-serif`;
    context.textAlign = "center";
    const message = leaderBoardSummaryError && !leaderBoardSummaryLoadedAt
      ? "Waiting for server to show trades"
      : (hasFreshCloudTradingState() || leaderBoardSummaryLoadedAt) ? "No closed trades to chart yet" : "Waiting for server to show trades";
    context.fillText(message, width / 2, height / 2);
    return;
  }

  const minTime = Math.min(...allPoints.map((point) => point.time));
  const maxTime = Math.max(...allPoints.map((point) => point.time));
  const minValue = Math.min(0, ...allPoints.map((point) => point.value));
  const maxValue = Math.max(0, ...allPoints.map((point) => point.value));
  const valueRange = Math.max(1, maxValue - minValue);
  const timeRange = Math.max(1, maxTime - minTime);
  const xFor = (time) => pad + (((time - minTime) / timeRange) * chartWidth);
  const yFor = (value) => pad + (((maxValue - value) / valueRange) * chartHeight);
  const zeroY = yFor(0);
  const colors = ["#a855f7", "#f59e0b", "#06b6d4", "#22d3a6", "#60a5fa", "#f97316", "#ef4444", "#facc15"];

  context.strokeStyle = "rgba(148, 163, 184, 0.18)";
  context.lineWidth = 1 * scale;
  for (let i = 0; i <= 4; i += 1) {
    const y = pad + ((chartHeight / 4) * i);
    context.beginPath();
    context.moveTo(pad, y);
    context.lineTo(width - pad, y);
    context.stroke();
  }
  context.strokeStyle = "rgba(148, 163, 184, 0.38)";
  context.setLineDash([4 * scale, 5 * scale]);
  context.beginPath();
  context.moveTo(pad, zeroY);
  context.lineTo(width - pad, zeroY);
  context.stroke();
  context.setLineDash([]);

  context.fillStyle = "#8aa2c5";
  context.font = `700 ${11 * scale}px Aptos, Segoe UI, sans-serif`;
  context.textAlign = "right";
  [maxValue, (maxValue + minValue) / 2, minValue].forEach((value) => {
    const label = leaderboardRankMode === "trades"
      ? String(Math.round(value))
      : leaderboardRankMode === "win-rate"
        ? formatPercent(value)
        : formatSignedMoney(value);
    context.fillText(label, pad - (8 * scale), yFor(value) + (4 * scale));
  });

  series.forEach(({ row, points }, index) => {
    context.strokeStyle = colors[index % colors.length];
    context.lineWidth = 2.5 * scale;
    context.beginPath();
    points.forEach((point, pointIndex) => {
      const x = xFor(point.time);
      const y = yFor(point.value);
      if (pointIndex === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.stroke();
    const last = points[points.length - 1];
    context.fillStyle = colors[index % colors.length];
    context.beginPath();
    context.arc(xFor(last.time), yFor(last.value), 4 * scale, 0, Math.PI * 2);
    context.fill();
    context.font = `800 ${11 * scale}px Aptos, Segoe UI, sans-serif`;
    context.textAlign = "left";
    context.fillText(row.name.split(" ")[0] || row.email, xFor(last.time) + (7 * scale), yFor(last.value) - (5 * scale));
  });

  context.textAlign = "left";
  series.forEach(({ row }, index) => {
    const x = pad + ((index % 4) * 175 * scale);
    const yOffset = Math.floor(index / 4) * 15 * scale;
    const y = height - (18 * scale);
    context.fillStyle = colors[index % colors.length];
    context.fillRect(x, y - yOffset - (9 * scale), 9 * scale, 9 * scale);
    context.fillStyle = "#cfe4ff";
    context.font = `800 ${11 * scale}px Aptos, Segoe UI, sans-serif`;
    const metric = getLeaderBoardDisplayValue(row, leaderboardRankMode);
    const value = leaderboardRankMode === "trades"
      ? String(metric)
      : leaderboardRankMode === "win-rate"
        ? formatPercent(metric)
        : formatSignedMoney(metric);
    context.fillText(`${row.name.split(" ")[0] || row.email} ${value}`, x + (15 * scale), y - yOffset);
  });
}

function renderLeaderBoard() {
  if (!leaderboardBodyEl) return;
  if (!userRoster.length) loadUserRoster();
  renderLeaderBoardRankControls();
  renderLeaderBoardPeriodControls();
  const rankedRows = getRankedLeaderBoardRows(leaderboardRankMode);
  const rankByEmail = new Map(rankedRows.map((row, index) => [normalizeEmail(row.email), index + 1]));
  const activeRows = rankedRows.filter((row) => row.tradeCount > 0);
  const teamTotal = rankedRows.reduce((total, row) => total + row.totalPnl, 0);
  const topRow = rankedRows[0] || null;
  const topMetric = topRow ? getLeaderBoardDisplayValue(topRow, leaderboardRankMode) : 0;
  const winRates = activeRows.map((row) => row.winRate).filter(Number.isFinite);
  const averageWinRate = winRates.length
    ? winRates.reduce((total, value) => total + value, 0) / winRates.length
    : NaN;

  if (leaderboardTeamPnlEl) {
    leaderboardTeamPnlEl.textContent = formatSignedMoney(teamTotal);
    leaderboardTeamPnlEl.className = teamTotal >= 0 ? "gain" : "loss";
  }
  if (leaderboardTopPnlEl) {
    leaderboardTopPnlEl.textContent = topRow
      ? leaderboardRankMode === "trades"
        ? String(topMetric)
        : leaderboardRankMode === "win-rate"
          ? formatPercent(topMetric)
          : formatSignedMoney(topMetric)
      : "$0.00";
    leaderboardTopPnlEl.className = topMetric < 0 ? "loss" : "gain";
  }
  if (leaderboardTopNameEl) leaderboardTopNameEl.textContent = topRow ? `${topRow.name} / ${topRow.email}` : "Waiting for trades";
  if (leaderboardActiveCountEl) leaderboardActiveCountEl.textContent = String(activeRows.length);
  if (leaderboardWinRateEl) leaderboardWinRateEl.textContent = Number.isFinite(averageWinRate) ? formatPercent(averageWinRate) : "-";
  if (leaderboardUpdatedEl) leaderboardUpdatedEl.textContent = getLeaderBoardUpdatedText();

  leaderboardBodyEl.innerHTML = "";
  if (!rankedRows.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 10;
    cell.textContent = requiresFreshCloudState() && !hasFreshCloudTradingState()
      ? "Waiting for server to show trades."
      : "No users available.";
    row.append(cell);
    leaderboardBodyEl.append(row);
    drawLeaderBoardChart(rankedRows);
    return;
  }

  rankedRows.forEach((entry) => {
    const row = document.createElement("tr");
    const rankCell = document.createElement("td");
    const rank = document.createElement("span");
    const userCell = document.createElement("td");
    const profile = document.createElement("button");
    const name = document.createElement("strong");
    const email = document.createElement("span");

    rank.className = "rank-badge";
    rank.textContent = String(rankByEmail.get(normalizeEmail(entry.email)) || "-");
    rankCell.append(rank);
    profile.type = "button";
    profile.className = "user-profile leaderboard-user-trigger";
    profile.setAttribute("aria-label", `Open ${entry.name} profile`);
    name.textContent = entry.name;
    email.textContent = entry.email;
    profile.append(createUserAvatar(entry.user), name, email);
    if (entry.groupNote) {
      const note = document.createElement("small");
      note.className = "user-account-note";
      note.textContent = entry.groupNote;
      profile.append(note);
    }
    profile.addEventListener("click", () => openLeaderBoardUserDetail(entry.user, "profile"));
    userCell.append(profile);

    const tradeButton = document.createElement("button");
    tradeButton.type = "button";
    tradeButton.className = "leaderboard-trades-trigger";
    tradeButton.textContent = `${entry.activeOpenCount} active / ${entry.tradeCount} entries / ${entry.closedCount} exits`;
    tradeButton.title = `Entries are opening trade records. Exits are matched closing trade records. Cloudflare audit rows: ${entry.rawRowCount}. These counts are different ledger views and are not meant to add together.`;
    tradeButton.setAttribute("aria-label", `Open ${entry.name} trade history`);
    tradeButton.addEventListener("click", () => openLeaderBoardUserDetail(entry.user, "trades"));

    [
      rankCell,
      userCell,
      { value: formatSignedMoney(entry.closedPnl), className: entry.closedPnl >= 0 ? "gain" : "loss" },
      { value: formatSignedMoney(entry.openPnl), className: entry.openPnl >= 0 ? "gain" : "loss" },
      { value: formatSignedMoney(entry.totalPnl), className: entry.totalPnl >= 0 ? "gain" : "loss" },
      { value: Number.isFinite(entry.winRate) ? formatPercent(entry.winRate) : "-" },
      {
        value: Number.isFinite(entry.expectancy) ? formatSignedMoney(entry.expectancy) : "-",
        className: Number.isFinite(entry.expectancy) ? (entry.expectancy >= 0 ? "gain" : "loss") : ""
      },
      tradeButton,
      { value: entry.schedulerSummary, title: getUserSchedulerHint(entry.user), className: "leaderboard-scheduler-cell" },
      { value: entry.lastTradeTime ? formatRelativeDate(entry.lastTradeTime) : "No trades" }
    ].forEach((item) => {
      if (item instanceof HTMLElement) {
        row.append(item);
        return;
      }
      const cell = document.createElement("td");
      if (item.className) cell.className = item.className;
      if (item.title) cell.title = item.title;
      cell.textContent = item.value;
      row.append(cell);
    });
    leaderboardBodyEl.append(row);
  });
  drawLeaderBoardChart(rankedRows);
  if (expandedLeaderBoardUserEmail) renderLeaderBoardUserDetail();
}

function getCurrentProfileStartCapital() {
  const user = getProfileForCapital();
  if (!user) return Number(paperBaseEquity) || PAPER_START_EQUITY;

  return getUserProfileStartCapital(user);
}

function getProfileForCapital() {
  const currentUser = getCurrentUserProfile();
  if (currentUser) return currentUser;

  return findRegisteredUserByEmail(LEGACY_LEDGER_USER_EMAIL)
    || userRoster.find((candidate) => normalizeEmail(candidate.email).startsWith("peter@"))
    || null;
}

function getUserProfileStartCapital(user) {
  if (!user) return PAPER_START_EQUITY;

  const selected = normalizeCommodityIds(user.commodities);
  const allocations = normalizeCommodityAllocations(user.commodityAllocations, selected, user.paperBaseEquity);
  const allocatedCapital = selected.reduce((total, id) => total + (Number(allocations[id]?.startCapital) || 0), 0);
  if (allocatedCapital > 0) return allocatedCapital;

  const profileEquity = Number(user.paperBaseEquity);
  return Number.isFinite(profileEquity) ? profileEquity : PAPER_START_EQUITY;
}

function getCurrentProfileStartCapitalForCommodity(commodity = "all") {
  const user = getProfileForCapital();
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

function getPaperClosedPnlForCapital(commodity = "all") {
  const normalizedCommodity = normalizeCommodityId(commodity);
  return getUserScopedTransactions()
    .filter(isClosingTransaction)
    .filter((entry) => !normalizedCommodity || normalizedCommodity === "all" || entry.commodity === normalizedCommodity)
    .reduce((total, entry) => total + getDisplayPnl(entry), 0);
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
  const selectedPaperCommodities = rows
    .filter((row) => row.querySelector("[data-commodity-paper-trading]")?.checked)
    .map((row) => row.dataset.commodityRow);
  if (!nextCommodities.length) {
    userManagementStatusEl.textContent = "Choose at least one commodity";
    return;
  }

  const nextAllocations = {};
  const nextTradeTerms = {};
  rows.forEach((row) => {
    const id = row.dataset.commodityRow;
    const startCapital = Number(row.querySelector("[data-commodity-capital]")?.value);
    const currentTerms = normalizeCommodityTradeTerms(user.commodityTradeTerms?.[id], id);
    const contractMultiplier = Number(row.querySelector("[data-commodity-multiplier]")?.value);
    const feePerContractSide = Number(row.querySelector("[data-commodity-fee-side]")?.value);
    nextAllocations[id] = {
      startCapital: Number.isFinite(startCapital) ? Math.max(0, startCapital) : 0
    };
    nextTradeTerms[id] = normalizeCommodityTradeTerms({
      contractMultiplier: Number.isFinite(contractMultiplier) ? contractMultiplier : currentTerms.contractMultiplier,
      marginRateLong: parseLeverageInput(row.querySelector("[data-commodity-leverage-long]")?.value, currentTerms.marginRateLong),
      marginRateShort: parseLeverageInput(row.querySelector("[data-commodity-leverage-short]")?.value, currentTerms.marginRateShort),
      feePerContractSide: Number.isFinite(feePerContractSide) ? feePerContractSide : currentTerms.feePerContractSide,
      ticker: row.querySelector("[data-commodity-ticker]")?.value || currentTerms.ticker,
      productId: row.querySelector("[data-commodity-product-id]")?.value || currentTerms.productId,
      contractMonth: row.querySelector("[data-commodity-contract-month]")?.value || currentTerms.contractMonth,
      contractExpiresAt: row.querySelector("[data-commodity-expires-at]")?.value || currentTerms.contractExpiresAt,
      rollBeforeDays: row.querySelector("[data-commodity-roll-days]")?.value || currentTerms.rollBeforeDays,
      feeLabel: row.querySelector("[data-commodity-fee-label]")?.value || currentTerms.feeLabel
    }, id);
  });
  const accountStartCapital = nextCommodities.reduce((total, id) => total + (Number(nextAllocations[id]?.startCapital) || 0), 0);

  user.commodities = nextCommodities;
  user.commodityAllocations = normalizeCommodityAllocations(nextAllocations, nextCommodities, accountStartCapital);
  user.commodityTradeTerms = normalizeCommodityTradeTermsMap(nextTradeTerms);
  user.paperBaseEquity = accountStartCapital;
  user.paperTrading = normalizeServerPaperTrading({
    ...(user.paperTrading && typeof user.paperTrading === "object" ? user.paperTrading : {}),
    commodities: normalizeSavedCommodityIds(selectedPaperCommodities).filter((id) => nextCommodities.includes(id))
  });
  saveUserRoster();
  saveSharedSettings();
  applyCurrentUserPaperSettings();
  calculateSignal();
  renderUserManagement();
  userManagementStatusEl.textContent = `${user.name || user.email} commodity settings saved`;
}

function saveUserStrategySettings(user, container) {
  const before = normalizeUserStrategy(user.strategy);
  const strategy = normalizeUserStrategy({
    name: container.querySelector("[data-strategy-field='name']")?.value,
    type: container.querySelector("[data-strategy-field='type']")?.value,
    oilMissionEnabled: before.oilMissionEnabled,
    description: container.querySelector("[data-strategy-field='description']")?.value,
    martingaleSteps: container.querySelector("[data-strategy-field='martingaleSteps']")?.value,
    karpathyLoop: container.querySelector("[data-strategy-field='karpathyLoop']")?.checked,
    karpathyCoachText: container.querySelector("[data-strategy-field='karpathyCoachText']")?.value,
    karpathyFlatSelectivity: container.querySelector("[data-strategy-field='karpathyFlatSelectivity']")?.checked,
    karpathyConfirmationGate: container.querySelector("[data-strategy-field='karpathyConfirmationGate']")?.checked,
    karpathyAutoApply: container.querySelector("[data-strategy-field='karpathyAutoApply']")?.checked,
    advisoryOutcomeLearner: container.querySelector("[data-strategy-field='advisoryOutcomeLearner']")?.checked,
    skillsAccess: container.querySelector("[data-strategy-field='skillsAccess']")?.checked,
    openBrainAccess: container.querySelector("[data-strategy-field='openBrainAccess']")?.checked,
    skillFocus: container.querySelector("[data-strategy-field='skillFocus']")?.value,
    openBrainMemory: container.querySelector("[data-strategy-field='openBrainMemory']")?.value,
    regimeAware: container.querySelector("[data-strategy-field='regimeAware']")?.checked,
    trendDayDirectionalHold: container.querySelector("[data-strategy-field='trendDayDirectionalHold']")?.checked,
    blockLongsInFallingTrend: container.querySelector("[data-strategy-field='blockLongsInFallingTrend']")?.checked,
    volatilityAwareStops: container.querySelector("[data-strategy-field='volatilityAwareStops']")?.checked,
    postStopShortReentry: container.querySelector("[data-strategy-field='postStopShortReentry']")?.checked,
    trendDayBias: container.querySelector("[data-strategy-field='trendDayBias']")?.checked,
    noChaseEntries: container.querySelector("[data-strategy-field='noChaseEntries']")?.checked,
    pullbackEntryRequired: container.querySelector("[data-strategy-field='pullbackEntryRequired']")?.checked,
    profitLockTrailingStop: container.querySelector("[data-strategy-field='profitLockTrailingStop']")?.checked,
    missedOpportunityLearner: container.querySelector("[data-strategy-field='missedOpportunityLearner']")?.checked,
    missedOpportunityReentry: container.querySelector("[data-strategy-field='missedOpportunityReentry']")?.checked,
    markovHedgeFundMethod: container.querySelector("[data-strategy-field='markovHedgeFundMethod']")?.checked,
    markovRegimeMoveBps: container.querySelector("[data-strategy-field='markovRegimeMoveBps']")?.value,
    markovSidewaysThresholdBoost: container.querySelector("[data-strategy-field='markovSidewaysThresholdBoost']")?.value,
    markovSidewaysSizeMultiplier: container.querySelector("[data-strategy-field='markovSidewaysSizeMultiplier']")?.value,
    flatMaxMartingaleSteps: container.querySelector("[data-strategy-field='flatMaxMartingaleSteps']")?.value,
    flatSizeMultiplier: container.querySelector("[data-strategy-field='flatSizeMultiplier']")?.value,
    flatThresholdBoost: container.querySelector("[data-strategy-field='flatThresholdBoost']")?.value,
    flatMinEdgePercent: container.querySelector("[data-strategy-field='flatMinEdgePercent']")?.value,
    flatMinVolatilityBps: container.querySelector("[data-strategy-field='flatMinVolatilityBps']")?.value,
    trendingMinEdgePercent: container.querySelector("[data-strategy-field='trendingMinEdgePercent']")?.value,
    trendingMinVolatilityBps: container.querySelector("[data-strategy-field='trendingMinVolatilityBps']")?.value,
    breakoutParticipation: container.querySelector("[data-strategy-field='breakoutParticipation']")?.checked,
    breakoutMinEdgePercent: container.querySelector("[data-strategy-field='breakoutMinEdgePercent']")?.value,
    breakoutMinVolatilityBps: container.querySelector("[data-strategy-field='breakoutMinVolatilityBps']")?.value,
    breakoutMinMoveBps: container.querySelector("[data-strategy-field='breakoutMinMoveBps']")?.value,
    trendCaptureMode: container.querySelector("[data-strategy-field='trendCaptureMode']")?.checked,
    noChaseMoveBps: container.querySelector("[data-strategy-field='noChaseMoveBps']")?.value,
    pullbackMinRetraceBps: container.querySelector("[data-strategy-field='pullbackMinRetraceBps']")?.value,
    profitLockMinMoveBps: container.querySelector("[data-strategy-field='profitLockMinMoveBps']")?.value,
    profitLockGivebackPct: container.querySelector("[data-strategy-field='profitLockGivebackPct']")?.value,
    missedOpportunityMoveBps: container.querySelector("[data-strategy-field='missedOpportunityMoveBps']")?.value
  });

  const changed = recordUserStrategyChange(user, before, strategy);
  if (!changed) user.strategy = strategy;
  saveUserRoster();
  saveSharedSettings();
  renderCurrentUserStrategy();
  renderUserManagement();
  userManagementStatusEl.textContent = changed
    ? `${user.name || user.email} strategy saved and logged`
    : `${user.name || user.email} strategy saved`;
}

function copyStrategyFromUser(targetUser, sourceEmail, container) {
  const sourceUser = userRoster.find((candidate) => normalizeEmail(candidate.email) === normalizeEmail(sourceEmail));
  if (!targetUser || !sourceUser || normalizeEmail(sourceUser.email) === normalizeEmail(targetUser.email)) {
    userManagementStatusEl.textContent = "Choose another user to copy from";
    return;
  }

  const before = normalizeUserStrategy(targetUser.strategy);
  const copied = normalizeUserStrategy(sourceUser.strategy);
  const changed = JSON.stringify(before) !== JSON.stringify(copied);
  targetUser.strategy = copied;
  if (!changed) {
    userManagementStatusEl.textContent = `${targetUser.name || targetUser.email} already uses that strategy`;
    return;
  }
  targetUser.strategyHistory = normalizeStrategyHistory([
    {
      id: `strategy-copy-${Date.now()}`,
      changedAt: new Date().toISOString(),
      changedByName: getCurrentUserProfile()?.name || "Admin",
      changedByEmail: getCurrentLedgerEmail(),
      summary: `Copied strategy from ${sourceUser.name || sourceUser.email}`,
      detail: `Copied strategy settings from ${sourceUser.name || sourceUser.email} into ${targetUser.name || targetUser.email}.`,
      before,
      after: copied
    },
    ...(targetUser.strategyHistory || [])
  ]);
  saveUserRoster();
  saveSharedSettings();
  renderCurrentUserStrategy();
  renderUserManagement();
  userManagementStatusEl.textContent = `${targetUser.name || targetUser.email} copied strategy from ${sourceUser.name || sourceUser.email}`;
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

function saveUserPaperTradingSettings(user, container) {
  const selectedCommodities = Array.from(container.querySelectorAll("[data-server-paper-commodity]"))
    .filter((input) => input.checked)
    .map((input) => input.value);
  user.paperTrading = normalizeServerPaperTrading({
    enabled: container.querySelector("[data-server-paper-field='enabled']")?.checked,
    commodities: selectedCommodities,
    riskPct: container.querySelector("[data-server-paper-field='riskPct']")?.value,
    maxOpenTrades: container.querySelector("[data-server-paper-field='maxOpenTrades']")?.value,
    entryThreshold: container.querySelector("[data-server-paper-field='entryThreshold']")?.value,
    overnightRiskMode: container.querySelector("[data-server-paper-field='overnightRiskMode']")?.value,
    marketTimeZone: container.querySelector("[data-server-paper-field='marketTimeZone']")?.value,
    weeklyOpenDay: container.querySelector("[data-server-paper-field='weeklyOpenDay']")?.value,
    weeklyOpenTime: container.querySelector("[data-server-paper-field='weeklyOpenTime']")?.value,
    weeklyCloseDay: container.querySelector("[data-server-paper-field='weeklyCloseDay']")?.value,
    weeklyCloseTime: container.querySelector("[data-server-paper-field='weeklyCloseTime']")?.value,
    dailyCloseTime: container.querySelector("[data-server-paper-field='dailyCloseTime']")?.value,
    dailyReopenTime: container.querySelector("[data-server-paper-field='dailyReopenTime']")?.value,
    closeBeforeMinutes: container.querySelector("[data-server-paper-field='closeBeforeMinutes']")?.value,
    marketCalendarNotes: container.querySelector("[data-server-paper-field='marketCalendarNotes']")?.value,
    lastEvaluationAt: user.paperTrading?.lastEvaluationAt || null,
    lastDecision: user.paperTrading?.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision
  });

  saveUserRoster();
  saveSharedSettings();
  renderUserManagement();
  userManagementStatusEl.textContent = `${user.name || user.email} server paper trader settings saved`;
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
      strategy.karpathyLoop ? "Karpathy loop enabled" : "Karpathy loop disabled",
      strategy.regimeAware ? "Regime-aware sizing enabled" : "Fixed Martingale sizing"
    ].join(" / ");
    copy.textContent = `${strategy.description} ${access}.`;
  }
  renderAdvisoryAdoptedSystems(strategy);
  renderStrategyEnginePanel(user, strategy);
  renderCoachTelemetry();
}

function toggleAdvisoryStrategyDetail() {
  if (!advisoryStrategyDetailEl || !advisoryStrategyToggleEl) return;
  const shouldOpen = advisoryStrategyDetailEl.hidden;
  advisoryStrategyDetailEl.hidden = !shouldOpen;
  advisoryStrategyToggleEl.setAttribute("aria-expanded", String(shouldOpen));
  advisoryStrategyToggleEl.textContent = shouldOpen ? "Hide Strategy" : "Strategy";
}

function isMartingaleStrategy(strategy = getCurrentUserStrategy()) {
  const type = String(strategy?.type || "").toLowerCase();
  const name = String(strategy?.name || "").toLowerCase();
  return type.includes("martingale") || name.includes("martingale");
}

function getStrategyEngineRules(strategy = getCurrentUserStrategy()) {
  return [
    { key: "strategyText", label: "Strategy definition text", value: "Saved as notes; does not execute by itself", type: "static" },
    { key: "martingaleEnabled", label: "Martingale recovery", value: isMartingaleStrategy(strategy), type: "checkbox", on: "On", off: "Off" },
    { key: "martingaleSteps", label: "Martingale max steps", value: strategy.martingaleSteps, type: "number", min: 1, max: 8, step: 1 },
    { key: "karpathyLoop", label: "Karpathy loop", value: strategy.karpathyLoop, type: "checkbox", on: "Adjusts thresholds from evaluated outcomes", off: "Off" },
    { key: "karpathyFlatSelectivity", label: "Karpathy flat selectivity", value: strategy.karpathyFlatSelectivity, type: "checkbox", on: "More selective in flat/mixed markets", off: "Off" },
    { key: "karpathyConfirmationGate", label: "Karpathy confirmation gate", value: strategy.karpathyConfirmationGate, type: "checkbox", on: "Requires structure + momentum confirmation", off: "Off" },
    { key: "karpathyAutoApply", label: "Karpathy auto-apply threshold changes", value: strategy.karpathyAutoApply, type: "checkbox", on: "Cloudflare may apply recommended threshold changes", off: "Recommendation only", help: "When off, the Cloudflare scheduler records coach recommendations but does not change this user's trading threshold. When on, the scheduler can update the paper-trading entry threshold from closed-trade outcomes." },
    { key: "advisoryOutcomeLearner", label: "Advisory outcome learner", value: strategy.advisoryOutcomeLearner, type: "checkbox", on: "Learns long/short/wait from forecast outcomes", off: "Off" },
    { key: "regimeAware", label: "Regime-aware Martingale", value: strategy.regimeAware, type: "checkbox", on: "On", off: "Off" },
    { key: "trendDayDirectionalHold", label: "Trend-day directional hold", value: strategy.trendDayDirectionalHold, type: "checkbox", on: "Hold trend-side shorts through one bounce", off: "Off", help: "When broader tape is bearish, the Cloudflare scheduler does not abandon a short on the first small stop touch unless the hard volatility buffer is also broken." },
    { key: "blockLongsInFallingTrend", label: "Block longs in falling trend", value: strategy.blockLongsInFallingTrend, type: "checkbox", on: "Requires reversal confirmation before long", off: "Off", help: "Prevents new long entries while the day tape is falling unless microstructure shows a real reversal: improving momentum, VWAP reclaim, and enough long edge." },
    { key: "volatilityAwareStops", label: "Volatility-aware stops", value: strategy.volatilityAwareStops, type: "checkbox", on: "Stops widen with live volatility", off: "Fixed stop width", help: "Uses live micro volatility and trend context to avoid stop levels that are too tight for the current tape." },
    { key: "postStopShortReentry", label: "Post-stop short re-entry", value: strategy.postStopShortReentry, type: "checkbox", on: "Can re-enter short after a stopped short resumes lower", off: "Off", help: "If a short is stopped during a bounce but bearish tape resumes within the re-entry window, the scheduler may open a controlled short again." },
    { key: "trendDayBias", label: "Trend-day bias", value: strategy.trendDayBias, type: "checkbox", on: "Avoids counter-trend entries", off: "Off", help: "Keeps the scheduler aligned with the broader tape: avoid shorts in bullish trend days and avoid longs in bearish trend days unless breakdown/reversal confirmation appears." },
    { key: "noChaseEntries", label: "No-chase entries", value: strategy.noChaseEntries, type: "checkbox", on: "Waits after fast moves", off: "Off", help: "Prevents entering after a fast move has already run. The scheduler waits for a pullback/reclaim instead of buying the high or shorting the low." },
    { key: "pullbackEntryRequired", label: "Pullback entry required", value: strategy.pullbackEntryRequired, type: "checkbox", on: "Requires retest/reclaim or bounce/failure", off: "Off", help: "Separates advisory direction from execution. A long bias waits for pullback/reclaim; a short bias waits for bounce/failure." },
    { key: "profitLockTrailingStop", label: "Profit-lock trailing stop", value: strategy.profitLockTrailingStop, type: "checkbox", on: "Moves stop after favorable move", off: "Off", help: "When an open trade moves far enough in favor, Cloudflare raises/lowers the stop to lock some of the move instead of leaving the original stop unchanged." },
    { key: "missedOpportunityLearner", label: "Missed-opportunity learner", value: strategy.missedOpportunityLearner, type: "checkbox", on: "Logs strong moves missed by execution", off: "Off", help: "Records when price makes a large move but the scheduler did not enter, so we can study bad timing separately from bad direction." },
    { key: "missedOpportunityReentry", label: "Missed-opportunity re-entry", value: strategy.missedOpportunityReentry, type: "checkbox", on: "Peter can re-enter small with confirmed missed moves", off: "Off", help: "Peter-only test: after a large missed oil move, Markov must agree and live tape must confirm continuation before a small paper re-entry can open." },
    { key: "flatMaxMartingaleSteps", label: "Flat/mixed step cap", value: strategy.flatMaxMartingaleSteps, type: "number", min: 1, max: 8, step: 1 },
    { key: "flatSizeMultiplier", label: "Flat/mixed size multiplier", value: strategy.flatSizeMultiplier, type: "number", min: 0.1, max: 1, step: 0.05, suffix: "x" },
    { key: "flatThresholdBoost", label: "Flat/mixed threshold boost", value: strategy.flatThresholdBoost, type: "number", min: 0, max: 30, step: 1, prefix: "+" },
    { key: "flatMinEdgePercent", label: "Flat/mixed minimum edge", value: strategy.flatMinEdgePercent, type: "number", min: 50, max: 80, step: 1, suffix: "%" },
    { key: "flatMinVolatilityBps", label: "Flat/mixed minimum volatility", value: strategy.flatMinVolatilityBps, type: "number", min: 0, max: 20, step: 0.1, suffix: " bps" },
    { key: "trendingMinEdgePercent", label: "Trending minimum edge", value: strategy.trendingMinEdgePercent, type: "number", min: 50, max: 85, step: 1, suffix: "%" },
    { key: "trendingMinVolatilityBps", label: "Trending minimum volatility", value: strategy.trendingMinVolatilityBps, type: "number", min: 0, max: 20, step: 0.1, suffix: " bps" },
    { key: "breakoutParticipation", label: "Breakout participation", value: strategy.breakoutParticipation, type: "checkbox", on: "Small step-1 long/short entries allowed on confirmed breakouts", off: "Off", help: "Lets the Cloudflare scheduler take a small step-1 trade when Coinbase microstructure confirms a strong upside or downside breakout, even if the slower advisory score has not fully cleared its normal threshold." },
    { key: "breakoutMinEdgePercent", label: "Breakout minimum edge", value: strategy.breakoutMinEdgePercent, type: "number", min: 50, max: 80, step: 1, suffix: "%", help: "Minimum micro predictor probability required before the breakout override can participate. Applies to both long and short breakouts." },
    { key: "breakoutMinVolatilityBps", label: "Breakout minimum volatility", value: strategy.breakoutMinVolatilityBps, type: "number", min: 0, max: 20, step: 0.1, suffix: " bps", help: "Minimum live tick volatility required. This prevents breakout trades in dead or flat tape." },
    { key: "breakoutMinMoveBps", label: "Breakout minimum move", value: strategy.breakoutMinMoveBps, type: "number", min: 0, max: 50, step: 0.1, suffix: " bps", help: "Minimum 60-second directional move. Positive move can trigger long, negative move can trigger short." },
    { key: "markovHedgeFundMethod", label: "Markov Hedge Fund Method", value: strategy.markovHedgeFundMethod, type: "checkbox", on: "State transition gate active", off: "Off", help: "Classifies oil into bull, bear, or sideways states from recent return behavior and uses the state as a probability gate. Bear state favors shorts, bull state favors longs, and sideways state raises the threshold and reduces size." },
    { key: "markovRegimeMoveBps", label: "Markov regime move", value: strategy.markovRegimeMoveBps, type: "number", min: 1, max: 100, step: 0.1, suffix: " bps", help: "Minimum recent move used to separate bull or bear state from sideways for the live scheduler adaptation." },
    { key: "markovSidewaysThresholdBoost", label: "Markov sideways threshold boost", value: strategy.markovSidewaysThresholdBoost, type: "number", min: 0, max: 30, step: 1, prefix: "+", help: "Extra conviction required when the Markov state is sideways." },
    { key: "markovSidewaysSizeMultiplier", label: "Markov sideways size multiplier", value: strategy.markovSidewaysSizeMultiplier, type: "number", min: 0.1, max: 1, step: 0.05, suffix: "x", help: "Capital multiplier used when the Markov state is sideways." },
    { key: "trendCaptureMode", label: "Trend capture mode", value: strategy.trendCaptureMode, type: "checkbox", on: "Follows confirmed trend days", off: "Off", help: "Lets the Cloudflare scheduler stay with a clear directional day, re-enter after trend-side stopouts, and avoid treating every pullback as a reason to abandon the broader move. Martingale sizing still works the normal way." },
    { key: "noChaseMoveBps", label: "No-chase move threshold", value: strategy.noChaseMoveBps, type: "number", min: 0, max: 100, step: 0.1, suffix: " bps", help: "If the recent move is larger than this threshold, the scheduler will not enter in the same direction without a pullback." },
    { key: "pullbackMinRetraceBps", label: "Pullback minimum retrace", value: strategy.pullbackMinRetraceBps, type: "number", min: 0, max: 30, step: 0.1, suffix: " bps", help: "Minimum short pullback or bounce required before entering with the trend." },
    { key: "profitLockMinMoveBps", label: "Profit-lock minimum move", value: strategy.profitLockMinMoveBps, type: "number", min: 0, max: 100, step: 0.1, suffix: " bps", help: "Minimum favorable move before the scheduler can move the stop to lock profit." },
    { key: "profitLockGivebackPct", label: "Profit-lock giveback", value: strategy.profitLockGivebackPct, type: "number", min: 5, max: 80, step: 1, suffix: "%", help: "How much of the favorable move the trailing stop is allowed to give back." },
    { key: "missedOpportunityMoveBps", label: "Missed-opportunity move", value: strategy.missedOpportunityMoveBps, type: "number", min: 5, max: 200, step: 1, suffix: " bps", help: "Minimum move size before a missed opportunity is logged to Open Brain." },
    { key: "skillsAccess", label: "Skills context", value: strategy.skillsAccess, type: "checkbox", on: strategy.skillFocus, off: "Disabled" },
    { key: "openBrainAccess", label: "Open Brain context", value: strategy.openBrainAccess, type: "checkbox", on: "Enabled", off: "Disabled" }
  ];
}

function getStrategyRuleDisplay(rule) {
  if (rule.type === "checkbox") return rule.value ? rule.on : rule.off;
  if (rule.type === "number") return `${rule.prefix || ""}${formatNumberInput(rule.value, Number(rule.step) < 1 ? 2 : 0)}${rule.suffix || ""}`;
  return rule.value;
}

function saveStrategyEngineField(key, rawValue) {
  const user = getCurrentUserProfile();
  if (!user) return;
  const before = normalizeUserStrategy(user.strategy);
  const patch = key === "martingaleEnabled"
    ? { type: rawValue ? "martingale-karpathy" : "fixed-risk" }
    : { [key]: rawValue };
  const next = normalizeUserStrategy({
    ...before,
    ...patch
  });
  const changed = recordUserStrategyChange(user, before, next);
  if (!changed) return;
  saveUserRoster();
  saveSharedSettings();
  calculateSignal();
  renderCurrentUserStrategy();
  renderUserManagement();
}

function renderStrategyEnginePanel(user = getCurrentUserProfile(), strategy = getCurrentUserStrategy()) {
  const history = ensureStrategySeedHistory(user, strategy);
  const currentStrategy = normalizeUserStrategy(user?.strategy || strategy);
  if (strategyEnginePanelEl) {
    const rows = getStrategyEngineRules(currentStrategy);
    strategyEnginePanelEl.innerHTML = `
      <div class="strategy-engine-head">
        <div>
          <span class="strategy-card-kicker">Trading engine reads</span>
          <h4>Executable rules now active</h4>
        </div>
        <span class="strategy-prose-status">Text is notes only</span>
      </div>
      <div class="strategy-engine-grid">
        ${rows.map((rule) => `
          <div class="strategy-engine-rule"${rule.help ? ` title="${escapeHtml(rule.help)}"` : ""}>
            <span>${escapeHtml(rule.label)}${rule.help ? ` <button class="inline-help-button" type="button" aria-label="${escapeHtml(rule.label)} help" title="${escapeHtml(rule.help)}">?</button>` : ""}</span>
            ${rule.type === "checkbox" ? `
              <label class="strategy-engine-toggle">
                <input data-strategy-engine-field="${escapeHtml(rule.key)}" type="checkbox"${rule.value ? " checked" : ""}>
                <strong>${escapeHtml(getStrategyRuleDisplay(rule))}</strong>
              </label>
            ` : rule.type === "number" ? `
              <label class="strategy-engine-input">
                <input data-strategy-engine-field="${escapeHtml(rule.key)}" type="number" min="${rule.min}" max="${rule.max}" step="${rule.step}" value="${escapeHtml(formatNumberInput(rule.value, Number(rule.step) < 1 ? 2 : 0))}">
                <strong>${escapeHtml(`${rule.prefix || ""}${rule.suffix || ""}`.trim())}</strong>
              </label>
            ` : `
              <strong>${escapeHtml(getStrategyRuleDisplay(rule))}</strong>
            `}
          </div>
        `).join("")}
      </div>
      <p class="strategy-engine-note">Further refinements change trading only when saved into these structured fields or implemented as new executable rules.</p>
    `;
    strategyEnginePanelEl.querySelectorAll("[data-strategy-engine-field]").forEach((input) => {
      input.addEventListener("change", () => {
        const value = input.type === "checkbox" ? input.checked : input.value;
        saveStrategyEngineField(input.dataset.strategyEngineField, value);
      });
    });
  }

  if (strategyHistoryPanelEl) {
    const newestFirst = [...history].sort((a, b) => getTransactionDate(b.changedAt) - getTransactionDate(a.changedAt));
    strategyHistoryPanelEl.innerHTML = `
      <div class="strategy-engine-head">
        <div>
          <span class="strategy-card-kicker">Update log</span>
          <h4>Strategy change history</h4>
        </div>
      </div>
      ${newestFirst.length ? `
        <div class="strategy-history-list">
          ${newestFirst.map((entry, index) => {
            const diffRows = getStrategyDiffRows(entry.before, entry.after);
            const performance = summarizeClosedTradePerformanceSince(entry.changedAt);
            return `
              <details class="strategy-history-item">
                <summary>
                  <strong>Strategy change #${newestFirst.length - index}: ${escapeHtml(entry.summary)}</strong>
                  <span>${formatTradeTime(entry.changedAt)} by ${escapeHtml(entry.changedByName || entry.changedByEmail || "Unknown user")} / ${formatPerformanceSummary(performance)}</span>
                </summary>
                ${entry.detail ? `<p>${escapeHtml(entry.detail)}</p>` : ""}
                ${diffRows.length ? `
                  <div class="strategy-diff-grid">
                    ${diffRows.map((row) => `
                      <div>
                        <span>${escapeHtml(row.label)}</span>
                        <strong>${escapeHtml(row.before)} -> ${escapeHtml(row.after)}</strong>
                      </div>
                    `).join("")}
                  </div>
                ` : `<p>No structured field changes recorded.</p>`}
              </details>
            `;
          }).join("")}
        </div>
      ` : `<p class="strategy-engine-note">No strategy updates logged yet.</p>`}
    `;
  }
}

function formatLearnerAccuracy(summary) {
  if (!summary || !summary.count) return "No samples";
  return `${formatPercent(summary.accuracy)} / ${summary.count}`;
}

function getCoachTelemetryStatus(learner) {
  if (!learner?.enabled) return "Outcome learner disabled";
  if (!learner.ready) return learner.note || "Collecting evaluated forecasts";
  if (learner.adjustment) return `Active adjustment ${learner.adjustment > 0 ? "+" : ""}${learner.adjustment}`;
  return "Watching; no adjustment needed";
}

function getLearnerSampleBalance(learner) {
  if (!learner?.enabled) return "Outcome learner is not active for this strategy.";

  const longCount = learner.longSummary?.count || 0;
  const shortCount = learner.shortSummary?.count || 0;
  const waitCount = learner.waitSummary?.count || 0;
  const actionableCount = longCount + shortCount;

  if (!learner.evaluatedCount) {
    return "No advisory snapshots have reached the evaluation window yet.";
  }
  if (!actionableCount && waitCount) {
    return "Only wait calls have been evaluated so far; long and short forecast quality is still unknown.";
  }
  if (longCount && !shortCount) {
    return "Long-bias warning: no short advisories have been evaluated yet, so short accuracy cannot be learned from this sample set.";
  }
  if (shortCount && !longCount) {
    return "Short-bias warning: no long advisories have been evaluated yet, so long accuracy cannot be learned from this sample set.";
  }
  if (longCount >= Math.max(3, shortCount * 3)) {
    return "Long-heavy sample set: short calls need more evaluated examples before the learner can compare both sides reliably.";
  }
  if (shortCount >= Math.max(3, longCount * 3)) {
    return "Short-heavy sample set: long calls need more evaluated examples before the learner can compare both sides reliably.";
  }
  return "Long and short samples are balanced enough for directional threshold coaching.";
}

function getLearnerSampleBalanceLabel(learner) {
  if (!learner?.enabled) return "Disabled";

  const longCount = learner.longSummary?.count || 0;
  const shortCount = learner.shortSummary?.count || 0;
  const waitCount = learner.waitSummary?.count || 0;
  const actionableCount = longCount + shortCount;

  if (!learner.evaluatedCount) return "No evaluated samples";
  if (!actionableCount && waitCount) return "Wait-only";
  if (longCount && !shortCount) return "Long-only";
  if (shortCount && !longCount) return "Short-only";
  if (longCount >= Math.max(3, shortCount * 3)) return "Long-heavy";
  if (shortCount >= Math.max(3, longCount * 3)) return "Short-heavy";
  return "Balanced";
}

function renderCoachTelemetry(signal = lastPrimarySignal, commodity = commoditySelect?.value || "oil") {
  if (!coachTelemetryEl) return;
  const learner = signal?.outcomeLearner || getAdvisoryOutcomeLearner(commodity);
  const sampleCount = (learner?.longSummary?.count || 0) + (learner?.shortSummary?.count || 0);
  const storedCount = learner?.storedCount || 0;
  const evaluatedCount = learner?.evaluatedCount || sampleCount;
  const currentTone = signal?.tone || "wait";
  const adjustment = Number(learner?.adjustment) || 0;
  const learnerEvaluations = Array.isArray(learner?.evaluations) ? learner.evaluations : [];
  const adjustmentText = learner?.ready
    ? ADVISORY_EXPLORATION_MODE
      ? `${adjustment > 0 ? "+" : ""}${adjustment} observed only`
      : `${adjustment > 0 ? "+" : ""}${adjustment} score points`
    : "None yet";
  const latestAction = learner?.ready
    ? learner.note
    : `${learner?.note || "Collecting evaluated forecasts"}; needs ${ADVISORY_OUTCOME_LEARNER_MIN_SAMPLES} total samples.`;

  coachTelemetryEl.innerHTML = `
    <div class="coach-telemetry-head">
      <div>
        <p class="eyebrow">Live coach telemetry</p>
        <h3>Advisory learner status</h3>
      </div>
      <span>${escapeHtml(getCoachTelemetryStatus(learner))}</span>
    </div>
    <div class="coach-telemetry-grid">
      <div><span>Stored snapshots</span><strong>${storedCount}</strong></div>
      <div><span>Evaluated snapshots</span><strong>${evaluatedCount}</strong></div>
      <div><span>Actionable evaluated</span><strong>${sampleCount}</strong></div>
      <div><span>Long forecast accuracy</span><strong>${escapeHtml(formatLearnerAccuracy(learner?.longSummary))}</strong></div>
      <div><span>Short forecast accuracy</span><strong>${escapeHtml(formatLearnerAccuracy(learner?.shortSummary))}</strong></div>
      <div><span>Wait forecast accuracy</span><strong>${escapeHtml(formatLearnerAccuracy(learner?.waitSummary))}</strong></div>
      <div><span>Current adjustment</span><strong>${escapeHtml(adjustmentText)}</strong></div>
      <div><span>Current advisory tone</span><strong>${escapeHtml(currentTone.toUpperCase())}</strong></div>
      <div><span>Sample balance</span><strong>${escapeHtml(getLearnerSampleBalanceLabel(learner))}</strong></div>
      <div><span>Best long band</span><strong>${escapeHtml(getCalibrationAdvice(learnerEvaluations, "long"))}</strong></div>
      <div><span>Best short band</span><strong>${escapeHtml(getCalibrationAdvice(learnerEvaluations, "short"))}</strong></div>
      <div><span>Trading mode</span><strong>${ADVISORY_EXPLORATION_MODE ? "Exploration: volume unchanged" : "Selective: learner can adjust score"}</strong></div>
    </div>
    <p>${escapeHtml(latestAction)}</p>
    <p class="coach-telemetry-warning">${escapeHtml(getLearnerSampleBalance(learner))}</p>
  `;
}

function getCurrentKarpathyRecommendation() {
  const strategy = getCurrentUserStrategy();
  const stored = strategy.karpathyRecommendation && typeof strategy.karpathyRecommendation === "object"
    ? strategy.karpathyRecommendation
    : null;
  const side = getSignalSide(lastPrimarySignal);
  const loop = getKarpathyLoop(side);
  return {
    source: stored ? "Cloudflare scheduler" : "Browser preview",
    recommendedThreshold: Number(stored?.recommendedThreshold ?? loop.threshold),
    currentThreshold: Number(stored?.currentThreshold ?? lastTradePlan?.entryThreshold ?? getPaperEntryThreshold(side)),
    sampleCount: Number(stored?.sampleCount ?? loop.sampleCount),
    winRate: Number(stored?.winRate ?? loop.winRate),
    avgPnl: Number(stored?.avgPnl ?? loop.avgPnl),
    lossStreak: Number(stored?.lossStreak ?? loop.lossStreak),
    action: stored?.action || "recommend",
    summary: stored?.summary || "Karpathy coach is evaluating closed paper trades and recommending threshold changes.",
    updatedAt: stored?.updatedAt || null
  };
}

function renderAdvisorDecisionDetail(signal = lastPrimarySignal, tradePlan = lastTradePlan) {
  if (!advisorDecisionDetailBodyEl) return;
  if (!signal || !tradePlan) {
    advisorDecisionDetailBodyEl.innerHTML = "<p>Decision inputs are not ready yet.</p>";
    return;
  }

  const strategy = getCurrentUserStrategy();
  const learner = signal.outcomeLearner || getAdvisoryOutcomeLearner(commoditySelect.value);
  const karpathy = getCurrentKarpathyRecommendation();
  const secondOpinion = tradePlan.secondOpinionConsensus || getSecondOpinionConsensus(signal);
  const regime = tradePlan.regime || getRegimeAssessment(signal, strategy);
  const rows = [
    {
      title: "Primary advisory",
      body: `The current call is ${signal.label} at ${signal.conviction}/100. The local baseline is ${Math.round(signal.baseConviction || signal.conviction)} and the scheduled LLM score is ${getLatestLLMConvictionForCommodity(commoditySelect.value)?.score ?? "not fresh"}.`
    },
    {
      title: "Karpathy loop",
      body: `${karpathy.source} recommendation: threshold ${karpathy.recommendedThreshold}. It is based on ${karpathy.sampleCount} recent closed trade sample(s), ${formatPercent(karpathy.winRate * 100)} win rate, ${formatSignedMoney(karpathy.avgPnl)} average P/L, and ${karpathy.lossStreak} current loss streak. Auto-apply is ${strategy.karpathyAutoApply ? "on" : "off, so this is recommendation-only"}.`
    },
    {
      title: "Advisory outcome learner",
      body: learner?.ready
        ? `${learner.note}. Long accuracy ${formatPercent(learner.longSummary.accuracy)} over ${learner.longSummary.count}; short accuracy ${formatPercent(learner.shortSummary.accuracy)} over ${learner.shortSummary.count}; wait accuracy ${formatPercent(learner.waitSummary.accuracy)} over ${learner.waitSummary.count}.`
        : `${learner?.note || "Collecting evaluated advisory snapshots"}. This learner checks whether prior long, short, and wait calls were correct after the evaluation window.`
    },
    {
      title: "Second opinions",
      body: secondOpinion?.enabled
        ? `${secondOpinion.label}: ${secondOpinion.detail}`
        : "Second-opinion gating is disabled or has no directional call to evaluate."
    },
    {
      title: "Regime and microstructure",
      body: `Regime is ${regime.regime || "unknown"}. Edge ${regime.edgePercent ?? "-"}%, volatility ${Number(regime.volatility || 0).toFixed(2)} bps, momentum ${regime.momentumAligned ? "aligned" : "not aligned"}. Flat or mixed tape can add threshold requirements and reduce recovery sizing.`
    },
    {
      title: "Execution quality gates",
      body: `Markov Hedge Fund Method is ${strategy.markovHedgeFundMethod ? "on" : "off"}${tradePlan.markovMethod?.enabled ? ` with ${tradePlan.markovMethod.state} state` : ""}. Trend capture mode is ${strategy.trendCaptureMode ? "on" : "off"}, trend-day bias is ${strategy.trendDayBias ? "on" : "off"}, no-chase entries are ${strategy.noChaseEntries ? "on" : "off"}, pullback entry confirmation is ${strategy.pullbackEntryRequired ? "on" : "off"}, profit-lock trailing stops are ${strategy.profitLockTrailingStop ? "on" : "off"}, and missed-opportunity logging is ${strategy.missedOpportunityLearner ? "on" : "off"}. These rules change entry timing and stop management; they do not change the Martingale step calculation.`
    },
    {
      title: "Cloudflare scheduler",
      body: `Cloudflare is the source of truth for paper trading. Browser execution is disabled; the Worker checks user settings, market calendar, active open trades, Martingale step, forecast outcomes, and price source before opening or closing a paper trade. Current entry threshold is ${tradePlan.entryThreshold} from ${tradePlan.entryThresholdSource}.`
    }
  ];

  advisorDecisionDetailBodyEl.innerHTML = rows.map((row) => `
    <article>
      <strong>${escapeHtml(row.title)}</strong>
      <p>${escapeHtml(row.body)}</p>
    </article>
  `).join("");
}

function getBuiltInStrategyStartedAt() {
  const user = getCurrentUserProfile();
  return user?.createdAt || new Date().toISOString();
}

function renderAdvisoryAdoptedSystems(strategy = getCurrentUserStrategy()) {
  if (!advisoryAdoptedSystemsEl) return;
  const rows = [];
  const strategyStart = getBuiltInStrategyStartedAt();
  const strategySummary = summarizeClosedTradePerformanceSince(strategyStart);
  rows.push({
    type: "Strategy",
    name: strategy.name || "Profile strategy",
    status: strategy.karpathyLoop ? "Adopted" : "Available",
    startedAt: strategyStart,
    summary: strategySummary,
    note: strategy.description || "Profile strategy settings."
  });

  getAdoptedSkills("advisory").forEach((skill) => {
    const startedAt = skill.adoptedAdvisoryAt || skill.createdAt;
    rows.push({
      type: "Skill",
      name: skill.name,
      status: "Adopted",
      startedAt,
      summary: summarizeClosedTradePerformanceSince(startedAt),
      note: skill.body || "No instructions yet."
    });
  });

  advisoryAdoptedSystemsEl.innerHTML = "";
  if (!rows.length) {
    advisoryAdoptedSystemsEl.textContent = "No adopted skills or strategies are active.";
    return;
  }

  rows.forEach((row) => {
    const card = document.createElement("div");
    const head = document.createElement("span");
    const title = document.createElement("strong");
    const meta = document.createElement("small");
    const note = document.createElement("p");
    card.className = "advisory-system-card";
    head.textContent = `${row.type} / ${row.status}`;
    title.textContent = row.name;
    meta.textContent = `Started ${formatTradeTime(row.startedAt)} / active ${formatDurationSince(row.startedAt)} / ${formatPerformanceSummary(row.summary)}`;
    note.textContent = row.note;
    card.append(head, title, meta, note);
    advisoryAdoptedSystemsEl.append(card);
  });
}

function createUserProfilePanel(user) {
  const wrapper = document.createElement("div");
  const profileCard = document.createElement("section");
  const oilMissionCard = isOilTestAgent(user) ? createOilMissionCard(user) : null;
  const oilLearningCard = isOilTestAgent(user) ? createOilLearningCard(user) : null;
  const oilExecutionReviewCard = isOilTestAgent(user) ? createOilExecutionReviewCard(user) : null;
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
  const serverPaperCard = document.createElement("section");
  const statsCard = document.createElement("section");
  const actionsCard = document.createElement("section");
  const historyCard = document.createElement("section");
  const history = getUserSessionHistory(user);
  const activeSessions = history.filter((session) => isSessionActive(session));
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
  const paperTradingCommodities = new Set(normalizeServerPaperTrading(user.paperTrading).commodities);
  const allocations = normalizeCommodityAllocations(user.commodityAllocations, user.commodities, user.paperBaseEquity);
  const accountPnl = getUserCommodityPnl(user);
  let accountStartCapital = 0;
  commodities.forEach(({ id, name }) => {
    const isSelected = selectedCommodities.has(id);
    const startCapital = isSelected ? Number(allocations[id]?.startCapital) || 0 : 0;
    const pnl = getUserCommodityPnl(user, id);
    const tradeTerms = normalizeCommodityTradeTerms(user.commodityTradeTerms?.[id], id);
    accountStartCapital += startCapital;

    const row = document.createElement("div");
    const tradedLabel = document.createElement("label");
    const checkbox = document.createElement("input");
    const paperLabel = document.createElement("label");
    const paperCheckbox = document.createElement("input");
    const capitalLabel = document.createElement("label");
    const capitalInput = document.createElement("input");
    const longLeverageLabel = document.createElement("label");
    const longLeverageInput = document.createElement("input");
    const shortLeverageLabel = document.createElement("label");
    const shortLeverageInput = document.createElement("input");
    const feeSideLabel = document.createElement("label");
    const feeSideInput = document.createElement("input");
    const multiplierLabel = document.createElement("label");
    const multiplierInput = document.createElement("input");
    const tickerLabel = document.createElement("label");
    const tickerInput = document.createElement("input");
    const productIdLabel = document.createElement("label");
    const productIdInput = document.createElement("input");
    const contractMonthLabel = document.createElement("label");
    const contractMonthInput = document.createElement("input");
    const expiresAtLabel = document.createElement("label");
    const expiresAtInput = document.createElement("input");
    const rollDaysLabel = document.createElement("label");
    const rollDaysInput = document.createElement("input");
    const feeLabelField = document.createElement("label");
    const feeLabelInput = document.createElement("input");
    const pnlCell = document.createElement("div");
    const totalCell = document.createElement("div");

    row.className = "profile-commodity-row";
    row.dataset.commodityRow = id;
    checkbox.type = "checkbox";
    checkbox.dataset.commodityEnabled = "true";
    checkbox.checked = isSelected;
    paperCheckbox.type = "checkbox";
    paperCheckbox.dataset.commodityPaperTrading = "true";
    paperCheckbox.checked = isSelected && paperTradingCommodities.has(id);
    paperCheckbox.disabled = !isSelected;
    capitalInput.type = "number";
    capitalInput.min = "0";
    capitalInput.step = "0.01";
    capitalInput.value = Number.isFinite(startCapital) ? startCapital.toFixed(2) : "0.00";
    capitalInput.dataset.commodityCapital = "true";
    [
      [longLeverageInput, "commodityLeverageLong", "0.1", formatLeverageInput(tradeTerms.marginRateLong)],
      [shortLeverageInput, "commodityLeverageShort", "0.1", formatLeverageInput(tradeTerms.marginRateShort)],
      [feeSideInput, "commodityFeeSide", "0.01", formatNumberInput(tradeTerms.feePerContractSide, 2)],
      [multiplierInput, "commodityMultiplier", "0.0001", formatNumberInput(tradeTerms.contractMultiplier, 4)]
    ].forEach(([input, dataKey, step, value]) => {
      input.type = "number";
      input.min = "0";
      input.step = step;
      input.value = value;
      input.dataset[dataKey] = "true";
    });
    feeLabelInput.type = "text";
    feeLabelInput.value = tradeTerms.feeLabel;
    feeLabelInput.dataset.commodityFeeLabel = "true";
    tickerInput.type = "text";
    tickerInput.value = tradeTerms.ticker;
    tickerInput.dataset.commodityTicker = "true";
    productIdInput.type = "text";
    productIdInput.value = tradeTerms.productId;
    productIdInput.dataset.commodityProductId = "true";
    contractMonthInput.type = "text";
    contractMonthInput.value = tradeTerms.contractMonth;
    contractMonthInput.dataset.commodityContractMonth = "true";
    expiresAtInput.type = "datetime-local";
    expiresAtInput.value = tradeTerms.contractExpiresAt;
    expiresAtInput.dataset.commodityExpiresAt = "true";
    rollDaysInput.type = "number";
    rollDaysInput.min = "0";
    rollDaysInput.max = "30";
    rollDaysInput.step = "1";
    rollDaysInput.value = String(tradeTerms.rollBeforeDays);
    rollDaysInput.dataset.commodityRollDays = "true";

    tradedLabel.className = "profile-commodity-name";
    tradedLabel.append(checkbox, document.createTextNode(name));
    paperLabel.className = "profile-commodity-paper-field";
    paperLabel.append(paperCheckbox, document.createTextNode("Paper trading"));
    capitalLabel.className = "profile-commodity-capital-field";
    capitalLabel.append(document.createTextNode("Start capital"), capitalInput);
    [longLeverageLabel, shortLeverageLabel, feeSideLabel, multiplierLabel, tickerLabel, productIdLabel, contractMonthLabel, expiresAtLabel, rollDaysLabel, feeLabelField].forEach((label) => {
      label.className = "profile-commodity-terms-field";
    });
    longLeverageLabel.append(document.createTextNode("Long leverage"), longLeverageInput);
    shortLeverageLabel.append(document.createTextNode("Short leverage"), shortLeverageInput);
    feeSideLabel.append(document.createTextNode("Fee / side"), feeSideInput);
    multiplierLabel.append(document.createTextNode("Multiplier"), multiplierInput);
    tickerLabel.append(document.createTextNode("Active contract"), tickerInput);
    productIdLabel.append(document.createTextNode("Coinbase product ID"), productIdInput);
    contractMonthLabel.append(document.createTextNode("Contract month"), contractMonthInput);
    expiresAtLabel.append(document.createTextNode("Contract expires"), expiresAtInput);
    rollDaysLabel.append(document.createTextNode("Roll before days"), rollDaysInput);
    feeLabelField.append(document.createTextNode("Fee label"), feeLabelInput);
    pnlCell.className = pnl >= 0 ? "profile-capital-gain" : "profile-capital-loss";
    pnlCell.innerHTML = `<span>Profit / loss</span><strong>${formatSignedMoney(pnl)}</strong>`;
    totalCell.innerHTML = `<span>Total capital</span><strong>${formatMoney(startCapital + pnl)}</strong>`;

    checkbox.addEventListener("change", () => {
      if (checkbox.checked && Number(capitalInput.value) === 0) {
        capitalInput.value = "1000.00";
      }
      paperCheckbox.disabled = !checkbox.checked;
      if (!checkbox.checked) paperCheckbox.checked = false;
    });

    row.append(
      tradedLabel,
      paperLabel,
      capitalLabel,
      longLeverageLabel,
      shortLeverageLabel,
      feeSideLabel,
      multiplierLabel,
      tickerLabel,
      productIdLabel,
      contractMonthLabel,
      expiresAtLabel,
      rollDaysLabel,
      feeLabelField,
      pnlCell,
      totalCell
    );
    commodityEditor.append(row);
  });
  accountSummary.innerHTML = `
    <div><span>Account start capital</span><strong>${formatMoney(accountStartCapital)}</strong></div>
    <div class="${accountPnl >= 0 ? "profile-capital-gain" : "profile-capital-loss"}"><span>Account profit / loss</span><strong>${formatSignedMoney(accountPnl)}</strong></div>
    <div><span>Total account capital</span><strong>${formatMoney(accountStartCapital + accountPnl)}</strong></div>
  `;
  commoditySave.type = "button";
  commoditySave.className = "filter-button profile-commodity-save";
  commoditySave.textContent = "Save commodity settings";
  commoditySave.addEventListener("click", () => saveUserCommoditySelection(user, commodityEditor));
  commoditiesCard.append(commodityEditor, accountSummary, commoditySave);

  const strategy = normalizeUserStrategy(user.strategy);
  const strategyHistory = normalizeStrategyHistory(user.strategyHistory);
  const strategyCopyOptions = userRoster
    .filter((candidate) => normalizeEmail(candidate.email) !== normalizeEmail(user.email))
    .map((candidate) => `<option value="${escapeHtml(candidate.email)}">${escapeHtml(candidate.name || candidate.email)} / ${escapeHtml(candidate.email)}</option>`)
    .join("");
  strategyCard.className = "user-profile-subcard profile-strategy-card";
  strategyCard.innerHTML = `
    <h3>Strategy, Skills, and Open Brain</h3>
    <div class="profile-copy-strategy">
      <label>
        Copy another user's strategy
        <select data-strategy-copy-source>
          <option value="">Choose user...</option>
          ${strategyCopyOptions}
        </select>
      </label>
      <button class="filter-button" type="button" data-copy-strategy>Copy strategy</button>
    </div>
    <div class="profile-strategy-grid">
      <label>
        Strategy name
        <input data-strategy-field="name" type="text" value="${escapeHtml(strategy.name)}">
      </label>
      <label>
        Strategy type
        <select data-strategy-field="type">
          <option value="martingale-karpathy"${strategy.type === "martingale-karpathy" ? " selected" : ""}>Martingale + Karpathy loop</option>
          <option value="oil-paper-learning-agent"${strategy.type === "oil-paper-learning-agent" ? " selected" : ""}>Oil paper learning agent</option>
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
          <option${strategy.skillFocus === "Coinbase oil futures paper-trade learning" ? " selected" : ""}>Coinbase oil futures paper-trade learning</option>
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
        <input data-strategy-field="karpathyAutoApply" type="checkbox"${strategy.karpathyAutoApply ? " checked" : ""} title="When off, Cloudflare records Karpathy recommendations only. When on, Cloudflare can apply the recommended paper-trading threshold to this account.">
        Karpathy auto-apply threshold changes <span class="profile-field-hint" title="Recommendation-only is safer while sample sizes are small. Auto-apply lets Cloudflare update the entry threshold from closed-trade outcomes.">Cloudflare can tune the entry threshold</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="karpathyFlatSelectivity" type="checkbox"${strategy.karpathyFlatSelectivity ? " checked" : ""}>
        Karpathy flat selectivity
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="karpathyConfirmationGate" type="checkbox"${strategy.karpathyConfirmationGate ? " checked" : ""}>
        Karpathy confirmation gate
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="advisoryOutcomeLearner" type="checkbox"${strategy.advisoryOutcomeLearner ? " checked" : ""}>
        Advisory outcome learner
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="skillsAccess" type="checkbox"${strategy.skillsAccess ? " checked" : ""}>
        Allow Skills access
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="openBrainAccess" type="checkbox"${strategy.openBrainAccess ? " checked" : ""}>
        Allow Open Brain access
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="regimeAware" type="checkbox"${strategy.regimeAware ? " checked" : ""}>
        Regime-aware Martingale
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="trendDayDirectionalHold" type="checkbox"${strategy.trendDayDirectionalHold ? " checked" : ""} title="When broader tape is bearish, Cloudflare can hold a short through one bounce instead of treating the first stop touch as final.">
        Trend-day directional hold <span class="profile-field-hint" title="Useful on strong down days: a short can survive a small bounce unless the hard volatility buffer is also broken.">keeps trend-side shorts alive</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="blockLongsInFallingTrend" type="checkbox"${strategy.blockLongsInFallingTrend ? " checked" : ""} title="Blocks new long entries in a falling tape unless momentum and VWAP show a real reversal.">
        Block longs in falling trend <span class="profile-field-hint" title="Stops the trader from buying into a falling day just because one short-term tick turns green.">requires reversal confirmation</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="volatilityAwareStops" type="checkbox"${strategy.volatilityAwareStops ? " checked" : ""} title="Uses live micro volatility and trend context to widen stops when the tape is moving.">
        Volatility-aware stops <span class="profile-field-hint" title="Avoids fixed stops that are too tight for the current volatility.">dynamic stop width</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="postStopShortReentry" type="checkbox"${strategy.postStopShortReentry ? " checked" : ""} title="If a short gets stopped during a bounce but bearish tape resumes quickly, Cloudflare may re-enter short in a controlled way.">
        Post-stop short re-entry <span class="profile-field-hint" title="Designed for down days where a bounce stops the trade before the move continues lower.">controlled short re-entry</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="trendDayBias" type="checkbox"${strategy.trendDayBias ? " checked" : ""} title="Keeps new entries aligned with the broader tape instead of fighting a clear trend day.">
        Trend-day bias <span class="profile-field-hint" title="Avoids shorts in bullish trend days and avoids longs in bearish trend days unless the tape confirms a real reversal or breakdown.">avoids counter-trend entries</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="trendCaptureMode" type="checkbox"${strategy.trendCaptureMode ? " checked" : ""} title="Lets Cloudflare stay with a confirmed trend day and re-enter after trend-side stopouts without changing the Martingale step rules.">
        Trend capture mode <span class="profile-field-hint" title="Designed for days like a sustained oil run from low to high: use live microstructure and advisory tape to keep trading with the broader move instead of waiting only for the slow advisory threshold.">follows confirmed trend days</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="noChaseEntries" type="checkbox"${strategy.noChaseEntries ? " checked" : ""} title="Blocks entries after a fast move has already run, unless breakout participation explicitly confirms it.">
        No-chase entries <span class="profile-field-hint" title="Prevents buying the high or shorting the low. The scheduler waits for a pullback/reclaim or bounce/failure.">waits after fast moves</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="pullbackEntryRequired" type="checkbox"${strategy.pullbackEntryRequired ? " checked" : ""} title="Requires the execution tape to show a retest/reclaim for longs or bounce/failure for shorts.">
        Pullback entry required <span class="profile-field-hint" title="Separates the advisory direction from the execution entry so the trade waits for a better price location.">requires retest confirmation</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="profitLockTrailingStop" type="checkbox"${strategy.profitLockTrailingStop ? " checked" : ""} title="Moves the stop after a favorable move so winning trades are less likely to become full stop losses.">
        Profit-lock trailing stop <span class="profile-field-hint" title="When price moves far enough in favor, Cloudflare moves the stop toward a partial locked profit.">protects favorable moves</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="missedOpportunityLearner" type="checkbox"${strategy.missedOpportunityLearner ? " checked" : ""} title="Logs strong moves the scheduler missed so we can study bad execution timing separately from bad forecasts.">
        Missed-opportunity learner <span class="profile-field-hint" title="Writes a Cloudflare Open Brain memory when price makes a large move but no trade opens.">logs missed moves</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="missedOpportunityReentry" type="checkbox"${strategy.missedOpportunityReentry ? " checked" : ""} title="Peter-only experiment: after a large missed oil move, Markov and live tape can open a small paper re-entry with the move.">
        Missed-opportunity re-entry <span class="profile-field-hint" title="For Peter: if oil already moved, Markov agrees, and continuation is confirmed after a bounce or pullback, Cloudflare may open a small paper trade instead of waiting for the slower advisory threshold.">Peter experiment</span>
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="markovHedgeFundMethod" type="checkbox"${strategy.markovHedgeFundMethod ? " checked" : ""} title="${escapeHtml(MARKOV_HEDGE_FUND_METHOD_TEXT)}">
        Markov Hedge Fund Method <span class="profile-field-hint" title="${escapeHtml(MARKOV_HEDGE_FUND_METHOD_TEXT)}">state transition gate</span>
      </label>
      <label>
        Flat max steps
        <input data-strategy-field="flatMaxMartingaleSteps" type="number" min="1" max="8" step="1" value="${strategy.flatMaxMartingaleSteps}">
      </label>
      <label>
        Flat size multiplier
        <input data-strategy-field="flatSizeMultiplier" type="number" min="0.1" max="1" step="0.05" value="${formatNumberInput(strategy.flatSizeMultiplier, 2)}">
      </label>
      <label>
        Flat threshold boost
        <input data-strategy-field="flatThresholdBoost" type="number" min="0" max="30" step="1" value="${strategy.flatThresholdBoost}">
      </label>
      <label>
        Flat min edge %
        <input data-strategy-field="flatMinEdgePercent" type="number" min="50" max="80" step="1" value="${strategy.flatMinEdgePercent}">
      </label>
      <label>
        Flat min volatility bps
        <input data-strategy-field="flatMinVolatilityBps" type="number" min="0" max="20" step="0.1" value="${formatNumberInput(strategy.flatMinVolatilityBps, 2)}">
      </label>
      <label>
        Trending min edge %
        <input data-strategy-field="trendingMinEdgePercent" type="number" min="50" max="85" step="1" value="${strategy.trendingMinEdgePercent}">
      </label>
      <label>
        Trending min volatility bps
        <input data-strategy-field="trendingMinVolatilityBps" type="number" min="0" max="20" step="0.1" value="${formatNumberInput(strategy.trendingMinVolatilityBps, 2)}">
      </label>
      <label class="profile-toggle-row">
        <input data-strategy-field="breakoutParticipation" type="checkbox"${strategy.breakoutParticipation ? " checked" : ""} title="Lets the Cloudflare scheduler take a small step-1 trade when Coinbase microstructure confirms a strong upside or downside breakout, even if the slower advisory score has not fully cleared its normal threshold.">
        Breakout participation <span class="profile-field-hint" title="Long and short both work. The scheduler still requires live tape confirmation, volatility, VWAP alignment, and no open trade.">small step-1 confirmed breakout trades</span>
      </label>
      <label>
        Breakout min edge % <span class="profile-field-hint" title="Minimum micro predictor probability before breakout participation can open a long or short.">?</span>
        <input data-strategy-field="breakoutMinEdgePercent" type="number" min="50" max="80" step="1" value="${strategy.breakoutMinEdgePercent}" title="Minimum micro predictor probability before breakout participation can open a long or short.">
      </label>
      <label>
        Breakout min volatility bps <span class="profile-field-hint" title="Minimum live tick volatility. This avoids entering during flat, inactive tape.">?</span>
        <input data-strategy-field="breakoutMinVolatilityBps" type="number" min="0" max="20" step="0.1" value="${formatNumberInput(strategy.breakoutMinVolatilityBps, 2)}" title="Minimum live tick volatility. This avoids entering during flat, inactive tape.">
      </label>
      <label>
        Breakout min 60s move bps <span class="profile-field-hint" title="Minimum 60-second directional move. Positive can trigger long, negative can trigger short.">?</span>
        <input data-strategy-field="breakoutMinMoveBps" type="number" min="0" max="50" step="0.1" value="${formatNumberInput(strategy.breakoutMinMoveBps, 2)}" title="Minimum 60-second directional move. Positive can trigger long, negative can trigger short.">
      </label>
      <label>
        Markov regime move bps <span class="profile-field-hint" title="Minimum recent oil move used to label live state as bull or bear instead of sideways.">?</span>
        <input data-strategy-field="markovRegimeMoveBps" type="number" min="1" max="100" step="0.1" value="${formatNumberInput(strategy.markovRegimeMoveBps, 2)}" title="Minimum recent oil move used to label live state as bull or bear instead of sideways.">
      </label>
      <label>
        Markov sideways threshold boost <span class="profile-field-hint" title="Extra conviction required when the Markov state is sideways.">?</span>
        <input data-strategy-field="markovSidewaysThresholdBoost" type="number" min="0" max="30" step="1" value="${strategy.markovSidewaysThresholdBoost}" title="Extra conviction required when the Markov state is sideways.">
      </label>
      <label>
        Markov sideways size multiplier <span class="profile-field-hint" title="Capital multiplier used when the Markov state is sideways.">?</span>
        <input data-strategy-field="markovSidewaysSizeMultiplier" type="number" min="0.1" max="1" step="0.05" value="${formatNumberInput(strategy.markovSidewaysSizeMultiplier, 2)}" title="Capital multiplier used when the Markov state is sideways.">
      </label>
      <label>
        No-chase move bps <span class="profile-field-hint" title="If the recent move is already larger than this, the scheduler waits instead of chasing.">?</span>
        <input data-strategy-field="noChaseMoveBps" type="number" min="0" max="100" step="0.1" value="${formatNumberInput(strategy.noChaseMoveBps, 2)}" title="If the recent move is already larger than this, the scheduler waits instead of chasing.">
      </label>
      <label>
        Pullback minimum retrace bps <span class="profile-field-hint" title="Minimum pullback or bounce required before entering with a trend.">?</span>
        <input data-strategy-field="pullbackMinRetraceBps" type="number" min="0" max="30" step="0.1" value="${formatNumberInput(strategy.pullbackMinRetraceBps, 2)}" title="Minimum pullback or bounce required before entering with a trend.">
      </label>
      <label>
        Profit-lock minimum move bps <span class="profile-field-hint" title="Minimum favorable move before Cloudflare can trail the stop.">?</span>
        <input data-strategy-field="profitLockMinMoveBps" type="number" min="0" max="100" step="0.1" value="${formatNumberInput(strategy.profitLockMinMoveBps, 2)}" title="Minimum favorable move before Cloudflare can trail the stop.">
      </label>
      <label>
        Profit-lock giveback % <span class="profile-field-hint" title="How much of a favorable move the trailing stop may give back.">?</span>
        <input data-strategy-field="profitLockGivebackPct" type="number" min="5" max="80" step="1" value="${formatNumberInput(strategy.profitLockGivebackPct, 0)}" title="How much of a favorable move the trailing stop may give back.">
      </label>
      <label>
        Missed-opportunity move bps <span class="profile-field-hint" title="Minimum move size before the missed-opportunity learner records a Cloudflare memory.">?</span>
        <input data-strategy-field="missedOpportunityMoveBps" type="number" min="5" max="200" step="1" value="${formatNumberInput(strategy.missedOpportunityMoveBps, 0)}" title="Minimum move size before the missed-opportunity learner records a Cloudflare memory.">
      </label>
      <label class="profile-strategy-wide">
        Strategy definition <span class="profile-field-hint">notes only until mapped to executable fields</span>
        <textarea data-strategy-field="description" rows="3">${escapeHtml(strategy.description)}</textarea>
      </label>
      <label class="profile-strategy-wide">
        Karpathy coach policy
        <textarea data-strategy-field="karpathyCoachText" rows="3">${escapeHtml(strategy.karpathyCoachText)}</textarea>
      </label>
      <label class="profile-strategy-wide">
        Open Brain memory instruction
        <textarea data-strategy-field="openBrainMemory" rows="3">${escapeHtml(strategy.openBrainMemory)}</textarea>
      </label>
    </div>
    <div class="profile-strategy-history">
      <span class="stat-label">Strategy update log</span>
      ${strategyHistory.length ? strategyHistory.slice(0, 8).map((entry) => `
        <div class="profile-strategy-history-row">
          <strong>${escapeHtml(entry.summary)}</strong>
          <span>${formatTradeTime(entry.changedAt)} by ${escapeHtml(entry.changedByName || entry.changedByEmail || "Unknown user")}</span>
        </div>
      `).join("") : "<p>No strategy updates logged yet.</p>"}
    </div>
  `;
  const strategySave = document.createElement("button");
  strategySave.type = "button";
  strategySave.className = "filter-button profile-commodity-save";
  strategySave.textContent = "Save strategy";
  strategySave.addEventListener("click", () => saveUserStrategySettings(user, strategyCard));
  strategyCard.querySelector("[data-copy-strategy]")?.addEventListener("click", () => {
    copyStrategyFromUser(user, strategyCard.querySelector("[data-strategy-copy-source]")?.value, strategyCard);
  });
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

  const serverPaper = normalizeServerPaperTrading(user.paperTrading);
  const marketDayOptions = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const renderMarketDayOptions = (selectedDay) => marketDayOptions
    .map((label, day) => `<option value="${day}"${Number(selectedDay) === day ? " selected" : ""}>${label}</option>`)
    .join("");
  serverPaperCard.className = "user-profile-subcard profile-server-paper-card";
  serverPaperCard.innerHTML = `
    <h3>Server Paper Trader</h3>
    <div class="profile-security-note">
      Cloudflare can evaluate this paper account on a schedule, so trades continue even when the user's browser is closed.
    </div>
    <div class="profile-strategy-grid">
      <label class="profile-toggle-row">
        <input data-server-paper-field="enabled" type="checkbox"${serverPaper.enabled ? " checked" : ""}>
        Enable scheduled paper trading
      </label>
      <label>
        Risk %
        <input data-server-paper-field="riskPct" type="number" min="0.1" max="25" step="0.1" value="${formatNumberInput(serverPaper.riskPct, 2)}">
      </label>
      <label>
        Max open trades
        <input data-server-paper-field="maxOpenTrades" type="number" min="1" max="10" step="1" value="${serverPaper.maxOpenTrades}">
      </label>
      <label>
        Entry threshold
        <input data-server-paper-field="entryThreshold" type="number" min="1" max="100" step="1" value="${serverPaper.entryThreshold}">
      </label>
      <label>
        Overnight gap risk
        <select data-server-paper-field="overnightRiskMode">
          <option value="accept"${serverPaper.overnightRiskMode === "accept" ? " selected" : ""}>Accept gap risk and hold open trades</option>
          <option value="flatten-before-close"${serverPaper.overnightRiskMode === "flatten-before-close" ? " selected" : ""}>Close open trades before market close</option>
        </select>
      </label>
      <label>
        Pre-close exit minutes
        <input data-server-paper-field="closeBeforeMinutes" type="number" min="1" max="240" step="1" value="${serverPaper.closeBeforeMinutes}">
      </label>
      <label>
        Market time zone
        <input data-server-paper-field="marketTimeZone" type="text" value="${escapeHtml(serverPaper.marketTimeZone)}" placeholder="America/New_York">
      </label>
      <label>
        Weekly market opens
        <select data-server-paper-field="weeklyOpenDay">
          ${renderMarketDayOptions(serverPaper.weeklyOpenDay)}
        </select>
      </label>
      <label>
        Weekly open time
        <input data-server-paper-field="weeklyOpenTime" type="time" value="${escapeHtml(serverPaper.weeklyOpenTime)}">
      </label>
      <label>
        Weekly market closes
        <select data-server-paper-field="weeklyCloseDay">
          ${renderMarketDayOptions(serverPaper.weeklyCloseDay)}
        </select>
      </label>
      <label>
        Weekly close time
        <input data-server-paper-field="weeklyCloseTime" type="time" value="${escapeHtml(serverPaper.weeklyCloseTime)}">
      </label>
      <label>
        Daily maintenance close
        <input data-server-paper-field="dailyCloseTime" type="time" value="${escapeHtml(serverPaper.dailyCloseTime)}">
      </label>
      <label>
        Daily maintenance reopen
        <input data-server-paper-field="dailyReopenTime" type="time" value="${escapeHtml(serverPaper.dailyReopenTime)}">
      </label>
      <label class="profile-strategy-wide">
        Market calendar notes
        <textarea data-server-paper-field="marketCalendarNotes" rows="3">${escapeHtml(serverPaper.marketCalendarNotes)}</textarea>
      </label>
      <div class="profile-strategy-wide server-paper-commodities">
        <span class="stat-label">Scheduled commodities</span>
        ${commodities.map(({ id, name }) => `
          <label class="profile-toggle-row">
            <input data-server-paper-commodity type="checkbox" value="${id}"${serverPaper.commodities.includes(id) ? " checked" : ""}>
            ${name}
          </label>
        `).join("")}
      </div>
      <div>
        <span class="stat-label">Last evaluation</span>
        <strong>${serverPaper.lastEvaluationAt ? formatRelativeDate(serverPaper.lastEvaluationAt) : "Never"}</strong>
      </div>
      <div class="profile-strategy-wide">
        <span class="stat-label">Last scheduler decision</span>
        <strong>${escapeHtml(serverPaper.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision)}</strong>
      </div>
    </div>
  `;
  const serverPaperSave = document.createElement("button");
  serverPaperSave.type = "button";
  serverPaperSave.className = "filter-button profile-commodity-save";
  serverPaperSave.textContent = "Save server trader";
  serverPaperSave.addEventListener("click", () => saveUserPaperTradingSettings(user, serverPaperCard));
  serverPaperCard.append(serverPaperSave);

  statsCard.className = "user-profile-subcard";
  statsCard.innerHTML = `
    <h3>Session Statistics</h3>
    <div class="profile-stat-grid">
      <div><span>Total Sessions</span><strong>${Number(user.sessions) || history.length}</strong></div>
      <div><span>Active Sessions</span><strong>${activeSessions.length ? `${activeSessions.length} active` : "None"}</strong></div>
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
    <thead><tr><th>Timestamp</th><th>Status</th><th>Device</th><th>Location</th><th>Colo</th></tr></thead>
    <tbody></tbody>
  `;
  const tbody = table.querySelector("tbody");
  (history.length ? history : [{ time: null, device: "-", location: "-", colo: "-" }]).slice(0, 8).forEach((session) => {
    const row = document.createElement("tr");
    const active = isSessionActive(session);
    [
      session.lastSeenAt
        ? `${formatTradeTime(session.lastSeenAt)} (${formatRelativeDate(session.lastSeenAt)})`
        : session.time ? `${formatTradeTime(session.time)} (${formatRelativeDate(session.time)})` : "No sessions recorded",
      active ? "Active" : "Inactive",
      [session.device || "Unknown", session.platform || ""].filter(Boolean).join(" / "),
      session.location || "Unknown",
      session.colo || "unknown"
    ].forEach((value, index) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      if (index === 1) cell.className = active ? "session-status-active" : "session-status-inactive";
      row.append(cell);
    });
    tbody.append(row);
  });
  historyCard.append(table);

  wrapper.append(profileCard);
  if (oilMissionCard) wrapper.append(oilMissionCard);
  if (oilLearningCard) wrapper.append(oilLearningCard);
  if (oilExecutionReviewCard) wrapper.append(oilExecutionReviewCard);
  wrapper.append(commoditiesCard, strategyCard, brokerCard, serverPaperCard, statsCard, actionsCard, historyCard);
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

  const matchedUsers = query
    ? users.filter((user) => (
      String(user.name || "").toLowerCase().includes(query)
      || String(user.email || "").toLowerCase().includes(query)
    ))
    : users;

  return matchedUsers
    .slice()
    .sort((left, right) => {
      const leftName = String(left.name || left.email || "").toLowerCase();
      const rightName = String(right.name || right.email || "").toLowerCase();
      const nameDelta = leftName.localeCompare(rightName);
      if (nameDelta) return nameDelta;
      const pnlDelta = (getUserCurrentPnl(right) + getUserOpenPnl(right)) - (getUserCurrentPnl(left) + getUserOpenPnl(left));
      if (pnlDelta) return pnlDelta;
      return normalizeEmail(left.email).localeCompare(normalizeEmail(right.email));
    });
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
    const livePrice = getUsableMarketPrice(commodity);
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
      "__STOP_LOSS__",
      "__CURRENT_MARK__"
    ].forEach((value) => {
      const cell = document.createElement("td");
      if (value === "__STOP_LOSS__") {
        row.append(buildStopLossCell(openTrade));
        return;
      }
      if (value === "__CURRENT_MARK__") {
        row.append(buildOpenTradeLivePriceCell(openTrade, livePrice));
        return;
      }
      cell.textContent = value;
      row.append(cell);
    });
    row.append(buildUnrealizedPnlCell(openTrade, livePrice));

    return row;
  }

  const signalSide = getSignalSide(signal);
  const marketStatus = getFuturesMarketStatus();
  const hasExecutablePrice = Boolean(tradePlan?.priceReady && signalSide);
  const clearsThreshold = signalSide && signal.conviction >= tradePlan.entryThreshold;
  const blockedTitle = decision?.title && String(decision.title).startsWith("No trade:")
    ? String(decision.title).replace(/^No trade:\s*/i, "")
    : "";
  const action = !marketStatus.isOpen
    ? "Market closed"
    : blockedTitle
    ? `Blocked: ${blockedTitle}`
    : signalSide && !clearsThreshold
    ? `Waiting ${signal.conviction}/${tradePlan.entryThreshold}`
    : signalSide
    ? `${signalSide === "short" ? "Sell short" : "Buy"} queued`
    : "Waiting for advisory";
  const queuedPrice = signalSide === "short" ? tradePlan.entryPrice : tradePlan.buyPrice;

  const nextRowTooltip = "Preview of the next planned trade. This row stays here until a real trade opens, then it's replaced by an Open (O) row.";
  const actionTooltip = signalSide && !clearsThreshold
    ? `Live advisory conviction is ${signal.conviction}; the bot opens a trade when it reaches the threshold of ${tradePlan.entryThreshold}.`
    : signalSide && clearsThreshold
    ? `Conviction ${signal.conviction} cleared the threshold ${tradePlan.entryThreshold}. The bot will fire a ${signalSide} order on the next tick.`
    : "Advisory has no directional signal yet (Wait). The bot only opens long or short trades.";
  const detailTooltip = decision.detail || actionTooltip;
  const statusValue = !marketStatus.isOpen
    ? `Market closed: ${marketStatus.shortLabel}`
    : decision.title;
  const statusTooltip = !marketStatus.isOpen
    ? marketStatus.detail
    : detailTooltip;

  row.className = "transaction-row queued-trade-row";
  appendStateCell(row, "Q", "Queued / waiting");
  const queuedCells = [
    { value: "Next", title: nextRowTooltip },
    { value: action, title: actionTooltip },
    { value: signalSide ? formatSide(signalSide) : "-", title: null },
    { value: `#${martingaleStep}`, title: null },
    { value: marketConfig[commodity]?.ticker || tradePlan.ticker, title: null },
    { value: hasExecutablePrice ? formatPrice(queuedPrice) : UNAVAILABLE_TEXT, title: null },
    { value: hasExecutablePrice ? formatMoney(tradePlan.nextCapital) : UNAVAILABLE_TEXT, title: null },
    { value: hasExecutablePrice ? formatPrice(tradePlan.targetPrice) : UNAVAILABLE_TEXT, title: null },
    { value: hasExecutablePrice && Number.isFinite(Number(tradePlan.stopLoss)) ? formatPrice(Number(tradePlan.stopLoss)) : UNAVAILABLE_TEXT, title: null },
    { value: "__CURRENT_MARK__", title: null },
    { value: statusValue, title: statusTooltip }
  ];
  queuedCells.forEach(({ value, title }) => {
    const cell = document.createElement("td");
    if (value === "__CURRENT_MARK__") {
      row.append(buildLiveMarkCellForCommodity(commodity));
      return;
    }
    cell.textContent = value;
    if (title) cell.title = title;
    row.append(cell);
  });

  return row;
}

function buildFallbackPaperTradeRow(message) {
  const row = document.createElement("tr");
  const cell = document.createElement("td");
  cell.colSpan = 12;
  cell.textContent = message;
  row.append(cell);
  return row;
}

function buildUnrealizedPnlCell(openTrade, livePrice) {
  const cell = document.createElement("td");
  const livePriceNum = Number(livePrice);
  if (!openTrade || !Number.isFinite(livePriceNum) || livePriceNum <= 0) {
    cell.textContent = UNAVAILABLE_TEXT;
    return cell;
  }

  const unrealizedPnl = getTradeNetPnl(openTrade, livePriceNum);
  if (!Number.isFinite(unrealizedPnl)) {
    cell.textContent = UNAVAILABLE_TEXT;
    return cell;
  }

  const tradeKey = openTrade.id || openTrade.tradeId;
  const prevPnl = tradeKey != null ? lastUnrealizedPnlByTradeId.get(tradeKey) : null;

  if (Number.isFinite(prevPnl) && prevPnl !== unrealizedPnl) {
    const arrowSpan = document.createElement("span");
    arrowSpan.className = unrealizedPnl > prevPnl ? "trend-up" : "trend-down";
    arrowSpan.textContent = unrealizedPnl > prevPnl ? "▲" : "▼";
    cell.append(arrowSpan, document.createTextNode(" "));
  }

  cell.append(document.createTextNode(formatSignedMoney(unrealizedPnl)));
  if (unrealizedPnl > 0) cell.classList.add("gain");
  else if (unrealizedPnl < 0) cell.classList.add("loss");

  if (tradeKey != null) lastUnrealizedPnlByTradeId.set(tradeKey, unrealizedPnl);
  return cell;
}

function buildOpenTradeLivePriceCell(entry = {}, livePrice = null) {
  const cell = document.createElement("td");
  const commodity = normalizeCommodityId(entry.commodity || getCommodityFromContract(entry.contract) || "oil");
  const price = Number.isFinite(Number(livePrice)) && Number(livePrice) > 0
    ? Number(livePrice)
    : Number(getUsableMarketPrice(commodity));
  if (!Number.isFinite(price) || price <= 0) {
    cell.textContent = UNAVAILABLE_TEXT;
    return cell;
  }
  cell.className = "current-mark-price";
  cell.title = "Current Coinbase price used to estimate this open trade P/L.";
  cell.textContent = formatPrice(price);
  return cell;
}

function getOpenTradeMarkPrice(entry = {}) {
  if (isClosingTransaction(entry) || entry.closedAt) return NaN;
  if (getTransactionStateCode(entry) !== "O") return NaN;
  const commodity = normalizeCommodityId(entry.commodity || getCommodityFromContract(entry.contract) || "oil");
  const livePrice = getDisplayMarketPrice(commodity);
  return Number.isFinite(Number(livePrice)) && Number(livePrice) > 0 ? Number(livePrice) : NaN;
}

function buildOpenTradeMarkCell(entry = {}) {
  const cell = document.createElement("td");
  if (isOpeningTransaction(entry)) {
    const closingEntry = getClosingEntry(entry);
    cell.textContent = closingEntry ? "Closed later" : "Trade open";
    cell.className = "historical-open-exit";
    cell.title = closingEntry
      ? "This opening row was closed by a later transaction. The filled exit appears on the closing row."
      : "This opening row is still active. The current Coinbase price appears on the open trade summary row.";
    return cell;
  }
  if (getTransactionStateCode(entry) !== "O") {
    cell.textContent = UNAVAILABLE_TEXT;
    cell.className = "historical-open-exit";
    cell.title = "This opening row is already matched to a later close. The filled exit appears on the closing row.";
    return cell;
  }
  const markPrice = getOpenTradeMarkPrice(entry);
  if (!Number.isFinite(markPrice)) {
    cell.textContent = UNAVAILABLE_TEXT;
    return cell;
  }
  cell.className = "current-mark-price";
  const commodity = normalizeCommodityId(entry.commodity || getCommodityFromContract(entry.contract) || "oil");
  cell.title = getDisplayMarketPriceTitle(commodity);
  cell.textContent = formatPrice(markPrice);
  return cell;
}

function buildLiveMarkCellForCommodity(commodity) {
  const cell = document.createElement("td");
  const markPrice = getDisplayMarketPrice(commodity);
  if (!Number.isFinite(Number(markPrice)) || Number(markPrice) <= 0) {
    cell.textContent = UNAVAILABLE_TEXT;
    return cell;
  }
  cell.className = "current-mark-price";
  cell.title = getDisplayMarketPriceTitle(commodity);
  cell.textContent = formatPrice(Number(markPrice));
  return cell;
}

function getStopLossDisplayPrice(entry = {}) {
  const stopLoss = Number(entry.originalStopPrice ?? entry.stopLossPrice ?? entry.initialStopPrice ?? entry.stopPrice);
  return Number.isFinite(stopLoss) ? stopLoss : NaN;
}

function buildStopLossCell(entry = {}) {
  const cell = document.createElement("td");
  const stopLoss = getStopLossDisplayPrice(entry);
  cell.textContent = Number.isFinite(stopLoss) ? formatPrice(stopLoss) : UNAVAILABLE_TEXT;
  const profitLock = Number(entry.profitLockStopPrice);
  if (Number.isFinite(profitLock)) {
    cell.title = `Original stop loss. Profit-lock exit guard is ${formatPrice(profitLock)}.`;
    cell.classList.add("protective-stop-cell");
  }
  return cell;
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
    const isClosed = isClosingTransaction(entry) || entry.closedAt;
    const exitPriceValue = isClosed
      ? Number(entry?.exitPrice ?? entry?.price)
      : NaN;

    appendStateCell(row, getTransactionStateCode(entry), getTransactionStateCode(entry) === "C" ? "Closed" : "Open");
    [
      entry?.time ? formatTradeTime(entry.time) : "-",
      entry?.action || "Trade",
      entry?.side ? formatSide(entry.side) : "-",
      entry?.step ? `#${entry.step}` : "-",
      entry?.contract || "-",
      Number.isFinite(Number(entry?.price)) ? formatPrice(Number(entry.price)) : UNAVAILABLE_TEXT,
      Number.isFinite(Number(entry?.capital)) ? formatMoney(Number(entry.capital)) : "-",
      Number.isFinite(Number(entry?.targetPrice)) ? formatPrice(Number(entry.targetPrice)) : UNAVAILABLE_TEXT,
      "__STOP_LOSS__",
      Number.isFinite(exitPriceValue) ? formatPrice(exitPriceValue) : null,
      Number.isFinite(pnl) ? formatSignedMoney(pnl) : "-"
    ].forEach((value, index) => {
      const cell = document.createElement("td");
      if (index === 8 && value === "__STOP_LOSS__") {
        row.append(buildStopLossCell(entry));
        return;
      }
      if (index === 9 && value === null) {
        row.append(buildOpenTradeMarkCell(entry));
        return;
      }
      cell.textContent = value;
      if (index === 10) {
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
    cell.colSpan = 11;
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
    const accountGroupNote = getUserAccountGroupNote(user);
    const closedPnl = getUserCurrentPnl(user);
    const openPnl = getUserOpenPnl(user);
    const totalPnl = closedPnl + openPnl;
    const lastTradeTime = getUserLastTradeTime(user);
    const tradeCount = getUserTradeCount(user);

    row.className = "user-summary-row";
    if (accountGroupNote) row.dataset.accountGroup = "true";
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
    if (accountGroupNote) {
      const accountNote = document.createElement("small");
      accountNote.className = "user-account-note";
      accountNote.textContent = accountGroupNote;
      profileText.append(name, email, accountNote);
    } else {
      profileText.append(name, email);
    }
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
      { value: profileCell },
      { value: formatUserDate(user.createdAt) },
      { value: formatRelativeDate(user.lastActiveAt) },
      { value: String(Number(user.sessions) || 0) },
      { value: formatMoney(user.paperBaseEquity ?? PAPER_START_EQUITY) },
      {
        value: formatSignedMoney(closedPnl),
        className: closedPnl >= 0 ? "gain" : "loss"
      },
      {
        value: formatSignedMoney(openPnl),
        className: openPnl >= 0 ? "gain" : "loss"
      },
      {
        value: formatSignedMoney(totalPnl),
        className: totalPnl >= 0 ? "gain" : "loss"
      },
      { value: lastTradeTime ? `${formatRelativeDate(lastTradeTime)} / ${tradeCount} trade${tradeCount === 1 ? "" : "s"}` : "No trades" },
      { value: status },
      { value: actionCell }
    ].forEach(({ value, className }) => {
      if (value instanceof HTMLElement) {
        if (className) value.classList.add(className);
        row.append(value);
        return;
      }
      const cell = document.createElement("td");
      if (className) cell.className = className;
      if (value instanceof Node) cell.append(value);
      else cell.textContent = value;
      row.append(cell);
    });

    userTableBodyEl.append(row);

  });
  renderSelectedUserProfile();
}

function markCurrentSessionActive() {
  const user = findRegisteredUserByEmail(window.sessionStorage.getItem(ACCESS_EMAIL_KEY));
  if (!user) return;

  updateCurrentSessionHeartbeat(user, window.sessionStorage.getItem(ACCESS_SESSION_RECORDED_KEY) !== "true");
  saveUserRoster();
  saveSharedSettings();
  if (window.sessionStorage.getItem(ACCESS_SESSION_RECORDED_KEY) !== "true") {
    recordOpenBrainEvent("login", `${user.name || user.email} logged in`, {
      userId: user.id,
      email: user.email,
      tags: ["login", normalizeEmail(user.email)]
    });
  }
  window.sessionStorage.setItem(ACCESS_SESSION_RECORDED_KEY, "true");
}

function getCurrentAccessSessionId() {
  let sessionId = window.sessionStorage.getItem(ACCESS_SESSION_ID_KEY);
  if (!sessionId) {
    sessionId = `session-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    window.sessionStorage.setItem(ACCESS_SESSION_ID_KEY, sessionId);
  }
  return sessionId;
}

function updateCurrentSessionHeartbeat(user, createSession = false) {
  const now = new Date().toISOString();
  const sessionId = getCurrentAccessSessionId();
  const currentHistory = Array.isArray(user.sessionHistory) ? user.sessionHistory : [];
  const existingIndex = currentHistory.findIndex((session) => session.sessionId === sessionId);
  const existing = existingIndex >= 0 ? currentHistory[existingIndex] : null;
  const session = {
    ...(existing || {}),
    sessionId,
    time: existing?.time || now,
    lastSeenAt: now,
    status: "active",
    device: existing?.device || "Desktop",
    platform: existing?.platform || window.navigator?.platform || "Browser",
    location: existing?.location || "Unknown",
    colo: existing?.colo || "cloudflare"
  };

  user.lastActiveAt = now;
  user.sessions = Math.max(createSession ? Number(user.sessions || 0) + 1 : Number(user.sessions || 0), currentHistory.length || 1);
  user.sessionHistory = [
    session,
    ...currentHistory.filter((entry, index) => index !== existingIndex)
  ].slice(0, 25);
}

function heartbeatCurrentSession() {
  if (window.sessionStorage.getItem(ACCESS_STATE_KEY) !== "true") return;
  const user = findRegisteredUserByEmail(window.sessionStorage.getItem(ACCESS_EMAIL_KEY));
  if (!user) return;
  updateCurrentSessionHeartbeat(user, false);
  saveUserRoster();
  saveSharedSettings();
  if (selectedUserId === user.id) renderSelectedUserProfile();
}

function isSessionActive(session = {}, now = Date.now()) {
  const lastSeen = getTransactionDate(session.lastSeenAt || session.time).getTime();
  return Number.isFinite(lastSeen) && now - lastSeen <= ACTIVE_SESSION_WINDOW_MS;
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
    paperBaseEquity: DEFAULT_NON_EXEMPT_USER_EQUITY,
    paperRiskPct: PAPER_DEFAULT_RISK_PCT,
    commodities: OIL_ONLY_COMMODITIES.slice(),
    commodityAllocations: buildOilOnlyAllocations(DEFAULT_NON_EXEMPT_USER_EQUITY),
    paperTrading: {
      enabled: true,
      commodities: OIL_ONLY_COMMODITIES.slice()
    },
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
  window.sessionStorage.removeItem(ACCESS_SESSION_ID_KEY);
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
    horizon: ADVISORY_SIGNAL_WEIGHT
  };
}

function getManualConvictionOverrides() {
  if (manualConvictionOverrides && Object.keys(manualConvictionOverrides).length) return manualConvictionOverrides;
  try {
    const parsed = JSON.parse(window.localStorage.getItem(MANUAL_CONVICTION_OVERRIDES_KEY) || "{}");
    manualConvictionOverrides = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    return manualConvictionOverrides;
  } catch (error) {
    manualConvictionOverrides = {};
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
    manualConvictionOverrides = overrides;
    window.localStorage.setItem(MANUAL_CONVICTION_OVERRIDES_KEY, JSON.stringify(overrides));
    saveSharedSettings();
    return;
  }
  const score = Number(value);
  if (Number.isFinite(score)) {
    overrides[commodity] = clamp(Math.round(score), 0, 100);
  } else {
    delete overrides[commodity];
  }
  manualConvictionOverrides = overrides;
  window.localStorage.setItem(MANUAL_CONVICTION_OVERRIDES_KEY, JSON.stringify(overrides));
  saveSharedSettings();
}

function recordManualConvictionOverrideChange(commodity, before, after) {
  const beforeText = before === null ? "Auto" : String(before);
  const afterText = after === null ? "Auto" : String(after);
  if (beforeText === afterText) return;
  const commodityName = getCommodityName(commodity);
  const user = getCurrentUserProfile();
  recordOpenBrainEvent("advisory-override", `${commodityName} manual conviction override changed from ${beforeText} to ${afterText}`, {
    userEmail: getCurrentLedgerEmail(),
    userName: user?.name || "",
    commodity,
    commodityName,
    before,
    after,
    note: "Manual conviction override affects advisory conviction and paper-trading entry decisions.",
    tags: ["advisory", commodity, "manual-override"]
  });
}

function renderManualConvictionInput(commodity) {
  if (!inputs.manualConviction) return;
  const override = getManualConvictionOverride(commodity);
  inputs.manualConviction.value = override === null ? "" : String(override);
}

function rememberPriceTick(commodity, price, value = new Date()) {
  if (!Number.isFinite(price) || price <= 0) return;
  const time = getTransactionDate(value).getTime();
  if (!Number.isFinite(time)) return;

  const productId = getActivePriceProductId(commodity);
  const tickKey = [commodity, productId].filter(Boolean).join("|");
  const ticks = priceTickHistory.get(tickKey) || [];
  const lastTick = ticks[ticks.length - 1];
  if (lastTick && lastTick.price === price && time - lastTick.time < 1000) return;

  ticks.push({ time, price, productId });
  const cutoff = time - PRICE_TICK_WINDOW_MS;
  while (ticks.length && ticks[0].time < cutoff) ticks.shift();
  priceTickHistory.set(tickKey, ticks);
}

function getPriceAtOrBefore(ticks, targetTime) {
  for (let index = ticks.length - 1; index >= 0; index -= 1) {
    if (ticks[index].time <= targetTime) return ticks[index].price;
  }
  return null;
}

function getReturnBps(currentPrice, priorPrice) {
  if (!Number.isFinite(currentPrice) || !Number.isFinite(priorPrice) || priorPrice <= 0) return 0;
  return ((currentPrice - priorPrice) / priorPrice) * 10000;
}

function getRecentTickReturns(ticks) {
  const returns = [];
  for (let index = 1; index < ticks.length; index += 1) {
    const prior = ticks[index - 1].price;
    const current = ticks[index].price;
    if (Number.isFinite(prior) && Number.isFinite(current) && prior > 0) {
      returns.push(((current - prior) / prior) * 10000);
    }
  }
  return returns.slice(-40);
}

function getStandardDeviation(values) {
  if (!values.length) return 0;
  const mean = values.reduce((total, value) => total + value, 0) / values.length;
  const variance = values.reduce((total, value) => total + ((value - mean) ** 2), 0) / values.length;
  return Math.sqrt(variance);
}

function getMicroPredictor(commodity) {
  const productId = getActivePriceProductId(commodity);
  const ticks = priceTickHistory.get([commodity, productId].filter(Boolean).join("|")) || [];
  if (ticks.length < MICRO_PREDICTOR_MIN_TICKS) {
    return {
      ready: false,
      score: 0,
      probabilityUp: 0.5,
      probabilityDown: 0.5,
      edgeLabel: "Waiting for ticks",
      shortTrigger: false,
      longTrigger: false,
      longInvalidated: false,
      read: "Waiting for enough Coinbase tick history"
    };
  }

  const latest = ticks[ticks.length - 1];
  const currentPrice = latest.price;
  const now = latest.time;
  const price10 = getPriceAtOrBefore(ticks, now - 10_000);
  const price30 = getPriceAtOrBefore(ticks, now - 30_000);
  const price60 = getPriceAtOrBefore(ticks, now - 60_000);
  const price180 = getPriceAtOrBefore(ticks, now - 180_000);
  const recentPrices = ticks.slice(-60).map(({ price }) => price);
  const vwap = recentPrices.reduce((total, price) => total + price, 0) / recentPrices.length;
  const ret10 = getReturnBps(currentPrice, price10);
  const ret30 = getReturnBps(currentPrice, price30);
  const ret60 = getReturnBps(currentPrice, price60);
  const ret180 = getReturnBps(currentPrice, price180);
  const acceleration = ret10 - (ret60 / 6);
  const vwapDistance = getReturnBps(currentPrice, vwap);
  const volatility = getStandardDeviation(getRecentTickReturns(ticks));
  const lowerTape = ret10 < -0.8 && ret30 < -1.5 && currentPrice < vwap;
  const failedLong = ret30 < -2.5 && ret60 < 0 && vwapDistance < -1.2;
  const shortTrigger = ret10 <= -1.2 && ret30 <= -2.2 && vwapDistance < -0.8;
  const longTrigger = ret10 >= 1.2 && ret30 >= 2.2 && vwapDistance > 0.8;
  const rawScore = (
    (ret10 * 1.7) +
    (ret30 * 1.15) +
    (ret60 * 0.7) +
    (ret180 * 0.35) +
    (acceleration * 1.1) +
    (vwapDistance * 0.9) -
    (lowerTape ? Math.min(volatility * 0.8, 8) : 0)
  );
  const score = clamp(Math.round(rawScore), -45, 45);
  const probabilityUp = 1 / (1 + Math.exp(-score / 10));
  const probabilityDown = 1 - probabilityUp;
  const edge = score >= 6 ? "up" : score <= -6 ? "down" : "flat";
  const predictedTone = edge === "down" ? "short" : edge === "up" ? "long" : "flat";
  const read = edge === "down"
    ? `Tape falling: 10s ${ret10.toFixed(1)} bps, 60s ${ret60.toFixed(1)} bps, below VWAP ${vwapDistance.toFixed(1)} bps`
    : edge === "up"
      ? `Tape rising: 10s ${ret10.toFixed(1)} bps, 60s ${ret60.toFixed(1)} bps, above VWAP ${vwapDistance.toFixed(1)} bps`
      : `Tape mixed: 10s ${ret10.toFixed(1)} bps, 60s ${ret60.toFixed(1)} bps, VWAP gap ${vwapDistance.toFixed(1)} bps`;

  return {
    ready: true,
    score,
    probabilityUp,
    probabilityDown,
    predictedTone,
    edgeLabel: `${edge === "down" ? "Down" : edge === "up" ? "Up" : "Flat"} ${Math.round(Math.max(probabilityUp, probabilityDown) * 100)}%`,
    shortTrigger,
    longTrigger,
    longInvalidated: failedLong || (lowerTape && ret60 < 0),
    ret10,
    ret30,
    ret60,
    ret180,
    vwapDistance,
    volatility,
    read
  };
}

function applyMicroPredictorToScore(automaticBounded, micro) {
  if (!micro.ready) return automaticBounded;

  let adjusted = (automaticBounded * 0.62) + micro.score;
  if (micro.longInvalidated && automaticBounded > 0) adjusted -= Math.min(24, automaticBounded * 0.75);
  if (micro.shortTrigger) adjusted = Math.min(adjusted, MICRO_SHORT_TRIGGER_BPS + micro.score);
  if (micro.longTrigger) adjusted = Math.max(adjusted, MICRO_LONG_TRIGGER_BPS + micro.score);
  return clamp(Math.round(adjusted), -100, 100);
}

function getAdvisoryOutcomeLearner(commodity) {
  const strategy = getCurrentUserStrategy();
  if (!strategy.advisoryOutcomeLearner) {
    return {
      enabled: false,
      ready: false,
      adjustment: 0,
      note: "Advisory outcome learner off"
    };
  }

  const samples = advisoryHistory
    .filter((entry) => entry.commodity === commodity)
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time))
    .slice(0, ADVISORY_OUTCOME_LEARNER_SAMPLE_SIZE);
  const allEvaluations = evaluateAdvisorySamples(samples, { includeWait: true }).filter((item) => item.metric === "forecast");
  const evaluations = allEvaluations.filter((item) => isActionableAdvisoryTone(item.entry.tone));
  const longSummary = summarizeEvaluations(evaluations, (item) => item.entry.tone === "long");
  const shortSummary = summarizeEvaluations(evaluations, (item) => item.entry.tone === "short");
  const waitSummary = summarizeEvaluations(allEvaluations, (item) => item.entry.tone === "wait");
  const ready = longSummary.count + shortSummary.count >= ADVISORY_OUTCOME_LEARNER_MIN_SAMPLES;

  return {
    enabled: true,
    ready,
    storedCount: samples.length,
    evaluatedCount: allEvaluations.length,
    actionableCount: evaluations.length,
    evaluations,
    longSummary,
    shortSummary,
    waitSummary,
    adjustment: 0,
    note: ready
      ? `Learner has ${longSummary.count + shortSummary.count} evaluated forecasts`
      : `Learner needs ${Math.max(0, ADVISORY_OUTCOME_LEARNER_MIN_SAMPLES - (longSummary.count + shortSummary.count))} more evaluated forecasts`
  };
}

function getToneAccuracyAdjustment(summary, tone) {
  if (!summary || summary.count < 3 || !Number.isFinite(summary.accuracy)) return 0;
  if (summary.accuracy < 45) return tone === "short" ? 10 : -10;
  if (summary.accuracy < 55) return tone === "short" ? 5 : -5;
  if (summary.accuracy >= 68) return tone === "short" ? -5 : 5;
  return 0;
}

function applyAdvisoryOutcomeLearner(commodity, bounded) {
  const learner = getAdvisoryOutcomeLearner(commodity);
  if (!learner.enabled || !learner.ready) return { bounded, learner };

  const proposedTone = bounded <= -12 ? "short" : bounded >= 12 ? "long" : "wait";
  let adjustment = 0;
  if (proposedTone === "long") adjustment += getToneAccuracyAdjustment(learner.longSummary, "long");
  if (proposedTone === "short") adjustment += getToneAccuracyAdjustment(learner.shortSummary, "short");

  const longWeak = learner.longSummary.count >= 3 && learner.longSummary.accuracy < 50;
  const shortWeak = learner.shortSummary.count >= 3 && learner.shortSummary.accuracy < 50;
  if (longWeak && shortWeak && Math.abs(bounded) < 28) {
    adjustment += bounded > 0 ? -8 : bounded < 0 ? 8 : 0;
  }

  learner.adjustment = adjustment;
  learner.note = ADVISORY_EXPLORATION_MODE
    ? `${adjustment ? `Outcome learner would apply ${adjustment > 0 ? "+" : ""}${adjustment}` : "Outcome learner observed outcomes"}; exploration mode keeps trade volume unchanged`
    : adjustment
      ? `Outcome learner ${adjustment > 0 ? "+" : ""}${adjustment} from forecast accuracy`
      : "Outcome learner observed outcomes without changing this call";
  return {
    bounded: ADVISORY_EXPLORATION_MODE ? bounded : clamp(Math.round(bounded + adjustment), -100, 100),
    learner
  };
}

function isActionableTone(tone) {
  return tone === "long" || tone === "short";
}

function updateSignalStabilityStrip(signal) {
  if (!signalStabilityStrip || !signal) return;
  const decisionTone = signal.tone || "wait";
  const rawTone = signal.rawTone || decisionTone;
  const isUnstable = Boolean(signal.stabilityNote);
  signalStabilityStrip.dataset.unstable = String(isUnstable);
  signalStabilityStrip.dataset.decisionTone = decisionTone;
  signalStabilityStrip.dataset.rawTone = rawTone;

  signalStabilityStrip.querySelectorAll("[data-stability-tone]").forEach((pill) => {
    const tone = pill.dataset.stabilityTone;
    pill.dataset.active = String(tone === decisionTone);
    pill.dataset.raw = String(isUnstable && tone === rawTone && tone !== decisionTone);
  });
}

function applyAdvisorySideStability(commodity, signal) {
  const now = Date.now();
  const prior = advisorySideState.get(commodity);
  const nextTone = signal.tone;
  const priorTone = prior?.tone;
  const oppositeFlip = isActionableTone(priorTone)
    && isActionableTone(nextTone)
    && priorTone !== nextTone;
  const elapsed = prior?.changedAt ? now - prior.changedAt : Number.POSITIVE_INFINITY;
  const weakFlip = Math.abs(Number(signal.bounded) || 0) < ADVISORY_STRONG_FLIP_BOUNDED;

  if (oppositeFlip && elapsed < ADVISORY_SIDE_FLIP_HOLD_MS && weakFlip) {
    return {
      ...signal,
      label: "Wait",
      chipLabel: "Wait",
      action: "No trade",
      color: "#735f2d",
      tone: "wait",
      rawTone: nextTone,
      heldTone: priorTone,
      stabilityNote: `Direction is unstable: ${priorTone} flipped toward ${nextTone} before the ${Math.round(ADVISORY_SIDE_FLIP_HOLD_MS / 1000)} second hold period confirmed.`
    };
  }

  if (!prior || priorTone !== nextTone) {
    advisorySideState.set(commodity, {
      tone: nextTone,
      changedAt: now,
      bounded: signal.bounded
    });
  } else {
    advisorySideState.set(commodity, {
      ...prior,
      bounded: signal.bounded
    });
  }

  return {
    ...signal,
    rawTone: nextTone
  };
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
  const micro = getMicroPredictor(commodity);
  const microAdjustedBounded = applyMicroPredictorToScore(automaticBounded, micro);
  const outcomeLearned = applyAdvisoryOutcomeLearner(commodity, microAdjustedBounded);
  const manualConviction = getManualConvictionOverride(commodity);
  const llmTone = getLatestLLMConvictionForCommodity(commodity)?.tone;
  const verifiedToneSign = llmTone === "short" ? -1 : llmTone === "long" ? 1 : 0;
  const fallbackToneSign = Math.sign(outcomeLearned.bounded || microAdjustedBounded || automaticBounded || 1);
  const bounded = manualConviction === null
    ? outcomeLearned.bounded
    : (verifiedToneSign || fallbackToneSign) * Math.max(0, manualConviction - 40);
  const baseConviction = manualConviction === null
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

  const karpathyAdjustment = getKarpathyConvictionAdjustment(tone);
  const conviction = clamp(Math.round(baseConviction + karpathyAdjustment), 0, 100);

  return applyAdvisorySideStability(commodity, {
    bounded,
    conviction,
    baseConviction,
    karpathyAdjustment,
    automaticBounded,
    microAdjustedBounded,
    outcomeLearner: outcomeLearned.learner,
    micro,
    manualOverride: manualConviction,
    label,
    chipLabel,
    action,
    color,
    tone
  });
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
  const dateValue = getTransactionDate(value);
  const { day, minutes } = getEasternMarketParts(dateValue);
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayDate = formatEasternDate(dateValue);
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
  const nextSundayDate = formatEasternDate(opensToday ? dateValue : addDays(dateValue, (7 - day) % 7));
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
  const apiUrl = getHistoryApiUrl();
  return apiUrl ? `${apiUrl}/prices?lite=1` : "./prices.json";
}

function getStaticSnapshotUrl() {
  return "./prices.json";
}

function getPriceHistoryUrl(commodity = homeMarketCommodity, period = homeMarketPeriod) {
  const apiUrl = getHistoryApiUrl();
  if (!apiUrl) return "";
  return `${apiUrl}/price-history?commodity=${encodeURIComponent(commodity)}&period=${encodeURIComponent(period)}&lite=1`;
}

function hasUsableSnapshotPrices(data) {
  return Object.values(data?.prices || {}).some((snapshot) => {
    const price = Number(snapshot?.price);
    return snapshot?.ok && Number.isFinite(price) && price > 0;
  });
}

async function loadSnapshotPrices() {
  const now = Date.now();
  if (snapshotPricesPromise && now - snapshotPricesLoadedAt < SNAPSHOT_PRICE_REFRESH_MS) {
    return snapshotPricesPromise;
  }

  snapshotPricesLoadedAt = now;
  snapshotPricesPromise = fetch(getSnapshotUrl(), { cache: "default" })
    .then((response) => {
      if (!response.ok) throw new Error("snapshot unavailable");
      return response.json();
    })
    .then((data) => {
      if (!hasUsableSnapshotPrices(data)) throw new Error("snapshot has no usable prices");
      return data;
    })
    .catch(async (error) => {
      if (getSnapshotUrl().startsWith("./")) throw error;
      const response = await fetch(getStaticSnapshotUrl(), { cache: "default" });
      if (!response.ok) throw error;
      const data = await response.json();
      return {
        ...data,
        source: `${data.source || "static-price-snapshot"} fallback`
      };
    });

  return snapshotPricesPromise;
}

function getSignalSide(signal) {
  if (signal.tone === "long") return "long";
  if (signal.tone === "short") return "short";
  return null;
}

function getSignalExplanation(signal, tradePlan) {
  if (!signal || !tradePlan) return "Waiting for advisory data.";
  const side = getSignalSide(signal);
  const threshold = Number(tradePlan.entryThreshold);
  const conviction = Number(signal.conviction);
  const thresholdSource = tradePlan.entryThresholdSource || "trading";
  const thresholdText = Number.isFinite(threshold) ? threshold : "the required";
  const convictionText = Number.isFinite(conviction) ? conviction : "unknown";

  if (!tradePlan.priceReady) {
    return "Waiting for a fresh Coinbase price before the advisory can become tradable.";
  }
  if (signal.stabilityNote) {
    const rawSide = isActionableTone(signal.rawTone) ? formatSide(signal.rawTone).toLowerCase() : "the opposite side";
    return `Waiting because the advisory is unstable. The decision stays at Wait while the raw signal is flicking toward ${rawSide}; wait for the direction to hold before opening a paper trade.`;
  }
  if (!side) {
    return `Waiting because the advisory is ${signal.label || "Wait"} at ${convictionText} conviction; it needs a long or short call at ${thresholdText}+ before the paper trader can act.`;
  }
  if (Number.isFinite(conviction) && Number.isFinite(threshold) && conviction < threshold) {
    return `Waiting because the ${side} advisory is ${conviction}/${threshold}; the current ${thresholdSource} threshold requires ${threshold}+ conviction before opening a paper trade.`;
  }
  if (tradePlan.secondOpinionConsensus?.blocksEntry) {
    return `Waiting because the second-opinion consensus gate blocked this ${side} call: ${tradePlan.secondOpinionConsensus.detail}`;
  }
  if (tradePlan.markovMethod?.enabled && tradePlan.markovMethod.counterState) {
    return `Waiting because the Markov state is ${tradePlan.markovMethod.state}, which favors ${tradePlan.markovMethod.expectedSide}; counter-state entries need stronger reversal or breakdown confirmation.`;
  }
  if (tradePlan.regime?.enabled && tradePlan.regime.blocksWeakSetup) {
    return `Waiting because the ${tradePlan.regime.regime} regime marks this as a weak setup; edge is ${tradePlan.regime.edgePercent}% and volatility is ${tradePlan.regime.volatility.toFixed(2)} bps.`;
  }
  if (tradePlan.regime?.enabled && tradePlan.regime.highEdgeVolatilitySetup && tradePlan.regime.regime !== "trending") {
    return `${formatSide(side)} is tradable despite ${tradePlan.regime.regime} tape because edge is ${tradePlan.regime.edgePercent}% and volatility is ${tradePlan.regime.volatility.toFixed(2)} bps.`;
  }
  if (tradePlan.regime?.enabled && !tradePlan.regime.confirmationOk) {
    return `Waiting because ${tradePlan.regime.regime} confirmation is incomplete; the strategy requires trend, VWAP, momentum, and volatility to agree.`;
  }
  return `${formatSide(side)} is actionable: conviction ${convictionText}/${thresholdText} clears the current ${thresholdSource} threshold.`;
}

function getBaseRiskCapital() {
  return Math.max(0, paperBaseEquity * (paperRiskPct / 100));
}

function getMartingaleCapital(minTradeValue) {
  if (!Number.isFinite(minTradeValue) || minTradeValue <= 0) return null;
  return minTradeValue * (2 ** (martingaleStep - 1));
}

function getDirectionalEdgePercent(micro, side) {
  if (!micro?.ready) return 50;
  const probability = side === "short" ? micro.probabilityDown : micro.probabilityUp;
  return Math.round((Number(probability) || 0.5) * 100);
}

function getRegimeAssessment(signal, strategy = getCurrentUserStrategy()) {
  const micro = signal?.micro || {};
  const side = getSignalSide(signal);
  const edgePercent = getDirectionalEdgePercent(micro, side);
  const volatility = Number(micro.volatility) || 0;
  const vwapDistance = Math.abs(Number(micro.vwapDistance) || 0);
  const momentumAligned = side === "long"
    ? Boolean(micro.longTrigger || (Number(micro.ret10) > 0 && Number(micro.ret30) > 0 && Number(micro.vwapDistance) > 0))
    : side === "short"
      ? Boolean(micro.shortTrigger || (Number(micro.ret10) < 0 && Number(micro.ret30) < 0 && Number(micro.vwapDistance) < 0))
      : false;
  const edgeNearFlat = edgePercent < (Number(strategy.trendingMinEdgePercent) || DEFAULT_USER_STRATEGY.trendingMinEdgePercent);
  const lowVolatility = volatility < (Number(strategy.trendingMinVolatilityBps) || DEFAULT_USER_STRATEGY.trendingMinVolatilityBps);
  const choppy = !momentumAligned || vwapDistance < 0.8;
  const trending = micro.ready
    && momentumAligned
    && edgePercent >= strategy.trendingMinEdgePercent
    && volatility >= strategy.trendingMinVolatilityBps;
  const flat = !micro.ready || !side || edgeNearFlat || lowVolatility || choppy;
  const regime = trending ? "trending" : flat ? "flat" : "mixed";
  const highEdgeVolatilitySetup = Boolean(side)
    && edgePercent >= Math.max(65, Number(strategy.flatMinEdgePercent || DEFAULT_USER_STRATEGY.flatMinEdgePercent) + 8)
    && volatility >= Math.max(1.2, Number(strategy.flatMinVolatilityBps || DEFAULT_USER_STRATEGY.flatMinVolatilityBps) * 1.5);

  return {
    enabled: strategy.regimeAware !== false,
    regime,
    edgePercent,
    volatility,
    momentumAligned,
    highEdgeVolatilitySetup,
    maxMartingaleStep: regime === "trending" ? getCurrentMartingaleMaxStep() : strategy.flatMaxMartingaleSteps,
    sizeMultiplier: regime === "trending" ? 1 : strategy.flatSizeMultiplier,
    thresholdBoost: regime === "trending" ? 0 : strategy.flatThresholdBoost,
    blocksWeakSetup: regime !== "trending" && gradeSignal(signal, 1.2) === "C" && !highEdgeVolatilitySetup,
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

function getMarkovMethodAssessment(signal, strategy = getCurrentUserStrategy()) {
  const micro = signal?.micro || {};
  const threshold = Number(strategy.markovRegimeMoveBps) || DEFAULT_USER_STRATEGY.markovRegimeMoveBps;
  const recentMove = Number(micro.ret180) || Number(micro.ret60) || 0;
  const upEdge = Math.round((Number.isFinite(Number(micro.probabilityUp)) ? Number(micro.probabilityUp) : 0.5) * 100);
  const downEdge = Math.round((Number.isFinite(Number(micro.probabilityDown)) ? Number(micro.probabilityDown) : 0.5) * 100);
  const bull = Boolean(micro.ready && (recentMove >= threshold || (upEdge >= 58 && Number(micro.vwapDistance) > 0 && Number(micro.ret30) > 0)));
  const bear = Boolean(micro.ready && (recentMove <= -threshold || (downEdge >= 58 && Number(micro.vwapDistance) < 0 && Number(micro.ret30) < 0)));
  const state = bear && !bull ? "bear" : bull && !bear ? "bull" : "sideways";
  const expectedSide = state === "bear" ? "short" : state === "bull" ? "long" : null;
  const activeSide = getSignalSide(signal);
  const counterState = Boolean(expectedSide && activeSide && activeSide !== expectedSide);
  const sideways = state === "sideways";

  return {
    enabled: strategy.markovHedgeFundMethod === true,
    state,
    expectedSide,
    counterState,
    thresholdBoost: sideways ? Number(strategy.markovSidewaysThresholdBoost) || 0 : 0,
    sizeMultiplier: sideways ? Number(strategy.markovSidewaysSizeMultiplier) || 1 : 1,
    detail: `Markov state ${state}: recent move ${recentMove.toFixed(2)} bps, up edge ${upEdge}%, down edge ${downEdge}%.`
  };
}

function renderAdvisoryMarketStatus(status = getFuturesMarketStatus()) {
  if (!advisoryMarketStatusCardEl || !advisoryMarketStatusEl || !advisoryMarketDetailEl) return;
  advisoryMarketStatusCardEl.dataset.open = String(status.isOpen);
  advisoryMarketStatusEl.textContent = status.isOpen
    ? "Coinbase NOL market open"
    : `Coinbase NOL market closed - ${status.shortLabel}`;
  advisoryMarketDetailEl.textContent = `${status.detail} NOL futures trade Sunday-Friday, 6:00 PM-5:00 PM ET, with a daily 5:00-6:00 PM ET break.`;
}

function getEffectiveCommodityConfig(commodity, user = getCurrentUserProfile()) {
  const baseConfig = marketConfig[commodity] || {};
  const profileTerms = normalizeCommodityTradeTerms(user?.commodityTradeTerms?.[commodity], commodity);
  return {
    ...baseConfig,
    ...profileTerms
  };
}

function getActivePriceProductId(commodity) {
  const config = getEffectiveCommodityConfig(commodity);
  return String(config.productId || config.ticker || "").trim();
}

function getStoredPriceProductId(commodity) {
  return String(
    confirmedLivePriceProductIds.get(commodity)
      || latestPriceProductIds.get(commodity)
      || ""
  ).trim();
}

function isStoredPriceForActiveContract(commodity) {
  const activeProductId = getActivePriceProductId(commodity).toLowerCase();
  if (!activeProductId) return true;
  const storedProductId = getStoredPriceProductId(commodity).toLowerCase();
  return storedProductId === activeProductId;
}

function clearCommodityPriceCache(commodity) {
  latestPrices.delete(commodity);
  latestPriceTimes.delete(commodity);
  latestPriceSources.delete(commodity);
  latestPriceProductIds.delete(commodity);
  confirmedLivePrices.delete(commodity);
  confirmedLivePriceTimes.delete(commodity);
  confirmedLivePriceSources.delete(commodity);
  confirmedLivePriceProductIds.delete(commodity);
  productMinimums.delete(commodity);
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
  if (!isStoredPriceForActiveContract(commodity)) return false;
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

function getLastKnownMarketPrice(commodity) {
  if (!isStoredPriceForActiveContract(commodity)) return null;
  const price = confirmedLivePrices.has(commodity)
    ? confirmedLivePrices.get(commodity)
    : latestPrices.get(commodity);
  return Number.isFinite(Number(price)) && Number(price) > 0 ? Number(price) : null;
}

function getLastKnownMarketPriceTime(commodity) {
  if (!isStoredPriceForActiveContract(commodity)) return null;
  return confirmedLivePriceTimes.has(commodity) ? confirmedLivePriceTimes.get(commodity) : latestPriceTimes.get(commodity);
}

function getDisplayMarketPrice(commodity) {
  return getUsableMarketPrice(commodity) ?? getLastKnownMarketPrice(commodity);
}

function getDisplayMarketPriceTitle(commodity) {
  const updatedAt = getLastKnownMarketPriceTime(commodity);
  const updatedDate = updatedAt ? getTransactionDate(updatedAt) : null;
  if (isUsableMarketPrice(commodity)) return "Current Coinbase price, not a filled exit price.";
  if (updatedDate && Number.isFinite(updatedDate.getTime())) {
    return `Last known Coinbase price from ${formatPriceTime(updatedDate)}. Actual trade exits still require a fresh price.`;
  }
  return "Waiting for Coinbase price.";
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
  const productId = getActivePriceProductId(commodity);
  const now = new Date();
  rememberPriceTick(commodity, price, now);
  latestPrices.set(commodity, price);
  latestPriceTimes.set(commodity, now);
  latestPriceSources.set(commodity, source);
  latestPriceProductIds.set(commodity, productId);
  confirmedLivePrices.set(commodity, price);
  confirmedLivePriceTimes.set(commodity, now);
  confirmedLivePriceSources.set(commodity, source);
  confirmedLivePriceProductIds.set(commodity, productId);
  queueLivePricePaint(commodity);
}

function isBackendBackoffActive(syncAt) {
  return Number.isFinite(syncAt) && syncAt > Date.now();
}

function getBackendBackoffText(syncAt) {
  const seconds = Math.max(1, Math.ceil((syncAt - Date.now()) / 1000));
  const minutes = Math.ceil(seconds / 60);
  return `Backend offline; retrying in ${minutes} min`;
}

function clearCloudRuntimeLedgerState() {
  transactionHistory.length = 0;
  transactionHistoryLoadedFromBackend = false;
  paperLedgerSummaryRows = [];
  paperLedgerSummaryLoadedAt = 0;
  openPaperTrades.clear();
  pendingPaperActions.clear();
}

function purgeBrowserRuntimeStateForCloudMode() {
  if (!hasHistoryBackend() || !CLOUDFLARE_SOURCE_OF_TRUTH_REQUIRED) return;
  [
    PAPER_STATE_KEY,
    PAPER_DECISION_LOG_KEY,
    LIVE_TRADE_LEDGER_KEY
  ].forEach((key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      // Browser storage cleanup is best-effort; Cloudflare remains authoritative.
    }
  });
  paperDecisionLog.length = 0;
  liveTradeLedger.length = 0;
}

function requiresFreshCloudState() {
  return Boolean(hasHistoryBackend() && CLOUDFLARE_SOURCE_OF_TRUTH_REQUIRED && !isLocalMockBackendEnabled());
}

function hasFreshCloudTradingState() {
  return !requiresFreshCloudState() || (sharedSettingsLoadedFromBackend && transactionHistoryLoadedFromBackend);
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

function getKarpathyConvictionAdjustment(tone) {
  const side = getSignalSide({ tone });
  if (!side) return 0;

  const loop = getKarpathyLoop(side);
  if (loop.sampleCount < 3) return 0;

  let adjustment = 0;
  if (loop.winRate < 0.45) adjustment -= 4;
  else if (loop.winRate < 0.55) adjustment -= 2;
  else if (loop.winRate >= 0.7 && loop.avgPnl > 0) adjustment += 3;

  if (loop.avgPnl < 0) adjustment -= 2;
  else if (loop.avgPnl > 0) adjustment += 1;

  adjustment -= Math.min(loop.lossStreak, 4);
  return clamp(Math.round(adjustment), -10, 6);
}

function getPaperEntryThreshold(side) {
  const learnedThreshold = getKarpathyLoop(side).threshold;
  return advisoryScoreThresholdIsManual ? advisoryScoreThreshold : learnedThreshold;
}

function getKarpathyCoachThresholdBoost(signal, regime, strategy = getCurrentUserStrategy()) {
  if (!strategy.karpathyLoop) return 0;
  let boost = 0;
  if (strategy.karpathyFlatSelectivity && regime?.enabled && regime.regime !== "trending") boost += 3;
  if (strategy.karpathyConfirmationGate && regime?.enabled && !regime.momentumAligned) boost += 4;
  if (signal?.micro?.ready && strategy.karpathyConfirmationGate) {
    const side = getSignalSide(signal);
    const counterEdge = side === "long" ? signal.micro.probabilityDown : side === "short" ? signal.micro.probabilityUp : 0.5;
    if ((Number(counterEdge) || 0) > 0.52) boost += 2;
  }
  return boost;
}

function getPaperEntryThresholdSource() {
  return advisoryScoreThresholdIsManual ? "manual" : "Karpathy";
}

function gradeSignal(signal, rewardRisk) {
  if (signal.tone === "wait") return "C";
  if (signal.conviction >= 75 && rewardRisk >= 1.4) return "A";
  if (signal.conviction >= 60 && rewardRisk >= 1.15) return "B";
  return "C";
}

function getDriverSummary(baseSignals = {}, signal) {
  const drivers = [
    { label: "trend", value: Number(baseSignals.trend) || 0 },
    { label: "inventory pressure", value: Number(baseSignals.inventory) || 0 },
    { label: "US dollar pressure", value: Number(baseSignals.dollar) || 0 },
    { label: "supply risk", value: Number(baseSignals.geopolitics) || 0 },
    { label: "curve structure", value: Number(baseSignals.curve) || 0 }
  ].sort((a, b) => Math.abs(b.value) - Math.abs(a.value));

  const [primary, secondary] = drivers;
  const direction = signal.tone === "short" ? "short" : signal.tone === "long" ? "long" : "wait";
  return `${primary.label} and ${secondary.label} drive the ${direction} bias`;
}

function buildTradePlan(commodity, signal, baseSignals = readBaseSignals()) {
  const config = getEffectiveCommodityConfig(commodity);
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
  const reward = priceReady ? Math.abs(sellPrice - buyPrice) : null;
  const risk = priceReady ? Math.abs(buyPrice - stopLoss) : null;
  const rewardRisk = Number.isFinite(risk) && risk > 0 ? reward / risk : 0;
  const setupGrade = gradeSignal(signal, rewardRisk);
  const regime = getRegimeAssessment(signal, userStrategy);
  regime.blocksWeakSetup = regime.regime !== "trending" && setupGrade === "C" && !regime.highEdgeVolatilitySetup;
  const markovMethod = getMarkovMethodAssessment(signal, userStrategy);
  const riskPct = `${paperRiskPct.toFixed(2).replace(/\.?0+$/, "")}%`;
  const status = waitBias ? "Stand by" : "Armed";
  const learnedThreshold = getKarpathyLoop(getSignalSide(signal)).threshold;
  const baseEntryThreshold = getPaperEntryThreshold(getSignalSide(signal));
  const coachThresholdBoost = getKarpathyCoachThresholdBoost(signal, regime, userStrategy);
  const secondOpinionConsensus = getSecondOpinionConsensus(signal);
  const entryThreshold = clamp(baseEntryThreshold + (regime.enabled ? regime.thresholdBoost : 0) + coachThresholdBoost + secondOpinionConsensus.thresholdBoost + (markovMethod.enabled ? markovMethod.thresholdBoost : 0), 1, 100);
  const thresholdParts = [getPaperEntryThresholdSource()];
  if (regime.enabled && regime.thresholdBoost) thresholdParts.push("regime");
  if (coachThresholdBoost) thresholdParts.push("coach");
  if (secondOpinionConsensus.thresholdBoost) thresholdParts.push("2nd opinion");
  if (markovMethod.enabled && markovMethod.thresholdBoost) thresholdParts.push("Markov");
  const entryThresholdSource = thresholdParts.join(" + ");
  const entryLabel = shortBias ? "Entry (sell short)" : longBias ? "Entry (buy)" : "Entry";
  const targetLabel = shortBias ? "Cover target" : longBias ? "Profit target" : "Profit target";
  const longMargin = getMarginRequirement(config, "long", livePrice);
  const shortMargin = getMarginRequirement(config, "short", livePrice);
  const minTradeValue = tradeSide === "short" ? shortMargin : longMargin;
  const feePerContractSide = getFeePerContractSide(config);
  const rawNextCapital = getMartingaleCapital(minTradeValue);
  const effectiveStep = regime.enabled ? Math.min(martingaleStep, regime.maxMartingaleStep) : martingaleStep;
  const sizeMultiplier = (regime.enabled ? regime.sizeMultiplier : 1) * (markovMethod.enabled ? markovMethod.sizeMultiplier : 1);
  const nextCapital = Number.isFinite(rawNextCapital)
    ? rawNextCapital * sizeMultiplier
    : rawNextCapital;
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
  const adoptedAdvisorySkills = getAdoptedSkillSummary("advisory", 3);
  const skillText = userStrategy.skillsAccess
    ? ` Use ${userStrategy.skillFocus || "selected skills"} as supporting context.${adoptedAdvisorySkills ? ` Adopted skills: ${adoptedAdvisorySkills}` : ""}`
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
    baseEntryThreshold,
    coachThresholdBoost,
    secondOpinionConsensus,
    regime,
    markovMethod,
    entryThreshold,
    setupGrade,
    rewardRisk: `${rewardRisk.toFixed(2)}x`,
    keyDriver: getDriverSummary(baseSignals, signal),
    riskPct,
    size: Number.isFinite(plannedContracts) ? `${plannedContracts} contract${plannedContracts === 1 ? "" : "s"}` : UNAVAILABLE_TEXT,
    status,
    steps: [
      `${strategyName}: auto-enter long or short when conviction clears the ${entryThresholdSource} trading threshold of ${entryThreshold}. Learned Karpathy recommendation is ${learnedThreshold}.`,
      `${secondOpinionConsensus.label}: ${secondOpinionConsensus.detail}`,
      `Regime is ${regime.regime}: edge ${regime.edgePercent}%, volatility ${regime.volatility.toFixed(2)} bps, ${regime.momentumAligned ? "momentum aligned" : "confirmation incomplete"}.`,
      markovMethod.enabled ? `${markovMethod.detail} ${markovMethod.counterState ? "Counter-state entries need reversal or breakdown confirmation." : "State agrees with the current trade filter."}` : "Markov Hedge Fund Method is off for this user.",
      `Commit Martingale step ${effectiveStep} of ${regime.enabled ? regime.maxMartingaleStep : maxMartingaleStep}, currently ${formatMoney(nextCapital)}, for ${Number.isFinite(plannedContracts) ? plannedContracts : UNAVAILABLE_TEXT} contract${plannedContracts === 1 ? "" : "s"} of ${contractMultiplier} units each.`,
      `Model ${formatMoney(notionalValue)} notional exposure, subtract about ${formatMoney(estimatedRoundTripFees)} estimated round-trip fees, and use ${marginSource.toLowerCase()} for long/short minimums.`,
      `Close at ${formatPrice(targetPrice)} target or ${formatPrice(stopLoss)} stop, then let the ${loopName} adjust the next trade.${skillText}${memoryText}`
    ]
  };
}

async function refreshCoinbasePrice(commodity, options = {}) {
  const runCloseSweep = options.runCloseSweep !== false;
  const forceRefresh = options.force === true;
  const config = getEffectiveCommodityConfig(commodity);
  if (!config) return;

  if (!isDirectCoinbaseFeedEnabled()) {
    await refreshSnapshotPrice(commodity);
    if (runCloseSweep) queuePaperSweep({ immediate: forceRefresh });
    return;
  }

  const activeProductId = String(config.productId || config.ticker || "").trim();
  const socketProductMatches = activePriceSocketProductId === activeProductId;
  if (!isStoredPriceForActiveContract(commodity)) {
    clearCommodityPriceCache(commodity);
    closeCoinbaseWebSocket();
  }
  const lastWebSocketUpdate = latestPriceTimes.get(commodity);
  const webSocketFresh = lastWebSocketUpdate
    && Date.now() - getTransactionDate(lastWebSocketUpdate).getTime() <= COINBASE_WS_STALE_MS;

  if (
    !forceRefresh &&
    latestPriceSources.get(commodity) === "Coinbase WebSocket" &&
    activePriceSocketCommodity === commodity &&
    socketProductMatches &&
    activePriceSocket?.readyState === WebSocket.OPEN &&
    webSocketFresh
  ) {
    return;
  }

  if (
    latestPriceSources.get(commodity) === "Coinbase WebSocket" &&
    activePriceSocketCommodity === commodity &&
    activePriceSocket?.readyState === WebSocket.OPEN &&
    (!webSocketFresh || !socketProductMatches)
  ) {
    latestPriceSources.set(commodity, "Coinbase WebSocket stale");
    closeCoinbaseWebSocket();
    connectCoinbaseWebSocket(commodity);
  }

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
      if (runCloseSweep) queuePaperSweep({ immediate: forceRefresh });
      if (commoditySelect.value === commodity) queueSignalRecalculation("coinbase-rest", { immediate: forceRefresh });
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
  activePriceSocketProductId = "";
}

function connectCoinbaseWebSocket(commodity) {
  if (!isDirectCoinbaseFeedEnabled()) {
    closeCoinbaseWebSocket();
    return;
  }

  const config = getEffectiveCommodityConfig(commodity);

  if (!config || config.productType !== "Coinbase futures contract") {
    closeCoinbaseWebSocket();
    return;
  }
  const productId = String(config.productId || config.ticker || "").trim();

  if (
    activePriceSocket &&
    activePriceSocketCommodity === commodity &&
    activePriceSocketProductId === productId &&
    [WebSocket.CONNECTING, WebSocket.OPEN].includes(activePriceSocket.readyState)
  ) {
    return;
  }

  closeCoinbaseWebSocket();
  activePriceSocketCommodity = commodity;
  activePriceSocketProductId = productId;

  try {
    const socket = new WebSocket(COINBASE_WS_URL);
    activePriceSocket = socket;

    socket.onopen = () => {
      const subscriptions = [
        { type: "subscribe", channel: "ticker", product_ids: [productId] },
        { type: "subscribe", channel: "heartbeats", product_ids: [productId] }
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
      if (activePriceSocketProductId !== productId) return;

      rememberConfirmedLivePrice(commodity, socketPrice, "Coinbase WebSocket");
      refreshCoinbaseProductDetails(commodity, socketPrice);
      queuePaperSweep();

      if (commoditySelect.value === commodity) queueSignalRecalculation("coinbase-websocket");
    };

    socket.onerror = () => {
      refreshCoinbasePrice(commodity);
    };

    socket.onclose = () => {
      if (activePriceSocket !== socket) return;
      activePriceSocket = null;
      activePriceSocketProductId = "";

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
    const activeProductId = getActivePriceProductId(commodity).toLowerCase();
    const data = await loadSnapshotPrices();
    const snapshot = data?.prices?.[commodity];
    const snapshotPrice = Number(snapshot?.price);
    const snapshotProductId = String(snapshot?.productId || snapshot?.ticker || "").toLowerCase();

    if (!Number.isFinite(snapshotPrice) || snapshotPrice <= 0) {
      throw new Error("snapshot price unavailable");
    }
    if (activeProductId && snapshotProductId !== activeProductId) {
      throw new Error("snapshot contract does not match active contract");
    }

    latestPrices.set(commodity, snapshotPrice);
    const snapshotTime = new Date(snapshot.fetchedAt || data.generatedAt || Date.now());
    rememberPriceTick(commodity, snapshotPrice, snapshotTime);
    latestPriceTimes.set(commodity, snapshotTime);
    latestPriceSources.set(commodity, snapshot.ok ? "Cloudflare snapshot" : "Unavailable snapshot");
    latestPriceProductIds.set(commodity, snapshot.productId || snapshot.ticker || getActivePriceProductId(commodity));
    confirmedLivePriceProductIds.set(commodity, snapshot.productId || snapshot.ticker || getActivePriceProductId(commodity));
    queueLivePricePaint(commodity, { immediate: true });

    const minimumTradeValue = Number(snapshot.minimumTradeValue);
    if (Number.isFinite(minimumTradeValue) && minimumTradeValue > 0) {
      productMinimums.set(commodity, minimumTradeValue);
    }

    if (commoditySelect.value === commodity) queueSignalRecalculation("cloudflare-snapshot");
  } catch (error) {
    if (!latestPrices.has(commodity)) {
      latestPriceTimes.delete(commodity);
      latestPriceSources.delete(commodity);
      if (commoditySelect.value === commodity) queueSignalRecalculation("snapshot-error", { immediate: true });
    }
  }
}

async function refreshCoinbaseProductDetails(commodity, livePrice) {
  if (productMinimums.has(commodity)) return;

  const config = getEffectiveCommodityConfig(commodity);
  if (!config) return;

  try {
    const response = await fetch(`https://api.coinbase.com/api/v3/brokerage/products/${config.productId}`);
    if (!response.ok) throw new Error("product unavailable");
    const data = await response.json();
    const minimumTradeValue = getCoinbaseMinimumTradeValue(data, livePrice);
    productMinimums.set(commodity, minimumTradeValue);
    if (commoditySelect.value === commodity) queueSignalRecalculation("product-details");
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
  const text = String(contract || "").trim().toLowerCase();
  if (!text) return null;
  const direct = commodities.find(({ id }) => {
    const config = marketConfig[id] || {};
    return [config.ticker, config.productId].some((value) => String(value || "").toLowerCase() === text);
  });
  if (direct) return direct.id;
  if (text.startsWith("nol") || text.includes("oil")) return "oil";
  if (text.includes("natural-gas") || text.includes("natgas") || text.includes("ng reference")) return "natural-gas";
  if (text.includes("gold")) return "gold";
  if (text.includes("silver")) return "silver";
  if (text.includes("copper")) return "copper";
  if (text.includes("platinum")) return "platinum";
  return null;
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
  const tradeMode = String(entry.tradeMode || entry.trade_mode || PAPER_TRADE_MODE).toUpperCase() === REAL_TRADE_MODE
    ? REAL_TRADE_MODE
    : PAPER_TRADE_MODE;

  return {
    ...entry,
    tradeMode,
    commodity,
    commodityName: entry.commodityName || commodities.find(({ id }) => id === commodity)?.name,
    userEmail,
    time,
    openedAt,
    closedAt
  };
}

function isPaperTradeEntry(entry) {
  return String(entry?.tradeMode || PAPER_TRADE_MODE).toUpperCase() !== REAL_TRADE_MODE;
}

function isRealTradeEntry(entry) {
  return String(entry?.tradeMode || "").toUpperCase() === REAL_TRADE_MODE;
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
  const action = entry.action || "OPEN";
  const entryPrice = parseOptionalNumber(entry.entryPrice ?? entry.price);
  const exitPrice = parseOptionalNumber(entry.exitPrice ?? entry.actualExit);
  const tradeValue = parseOptionalNumber(entry.tradeValue ?? entry.capital ?? entry.committed);
  const pnl = parseOptionalNumber(entry.netPnl ?? entry.pnl) || 0;

  return {
    id: entry.id || `live-${Date.now()}`,
    time,
    tradeMode: REAL_TRADE_MODE,
    userEmail: normalizeEmail(entry.userEmail || getCurrentLedgerEmail()),
    userName: entry.userName || getCurrentUserProfile()?.name || "",
    commodity,
    commodityName: entry.commodityName || getCommodityName(commodity),
    contract: entry.contract || marketConfig[commodity]?.ticker || "",
    orderId: entry.orderId || "",
    side: entry.side === "short" ? "short" : "long",
    action,
    orderType: entry.orderType || "market",
    contracts: parseOptionalNumber(entry.contracts),
    tradeValue,
    entryPrice,
    price: parseOptionalNumber(entry.price) || entryPrice || exitPrice,
    exitPrice,
    limitPrice: parseOptionalNumber(entry.limitPrice),
    stopPrice: parseOptionalNumber(entry.stopPrice),
    targetPrice: parseOptionalNumber(entry.targetPrice),
    timeInForce: entry.timeInForce || "GTC",
    status: entry.status || "Submitted",
    fees: parseOptionalNumber(entry.fees),
    netPnl: pnl,
    pnl,
    capital: tradeValue,
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
  loadSharedLiveTradeLedger();
}

async function loadSharedLiveTradeLedger() {
  if (!hasHistoryBackend()) {
    if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = "Real ledger local only; backend URL unavailable";
    return false;
  }

  try {
    if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = "Loading real ledger from D1";
    const response = await fetchWithTimeout(`${getActualTradesUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("real ledger unavailable");
    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    liveTradeLedger.splice(0, liveTradeLedger.length, ...entries.map(normalizeLiveTradeEntry).filter(isRealTradeEntry));
    window.localStorage.setItem(LIVE_TRADE_LEDGER_KEY, JSON.stringify(liveTradeLedger));
    renderLiveTradeLedger();
    if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = `D1 real ledger loaded ${liveTradeLedger.length} row${liveTradeLedger.length === 1 ? "" : "s"}`;
    return true;
  } catch (error) {
    if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = "D1 real ledger unavailable; showing local records";
    return false;
  }
}

async function saveLiveTradeLedger() {
  window.localStorage.setItem(LIVE_TRADE_LEDGER_KEY, JSON.stringify(liveTradeLedger));
  if (!hasHistoryBackend()) {
    if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = `Local real ledger saved ${liveTradeLedger.length} rows`;
    return false;
  }

  try {
    if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = "Saving real ledger to D1";
    const response = await fetchWithTimeout(getActualTradesUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        generatedAt: new Date().toISOString(),
        source: "cloudflare-d1-real-trade-ledger",
        tradeMode: REAL_TRADE_MODE,
        transactions: liveTradeLedger.map((trade) => ({ ...trade, tradeMode: REAL_TRADE_MODE }))
      })
    });
    if (!response.ok) throw new Error("real ledger save failed");
    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    liveTradeLedger.splice(0, liveTradeLedger.length, ...entries.map(normalizeLiveTradeEntry).filter(isRealTradeEntry));
    window.localStorage.setItem(LIVE_TRADE_LEDGER_KEY, JSON.stringify(liveTradeLedger));
    renderLiveTradeLedger();
    if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = `D1 real ledger saved ${liveTradeLedger.length} row${liveTradeLedger.length === 1 ? "" : "s"}`;
    return true;
  } catch (error) {
    if (liveLedgerStatusEl) liveLedgerStatusEl.textContent = "D1 save failed; real ledger kept local";
    return false;
  }
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

function isLiveClosingTrade(trade) {
  const action = String(trade?.action || "").toUpperCase();
  return action.includes("CLOSE") || action.includes("EXIT") || action.includes("COVER") || Number(trade?.pnl) !== 0;
}

function getScopedLiveTradeEntries() {
  return liveTradeLedger.filter((trade) => trade.userEmail === getCurrentLedgerEmail());
}

function summarizePnlBySide(entries, getPnl) {
  return entries.reduce((summary, entry) => {
    const side = String(entry.side || "").toLowerCase() === "short" ? "short" : "long";
    summary[side].count += 1;
    summary[side].pnl += Number(getPnl(entry)) || 0;
    return summary;
  }, {
    long: { count: 0, pnl: 0 },
    short: { count: 0, pnl: 0 }
  });
}

function renderPaperRealComparison() {
  if (!comparePaperPnlEl || !compareRealPnlEl || !compareDifferenceEl || !compareRecordsEl || !paperRealBreakdownEl) return;

  const paperClosed = getUserScopedTransactions().filter(isClosingTransaction);
  const realClosed = getScopedLiveTradeEntries().filter(isLiveClosingTrade);
  const paperPnl = paperClosed.reduce((total, entry) => total + getDisplayPnl(entry), 0);
  const realPnl = realClosed.reduce((total, trade) => total + (Number(trade.pnl) || 0), 0);
  const difference = realPnl - paperPnl;
  const paperBySide = summarizePnlBySide(paperClosed, getDisplayPnl);
  const realBySide = summarizePnlBySide(realClosed, (trade) => Number(trade.pnl) || 0);

  comparePaperPnlEl.textContent = formatSignedMoney(paperPnl);
  compareRealPnlEl.textContent = formatSignedMoney(realPnl);
  compareDifferenceEl.textContent = formatSignedMoney(difference);
  compareRecordsEl.textContent = `${paperClosed.length} P / ${realClosed.length} R`;

  [
    [comparePaperPnlEl, paperPnl],
    [compareRealPnlEl, realPnl],
    [compareDifferenceEl, difference]
  ].forEach(([el, value]) => {
    el.classList.toggle("positive", value > 0);
    el.classList.toggle("negative", value < 0);
  });

  paperRealBreakdownEl.innerHTML = ["long", "short"].map((side) => {
    const paper = paperBySide[side];
    const real = realBySide[side];
    return `
      <div class="edge-breakdown-row">
        <span>${side === "long" ? "Long" : "Short"}</span>
        <strong>${formatSignedMoney(paper.pnl)} P / ${formatSignedMoney(real.pnl)} R</strong>
        <span>${paper.count} paper close${paper.count === 1 ? "" : "s"} / ${real.count} real close${real.count === 1 ? "" : "s"}</span>
      </div>
    `;
  }).join("");
}

function renderLiveTradeLedger() {
  if (!liveTradeHistoryEl) {
    renderPaperRealComparison();
    return;
  }

  renderUserContextWithAvatar(liveUserContextEl, getLiveUserContextText());
  liveTradeHistoryEl.innerHTML = "";
  const scopedTrades = getScopedLiveTradeEntries();
  const totalPl = scopedTrades.reduce((total, trade) => total + (Number(trade.pnl) || 0), 0);
  const committed = scopedTrades.reduce((total, trade) => total + (Number(trade.tradeValue) || 0), 0);
  renderPaperRealComparison();

  renderPnlWithCapital(liveTotalPlEl, totalPl);
  renderPnlWithCapital(liveFilteredPlEl, totalPl);
  if (liveTradeCountEl) liveTradeCountEl.textContent = `${scopedTrades.length} row${scopedTrades.length === 1 ? "" : "s"}`;
  if (liveTradeSummaryEl) {
    liveTradeSummaryEl.textContent = scopedTrades.length
      ? `Showing ${scopedTrades.length} live trade record${scopedTrades.length === 1 ? "" : "s"} for ${getCurrentUserProfile()?.name || getCurrentLedgerEmail()}. Committed ${formatMoney(committed)}.`
      : "No real trades recorded. Real records use the shared D1 ledger with an R tag.";
  }
  if (liveLedgerStatusEl && !/(saved|D1|Loading|unavailable)/i.test(liveLedgerStatusEl.textContent)) {
    liveLedgerStatusEl.textContent = "Real ledger ready";
  }

  if (!scopedTrades.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    liveTradeHistoryEl.append(buildQueuedLiveTradeRow());
    cell.colSpan = 10;
    cell.textContent = "No real trades recorded yet. Use the Coinbase mirror entry form above to save an R-tagged transaction.";
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

async function addLiveTradeFromForm(event) {
  event.preventDefault();
  const formData = new FormData(liveTradeFormEl);
  const commodity = formData.get("commodity") || commoditySelect.value || "oil";
  const action = String(formData.get("action") || "").trim();
  const side = String(formData.get("side") || "").trim();
  const contract = String(formData.get("contract") || marketConfig[commodity]?.ticker || "").trim();
  const contracts = Number(formData.get("contracts"));
  const entryPrice = Number(formData.get("entryPrice"));
  const limitPrice = Number(formData.get("limitPrice"));
  const exitPrice = Number(formData.get("exitPrice"));
  const targetPrice = Number(formData.get("targetPrice"));
  const stopPrice = Number(formData.get("stopPrice"));
  const isClose = /close|cover|exit/i.test(action);
  const hasTradePrice = isClose
    ? Number.isFinite(exitPrice) || Number.isFinite(entryPrice) || Number.isFinite(limitPrice)
    : Number.isFinite(entryPrice) || Number.isFinite(limitPrice);

  if (!contract || !side || !action || !Number.isFinite(contracts) || contracts <= 0 || !hasTradePrice) {
    if (liveLedgerStatusEl) {
      liveLedgerStatusEl.textContent = "Real trade needs contract, side, action, contracts, and an entry/exit price";
    }
    return;
  }
  if (!isClose && (!Number.isFinite(targetPrice) || !Number.isFinite(stopPrice))) {
    if (liveLedgerStatusEl) {
      liveLedgerStatusEl.textContent = "Opening real trades need target and stop prices";
    }
    return;
  }

  const trade = normalizeLiveTradeEntry({
    id: `live-${Date.now()}`,
    time: new Date().toISOString(),
    userEmail: getCurrentLedgerEmail(),
    userName: getCurrentUserProfile()?.name || "",
    commodity,
    commodityName: getCommodityName(commodity),
    contract,
    orderId: String(formData.get("orderId") || "").trim(),
    side,
    action,
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
  renderLiveTradeLedger();
  await saveLiveTradeLedger();
  liveTradeFormEl.reset();
  const contractInput = document.querySelector("#live-trade-contract");
  if (contractInput) contractInput.value = marketConfig[commoditySelect.value]?.ticker || "";
}

function getUserScopedTransactions() {
  const source = (transactionHistory.length ? transactionHistory : getBundledTransactionEntries()).filter(isPaperTradeEntry);
  const deduped = transactionHistoryLoadedFromBackend
    ? source.map(normalizeTransactionEntry)
    : getDedupedPaperCloseEntries(source);
  const userScoped = hasCurrentUserProfile()
    ? deduped.filter((entry) => isTransactionForCurrentUser(entry))
    : deduped;

  return userScoped.filter((entry) => !entry.commodity || userCanTradeCommodity(entry.commodity));
}

function getAllTransactionsForLifecycleChecks() {
  const source = (transactionHistory.length ? transactionHistory : getBundledTransactionEntries()).filter(isPaperTradeEntry);
  return transactionHistoryLoadedFromBackend
    ? source.map(normalizeTransactionEntry)
    : getDedupedPaperCloseEntries(source);
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

function isLocalMockBackendEnabled() {
  return new URLSearchParams(window.location.search).get(LOCAL_MOCK_BACKEND_PARAM) === "1";
}

async function loadLocalMockTransactionHistory() {
  try {
    sharedHistoryStatusEl.textContent = "Loading mock backend ledger";
    const response = await fetchWithTimeout(`${LOCAL_MOCK_BACKEND_LEDGER_URL}?ts=${Date.now()}`, { cache: "no-store" }, 3000);
    if (!response.ok) throw new Error("mock ledger unavailable");

    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    replaceTransactionHistory(entries);
    reconcilePaperStateFromHistory();
    backendHistoryReady = true;
    transactionHistoryLoadedFromBackend = false;
    sharedHistoryStatusEl.textContent = `Mock backend loaded ${entries.length} row${entries.length === 1 ? "" : "s"}`;
    calculateSignal();
    return true;
  } catch (error) {
    sharedHistoryStatusEl.textContent = "Mock backend unavailable";
    return false;
  }
}

function getRawPaperLedgerEntries() {
  const source = (transactionHistory.length ? transactionHistory : getBundledTransactionEntries()).filter(isPaperTradeEntry);
  return source.map(normalizeTransactionEntry);
}

function getDisplayTransactionSource() {
  const scopedEntries = getUserScopedTransactions();
  if (scopedEntries.length) return scopedEntries.slice();

  return getRawPaperLedgerEntries().slice();
}

async function loadBundledTransactionHistory() {
  if (hasHistoryBackend()) {
    sharedHistoryStatusEl.textContent = "Backend ledger is source of truth";
    return false;
  }

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
  const modePrefix = isRealTradeEntry(entry) ? `${REAL_TRADE_MODE}|` : "";

  return [
    `${modePrefix}${entry.tradeId || entry.id || "trade"}`,
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
  dedupeDuplicatePaperCloses();
  rebuildPaperStateFromHistory();

  localOpenTrades.forEach((trade, commodity) => {
    if (!trade || isPaperTradeClosedInLedger(trade)) return;
    const alreadyActive = Array.from(openPaperTrades.values()).some((activeTrade) => {
      return samePaperTradeIdentity(activeTrade, trade);
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

  entries.map(normalizeTransactionEntry).filter(isPaperTradeEntry).forEach((entry) => {
    const sharedKey = getTransactionKey(entry);
    if (existing.has(sharedKey)) return;

    transactionHistory.push({ ...entry, sharedKey });
    existing.set(sharedKey, entry);
    added += 1;
  });

  if (added) {
    sortTransactionHistory();
    dedupeDuplicatePaperCloses();
    if (persist) savePaperState();
  }

  return added;
}

function getMergedTransactionEntries(incomingEntries = []) {
  const byKey = new Map();

  [...incomingEntries, ...transactionHistory].map(normalizeTransactionEntry).filter(isPaperTradeEntry).forEach((entry) => {
    const sharedKey = getTransactionKey(entry);
    byKey.set(sharedKey, { ...entry, sharedKey });
  });

  return getDedupedPaperCloseEntries(Array.from(byKey.values()))
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

function getPaperTradeId(entry = {}) {
  return entry.tradeId || entry.id || "";
}

function getTradeIdentityKey(entry) {
  const tradeId = getPaperTradeId(entry);
  if (!tradeId) return "";
  const openedAt = entry?.openedAt ? getTransactionDate(entry.openedAt) : null;
  const openedAtKey = openedAt && !Number.isNaN(openedAt.getTime()) ? openedAt.toISOString() : "";
  return openedAtKey
    ? `${tradeId}|${openedAtKey}`
    : `${normalizeEmail(entry.userEmail || LEGACY_LEDGER_USER_EMAIL)}|${tradeId}`;
}

function getTradeIdentityKeyForTrade(trade) {
  const tradeId = getPaperTradeId(trade);
  if (!tradeId) return "";
  const openedAt = trade?.openedAt ? getTransactionDate(trade.openedAt) : null;
  const openedAtKey = openedAt && !Number.isNaN(openedAt.getTime()) ? openedAt.toISOString() : "";
  return openedAtKey
    ? `${tradeId}|${openedAtKey}`
    : `${normalizeEmail(trade.userEmail || getCurrentLedgerEmail())}|${tradeId}`;
}

function getOpenTradeIdentityKey(trade) {
  return getTradeIdentityKeyForTrade(trade) || getTradeLifecycleKey({
    userEmail: trade?.userEmail || getCurrentLedgerEmail(),
    commodity: trade?.commodity,
    contract: trade?.contract,
    side: trade?.side,
    step: trade?.martingaleStep || trade?.step
  });
}

function getOpenTimestamp(entry) {
  const openedAt = getTransactionDate(entry?.openedAt || entry?.time);
  return Number.isNaN(openedAt.getTime()) ? null : openedAt.getTime();
}

function sameOpenTimestamp(a, b, toleranceMs = 2000) {
  const aTime = getOpenTimestamp(a);
  const bTime = getOpenTimestamp(b);
  return aTime !== null && bTime !== null && Math.abs(aTime - bTime) <= toleranceMs;
}

function samePaperTradeLifecycle(a, b) {
  if (!a || !b) return false;
  return a.commodity === b.commodity
    && a.contract === b.contract
    && a.side === b.side
    && Number(a.step || a.martingaleStep || 1) === Number(b.step || b.martingaleStep || 1);
}

function samePaperTradeAccount(a, b) {
  return normalizeEmail(a?.userEmail || a?.profileEmail || a?.accountEmail || LEGACY_LEDGER_USER_EMAIL)
    === normalizeEmail(b?.userEmail || b?.profileEmail || b?.accountEmail || LEGACY_LEDGER_USER_EMAIL);
}

function samePaperTradePosition(a, b) {
  if (!a || !b) return false;
  return samePaperTradeAccount(a, b)
    && a.commodity === b.commodity
    && a.side === b.side
    && Number(a.step || a.martingaleStep || 1) === Number(b.step || b.martingaleStep || 1);
}

function samePaperTradeIdentity(a, b) {
  if (!a || !b) return false;

  const aIdentity = getTradeIdentityKey(a) || getTradeIdentityKeyForTrade(a);
  const bIdentity = getTradeIdentityKey(b) || getTradeIdentityKeyForTrade(b);
  if (aIdentity && bIdentity && aIdentity === bIdentity) return true;

  const aTradeId = getPaperTradeId(a);
  const bTradeId = getPaperTradeId(b);
  if (aTradeId && bTradeId && String(aTradeId) === String(bTradeId)) return true;

  return samePaperTradeLifecycle(a, b) && sameOpenTimestamp(a, b);
}

function closingEntryMatchesOpenTrade(closeEntry, openEntry) {
  if (samePaperTradeIdentity(closeEntry, openEntry)) return true;
  if (!isClosingTransaction(closeEntry) || !isOpeningTransaction(openEntry)) return false;
  const closeTradeId = String(getPaperTradeId(closeEntry) || "");
  const openTradeId = String(getPaperTradeId(openEntry) || "");
  if (closeTradeId && openTradeId && closeTradeId !== openTradeId) return false;
  const closeOpenedAt = closeEntry.openedAt ? getTransactionDate(closeEntry.openedAt).getTime() : 0;
  const openOpenedAt = openEntry.openedAt ? getTransactionDate(openEntry.openedAt).getTime() : 0;
  if (closeOpenedAt && openOpenedAt && closeOpenedAt !== openOpenedAt) return false;
  if (!samePaperTradePosition(closeEntry, openEntry)) return false;
  const closeTime = getTransactionDate(closeEntry.closedAt || closeEntry.time).getTime();
  const openTime = getTransactionDate(openEntry.openedAt || openEntry.time).getTime();
  return Number.isFinite(closeTime) && Number.isFinite(openTime) && closeTime >= openTime;
}

function closingEntryMatchesActiveTrade(closeEntry, activeTrade) {
  if (samePaperTradeIdentity(closeEntry, activeTrade)) return true;
  if (!isClosingTransaction(closeEntry) || !activeTrade) return false;
  const closeTradeId = String(getPaperTradeId(closeEntry) || "");
  const activeTradeId = String(getPaperTradeId(activeTrade) || "");
  if (closeTradeId && activeTradeId && closeTradeId !== activeTradeId) return false;
  const closeOpenedAt = closeEntry.openedAt ? getTransactionDate(closeEntry.openedAt).getTime() : 0;
  const activeOpenedAt = activeTrade.openedAt ? getTransactionDate(activeTrade.openedAt).getTime() : 0;
  if (closeOpenedAt && activeOpenedAt && closeOpenedAt !== activeOpenedAt) return false;
  if (!samePaperTradePosition(closeEntry, activeTrade)) return false;
  if (closeEntry.contract && activeTrade.contract && closeEntry.contract !== activeTrade.contract) return false;
  const closeTime = getTransactionDate(closeEntry.closedAt || closeEntry.time).getTime();
  const openTime = getTransactionDate(activeTrade.openedAt || activeTrade.time).getTime();
  return Number.isFinite(closeTime) && Number.isFinite(openTime) && closeTime >= openTime;
}

function getPaperCloseDedupeKey(entry) {
  const identityKey = getTradeIdentityKey(entry);
  if (identityKey) return identityKey;

  return [
    getTradeLifecycleKey(entry),
    getTransactionDate(entry.openedAt || entry.time).toISOString()
  ].join("|");
}

function getDedupedPaperCloseEntries(entries) {
  const seenCloseKeys = new Set();

  return entries
    .map(normalizeTransactionEntry)
    .sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time))
    .filter((entry) => {
      if (!isClosingTransaction(entry)) return true;

      const closeKey = getPaperCloseDedupeKey(entry);
      if (seenCloseKeys.has(closeKey)) return false;

      seenCloseKeys.add(closeKey);
      return true;
    })
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));
}

function dedupeDuplicatePaperCloses() {
  if (!transactionHistory.length) return;
  const before = transactionHistory.length;
  const deduped = getDedupedPaperCloseEntries(transactionHistory);
  if (deduped.length === before) return;

  transactionHistory.length = 0;
  transactionHistory.push(...deduped);
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
    userEmail: entry.userEmail || LEGACY_LEDGER_USER_EMAIL,
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
  // Walk ALL users' transactions chronologically so that a close recorded by
  // any browser correctly removes the trade from the active set. Without this,
  // each browser is blind to other browsers' closes and re-fires duplicate
  // close orders for the same trade.
  const chronological = getAllTransactionsForLifecycleChecks().sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time));
  let latestClosed = null;

  chronological.forEach((entry) => {
    const identityKey = getTradeIdentityKey(entry);
    const lifecycleKey = getTradeLifecycleKey(entry);
    const key = identityKey || lifecycleKey;
    if (isOpeningTransaction(entry)) {
      // Only the current user's opens belong in this browser's active set.
      if (!isTransactionForCurrentUser(entry)) return;
      if (entry.commodity && !userCanTradeCommodity(entry.commodity)) return;
      activeTrades.set(key, tradeFromOpeningEntry(entry));
      return;
    }

    if (isClosingTransaction(entry)) {
      if (identityKey) activeTrades.delete(identityKey);
      Array.from(activeTrades.entries()).forEach(([activeKey, activeTrade]) => {
        if (closingEntryMatchesActiveTrade(entry, activeTrade)) activeTrades.delete(activeKey);
      });
      // Only count the current user's closes for martingale step computation.
      if (isTransactionForCurrentUser(entry)) latestClosed = entry;
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
  const openedAt = getTransactionDate(trade.openedAt || trade.time);

  // Look across ALL users' transactions, not just the current user's. A close
  // recorded by any browser is authoritative — otherwise concurrent browsers
  // race to issue duplicate close orders for the same trade (zombie loop).
  return getAllTransactionsForLifecycleChecks().some((entry) => {
    if (!isClosingTransaction(entry)) return false;
    if (!samePaperTradeIdentity(entry, trade)) return false;

    const closedAt = getTransactionDate(entry.closedAt || entry.time);
    return !Number.isNaN(closedAt.getTime())
      && (Number.isNaN(openedAt.getTime()) || closedAt >= openedAt);
  });
}

function hasAnyLedgerClosingTransactionForTrade(trade) {
  if (!trade) return false;
  const openedAt = getTransactionDate(trade.openedAt || trade.time);

  return getRawPaperLedgerEntries().some((entry) => {
    if (!isClosingTransaction(entry)) return false;
    if (!samePaperTradeIdentity(entry, trade)) return false;

    const closedAt = getTransactionDate(entry.closedAt || entry.time);
    return !Number.isNaN(closedAt.getTime())
      && (Number.isNaN(openedAt.getTime()) || closedAt >= openedAt);
  });
}

function isPaperTradeClosedInLedger(trade) {
  return hasClosingTransactionForTrade(trade) || hasAnyLedgerClosingTransactionForTrade(trade);
}

function reconcilePaperStateFromHistory() {
  const localOpenTrades = new Map(openPaperTrades);
  rebuildPaperStateFromHistory();

  localOpenTrades.forEach((trade, commodity) => {
    if (!trade || isPaperTradeClosedInLedger(trade)) return;
    const alreadyActive = Array.from(openPaperTrades.values()).some((activeTrade) => {
      return samePaperTradeIdentity(activeTrade, trade);
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
  if (!BROWSER_PAPER_EXECUTION_ENABLED && hasHistoryBackend()) {
    try {
      window.localStorage.removeItem(PAPER_STATE_KEY);
    } catch (error) {
      // Ignore storage cleanup failures; Cloudflare remains the paper ledger source of truth.
    }
    return;
  }

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
  const profileCapital = getSafeHistoryStartCapital(historyCommodityFilter);
  paperEquityInputEl.value = formatMoney(profileCapital);
  paperEquityInputEl.readOnly = true;
  paperEquityInputEl.setAttribute("aria-readonly", "true");
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
  if (!BROWSER_PAPER_EXECUTION_ENABLED && hasHistoryBackend()) {
    try {
      window.localStorage.removeItem(PAPER_STATE_KEY);
    } catch (error) {
      // Ignore storage cleanup failures; Cloudflare remains the paper ledger source of truth.
    }
    return;
  }

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
  dedupeDuplicatePaperCloses();
  sortTransactionHistory();

  return {
    generatedAt: new Date().toISOString(),
    source: "cloudflare-d1-paper-trading-ledger",
    tradeMode: PAPER_TRADE_MODE,
    transactions: transactionHistory
      .filter(isPaperTradeEntry)
      .map((entry) => ({ ...entry, tradeMode: PAPER_TRADE_MODE }))
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

function getLeaderBoardUrl() {
  return `${getHistoryApiUrl()}/leaderboard`;
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

function getPaperSchedulerUrl() {
  return `${getHistoryApiUrl()}/paper-scheduler`;
}

function getActualTradesUrl() {
  return `${getHistoryApiUrl()}/actual-trades`;
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

  const request = {
    intent,
    productId: trade.contract,
    side,
    contracts: trade.contracts,
    price: trade.entryPrice,
    targetPrice: trade.targetPrice,
    stopPrice: trade.stopPrice,
    clientOrderId: `atlas-${intent}-${trade.id}-${Date.now()}`
  };

  if (!hasHistoryBackend()) {
    coinbaseSandboxStatusEl.textContent = "Sandbox local-only; backend unavailable";
    return {
      sandbox: true,
      localOnly: true,
      intent,
      orderId: `local-${intent}-${trade.id}-${Date.now()}`,
      productId: trade.contract,
      submittedProductId: trade.contract,
      returnedProductId: trade.contract,
      side,
      sentAt: new Date().toISOString(),
      request,
      response: {
        success: true,
        localOnly: true,
        message: "Backend unavailable; local paper mock order recorded"
      }
    };
  }

  coinbaseSandboxStatusEl.textContent = `Sending ${intent}`;
  const response = await fetchWithTimeout(getCoinbaseSandboxOrderUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request)
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
    request: data.request || request,
    response: data.response
  };
}

async function loadSharedSettings(manual = false) {
  if (!hasHistoryBackend()) return false;
  if (!manual && isBackendBackoffActive(nextBackendSettingsSyncAt)) return false;
  if (backendSettingsSyncInFlight) return false;
  backendSettingsSyncInFlight = true;

  try {
    const response = await fetchWithTimeout(`${getSharedSettingsUrl()}?ts=${Date.now()}`, { cache: "no-store" }, CLOUD_SOURCE_FETCH_TIMEOUT_MS);
    if (!response.ok) throw new Error("settings unavailable");

    const settings = await response.json();
    sharedSettingsLoadedFromBackend = true;
    sharedSettingsLoadedAt = settings.generatedAt || new Date().toISOString();
    const usersChanged = mergeSharedUsers(settings.users);
    const profilesChanged = mergeSharedUserProfiles(settings.userProfiles);
    const appStateChanged = applySharedAppState(settings.appState);
    applyModelSettings(settings.modelSettings || sharedModelSettings);
    const cloudPromptIds = JSON.stringify(sharedModelSettings.secondOpinionPrompts || []);
    syncSecondOpinionPromptSettings();
    const promptSettingsChanged = JSON.stringify(sharedModelSettings.secondOpinionPrompts || []) !== cloudPromptIds;
    if (usersChanged || profilesChanged || appStateChanged) {
      applyCurrentUserPaperSettings();
      renderUserManagement();
      renderLeaderBoard();
      renderSkillsWorkspace();
      applySavedStrategyEdits();
    }
    renderTokenCosts();
    setCoinbaseSandboxEnabled(true);
    calculateSignal();
    if (promptSettingsChanged) saveSharedSettings();
    nextBackendSettingsSyncAt = 0;
    return true;
  } catch (error) {
    if (requiresFreshCloudState()) sharedSettingsLoadedFromBackend = false;
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
    const response = await fetchWithTimeout(getSharedSettingsUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coinbaseSandboxEnabled: isCoinbaseSandboxEnabled(),
        settingsLoadedAt: sharedSettingsLoadedAt,
        modelSettings: sharedModelSettings,
        appState: getSharedAppStatePayload(),
        users: getSharedUsersPayload(),
        userProfiles: getSharedUserProfilesPayload()
      })
    }, CLOUD_SOURCE_FETCH_TIMEOUT_MS);
    if (!response.ok) throw new Error("settings save failed");

    const data = await response.json();
    sharedSettingsLoadedAt = data?.settings?.generatedAt || sharedSettingsLoadedAt || new Date().toISOString();
    if (data?.settings?.modelSettings) applyModelSettings(data.settings.modelSettings);
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

function getAdvisorySummaryUrl() {
  return `${getAdvisoryHistoryUrl()}?summary=1`;
}

function applyAdvisorySummaryPrices(prices = {}) {
  Object.entries(prices || {}).forEach(([commodity, snapshot]) => {
    const normalizedCommodity = normalizeCommodityId(commodity);
    const snapshotPrice = Number(snapshot?.price);
    if (!normalizedCommodity || !Number.isFinite(snapshotPrice) || snapshotPrice <= 0) return;
    const activeProductId = getActivePriceProductId(normalizedCommodity).toLowerCase();
    const snapshotProductId = String(snapshot.productId || snapshot.ticker || "").toLowerCase();
    if (activeProductId && snapshotProductId && activeProductId !== snapshotProductId) return;

    latestPrices.set(normalizedCommodity, snapshotPrice);
    const snapshotTime = new Date(snapshot.fetchedAt || Date.now());
    latestPriceTimes.set(normalizedCommodity, snapshotTime);
    latestPriceSources.set(normalizedCommodity, snapshot.ok ? "Cloudflare advisory summary" : "Cloudflare advisory summary stale");
    latestPriceProductIds.set(normalizedCommodity, snapshot.productId || snapshot.ticker || getActivePriceProductId(normalizedCommodity));
    rememberPriceTick(normalizedCommodity, snapshotPrice, snapshotTime);
  });
}

async function loadSharedAdvisorySummary(manual = false) {
  if (!hasHistoryBackend()) return false;
  try {
    const refreshParam = manual ? "&refresh=1" : "";
    const response = await fetchWithTimeout(`${getAdvisorySummaryUrl()}${refreshParam}&ts=${Date.now()}`, { cache: "no-store" }, ADVISORY_SUMMARY_TIMEOUT_MS);
    if (!response.ok) throw new Error("advisory summary unavailable");
    const data = await response.json();
    mergeAdvisoryHistory(Array.isArray(data?.snapshots) ? data.snapshots : []);
    applyAdvisorySummaryPrices(data?.prices || {});
    if (activeSection === "advisories") {
      queueAdvisoryChartRender();
      queueSignalRecalculation("advisory-summary");
    }
    if (activeSection === "home") {
      renderHomeMarketPreview();
    }
    return true;
  } catch (error) {
    return false;
  }
}

function mergeAdvisoryHistory(entries = []) {
  const byKey = new Map(advisoryHistory.map((entry) => [entry.snapshotKey, entry]));

  entries.forEach((entry) => {
    const price = Number(entry.price);
    const localConviction = getAdvisoryLocalConviction(entry);
    const conviction = parseOptionalNumber(entry.conviction) ?? localConviction;
    const llmConviction = getAdvisoryLLMConviction(entry);
    if (!entry.snapshotKey || !Number.isFinite(price) || !Number.isFinite(localConviction)) return;
    byKey.set(entry.snapshotKey, {
      ...entry,
      price,
      conviction,
      localConviction,
      llmConviction,
      bounded: parseOptionalNumber(entry.bounded) ?? localConviction ?? 0
    });
  });

  advisoryHistory.splice(
    0,
    advisoryHistory.length,
    ...Array.from(byKey.values()).sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0))
  );
  saveLocalAdvisoryHistory();
}

function saveLocalAdvisoryHistory() {
  try {
    window.localStorage.setItem(ADVISORY_HISTORY_LOCAL_KEY, JSON.stringify(advisoryHistory.slice(-1500)));
  } catch (_error) {
    // Advisory history is useful, not critical. Backend sync remains the source of shared history.
  }
}

function loadLocalAdvisoryHistory() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(ADVISORY_HISTORY_LOCAL_KEY) || "[]");
    if (Array.isArray(stored) && stored.length) {
      mergeAdvisoryHistory(stored);
    }
  } catch (_error) {
    advisoryHistory.splice(0, advisoryHistory.length);
  }
}

function loadPendingAdvisorySnapshots() {
  try {
    const pending = JSON.parse(window.localStorage.getItem(ADVISORY_PENDING_LOCAL_KEY) || "[]");
    return Array.isArray(pending) ? pending.filter((entry) => entry?.snapshotKey) : [];
  } catch (_error) {
    return [];
  }
}

function savePendingAdvisorySnapshots(snapshots = []) {
  try {
    window.localStorage.setItem(ADVISORY_PENDING_LOCAL_KEY, JSON.stringify(snapshots.slice(-1500)));
  } catch (_error) {
    // The browser cache is only a retry buffer. If it fails, the live app still runs.
  }
}

function queuePendingAdvisorySnapshots(snapshots = []) {
  const byKey = new Map(loadPendingAdvisorySnapshots().map((entry) => [entry.snapshotKey, entry]));
  snapshots.forEach((entry) => {
    if (entry?.snapshotKey) byKey.set(entry.snapshotKey, entry);
  });
  const pending = Array.from(byKey.values()).sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
  savePendingAdvisorySnapshots(pending);
  return pending.length;
}

function clearPendingAdvisorySnapshots(savedSnapshots = []) {
  const savedKeys = new Set(savedSnapshots.map((entry) => entry?.snapshotKey).filter(Boolean));
  if (!savedKeys.size) return loadPendingAdvisorySnapshots().length;

  const remaining = loadPendingAdvisorySnapshots().filter((entry) => !savedKeys.has(entry.snapshotKey));
  savePendingAdvisorySnapshots(remaining);
  return remaining.length;
}

async function flushPendingAdvisorySnapshots() {
  const pending = loadPendingAdvisorySnapshots();
  if (!pending.length || !hasHistoryBackend()) return false;
  return saveSharedAdvisorySnapshots(pending, { queueOnFail: false, statusLabel: "Retrying shared advisory log" });
}

async function loadSharedAdvisoryHistory(manual = false) {
  if (!hasHistoryBackend()) {
    advisoryHistoryStatusEl.textContent = "Shared advisory log required";
    if (activeSection === "advisories") queueAdvisoryChartRender();
    return false;
  }
  if (!manual && isBackendBackoffActive(nextBackendAdvisorySyncAt)) return false;
  if (backendAdvisorySyncInFlight) return false;
  backendAdvisorySyncInFlight = true;

  try {
    advisoryHistoryStatusEl.textContent = "Syncing shared advisory log";
    const response = await fetchWithTimeout(`${getAdvisoryHistoryUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("advisory history unavailable");

    const data = await response.json();
    mergeAdvisoryHistory(Array.isArray(data?.snapshots) ? data.snapshots : []);
    advisoryHistoryStatusEl.textContent = `Shared advisory log synced ${advisoryHistory.length} sample${advisoryHistory.length === 1 ? "" : "s"}`;
    if (activeSection === "advisories") queueAdvisoryChartRender();
    nextBackendAdvisorySyncAt = 0;
    await flushPendingAdvisorySnapshots();
    return true;
  } catch (error) {
    nextBackendAdvisorySyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    const pendingCount = loadPendingAdvisorySnapshots().length;
    advisoryHistoryStatusEl.textContent = advisoryHistory.length
      ? `Shared advisory log offline; using ${advisoryHistory.length} cached sample${advisoryHistory.length === 1 ? "" : "s"}${pendingCount ? `, ${pendingCount} queued for central save` : ""}; ${getBackendBackoffText(nextBackendAdvisorySyncAt)}`
      : manual ? "Shared advisory log sync failed" : "Shared advisory log offline";
    if (activeSection === "advisories") queueAdvisoryChartRender();
    return false;
  } finally {
    backendAdvisorySyncInFlight = false;
  }
}

async function saveSharedAdvisorySnapshots(snapshots, options = {}) {
  const { queueOnFail = true, statusLabel = "Saving shared advisory sample" } = options;
  if (!snapshots.length) return false;
  if (!hasHistoryBackend()) {
    const pendingCount = queueOnFail ? queuePendingAdvisorySnapshots(snapshots) : loadPendingAdvisorySnapshots().length;
    advisoryHistoryStatusEl.textContent = `Shared advisory log unavailable; ${pendingCount} sample${pendingCount === 1 ? "" : "s"} queued locally`;
    return false;
  }

  try {
    advisoryHistoryStatusEl.textContent = statusLabel;
    const response = await fetchWithTimeout(getAdvisoryHistoryUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ snapshots })
    });
    if (!response.ok) throw new Error("advisory save failed");

    const data = await response.json();
    mergeAdvisoryHistory(Array.isArray(data?.snapshots) ? data.snapshots : snapshots);
    const remainingPending = clearPendingAdvisorySnapshots(snapshots);
    advisoryHistoryStatusEl.textContent = `Shared advisory log saved ${advisoryHistory.length} samples${remainingPending ? `; ${remainingPending} still queued` : ""}`;
    if (activeSection === "advisories") queueAdvisoryChartRender();
    return true;
  } catch (error) {
    nextBackendAdvisorySyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    const pendingCount = queueOnFail ? queuePendingAdvisorySnapshots(snapshots) : loadPendingAdvisorySnapshots().length;
    advisoryHistoryStatusEl.textContent = `Shared advisory log save failed${pendingCount ? `; ${pendingCount} sample${pendingCount === 1 ? "" : "s"} queued locally for retry` : ""}`;
    return false;
  }
}

function getMicroPredictionUrl() {
  return `${getHistoryApiUrl()}/micro-predictions`;
}

function getMicroPredictionKey(commodity, horizonSeconds, time, price) {
  const bucket = Math.floor(new Date(time).getTime() / MICRO_PREDICTION_CAPTURE_MS);
  const productId = getActivePriceProductId(commodity) || "product";
  return `${commodity}|${productId}|${horizonSeconds}|${bucket}|${Number(price || 0).toFixed(4)}`;
}

function mergeMicroPredictionHistory(entries = []) {
  const byKey = new Map(microPredictionHistory.map((entry) => [entry.predictionKey, entry]));
  entries.forEach((entry) => {
    if (!entry?.predictionKey) return;
    byKey.set(entry.predictionKey, {
      ...entry,
      score: parseOptionalNumber(entry.score) ?? 0,
      price: parseOptionalNumber(entry.price),
      futurePrice: parseOptionalNumber(entry.futurePrice),
      moveBps: parseOptionalNumber(entry.moveBps),
      correct: typeof entry.correct === "boolean" ? entry.correct : null
    });
  });
  microPredictionHistory.splice(
    0,
    microPredictionHistory.length,
    ...Array.from(byKey.values()).sort((a, b) => new Date(b.time || 0) - new Date(a.time || 0)).slice(0, 2000)
  );
  saveLocalMicroPredictionHistory();
}

function saveLocalMicroPredictionHistory() {
  try {
    window.localStorage.setItem(MICRO_PREDICTION_HISTORY_LOCAL_KEY, JSON.stringify(microPredictionHistory.slice(0, 1000)));
  } catch (_error) {
    // Local cache is optional. D1 remains the shared source.
  }
}

function loadLocalMicroPredictionHistory() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(MICRO_PREDICTION_HISTORY_LOCAL_KEY) || "[]");
    if (Array.isArray(stored) && stored.length) mergeMicroPredictionHistory(stored);
  } catch (_error) {
    microPredictionHistory.splice(0, microPredictionHistory.length);
  }
}

function loadPendingMicroPredictions() {
  try {
    const pending = JSON.parse(window.localStorage.getItem(MICRO_PREDICTION_PENDING_LOCAL_KEY) || "[]");
    return Array.isArray(pending) ? pending.filter((entry) => entry?.predictionKey) : [];
  } catch (_error) {
    return [];
  }
}

function savePendingMicroPredictions(predictions = []) {
  try {
    window.localStorage.setItem(MICRO_PREDICTION_PENDING_LOCAL_KEY, JSON.stringify(predictions.slice(-1500)));
  } catch (_error) {
    // Best-effort retry buffer.
  }
}

function queuePendingMicroPredictions(predictions = []) {
  const byKey = new Map(loadPendingMicroPredictions().map((entry) => [entry.predictionKey, entry]));
  predictions.forEach((entry) => {
    if (entry?.predictionKey) byKey.set(entry.predictionKey, entry);
  });
  const pending = Array.from(byKey.values()).sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
  savePendingMicroPredictions(pending);
  return pending.length;
}

function clearPendingMicroPredictions(savedPredictions = []) {
  const savedKeys = new Set(savedPredictions.map((entry) => entry?.predictionKey).filter(Boolean));
  if (!savedKeys.size) return loadPendingMicroPredictions().length;
  const remaining = loadPendingMicroPredictions().filter((entry) => !savedKeys.has(entry.predictionKey));
  savePendingMicroPredictions(remaining);
  return remaining.length;
}

function buildMicroPredictions(commodity, signal, tradePlan) {
  const micro = signal?.micro;
  if (!tradePlan?.priceReady || !micro?.ready) return [];

  const time = new Date();
  return MICRO_PREDICTION_HORIZONS.map((horizonSeconds) => ({
    predictionKey: getMicroPredictionKey(commodity, horizonSeconds, time, tradePlan.livePrice),
    time: time.toISOString(),
    commodity,
    commodityName: commodities.find(({ id }) => id === commodity)?.name || commodity,
    contract: tradePlan.ticker,
    productId: tradePlan.productId || getActivePriceProductId(commodity),
    price: tradePlan.livePrice,
    priceSource: tradePlan.priceSource,
    horizonSeconds,
    score: micro.score,
    probabilityUp: micro.probabilityUp,
    probabilityDown: micro.probabilityDown,
    predictedTone: micro.predictedTone || (micro.score <= -6 ? "short" : micro.score >= 6 ? "long" : "flat"),
    shortTrigger: Boolean(micro.shortTrigger),
    longTrigger: Boolean(micro.longTrigger),
    longInvalidated: Boolean(micro.longInvalidated),
    ret10: micro.ret10,
    ret30: micro.ret30,
    ret60: micro.ret60,
    ret180: micro.ret180,
    vwapDistance: micro.vwapDistance,
    volatility: micro.volatility,
    automaticBounded: signal.automaticBounded,
    microAdjustedBounded: signal.microAdjustedBounded,
    advisoryTone: signal.tone,
    advisoryConviction: signal.conviction
  }));
}

async function flushPendingMicroPredictions() {
  const pending = loadPendingMicroPredictions();
  if (!pending.length || !hasHistoryBackend()) return false;
  return saveSharedMicroPredictions(pending, { queueOnFail: false, statusLabel: "Retrying micro loop" });
}

async function loadSharedMicroPredictions(manual = false) {
  if (!hasHistoryBackend()) {
    renderMicroLearningLoop();
    return false;
  }
  if (!manual && isBackendBackoffActive(nextBackendMicroPredictionSyncAt)) return false;
  if (backendMicroPredictionSyncInFlight) return false;
  backendMicroPredictionSyncInFlight = true;

  try {
    if (microLearningStatusEl) microLearningStatusEl.textContent = "Syncing micro loop";
    const response = await fetchWithTimeout(`${getMicroPredictionUrl()}?limit=1000&ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("micro predictions unavailable");
    const data = await response.json();
    mergeMicroPredictionHistory(Array.isArray(data?.predictions) ? data.predictions : []);
    nextBackendMicroPredictionSyncAt = 0;
    await flushPendingMicroPredictions();
    renderMicroLearningLoop();
    return true;
  } catch (_error) {
    nextBackendMicroPredictionSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    renderMicroLearningLoop();
    return false;
  } finally {
    backendMicroPredictionSyncInFlight = false;
  }
}

async function saveSharedMicroPredictions(predictions, options = {}) {
  const { queueOnFail = true, statusLabel = "Saving micro loop" } = options;
  if (!predictions.length) return false;
  if (!hasHistoryBackend()) {
    queuePendingMicroPredictions(predictions);
    renderMicroLearningLoop();
    return false;
  }

  try {
    if (microLearningStatusEl) microLearningStatusEl.textContent = statusLabel;
    const response = await fetchWithTimeout(getMicroPredictionUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ predictions, limit: 1000 })
    });
    if (!response.ok) throw new Error("micro prediction save failed");
    const data = await response.json();
    const savedPredictions = Array.isArray(data?.predictions) ? data.predictions : predictions;
    mergeMicroPredictionHistory(savedPredictions);
    clearPendingMicroPredictions(predictions);
    nextBackendMicroPredictionSyncAt = 0;
    renderMicroLearningLoop();
    return true;
  } catch (_error) {
    nextBackendMicroPredictionSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    if (queueOnFail) queuePendingMicroPredictions(predictions);
    renderMicroLearningLoop();
    return false;
  }
}

function maybeRecordMicroPrediction(commodity, signal, tradePlan) {
  if (!tradePlan?.priceReady || !signal?.micro?.ready) return;
  if (!getFuturesMarketStatus().isOpen) return;
  const productId = getActivePriceProductId(commodity) || "product";
  const batchKey = `${commodity}|${productId}|${Math.floor(Date.now() / MICRO_PREDICTION_CAPTURE_MS)}`;
  const savedBatchKey = window.localStorage.getItem(MICRO_PREDICTION_CAPTURE_KEY);
  if (batchKey === lastMicroPredictionKey || batchKey === savedBatchKey) return;
  lastMicroPredictionKey = batchKey;
  window.localStorage.setItem(MICRO_PREDICTION_CAPTURE_KEY, batchKey);

  const predictions = buildMicroPredictions(commodity, signal, tradePlan);
  if (!predictions.length) return;
  mergeMicroPredictionHistory(predictions);
  renderMicroLearningLoop();
  saveSharedMicroPredictions(predictions);
}

function summarizeMicroPredictions(tone) {
  const rows = microPredictionHistory.filter((entry) => (
    entry.predictedTone === tone && typeof entry.correct === "boolean"
  ));
  const correct = rows.filter((entry) => entry.correct).length;
  return {
    tone,
    count: rows.length,
    correct,
    accuracy: rows.length ? Math.round((correct / rows.length) * 100) : null
  };
}

function formatMicroSummary(summary) {
  if (!summary.count) return "No evaluated calls";
  return `${summary.accuracy}% / ${summary.count}`;
}

function getMicroLearningGuidance(shortSummary, longSummary) {
  if (shortSummary.count < 20) return "Collecting short samples before changing the trigger.";
  if (shortSummary.accuracy < 45) return "Short trigger is too loose; require stronger 10s/30s downside and below-VWAP confirmation.";
  if (shortSummary.accuracy < 55) return "Short trigger is near break-even; keep collecting and avoid raising short size.";
  if (longSummary.count >= 20 && longSummary.accuracy - shortSummary.accuracy > 20) {
    return "Long bias still dominates; lower the macro weight when micro tape turns down.";
  }
  return "Short trigger is usable; keep logging outcomes before promoting it to execution.";
}

function renderMicroAccuracyBar(summary) {
  const width = summary.accuracy === null ? 0 : summary.accuracy;
  return `
    <div class="accuracy-bar-row" data-tone="${escapeHtml(summary.tone)}">
      <span>${summary.tone[0].toUpperCase()}${summary.tone.slice(1)}</span>
      <span class="accuracy-bar-track"><i style="width:${width}%"></i></span>
      <strong>${summary.count ? `${summary.accuracy}% / ${summary.count}` : "No data"}</strong>
    </div>
  `;
}

function renderMicroLearningLoop() {
  const longSummary = summarizeMicroPredictions("long");
  const shortSummary = summarizeMicroPredictions("short");
  const flatSummary = summarizeMicroPredictions("flat");
  const evaluatedCount = longSummary.count + shortSummary.count + flatSummary.count;
  const pendingCount = loadPendingMicroPredictions().length;

  if (microLearningStatusEl) {
    microLearningStatusEl.textContent = evaluatedCount
      ? `${evaluatedCount} evaluated${pendingCount ? `, ${pendingCount} queued` : ""}`
      : `Collecting samples${pendingCount ? `, ${pendingCount} queued` : ""}`;
  }
  if (microLearningLongEl) microLearningLongEl.textContent = formatMicroSummary(longSummary);
  if (microLearningShortEl) microLearningShortEl.textContent = formatMicroSummary(shortSummary);
  if (microLearningFlatEl) microLearningFlatEl.textContent = formatMicroSummary(flatSummary);
  if (microLearningGuidanceEl) microLearningGuidanceEl.textContent = getMicroLearningGuidance(shortSummary, longSummary);
  if (microLearningBarsEl) {
    microLearningBarsEl.innerHTML = [
      renderMicroAccuracyBar(longSummary),
      renderMicroAccuracyBar(shortSummary),
      renderMicroAccuracyBar(flatSummary)
    ].join("");
  }
}

function getAdvisorySnapshotKey(commodity, horizon, time) {
  const minute = Math.floor(new Date(time).getTime() / ADVISORY_CAPTURE_MS);
  const productId = getActivePriceProductId(commodity) || "product";
  return `${commodity}|${productId}|${horizon}|${minute}`;
}

function parseOptionalNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function getAdvisoryLocalConviction(entry) {
  return parseOptionalNumber(entry?.localConviction)
    ?? parseOptionalNumber(entry?.conviction)
    ?? parseOptionalNumber(entry?.bounded)
    ?? 0;
}

function getAdvisoryLLMConviction(entry) {
  const rowValue = parseOptionalNumber(entry?.llmConviction);
  if (rowValue !== null) return rowValue;

  const latest = getLatestLLMConvictionForCommodity(entry?.commodity);
  return latest ? latest.conviction : null;
}

function formatAdvisoryScoreValue(value) {
  const number = parseOptionalNumber(value);
  return number === null ? "-" : String(Math.round(number));
}

function getLatestLLMConvictionForCommodity(commodity) {
  if (!lastVerifiedLLMRun || lastVerifiedLLMRun.commodity !== commodity || !lastVerifiedLLMRun.advisory) {
    return null;
  }

  const conviction = parseOptionalNumber(lastVerifiedLLMRun.advisory.conviction);
  if (conviction === null) return null;

  return {
    conviction,
    tone: lastVerifiedLLMRun.advisory.tone || "",
    updatedAt: lastVerifiedLLMRun.updatedAt || lastVerifiedLLMRun.time || "",
    scheduleSlot: lastVerifiedLLMRun.scheduleSlot || ""
  };
}

function buildAdvisorySnapshot(commodity, horizon, baseSignals, price, priceSource) {
  const signals = { ...baseSignals, horizon: ADVISORY_SIGNAL_WEIGHT };
  const signal = scoreCommodity(commodity, signals);
  const time = new Date();
  const llm = getLatestLLMConvictionForCommodity(commodity);
  const config = getEffectiveCommodityConfig(commodity);

  return {
    snapshotKey: getAdvisorySnapshotKey(commodity, horizon, time),
    time: time.toISOString(),
    commodity,
    commodityName: commodities.find(({ id }) => id === commodity)?.name || commodity,
    contract: config.ticker,
    productId: config.productId || getActivePriceProductId(commodity),
    contractMonth: config.contractMonth,
    horizon,
    price,
    priceSource,
    bounded: signal.bounded,
    conviction: signal.conviction,
    localConviction: signal.conviction,
    localBaseConviction: signal.baseConviction,
    karpathyAdjustment: signal.karpathyAdjustment,
    localTone: signal.tone,
    localLabel: signal.label,
    localAction: signal.action,
    localUpdatedAt: time.toISOString(),
    localSource: signal.manualOverride === null ? "local heuristic + Karpathy" : "LLM/manual baseline + Karpathy",
    llmConviction: llm ? llm.conviction : null,
    llmTone: llm ? llm.tone : "",
    llmUpdatedAt: llm ? llm.updatedAt : "",
    llmScheduleSlot: llm ? llm.scheduleSlot : "",
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
  if (!tradePlan.priceReady) return;
  if (!getFuturesMarketStatus().isOpen) return;

  const minute = Math.floor(Date.now() / ADVISORY_CAPTURE_MS);
  const productId = getActivePriceProductId(commodity) || "product";
  const batchKey = `${commodity}|${productId}|${minute}`;
  const savedBatchKey = window.localStorage.getItem(ADVISORY_SNAPSHOT_KEY);
  if (batchKey === lastAdvisorySnapshotKey || batchKey === savedBatchKey) return;
  lastAdvisorySnapshotKey = batchKey;
  window.localStorage.setItem(ADVISORY_SNAPSHOT_KEY, batchKey);

  const snapshots = [
    buildAdvisorySnapshot(commodity, ADVISORY_HORIZON, baseSignals, tradePlan.livePrice, tradePlan.priceSource)
  ];
  mergeAdvisoryHistory(snapshots);
  if (activeSection === "advisories") queueAdvisoryChartRender();
  saveSharedAdvisorySnapshots(snapshots);
}

function getAdvisoryPeriodStart() {
  const ms = ADVISORY_PERIODS[advisoryPeriodFilter] || ADVISORY_PERIODS.hour;
  return Date.now() - ms;
}

function getFilteredAdvisorySamples() {
  const start = getAdvisoryPeriodStart();
  const byKey = new Map();

  advisoryHistory
    .filter((entry) => {
      const time = new Date(entry.time || 0).getTime();
      return entry.commodity === advisoryCommodityFilter && Number.isFinite(time) && time >= start;
    })
    .forEach((entry) => {
      const time = new Date(entry.time || 0).getTime();
      const productId = entry.productId || entry.product_id || entry.contract || "product";
      const key = `${entry.commodity}|${productId}|${Math.floor(time / ADVISORY_CAPTURE_MS)}`;
      if (!byKey.has(key)) {
        byKey.set(key, { ...entry, horizon: ADVISORY_HORIZON });
      }
    });

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
        horizon: ADVISORY_HORIZON,
        price,
        priceSource: "Paper trade ledger",
        bounded: conviction,
        conviction,
        localConviction: conviction,
        localSource: "paper trade ledger",
        llmConviction: null,
        llmUpdatedAt: "",
        tone,
        label: `Paper ${tone}`,
        action: entry.action
      });
    });

  return Array.from(byKey.values()).sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
}

function getPaperTradeAdvisoryEvaluations() {
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
          conviction,
          localConviction: conviction,
          localSource: "paper trade ledger",
          llmConviction: null
        },
        future: {
          time: entry.closedAt || entry.time,
          price: endPrice
        },
        startPrice,
        endPrice,
        move: endPrice - startPrice,
        correct: netPnl > 0,
        qualified: getAdvisoryLocalConviction({ localConviction: conviction }) >= advisoryScoreThreshold,
        metric: "trade",
        source: "paper-trade",
        pnl: netPnl,
        grossPnl: detail.grossPnl,
        totalFees: detail.totalFees,
        capital: detail.capital,
        contracts: detail.contracts
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
  saveSharedSettings();
  advisoryScoreThresholdEl.value = String(advisoryScoreThreshold);
  accuracyThresholdDisplayEl.textContent = `${advisoryScoreThreshold}+`;
  if (lastPrimarySignal && lastTradePlan) {
    calculateSignal();
  }
  renderAdvisoryChart();
}

function getAdvisoryEvaluationWindow() {
  return ADVISORY_EVALUATION_WINDOW_MS;
}

function getCorrectnessThreshold(price) {
  return Math.max(0.05, Math.abs(Number(price) || 0) * 0.0005);
}

function isActionableAdvisoryTone(tone) {
  return tone === "long" || tone === "short";
}

function evaluateAdvisorySamples(samples, options = {}) {
  const includeWait = options.includeWait === true;
  const sorted = [...samples].sort((a, b) => new Date(a.time || 0) - new Date(b.time || 0));
  const evaluationWindow = getAdvisoryEvaluationWindow();

  return sorted.map((entry, index) => {
    if (!isActionableAdvisoryTone(entry.tone) && !(includeWait && entry.tone === "wait")) return null;

    const entryTime = new Date(entry.time || 0).getTime();
    const future = sorted.find((candidate, candidateIndex) => (
      candidateIndex > index
      && new Date(candidate.time || 0).getTime() - entryTime >= evaluationWindow
    )) || sorted[index + 1];

    if (!future) return null;
    if (!getFuturesMarketStatus(entryTime).isOpen || !getFuturesMarketStatus(future.time).isOpen) return null;
    const entryProductId = String(entry.productId || entry.contract || "").toLowerCase();
    const futureProductId = String(future.productId || future.contract || "").toLowerCase();
    if (entryProductId && futureProductId && entryProductId !== futureProductId) return null;

    const startPrice = Number(entry.price);
    const endPrice = Number(future.price);
    if (!Number.isFinite(startPrice) || !Number.isFinite(endPrice)) return null;
    if (startPrice === endPrice && isActionableAdvisoryTone(entry.tone)) return null;

    const move = endPrice - startPrice;
    const threshold = getCorrectnessThreshold(startPrice);
    let correct = false;

    if (entry.tone === "long") correct = move > threshold;
    if (entry.tone === "short") correct = move < -threshold;
    if (entry.tone === "wait") correct = Math.abs(move) <= threshold;

    return {
      entry,
      future,
      startPrice,
      endPrice,
      move,
      correct,
      qualified: getAdvisoryLocalConviction(entry) >= advisoryScoreThreshold,
      metric: "forecast"
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

function formatCalibrationSummary(summary) {
  return summary.count ? `${formatPercent(summary.accuracy)} / ${summary.count}` : "No samples";
}

function getCalibrationBandSummary(evaluations, tone, band) {
  return summarizeEvaluations(evaluations, (item) => {
    const score = getAdvisoryLocalConviction(item.entry);
    return item.entry.tone === tone
      && Number.isFinite(score)
      && score >= band.min
      && score <= band.max;
  });
}

function getBestCalibrationBand(evaluations, tone) {
  const summaries = ADVISORY_SCORE_BANDS.map((band) => ({
    band,
    summary: getCalibrationBandSummary(evaluations, tone, band)
  })).filter(({ summary }) => (
    summary.count >= ADVISORY_CALIBRATION_MIN_SIDE_SAMPLES
    && Number.isFinite(summary.accuracy)
  ));

  return summaries.sort((a, b) => (
    b.summary.accuracy - a.summary.accuracy
    || b.summary.count - a.summary.count
  ))[0] || null;
}

function getCalibrationAdvice(evaluations, tone) {
  const best = getBestCalibrationBand(evaluations, tone);
  if (!best) return `Need ${ADVISORY_CALIBRATION_MIN_SIDE_SAMPLES}+ ${tone} samples in a score band.`;
  const accuracy = Math.round(best.summary.accuracy);
  const status = accuracy >= 60 ? "candidate edge" : "below target";
  return `${best.band.label}: ${accuracy}% over ${best.summary.count} ${tone} calls (${status})`;
}

function renderScoreCalibrationBands(forecastEvaluations) {
  if (!accuracyCalibrationGridEl) return;

  accuracyCalibrationGridEl.innerHTML = "";
  ADVISORY_SCORE_BANDS.forEach((band) => {
    const summary = summarizeEvaluations(forecastEvaluations, (item) => {
      const score = getAdvisoryLocalConviction(item.entry);
      return Number.isFinite(score) && score >= band.min && score <= band.max;
    });
    const hasSamples = summary.count > 0;
    const hasUsefulSample = summary.count >= 5;
    const accuracy = Number.isFinite(summary.accuracy) ? Math.round(summary.accuracy) : 0;
    const card = document.createElement("div");
    const label = document.createElement("span");
    const value = document.createElement("strong");
    const count = document.createElement("p");
    const sideGrid = document.createElement("div");
    const track = document.createElement("div");
    const fill = document.createElement("i");
    const note = document.createElement("p");
    const longSummary = getCalibrationBandSummary(forecastEvaluations, "long", band);
    const shortSummary = getCalibrationBandSummary(forecastEvaluations, "short", band);

    card.className = "calibration-card";
    card.dataset.ready = String(hasUsefulSample);
    card.dataset.empty = String(!hasSamples);
    label.className = "stat-label";
    label.textContent = band.label;
    value.textContent = hasSamples ? `${accuracy}%` : "No samples";
    count.textContent = hasSamples
      ? `${summary.correct} of ${summary.count} forecasts correct`
      : "No evaluated forecasts in this score band.";
    sideGrid.className = "calibration-side-grid";
    [
      ["Long", longSummary],
      ["Short", shortSummary]
    ].forEach(([sideLabel, sideSummary]) => {
      const side = document.createElement("span");
      side.textContent = `${sideLabel}: ${formatCalibrationSummary(sideSummary)}`;
      side.dataset.ready = String(sideSummary.count >= ADVISORY_CALIBRATION_MIN_SIDE_SAMPLES);
      sideGrid.append(side);
    });
    track.className = "calibration-track";
    fill.style.width = hasSamples ? `${Math.max(4, Math.min(100, accuracy))}%` : "0%";
    track.append(fill);
    note.textContent = !hasSamples
      ? "This band has not had enough calls yet."
      : hasUsefulSample
        ? "Use the long/short rows to see which side is actually calibrated."
        : "Small sample: treat this as noise until more calls arrive.";
    card.append(label, value, count, sideGrid, track, note);
    accuracyCalibrationGridEl.append(card);
  });
}

function renderAccuracyBars(forecastEvaluations, tradeEvaluations) {
  const rows = [
    { id: "long", metric: "forecast", label: "Forecast long", evaluations: forecastEvaluations },
    { id: "short", metric: "forecast", label: "Forecast short", evaluations: forecastEvaluations },
    { id: "long", metric: "trade", label: "Trade long", evaluations: tradeEvaluations },
    { id: "short", metric: "trade", label: "Trade short", evaluations: tradeEvaluations }
  ];

  accuracyBarsEl.innerHTML = "";
  rows.forEach(({ id, metric, label, evaluations }) => {
    const summary = summarizeEvaluations(evaluations, (item) => item.entry.tone === id);
    const row = document.createElement("div");
    const text = document.createElement("span");
    const track = document.createElement("div");
    const fill = document.createElement("i");
    const value = document.createElement("strong");
    const width = Number.isFinite(summary.accuracy) ? Math.max(4, summary.accuracy) : 0;

    row.className = "accuracy-bar-row";
    row.dataset.tone = id;
    row.dataset.metric = metric;
    text.textContent = label;
    track.className = "accuracy-bar-track";
    fill.style.width = `${width}%`;
    value.textContent = summary.count ? `${formatPercent(summary.accuracy)} / ${summary.count}` : metric === "trade" ? "No trades" : "No calls";
    track.append(fill);
    row.append(text, track, value);
    accuracyBarsEl.append(row);
  });
}

function renderAccuracyOutcomes(forecastEvaluations, tradeEvaluations) {
  accuracyOutcomesEl.innerHTML = "";
  const recentEvaluations = [...forecastEvaluations, ...tradeEvaluations]
    .filter((item) => item && item.entry && Number.isFinite(Number(item.startPrice)) && Number.isFinite(Number(item.endPrice)))
    .sort((a, b) => new Date(b.entry.time || 0) - new Date(a.entry.time || 0));

  if (!recentEvaluations.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.textContent = "No evaluated forecast or closed trade outcomes in this window. Use Week or Month to include older outcomes.";
    row.append(cell);
    accuracyOutcomesEl.append(row);
    return;
  }

  recentEvaluations.forEach((item) => {
    const row = document.createElement("tr");
    const isTrade = item.metric === "trade";
    const signalLabel = `${isTrade ? "Trade" : "Forecast"}: ${item.entry.label || item.entry.tone}`;
    const resultLabel = item.correct ? "Correct" : "Wrong";
    const resultValue = isTrade && Number.isFinite(Number(item.pnl))
      ? `${resultLabel} (${formatSignedMoney(Number(item.pnl))})`
      : resultLabel;
    row.dataset.result = item.correct ? "correct" : "wrong";
    row.dataset.metric = item.metric || "forecast";
    [
      formatTradeTime(item.entry.time),
      signalLabel,
      `${formatAdvisoryScoreValue(getAdvisoryLocalConviction(item.entry))}${item.qualified ? " qualified" : ""}`,
      formatAdvisoryScoreValue(getAdvisoryLLMConviction(item.entry)),
      formatPrice(item.startPrice),
      `${formatPrice(item.endPrice)} (${item.move >= 0 ? "+" : ""}${formatPrice(item.move)})`,
      resultValue
    ].forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.append(cell);
    });
    accuracyOutcomesEl.append(row);
  });
}

function summarizeTradeEdge(tradeEvaluations, side = null) {
  const trades = tradeEvaluations.filter((item) => (
    (!side || item.entry.tone === side) && Number.isFinite(Number(item.pnl))
  ));
  const wins = trades.filter((item) => Number(item.pnl) > 0);
  const losses = trades.filter((item) => Number(item.pnl) <= 0);
  const sum = (rows, getter) => rows.reduce((total, row) => total + (Number(getter(row)) || 0), 0);
  const winRate = trades.length ? (wins.length / trades.length) * 100 : NaN;
  const averageWin = wins.length ? sum(wins, (item) => item.pnl) / wins.length : 0;
  const averageLoss = losses.length ? Math.abs(sum(losses, (item) => item.pnl) / losses.length) : 0;
  const averageFees = trades.length ? sum(trades, (item) => item.totalFees) / trades.length : 0;
  const grossExpectancy = trades.length ? sum(trades, (item) => item.grossPnl) / trades.length : NaN;
  const expectancy = trades.length
    ? ((wins.length / trades.length) * averageWin) - ((losses.length / trades.length) * averageLoss)
    : NaN;
  const totalPnl = sum(trades, (item) => item.pnl);
  const totalFees = sum(trades, (item) => item.totalFees);

  return {
    side: side || "overall",
    trades: trades.length,
    wins: wins.length,
    losses: losses.length,
    winRate,
    averageWin,
    averageLoss,
    averageFees,
    grossExpectancy,
    expectancy,
    totalPnl,
    totalFees
  };
}

function formatExpectancy(value) {
  if (!Number.isFinite(value)) return "-";
  return formatSignedMoney(value);
}

function getEdgeDetailText(summary) {
  if (!summary.trades) return "No closed trades in this window.";
  return `${summary.wins}/${summary.trades} wins, ${formatPercent(summary.winRate)} win rate, avg win ${formatMoney(summary.averageWin)}, avg loss ${formatMoney(summary.averageLoss)}`;
}

function renderEdgeBreakdownRow(summary, label) {
  const row = document.createElement("div");
  row.className = "edge-breakdown-row";
  row.dataset.edge = Number.isFinite(summary.expectancy) && summary.expectancy > 0 ? "positive" : "negative";
  [
    label,
    String(summary.trades),
    Number.isFinite(summary.winRate) ? formatPercent(summary.winRate) : "-",
    formatMoney(summary.averageWin),
    formatMoney(summary.averageLoss),
    formatMoney(summary.averageFees),
    formatExpectancy(summary.expectancy)
  ].forEach((value) => {
    const cell = document.createElement("span");
    cell.textContent = value;
    row.append(cell);
  });
  return row;
}

function renderEdgeDashboard(tradeEvaluations) {
  const longSummary = summarizeTradeEdge(tradeEvaluations, "long");
  const shortSummary = summarizeTradeEdge(tradeEvaluations, "short");
  const overallSummary = summarizeTradeEdge(tradeEvaluations);
  const isPositive = Number.isFinite(overallSummary.expectancy) && overallSummary.expectancy > 0;

  if (edgeDashboardStatusEl) {
    edgeDashboardStatusEl.textContent = overallSummary.trades
      ? `${overallSummary.trades} closed paper trade${overallSummary.trades === 1 ? "" : "s"} in this window`
      : "Waiting for closed trades";
  }
  if (edgeLongExpectancyEl) edgeLongExpectancyEl.textContent = formatExpectancy(longSummary.expectancy);
  if (edgeLongDetailEl) edgeLongDetailEl.textContent = getEdgeDetailText(longSummary);
  if (edgeShortExpectancyEl) edgeShortExpectancyEl.textContent = formatExpectancy(shortSummary.expectancy);
  if (edgeShortDetailEl) edgeShortDetailEl.textContent = getEdgeDetailText(shortSummary);
  if (edgeOverallExpectancyEl) {
    edgeOverallExpectancyEl.textContent = formatExpectancy(overallSummary.expectancy);
    edgeOverallExpectancyEl.dataset.edge = isPositive ? "positive" : "negative";
  }
  if (edgeOverallDetailEl) {
    edgeOverallDetailEl.textContent = overallSummary.trades
      ? `${formatSignedMoney(overallSummary.totalPnl)} net P/L across ${overallSummary.trades} closed trades.`
      : "Average trade profit appears after paper trades close.";
  }
  if (edgeFeeDragEl) edgeFeeDragEl.textContent = overallSummary.trades ? formatMoney(overallSummary.averageFees) : "-";
  if (edgeFeeDetailEl) {
    edgeFeeDetailEl.textContent = overallSummary.trades
      ? `${formatMoney(overallSummary.totalFees)} total fees recorded or estimated.`
      : "Fees are included when stored on trade rows.";
  }
  if (edgeBreakdownEl) {
    edgeBreakdownEl.innerHTML = "";
    const header = document.createElement("div");
    header.className = "edge-breakdown-row edge-breakdown-head";
    ["Side", "Trades", "Win rate", "Avg win", "Avg loss", "Avg fees", "Ave Trade Profit"].forEach((value) => {
      const cell = document.createElement("span");
      cell.textContent = value;
      header.append(cell);
    });
    edgeBreakdownEl.append(
      header,
      renderEdgeBreakdownRow(longSummary, "Long"),
      renderEdgeBreakdownRow(shortSummary, "Short"),
      renderEdgeBreakdownRow(overallSummary, "Overall")
    );
  }
}

function renderAdvisoryAccuracy(samples) {
  const forecastEvaluations = evaluateAdvisorySamples(samples)
    .filter((item) => isActionableAdvisoryTone(item?.entry?.tone))
    .sort((a, b) => new Date(a.entry.time || 0) - new Date(b.entry.time || 0));
  const tradeEvaluations = getPaperTradeAdvisoryEvaluations()
    .filter((item) => isActionableAdvisoryTone(item?.entry?.tone))
    .sort((a, b) => new Date(a.entry.time || 0) - new Date(b.entry.time || 0));
  const forecastSummary = summarizeEvaluations(forecastEvaluations);
  const tradeSummary = summarizeEvaluations(tradeEvaluations);
  const qualifiedSummary = summarizeEvaluations(forecastEvaluations, (item) => item.qualified);
  const averageAbsMove = forecastEvaluations.length
    ? forecastEvaluations.reduce((total, item) => total + Math.abs(item.move), 0) / forecastEvaluations.length
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
    ? `Need ${sampleFloor - qualifiedSummary.count} more forecast calls with score ${advisoryScoreThreshold}+.`
    : isReady
      ? "Qualified forecasts are above the 60% accuracy target."
      : "Qualified forecasts are not reliable enough yet.";
  accuracyHighConvictionEl.textContent = formatPercent(qualifiedSummary.accuracy);
  accuracyHighConvictionCountEl.textContent = `${qualifiedSummary.correct} of ${qualifiedSummary.count} forecast calls with score ${advisoryScoreThreshold}+`;
  accuracyAllCallsEl.textContent = formatPercent(tradeSummary.accuracy);
  accuracyAllCountEl.textContent = `${tradeSummary.correct} of ${tradeSummary.count} closed trades with positive net P/L`;
  if (accuracyAverageMoveEl) {
    accuracyAverageMoveEl.textContent = Number.isFinite(averageAbsMove) ? formatPrice(averageAbsMove) : "-";
  }
  if (accuracyEvaluationWindowEl) {
    accuracyEvaluationWindowEl.textContent = `${forecastSummary.count} forecast calls judged about ${windowMinutes} min later`;
  }
  renderScoreCalibrationBands(forecastEvaluations);
  renderAccuracyBars(forecastEvaluations, tradeEvaluations);
  renderAccuracyOutcomes(forecastEvaluations, tradeEvaluations);
  renderEdgeDashboard(tradeEvaluations);
}

function drawChartMessage(context, canvas, message) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#dbeafe";
  context.font = "700 28px Aptos, Segoe UI, sans-serif";
  context.textAlign = "center";
  context.fillText(message, canvas.width / 2, canvas.height / 2);
}

function getHomeMarketPeriodStart() {
  const option = HOME_MARKET_PERIODS[homeMarketPeriod] || HOME_MARKET_PERIODS.day;
  return option.ms ? Date.now() - option.ms : 0;
}

function normalizeHomeMarketHistorySamples(samples = []) {
  const byTime = new Map();
  samples
    .filter((entry) => {
      const time = getTransactionDate(entry.time).getTime();
      const price = Number(entry.price);
      return Number.isFinite(time) && Number.isFinite(price) && price > 0;
    })
    .forEach((entry) => {
      const time = getTransactionDate(entry.time).getTime();
      const bucket = Math.floor(time / 1000);
      const price = Number(entry.price);
      byTime.set(bucket, {
        time,
        price,
        source: entry.source || "Cloudflare price tick"
      });
    });
  return Array.from(byTime.values()).sort((a, b) => a.time - b.time);
}

function getHomeMarketFallbackSamples() {
  const start = getHomeMarketPeriodStart();
  return normalizeHomeMarketHistorySamples(advisoryHistory
    .filter((entry) => entry.commodity === homeMarketCommodity && getTransactionDate(entry.time).getTime() >= start)
    .map((entry) => ({ time: entry.time, price: entry.price, source: "advisory snapshot" })));
}

function getHomeMarketSamples() {
  const key = `${homeMarketCommodity}:${homeMarketPeriod}`;
  const serverSamples = key === homeMarketHistoryKey && Array.isArray(homeMarketHistory?.samples)
    ? normalizeHomeMarketHistorySamples(homeMarketHistory.samples)
    : [];
  const samples = serverSamples.length ? serverSamples : getHomeMarketFallbackSamples();

  const currentPrice = confirmedLivePrices.has(homeMarketCommodity)
    ? confirmedLivePrices.get(homeMarketCommodity)
    : latestPrices.get(homeMarketCommodity);
  const currentTime = confirmedLivePriceTimes.has(homeMarketCommodity)
    ? confirmedLivePriceTimes.get(homeMarketCommodity)
    : latestPriceTimes.get(homeMarketCommodity);
  const currentTimestamp = getTransactionDate(currentTime || new Date()).getTime();
  if (Number.isFinite(currentPrice) && currentPrice > 0 && Number.isFinite(currentTimestamp)) {
    const byTime = new Map(samples.map((sample) => [Math.floor(sample.time / 1000), sample]));
    byTime.set(Math.floor(currentTimestamp / 1000), {
      time: currentTimestamp,
      price: currentPrice,
      source: "current price"
    });
    return Array.from(byTime.values()).sort((a, b) => a.time - b.time);
  }

  return samples;
}

async function loadHomeMarketPriceHistory() {
  if (!hasHistoryBackend()) return null;
  const key = `${homeMarketCommodity}:${homeMarketPeriod}`;
  const now = Date.now();
  if (homeMarketHistoryRequest && homeMarketHistoryKey === key && now - homeMarketHistoryLoadedAt < HOME_MARKET_REFRESH_MS) {
    return homeMarketHistoryRequest;
  }
  homeMarketHistoryLoadedAt = now;
  homeMarketHistoryRequest = fetchWithTimeout(getPriceHistoryUrl(homeMarketCommodity, homeMarketPeriod), { cache: "default" }, 8000)
    .then(async (response) => {
      if (!response.ok) throw new Error("price history unavailable");
      const data = await response.json();
      homeMarketHistory = data;
      homeMarketHistoryKey = key;
      homeMarketHistoryError = "";
      return data;
    })
    .catch((error) => {
      if (homeMarketHistoryKey !== key) {
        homeMarketHistoryRequest = null;
      }
      throw error;
    });
  return homeMarketHistoryRequest;
}

function renderHomeMarketControls() {
  if (homeMarketSwitcherEl && !homeMarketSwitcherEl.children.length) {
    commodities.forEach(({ id, name }) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.homeMarketCommodity = id;
      button.textContent = name;
      homeMarketSwitcherEl.append(button);
    });
  }

  if (homeMarketRangesEl && !homeMarketRangesEl.children.length) {
    Object.entries(HOME_MARKET_PERIODS).forEach(([key, option]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.homeMarketPeriod = key;
      button.textContent = option.label;
      homeMarketRangesEl.append(button);
    });
  }

  homeMarketSwitcherEl?.querySelectorAll("[data-home-market-commodity]").forEach((button) => {
    button.dataset.active = String(button.dataset.homeMarketCommodity === homeMarketCommodity);
  });
  homeMarketRangesEl?.querySelectorAll("[data-home-market-period]").forEach((button) => {
    button.dataset.active = String(button.dataset.homeMarketPeriod === homeMarketPeriod);
  });
}

function getHomeMarketChange(samples) {
  if (samples.length < 2) return { value: 0, percent: 0 };
  const first = samples[0].price;
  const last = samples[samples.length - 1].price;
  const value = last - first;
  return {
    value,
    percent: first ? (value / first) * 100 : 0
  };
}

function getHomeMarketGapThresholdMs() {
  if (homeMarketPeriod === "hour") return 3 * 60 * 1000;
  if (homeMarketPeriod === "day") return 20 * 60 * 1000;
  if (homeMarketPeriod === "week") return 2 * 60 * 60 * 1000;
  if (homeMarketPeriod === "month") return 8 * 60 * 60 * 1000;
  return 24 * 60 * 60 * 1000;
}

function splitHomeMarketSegments(samples = []) {
  const threshold = getHomeMarketGapThresholdMs();
  const segments = [];
  let current = [];
  samples.forEach((sample, index) => {
    if (index > 0 && sample.time - samples[index - 1].time > threshold) {
      if (current.length) segments.push(current);
      current = [];
    }
    current.push(sample);
  });
  if (current.length) segments.push(current);
  return segments;
}

function renderHomeMarketAlerts(config) {
  if (!homeMarketAlertsEl) return;
  homeMarketAlertsEl.innerHTML = "";

  const expiry = config.contractExpiresAt ? getTransactionDate(config.contractExpiresAt) : null;
  if (expiry && !Number.isNaN(expiry.getTime())) {
    const msUntilExpiry = expiry.getTime() - Date.now();
    const expiryCard = document.createElement("article");
    expiryCard.className = "home-market-alert";
    expiryCard.dataset.kind = "expiry";
    const title = document.createElement("strong");
    const detail = document.createElement("p");
    if (config.rolledFromTicker) {
      title.textContent = "Contract roll active";
      detail.textContent = `${config.rolledFromTicker} is inside the roll window. ComHedge now follows ${config.ticker || config.productId} (${config.contractMonth}) for new advisory prices and paper trades.`;
    } else if (msUntilExpiry > 0 && msUntilExpiry <= 7 * 24 * 60 * 60 * 1000) {
      title.textContent = `This contract expires in ${formatDuration(msUntilExpiry)}`;
      detail.textContent = `${config.ticker || config.productId} expires ${formatTradeTime(expiry)}. The profile roll window controls when ComHedge moves to the next month.`;
    } else {
      title.textContent = `${config.ticker || config.productId || "Contract"} active`;
      detail.textContent = config.contractMonth ? `${config.contractMonth} contract selected.` : "Front contract selected.";
    }
    expiryCard.append(title, detail);
    homeMarketAlertsEl.append(expiryCard);
  }

  const marketStatus = getFuturesMarketStatus();
  const marketCard = document.createElement("article");
  marketCard.className = "home-market-alert";
  marketCard.dataset.kind = marketStatus.isOpen ? "open" : "closed";
  const marketTitle = document.createElement("strong");
  const marketDetail = document.createElement("p");
  marketTitle.textContent = marketStatus.isOpen ? "Market is open" : "Market is closed";
  marketDetail.textContent = marketStatus.isOpen
    ? `${marketStatus.detail} Trading pauses daily from 5 PM-6 PM ET.`
    : `${marketStatus.detail} Trading resumes before new paper entries can open.`;
  marketCard.append(marketTitle, marketDetail);
  homeMarketAlertsEl.append(marketCard);
}

function drawHomeMarketChart(samples) {
  if (!homeMarketChartEl) return;

  const rect = homeMarketChartEl.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  const width = Math.max(640, Math.round((rect.width || 900) * scale));
  const height = Math.max(300, Math.round((rect.height || 320) * scale));
  homeMarketChartEl.width = width;
  homeMarketChartEl.height = height;

  const context = homeMarketChartEl.getContext("2d");
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, width, height);

  if (!samples.length) {
    context.fillStyle = "#334155";
    context.font = `700 ${20 * scale}px Aptos, Segoe UI, sans-serif`;
    context.textAlign = "center";
    context.fillText("Waiting for server price history", width / 2, height / 2);
    return;
  }

  const padding = { top: 20 * scale, right: 34 * scale, bottom: 58 * scale, left: 34 * scale };
  const volumeHeight = 42 * scale;
  const plotHeight = height - padding.top - padding.bottom - volumeHeight;
  const plotWidth = width - padding.left - padding.right;
  const times = samples.map((sample) => sample.time);
  const prices = samples.map((sample) => sample.price);
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const range = Math.max(maxPrice - minPrice, maxPrice * 0.006, 0.5);
  const minY = minPrice - range * 0.16;
  const maxY = maxPrice + range * 0.16;
  const yRange = Math.max(maxY - minY, 0.01);
  const positive = prices[prices.length - 1] >= prices[0];
  const lineColor = positive ? "#00875f" : "#dc2626";
  const fillColor = positive ? "rgba(0, 135, 95, 0.12)" : "rgba(220, 38, 38, 0.12)";
  const xFor = (time) => padding.left + ((time - minTime) / Math.max(maxTime - minTime, 1)) * plotWidth;
  const yFor = (price) => padding.top + (1 - ((price - minY) / yRange)) * plotHeight;
  const zeroY = yFor(prices[0]);

  context.strokeStyle = "rgba(15, 23, 42, 0.36)";
  context.setLineDash([2 * scale, 8 * scale]);
  context.beginPath();
  context.moveTo(padding.left, zeroY);
  context.lineTo(width - padding.right, zeroY);
  context.stroke();
  context.setLineDash([]);

  const segments = splitHomeMarketSegments(samples);
  segments.forEach((segment) => {
    if (!segment.length) return;
    context.beginPath();
    segment.forEach((sample, index) => {
      const x = xFor(sample.time);
      const y = yFor(sample.price);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.lineTo(xFor(segment[segment.length - 1].time), padding.top + plotHeight);
    context.lineTo(xFor(segment[0].time), padding.top + plotHeight);
    context.closePath();
    context.fillStyle = fillColor;
    context.fill();

    context.beginPath();
    segment.forEach((sample, index) => {
      const x = xFor(sample.time);
      const y = yFor(sample.price);
      if (index === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.strokeStyle = lineColor;
    context.lineWidth = 3 * scale;
    context.setLineDash([]);
    context.stroke();
  });

  context.strokeStyle = "rgba(100, 116, 139, 0.55)";
  context.lineWidth = 2 * scale;
  context.setLineDash([7 * scale, 8 * scale]);
  segments.slice(1).forEach((segment, index) => {
    const previousSegment = segments[index];
    const previous = previousSegment[previousSegment.length - 1];
    const next = segment[0];
    context.beginPath();
    context.moveTo(xFor(previous.time), yFor(previous.price));
    context.lineTo(xFor(next.time), yFor(next.price));
    context.stroke();
  });
  context.setLineDash([]);

  context.fillStyle = "#475569";
  context.font = `${13 * scale}px Aptos, Segoe UI, sans-serif`;
  context.textAlign = "right";
  context.fillText(formatPrice(maxPrice), width - padding.right, yFor(maxPrice) - 8 * scale);
  context.textAlign = "left";
  context.fillText(formatPrice(minPrice), padding.left, yFor(minPrice) + 18 * scale);

  const volumeTop = height - padding.bottom + 18 * scale;
  const maxMove = Math.max(...samples.map((sample, index) => (
    index === 0 ? 0 : Math.abs(sample.price - samples[index - 1].price)
  )), 0.01);
  const barCount = Math.min(26, samples.length);
  const step = Math.max(1, Math.floor(samples.length / barCount));
  const selected = samples.filter((_, index) => index % step === 0).slice(-barCount);
  const barGap = 6 * scale;
  const barWidth = Math.max(4 * scale, (plotWidth - (selected.length - 1) * barGap) / Math.max(selected.length, 1));
  selected.forEach((sample, index) => {
    const previous = index > 0 ? selected[index - 1].price : sample.price;
    const move = Math.abs(sample.price - previous);
    const barHeight = Math.max(7 * scale, (move / maxMove) * 34 * scale);
    const x = padding.left + index * (barWidth + barGap);
    context.fillStyle = "rgba(148, 163, 184, 0.42)";
    context.fillRect(x, volumeTop + 34 * scale - barHeight, barWidth, barHeight);
  });
}

function renderHomeMarketPreview() {
  if (!homeMarketPreviewEl) return;
  renderHomeMarketControls();

  const commodity = commodities.find(({ id }) => id === homeMarketCommodity) || commodities[0];
  const config = getEffectiveCommodityConfig(commodity.id);
  const samples = getHomeMarketSamples();
  const latest = samples[samples.length - 1];
  const change = getHomeMarketChange(samples);
  const positive = change.value >= 0;

  if (homeMarketTitleEl) homeMarketTitleEl.textContent = `${commodity.name} Futures`;
  if (homeMarketContractEl) {
    homeMarketContractEl.textContent = [config.ticker, config.contractMonth].filter(Boolean).join(" / ") || "Reference";
  }
  if (homeMarketPriceEl) {
    homeMarketPriceEl.textContent = latest ? formatPrice(latest.price) : UNAVAILABLE_TEXT;
    homeMarketPriceEl.dataset.direction = positive ? "up" : "down";
  }
  if (homeMarketDetailEl) {
    const rangeLabel = HOME_MARKET_PERIODS[homeMarketPeriod]?.label || "1D";
    homeMarketDetailEl.textContent = latest
      ? `${positive ? "Up" : "Down"} ${formatSignedMoney(change.value)} (${formatPercent(change.percent)}) over ${rangeLabel}`
      : "Waiting for Cloudflare price history.";
    homeMarketDetailEl.dataset.direction = positive ? "up" : "down";
  }
  if (homeMarketSourceEl) {
    const updatedAt = latest ? formatPriceTime(latest.time) : "not available";
    const source = homeMarketHistoryKey === `${homeMarketCommodity}:${homeMarketPeriod}` && homeMarketHistory
      ? `Server price history / ${homeMarketHistory.sampleCount || samples.length} points`
      : homeMarketHistoryError
        ? "Advisory fallback while price history loads"
        : "Server snapshot";
    homeMarketSourceEl.textContent = `${source} / ${updatedAt} / refreshes about once per minute`;
  }

  drawHomeMarketChart(samples);
  renderHomeMarketAlerts(config);
  lastHomeMarketRenderAt = Date.now();
}

async function refreshHomeMarketPreview() {
  if (!homeMarketPreviewEl || activeSection !== "home") return;
  renderHomeMarketPreview();
  const tasks = [];
  if (hasHistoryBackend()) tasks.push(loadSharedAdvisorySummary());
  if (hasHistoryBackend()) {
    tasks.push(loadHomeMarketPriceHistory().catch((error) => {
      homeMarketHistoryError = error.message || "price history unavailable";
      return null;
    }));
  }
  tasks.push(loadSnapshotPrices().then((data) => applyAdvisorySummaryPrices(data?.prices || {})));
  await Promise.allSettled(tasks);
  renderHomeMarketPreview();
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
    return null;
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
    let started = false;
    values.forEach((value, index) => {
      const x = xFor(times[index]);
      const y = yFor(value, index);
      if (!Number.isFinite(y)) {
        started = false;
        return;
      }
      if (!started) {
        context.moveTo(x, y);
        started = true;
      } else {
        context.lineTo(x, y);
      }
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
  const title = `${commodities.find(({ id }) => id === advisoryCommodityFilter)?.name || "Commodity"} advisory`;
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
    if (!Number.isFinite(signalY)) return;
    const color = entry.tone === "short" ? "#fb7185" : entry.tone === "long" ? "#22d3a6" : "#f4c152";

    context.beginPath();
    context.fillStyle = color;
    context.arc(x, signalY, 5 * scale, 0, Math.PI * 2);
    context.fill();
  });

  let latestActionableIndex = -1;
  for (let index = samples.length - 1; index >= 0; index -= 1) {
    if (isActionableAdvisoryTone(samples[index].tone)) {
      latestActionableIndex = index;
      break;
    }
  }

  if (latestActionableIndex >= 0) {
    const latest = samples[latestActionableIndex];
    const latestX = xFor(times[latestActionableIndex]);
    const latestY = signalValues[latestActionableIndex];
    const latestText = latest.tone === "short" ? "Short advisory" : "Long advisory";
    context.textAlign = latestX > width * 0.72 ? "right" : "left";
    context.fillStyle = latest.tone === "short" ? "#fb7185" : "#22d3a6";
    context.font = `700 ${12 * scale}px Aptos, Segoe UI, sans-serif`;
    context.fillText(latestText, latestX + (latestX > width * 0.72 ? -10 : 10) * scale, latestY - 10 * scale);
  }
}

async function fetchWithTimeout(url, options = {}, timeoutMs = BACKEND_REQUEST_TIMEOUT_MS) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timeout);
  }
}

function getNextBackendHistorySaveDelay() {
  if (isBackendBackoffActive(nextBackendTransactionSyncAt)) {
    return Math.max(0, nextBackendTransactionSyncAt - Date.now());
  }

  if (!lastBackendHistorySaveAttemptAt) return BACKEND_HISTORY_SAVE_DEBOUNCE_MS;

  const sinceLastAttempt = Date.now() - lastBackendHistorySaveAttemptAt;
  return Math.max(
    BACKEND_HISTORY_SAVE_DEBOUNCE_MS,
    BACKEND_HISTORY_MIN_WRITE_INTERVAL_MS - sinceLastAttempt,
    0
  );
}

async function saveSharedTransactionHistory() {
  if (isLocalMockBackendEnabled()) {
    backendHistoryDirty = false;
    pendingHistorySaveRetry = false;
    backendHistoryReady = true;
    sharedHistoryStatusEl.textContent = "Mock backend active; ledger kept local";
    return true;
  }

  const apiUrl = getHistoryApiUrl();
  if (!apiUrl) {
    sharedHistoryStatusEl.textContent = "Local ledger active; backend URL unavailable";
    pendingHistorySaveRetry = true;
    return false;
  }
  if (CLOUDFLARE_SOURCE_OF_TRUTH_REQUIRED) {
    backendHistoryDirty = false;
    pendingHistorySaveRetry = false;
    sharedHistoryStatusEl.textContent = "Cloudflare ledger is read-only from the browser";
    return true;
  }
  if (backendHistoryWriteInFlight) {
    backendHistoryDirty = true;
    pendingHistorySaveRetry = true;
    return false;
  }
  backendHistoryWriteInFlight = true;
  backendHistoryDirty = false;
  lastBackendHistorySaveAttemptAt = Date.now();

  try {
    sharedHistoryStatusEl.textContent = "Saving queued ledger to backend";
    const response = await fetchWithTimeout(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(getSharedHistoryPayload())
    });
    if (!response.ok) throw new Error("backend save failed");

    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    const summaryRows = Array.isArray(data?.summary?.rows) ? data.summary.rows : [];
    replaceTransactionHistory(entries, { preserveOpenTrades: false });
    paperLedgerSummaryRows = summaryRows;
    paperLedgerSummaryLoadedAt = summaryRows.length ? Date.now() : 0;
    reconcilePaperStateFromHistory();
    sharedHistoryStatusEl.textContent = `Backend saved ${entries.length || transactionHistory.length} rows`;
    backendHistoryReady = true;
    nextBackendTransactionSyncAt = 0;
    pendingHistorySaveRetry = false;
    return true;
  } catch (error) {
    nextBackendTransactionSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    pendingHistorySaveRetry = true;
    if (CLOUDFLARE_SOURCE_OF_TRUTH_REQUIRED && hasHistoryBackend()) {
      clearCloudRuntimeLedgerState();
      sharedHistoryStatusEl.textContent = `Cloudflare ledger unavailable; stale browser ledger disabled. ${getBackendBackoffText(nextBackendTransactionSyncAt)}`;
    } else {
      sharedHistoryStatusEl.textContent = `Local ledger active; ${getBackendBackoffText(nextBackendTransactionSyncAt)}`;
    }
    return false;
  } finally {
    backendHistoryWriteInFlight = false;
    if (backendHistoryDirty) queueSharedTransactionHistorySave();
  }
}

function queueSharedTransactionHistorySave({ immediate = false } = {}) {
  if (!BROWSER_PAPER_EXECUTION_ENABLED && hasHistoryBackend()) {
    backendHistoryDirty = false;
    pendingHistorySaveRetry = false;
    backendHistoryReady = true;
    sharedHistoryStatusEl.textContent = "Cloudflare ledger active; browser paper writes disabled";
    return;
  }

  if (isLocalMockBackendEnabled()) {
    backendHistoryDirty = false;
    pendingHistorySaveRetry = false;
    backendHistoryReady = true;
    sharedHistoryStatusEl.textContent = "Mock backend active; ledger kept local";
    return;
  }

  backendHistoryDirty = true;
  pendingHistorySaveRetry = true;

  if (backendHistorySaveTimer) return;

  const delay = immediate ? 0 : getNextBackendHistorySaveDelay();
  const minutes = Math.max(1, Math.ceil(delay / 60000));
  sharedHistoryStatusEl.textContent = delay
    ? `Local ledger saved; backend sync queued in ${minutes} min`
    : "Local ledger saved; backend sync queued";

  backendHistorySaveTimer = window.setTimeout(() => {
    backendHistorySaveTimer = null;
    saveSharedTransactionHistory().catch(() => {
      pendingHistorySaveRetry = true;
    });
  }, delay);
}

async function cleanSharedTransactionHistory() {
  if (isLocalMockBackendEnabled()) {
    replaceTransactionHistory([]);
    reconcilePaperStateFromHistory();
    sharedHistoryStatusEl.textContent = "Mock ledger cleared locally";
    calculateSignal();
    return true;
  }

  const apiUrl = getHistoryApiUrl();
  if (!apiUrl) {
    sharedHistoryStatusEl.textContent = "Add backend URL to clean";
    return false;
  }

  try {
    sharedHistoryStatusEl.textContent = "Cleaning backend ledger";
    const response = await fetchWithTimeout(apiUrl, {
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
  if (isLocalMockBackendEnabled()) {
    return loadLocalMockTransactionHistory();
  }

  if (!hasHistoryBackend()) {
    await loadBundledTransactionHistory();
    backendHistoryReady = true;
    sharedHistoryStatusEl.textContent = "Local ledger active; backend URL unavailable";
    return false;
  }
  if (!manual && isBackendBackoffActive(nextBackendTransactionSyncAt)) {
    if (CLOUDFLARE_SOURCE_OF_TRUTH_REQUIRED) {
      clearCloudRuntimeLedgerState();
      sharedHistoryStatusEl.textContent = `Cloudflare ledger unavailable; stale browser ledger disabled. ${getBackendBackoffText(nextBackendTransactionSyncAt)}`;
      renderLeaderBoard();
    }
    return false;
  }
  if (backendSyncInFlight || backendHistoryWriteInFlight) return false;
  backendSyncInFlight = true;

  try {
    sharedHistoryStatusEl.textContent = "Syncing backend";
    const response = await fetchWithTimeout(`${getMasterHistoryUrl()}?ts=${Date.now()}`, { cache: "no-store" }, CLOUD_SOURCE_FETCH_TIMEOUT_MS);
    if (!response.ok) throw new Error("master history unavailable");

    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    const summaryRows = Array.isArray(data?.summary?.rows) ? data.summary.rows : [];
    replaceTransactionHistory(entries, { preserveOpenTrades: false });
    paperLedgerSummaryRows = summaryRows;
    paperLedgerSummaryLoadedAt = summaryRows.length ? Date.now() : 0;
    reconcilePaperStateFromHistory();
    backendHistoryReady = true;
    transactionHistoryLoadedFromBackend = true;
    sharedHistoryStatusEl.textContent = `Backend synced ${entries.length} row${entries.length === 1 ? "" : "s"}`;
    nextBackendTransactionSyncAt = 0;
    calculateSignal();
    renderLeaderBoard();
    return true;
  } catch (error) {
    backendHistoryReady = true;
    nextBackendTransactionSyncAt = Date.now() + BACKEND_FAILURE_BACKOFF_MS;
    if (CLOUDFLARE_SOURCE_OF_TRUTH_REQUIRED) {
      clearCloudRuntimeLedgerState();
      sharedHistoryStatusEl.textContent = manual
        ? "Cloudflare ledger sync failed; stale browser ledger disabled"
        : `Cloudflare ledger unavailable; stale browser ledger disabled. ${getBackendBackoffText(nextBackendTransactionSyncAt)}`;
    } else {
      sharedHistoryStatusEl.textContent = manual
        ? "Backend sync failed; using local ledger"
        : `Backend offline; using local ledger. ${getBackendBackoffText(nextBackendTransactionSyncAt)}`;
      await loadBundledTransactionHistory();
      transactionHistoryLoadedFromBackend = false;
    }
    calculateSignal();
    renderLeaderBoard();
    return false;
  } finally {
    backendSyncInFlight = false;
  }
}

async function autoSyncTransactionHistory() {
  if (!hasHistoryBackend() || backendSyncInFlight || backendHistoryWriteInFlight) return false;
  if (isBackendBackoffActive(nextBackendTransactionSyncAt)) return false;

  if (pendingHistorySaveRetry || backendHistoryDirty) {
    queueSharedTransactionHistorySave();
    return false;
  }

  return loadSharedTransactionHistory(false);
}

async function refreshLeaderBoardData() {
  if (leaderboardRefreshEl) leaderboardRefreshEl.textContent = "Refreshing";
  try {
    await Promise.all([
      loadLeaderBoardSummary(true),
      loadLeaderBoardSchedulerStatus(true)
    ]);
  } finally {
    renderLeaderBoard();
    if (leaderboardRefreshEl) leaderboardRefreshEl.textContent = "Refresh";
  }
}

async function loadLeaderBoardSummary(manual = false) {
  if (!hasHistoryBackend()) return false;
  if (!leaderBoardSummaryLoadedAt || leaderBoardSummaryPeriod !== leaderboardPeriodMode) {
    loadLeaderBoardDisplayCache(leaderboardPeriodMode);
  }
  leaderBoardSummaryRefreshing = true;
  leaderBoardSummaryError = "";
  renderLeaderBoard();
  try {
    const refreshParam = manual ? "&refresh=1" : "";
    const url = `${getLeaderBoardUrl()}?period=${encodeURIComponent(leaderboardPeriodMode)}${refreshParam}&ts=${Date.now()}`;
    const response = await fetchWithTimeout(url, { cache: "no-store" }, CLOUD_SOURCE_FETCH_TIMEOUT_MS);
    if (!response.ok) throw new Error("leaderboard unavailable");
    const payload = await response.json();
    leaderBoardSummaryRows = Array.isArray(payload.rows) ? payload.rows : [];
    leaderBoardSummaryLoadedAt = Date.now();
    leaderBoardSummaryPeriod = payload.period || leaderboardPeriodMode;
    leaderBoardSummaryError = "";
    leaderBoardSummaryFromDisplayCache = false;
    transactionHistoryLoadedFromBackend = true;
    saveLeaderBoardDisplayCache(payload);
    renderLeaderBoard();
    return true;
  } catch (error) {
    if (!leaderBoardSummaryLoadedAt || leaderBoardSummaryPeriod !== leaderboardPeriodMode) {
      loadLeaderBoardDisplayCache(leaderboardPeriodMode);
    }
    leaderBoardSummaryError = "Leaderboard server unavailable";
    if (manual && leaderboardUpdatedEl) leaderboardUpdatedEl.textContent = getLeaderBoardUpdatedText();
    renderLeaderBoard();
    return false;
  } finally {
    leaderBoardSummaryRefreshing = false;
    renderLeaderBoard();
  }
}

async function loadLeaderBoardSchedulerStatus(manual = false) {
  if (!hasHistoryBackend()) return false;
  try {
    const response = await fetchWithTimeout(`${getPaperSchedulerUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("scheduler unavailable");
    const payload = await response.json();
    leaderBoardSchedulerHealth = payload.schedulerHealth || null;
    leaderBoardSchedulerStatus.clear();
    (Array.isArray(payload.users) ? payload.users : []).forEach((user) => {
      const email = normalizeEmail(user.email);
      if (!email) return;
      leaderBoardSchedulerStatus.set(email, {
        source: "Live Cloudflare scheduler settings",
        enabled: Boolean(user.enabled),
        commodities: Array.isArray(user.commodities) ? user.commodities : [],
        entryThreshold: user.entryThreshold,
        maxOpenTrades: user.maxOpenTrades,
        lastEvaluationAt: user.lastEvaluationAt,
        lastDecision: user.lastDecision,
        gate: user.gate || "",
        audit: user.audit || null
      });
    });
    const runs = Array.isArray(payload.runs) ? payload.runs : [];
    runs
      .slice()
      .sort((left, right) => getTransactionDate(left.startedAt) - getTransactionDate(right.startedAt))
      .forEach((run) => {
        const evaluatedAt = run.finishedAt || run.startedAt || null;
        (Array.isArray(run.decisions) ? run.decisions : []).forEach((decision) => {
          const email = normalizeEmail(decision.email);
          if (!email) return;
          const existing = leaderBoardSchedulerStatus.get(email) || {};
          const existingTime = existing.lastEvaluationAt ? getTransactionDate(existing.lastEvaluationAt).getTime() : 0;
          const runTime = evaluatedAt ? getTransactionDate(evaluatedAt).getTime() : 0;
          const existingDecision = existing.lastDecision || DEFAULT_SERVER_PAPER_TRADING.lastDecision;
          const shouldUseRun = !existing.lastEvaluationAt
            || existingDecision === DEFAULT_SERVER_PAPER_TRADING.lastDecision
            || (runTime && runTime >= existingTime);
          if (!shouldUseRun) return;
          leaderBoardSchedulerStatus.set(email, {
            ...existing,
            source: "Recent Cloudflare scheduler run",
            lastEvaluationAt: evaluatedAt,
            lastDecision: decision.decision || existingDecision,
            gate: decision.gate || existing.gate || "",
            audit: decision.audit || existing.audit || null
          });
        });
      });
    leaderBoardSchedulerLoadedAt = Date.now();
    renderLeaderBoard();
    if (activeSection === "users") renderUserManagement();
    return true;
  } catch (error) {
    if (manual && leaderboardUpdatedEl) leaderboardUpdatedEl.textContent = "Scheduler status unavailable";
    return false;
  }
}

async function initializeBackendState() {
  if (hasHistoryBackend()) {
    sharedHistoryStatusEl.textContent = "Loading backend ledger";
  }

  const needsLedger = activeSection === "trading" || activeSection === "actual-trades";
  const needsLeaderboard = activeSection === "leaderboard";
  const needsUserProfiles = activeSection === "users";
  const needsAdvisory = activeSection === "advisories";
  const needsHomePreview = activeSection === "home";
  const historyLoad = needsLedger ? autoSyncTransactionHistory() : Promise.resolve(false);
  const settingsLoad = loadSharedSettings();
  const leaderboardLoad = needsLeaderboard ? loadLeaderBoardSummary() : Promise.resolve(false);
  const schedulerLoad = (needsLeaderboard || needsUserProfiles) ? loadLeaderBoardSchedulerStatus() : Promise.resolve(false);
  const advisorySummaryLoad = (needsAdvisory || needsHomePreview) ? loadSharedAdvisorySummary() : Promise.resolve(false);
  const microPredictionLoad = needsAdvisory ? loadSharedMicroPredictions() : Promise.resolve(false);
  const openBrainLoad = activeSection === "open-brain" ? loadOpenBrainEventsFromBackend() : Promise.resolve(false);
  const [loadedHistory] = await Promise.all([
    historyLoad,
    settingsLoad,
    leaderboardLoad,
    schedulerLoad,
    advisorySummaryLoad,
    microPredictionLoad,
    openBrainLoad
  ]);

  calculateSignal();
  closeOnlyPaperSweep();
  if (needsAdvisory) {
    window.setTimeout(() => {
      loadSharedAdvisoryHistory().catch(() => {});
    }, 750);
  }
  return loadedHistory;
}

async function recordTransaction(entry) {
  const transaction = normalizeTransactionEntry({
    id: nextTransactionId,
    time: new Date(),
    tradeMode: PAPER_TRADE_MODE,
    userEmail: getCurrentLedgerEmail(),
    userName: getCurrentUserProfile()?.name || "",
    ...entry
  });

  if (isClosingTransaction(transaction)) {
    // Cross-user check: if any browser (any user) has already recorded a close
    // for this trade, do not write a duplicate.
    const existingClose = getAllTransactionsForLifecycleChecks().find((candidate) => {
      if (!isClosingTransaction(candidate)) return false;
      if (!samePaperTradeIdentity(candidate, transaction)) return false;
      const candidateClosedAt = getTransactionDate(candidate.closedAt || candidate.time);
      const transactionOpenedAt = getTransactionDate(transaction.openedAt || transaction.time);
      const closesAfterThisOpen = Number.isNaN(transactionOpenedAt.getTime())
        || Number.isNaN(candidateClosedAt.getTime())
        || candidateClosedAt >= transactionOpenedAt;
      return closesAfterThisOpen;
    });

    if (existingClose) return normalizeTransactionEntry(existingClose);
  }

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

function hasAnyPaperActionPending() {
  return Array.from(pendingPaperActions.keys()).some((commodity) => isPaperActionPending(commodity));
}

function markPaperActionPending(commodity) {
  pendingPaperActions.set(commodity, Date.now());
}

function clearPaperActionPending(commodity) {
  pendingPaperActions.delete(commodity);
}

function getCurrentUserActivePaperTrades() {
  const active = new Map();
  getUserScopedTransactions()
    .slice()
    .sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time))
    .forEach((entry) => {
      const identityKey = getTradeIdentityKey(entry);
      const lifecycleKey = getTradeLifecycleKey(entry);
      const key = identityKey || lifecycleKey;
      if (!key) return;

      if (isOpeningTransaction(entry)) {
        active.set(key, tradeFromOpeningEntry(entry));
        return;
      }

      if (isClosingTransaction(entry)) {
        if (identityKey) active.delete(identityKey);
        active.delete(lifecycleKey);
        Array.from(active.entries()).forEach(([activeKey, activeTrade]) => {
          if (closingEntryMatchesActiveTrade(entry, activeTrade)) active.delete(activeKey);
        });
      }
    });

  openPaperTrades.forEach((trade) => {
    if (!trade || !isTransactionForCurrentUser(trade) || isPaperTradeClosedInLedger(trade)) return;
    active.set(getOpenTradeIdentityKey(trade), trade);
  });

  return Array.from(active.values());
}

function getCurrentUserEnabledActivePaperTrades() {
  return getCurrentUserActivePaperTrades().filter((trade) => userCanTradeCommodity(trade.commodity));
}

function getBlockingOpenPaperTradeForNewEntry(commodity) {
  const activeTrades = getCurrentUserEnabledActivePaperTrades();
  const sameCommodity = activeTrades.find((trade) => trade.commodity === commodity);
  if (sameCommodity) return sameCommodity;

  const strategy = getCurrentUserStrategy();
  return isMartingaleStrategy(strategy) ? activeTrades[0] || null : null;
}

async function openPaperTrade(commodity, commodityMeta, signal, tradePlan) {
  const side = getSignalSide(signal);
  if (!side) return;
  if (getBlockingOpenPaperTradeForNewEntry(commodity) || hasAnyPaperActionPending()) return;
  markPaperActionPending(commodity);

  const entryPrice = tradePlan.livePrice;
  const contracts = tradePlan.plannedContracts;
  const marginRequirement = side === "short" ? tradePlan.shortMargin : tradePlan.longMargin;
  const capital = marginRequirement * contracts;
  const notionalValue = entryPrice * tradePlan.contractMultiplier * contracts;
  const config = getEffectiveCommodityConfig(commodity);
  const openFee = getEstimatedFees(config, contracts, 1);
  const estimatedExitFee = getEstimatedFees(config, contracts, 1);
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

  if (isPaperTradeClosedInLedger(trade)) {
    openPaperTrades.delete(commodity);
    clearPaperActionPending(commodity);
    savePaperState();
    return;
  }

  const grossPnl = getTradeGrossPnl(trade, exitPrice);
  const config = getEffectiveCommodityConfig(commodity);
  const closeFee = Number(trade.estimatedExitFee) || getEstimatedFees(config, trade.contracts, 1);
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

function getPaperExitTrigger(commodity, trade, fallbackPrice = null) {
  if (!trade) return null;
  const livePrice = Number.isFinite(Number(fallbackPrice)) && Number(fallbackPrice) > 0
    ? Number(fallbackPrice)
    : getUsableMarketPrice(commodity);
  const targetPrice = Number(trade.targetPrice);
  const stopPrice = Number(trade.stopPrice);

  if (!Number.isFinite(livePrice) || livePrice <= 0) return null;
  if (!Number.isFinite(targetPrice) || !Number.isFinite(stopPrice)) return null;

  const hitTarget = trade.side === "short"
    ? livePrice <= targetPrice
    : livePrice >= targetPrice;
  const hitStop = trade.side === "short"
    ? livePrice >= stopPrice
    : livePrice <= stopPrice;

  if (hitTarget) {
    return {
      price: livePrice,
      reason: trade.side === "short" ? "COVER TARGET" : "SELL TARGET"
    };
  }

  if (hitStop) {
    return {
      price: livePrice,
      reason: trade.side === "short" ? "COVER STOP" : "SELL STOP"
    };
  }

  return null;
}

function queuePaperExitIfTriggered(commodity, trade, fallbackPrice = null) {
  if (!BROWSER_PAPER_EXECUTION_ENABLED) return false;
  const trigger = getPaperExitTrigger(commodity, trade, fallbackPrice);
  if (!trigger) return false;
  closePaperTrade(commodity, trigger.price, trigger.reason).catch((error) => {
    console.warn("Paper close failed", error);
  });
  return true;
}

function executePaperTrading(commodity, commodityMeta, signal, tradePlan, options = {}) {
  reconcilePaperStateFromHistory();
  if (!BROWSER_PAPER_EXECUTION_ENABLED) return;

  const openTrade = getOpenPaperTrade(commodity) || getBlockingOpenPaperTradeForNewEntry(commodity);
  if (openTrade) {
    if (openTrade.commodity === commodity) queuePaperExitIfTriggered(commodity, openTrade, tradePlan.livePrice);
    return;
  }

  if (!tradePlan.priceReady) return;

  const allowOpen = options.allowOpen !== false;
  const regimeAllowsOpen = !tradePlan.regime?.enabled
    || (
      martingaleStep <= tradePlan.regime.maxMartingaleStep
      && !tradePlan.regime.blocksWeakSetup
      && tradePlan.regime.confirmationOk
    );
  const secondOpinionsAllowOpen = !tradePlan.secondOpinionConsensus?.blocksEntry;
  if (allowOpen && regimeAllowsOpen && secondOpinionsAllowOpen && getSignalSide(signal) && signal.conviction >= tradePlan.entryThreshold) {
    openPaperTrade(commodity, commodityMeta, signal, tradePlan);
  }
}

async function closeOnlyPaperSweep() {
  if (!BROWSER_PAPER_EXECUTION_ENABLED) return;
  reconcilePaperStateFromHistory();
  const baseSignals = readBaseSignals();
  const openEntries = Array.from(openPaperTrades.entries());
  for (const [commodity, openTrade] of openEntries) {
    const commodityMeta = commodities.find(({ id }) => id === commodity) || {
      id: commodity,
      name: openTrade.commodityName || commodity
    };

    // Ownership guard: never close a trade that doesn't belong to the current
    // user. This prevents one user's browser from firing duplicate close
    // orders for another user's trade if a stale openPaperTrades entry leaks
    // in via localStorage or a partial sync.
    const candidate = openPaperTrades.get(commodity);
    if (candidate && !isTransactionForCurrentUser(candidate)) {
      openPaperTrades.delete(commodity);
      savePaperState();
      continue;
    }

    // If a close has already been recorded for this trade by any browser,
    // drop it locally instead of re-firing a redundant close order.
    if (candidate && hasClosingTransactionForTrade(candidate)) {
      openPaperTrades.delete(commodity);
      savePaperState();
      continue;
    }

    const lastPriceCheck = lastPaperClosePriceChecks.get(commodity) || 0;
    const shouldRefreshForOpenTrade = !isUsableMarketPrice(commodity)
      || Date.now() - lastPriceCheck >= PAPER_CLOSE_PRICE_REFRESH_MS;

    if (shouldRefreshForOpenTrade) {
      lastPaperClosePriceChecks.set(commodity, Date.now());
      await refreshCoinbasePrice(commodity, { runCloseSweep: false, force: true });
    }

    const signal = scoreCommodity(commodity, baseSignals);
    const tradePlan = buildTradePlan(commodity, signal);
    if (!queuePaperExitIfTriggered(commodity, openTrade, tradePlan.livePrice)) {
      executePaperTrading(commodity, commodityMeta, signal, tradePlan, { allowOpen: false });
    }
  }
}

function getPaperDecision(signal, tradePlan, openTrade) {
  const signalSide = getSignalSide(signal);
  const priceText = formatPrice(tradePlan.livePrice);
  const thresholdText = `${signal.conviction}/${tradePlan.entryThreshold}`;
  const thresholdSource = tradePlan.entryThresholdSource || "trading";
  const karpathyText = ` Advisory conviction is ${signal.conviction}; ${thresholdSource} trading threshold is ${tradePlan.entryThreshold}; learned Karpathy recommendation is ${tradePlan.learnedThreshold}.`;

  if (!tradePlan.priceReady) {
    return {
      title: "Waiting for live price",
      detail: "The paper trader needs Coinbase WebSocket, Coinbase REST, or a fresh Cloudflare price snapshot before it can evaluate entries."
    };
  }

  if (openTrade) {
    return {
      title: `${formatSide(openTrade.side)} trade open`,
      detail: `Watching ${priceText} against target ${formatPrice(openTrade.targetPrice)} and stop loss ${formatPrice(getStopLossDisplayPrice(openTrade))}.`
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

  if (tradePlan.secondOpinionConsensus?.blocksEntry) {
    return {
      title: "No trade: second opinions block",
      detail: tradePlan.secondOpinionConsensus.detail
    };
  }

  if (tradePlan.regime?.enabled && martingaleStep > tradePlan.regime.maxMartingaleStep) {
    return {
      title: `No trade: ${tradePlan.regime.regime} regime step cap`,
      detail: `The current Martingale step is ${martingaleStep}, but this regime caps recovery steps at ${tradePlan.regime.maxMartingaleStep}.`
    };
  }

  if (tradePlan.regime?.enabled && tradePlan.regime.blocksWeakSetup) {
    return {
      title: `No trade: ${tradePlan.regime.regime} regime blocks C setup`,
      detail: `The profile requires smaller/fewer recovery steps in flat or mixed tape. Edge is ${tradePlan.regime.edgePercent}% and volatility is ${tradePlan.regime.volatility.toFixed(2)} bps.`
    };
  }

  if (tradePlan.regime?.enabled && !tradePlan.regime.confirmationOk) {
    return {
      title: `No trade: ${tradePlan.regime.regime} confirmation incomplete`,
      detail: `The profile requires sustained trend, VWAP confirmation, and enough volatility before sizing up. Edge is ${tradePlan.regime.edgePercent}% and momentum is ${tradePlan.regime.momentumAligned ? "aligned" : "not aligned"}.`
    };
  }

  if (isPaperActionPending(commoditySelect.value)) {
    return {
      title: "Trade order pending",
      detail: "A sandbox/open or close request is already in flight, so the bot is avoiding duplicate trades."
    };
  }

  if (!BROWSER_PAPER_EXECUTION_ENABLED) {
    return {
      title: `Cloudflare scheduler ready for ${signalSide}`,
      detail: `Browser execution is disabled. The Cloudflare Worker scheduler is the source of truth and will apply this advisory, second-opinion gate, market calendar, and Martingale rules from D1. Current price is ${priceText}.${karpathyText}`
    };
  }

  return {
    title: `Ready to open ${signalSide}`,
    detail: `Conviction ${thresholdText} clears the ${thresholdSource} trading threshold. Step ${martingaleStep} would commit about ${formatMoney(tradePlan.nextCapital)} at ${priceText}.${karpathyText}`
  };
}

function loadPaperDecisionLog() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(PAPER_DECISION_LOG_KEY) || "[]");
    paperDecisionLog = Array.isArray(stored) ? stored.filter(Boolean).slice(0, PAPER_DECISION_LOG_LIMIT) : [];
  } catch (error) {
    paperDecisionLog = [];
  }
}

function savePaperDecisionLog() {
  try {
    window.localStorage.setItem(PAPER_DECISION_LOG_KEY, JSON.stringify(paperDecisionLog.slice(0, PAPER_DECISION_LOG_LIMIT)));
  } catch (error) {
    // Decision logging is diagnostic only; never block trading on storage failure.
  }
}

function getDecisionStateLabel(decision, openTrade, signal) {
  const title = String(decision?.title || "").toLowerCase();
  if (openTrade) return "Open";
  if (title.includes("ready")) return "Ready";
  if (title.includes("pending")) return "Pending";
  if (title.includes("backend") || title.includes("block")) return "Blocked";
  if (title.includes("price")) return "No price";
  if (title.includes("conviction")) return "Below threshold";
  if (!getSignalSide(signal)) return "Wait";
  return "Waiting";
}

function buildPaperDecisionLogEntry(commodity, signal, tradePlan, decision, openTrade, openPl, marketStatus) {
  const commodityMeta = commodities.find(({ id }) => id === commodity) || { id: commodity, name: commodity };
  const latestLLM = getLatestLLMConvictionForCommodity(commodity);
  const price = Number.isFinite(tradePlan.livePrice) ? Number(tradePlan.livePrice) : null;
  const localConviction = parseOptionalNumber(signal?.conviction);
  const llmConviction = parseOptionalNumber(latestLLM?.conviction);
  const threshold = parseOptionalNumber(tradePlan?.entryThreshold);

  return {
    id: `decision-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    time: new Date().toISOString(),
    userEmail: getCurrentLedgerEmail(),
    commodity,
    commodityName: commodityMeta.name,
    contract: tradePlan?.productId || openTrade?.contract || "",
    state: getDecisionStateLabel(decision, openTrade, signal),
    side: openTrade?.side || getSignalSide(signal) || "wait",
    price,
    priceSource: tradePlan?.priceSource || getUsableMarketPriceSource(commodity) || "",
    entryPrice: Number.isFinite(tradePlan?.entryPrice) ? Number(tradePlan.entryPrice) : null,
    targetPrice: Number.isFinite(tradePlan?.targetPrice) ? Number(tradePlan.targetPrice) : null,
    stopPrice: Number.isFinite(tradePlan?.stopPrice) ? Number(tradePlan.stopPrice) : null,
    localConviction,
    localBaseConviction: parseOptionalNumber(signal?.baseConviction),
    karpathyAdjustment: parseOptionalNumber(signal?.karpathyAdjustment),
    localConvictionUpdatedAt: lastPrimarySignal?.commodity === commodity ? new Date().toISOString() : null,
    llmConviction,
    llmConvictionUpdatedAt: latestLLM?.updatedAt || latestLLM?.time || null,
    threshold,
    thresholdSource: tradePlan?.entryThresholdSource || "trading",
    martingaleStep,
    openPnl: Number.isFinite(openPl) ? Number(openPl) : null,
    marketOpen: Boolean(marketStatus?.isOpen),
    marketStatus: marketStatus?.shortLabel || "",
    title: decision?.title || "",
    reason: decision?.detail || ""
  };
}

function getPaperDecisionLogKey(entry) {
  return [
    entry.userEmail,
    entry.commodity,
    entry.state,
    entry.side,
    Number.isFinite(entry.price) ? entry.price.toFixed(2) : "na",
    Number.isFinite(entry.localConviction) ? Math.round(entry.localConviction) : "na",
    Number.isFinite(entry.llmConviction) ? Math.round(entry.llmConviction) : "na",
    Number.isFinite(entry.threshold) ? Math.round(entry.threshold) : "na",
    entry.title
  ].join("|");
}

function maybeRecordPaperDecisionLog(commodity, signal, tradePlan, decision, openTrade, openPl, marketStatus) {
  const entry = buildPaperDecisionLogEntry(commodity, signal, tradePlan, decision, openTrade, openPl, marketStatus);
  const key = getPaperDecisionLogKey(entry);
  const now = Date.now();
  const isDuplicateBurst = key === lastPaperDecisionLogKey && now - lastPaperDecisionLogAt < PAPER_DECISION_LOG_CAPTURE_MS;

  if (isDuplicateBurst) return;

  lastPaperDecisionLogKey = key;
  lastPaperDecisionLogAt = now;
  paperDecisionLog = [entry, ...paperDecisionLog].slice(0, PAPER_DECISION_LOG_LIMIT);
  savePaperDecisionLog();
}

function renderPaperDecisionLog() {
  if (!paperDecisionLogEl) return;

  const selectedCommodity = normalizeHistoryCommodityFilter();
  const currentEmail = getCurrentLedgerEmail();
  const rows = paperDecisionLog
    .filter((entry) => !currentEmail || entry.userEmail === currentEmail)
    .filter((entry) => selectedCommodity === "all" || entry.commodity === selectedCommodity)
    .slice(0, 12);

  if (paperDecisionLogStatusEl) {
    paperDecisionLogStatusEl.textContent = rows.length
      ? `${rows.length} recent decision${rows.length === 1 ? "" : "s"}`
      : "No decisions logged yet";
  }

  paperDecisionLogEl.innerHTML = "";
  if (!rows.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 7;
    cell.textContent = "No decisions logged yet.";
    row.append(cell);
    paperDecisionLogEl.append(row);
    return;
  }

  rows.forEach((entry) => {
    const row = document.createElement("tr");
    const values = [
      formatTradeTime(entry.time),
      entry.state || "-",
      Number.isFinite(entry.price) ? formatPrice(entry.price) : UNAVAILABLE_TEXT,
      formatAdvisoryScoreValue(entry.localConviction),
      formatAdvisoryScoreValue(entry.llmConviction),
      Number.isFinite(entry.threshold) ? `${Math.round(entry.threshold)} (${entry.thresholdSource || "trading"})` : UNAVAILABLE_TEXT,
      entry.reason || entry.title || "-"
    ];

    values.forEach((value, index) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      if (index === 6) cell.className = "decision-log-reason";
      row.append(cell);
    });
    paperDecisionLogEl.append(row);
  });
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
  return getDisplayTransactionSource().filter((entry) => {
    const commodityMatch = historyCommodityFilter === "all" || entry.commodity === historyCommodityFilter;
    return commodityMatch && isEntryInPeriod(entry, historyPeriodFilter);
  });
}

function getProfitTotal(entries) {
  return entries.reduce((total, entry) => total + getDisplayPnl(entry), 0);
}

function isClosingTransaction(entry) {
  const action = String(entry.action || "").toUpperCase();
  return Number(entry.pnl) !== 0 || ["TARGET", "STOP", "PRE-CLOSE", "ROLL"].some((word) => action.includes(word));
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

function getTransactionEntryPriceDisplay(entry) {
  const entryPrice = Number(entry.entryPrice ?? entry.openPrice ?? entry.price);
  return Number.isFinite(entryPrice) ? formatPrice(entryPrice) : UNAVAILABLE_TEXT;
}

function isOpeningTransaction(entry) {
  const action = String(entry.action || "").trim().toUpperCase();
  return !isClosingTransaction(entry) && ["BUY", "SELL SHORT"].includes(action);
}

function getLatestUnclosedOpeningTrade(commodity) {
  const chronological = getUserScopedTransactions().sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time));
  const active = new Map();

  chronological.forEach((entry) => {
    const identityKey = getTradeIdentityKey(entry);
    const lifecycleKey = getTradeLifecycleKey(entry);
    const key = identityKey || lifecycleKey;
    if (isOpeningTransaction(entry)) active.set(key, entry);
    if (isClosingTransaction(entry)) {
      if (identityKey) active.delete(identityKey);
      active.delete(lifecycleKey);
      Array.from(active.entries()).forEach(([activeKey, activeEntry]) => {
        if (closingEntryMatchesOpenTrade(entry, activeEntry)) active.delete(activeKey);
      });
    }
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
  const stopPrice = Number(
    entry.originalStopPrice ??
    openingEntry?.originalStopPrice ??
    closingEntry?.originalStopPrice ??
    entry.stopLossPrice ??
    openingEntry?.stopLossPrice ??
    closingEntry?.stopLossPrice ??
    entry.stopPrice ??
    openingEntry?.stopPrice ??
    closingEntry?.stopPrice ??
    (closingAction.includes("STOP") ? exitPrice : NaN)
  );
  const profitLockStopPrice = Number(entry.profitLockStopPrice ?? openingEntry?.profitLockStopPrice ?? closingEntry?.profitLockStopPrice);
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
    profitLockStopPrice,
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
    ["Stop loss", Number.isFinite(detail.stopPrice) ? formatPrice(detail.stopPrice) : "-"],
    ["Profit-lock exit guard", Number.isFinite(detail.profitLockStopPrice) ? formatPrice(detail.profitLockStopPrice) : "-"],
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
    ["Markov method", entry.markovMethodEnabled ? "On" : entry.markovState ? "Off" : "-"],
    ["Markov state", entry.markovState ? `${entry.markovState}${entry.markovExpectedSide ? ` / favors ${entry.markovExpectedSide}` : ""}` : "-"],
    ["Markov trade effect", entry.markovMethodEnabled ? `${entry.markovThresholdBoost ? `+${entry.markovThresholdBoost} threshold` : "No threshold add"} / ${Number(entry.markovSizeMultiplier) ? `${formatNumberInput(Number(entry.markovSizeMultiplier), 2)}x size` : "normal size"}` : "-"],
    ["Markov reason", entry.markovReason || "-"],
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
  renderPaperRealComparison();
  const scopedTransactions = getUserScopedTransactions();
  const openTrade = getOpenPaperTrade(commodity);
  const openTrades = Array.from(openPaperTrades.values())
    .filter((trade) => userCanTradeCommodity(trade.commodity));
  const hasOpenTradeWithoutDisplayPrice = openTrades.some((trade) => !Number.isFinite(getDisplayMarketPrice(trade.commodity)));
  const hasOpenTradeWithoutFreshPrice = openTrades.some((trade) => !isUsableMarketPrice(trade.commodity));
  const openPl = openTrades.reduce((total, trade) => {
    const currentPrice = getDisplayMarketPrice(trade.commodity);
    if (!Number.isFinite(currentPrice)) return total;
    return total + getTradePnl(trade, currentPrice);
  }, 0);
  const committedCapital = openTrade ? Number(openTrade.capital) || 0 : 0;
  const capitalFilter = normalizeHistoryCommodityFilter();
  const displayStartCapital = getSafeHistoryStartCapital(capitalFilter);
  const displayClosedPnl = getPaperClosedPnlForCapital(capitalFilter);
  const displayEquity = displayStartCapital + displayClosedPnl;
  const signalSide = getSignalSide(signal);
  const nextCapital = getMartingaleCapital(tradePlan.minTradeValue);
  const decision = getPaperDecision(signal, tradePlan, openTrade);
  const staleStopTrade = !openTrade && getLatestUnclosedOpeningTrade(commodity);
  const marketStatus = getFuturesMarketStatus();
  const maxMartingaleStep = getCurrentMartingaleMaxStep();

  syncPaperInputs();
  maybeRecordPaperDecisionLog(commodity, signal, tradePlan, decision, openTrade, openPl, marketStatus);
  renderPaperDecisionLog();
  renderUserContextWithAvatar(paperUserContextEl, getPaperUserContextText());
  paperEquityEl.textContent = formatMoney(displayStartCapital);
  paperRiskEl.textContent = tradePlan.riskPct;
  paperSizeEl.textContent = openTrade ? `${openTrade.contracts || openTrade.quantity} contract${(openTrade.contracts || openTrade.quantity) === 1 ? "" : "s"}` : "Minimum trade";
  paperCommittedEl.textContent = openTrade ? formatMoney(committedCapital) : formatMoney(nextCapital);
  paperCommittedEl.previousElementSibling.textContent = openTrade ? "Committed capital" : "Next trade capital";
  paperOpenPlEl.textContent = hasOpenTradeWithoutDisplayPrice ? UNAVAILABLE_TEXT : formatSignedMoney(openPl);
  paperOpenPlEl.className = hasOpenTradeWithoutDisplayPrice ? "" : openPl >= 0 ? "gain" : "loss";
  paperOpenPlEl.title = hasOpenTradeWithoutDisplayPrice
    ? "Waiting for Coinbase price."
    : hasOpenTradeWithoutFreshPrice
      ? "Uses the last known Coinbase price for display. Actual trade exits still require a fresh price."
      : "Uses current Coinbase price.";
  paperMartingaleEl.textContent = `Step ${martingaleStep} / ${maxMartingaleStep} (${formatMoney(nextCapital)}) - ${marketStatus.shortLabel}`;
  if (paperMarketStatusEl) {
    paperMarketStatusEl.textContent = `${marketStatus.label}: ${marketStatus.detail}`;
    paperMarketStatusEl.dataset.open = String(marketStatus.isOpen);
  }
  paperDecisionTitleEl.textContent = decision.title;
  paperDecisionDetailEl.textContent = decision.detail;

  if (!latestPrices.has(commodity)) {
    paperStatusEl.textContent = "Waiting for live price";
  } else if (openTrade) {
    paperStatusEl.textContent = `${formatSide(openTrade.side)} open`;
  } else if (signalSide && signal.conviction >= tradePlan.learnedThreshold) {
    paperStatusEl.textContent = isCoinbaseSandboxEnabled() ? `Sandbox ready to ${signalSide}` : `Ready to ${signalSide}`;
  } else {
    paperStatusEl.textContent = signalSide
      ? `Waiting for advisory > ${tradePlan.learnedThreshold}`
      : "Waiting for advisory";
  }

  if (openTrade) {
    const profitLock = Number(openTrade.profitLockStopPrice);
    paperTradeSummaryEl.textContent = `Open ${openTrade.side} ${openTrade.contract}: step ${openTrade.martingaleStep}, ${openTrade.contracts || openTrade.quantity} contract${(openTrade.contracts || openTrade.quantity) === 1 ? "" : "s"}, entry ${formatPrice(openTrade.entryPrice)}, target ${formatPrice(openTrade.targetPrice)}, stop loss ${formatPrice(getStopLossDisplayPrice(openTrade))}${Number.isFinite(profitLock) ? `, profit-lock exit guard ${formatPrice(profitLock)}` : ""}, est. fees ${formatMoney(openTrade.totalEstimatedFees || 0)}.`;
  } else if (staleStopTrade) {
    paperTradeSummaryEl.textContent = `Ledger has an unclosed ${staleStopTrade.side} trade from ${formatTradeTime(staleStopTrade.time)} with stop ${formatPrice(Number(staleStopTrade.stopPrice))}; reconciling before the next trade.`;
  } else {
    paperTradeSummaryEl.textContent = `No open paper trade for the selected contract. Next trade uses Martingale step ${martingaleStep}.`;
  }

  transactionHistoryEl.innerHTML = "";
  if (requiresFreshCloudState() && !transactionHistoryLoadedFromBackend) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    renderPnlWithCapital(historyTotalAllEl, 0);
    renderPnlWithCapital(historyTotalFilteredEl, 0, getSafeHistoryStartCapital(historyCommodityFilter));
    historyTotalCountEl.textContent = "Cloudflare loading";
    cell.colSpan = 12;
    cell.textContent = "Waiting for current Cloudflare paper-trade ledger. Stale browser trades are disabled.";
    row.append(cell);
    transactionHistoryEl.append(row);
    return;
  }

  if (!historyFiltersTouched) {
    historyCommodityFilter = "all";
    historyPeriodFilter = "all";
  }
  renderHistoryFilterButtons();
  renderPeriodFilterButtons();

  let displaySourceEntries = getDisplayTransactionSource();
  if (!displaySourceEntries.length) {
    displaySourceEntries = getRawPaperLedgerEntries().slice();
  }

  if (!displaySourceEntries.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    renderPnlWithCapital(historyTotalAllEl, 0);
    renderPnlWithCapital(historyTotalFilteredEl, 0, getSafeHistoryStartCapital(historyCommodityFilter));
    historyTotalCountEl.textContent = "0 rows";
    appendQueuedPaperTradeRow(commodity, signal, tradePlan, decision);
    cell.colSpan = 12;
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
      const rawEntries = getRawPaperLedgerEntries();
      if (rawEntries.length) {
        displaySourceEntries = rawEntries.slice();
      }
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
    const rawEntries = getRawPaperLedgerEntries();
    if (rawEntries.length) {
      displaySourceEntries = rawEntries.slice();
    }
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

  const paperSummaryRow = getCurrentPaperLedgerSummaryRow();
  const usePaperSummaryTotals = shouldUsePaperLedgerSummaryTotals() && paperSummaryRow;
  const paperSummaryClosedPnl = Number(paperSummaryRow?.closedPnl);
  const paperSummaryRawRows = Number(paperSummaryRow?.rawRowCount);
  const allTotal = usePaperSummaryTotals && Number.isFinite(paperSummaryClosedPnl)
    ? paperSummaryClosedPnl
    : getProfitTotal(periodEntries.length ? periodEntries : displaySourceEntries);
  const filteredTotal = usePaperSummaryTotals && Number.isFinite(paperSummaryClosedPnl)
    ? paperSummaryClosedPnl
    : getProfitTotal(rowsToRender);
  const serverTotalRows = usePaperSummaryTotals && Number.isFinite(paperSummaryRawRows)
    ? paperSummaryRawRows
    : displaySourceEntries.length;
  const displayCountText = usePaperSummaryTotals
    ? `${rowsToRender.length} display rows / ${serverTotalRows} Cloudflare audit rows`
    : `${rowsToRender.length} row${rowsToRender.length === 1 ? "" : "s"}`;

  renderPnlWithCapital(historyTotalAllEl, allTotal, getSafeHistoryStartCapital("all"));
  renderPnlWithCapital(historyTotalFilteredEl, filteredTotal, getSafeHistoryStartCapital(historyCommodityFilter));
  historyTotalCountEl.textContent = displayCountText;
  if (sharedHistoryStatusEl && displaySourceEntries.length) {
    sharedHistoryStatusEl.textContent = usePaperSummaryTotals
      ? getPaperLedgerSummaryLabel(paperSummaryRow, rowsToRender.length)
      : `Ledger loaded ${displaySourceEntries.length} rows; showing ${rowsToRender.length} (${historyCommodityFilter}, ${historyPeriodFilter})`;
  }

  if (!rowsToRender.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    appendQueuedPaperTradeRow(commodity, signal, tradePlan, decision);
    cell.colSpan = 12;
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
      const isClosed = isClosingTransaction(entry) || entry.closedAt;
      const exitPriceValue = isClosed
        ? Number(entry?.exitPrice ?? entry?.price)
        : NaN;
      const values = [
        formatTradeTime(entry.time),
        null,
        entry.side ? formatSide(entry.side) : "-",
        entry.step ? `#${entry.step}` : "-",
        entry.contract,
        getTransactionEntryPriceDisplay(entry),
        formatMoney(entry.capital),
        Number.isFinite(Number(entry?.targetPrice)) ? formatPrice(Number(entry.targetPrice)) : UNAVAILABLE_TEXT,
        "__STOP_LOSS__",
        Number.isFinite(exitPriceValue) ? formatPrice(exitPriceValue) : null,
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
        } else if (index === 8 && value === "__STOP_LOSS__") {
          row.append(buildStopLossCell(entry));
          return;
        } else if (index === 9 && value === null) {
          row.append(buildOpenTradeMarkCell(entry));
          return;
        } else {
          cell.textContent = value;
        }
        if (index === 10 && pnlClass) cell.className = pnlClass;
        row.append(cell);
      });
      transactionHistoryEl.append(row);

      if (expanded) {
        const detailRow = document.createElement("tr");
        const detailCell = document.createElement("td");

        detailRow.className = "transaction-detail";
        detailCell.colSpan = 12;
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
        getTransactionEntryPriceDisplay(entry || {}),
        Number.isFinite(Number(entry?.capital)) ? formatMoney(Number(entry.capital)) : "-",
        Number.isFinite(Number(entry?.targetPrice)) ? formatPrice(Number(entry.targetPrice)) : UNAVAILABLE_TEXT,
        "__STOP_LOSS__",
        Number.isFinite(Number(entry?.exitPrice)) ? formatPrice(Number(entry.exitPrice)) : null,
        Number.isFinite(Number(entry?.pnl)) ? formatSignedMoney(Number(entry.pnl)) : "-"
      ].forEach((value, index) => {
        const cell = document.createElement("td");
        if (index === 8 && value === "__STOP_LOSS__") {
          row.append(buildStopLossCell(entry));
          return;
        }
        if (index === 9 && value === null) {
          row.append(buildOpenTradeMarkCell(entry));
          return;
        }
        cell.textContent = value;
        if (index === 10) {
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
  const tradePlan = buildTradePlan(commodity, primarySignal, baseSignals);
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
  if (primarySignal.micro.ready && primarySignal.micro.shortTrigger) {
    reasons.unshift("The short-horizon tape is breaking lower, so the model is allowed to override a stale long bias.");
  } else if (primarySignal.micro.ready && primarySignal.micro.longInvalidated) {
    reasons.unshift("Recent ticks invalidated the long setup; the advisor should wait or lean short until price reclaims VWAP.");
  } else if (primarySignal.micro.ready && primarySignal.micro.longTrigger) {
    reasons.unshift("The short-horizon tape is rising, which confirms the long side for now.");
  }
  if (primarySignal.outcomeLearner?.ready) {
    reasons.push(`${primarySignal.outcomeLearner.note}. Long accuracy ${formatPercent(primarySignal.outcomeLearner.longSummary.accuracy)} over ${primarySignal.outcomeLearner.longSummary.count}; short accuracy ${formatPercent(primarySignal.outcomeLearner.shortSummary.accuracy)} over ${primarySignal.outcomeLearner.shortSummary.count}.`);
  }

  if (reasons.length < 3) {
    reasons.push("The setup is mixed, so conviction depends more on execution quality than raw direction.");
  }
  getAdoptedSkills("advisory").slice(0, 3).forEach((skill) => {
    reasons.push(`Adopted skill - ${skill.name}: ${skill.body || "No instructions yet."}`);
  });

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
  const expectedPrimaryOpenrouter = getModelById(primaryModelId).openrouterId || null;
  const verified = lastVerifiedLLMRun
    && lastVerifiedLLMRun.commodity === commodity
    && (!expectedPrimaryOpenrouter || lastVerifiedLLMRun.primaryModel === expectedPrimaryOpenrouter)
    ? lastVerifiedLLMRun : null;
  if (verified) {
    outputTitle.textContent = `Advisor output: ${commodityMeta.name} — VERIFIED ${verified.primaryModel} + ${verified.criticModel} at ${verified.time}`;
    primaryModelStatEl.textContent = `${verified.primaryModel} + ${verified.criticModel} (verified)`;
  } else {
    outputTitle.textContent = `Advisor output: ${commodityMeta.name} — Loading ${primaryModelName}${secondaryModelName ? " + " + secondaryModelName + " critic" : ""}…`;
    primaryModelStatEl.textContent = `Loading ${primaryModelName}${secondaryModelName ? " + " + secondaryModelName : ""}…`;
  }
  outputTitle.textContent = `Advisor output: ${commodityMeta.name} / local + scheduled LLM`;
  primaryModelStatEl.textContent = verified
    ? `${verified.primaryModel} + ${verified.criticModel} (LLM updated ${verified.time})`
    : `${primaryModelName}${secondaryModelName ? " + " + secondaryModelName : ""} scheduled 12 AM, 6 AM, 12 PM, 6 PM ET`;
  signalBadge.textContent = primarySignal.label;
  signalBadge.style.background = primarySignal.color;
  updateSignalStabilityStrip(primarySignal);
  if (signalExplanationEl) signalExplanationEl.textContent = getSignalExplanation(primarySignal, tradePlan);
  renderAdvisoryMarketStatus(getFuturesMarketStatus());
  const localBaselineSource = primarySignal.manualOverride === null ? "local heuristic" : "LLM/manual baseline";
  const adjustmentText = primarySignal.karpathyAdjustment
    ? `, Karpathy ${primarySignal.karpathyAdjustment > 0 ? "+" : ""}${primarySignal.karpathyAdjustment}`
    : "";
  const learnerText = primarySignal.outcomeLearner?.adjustment
    ? `, Outcome learner ${primarySignal.outcomeLearner.adjustment > 0 ? "+" : ""}${primarySignal.outcomeLearner.adjustment}`
    : primarySignal.outcomeLearner?.ready
      ? ", Outcome learner watching"
      : "";
  const secondOpinionText = tradePlan.secondOpinionConsensus?.enabled
    ? `, 2nd opinion ${tradePlan.secondOpinionConsensus.blocksEntry ? "blocked" : tradePlan.secondOpinionConsensus.thresholdBoost ? `+${tradePlan.secondOpinionConsensus.thresholdBoost} threshold` : "confirmed"}`
    : "";
  convictionEl.textContent = `${primarySignal.conviction} / 100 (${localBaselineSource} ${Math.round(primarySignal.baseConviction)}${adjustmentText}${learnerText}${secondOpinionText})`;
  if (localConvictionUpdatedEl) {
    localConvictionUpdatedEl.textContent = `Updated ${formatVerifiedTime(new Date())}`;
  }
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
  setupGradeEl.textContent = tradePlan.setupGrade;
  rewardRiskEl.textContent = tradePlan.rewardRisk;
  keyDriverEl.textContent = tradePlan.keyDriver;
  if (microEdgeEl) microEdgeEl.textContent = primarySignal.micro.edgeLabel;
  if (shortTriggerEl) {
    shortTriggerEl.textContent = primarySignal.micro.ready
      ? primarySignal.micro.shortTrigger ? "Armed" : primarySignal.micro.longInvalidated ? "Long invalidated" : "Not armed"
      : "Waiting";
  }
  if (microReadEl) microReadEl.textContent = primarySignal.micro.read;
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
  renderCoachTelemetry(primarySignal, commodity);
  renderAdvisorDecisionDetail(primarySignal, tradePlan);
  renderPaperTrading(commodity, primarySignal, tradePlan);
  maybeRecordAdvisorySnapshot(commodity, baseSignals, tradePlan);
  maybeRecordMicroPrediction(commodity, primarySignal, tradePlan);
  renderAdvisoryAdoptedSystems();
  if (activeSection === "second-opinion") renderSecondOpinionInfluence();
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
  inputs.curve
].forEach((element) => {
  element.addEventListener("input", calculateSignal);
  element.addEventListener("change", calculateSignal);
});

if (inputs.manualConviction) {
  inputs.manualConviction.addEventListener("focus", () => {
    manualConvictionCommittedBefore = getManualConvictionOverride(commoditySelect.value);
  });
  inputs.manualConviction.addEventListener("input", () => {
    setManualConvictionOverride(commoditySelect.value, inputs.manualConviction.value.trim() === "" ? null : inputs.manualConviction.value);
    calculateSignal();
  });
  inputs.manualConviction.addEventListener("change", () => {
    const commodity = commoditySelect.value;
    const before = manualConvictionCommittedBefore;
    setManualConvictionOverride(commodity, inputs.manualConviction.value.trim() === "" ? null : inputs.manualConviction.value);
    const after = getManualConvictionOverride(commodity);
    recordManualConvictionOverrideChange(commodity, before, after);
    manualConvictionCommittedBefore = after;
    calculateSignal();
  });
}

if (lowPowerModeToggleEl) {
  lowPowerModeToggleEl.addEventListener("change", () => {
    lowPowerMode = lowPowerModeToggleEl.checked;
    saveLowPowerMode();
    queueLivePricePaint(commoditySelect.value, { immediate: true });
    queueSignalRecalculation("low-power-toggle", { immediate: true });
    queueAdvisoryChartRender({ immediate: true });
  });
}

document.addEventListener("visibilitychange", () => {
  if (document.hidden) return;
  queueLivePricePaint(commoditySelect.value, { immediate: true });
  queueSignalRecalculation("tab-visible", { immediate: true });
  queueAdvisoryChartRender({ immediate: true });
  refreshCoinbasePrice(commoditySelect.value, { force: true });
});

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
      uiSecondaryModel: secondaryEntry.name,
      adoptedSkills: getAdoptedSkills("advisory").map((skill) => ({
        name: skill.name,
        instruction: skill.body,
        tags: skill.tags
      }))
    }
  };
  if (primaryEntry.openrouterId) body.model = primaryEntry.openrouterId;

  // Critic selection rule: must be from a DIFFERENT vendor than primary, and
  // ideally cheaper. Use a vendor-aware mapping that picks a cheap model from
  // the opposite lab. Always overrides any same-vendor critic to enforce real
  // second-opinion diversity.
  const criticByPrimaryVendor = {
    "openai": "anthropic/claude-3.5-haiku",   // cheapest reliable Anthropic critic
    "anthropic": "openai/gpt-5-mini",          // cheap OpenAI reasoning critic
    "google": "openai/gpt-5-mini",
    "x-ai": "openai/gpt-5-mini",
    "perplexity": "openai/gpt-5-mini",
    "meta-llama": "openai/gpt-5-mini",
    "qwen": "openai/gpt-5-mini",
    "mistralai": "openai/gpt-5-mini",
    "nvidia": "openai/gpt-5-mini",
    "google/gemma": "openai/gpt-5-mini"
  };
  let criticId = secondaryEntry.openrouterId;
  if (primaryEntry.openrouterId) {
    const primaryVendor = primaryEntry.openrouterId.split("/")[0];
    const criticVendor = (criticId || "").split("/")[0];
    if (!criticId || primaryVendor === criticVendor) {
      criticId = criticByPrimaryVendor[primaryVendor] || "openai/gpt-5-mini";
    }
  }
  if (criticId) body.critic = criticId;
  return body;
}

function formatVerifiedTime(date) {
  try {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short"
    }).format(date);
  } catch (_e) {
    return date.toLocaleTimeString();
  }
}

function getEasternParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23"
  }).formatToParts(date);
  const value = (type) => parts.find((part) => part.type === type)?.value || "00";
  return {
    year: value("year"),
    month: value("month"),
    day: value("day"),
    hour: Number(value("hour"))
  };
}

function getCurrentLLMScheduleSlot(date = new Date()) {
  const eastern = getEasternParts(date);
  const scheduleHours = getLLMScheduleEtHours();
  let slotHour = scheduleHours[0];
  scheduleHours.forEach((hour) => {
    if (eastern.hour >= hour) slotHour = hour;
  });
  return {
    key: `${eastern.year}-${eastern.month}-${eastern.day}-${String(slotHour).padStart(2, "0")}`,
    label: `${formatEtHour(slotHour)} ET`
  };
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

// LLM refreshes are slower advisory checkpoints. They update the LLM card and
// seed the local conviction value used by the trading engine.
function applyLoadingPlaceholders() {
  const primaryName = getModelById(primaryModelId).name;
  const secondaryName = secondaryModelId ? getModelById(secondaryModelId).name : "";
  if (llmConvictionEl) llmConvictionEl.textContent = "Loading...";
  if (llmConvictionUpdatedEl) {
    llmConvictionUpdatedEl.textContent = `Calling ${primaryName}${secondaryName ? " + " + secondaryName + " critic" : ""}`;
  }
}

function applyLLMDisplayOverride(commodity) {
  const haveVerified = lastVerifiedLLMRun
    && lastVerifiedLLMRun.commodity === commodity
    && lastVerifiedLLMRun.advisory
    && typeof lastVerifiedLLMRun.advisory === "object";

  if (!haveVerified) {
    if (llmConvictionEl) llmConvictionEl.textContent = UNAVAILABLE_TEXT;
    if (llmConvictionUpdatedEl) llmConvictionUpdatedEl.textContent = getLLMScheduleStatusText();
    return;
  }

  const adv = lastVerifiedLLMRun.advisory;
  const convictionRaw = Number(adv.conviction);
  const conviction = Number.isFinite(convictionRaw) ? convictionRaw : null;
  if (llmConvictionEl) {
    llmConvictionEl.textContent = conviction !== null ? `${conviction} / 100` : UNAVAILABLE_TEXT;
  }
  if (llmConvictionUpdatedEl) {
    llmConvictionUpdatedEl.textContent = getLLMScheduleStatusText(lastVerifiedLLMRun.time);
  }
}

function syncLLMConvictionToLocal(commodity, conviction) {
  const score = Number(conviction);
  if (!Number.isFinite(score)) return false;
  setManualConvictionOverride(commodity, score);
  renderManualConvictionInput(commodity);
  return true;
}

function saveLastVerifiedLLMRun() {
  try {
    if (lastVerifiedLLMRun) {
      window.localStorage.setItem(LLM_LAST_RUN_KEY, JSON.stringify(lastVerifiedLLMRun));
    }
  } catch (_error) {
    // Best effort only; the app still works without persisted advisory metadata.
  }
}

function loadLastVerifiedLLMRun() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(LLM_LAST_RUN_KEY) || "null");
    if (parsed && typeof parsed === "object" && parsed.commodity && parsed.advisory) {
      lastVerifiedLLMRun = parsed;
    }
  } catch (_error) {
    lastVerifiedLLMRun = null;
  }
}

async function runLiveLLMAdvisor(options = {}) {
  if (options && typeof Event !== "undefined" && options instanceof Event) options = {};
  if (!llmRunBtn || !llmStatusEl) return;
  if (llmInFlight) return;
  llmInFlight = true;
  llmRunBtn.disabled = true;
  llmStatusEl.textContent = "calling Sonnet 4.6 + GPT-5-mini critic…";
  const scheduleSlot = options.scheduleSlot || getCurrentLLMScheduleSlot();
  const primaryName = getModelById(primaryModelId).name;
  const secondaryName = secondaryModelId ? getModelById(secondaryModelId).name : "";
  applyLoadingPlaceholders();
  llmStatusEl.textContent = `calling ${primaryName}${secondaryName ? " + " + secondaryName + " critic" : ""}...`;
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
    const llmConvictionValue = consolidatedAdv.conviction ?? primaryAdv.conviction;
    syncLLMConvictionToLocal(payload.commodity, llmConvictionValue);
    lastVerifiedLLMRun = {
      commodity: payload.commodity,
      primaryModel: (data.primary && data.primary.model) || "?",
      criticModel: (data.critic && data.critic.model) || "?",
      time: formatVerifiedTime(new Date()),
      updatedAt: new Date().toISOString(),
      scheduleSlot: scheduleSlot.key,
      advisory: {
        conviction: llmConvictionValue,
        tone: consolidatedAdv.tone ?? primaryAdv.tone,
        summary: primaryAdv.summary,
        reasons: primaryAdv.reasons,
        risks: primaryAdv.risks
      }
    };
    try {
      window.localStorage.setItem(LLM_SCHEDULE_SLOT_KEY, `${payload.commodity}|${primaryModelId}|${secondaryModelId}|${scheduleSlot.key}`);
    } catch (_error) {
      // Ignore localStorage failures; the schedule guard is only a client-side throttle.
    }
    saveLastVerifiedLLMRun();
    if (typeof calculateSignal === "function") calculateSignal();
    renderTokenCosts();
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
    // Race-condition guard: if user changed primary model selection during the
    // call, the result we just stored is for the OLD model. Retrigger so the
    // displayed verification matches what the user picked.
    const currentPrimary = getModelById(primaryModelId).openrouterId || null;
    if (currentPrimary && lastVerifiedLLMRun && lastVerifiedLLMRun.primaryModel !== currentPrimary) {
      llmAutoCommodityKey = null;
      setTimeout(() => maybeAutoTriggerLLM(true), 50);
    }
  }
}

function maybeAutoTriggerLLM(force) {
  const commodity = commoditySelect ? commoditySelect.value : null;
  if (!commodity) return;
  const scheduleSlot = getCurrentLLMScheduleSlot();
  const key = `${commodity}|${primaryModelId}|${secondaryModelId}|${scheduleSlot.key}`;
  let savedScheduleKey = "";
  try {
    savedScheduleKey = window.localStorage.getItem(LLM_SCHEDULE_SLOT_KEY) || "";
  } catch (_error) {
    savedScheduleKey = "";
  }
  if (!force && savedScheduleKey === key) return;
  if (!force && key === llmAutoCommodityKey) return;
  llmAutoCommodityKey = key;
  if (llmInFlight) return;
  // Skip if we already have a verified result that matches the CURRENT
  // commodity AND the currently-selected primary model. Different model
  // selection requires a new call.
  const expectedPrimary = getModelById(primaryModelId).openrouterId || null;
  if (lastVerifiedLLMRun
      && lastVerifiedLLMRun.commodity === commodity
      && expectedPrimary
      && lastVerifiedLLMRun.primaryModel === expectedPrimary
      && lastVerifiedLLMRun.scheduleSlot === scheduleSlot.key) return;
  setTimeout(() => { runLiveLLMAdvisor({ scheduleSlot }); }, 50);
}

[
  commoditySelect,
  inputs.trend,
  inputs.inventory,
  inputs.dollar,
  inputs.geopolitics,
  inputs.curve
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
  renderTokenCosts();
  calculateSignal();
});
commoditySelect.addEventListener("change", refreshSelectedCoinbasePrice);
commoditySelect.addEventListener("change", () => {
  connectCoinbaseWebSocket(commoditySelect.value);
  const contractInput = document.querySelector("#live-trade-contract");
  const commodityInput = document.querySelector("#live-trade-commodity");
  if (commodityInput) commodityInput.value = commoditySelect.value;
  if (contractInput && !contractInput.value.trim()) contractInput.value = marketConfig[commoditySelect.value]?.ticker || "";
  renderTokenCosts();
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
advisoryPeriodFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-advisory-period]");
  if (!button) return;

  advisoryPeriodFilter = button.dataset.advisoryPeriod;
  renderAdvisoryFilterButtons();
  renderAdvisoryChart();
});
syncAdvisoryHistoryEl.addEventListener("click", () => loadSharedAdvisoryHistory(true));
advisoryScoreThresholdEl.addEventListener("change", saveAdvisoryScoreThreshold);
homeMarketSwitcherEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-home-market-commodity]");
  if (!button) return;
  const commodity = normalizeCommodityId(button.dataset.homeMarketCommodity);
  if (!commodity) return;
  homeMarketCommodity = commodity;
  renderHomeMarketPreview();
  refreshHomeMarketPreview();
});
homeMarketRangesEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-home-market-period]");
  if (!button) return;
  const period = HOME_MARKET_PERIODS[button.dataset.homeMarketPeriod] ? button.dataset.homeMarketPeriod : "day";
  homeMarketPeriod = period;
  renderHomeMarketPreview();
  refreshHomeMarketPreview();
});
cleanHistoryEl.addEventListener("click", cleanSharedTransactionHistory);
exportHistoryEl.addEventListener("click", downloadSharedHistory);
leaderboardRefreshEl?.addEventListener("click", () => {
  refreshLeaderBoardData();
});
leaderboardRankControlsEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-leaderboard-rank]");
  if (!button) return;
  const nextMode = button.dataset.leaderboardRank;
  leaderboardRankMode = LEADERBOARD_RANK_OPTIONS[nextMode] ? nextMode : LEADERBOARD_DEFAULT_RANK;
  saveLeaderBoardRankMode();
  renderLeaderBoard();
});
leaderboardPeriodControlsEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-leaderboard-period]");
  if (!button) return;
  const nextMode = button.dataset.leaderboardPeriod;
  leaderboardPeriodMode = LEADERBOARD_PERIOD_OPTIONS[nextMode] ? nextMode : LEADERBOARD_DEFAULT_PERIOD;
  saveLeaderBoardPeriodMode();
  leaderBoardSummaryError = "";
  loadLeaderBoardDisplayCache(leaderboardPeriodMode);
  renderLeaderBoard();
  loadLeaderBoardSummary(true);
});
leaderboardUserDetailCloseEl?.addEventListener("click", closeLeaderBoardUserDetail);
advisoryStrategyToggleEl?.addEventListener("click", toggleAdvisoryStrategyDetail);
advisorDetailToggleEl?.addEventListener("click", () => {
  const expanded = advisorDetailToggleEl.getAttribute("aria-expanded") === "true";
  advisorDetailToggleEl.setAttribute("aria-expanded", String(!expanded));
  if (advisorDecisionDetailEl) advisorDecisionDetailEl.hidden = expanded;
  if (!expanded) renderAdvisorDecisionDetail();
});
liveTradeFormEl?.addEventListener("submit", addLiveTradeFromForm);
refreshLiveLedgerEl?.addEventListener("click", () => loadSharedLiveTradeLedger());
paperEquityInputEl.readOnly = true;
paperEquityInputEl.setAttribute("aria-readonly", "true");
paperRiskInputEl.addEventListener("change", updatePaperRiskSetting);
coinbaseSandboxEnabledEl.addEventListener("change", () => {
  setCoinbaseSandboxEnabled(true);
  saveSharedSettings();
  calculateSignal();
});
secondOpinionModelsEl.addEventListener("change", () => {
  updateSecondOpinionRunState();
  saveModelSettings();
  renderTokenCosts();
  renderSecondOpinionInfluence();
});
secondOpinionPromptsEl.addEventListener("change", () => {
  updateSecondOpinionRunState();
  saveModelSettings();
  renderSecondOpinionInfluence();
});
secondOpinionSelectAllEl.addEventListener("click", () => {
  const boxes = Array.from(secondOpinionModelsEl.querySelectorAll("input[type='checkbox']"));
  const shouldSelectAll = boxes.some((input) => !input.checked);
  boxes.forEach((input) => {
    input.checked = shouldSelectAll;
  });
  updateSecondOpinionRunState();
  saveModelSettings();
  renderTokenCosts();
  renderSecondOpinionInfluence();
});
secondOpinionRunSelectedEl?.addEventListener("click", () => renderSecondOpinionInfluence());
secondOpinionRunAllEl?.addEventListener("click", () => renderSecondOpinionInfluence());
tokenCostsRefreshEl?.addEventListener("click", renderTokenCosts);
tokenModelListEl?.addEventListener("click", (event) => {
  const primaryButton = event.target.closest("[data-token-primary]");
  if (primaryButton) {
    setPrimaryModelRole(primaryButton.dataset.tokenPrimary);
    return;
  }
  const criticButton = event.target.closest("[data-token-critic]");
  if (criticButton) {
    setCriticModelRole(criticButton.dataset.tokenCritic);
  }
});
tokenModelListEl?.addEventListener("change", (event) => {
  const input = event.target.closest("[data-token-second-opinion]");
  if (!input) return;
  setSecondOpinionModelRole(input.dataset.tokenSecondOpinion, input.checked);
});
document.querySelectorAll(".token-window-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".token-window-button").forEach((otherButton) => {
      otherButton.dataset.active = otherButton === button ? "true" : "false";
    });
    renderTokenCosts();
  });
});
tokenRefreshHoursEl?.addEventListener("change", () => {
  setLLMRefreshHours(tokenRefreshHoursEl.value);
  llmAutoCommodityKey = null;
  renderTokenCosts();
});
saveOpenBrainEndpointEl.addEventListener("click", () => {
  window.localStorage.setItem(OPEN_BRAIN_ENDPOINT_KEY, openBrainEndpointEl.value.trim());
  loadOpenBrainEventsFromBackend({ manual: true });
});
captureOpenBrainAdvisoryEl.addEventListener("click", () => {
  const event = captureCurrentAdvisoryMemory("manual");
  openBrainStatusEl.textContent = event ? "Advisory captured" : "No advisory to capture";
});
exportOpenBrainMemoryEl.addEventListener("click", downloadOpenBrainMemory);
bindSkillSidebarButtons();
skillAddNewEl?.addEventListener("click", () => {
  activeCustomSkillId = "";
  resetSkillEditor();
  renderSkillsWorkspace();
});
skillEditorFormEl?.addEventListener("submit", saveCustomSkillFromForm);
skillEditorResetEl?.addEventListener("click", () => resetSkillEditor());
skillVoiceButtonEl?.addEventListener("click", startSkillVoiceCapture);
skillInspectButtonEl?.addEventListener("click", renderSkillsWorkspace);
skillSearchInputEl?.addEventListener("input", () => {
  skillSearchQuery = skillSearchInputEl.value.trim();
  renderCustomSkills();
});
strategyEditorEl?.addEventListener("submit", saveStrategyEditor);
strategyEditorCancelEl?.addEventListener("click", closeStrategyEditor);
strategyReferenceButtonEl?.addEventListener("click", () => {
  strategyEnginePanelEl?.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector(".strategy-add-button")?.addEventListener("click", () => openStrategyEditor());
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
  renderLeaderBoard();
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
  window.sessionStorage.removeItem(ACCESS_SESSION_ID_KEY);
  window.sessionStorage.removeItem(ACCESS_SESSION_RECORDED_KEY);
  return false;
}

function initializeApp() {
  if (appStarted) return;
  appStarted = true;

  purgeBrowserRuntimeStateForCloudMode();
  loadUserRoster();
  if (!requiresFreshCloudState()) loadPaperState();
  applyCurrentUserPaperSettings();
  loadModelSettings();
  loadLastVerifiedLLMRun();
  loadLocalAdvisoryHistory();
  loadLocalMicroPredictionHistory();
  if (!requiresFreshCloudState()) loadPaperDecisionLog();
  loadLeaderBoardRankMode();
  loadLeaderBoardPeriodMode();
  loadCustomStrategies();
  applySavedStrategyEdits();
  loadCustomSkills();
  loadOpenBrainMemory();
  loadAdvisoryScoreThreshold();
  loadFeatureRequests();
  if (!requiresFreshCloudState()) loadLiveTradeLedger();
  const migratedKarpathyAutoApply = migrateKarpathyAutoApplyForAllUsers();
  const migratedMarkovTestAgents = migrateMarkovMethodForTestAgents();
  const migratedPeterMissedReentry = migratePeterMissedOpportunityReentry();
  const seededMarkovHistory = seedMarkovStrategyHistoryForTestAgents();
  if (migratedKarpathyAutoApply || migratedMarkovTestAgents || migratedPeterMissedReentry || seededMarkovHistory) saveSharedSettings();
  const liveCommodityInput = document.querySelector("#live-trade-commodity");
  const liveContractInput = document.querySelector("#live-trade-contract");
  if (liveCommodityInput) liveCommodityInput.value = commoditySelect.value;
  if (liveContractInput) liveContractInput.value = marketConfig[commoditySelect.value]?.ticker || "";
  markCurrentSessionActive();
  renderPrimaryModelSelector();
  renderSecondOpinionControls();
  renderTokenCosts();
  renderOpenBrainMemory();
  renderSkillsWorkspace();
  renderCurrentUserStrategy();
  showUserManagement();
  renderFeatureRequests();
  setActiveSection(activeSection);
  initializeHistoryApiControls();
  renderHistoryFilterButtons();
  renderPeriodFilterButtons();
  renderAdvisoryFilterButtons();
  renderMicroLearningLoop();
  if (!hasHistoryBackend()) loadBundledTransactionHistory();
  loadLowPowerMode();
  calculateSignal();
  initializeBackendState();
  connectCoinbaseWebSocket(commoditySelect.value);
  refreshSelectedCoinbasePrice();
  scheduleAdaptiveInterval(() => refreshSelectedCoinbasePrice(), LIVE_PRICE_REFRESH_MS, 120000);
  scheduleAdaptiveInterval(() => loadSharedSettings(), BACKEND_SETTINGS_SYNC_MS * 2, BACKEND_SETTINGS_SYNC_MS * 5);
  scheduleAdaptiveInterval(() => {
    if (activeSection === "trading" || activeSection === "actual-trades") return autoSyncTransactionHistory();
    return false;
  }, BACKEND_TRANSACTION_SYNC_MS, BACKEND_TRANSACTION_SYNC_MS * 2);
  scheduleAdaptiveInterval(() => {
    if (activeSection !== "advisories") return false;
    loadSharedAdvisoryHistory();
    return loadSharedMicroPredictions();
  }, BACKEND_ADVISORY_SYNC_MS, BACKEND_ADVISORY_SYNC_MS * 2);
  homeMarketRefreshTimer = window.setInterval(() => {
    if (activeSection === "home" && !document.hidden) refreshHomeMarketPreview();
  }, HOME_MARKET_REFRESH_MS);
  scheduleAdaptiveInterval(() => {
    if (activeSection === "advisories") return maybeAutoTriggerLLM();
    return false;
  }, LLM_SCHEDULE_CHECK_MS, LLM_SCHEDULE_CHECK_MS * 5);
  scheduleAdaptiveInterval(heartbeatCurrentSession, SESSION_HEARTBEAT_MS, SESSION_HEARTBEAT_MS);
  scheduleAdaptiveInterval(() => {
    if (activeSection === "trading" || activeSection === "advisories") queuePaperSweep();
  }, Math.max(30000, LIVE_PRICE_REFRESH_MS), 120000);
  scheduleAdaptiveInterval(() => {
    if (activeSection !== "leaderboard") return false;
    return refreshLeaderBoardData();
  }, 120000, 300000);
  window.addEventListener("resize", () => {
    renderHomeMarketPreview();
    queueAdvisoryChartRender();
    renderLeaderBoard();
  });
}

if (hasValidAccessSession()) {
  showAppShell();
  initializeApp();
} else {
  accessEmailEl.focus();
}
