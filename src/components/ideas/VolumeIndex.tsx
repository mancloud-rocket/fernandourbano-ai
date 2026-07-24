import Link from "next/link";
import type { IdeaTeaser } from "@/content/types";
import type { Locale } from "@/lib/locale";
import { path } from "@/lib/locale";

type Props = { pillars: IdeaTeaser[]; readLabel: string; locale: Locale };

/**
 * Each row is a link, so it has to look like an object you can hit: a teal rail
 * grows on hover and focus and the whole row lifts. The left column carries the
 * essay number and reading time, both true; the previous "Vol 01 / Iss 01" was
 * magazine costume over three essays, and numbering only earns its place when
 * the order tells the reader something.
 *
 * No scroll-reveal here on purpose: this list IS the page. Content that starts
 * at opacity 0 disappears entirely if the observer never fires.
 */
export function VolumeIndex({ pillars, readLabel, locale }: Props) {
  return (
    <ul className="divide-y divide-stroke border-y border-stroke">
      {pillars.map((idea) => (
        <li key={idea.number}>
            <Link
              href={`${path(locale, "ideas")}/${idea.slug}`}
              className="group relative grid gap-4 py-10 pl-6 pr-2 transition-colors duration-300 hover:bg-teal-soft md:grid-cols-12 md:gap-8 md:py-12"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-teal transition-transform duration-500 ease-editorial group-hover:scale-y-100 group-focus-visible:scale-y-100"
              />

              <div className="md:col-span-2">
                <span className="font-display text-[26px] leading-none text-cream-mute transition-colors duration-300 group-hover:text-teal">
                  {idea.number}
                </span>
                <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                  {idea.readingTime}
                </span>
              </div>

              <div className="md:col-span-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute">
                  {idea.kicker}
                </span>
                <h3 className="mt-3 display-md text-cream transition-transform duration-500 ease-editorial group-hover:translate-x-1.5">
                  {idea.title}
                </h3>
                <p className="mt-3 font-display text-[18px] leading-snug text-cream-dim">
                  {idea.lead}
                </p>
                <p className="mt-2 max-w-[58ch] text-body text-cream-mute">{idea.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
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

              {/* The whole row is the target and the title already moves on
                  hover, so a full "keep reading" label was one accessory too
                  many. The arrow carries it; the label stays for screen readers. */}
              <div className="flex items-end md:col-span-2 md:justify-end">
                <span className="font-mono text-[15px] text-cream-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-teal">
                  <span className="sr-only">{readLabel}</span>
                  <span aria-hidden>—&gt;</span>
                </span>
              </div>
            </Link>
        </li>
      ))}
    </ul>
  );
}
