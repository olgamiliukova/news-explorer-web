const header = require('../blocks/header/header');
// initialize block
if (document !== undefined) {
  header(document);
}

const signInBtn = document.querySelector('.button__signin');
if (signInBtn) {
  signInBtn.addEventListener(
    'click',
    (e) => {
      e.preventDefault();

      document.querySelector('.popup__signin').classList.add('popup_is-opened');
    },
  );
}

const logoutBtn = document.querySelector('.button__logout');
if (logoutBtn) {
  logoutBtn.addEventListener(
    'click',
    (e) => {
      e.preventDefault();

      document.location.href = 'index.html';
    },
  );
}
