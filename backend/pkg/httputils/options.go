package httputils

func WithPaginationMeta(page int, size int) metaOptionFunc {
	return func(m meta) {
		m["page"] = page
		m["size"] = size
	}
}
