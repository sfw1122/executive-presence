import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="A sample of programs and initiatives with measurable results."
        />

        <ul className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              as="li"
              key={project.name}
              delay={i * 80}
              className="group glass-card overflow-hidden rounded-2xl transition-all duration-400 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <article>
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} project visual`}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-60"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <dl className="mt-6 space-y-2 text-sm">
                    <div className="flex gap-3">
                      <dt className="w-16 shrink-0 text-muted-foreground">Role</dt>
                      <dd className="text-foreground">{project.role}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="w-16 shrink-0 text-muted-foreground">Result</dt>
                      <dd className="font-semibold text-gold">{project.result}</dd>
                    </div>
                  </dl>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold"
                    aria-label={`View project: ${project.name}`}
                  >
                    View Project
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
