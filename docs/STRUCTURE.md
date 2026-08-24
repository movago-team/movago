# Movago project structure

Source of truth for folder layout, brand, and product scope. All developers (Cursor and VS Code) must follow this file.

## Product

MOVAGO is a premium **chauffeur-driven** car rental / executive airport transfer platform.

Must support:

- Web booking and trip management
- Membership (register, login, profile, booking history)
- Location search via **Google Maps Places** or **custom map pin**
- Marketing site: Home, Services, Vehicles, Destinations, Corporate, About

## Stack

- Next.js 13 App Router
- TypeScript
- Tailwind CSS
- Path alias: `@/*` → project root

## Brand theme

Dark luxury + gold accent (from approved designs). Do not invent alternate brand palettes.

| Token | Value | Usage |
|-------|-------|--------|
| Background | `#000000` | page / hero dark surfaces |
| Surface | `#141414` / `#1A1A1A` | cards, panels, footer |
| Accent gold | `#C5A073` | CTA, active nav, icons, highlights |
| Accent gold hover | `#B08D60` | hover states |
| Text primary | `#FFFFFF` | headings / primary on dark |
| Text secondary | `#B3B3B3` | muted body on dark |
| Text on gold | `#000000` | text on gold buttons |
| Light section bg | `#F3F3F3` | light amenity / strip sections |

### Typography

- Headings: serif display
- Body / nav / forms: sans-serif
- **Default size = `text-base`** for body, tables, buttons, inputs, labels, errors
- Avoid `text-sm` / `text-xs` except badges, captions, metadata
- Titles use `text-lg`+ — do not shrink body below `text-base`

## Folder map

```text
movago/
├── app/                          # routes only — no heavy business logic
│   ├── (marketing)/              # marketing pages (URL has no group prefix)
│   │   ├── page.tsx              # Home → /
│   │   ├── about/                # /about
│   │   ├── corporate/            # /corporate
│   │   ├── destinations/         # /destinations
│   │   ├── vehicles/             # /vehicles
│   │   └── services/             # /services
│   ├── book/                     # /book (Book Now)
│   ├── layout.tsx
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── layout/                   # Header, Footer, Navbar, LanguageSwitcher
│   ├── ui/                       # shared Button, Input, Select, Badge, Card
│   ├── home/                     # Home-only sections
│   ├── vehicles/
│   ├── destinations/
│   ├── corporate/
│   ├── about/
│   ├── services/
│   ├── booking/                  # BookingWidget / search / manage bookings
│   ├── membership/               # auth, profile, member-only UI
│   └── maps/                     # Places search, map pin picker
├── constants/                    # nav, footer links, static copy keys
├── data/                         # temporary mock JSON/TS
├── hooks/
├── lib/                          # API clients (incl. Google Maps)
├── services/                     # booking, membership, pricing domain logic
├── styles/                       # design tokens / theme helpers
├── types/
├── utils/                        # formatPrice, dateHelpers, etc.
├── public/
│   ├── images/
│   │   ├── vehicles/
│   │   ├── destinations/
│   │   ├── heroes/
│   │   └── partners/
│   └── icons/
├── _sandbox/                     # experiments only — not production
└── docs/
    └── STRUCTURE.md              # this file
```

## Routes (nav)

| Path | Page |
|------|------|
| `/` | Home |
| `/services` | Our Services |
| `/vehicles` | Vehicles |
| `/destinations` | Destinations |
| `/corporate` | Corporate |
| `/about` | About Us |
| `/book` | Book Now |

## Mandatory rules

1. **Routes live only under `app/`** — do not put feature folders under `app/` except `page`, `layout`, `loading`, `error`, `not-found`.
2. **Reusable UI → `components/ui`** | **site chrome → `components/layout`** | **page sections → `components/<feature>`**.
3. **No fetch/axios inside presentational components** — put calls in `lib/` or `services/`.
4. **Nav/footer constants → `constants/`** — do not hardcode link lists across files.
5. **Images/icons → `public/images|icons`** by category — do not dump assets at repo root.
6. **Personal experiments → `_sandbox/` only** — do not merge into marketing routes without refactor.
7. **Naming:** React components = PascalCase; utils/hooks = camelCase; folders = feature name or kebab-case.
8. **Language:** UI copy follows brand (EN primary from designs); code identifiers in English.
9. **Theme:** use brand tokens above for all UI; primary CTA = gold `#C5A073`.
10. **Type scale:** default `text-base`; no body text smaller unless badge/caption.
11. **Locations:** support Google Places search **and** manual map pin; map helpers in `lib/` / `components/maps/`.

## Where to put new work

| You are adding… | Put it in… |
|-----------------|------------|
| A new URL/page | `app/(marketing)/…/page.tsx` or `app/book/…` |
| Header / Footer | `components/layout/` |
| Shared button/input | `components/ui/` |
| Home hero section | `components/home/` |
| Vehicle card | `components/vehicles/` |
| Booking search / manage trip | `components/booking/` |
| Login / register / profile | `components/membership/` |
| Places autocomplete / pin map | `components/maps/` + `lib/` |
| Price formatter | `utils/` |
| Google Maps / API client | `lib/` |
| Booking / membership logic | `services/` |
| TypeScript interfaces | `types/` |
| Mock vehicle list | `data/` |
| Menu link list | `constants/` |

## Editor rules (Cursor + VS Code)

Shared by both editors:

- `.editorconfig`
- `.prettierrc`
- `.eslintrc.json`
- `.vscode/settings.json`
- this file (`docs/STRUCTURE.md`)

Cursor-only AI helper:

- `.cursorrules` (points back here — do not duplicate conflicting rules)

## Import examples

```ts
import { formatPrice } from '@/utils/formatPrice'
import type { Vehicle } from '@/types/vehicle'
import { NAV_LINKS } from '@/constants/navigation'
```
