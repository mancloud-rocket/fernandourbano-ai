"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import type { Post } from "@/content/posts";
import type { Locale } from "@/lib/locale";
import { Container } from "@/components/Container";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

const word: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.2 + i * 0.05, duration: 0.7, ease: EASE },
  }),
};

type Props = { post: Post; locale: Locale };

export function KineticPost({ post, locale }: Props) {
  const titleWords = post.title.split(" ");
  const dateLabel = formatDate(post.date, locale);

  return (
    <section className="relative flex min-h-[78vh] flex-col justify-center overflow-hidden py-20 md:py-28">
      <Container width="narrow">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="font-mono text-[12px] uppercase tracking-[0.28em] text-teal"
          >
            {post.kicker}
          </motion.p>

          <h1 className="mt-6 display-xl text-cream">
            <span className="sr-only">{post.title}</span>
            <span aria-hidden>
              {titleWords.map((w, i) => (
                <motion.span
                  key={i}
                  variants={word}
                  custom={i}
                  className="mr-[0.22em] inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-[clamp(22px,3vw,34px)] italic leading-[1.2] text-cream-dim"
          >
            {post.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-12 h-px w-16 bg-teal" />

          <div className="mt-10 space-y-4">
            {post.lines.map((line, i) => (
              <motion.p
                key={i}
                variants={item}
                className="display-md text-cream"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.p
            variants={item}
            className="mt-12 max-w-[40ch] font-display text-[clamp(22px,2.8vw,32px)] leading-[1.25] text-teal"
          >
            {post.closing}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-stroke pt-8"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute">
              Fernando Urbano · {dateLabel}
            </div>
            <ShareRow post={post} locale={locale} />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function ShareRow({ post, locale }: { post: Post; locale: Locale }) {
  const [copied, setCopied] = useState(false);
  const t = {
    share: locale === "es" ? "Compartir en LinkedIn" : "Share on LinkedIn",
    copy: locale === "es" ? "Copiar enlace" : "Copy link",
    copied: locale === "es" ? "Copiado" : "Copied",
  };

  const shareLinkedIn = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={shareLinkedIn}
        className="border border-teal bg-teal-soft px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-teal/20"
      >
        {t.share}
      </button>
      <button
        type="button"
        onClick={copyLink}
        className="border border-stroke px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute transition-colors hover:border-stroke-strong hover:text-cream"
      >
        {copied ? t.copied : t.copy}
      </button>
    </div>
  );
}

function formatDate(date: string, locale: Locale): string {
  const [year, month] = date.split("-").map(Number);
  const months =
    locale === "es"
      ? ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
      : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[(month ?? 1) - 1]} ${year}`;
}
