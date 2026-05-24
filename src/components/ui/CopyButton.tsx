"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  text: string;
  label?: string;
  className?: string;
};

export function CopyButton({ text, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${text}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "btn-secondary min-w-[44px] gap-2 font-mono text-sm",
        className,
      )}
      aria-label={copied ? "Email copied" : "Copy email address"}
    >
      {label ?? text}
      <span className="text-cyan" aria-hidden>
        {copied ? "✓ Copied" : "⎘"}
      </span>
    </button>
  );
}
