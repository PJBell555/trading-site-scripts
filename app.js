const commodities = [
  { id: "oil", name: "Oil", family: "Energy" },
  { id: "natural-gas", name: "Natural Gas", family: "Energy" },
  { id: "gold", name: "Gold", family: "Metals" },
  { id: "silver", name: "Silver", family: "Metals" },
  { id: "copper", name: "Copper", family: "Metals" },
  { id: "platinum", name: "Platinum", family: "Metals" }
];

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
const transactionHistoryEl = document.querySelector("#transaction-history");
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

const chipMap = new Map();
const openPaperTrades = new Map();
const transactionHistory = [];
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
const PAPER_STATE_KEY = "atlas-paper-trading-state-v1";

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
  const minTradeValue = productMinimums.get(commodity) ?? livePrice;
  const longBias = signal.tone === "long";
  const shortBias = signal.tone === "short";
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
  const size = signal.conviction >= 70 ? "2 contracts" : "1 contract";
  const status = waitBias ? "Stand by" : "Armed";
  const nextCapital = getMartingaleCapital(minTradeValue);
  const learnedThreshold = getKarpathyLoop(getSignalSide(signal)).threshold;
  const entryLabel = shortBias ? "Entry (sell short)" : longBias ? "Entry (buy)" : "Entry";
  const targetLabel = shortBias ? "Cover target" : longBias ? "Profit target" : "Profit target";

  return {
    ticker: config.ticker,
    contractMonth: config.contractMonth || "Front month",
    productType: config.productType,
    livePrice,
    entryPrice,
    targetPrice,
    entryLabel,
    targetLabel,
    buyPrice,
    sellPrice,
    stopLoss,
    buyWindow: `${formatTradeDate()} / ${config.buyWindow}`,
    priceSource: updatedAt ? `${priceSource || "Coinbase live"} / ${formatPriceTime(updatedAt)}` : "Reference (snapshot unavailable)",
    minTradeValue,
    minLong: `1 contract / ${formatMoney(minTradeValue)}`,
    minShort: `1 contract / ${formatMoney(minTradeValue)}`,
    nextCapital,
    learnedThreshold,
    riskPct,
    size,
    status,
    steps: [
      `Auto-enter long or short when conviction clears the learned threshold of ${learnedThreshold}.`,
      `Commit Martingale step ${martingaleStep} capital, currently ${formatMoney(nextCapital)}, and set the stop at ${formatPrice(stopLoss)}.`,
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

function getTradePnl(trade, exitPrice) {
  const priceMove = trade.side === "short"
    ? trade.entryPrice - exitPrice
    : exitPrice - trade.entryPrice;
  return priceMove * trade.quantity;
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
        openPaperTrades.set(commodity, {
          ...trade,
          openedAt: new Date(trade.openedAt)
        });
      });
    }
    if (Array.isArray(state.transactionHistory)) {
      transactionHistory.push(...state.transactionHistory.map((entry) => ({
        ...entry,
        commodity: entry.commodity || getCommodityFromContract(entry.contract),
        commodityName: entry.commodityName || commodities.find(({ id }) => id === (entry.commodity || getCommodityFromContract(entry.contract)))?.name,
        time: new Date(entry.time),
        openedAt: entry.openedAt ? new Date(entry.openedAt) : null,
        closedAt: entry.closedAt ? new Date(entry.closedAt) : null
      })));
    }
  } catch (error) {
    window.localStorage.removeItem(PAPER_STATE_KEY);
  }
}

function recordTransaction(entry) {
  transactionHistory.unshift({
    id: nextTransactionId,
    time: new Date(),
    ...entry
  });
  nextTransactionId += 1;
  savePaperState();
}

function openPaperTrade(commodity, commodityMeta, signal, tradePlan) {
  const side = getSignalSide(signal);
  if (!side) return;

  const entryPrice = tradePlan.livePrice;
  const capital = tradePlan.nextCapital;
  const quantity = capital / entryPrice;
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
    capital,
    quantity,
    conviction: signal.conviction,
    openedAt: new Date()
  };

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
    openedAt: trade.openedAt,
    capital,
    pnl: 0,
    note: `${commodityMeta.name} ${side} opened at ${signal.conviction} conviction`
  });
}

function closePaperTrade(commodity, exitPrice, reason) {
  const trade = getOpenPaperTrade(commodity);
  if (!trade) return;

  const pnl = getTradePnl(trade, exitPrice);
  paperEquity += pnl;
  openPaperTrades.delete(commodity);
  const closedAt = new Date();
  recordTransaction({
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
    exitPrice,
    openedAt: trade.openedAt,
    closedAt,
    durationMs: closedAt - new Date(trade.openedAt),
    capital: trade.capital,
    pnl,
    note: `${trade.commodityName} ${trade.side} closed from ${formatPrice(trade.entryPrice)}`
  });

  if (pnl >= 0 || trade.martingaleStep >= MARTINGALE_MAX_STEP) {
    martingaleStep = 1;
  } else {
    martingaleStep = trade.martingaleStep + 1;
  }
  savePaperState();
}

