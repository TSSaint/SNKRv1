-- \c sneaker_base

CREATE TABLE IF NOT EXISTS shoes (
  id SERIAL PRIMARY KEY,
  model VARCHAR(255),
  size BIGINT,
  description VARCHAR
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);

ALTER TABLE shoes
ADD COLUMN user_id INTEGER REFERENCES users(id);