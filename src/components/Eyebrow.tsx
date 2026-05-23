import { clsx } from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  pulse?: boolean;
  number?: string;
};

export function Eyebrow({ children, className, pulse, number }: Props) {
  return (
    <span className={clsx("eyebrow inline-flex items-center gap-2", className)}>
      {pulse ? <span className="pulse-dot" aria-hidden /> : null}
      {number ? (
        <span className="text-teal" aria-hidden>
          {number}
        </span>
      ) : null}
      <span>{children}</span>
    </span>
  );
}
