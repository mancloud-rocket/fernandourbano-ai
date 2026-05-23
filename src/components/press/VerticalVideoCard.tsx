"use client";

import { useState } from "react";
import type { PressMention } from "@/content/types";
import { toSafeEmbedUrl } from "@/lib/video";
import { VideoLightbox } from "@/components/speaking/VideoLightbox";

type Props = { mention: PressMention };

export function VerticalVideoCard({ mention }: Props) {
  const [open, setOpen] = useState(false);
  const thumb = mention.thumbnailSrc ?? "/mentions/placeholders/01.svg";
  const safeVideo =
    mention.videoUrl && toSafeEmbedUrl(mention.videoUrl)
      ? mention.videoUrl
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => safeVideo && setOpen(true)}
        className="group relative aspect-[9/16] w-full overflow-hidden border border-stroke bg-ink-deep text-left transition-colors hover:border-teal"
        disabled={!safeVideo}
      >
        <img
          src={thumb}
          alt=""
          className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:saturate-100 saturate-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-teal">
            {mention.year}
          </p>
          <p className="mt-1 font-display text-[16px] leading-tight text-cream">
            {mention.outlet}
          </p>
          <p className="mt-1 text-small text-cream-dim line-clamp-2">{mention.title}</p>
        </div>
        {safeVideo ? (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream opacity-0 transition-opacity group-hover:opacity-100">
            Play
          </span>
        ) : null}
      </button>
      {safeVideo ? (
        <VideoLightbox
          url={open ? safeVideo : null}
          title={mention.title}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
