"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { clsx } from "clsx";
import type { Locale } from "@/lib/locale";
import { path } from "@/lib/locale";
import type { NavItem } from "@/content/types";
import { LocaleSwitch } from "./LocaleSwitch";

type Props = {
  locale: Locale;
  items: NavItem[];
  currentSegment?: string;
};

export function NavMobileMenu({ locale, items, currentSegment = "" }: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    setOpen(false);
  }, [currentSegment, locale]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="border border-stroke px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-dim transition-colors hover:border-stroke-strong hover:text-cream"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <nav
            id={panelId}
            aria-label="Primary mobile"
            className="fixed inset-x-0 top-[81px] z-50 max-h-[calc(100dvh-81px)] overflow-y-auto border-b border-stroke bg-ink-deep px-6 py-6 shadow-lg"
          >
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item.segment}>
                  <Link
                    href={path(locale, item.segment)}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "flex items-baseline gap-2 py-3 font-mono text-[12px] uppercase tracking-[0.18em]",
                      currentSegment === item.segment
                        ? "text-teal"
                        : "text-cream-dim hover:text-cream",
                    )}
                  >
                    <span className="text-cream-mute">{item.number}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-stroke pt-6">
              <LocaleSwitch
                current={locale}
                currentSegment={currentSegment}
              />
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
