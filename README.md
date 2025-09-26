# Academic Homepage (Starter)

A clean, responsive academic homepage scaffold you can deploy to GitHub Pages.

> **Note:** The original site at `http://cnd.iit.cnr.it/~lorenzo` was unreachable while this template was created, so this repo intentionally avoids copying any text or images. Replace placeholders with your own content.

## Quick start

1. **Download** this folder as a ZIP and extract it.
2. Create a new GitHub repo (e.g., `lorenzo-homepage`) and push these files.
3. In your repo, go to **Settings → Pages**.
   - **Build and deployment**: "Deploy from a branch"
   - **Branch**: `main` (or `master`) / `/ (root)`
4. Your site will be served at `https://<username>.github.io/<repo>/`.

Alternatively, keep GitHub Actions below to auto-deploy to Pages.

## Customize

- Update `index.html` sections (bio, publications, teaching, service).
- Replace `assets/profile.svg` with a headshot (e.g., `profile.jpg`) and update the `img` tag.
- Edit colors/spacing in `styles.css`.
- Add items in the JSON arrays inside `index.html` for publications/teaching if you prefer data-driven rendering.

## Develop locally

Just open `index.html` in a browser or use a simple server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## License

MIT — see `LICENSE`.