function executePaperTrading(commodity, commodityMeta, signal, tradePlan) {
  if (!latestPrices.has(commodity)) return;

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
  return entries.reduce((total, entry) => total + (Number(entry.pnl) || 0), 0);
}

function getClosingEntry(entry) {
  if (!entry.tradeId) return null;
  return transactionHistory.find((candidate) => (
    candidate.tradeId === entry.tradeId &&
    candidate.id !== entry.id &&
    Number(candidate.pnl) !== 0
  )) || null;
}

function getEntryDetail(entry) {
  const closingEntry = getClosingEntry(entry);
  const entryPrice = Number(entry.entryPrice ?? entry.price);
  const targetEntryPrice = Number(entry.targetEntryPrice ?? entry.entryPrice);
  const targetPrice = Number(entry.targetPrice);
  const stopPrice = Number(entry.stopPrice);
  const exitPrice = Number(entry.exitPrice ?? closingEntry?.exitPrice ?? (entry.pnl ? entry.price : NaN));
  const openedAt = entry.openedAt ? new Date(entry.openedAt) : entry.time;
  const closedAt = entry.closedAt ? new Date(entry.closedAt) : closingEntry?.closedAt ? new Date(closingEntry.closedAt) : null;
  const durationMs = Number.isFinite(entry.durationMs)
    ? entry.durationMs
    : Number.isFinite(closingEntry?.durationMs) ? closingEntry.durationMs
    : closedAt ? closedAt - openedAt : null;

  return {
    entryPrice,
    targetEntryPrice,
    targetPrice,
    stopPrice,
    exitPrice,
    openedAt,
    closedAt,
    durationMs
  };
}

function renderTransactionDetail(entry) {
  const detail = getEntryDetail(entry);
  const labels = [
    ["Actual entry", Number.isFinite(detail.entryPrice) ? formatPrice(detail.entryPrice) : "-"],
    ["Target entry", Number.isFinite(detail.targetEntryPrice) ? formatPrice(detail.targetEntryPrice) : "-"],
    ["Actual exit", Number.isFinite(detail.exitPrice) ? formatPrice(detail.exitPrice) : entry.pnl === 0 ? "Open" : "-"],
    ["Target exit", Number.isFinite(detail.targetPrice) ? formatPrice(detail.targetPrice) : "-"],
    ["Stop", Number.isFinite(detail.stopPrice) ? formatPrice(detail.stopPrice) : "-"],
    ["Opened", detail.openedAt ? formatTradeTime(detail.openedAt) : "-"],
    ["Closed", detail.closedAt ? formatTradeTime(detail.closedAt) : entry.pnl === 0 ? "Open" : "-"],
    ["Time open", Number.isFinite(detail.durationMs) ? formatDuration(detail.durationMs) : entry.pnl === 0 ? "Still open" : "-"],
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
  paperSizeEl.textContent = openTrade ? `${openTrade.quantity.toFixed(4)} contracts` : "Minimum trade";
  paperCommittedEl.textContent = formatMoney(committedCapital);
  paperOpenPlEl.textContent = formatSignedMoney(openPl);
  paperOpenPlEl.className = openPl >= 0 ? "gain" : "loss";
  paperMartingaleEl.textContent = `Step ${martingaleStep} / ${MARTINGALE_MAX_STEP} (${formatMoney(nextCapital)})`;

  if (!latestPrices.has(commodity)) {
    paperStatusEl.textContent = "Waiting for live price";
  } else if (openTrade) {
    paperStatusEl.textContent = `${formatSide(openTrade.side)} open`;
  } else if (signalSide && signal.conviction >= tradePlan.learnedThreshold) {
    paperStatusEl.textContent = `Ready to ${signalSide}`;
  } else {
    paperStatusEl.textContent = `Waiting for signal > ${tradePlan.learnedThreshold}`;
  }

  if (openTrade) {
    paperTradeSummaryEl.textContent = `Open ${openTrade.side} ${openTrade.contract}: step ${openTrade.martingaleStep}, entry ${formatPrice(openTrade.entryPrice)}, target ${formatPrice(openTrade.targetPrice)}, stop ${formatPrice(openTrade.stopPrice)}.`;
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
    const pnlClass = entry.pnl > 0 ? "gain" : entry.pnl < 0 ? "loss" : "";
    const expanded = expandedTransactionId === entry.id;
    const values = [
      formatTradeTime(entry.time),
      null,
      entry.side ? formatSide(entry.side) : "-",
      entry.step ? `#${entry.step}` : "-",
      entry.contract,
      formatPrice(entry.price),
      formatMoney(entry.capital),
      formatSignedMoney(entry.pnl)
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

loadPaperState();
renderHistoryFilterButtons();
renderPeriodFilterButtons();
calculateSignal();
connectCoinbaseWebSocket(commoditySelect.value);
refreshSelectedCoinbasePrice();
window.setInterval(refreshSelectedCoinbasePrice, LIVE_PRICE_REFRESH_MS);
