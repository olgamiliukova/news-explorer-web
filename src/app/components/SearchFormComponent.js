import BlockComponent from './BlockComponent';

export default class SearchFormComponent extends BlockComponent {
  getDefaultHandlers() {
    return [
      ...super.getDefaultHandlers(),
      (context, component) => {
        const formElement = context.querySelector('form');
        const { fieldName } = this.getProps();
        const fieldElement = formElement.elements[fieldName];

        component.setProps({
          formElement,
          fieldElement,
        });
      },
    ];
  }

  getQuery() {
    const { fieldElement: { value } } = this.getProps();

    return value;
  }

  search() {
    const { formElement } = this.getProps();

    return formElement.requestSubmit();
  }
}
