import type { MetadataRoute } from "next";
import { getContent } from "@/content";
import { hasArticleBody } from "@/content/articles";
import { POST_SLUGS } from "@/content/posts";
import { SITE_URL } from "@/lib/site";

const ROUTES = [
  "",
  "historia",
  "que-hago",
  "charlas",
  "ideas",
  "posts",
  "prensa",
  "contacto",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  const articleSlugs = getContent("es")
    .ideas.pillars.filter((p) => hasArticleBody(p.slug))
    .map((p) => `ideas/${p.slug}`);

  const postSlugs = POST_SLUGS.map((slug) => `posts/${slug}`);

  for (const route of [...ROUTES, ...articleSlugs, ...postSlugs]) {
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
