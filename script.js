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

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function () {
    overlay.classList.remove('hiddenReal');
    modal.classList.remove('hiddenReal');
};

const closeModal = function () {
    overlay.classList.add('hiddenReal');
    modal.classList.add('hiddenReal');
};

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hiddenReal'))
        closeModal();
});

const openPopUp = [document.querySelector('.learnMore')];
const closePopUp = [document.querySelector('.modalClose'), document.querySelector('.modalSubmit'), overlay];
openPopUp.forEach(btn => btn.addEventListener('click', openModal));
closePopUp.forEach(btn => btn.addEventListener('click', closeModal))

document.querySelector('.modalSubmit').addEventListener('click', function (e) {
    e.preventDefault();
});