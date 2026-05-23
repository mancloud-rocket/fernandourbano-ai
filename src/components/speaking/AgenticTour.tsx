import type { SiteContent } from "@/content/types";
import { Flag } from "@/components/Flags";

type Props = {
  tour: SiteContent["speaking"]["agenticTour"];
};

export function AgenticTour({ tour }: Props) {
  return (
    <section className="border-b border-stroke bg-ink-deep">
      <div className="mx-auto w-full max-w-[1480px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
          {tour.eyebrow}
        </p>
        <h2
          className="mt-4 display-xl text-cream italic"
          style={{ fontVariationSettings: '"opsz" 120, "SOFT" 60, "WONK" 1' }}
        >
          {tour.title}
        </h2>
        <p className="mt-6 max-w-[58ch] text-body text-cream-dim">{tour.blurb}</p>

        <ul className="mt-14 grid gap-px overflow-hidden border border-stroke sm:grid-cols-2 lg:grid-cols-4">
          {tour.stops.map((stop) => (
            <li
              key={stop.countryCode}
              className="group bg-ink p-6 transition-colors hover:bg-teal-soft md:p-8"
            >
              <Flag code={stop.countryCode} style={{ width: "1.8em" }} />
              <p className="mt-4 font-display text-[22px] leading-tight text-cream transition-transform duration-500 group-hover:translate-x-1">
                {stop.city}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                {stop.country}
              </p>
              <p className="mt-4 text-small text-cream-dim">{stop.format}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
