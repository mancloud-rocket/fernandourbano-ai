import { clsx } from "clsx";
import type { ExpertiseArea } from "@/content/types";
import type { Locale } from "@/lib/locale";

type Props = {
  title: string;
  intro: string;
  areas: ExpertiseArea[];
  locale: Locale;
};

/**
 * Years are the claim that can actually be checked, so they lead. The level is
 * a self-assessment, so it stays a quiet five-tick scale instead of a filled
 * bar: the previous solid bars were the loudest thing on the page while being
 * the least verifiable content on it.
 */
export function ExpertiseSpectrum({ title, intro, areas, locale }: Props) {
  const yearsLabel = locale === "es" ? "años" : "yrs";

  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-8">
      <header className="md:col-span-4">
        <h2 className="display-lg text-cream">{title}</h2>
        <p className="mt-4 max-w-[36ch] text-body text-cream-dim">{intro}</p>
      </header>

      <ul className="md:col-span-8 divide-y divide-stroke border-y border-stroke">
        {areas.map((area) => (
          <li key={area.id}>
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-6">
              <div className="min-w-0">
                <h3 className="font-display text-[21px] leading-tight text-cream">
                  {area.name}
                </h3>
                <p className="mt-1.5 text-small text-cream-mute">{area.caption}</p>
              </div>

              <div className="flex shrink-0 flex-col items-end gap-2.5">
                <p className="flex items-baseline gap-1.5">
                  <span className="font-display text-[30px] leading-none text-cream">
                    {area.years}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                    {yearsLabel}
                  </span>
                </p>
                <LevelScale level={area.level} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Five ticks, filled to `level`. Quiet by design. */
function LevelScale({ level }: { level: number }) {
  return (
    <span className="flex items-center gap-[3px]" aria-label={`${level} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          aria-hidden
          className={clsx(
            "block h-[11px] w-[2px]",
            i < level ? "bg-teal/55" : "bg-stroke-strong",
          )}
        />
      ))}
    </span>
  );
}
