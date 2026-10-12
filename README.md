# Ananya — Nail Artist (Next.js 15)

Sample nail-artist portfolio + enquiry website for **Ananya** (mockup port).

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui (hand-wired
`components/ui/*` + `components.json`) · Lucide icons · next/font (Playfair
Display 600 + DM Sans).

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (must pass with zero errors)
npm run start   # serve the production build (after `npm run build`)
```

## Sections

Header (sticky nav + mobile hamburger) → Hero (`#top`) → Services
(`#services`) → Portfolio gallery (`#work`) → Nail Mood Finder (`#mood`) →
Enquiry builder (`#book`) → Footer.

Design tokens: `app/globals.css` (blush-and-wine theme, light + `.dark`
class-based dark mode, arch-shaped photo frames, 860px / 560px breakpoints).

## Placeholders (launch se pehle bharo)

- `lib/site-config.ts` — `WHATSAPP_NUMBER` (`91XXXXXXXXXX` TODO),
  `instagramHandle` / `instagramUrl` (sample).
- Images — sab 4 photos sample/reference hain: `IMAGE-REPLACEMENT.md` dekho.
- Services mein **koi pricing nahi** — "Enquire for pricing" pattern use hota hai.

## Notes

- Koi server POST nahi — enquiry builder pure client-side hai (clipboard +
  optional WhatsApp deep link).
- Koi Lovable branding nahi. Sab sample content clearly sample marked hai.
