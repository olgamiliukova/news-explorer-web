import template from './card.html';
import bookmark from './__bookmark/card__bookmark';
import deleter from './__delete/card__delete';
import keyword from './__keyword/card__keyword';
import tooltip from './__tooltip/card__tooltip';

export default {
  baseClass: 'card',
  template,
  options: {
    required: [
      'article',
    ],
    defaults: {
      elements: () => '',
    },
  },
  elements: {
    bookmark,
    tooltip,
    deleter,
    keyword,
  },
};
