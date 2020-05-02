/* eslint-disable import/no-extraneous-dependencies */
require('dotenv-defaults').config({
  path: './.env',
  encoding: 'utf8',
  defaults: './.env.dist',
});

module.exports = {
  // Your website's name, used for favicon meta tags
  pageTitle: process.env.PAGE_TITLE || '',

  // Your website's description, used for favicon meta tags
  pageDescription: process.env.PAGE_DESCRIPTION || '',

  // The viewport meta tag added to your HTML page's <head> tag
  pageMeta: {
    author: process.env.AUTHOR || 'Olga Miliukova',
    description: process.env.DESCRIPTION || 'News Explorer',
    viewport: process.env.VIEWPORT || 'width=device-width,initial-scale=1',
  },

  // Your website's URL, used for sitemap
  publicPath: process.env.PUBLIC_PATH || '/',

  // Local development URL
  devHost: process.env.DEV_HOST || 'localhost',

  // Local development port
  devPort: process.env.DEV_PORT || 8000,

  mainApi: {
    endpoint: process.env.BACKEND_MAIN_ENDPOINT || 'http://localhost:3000',
  },

  newsApi: {
    endpoint: process.env.BACKEND_NEWS_ENDPOINT || 'http://newsapi.org/v2',
  },

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: process.cwd(),
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
};
