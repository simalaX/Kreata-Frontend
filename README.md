# Kreata Designs — Frontend

React (Create React App) frontend for the Kreata Designs website.

## Stack

- **React 18** + **React Router 6** — built with `react-scripts` (Create React App), not Vite
- **Axios** — API calls to the FastAPI backend
- **react-icons** — icon set
- Plain CSS with CSS variables for theming — no Tailwind/Bootstrap dependency

## Features

- Public site: Home, Services (all 9 categories), Gallery, Why Us, Testimonials, Contact, Terms & Policy
- Light/dark mode toggle (persisted, respects system preference, no flash-on-load)
- Admin login + protected dashboard: upload gallery images with descriptions, post site-wide
  announcements, manage testimonials, and read messages submitted through the Contact page
- Floating WhatsApp button, social links, Google Maps embed
- Fully responsive (mobile menu, responsive grids)

## 1. Setup

```bash
npm install
```

## 2. Configure environment variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Set `REACT_APP_API_URL` to point at your running backend, e.g. `http://localhost:8000/api` for
local development, or `https://api.kreatadesigns.com/api` once deployed.

**Note:** Create React App only reads `.env` at build/start time. If you change it, restart
`npm start` or re-run `npm run build`.

## 3. Run it

```bash
npm start
```

Opens at http://localhost:3000. Make sure the backend is running too (see the backend README).

## 4. Build for production

```bash
npm run build
```

Outputs a static site to `build/` — deploy that folder to any static host (Vercel, Netlify,
Nginx, etc.) pointed at your domain (kreatadesigns.com).

## Admin access

Go to `/admin/login` and sign in with the admin credentials set in the **backend's** `.env`
(`ADMIN_USERNAME` / `ADMIN_PASSWORD`). From the dashboard you can:

- **Gallery** — upload an image with a title, description, and optional category (stored on
  Cloudinary via the backend)
- **Announcements** — post a message that appears as a dismissible banner across the site
- **Testimonials** — add/remove client reviews shown on the Home and Testimonials pages
- **Messages** — read enquiries visitors submit through the Contact page form

## Notes

- The logo (`src/components/Logo.js` and `public/favicon.svg`) is a simple gold-on-black "K"
  monogram built in code — swap it for a designed logo file whenever one is ready.
- Colors used: gold `#FFC000`, black `#000000`, white `#FFFFFF`. Font stack falls back from
  Franklin Gothic (if installed locally) to **Libre Franklin**, a free Google Font designed as
  an open homage to Franklin Gothic, since Franklin Gothic itself isn't freely licensed for the
  web.
- The Instagram link uses `kretadesigns` and the TikTok link uses `kreatadesigns` — that's what
  was provided; double check both handles are actually correct before launch.
- The Google Maps embed on the Contact page uses a text search for "Jogoo Road, Nairobi, Kenya".
  Swap in your exact pinned location URL once you have precise coordinates for a tighter map.
