"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";
import {
  cyberSources,
  cybersecurityEssay,
  type CyberBeat,
  type CyberChapter,
} from "@/content/cybersecurityEssay";
import { CyberStage } from "./CyberStage";
import styles from "./CybersecurityScrollytelling.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const titleWords = cybersecurityEssay.title.split(" ");
const ease = [0.16, 1, 0.3, 1] as const;

function SourceCard({ source }: { source: NonNullable<CyberBeat["source"]> }) {
  return (
    <a className={styles.sourceCard} href={source.href} target="_blank" rel="noreferrer">
      <span className={styles.sourceMark}>{source.label}</span>
      <span className={styles.sourceTitle}>{source.title}</span>
      <span className={styles.sourceArrow} aria-hidden>↗</span>
    </a>
  );
}

function StoryChapter({
  chapter,
  index,
  activeBeat,
  calm,
}: {
  chapter: CyberChapter;
  index: number;
  activeBeat: string;
  calm: boolean;
}) {
  return (
    <section className={styles.chapter} data-chapter={chapter.id} aria-label={chapter.label}>
      <div className={styles.visualColumn} aria-hidden="true">
        <div className={styles.stickyStage}>
          <div className={styles.chapterIndex}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span>{chapter.label}</span>
          </div>
          <CyberStage visual={chapter.visual} activeBeat={activeBeat} calm={calm} />
        </div>
      </div>
      <div className={styles.copyColumn}>
        {chapter.beats.map((beat) => (
          <div
            key={beat.id}
            className={styles.beat}
            data-beat={beat.id}
            data-chapter-id={chapter.id}
            data-emphasis={beat.emphasis ?? "normal"}
          >
            <p>{beat.text}</p>
            {beat.source ? <SourceCard source={beat.source} /> : null}
          </div>
        ))}
      </div>
    </section>
  );
}

function ReadingControls({ calm, onToggle }: { calm: boolean; onToggle: () => void }) {
  return (
    <div className={styles.readingControls}>
      <button type="button" className={styles.motionToggle} onClick={onToggle} aria-pressed={calm}>
        <span className={styles.toggleIcon} aria-hidden>{calm ? "▶" : "Ⅱ"}</span>
        {calm ? "Activar animaciones" : "Leer sin animaciones"}
      </button>
      <span className={styles.scrollHint} aria-hidden>
        <span>Deslizá para avanzar</span>
        <i />
      </span>
    </div>
  );
}

function ShareFooter() {
  const [copied, setCopied] = useState(false);

  const share = () => {
    const href = window.location.href;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(href)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={styles.shareFooter}>
      <p>Fernando Urbano · {cybersecurityEssay.date}</p>
      <div>
        <button type="button" onClick={share}>Compartir en LinkedIn</button>
        <button type="button" onClick={copy}>{copied ? "Enlace copiado" : "Copiar enlace"}</button>
      </div>
    </div>
  );
}

