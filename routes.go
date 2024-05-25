package main

import (
	"net/http"
)

func setupRoutes() {
	http.HandleFunc("GET /", app.RedirectToShortenedURL)
	http.HandleFunc("POST /", app.ShortenURL)
}
