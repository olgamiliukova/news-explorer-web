import template from './results__no-results.html';
import image from './results__no-results.png';

export default {
  baseClass: 'results__no-results',
  template,
  options: {
    required: [
      'title',
      'subtitle',
    ],
    defaults: {
      image,
    },
  },
};
