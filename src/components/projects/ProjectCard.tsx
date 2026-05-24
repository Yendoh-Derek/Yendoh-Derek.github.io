"use client";

import type { Project } from "@/content/projects";
import { DomainTag } from "@/components/ui/DomainTag";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  onExpand: (project: Project) => void;
  className?: string;
};

export function ProjectCard({ project, onExpand, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "project-card flex cursor-pointer flex-col p-7",
        project.featured && "md:col-span-2",
        className,
      )}
      onClick={() => onExpand(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onExpand(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {project.domains.map((d) => (
          <DomainTag key={d} domain={d} />
        ))}
        {project.featured && (
          <span className="rounded-badge border border-cyan/50 bg-elevated px-2.5 py-0.5 font-mono text-xs text-primary">
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-lg font-bold leading-snug text-primary md:text-xl">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-secondary">{project.plainSummary}</p>

      {project.metrics && (
        <p className="mt-4 font-mono text-base text-cyan">{project.metrics}</p>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.slice(0, project.featured ? 8 : 5).map((tech) => (
          <span key={tech} className="skill-badge text-xs">
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-5 font-mono text-xs text-cyan">
        Read more →
      </p>
    </article>
  );
}
