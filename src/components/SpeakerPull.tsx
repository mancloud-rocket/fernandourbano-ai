import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { path } from "@/lib/locale";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type Props = { locale: Locale };

export function SpeakerPull({ locale }: Props) {
  const c = getContent(locale);
  return (
    <section>
      <Container width="wide" className="py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <header className="md:col-span-5">
            <Eyebrow>{c.home.speakerPull.eyebrow}</Eyebrow>
            <h2 className="mt-5 display-lg text-cream">
              {c.home.speakerPull.title}
            </h2>
          </header>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8">
            <p className="text-lead text-cream-dim">{c.home.speakerPull.blurb}</p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href={path(locale, "contacto")}
                className="group inline-flex items-baseline gap-2 border-b border-teal pb-1 font-display text-[20px] text-cream transition-colors hover:text-teal"
              >
                {c.ctas.contact}
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  —&gt;
                </span>
              </Link>
              <Link
                href={path(locale, "charlas")}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute hover:text-cream"
              >
                {c.ui.selectedTalks}
              </Link>
              <Link
                href={path(locale, "prensa")}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute hover:text-cream"
              >
                {c.ctas.pressKit}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
