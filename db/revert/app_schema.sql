-- Revert koala:app_schema from pg

BEGIN;

DROP SCHEMA koala;

COMMIT;
