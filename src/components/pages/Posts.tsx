import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { path } from "@/lib/locale";
import { getPosts } from "@/content/posts";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { PageShell } from "@/components/PageShell";

const T = {
  es: {
    eyebrow: "Posts",
    title: "Ideas cortas, en movimiento.",
    intro:
      "Posts breves sobre IA aplicada al negocio. Para leer en un minuto y compartir. Sin humo.",
  },
  en: {
    eyebrow: "Posts",
    title: "Short ideas, in motion.",
    intro:
      "Brief posts on applied AI for business. Made to read in a minute and share. No fog.",
  },
} as const;

const MONTHS = {
  es: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
} as const;

function fmt(date: string, locale: Locale) {
  const [year, month] = date.split("-").map(Number);
  return `${MONTHS[locale][(month ?? 1) - 1]} ${year}`;
}

export function PostsPage({ locale }: { locale: Locale }) {
  const posts = getPosts(locale);
  const t = T[locale];

  return (
    <PageShell locale={locale} segment="posts">
      <header className="border-b border-stroke">
        <Container width="wide" className="py-20 md:py-28">
          <Eyebrow number="05">{t.eyebrow}</Eyebrow>
          <h1 className="mt-6 display-xl text-cream">{t.title}</h1>
          <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{t.intro}</p>
        </Container>
      </header>

      <section>
        <Container width="wide" className="py-6 md:py-10">
          <ul className="divide-y divide-stroke border-b border-stroke">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`${path(locale, "posts")}/${p.slug}`}
                  className="group grid gap-4 py-10 transition-colors hover:bg-teal-soft md:grid-cols-12 md:gap-8 md:py-12"
                >
                  <div className="md:col-span-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
                      {p.kicker}
                    </span>
                    <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
                      {fmt(p.date, locale)}
                    </span>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="display-md text-cream transition-transform duration-500 group-hover:translate-x-2">
                      {p.title}
                    </h2>
                    <p className="mt-3 font-display text-[18px] italic text-cream-dim">
                      {p.subtitle}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}
