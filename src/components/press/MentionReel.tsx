import type { PressMention } from "@/content/types";
import { VerticalVideoCard } from "./VerticalVideoCard";

type Props = { title: string; intro: string; mentions: PressMention[] };

export function MentionReel({ title, intro, mentions }: Props) {
  return (
    <div className="border-t border-stroke pt-20 md:pt-28">
      <h2 className="display-lg text-cream">{title}</h2>
      <p className="mt-4 max-w-[58ch] text-body text-cream-dim">{intro}</p>
      <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {mentions.map((m) => (
          <li key={m.title + m.year}>
            <VerticalVideoCard mention={m} />
          </li>
        ))}
      </ul>
    </div>
  );
}
