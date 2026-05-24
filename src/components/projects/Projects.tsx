"use client";

import { useState } from "react";
import { projects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import { MoreProjectsCard } from "./MoreProjectsCard";
import { ProjectSheet } from "./ProjectSheet";
import type { Project } from "@/content/projects";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-pad bg-base">
      <div className="section-container">
        <Reveal>
          <SectionHeading
            title="Projects"
            subtitle="Real systems built for real problems — from model to deployment."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <ProjectCard project={project} onExpand={setSelected} />
            </Reveal>
          ))}
          <Reveal delay={projects.length * 90}>
            <MoreProjectsCard />
          </Reveal>
        </div>
      </div>

      <ProjectSheet project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
