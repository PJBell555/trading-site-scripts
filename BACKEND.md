# Paper Trade History Backend

This project can use a small serverless API to make `transactions.json` the shared master ledger.

## Deploy

Deploy the repo to a serverless host that supports Node functions, such as Vercel. The API endpoint is:

```text
https://YOUR-BACKEND-DOMAIN/api/transactions
```

## Environment Variables

Set these on the backend host:

```text
GITHUB_TOKEN=github fine-grained token with Contents read/write for this repo
GITHUB_REPOSITORY=PJBell555/trading-site-scripts
GITHUB_BRANCH=main
HISTORY_PATH=transactions.json
ALLOWED_ORIGIN=https://pjbell555.github.io
```

Use `ALLOWED_ORIGIN=*` while testing if needed.

## Browser Setup

Open the site, paste the backend endpoint into **Backend URL**, and click **Save API**.
After that, both desktop and mobile browsers can sync through the same GitHub-backed master ledger.
