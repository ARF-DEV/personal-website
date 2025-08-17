package cloudflare_r2

import (
	"context"
	"fmt"

	"github.com/ARF-DEV/personal-website/backend/configs"
	"github.com/ARF-DEV/personal-website/backend/internal/objectstorage"
	"github.com/aws/aws-sdk-go-v2/aws"
	awsconfig "github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/rs/zerolog/log"
)

type R2 struct {
	client *s3.Client
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
	return &r, nil
}
