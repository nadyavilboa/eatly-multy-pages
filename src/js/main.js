const header = document.querySelector('.page-header');
const menuBtn = header.querySelector('.burger');
const menuBtnClose = header.querySelector('.menu__btn-close');
const menu = header.querySelector('.menu');

const menuOpen = () => {
    menu.classList.add('menu--open');
};

const menuClose = () => {
    menu.classList.remove('menu--open');
};

menuBtn.addEventListener('click', () => menuOpen());
menuBtnClose.addEventListener('click', () => menuClose());
