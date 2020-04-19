import BaseComponent from './BaseComponent';

export default class ProxyComponent extends BaseComponent {
  constructor(
    { factory, context = null, ...props },
    handlers = [],
    elements = [],
  ) {
    super(props, handlers, elements);

    this._factory = factory;
    this._context = context;
  }

  get component() {
    if (!this._component) {
      this._component = this._factory(
        this._props,
        this._handlers,
        this._elements,
      );
    }

    return this._component;
  }

  get context() {
    if (typeof this._context === 'function') {
      this._context = this._context.call(this);
    }

    return this._context;
  }

  async render(props) {
    const context = await this.component.render({
      ...(this.context ? { context: this.context } : {}),
      ...props,
    });

    return context;
  }

  handle(context) {
    return this.component.handle(context || this.context);
  }

  async clear() {
    await this.component.clear();
  }

  toHtml(props = {}) {
    return this.component.toHtml(props);
  }

  getRequired() {
    return this.component.getRequired();
  }

  getDefaults() {
    return this.component.getDefaults();
  }

  getTemplate() {
    return this.component.getTemplate();
  }

  getProps() {
    return this.component.getProps();
  }

  getDefaultHandlers() {
    return this.component.getDefaultHandlers();
  }
}
