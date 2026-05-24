"use client";

import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  delay?: number;
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay,
}: RevealProps) {
  const ref = useReveal();

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
