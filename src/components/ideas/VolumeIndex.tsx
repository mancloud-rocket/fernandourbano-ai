import Link from "next/link";
import type { IdeaTeaser } from "@/content/types";
import type { Locale } from "@/lib/locale";
import { path } from "@/lib/locale";

type Props = { pillars: IdeaTeaser[]; readLabel: string; locale: Locale };

export function VolumeIndex({ pillars, readLabel, locale }: Props) {
  return (
    <ul className="divide-y divide-stroke border-y border-stroke">
      {pillars.map((idea) => (
        <li key={idea.number}>
          <Link
            href={`${path(locale, "ideas")}/${idea.slug}`}
            className="group grid gap-6 py-12 transition-colors hover:bg-teal-soft md:grid-cols-12 md:gap-10 md:py-16"
          >
            <div className="md:col-span-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
                Vol {idea.volume}
              </span>
              <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                Iss {idea.issue}
              </span>
            </div>
            <div className="md:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute">
                {idea.kicker}
              </span>
              <h3 className="mt-4 display-md text-cream transition-transform duration-500 group-hover:translate-x-2">
                {idea.title}
              </h3>
              <p className="mt-4 font-display text-[18px] leading-snug text-cream-dim">
                {idea.lead}
              </p>
              <p className="mt-3 max-w-[58ch] text-body text-cream-mute">{idea.blurb}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {idea.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-stroke px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-cream-mute"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-start justify-between md:col-span-2 md:flex-col md:items-end">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream-mute">
                {idea.readingTime}
              </span>
              <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute group-hover:text-teal">
                {readLabel} —&gt;
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
