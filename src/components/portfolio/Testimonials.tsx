import { Quote } from "lucide-react";
import { testimonials } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section
      aria-label="Testimonials"
      className="border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What colleagues and clients say"
          align="center"
        />

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal
              as="li"
              key={item.name}
              delay={i * 90}
              className="glass-card flex flex-col rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold/40"
            >
              <Quote
                className="h-6 w-6 text-gold"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                {item.quote}
              </blockquote>
              <footer className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {item.role}, {item.company}
                </p>
              </footer>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
