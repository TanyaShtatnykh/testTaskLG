const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger-btn');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger-btn--open');
  menu.classList.toggle('header__menu--open');
});
