FROM golang:1.22-alpine AS build

WORKDIR /app

COPY . .

RUN go mod download

RUN go build -o server .

RUN apk --no-cache add ca-certificates

RUN go install -tags 'mysql' github.com/golang-migrate/migrate/v4/cmd/migrate@latest

COPY entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
