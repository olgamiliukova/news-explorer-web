import BlockComponent from './BlockComponent';

export default class FooterComponent extends BlockComponent {
  toHtml(props = {}) {
    const { navigations } = this.getProps();
    const { footer, social } = navigations;
    const renderLinks = (navigation, element) => (
      Object.keys(navigation).map(
        (key) => this.createElement(
          element,
          navigation[key],
        ).toHtml(),
      ).join('')
    );

    return super.toHtml({
      ...props,
      footerLinks: () => renderLinks(footer, 'footerLink'),
      socialLinks: () => renderLinks(social, 'socialLink'),
    });
  }
}
