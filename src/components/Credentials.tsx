"use client";

import { Award, BadgeCheck } from "lucide-react";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { credentials, funFactColors } from "@/lib/data";

const typeLabels = {
  achievement: "Achievement",
  certification: "Certification",
} as const;

const typeBadgeColors = {
  achievement: "bg-rose/30 text-warm-brown",
  certification: "bg-sage/30 text-warm-brown",
} as const;

export default function Credentials() {
  const achievements = credentials.filter((c) => c.type === "achievement");
  const certifications = credentials.filter((c) => c.type === "certification");

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          emoji="🏅"
          title="Credentials & Achievements"
          subtitle="Hackathon wins, workplace recognition, and certifications that shaped my journey in tech."
        />

        <FadeIn delay={0.1}>
          <div className="mb-10 flex items-center justify-center gap-2 text-sm font-semibold text-warm-brown">
            <Award className="h-4 w-4 text-rose" />
            Achievements
          </div>
          <div className="mb-14 grid gap-5 sm:grid-cols-2">
            {achievements.map((item, index) => (
              <FadeIn key={`${item.issuer}-${item.title}`} delay={index * 0.1}>
                <div
                  className={`flex h-full items-start gap-4 rounded-3xl border bg-gradient-to-br p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${funFactColors[item.color]}`}
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${typeBadgeColors[item.type]}`}
                    >
                      {typeLabels[item.type]}
                    </span>
                    <h3 className="mt-2 text-base font-bold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-warm-brown/70">
                      {item.issuer}
                      {item.date && (
                        <span className="text-warm-brown/50"> · {item.date}</span>
                      )}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mb-8 flex items-center justify-center gap-2 text-sm font-semibold text-warm-brown">
            <BadgeCheck className="h-4 w-4 text-sage" />
            Certifications
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <FadeIn key={`${item.issuer}-${item.title}`} delay={index * 0.1}>
                <div
                  className={`flex h-full flex-col rounded-3xl border bg-gradient-to-br p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${funFactColors[item.color]}`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-2xl">{item.emoji}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${typeBadgeColors[item.type]}`}
                    >
                      {typeLabels[item.type]}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium text-warm-brown/70">
                    {item.issuer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
