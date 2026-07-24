/**
 * Hero "Living Contact Sheet" — 6 fotos reales.
 * Orden: primero las tomas en solitario (01-03), despues las acompanadas (04-06).
 * Archivos: `/public/portraits/01.jpeg` ... `06.jpeg` (3:4 vertical).
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
  isReal: boolean;
};

export const portraits: Portrait[] = [
  {
    id: "01",
    number: "01",
    facet: "cover",
    styleLabel: { es: "Nasdaq MarketSite", en: "Nasdaq MarketSite" },
    facetLabel: { es: "Hito", en: "Milestone" },
    caption: {
      es: "Nasdaq · New York · 2025",
      en: "Nasdaq · New York · 2025",
    },
    src: "/portraits/01.jpeg",
    isReal: true,
  },
  {
    id: "02",
    number: "02",
    facet: "speaker",
    styleLabel: { es: "Keynote en escenario", en: "Stage keynote" },
    facetLabel: { es: "Orador", en: "Speaker" },
    caption: {
      es: "Gartner Hype Cycle · Rocketbot · 2025",
      en: "Gartner Hype Cycle · Rocketbot · 2025",
    },
    src: "/portraits/02.jpeg",
    isReal: true,
  },
  {
    id: "03",
    number: "03",
    facet: "builder",
    styleLabel: { es: "Capacitación técnica", en: "Technical training" },
    facetLabel: { es: "Docente", en: "Instructor" },
    caption: {
      es: "Sesión técnica · 2022",
      en: "Technical session · 2022",
    },
    src: "/portraits/03.jpeg",
    isReal: true,
  },
  {
    id: "04",
    number: "04",
    facet: "speaker",
    styleLabel: { es: "Panel de conferencia", en: "Conference panel" },
    facetLabel: { es: "Panelista", en: "Panelist" },
    caption: {
      es: "IKN Spain · Madrid · 2024",
      en: "IKN Spain · Madrid · 2024",
    },
    src: "/portraits/04.jpeg",
    isReal: true,
  },
  {
    id: "05",
    number: "05",
    facet: "voice",
    styleLabel: { es: "Encuentro institucional", en: "Institutional meeting" },
    facetLabel: { es: "Relaciones", en: "Stakeholders" },
    caption: {
      es: "Reunión institucional · 2024",
      en: "Institutional meeting · 2024",
    },
    src: "/portraits/05.jpeg",
    isReal: true,
  },
  {
    id: "06",
    number: "06",
    facet: "builder",
    styleLabel: { es: "Documental corporativo", en: "Corporate documentary" },
    facetLabel: { es: "Equipo", en: "Team" },
    caption: {
      es: "Equipo Ricoh · LATAM · 2020",
      en: "Ricoh team · LATAM · 2020",
    },
    src: "/portraits/06.jpeg",
    isReal: true,
  },
];
