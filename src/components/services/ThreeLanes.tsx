import type { ServiceLane } from "@/content/types";

type Props = { lanes: ServiceLane[] };

export function ThreeLanes({ lanes }: Props) {
  return (
    <ol className="grid gap-px overflow-hidden border border-stroke lg:grid-cols-3">
      {lanes.map((lane) => (
        <li key={lane.number} className="flex flex-col bg-ink p-8 md:p-10 lg:min-h-[420px]">
          <div className="flex items-start justify-between border-b border-stroke pb-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
              {lane.number}
            </span>
            <span className="pulse-dot" aria-hidden />
          </div>
          <h3 className="mt-8 display-md text-cream">{lane.title}</h3>
          <p className="mt-4 flex-1 text-body text-cream-dim">{lane.blurb}</p>
          <ul className="mt-8 space-y-2 border-t border-stroke pt-6">
            {lane.engagements.map((e) => (
              <li
                key={e}
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute"
              >
                {e}
              </li>
            ))}
          </ul>
          <div className="mt-10 border-t border-stroke pt-6">
            <span className="font-display text-[40px] leading-none text-cream">
              {lane.stat.value}
            </span>
            <span className="mt-1 block text-small text-cream-dim">{lane.stat.label}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}
