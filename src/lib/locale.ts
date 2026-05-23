export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Build a route path for a given locale.
 * - ES is the default and lives at the root (`/`, `/historia`, ...).
 * - EN is prefixed (`/en`, `/en/historia`, ...).
 */
export function path(locale: Locale, segment: string = ""): string {
  const clean = segment.replace(/^\/+|\/+$/g, "");
  if (locale === "es") {
    return clean === "" ? "/" : `/${clean}`;
  }
  return clean === "" ? "/en" : `/en/${clean}`;
}

/** Swap the current path between locales. Pass `currentSegment` like `historia` or `""`. */
export function switchLocalePath(
  target: Locale,
  currentSegment: string = "",
): string {
  return path(target, currentSegment);
}
