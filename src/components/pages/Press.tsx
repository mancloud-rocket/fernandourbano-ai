import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { AwardsMonument } from "@/components/press/AwardsMonument";
import { MentionReel } from "@/components/press/MentionReel";

type Props = { locale: Locale };

export function PressPage({ locale }: Props) {
  const c = getContent(locale);
  return (
    <PageShell locale={locale} segment="prensa">
      <header className="border-b border-stroke">
        <Container width="wide" className="py-20 md:py-28">
          <Eyebrow number="05">{c.press.eyebrow}</Eyebrow>
          <h1 className="mt-6 display-xl text-cream">{c.press.title}</h1>
          <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{c.press.intro}</p>
        </Container>
      </header>

      <section>
        <Container width="wide" className="py-20 md:py-28">
          <AwardsMonument awards={c.press.awards} />
          <MentionReel
            title={c.press.mentionsTitle}
            intro={c.press.mentionsIntro}
            mentions={c.press.mentions}
          />
          <div className="mt-20 grid gap-8 border-t border-stroke pt-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <Eyebrow>Press kit</Eyebrow>
              <h2 className="mt-5 display-lg text-cream">
                For producers
                <br />
                <em className="italic text-cream-dim">and editors.</em>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-body text-cream-dim">{c.press.pressKitBlurb}</p>
              <a
                href="mailto:hola@fernandourbano.ai?subject=Press%20kit"
                className="group mt-8 inline-flex items-baseline gap-2 border-b border-teal pb-1 font-display text-[20px] text-cream hover:text-teal"
              >
                {c.ctas.pressKit}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  —&gt;
                </span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
