import { writeFile } from "node:fs/promises";

const commodities = [
  {
    id: "oil",
    ticker: "NOL-18MAY26-CDE",
    productId: "NOL-18MAY26-CDE",
    productType: "Coinbase futures contract",
    referencePrice: null
  },
  {
    id: "natural-gas",
    ticker: "NG reference",
    productId: "NATURAL-GAS-USD",
    productType: "Reference price, not a listed Coinbase futures contract",
    referencePrice: null
  },
  {
    id: "gold",
    ticker: "Gold reference",
    productId: "GOLD-USD",
    productType: "Reference price, not a listed Coinbase futures contract",
    referencePrice: null
  },
  {
    id: "silver",
    ticker: "Silver reference",
    productId: "SILVER-USD",
    productType: "Reference price, not a listed Coinbase futures contract",
    referencePrice: null
  },
  {
    id: "copper",
    ticker: "Copper reference",
    productId: "COPPER-USD",
    productType: "Reference price, not a listed Coinbase futures contract",
    referencePrice: null
  },
  {
    id: "platinum",
    ticker: "Platinum reference",
    productId: "PLATINUM-USD",
    productType: "Reference price, not a listed Coinbase futures contract",
    referencePrice: null
  }
];

function getCoinbasePrice(data) {
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
    cache: "no-store",
    headers: {
      "accept": "application/json",
      "cache-control": "no-cache"
    }
  });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
}

async function getSnapshot(commodity) {
  const cacheBust = Date.now();
  const tickerUrl = `https://api.coinbase.com/api/v3/brokerage/market/products/${commodity.productId}/ticker?ts=${cacheBust}`;
  const productUrl = `https://api.coinbase.com/api/v3/brokerage/products/${commodity.productId}?ts=${cacheBust}`;
  const fetchedAt = new Date().toISOString();

  try {
    const tickerData = await fetchJson(tickerUrl);
    const priceData = getCoinbasePrice(tickerData);

    if (!priceData) {
      throw new Error("No usable ticker price in Coinbase response");
    }

    let minimumTradeValue = priceData.price;

    try {
      const productData = await fetchJson(productUrl);
      minimumTradeValue = getCoinbaseMinimumTradeValue(productData, priceData.price);
    } catch (error) {
      minimumTradeValue = priceData.price;
    }

    return {
      id: commodity.id,
      ticker: commodity.ticker,
      productId: commodity.productId,
      productType: commodity.productType,
      fetchedAt,
      minimumTradeValue,
      ok: true,
      ...priceData
    };
  } catch (error) {
    return {
      id: commodity.id,
      ticker: commodity.ticker,
      productId: commodity.productId,
      productType: commodity.productType,
      fetchedAt,
      minimumTradeValue: null,
      ok: false,
      price: null,
      error: error.message,
      method: "unavailable"
    };
  }
}

const snapshots = await Promise.all(commodities.map(getSnapshot));
const payload = {
  generatedAt: new Date().toISOString(),
  source: "github-actions-coinbase-rest-snapshot",
  prices: Object.fromEntries(snapshots.map((snapshot) => [snapshot.id, snapshot]))
};

await writeFile("prices.json", `${JSON.stringify(payload, null, 2)}\n`);
