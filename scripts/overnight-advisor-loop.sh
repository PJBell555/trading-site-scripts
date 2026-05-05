#!/usr/bin/env bash
# Overnight loop that hits the LLM advisory endpoint at a fixed interval and
# logs each response (with timestamp) to overnight-advisories.jsonl. Runs
# detached. Free to kill at any time with: pkill -f overnight-advisor-loop.
#
# Usage:
#   nohup bash scripts/overnight-advisor-loop.sh > overnight-loop.log 2>&1 &
#   disown
#
# Cost guard: at ~$0.011/advisory and 1 advisory/hour, an 8-hour overnight
# run is ~$0.09. The loop self-aborts if cost-tracker file shows >$2 total.

set -u

WORKER_URL="https://trading-site-scripts.peter-bell54.workers.dev/models/openrouter/advisory"
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ADVISORIES_LOG="$REPO_DIR/overnight-advisories.jsonl"
COST_FILE="$REPO_DIR/.overnight-cost-cents"
INTERVAL_SECONDS="${INTERVAL_SECONDS:-3600}"
COST_CAP_CENTS="${COST_CAP_CENTS:-200}"  # $2.00 hard stop

# Initialize cost tracker if absent
[ -f "$COST_FILE" ] || echo "0" > "$COST_FILE"

ts() { date -u +"%Y-%m-%dT%H:%M:%SZ"; }

# Build the payload. Try to fetch the live oil price from Coinbase, fall back
# to last known value if the call fails.
build_payload() {
  local price
  price=$(curl -sS --max-time 5 "https://api.coinbase.com/api/v3/brokerage/market/products/NOL-18MAY26-CDE/ticker?ts=$(date +%s)" 2>/dev/null \
    | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('price','104.34'))" 2>/dev/null) || price="104.34"

  cat <<JSON
{
  "commodity":"oil",
  "horizon":"intraday",
  "context":{
    "currentPrice": $price,
    "signals":{
      "trend":"recovering_off_lows",
      "inventoryPressure":"draws",
      "geopoliticalRisk":"disrupted",
      "dollarPressure":"weaker",
      "curveStructure":"flat"
    },
    "macroNotes":"2026 Iran war, US-Iran ceasefire since Apr 8 2026, Strait of Hormuz still under dual blockade. Pre-war WTI ~\$60, peak ~\$120, current ~\$$price."
  }
}
JSON
}

echo "[$(ts)] overnight-advisor-loop starting (interval=${INTERVAL_SECONDS}s, cap=\$$(echo "scale=2; $COST_CAP_CENTS/100" | bc))"
echo "[$(ts)] writing advisories to: $ADVISORIES_LOG"

while true; do
  CURRENT_CENTS=$(cat "$COST_FILE")
  if [ "$CURRENT_CENTS" -ge "$COST_CAP_CENTS" ]; then
    echo "[$(ts)] cost cap reached (\$$(echo "scale=2; $CURRENT_CENTS/100" | bc)) — stopping loop"
    break
  fi

  PAYLOAD=$(build_payload)
  TS=$(ts)
  echo "[$TS] requesting advisory…"

  RESPONSE=$(curl -sS --max-time 60 -X POST "$WORKER_URL" \
    -H "Content-Type: application/json" \
    -d "$PAYLOAD" 2>&1)

  # Extract cost from response and add to running total
  ADVISORY_COST_CENTS=$(echo "$RESPONSE" | python3 -c "
import json, sys
try:
  d = json.loads(sys.stdin.read())
  primary_cost = d.get('primary', {}).get('usage', {}).get('cost', 0) or 0
  critic_cost = d.get('critic', {}).get('usage', {}).get('cost', 0) or 0
  total_cents = int(round((float(primary_cost) + float(critic_cost)) * 100))
  print(total_cents)
except Exception:
  print(0)
" 2>/dev/null || echo "0")

  NEW_CENTS=$((CURRENT_CENTS + ADVISORY_COST_CENTS))
  echo "$NEW_CENTS" > "$COST_FILE"

  # Append a line to the JSONL log
  echo "{\"timestamp\":\"$TS\",\"costCentsThisCall\":$ADVISORY_COST_CENTS,\"costCentsTotal\":$NEW_CENTS,\"response\":$RESPONSE}" >> "$ADVISORIES_LOG"

  echo "[$TS] done. cost: \$$(echo "scale=4; $ADVISORY_COST_CENTS/100" | bc) this call, \$$(echo "scale=2; $NEW_CENTS/100" | bc) total. Sleeping ${INTERVAL_SECONDS}s."

  sleep "$INTERVAL_SECONDS"
done

echo "[$(ts)] overnight-advisor-loop exiting"
