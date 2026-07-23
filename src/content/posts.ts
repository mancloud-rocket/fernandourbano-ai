import type { Locale } from "@/lib/locale";

/**
 * Short, kinetic "manifiesto" posts, meant to be shared as a link on LinkedIn.
 * Each post is a self-contained animated micro-piece: kicker, big title,
 * subtitle, a few staged body lines and a closing punch. Same slug for ES/EN.
 */
export type Post = {
  slug: string;
  date: string; // "YYYY-MM" for display
  kicker: string;
  title: string;
  subtitle: string;
  lines: string[];
  closing: string;
  tags: string[];
};

const postsEs: Post[] = [
  {
    slug: "pilotos-mueren-por-estrategia",
    date: "2026-07",
    kicker: "Estrategia",
    title: "El 80% de los pilotos de IA no mueren por la tecnología.",
    subtitle: "Mueren por mala estrategia.",
    lines: [
      "El modelo casi nunca es el problema.",
      "El problema es el proceso que nadie mapeó.",
      "El dato sucio que nadie limpió.",
      "Y el dueño que nadie asignó.",
    ],
    closing: "La IA amplifica lo que ya tenías. Ordená eso primero.",
    tags: ["IA", "Estrategia"],
  },
  {
    slug: "no-vendas-ia-vende-criterio",
    date: "2026-07",
    kicker: "Anti-bluff",
    title: "No vendas IA. Vendé criterio.",
    subtitle: "La herramienta se consigue en cualquier lado.",
    lines: [
      "Todos tienen acceso al mismo modelo.",
      "La ventaja no es la IA.",
      "Es saber qué automatizar primero",
      "y qué dejar como está.",
    ],
    closing: "El criterio no se descarga. Se construye.",
    tags: ["Criterio", "IA"],
  },
  {
    slug: "tu-primer-agente-no-tiene-que-ser-inteligente",
    date: "2026-07",
    kicker: "Producto",
    title: "Tu primer agente no tiene que ser inteligente.",
    subtitle: "Tiene que entrar a producción.",
    lines: [
      "Un disparador claro.",
      "Un modelo que puedas pagar.",
      "Un humano que apruebe.",
      "Todo registrado.",
    ],
    closing: "Feo pero real en ocho semanas le gana a perfecto que nunca sale.",
    tags: ["Agentes", "Producción"],
  },
  {
    slug: "el-dato-sucio-no-lo-arregla-el-modelo-mas-caro",
    date: "2026-07",
    kicker: "Operaciones",
    title: "El dato sucio no lo arregla el modelo más caro.",
    subtitle: "Lo hace fallar más rápido.",
    lines: [
      "Duplicados.",
      "Campos vacíos.",
      "Categorías inventadas por cada sucursal.",
      "Ninguna IA sobrevive a eso.",
    ],
    closing: "Antes de comprar el modelo, limpiá la casa.",
    tags: ["Datos", "Operaciones"],
  },
  {
    slug: "hablo-de-ia-porque-la-construyo",
    date: "2026-07",
    kicker: "Manifiesto",
    title: "Hablo de IA porque la construyo.",
    subtitle: "No al revés.",
    lines: [
      "No opino desde afuera.",
      "Lidero producto agéntico todos los días.",
      "Veo lo que funciona",
      "y lo que es humo.",
    ],
    closing: "Hechos. No humo.",
    tags: ["Manifiesto"],
  },
];

const postsEn: Post[] = [
  {
    slug: "pilotos-mueren-por-estrategia",
    date: "2026-07",
    kicker: "Strategy",
    title: "80% of AI pilots don't die from technology.",
    subtitle: "They die from bad strategy.",
    lines: [
      "The model is almost never the problem.",
      "The problem is the process nobody mapped.",
      "The dirty data nobody cleaned.",
      "And the owner nobody assigned.",
    ],
    closing: "AI amplifies what you already had. Fix that first.",
    tags: ["AI", "Strategy"],
  },
  {
    slug: "no-vendas-ia-vende-criterio",
    date: "2026-07",
    kicker: "Anti-bluff",
    title: "Don't sell AI. Sell judgment.",
    subtitle: "The tool is available everywhere.",
    lines: [
      "Everyone has access to the same model.",
      "The edge is not the AI.",
      "It is knowing what to automate first",
      "and what to leave alone.",
    ],
    closing: "Judgment is not a download. It is built.",
    tags: ["Judgment", "AI"],
  },
  {
    slug: "tu-primer-agente-no-tiene-que-ser-inteligente",
    date: "2026-07",
    kicker: "Product",
    title: "Your first agent doesn't have to be smart.",
    subtitle: "It has to reach production.",
    lines: [
      "A clear trigger.",
      "A model you can afford.",
      "A human who approves.",
      "Everything logged.",
    ],
    closing: "Ugly but real in eight weeks beats perfect that never ships.",
    tags: ["Agents", "Production"],
  },
  {
    slug: "el-dato-sucio-no-lo-arregla-el-modelo-mas-caro",
    date: "2026-07",
    kicker: "Operations",
    title: "The most expensive model won't fix dirty data.",
    subtitle: "It just fails faster.",
    lines: [
      "Duplicates.",
      "Empty fields.",
      "Categories invented by each branch.",
      "No AI survives that.",
    ],
    closing: "Before buying the model, clean the house.",
    tags: ["Data", "Operations"],
  },
  {
    slug: "hablo-de-ia-porque-la-construyo",
    date: "2026-07",
    kicker: "Manifesto",
    title: "I talk about AI because I build it.",
    subtitle: "Not the other way around.",
    lines: [
      "I don't comment from the outside.",
      "I lead agentic product every day.",
      "I see what works",
      "and what is fog.",
    ],
    closing: "Facts. Not fog.",
    tags: ["Manifesto"],
  },
];

const byLocale: Record<Locale, Post[]> = { es: postsEs, en: postsEn };

export function getPosts(locale: Locale): Post[] {
  return byLocale[locale] ?? postsEs;
}

export function getPost(locale: Locale, slug: string): Post | null {
  return getPosts(locale).find((p) => p.slug === slug) ?? null;
}

export const POST_SLUGS = postsEs.map((p) => p.slug);
