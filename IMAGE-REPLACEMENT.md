# Image Replacement Guide — Ananya Nails Studio

> ⚠️ **SAMPLE / reference photos** — ye saari images mockup ke liye use hui
> reference/stock photos hain. **Launch se pehle inhe Ananya ke real
> nail-work photos se replace karo.** Neeche har image ka exact public path,
> wo kya depict karti hai, aur replace karte waqt kya dhyan rakhna hai.

## Image list

| # | Public path | Kya depict karti hai | Kahan use hoti hai |
|---|-------------|----------------------|-------------------|
| 1 | `/images/hero-french-manicure.jpg` (216 KB) | Glossy French manicure, fine white tips | Hero main arch photo + Mood Finder → **Elegant** tab |
| 2 | `/images/hero-neutral-float.jpg` (168 KB) | Soft neutral manicure, delicate nail art | Hero floating tilted card + Gallery tile **"Soft minimal"** |
| 3 | `/images/gallery-statement-detail.jpg` (372 KB) | Glossy detailed manicure, rich polished finish | Gallery **tall** tile "Statement detail" + Mood Finder → **Bold** tab |
| 4 | `/images/gallery-bridal-jewel.webp` (176 KB) | Decorative bridal nail art, jewel-inspired details | Gallery short tile **"Bridal glow"** + Mood Finder → **Bridal** tab |

## Replacement notes

- **Filenames same rakho** (ya `lib/images.ts` ka `IMAGES` map update karo).
- Portrait/vertical crops best rahenge: hero arch `44% 44% 18px 18px` top-rounded
  frame hai — lambi vertical photos sabse achhi lagengi. Gallery tall tile bhi
  vertical hai.
- `next/image` use hota hai — nayi photos ko bhi optimize karke rakho
  (WebP/JPEG, quality ~80, < 400 KB per image).
- Mood Finder gallery images **reuse** karta hai (Elegant → image 1, Bold → image 3,
  Bridal → image 4). Gallery photos replace karoge to mood images **automatically**
  update ho jayengi — koi alag file nahi hai.
- Alt text `lib/images.ts` mein hai — nayi photos ke hisaab se update karo.
