import { MapPin } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="Roles where I owned the outcome, not only the plan."
        />

        <ol className="relative mt-16 space-y-10 border-l border-border pl-8 sm:pl-12">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role + job.company} delay={i * 90} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[2.05rem] h-3 w-3 rounded-full bg-gold ring-4 ring-background sm:-left-[3.05rem]"
              />
              <span
                aria-hidden="true"
                className="absolute top-2.5 -left-[1.72rem] h-2 w-2 rounded-full bg-primary opacity-0 sm:-left-[2.72rem]"
              />
              <article className="glass-card rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1 hover:border-primary/40 sm:p-8">
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  {job.period}
                </p>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {job.role}
                </h3>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  <span className="font-semibold text-gold">{job.company}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {job.location}
                  </span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {job.achievements.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
