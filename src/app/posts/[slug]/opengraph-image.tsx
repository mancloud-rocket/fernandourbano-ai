import { getPost, POST_SLUGS } from "@/content/posts";
import { renderPostOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Fernando Urbano";

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost("es", slug) ?? getPost("es", POST_SLUGS[0])!;
  return renderPostOg(post);
}
