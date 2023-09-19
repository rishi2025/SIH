'use strict';

const profileBtn = document.querySelector('.profileImg');
const profileBtnMenuOpen = document.querySelector('.profileBtn');
const profileMenu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.menuBtn');
const menuOverlay = document.querySelector('.menuOverlay');

const toggleMenu = function () {
    profileMenu.classList.toggle('hidden');
    profileMenu.classList.toggle('menuDisplay');
    menuOverlay.classList.toggle('hiddenReal');


    if (profileMenu.classList.contains('menuDisplay')) {
        menuBtn.forEach(function (menu) {
            menu.style.height = "4rem";
            menu.classList.remove('menuBtnHide');
        });
    }
    else {
        menuBtn.forEach(function (menu) {
            menu.style.height = "0rem";
            menu.classList.add('menuBtnHide');
        });
    }
}

profileBtn.addEventListener('click', toggleMenu);
profileBtnMenuOpen.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);