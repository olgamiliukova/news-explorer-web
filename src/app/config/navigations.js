export default {
  index: {
    index: {
      type: 'link',
      href: '/',
      text: 'NAVIGATION_DEFAULT_INDEX',
    },
    login: {
      type: 'button',
      action: 'signin',
      text: 'NAVIGATION_DEFAULT_LOGIN',
    },
  },
  logged: {
    index: {
      type: 'link',
      href: '/',
      text: 'NAVIGATION_LOGGED_INDEX',
    },
    saved: {
      type: 'link',
      href: '/saved-news.html',
      text: 'NAVIGATION_LOGGED_SAVED',
    },
    logout: {
      type: 'button',
      action: 'logout',
      text: 'NAVIGATION_LOGGED_LOGOUT',
    },
  },
  footer: {
    index: {
      type: 'link',
      href: '/',
      text: 'NAVIGATION_FOOTER_INDEX',
    },
    yandex: {
      type: 'link',
      target: '_blank',
      rel: 'noreferrer',
      href: 'https://praktikum.yandex.ru',
      text: 'NAVIGATION_FOOTER_YANDEX',
    },
  },
  social: {
    github: {
      type: 'link',
      target: '_blank',
      rel: 'noreferrer',
      href: 'https://github.com',
      text: 'NAVIGATION_SOCIAL_GITHUB',
      icon: 'github',
    },
    facebook: {
      type: 'link',
      target: '_blank',
      rel: 'noreferrer',
      href: 'https://www.facebook.com',
      text: 'NAVIGATION_SOCIAL_FACEBOOK',
      icon: 'facebook',
    },
  },
};
