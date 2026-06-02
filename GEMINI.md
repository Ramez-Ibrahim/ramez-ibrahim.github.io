# Code Cave | Ramez Ibrahim Portfolio

This is a personal portfolio website showcasing the work, certifications, and background of Ramez Ibrahim. The project is a multi-page static website designed with a modern aesthetic, featuring dark/light mode support, responsive layouts, and interactive animations.

## Project Overview

- **Purpose:** Personal professional portfolio.
- **Main Technologies:** HTML5, CSS3, JavaScript (Vanilla), jQuery (for lightbox).
- **Architecture:** Multi-page static site with modular CSS and JS.
- **Key Features:**
  - Dark/Light mode toggle with persistence via `localStorage`.
  - Responsive design with a hamburger menu for mobile.
  - Interactive typewriter animations.
  - Reveal-on-scroll animations using `IntersectionObserver`.
  - Image lightbox for projects and certifications.
  - Fail-safe preloader.

## Directory Structure

- `index.html`, `index.css`, `index.js`: Home page.
- `projects.html`, `projects.css`, `projects.js`: Portfolio of projects.
- `certifications.html`, `certifications.css`: List of earned certifications.
- `aboutme.html`, `aboutme.css`, `aboutme.js`: Biography and contact info.
- `styles.css`: Global base styles.
- `scripts.js`: Global logic (theme switching, navigation, preloader).
- `images/`: Site assets, project screenshots, and certification badges.
- `logos/`: SVG logos for technology icons.
- `lightbox.js`, `lightbox.css`, `lightbox-plus-jquery.js`: External library for image popups.

## Building and Running

### Prerequisites
None. This is a static site.

### Running Locally
1. Open `index.html` in any modern web browser.
2. Recommended: Use a local development server like VS Code's **Live Server** to ensure all paths and assets load correctly.

### Deployment
This project is intended for hosting on **GitHub Pages**.

## Development Conventions

- **HTML:** Use semantic HTML elements. Ensure all pages include the global `scripts.js` and `styles.css` if necessary.
- **CSS:** 
  - Styles are often modularized per page (e.g., `projects.css`).
  - Be aware that some styles use `!important` to override defaults; check `index.css` or `projects.css` for examples.
  - Theme-specific styles are nested under the `.dark` class on the `body`.
- **JavaScript:**
  - Prefer Vanilla JS for new features.
  - Theme persistence is handled via `localStorage.getItem("mode")`.
  - Use `IntersectionObserver` for scroll-triggered animations.
- **Images:** Add new project screenshots to the `images/` directory and technology logos to the `logos/` directory.

## TODOs
- [ ] Consolidate typewriter animation logic between `scripts.js` and page-specific JS files to reduce duplication.
- [ ] Improve README.md with more descriptive content.
