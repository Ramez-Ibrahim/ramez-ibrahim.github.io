// =================================================================
// About Me Page - Specific JavaScript
// =================================================================

// --- Robust scroll prevention for mobile menu ---
const preventScroll = (e) => {
    // Allows scroll on the menu itself if it becomes scrollable, but not the body
    if (e.target.closest('.menu.active')) {
        return;
    }
    e.preventDefault();
};

// --- Main Execution after DOM is loaded ---
document.addEventListener('DOMContentLoaded', function () {

  // --- Preloader ---
  const loader = document.getElementById("preloader");
  if (loader) {
    window.addEventListener("load", function() {
        loader.style.display = "none";
    });
  }

  // --- Hamburger Menu ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('header .menu'); 
  const desktopNav = document.querySelector('nav.menu');

  if (hamburger && navMenu && desktopNav) {
    hamburger.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        let mobileMenuClone = document.querySelector('.mobile-menu-clone');
        if (!mobileMenuClone) {
            mobileMenuClone = desktopNav.cloneNode(true);
            mobileMenuClone.classList.add('mobile-menu-clone', 'menu');
            document.body.appendChild(mobileMenuClone);
        }
        mobileMenuClone.classList.toggle('active', isActive);
        document.documentElement.classList.toggle('menu-open', isActive);

        if (isActive) {
            window.addEventListener('touchmove', preventScroll, { passive: false });
        } else {
            window.removeEventListener('touchmove', preventScroll, { passive: false });
        }
    });

    document.body.addEventListener('click', (e) => {
        if (e.target.matches('.mobile-menu-clone .menu-bar')) {
            const mobileMenuClone = document.querySelector('.mobile-menu-clone');
            hamburger.classList.remove('active');
            if(mobileMenuClone) mobileMenuClone.classList.remove('active');
            document.documentElement.classList.remove('menu-open');
            window.removeEventListener('touchmove', preventScroll, { passive: false });
        }
    });
  }


  // --- Sticky Header on Scroll ---
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

  // --- Dark/Light Mode ---
  const switchElement = document.querySelector('.switch');
  const favicon = document.getElementById('favicon');
  const headerIcon = document.querySelector('.pageicon');
  const lightIconPath = 'images/favicon.png';
  const darkIconPath = 'images/lightmodeicon.png';

  function setDarkMode() {
    document.body.classList.add('dark');
    if (favicon) favicon.href = darkIconPath;
    if (headerIcon) headerIcon.src = darkIconPath;
    localStorage.setItem('mode', 'dark');
  }

  function setLightMode() {
    document.body.classList.remove('dark');
    if (favicon) favicon.href = lightIconPath;
    if (headerIcon) headerIcon.src = lightIconPath;
    localStorage.setItem('mode', 'light');
  }

  if (switchElement) {
    switchElement.addEventListener('click', () => {
        if (document.body.classList.contains('dark')) {
            setLightMode();
        } else {
            setDarkMode();
        }
    });
  }
  
  const currentMode = localStorage.getItem('mode');
  if (currentMode === 'dark') {
    setDarkMode();
  } else {
    setLightMode();
  }
  
  if (!localStorage.getItem('mode')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode();
    }
  }

  // --- JS-DRIVEN TYPEWRITER EFFECT ---
  const typewriterElement = document.querySelector('.typewrite');
  if (typewriterElement) {
      const textToType = typewriterElement.textContent;
      const typingSpeed = 150;
      let charIndex = 0;

      typewriterElement.textContent = '';

      function type() {
          if (charIndex < textToType.length) {
              typewriterElement.textContent += textToType.charAt(charIndex);
              charIndex++;
              setTimeout(type, typingSpeed);
          } else {
              typewriterElement.classList.add('typing-done');
          }
      }
      setTimeout(type, 500);
  }

  // --- Dynamically Load YouTube Profile Pictures ---
  function loadMentorProfilePictures() {
    const mentorCards = document.querySelectorAll('.mentor-card[data-yt-username]');

    mentorCards.forEach(card => {
      const username = card.dataset.ytUsername;
      const imgElement = card.querySelector('img');

      if (username && imgElement) {
        // Construct the URL using unavatar.io
        // The ?fallback=false prevents it from returning a default avatar if not found
        const avatarUrl = `https://unavatar.io/youtube/${username}?fallback=false`;

        // Create a temporary image to load the new one in the background
        const tempImg = new Image();
        tempImg.src = avatarUrl;

        // Once the new image is loaded, replace the old one
        tempImg.onload = () => {
          imgElement.src = avatarUrl;
        };

        // Optional: If the new image fails to load, the console will show an error,
        // but the original fallback image will remain, which is good UX.
        tempImg.onerror = () => {
            console.error(`Could not load profile picture for ${username}`);
        };
      }
    });
  }
  // Call the function to start loading the images
  loadMentorProfilePictures();


  // --- Resume Download Animation & Trigger ---
  const downloadCheckbox = document.getElementById('ms-download');
  if (downloadCheckbox) {
      downloadCheckbox.addEventListener('change', function () {
        if (this.checked) {
          setTimeout(function () {
            const fileID = '1hBqL_eIPVukocVafp6UnOcir3OHmqqEa';
            const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`;
            
            const downloadLink = document.createElement('a');
            downloadLink.href = directDownloadLink;
            downloadLink.download = 'Ramez_Ibrahim_Resume.pdf';
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
            
            downloadLink.click();
            
            document.body.removeChild(downloadLink);
          }, 4000);
        }
      });
  }

  // --- "To Top" Scroll Button ---
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

});