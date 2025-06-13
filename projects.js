/* ---- Page-specific scripts for projects.html ---- */


/**
 * -----------------------------------------------------------------------------
 * Footer Icon Redirects
 * These functions are in the global scope to be accessible by 'onclick' attributes
 * in the HTML.
 * -----------------------------------------------------------------------------
 */

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

// Corrected the GitHub username to be consistent with all project links on the page.
function redirectToGitHub() {
  window.open('https://github.com/Ramez08', '_blank');
}


/**
 * -----------------------------------------------------------------------------
 * DOM-dependent Scripts
 * This code runs after the HTML document has been fully loaded and parsed.
 * -----------------------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {

  /* -------- Dark/Light Mode Toggle -------- */
  const switchElement = document.querySelector('.switch');

  const setDarkMode = () => {
    document.body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
  };

  const setLightMode = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
  };

  // Add click listener to the theme switch
  if (switchElement) {
    switchElement.addEventListener('click', () => {
      if (document.body.classList.contains('dark')) {
        setLightMode();
      } else {
        setDarkMode();
      }
    });
  }

  // Set initial theme based on user's preference or system settings
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
    setDarkMode();
  } else if (currentMode === 'light') {
    setLightMode();
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkMode();
  } else {
    setLightMode(); // Default to light mode
  }


  /* -------- Project Square Fade-in Animation -------- */
  // This function adds the 'show' class to a project square after a specified delay,
  // triggering the CSS fade-in animation.
  const showSquareWithDelay = (squareId, delay) => {
    setTimeout(() => {
      const square = document.getElementById(squareId);
      if (square) {
        square.classList.add("show");
      }
    }, delay);
  };

  // Stagger the appearance of the project squares
  showSquareWithDelay("notes", 500);
  showSquareWithDelay("amazon", 500);
  showSquareWithDelay("calc", 700);
  showSquareWithDelay("threads", 700);
  showSquareWithDelay("expneses", 900);
  showSquareWithDelay("dino", 900);
  showSquareWithDelay("web", 1100);
  showSquareWithDelay("todo", 1100);
  showSquareWithDelay("elon", 1300);
  showSquareWithDelay("barista", 1300);


  /* -------- "Back to Top" Button -------- */
  const toTopButton = document.querySelector(".to-top");

  if (toTopButton) {
    window.addEventListener("scroll", () => {
      // Show the button after the user has scrolled down 100 pixels
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

});