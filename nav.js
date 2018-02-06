let menuButton = document.querySelector(".icon-menu");
let navOpened = document.querySelector(".hidden__list");
let nav = document.querySelector(".list");


menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    navOpened.classList.toggle("active");
}