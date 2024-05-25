package main

import (
	"database/sql"
	"time"
)

type urlStore struct {
	db *sql.DB
}

type URL struct {
	Id        int
	Original  string
	Short     string
	Expires   *time.Time
	CreatedAt *time.Time
}

func (u *urlStore) insertUrl(original, short string, expireTime *time.Time) (int64, error) {
	res, err := u.db.Exec("INSERT INTO urls (original_url, short_url, expires_at) VALUES (?,?,?)", original, short, expireTime)
	if err != nil {
		return 0, err
	}

	return res.LastInsertId()
}

func (u *urlStore) getByShortenedURL(su string) (URL, error) {
	var url URL
	err := u.db.
		QueryRow("SELECT id, original_url, short_url, expires_at, created_at FROM urls WHERE short_url = ?", su).
		Scan(&url.Id, &url.Original, &url.Short, &url.Expires, &url.CreatedAt)
	return url, err
}

func (u *urlStore) deleteById(id int) error {
	_, err := u.db.Exec("DELETE FROM urls WHERE id =?", id)
	return err
}
