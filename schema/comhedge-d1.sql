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
