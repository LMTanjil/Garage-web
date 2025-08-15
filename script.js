const hamburger = document.getElementById('hamburger');
const navOpt = document.querySelector('.nav-opt');
const navContact = document.querySelector('.nav-contact');
const navLinks = document.querySelectorAll('.nav-ul-opt a');

// Toggle mobile menu
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navOpt.classList.toggle('active');
    navContact.classList.toggle('active');
    document.body.style.overflow = navOpt.classList.contains('active') ? 'hidden' : '';
}

// Close mobile menu
function closeMobileMenu() {
    hamburger.classList.remove('active');
    navOpt.classList.remove('active');
    navContact.classList.remove('active');
    document.body.style.overflow = '';
}

// Event listeners
hamburger.addEventListener('click', toggleMobileMenu);

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (navOpt.classList.contains('active') && 
        !navOpt.contains(e.target) && 
        !navContact.contains(e.target) && 
        !hamburger.contains(e.target)) {
        closeMobileMenu();
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navOpt.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});