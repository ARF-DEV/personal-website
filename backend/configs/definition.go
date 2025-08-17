package configs

type Config struct {
	R2_ACCOUNT_ID        string `mapstructure:"R2_ACCOUNT_ID"`
	R2_ACCESS_KEY_SECRET string `mapstructure:"R2_ACCESS_KEY_SECRET"`
	R2_ACCESS_KEY_ID     string `mapstructure:"R2_ACCESS_KEY_ID"`
	R2_BUCKET_NAME       string `mapstructure:"R2_BUCKET_NAME"`
}
