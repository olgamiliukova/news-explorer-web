module.exports = (context) => {
  const toggler = context.querySelector('.header__menu-toggler');
  if (!toggler) {
    return;
  }

  toggler.addEventListener(
    'click',
    function click(e) {
      e.preventDefault();

      const header = context.querySelector('.header');

      header.classList.toggle('header_expanded');

      const icon = this.children.item(0);
      icon.classList.toggle('header__menu-icon_toggler-dark');
      icon.classList.toggle('header__menu-icon_collapse-dark');
    },
  );
};
