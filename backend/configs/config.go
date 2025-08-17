package configs

import (
	"github.com/spf13/viper"
)

var cfg Config

func LoadConfig() (*Config, error) {
	viper.AddConfigPath(".")
	viper.SetConfigType("env")
	viper.SetConfigName(".env")
	viper.BindEnv("R2_ACCOUNT_ID")
	viper.BindEnv("R2_ACCESS_KEY_SECRET")
	viper.BindEnv("R2_ACCESS_KEY_ID")
	viper.BindEnv("R2_BUCKET_NAME")
	if err := viper.ReadInConfig(); err != nil {
		return nil, err
	}
	if err := viper.Unmarshal(&cfg); err != nil {
		return nil, err
	}
	return &cfg, nil
}
