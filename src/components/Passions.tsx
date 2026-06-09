"use client";

import { BookOpen, GraduationCap } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { teachingHighlights } from "@/lib/data";

export default function Passions() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          emoji="💡"
          title="Beyond the Passport"
          subtitle="Teaching with heart, and thinking deeply about how technology shapes the world we live in."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="flex h-full flex-col rounded-3xl border border-white/80 bg-gradient-to-br from-rose/15 via-white/80 to-peach/10 p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose/40">
                  <GraduationCap className="h-6 w-6 text-warm-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Love for Teaching 📖
                  </h3>
                  <p className="text-sm text-warm-brown/70">
                    Helping students learn, grow, and believe in themselves
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-warm-brown/80">
                Long before I wrote my first line of production code, I was
                explaining physics problems on a whiteboard. From private tutoring
                (grades 9–12) to working as a Subject Matter Expert at Contentrix,
                teaching has always been close to my heart.
              </p>

              <div className="flex flex-1 flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose/80">
                  Subjects I love teaching
                </p>
                {teachingHighlights.map((item) => (
                  <div
                    key={item.subject}
                    className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 transition-all hover:shadow-sm"
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-sm font-medium text-foreground">
                      {item.subject}
                    </span>
                  </div>
                ))}
                <p className="mt-auto rounded-2xl bg-peach/20 p-4 text-xs leading-relaxed text-warm-brown/75">
                  There&apos;s nothing quite like the moment a concept finally
                  clicks for a student — it&apos;s the same joy I get from
                  shipping clean, well-tested code.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex h-full flex-col rounded-3xl border border-white/80 bg-gradient-to-br from-lavender/20 via-white/80 to-sage/10 p-7 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender/40">
                  <BookOpen className="h-6 w-6 text-warm-brown" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Social Sciences & Impact 📚
                  </h3>
                  <p className="text-sm text-warm-brown/70">
                    Understanding people, societies, and systems
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-warm-brown/80">
                Beyond writing code, I&apos;m fascinated by how societies function —
                from behavioral economics to legal frameworks. I believe technology
                should serve communities, not just corporations.
              </p>

              <div className="flex flex-1 flex-col gap-4">
                {[
                  {
                    title: "Human Behavior",
                    desc: "How people make decisions, form habits, and interact with technology in their daily lives.",
                    color: "bg-rose/20",
                  },
                  {
                    title: "Community & Legal Tech",
                    desc: "Exploring how software can improve access to justice, civic engagement, and social services.",
                    color: "bg-lavender/20",
                  },
                  {
                    title: "Ethical Innovation",
                    desc: "Bridging the gap between what we can build and what we should build for society's wellbeing.",
                    color: "bg-sage/20",
                  },
                ].map((topic) => (
                  <div
                    key={topic.title}
                    className={`rounded-2xl ${topic.color} p-4 transition-all hover:shadow-sm`}
                  >
                    <h4 className="text-sm font-bold text-foreground">
                      {topic.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-warm-brown/75">
                      {topic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
