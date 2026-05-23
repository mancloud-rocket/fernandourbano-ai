import Image from "next/image";
import { clsx } from "clsx";

type Variant = "iso" | "iso-black" | "lockup";

type Props = {
  variant?: Variant;
  className?: string;
  /** Pixel height. Width auto-scales. */
  height?: number;
  priority?: boolean;
};

const SOURCES: Record<Variant, { src: string; width: number; height: number }> = {
  iso: { src: "/logo/logo-iso.png", width: 2048, height: 2048 },
  "iso-black": { src: "/logo/logo-iso-black.png", width: 2048, height: 2048 },
  lockup: { src: "/logo/logo-grande.png", width: 2400, height: 600 },
};

export function Logo({
  variant = "iso",
  className,
  height = 32,
  priority = false,
}: Props) {
  const meta = SOURCES[variant];
  const width = Math.round((meta.width / meta.height) * height);

  return (
    <Image
      src={meta.src}
      alt="Fernando Urbano"
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={clsx("block h-auto w-auto select-none", className)}
      style={{ height, width: "auto" }}
    />
  );
}
