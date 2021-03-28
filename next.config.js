module.exports = {
  i18n: {
    locales: ['en-US', 'pl'],
    defaultLocale: 'en-US',
    localeDetection: true,
  },
  webpack(config, options) {
    console.log(options.defaultLoaders.babel)
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
