/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const config = require('./webcore.config');

const sourceMap = config.env !== 'production';

const pages = {
  test: /(pages)\/(.*)\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        interpolate: true,
      },
    },
  ],
};

const blocks = {
  test: /blocks\/(.*)\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: {
        interpolate: false,
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
  exclude: /assets/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: 'images/[name].[hash].[ext]',
        limit: false,
        fallback: require.resolve('file-loader'),
      },
    },
    ...(config.env === 'production' ? [imageLoader] : []),
  ],
};

// Asset loaders
const fonts = {
  test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
  exclude: /images/,
  use: [
    {
      loader: 'url-loader',
      options: {
        name: 'assets/[name].[hash].[ext]',
        limit: false,
        fallback: require.resolve('file-loader'),
      },
    },
  ],
};

module.exports = [
  pages,
  blocks,
  js,
  css,
  images,
  fonts,
];
