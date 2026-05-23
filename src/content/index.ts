import type { Locale } from "@/lib/locale";
import { es } from "./es";
import { en } from "./en";
import type { SiteContent } from "./types";

const DICT: Record<Locale, SiteContent> = { es, en };

export function getContent(locale: Locale): SiteContent {
  return DICT[locale];
}
