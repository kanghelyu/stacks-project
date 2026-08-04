/* ============================================================
   Stacks Project — Dark Mode Toggle
   ============================================================
   Features:
     • Adds a ☀/🌙 toggle button in the top-right nav bar
     • Persists preference in localStorage
     • Respects system prefers-color-scheme as default
     • Works on every page of the Stacks Project
   ============================================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'stacks-dark-mode';
  const DARK_CLASS  = 'dark';

  /* ----- helpers ------------------------------------------------------ */

  function getStored () {
    try { return localStorage.getItem(STORAGE_KEY); } catch (_) { return null; }
  }

  function setStored (val) {
    try { localStorage.setItem(STORAGE_KEY, val); } catch (_) { /* noop */ }
  }

  function systemPrefersDark () {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function isDark () {
    return document.documentElement.classList.contains(DARK_CLASS);
  }

  function applyDark (dark) {
    document.documentElement.classList.toggle(DARK_CLASS, dark);
    // Update checkbox state if the toggle element exists
    const cb = document.getElementById('dark-mode-checkbox');
    if (cb) cb.checked = dark;
  }

  /* ----- build the toggle button --------------------------------------- */

  function injectToggle () {
    // locate the nav where we want to put the toggle
    const nav = document.querySelector('ul#quicklinks');
    if (!nav) return;

    // avoid double injection
    if (document.getElementById('dark-mode-toggle')) return;

    const li = document.createElement('li');
    li.id = 'dark-mode-toggle';

    const label = document.createElement('label');
    label.className = 'dark-mode-toggle';
    label.title = 'Toggle dark mode';

    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.id  = 'dark-mode-checkbox';
    cb.checked = isDark();
    cb.addEventListener('change', function () {
      applyDark(cb.checked);
      setStored(cb.checked ? '1' : '0');
    });

    const span = document.createElement('span');
    span.className = 'dm-label';

    // Update label emoji based on state
    function updateLabel () {
      span.textContent = isDark() ? '☀️' : '🌙';
    }
    updateLabel();

    // Also update label when state changes externally
    cb.addEventListener('change', updateLabel);

    label.appendChild(cb);
    label.appendChild(span);
    li.appendChild(label);
    nav.appendChild(li);
  }

  /* ----- apply stored or system preference on first load --------------- */

  function init () {
    const stored = getStored();

    if (stored !== null) {
      // Stored preference takes priority
      applyDark(stored === '1');
    } else {
      // Fall back to system preference
      applyDark(systemPrefersDark());
    }

    // Inject the toggle button
    injectToggle();

    // Listen for system theme changes while the page is open
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', function (e) {
          // Only apply if user hasn't explicitly chosen a preference
          if (getStored() === null) {
            applyDark(e.matches);
          }
        });
    }
  }

  /* ----- guard: run only once ----------------------------------------- */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();