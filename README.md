# FIT12 — 12-Week Fitness Tracker 💪

A minimalist, mobile-friendly **Progressive Web App (PWA)** for planning workouts, viewing simple exercise demonstrations, logging meals and tracking fitness progress over 12 weeks.

## Highlights

- 🏋️ 12-week home + gym workout schedule
- 🖼️ Illustrated two-position exercise demonstrations with English instructions
- 🕑 Exercise sets, repetitions, rest timer and daily checklists
- 🥗 Malaysian-style example meal plans and protein estimates
- 📈 Weight and body measurement tracker
- 📱 Responsive design and offline support after the first online visit
- 🔒 Local-first progress storage, with JSON export and import

## Live demo

After you enable GitHub Pages, add your actual published URL here.

## Run locally

Open `index.html` in a browser to view the interface. For the installable PWA and offline caching, serve this folder from **HTTPS** (such as GitHub Pages) or use `localhost` for development.

## Publish with GitHub Pages

1. Create a new public repository called `fit12-fitness-tracker` on GitHub.
2. Upload **all files and folders inside this ZIP**, keeping `index.html` at the repository root. Do not upload the ZIP as a single file.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/(root)`, then press **Save**.
6. When GitHub reports that the site is live, open its URL on your phone using Chrome.
7. Choose **⋮ → Add to Home screen / Install app**, if offered by the browser.

## Technology

HTML, CSS, vanilla JavaScript, SVG illustrations, Web App Manifest and Service Worker. No backend or paid database required.

## Privacy and safety

**The repository and GitHub Pages site are public. This public portfolio version uses example starting weights (80 kg to 75 kg), which can be changed in Settings.** Do not commit private health records, progress exports, secrets, credentials or personal contact details. Fitness progress is stored in the visitor's browser on their device, not in GitHub. Data does not sync between devices; export a backup before clearing browser data. Browser storage availability varies.

This is an educational personal fitness tool, not medical advice. The app includes conservative training restrictions and requires a clinician's clearance before arm-loading exercises when relevant symptoms are present. Nutrition estimates are approximations.

## Development note

Built as an **AI-assisted learning and portfolio project**. The project owner should review the generated code, test the app on real devices, document fixes and describe their contributions accurately when sharing it as a portfolio item.
