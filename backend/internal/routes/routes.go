package routes

import (
	"net/http"

	"github.com/ARF-DEV/personal-website/backend/internal/handler/object"
	"github.com/go-chi/chi/v5"
)

func New(objectHandler *object.ObjectHandler) http.Handler {

	r := chi.NewMux()
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(200)
		w.Write([]byte("hello world"))
	})
	r.Mount("/objects", objectHandler.Routes())

	return r
}
