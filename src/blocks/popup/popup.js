import template from './popup.html';
import link from './__link/popup__link';
import subtext from './__subtext/popup__subtext';

export default {
  baseClass: 'popup',
  template,
  options: {
    required: [
      'title',
    ],
    defaults: {
      content: () => '',
      element: () => '',
    },
  },
  elements: {
    link,
    subtext,
  },
};
