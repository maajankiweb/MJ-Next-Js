# MJ Bytech — Landing Page (JavaScript / JSX)

**Website:** https://mjbytech.com
**Stack:** Next.js 15 · JavaScript (JSX) · Tailwind CSS · Framer Motion

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# Open http://localhost:3000

# 3. Production build
npm run build && npm start
```

---

## Project Structure

```
mj-bytech/
├── app/
│   ├── globals.css          ← Design tokens, cursor, animations
│   ├── layout.jsx           ← Root layout + SEO metadata
│   └── page.jsx             ← Main page — assembles all sections
│
├── components/
│   ├── Cursor.jsx           ← Custom magnetic cursor (dot + ring)
│   ├── Navbar.jsx           ← Sticky glass navbar + mobile slide menu
│   ├── Hero.jsx             ← 3D mouse-parallax hero + floating tags
│   ├── TechStrip.jsx        ← Infinite marquee of 20+ technologies
│   ├── Services.jsx         ← 6 service cards with hover glow
│   ├── StatsSection.jsx     ← Animated count-up stats (6 metrics)
│   ├── About.jsx            ← Company story + 4 feature cards
│   ├── ProcessSection.jsx   ← 5-step process timeline
│   ├── Portfolio.jsx        ← Filterable project grid (AnimatePresence)
│   ├── Testimonials.jsx     ← Animated slide testimonials + trust badges
│   ├── Contact.jsx          ← Contact form + info panel
│   ├── Footer.jsx           ← Footer + newsletter strip
│   └── WhatsAppButton.jsx   ← Floating pulsing WhatsApp CTA
│
├── jsconfig.json            ← Path alias @/* → ./
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## Design Tokens (globals.css)

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#0a0a0f` | Page background |
| `--bg-card` | `#13131f` | Card backgrounds |
| `--accent-primary` | `#6c63ff` | Purple — CTAs, links, glows |
| `--accent-secondary` | `#ff6b6b` | Coral — warm accents |
| `--accent-tertiary` | `#00d2ff` | Cyan — highlights |
| `--text-primary` | `#f0f0ff` | Headings |
| `--text-secondary` | `#9898b8` | Body copy |
| `--text-muted` | `#5a5a7a` | Labels, captions |

---

## Customisation Checklist

### Branding
- [ ] Replace `PI Soft Informatics` in `Navbar.jsx` and `Footer.jsx`
- [ ] Add your logo to `public/logo.svg` and update Navbar
- [ ] Update accent colors in `app/globals.css`

### Content
- [ ] `Hero.jsx` — Update headline, subheading, stats numbers
- [ ] `Services.jsx` — Edit service cards (icon, title, desc, tags)
- [ ] `Portfolio.jsx` — Replace mock projects with real ones
- [ ] `Testimonials.jsx` — Add real client quotes + names
- [ ] `About.jsx` — Update company story
- [ ] `Contact.jsx` — Update address, email, phone number
- [ ] `WhatsAppButton.jsx` — Update WhatsApp number in href
- [ ] `Footer.jsx` — Update all nav links + social hrefs

### SEO
- [ ] `app/layout.jsx` — Update `metadata` title + description
- [ ] Add `public/favicon.ico`
- [ ] Add OG image at `public/og-image.jpg`

### Forms
Connect the contact form to a backend service:
- **Recommended options:** Resend, EmailJS, Formspree, or a Next.js API route at `app/api/contact/route.js`

---

## Deploy

**Vercel (recommended — free)**
```bash
npm i -g vercel
vercel
```

**Static export**
```js
// next.config.js
module.exports = { output: 'export' }
```
```bash
npm run build   # outputs to /out folder
```

**Docker**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

© 2025 PI Soft Informatics. All rights reserved.
