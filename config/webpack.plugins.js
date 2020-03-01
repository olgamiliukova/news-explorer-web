/* eslint-disable import/no-extraneous-dependencies */
const cssnano = require('cssnano');

const WebpackDotenv = require('webpack-dotenv-plugin');
const WebpackPackage = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');
const WebpackBar = require('webpackbar');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CspHtmlWebpackPlugin = require('csp-html-webpack-plugin');

// Optimize CSS assets
const optimizeCss = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/g,
  cssProcessor: cssnano,
  cssProcessorPluginOptions: {
    preset: ['default'],
  },
  canPrint: true,
});

module.exports = [
  new WebpackDotenv({
    sample: './.env.dist',
    path: './.env',
  }),
  new WebpackPackage.DefinePlugin({
    NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  }),
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash].css',
  }),
  new WebpackMd5Hash(),
  new WebpackBar({
    color: '#ff6469',
  }),
  ...(process.env.NODE_ENV === 'production' ? [optimizeCss] : []),
  new CspHtmlWebpackPlugin({
    'base-uri': "'self'",
    'object-src': "'none'",
    'script-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
    'style-src': ["'unsafe-inline'", "'self'", "'unsafe-eval'"],
  }, {
    enabled: true,
    hashingMethod: 'sha256',
    hashEnabled: {
      'script-src': true,
      'style-src': true,
    },
    nonceEnabled: {
      'script-src': true,
      'style-src': true,
    },
  }),
];
