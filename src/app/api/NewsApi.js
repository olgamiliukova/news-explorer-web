import BaseApi from './BaseApi';
import { resolver } from '../utils';

export default class NewsApi extends BaseApi {
  getNews(params = {}, callback = (p) => p) {
    const searchParams = new URLSearchParams(
      resolver({
        ...(this._options.params || {}),
        ...params,
      }),
    );

    return this.request(`everything?${searchParams}`)
      .then(callback);
  }
}
