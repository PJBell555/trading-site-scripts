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
const paperStepsEl = document.querySelector("#paper-steps");
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
    referencePrice: 88.75,
    buyWindow: "09:45-10:30 ET"
  },
  "natural-gas": { ticker: "NG-USD-FUT", productId: "NATURAL-GAS-USD", contractMonth: "May 2026", referencePrice: 2.31, buyWindow: "10:00-11:00 ET" },
  gold: { ticker: "GOLD-USD-FUT", productId: "GOLD-USD", contractMonth: "May 2026", referencePrice: 4818.0, buyWindow: "09:35-10:15 ET" },
  silver: { ticker: "SILVER-USD-FUT", productId: "SILVER-USD", contractMonth: "May 2026", referencePrice: 27.6, buyWindow: "09:35-10:15 ET" },
  copper: { ticker: "COPPER-USD-FUT", productId: "COPPER-USD", contractMonth: "May 2026", referencePrice: 4.58, buyWindow: "09:45-10:45 ET" },
  platinum: { ticker: "PLATINUM-USD-FUT", productId: "PLATINUM-USD", contractMonth: "May 2026", referencePrice: 980.5, buyWindow: "10:00-11:00 ET" }
};

const latestPrices = new Map();

const chipMap = new Map();

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
  });
  commodityStrip.append(chip);
  chipMap.set(commodity.id, { chip, state });
}

commoditySelect.value = "oil";

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

function formatTradeDate() {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "America/New_York"
  }).format(new Date());
}

function buildTradePlan(commodity, signal) {
  const config = marketConfig[commodity];
  const livePrice = latestPrices.get(commodity) ?? config.referencePrice;
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
  const riskPct = signal.conviction >= 70 ? "1.00%" : signal.conviction >= 55 ? "0.75%" : "0.50%";
  const size = signal.conviction >= 70 ? "2 contracts" : "1 contract";
  const status = waitBias ? "Stand by" : "Armed";

  return {
    ticker: config.ticker,
    contractMonth: config.contractMonth || "Front month",
    livePrice,
    buyPrice,
    sellPrice,
    stopLoss,
    buyWindow: `${formatTradeDate()} / ${config.buyWindow}`,
    priceSource: latestPrices.has(commodity) ? "Coinbase live" : "Reference",
    minLong: `1 contract / ${formatPrice(longEntry)}`,
    minShort: `1 contract / ${formatPrice(shortEntry)}`,
    riskPct,
    size,
    status,
    steps: [
      `Wait for ${config.buyWindow} and confirm ${commodity} still shows a ${signal.chipLabel.toLowerCase()} bias.`,
      `Paper-enter near ${formatPrice(buyPrice)} and avoid chasing beyond the planned level.`,
      `Use ${formatPrice(stopLoss)} as the suggested stop and exit near ${formatPrice(sellPrice)} if target is hit.`
    ]
  };
}

async function refreshCoinbasePrice(commodity) {
  const config = marketConfig[commodity];
  if (!config) return;

  try {
    const response = await fetch(`https://api.coinbase.com/api/v3/brokerage/market/products/${config.productId}/ticker`);
    if (!response.ok) throw new Error("price unavailable");
    const data = await response.json();
    const tradePrice = Number(data?.trades?.[0]?.price || data?.best_bid || data?.best_ask);
    if (Number.isFinite(tradePrice) && tradePrice > 0) {
      latestPrices.set(commodity, tradePrice);
      if (commoditySelect.value === commodity) calculateSignal();
    }
  } catch (error) {
    latestPrices.delete(commodity);
    if (commoditySelect.value === commodity) calculateSignal();
  }
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
  targetBuyEl.textContent = formatPrice(tradePlan.buyPrice);
  targetSellEl.textContent = formatPrice(tradePlan.sellPrice);
  stopLossEl.textContent = formatPrice(tradePlan.stopLoss);
  buyWindowEl.textContent = tradePlan.buyWindow;
  priceSourceEl.textContent = tradePlan.priceSource;
  minLongEl.textContent = tradePlan.minLong;
  minShortEl.textContent = tradePlan.minShort;
  paperEquityEl.textContent = "$100,000";
  paperRiskEl.textContent = tradePlan.riskPct;
  paperSizeEl.textContent = tradePlan.size;
  paperStatusEl.textContent = tradePlan.status;
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

calculateSignal();
refreshCoinbasePrice(commoditySelect.value);
