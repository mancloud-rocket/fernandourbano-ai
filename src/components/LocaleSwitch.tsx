import Link from "next/link";
import { clsx } from "clsx";
import type { Locale } from "@/lib/locale";
import { switchLocalePath } from "@/lib/locale";

type Props = {
  current: Locale;
  /** Path segment of the current page (e.g. "historia" or "") so we keep the user on the same page. */
  currentSegment?: string;
  className?: string;
};

export function LocaleSwitch({ current, currentSegment = "", className }: Props) {
  return (
    <div className={clsx("inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.18em]", className)}>
      <Link
        href={switchLocalePath("es", currentSegment)}
        aria-current={current === "es" ? "true" : undefined}
        className={clsx(
          "px-2 py-1 transition-colors",
          current === "es" ? "text-cream" : "text-cream-mute hover:text-cream",
        )}
      >
        ES
      </Link>
      <span aria-hidden className="text-cream-mute">
        /
      </span>
      <Link
        href={switchLocalePath("en", currentSegment)}
        aria-current={current === "en" ? "true" : undefined}
        className={clsx(
          "px-2 py-1 transition-colors",
          current === "en" ? "text-cream" : "text-cream-mute hover:text-cream",
        )}
      >
        EN
      </Link>
    </div>
  );
}
