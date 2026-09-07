import { stats } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <section
      aria-label="Achievements in numbers"
      className="relative overflow-hidden border-t border-border bg-card py-20 sm:py-24"
    >
      <div className="veil pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            By the numbers
          </p>
        </Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal as="li" key={stat.label} delay={i * 90} className="text-center">
              <p className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {stat.value}
              </p>
              <span
                aria-hidden="true"
                className="hairline-gold mx-auto mt-4 block h-px w-12"
              />
              <p className="mt-4 text-xs tracking-[0.14em] text-muted-foreground uppercase sm:text-sm">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
