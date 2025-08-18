package object

import (
	"net/http"

	"github.com/ARF-DEV/personal-website/backend/configs"
	"github.com/ARF-DEV/personal-website/backend/internal/objectstorage"
	"github.com/ARF-DEV/personal-website/backend/pkg/httputils"
	"github.com/go-chi/chi/v5"
)

var MULTIPART_MAX_MEMORY int64 = 10 << 20

type ObjectHandler struct {
	cfg     configs.Config // todo: move to service layer
	storage objectstorage.ObjectStorageFacade
}

func NewObjectHandler(cfg configs.Config, storage objectstorage.ObjectStorageFacade) *ObjectHandler {
	h := ObjectHandler{
		cfg:     cfg,
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
	if err := r.ParseMultipartForm(MULTIPART_MAX_MEMORY); err != nil {
		httputils.SendResponse(w, nil, httputils.ErrBadRequest)
		return
	}
	f, header, err := r.FormFile("file")
	if err != nil {
		httputils.SendResponse(w, nil, httputils.ErrBadRequest)
		return
	}
	if err := h.storage.Upload(r.Context(), h.cfg.R2_BUCKET_NAME, header.Filename, f); err != nil {
		httputils.SendResponse(w, nil, err)
		return
	}

	httputils.SendResponse(w, nil, nil, httputils.WithPaginationMeta(1, 10))
}

func (h *ObjectHandler) get(w http.ResponseWriter, r *http.Request) {
	httputils.SendResponse(w, nil, nil, httputils.WithPaginationMeta(1, 10))
}
