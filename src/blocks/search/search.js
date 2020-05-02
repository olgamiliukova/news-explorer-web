import template from './search.html';

export default {
  baseClass: 'search',
  template,
  options: {
    required: [
      'title',
      'subtitle',
    ],
    defaults: {
      content: '',
    },
  },
};
