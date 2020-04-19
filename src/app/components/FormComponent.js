import BlockComponent from './BlockComponent';
import { delegate } from '../utils';

export default class FormComponent extends BlockComponent {
  getRequired() {
    return [
      ...super.getRequired(),
      'type',
    ];
  }

  getValues() {
    return this._values || {};
  }

  setValues(values = {}) {
    this._values = values;

    return this;
  }

  activateForm(context) {
    const formElement = context.querySelector(`.${this.baseClass}`);
    const formButton = formElement.querySelector('.form__button');
    const formFields = [
      ...formElement.querySelectorAll('.form__input'),
    ];
    const isFullFilled = formFields.reduce(
      (acc, el) => (acc && el.validity.valid),
      true,
    );

    if (!isFullFilled) {
      formButton.setAttribute('disabled', true);
    } else {
      formButton.removeAttribute('disabled');
    }
  }

  populateForm(context) {
    const elements = [
      ...context.querySelectorAll('.form__input'),
    ];
    const values = this.getValues();

    elements.forEach(
      (element) => {
        if (element.name in values) {
          // eslint-disable-next-line no-param-reassign
          element.value = values[element.name];
        }
      },
    );
  }

  getDefaultHandlers() {
    return [
      ...super.getDefaultHandlers(),
      (context) => this.populateForm(context),
      (context) => this.activateForm(context),
      (context) => delegate(
        context,
        'form__input',
        'input',
        () => this.activateForm(context),
      ),
    ];
  }

  toHtml(props = {}) {
    const { type, forms } = this.getProps();
    const {
      title,
      buttonText,
      linkToText,
      fields,
    } = forms[type];

    return super.toHtml({
      ...props,
      title,
      buttonText,
      linkToText,
      elements: () => (
        Object.keys(fields).map(
          (fieldName) => (
            this.createElement('field', {
              form: type,
              fieldName,
              ...fields[fieldName],
            }).toHtml()
          ),
        ).join('')
      ),
    });
  }
}
