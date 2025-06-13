// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

// FIX: Robust scroll prevention for iOS Safari
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
const darkIconPath = 'images/lightmodeicon.png'; // Assumes you created this file

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
    const toTopButtons = document.querySelectorAll(".to-top, .to-top2");

    if (toTopButtons.length > 0) {
        window.addEventListener("scroll", () => {
            const scrollOffset = window.pageYOffset;
            const threshold = 10;

            toTopButtons.forEach(button => {
                if (scrollOffset > threshold) {
                    button.style.opacity = '1';
                    button.style.pointerEvents = 'auto';
                    button.style.bottom = '35px';
                } else {
                    button.style.opacity = '0';
                    button.style.pointerEvents = 'none';
                    button.style.bottom = '30px';
                }
            });
        });
    }
});

// Cube animation functionality
function fadeInLogos() {
    const cubes = document.querySelectorAll(".cube");
    setTimeout(() => {
        cubes.forEach((cube) => {
            cube.classList.add("fade-in-logo");
        });
    }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
    fadeInLogos();

    // JS-DRIVEN TYPEWRITER EFFECT
    const typewriterElement = document.querySelector('.typewrite');
    if (typewriterElement) {
        const textToType = typewriterElement.textContent; // Get the text from HTML
        const typingSpeed = 150; // Speed in milliseconds per character
        let charIndex = 0;

        typewriterElement.textContent = ''; // Clear the element's initial content

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

        // Start the typing animation
        setTimeout(type, 500); // Optional small delay before starting
    }
});

// Project square animations
function showSquareWithDelay(squareId, delay) {
    setTimeout(function() {
        var square = document.getElementById(squareId);
        if (square) square.classList.add("show");
    }, delay);
}

function showSquaresTogether(className, delay) {
    setTimeout(function() {
        var squares = document.getElementsByClassName(className);
        for (var i = 0; i < squares.length; i++) {
            squares[i].classList.add("show");
        }
    }, delay);
}

// Initialize animations
showSquareWithDelay("markets", 1500);
showSquareWithDelay("amazon", 1500);
showSquareWithDelay("notes", 1500);
showSquareWithDelay("threads", 2500);
showSquareWithDelay("calc", 2500);
showSquareWithDelay("netflix", 2500);
showSquareWithDelay("expneses", 3500);
showSquareWithDelay("dino", 3500);
showSquareWithDelay("web", 4500);
showSquareWithDelay("todo", 4500);
showSquareWithDelay("barista", 5500);
showSquareWithDelay("elon", 5500);

// Additional animations
showSquaresTogether("cloud0", 1500);
showSquaresTogether("cs", 2500);
showSquaresTogether("cloud1", 3500);
showSquaresTogether("cloud2", 4500);
showSquaresTogether("cloud3", 5500);
showSquaresTogether("cloud4", 6500);
showSquaresTogether("lang0", 7500);
showSquaresTogether("lang1", 7500);
showSquaresTogether("lang2", 7500);
showSquaresTogether("lang3", 8500);
showSquaresTogether("lang4", 8500);
showSquaresTogether("lang5", 8500);
showSquaresTogether("lang6", 9500);

// Share functionality
var shareImages = document.querySelectorAll(".share");
shareImages.forEach(function(shareImage) {
    shareImage.addEventListener("click", function() {
        var linkToCopy = shareImage.getAttribute("data-link");
        copyToClipboard(linkToCopy);
    });
});

function copyToClipboard(text) {
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Link copied to clipboard: " + text);
}

// Carousel functionality
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});

// Popup functionality
const openPopupButtons = document.querySelectorAll("#popup-trigger, #popup-trigger2, #popup-trigger3, #popup-trigger4");
const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup-overlay");
const closeButton = document.getElementById("close-popup");

function togglePopup() {
    popup.classList.toggle("show");
    popupOverlay.classList.toggle("active");
}

openPopupButtons.forEach(button => {
    button.addEventListener("click", togglePopup);
});

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && popup.classList.contains("show")) {
        togglePopup();
    }
});

if (closeButton) {
    closeButton.addEventListener("click", togglePopup);
}


// Fade-in elements on load
document.addEventListener('DOMContentLoaded', function() {
    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(function(element) {
        element.classList.remove('fade-in');
    });
});

// Scroll to top button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const mybutton = document.getElementById("myBtn");
    if (mybutton) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}