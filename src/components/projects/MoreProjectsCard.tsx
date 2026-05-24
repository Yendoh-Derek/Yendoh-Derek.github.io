import { site } from "@/content/site";

export function MoreProjectsCard() {
  return (
    <a
      href={site.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card flex flex-col p-7 no-underline"
      aria-label="View more projects on GitHub"
    >
      <span className="rounded-badge border border-border-light px-2.5 py-0.5 font-mono text-xs text-secondary">
        GitHub
      </span>

      <h3 className="mt-4 font-display text-lg font-bold leading-snug text-primary md:text-xl">
        More projects on GitHub
      </h3>

      <p className="mt-3 flex-1 text-secondary">
        Web design experiments, mentorship repos, and other work not featured here
        — explore the full list on my profile.
      </p>

      <p className="mt-5 font-mono text-xs text-cyan">
        github.com/Yendoh-Derek ↗
      </p>
    </a>
  );
}
