module.exports = (context) => {
  const deleteEl = context.querySelector('.delete');
  if (!deleteEl) {
    return;
  }

  deleteEl.addEventListener(
    'click',
    (e) => {
      e.preventDefault();

      context.remove();
    },
  );
};
