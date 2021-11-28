"use strict"

// Меню бургер 

const iconMenu = document.querySelector('.menu__icon');
const mainLogo = document.querySelector('.header__logo');
const MenuBody = document.querySelector('.menu__body');
const preview = document.querySelector('.header__navbar');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        MenuBody.classList.toggle('_active');
        MenuBody.classList.toggle('menus');
        mainLogo.classList.toggle('_active');
        preview.classList.toggle('_active');
    });
}



// Паралакс для картинки блока About

let parallaxAbout = document.querySelector('.parallax_img');
window.addEventListener('mousemove', function(e) {
    let clientPageWidth = e.clientX / window.innerWidth;
    let clientPageHeight = e.clientY / window.innerHeight;
    let pageWidth = window.innerWidth;
    if (pageWidth > 768) {
        parallaxAbout.style.transform = 'translate(-' + clientPageWidth * 5 + 'px, -' + clientPageHeight * 15 + 'px)';
    }
});



//Прокрутка при клике 

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
let pageHeight = window.innerHeight;
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                MenuBody.classList.remove('_active');
                MenuBody.classList.remove('menus');
                mainLogo.classList.remove('_active');
                preview.classList.remove('_active');
            }


            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}