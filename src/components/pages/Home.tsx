import type { Locale } from "@/lib/locale";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HeroManifestoArt } from "@/components/HeroManifestoArt";
import { StatsStrip } from "@/components/StatsStrip";
import { SectionIndex } from "@/components/SectionIndex";
import { PullQuote } from "@/components/PullQuote";
import Link from "next/link";
import Image from "next/image";

type Props = { locale: Locale };

export function HomePage({ locale }: Props) {
  return (
    <>
      <Nav locale={locale} currentSegment="" />
      <main>
        <HeroManifestoArt locale={locale} />
        <StatsStrip locale={locale} />
        <PullQuote locale={locale} />
        <section className="mx-auto my-10 flex max-w-[1240px] flex-col gap-6 border-y border-stroke px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10" aria-label={locale === "es" ? "El libro" : "The book"}>
          <Image src="/book/tapa-miniatura.jpg" width={90} height={144} alt="El que guía, Fernando Urbano" className="h-auto w-[90px] shrink-0"/>
          <div><h2 className="font-display text-4xl tracking-tight">El que guía</h2><p className="mt-3 max-w-xl text-small text-cream-dim">{locale === "es" ? "Estoy escribiendo un libro sobre inteligencia artificial y el lugar que puedes ocupar en un trabajo que está cambiando." : "I am writing a book in Spanish about artificial intelligence and your place in a changing world of work."}</p></div>
          <Link className="shrink-0 text-small text-teal underline underline-offset-4" href="/el-que-guia">{locale === "es" ? "Lee el primer capítulo ↗" : "Read the first chapter in Spanish ↗"}</Link>
        </section>
        <SectionIndex locale={locale} />
      </main>
      <Footer locale={locale} currentSegment="" />
    </>
  );
}
