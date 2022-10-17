module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: "strapi-provider-upload-aws-s3-advanced",
        providerOptions: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            bucket: env("AWS_BUCKET_NAME"),
          },
          baseUrl: env("CDN_BASE_URL"),
          prefix: env("BUCKET_PREFIX"),
        },
      },
    },
    'strapi-plugin-sso': {
        enabled: true,
        config: {
          GOOGLE_OAUTH_CLIENT_ID: env("GOOGLE_OAUTH_CLIENT_ID"),
          GOOGLE_OAUTH_CLIENT_SECRET: env("GOOGLE_OAUTH_CLIENT_SECRET"),
          GOOGLE_OAUTH_REDIRECT_URI: env("GOOGLE_OAUTH_REDIRECT_URI"), // URI after successful login
        }
      }
    // ...
  });