#!/usr/bin/env node
// scripts/reconcile-stuck-trades.mjs
//
// Finds paper-trade open records (BUY / SELL SHORT) with closedAt:null that
// already have matching close transactions in the same ledger, and patches
// the open record with closedAt + exitPrice + pnl from the earliest matching
// close. Writes transactions.json in place.
//
// Usage:
//   # Dry run (default):
//   node scripts/reconcile-stuck-trades.mjs
//
//   # Apply the patch:
//   node scripts/reconcile-stuck-trades.mjs --apply
//
// Caller is responsible for pausing the Worker (PAUSE_GIT_WRITES=true) before
// committing the patched file, and for resuming after the deploy lands.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const txPath = resolve(repoRoot, "transactions.json");
const apply = process.argv.includes("--apply");

const isClosing = (entry) =>
  Number(entry.pnl) !== 0 || /TARGET|STOP|CLOSE/.test(entry.action || "");
const isOpening = (entry) =>
  /BUY|SELL SHORT/.test(entry.action || "") && !isClosing(entry);

const raw = JSON.parse(await readFile(txPath, "utf8"));
const transactions = Array.isArray(raw.transactions) ? raw.transactions : [];

const closesByTradeId = new Map();
for (const t of transactions) {
  if (!isClosing(t)) continue;
  const tid = t.tradeId ?? t.id;
  if (tid == null) continue;
  if (!closesByTradeId.has(tid)) closesByTradeId.set(tid, []);
  closesByTradeId.get(tid).push(t);
}

const patches = [];
for (const t of transactions) {
  if (!isOpening(t)) continue;
  if (t.closedAt) continue;
  if (t.entryPrice == null) continue;

  const tid = t.tradeId ?? t.id;
  const closes = closesByTradeId.get(tid) || [];
  const candidates = closes.filter((c) => {
    if (t.openedAt && c.openedAt) return t.openedAt === c.openedAt;
    return c.commodity === t.commodity
      && c.contract === t.contract
      && c.side === t.side
      && Number(c.step || 1) === Number(t.step || 1);
  });
  if (!candidates.length) continue;

  candidates.sort((a, b) =>
    new Date(a.closedAt || a.time).getTime()
    - new Date(b.closedAt || b.time).getTime()
  );
  const earliest = candidates[0];

  patches.push({
    target: t,
    update: {
      closedAt: earliest.closedAt || earliest.time,
      exitPrice: earliest.exitPrice ?? earliest.price ?? null,
      pnl: earliest.pnl ?? null,
      netPnl: earliest.netPnl ?? earliest.pnl ?? null,
      grossPnl: earliest.grossPnl ?? null,
      durationMs: t.openedAt
        ? new Date(earliest.closedAt || earliest.time).getTime() - new Date(t.openedAt).getTime()
        : null,
      reconciledFromCloseId: earliest.id,
      reconciledAt: new Date().toISOString()
    }
  });
}

console.log(`Stuck open records found: ${patches.length}`);
for (const p of patches) {
  const t = p.target;
  console.log(
    `  id=${t.id} tradeId=${t.tradeId} ${t.side} ${t.contract}`
    + ` opened=${t.openedAt}`
    + ` -> closed=${p.update.closedAt} exit=${p.update.exitPrice} pnl=${p.update.pnl}`
    + ` (from close id=${p.update.reconciledFromCloseId})`
  );
}

if (!patches.length) {
  console.log("Nothing to reconcile.");
  process.exit(0);
}

if (!apply) {
  console.log("\nDry run. Pass --apply to write changes.");
  process.exit(0);
}

for (const p of patches) Object.assign(p.target, p.update);

raw.generatedAt = new Date().toISOString();
raw.reconciliation = {
  patched: patches.length,
  runAt: new Date().toISOString(),
  source: "scripts/reconcile-stuck-trades.mjs"
};

await writeFile(txPath, `${JSON.stringify(raw, null, 2)}\n`);
console.log(`\nApplied. Wrote ${patches.length} patched records to ${txPath}.`);
