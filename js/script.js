const header = document.querySelector('header');
const burgerButton = document.querySelector('.burger-btn');
const navBar = document.querySelector('nav');
const navBarBurgerBtn = document.querySelector('.nav-adaptive__btn');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 400) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

burgerButton.addEventListener('click', () => {
  burgerButton.classList.add('active');
  navBar.classList.add('active');
  navBarBurgerBtn.classList.add('active');
  document.querySelector('body').classList.add('lock');
  
});

navBarBurgerBtn.addEventListener('click', () => {
  burgerButton.classList.remove('active');
  navBar.classList.remove('active');
  navBarBurgerBtn.classList.remove('active');
  document.querySelector('body').classList.remove('lock');
});