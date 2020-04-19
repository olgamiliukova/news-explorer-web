import './index.css';

import App from '../app';
import {
  header,
  searchForm,
  searchResults,
  cardList,
  newsCard,
  popup,
  popupForm,
  popupFormSignIn,
  popupFormSignUp,
} from '../app/factories';

const app = App({
  config() {
    const { config } = this;
    return {
      ...config,
      theme: 'light',
      page: 'index',
    };
  },
});

app.use(
  header,
  document.querySelector('.cover'),
);
app.use(
  searchForm,
  document.querySelector('.search'),
);
app.use(
  searchResults,
  document.querySelector('.main'),
);
app.use(
  cardList,
  document.querySelector('.main'),
);
app.use(newsCard);
app.use(popup);
app.use(popupForm);
app.use(popupFormSignIn);
app.use(popupFormSignUp);

app.run();
