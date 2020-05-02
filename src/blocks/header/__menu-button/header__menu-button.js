import template from './header__menu-button.html';

export default {
  baseClass: 'header__menu-button',
  template,
  options: {
    required: [
      'action',
      'text',
    ],
    defaults: {
      innerText: '',
    },
  },
};
