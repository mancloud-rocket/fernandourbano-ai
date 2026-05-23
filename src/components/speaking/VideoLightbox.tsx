"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";
import { toSafeEmbedUrl } from "@/lib/video";

type Props = {
  url: string | null;
  title: string;
  onClose: () => void;
};

export function VideoLightbox({ url, title, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const embedUrl = url ? toSafeEmbedUrl(url) : null;

  useEffect(() => {
    if (!url) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [url, onClose]);

  if (!url) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-lightbox-title"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        aria-label="Close"
      />
      <div className="relative z-10 w-full max-w-4xl border border-stroke-strong bg-ink-deep">
        <div className="flex items-center justify-between gap-4 border-b border-stroke px-4 py-3">
          <span
            id="video-lightbox-title"
            className="min-w-0 truncate font-mono text-[11px] uppercase tracking-[0.2em] text-cream"
          >
            {title}
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-cream-mute hover:text-teal"
          >
            Close
          </button>
        </div>
        <div className={clsx("aspect-video w-full bg-ink")}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={title}
              className="h-full w-full"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p className="flex h-full items-center justify-center px-6 text-center text-small text-cream-mute">
              Video no disponible en este reproductor.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
