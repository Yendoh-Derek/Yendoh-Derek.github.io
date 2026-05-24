"use client";

import { skillClusters } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad bg-base">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            title="Skills"
            subtitle="Tools grouped by what they do — not vanity percentages."
          />
        </Reveal>

        <div className="grid gap-12 md:grid-cols-3">
          {skillClusters.map((cluster, clusterIndex) => (
            <Reveal key={cluster.label} delay={clusterIndex * 100}>
              <div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {cluster.label}
                </h3>
                <p className="mt-1 text-sm text-muted">{cluster.subtitle}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {cluster.tools.map((tool) => (
                    <li key={tool}>
                      <span className="skill-badge">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
