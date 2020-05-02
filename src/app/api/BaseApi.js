import { resolver, observer } from '../utils';

export default class BaseApi {
  constructor(options = {}) {
    this._options = {
      endpoint: 'http://localhost:3000',
      token: '',
      ...options,
    };
  }

  resolveOptions(options = {}) {
    const resolved = resolver({
      ...this._options,
      ...options,
    });

    return {
      ...resolved,
      headers: {
        ...(resolved.headers || {}),
        Authorization: `Bearer ${this.getToken()}`,
      },
    };
  }

  getToken() {
    return resolver({ token: this._options.token }).token;
  }

  request(path, options = {}) {
    const resolvedOptions = this.resolveOptions(options);

    return fetch(
      `${resolvedOptions.endpoint}/${path}`,
      resolvedOptions,
    )
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }

          const error = new Error(`${response.statusText}`);
          error.code = response.status;
          error.json = () => response.json();

          throw error;
        },
      )
      .catch(
        (err) => {
          observer.notify('error', err);

          throw err;
        },
      );
  }
}
