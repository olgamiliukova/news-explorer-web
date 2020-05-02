require('core-js');

const path = require('path');

const config = require('./config/webcore.config');
const plugins = require('./config/webpack.plugins');
const loaders = require('./config/webpack.loaders');
const pages = require('./config/webpack.pages');

module.exports = () => [
  {
    mode: ['production', 'development'].includes(config.env)
      ? config.env
      : 'development',
    devtool: config.env === 'production'
      ? 'hidden-source-map'
      : 'cheap-eval-source-map',
    devServer: {
      contentBase: path.resolve(config.root, config.paths.dist),
      contentBasePublicPath: config.publicPath,
      watchContentBase: true,
      progress: true,
      hot: true,
      open: true,
      host: config.devHost,
      port: config.devPort,
    },
    performance: {
      hints: false,
    },
    entry: pages.entry,
    output: {
      path: path.resolve(config.root, config.paths.dist),
      filename: 'scripts/[name].[hash].js',
      publicPath: config.publicPath,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            enforce: true,
          },
        },
      },
    },
    module: {
      rules: loaders,
    },
    plugins: [
      ...pages.plugins,
      ...plugins,
    ],
  },
];
