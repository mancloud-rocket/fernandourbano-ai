import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { path } from "@/lib/locale";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { ThreeLanes } from "@/components/services/ThreeLanes";
import { ExpertiseSpectrum } from "@/components/services/ExpertiseSpectrum";
import { UseCases } from "@/components/services/UseCases";

type Props = { locale: Locale };

export function ServicesPage({ locale }: Props) {
  const c = getContent(locale);
  return (
    <PageShell locale={locale} segment="que-hago">
      <header className="border-b border-stroke">
        <Container width="wide" className="py-20 md:py-28">
          <Eyebrow number="02">{c.services.eyebrow}</Eyebrow>
          <h1 className="mt-6 display-xl text-cream">{c.services.title}</h1>
          <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{c.services.intro}</p>
        </Container>
      </header>

      <section>
        <Container width="wide" className="py-20 md:py-28">
          <ThreeLanes lanes={c.services.lanes} />
          <ExpertiseSpectrum
            title={c.services.expertiseTitle}
            intro={c.services.expertiseIntro}
            areas={c.services.expertise}
          />
          <UseCases title={c.services.useCasesTitle} cases={c.services.useCases} />
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-stroke pt-10">
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
        </Container>
      </section>
    </PageShell>
  );
}
