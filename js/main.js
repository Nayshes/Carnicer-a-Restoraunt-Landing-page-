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

const menuLinks = document.querySelectorAll('.all_link[data-goto]');
let pageHeight = window.innerHeight;
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

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

//анимации при скроле
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 5;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;

            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_anim-active');
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.scrollX || document.documentElement.scrollLeft,
            scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}