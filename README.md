# Portfolio Site (static)

This repository contains a static portfolio website scaffold inspired by https://brittanychiang.com/.

How to run locally

- Open `index.html` in your browser, or run a tiny static server from the project root (recommended):

```bash
# Python 3
python3 -m http.server 8000

# then open http://localhost:8000
```

What I added

- `index.html` — main site
- `styles.css` — styles
- `script.js` — tiny script to set year
- `assets/avatar.svg` — placeholder avatar
- `.github/workflows/deploy.yml` — optional GitHub Actions workflow to deploy to GitHub Pages

Dynamic data

- `data/site.json` — site content (name, subtitle, about, email, projects). Edit this file to update the site without touching HTML.
- `CNAME` — placeholder for a custom domain (change to your domain before publishing).

Next steps

- Replace text, images, and email in `index.html` with your own.
To update content without editing HTML, edit `data/site.json`. The page will load the JSON and render the content automatically.
- If you want an exact pixel-perfect clone or a React/Next port, tell me and I will continue.
If you want an exact pixel-perfect clone or a React/Next port, tell me and I will continue.
