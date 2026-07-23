import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/locale";
import { path } from "@/lib/locale";
import { getPost } from "@/content/posts";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { KineticPost } from "@/components/posts/KineticPost";

export function PostView({ locale, slug }: { locale: Locale; slug: string }) {
  const post = getPost(locale, slug);
  if (!post) notFound();

  return (
    <PageShell locale={locale} segment="posts">
      <Container width="narrow" className="pt-10">
        <Link
          href={path(locale, "posts")}
          className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream-mute transition-colors hover:text-teal"
        >
          &lt;— Posts
        </Link>
      </Container>
      <KineticPost post={post} locale={locale} />
    </PageShell>
  );
}
