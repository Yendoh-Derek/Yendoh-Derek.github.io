"use client";

import { aboutParagraphs, pullQuote } from "@/content/about";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AboutImage } from "./AboutImage";

export function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="section-container">
        <Reveal>
          <SectionHeading title="About" />
        </Reveal>

        {/* Mobile Image - shows at top on mobile, hidden on desktop */}
        <div className="md:hidden mb-8 flex justify-center">
          <AboutImage />
        </div>

        {/* Desktop Layout: 60/40 split with sticky image */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-5 items-start">
          {/* Text Content - 60% (3 out of 5 columns) */}
          <div className="md:col-span-3">
            <Reveal>
              <div className="space-y-6 text-secondary">
                {aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <blockquote
                className="mt-10 border-l-2 border-cyan pl-6 font-display text-xl font-bold leading-snug text-primary md:text-2xl"
                style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
              >
                &ldquo;{pullQuote}&rdquo;
              </blockquote>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  GitHub ↗
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn ↗
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image - 40% (2 out of 5 columns) - Sticky on desktop */}
          <div className="hidden md:flex md:col-span-2 justify-center md:justify-end md:sticky md:top-24">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
}
