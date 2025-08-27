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


// REMOVE  BR TAGS
function handleBrRemove() {
const heading = document.querySelector(".meet-text-title");
const br = heading.querySelector("br");

if (window.innerWidth <= 1130) {
    if (br) br.remove(); // remove <br> if screen ≤ 1100px
}
}

// Run on page load
handleBrRemove();

// Run on window resize
window.addEventListener("resize", handleBrRemove);



// Garage Solution Section arrow function
const ssC = document.querySelector(".boxes");
const arrow_left = document.querySelector(".arrow-left");
const arrow_right = document.querySelector(".arrow-right");


arrow_left.addEventListener("click", () =>{
    ssC.scrollBy({left: -343, behavior: "smooth"});
});

arrow_right.addEventListener("click", () =>{
    ssC.scrollBy({left: 343, behavior: "smooth"});
});



// // Store original HTML to restore br tags
let originalHTML = null;

function handleBrRemove() {
    const hdr = document.querySelector("#frbr");
    
    if (!hdr) return; // Exit if element not found
    
    // Store original HTML on first run
    if (originalHTML === null) {
        originalHTML = hdr.innerHTML;
    }
    
    if (window.innerWidth <= 900) {
        // Remove all br tags on small screens
        const brTags = hdr.querySelectorAll("br");
        brTags.forEach(br => br.remove());
    } else {
        // Restore original HTML (with br tags) on larger screens
        hdr.innerHTML = originalHTML;
    }
}

// Run on page load
document.addEventListener('DOMContentLoaded', handleBrRemove);

// Run on window resize
window.addEventListener("resize", handleBrRemove);