CREATE TABLE IF NOT EXISTS token_usage (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_time TEXT NOT NULL,
  provider TEXT NOT NULL,
  model TEXT NOT NULL,
  job TEXT NOT NULL,
  prompt_tokens INTEGER NOT NULL DEFAULT 0,
  completion_tokens INTEGER NOT NULL DEFAULT 0,
  total_tokens INTEGER NOT NULL DEFAULT 0,
  cost_usd REAL NOT NULL DEFAULT 0,
  free_tier INTEGER NOT NULL DEFAULT 0,
  metadata_json TEXT NOT NULL DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_token_usage_event_time
  ON token_usage (event_time);

CREATE INDEX IF NOT EXISTS idx_token_usage_model
  ON token_usage (model);

CREATE INDEX IF NOT EXISTS idx_token_usage_job
  ON token_usage (job);

CREATE TABLE IF NOT EXISTS paper_transactions (
  transaction_key TEXT PRIMARY KEY,
  trade_id TEXT,
  user_email TEXT,
  commodity TEXT,
  commodity_name TEXT,
  action TEXT,
  side TEXT,
  step INTEGER,
  contract TEXT,
  price REAL,
  entry_price REAL,
  target_entry_price REAL,
  target_price REAL,
  stop_price REAL,
  exit_price REAL,
  committed REAL,
  capital REAL,
  gross_pnl REAL,
  net_pnl REAL,
  pnl REAL,
  opened_at TEXT,
  closed_at TEXT,
  transaction_time TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_paper_transactions_time
  ON paper_transactions (transaction_time DESC);

CREATE INDEX IF NOT EXISTS idx_paper_transactions_user
  ON paper_transactions (user_email, transaction_time DESC);

CREATE INDEX IF NOT EXISTS idx_paper_transactions_commodity
  ON paper_transactions (commodity, transaction_time DESC);

CREATE TABLE IF NOT EXISTS actual_transactions (
  transaction_key TEXT PRIMARY KEY,
  trade_id TEXT,
  user_email TEXT,
  commodity TEXT,
  commodity_name TEXT,
  action TEXT,
  side TEXT,
  step INTEGER,
  contract TEXT,
  price REAL,
  entry_price REAL,
  target_entry_price REAL,
  target_price REAL,
  stop_price REAL,
  exit_price REAL,
  committed REAL,
  capital REAL,
  gross_pnl REAL,
  net_pnl REAL,
  pnl REAL,
  opened_at TEXT,
  closed_at TEXT,
  transaction_time TEXT NOT NULL,
  payload_json TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_actual_transactions_time
  ON actual_transactions (transaction_time DESC);

CREATE INDEX IF NOT EXISTS idx_actual_transactions_user
  ON actual_transactions (user_email, transaction_time DESC);

CREATE INDEX IF NOT EXISTS idx_actual_transactions_commodity
  ON actual_transactions (commodity, transaction_time DESC);

CREATE TABLE IF NOT EXISTS advisory_snapshots (
  snapshot_key TEXT PRIMARY KEY,
  snapshot_time TEXT NOT NULL,
  commodity TEXT,
  commodity_name TEXT,
  price REAL,
  conviction REAL,
  llm_score REAL,
  local_score REAL,
  tone TEXT,
  label TEXT,
  action TEXT,
  payload_json TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_advisory_snapshots_time
  ON advisory_snapshots (snapshot_time DESC);

CREATE INDEX IF NOT EXISTS idx_advisory_snapshots_commodity
  ON advisory_snapshots (commodity, snapshot_time DESC);

CREATE INDEX IF NOT EXISTS idx_advisory_snapshots_tone
  ON advisory_snapshots (tone, snapshot_time DESC);

CREATE TABLE IF NOT EXISTS runtime_documents (
  document_key TEXT PRIMARY KEY,
  payload_json TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
