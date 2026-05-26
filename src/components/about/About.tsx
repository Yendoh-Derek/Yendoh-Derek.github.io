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

        <div className="grid grid-cols-1 gap-8 md:gap-12 md:grid-cols-3 items-start">
          {/* Text Content - Left Column */}
          <div className="md:col-span-2">
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

          {/* Image - Right Column */}
          <div className="md:col-span-1 flex justify-center md:justify-end md:sticky md:top-24">
            <AboutImage />
          </div>
        </div>
      </div>
    </section>
  );
}
