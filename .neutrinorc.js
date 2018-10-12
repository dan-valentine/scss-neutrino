module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'neutrino-scss'
        },
        style: {
          loaders: [{
            loader: 'sass-loader',
            useId: 'sass',
          }],
          test: /\.scss$/,
        },
      }
    ]
  ]
}

