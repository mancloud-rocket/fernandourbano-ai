import type { Metadata } from "next";
import { getPost, POST_SLUGS } from "@/content/posts";
import { PostView } from "@/components/pages/PostView";

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost("en", slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.subtitle,
    alternates: {
      canonical: `/en/posts/${slug}`,
      languages: { es: `/posts/${slug}`, en: `/en/posts/${slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      type: "article",
      url: `/en/posts/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.subtitle,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PostView locale="en" slug={slug} />;
}
