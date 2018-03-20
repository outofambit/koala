-- Verify koala:app_schema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('koala', 'usage');

ROLLBACK;
