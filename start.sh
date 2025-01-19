#!/bin/bash
# Start PostgreSQL
service postgresql start
npm install
node migrate.js
# Prevent the container from exiting
tail -f /dev/null
