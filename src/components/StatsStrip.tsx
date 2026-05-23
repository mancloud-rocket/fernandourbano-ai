import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "./Container";

type Props = { locale: Locale };

export function StatsStrip({ locale }: Props) {
  const c = getContent(locale);
  return (
    <section aria-label="Stats" className="border-y border-stroke bg-ink-raise/40">
      <Container width="wide" className="grid grid-cols-2 divide-y divide-stroke md:grid-cols-4 md:divide-x md:divide-y-0">
        {c.home.stats.map((s, i) => (
          <div key={s.label} className="flex flex-col items-start gap-3 px-2 py-8 md:px-8 md:py-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream-mute">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-[clamp(36px,4vw,56px)] leading-none tracking-[-0.02em] text-cream">
              {s.value}
            </span>
            <span className="text-small text-cream-dim">{s.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
