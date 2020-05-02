import { mapping } from '../config';
import thumbnail from '../../images/thumbnail.png';

export default class BaseArticle {
  constructor(data = {}) {
    this._data = data instanceof BaseArticle
      ? data.getRawData()
      : data;
    this._mapping = mapping;
  }

  static encode(article, filter = (key) => key) {
    return encodeURIComponent(article.toJson(filter));
  }

  static decode(encoded) {
    return new BaseArticle(JSON.parse(decodeURIComponent(encoded)));
  }

  get id() {
    return this.resolve('id');
  }

  get keyword() {
    return this.resolve('keyword');
  }

  get title() {
    return this.resolve('title');
  }

  get text() {
    return this.resolve('text');
  }

  get date() {
    return this.resolve('date', new Date());
  }

  get link() {
    return this.resolve('link');
  }

  get image() {
    return this.resolve('image', thumbnail);
  }

  get source() {
    return this.resolve('source');
  }

  resolve(field, defaultValue = '') {
    return (
      this.getMapping()[field] && this._data[this.getMapping()[field]]
    ) || this._data[field] || defaultValue;
  }

  equals(article) {
    return article.link === this.link;
  }

  getMapping() {
    return this._mapping.BaseArticle;
  }

  getData(filter = (key) => key) {
    return Object.keys(this.getMapping()).filter(filter).reduce(
      (data, field) => ({
        ...data,
        [field]: this[field],
      }),
      {},
    );
  }

  getRawData() {
    return this._data;
  }

  toJson(filter = (key) => key) {
    return JSON.stringify(this.getData(filter));
  }

  encode(filter = (key) => key) {
    return BaseArticle.encode(this, filter);
  }
}
