"use client";

import { motion, type Variants } from "framer-motion";
import type { Locale } from "@/lib/locale";
import { getContent } from "@/content";
import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type Props = { locale: Locale };

const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

const word: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 + i * 0.06, duration: 0.9, ease: EDITORIAL_EASE },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: EDITORIAL_EASE },
  }),
};

export function HeroManifesto({ locale }: Props) {
  const c = getContent(locale);
  const { lead, tail } = c.home.manifesto;
  const leadWords = lead.split(" ");
  const tailWords = tail.split(" ");

  return (
    <section className="relative overflow-hidden">
      <Container width="wide" className="pt-12 pb-20 md:pt-16 md:pb-28">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex flex-wrap items-center gap-3"
        >
          <Eyebrow pulse>
            {c.ui.now} · {c.ui.based} Montevideo / Santiago
          </Eyebrow>
          <span aria-hidden className="h-px w-12 bg-stroke" />
          <Eyebrow>{c.home.eyebrow}</Eyebrow>
        </motion.div>

        <h1 className="mt-14 md:mt-20">
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
          <span aria-hidden className="display-xxl mt-2 block text-cream-dim italic">
            {tailWords.map((w, i) => (
              <motion.span
                key={`tail-${i}`}
                variants={word}
                initial="hidden"
                animate="show"
                custom={leadWords.length + i}
                className="mr-[0.18em] inline-block"
                style={{
                  fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1',
                }}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <div className="mt-16 grid gap-12 border-t border-stroke pt-10 md:mt-24 md:grid-cols-12 md:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1.1}
            className="md:col-span-7"
          >
            <p className="font-display text-[clamp(20px,2.1vw,28px)] leading-[1.35] text-cream">
              {c.home.bioOneLine}
            </p>
            <p className="mt-6 max-w-[60ch] text-body text-cream-dim">{c.home.intro}</p>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1.3}
            className="md:col-span-5 md:col-start-9"
          >
            <div className="border-l border-teal/40 pl-5">
              <Eyebrow>{c.ui.now}</Eyebrow>
              <p className="mt-3 text-small text-cream">{c.home.nowStatus}</p>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}
