// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// Robust scroll prevention for iOS Safari
const preventScroll = (e) => {
    e.preventDefault();
};

hamburger.addEventListener('click', () => {
    const isActive = hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    document.documentElement.classList.toggle('menu-open', isActive);

    if (isActive) {
        // When menu is open, prevent scrolling via touch events
        window.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
        // When menu is closed, allow scrolling
        window.removeEventListener('touchmove', preventScroll, { passive: false });
    }
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.menu-bar');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        document.documentElement.classList.remove('menu-open');
        // Also remove the scroll prevention when a link is clicked
        window.removeEventListener('touchmove', preventScroll, { passive: false });
    });
});


// Dark mode switch functionality
const switchElements = document.querySelectorAll('.switch');
const favicon = document.getElementById('favicon');
const headerIcon = document.querySelector('.pageicon');

const lightIconPath = 'images/favicon.png';
const darkIconPath = 'images/lightmodeicon.png';

// Function to set dark mode
function setDarkMode() {
    document.body.classList.add('dark');
    if (favicon) favicon.href = darkIconPath;
    if (headerIcon) headerIcon.src = darkIconPath;
    localStorage.setItem('mode', 'dark');
}

// Function to set light mode
function setLightMode() {
    document.body.classList.remove('dark');
    if (favicon) favicon.href = lightIconPath;
    if (headerIcon) headerIcon.src = lightIconPath;
    localStorage.setItem('mode', 'light');
}

// Toggle mode when switch is clicked
switchElements.forEach(switchElement => {
    switchElement.addEventListener('click', () => {
        if (document.body.classList.contains('dark')) {
            setLightMode();
        } else {
            setDarkMode();
        }
    });
});

// Check if user has a preference stored in local storage
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
    setDarkMode();
} else if (currentMode === 'light') {
    setLightMode();
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkMode();
} else {
    setLightMode(); // Default to light mode
}

// Social media redirect functions
function redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/ramez-ibrahim-4708721b4/', '_blank');
}

function redirectToMail() {
    window.open('mailto:ramezamr2008@gmail.com', '_blank');
}

function redirectToInstgram() {
    window.open('https://www.instagram.com/ramezibrahimm/', '_blank');
}

function redirectToX() {
    window.open('https://x.com/ramezibrahimm', '_blank');
}

function redirectToGitHub() {
    window.open('https://github.com/Ramez-Ibrahim', '_blank');
}

// Preloader functionality
var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

// Sticky navigation bar on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-wrapper');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Back to top button functionality
document.addEventListener("DOMContentLoaded", () => {
    const toTopButton = document.querySelector(".to-top2");

    if (toTopButton) {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                toTopButton.style.opacity = '1';
                toTopButton.style.pointerEvents = 'auto';
                toTopButton.style.bottom = '35px';
            } else {
                toTopButton.style.opacity = '0';
                toTopButton.style.pointerEvents = 'none';
                toTopButton.style.bottom = '30px';
            }
        });
    }

    // JS-DRIVEN TYPEWRITER EFFECT
    const typewriterElement = document.querySelector('.typewrite');
    if (typewriterElement) {
        const textToType = typewriterElement.textContent;
        const typingSpeed = 150;
        let charIndex = 0;

        typewriterElement.textContent = ''; // Clear initial content

        function type() {
            if (charIndex < textToType.length) {
                typewriterElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                // Typing is finished, remove the cursor
                typewriterElement.classList.add('typing-done');
            }
        }
        setTimeout(type, 500); // Start typing after a short delay
    }
    
    // Project square animations
    const projectSquares = document.querySelectorAll('.sub-section .square');
    projectSquares.forEach((square, index) => {
        // Stagger the animation for each pair of squares
        const delay = 500 + Math.floor(index / 2) * 200;
        setTimeout(() => {
            square.classList.add('show');
        }, delay);
    });
});