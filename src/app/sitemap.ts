import type { MetadataRoute } from "next";
import { getContent } from "@/content";
import { hasArticleBody } from "@/content/articles";

const SITE_URL = "https://fernandourbano.ai";

const ROUTES = [
  "",
  "historia",
  "que-hago",
  "charlas",
  "ideas",
  "prensa",
  "contacto",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const articleSlugs = getContent("es")
    .ideas.pillars.filter((p) => hasArticleBody(p.slug))
    .map((p) => `ideas/${p.slug}`);

  for (const route of [...ROUTES, ...articleSlugs]) {
    const path = route === "" ? "" : `/${route}`;
    entries.push({
      url: `${SITE_URL}${path}`,
      lastModified,
      alternates: {
        languages: {
          es: `${SITE_URL}${path}`,
          en: `${SITE_URL}/en${path}`,
        },
      },
    });
    entries.push({
      url: `${SITE_URL}/en${path}`,
      lastModified,
    });
  }

  return entries;
}
