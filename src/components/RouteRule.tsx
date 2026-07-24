import { clsx } from "clsx";

/**
 * Signature section divider, derived from the home LocationStrip flight path:
 * a solid hairline that reaches a teal node and continues dashed, as a route
 * does. The node sits off-center on purpose so the rule reads as editorial
 * rather than symmetric decoration.
 *
 * Reserved for major breaks. Two or three per page at most, otherwise it stops
 * meaning "a new part starts here".
 */
export function RouteRule({ className }: { className?: string }) {
  return (
    <div aria-hidden className={clsx("flex items-center", className)}>
      <span
        className="flex-[0_0_34%]"
        style={{ borderTop: "1px solid var(--color-stroke-strong)" }}
      />
      <span className="mx-3 h-[5px] w-[5px] shrink-0 rotate-45 bg-teal" />
      <span
        className="flex-1"
        style={{ borderTop: "1px dashed var(--color-stroke)" }}
      />
    </div>
  );
}
