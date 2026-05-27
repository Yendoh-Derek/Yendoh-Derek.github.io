"use client";

import { skillsMarqueeItems } from "@/content/marquee";
import { site } from "@/content/site";
import { CopyButton } from "@/components/ui/CopyButton";
import { Marquee } from "@/components/marquee/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-base">
      <div className="section-container text-center">
        <Reveal>
          <h2
            className="font-display font-bold text-primary"
            style={{ fontSize: "var(--text-display)" }}
          >
            Let&apos;s build something meaningful.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-secondary">
            Open to collaborations in HealthTech, EdTech, and applied ML — and
            always happy to talk to fellow builders.
          </p>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            <CopyButton text={site.email} label={site.email} />
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-w-[44px]"
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-w-[44px]"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="relative z-10 mt-12 w-full text-left">
            <Marquee items={skillsMarqueeItems} speedSeconds={78} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
