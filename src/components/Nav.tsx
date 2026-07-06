import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { path } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "./Container";
import { LocaleSwitch } from "./LocaleSwitch";
import { Logo } from "./Logo";
import { NavMobileMenu } from "./NavMobileMenu";
import { ScrollProgress } from "./ScrollProgress";

type Props = {
  locale: Locale;
  /** Segment currently active, used for locale switching. */
  currentSegment?: string;
};

export function Nav({ locale, currentSegment = "" }: Props) {
  const c = getContent(locale);

  return (
    <>
    <ScrollProgress />
    <header className="sticky top-0 z-50 border-b border-stroke bg-ink/85 backdrop-blur-md">
      <Container width="wide" className="flex items-center justify-between gap-4 py-4 md:gap-6 md:py-5">
        <Link
          href={path(locale)}
          className="group inline-flex min-w-0 shrink-0 items-center transition-opacity hover:opacity-85"
          aria-label="Fernando Urbano"
        >
          <Logo variant="iso" height={48} priority className="sm:hidden" />
          <Logo
            variant="lockup"
            height={44}
            priority
            className="hidden sm:block md:hidden"
          />
          <Logo
            variant="lockup"
            height={52}
            priority
            className="hidden md:block"
          />
        </Link>

        <div className="flex shrink-0 items-center gap-3 md:gap-6">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {c.nav.map((item) => (
              <li key={item.segment}>
                <Link
                  href={path(locale, item.segment)}
                  className="group inline-flex items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cream-dim transition-colors hover:text-cream"
                >
                  <span className="text-cream-mute group-hover:text-teal">{item.number}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <LocaleSwitch current={locale} currentSegment={currentSegment} className="hidden sm:flex" />
        <NavMobileMenu locale={locale} items={c.nav} currentSegment={currentSegment} />
        </div>
      </Container>
    </header>
    </>
  );
}
