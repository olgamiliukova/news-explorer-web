import template from './header__menu-link.html';

export default {
  baseClass: 'header__menu-link',
  template,
  options: {
    required: [
      'href',
      'text',
    ],
    defaults: {
      active: false,
      innerText: '',
    },
  },
};
