// Letzimpact brand constants — Neon Atelier design system
// Keep this file as the single source of truth for shared brand info.

export const BRAND = {
  name: "Letzimpact",
  tagline: "Social media that actually works.",
  email: "info@letzimpact.lu",
  phoneDisplay: "+352 621 576 556",
  // E.164 (no spaces, no plus) for wa.me deep link
  whatsappNumber: "352621576556",
  whatsappMessage:
    "Hey Letzimpact, I came from your website and I'd love to talk about social media for my brand.",
  legacySite: "https://letzimpact.lu",
  location: "Luxembourg",
  founded: 2025,
} as const;

export const waLink = (
  message: string = BRAND.whatsappMessage
): string =>
  `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "process", label: "How we work" },
  { id: "packages", label: "Packages" },
  { id: "founders", label: "About" },
  { id: "faq", label: "FAQ" },
] as const;
