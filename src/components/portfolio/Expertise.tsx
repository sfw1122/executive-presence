import {
  Compass,
  Target,
  Layers,
  TrendingUp,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { expertise } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = {
  compass: Compass,
  target: Target,
  layers: Layers,
  trending: TrendingUp,
  clipboard: ClipboardList,
  spark: Sparkles,
};

export function Expertise() {
  return (
    <section id="expertise" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Expertise"
          subtitle="Areas where I create the most value."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 70}
                className="group glass-card rounded-2xl p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-gold/40"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border text-primary transition-colors duration-300 group-hover:border-gold/50 group-hover:text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
