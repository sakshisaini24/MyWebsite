import FadeIn from "./FadeIn";
import { skillGroups, tagColors } from "@/lib/data";

const groupBg = {
  peach: "from-peach/20 via-white/80 to-peach/5",
  rose: "from-rose/15 via-white/80 to-rose/5",
  sage: "from-sage/20 via-white/80 to-sage/5",
  lavender: "from-lavender/20 via-white/80 to-lavender/5",
} as const;

export default function Skills() {
  return (
    <section className="px-6 pb-16 pt-4">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <h3 className="mb-10 text-center text-xl font-bold text-foreground">
            Skills & Tools
          </h3>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn key={group.title} delay={index * 0.1}>
              <div
                className={`rounded-3xl border border-white/80 bg-gradient-to-br p-6 shadow-sm ${groupBg[group.color]}`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl">{group.emoji}</span>
                  <h4 className="text-base font-bold text-foreground">
                    {group.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-full border px-3 py-1.5 text-xs font-medium ${tagColors[group.color]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
