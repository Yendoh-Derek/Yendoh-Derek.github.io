"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

interface AboutImageProps {
  isSticky?: boolean;
}

export function AboutImage({ isSticky = false }: AboutImageProps) {
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Glow shadow opacity - 0.2 base, 0.4 on hover
  const glowOpacity = isHovering ? 0.4 : 0.2;
  const shadowOpacity = isHovering ? 0.24 : 0.08;

  return (
    <div
      className={`relative mx-auto w-full max-w-[300px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[390px] ${
        isSticky ? "md:sticky md:top-[10%] md:z-10" : ""
      }`}
    >
      <Reveal>
        <motion.div
          className={`relative w-full ${isSticky ? "" : "will-change-transform"}`}
        >
          {/* Subtle soft drop shadow layer - creates depth and floating effect */}
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-black/20 via-transparent to-black/20 blur-2xl -z-10 opacity-40 md:-inset-8" />

          {/* Animated glow halo - pulsing cyan effect like project cards */}
          <motion.div
            className="pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan/20 via-cyan/10 to-transparent blur-2xl md:-inset-4 animate-halo"
            animate={{ opacity: glowOpacity }}
            transition={{ duration: 0.3 }}
          />

          {/* Image container with cyan glow shadow */}
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 cursor-pointer flex flex-col"
            onHoverStart={() => !shouldReduceMotion && setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            onMouseDown={() => !shouldReduceMotion && setIsHovering(true)}
            onMouseUp={() => setIsHovering(false)}
            animate={{
              boxShadow: `0 12px 40px rgba(62, 207, 207, ${shadowOpacity}), 0 0 30px rgba(62, 207, 207, ${glowOpacity})`,
            }}
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
              draggable={false}
            />
          </motion.div>
        </motion.div>
      </Reveal>
    </div>
  );
}
