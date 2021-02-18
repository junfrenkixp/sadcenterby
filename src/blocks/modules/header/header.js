"use strict";

function mobileMenu() {
    const mobileBtn = document.querySelector('.header__nav-mob__toggle');
    const nav = document.querySelector('.header__nav');
    const body = document.querySelector('body');

    mobileBtn.addEventListener("click", () => {
        nav.classList.toggle('_open');
        body.classList.toggle('hidden');
    });
}
mobileMenu();



