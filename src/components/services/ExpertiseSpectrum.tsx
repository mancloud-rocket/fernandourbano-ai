"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ExpertiseArea } from "@/content/types";

type Props = { title: string; intro: string; areas: ExpertiseArea[] };

export function ExpertiseSpectrum({ title, intro, areas }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="border-t border-stroke pt-20 md:pt-28">
      <div className="grid gap-8 md:grid-cols-12">
        <header className="md:col-span-4">
          <h2 className="display-lg text-cream">{title}</h2>
          <p className="mt-4 max-w-[40ch] text-body text-cream-dim">{intro}</p>
        </header>
        <ul className="md:col-span-8 space-y-8">
          {areas.map((area, i) => {
            const pct = (area.level / 5) * 100;
            const animate = inView && !reduced;
            return (
              <li key={area.id}>
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-display text-[20px] text-cream">{area.name}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-mute">
                    {area.years} yrs · L{area.level}
                  </span>
                </div>
                <div className="mt-3 h-8 overflow-hidden border border-stroke bg-ink-deep">
                  <motion.div
                    className="h-full bg-teal/80"
                    initial={{ width: 0 }}
                    animate={{ width: animate ? `${pct}%` : `${pct}%` }}
                    transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="mt-2 text-small text-cream-mute">{area.caption}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
