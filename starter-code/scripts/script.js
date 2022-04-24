const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const menu = document.querySelector('.menu');

// functions

function openMenu() {
    menu.style.left = '0';
}
function closeMenu() {
    menu.style.left = '-80%';
}

// adding event listener
menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
