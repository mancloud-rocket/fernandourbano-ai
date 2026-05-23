import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "./Container";

type Props = { locale: Locale };

export function PullQuote({ locale }: Props) {
  const c = getContent(locale);
  return (
    <section className="border-y border-stroke bg-ink-deep">
      <Container width="wide" className="grid gap-10 py-24 md:grid-cols-12 md:py-32">
        <div aria-hidden className="hidden md:col-span-1 md:block">
          <span className="font-display text-[88px] leading-none text-teal">&ldquo;</span>
        </div>
        <figure className="md:col-span-10">
          <blockquote className="font-display text-[clamp(28px,3.2vw,48px)] leading-[1.15] tracking-[-0.01em] text-cream">
            <em className="italic">{c.home.quote.text}</em>
          </blockquote>
          <figcaption className="mt-8 inline-flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-teal" />
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-dim">
              {c.home.quote.attribution}
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
