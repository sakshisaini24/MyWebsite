"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/lib/data";
import { tagColors } from "@/lib/data";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-warm-brown/30 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-white/80 bg-cream shadow-xl"
          >
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-peach/20 bg-cream/95 px-6 py-5 backdrop-blur-sm">
              <div className="pr-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-rose/20 px-3 py-1 text-xs font-semibold text-warm-brown">
                  <Sparkles className="h-3 w-3" />
                  {project.badge}
                </span>
                <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-rose/90">
                  {project.hook}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-vanilla transition-all hover:bg-peach/30"
              >
                <X className="h-5 w-5 text-warm-brown" />
              </button>
            </div>

            <div className="space-y-5 px-6 py-5">
              {project.details.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-sm leading-relaxed text-warm-brown/85"
                >
                  {paragraph}
                </p>
              ))}

              <div className="rounded-2xl bg-white/70 p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-sage">
                  Tech stack & highlights
                </p>
                <ul className="space-y-2">
                  {project.techHighlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-warm-brown/80"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-peach" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${tagColors[tag.color]}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3 border-t border-peach/20 px-6 py-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-warm-brown"
                >
                  <Code2 className="h-4 w-4" />
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-peach/40 bg-white px-4 py-2.5 text-sm font-semibold text-warm-brown transition-all hover:bg-peach/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
