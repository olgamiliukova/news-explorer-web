import './saved-news.css';

import App from '../app';
import {
  header,
  searchInfo,
  cardList,
  savedCard,
  savedResults,
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
      theme: 'dark',
      page: 'saved',
    };
  },
});

app.use(
  header,
  document.querySelector('.content'),
);
app.use(
  searchInfo,
  document.querySelector('.main'),
);
app.use(
  savedResults,
  document.querySelector('.main'),
);
app.use(
  cardList,
  document.querySelector('.main'),
);
app.use(savedCard);
app.use(popup);
app.use(popupForm);
app.use(popupFormSignIn);
app.use(popupFormSignUp);

app.run();

window.app = app;
