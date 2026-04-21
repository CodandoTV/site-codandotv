# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CodandoTV** is a single-page portfolio and community hub built with vanilla HTML, CSS, and JavaScript. The site showcases the CodandoTV channel's open-source projects, community creators, and initiatives. It's a static site hosted on GitHub Pages with multi-language support (currently Portuguese Brazilian with i18n infrastructure in place).

## Technology Stack

- **HTML/CSS/JS**: Vanilla frontend, no build tools or frameworks
- **Data Management**: JavaScript data modules (no databases)
- **Hosting**: GitHub Pages with Cloudflare DNS
- **Internationalization**: i18n ready with locale-specific data files

## Project Structure

```
/
├── index.html                          # Main HTML file (all sections in one file)
├── assets/
│   ├── css/
│   │   └── style.css                  # All styles (design system in CSS vars)
│   ├── js/
│   │   ├── app.js                     # Main app logic (DOM rendering, event handlers)
│   │   ├── data/                      # Data modules (creators, content, libraries)
│   │   │   ├── general_data.js        # Text content & translations
│   │   │   ├── content_creators_data.js
│   │   │   ├── library_content_data.js
│   │   │   └── speech_content_data.js
│   │   └── util/                      # Utility functions
│   │       ├── translation_check.js   # Language detection
│   │       ├── langs_section_handler.js # Language tags rendering
│   │       └── speech_tags_handler.js # Video tags rendering
│   ├── images/                        # Creator avatars, library screenshots, icons
│   ├── videos/                        # Hero background, channel intro video
│   └── json/                          # Reserved for future use
├── skill_site_codandotv.md            # Project conventions & design rules
└── CLAUDE.md                          # This file
```

## Key Development Concepts

### Single-File Architecture
- All HTML, styling, and scripts are tightly integrated in `index.html`
- External assets (images, videos) are loaded at runtime
- No build step or compilation required

### Data-Driven Content
Content is separated into **data modules** in `assets/js/data/`. Each module exports a single fetch function that returns an array of objects:

- `fetchGeneralData()` — All text/translations as key-value pairs
- `fetchContentCreatorsData()` — Creator profiles with images and LinkedIn links
- `fetchLibraryContentData()` — Open-source projects with descriptions and media
- `fetchSpeechContentData()` — YouTube video metadata for the "Vídeos úteis" section

### Dynamic Rendering
The `app.js` file is responsible for:
- Loading data modules on page load
- Rendering creators, speech cards, and library content into DOM elements via `.innerHTML`
- Handling library tab switching with `onLibsContentRender()`
- Populating all text content from `general_data.js` (for future multi-language support)

### Internationalization (i18n)
- Text is stored in `general_data.js` with keys like `"home.welcome.title"`
- HTML elements have `id="home_welcome_title"` that match the data keys
- `app.js` populates these on DOMContentLoaded
- Language switching hooks are in place in `translation_check.js` but not yet wired to UI
- The `locales/` folder is reserved for future language files (e.g., `en_US.js`)

### CSS Design System
All colors and spacing are defined as CSS custom properties in `style.css`:

```css
--bg: #080B10                 /* Dark background */
--surface: #0F1318            /* Slightly lighter surface */
--card: #141920               /* Card background */
--primary: #6e35d1            /* Purple, main brand */
--primary-dark: #4c17b9       /* Purple hover state */
--accent: #38b6ff             /* Cyan/turquoise accents */
--accent2: #8c52ff            /* Lilac accents */
--text: #F0F2F5               /* Main text color */
--muted: #8A909C              /* Secondary text color */
```

Sections use `--odd` (cyan) and `--even` (purple) backgrounds to alternate visually.

### Page Sections
1. **Nav** — Fixed header with Codando<TV/> logo and navigation links
2. **#home** — Hero section with badge, title, subtitle, and CTA buttons
3. **#canal** — About the channel (3 paragraphs + embedded video)
4. **#creators** — Featured creator (Rodrigo Vianna) + 3 community creators
5. **#comunidade** — Stats cards + library tabs + 6 YouTube video cards
6. **#iniciativas** — 4 horizontal cards linking to community platforms
7. **Footer** — Logo, social icons, contact link, copyright

## Important Conventions

