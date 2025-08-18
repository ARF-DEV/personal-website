package httputils

import (
	"encoding/json"
	"net/http"
)

type metaOptionFunc func(m meta)
type meta map[string]any
type Response struct {
	Message string `json:"message"`
	Code    string `json:"code"`
	Data    any    `json:"data"`
	Meta    meta   `json:"meta"`
	Error   string `json:"error,omitempty"`
}
type APIError struct {
	Message string
	Code    string
	Status  int
}

func (e APIError) Error() string {
	return e.Message
}

func SendResponse(w http.ResponseWriter, data any, err error, opts ...metaOptionFunc) {

	res := Response{
		Meta: make(meta),
	}
	if err != nil {
		res.Message = "failed"
		apiError, ok := err.(APIError)
		if ok {
			res.Code = apiError.Code
			res.Error = apiError.Error()
			w.WriteHeader(apiError.Status)
		} else {
			res.Code = ErrorInternalServer.Code
			res.Error = ErrorInternalServer.Error()
			w.WriteHeader(ErrorInternalServer.Status)
		}
	} else {
		res.Message = "success"
		res.Code = "SUCCESS"
		w.WriteHeader(200)
	}

	res.Data = data
	for _, opt := range opts {
		if opt == nil {
			continue
		}
		opt(res.Meta)
	}
	body, _ := json.Marshal(res)
	w.Write(body)
}

var (
	// success = APIError{
	// 	Status: http.StatusOK,
	// 	Code:   "OK",
	// }
	ErrorNotFound = APIError{
		Message: "resource not found",
		Status:  http.StatusNotFound,
		Code:    "NOT_FOUND",
	}
	ErrorInternalServer = APIError{
		Message: "internal server problem",
		Status:  http.StatusInternalServerError,
		Code:    "INTERNAL_SERVER",
	}
)
