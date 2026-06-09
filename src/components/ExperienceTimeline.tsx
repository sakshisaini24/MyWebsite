import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="px-6 pt-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          emoji="💼"
          title="Experience & Projects"
          subtitle="From tutoring physics to building AI-powered tools — a journey through code, curiosity, and constant learning."
        />

        <FadeIn>
          <h3 className="mb-10 text-center text-xl font-bold text-foreground">
            Professional Journey
          </h3>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-peach/60 via-rose/40 to-lavender/60 sm:left-1/2 sm:-translate-x-px" />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <FadeIn key={`${item.year}-${item.company}`} delay={index * 0.12}>
                <div
                  className={`relative flex flex-col gap-4 sm:flex-row sm:items-start ${
                    index % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="hidden flex-1 sm:block" />

                  <div className="absolute left-0 top-1.5 z-10 sm:left-1/2 sm:-translate-x-1/2">
                    <div className="h-4 w-4 rounded-full border-2 border-white bg-gradient-to-br from-peach to-rose shadow-sm" />
                  </div>

                  <div className="ml-8 flex-1 sm:ml-0">
                    <div className="rounded-3xl border border-white/80 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-all hover:shadow-md">
                      <span className="text-xs font-semibold uppercase tracking-wider text-rose/80">
                        {item.year}
                      </span>
                      <h4 className="mt-1 text-base font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm font-medium text-sage">
                        {item.company}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-warm-brown/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
