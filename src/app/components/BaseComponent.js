import * as utils from '../utils';

export default class BaseComponent {
  constructor(props = {}, handlers = [], elements = []) {
    this.setProps(props);
    this._setHandlers(handlers);
    this._setElements(elements);
  }

  get name() {
    return this._props.name || this.constructor.name;
  }

  async render({ context, position = BaseComponent.RENDER_APPEND, ...props }) {
    if (context) {
      const document = context.ownerDocument;
      const template = document.createElement('template');

      template.innerHTML = this.toHtml(props);

      const { content } = template;

      this._setElements(
        [...content.children],
      );

      context[position].call(context, template.content);
    }

    return context;
  }

  async handle(context) {
    if (context) {
      await Promise.all(
        [
          ...this.getDefaultHandlers(),
          ...this._handlers,
        ].map(
          (handler) => handler.call(this, context, this),
        ),
      );
    }

    return context;
  }

  async clear() {
    await Promise.all(
      this._elements.map(
        (element) => (async () => element.remove())(),
      ),
    );

    this._elements = [];
  }

  isRendered() {
    return this._elements.length > 0;
  }

  hasHandlers() {
    return this._handlers.length > 0;
  }

  toHtml(props = {}) {
    const mergedProps = {
      ...this.getProps(),
      ...props,
    };

    this._checkProps(mergedProps);

    return utils.template(this.getTemplate())(mergedProps);
  }

  getRequired() {
    return this._required || [];
  }

  getDefaults() {
    return {
      ...(this._defaults || {}),
      ...utils,
    };
  }

  getTemplate() {
    const { template = '' } = this.getProps();

    return template;
  }

  getProps() {
    return {
      ...this.getDefaults(),
      ...this._props,
    };
  }

  setProps(props = {}) {
    this._props = {
      ...(this._props || {}),
      ...props,
    };

    return this;
  }

  getDefaultHandlers() {
    return this._defaultHandlers || [];
  }

  _setHandlers(handlers = []) {
    this._handlers = handlers;

    return this;
  }

  _setElements(elements = []) {
    this._elements = elements;

    return this;
  }

  _checkProps(props = {}) {
    this.getRequired().forEach(
      (field) => {
        if (!(field in props)) {
          throw new Error(
            utils.translate('COMPONENT_ERROR_PROPERTY_IS_REQUIRED', {
              field,
              component: this.toString(),
            }),
          );
        }
      },
    );
  }

  toString() {
    return this.name;
  }
}

BaseComponent.RENDER_APPEND = 'append';
BaseComponent.RENDER_PREPEND = 'prepend';
BaseComponent.RENDER_BEFORE = 'before';
BaseComponent.RENDER_AFTER = 'after';
BaseComponent.RENDER_REPLACE = 'replaceWith';
