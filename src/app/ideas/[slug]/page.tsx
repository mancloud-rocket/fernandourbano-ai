import type { Metadata } from "next";
import { getContent } from "@/content";
import { hasArticleBody } from "@/content/articles";
import { ArticlePage } from "@/components/pages/Article";

export function generateStaticParams() {
  return getContent("es")
    .ideas.pillars.filter((p) => hasArticleBody(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const teaser = getContent("es").ideas.pillars.find((p) => p.slug === slug);
  if (!teaser) return {};
  return {
    title: teaser.title,
    description: teaser.blurb,
    alternates: {
      canonical: `/ideas/${slug}`,
      languages: { es: `/ideas/${slug}`, en: `/en/ideas/${slug}` },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ArticlePage locale="es" slug={slug} />;
}
