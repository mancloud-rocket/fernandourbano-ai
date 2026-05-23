import type { PressAward } from "@/content/types";

type Props = { awards: PressAward[] };

export function AwardsMonument({ awards }: Props) {
  return (
    <ol className="space-y-0">
      {awards.map((a, i) => (
        <li
          key={a.year + a.outlet}
          className="grid gap-8 border-t border-stroke py-16 md:grid-cols-12 md:py-24"
        >
          <div className="md:col-span-3">
            <span className="display-xl block leading-none text-teal">{a.year}</span>
            <span className="mt-4 block font-mono text-[10px] uppercase tracking-[0.22em] text-cream-mute">
              {String(i + 1).padStart(2, "0")} / {awards.length}
            </span>
          </div>
          <div className="md:col-span-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute">
              {a.outlet}
            </p>
            <h3 className="mt-4 display-lg text-cream">{a.title}</h3>
            <p className="mt-6 max-w-[62ch] text-body text-cream-dim">{a.description}</p>
            <span aria-hidden className="mt-8 block h-px w-16 bg-teal" />
          </div>
        </li>
      ))}
    </ol>
  );
}
