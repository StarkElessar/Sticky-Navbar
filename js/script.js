const header = document.querySelector('header');
const burgerButton = document.querySelector('.burger-btn');
const navBar = document.querySelector('nav');
const navBarBurgerBtn = document.querySelector('.nav-adaptive__btn');
const navLinks = document.querySelectorAll('.nav-adaptive__links li a')
// Липкая шапка
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 400) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
// Клик по бургеру в шапке
burgerButton.addEventListener('click', () => {
  burgerButton.classList.add('active');
  navBar.classList.add('active');
  navBarBurgerBtn.classList.add('active');
  document.querySelector('body').classList.add('lock');
  
});
// Клик по бургеру в меню
navBarBurgerBtn.addEventListener('click', () => {
  burgerButton.classList.remove('active');
  navBar.classList.remove('active');
  navBarBurgerBtn.classList.remove('active');
  document.querySelector('body').classList.remove('lock');
});
// Клик по ссылке в меню
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    burgerButton.classList.remove('active');
    navBar.classList.remove('active');
    navBarBurgerBtn.classList.remove('active');
    document.querySelector('body').classList.remove('lock');
  });
});

// Плавная прокрутка по ссылкам
const anchors = document.querySelectorAll('a._link')

anchors.forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      left: 0,
      behavior: 'smooth',
      block: 'start'
    });
  });
});