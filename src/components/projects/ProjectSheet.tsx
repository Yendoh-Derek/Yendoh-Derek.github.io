"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/content/projects";
import { DomainTag } from "@/components/ui/DomainTag";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/utils";

type ProjectSheetProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectSheet({ project, onClose }: ProjectSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    lockBodyScroll();

    const focusable = sheetRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !focusable?.length) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    first?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("keydown", trapFocus);
      unlockBodyScroll();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-sheet-title"
            initial={{ y: isMobile ? "100%" : "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed z-50 flex flex-col bg-surface ${
              isMobile
                ? "inset-0"
                : "bottom-0 left-1/2 max-h-[85vh] w-full max-w-3xl -translate-x-1/2 rounded-t-card border border-border"
            }`}
          >
            <div className="flex items-center justify-between border-b border-border p-5">
              <div className="flex flex-wrap gap-2">
                {project.domains.map((d) => (
                  <DomainTag key={d} domain={d} />
                ))}
                {project.featured && (
                  <span className="rounded-badge border border-cyan/50 bg-elevated px-2.5 py-0.5 font-mono text-xs text-primary">
                    Featured
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-badge border border-border-light text-secondary hover:border-cyan hover:text-primary"
                aria-label="Close project details"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 md:p-8">
              <h3
                id="project-sheet-title"
                className="font-display text-xl font-bold text-primary md:text-2xl"
              >
                {project.title}
              </h3>

              <p className="mt-4 text-secondary">{project.plainSummary}</p>

              <p className="mt-4 rounded-lg border border-border bg-elevated p-4 font-mono text-sm text-secondary">
                {project.technicalSummary}
              </p>

              {project.metrics && (
                <p className="mt-4 font-mono text-lg text-cyan">{project.metrics}</p>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-cyan hover:underline"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>

              <div className="mt-10 space-y-8">
                {project.sections.map((section, index) => (
                  <div key={`${section.title}-${index}`}>
                    <h4 className="font-display text-lg font-bold text-primary">
                      {section.title}
                    </h4>
                    <p className="mt-2 text-secondary">{section.body}</p>
                  </div>
                ))}
              </div>

              {project.contextNote && (
                <p className="mt-8 border-t border-border pt-6 text-sm italic text-secondary">
                  {project.contextNote}
                </p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
