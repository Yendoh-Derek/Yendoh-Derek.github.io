"use client";

import { site } from "@/content/site";
import { scrollToSection } from "@/lib/utils";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-start overflow-hidden bg-base pt-12 sm:items-center sm:pt-16"
    >
      <ParticleBackground />
      
      {/* Radial gradient overlay */}
      <div className="hero-gradient" />

      <div className="section-container relative z-10 w-full max-w-3xl py-8 sm:py-16">
        <div>
          <p className="hero-name font-display text-sm font-bold uppercase tracking-widest">
            {site.name}
          </p>
          <h1
            className="hero-title mt-4 font-display leading-[1.05] tracking-tight"
            style={{ fontSize: "var(--text-hero)" }}
          >
            {site.title}
          </h1>
          
          {/* Positioning statement */}
          <p className="hero-subtitle mt-6 max-w-2xl font-body">
            I build AI systems that work in the real world — across healthcare and education in Africa.
          </p>
          
          <div className="hero-ctas mt-12 flex flex-wrap gap-4">
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
        </div>
      </div>
    </section>
  );
}
