import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Flag } from "./Flags";

type Props = { locale: Locale };

export function LocationStrip({ locale }: Props) {
  const t = getContent(locale).home.trip;

  return (
    <div className="border-y border-stroke-strong">
      <div className="flex flex-col gap-3 py-4 font-mono text-[11px] uppercase tracking-[0.2em] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-3 md:py-5">
        {/* NOW */}
        <span className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
          <span className="pulse-dot" aria-hidden />
          <span className="text-cream-mute">{t.nowLabel}</span>
          <Flag code={t.now.countryCode} style={{ width: "1.6em", height: "calc(1.6em * 2/3)" }} />
          <span className="text-cream">
            {t.now.city}, {t.now.country}
          </span>
        </span>

        {/* Flight path — solid hairline → plane → dashed hairline */}
        <span aria-hidden className="hidden flex-1 items-center gap-3 md:flex">
          <span
            className="flex-1"
            style={{ borderTop: "1px solid var(--color-stroke-strong)" }}
          />
          <PlaneIcon />
          <span
            className="flex-1"
            style={{ borderTop: "1px dashed var(--color-stroke-strong)" }}
          />
        </span>

        {/* NEXT */}
        <span className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-cream-mute">{t.nextLabel}</span>
          <Flag code={t.next.countryCode} style={{ width: "1.6em", height: "calc(1.6em * 2/3)" }} />
          <span className="text-cream">
            {t.next.city}, {t.next.country}
          </span>
          <span className="text-teal">·</span>
          <span className="text-teal">{t.next.when}</span>
        </span>
      </div>
    </div>
  );
}

function PlaneIcon() {
  return (
    <svg
      viewBox="0 0 24 12"
      role="img"
      aria-hidden
      className="h-3 w-6 text-teal"
      fill="currentColor"
    >
      <path d="M0.4 6 L9 5 L15 0.6 L16.7 0.6 L13.6 5 L19.6 5 L21.6 2.6 L22.7 2.6 L21.6 6 L22.7 9.4 L21.6 9.4 L19.6 7 L13.6 7 L16.7 11.4 L15 11.4 L9 7 L0.4 6 Z" />
    </svg>
  );
}
