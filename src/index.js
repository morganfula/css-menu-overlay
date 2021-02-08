const nav = document.querySelector('nav');

console.log(nav);

nav.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');
});
