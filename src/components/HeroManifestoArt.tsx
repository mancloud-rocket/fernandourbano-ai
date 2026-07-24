"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { clsx } from "clsx";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { portraits } from "@/content/portraits";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";
import { LocationStrip } from "./LocationStrip";

type Props = { locale: Locale };

const ROTATE_MS = 7000;
const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

const word: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.2 + i * 0.06, duration: 0.95, ease: EDITORIAL_EASE },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.85, ease: EDITORIAL_EASE },
  }),
};

export function HeroManifestoArt({ locale }: Props) {
  const c = getContent(locale);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = portraits[idx];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % portraits.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const selectPortrait = useCallback((next: number) => {
    setIdx(next);
    setPaused(true);
  }, []);

  const { lead, tail } = c.home.manifesto;
  const leadWords = lead.split(" ");
  const tailWords = tail.split(" ");

  return (
    <section className="relative isolate overflow-hidden">
      {/* Topography drift — atmosphere, not decoration */}
      <Topography />
      {/* Corner vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, transparent 50%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      <Container width="wide" className="relative z-10 pt-8 pb-20 md:pt-10 md:pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <LocationStrip locale={locale} />
        </motion.div>

        <div className="mt-12 grid gap-y-12 md:mt-16 md:grid-cols-12 md:gap-x-6">
          {/* Manifesto — left column, but the italic tail extends across the gutter */}
          <div className="relative md:col-span-7 md:col-start-1">
            <h1 className="relative z-20">
              <span className="sr-only">{`${lead} ${tail}`}</span>
              <span aria-hidden className="display-xxl block text-cream">
                {leadWords.map((w, i) => (
                  <motion.span
                    key={`lead-${i}`}
                    variants={word}
                    initial="hidden"
                    animate="show"
                    custom={i}
                    className="mr-[0.18em] inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
              <span
                aria-hidden
                className="display-xxl mt-2 block w-full text-cream italic md:relative md:z-30 md:w-[120%]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1' }}
              >
                {tailWords.map((w, i) => (
                  <motion.span
                    key={`tail-${i}`}
                    variants={word}
                    initial="hidden"
                    animate="show"
                    custom={leadWords.length + i}
                    className="mr-[0.18em] inline-block"
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            </h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1.4}
              className="mt-12 max-w-[58ch]"
            >
              <p className="font-display text-[clamp(20px,2vw,26px)] leading-[1.35] text-cream">
                {c.home.bioOneLine}
              </p>
              <p className="mt-5 text-body text-cream-dim">{c.home.intro}</p>
            </motion.div>
          </div>

          {/* Portrait — right column, dominant, cinematic */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.6}
            className="relative md:col-span-5 md:col-start-8 md:-mt-12"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <PortraitFrame activeId={active.id} locale={locale} />

            {/* Caption beneath the portrait. The line is locked to a single
                row and a fixed height: captions differ in length, so letting
                it wrap made every rotation shove the rest of the page down.
                Only the location metadata is shown; the kind of shot is
                already stated by the badge over the photo. */}
            <div className="mt-5 flex items-start justify-between gap-4 border-t border-stroke pt-4">
              {/* Plate number and caption animate as one unit. Animating only
                  the caption left the number already switched next to the
                  previous photo's caption during the transition. */}
              <div className="relative h-[34px] min-w-0 flex-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`cap-${active.id}`}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
                    className="absolute inset-0"
                  >
                    <span className="block font-mono text-[10px] uppercase leading-[14px] tracking-[0.22em] text-teal">
                      Plate {active.number}
                    </span>
                    <span className="mt-1 block truncate font-mono text-[11px] uppercase leading-[16px] tracking-[0.22em] text-cream-dim">
                      {active.caption[locale]}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
              <span
                className={clsx(
                  "font-mono text-[10px] uppercase tracking-[0.22em]",
                  paused ? "text-cream-mute" : "text-teal",
                )}
              >
                {paused ? "paused" : "auto"}
              </span>
            </div>

            {/* Contact sheet — 6 thumbs as facet picker */}
            <ul className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {portraits.map((p, i) => {
                const isActive = i === idx;
                return (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => selectPortrait(i)}
                      aria-label={`${p.facetLabel[locale]}: ${p.styleLabel[locale]}`}
                      aria-pressed={isActive}
                      className={clsx(
                        "group relative block w-full overflow-hidden border transition-all",
                        "aspect-[3/4]",
                        isActive
                          ? "border-teal"
                          : "border-stroke hover:border-stroke-strong",
                      )}
                    >
                      <img
                        src={p.src}
                        alt=""
                        aria-hidden
                        className={clsx(
                          "absolute inset-0 h-full w-full object-cover transition-all duration-500",
                          isActive
                            ? "opacity-100 saturate-100"
                            : "opacity-55 saturate-0 group-hover:opacity-90 group-hover:saturate-100",
                        )}
                      />
                      <span
                        className={clsx(
                          "absolute bottom-1 left-1 font-mono text-[8px] uppercase tracking-[0.18em]",
                          isActive ? "text-teal" : "text-cream-dim",
                        )}
                      >
                        {p.number}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

          </motion.div>
        </div>

        {/* Now-status: moved below the main grid so the portrait gets full breathing room */}
        <motion.aside
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1.6}
          className="relative z-10 mt-16 border-t border-stroke pt-8 md:mt-24"
        >
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-3">
              <Eyebrow pulse>{c.ui.now}</Eyebrow>
            </div>
            <p className="md:col-span-9 max-w-[70ch] text-body text-cream">
              {c.home.nowStatus}
            </p>
          </div>
        </motion.aside>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------------- */

function PortraitFrame({ activeId, locale }: { activeId: string; locale: Locale }) {
  return (
    <div className="photo-graded relative aspect-[3/4] w-full overflow-hidden border border-stroke-strong bg-ink-deep">
      {/* teal frame indicator on the active corner */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-20 h-6 w-6 border-l-2 border-t-2 border-teal"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 z-20 h-6 w-6 border-r-2 border-b-2 border-teal"
      />

      <AnimatePresence mode="sync">
        {portraits.map((p) =>
          p.id === activeId ? (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
              transition={{ duration: 1.2, ease: EDITORIAL_EASE }}
              className="absolute inset-0"
            >
              {/* Ken Burns: slow inner zoom while visible */}
              <motion.img
                src={p.src}
                alt={`Fernando Urbano, ${p.styleLabel[locale]}`}
                initial={{ scale: 1 }}
                animate={{ scale: 1.06 }}
                transition={{
                  duration: ROTATE_MS / 1000 + 4,
                  ease: "linear",
                }}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Soft inner edge so the photo bleeds into the page */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(5,5,6,0.55) 100%)",
                }}
              />
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>

      {/* Facet badge floats top-right over photo */}
      <AnimatePresence mode="wait">
        {portraits.map((p) =>
          p.id === activeId ? (
            <motion.div
              key={`badge-${p.id}`}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4, ease: EDITORIAL_EASE, delay: 0.3 }}
              className="absolute right-3 top-3 z-20"
            >
              <span className="bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-cream backdrop-blur-sm">
                {p.facetLabel[locale]}
              </span>
            </motion.div>
          ) : null,
        )}
      </AnimatePresence>
    </div>
  );
}

/* -------------------------------------------------------------------- */

/**
 * Editorial topographic curves drifting slowly in the background.
 * Pure SVG + CSS animation, no canvas, no perf cost.
 */
function Topography() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.18]"
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute -left-[10%] -top-[10%] h-[120%] w-[120%]"
        style={{ animation: "drift 90s linear infinite" }}
      >
        <defs>
          <pattern id="contour" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={i}
                d={`M -100 ${60 + i * 60} Q 400 ${20 + i * 60} 800 ${80 + i * 60} T 1700 ${50 + i * 60}`}
                fill="none"
                stroke="#3dede8"
                strokeOpacity={0.35 + (i % 3) * 0.1}
                strokeWidth={i % 4 === 0 ? 1.4 : 0.6}
              />
            ))}
          </pattern>
        </defs>
        <rect width="1600" height="900" fill="url(#contour)" />
      </svg>
      <style>{`
        @keyframes drift {
          0%   { transform: translate3d(0, 0, 0); }
          50%  { transform: translate3d(-3%, 2%, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="drift"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
