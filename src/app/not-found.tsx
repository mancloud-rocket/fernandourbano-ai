import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center">
      <Container width="narrow" className="py-24 text-center">
        <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-teal">
          404
        </p>
        <h1 className="mt-6 display-xl text-cream">Esta página no existe.</h1>
        <p className="mt-5 text-lead text-cream-dim">
          The page you are looking for is not here.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link
            href="/"
            className="group inline-flex items-baseline gap-2 border-b border-teal pb-1 font-display text-[20px] text-cream transition-colors hover:text-teal"
          >
            Volver al inicio
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              —&gt;
            </span>
          </Link>
          <Link
            href="/en"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-cream-mute transition-colors hover:text-cream"
          >
            Back home
          </Link>
        </div>
      </Container>
    </main>
  );
}
