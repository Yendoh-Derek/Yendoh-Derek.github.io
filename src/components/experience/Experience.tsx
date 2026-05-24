"use client";

import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface">
      <div className="section-container">
        <Reveal>
          <SectionHeading title="Experience" subtitle="Education and community." />
        </Reveal>

        <div className="relative ml-4 border-l border-cyan/30 pl-8 md:ml-6">
          {experience.map((entry, index) => (
            <Reveal key={`${entry.title}-${entry.period}`} delay={index * 100}>
              <div className="relative pb-12 last:pb-0">
                <span
                  className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(0,229,255,0.5)] md:-left-[calc(2.5rem+5px)]"
                  aria-hidden
                />
                <time className="font-mono text-xs text-cyan">{entry.period}</time>
                <h3 className="mt-1 font-display text-lg font-bold text-primary">
                  {entry.title}
                </h3>
                <p className="font-mono text-sm text-secondary">
                  {entry.organization}
                </p>
                <p className="mt-2 max-w-xl text-secondary">{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
