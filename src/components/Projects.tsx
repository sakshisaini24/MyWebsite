"use client";

import { useState } from "react";
import { ExternalLink, Code2, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import ProjectModal from "./ProjectModal";
import { projects, tagColors } from "@/lib/data";
import type { Project } from "@/lib/data";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="px-6 pb-20 pt-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h3 className="mb-2 text-center text-xl font-bold text-foreground">
            Engineering Projects
          </h3>
          <p className="mb-10 text-center text-sm text-warm-brown/60">
            Click a card to dive deeper
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <article
                role="button"
                tabIndex={0}
                onClick={() => setSelected(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelected(project);
                  }
                }}
                className="group flex h-full cursor-pointer flex-col rounded-3xl border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-rose/30 hover:shadow-md"
              >
                <div className="mb-2 flex items-start justify-between gap-2">
                  <span className="rounded-full bg-peach/25 px-2.5 py-0.5 text-[10px] font-semibold text-warm-brown">
                    {project.badge}
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-warm-brown/30 transition-all group-hover:text-rose/70" />
                </div>

                <h3 className="text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-warm-brown/80">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${tagColors[tag.color]}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl bg-vanilla transition-all hover:bg-peach/40 hover:shadow-sm"
                    >
                      <Code2 className="h-4 w-4 text-warm-brown" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-10 w-10 items-center justify-center rounded-2xl bg-vanilla transition-all hover:bg-sage/40 hover:shadow-sm"
                    >
                      <ExternalLink className="h-4 w-4 text-warm-brown" />
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
