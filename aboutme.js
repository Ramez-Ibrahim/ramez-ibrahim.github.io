// =================================================================
// About Me Page - Specific JavaScript
// =================================================================

// --- Robust scroll prevention for mobile menu ---
// --- GitHub language colors used by the card renderers ---

const githubLanguageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  PHP: '#4F5D95',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Go: '#00ADD8',
  Rust: '#dea584',
  Shell: '#89e051',
  Lua: '#000080',
  Dart: '#00B4AB'
};

const languageIcons = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  Ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg',
  Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
  Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
  Go: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  Rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
  Shell: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg',
  Lua: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lua/lua-original.svg',
  Dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg'
};

// --- Shared fetch of the generated repos data file ---
function fetchReposData() {
  return fetch('data/github-repos.json').then(response => {
    if (!response.ok) throw new Error(`Repos data returned ${response.status}`);
    return response.json();
  });
}

function renderLanguageBars(totals) {
  const container = document.getElementById('langs-bars');
  const grandTotal = Object.values(totals).reduce((sum, bytes) => sum + bytes, 0);
  const sorted = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  if (sorted.length === 0) {
    container.innerHTML = '<p class="langs-status">No language data available yet.</p>';
    return;
  }

  container.innerHTML = '';

  const iconsContainer = document.getElementById('langs-icons');
  if (iconsContainer) {
    iconsContainer.innerHTML = '';
    sorted.forEach(([lang]) => {
      const src = languageIcons[lang];
      if (!src) return;
      const icon = document.createElement('img');
      icon.className = 'langs-icon';
      icon.src = src;
      icon.alt = `${lang} icon`;
      icon.title = lang;
      iconsContainer.appendChild(icon);
    });
  }

  sorted.forEach(([lang, bytes]) => {
    const pct = grandTotal > 0 ? (bytes / grandTotal) * 100 : 0;
    const color = githubLanguageColors[lang] || '#8b949e';

    const row = document.createElement('div');
    row.className = 'langs-bar-row';

    const dot = document.createElement('span');
    dot.className = 'langs-bar-dot';
    dot.style.background = color;

    const label = document.createElement('span');
    label.className = 'langs-bar-label';
    label.textContent = lang;

    const track = document.createElement('div');
    track.className = 'langs-bar';

    const fill = document.createElement('div');
    fill.className = 'langs-bar-fill';
    fill.style.width = `${Math.max(pct, 2)}%`;
    fill.style.background = color;

    const value = document.createElement('span');
    value.className = 'langs-bar-value';
    value.textContent = pct >= 1 ? `${pct.toFixed(0)}%` : '<1%';

    track.appendChild(fill);
    row.appendChild(dot);
    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(value);
    container.appendChild(row);
  });
}

// --- Render Top Languages from the generated data file ---
function renderTopLanguages() {
  const container = document.getElementById('langs-bars');
  if (!container) return;

  fetchReposData()
    .then(data => {
      if (!data || !data.languageTotals || Object.keys(data.languageTotals).length === 0) {
        throw new Error('No language data available');
      }
      renderLanguageBars(data.languageTotals);
    })
    .catch(err => {
      console.error('Failed to load top languages:', err);
      container.innerHTML = '<p class="langs-status">Could not load top languages.</p>';
    });
}

