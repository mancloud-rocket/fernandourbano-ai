type Props = {
  label: string;
  title: string;
  status: string;
  eta: string;
};

export function CurrentlyWriting({ label, title, status, eta }: Props) {
  return (
    <aside className="border border-stroke bg-ink-raise/50 p-6 md:p-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal">
        {label}
      </p>
      <h3 className="mt-4 font-display text-[22px] leading-snug text-cream">{title}</h3>
      <p className="mt-3 text-small text-cream-dim">{status}</p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-mute">
        ETA · {eta}
      </p>
      <span className="pulse-dot mt-6" aria-hidden />
    </aside>
  );
}
