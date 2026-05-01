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
const accessPasswordEl = document.querySelector("#access-password");
const accessErrorEl = document.querySelector("#access-error");
const appShellEl = document.querySelector("#app-shell");
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
const featureRequestStatusEl = document.querySelector("#feature-request-status");
const featureTypeFiltersEl = document.querySelector("#feature-type-filters");
const featureNewButtonEl = document.querySelector("#feature-new-button");
const featureFormEl = document.querySelector("#feature-form");
const featureTitleInputEl = document.querySelector("#feature-title-input");
const featureTypeInputEl = document.querySelector("#feature-type-input");
const featureTagInputEl = document.querySelector("#feature-tag-input");
const featureDescriptionInputEl = document.querySelector("#feature-description-input");
const featureBoardEl = document.querySelector("#feature-board");
const commoditySelect = document.querySelector("#commodity");
const commodityStrip = document.querySelector("#commodity-strip");
const inputsTitle = document.querySelector("#inputs-title");
const outputTitle = document.querySelector("#output-title");
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
const paperSizeEl = document.querySelector("#paper-size");
const paperStatusEl = document.querySelector("#paper-status");
const paperCommittedEl = document.querySelector("#paper-committed");
const paperOpenPlEl = document.querySelector("#paper-open-pl");
const paperMartingaleEl = document.querySelector("#paper-martingale");
const paperKarpathyEl = document.querySelector("#paper-karpathy");
const coinbaseSandboxStatusEl = document.querySelector("#coinbase-sandbox-status");
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
const historyApiUrlEl = document.querySelector("#history-api-url");
const saveHistoryApiEl = document.querySelector("#save-history-api");
const syncHistoryEl = document.querySelector("#sync-history");
const cleanHistoryEl = document.querySelector("#clean-history");
const exportHistoryEl = document.querySelector("#export-history");
const sharedHistoryStatusEl = document.querySelector("#shared-history-status");
const coinbaseSandboxEnabledEl = document.querySelector("#coinbase-sandbox-enabled");
const transactionHistoryEl = document.querySelector("#transaction-history");
const advisoryHistoryStatusEl = document.querySelector("#advisory-history-status");
const advisoryCommodityFiltersEl = document.querySelector("#advisory-commodity-filters");
const advisoryHorizonFiltersEl = document.querySelector("#advisory-horizon-filters");
const advisoryPeriodFiltersEl = document.querySelector("#advisory-period-filters");
const syncAdvisoryHistoryEl = document.querySelector("#sync-advisory-history");
const advisorySampleCountEl = document.querySelector("#advisory-sample-count");
const advisoryChartEl = document.querySelector("#advisory-chart");
const reasonsEl = document.querySelector("#reasons");
const riskCopyEl = document.querySelector("#risk-copy");

