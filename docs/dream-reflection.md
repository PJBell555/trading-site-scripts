# ComHedge Dream Reflection

ComHedge dream reflection is a Cloudflare-only background memory maintenance pass. The browser only displays the trader strategy switch and syncs that shared setting to Cloudflare. Reflection code, inputs, run history, and synthesized insights live in the Worker and D1.

## Runtime

- Worker route: `/dream-reflection`
- Scheduled run: existing Worker cron, guarded by `DREAM_REFLECTION_INTERVAL_MS`
- Input source: D1 `open_brain_events`, recent D1 paper trades, D1 shared settings
- Advisory input: Cloudflare D1 advisory snapshots and advisory accuracy metrics, with a 60%+ directional accuracy target for martingale-qualified calls
- Output source: D1 `dream_reflection_runs`, D1 `dream_memory_insights`
- Model secret: `OPENROUTER_API_KEY`
- Optional model var: `DREAM_REFLECTION_MODEL`

## Strategy Gate

The `dreamReflection` strategy flag is enabled for `peter@pjbell.com` by default. Worker normalization resolves the flag to `false` for all other traders, even if stale settings contain a truthy value.

## Layers

- `raw_open_brain_events`: source material from the Cloudflare Open Brain event table.
- `paper_trade_session_events`: recent paper-trading actions and outcomes from D1.
- `advisory_accuracy_metrics`: Cloudflare-calculated advisory forecast accuracy, trade accuracy, calibration bands, recent advisory outcomes, and long/short edge.
- `karpathy_loop_review`: Dream can review Karpathy threshold recommendations, recent win rate, average P/L, and repeated learning errors.
- `synthesized_dream_insights`: durable lessons written by the reflection pass after model review.

Dream does not place orders. Karpathy remains the scheduler-side threshold/outcome learner. Dream reviews Karpathy output and can only auto-apply bounded, conservative strategy changes. Dream must also reflect on how to get qualified advisories above 60% directional accuracy before martingale recovery logic relies on them.

## Recommendation Types

Every Dream insight is stored with one of four recommendation types:

- `observe_only`: memory only; no behavior change.
- `suggest_strategy_change`: conservative risk tightening only, such as reducing flat martingale escalation after repeated drawdown evidence or requiring stronger advisory-confirmed edge after poor advisory accuracy.
- `suggest_karpathy_threshold_review`: can apply a Karpathy threshold only when the Karpathy recommendation is enabled, marked auto-apply, has enough samples, and tightens rather than loosens the current threshold.
- `suggest_scheduler_rule_review`: can enable scheduler hygiene guards, such as filtering missed-opportunity learner records when a trade was blocked only because a position was already open.

Auto-applied changes are written back to Cloudflare shared settings and strategy records, with the Dream insight storing `autoApplyStatus`, `appliedAt`, and the applied patch audit. The browser is not the source of truth.

## API

Inspect stored runs and insights:

```http
GET /dream-reflection
```

Queue a Cloudflare-side reflection run:

```http
POST /dream-reflection
Content-Type: application/json

{ "force": true }
```

Run synchronously for debugging:

```http
POST /dream-reflection?sync=1&force=1
```

The model returns a JSON patch with `summary`, `add`, `update`, `merge`, `deprecate`, and `needs_review`. The Worker writes safe `add` insights to D1 and may auto-apply only the bounded recommendation types above; other patch sections remain in the run audit payload.
