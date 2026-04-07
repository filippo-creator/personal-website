# Personal Website

Built with Next.js, Tailwind CSS, and TypeScript. Deployed on Vercel.

## Quick reference: where to change things

| What you want to change | Where to go |
|---|---|
| Profile photo | Replace [`public/profile.png`](public/profile.png) |
| CV / resume PDF | Replace [`public/filippo-guastella-cv.pdf`](public/filippo-guastella-cv.pdf) |
| Main page (hero, intro text) | [`components/Hero.tsx`](components/Hero.tsx) |
| Work experience | [`components/Experience.tsx`](components/Experience.tsx) |
| Education | [`components/Education.tsx`](components/Education.tsx) |
| Skills | [`components/Skills.tsx`](components/Skills.tsx) |
| Projects | [`components/Projects.tsx`](components/Projects.tsx) |
| Hobbies | [`components/Hobbies.tsx`](components/Hobbies.tsx) |
| Contact links | [`components/Contact.tsx`](components/Contact.tsx) |
| Navigation bar | [`components/Nav.tsx`](components/Nav.tsx) |
| Footer | [`components/Footer.tsx`](components/Footer.tsx) |
| /about page | [`app/about/page.tsx`](app/about/page.tsx) |
| /cv page | [`app/cv/page.tsx`](app/cv/page.tsx) |
| Global styles / fonts | [`app/globals.css`](app/globals.css) |
| Site metadata (title, description) | [`app/layout.tsx`](app/layout.tsx) |

## Blog posts

Blog posts are Markdown files in [`content/blog/`](content/blog/). To add a new post, create a new `.md` file there. The filename becomes the URL slug (e.g. `my-post.md` → `/blog/my-post`).

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

Push to `main` — Vercel deploys automatically.
