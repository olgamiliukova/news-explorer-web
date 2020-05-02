import template from './popup__link.html';

export default {
  baseClass: 'popup__link',
  template,
  options: {
    required: [
      'href',
      'text',
    ],
    defaults: {
      className: 'popup__link-to',
    },
  },
};
