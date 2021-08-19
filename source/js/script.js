const menuOpenButton = document.querySelector('.main-nav__open');
const menuCloseButton = document.querySelector('.main-nav__close');
const mainNavMenu = document.querySelector('.main-nav');

menuOpenButton.addEventListener('click', () => {
  mainNavMenu.classList.remove('main-nav__closed');
  mainNavMenu.classList.add('main-nav__opened');
});

menuCloseButton.addEventListener('click', () => {
  mainNavMenu.classList.remove('main-nav__opened');
  mainNavMenu.classList.add('main-nav__closed');
});
