# YogaWithLatika — Official Website (`yogawithlatika.com`)

Welcome to the official public repository for **[YogaWithLatika](https://yogawithlatika.com)** — the digital home of **Latika Bissa** (*M.Sc & B.Sc Yoga Therapy, Gold Medalist*), offering science-backed therapeutic yoga since **2014**.

---

## 🌿 Core Offerings

The website is designed around three mindful pillars, ordered strategically to maximize visitor value and conversion:

### 1. Dedicated 1-on-1 Online Yoga Therapy *(Highest Personal Impact)*
- Personalized, live 1-on-1 therapeutic yoga sessions tailored to individual medical histories, pain triggers, and schedules.
- **Specialties:** Chronic Back, Neck & Joint Pain, PCOS & Thyroid Hormonal Balance, Prenatal & Postnatal Care, and Stress, Anxiety & Sleep Recovery.
- **Languages:** Guided in **English, Hindi, and Marathi**.
- **Social Proof:** Rated **5.0 ★ on Google Maps** with verified student transformation stories.

### 2. [Tulaa](https://tulaa.app) — Yoga & Private Wellness Companion App
- An all-in-one, subscription-free wellness companion available in **English** and **हिन्दी (Hindi)** on **[Google Play](https://play.google.com/store/apps/details?id=life.tulaa)** and the **[App Store](https://apps.apple.com/in/app/tulaa/id6748626498)**.
- **Guided Yoga & Movement:** Expert-led routines curated by Latika Bissa, morning & evening sequences, offline downloads, and desk worker relief stretches.
- **Private Health & Habit Trackers:** On-device Period & Cycle Diary, Fasting Interval Timer, Daily Hydration Tracker, Mood & Gratitude Journal, and Habit Builder.
- **Mindful Pranayama & Relaxation:** Nervous-system resetting breathwork, guided stillness, and traditional chants.
- **Built for Privacy & Focus:** No account/login required, **100% on-device data storage**, and **30+ calming visual themes**.

### 3. [YouTube Community (`@yogawithlatika`)](https://www.youtube.com/@yogawithlatika) — 21,000+ Subscribers
- A library of free, science-backed guided yoga therapy sessions, prenatal meditations, joint mobility flows, and chanting practices.

---

## ✨ Key Technical Features & Architecture

- **Framework:** Built with **[Astro](https://astro.build/)** for zero-bloat static HTML generation and fast Core Web Vitals.
- **Bilingual Localization (English & हिन्दी):**
  - Static routes generated for both **English (`/`)** and **Hindi (`/hi/`)** using a unified component architecture ([`LandingPage.astro`](./src/components/LandingPage.astro)) and strongly-typed dictionaries ([`src/i18n/en.ts`](./src/i18n/en.ts), [`src/i18n/hi.ts`](./src/i18n/hi.ts)).
  - **Automatic Browser Language Detection:** Inspects `navigator.languages` / `navigator.language` before first paint and automatically loads the Hindi (`/hi/`) or English (`/`) version, while remembering manual user selection (`EN | हिन्दी` toggle) in `localStorage`.
  - Complete bilingual SEO with `hreflang` alternates (`en`, `hi`, `x-default`), OpenGraph localization, and `Schema.org` (`HealthAndWellnessBusiness`) structured data.
- **Dynamic Experience Calculation (Since 2014):**
  - Latika's years of experience are computed dynamically from `EXPERIENCE_START_YEAR = 2014` in [`src/config/site.ts`](./src/config/site.ts) at build time and automatically kept in sync on the client across calendar years.
- **Calm Botanical Design System:**
  - Crafted in [`src/styles/global.css`](./src/styles/global.css) with warm linen, forest sage, and earth tokens, organic paper grain texture, soft `IntersectionObserver` scroll-reveal animations, and native Devanagari typography (`Noto Serif Devanagari` & `Noto Sans Devanagari`).

---

## 📁 Project Structure

```text
/
├── public/
│   ├── assets/textures/     # Subtle organic noise SVG overlay
│   ├── images/              # Brand logos, portrait, and app store badges
│   ├── CNAME                # Custom domain configuration (yogawithlatika.com)
│   ├── robots.txt           # Crawler directives
│   └── sitemap.xml          # Bilingual XML sitemap with hreflang links
├── src/
│   ├── components/
│   │   ├── Navbar.astro         # Floating glassmorphic navigation & EN/हिन्दी switcher
│   │   ├── Hero.astro           # Editorial hero, credentials, portrait & 3 pillars overview
│   │   ├── OnlineTherapy.astro  # Pillar 01: 1-on-1 Therapy + 5★ Google Reviews
│   │   ├── TulaaApp.astro       # Pillar 02: Tulaa App 4-category bento & store badges
│   │   ├── YouTubeChannel.astro # Pillar 03: 21K+ YouTube video showcase
│   │   ├── Footer.astro         # Restorative closing CTA, social dock & language links
│   │   └── LandingPage.astro    # Shared localized page composition
│   ├── config/
│   │   └── site.ts              # Centralized URLs, 2014 experience helper, reviews & videos
│   ├── i18n/
│   │   ├── en.ts                # Complete English copy & SEO metadata
│   │   ├── hi.ts                # Complete Hindi (हिन्दी) copy & SEO metadata
│   │   └── index.ts             # Localization resolver & TypeScript types
│   ├── layouts/
│   │   └── Layout.astro         # Base HTML, SEO tags, language auto-detection & scripts
│   ├── pages/
│   │   ├── index.astro          # English route (/)
│   │   └── hi/
│   │       └── index.astro      # Hindi route (/hi/)
│   └── styles/
│       └── global.css           # Serene botanical design system & responsive layout
├── astro.config.mjs
└── package.json
```

---

## 🛠️ Local Development & Build

### Prerequisites
- **Node.js:** `>= 22.12.0`

### Commands

| Command | Action |
| :--- | :--- |
| `npm install` | Install project dependencies |
| `npx astro dev --background` | Start the local Astro dev server in background mode |
| `npx astro dev status` | Check status of the background dev server |
| `npx astro dev stop` | Stop the background dev server |
| `npm run build` | Build the production static site into `./dist/` |
| `npm run preview` | Preview the production build locally |

---

## 🚀 Deployment

This site is automatically built and deployed to **GitHub Pages** (`https://yogawithlatika.com`) via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) whenever changes are pushed to the `main` branch.

---

## 🔗 Connect with YogaWithLatika

- **Website:** [yogawithlatika.com](https://yogawithlatika.com) · [Hindi Version (`/hi/`)](https://yogawithlatika.com/hi/)
- **Tulaa Wellness App:** [tulaa.app](https://tulaa.app) · [Google Play](https://play.google.com/store/apps/details?id=life.tulaa) · [App Store](https://apps.apple.com/in/app/tulaa/id6748626498)
- **YouTube (`21K+`):** [@yogawithlatika](https://www.youtube.com/@yogawithlatika)
- **Instagram:** [@yogawithlatika](https://www.instagram.com/yogawithlatika)
- **LinkedIn:** [Latika Bissa](https://www.linkedin.com/in/latika-bissa-0a3084210/)
