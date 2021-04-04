module.exports = {
  i18n: {
    locales: ['en-US', 'pl'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },
  env: {
    BUILD_TIMESTAMP: Date.now().toString(),
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
}
