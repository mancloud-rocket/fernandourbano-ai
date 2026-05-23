import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { StoryReel } from "@/components/story/StoryReel";

type Props = { locale: Locale };

export function StoryPage({ locale }: Props) {
  const c = getContent(locale);

  return (
    <PageShell locale={locale} segment="historia">
      <header className="border-b border-stroke">
        <Container width="wide" className="py-20 md:py-28">
          <Eyebrow number="01">{c.story.eyebrow}</Eyebrow>
          <h1 className="mt-6 display-xl text-cream">{c.story.title}</h1>
          <p className="mt-8 max-w-[62ch] font-display text-[clamp(20px,2.2vw,28px)] leading-[1.35] text-cream-dim">
            {c.story.lead}
          </p>
          <p className="mt-6 max-w-[60ch] text-body text-cream-mute">{c.story.intro}</p>
        </Container>
      </header>

      <section className="border-b border-stroke bg-ink-raise/30">
        <Container width="wide" className="grid grid-cols-2 divide-y divide-stroke md:grid-cols-4 md:divide-x md:divide-y-0">
          {c.story.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2 px-4 py-8 md:px-8 md:py-10">
              <span className="font-display text-[clamp(32px,4vw,48px)] leading-none text-cream">
                {s.value}
              </span>
              <span className="text-small text-cream-dim">{s.label}</span>
            </div>
          ))}
        </Container>
      </section>

      <section>
        <Container width="wide" className="py-20 md:py-32">
          <StoryReel chapters={c.story.chapters} />
        </Container>
      </section>

      <section className="border-t border-stroke">
        <Container width="wide" className="py-16 md:py-20">
          <Link
            href={c.story.footerCta.href}
            className="group inline-flex items-baseline gap-2 border-b border-teal pb-1 font-display text-[22px] text-cream hover:text-teal"
          >
            {c.story.footerCta.label}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              —&gt;
            </span>
          </Link>
        </Container>
      </section>
    </PageShell>
  );
}
