# M. Febrian — Personal Portfolio

Minimalist personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

This repository contains a static portfolio site for M. Febrian (Network Engineer / Informatics Student), designed to be exported or deployed to Vercel.

## Features
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS for utilities
- Framer Motion scroll/entry animations
- Dark minimalist theme with cyan accent
- Static export compatible (`output: 'export'`)
- All personal data in `lib/data.ts` for easy updates

## Project structure
- `app/` — Next.js App Router entry: `layout.tsx`, `page.tsx`
- `components/` — All UI components (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer)
- `lib/data.ts` — All personal data and arrays used by the site
- `public/` — `cv.pdf`, `profile.jpeg` (replace with your photo)

## Local development
Requirements: Node.js (18+ recommended) and npm.

Install dependencies:

```powershell
npm install
```

Run dev server (opens on available port, usually 3000):

```powershell
npm run dev
```

Build and export a static site:

```powershell
npm run build
npm run export
```

After `next export` the static output will be in the `out/` folder.

## Customization
- Personal data: edit `lib/data.ts` (name, contact, skills, projects, experience).
- Profile photo: replace `public/profile.jpeg` with your image (same filename or update the `About.tsx` import).
- CV: replace `public/cv.pdf` with your CV file.

## Deploy to Vercel
1. Push this repo to GitHub (already configured).
2. On Vercel, click "Add New Project" → Import Git Repository → select this repo.
3. Use default build settings (Next.js). For static export you can keep defaults; Vercel will handle Next.js hosting.

## Notes and troubleshooting
- `next/image` is configured with `images.unoptimized: true` to support static export.
- If the CV download is intercepted by a Download Manager (e.g., IDM), try disabling the manager or open `http://localhost:3002/cv.pdf` directly.

## Contact
- Email: muhammadfebrian689@gmail.com
- Phone: +62 857-6625-7299

---

If you want, I can also add a simple `README` badge, a deploy preview button, or a CI workflow for automated export. Tell me which you'd prefer next.