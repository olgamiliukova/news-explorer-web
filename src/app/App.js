import * as components from './components';
import * as config from './config';
import factory from './utils/factory';

export default class App {
  constructor(factories = {}) {
    this._factories = factories;
    this._instances = {};
    this._components = [];
    this.config = config;
  }

  create(name, ...args) {
    return this._factories[name].apply(this, args);
  }

  has(name) {
    return name in this._factories;
  }

  get(name) {
    if (!(name in this._instances)) {
      this._instances[name] = this.create(name);
    }

    return this._instances[name];
  }

  use(component, context = null) {
    this._components.push({
      component,
      context,
    });

    return this;
  }

  async run() {
    const promises = this._components.map(
      async ({ component, context }) => ({
        component: typeof component === 'function'
          ? await component(components, this)
          : component,
        context,
      }),
    );

    const instances = await Promise.all(promises);
    this._instances = {
      ...this._instances,
      ...instances.reduce(
        (acc, { component, context }) => ({
          ...acc,
          [component.name]: {
            component,
            context,
          },
        }),
        {},
      ),
    };

    this._factories = {
      ...this._factories,
      ...instances.reduce(
        (acc, { component, context }) => ({
          ...acc,
          [component.name]: (...args) => ({
            component: factory(component)(...args),
            context,
          }),
        }),
        {},
      ),
    };

    await Promise.all(
      instances.map(
        ({ component, context = null }) => (
          component.hasHandlers() && component.handle(context)
        ),
      ),
    );
  }
}
