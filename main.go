package main

import (
	"database/sql"
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"regexp"

	_ "github.com/go-sql-driver/mysql"
)

var pathrgx = regexp.MustCompile(`^[a-zA-Z0-9_-]+$`)

type App struct {
	db *sql.DB
	u  *urlStore
}

var app App

func main() {
	var dsn string
	var port int
	flag.IntVar(&port, "port", 4000, "API server port")
	flag.StringVar(&dsn, "db-dsn", os.Getenv("MYSQL_URL_DB_DSN"), "MySQL DSN")
	flag.Parse()

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	app = App{db, &urlStore{db}}

	setupRoutes()

	log.Println("server starting...")
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
