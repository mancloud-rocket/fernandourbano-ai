import type { Locale } from "@/lib/locale";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HeroManifestoArt } from "@/components/HeroManifestoArt";
import { StatsStrip } from "@/components/StatsStrip";
import { SectionIndex } from "@/components/SectionIndex";
import { PullQuote } from "@/components/PullQuote";
import { SpeakerPull } from "@/components/SpeakerPull";

type Props = { locale: Locale };

export function HomePage({ locale }: Props) {
  return (
    <>
      <Nav locale={locale} currentSegment="" />
      <main>
        <HeroManifestoArt locale={locale} />
        <StatsStrip locale={locale} />
        <PullQuote locale={locale} />
        <SectionIndex locale={locale} />
        <SpeakerPull locale={locale} />
      </main>
      <Footer locale={locale} currentSegment="" />
    </>
  );
}
