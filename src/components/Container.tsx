import { clsx } from "clsx";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Default container is 1240px. Use `narrow` for editorial reading width. */
  width?: "default" | "narrow" | "wide";
};

export function Container({ children, className, width = "default" }: Props) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 md:px-10 lg:px-14",
        width === "default" && "max-w-[1240px]",
        width === "narrow" && "max-w-[820px]",
        width === "wide" && "max-w-[1480px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
