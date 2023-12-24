const formSearch = document.querySelector('.main__search-form');
const inputSearch = document.querySelector('.main__search');
const regSymbol = /[!@#$%^&*()]/g;
const btnSearch = document.querySelector('.main__btn-search');


inputSearch.oninput = function () {
  this.value = this.value.replace(regSymbol, '');
  if (this.value.length < 4 && this.value.length > 0) {
    btnSearch.setAttribute('disabled', '');
    btnSearch.classList.add('main__btn-search--disabled');
    formSearch.classList.add('main__search-form--disabled');
  } else {
    btnSearch.removeAttribute('disabled', '');
    btnSearch.classList.remove('main__btn-search--disabled');
    formSearch.classList.remove('main__search-form--disabled');
  };
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
  };
  cicle(); 
});