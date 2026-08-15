# Repository Guidelines

Static personal portfolio site (HTML + CSS + vanilla JS). No build step or package manager. Deploys to GitHub Pages from `main` — pushes to main go live.

## Project Structure

- `index.*`, `projects.*`, `certifications.*`, `aboutme.*`: one feature per top-level page set.
- `styles.css` (shared styling) and `scripts.js` (shared behavior) are loaded by every page.
- `images/`: site assets and screenshots. `logos/`: technology logos.
- `loading.html` + `loadings.css`: standalone animated loading page, not part of the main nav.
- `lightbox.css` + `lightbox-plus-jquery.js`: bundled jQuery + lightbox plugin, used only by `certifications.html`. `lightbox.js` is an empty leftover — ignore it.
- `GEMINI.md`: more detailed companion doc (features, TODOs).

Keep new page-specific code next to its page; put reusable behavior in `scripts.js` and reusable visual rules in `styles.css`.

## Commands

- No package manager or build. Serve locally with `python -m http.server 8000`, or just open `index.html`.
- Use a local server when validating asset paths, navigation links, or GitHub Pages behavior.

## Key conventions & gotchas

- Theme: `scripts.js` toggles `body.dark`, persisted in `localStorage["mode"]`. Put dark-mode CSS under `.dark` (or `html.dark, body.dark` in `loadings.css`). Do not copy the stale `dark-mode` class that `loading.html` still carries.
- Every page needs a `<div id="preloader">` and a `scripts.js` include; scripts.js owns navigation, hamburger menu, theme, preloader, and scroll animations. Page-specific JS is loaded *before* scripts.js.
- The typewriter effect exists twice (`initTypewriter` in scripts.js and a copy in projects.js); don't add a third implementation.
- `certifications.html` loads `index.css`, `projects.css`, and `certifications.css` together, so page CSS is not strictly isolated.
- Font Awesome is pulled from a CDN in each page's `<head>`; icons require network access.

## Coding Style

Use 2-space indentation. Prefer semantic HTML, descriptive class names, and page-scoped CSS where styles are not shared. Prefer vanilla JS; jQuery is only needed for the existing lightbox. Name new page files consistently, e.g. `contact.html`, `contact.css`, `contact.js`.

## Testing

No automated test framework. Validate manually in a modern browser: desktop and mobile widths, dark and light modes, hamburger navigation, scroll animations, image lightbox behavior, and links between pages. Verify new images load from `images/` or `logos/` with correct relative paths.

## Commits & PRs

Keep commits short and focused on one change (repo style: `header`, `responsive`, `certifications`, `fix: ...`). For PRs, include a brief description, list the pages affected, mention manual browser checks performed, and attach screenshots for visible layout or styling changes.
