package main

import (
	"fmt"
	"net/http"

	"github.com/ARF-DEV/personal-website/backend/configs"
	"github.com/ARF-DEV/personal-website/backend/internal/handler/object"
	"github.com/ARF-DEV/personal-website/backend/internal/objectstorage/cloudflare_r2"
	"github.com/ARF-DEV/personal-website/backend/internal/routes"
	"github.com/rs/zerolog/log"
)

func main() {
	cfg, err := configs.LoadConfig()
	if err != nil {
		log.Fatal().Err(err).Msg("error on config init")
	}

	storage, err := cloudflare_r2.New(cfg)
	if err != nil {
		log.Fatal().Err(err).Msg("error on object storage init")
	}

	objectHandler := object.NewObjectHandler(storage)
	r := routes.New(objectHandler)

	fmt.Println("run on localhost:9999")
	err = http.ListenAndServe("localhost:9999", r)
	if err != nil {
		fmt.Println(err)
	}

}
