const popup = require('../blocks/popup/popup');
// initialize block
if (document !== undefined) {
  popup(document);
}

const signupLnk = document.querySelector('.popup__link-signup');
if (signupLnk) {
  signupLnk.addEventListener(
    'click',
    function click(e) {
      e.preventDefault();

      this.closest('.popup').classList.remove('popup_is-opened');
      document.querySelector('.popup__signup').classList.add('popup_is-opened');
    },
  );
}

const signinLnk = document.querySelector('.popup__link-signin');
if (signinLnk) {
  signinLnk.addEventListener(
    'click',
    function click(e) {
      e.preventDefault();

      this.closest('.popup').classList.remove('popup_is-opened');
      document.querySelector('.popup__signin').classList.add('popup_is-opened');
    },
  );
}

const signupForm = document.querySelector('.popup__signup .popup__form');
if (signupForm) {
  signupForm.addEventListener(
    'submit',
    function submit(e) {
      e.preventDefault();

      this.closest('.popup').classList.remove('popup_is-opened');
      this.reset();
      document.querySelector('.popup__signup-after').classList.add('popup_is-opened');
    },
  );
}
