import template from './popup__subtext.html';

export default {
  baseClass: 'popup__subtext',
  template,
  options: {
    required: [
      'text',
    ],
    defaults: {
      link: () => '',
    },
  },
};
