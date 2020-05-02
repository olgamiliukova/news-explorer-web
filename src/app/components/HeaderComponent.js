import BlockComponent from './BlockComponent';
import { delegate } from '../utils';

export default class HeaderComponent extends BlockComponent {
  getDefaults() {
    return {
      ...super.getDefaults(),
      loggedIn: false,
      userName: '',
      theme: 'light',
      publicUrl: process.env.PUBLIC_PATH,
      page: 'index',
      togglerClass: 'header__menu-toggler',
      toggledClass: 'header_expanded',
    };
  }

  getDefaultHandlers() {
    return [
      ...super.getDefaultHandlers(),
      (context, component) => delegate(
        context,
        component.getProps().togglerClass,
        'click',
        () => {
          const header = context.querySelector(`.${component.baseClass}`);
          header.classList.toggle(
            component.getProps().toggledClass,
          );
        },
      ),
    ];
  }

  toHtml(props = {}) {
    const {
      loggedIn = false,
      userName = '',
      navigations,
      theme,
      page,
    } = this.getProps();
    const navigation = loggedIn
      ? navigations.logged
      : navigations.index;

    return super.toHtml({
      theme,
      ...props,
      navigation: () => (
        Object.keys(navigation).map(
          (key) => {
            const navItem = navigation[key];
            const element = this.createElement(
              navItem.type,
              {
                ...navItem,
                innerText: userName,
                active: (key === page),
              },
            );

            return element.toHtml();
          },
        ).join('')
      ),
    });
  }
}
