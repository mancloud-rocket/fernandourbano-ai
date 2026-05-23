import type { CSSProperties, JSX } from "react";
import { clsx } from "clsx";

type Props = {
  className?: string;
  style?: CSSProperties;
  title?: string;
};

const base: CSSProperties = {
  width: "1.4em",
  height: "calc(1.4em * 2 / 3)",
  display: "inline-block",
  flexShrink: 0,
  verticalAlign: "middle",
};

/* Uruguay — 9 stripes + canton with simplified Sol de Mayo. */
export function FlagUY({ className, style, title = "Uruguay" }: Props) {
  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label={title}
      className={clsx("inline-block", className)}
      style={{ ...base, ...style }}
    >
      <rect width="36" height="24" fill="#fff" />
      <rect y="2.67" width="36" height="2.67" fill="#0038A8" />
      <rect y="8" width="36" height="2.67" fill="#0038A8" />
      <rect y="13.33" width="36" height="2.67" fill="#0038A8" />
      <rect y="18.67" width="36" height="2.67" fill="#0038A8" />
      <rect width="14" height="13.33" fill="#fff" />
      <circle cx="7" cy="6.67" r="2.4" fill="#FCD116" stroke="#7B3F00" strokeWidth="0.3" />
    </svg>
  );
}

/* Chile — top white over red, blue canton with 5-point white star. */
export function FlagCL({ className, style, title = "Chile" }: Props) {
  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label={title}
      className={clsx("inline-block", className)}
      style={{ ...base, ...style }}
    >
      <rect width="36" height="12" fill="#fff" />
      <rect y="12" width="36" height="12" fill="#D52B1E" />
      <rect width="12" height="12" fill="#0039A6" />
      <polygon
        points="6,3.5 6.9,5.7 9.3,5.7 7.4,7.1 8.1,9.3 6,8 3.9,9.3 4.6,7.1 2.7,5.7 5.1,5.7"
        fill="#fff"
      />
    </svg>
  );
}

/* Spain — red/yellow/red (yellow band double-height), simplified, no coat of arms. */
export function FlagES({ className, style, title = "España" }: Props) {
  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label={title}
      className={clsx("inline-block", className)}
      style={{ ...base, ...style }}
    >
      <rect width="36" height="24" fill="#AA151B" />
      <rect y="6" width="36" height="12" fill="#F1BF00" />
    </svg>
  );
}

/* Mexico — green / white / red vertical stripes, simplified. */
export function FlagMX({ className, style, title = "México" }: Props) {
  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label={title}
      className={clsx("inline-block", className)}
      style={{ ...base, ...style }}
    >
      <rect width="12" height="24" fill="#006847" />
      <rect x="12" width="12" height="24" fill="#fff" />
      <rect x="24" width="12" height="24" fill="#CE1126" />
    </svg>
  );
}

/* Colombia — yellow (1/2) / blue / red horizontal. */
export function FlagCO({ className, style, title = "Colombia" }: Props) {
  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label={title}
      className={clsx("inline-block", className)}
      style={{ ...base, ...style }}
    >
      <rect width="36" height="12" fill="#FCD116" />
      <rect y="12" width="36" height="6" fill="#003893" />
      <rect y="18" width="36" height="6" fill="#CE1126" />
    </svg>
  );
}

/* Peru — vertical red / white / red. */
export function FlagPE({ className, style, title = "Perú" }: Props) {
  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label={title}
      className={clsx("inline-block", className)}
      style={{ ...base, ...style }}
    >
      <rect width="12" height="24" fill="#D91023" />
      <rect x="12" width="12" height="24" fill="#fff" />
      <rect x="24" width="12" height="24" fill="#D91023" />
    </svg>
  );
}

/* Brazil — green field with yellow rhombus and simplified blue disc. */
export function FlagBR({ className, style, title = "Brasil" }: Props) {
  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label={title}
      className={clsx("inline-block", className)}
      style={{ ...base, ...style }}
    >
      <rect width="36" height="24" fill="#009B3A" />
      <polygon points="18,3 33,12 18,21 3,12" fill="#FEDF00" />
      <circle cx="18" cy="12" r="5" fill="#002776" />
    </svg>
  );
}

/* Argentina — light blue / white / light blue with simplified sun. */
export function FlagAR({ className, style, title = "Argentina" }: Props) {
  return (
    <svg
      viewBox="0 0 36 24"
      role="img"
      aria-label={title}
      className={clsx("inline-block", className)}
      style={{ ...base, ...style }}
    >
      <rect width="36" height="24" fill="#74ACDF" />
      <rect y="8" width="36" height="8" fill="#fff" />
      <circle cx="18" cy="12" r="2.4" fill="#FCBF49" />
    </svg>
  );
}

const FLAGS: Record<string, (p: Props) => JSX.Element> = {
  uy: FlagUY,
  cl: FlagCL,
  es: FlagES,
  mx: FlagMX,
  co: FlagCO,
  pe: FlagPE,
  br: FlagBR,
  ar: FlagAR,
};

export function Flag({ code, ...rest }: { code: string } & Props) {
  const C = FLAGS[code.toLowerCase()];
  if (!C) return null;
  return <C {...rest} />;
}
