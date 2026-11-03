# Rules for Claude Code in this project

## Always
- Read SPEC.md and PLAN.md before starting any work.
- Work on ONE milestone at a time (the first unchecked one in PLAN.md, or the one I name).
- Plan first: explain what you will do and which files you will create or change, then WAIT for my approval before editing any file.
- Explain each change in simple Arabic (I am a beginner). Code, file contents and commit messages stay in English.
- Never delete files or folders without asking me first.
- After finishing a milestone: test what can be tested, tell me exactly how to test it myself, update the checkboxes in PLAN.md, then make a git commit with a clear English message.
- If something fails twice, stop and explain the problem in simple Arabic instead of trying more fixes.

## Project rules
- Plain HTML + CSS only (tiny JavaScript only if really needed, kept in script.js). No frameworks, no npm packages in the website, no build step.
- Website text is in English (index.html) and Arabic (ar.html). Both pages must show the same content; the Arabic is a faithful translation of the English. Content must match SPEC.md exactly; do not invent extra text, numbers or claims about the company.
- Any change to content or layout must be made on BOTH pages.
- Mobile-first. Test layouts at 320px and 375px widths. Save Contact must stay visible without scrolling on a 375x667 screen (see "First screen rule" in SPEC.md).
- Use the logo image assets/logo.png exactly as supplied; never redraw or edit it.
- This project has no secrets. If a secret is ever needed, it goes only in a .env file listed in .gitignore and is never printed.
- Keep files small and well organized: index.html, ar.html, 404.html, styles.css, script.js, saeed-garfan.vcf, assets/, qr/.
- Record every change in PLAN.md as a milestone, even small fixes.
