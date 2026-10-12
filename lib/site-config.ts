/**
 * Central site config for the Ananya Nails Studio website.
 *
 * ⚠️ PLACEHOLDERS — every value marked SAMPLE / TODO must be replaced
 * with Ananya's real details before launch.
 */
export const SITE = {
  /** Sample business name — confirm with Ananya before launch. */
  businessName: "Ananya Nails Studio",
  brandFirst: "Ananya",
  brandSecond: "Nails",
  pageTitle: "Ananya — Nail Artist",
  metaDescription: "A polished, mobile-first nail artist website concept for Ananya.",

  /**
   * TODO: WhatsApp number (mockup mein number nahi tha).
   * Format: country code + number, no "+", no spaces — e.g. "919876543210".
   * Fill this in before launch; the enquiry form builds wa.me links from it.
   */
  WHATSAPP_NUMBER: "91XXXXXXXXXX",

  /** SAMPLE — replace with Ananya's real Instagram handle. */
  instagramHandle: "@ananya.nails",
  /** SAMPLE — replace with Ananya's real Instagram profile URL. */
  instagramUrl: "https://www.instagram.com/ananya.nails",
} as const;

/**
 * Builds a WhatsApp deep link that pre-fills the enquiry message.
 * Number comes from SITE.WHATSAPP_NUMBER.
 */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** True when a real WhatsApp number has been configured. */
export function hasWhatsAppNumber(): boolean {
  return !SITE.WHATSAPP_NUMBER.includes("X");
}
