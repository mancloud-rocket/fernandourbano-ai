import type { ReactNode } from "react";
import type { Locale } from "@/lib/locale";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

type Props = {
  locale: Locale;
  segment: string;
  children: ReactNode;
};

export function PageShell({ locale, segment, children }: Props) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:border focus:border-teal focus:bg-ink-deep focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.2em] focus:text-cream"
      >
        Skip to content
      </a>
      <Nav locale={locale} currentSegment={segment} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer locale={locale} currentSegment={segment} />
    </>
  );
}
