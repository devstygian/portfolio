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


const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('action');
});

