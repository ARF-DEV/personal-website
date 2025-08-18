package objectstorage

import (
	"context"
	"io"
)

type ObjectStorageFacade interface {
	Upload(ctx context.Context, bucket string, key string, object io.Reader) error
}
