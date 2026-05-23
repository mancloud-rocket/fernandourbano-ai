import { clsx } from "clsx";
import type { ContactIntent } from "@/content/types";

type Props = {
  intents: ContactIntent[];
  selected: string | null;
  onSelect: (id: string) => void;
};

export function IntentSelector({ intents, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup">
      {intents.map((intent) => {
        const active = selected === intent.id;
        return (
          <button
            key={intent.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(intent.id)}
            className={clsx(
              "border px-4 py-3 text-left transition-colors",
              active
                ? "border-teal bg-teal-soft"
                : "border-stroke hover:border-stroke-strong",
            )}
          >
            <span className="block font-display text-[18px] text-cream">
              {intent.label}
            </span>
            <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-cream-mute">
              {intent.helper}
            </span>
          </button>
        );
      })}
    </div>
  );
}
