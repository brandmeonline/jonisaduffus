# Brannan Shore

A modern, fully static marketing site for **Brannan Shore** — a curated collection
of coastal homes and seaside escapes. Built as an original re-imagining of
`brannanshore.com`, with two new location sub-sections (**Outer Banks** and
**Wildwood**) shipped as standalone "opening soon" splash pages designed to run on
their own subdomains.

> Note: the original `brannanshore.com` could not be fetched from the build
> environment (egress policy block), so this is an original interpretation built
> around the brand and its two flagship beach destinations — not a byte-for-byte copy.

## Structure

```
.
├── index.html                # Main Brannan Shore site (apex: brannanshore.com)
├── outer-banks/index.html    # Splash → outerbanks.brannanshore.com
├── wildwood/index.html       # Splash → wildwood.brannanshore.com
├── assets/
│   ├── css/styles.css        # Main site styles
│   ├── css/splash.css        # Shared splash-page styles (themed per location)
│   ├── js/main.js            # Nav, scroll reveals, counters, forms
│   └── js/splash.js          # Countdown + signup for splash pages
├── vercel.json               # Host-based subdomain routing (Vercel)
└── netlify.toml              # Same routing for Netlify
```

No build step, no framework, no dependencies — open `index.html` and it runs.
Fonts load from Google Fonts; all imagery is inline SVG / CSS (nothing to download).

## Local preview

```bash
# any static server works
python3 -m http.server 8000
# then open:
#   http://localhost:8000/              -> main site
#   http://localhost:8000/outer-banks/  -> Outer Banks splash
#   http://localhost:8000/wildwood/     -> Wildwood splash
```

## Subdomains

The splash pages work either as path sub-sections (`/outer-banks/`, `/wildwood/`)
**or** as true subdomains. Shared assets are referenced root-absolute (`/assets/...`)
so they resolve on every host.

To wire up the subdomains:

1. Add DNS records (CNAME) for `outerbanks` and `wildwood` pointing at your host.
2. Attach both subdomains to the same deployment/project as the apex.
3. Routing is already handled by `vercel.json` (or `netlify.toml`):
   - `outerbanks.brannanshore.com/` → `/outer-banks/index.html`
   - `wildwood.brannanshore.com/`   → `/wildwood/index.html`

When the full collections are ready, replace each splash `index.html` with the real
location pages — the routing stays the same.

## Design notes

- **Palette:** deep ocean navy, warm sand, seafoam, sunset coral.
- **Type:** Cormorant Garamond (display) + Manrope (UI).
- **Motion:** animated SVG waves/sun, scroll-reveal, animated stat counters, live
  launch countdowns. All motion respects `prefers-reduced-motion`.
- **Responsive** down to mobile with an off-canvas menu.
