"use client";

import { site } from "@/content/site";
import { scrollToSection } from "@/lib/utils";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <ParticleBackground />

      <div className="section-container relative z-10 w-full max-w-3xl py-16">
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
          <p className="hero-tags mt-4 font-mono text-sm text-secondary">
            {site.tagline}
          </p>
          <p className="hero-pitch mt-6 max-w-lg text-secondary">{site.pitch}</p>
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
        </div>
      </div>
    </section>
  );
}
