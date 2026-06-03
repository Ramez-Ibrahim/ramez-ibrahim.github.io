# Repository Guidelines

## Project Structure & Module Organization

This repository is a static personal portfolio site built with HTML, CSS, and vanilla JavaScript. Top-level pages are organized by feature:

- `index.html`, `index.css`, `index.js`: home page.
- `projects.html`, `projects.css`, `projects.js`: projects gallery and interactions.
- `certifications.html`, `certifications.css`: certifications page.
- `aboutme.html`, `aboutme.css`, `aboutme.js`: biography and contact page.
- `styles.css`: shared site-wide styling.
- `scripts.js`: shared behavior such as navigation, theme handling, animations, and loading behavior.
- `images/`: screenshots, certification images, and visual assets.
- `logos/`: technology logo assets.
- `lightbox.css`, `lightbox.js`, `lightbox-plus-jquery.js`: lightbox dependency files.

Keep new page-specific code next to its page. Put reusable behavior in `scripts.js` and reusable visual rules in `styles.css`.

## Build, Test, and Development Commands

There is no package manager or build step. The site can be opened directly in a browser.

- `python -m http.server 8000`: serve the repository locally at `http://localhost:8000`.
- Open `index.html`: quick manual check without a server.

Use a local server when validating asset paths, navigation links, or GitHub Pages behavior.

## Coding Style & Naming Conventions

Use 2-space indentation for HTML, CSS, and JavaScript. Prefer semantic HTML, descriptive class names, and page-scoped CSS where styles are not shared. Keep theme-specific CSS under the existing `.dark` body mode pattern. Prefer vanilla JavaScript for new behavior; only use jQuery where interacting with the existing lightbox dependency requires it.

Name new page files consistently, for example `contact.html`, `contact.css`, and `contact.js`.

## Testing Guidelines

No automated test framework is configured. Validate changes manually in a modern browser. Check desktop and mobile widths, dark and light modes, hamburger navigation, scroll animations, image lightbox behavior, and links between pages. When editing assets, verify that images load from `images/` or `logos/` with correct relative paths.

## Commit & Pull Request Guidelines

Recent commits use short descriptive messages such as `responsive edits`, `certifications`, and `Styling edits`. Follow that style: keep commits concise and focused on one change.

For pull requests, include a brief description, list the pages affected, mention manual browser checks performed, and attach screenshots for visible layout or styling changes.
