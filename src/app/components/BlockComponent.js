import BaseComponent from './BaseComponent';

export default class BlockComponent extends BaseComponent {
  constructor(
    { block, ...props },
    handlers = [],
    elements = [],
  ) {
    super(props, handlers, elements);
    this._block = block;
  }

  get baseClass() {
    return this._block.baseClass;
  }

  getRequired() {
    const { required = [] } = this._block.options || {};

    return [
      ...super.getRequired(),
      ...required,
    ];
  }

  getDefaults() {
    const { defaults = {} } = this._block.options || {};

    return {
      ...super.getDefaults(),
      ...defaults,
    };
  }

  getDefaultHandlers() {
    return [
      ...super.getDefaultHandlers(),
      (context) => {
        if (context && !this.isRendered()) {
          this._setElements([
            ...context.querySelectorAll(`.${this.baseClass}`),
          ]);
        }
      },
    ];
  }

  async clear(context) {
    await super.clear();

    if (context) {
      const elements = [
        ...context.querySelectorAll(`.${this.baseClass}`),
      ];
      elements.forEach(
        (element) => element.remove(),
      );
    }

    return context;
  }

  getTemplate() {
    return this._block.template;
  }

  createElement(name, props = {}, ...args) {
    const {
      elements: {
        [name]: element,
      },
    } = this._block;

    return new BlockComponent(
      {
        block: element,
        ...props,
        name,
      },
      ...args,
    );
  }
}
