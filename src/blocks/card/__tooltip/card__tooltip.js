import template from './card__tooltip.html';

export default {
  baseClass: 'card__tooltip',
  template,
  options: {
    required: [
      'article',
      'logged',
    ],
    defaults: {
      text: () => '',
    },
  },
};
