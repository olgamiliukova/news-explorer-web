module.exports = {
  // Your website's name, used for favicon meta tags
  site_name: process.env.SITE_NAME || '',

  // Your website's description, used for favicon meta tags
  site_description: process.env.SITE_DESCRIPTION || '',

  // Your website's URL, used for sitemap
  site_url: process.env.SITE_URL || '/dist/',

  // The viewport meta tag added to your HTML page's <head> tag
  site_meta: {
    author: process.env.AUTHOR || 'Olga Miliukova',
    description: process.env.DESCRIPTION || 'News Explorer',
    viewport: process.env.VIEWPORT || 'width=device-width,initial-scale=1',
  },

  // Local development URL
  dev_host: process.env.DEV_HOST || 'localhost',

  // Local development port
  dev_port: process.env.DEV_PORT || 8000,

  // Advanced configuration, edit with caution!
  env: process.env.NODE_ENV,
  root: process.cwd(),
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  },
};
