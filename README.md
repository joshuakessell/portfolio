# joshuakessell.com

Personal portfolio — Next.js 15, App Router, TypeScript, Motion (Framer Motion), CSS Modules. No database, no CMS: content is code.

## Structure

- `app/page.tsx` — home ("Bold Signal" design: marquee, hero, stats, flagship card, experience, contact)
- `app/checkin/` — scroll-driven case study of the check-in platform (pinned, scrubbed scenes; all visuals are stylized recreations with fictional data)
- `app/api/contact/route.ts` — contact form endpoint (Resend; requires `RESEND_API_KEY` env var, degrades gracefully without it)
- `public/Joshua-Kessell-Resume.pdf` — served at `/Joshua-Kessell-Resume.pdf`

## Develop

```bash
npm install
npm run dev
```

## Deploy

Pushed to GitHub + Vercel git integration. `npm run build` must pass; all routes prerender static except the contact API.

## Editing notes

- Design tokens live in `app/globals.css` (`--cream`, `--black`, `--cobalt`, `--acid`, `--coral`).
- Scroll scenes each honor `prefers-reduced-motion` with static fallbacks — keep that invariant when adding scenes.
- Resume: edit `../resume/resume.html`, re-render with WeasyPrint, copy the PDF into `public/`.
