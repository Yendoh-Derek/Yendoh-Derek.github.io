"use client";

import { skillsMarqueeItems } from "@/content/marquee";
import { site } from "@/content/site";
import { scrollToSection } from "@/lib/utils";
import { Marquee } from "@/components/marquee/Marquee";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-start overflow-hidden bg-base pt-12 sm:items-center sm:pt-16"
    >
      <ParticleBackground />

      <div className="section-container relative z-10 w-full max-w-3xl py-8 sm:py-16">
        <div>
          <p className="hero-name font-display text-sm font-bold uppercase tracking-widest text-cyan">
            {site.name}
          </p>
          <h1
            className="hero-title mt-2 font-display font-extrabold leading-[1.05] tracking-tight text-primary"
            style={{ fontSize: "var(--text-hero)" }}
          >
            {site.title}
          </h1>
          <p className="mt-6 font-body text-base font-medium tracking-wide text-secondary">
            {site.tagline}
          </p>
          <div className="hero-ctas mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="btn-primary"
            >
              See My Work
            </button>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub ↗
            </a>
          </div>
          <div className="hero-marquee relative z-10 mt-10 w-full">
            <Marquee items={skillsMarqueeItems} speedSeconds={78} />
          </div>
        </div>
      </div>
    </section>
  );
}
