module.exports = (context) => {
  const popups = context.querySelectorAll('.popup');
  if (!popups.length) {
    return;
  }

  popups.forEach(
    (popup) => {
      const closeBtn = popup.querySelector('.popup__close');
      if (!closeBtn) {
        return;
      }

      closeBtn.addEventListener(
        'click',
        (e) => {
          e.preventDefault();

          popup.classList.remove('popup_is-opened');
        },
      );
    },
  );
};
