"use client";

import { useState } from "react";
import { skillClusters } from "@/content/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  const [expandedTools, setExpandedTools] = useState<Set<string>>(new Set());

  const toggleTool = (toolName: string) => {
    const newExpanded = new Set(expandedTools);
    if (newExpanded.has(toolName)) {
      newExpanded.delete(toolName);
    } else {
      newExpanded.add(toolName);
    }
    setExpandedTools(newExpanded);
  };

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
                <ul className="mt-5 flex flex-col gap-3">
                  {cluster.tools.map((tool) => {
                    const isExpanded = expandedTools.has(tool.name);
                    return (
                      <li key={tool.name} className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => toggleTool(tool.name)}
                          className="skill-badge text-left"
                          aria-expanded={isExpanded}
                          aria-describedby={isExpanded ? `desc-${tool.name}` : undefined}
                        >
                          <span className="inline-flex items-center gap-2">
                            {tool.name}
                            <span
                              className="inline-block transition-transform duration-200"
                              style={{
                                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                              }}
                              aria-hidden="true"
                            >
                              ▼
                            </span>
                          </span>
                        </button>
                        {isExpanded && (
                          <div
                            id={`desc-${tool.name}`}
                            className="skill-description mt-2"
                          >
                            {tool.description}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
