import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { path } from "@/lib/locale";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { RouteRule } from "@/components/RouteRule";
import { ThreeLanes } from "@/components/services/ThreeLanes";
import { ExpertiseSpectrum } from "@/components/services/ExpertiseSpectrum";
import { UseCases } from "@/components/services/UseCases";

type Props = { locale: Locale };

export function ServicesPage({ locale }: Props) {
  const c = getContent(locale);
  return (
    <PageShell locale={locale} segment="que-hago">
      <Section as="header" tone="base" space="lg">
        <Eyebrow number="02">{c.services.eyebrow}</Eyebrow>
        <h1 className="mt-6 display-xl text-cream">{c.services.title}</h1>
        <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{c.services.intro}</p>
      </Section>

      <Section tone="plane" space="md">
        <ThreeLanes lanes={c.services.lanes} />
      </Section>

      <Section tone="base" space="md">
        <ExpertiseSpectrum
          title={c.services.expertiseTitle}
          intro={c.services.expertiseIntro}
          areas={c.services.expertise}
          locale={locale}
        />
      </Section>

      <Section tone="plane" space="md">
        <UseCases title={c.services.useCasesTitle} cases={c.services.useCases} />
      </Section>

      <Section tone="base" space="sm">
        <RouteRule className="mb-10" />
        <div className="flex flex-wrap items-baseline gap-x-10 gap-y-4">
          <Link
            href={path(locale, "charlas")}
            className="group inline-flex items-baseline gap-2 border-b border-teal pb-1 font-display text-[20px] text-cream hover:text-teal"
          >
            {c.services.ctaTalks}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              —&gt;
            </span>
          </Link>
          <Link
            href={path(locale, "ideas")}
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute hover:text-cream"
          >
            {c.services.ctaContact}
          </Link>
        </div>
      </Section>
    </PageShell>
  );
}
