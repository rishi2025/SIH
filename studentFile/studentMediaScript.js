'use strict';

const container = document.querySelector('.container');
const phoneProfileBtn = document.querySelector('.phoneProfileImg');
const phoneProfileBtnMenuOpen = document.querySelector('.phoneProfileBtn');
const phoneProfileMenu = document.querySelector('.phoneMenu');
const phoneMenuBtn = document.querySelectorAll('.phoneMenuBtn');
const phoneMenuOverlay = document.querySelector('.phoneMenuOverlay');


const phoneToggleMenu = function () {
    phoneProfileMenu.classList.toggle('hidden');
    phoneProfileMenu.classList.toggle('phoneMenuDisplay');
    phoneMenuOverlay.classList.toggle('hiddenReal');

    if (phoneProfileMenu.classList.contains('phoneMenuDisplay')) {
        phoneMenuBtn.forEach(function (phoneMenu) {
            phoneMenu.style.height = "4rem";
            phoneMenu.classList.remove('phoneMenuBtnHide');
        });
    }
    else {
        phoneMenuBtn.forEach(function (phoneMenu) {
            phoneMenu.style.height = "0rem";
            phoneMenu.classList.add('phoneMenuBtnHide');
        });
    }
}

phoneProfileBtn.addEventListener('click', phoneToggleMenu);
phoneProfileBtnMenuOpen.addEventListener('click', phoneToggleMenu);
container.addEventListener('click', phoneToggleMenu);
phoneMenuOverlay.addEventListener('click', phoneToggleMenu);
phoneMenuBtn.forEach(function (phoneMenu) {
    phoneMenu.addEventListener('click', toggleMenu);
});