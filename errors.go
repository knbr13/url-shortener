package main

import (
	"log"
	"net/http"
)

func (app *App) errorResponse(w http.ResponseWriter, status int, message interface{}) {
	env := map[string]interface{}{"error": message}

	err := app.writeJSON(w, status, env, nil)
	if err != nil {
		log.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
	}
}
