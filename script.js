// Placeholder for future JS animations
console.log("Portfolio Loaded Successfully!");

function toggleProject(button) {
    const projectCard = button.closest('.project-card'); // ensure we get the right card
    const projectImage = projectCard.querySelector('.project-image');

    const isVisible = window.getComputedStyle(projectImage).display !== 'none';

    if (isVisible) {
        projectImage.style.display = 'none';
        button.textContent = 'View Project';
    } else {
        projectImage.style.display = 'block';
        button.textContent = 'Hide Project';
    }
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

