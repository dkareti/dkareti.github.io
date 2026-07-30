The website is:
https://dkareti.github.io

Since this is a plain static site (HTML/CSS/JS, no build step), the simplest option is Python's built-in HTTP server — no installs needed if you already have Python.

**From your repo's root folder (where `index.html` lives):**

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Navigate to Projects the normal way (clicking the nav link) rather than typing the sub-path directly, just to make sure relative links behave the same as they would live.

If you only have Python 2 for some reason (unlikely, but just in case): `python -m SimpleHTTPServer 8000`

**A couple of things to check once it's running:**
- Hard-refresh the page (Cmd+Shift+R on Mac / Ctrl+Shift+R on Windows) — browsers aggressively cache static JS/HTML, so a normal refresh might still show the old version.
- Open DevTools → Console tab while on the Projects page, to confirm there are no JS errors preventing `renderProjects()` from running.

**Alternative if you use VS Code:** install the **"Live Server"** extension, then right-click `index.html` → "Open with Live Server." It does the same thing but also auto-refreshes the page whenever you save a file, which is convenient while you're iterating.

**One more sanity check specific to your fix:** since your project cards link out to Vimeo/YouTube demos and Render-hosted live apps, use the local server to confirm those links still resolve correctly (relative paths like `../demos/iphone_photo_selector_demo.mov` can sometimes break if you're not serving from the exact right root folder) — a `python3 -m http.server` from the repo root should get this right as long as your file structure hasn't changed.

Once it looks good locally, commit and push to GitHub Pages as usual, then give it a minute or two — GitHub Pages caches/rebuilds slightly slower than a local server.