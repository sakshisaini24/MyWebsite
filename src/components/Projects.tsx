"use client";

import { ExternalLink, Code2 } from "lucide-react";
import FadeIn from "./FadeIn";
import { projects, tagColors } from "@/lib/data";

export default function Projects() {
  return (
    <section className="px-6 pb-20 pt-16">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h3 className="mb-10 text-center text-xl font-bold text-foreground">
            Engineering Projects
          </h3>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <article className="group flex h-full flex-col rounded-3xl border border-white/80 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-md">
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
    </section>
  );
}
