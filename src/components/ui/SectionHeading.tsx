import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <h2
        className="font-display text-display font-bold tracking-tight text-primary"
        style={{ fontSize: "var(--text-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
