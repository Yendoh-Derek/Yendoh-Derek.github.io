"use client";

import { useEffect, useRef } from "react";

export function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      el.classList.add("revealed");
      return;
    }

    const isMobile = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: isMobile ? 0.05 : threshold },
    );

    const targets = el.classList.contains("reveal")
      ? [el]
      : Array.from(el.querySelectorAll(".reveal"));

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
