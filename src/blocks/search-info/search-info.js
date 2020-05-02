import template from './search-info.html';
import subtitle from './__subtitle/search-info__subtitle';

export default {
  baseClass: 'search-info',
  template,
  options: {
    required: [
      'heading',
    ],
    defaults: {
      title: '',
      subtitle: '',
    },
  },
  elements: {
    subtitle,
  },
};
