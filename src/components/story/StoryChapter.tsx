import type { StoryChapter as Chapter } from "@/content/types";
import { Flag } from "@/components/Flags";
import { RevealImage } from "./RevealImage";

type Props = { chapter: Chapter };

export function StoryChapterBlock({ chapter }: Props) {
  return (
    <article className="grid gap-10 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-2 md:sticky md:top-28 md:self-start">
        <span className="display-xl block text-teal leading-none">{chapter.year}</span>
        <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-cream-mute">
          {chapter.number}
        </span>
      </div>

      <div className="md:col-span-4">
        <RevealImage
          src={chapter.imageSrc}
          colorSrc={chapter.imageColorSrc}
          alt={chapter.imageAlt}
        />
      </div>

      <div className="md:col-span-6 flex flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2">
          <Flag code={chapter.countryCode} />
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute">
            {chapter.city} · {chapter.country}
          </span>
        </div>
        <h3 className="mt-4 display-md text-cream">{chapter.title}</h3>
        <p className="mt-2 font-display text-[18px] italic text-cream-dim">
          {chapter.tagline}
        </p>
        {chapter.company ? (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-teal">
            {chapter.company}
            {chapter.role ? ` · ${chapter.role}` : ""}
          </p>
        ) : null}
        <p className="mt-6 max-w-[58ch] text-body text-cream-dim">{chapter.body}</p>
      </div>
    </article>
  );
}
