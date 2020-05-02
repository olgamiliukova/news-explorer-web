import BlockComponent from './BlockComponent';

export default class CardComponent extends BlockComponent {
  constructor(...args) {
    super(...args);
    this._elementComponents = [];
  }

  addElement(element) {
    this._elementComponents.push(element);

    return this;
  }

  clearElements() {
    this._elementComponents.forEach(
      (element) => element.clear(),
    );
    this._elementComponents = [];

    return this;
  }

  toHtml(props = {}) {
    return super.toHtml({
      ...props,
      elements: () => (
        this._elementComponents.map(
          (element) => element.toHtml({
            ...props,
            ...this.getProps(),
          }),
        ).join('')
      ),
    });
  }

  getBookmarkElement() {
    if (!('bookmarkElement' in this)) {
      this.bookmarkElement = this.createElement('bookmark');
    }

    return this.bookmarkElement;
  }

  getTooltipElement() {
    if (!('tooltipElement' in this)) {
      this.tooltipElement = this.createElement('tooltip', {
        text: (article, logged = false) => {
          if (!logged) {
            return 'BLOCK_TOOLTIP_UNAUTHORIZED';
          }

          return article.id ? 'BLOCK_TOOLTIP_DROP' : 'BLOCK_TOOLTIP_SAVE';
        },
      });
    }

    return this.tooltipElement;
  }

  getDeleterElement() {
    if (!('deleterElement' in this)) {
      this.deleterElement = this.createElement('deleter');
    }

    return this.deleterElement;
  }

  getKeywordElement() {
    if (!('keywordElement' in this)) {
      this.keywordElement = this.createElement('keyword');
    }

    return this.keywordElement;
  }
}
