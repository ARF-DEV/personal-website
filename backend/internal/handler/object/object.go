package object

import (
	"net/http"

	"github.com/ARF-DEV/personal-website/backend/internal/objectstorage"
	"github.com/go-chi/chi/v5"
)

type ObjectHandler struct {
	storage objectstorage.ObjectStorageFacade
}

func NewObjectHandler(storage objectstorage.ObjectStorageFacade) *ObjectHandler {
	h := ObjectHandler{
		storage: storage,
	}
	return &h
}

func (h *ObjectHandler) Routes() http.Handler {
	r := chi.NewMux()
	r.Post("/", h.push)
	r.Get("/", h.get)
	return r
}

func (h *ObjectHandler) push(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(200)
	w.Write([]byte("push object"))
	// TODO
}

func (h *ObjectHandler) get(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(200)
	w.Write([]byte("get object"))
	// TODO
}
