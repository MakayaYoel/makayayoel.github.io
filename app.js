const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-nav-menu");

menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('active'));