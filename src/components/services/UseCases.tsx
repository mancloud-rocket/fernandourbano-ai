import type { UseCase } from "@/content/types";

type Props = { title: string; cases: UseCase[] };

export function UseCases({ title, cases }: Props) {
  return (
    <div className="border-t border-stroke pt-20 md:pt-28">
      <h2 className="display-lg text-cream">{title}</h2>
      <ol className="mt-10 divide-y divide-stroke border-y border-stroke">
        {cases.map((uc) => (
          <li key={uc.number} className="grid grid-cols-[auto_1fr] gap-6 py-8 md:gap-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
              {uc.number}
            </span>
            <div>
              <h3 className="font-display text-[22px] leading-tight text-cream">{uc.title}</h3>
              <p className="mt-2 max-w-[55ch] text-body text-cream-dim">{uc.blurb}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
