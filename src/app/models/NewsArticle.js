import BaseArticle from './BaseArticle';

export default class NewsArticle extends BaseArticle {
  getMapping() {
    return this._mapping.NewsArticle;
  }

  get source() {
    return this.resolve('source', {}).name || '';
  }
}
