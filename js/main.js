// main.js - OpenRelay Stage 1
// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const userTheme = localStorage.getItem('theme');
if (userTheme) {
    document.documentElement.setAttribute('data-theme', userTheme);
    themeToggle.textContent = userTheme === 'dark' ? '☀️' : '🌙';
} else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.textContent = next === 'dark' ? '☀️' : '🌙';
});
// Modal logic
const modalOverlay = document.getElementById('modal-overlay');
const submitModal = document.getElementById('submit-modal');
const loginModal = document.getElementById('login-modal');
const submitBtn = document.getElementById('submit-btn');
const loginBtn = document.getElementById('login-btn');
function openModal(modal) {
    modal.classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
}
function closeModal() {
    submitModal.classList.add('hidden');
    loginModal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
}
submitBtn.addEventListener('click', () => openModal(submitModal));
loginBtn.addEventListener('click', () => openModal(loginModal));
modalOverlay.addEventListener('click', closeModal);
document.querySelectorAll('.close-modal').forEach(btn => btn.addEventListener('click', closeModal));
// Prevent modal form submission (placeholder)
document.querySelectorAll('.modal form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('This is a placeholder. No backend yet!');
        closeModal();
    });
});
// Newsletter form (placeholder)
document.querySelector('.newsletter-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Subscribed! (UI only, no backend yet)');
});
// Highlight active nav link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});
// Hamburger menu for mobile nav
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('main-nav');
if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close nav on link click (mobile UX)
    mainNav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                mainNav.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });
}
