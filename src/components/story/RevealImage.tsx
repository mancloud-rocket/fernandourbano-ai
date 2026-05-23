"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { clsx } from "clsx";

type Props = {
  src: string;
  colorSrc?: string;
  alt: string;
  className?: string;
};

export function RevealImage({ src, colorSrc, alt, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();
  const hasColor = Boolean(colorSrc);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 1", "start 0.15"],
  });

  const colorOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.82, 1],
    [0, 0, 0.35, 1],
  );

  const grayscale = useTransform(scrollYProgress, [0, 0.55, 1], [100, 35, 0]);
  const sepia = useTransform(scrollYProgress, [0, 1], [22, 0]);
  const filter = useMotionTemplate`grayscale(${grayscale}%) sepia(${sepia}%)`;

  const scale = useTransform(scrollYProgress, [0, 1], [1.03, 1]);

  if (reduced) {
    return (
      <div
        ref={ref}
        className={clsx(
          "relative isolate aspect-[3/4] overflow-hidden border border-stroke-strong bg-ink-deep",
          className,
        )}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={clsx(
        "group relative isolate aspect-[3/4] overflow-hidden border border-stroke-strong bg-ink-deep",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20 h-5 w-5 border-l-2 border-t-2 border-teal opacity-0 transition-opacity group-hover:opacity-100"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 z-20 h-5 w-5 border-b-2 border-r-2 border-teal opacity-0 transition-opacity group-hover:opacity-100"
      />

      {hasColor ? (
        <>
          <motion.img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            initial={false}
            style={{ scale: hovered ? 1.05 : scale }}
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <motion.img
            src={colorSrc}
            alt=""
            aria-hidden
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0 }}
            style={{
              scale: hovered ? 1.05 : scale,
              opacity: hovered ? 1 : colorOpacity,
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          style={{
            scale: hovered ? 1.05 : scale,
            filter: hovered ? "grayscale(0%) sepia(0%)" : filter,
          }}
          className="h-full w-full object-cover"
        />
      )}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, rgba(5,5,6,0.65) 100%)",
        }}
      />
    </div>
  );
}
