import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";

type Props = { locale: Locale };

export function ContactPage({ locale }: Props) {
  const c = getContent(locale);
  const primary = c.contact.methods[0];

  return (
    <PageShell locale={locale} segment="contacto">
      <header className="border-b border-stroke">
        <Container width="wide" className="py-20 md:py-28">
          <Eyebrow number="07">{c.contact.eyebrow}</Eyebrow>
          <h1 className="mt-6 display-xl text-cream">{c.contact.title}</h1>
          <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{c.contact.intro}</p>
        </Container>
      </header>

      <section className="border-b border-stroke">
        <Container width="wide" className="py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7">
              <Link
                href={primary.href}
                className="group inline-flex items-baseline gap-3 border-b border-teal pb-2 font-display text-[clamp(28px,4vw,44px)] text-cream transition-colors hover:text-teal"
              >
                {primary.value}
                <span aria-hidden className="text-[0.6em] transition-transform group-hover:translate-x-1">
                  —&gt;
                </span>
              </Link>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <Eyebrow>Channels</Eyebrow>
              <ul className="mt-8 space-y-px overflow-hidden border border-stroke">
                {c.contact.methods.map((m) => (
                  <li key={m.kind}>
                    <Link
                      href={m.href}
                      className="group block bg-ink p-6 transition-colors hover:bg-teal-soft"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute group-hover:text-teal">
                        {m.kind}
                      </span>
                      <p className="mt-3 font-display text-[20px] text-cream">{m.label}</p>
                      <p className="mt-1 text-small text-cream-dim">{m.value}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
