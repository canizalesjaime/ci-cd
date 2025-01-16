-- CREATE DATABASE scheduler;
-- run this script: psql -U scheduler_user -d scheduler -f schema.sql


CREATE TABLE schedule (
  id SERIAL PRIMARY KEY,
  day VARCHAR(50),
  time VARCHAR(50),
  event TEXT
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  due_date DATE
);
