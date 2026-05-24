import type { ProjectDomain } from "@/content/projects";
import { cn } from "@/lib/utils";

const domainStyles: Record<ProjectDomain, string> = {
  HealthTech: "domain-healthtech",
  "ML Research": "domain-ml",
  "Open Source": "domain-opensource",
};

export function DomainTag({ domain }: { domain: ProjectDomain }) {
  return (
    <span
      className={cn(
        "inline-block rounded-badge border px-2.5 py-0.5 font-mono text-xs",
        domainStyles[domain],
      )}
    >
      {domain}
    </span>
  );
}
