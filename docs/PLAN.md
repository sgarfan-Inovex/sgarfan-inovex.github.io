# PLAN — Saeed Garfan Digital Business Card

## Milestone 1 — Structure and content
- [x] Check git is installed; set up git, .gitignore, README.md
- [x] index.html with all content from SPEC.md, clear sections, working links (tel, WhatsApp, mailto, website, LinkedIn)
- [x] Minimal styles.css (basic reset only, no design yet)
How to test: open index.html in a browser by double-clicking it. All content is visible and every link opens the right thing.

## Milestone 2 — Black and gold design
- [x] Full design from SPEC.md design notes, mobile-first
- [x] Gold line icons on the buttons and contact list
How to test: open in the browser, then use the browser's mobile view (F12 -> device toolbar) at 375px and 320px. Nothing overflows, buttons are easy to tap, it looks like the card.

## Milestone 3 — Save Contact (vCard)
- [x] saeed-garfan.vcf (vCard 3.0) with all contact fields
- [x] "Save Contact" button that downloads it
How to test: click the button on the computer, open the downloaded file, check every field is correct.

## Milestone 4 — Final polish
- [x] Favicon and link preview image (Open Graph tags, absolute URLs to https://sgarfan-inovex.github.io/)
- [x] Page title and description
- [x] Accessibility check (contrast, alt text, button labels) and quick speed check
How to test: page tab shows the icon and title; review the checklist Claude Code reports.

## Milestone 5 — Publish on GitHub Pages
- [x] Create GitHub repository "sgarfan-inovex.github.io" (public) and push
- [x] Turn on GitHub Pages
How to test: open https://sgarfan-inovex.github.io/ on the phone; test Call, WhatsApp, Email, links, and Save Contact on iPhone and/or Android.

## Milestone 6 — QR code
- [x] Generate qr/qr-code.png (min 1000x1000 px) and qr/qr-code.svg for https://sgarfan-inovex.github.io/
- [x] Dark on light, quiet zone, error correction level M or higher
How to test: scan the QR from the computer screen with 2 different phones; it opens the live site. Print a test copy at card size and scan it.

## Milestone 7 — Fixes from the first review (2026-11-03)
- [x] Removed the detailed "About INOVEX" section; added a short About bio
- [x] Self-hosted Montserrat font (no Google Fonts)
- [x] Smallest text 12px; footer year updates automatically
- [x] vCard: LinkedIn line for Android (X-SOCIALPROFILE)
- [x] README: "How to update contact info"; _config.yml keeps .md files off the live site
How to test: open the live site; the About bio shows; https://sgarfan-inovex.github.io/SPEC.md shows a 404 page.

## Milestone 8 — One contact form, Arabic page, Share, logo, 404 (2026-11-03)
- [x] Removed the icon buttons grid; each contact method now appears once (contact list)
- [x] Save Contact moved under the bio, visible without scrolling on 375x667
- [x] Bio shortened (removed the Lean Six Sigma part) on both pages
- [x] Official logo image assets/logo.png in the header (replaces the text wordmark and tagline)
- [x] Share button (phone share menu / copy link on computer) in script.js
- [x] Arabic page ar.html (right-to-left, Cairo font) and language links
- [x] Custom 404.html
- [x] SPEC.md, CLAUDE.md and README.md updated
How to test: on a phone, open the site: Save Contact is visible without scrolling; tap Share; tap "العربية" and check the Arabic page; open https://sgarfan-inovex.github.io/test-wrong-link and check the 404 page.

## Milestone 8.1 — Small fix (2026-11-03)
- [x] Arabic page: the "English" link points to index.html, so it also works when the file is opened from the computer
How to test: double-click ar.html, tap "English": the English page opens (not a folder list).

## Milestone 9 — Organize files into folders (2026-11-03)
- [x] Moved files with git mv (history kept): docs/ (SPEC.md, PLAN.md), contact/ (saeed-garfan.vcf), css/ (styles.css), js/ (script.js), assets/images/ (logo, link preview image), assets/icons/ (favicons)
- [x] Kept in the root folder: index.html (printed QR code), ar.html, 404.html, CLAUDE.md, README.md, config files
- [x] Updated all paths in index.html, ar.html, 404.html and css/styles.css (fonts)
- [x] _config.yml excludes docs/; CLAUDE.md, README.md (new "Folder map") and docs/SPEC.md updated
How to test: open the live site and the Arabic page: logo, fonts, favicon and Save Contact all work; https://sgarfan-inovex.github.io/docs/SPEC.md shows the 404 page.

## Later
- [ ] Replace assets/images/logo.png with the higher-quality logo file from the marketing team (same file name)
