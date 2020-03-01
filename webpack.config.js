const path = require('path');

const config = require('./config/webcore.config');
const loaders = require('./config/webpack.loaders');
const pages = require('./config/webpack.pages');
const plugins = require('./config/webpack.plugins');

module.exports = () => [
  {
    mode: ['production', 'development'].includes(config.env)
      ? config.env
      : 'development',
    devtool: config.env === 'production'
      ? 'hidden-source-map'
      : 'cheap-eval-source-map',
    devServer: {
      contentBase: path.join(config.root, config.paths.src),
      watchContentBase: true,
      hot: true,
      open: true,
      host: config.dev_host,
      port: config.dev_port,
    },
    entry: pages.entry,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'scripts/[name].[hash].js',
      publicPath: config.site_url,
    },
    optimization: {
      minimize: config.env === 'production',
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
      ...plugins,
      ...pages.plugins,
    ],
  },
];
