package main

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/go-sql-driver/mysql"
	"github.com/knbr13/url-shortener/validator"
)

func (a *App) ShortenURL(w http.ResponseWriter, r *http.Request) {
	var reqBody struct {
		Path       string    `json:"path"`
		Url        string    `json:"url"`
		ExpireAt   string    `json:"expire_at"`
		ExpireTime time.Time `json:"-"`
	}

	err := json.NewDecoder(r.Body).Decode(&reqBody)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	v := validator.New()

	v.Check(pathrgx.MatchString(reqBody.Path), "path", "invalid 'path' parameter, use only: alphanumeric characters, underscores, or hyphens")
	v.Check(isValidURL(reqBody.Url), "url", "invalid 'url' parameter")
	if reqBody.ExpireAt != "" {
		t, err := time.Parse(time.DateOnly, reqBody.ExpireAt)
		if err != nil {
			v.AddError("expire_at", "invalid 'expire_at' parameter")
		} else if now := time.Now(); t.Before(time.Date(now.Year(), now.Month(), now.Day(), 0, 0, 0, 0, now.Location())) {
			v.AddError("expire_at", "invalid 'expire_at' parameter")
		} else {
			reqBody.ExpireTime = t
		}
	}

	if !v.Valid() {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(v.Errors)
		return
	}

	id, err := a.u.insertUrl(reqBody.Url, reqBody.Path, reqBody.ExpireTime)
	if err != nil {
		if errors.Is(err, &mysql.MySQLError{
			Number: 1062,
		}) {
			app.errorResponse(w, http.StatusBadRequest, "short url already exists")
			return
		}
		fmt.Fprintf(os.Stderr, "internal server error: %v\n", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	a.writeJSON(w, http.StatusCreated, map[string]interface{}{"id": id}, nil)
}

func (a *App) RedirectToShortenedURL(w http.ResponseWriter, r *http.Request) {
	path := r.URL.Path[1:]

	url, err := a.u.getByShortenedURL(path)
	if err != nil {
		if errors.Is(err, sql.ErrNoRows) {
			app.errorResponse(w, http.StatusNotFound, "short url not found")
			return
		}
		app.errorResponse(w, http.StatusInternalServerError, "internal server error")
		fmt.Fprintf(os.Stderr, "internal server error: %v\n", err)
		return
	}

	if url.Expires != nil && url.Expires.Before(time.Now()) {
		app.errorResponse(w, http.StatusGone, "short url expired")
		return
	}

	http.Redirect(w, r, url.Original, http.StatusMovedPermanently)
}
