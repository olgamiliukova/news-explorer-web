import template from './footer__link-social.html';

export default {
  baseClass: 'footer__link-social',
  template,
  options: {
    required: [
      'href',
      'target',
      'rel',
      'icon',
      'text',
    ],
    defaults: {},
  },
};