const inputs = {
  trend: document.querySelector("#trend"),
  inventory: document.querySelector("#inventory"),
  dollar: document.querySelector("#dollar"),
  geopolitics: document.querySelector("#geopolitics"),
  curve: document.querySelector("#curve"),
  horizon: document.querySelector("#horizon")
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
    referencePrice: 88.75,
    contractMultiplier: 10,
    marginRateLong: 0.1,
    marginRateShort: 0.12,
    feePerContractSide: 0.25,
    feeLabel: "Estimated exchange/brokerage fee",
    buyWindow: "09:45-10:30 ET"
  },
  "natural-gas": { ticker: "NG reference", productId: "NATURAL-GAS-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: 2.31, buyWindow: "10:00-11:00 ET" },
  gold: { ticker: "Gold reference", productId: "GOLD-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: 4818.0, buyWindow: "09:35-10:15 ET" },
  silver: { ticker: "Silver reference", productId: "SILVER-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: 27.6, buyWindow: "09:35-10:15 ET" },
  copper: { ticker: "Copper reference", productId: "COPPER-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: 4.58, buyWindow: "09:45-10:45 ET" },
  platinum: { ticker: "Platinum reference", productId: "PLATINUM-USD", contractMonth: "Reference only", productType: "Reference price, not a listed Coinbase futures contract", referencePrice: 980.5, buyWindow: "10:00-11:00 ET" }
};

const latestPrices = new Map();
const latestPriceTimes = new Map();
const latestPriceSources = new Map();
const productMinimums = new Map();
const LIVE_PRICE_REFRESH_MS = 10000;
const SNAPSHOT_PRICE_REFRESH_MS = 60000;
const PAPER_START_EQUITY = 100000;
const PAPER_MIN_CONVICTION = 50;
const MARTINGALE_MAX_STEP = 4;
const KARPATHY_SAMPLE_SIZE = 12;
const COINBASE_WS_URL = "wss://advanced-trade-ws.coinbase.com";
const HISTORY_API_KEY = "atlas-history-api-url";
const COINBASE_SANDBOX_KEY = "atlas-coinbase-sandbox-enabled";
const ADVISORY_SNAPSHOT_KEY = "atlas-last-advisory-snapshot-key";
const ACCESS_STATE_KEY = "atlas-access-unlocked";
const ACCESS_PASSWORD_HASH = "55bdd6bb9b1839c8f8e7c3459e61f5537d0691c6b4c8fa827d594708f4d63db2";
const USER_ROSTER_KEY = "atlas-user-roster-v1";
const FEATURE_REQUESTS_KEY = "atlas-feature-requests-v1";
const ADVISORY_CAPTURE_MS = 60000;
const ADVISORY_HORIZONS = ["intraday", "swing", "position"];
const ADVISORY_PERIODS = {
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  month: 31 * 24 * 60 * 60 * 1000,
  year: 366 * 24 * 60 * 60 * 1000
};

const chipMap = new Map();
const openPaperTrades = new Map();
const transactionHistory = [];
const advisoryHistory = [];
const pendingPaperActions = new Set();
let paperEquity = PAPER_START_EQUITY;
let martingaleStep = 1;
let nextTransactionId = 1;
let snapshotPricesPromise = null;
let snapshotPricesLoadedAt = 0;
let activePriceSocket = null;
let activePriceSocketCommodity = null;
let activePriceSocketReconnectTimer = null;
let historyCommodityFilter = "all";
let historyPeriodFilter = "all";
let expandedTransactionId = null;
let advisoryCommodityFilter = "oil";
let advisoryHorizonFilter = "intraday";
let advisoryPeriodFilter = "hour";
let lastAdvisorySnapshotKey = "";
let appStarted = false;
let userSearchQuery = "";
let activeSection = "advisories";
let featureTypeFilter = "all";
const userRoster = [];
const featureRequests = [];
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

function setActiveSection(section) {
  activeSection = section;
  menuButtons.forEach((button) => {
    button.dataset.active = String(button.dataset.sectionTarget === section);
  });
  appSections.forEach((sectionEl) => {
    sectionEl.hidden = sectionEl.dataset.appSection !== section;
  });
  if (section === "advisories") renderAdvisoryChart();
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

function loadUserRoster() {
  try {
    const stored = JSON.parse(window.localStorage.getItem(USER_ROSTER_KEY) || "null");
    const defaultUsers = getDefaultUsers();
    const users = Array.isArray(stored) && stored.length ? stored : defaultUsers;
    const knownEmails = new Set(users.map((user) => String(user.email || "").toLowerCase()));
    defaultUsers.forEach((user) => {
      if (!knownEmails.has(String(user.email || "").toLowerCase())) users.push(user);
    });
    userRoster.splice(0, userRoster.length, ...users);
  } catch (error) {
    userRoster.splice(0, userRoster.length, ...getDefaultUsers());
  }
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

function getFilteredUsers() {
  const query = userSearchQuery.trim().toLowerCase();
  if (!query) return userRoster;

  return userRoster.filter((user) => (
    String(user.name || "").toLowerCase().includes(query)
    || String(user.email || "").toLowerCase().includes(query)
  ));
}

function renderUserManagement() {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 7);
  const activeToday = userRoster.filter((user) => user.enabled !== false && getTransactionDate(user.lastActiveAt) >= todayStart);
  const newThisWeek = userRoster.filter((user) => getTransactionDate(user.createdAt) >= weekStart);
  const filteredUsers = getFilteredUsers();

  userTotalCountEl.textContent = String(userRoster.length);
  userActiveCountEl.textContent = String(activeToday.length);
  userNewCountEl.textContent = String(newThisWeek.length);
  userManagementStatusEl.textContent = `${filteredUsers.length} visible`;
  userTableBodyEl.innerHTML = "";

  if (!filteredUsers.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 6;
    cell.textContent = "No users match the current search.";
    row.append(cell);
    userTableBodyEl.append(row);
    return;
  }

  filteredUsers.forEach((user) => {
    const row = document.createElement("tr");
    const profileCell = document.createElement("td");
    const profile = document.createElement("div");
    const avatar = document.createElement("span");
    const profileText = document.createElement("div");
    const name = document.createElement("strong");
    const email = document.createElement("span");
    const status = document.createElement("span");
    const actionCell = document.createElement("td");
    const action = document.createElement("button");

    profile.className = "user-profile";
    avatar.className = "user-avatar";
    avatar.textContent = getUserInitials(user);
    name.textContent = user.name || "Unnamed user";
    email.textContent = user.email || "-";
    profileText.append(name, email);
    profile.append(avatar, profileText);
    profileCell.append(profile);

    status.className = "user-status";
    status.dataset.disabled = String(user.enabled === false);
    status.textContent = user.enabled === false ? "Disabled" : "Active";

    action.type = "button";
    action.className = "filter-button";
    action.textContent = user.enabled === false ? "Enable" : "Disable";
    action.addEventListener("click", () => {
      user.enabled = user.enabled === false;
      saveUserRoster();
      renderUserManagement();
    });
    actionCell.append(action);

    [
      profileCell,
      formatUserDate(user.createdAt),
      formatRelativeDate(user.lastActiveAt),
      String(Number(user.sessions) || 0),
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
}

function markCurrentSessionActive() {
  const user = userRoster.find((entry) => entry.id === "user-pete") || userRoster[0];
  if (!user) return;

  user.lastActiveAt = new Date().toISOString();
  user.sessions = Math.max(1, Number(user.sessions || 0) + 1);
  saveUserRoster();
}

function addUser(name, email) {
  const normalizedEmail = email.trim().toLowerCase();
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
    enabled: true
  });
  saveUserRoster();
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
  if (!title || !description) {
    featureRequestStatusEl.textContent = "Title and description required";
    return;
  }

  featureRequests.unshift({
    id: `feature-${Date.now()}`,
    title,
    description,
    type: featureTypeInputEl.value,
    tag: featureTagInputEl.value.trim() || featureTypeInputEl.value,
    status: "submitted",
    votes: 0,
    author: "Peter",
    createdAt: new Date().toISOString()
  });
  featureFormEl.reset();
  featureFormEl.hidden = true;
  saveFeatureRequests();
  renderFeatureRequests();
}

async function handleAccessSubmit(event) {
  event.preventDefault();
  const password = accessPasswordEl.value.trim();
  const hash = await hashAccessPassword(password);

  if (hash !== ACCESS_PASSWORD_HASH) {
    accessErrorEl.textContent = "Password does not match.";
    accessPasswordEl.value = "";
    accessPasswordEl.focus();
    return;
  }

  window.sessionStorage.setItem(ACCESS_STATE_KEY, "true");
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

  const filters = [
    { id: "all", name: "All" },
    ...commodities.map(({ id, name }) => ({ id, name }))
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

  commodities.forEach(({ id, name }) => {
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

function scoreCommodity(commodity, baseSignals) {
  const tweak = commodityTweaks[commodity] || { trend: 0, inventory: 0, geopolitics: 0, dollar: 0, curve: 0 };
  const baseScore = (
    baseSignals.trend + tweak.trend +
    baseSignals.inventory + tweak.inventory +
    baseSignals.dollar + tweak.dollar +
    baseSignals.geopolitics + tweak.geopolitics +
    baseSignals.curve + tweak.curve
  ) * baseSignals.horizon;
  const bounded = Math.max(-100, Math.min(100, Math.round(baseScore)));
  const conviction = Math.min(100, 40 + Math.abs(bounded));

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

  return { bounded, conviction, label, chipLabel, action, color, tone };
}

function formatPrice(value) {
  const decimals = value >= 100 ? 2 : value >= 10 ? 2 : 3;
  return `$${value.toFixed(decimals)}`;
}

function formatMoney(value) {
  return `$${value.toFixed(2)}`;
}

function formatSignedMoney(value) {
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
  }).format(value);
}

function formatTradeTime(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  }).format(value);
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

function getMartingaleCapital(minTradeValue) {
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
  const notional = price * getContractMultiplier(config);
  return notional * getMarginRate(config, side);
}

function getFeePerContractSide(config) {
  return Number(config?.feePerContractSide) >= 0 ? Number(config.feePerContractSide) : 0;
}

function getEstimatedFees(config, contracts, sides = 2) {
  return getFeePerContractSide(config) * contracts * sides;
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
  return transactionHistory.filter((entry) => entry.pnl !== 0);
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
  const closedTrades = transactionHistory
    .filter(isClosingTransaction)
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time));

  for (const trade of closedTrades) {
    if (getDisplayPnl(trade) >= 0) break;
    losses.push(trade);
  }

  return losses;
}

function getNextMartingaleStepFromHistory() {
  const losingCloses = getConsecutiveLosingCloses();
  if (!losingCloses.length) return 1;

  const highestLosingStep = losingCloses.reduce((highest, entry) => (
    Math.max(highest, Number(entry.step) || 1)
  ), 1);

  if (highestLosingStep >= MARTINGALE_MAX_STEP) return 1;
  return Math.max(1, Math.min(MARTINGALE_MAX_STEP, highestLosingStep + 1));
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

function buildTradePlan(commodity, signal) {
  const config = marketConfig[commodity];
  const livePrice = latestPrices.get(commodity) ?? config.referencePrice;
  const updatedAt = latestPriceTimes.get(commodity);
  const priceSource = latestPriceSources.get(commodity);
  const contractMultiplier = getContractMultiplier(config);
  const longBias = signal.tone === "long";
  const shortBias = signal.tone === "short";
  const tradeSide = shortBias ? "short" : "long";
  const waitBias = signal.tone === "wait";
  const entryOffset = waitBias ? 0.004 : 0.0025;
  const targetOffset = waitBias ? 0.006 : 0.01;
  const stopOffset = waitBias ? 0.005 : 0.0075;
  const longEntry = livePrice * (1 - entryOffset);
  const shortEntry = livePrice * (1 + entryOffset);
  const buyPrice = longBias ? longEntry : shortBias ? shortEntry : livePrice * (1 - 0.001);
  const sellPrice = longBias ? livePrice * (1 + targetOffset) : shortBias ? livePrice * (1 - targetOffset) : livePrice * (1 + 0.003);
  const stopLoss = longBias ? livePrice * (1 - stopOffset) : shortBias ? livePrice * (1 + stopOffset) : livePrice * (1 - 0.0035);
  const entryPrice = shortBias ? shortEntry : longEntry;
  const targetPrice = sellPrice;
  const riskPct = signal.conviction >= 70 ? "1.00%" : signal.conviction >= 55 ? "0.75%" : "0.50%";
  const status = waitBias ? "Stand by" : "Armed";
  const learnedThreshold = getKarpathyLoop(getSignalSide(signal)).threshold;
  const entryLabel = shortBias ? "Entry (sell short)" : longBias ? "Entry (buy)" : "Entry";
  const targetLabel = shortBias ? "Cover target" : longBias ? "Profit target" : "Profit target";
  const longMargin = getMarginRequirement(config, "long", livePrice);
  const shortMargin = getMarginRequirement(config, "short", livePrice);
  const minTradeValue = tradeSide === "short" ? shortMargin : longMargin;
  const feePerContractSide = getFeePerContractSide(config);
  const nextCapital = getMartingaleCapital(minTradeValue);
  const plannedContracts = Math.max(1, Math.floor(nextCapital / minTradeValue));
  const notionalValue = livePrice * contractMultiplier * plannedContracts;
  const estimatedRoundTripFees = getEstimatedFees(config, plannedContracts, 2);
  const marginSource = config.productType === "Coinbase futures contract"
    ? "Estimated margin"
    : "Reference margin";

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
    priceSource: updatedAt ? `${priceSource || "Coinbase live"} / ${formatPriceTime(updatedAt)}` : "Reference (snapshot unavailable)",
    minTradeValue,
    minLong: `1 contract / ${formatMoney(longMargin)}`,
    minShort: `1 contract / ${formatMoney(shortMargin)}`,
    nextCapital,
    learnedThreshold,
    riskPct,
    size: `${plannedContracts} contract${plannedContracts === 1 ? "" : "s"}`,
    status,
    steps: [
      `Auto-enter long or short when conviction clears the learned threshold of ${learnedThreshold}.`,
      `Commit Martingale step ${martingaleStep} margin, currently ${formatMoney(nextCapital)}, for ${plannedContracts} contract${plannedContracts === 1 ? "" : "s"} of ${contractMultiplier} units each.`,
      `Model ${formatMoney(notionalValue)} notional exposure, subtract about ${formatMoney(estimatedRoundTripFees)} estimated round-trip fees, and use ${marginSource.toLowerCase()} for long/short minimums.`,
      `Close at ${formatPrice(targetPrice)} target or ${formatPrice(stopLoss)} stop, then adjust the next Martingale step.`
    ]
  };
}

async function refreshCoinbasePrice(commodity) {
  if (
    latestPriceSources.get(commodity) === "Coinbase WebSocket" &&
    activePriceSocketCommodity === commodity &&
    activePriceSocket?.readyState === WebSocket.OPEN
  ) {
    return;
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
      latestPrices.set(commodity, livePrice);
      latestPriceTimes.set(commodity, new Date());
      latestPriceSources.set(commodity, "Coinbase live");
      await refreshCoinbaseProductDetails(commodity, livePrice);
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

      latestPrices.set(commodity, socketPrice);
      latestPriceTimes.set(commodity, new Date());
      latestPriceSources.set(commodity, "Coinbase WebSocket");
      refreshCoinbaseProductDetails(commodity, socketPrice);

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
    latestPriceSources.set(commodity, snapshot.ok ? "GitHub snapshot" : "Reference snapshot");

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

  return {
    ...entry,
    commodity,
    commodityName: entry.commodityName || commodities.find(({ id }) => id === commodity)?.name,
    time,
    openedAt,
    closedAt
  };
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
  paperEquity = PAPER_START_EQUITY;
  martingaleStep = 1;
  nextTransactionId = 1;
  expandedTransactionId = null;
}

function replaceTransactionHistory(entries) {
  resetLocalTradeState();
  mergeTransactionHistory(entries, { persist: false });
  rebuildPaperStateFromHistory();
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

function getTradeLifecycleKey(entry) {
  return [
    entry.commodity || "commodity",
    entry.contract || "contract",
    entry.side || "side",
    entry.step || "step"
  ].join("|");
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
    conviction: Number(entry.conviction) || 0,
    openedAt: entry.openedAt ? new Date(entry.openedAt) : new Date(entry.time)
  };
}

function rebuildPaperStateFromHistory() {
  const activeTrades = new Map();
  const chronological = [...transactionHistory].sort((a, b) => getTransactionDate(a.time) - getTransactionDate(b.time));
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

  const closedEntries = transactionHistory.filter(isClosingTransaction);
  paperEquity = PAPER_START_EQUITY + closedEntries.reduce((total, entry) => total + getDisplayPnl(entry), 0);

  martingaleStep = latestClosed ? getNextMartingaleStepFromHistory() : 1;
}

function getTradePnl(trade, exitPrice) {
  return getTradeNetPnl(trade, exitPrice);
}

function savePaperState() {
  try {
    const state = {
      paperEquity,
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

function loadPaperState() {
  try {
    const stored = window.localStorage.getItem(PAPER_STATE_KEY);
    if (!stored) return;

    const state = JSON.parse(stored);
    if (Number.isFinite(state.paperEquity)) paperEquity = state.paperEquity;
    if (Number.isInteger(state.martingaleStep)) {
      martingaleStep = Math.max(1, Math.min(MARTINGALE_MAX_STEP, state.martingaleStep));
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
  return window.localStorage.getItem(HISTORY_API_KEY) || "";
}

function hasHistoryBackend() {
  return Boolean(getHistoryApiUrl());
}

function setHistoryApiUrl(value) {
  const normalized = value.trim().replace(/\/$/, "");
  if (normalized) {
    window.localStorage.setItem(HISTORY_API_KEY, normalized);
  } else {
    window.localStorage.removeItem(HISTORY_API_KEY);
  }
  historyApiUrlEl.value = normalized;
  sharedHistoryStatusEl.textContent = normalized ? "Backend API saved" : "Backend required";
}

function initializeHistoryApiControls() {
  historyApiUrlEl.value = getHistoryApiUrl();
  sharedHistoryStatusEl.textContent = historyApiUrlEl.value ? "Backend API ready" : "Backend required";
  setCoinbaseSandboxEnabled(isCoinbaseSandboxEnabled());
}

function getMasterHistoryUrl() {
  return getHistoryApiUrl();
}

function isCoinbaseSandboxEnabled() {
  return window.localStorage.getItem(COINBASE_SANDBOX_KEY) === "true";
}

function setCoinbaseSandboxEnabled(enabled) {
  window.localStorage.setItem(COINBASE_SANDBOX_KEY, String(Boolean(enabled)));
  coinbaseSandboxEnabledEl.checked = Boolean(enabled);
  coinbaseSandboxStatusEl.textContent = enabled ? "Sandbox armed" : "Off";
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

  try {
    const response = await fetch(`${getSharedSettingsUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("settings unavailable");

    const settings = await response.json();
    setCoinbaseSandboxEnabled(Boolean(settings.coinbaseSandboxEnabled));
    coinbaseSandboxStatusEl.textContent = settings.coinbaseSandboxEnabled ? "Sandbox armed" : "Off";
    return true;
  } catch (error) {
    if (manual) coinbaseSandboxStatusEl.textContent = "Settings sync failed";
    return false;
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
        coinbaseSandboxEnabled: isCoinbaseSandboxEnabled()
      })
    });
    if (!response.ok) throw new Error("settings save failed");

    const data = await response.json();
    const enabled = Boolean(data?.settings?.coinbaseSandboxEnabled);
    setCoinbaseSandboxEnabled(enabled);
    coinbaseSandboxStatusEl.textContent = enabled ? "Sandbox armed" : "Off";
    return true;
  } catch (error) {
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

  try {
    advisoryHistoryStatusEl.textContent = "Syncing advisory chart";
    const response = await fetch(`${getAdvisoryHistoryUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("advisory history unavailable");

    const data = await response.json();
    mergeAdvisoryHistory(Array.isArray(data?.snapshots) ? data.snapshots : []);
    advisoryHistoryStatusEl.textContent = `Chart synced ${advisoryHistory.length} sample${advisoryHistory.length === 1 ? "" : "s"}`;
    renderAdvisoryChart();
    return true;
  } catch (error) {
    advisoryHistoryStatusEl.textContent = manual ? "Chart sync failed" : "Chart backend offline";
    renderAdvisoryChart();
    return false;
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
    action: signal.action
  };
}

function maybeRecordAdvisorySnapshot(commodity, baseSignals, tradePlan) {
  if (!latestPrices.has(commodity) || !hasHistoryBackend()) return;

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
  return advisoryHistory.filter((entry) => (
    entry.commodity === advisoryCommodityFilter
    && entry.horizon === advisoryHorizonFilter
    && new Date(entry.time || 0).getTime() >= start
  ));
}

function drawChartMessage(context, canvas, message) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#56646e";
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
  context.fillStyle = "rgba(255, 255, 255, 0.72)";
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "rgba(17, 32, 43, 0.12)";
  context.lineWidth = 1 * scale;
  context.font = `${12 * scale}px Aptos, Segoe UI, sans-serif`;
  context.fillStyle = "#56646e";
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

  drawLine(prices, "#11202b");
  drawLine(signalValues, "#006d5b", [10, 7], (value) => value);

  context.strokeStyle = "rgba(17, 32, 43, 0.16)";
  context.lineWidth = 1.5 * scale;
  context.beginPath();
  context.moveTo(padding.left, laneTop - laneGap * 0.5);
  context.lineTo(width - padding.right, laneTop - laneGap * 0.5);
  context.stroke();

  const signalRows = [
    ["Long", "long", "#006d5b"],
    ["Wait", "wait", "#735f2d"],
    ["Short", "short", "#8d2d2d"]
  ];
  context.font = `700 ${12 * scale}px Aptos, Segoe UI, sans-serif`;
  signalRows.forEach(([label, tone, color]) => {
    const y = signalYFor(tone);
    context.strokeStyle = "rgba(17, 32, 43, 0.08)";
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
  context.fillStyle = "#11202b";
  context.font = `700 ${15 * scale}px Aptos, Segoe UI, sans-serif`;
  const title = `${commodities.find(({ id }) => id === advisoryCommodityFilter)?.name || "Commodity"} ${advisoryHorizonFilter} advisory`;
  context.fillText(title, padding.left, 24 * scale);

  context.fillStyle = "#56646e";
  context.font = `${12 * scale}px Aptos, Segoe UI, sans-serif`;
  context.fillText(formatTradeTime(new Date(minTime)), padding.left, height - 24 * scale);
  context.textAlign = "right";
  context.fillText(formatTradeTime(new Date(maxTime)), width - padding.right, height - 24 * scale);

  samples.forEach((entry, index) => {
    if (index % Math.max(1, Math.floor(samples.length / 80)) !== 0) return;
    const x = xFor(times[index]);
    const signalY = signalValues[index];
    const color = entry.tone === "short" ? "#8d2d2d" : entry.tone === "long" ? "#006d5b" : "#735f2d";

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
  context.fillStyle = latest.tone === "short" ? "#8d2d2d" : latest.tone === "long" ? "#006d5b" : "#735f2d";
  context.font = `700 ${12 * scale}px Aptos, Segoe UI, sans-serif`;
  context.fillText(latestText, latestX + (latestX > width * 0.72 ? -10 : 10) * scale, latestY - 10 * scale);
}

async function saveSharedTransactionHistory() {
  const apiUrl = getHistoryApiUrl();
  if (!apiUrl) {
    sharedHistoryStatusEl.textContent = "Add backend URL to save";
    return false;
  }

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
    sharedHistoryStatusEl.textContent = `Backend saved ${entries.length || transactionHistory.length} rows`;
    return true;
  } catch (error) {
    sharedHistoryStatusEl.textContent = "Backend save failed";
    return false;
  }
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

  try {
    sharedHistoryStatusEl.textContent = "Syncing backend";
    const response = await fetch(`${getMasterHistoryUrl()}?ts=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("master history unavailable");

    const data = await response.json();
    const entries = Array.isArray(data?.transactions) ? data.transactions : [];
    replaceTransactionHistory(entries);
    sharedHistoryStatusEl.textContent = `Backend synced ${entries.length} row${entries.length === 1 ? "" : "s"}`;
    calculateSignal();
    return true;
  } catch (error) {
    sharedHistoryStatusEl.textContent = manual ? "Backend sync failed" : "Backend offline";
    return false;
  }
}

async function recordTransaction(entry) {
  const transaction = normalizeTransactionEntry({
    id: nextTransactionId,
    time: new Date(),
    ...entry
  });

  transaction.sharedKey = getTransactionKey(transaction);
  transactionHistory.unshift(transaction);
  nextTransactionId += 1;
  savePaperState();
  await saveSharedTransactionHistory();
  return transaction;
}

function isPaperActionPending(commodity) {
  return pendingPaperActions.has(commodity);
}

function markPaperActionPending(commodity) {
  pendingPaperActions.add(commodity);
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

  try {
    sandboxOrder = await submitCoinbaseSandboxOrder(trade, side === "short" ? "SELL" : "BUY", "open");
  } catch (error) {
    coinbaseSandboxStatusEl.textContent = "Sandbox open failed";
    clearPaperActionPending(commodity);
    return;
  }

  openPaperTrades.set(commodity, trade);
  savePaperState();
  recordTransaction({
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
  }).finally(() => clearPaperActionPending(commodity));
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

  try {
    sandboxOrder = await submitCoinbaseSandboxOrder(trade, trade.side === "short" ? "BUY" : "SELL", "close");
  } catch (error) {
    coinbaseSandboxStatusEl.textContent = "Sandbox close failed";
    paperEquity -= pnl;
    openPaperTrades.set(commodity, trade);
    clearPaperActionPending(commodity);
    return;
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

function executePaperTrading(commodity, commodityMeta, signal, tradePlan) {
  if (!latestPrices.has(commodity)) return;
  if (!hasHistoryBackend()) return;

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

  if (getSignalSide(signal) && signal.conviction >= tradePlan.learnedThreshold) {
    openPaperTrade(commodity, commodityMeta, signal, tradePlan);
  }
}

function renderKarpathyLoop(signal, tradePlan) {
  const loop = getKarpathyLoop(getSignalSide(signal));
  const winRateText = loop.sampleCount ? `${Math.round(loop.winRate * 100)}% win` : "No sample";
  const avgPnlText = loop.sampleCount ? `${formatSignedMoney(loop.avgPnl)} avg` : "No sample yet";

  paperKarpathyEl.textContent = `Threshold ${loop.threshold}`;
  loopCollectEl.textContent = `${loop.closedCount} closed trades`;
  loopEvaluateEl.textContent = `${winRateText} / ${avgPnlText}`;
  loopAdjustEl.textContent = `Threshold ${loop.threshold}, losses ${loop.lossStreak}`;

  if (loop.sampleCount < 3) {
    loopAdjustEl.textContent = `Threshold ${PAPER_MIN_CONVICTION}, needs 3 trades`;
  } else if (tradePlan.learnedThreshold > PAPER_MIN_CONVICTION) {
    loopAdjustEl.textContent = `More selective: ${loop.threshold}`;
  } else if (tradePlan.learnedThreshold < PAPER_MIN_CONVICTION) {
    loopAdjustEl.textContent = `More permissive: ${loop.threshold}`;
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
  return !start || entry.time >= start;
}

function getFilteredTransactions() {
  return transactionHistory.filter((entry) => {
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

function isOpeningTransaction(entry) {
  return !isClosingTransaction(entry) && ["BUY", "SELL SHORT"].includes(entry.action);
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
  if (entry.tradeId) {
    const exact = transactionHistory.find((candidate) => (
      candidate.tradeId === entry.tradeId &&
      candidate.id !== entry.id &&
      isOpeningTransaction(candidate)
    ));
    if (exact) return exact;
  }

  const entryTime = getTransactionDate(entry.time).getTime();
  return transactionHistory
    .filter((candidate) => (
      isOpeningTransaction(candidate) &&
      isSameTradePair(candidate, entry) &&
      getTransactionDate(candidate.time).getTime() <= entryTime
    ))
    .sort((a, b) => getTransactionDate(b.time) - getTransactionDate(a.time))[0] || null;
}

function getClosingEntry(entry) {
  if (entry.tradeId) {
    const exact = transactionHistory.find((candidate) => (
      candidate.tradeId === entry.tradeId &&
      candidate.id !== entry.id &&
      isClosingTransaction(candidate)
    ));
    if (exact) return exact;
  }

  const entryTime = getTransactionDate(entry.time).getTime();
  return transactionHistory
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
    grossPnl,
    netPnl: Number.isFinite(netPnl) ? netPnl : Number(entry.pnl) || 0,
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
    ["Gross P/L", Number.isFinite(detail.grossPnl) ? formatSignedMoney(detail.grossPnl) : "-"],
    ["Net P/L", Number.isFinite(detail.netPnl) ? formatSignedMoney(detail.netPnl) : "-"],
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
  const openTrade = getOpenPaperTrade(commodity);
  const openTrades = Array.from(openPaperTrades.values());
  const openPl = openTrades.reduce((total, trade) => {
    const currentPrice = latestPrices.get(trade.commodity) ?? trade.entryPrice;
    return total + getTradePnl(trade, currentPrice);
  }, 0);
  const committedCapital = openTrades.reduce((total, trade) => total + trade.capital, 0);
  const displayEquity = paperEquity + openPl;
  const signalSide = getSignalSide(signal);
  const nextCapital = getMartingaleCapital(tradePlan.minTradeValue);

  paperEquityEl.textContent = formatMoney(displayEquity);
  paperRiskEl.textContent = tradePlan.riskPct;
  paperSizeEl.textContent = openTrade ? `${openTrade.contracts || openTrade.quantity} contract${(openTrade.contracts || openTrade.quantity) === 1 ? "" : "s"}` : "Minimum trade";
  paperCommittedEl.textContent = formatMoney(committedCapital);
  paperOpenPlEl.textContent = formatSignedMoney(openPl);
  paperOpenPlEl.className = openPl >= 0 ? "gain" : "loss";
  paperMartingaleEl.textContent = `Step ${martingaleStep} / ${MARTINGALE_MAX_STEP} (${formatMoney(nextCapital)})`;

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
  } else {
    paperTradeSummaryEl.textContent = `No open paper trade for the selected contract. Next trade uses Martingale step ${martingaleStep}.`;
  }

  transactionHistoryEl.innerHTML = "";
  renderHistoryFilterButtons();
  renderPeriodFilterButtons();

  if (!transactionHistory.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    historyTotalAllEl.textContent = "$0.00";
    historyTotalAllEl.className = "";
    historyTotalFilteredEl.textContent = "$0.00";
    historyTotalFilteredEl.className = "";
    historyTotalCountEl.textContent = "0 rows";
    cell.colSpan = 8;
    cell.textContent = "Waiting for a long or short advisory above 50 conviction.";
    row.append(cell);
    transactionHistoryEl.append(row);
    return;
  }

  const periodEntries = transactionHistory.filter((entry) => isEntryInPeriod(entry, historyPeriodFilter));
  const filteredEntries = getFilteredTransactions();
  const allTotal = getProfitTotal(periodEntries);
  const filteredTotal = getProfitTotal(filteredEntries);

  historyTotalAllEl.textContent = formatSignedMoney(allTotal);
  historyTotalAllEl.className = allTotal >= 0 ? "gain" : "loss";
  historyTotalFilteredEl.textContent = formatSignedMoney(filteredTotal);
  historyTotalFilteredEl.className = filteredTotal >= 0 ? "gain" : "loss";
  historyTotalCountEl.textContent = `${filteredEntries.length} row${filteredEntries.length === 1 ? "" : "s"}`;

  if (!filteredEntries.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 8;
    cell.textContent = "No transactions match the selected filters.";
    row.append(cell);
    transactionHistoryEl.append(row);
    return;
  }

  filteredEntries.slice(0, 50).forEach((entry) => {
    const row = document.createElement("tr");
    const displayPnl = getDisplayPnl(entry);
    const pnlClass = displayPnl > 0 ? "gain" : displayPnl < 0 ? "loss" : "";
    const expanded = expandedTransactionId === entry.id;
    const values = [
      formatTradeTime(entry.time),
      null,
      entry.side ? formatSide(entry.side) : "-",
      entry.step ? `#${entry.step}` : "-",
      entry.contract,
      formatPrice(entry.price),
      formatMoney(entry.capital),
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
        toggle.setAttribute("aria-label", `${expanded ? "Collapse" : "Expand"} ${entry.action} transaction`);
        chevron.className = "chevron";
        chevron.textContent = expanded ? "▾" : "▸";
        toggle.append(chevron, document.createTextNode(entry.action));
        toggle.addEventListener("click", (event) => {
          event.stopPropagation();
          expandedTransactionId = expanded ? null : entry.id;
          calculateSignal();
        });
        cell.append(toggle);
      } else {
        cell.textContent = value;
      }
      if (index === 7 && pnlClass) cell.className = pnlClass;
      row.append(cell);
    });
    transactionHistoryEl.append(row);

    if (expanded) {
      const detailRow = document.createElement("tr");
      const detailCell = document.createElement("td");

      detailRow.className = "transaction-detail";
      detailCell.colSpan = 8;
      detailCell.append(renderTransactionDetail(entry));
      detailRow.append(detailCell);
      transactionHistoryEl.append(detailRow);
    }
  });
}

function calculateSignal() {
  const commodity = commoditySelect.value;
  const commodityMeta = commodities.find(({ id }) => id === commodity) || commodities[0];
  const baseSignals = readBaseSignals();
  const primarySignal = scoreCommodity(commodity, baseSignals);
  const tradePlan = buildTradePlan(commodity, primarySignal);

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
  outputTitle.textContent = `Advisor output: ${commodityMeta.name}`;
  signalBadge.textContent = primarySignal.label;
  signalBadge.style.background = primarySignal.color;
  convictionEl.textContent = `${primarySignal.conviction} / 100`;
  actionEl.textContent = primarySignal.action;
  tickerEl.textContent = tradePlan.ticker;
  contractMonthEl.textContent = tradePlan.contractMonth;
  priceEl.textContent = formatPrice(tradePlan.livePrice);
  entryLabelEl.textContent = tradePlan.entryLabel;
  targetLabelEl.textContent = tradePlan.targetLabel;
  targetBuyEl.textContent = formatPrice(tradePlan.buyPrice);
  targetSellEl.textContent = formatPrice(tradePlan.sellPrice);
  stopLossEl.textContent = formatPrice(tradePlan.stopLoss);
  buyWindowEl.textContent = tradePlan.buyWindow;
  priceSourceEl.textContent = tradePlan.priceSource;
  minLongEl.textContent = tradePlan.minLong;
  minShortEl.textContent = tradePlan.minShort;
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

  executePaperTrading(commodity, commodityMeta, primarySignal, tradePlan);
  renderKarpathyLoop(primarySignal, tradePlan);
  renderPaperTrading(commodity, primarySignal, tradePlan);
  maybeRecordAdvisorySnapshot(commodity, baseSignals, tradePlan);
}

[
  commoditySelect,
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

commoditySelect.addEventListener("change", refreshSelectedCoinbasePrice);
commoditySelect.addEventListener("change", () => {
  connectCoinbaseWebSocket(commoditySelect.value);
});
historyPeriodFiltersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-period]");
  if (!button) return;

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
saveHistoryApiEl.addEventListener("click", () => {
  setHistoryApiUrl(historyApiUrlEl.value);
  loadSharedSettings(true);
  loadSharedTransactionHistory(true);
  loadSharedAdvisoryHistory(true);
});
historyApiUrlEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    setHistoryApiUrl(historyApiUrlEl.value);
    loadSharedSettings(true);
    loadSharedTransactionHistory(true);
    loadSharedAdvisoryHistory(true);
  }
});
syncHistoryEl.addEventListener("click", () => {
  loadSharedSettings(true)
    .then(() => saveSharedTransactionHistory())
    .then(() => loadSharedTransactionHistory(true))
    .then(() => loadSharedAdvisoryHistory(true));
});
cleanHistoryEl.addEventListener("click", cleanSharedTransactionHistory);
exportHistoryEl.addEventListener("click", downloadSharedHistory);
coinbaseSandboxEnabledEl.addEventListener("change", () => {
  setCoinbaseSandboxEnabled(coinbaseSandboxEnabledEl.checked);
  saveSharedSettings();
  calculateSignal();
});
menuButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveSection(button.dataset.sectionTarget));
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

function initializeApp() {
  if (appStarted) return;
  appStarted = true;

  loadPaperState();
  loadUserRoster();
  loadFeatureRequests();
  markCurrentSessionActive();
  renderUserManagement();
  renderFeatureRequests();
  setActiveSection(activeSection);
  initializeHistoryApiControls();
  renderHistoryFilterButtons();
  renderPeriodFilterButtons();
  renderAdvisoryFilterButtons();
  calculateSignal();
  loadSharedSettings();
  loadSharedTransactionHistory();
  loadSharedAdvisoryHistory();
  connectCoinbaseWebSocket(commoditySelect.value);
  refreshSelectedCoinbasePrice();
  window.setInterval(refreshSelectedCoinbasePrice, LIVE_PRICE_REFRESH_MS);
  window.addEventListener("resize", renderAdvisoryChart);
}

if (window.sessionStorage.getItem(ACCESS_STATE_KEY) === "true") {
  showAppShell();
  initializeApp();
} else {
  accessPasswordEl.focus();
}
