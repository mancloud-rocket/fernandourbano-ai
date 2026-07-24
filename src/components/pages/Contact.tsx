import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";

type Props = { locale: Locale };

export function ContactPage({ locale }: Props) {
  const c = getContent(locale);
  const primary = c.contact.methods[0];

  return (
    <PageShell locale={locale} segment="contacto">
      <Section as="header" tone="base" space="lg">
        <Eyebrow number="07">{c.contact.eyebrow}</Eyebrow>
        <h1 className="mt-6 display-xl text-cream">{c.contact.title}</h1>
        <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{c.contact.intro}</p>
      </Section>

      <Section tone="plane" space="md">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Link
              href={primary.href}
              className="group inline-flex items-baseline gap-3 border-b border-teal pb-2 font-display text-[clamp(24px,3.4vw,40px)] text-cream transition-colors hover:text-teal"
            >
              {primary.value}
              <span
                aria-hidden
                className="text-[0.6em] transition-transform group-hover:translate-x-1"
              >
                —&gt;
              </span>
            </Link>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Eyebrow>{locale === "es" ? "Canales" : "Channels"}</Eyebrow>
            <ul className="mt-8 space-y-px overflow-hidden border border-stroke">
              {c.contact.methods.map((m) => (
                <li key={m.kind}>
                  <Link
                    href={m.href}
                    className="group relative block bg-ink p-6 transition-colors hover:bg-teal-soft"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-teal transition-transform duration-500 ease-editorial group-hover:scale-y-100 group-focus-visible:scale-y-100"
                    />
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
      </Section>
    </PageShell>
  );
}
