const menu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("show");
})

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("show");
})