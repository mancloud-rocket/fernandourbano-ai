import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/locale";
import { path } from "@/lib/locale";
import { getContent } from "@/content";
import { getArticleBody } from "@/content/articles";
import type { ArticleBlock } from "@/content/types";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

type Props = { locale: Locale; slug: string };

/** Split plain text on **bold** markers into React nodes. */
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="font-display text-[clamp(21px,2.4vw,28px)] leading-[1.4] text-cream">
          {rich(block.text)}
        </p>
      );
    case "p":
      return <p className="mt-6 text-[18px] leading-[1.75] text-cream-dim">{rich(block.text)}</p>;
    case "h2":
      return <h2 className="mt-14 display-md text-cream">{block.text}</h2>;
    case "quote":
      return (
        <figure className="my-12 border-l-2 border-teal pl-6">
          <blockquote className="font-display text-[clamp(22px,2.6vw,32px)] italic leading-[1.25] text-cream">
            {block.text}
          </blockquote>
          {block.cite ? (
            <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-cream-mute">
              {block.cite}
            </figcaption>
          ) : null}
        </figure>
      );
    case "list":
      return (
        <ul className="mt-8 space-y-3 pl-1">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[18px] leading-[1.7] text-cream-dim">
              <span aria-hidden className="mt-[10px] h-[6px] w-[6px] shrink-0 bg-teal" />
              <span>{rich(it)}</span>
            </li>
          ))}
        </ul>
      );
    case "num":
      return (
        <ol className="mt-8 space-y-6">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-5">
              <span className="shrink-0 font-mono text-[13px] text-teal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[18px] leading-[1.7] text-cream-dim">{rich(it)}</span>
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

export function ArticlePage({ locale, slug }: Props) {
  const c = getContent(locale);
  const teaser = c.ideas.pillars.find((p) => p.slug === slug);
  const body = getArticleBody(locale, slug);
  if (!teaser || !body) notFound();

  return (
    <PageShell locale={locale} segment="ideas">
      <header className="border-b border-stroke">
        <Container width="narrow" className="py-20 md:py-28">
          <Link
            href={path(locale, "ideas")}
            className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream-mute transition-colors hover:text-teal"
          >
            &lt;— {c.ideas.eyebrow}
          </Link>
          <div className="mt-8">
            <Eyebrow>{teaser.kicker}</Eyebrow>
          </div>
          <h1 className="mt-5 display-xl text-cream">{teaser.title}</h1>
          <p className="mt-8 font-display text-[clamp(20px,2.2vw,26px)] leading-snug text-cream-dim">
            {teaser.lead}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-stroke pt-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream-mute">
              {teaser.readingTime}
            </span>
            <div className="flex flex-wrap gap-2">
              {teaser.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-stroke px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-cream-mute"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </header>

      <article>
        <Container width="narrow" className="py-16 md:py-24">
          <div className="prose-editorial">
            {body.map((block, i) => (
              <Reveal key={i}>
                <Block block={block} />
              </Reveal>
            ))}
          </div>

          <div className="mt-20 border-t border-stroke pt-10">
            <Link
              href={path(locale, "ideas")}
              className="group inline-flex items-baseline gap-2 border-b border-teal pb-1 font-display text-[20px] text-cream transition-colors hover:text-teal"
            >
              {c.ctas.seeAll}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                —&gt;
              </span>
            </Link>
          </div>
        </Container>
      </article>
    </PageShell>
  );
}
