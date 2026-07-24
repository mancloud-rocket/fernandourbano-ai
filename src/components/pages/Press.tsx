import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { RouteRule } from "@/components/RouteRule";
import { AwardsMonument } from "@/components/press/AwardsMonument";
import { MentionReel } from "@/components/press/MentionReel";

type Props = { locale: Locale };

export function PressPage({ locale }: Props) {
  const c = getContent(locale);
  return (
    <PageShell locale={locale} segment="prensa">
      <Section as="header" tone="base" space="lg">
        <Eyebrow number="06">{c.press.eyebrow}</Eyebrow>
        <h1 className="mt-6 display-xl text-cream">{c.press.title}</h1>
        <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{c.press.intro}</p>
      </Section>

      <Section tone="base" space="none">
        <AwardsMonument awards={c.press.awards} />
      </Section>

      <Section tone="plane" space="md">
        <MentionReel
          title={c.press.mentionsTitle}
          intro={c.press.mentionsIntro}
          mentions={c.press.mentions}
        />
      </Section>

      <Section tone="base" space="md">
        <RouteRule className="mb-12" />
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Press kit</Eyebrow>
            <h2 className="mt-5 display-lg text-cream">
              {locale === "es" ? "Para prensa" : "For producers"}
              <br />
              <em className="italic text-cream-dim">
                {locale === "es" ? "y medios." : "and editors."}
              </em>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-body text-cream-dim">{c.press.pressKitBlurb}</p>
            <a
              href="/press/press-kit.pdf"
              download
              className="group mt-8 inline-flex items-baseline gap-2 border-b border-teal pb-1 font-display text-[20px] text-cream hover:text-teal"
            >
              {c.ctas.pressKit}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                —&gt;
              </span>
            </a>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