### HTML Editing Rules
- **No regex substitution** — Always use exact string matching with `str_replace`
- **Verify before editing** — Use `grep` to confirm element IDs and structure
- **Script placement** — Keep all `<script>` tags in `<head>` before closing `</head>` (Cloudflare injects at end of body and can break global functions)
- **Global functions** — Top-level functions (e.g. `onLibsContentRender`) must be outside any closure to be accessible from inline onclick handlers
- **Email links** — Use `onclick="window.location.href='mai'+'lto:email'"` not `href="mailto:"` (Cloudflare obfuscates the latter)
- **Icons** — Use inline SVG, no external icon libraries
- **Video & image fallback** — Include `onerror` handlers that hide broken images and show fallback UI

### Typography
- **Body text**: Sora (weight 400, 600, 700)
- **Display/Logo "Codando"**: Plus Jakarta Sans (weight 800, white)
- **Logo `<TV/>`**: Outfit (weight 900, primary purple)
- **Monospace/badges**: JetBrains Mono

### Component Patterns
- **Creator cards**: Include avatar, name, and role; avatars fallback to initials on error
- **Library tabs**: Render title, language tags, description, and media (video or image)
- **Speech/video cards**: Embed YouTube iframe, show tags, title, and event description
- **Iniciativas cards**: Horizontal layout with info on left, media on right
- **Stat cards**: Simple metric + label; used in stats grid

## Common Development Tasks

### Adding a New Creator
1. Add image to `assets/images/` (e.g. `nome.jpg`)
2. Add object to `contentCreatorsData_ptBR` array in `assets/js/data/content_creators_data.js`
3. Include LinkedIn URL and role; avatar will fallback to initials if image breaks

### Adding a New Library/Project
1. Add media file to `assets/images/libs/` (screenshot or video)
2. Add object to `libraryContentData_ptBR` array in `assets/js/data/library_content_data.js`
3. Set `video: true` for MP4 videos, `false` for images
4. Update tab button in HTML if adding new tab

### Adding a New YouTube Video Card
1. Get the YouTube embed ID (from URL `youtube.com/embed/{ID}`)
2. Add object to `speechContentData_ptBR` array in `assets/js/data/speech_content_data.js`
3. Include title, description, and category tags
4. Tags are automatically colored based on category in `speech_tags_handler.js`

### Adding Translation Support
1. Create language file in `assets/js/data/` (e.g., `general_data_en_US.js`)
2. Add language detection logic to `translation_check.js`
3. Wire up language switcher in HTML (currently not visible in UI)
4. Data modules already support multiple language variants via fetch functions

## Recent Changes (Latest Merge)

The most recent major refactor (#5 — Feature: Internationalization Support) extracted all text content and data from HTML into JavaScript modules:

- **Extracted i18n**: All static text moved to `general_data.js`, HTML now has `id` placeholders
- **Data modules**: Creators, libraries, and speeches now defined as structured data, rendered dynamically
- **Utility functions**: Added `langs_section_handler.js` for language tags, `speech_tags_handler.js` for video tag rendering
- **Dynamic rendering**: `app.js` populates all content on DOMContentLoaded, reducing HTML footprint by ~1300 lines
- **No breaking changes**: Static site behavior unchanged; all links and layouts preserved

## Performance & Hosting Notes

- **No external frameworks** — Page loads instantly with minimal JavaScript
- **Cloudflare DNS** — CNAME points to GitHub Pages; be aware of Cloudflare script injection behaviors
- **Video autoplay** — Hero and library videos use `autoplay muted loop playsinline` for better mobile support
- **Lazy loading** — Images are not lazy-loaded (small image count); iframes load on demand

## Useful Commands

Since this is a static site with no build step:

```bash
# No build command needed — edit and commit directly

# Preview locally (if serving with Python):
python3 -m http.server 8000

# Push changes (commits are auto-deployed to GitHub Pages):
git add .
git commit -m "Message"
git push

# Check what changed:
git diff HEAD~1

# View recent commits:
git log --oneline -10
```

## Debugging Tips

- **Check data fetch functions** — Verify data is being returned correctly from `fetchXxxData()` functions
- **Verify element IDs** — Make sure HTML `id` attributes match keys in `general_data.js`
- **Check for missing images** — Review browser console for 404s; `onerror` handlers will display fallback UI
- **Cloudflare headers** — If styles seem broken, inspect for Cloudflare script injection in `<head>`
- **YouTube iframe errors** — Ensure embed URLs are in the correct format: `https://www.youtube.com/embed/{ID}`

## File Naming & Conventions

- Data modules use suffix `_data.js` and export `fetchXxx()` functions
- Utility modules use prefix `util/` and export helper functions
- All text content uses dot notation keys: `"section.key.detail"`
- Language codes use underscore: `general_data_en_US.js` (not hyphen)
