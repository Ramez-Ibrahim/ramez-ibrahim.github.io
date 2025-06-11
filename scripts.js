const switchElement = document.querySelector('.switch');
const currentHour = new Date().getHours();

// Function to set dark mode
function setDarkMode() {
  document.body.classList.add('dark');
  localStorage.setItem('mode', 'dark');
}

// Function to set light mode
function setLightMode() {
  document.body.classList.remove('dark');
  localStorage.setItem('mode', 'light');
}

// Toggle mode when switch is clicked
switchElement.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    setLightMode();
    } else {
      setDarkMode();
    }
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

// Add this code to your existing JavaScript file

// Function to show the square after a delay
function showSquareWithDelay(squareId, delay) {
  setTimeout(function () {
    var square = document.getElementById(squareId);
    square.classList.add("show");
  }, delay);
}


function showSquaresTogether(className, delay) {
  setTimeout(function () {
    var squares = document.getElementsByClassName(className);
    for (var i = 0; i < squares.length; i++) {
      squares[i].classList.add("show");
    }
  }, delay);
}

// Call the function with the class name and a delay



// Call the function with the square IDs and desired delays
// For example, if you want "markets" to appear after 1 second, and "amazon" after 2 seconds:
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


function showSquaresTogether(dataIdValue, delay) {
  setTimeout(function () {
    var elements = document.querySelectorAll('[data-id="' + dataIdValue + '"]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add("show");
    }
  }, delay);
}

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

// Add more squares and delays as needed

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.querySelector('body');
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
  }
}

// Check if dark mode preference exists in Local Storage
const darkModePref = localStorage.getItem('darkMode');
if (darkModePref !== null) {
  toggleDarkMode();
}

// Event listener for the light/dark mode switch
document.querySelector('.switch').addEventListener('click', () => {
  toggleDarkMode();
  // Save user's preference to Local Storage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});

// Function to fade in logos after page load
function fadeInLogos() {
  console.log("FadeInLogos function called");
  const cubes = document.querySelectorAll(".cube");
  setTimeout(() => {
    cubes.forEach((cube) => {
      cube.classList.add("fade-in-logo");
    });
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
  fadeInLogos();
});


document.addEventListener("DOMContentLoaded", function () {
  // Get the current hour
  const currentHour = new Date().getHours();

  // Call the fadeInLogos function
  fadeInLogos();
});

// Function to fade in logos after page load
function fadeInLogos() {
  console.log("FadeInLogos function called");
  const cubes = document.querySelectorAll(".cube");
  setTimeout(() => {
    cubes.forEach((cube) => {
      cube.classList.add("fade-in-logo");
    });
  }, 500);
}

// Assuming you have an image element with the "share" class and a data-link attribute
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


var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})


// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with the class "fade-in"
  var fadeElements = document.querySelectorAll('.fade-in');
  
  // Loop through the elements and remove the "fade-in" class
  fadeElements.forEach(function (element) {
    element.classList.remove('fade-in');
  });
});

function redirectToLinkedIn() {
    // Replace 'https://www.linkedin.com' with the URL you want to redirect to
    window.open('https://www.linkedin.com/in/ramez-ibrahim-4708721b4/', '_blank');
}

function redirectToMail() {
    // Replace 'https://www.linkedin.com' with the URL you want to redirect to
    window.open('mailto:ramezamr2008@gmail.com', '_blank');
}

function redirectToInstgram() {
    // Replace 'https://www.linkedin.com' with the URL you want to redirect to
    window.open('https://www.instagram.com/ramezibrahimm/', '_blank');
}

function redirectToX() {
    // Replace 'https://www.linkedin.com' with the URL you want to redirect to
    window.open('https://x.com/ramezibrahimm', '_blank');
}

function redirectToGitHub() {
    // Replace 'https://www.linkedin.com' with the URL you want to redirect to
    window.open('https://github.com/Ramez-Ibrahim', '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
  const downloadButton = document.getElementById('ms-download');

  downloadButton.addEventListener('change', function () {
    if (this.checked) {
      // Show your animation here
      showAnimation();

      // Delay the download by a few seconds (adjust as needed)
      setTimeout(function () {
        // Specify the Google Drive file ID
        const fileID = '12m5aOdtPF-X_yUWwVUe3njkiY0tXAMTj';

        // Create a direct download link
        const directDownloadLink = `https://drive.google.com/uc?export=download&id=${fileID}`;

        // Create an anchor element
        const downloadLink = document.createElement('a');

        // Set the download link's attributes
        downloadLink.href = directDownloadLink;
        downloadLink.download = 'MYP5.pdf'; // Set the desired filename
        downloadLink.target = '_blank';

        // Add the download attribute to the anchor element
        downloadLink.setAttribute('download', '');

        // Trigger a click event on the anchor element to start the download
        downloadLink.click();

        // Hide or remove the animation if needed
        hideAnimation();
      }, 4000); // Delay for 4 seconds (adjust as needed)
    }
  });

  function showAnimation() {
    // Implement your code to show the animation here
  }

  function hideAnimation() {
    // Implement your code to hide or remove the animation here
  }
});

const openPopupButtons = document.querySelectorAll("#popup-trigger, #popup-trigger2, #popup-trigger3, #popup-trigger4");
const popup = document.querySelector(".popup");
const popupOverlay = document.querySelector(".popup-overlay");
const closeButton = document.getElementById("close-popup");

// Function to toggle popup and overlay visibility
function togglePopup() {
  popup.classList.toggle("show");
  popupOverlay.classList.toggle("active");
}

// Add event listener to all openPopupButtons
openPopupButtons.forEach(button => {
  button.addEventListener("click", togglePopup);
});

// Add event listener for the "Esc" key
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 27 && popup.classList.contains("show")) { // Check if the pressed key is "Esc" and popup is open
    togglePopup(); // Call the togglePopup function to close the popup
  }
});

// Add event listener to the close button

closeButton.addEventListener("click", togglePopup);

document.addEventListener("DOMContentLoaded", () => {
  // Select all buttons with the class 'to-top'
  const toTopButtons = document.querySelectorAll(".to-top");

  if (toTopButtons.length > 0) {
    console.log("Found to-top buttons:", toTopButtons.length);

    window.addEventListener("scroll", () => {
      const scrollOffset = window.pageYOffset;
      const threshold = 10;

      console.log("Scroll Offset:", scrollOffset);

      toTopButtons.forEach(button => {
        if (scrollOffset > threshold) {
          if (button.style.opacity !== '1') {
            console.log("Making button visible:", button);
          }
          button.style.opacity = '1';
          button.style.pointerEvents = 'auto';
          button.style.bottom = '35px'; // Adjust as needed
        } else {
          if (button.style.opacity !== '0') {
            console.log("Hiding button:", button);
          }
          button.style.opacity = '0';
          button.style.pointerEvents = 'none';
          button.style.bottom = '30px'; // Adjust as needed
        }
      });
    });
  } else {
    console.log("No to-top buttons found.");
  }
});





// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}