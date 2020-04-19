
import template from './header.html';
import button from './__menu-button/header__menu-button';
import link from './__menu-link/header__menu-link';

export default {
  baseClass: 'header',
  template,
  options: {
    required: [
      'navigation',
    ],
    defaults: {
      theme: 'light',
    },
  },
  elements: {
    button,
    link,
  },
};
