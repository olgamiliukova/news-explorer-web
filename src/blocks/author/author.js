import template from './author.html';

export default {
  baseClass: 'author',
  template,
  options: {
    required: [
      'avatar',
      'author',
      'title',
      'content',
    ],
    defaults: {},
  },
};
