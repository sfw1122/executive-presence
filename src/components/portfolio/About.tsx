import { profile, stats } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="About"
            title="A career built on judgement, not noise."
          />

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <Reveal delay={60}>
              <p>
                <span className="font-semibold text-foreground">[YOUR BIO]</span>{" "}
                — I work at the intersection of business strategy and technology,
                helping organisations make decisions that stand up years later.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                My background spans senior leadership across [YOUR INDUSTRIES],
                where I have led teams, owned commercial outcomes and delivered
                programs that changed how the business operates rather than only
                how it reports.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="border-l-2 border-gold pl-6 text-foreground italic">
                &ldquo;Clarity before speed. People before process. Outcomes
                before optics.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                More About Me
              </a>
            </Reveal>
          </div>
        </div>

        <ul className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 80} className="bg-card p-7">
              <p className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed tracking-wide text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>

        <p className="mt-6 text-xs text-muted-foreground">
          Based in {profile.location}.
        </p>
      </div>
    </section>
  );
}
