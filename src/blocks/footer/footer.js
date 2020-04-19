import template from './footer.html';
import footerLink from './__link/footer__link';
import socialLink from './__link-social/footer__link-social';

export default {
  baseClass: 'footer',
  template,
  options: {
    required: [
      'footerLinks',
      'socialLinks',
    ],
    defaults: {
      copyright: '',
    },
  },
  elements: {
    footerLink,
    socialLink,
  },
};
