# Paper Trade History Backend

This project uses a Cloudflare Worker to make `transactions.json` the shared master ledger.

## What It Does

- `GET` returns the current GitHub master `transactions.json`.
- `POST` merges browser trades into the master ledger and writes it back to GitHub.
- `POST /coinbase/sandbox/orders` forwards mock market orders to Coinbase's sandbox endpoint.
- `GET/POST /settings` shares cross-device app settings such as the Coinbase sandbox toggle.
- `GET/POST /advisories` stores one-minute advisory/price samples for the charting lab.
- Every successful `POST` also writes a date-stamped backup like `backups/transactions-2026-04-30.json`.
- The browser never sees the GitHub token.

## One-Time GitHub Token

Create a fine-grained GitHub token with **Contents: Read and write** access for:

`PJBell555/trading-site-scripts`

## Cloudflare Worker Setup

From the repo root, log in and deploy:

```powershell
npx wrangler login
npx wrangler secret put GITHUB_TOKEN
npx wrangler deploy
```

When prompted for `GITHUB_TOKEN`, paste the GitHub token.

The non-secret Worker variables live in `wrangler.toml`:

```text
GITHUB_REPOSITORY = "PJBell555/trading-site-scripts"
GITHUB_BRANCH = "main"
HISTORY_PATH = "transactions.json"
BACKUP_DIR = "backups"
SETTINGS_PATH = "settings.json"
ADVISORY_PATH = "advisory-snapshots.json"
ALLOWED_ORIGIN = "https://pjbell555.github.io"
```

After deploy, Cloudflare prints a Worker URL like:

```text
https://atlas-trade-history.YOUR-SUBDOMAIN.workers.dev
```

## Browser Setup

Open the site, paste the Worker URL into **Backend URL**, and click **Save API**.
Use the same Worker URL on desktop, mobile, and the Codex local browser.

After that, all devices sync through the same GitHub-backed master ledger.

To test mock Coinbase order flow, enable **Send mock orders** in the Coinbase sandbox control. The app will continue to manage targets and stops locally, but each paper open/close will also send a sandbox market order through the Worker and record the sandbox response in the trade detail.
