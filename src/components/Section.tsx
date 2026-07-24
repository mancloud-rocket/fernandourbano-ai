import { clsx } from "clsx";
import type { ReactNode } from "react";
import { Container } from "./Container";

/** Surface plane. In dark UI, elevation separates regions better than borders. */
type Tone = "base" | "plane" | "raised" | "deep";

/**
 * Vertical rhythm step. Differentiated on purpose: when every gap is the same
 * size, the eye cannot tell a new section from the next item in a list.
 * `lg` = major break · `md` = standard block · `sm` = continues the block above.
 */
type Space = "sm" | "md" | "lg" | "none";

type Props = {
  children: ReactNode;
  tone?: Tone;
  space?: Space;
  width?: "default" | "narrow" | "wide";
  /** Hairline at the top edge. Use sparingly; tone usually does the job. */
  divide?: boolean;
  /** Page mastheads should stay a `header` landmark. */
  as?: "section" | "header";
  className?: string;
  "aria-label"?: string;
};

const TONE: Record<Tone, string> = {
  base: "",
  plane: "bg-ink-plane",
  raised: "bg-ink-raise/50",
  deep: "bg-ink-deep",
};

const SPACE: Record<Space, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-40",
};

export function Section({
  children,
  tone = "base",
  space = "md",
  width = "wide",
  divide = false,
  as: Tag = "section",
  className,
  ...rest
}: Props) {
  return (
    <Tag
      aria-label={rest["aria-label"]}
      className={clsx(TONE[tone], divide && "border-t border-stroke", className)}
    >
      <Container width={width} className={SPACE[space]}>
        {children}
      </Container>
    </Tag>
  );
}
