"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: readonly string[] | string[];
  className?: string;
  /** Seconds per full loop (lower = faster). */
  speedSeconds?: number;
  reverse?: boolean;
};

export function Marquee({
  items,
  className,
  speedSeconds = 70,
  reverse,
}: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div
      className={cn("marquee relative overflow-hidden", className)}
      style={
        {
          "--marquee-duration": `${speedSeconds}s`,
          "--marquee-direction": reverse ? "reverse" : "normal",
        } as CSSProperties
      }
      aria-label="Skills and focus areas"
    >
      <div className="marquee-track relative z-10 flex w-max items-center gap-8 py-3 md:gap-10">
        {track.map((label, idx) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={`${label}-${idx}`}
            className="marquee-chip whitespace-nowrap font-display text-base font-bold tracking-wide text-primary opacity-90 md:text-lg md:opacity-100"
          >
            {label}
          </span>
        ))}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-base to-transparent md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-base to-transparent md:w-24"
        aria-hidden
      />
    </div>
  );
}
