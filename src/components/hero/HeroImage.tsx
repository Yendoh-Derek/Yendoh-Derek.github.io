"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export function HeroImage() {
  const imageRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  
  // Track scroll progress with proper offsets to enable parallax throughout scroll
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  // Gentle scroll-parallax: image moves upward slower than page scrolls down
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.div
      ref={imageRef}
      className="relative mx-auto w-full max-w-sm will-change-transform"
      style={shouldReduceMotion ? undefined : { y }}
    >
      {/* Deep soft drop shadow layer - creates strong 3D floating effect */}
      <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-black/30 via-black/20 to-transparent blur-3xl -z-20 opacity-40" />

      {/* Ambient soft glow - subtle gradient halo */}
      <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-cyan/15 via-purple/10 to-transparent blur-2xl -z-10 opacity-50" />

      {/* Image container with minimal styling */}
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-border-light/50 bg-surface shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <Image
          src="/derek_image.jpeg"
          alt="Derek Yendoh"
          width={1080}
          height={871}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 400px, 400px"
          className="h-auto w-full object-cover"
          priority
        />
      </motion.div>
    </motion.div>
  );
}
