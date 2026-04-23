# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**CodandoTV** is a single-page portfolio and community hub built with vanilla HTML, CSS, and JavaScript, hosted on GitHub Pages with Cloudflare DNS.

## Stack

- Vanilla HTML/CSS/JS — no build tools or frameworks
- Static site, no compilation needed
- i18n infrastructure in place (pt-BR active)

## File Structure

```
/
├── index.html                        # Single-page HTML (all sections)
├── assets/
│   ├── css/style.css                 # Design system (CSS custom properties)
│   ├── js/
│   │   ├── app.js                    # Rendering logic and event handlers
│   │   ├── data/                     # Content modules (general, creators, libs, speech)
│   │   └── util/                     # Helper functions (i18n, tags)
│   ├── images/                       # Avatars, lib screenshots
│   └── videos/                       # Hero background, channel intro
├── skill_site_codandotv.md           # Full development reference
└── CLAUDE.md                         # This file
```

## Local Development

```bash
python3 -m http.server 8080
# Open http://localhost:8080/index.html
```

## Full Reference

All conventions, patterns, data schemas, CSS decisions, debugging tips, and step-by-step tasks are documented in `skill_site_codandotv.md`.
