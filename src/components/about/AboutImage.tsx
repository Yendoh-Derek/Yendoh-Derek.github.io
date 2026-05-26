"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function AboutImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle local parallax to avoid overlap on small and large screens.
  const y = useTransform(scrollYProgress, [0, 1], [10, -18]);

  return (
    <Reveal>
      <motion.div
        ref={containerRef}
        className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[390px] will-change-transform"
        style={shouldReduceMotion ? undefined : { y }}
      >
        {/* Animated gradient halo */}
        <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan/20 via-cyan/10 to-transparent blur-3xl animate-halo md:-inset-4" />

        {/* Image container with shadow and hover effect */}
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-border-light/70 bg-surface/60 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <Image
            src="/derek_image.jpeg"
            alt="Derek Yendoh"
            width={1080}
            height={871}
            sizes="(max-width: 640px) 78vw, (max-width: 1024px) 35vw, 390px"
            className="h-auto w-full object-cover"
            priority
          />
        </motion.div>
      </motion.div>
    </Reveal>
  );
}
