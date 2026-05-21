// =================================================================
// About Me Page - Specific JavaScript
// =================================================================

// --- Robust scroll prevention for mobile menu ---
// --- Gracefully Hide Broken GitHub Stat Cards ---
function hideBrokenGitHubCards() {
  // Select all images within the GitHub card items
  const githubImages = document.querySelectorAll('.github-card-item img');

  githubImages.forEach(img => {
    // Add an 'error' event listener to each image
    img.addEventListener('error', () => {
      // Find the closest parent container for the card
      const cardContainer = img.closest('.github-card-item');
      // If the container is found, hide it completely
      if (cardContainer) {
        console.warn(`GitHub stats image failed to load. Hiding card: ${img.src}`);
        cardContainer.style.display = 'none';
      }
    });
  });
}


// --- Main Execution after DOM is loaded ---
document.addEventListener('DOMContentLoaded', function () {

  // All common functionalities (preloader, hamburger menu, sticky header, dark/light mode, typewriter)
  // are now handled by scripts.js or are page-specific to index.js/projects.js.
  // This file now only contains its unique logic.

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

  // Call the function to hide broken stat cards
  hideBrokenGitHubCards();
});