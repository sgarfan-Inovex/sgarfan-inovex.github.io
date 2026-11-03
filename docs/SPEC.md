# SPEC — Saeed Garfan Digital Business Card

## Goal
A one-page, mobile-first contact website for Saeed Garfan (Sales Engineer, INOVEX Group), in English and Arabic.
People open it by scanning a QR code on his printed business card, then contact him or save his contact in one tap.

## Users
- Customers, partners and contacts who scan the QR code, mostly on phones (iPhone and Android).
- Saeed (owner) updates content only through Claude Code. No admin panel.

## Content — English page (index.html)
- Logo: official INOVEX logo image `assets/images/logo.png` (it already includes "GROUP" and the tagline "INSPIRED BY INNOVATION"). Use the image exactly as supplied; do not redraw or edit it. A higher-quality file from the marketing team will later replace it with the same file name.
- Name: SAEED GARFAN
- Title: Sales Engineer
- Company: INOVEX Group
- About (short bio, shown above Save Contact):
  - "Sales Engineer at INOVEX Group in Riyadh, helping factories choose the right coating equipment for their production lines. Industrial Engineering graduate."
  - "INOVEX Group provides industrial coating solutions across Saudi Arabia and the GCC."
  - No detailed company claims (partners, dealerships, services); the company website link covers those.
- Phone: +966 57 957 4240  (tel:+966579574240)
- WhatsApp: same number  (https://wa.me/966579574240)
- Email: s.garfan@inovex-group.com
- Company website: https://www.inovex-group.com/
- LinkedIn: https://www.linkedin.com/in/saeed-garfan-38985a441
- Location: Riyadh, Saudi Arabia (text only, no map link)

## Content — Arabic page (ar.html)
Same content and order as the English page, as a faithful Arabic version:
- Name: سعيد جرفان — Title: مهندس مبيعات — Company: مجموعة إنوفكس
- About: "مهندس مبيعات في مجموعة إنوفكس بالرياض، أساعد المصانع على اختيار معدات الطلاء المناسبة لخطوط إنتاجها. خريج هندسة صناعية." / "تقدّم مجموعة إنوفكس حلول الطلاء الصناعي في المملكة العربية السعودية ودول الخليج."
- Labels: نبذة، حفظ جهة الاتصال، مشاركة، التواصل، الهاتف، واتساب، البريد الإلكتروني، الموقع الإلكتروني، لينكدإن، المدينة (value: الرياض، المملكة العربية السعودية)
- The logo image stays the same (English brand). Phone numbers, email and links stay left-to-right.

## Features
1. English page (index.html) and Arabic page (ar.html), with a language link at the top of each ("العربية" / "English").
2. Each contact method appears ONCE, as a tappable row (icon + label + value): Phone, WhatsApp, Email, Website, LinkedIn, Location. External links open in a new tab.
3. "Save Contact" button that downloads a vCard file (contact/saeed-garfan.vcf, vCard 3.0) with name, title, company, phone, email, website, LinkedIn and city. Both pages use the same file.
4. "Share" button: opens the phone's share menu; on a computer it copies the page link and shows "Link copied" / "تم نسخ الرابط".
5. Black and gold design matching the printed business card.
6. Mobile-first layout that works from 320px wide phones up to desktop.
7. Link preview (Open Graph tags) when the link is shared on WhatsApp or LinkedIn, plus a favicon.
8. Custom 404.html page (same design, English + Arabic, buttons back to both pages).
9. Published on GitHub Pages at https://sgarfan-inovex.github.io/ (Arabic: https://sgarfan-inovex.github.io/ar.html)
10. QR code files pointing to the English page: qr/qr-code.png (at least 1000x1000 px) and qr/qr-code.svg, dark code on a light background, with a quiet zone (white margin).

## First screen rule
On a 375x667 phone screen, the Save Contact button must be fully visible without scrolling, on both pages. Re-check this after any content or layout change. (On very small phones, 320x568, a short scroll is accepted.)

## Out of scope (later)
Higher-quality logo file (waiting for the marketing team), personal photo, CV PDF, visit counter, custom domain, contact form, admin panel, any backend or database.

## Page layout (top to bottom, both pages)
Language link -> Header (logo image) -> Identity (name, title, company) -> About (short bio) -> Save Contact + Share -> Contact details list -> Footer (© year Saeed Garfan / سعيد جرفان, year updated automatically).

## Data stored
None. No cookies, no tracking, no forms, no personal data collected from visitors.

## Technology
Plain HTML + CSS, plus one tiny script (js/script.js: footer year + Share button). No frameworks, no build step.
Files (see the folder map in README.md): index.html, ar.html, 404.html in the root folder; docs/ (SPEC.md, PLAN.md), contact/ (saeed-garfan.vcf), css/ (styles.css), js/ (script.js), assets/images/ (logo, preview image), assets/icons/ (favicons), assets/fonts/, qr/; _config.yml keeps docs/, CLAUDE.md and README.md off the live site.

## Design notes
- Background near-black (#0B0B0B to #151515). Gold accent around #C9A24A with a soft gradient to #E6C77A. Text white/silver (#EDEDED, #BFBFBF).
- Thin gold divider lines and a diagonal gold accent, like the printed card.
- Fonts, self-hosted in assets/fonts/ (no Google Fonts link, so visitors are not sent to Google): Montserrat for Latin text, Cairo for Arabic text. Uppercase letter-spaced labels in English; no letter-spacing in Arabic (it breaks joined letters).
- The logo image edges are faded into the page with CSS only; the image file is not edited.
- Smallest text size: 0.75rem (12px).
- Simple gold line icons as inline SVG (no icon library).
- Large tap targets (at least 44px high) and good text contrast.
- Light and fast: no heavy images.
