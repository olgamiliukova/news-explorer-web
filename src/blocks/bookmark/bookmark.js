module.exports = (context) => {
  const bookmark = context.querySelector('.bookmark');
  if (!bookmark) {
    return;
  }

  bookmark.addEventListener(
    'click',
    function click(e) {
      e.preventDefault();

      this.classList.toggle('bookmark_marked');
    },
  );
};
