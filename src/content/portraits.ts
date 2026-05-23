/**
 * Portrait system for the hero "Living Contact Sheet".
 *
 * Each portrait is a distinct artistic treatment of Fernando.
 * Files live in `/public/portraits/`. Replace the `*.svg` placeholders with
 * real Nano Banana Pro outputs (.jpg / .webp) and update `src` here.
 *
 * Image spec: 3:4 portrait, 1080×1440 minimum, dark editorial palette
 * (deep ink black, cream highlights, teal accent). See PORTRAITS.md for
 * the exact generation prompts.
 */

export type PortraitFacet =
  | "speaker"
  | "cover"
  | "builder"
  | "architect"
  | "motion"
  | "voice";

export type Portrait = {
  id: string;
  number: string;
  facet: PortraitFacet;
  styleLabel: { es: string; en: string };
  facetLabel: { es: string; en: string };
  caption: { es: string; en: string };
  src: string;
  /** Set false until a real photo replaces the SVG placeholder. */
  isReal: boolean;
};

export const portraits: Portrait[] = [
  {
    id: "cinematic",
    number: "01",
    facet: "speaker",
    styleLabel: { es: "Cinematográfico editorial", en: "Cinematic editorial" },
    facetLabel: { es: "Orador", en: "Speaker" },
    caption: {
      es: "RPA Day · Madrid · 2024",
      en: "RPA Day · Madrid · 2024",
    },
    src: "/portraits/01-cinematic.jpeg",
    isReal: true,
  },
  {
    id: "duotone",
    number: "02",
    facet: "cover",
    styleLabel: { es: "Duotono alto contraste", en: "High-contrast duotone" },
    facetLabel: { es: "Portada", en: "Cover" },
    caption: {
      es: "Editorial · 40 Under 40 · 2024",
      en: "Editorial · 40 Under 40 · 2024",
    },
    src: "/portraits/02-duotone.jpeg",
    isReal: true,
  },
  {
    id: "risograph",
    number: "03",
    facet: "builder",
    styleLabel: { es: "Risografía a dos tintas", en: "Two-ink risograph" },
    facetLabel: { es: "Constructor", en: "Builder" },
    caption: {
      es: "Roadmap agéntico · Santiago · 2025",
      en: "Agentic roadmap · Santiago · 2025",
    },
    src: "/portraits/03-risograph.jpeg",
    isReal: true,
  },
  {
    id: "blueprint",
    number: "04",
    facet: "architect",
    styleLabel: { es: "Cianotipo arquitectónico", en: "Cyanotype blueprint" },
    facetLabel: { es: "Arquitecto", en: "Architect" },
    caption: {
      es: "Arquitectura de agentes · 2025",
      en: "Agent architecture · 2025",
    },
    src: "/portraits/04-blueprint.jpeg",
    isReal: true,
  },
  {
    id: "motion",
    number: "05",
    facet: "motion",
    styleLabel: { es: "Larga exposición", en: "Long exposure" },
    facetLabel: { es: "En movimiento", en: "In motion" },
    caption: {
      es: "Keynote · UnoChapecó · 2023",
      en: "Keynote · UnoChapecó · 2023",
    },
    src: "/portraits/05-motion.jpeg",
    isReal: true,
  },
  {
    id: "charcoal",
    number: "06",
    facet: "voice",
    styleLabel: { es: "Ilustración a carbón", en: "Charcoal illustration" },
    facetLabel: { es: "Columnista", en: "Op-Ed voice" },
    caption: {
      es: "Op-Ed · Bloomberg Línea · próximamente",
      en: "Op-Ed · Bloomberg Línea · soon",
    },
    src: "/portraits/06-charcoal.jpeg",
    isReal: true,
  },
];
