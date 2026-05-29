"use client";

import { aboutParagraphs, pullQuote } from "@/content/about";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AboutImage } from "./AboutImage";

function AboutQuoteAndCtas({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Reveal delay={120}>
        <blockquote
          className="border-l-2 border-cyan pl-6 font-display text-xl font-bold leading-snug text-primary md:text-2xl"
          style={{ fontSize: "clamp(20px, 3vw, 28px)" }}
        >
          &ldquo;{pullQuote}&rdquo;
        </blockquote>
      </Reveal>

      <Reveal delay={180}>
        <div className="mt-8 hidden flex-wrap gap-3 md:flex">
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
  );
}

export function About() {
  return (
    <section id="about" className="section-pad bg-surface">
      <div className="section-container">
        <Reveal>
          <SectionHeading title="About" />
        </Reveal>

        {/* Mobile: image, then quote + CTAs beneath it */}
        <div className="mt-8 flex flex-col items-center gap-8 md:hidden">
          <AboutImage />
          <AboutQuoteAndCtas className="w-full max-w-[390px]" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-5 md:items-stretch md:gap-12">
          {/* Text — paragraphs only */}
          <div className="md:col-span-3">
            <Reveal>
              <div className="space-y-6 text-secondary">
                {aboutParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Desktop: image, then quote + CTAs pinned to text bottom */}
          <div className="hidden md:col-span-2 md:flex md:flex-col md:items-end">
            <AboutImage />
            <AboutQuoteAndCtas className="mt-auto w-full max-w-[390px] pt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
