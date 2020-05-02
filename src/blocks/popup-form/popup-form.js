import template from './popup-form.html';
import field from './__field/popup-form__field';

export default {
  baseClass: 'popup-form',
  template,
  options: {
    required: [
      'elements',
      'buttonText',
    ],
    defaults: {
      formError: '',
    },
  },
  elements: {
    field,
  },
};
