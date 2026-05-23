export function ReelPerforation() {
  return (
    <div aria-hidden className="flex w-full items-center justify-center gap-3 py-10">
      <span className="h-px flex-1 bg-stroke" />
      <svg viewBox="0 0 240 16" className="h-4 w-48 text-cream-mute" fill="currentColor">
        {Array.from({ length: 12 }).map((_, i) => (
          <rect key={i} x={i * 20} y="2" width="10" height="12" rx="1" opacity="0.5" />
        ))}
      </svg>
      <span className="h-px flex-1 bg-stroke" />
    </div>
  );
}
