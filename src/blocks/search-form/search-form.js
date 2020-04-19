import template from './search-form.html';

export default {
  baseClass: 'search-form',
  template,
  options: {
    required: [
      'placeholder',
      'buttonText',
    ],
    defaults: {
      fieldName: 'search',
    },
  },
};
