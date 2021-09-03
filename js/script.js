const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 400) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
})