import BlockComponent from './BlockComponent';
import { translate } from '../utils';

export default class SearchInfoComponent extends BlockComponent {
  getSubtitleElement() {
    if (!('subtitleElement' in this)) {
      this.subtitleElement = this.createElement('subtitle');
    }

    return this.subtitleElement;
  }

  keywordsToHtml({ keywords = [], countToShow = 2 }) {
    return [
      keywords.slice(0, countToShow).map(
        (keyword) => this.getSubtitleElement().toHtml({
          text: keyword.charAt(0).toUpperCase() + keyword.substring(1),
        }),
      ).join(', '),
      keywords.length - countToShow > 0
        ? this.getSubtitleElement().toHtml({
          text: translate('BLOCK_SEARCH_INFO_MORE_KEYWORDS', {
            count: keywords.length - countToShow,
          }),
        })
        : '',
    ].join(' ');
  }
}
