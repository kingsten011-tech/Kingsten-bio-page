# kingsten-jones.bio

A modern, tech-savvy personal bio landing page for **Kingsten Jones** — a Senior Tech Recruiter at Atlassian with 8+ years of experience hiring engineering teams across AI/ML, infrastructure, and large-scale software systems.

Built with React, Tailwind CSS, and a custom design system (warm off-white background, near-black text, matcha/lime accent, Inter + JetBrains Mono + Archivo Black typography).

🔗 **Live preview:** _add your Vercel URL here after deploy_

---

## ✨ Features

- **Hero** with terminal-style `whoami` JSON output, stats cards, and an infinite sliding company-logo marquee (Atlassian, Postman, Google, Thoughtworks, Oracle, The Trade Desk)
- **About** — photo card with "OPEN" badge + 4 achievement tiles + strengths pills
- **Experience timeline** — expandable cards with proper company logos, numbered impact points, and dark tag pills
- **Notable Projects** — featured **Recruiter Canvas** card + 4-card grid with status badges (SHIPPED / GA 2025 / ADOPTED / CONTRIBUTOR)
- **Stack** — 3 columns: Core Craft, Toolkit, Signals
- **Education + Certifications** — side-by-side with `id:` badges
- **Contact** — full-bleed dark section with email / phone / LinkedIn pills and a **resume.pdf** download card
- Smooth scrolling, responsive (mobile → desktop), accessible focus states

---

## 🧱 Tech Stack

| Layer            | Choice                                                                 |
| ---------------- | ---------------------------------------------------------------------- |
| Framework        | React 19 + Create React App via [CRACO](https://craco.js.org/)         |
| Styling          | Tailwind CSS 3 + custom CSS (selection, marquee animation, scrollbar)  |
| UI primitives    | [shadcn/ui](https://ui.shadcn.com/) (Radix-based)                      |
| Icons            | [lucide-react](https://lucide.dev/)                                    |
| Toasts           | [sonner](https://sonner.emilkowal.ski/)                                |
| Router           | react-router-dom v7                                                    |
| Fonts            | Inter, JetBrains Mono, Archivo (Google Fonts via CSS @import)          |

There is no backend — the page is 100% static. The optional FastAPI backend in `/backend` is **not required** for the bio page and is **not deployed to Vercel**.

---

## 🚀 Quick start (local dev)

> Requires Node ≥ 18 and Yarn 1.x. Yarn is the supported package manager.

```bash
# 1. Clone
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>/frontend

# 2. Install
yarn install

# 3. Start dev server (hot reload on http://localhost:3000)
yarn start
```

The dev server runs on port `3000`. Hot reload is enabled.

### Using npm instead

`yarn` is recommended, but npm works too:

```bash
cd frontend
npm install
npm start
```

---

## 🏗 Production build

```bash
cd frontend
yarn build         # outputs to ./build
```

Optional — preview the production bundle locally:

```bash
npx serve -s build
```

Approximate bundle size: **~97 KB JS + ~12 KB CSS (gzipped)**.

---

## ▲ Deploy to Vercel (free tier)

This repo ships with a ready-to-use `frontend/vercel.json` so you do **not** need to configure anything in the Vercel dashboard.

### One-click flow

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. **Set the Root Directory to `frontend`** (this is the only manual step).
4. Leave everything else at defaults — Vercel reads `frontend/vercel.json` and uses:
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`
   - **Install Command:** `yarn install --frozen-lockfile`
5. Click **Deploy**.

After ~2 minutes you'll get a URL like `kingsten-jones-bio.vercel.app`. Add a custom domain later under **Project → Settings → Domains**.

### What `vercel.json` does

- SPA fallback (rewrites every path to `/index.html`) so react-router never 404s on refresh.
- Long-cache headers for `/static/*` and `/images/*` (immutable assets fingerprinted by webpack).
- Forces `Content-Type: application/pdf` on `/resume.pdf`.

### Environment variables

None are required for the bio page. Skip the "Environment Variables" step on Vercel.

If you ever wire up an API later, add it in **Project → Settings → Environment Variables** with the prefix `REACT_APP_*` (CRA requirement) and redeploy.

---

## 📁 Project structure

```
.
├── frontend/                       # Deployed to Vercel
│   ├── public/
│   │   ├── images/                 # All brand logos + profile photo
│   │   │   ├── profile.jpg
│   │   │   ├── oracle.png
│   │   │   ├── thoughtworks.png        # wide wordmark (used in Hero marquee)
│   │   │   ├── thoughtworks-icon.png   # square /tw icon (used inline)
│   │   │   ├── tradedesk.png           # wide wordmark
│   │   │   └── tradedesk-icon.png      # square TD icon
│   │   ├── resume.pdf              # Downloadable resume
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css                 # Custom theme + marquee keyframes
│   │   ├── index.css               # Google Fonts + Tailwind + shadcn tokens
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx            # Terminal window + stats + marquee
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx      # Expandable timeline with company logos
│   │   │   ├── Projects.jsx        # Featured Recruiter Canvas + 4-card grid
│   │   │   ├── Skills.jsx          # 3-column stack
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx         # Dark section + resume download CTA
│   │   │   ├── Footer.jsx
│   │   │   ├── CompanyLogo.jsx     # Reusable inline logo renderer
│   │   │   └── ui/                 # shadcn primitives
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── pages/
│   │       └── LandingPage.jsx
│   ├── craco.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── vercel.json                 # Vercel build + SPA + cache config
│   └── package.json
└── README.md                       # ← you are here
```

---

## 🎨 Design system

Defined in `frontend/tailwind.config.js` + `frontend/src/index.css` + `frontend/src/App.css`.

| Token            | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| Background       | `#F1EDE3` (warm off-white), `#F7F4EA` (alternate)             |
| Foreground       | `#0a0a09` (near-black)                                        |
| Accent           | `#CFEA6B` (matcha/lime), `#7DAF15` (deeper lime)              |
| Dark section     | `#0a0a09` / `#0E0E0C`                                         |
| Display font     | `Archivo` (used as `font-display` — heavy condensed headings) |
| Body font        | `Inter` (default `font-sans`)                                 |
| Mono font        | `JetBrains Mono` (`font-mono` — code, labels, comments)       |
| Border radius    | `0.5rem` default + tw classes `rounded-2xl` / `rounded-3xl`   |

### Custom animations

Defined in `frontend/src/App.css`:

- `@keyframes marquee` — infinite horizontal scroll for the company logo strip (30s, paused on hover).
- `@keyframes fade-in-up` — entrance animation utility.

---

## 🔄 Updating content

The resume content lives directly inside component files (no CMS, no JSON):

- **Experience entries** → `frontend/src/components/Experience.jsx` → `experiences` array.
- **Projects** → `frontend/src/components/Projects.jsx` → `projects` array + `FeatureProject` for Recruiter Canvas.
- **Skills/Stack** → `frontend/src/components/Skills.jsx` → `columns` array.
- **Certifications + Education** → `frontend/src/components/Certifications.jsx`.
- **Hero stats + tagline** → `frontend/src/components/Hero.jsx`.

To swap the resume PDF: drop a new file at `frontend/public/resume.pdf`.

To swap the profile photo: replace `frontend/public/images/profile.jpg` (used by Header, About card, and Footer).

---

## 🪪 License

Personal portfolio — all content © Kingsten Jones. Code is free to fork as a template; please replace personal text, images, and resume before deploying as your own.
