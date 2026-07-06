/**
 * Persistent, very subtle background: two large teal/amber radial glows that
 * drift slowly behind all content. Pure CSS (no JS), GPU-friendly, disabled
 * under prefers-reduced-motion. Sits below page content (negative z-index).
 */
export function BackdropAura() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aura aura-teal" />
      <div className="aura aura-amber" />
    </div>
  );
}
