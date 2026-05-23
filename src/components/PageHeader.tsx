import { Container } from "./Container";
import { Eyebrow } from "./Eyebrow";

type Props = {
  number: string;
  eyebrow: string;
  title: string;
  intro?: string;
};

export function PageHeader({ number, eyebrow, title, intro }: Props) {
  return (
    <header className="border-b border-stroke">
      <Container width="wide" className="grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-teal">
            {number}
          </span>
        </div>
        <div className="md:col-span-10">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 display-xl text-cream">{title}</h1>
          {intro ? (
            <p className="mt-8 max-w-[60ch] text-lead text-cream-dim">{intro}</p>
          ) : null}
        </div>
      </Container>
    </header>
  );
}