// --- Animate a number counting up when its element enters the viewport ---
function animateStatCount(element, target) {
  const duration = 1200;

  function tick(start, now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(now => tick(start, now));
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        element.textContent = '0';
        requestAnimationFrame(now => tick(now, now));
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(element);
}

// --- Render Contribution Total & Heatmap from data/github-contributions.json ---
function renderContributions() {
  const statEl = document.getElementById('stat-contributions');
  const totalEl = document.getElementById('contribution-total');
  const grid = document.getElementById('heatmap-grid');
  if (!statEl || !totalEl || !grid) return;

  fetch('data/github-contributions.json')
    .then(response => {
      if (!response.ok) throw new Error(`Contributions data returned ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (!data || !Array.isArray(data.weeks) || data.weeks.length === 0) {
        throw new Error('No contribution data available');
      }

      const lifetime = data.lifetimeContributions !== undefined ? data.lifetimeContributions : data.totalContributions;
      const lastYear = data.lastYearTotalContributions !== undefined ? data.lastYearTotalContributions : data.totalContributions;

      totalEl.textContent = `${lastYear.toLocaleString()} contributions in the last year`;
      animateStatCount(statEl, lifetime);

      // Month label row aligned to week boundaries
      const labelsRow = document.createElement('div');
      labelsRow.className = 'heatmap-months';
      let currentMonth = null;
      data.weeks.forEach(week => {
        const day = week.find(d => d && d.date) || week[0];
        if (!day) return;
        const month = new Date(day.date + 'T00:00:00').toLocaleString('en-US', { month: 'short' });
        if (month !== currentMonth) {
          const label = document.createElement('span');
          label.className = 'heatmap-month';
          label.textContent = month;
          label.style.flexGrow = 1;
          labelsRow.appendChild(label);
          currentMonth = month;
        } else {
          const last = labelsRow.lastElementChild;
          last.style.flexGrow = parseFloat(last.style.flexGrow || 1) + 1;
        }
      });

      // Week columns of day cells
      const weeksRow = document.createElement('div');
      weeksRow.className = 'heatmap-weeks';
      data.weeks.forEach(week => {
        const col = document.createElement('div');
        col.className = 'heatmap-week';
        (week || []).forEach(day => {
          const cell = document.createElement('span');
          const level = Math.min(Math.max(day.level, 0), 4);
          cell.className = `heatmap-day heatmap-day-${level}`;
          const date = new Date(day.date + 'T00:00:00');
          const dateLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
          cell.title = day.count > 0 ? `${day.count} contributions on ${dateLabel}` : `No contributions on ${dateLabel}`;
          col.appendChild(cell);
        });
        weeksRow.appendChild(col);
      });

      grid.innerHTML = '';
      grid.appendChild(labelsRow);
      grid.appendChild(weeksRow);
    })
    .catch(err => {
      console.error('Failed to load contributions:', err);
      statEl.textContent = '—';
      totalEl.textContent = '';
      grid.innerHTML = '<p class="langs-status">Could not load contribution data.</p>';
    });
}

// --- Render Featured Repositories from the generated data file ---
function renderFeaturedRepos() {
  const container = document.getElementById('repos-list');
  if (!container) return;

  fetchReposData()
    .then(data => {
      if (!data || !Array.isArray(data.repos) || data.repos.length === 0) {
        throw new Error('No repositories found');
      }

      const featured = data.repos
        .sort((a, b) =>
          (b.stargazers_count - a.stargazers_count) || (new Date(b.pushed_at) - new Date(a.pushed_at))
        )
        .slice(0, 3);

      container.innerHTML = '';
      featured.forEach(repo => {
        const item = document.createElement('div');
        item.className = 'repo-item';

        const name = document.createElement('a');
        name.className = 'repo-name';
        name.href = repo.html_url;
        name.target = '_blank';
        name.rel = 'noopener noreferrer';

        const icon = document.createElement('i');
        icon.className = 'fa-solid fa-folder';
        icon.setAttribute('aria-hidden', 'true');
        name.appendChild(icon);
        name.appendChild(document.createTextNode(repo.name));

        const desc = document.createElement('p');
        desc.className = 'repo-desc';
        desc.textContent = repo.description || 'No description provided.';

        const meta = document.createElement('div');
        meta.className = 'repo-meta';
        if (repo.language) {
          const lang = document.createElement('span');
          lang.className = 'repo-lang';
          const dot = document.createElement('span');
          dot.className = 'repo-lang-dot';
          dot.style.background = githubLanguageColors[repo.language] || '#8b949e';
          lang.appendChild(dot);
          lang.appendChild(document.createTextNode(repo.language));
          meta.appendChild(lang);
        }
        const stars = document.createElement('span');
        stars.className = 'repo-stars';
        stars.textContent = `★ ${repo.stargazers_count}`;
        meta.appendChild(stars);

        item.appendChild(name);
        item.appendChild(desc);
        item.appendChild(meta);
        container.appendChild(item);
      });
    })
    .catch(err => {
      console.error('Failed to load featured repos:', err);
      container.innerHTML = '<p class="langs-status">Could not load repositories.</p>';
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

  // Render top languages from the generated data file
  renderTopLanguages();

  // Render contribution total + heatmap from the generated data file
  renderContributions();

  // Render featured repositories from the generated data file
  renderFeaturedRepos();
});