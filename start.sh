#!/bin/bash
# Start PostgreSQL
service postgresql start

# Prevent the container from exiting
tail -f /dev/null
