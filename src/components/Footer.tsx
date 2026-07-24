import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { path } from "@/lib/locale";
import { Container } from "./Container";
import { LocaleSwitch } from "./LocaleSwitch";
import { Logo } from "./Logo";

type Props = {
  locale: Locale;
  currentSegment?: string;
};

export function Footer({ locale, currentSegment = "" }: Props) {
  const c = getContent(locale);
  const year = new Date().getFullYear();
  const ticker = [...c.footer.ticker, ...c.footer.ticker];

  return (
    <footer className="mt-20 border-t border-stroke bg-ink-deep">
      <div className="edge-fade-x overflow-hidden border-b border-stroke">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute">
          {ticker.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-12">
              <span aria-hidden className="text-teal">·</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      <Container width="wide" className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <Link
              href={path(locale)}
              aria-label="Fernando Urbano"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <Logo variant="lockup" height={36} />
            </Link>
            <p className="mt-8 font-display text-[clamp(32px,4vw,52px)] leading-[0.98] tracking-[-0.02em] text-cream">
              {c.footer.sloganLine1}
              <br />
              <em className="italic text-cream-dim">{c.footer.sloganLine2}</em>
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <ul className="space-y-2">
              {c.nav.map((item) => (
                <li key={item.segment}>
                  <Link
                    href={path(locale, item.segment)}
                    className="group inline-flex items-baseline gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cream-dim hover:text-cream"
                  >
                    <span className="text-cream-mute group-hover:text-teal">{item.number}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 flex flex-col gap-5">
            <div className="space-y-1">
              {c.contact.methods.map((m) => (
                <div key={m.kind} className="flex flex-col">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-mute">
                    {m.kind}
                  </span>
                  <Link
                    href={m.href}
                    className="text-small text-cream hover:text-teal"
                  >
                    {m.value}
                  </Link>
                </div>
              ))}
            </div>
            <LocaleSwitch current={locale} currentSegment={currentSegment} className="self-start" />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-stroke pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute">
            © {year} Fernando Urbano · {c.footer.rights}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute">
            Montevideo · Santiago · Internet
          </p>
        </div>
      </Container>
    </footer>
  );
}