export function CybersecurityScrollytelling() {
  const root = useRef<HTMLDivElement>(null);
  const reduceMotionPreference = useReducedMotion();
  const [reduceMotion, setReduceMotion] = useState(false);
  const [manualCalm, setManualCalm] = useState(false);
  const calm = Boolean(reduceMotion || manualCalm);
  const initialBeats = useMemo(
    () => Object.fromEntries(cybersecurityEssay.chapters.map((chapter) => [chapter.id, chapter.beats[0].id])),
    [],
  );
  const [activeBeats, setActiveBeats] = useState<Record<string, string>>(initialBeats);

  useEffect(() => {
    setReduceMotion(Boolean(reduceMotionPreference));
  }, [reduceMotionPreference]);

  useEffect(() => {
    if (!root.current) return;
    root.current.dataset.calm = calm ? "true" : "false";
  }, [calm]);

  useGSAP(
    () => {
      if (!root.current) return;
      const beatElements = gsap.utils.toArray<HTMLElement>("[data-beat]", root.current);
      const triggers = beatElements.map((element) => {
        const chapterId = element.dataset.chapterId;
        const beatId = element.dataset.beat;
        if (!chapterId || !beatId) return null;
        return ScrollTrigger.create({
          trigger: element,
          start: "top 58%",
          end: "bottom 42%",
          onEnter: () => setActiveBeats((current) => ({ ...current, [chapterId]: beatId })),
          onEnterBack: () => setActiveBeats((current) => ({ ...current, [chapterId]: beatId })),
        });
      });

      const progress = ScrollTrigger.create({
        trigger: root.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => root.current?.style.setProperty("--story-progress", String(self.progress)),
      });

      return () => {
        for (const trigger of triggers) trigger?.kill();
        progress.kill();
      };
    },
    { scope: root },
  );

  return (
    <div ref={root} className={styles.story}>
      <div className={styles.progress} aria-hidden><span /></div>

      <header className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Link href="/ideas" className={styles.backLink}>
              <span aria-hidden>←</span> Ideas
            </Link>
            <h1 className={styles.title} aria-label={cybersecurityEssay.title}>
              <span aria-hidden>
                {titleWords.map((word, index) => (
                  <span className={styles.wordMask} key={`${word}-${index}`}>
                    <motion.span
                      className={styles.word}
                      initial={calm ? { y: 0 } : { y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.82, delay: Math.min(index * 0.052, 0.68), ease }}
                    >
                      {word}
                    </motion.span>{" "}
                  </span>
                ))}
              </span>
            </h1>
            <motion.p
              className={styles.dek}
              initial={calm ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.76, ease }}
            >
              {cybersecurityEssay.dek}
            </motion.p>
            <motion.div
              className={styles.byline}
              initial={calm ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.98 }}
            >
              <span>Fernando Urbano</span>
              <span>{cybersecurityEssay.date}</span>
              <span>{cybersecurityEssay.readingTime}</span>
            </motion.div>
            <ReadingControls calm={calm} onToggle={() => setManualCalm((value) => !value)} />
          </div>

          <motion.div
            className={styles.heroOffice}
            initial={calm ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.34, ease }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 620 650" role="presentation">
              <path className={styles.heroPerimeter} d="M61 103H559V555H61Z" />
              <path className={styles.heroFloor} d="M61 438H559M171 438V555M450 438V555" />
              <rect x="203" y="330" width="255" height="96" className={styles.heroDesk} />
              <rect x="278" y="202" width="151" height="102" rx="4" className={styles.heroMonitor} />
              <rect x="292" y="216" width="123" height="74" className={styles.heroScreen} />
              <path className={styles.heroLine} d="M353 304V332M322 332H384" />
              <rect x="103" y="178" width="90" height="211" rx="3" className={styles.heroRack} />
              {[0, 1, 2, 3].map((i) => (
                <g key={i} transform={`translate(115 ${198 + i * 44})`}>
                  <rect width="66" height="31" rx="2" className={styles.heroRackUnit} />
                  <circle cx="53" cy="16" r="3" className={styles.heroLed} />
                </g>
              ))}
              <g transform="translate(330 351) rotate(2)">
                <rect width="105" height="68" className={styles.heroReport} />
                <text x="12" y="22">INFORME</text>
                <text x="12" y="48">MIÉRCOLES</text>
              </g>
              <motion.path
                className={styles.heroSignal}
                d="M193 242C236 151 363 126 432 192"
                initial={{ pathLength: calm ? 1 : 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.1, delay: 1.0, ease }}
              />
              <circle cx="432" cy="192" r="7" className={styles.heroLed} />
            </svg>
          </motion.div>
        </div>
      </header>

      <article className={styles.article}>
        {cybersecurityEssay.chapters.map((chapter, index) => (
          <StoryChapter
            key={chapter.id}
            chapter={chapter}
            index={index}
            activeBeat={activeBeats[chapter.id] ?? chapter.beats[0].id}
            calm={calm}
          />
        ))}
      </article>

      <aside className={styles.sources} aria-labelledby="sources-title">
        <div className={styles.sourcesInner}>
          <h2 id="sources-title">Fuentes consultadas</h2>
          <div className={styles.sourcesList}>
            {cyberSources.map((source, index) => (
              <a key={source.href} href={source.href} target="_blank" rel="noreferrer">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{source.label}</strong>
                <p>{source.title}</p>
                <i aria-hidden>↗</i>
              </a>
            ))}
          </div>
          <ShareFooter />
        </div>
      </aside>
    </div>
  );
}
