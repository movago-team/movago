# MOVAGO

Premium chauffeur-driven car rental / executive airport transfer — Next.js frontend with web booking, membership, and Google Maps / pin location picker.

Brand: dark + gold (`#C5A073`). Default text size: `text-base`. Full rules: [docs/STRUCTURE.md](docs/STRUCTURE.md).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

**Read first:** [docs/STRUCTURE.md](docs/STRUCTURE.md) — mandatory folder rules for the whole team.

| Path | Purpose |
|------|---------|
| `app/(marketing)/` | Home, Services, Vehicles, Destinations, Corporate, About |
| `app/book/` | Book Now flow |
| `components/` | layout, ui, and feature sections |
| `constants/` `data/` `hooks/` `lib/` `services/` `styles/` `types/` `utils/` | shared non-UI code |
| `public/images|icons` | static assets by category |
| `_sandbox/` | experiments only (not production) |

## Main routes

- `/` — Home
- `/services` — Our Services
- `/vehicles` — Vehicles
- `/destinations` — Destinations
- `/corporate` — Corporate
- `/about` — About Us
- `/book` — Book Now

## Editor consistency (Cursor + VS Code)

These files are shared by both editors:

- `.editorconfig`
- `.prettierrc`
- `.eslintrc.json`
- `.vscode/settings.json`
- `docs/STRUCTURE.md`

`.cursorrules` is for Cursor AI only. Structure rules still live in `docs/STRUCTURE.md` so VS Code users follow the same layout.

Install the **Prettier** and **ESLint** extensions in VS Code (and Cursor) for format-on-save.
