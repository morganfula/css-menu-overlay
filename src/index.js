const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');

nav.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');

  setTimeout(() => {
    menu.style.display = 'flex';
  }, 200);
});
