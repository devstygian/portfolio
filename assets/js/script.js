console.log("Portfolio Loaded Successfully!");

/* ========== PAGE LOADER ========== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => loader.classList.add("hide"), 700);
    }
});

/* ========== DARK / LIGHT MODE TOGGLE ========== */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Persist preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    body.classList.add("light");
    themeIcon.className = "fa-solid fa-sun";
}

themeToggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    themeIcon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

/* ========== HAMBURGER MENU ========== */
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

/* ========== NAVBAR SCROLL STATE ========== */
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ========== ACCORDION WITH +/- TOGGLE ========== */
document.querySelectorAll(".acc-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const body = btn.nextElementSibling;
        const icon = btn.querySelector(".acc-icon");
        body.classList.toggle("open");
        if (icon) icon.textContent = body.classList.contains("open") ? "−" : "+";
    });
});

/* ========== SCROLL-TO-TOP BUTTON ========== */
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    scrollTopBtn.classList.toggle("show", window.scrollY > 400);
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ========== SKILLS BAR ANIMATION ========== */
const skillFills = document.querySelectorAll(".skill-fill");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            fill.style.width = fill.getAttribute("data-width");
            skillObserver.unobserve(fill);
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillObserver.observe(fill));

/* ========== FADE-IN SECTIONS ON SCROLL ========== */
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll("section").forEach(sec => fadeObserver.observe(sec));

/* ========== FORM RESET ON UNLOAD ========== */
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) form.reset();
};