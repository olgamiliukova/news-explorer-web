import template from './card__bookmark.html';

export default {
  baseClass: 'card__bookmark',
  template,
  options: {
    required: [
      'article',
    ],
    defaults: {
      toogleClass: 'card__bookmark_marked',
    },
  },
};
