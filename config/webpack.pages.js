/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = require('./webcore.config');

module.exports = {
  entry: {
    main: path.resolve(config.root, './src/index.js'),
    index: path.resolve(config.root, './src/pages/index.js'),
    saved: path.resolve(config.root, './src/pages/saved-news.js'),
  },
  plugins: [
    {
      title: 'News Explorer',
      filename: 'index.html',
      template: path.resolve(config.root, './src/pages/index.html'),
      templateParameters: {},
      chunks: ['index', 'main', 'vendor'],
    },
    {
      title: 'News Explorer',
      filename: 'logged-in.html',
      template: path.resolve(config.root, './src/pages/logged-in.html'),
      templateParameters: {},
      chunks: ['index', 'main', 'vendor'],
    },
    {
      title: 'Saved News - News Explorer',
      filename: 'saved-news.html',
      template: path.resolve(config.root, './src/pages/saved-news.html'),
      templateParameters: {},
      chunks: ['saved', 'main', 'vendor'],
    },
  ].map(
    (options) => new HtmlWebpackPlugin({
      favicon: path.resolve(config.root, './src/assets/favicon.ico'),
      minify: config.env === 'production'
        ? {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
        }
        : false,
      inject: 'body',
      cspPlugin: {
        enabled: true,
        policy: {
          'base-uri': "'self'",
          'object-src': "'none'",
          'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
          'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
        },
        hashEnabled: {
          'script-src': true,
          'style-src': true,
        },
        nonceEnabled: {
          'script-src': true,
          'style-src': true,
        },
      },
      ...options,
      title: [options.title, config.pageTitle].join(' - '),
      meta: {
        ...config.pageMeta,
        ...(options.meta || {}),
      },
      templateParameters: {
        config,
        ...(options.templateParameters || {}),
      },
    }),
  ),
};
