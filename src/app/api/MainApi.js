import BaseApi from './BaseApi';

export default class MainApi extends BaseApi {
  constructor(options = {}) {
    super(options);
    this.storeNs = MainApi.STORE_NS;
  }

  getToken() {
    return localStorage.getItem(`${this.storeNs}.token`);
  }

  setToken(token) {
    localStorage.setItem(`${this.storeNs}.token`, token);

    return this;
  }

  signin(email, password, callback = (p) => p) {
    return this.request('signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(
        ({ token }) => {
          this.setToken(token);
          return token;
        },
      )
      .then(callback);
  }

  signup(email, password, name, callback = (p) => p) {
    return this.request('signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then(callback);
  }

  logout() {
    this.setToken('');
  }

  getUserData(callback = (p) => p) {
    return Promise.all([
      this.getUser(),
      this.getArticles(),
    ])
      .then(
        ([user, articles]) => ({
          ...user,
          articles,
        }),
      )
      .then(callback);
  }

  getUser(callback = (p) => p) {
    return this.request('users/me').then(callback);
  }

  getArticles(callback = (p) => p) {
    return this.request('articles').then(callback);
  }

  createArticle(data, callback = (p) => p) {
    return this.request('articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(callback);
  }

  removeArticle(id, callback = (p) => p) {
    return this.request(`articles/${id}`, {
      method: 'DELETE',
    })
      .then(callback);
  }
}

MainApi.STORE_NS = 'main-api';
