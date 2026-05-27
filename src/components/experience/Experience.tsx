"use client";

import { experienceBlocks } from "@/content/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            title="Experience"
            subtitle="Engineering, open source, and product building."
          />
        </Reveal>

        <div className="mt-4 space-y-12 md:space-y-14">
          {experienceBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 80}>
              <article className="max-w-3xl">
                <h3 className="font-display text-xl font-bold text-primary md:text-2xl">
                  {block.title}
                </h3>
                <div className="mt-4 space-y-4 text-secondary">
                  {block.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                {block.bullets && (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {block.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 font-mono text-sm text-secondary"
                      >
                        <span className="mt-1.5 text-cyan" aria-hidden>
                          ›
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
