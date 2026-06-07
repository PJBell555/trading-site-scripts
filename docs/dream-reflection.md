# ComHedge Dream Reflection

ComHedge dream reflection is a Cloudflare-only background memory maintenance pass. The browser only displays the trader strategy switch and syncs that shared setting to Cloudflare. Reflection code, inputs, run history, and synthesized insights live in the Worker and D1.

## Runtime

- Worker route: `/dream-reflection`
- Scheduled run: existing Worker cron, guarded by `DREAM_REFLECTION_INTERVAL_MS`
- Input source: D1 `open_brain_events`, recent D1 paper trades, D1 shared settings
- Output source: D1 `dream_reflection_runs`, D1 `dream_memory_insights`
- Model secret: `OPENROUTER_API_KEY`
- Optional model var: `DREAM_REFLECTION_MODEL`

## Strategy Gate

The `dreamReflection` strategy flag is enabled for `peter@pjbell.com` by default. Worker normalization resolves the flag to `false` for all other traders, even if stale settings contain a truthy value.

## Layers

- `raw_open_brain_events`: source material from the Cloudflare Open Brain event table.
- `paper_trade_session_events`: recent paper-trading actions and outcomes from D1.
- `synthesized_dream_insights`: durable lessons written by the reflection pass after model review.

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

The model returns a JSON patch with `summary`, `add`, `update`, `merge`, `deprecate`, and `needs_review`. The Worker only auto-writes safe `add` insights to D1; other patch sections remain in the run audit payload.
