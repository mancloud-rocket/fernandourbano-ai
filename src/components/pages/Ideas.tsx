import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { CurrentlyWriting } from "@/components/ideas/CurrentlyWriting";
import { VolumeIndex } from "@/components/ideas/VolumeIndex";

type Props = { locale: Locale };

export function IdeasPage({ locale }: Props) {
  const c = getContent(locale);
  const w = c.ideas.currentlyWriting;

  return (
    <PageShell locale={locale} segment="ideas">
      <header className="border-b border-stroke">
        <Container width="wide" className="py-20 md:py-28">
          <Eyebrow number="04">{c.ideas.eyebrow}</Eyebrow>
          <h1 className="mt-6 display-xl text-cream">{c.ideas.title}</h1>
          <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{c.ideas.intro}</p>
        </Container>
      </header>

      <section>
        <Container width="wide" className="py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <VolumeIndex pillars={c.ideas.pillars} comingSoon={c.ui.comingSoon} />
            </div>
            <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
              <CurrentlyWriting
                label={c.ui.currentlyWriting}
                title={w.title}
                status={w.status}
                eta={w.eta}
              />
              <Link
                href={c.ideas.newsletter.href}
                className="mt-6 block border border-stroke p-5 font-mono text-[11px] uppercase tracking-[0.2em] text-cream-dim transition-colors hover:border-teal hover:text-cream"
              >
                {c.ideas.newsletter.label}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
