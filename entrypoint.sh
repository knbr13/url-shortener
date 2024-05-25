#!/bin/sh

migrate -path=./migrations -database=mysql://$MYSQL_URL_DB_DSN up

if [ $? -ne 0 ]; then
  echo "Migration failed"
  exit 1
fi

./server
