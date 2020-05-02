import BlockComponent from './BlockComponent';
import { delegate } from '../utils';

export default class PopupComponent extends BlockComponent {
  getRequired() {
    return [
      ...super.getRequired(),
      'type',
    ];
  }

  getDefaults() {
    return {
      ...super.getDefaults(),
      closeBtnClass: 'popup__close-button',
    };
  }

  getDefaultHandlers() {
    return [
      ...super.getDefaultHandlers(),
      (context, component) => delegate(
        context,
        component.getProps().closeBtnClass,
        'click',
        () => component.clear(),
        { once: true },
      ),
    ];
  }

  getSubtextElement() {
    if (!('subtextElement' in this)) {
      this.subtextElement = this.createElement('subtext');
    }

    return this.subtextElement;
  }

  getLinkElement() {
    if (!('linkElement' in this)) {
      this.linkElement = this.createElement('link');
    }

    return this.linkElement;
  }

  toHtml(props = {}) {
    const { type, popups } = this.getProps();
    const {
      title,
      text = '',
      link = '',
    } = popups[type];

    return super.toHtml({
      ...props,
      title,
      element: () => this.getSubtextElement().toHtml({
        text,
        link: () => this.getLinkElement().toHtml({
          text: link,
          href: '#',
        }),
      }),
    });
  }
}
