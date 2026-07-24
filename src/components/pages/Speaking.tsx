import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { path } from "@/lib/locale";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { RouteRule } from "@/components/RouteRule";
import { AgenticTour } from "@/components/speaking/AgenticTour";
import { TalksList } from "@/components/speaking/TalksList";

type Props = { locale: Locale };

const T = {
  es: { formats: "Formatos", formatsTitle: "Cinco formas en escena.", topics: "Temas" },
  en: { formats: "Formats", formatsTitle: "Five ways on stage.", topics: "Topics" },
} as const;

export function SpeakingPage({ locale }: Props) {
  const c = getContent(locale);
  const t = T[locale];

  return (
    <PageShell locale={locale} segment="charlas">
      <Section as="header" tone="base" space="lg">
        <Eyebrow number="03">{c.speaking.eyebrow}</Eyebrow>
        <h1 className="mt-6 display-xl text-cream">{c.speaking.title}</h1>
        <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{c.speaking.intro}</p>
      </Section>

      {/* Bespoke grid: full-bleed ledger band, same device as the Story stats. */}
      <section className="bg-ink-plane">
        <Container
          width="wide"
          className="grid grid-cols-2 divide-y divide-stroke md:grid-cols-4 md:divide-x md:divide-y-0"
        >
          {c.speaking.stats.map((s) => (
            <div key={s.label} className="px-4 py-8 md:px-8">
              <span className="font-display text-[clamp(28px,3vw,44px)] text-cream">
                {s.value}
              </span>
              <span className="mt-1 block text-small text-cream-dim">{s.label}</span>
            </div>
          ))}
        </Container>
      </section>

      <AgenticTour tour={c.speaking.agenticTour} />

      <Section tone="base" space="md">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>{t.formats}</Eyebrow>
            <h2 className="mt-5 display-lg text-cream">{t.formatsTitle}</h2>
          </div>
          <dl className="md:col-span-8 divide-y divide-stroke border-y border-stroke">
            {c.speaking.formats.map((f, i) => (
              <div key={f.name} className="grid grid-cols-[auto_1fr] gap-6 py-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </dt>
                <div>
                  <dd className="font-display text-[20px] text-cream">{f.name}</dd>
                  <dd className="mt-1 text-small text-cream-dim">{f.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="plane" space="md">
        <Eyebrow>{t.topics}</Eyebrow>
        <ul className="mt-8 grid gap-2 md:grid-cols-2">
          {c.speaking.topics.map((topic) => (
            <li
              key={topic}
              className="border border-stroke bg-ink p-5 text-body text-cream transition-colors hover:border-stroke-strong"
            >
              {topic}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="base" space="md">
        <Eyebrow>{c.ui.selectedTalks}</Eyebrow>
        <TalksList
          events={c.speaking.events}
          filterLabels={c.speaking.filterLabels}
          watchLabel={c.ctas.watch}
        />

        <RouteRule className="mb-10 mt-16" />
        <Link
          href={path(locale, "contacto")}
          className="group inline-flex items-baseline gap-2 border-b border-teal pb-1 font-display text-[20px] text-cream hover:text-teal"
        >
          {c.ctas.contact}
          <span aria-hidden className="transition-transform group-hover:translate-x-1">
            —&gt;
          </span>
        </Link>
      </Section>
    </PageShell>
  );
}
