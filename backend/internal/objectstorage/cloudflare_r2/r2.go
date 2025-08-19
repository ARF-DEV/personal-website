package cloudflare_r2

import (
	"context"
	"fmt"
	"io"
	"net/http"

	"github.com/ARF-DEV/personal-website/backend/configs"
	"github.com/ARF-DEV/personal-website/backend/internal/objectstorage"
	"github.com/aws/aws-sdk-go-v2/aws"
	awsconfig "github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/rs/zerolog/log"
)

var max_object_size_default int = 1 << 22 // 4MiB

type R2 struct {
	storageConfig aws.Config
	client        *s3.Client
}

func New(cfg *configs.Config) (objectstorage.ObjectStorageFacade, error) {
	r := R2{}
	r2cfg, err := awsconfig.LoadDefaultConfig(context.Background(),
		awsconfig.WithCredentialsProvider(credentials.NewStaticCredentialsProvider(cfg.R2_ACCESS_KEY_ID, cfg.R2_ACCESS_KEY_SECRET, "")),
		awsconfig.WithRegion("auto"),
	)
	if err != nil {
		log.Log().Err(err).Msg("error on r2 config init")
		return nil, err
	}
	client := s3.NewFromConfig(r2cfg, func(o *s3.Options) {
		o.BaseEndpoint = aws.String(fmt.Sprintf("https://%s.r2.cloudflarestorage.com", cfg.R2_ACCOUNT_ID))
	})
	r.client = client
	r.storageConfig = r2cfg
	return &r, nil
}

func (r *R2) Upload(ctx context.Context, bucketName string, key string, object io.Reader) error {
	_, ok := object.(io.Seeker)
	if !ok {
		err := fmt.Errorf("object needs to implement io.Seeker interface")
		log.Log().Err(err).Msgf("error on upload")
		return err
	}
	if err := r.validateSize(object); err != nil {
		log.Log().Err(err).Msgf("error on size validation")
		return err
	}

	buf := make([]byte, 512)
	_, err := object.Read(buf)
	if err != nil {
		log.Log().Err(err).Msgf("error on object read")
		return err
	}
	contentType := http.DetectContentType(buf)
	object.(io.Seeker).Seek(0, io.SeekStart)

	_, err = r.client.PutObject(ctx, &s3.PutObjectInput{
		Bucket:             &bucketName,
		Key:                &key,
		Body:               object,
		ContentDisposition: aws.String("inline"),
		ContentType:        aws.String(contentType), // handle a correct extentions and content-type (currently all content type is image/jpeg even though its png etc)
	})
	if err != nil {
		log.Log().Err(err).Msgf("error on put object")
		return err
	}
	return nil
}

func (r *R2) validateSize(object io.Reader) error {
	if _, ok := object.(io.Seeker); !ok {
		return fmt.Errorf("reader object must implement seeker interface")
	}

	buf := make([]byte, max_object_size_default)
	n, err := object.Read(buf)
	defer object.(io.Seeker).Seek(0, io.SeekStart)

	if n == max_object_size_default && err == nil { // not EOF
		return fmt.Errorf("object size is greater than default max size")
	}

	return nil
}
