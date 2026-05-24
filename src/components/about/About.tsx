"use client";

import { aboutParagraphs, pullQuote } from "@/content/about";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="section-container">
        <Reveal>
          <SectionHeading title="About" />
        </Reveal>

        <div className="max-w-3xl">
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
        </div>
      </div>
    </section>
  );
}
