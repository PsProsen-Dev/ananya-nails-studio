/**
 * Shared image asset map.
 *
 * Mockup mein images byte-identical duplicates ke saath reuse hoti thi —
 * is map se ek hi file serve hoti hai, duplicate bundling nahi hoti.
 *
 * ⚠️ Sab 4 photos SAMPLE / reference hain. Launch se pehle inhe
 * Ananya ke original nail-work photos se replace karo
 * (dekho IMAGE-REPLACEMENT.md).
 */
export const IMAGES = {
  heroFrench: {
    src: "/images/hero-french-manicure.jpg",
    alt: "Glossy French manicure with fine white tips",
  },
  heroFloat: {
    src: "/images/hero-neutral-float.jpg",
    alt: "Soft neutral manicure with delicate nail art",
  },
  statementDetail: {
    src: "/images/gallery-statement-detail.jpg",
    alt: "Glossy detailed manicure with a rich polished finish",
  },
  bridalJewel: {
    src: "/images/gallery-bridal-jewel.webp",
    alt: "Decorative bridal nail art with jewel-inspired details",
  },
} as const;

export type ImageKey = keyof typeof IMAGES;

/** Mood Finder tabs → result card data (verbatim from mockup). */
export const MOODS = [
  {
    id: "elegant",
    label: "Elegant",
    name: "Soft French",
    text: "Clean shape, sheer pink base and a refined tip — understated but never plain.",
    image: IMAGES.heroFrench,
  },
  {
    id: "bold",
    label: "Bold",
    name: "Statement Detail",
    text: "A richer finish with high-impact detail for parties, shoots and main-character days.",
    image: IMAGES.statementDetail,
  },
  {
    id: "bridal",
    label: "Bridal",
    name: "Bridal Glow",
    text: "Jewellery-inspired detailing designed to sit beautifully with festive and bridal looks.",
    image: IMAGES.bridalJewel,
  },
] as const;

export type MoodId = (typeof MOODS)[number]["id"];
