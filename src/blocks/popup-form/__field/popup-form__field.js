import template from './popup-form__field.html';

export default {
  baseClass: 'popup-form__field',
  template,
  options: {
    required: [
      'form',
      'fieldName',
      'fieldLabel',
      'fieldType',
      'placeholder',
    ],
    defaults: {
      pattern: '',
      required: '',
      minlength: '',
      maxlength: '',
    },
  },
};
