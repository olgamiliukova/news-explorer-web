/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const config = require('./webcore.config');

const sourceMap = config.env !== 'production';

const html = {
  test: /\.(html)$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        interpolate: true,
      },
    },
  ],
};

const js = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ],
};

const css = {
  test: /\.css$/,
  use: [
    config.env === 'production'
      ? MiniCssExtractPlugin.loader
      : {
        loader: 'style-loader',
      },
    {
      loader: 'css-loader',
      options: {
        sourceMap,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          autoprefixer(),
        ],
        sourceMap,
      },
    },
  ],
};

const imageLoader = {
  loader: 'image-webpack-loader',
  options: {
    mozjpeg: {
      progressive: true,
      quality: 65,
    },
    optipng: {
      enabled: false,
    },
    pngquant: {
      quality: [0.65, 0.95],
      speed: 4,
    },
    gifsicle: {
      interlaced: false,
    },
    webp: {
      quality: 75,
    },
  },
};

const images = {
  test: /\.(gif|png|jpe?g)$/i,
  exclude: /fonts/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: 'images/[name].[hash].[ext]',
        limit: false, // 8192,
        fallback: require.resolve('file-loader'),
        esModule: false,
      },
    },
    ...(config.env === 'production' ? [imageLoader] : []),
  ],
};

// Font loaders
const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  exclude: /images/,
  use: [
    {
      loader: 'file-loader',
      query: {
        name: '[name].[hash].[ext]',
        outputPath: 'assets/',
        esModule: false,
      },
    },
  ],
};

module.exports = [
  html,
  js,
  css,
  images,
  fonts,
];
