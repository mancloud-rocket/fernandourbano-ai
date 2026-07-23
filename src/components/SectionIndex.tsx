import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type Props = { locale: Locale };

export function SectionIndex({ locale }: Props) {
  const c = getContent(locale);
  return (
    <section className="relative">
      <Container width="wide" className="py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <header className="md:col-span-4">
            <Eyebrow>Index · 01 - 06</Eyebrow>
            <h2 className="mt-5 display-lg text-cream">
              Recorré
              <br />
              la página como
              <br />
              <em className="text-cream-dim italic">una revista.</em>
            </h2>
          </header>

          <ul className="md:col-span-8">
            {c.home.sections.map((section, i) => (
              <li key={section.href} className="border-t border-stroke last:border-b">
                <Link
                  href={section.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 py-7 transition-colors hover:bg-teal-soft md:gap-10 md:py-9"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute group-hover:text-teal">
                    {section.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="display-md text-cream transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                      {section.title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-small text-cream-dim">
                      {section.blurb}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="self-center font-mono text-cream-mute transition-all duration-500 group-hover:translate-x-1 group-hover:text-teal"
                  >
                    {String(i + 1).padStart(2, "0")} —&gt;
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
