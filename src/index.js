const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');

nav.addEventListener('click', () => {
  document.body.classList.toggle('menu-open');

  setTimeout(() => {
    menu.style.display = 'grid';
  }, 200);
});

const ListLi = document.querySelectorAll('.menu ul li');

console.log(ListLi);

ListLi.forEach((li) => {
  li.addEventListener('mouseenter', () => {
    console.log('mouseenter', li);
  });

  li.addEventListener('mouseleave', () => {
    console.log('mouseleave', li);
  });
});
