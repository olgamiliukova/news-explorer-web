import 'normalize.css/normalize.css';

import { MainApi, NewsApi } from './app/api';
import App from './app/App';
import { observer } from './app/utils';

export default (factories = {}) => {
  const app = new App({
    mainApi(options = {}) {
      const { config } = this;

      return new MainApi({
        ...config.backends.main,
        ...options,
      });
    },
    newsApi(options = {}) {
      const { config } = this;

      return new NewsApi({
        ...config.backends.news,
        ...options,
      });
    },
    userData() {
      const mainApi = this.get('mainApi');

      if (!mainApi.getToken()) {
        return Promise.resolve({});
      }

      if (!('userData' in this)) {
        this.userData = mainApi.getUserData();
      }

      return this.userData;
    },
    ...factories,
  });

  observer.subscribe(
    'refresh',
    () => delete app.userData,
  );

  return app;
};
