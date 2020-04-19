import template from './results.html';
import header from './__title/results__title';
import loading from './__loading/results__loading';
import noResults from './__no-results/results__no-results';
import button from './__button/results__button';

export default {
  baseClass: 'results',
  template,
  options: {
    required: [
      'title',
    ],
    defaults: {
      header: () => '',
      content: () => '',
      element: () => '',
    },
  },
  elements: {
    header,
    loading,
    noResults,
    button,
  },
};
