# Saeed Garfan — Digital Business Card

A mobile-first contact website for Saeed Garfan (Sales Engineer, INOVEX Group), in English and Arabic.
It opens from the QR code on the printed business card.

Live site: https://sgarfan-inovex.github.io/ (Arabic: https://sgarfan-inovex.github.io/ar.html)

## Files
- `index.html` — the English page (the QR code opens this one)
- `ar.html` — the Arabic page (right-to-left)
- `404.html` — page shown for wrong links
- `styles.css` — the styles for all pages
- `script.js` — tiny script: footer year and the Share button
- `saeed-garfan.vcf` — contact card for the Save Contact button (used by both pages)
- `assets/logo.png` — official INOVEX logo image (replace later with a higher-quality file, same name)
- `assets/` — favicon, home-screen icon and link preview image
- `assets/fonts/` — Montserrat (Latin) and Cairo (Arabic) font files, self-hosted, with their licenses `OFL.txt` and `OFL-Cairo.txt`
- `qr/` — QR code to the live site (`qr-code.svg` for print, `qr-code.png` 1025x1025 px)
- `_config.yml` — tells GitHub Pages not to publish the .md files on the live site
- `SPEC.md` — what the site must contain
- `PLAN.md` — milestones and progress
- `CLAUDE.md` — rules for Claude Code

## View locally
Double-click `index.html` (or `ar.html`) to open it in a browser. No build step needed.
Note: `404.html` uses paths that start with "/", so it only looks right on the live site.

## How to update contact info
The same details appear in several places. Change ALL of them (on BOTH pages), then test and commit.

| Detail | Where to change it |
|---|---|
| Phone / WhatsApp | `index.html` and `ar.html`: Phone row and WhatsApp row (link + shown text). `saeed-garfan.vcf`: `TEL` line. `SPEC.md`: Phone and WhatsApp lines |
| Email | `index.html` and `ar.html`: Email row (link + shown text). `saeed-garfan.vcf`: `EMAIL` line. `SPEC.md`: Email line |
| Company website | `index.html` and `ar.html`: Website row (link + shown text). `saeed-garfan.vcf`: `URL` line. `SPEC.md` |
| LinkedIn | `index.html` and `ar.html`: LinkedIn row (link + shown text). `saeed-garfan.vcf`: `item1.URL` and `X-SOCIALPROFILE` lines. `SPEC.md` |
| Name / title / company | `index.html` and `ar.html`: `<title>`, description and Open Graph tags in `<head>`, Identity section, About text, footer. `404.html`: `<title>`. `saeed-garfan.vcf`: `N`, `FN`, `TITLE`, `ORG`. `SPEC.md`. The link preview image `assets/og-image.png` also shows the name and title |
| Bio (About) | `index.html` and `ar.html`: About section. `SPEC.md`: About lines |
| Logo | Replace `assets/logo.png` with the new file, same name. If its size is different, update `width` and `height` on the `<img class="logo-img">` tag in `index.html`, `ar.html` and `404.html` |
| Site address | `data-url` on the Share button in `index.html` and `ar.html`, canonical / hreflang / Open Graph links in both pages, and the QR code files in `qr/` |

Quick check after any change: search the project for the old value (for example the old phone number) and make sure nothing is left. Then check on a 375x667 phone view that Save Contact is still visible without scrolling.
Note: the QR code does not need to change unless the site address changes.
