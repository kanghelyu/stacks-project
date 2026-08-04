# Stacks Project — Dark Mode

A dark mode theme for The Stacks Project website.

## Files

| File | Purpose |
|------|---------|
| `dark-mode.css` | Complete dark mode stylesheet. All rules are scoped under `.dark` class — add `class="dark"` to `<html>` to activate. |
| `dark-mode.js` | Adds a 🌙/☀️ toggle button to the navigation bar, persists preference in localStorage, defaults to system `prefers-color-scheme`. |

## Integration

Add to the website template:

```html
<!-- Dark mode stylesheet (after main style.css) -->
<link rel="stylesheet" type="text/css" href="/static/css/dark-mode.css">

<!-- Dark mode toggle script -->
<script type="text/javascript" src="/static/js/dark-mode.js"></script>
```

### Server-side deployment

1. Copy `dark-mode.css` → `web/static/css/dark-mode.css`
2. Copy `dark-mode.js` → `web/static/js/dark-mode.js`
3. Add the CSS link in `<head>` of the plastex HTML template
4. Add the JS script reference before `</body>`

### Quick test (browser console)

Open any Stacks Project page and paste:

```js
var s = document.createElement('script');
s.src = '/static/js/dark-mode.js';
document.body.appendChild(s);
var l = document.createElement('link');
l.rel = 'stylesheet';
l.href = '/static/css/dark-mode.css';
document.head.appendChild(l);
```

### Bookmarklet (no server integration needed)

Drag this to your bookmarks bar:

```
javascript:(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/kanghelyu/kanghelyu.github.io@main/stacks-dark/dark-mode.js';document.body.appendChild(s);var l=document.createElement('link');l.rel='stylesheet';l.href='https://cdn.jsdelivr.net/gh/kanghelyu/kanghelyu.github.io@main/stacks-dark/dark-mode.css';document.head.appendChild(l)})();
```

Click the bookmark on any Stacks Project page to toggle dark mode.

## Features

- All page types: content, search, tags, browse, table of contents, index, bibliography, comments
- Toggle button in the top-right navbar (next to bibliography / blog links)
- State persists across pages via localStorage
- Respects system `prefers-color-scheme: dark` on first visit
- Keyboard shortcut: `Ctrl/Cmd + Shift + D`
- MathJax formulas stay readable
- BootstrapToggle component also themed

## Color Palette

Dark mode uses a blueish-navy palette designed for comfortable long-form reading:

- Page background: `#1a1a2e`
- Navigation bars: `#16213e` / `#0f3460`
- Text: `#e0e0e0`
- Links: `#63b3ed`
- Cards / containers: `#1e2a45`
- Borders: `#2d3748`