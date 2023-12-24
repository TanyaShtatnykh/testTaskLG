const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.header__burger-btn');

burger.addEventListener('click', () => {
  burger.classList.toggle('header__burger-btn--open');
  menu.classList.toggle('header__menu--open');
});

const inputSearch = document.querySelector('.main__search');
const regSymbol = /[!@#$%^&*()]/g;

inputSearch.oninput = function () {
  this.value = this.value.replace(regSymbol, '');
};

window.addEventListener("load", function() {
  let delay = 3000;
  const flags = [...document.querySelectorAll('.main__flag')];
  
  function cicle() {
    for (let i = 0; i < flags.length; i++) {
      setTimeout( function() {
        flags[i].classList.add('main__flag--active');
      }, delay);
      delay += 400;
    }    
    setTimeout(function animate() {
      const circle = document.querySelector('.main__countries');
      circle.classList.add('main__countries--active');
    }, delay+400);
  }
  cicle(); 
});