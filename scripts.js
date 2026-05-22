// Global constants for icon paths
const lightIconPath = 'images/favicon.png';
const darkIconPath = "images/lightmodeicon.png";

// Typewriter animation function
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewrite');
    if (typewriterElement) {
        const textToType = typewriterElement.textContent;
        const typingSpeed = 150;
        let charIndex = 0;
        let displayText = '';
        typewriterElement.textContent = '';
        function type() {
            if (charIndex < textToType.length) {
                displayText += textToType.charAt(charIndex);
                typewriterElement.textContent = displayText;
                charIndex++;
                setTimeout(type, typingSpeed);
            } else {
                typewriterElement.classList.add('typing-done');
            }
        }
        type();
    }
}

// Function to copy text to clipboard (modern API)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Link copied to clipboard: " + text);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


// Function to fade in logos after page load
function fadeInLogos() {
  const cubes = document.querySelectorAll(".cube");
  setTimeout(() => {
    cubes.forEach((cube) => {
      cube.classList.add("fade-in-logo");
    });
  }, 500);
}

// Placeholder functions for download animation
function showAnimation() { /* Implement your code to show the animation here */ }
function hideAnimation() { /* Implement your code to hide or remove the animation here */ }

// Social media redirect functions
function redirectToLinkedIn() {
    window.open('https://www.linkedin.com/in/ramez-ibrahim-4708721b4/', '_blank', 'noopener noreferrer');
}

function redirectToMail() {
    window.open('mailto:ramezamr2008@gmail.com', '_blank', 'noopener noreferrer');
}

function redirectToInstgram() {
    window.open('https://www.instagram.com/ramezibrahimm/', '_blank', 'noopener noreferrer');
}

function redirectToX() {
    window.open('https://x.com/ramezibrahimm', '_blank', 'noopener noreferrer');
}

function redirectToGitHub() {
    window.open('https://github.com/Ramez-Ibrahim', '_blank', 'noopener noreferrer');
}

// Robust scroll prevention for iOS Safari
const preventScroll = (e) => {
    e.preventDefault();
};

// Scroll function for myBtn (back to top)
function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (mybutton) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// --- Robust Preloader Removal (Moved to Global Scope) ---
const removePreloader = () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    console.log("Attempting to remove preloader.");
    // Allow clicks to pass through immediately as it starts fading
    preloader.style.pointerEvents = 'none';
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
};

// FAIL-SAFE: Force hide preloader after 2.5 seconds regardless of state
const preloaderTimeout = setTimeout(() => {
  console.log("Preloader fail-safe triggered.");
  removePreloader();
}, 2500);

// Standard removal: Hide when everything is finished
window.addEventListener('load', () => {
  console.log("window.load event fired.");
  clearTimeout(preloaderTimeout);
  removePreloader();
});

// Immediate check in case the script loads late
if (document.readyState === 'complete') {
  clearTimeout(preloaderTimeout);
  removePreloader();
}

// --- Single DOMContentLoaded Listener ---
document.addEventListener("DOMContentLoaded", function () {
  const favicon = document.getElementById("favicon");
  const headerIcon = document.querySelector(".pageicon");
  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  /**
   * Updates the UI elements that depend on JavaScript (icons)
   * @param {boolean} isDark 
   */
  const updateThemeUI = (isDark) => {
    const iconPath = isDark ? darkIconPath : lightIconPath;
    if (favicon) favicon.href = iconPath;
    if (headerIcon) headerIcon.src = iconPath;
  };

  /**
   * Applies the theme to the body and saves to localStorage if requested
   * @param {string} mode 'dark' | 'light'
   * @param {boolean} save Whether to persist the choice
   */
  const applyTheme = (mode, save = false) => {
    const isDark = mode === "dark";
    document.body.classList.toggle("dark", isDark);
    updateThemeUI(isDark);
    if (save) localStorage.setItem("mode", mode);
  };

  // 1. Initial Load Logic
  const savedMode = localStorage.getItem("mode");
  if (savedMode) {
    applyTheme(savedMode);
  } else {
    // Fallback to system preference if no manual choice exists
    applyTheme(colorSchemeQuery.matches ? "dark" : "light");
  }

  // 2. System Preference Listener
  // Updates theme automatically if OS theme changes, unless user has set a manual preference
  colorSchemeQuery.addEventListener("change", (e) => {
    if (!localStorage.getItem("mode")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

  // 3. Manual Toggle Switch Logic
  const switchElements = document.querySelectorAll(".switch");
  switchElements.forEach((el) => {
    el.addEventListener("click", () => {
      const newMode = document.body.classList.contains("dark") ? "light" : "dark";
      applyTheme(newMode, true);
    });
  });

  // --- Global exposing for any legacy/external calls ---
  window.setDarkMode = () => applyTheme("dark", true);
  window.setLightMode = () => applyTheme("light", true);

  // Scroll-linked animations for squares
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        scrollObserver.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.square').forEach(square => scrollObserver.observe(square));

  // Fade in logos
  fadeInLogos();

  // Share functionality
  var shareImages = document.querySelectorAll(".share");
  shareImages.forEach(function(shareImage) {
      shareImage.addEventListener("click", function() {
          var linkToCopy = shareImage.getAttribute("data-link");
          copyToClipboard(linkToCopy);
      });
  });

  // Carousel functionality
  const buttons = document.querySelectorAll("[data-carousel-button]");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1;
      const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
      if (slides) {
        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        if (slides.children[newIndex]) slides.children[newIndex].dataset.active = true;
        if (activeSlide) delete activeSlide.dataset.active;
      }
    });
  });

  // Fade-in elements on load
  var fadeElements = document.querySelectorAll('.fade-in');
  fadeElements.forEach(function (element) {
    element.classList.remove('fade-in');
  });

  // Back to top button functionality for .to-top
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

  // Popup functionality
  const openPopupButtons = document.querySelectorAll("#popup-trigger, #popup-trigger2, #popup-trigger3, #popup-trigger4");
  const popup = document.querySelector(".popup");
  const popupOverlay = document.querySelector(".popup-overlay");
  const closeButton = document.getElementById("close-popup");

  function togglePopup() {
    if (popup) popup.classList.toggle("show");
    if (popupOverlay) popupOverlay.classList.toggle("active");
  }

  openPopupButtons.forEach(button => {
    button.addEventListener("click", togglePopup);
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && popup && popup.classList.contains("show")) {
      togglePopup();
    }
  });

  if (closeButton) {
    closeButton.addEventListener("click", togglePopup);
  }

  // Sticky navigation bar on scroll
  const header = document.querySelector('.header-wrapper');
  if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
  }

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.menu');

  if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
          const isActive = hamburger.classList.toggle('active');
          navMenu.classList.toggle('active');
          document.documentElement.classList.toggle('menu-open', isActive);

          if (isActive) {
              window.addEventListener('touchmove', preventScroll, { passive: false });
          } else {
              window.removeEventListener('touchmove', preventScroll, { passive: false });
          }
      });

      // Close menu when clicking on a link
      const menuLinks = document.querySelectorAll('.menu-bar');
      menuLinks.forEach(link => {
          link.addEventListener('click', () => {
              hamburger.classList.remove('active');
              navMenu.classList.remove('active');
              document.documentElement.classList.remove('menu-open');
              window.removeEventListener('touchmove', preventScroll, { passive: false });
          });
      });
  }
});

// Initialize typewriter animation after page loads
window.addEventListener('load', function() {
    initTypewriter();
});