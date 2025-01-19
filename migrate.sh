export PGPASSWORD="hello1234"
service postgresql start
psql -U postgres -d postgres -f /migrations/init.sql