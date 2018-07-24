DROP DATABASE IF EXISTS todosdb;
CREATE DATABASE todosdb;

\c todosdb;

CREATE TABLE todos (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  status VARCHAR
);

INSERT IN todos (name, status)
  VALUES ('do something', 'new');