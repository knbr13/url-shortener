FROM golang:1.22-alpine AS build

WORKDIR /app

COPY . .

RUN go mod download

RUN go build -o server .

RUN apk --no-cache add ca-certificates

RUN go install -tags 'mysql' github.com/golang-migrate/migrate/v4/cmd/migrate@latest

CMD ["sh", "-c", "migrate -path=./migrations -database=mysql://$MYSQL_URL_DB_DSN up && ./server"]
