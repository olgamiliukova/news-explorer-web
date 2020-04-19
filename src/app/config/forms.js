export default {
  search: {
    title: 'FORM_TITLE_SEARCH',
    buttonText: 'FORM_BUTTON_SEARCH',
    fields: {
      search: {
        fieldfieldLabel: 'FORM_FIELD_SEARCH_LABEL',
        fieldType: 'text',
        placeholder: 'FORM_FIELD_SEARCH_PLACEHOLDER',
        required: true,
        minlength: 2,
        maxlength: 30,
        message: 'FORM_FIELD_MESSAGE',
      },
    },
  },
  signin: {
    title: 'FORM_TITLE_SIGNIN',
    buttonText: 'FORM_BUTTON_SIGNIN',
    linkToText: 'FORM_BUTTON_SIGNUP',
    fields: {
      email: {
        fieldLabel: 'FORM_FIELD_EMAIL_LABEL',
        fieldType: 'email',
        placeholder: 'FORM_FIELD_EMAIL_PLACEHOLDER',
        pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$',
        required: true,
        message: 'FORM_FIELD_MESSAGE',
      },
      password: {
        fieldLabel: 'FORM_FIELD_PASSWORD_LABEL',
        fieldType: 'password',
        placeholder: 'FORM_FIELD_PASSWORD_PLACEHOLDER',
        required: true,
        minlength: 2,
        maxlength: 30,
        message: 'FORM_FIELD_MESSAGE',
      },
    },
  },
  signup: {
    title: 'FORM_TITLE_SIGNUP',
    buttonText: 'FORM_BUTTON_SIGNUP',
    linkToText: 'FORM_BUTTON_SIGNIN',
    fields: {
      email: {
        fieldLabel: 'FORM_FIELD_EMAIL_LABEL',
        fieldType: 'email',
        placeholder: 'FORM_FIELD_EMAIL_PLACEHOLDER',
        pattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,63}$',
        required: true,
        message: 'FORM_FIELD_MESSAGE',
      },
      password: {
        fieldLabel: 'FORM_FIELD_PASSWORD_LABEL',
        fieldType: 'password',
        placeholder: 'FORM_FIELD_PASSWORD_PLACEHOLDER',
        required: true,
        minlength: 8,
        maxlength: 30,
        message: 'FORM_FIELD_MESSAGE',
      },
      name: {
        fieldLabel: 'FORM_FIELD_NAME_LABEL',
        fieldType: 'text',
        placeholder: 'FORM_FIELD_NAME_PLACEHOLDER',
        required: true,
        minlength: 2,
        maxlength: 30,
        message: 'FORM_FIELD_MESSAGE',
      },
    },
  },
};
