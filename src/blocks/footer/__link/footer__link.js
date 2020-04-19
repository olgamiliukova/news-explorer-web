import template from './footer__link.html';

export default {
  baseClass: 'footer__link',
  template,
  options: {
    required: [
      'href',
      'text',
    ],
    defaults: {
      target: '_self',
      rel: '',
    },
  },
};
