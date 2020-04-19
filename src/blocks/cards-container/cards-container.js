import template from './cards-container.html';

export default {
  baseClass: 'cards-container',
  template,
  options: {
    defaults: {
      cards: () => '',
    },
  },
};
