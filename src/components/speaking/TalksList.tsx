"use client";

import { useMemo, useState } from "react";
import type { SpeakingEvent } from "@/content/types";
import { Flag } from "@/components/Flags";
import { toSafeEmbedUrl } from "@/lib/video";
import { VideoLightbox } from "./VideoLightbox";

type Props = {
  events: SpeakingEvent[];
  filterLabels: Record<string, string>;
  watchLabel: string;
};

export function TalksList({ events, filterLabels, watchLabel }: Props) {
  const [filter, setFilter] = useState<string>("all");
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState("");

  const formats = useMemo(() => {
    const set = new Set(events.map((e) => e.format));
    return ["all", ...Array.from(set)];
  }, [events]);

  const filtered =
    filter === "all" ? events : events.filter((e) => e.format === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {formats.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={
              filter === f
                ? "border border-teal bg-teal-soft px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream"
                : "border border-stroke px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute hover:border-stroke-strong hover:text-cream"
            }
          >
            {filterLabels[f] ?? f}
          </button>
        ))}
      </div>

      <ol className="mt-10 divide-y divide-stroke border-y border-stroke">
        {filtered.map((e, i) => (
          <li
            key={`${e.year}-${e.title}-${i}`}
            className="grid gap-4 py-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
              {e.year}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Flag code={e.countryCode} />
                <p className="font-display text-[20px] leading-tight text-cream">
                  {e.title}
                </p>
                {e.featured ? (
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal">
                    featured
                  </span>
                ) : null}
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                {e.venue} · {e.city} · {e.country}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-dim">
                [{e.format}]
              </span>
              {e.videoUrl && toSafeEmbedUrl(e.videoUrl) ? (
                <button
                  type="button"
                  onClick={() => {
                    setVideoUrl(e.videoUrl!);
                    setVideoTitle(e.title);
                  }}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal hover:underline"
                >
                  {watchLabel}
                </button>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <VideoLightbox
        url={videoUrl}
        title={videoTitle}
        onClose={() => setVideoUrl(null)}
      />
    </>
  );
}
