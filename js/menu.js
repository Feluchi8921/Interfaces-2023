"use strict"
//menu responsive
document.querySelector(".btn-menu").addEventListener("click", toggleMenu);
function toggleMenu() {
    document.querySelector(".barraNav").classList.toggle("show");
}
