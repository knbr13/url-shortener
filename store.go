package main

import (
	"database/sql"
	"time"
)

type urlStore struct {
	db *sql.DB
}

func (u *urlStore) insertUrl(original, short string, expireTime time.Time) (int64, error) {
	res, err := u.db.Exec("INSERT INTO urls (original, short, expires_at) VALUES (?,?,?)", original, short, expireTime)
	if err != nil {
		return 0, err
	}

	return res.LastInsertId()
}
