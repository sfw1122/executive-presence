import portraitAsset from "@/assets/portrait-safwan.png.asset.json";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="veil pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="flex items-center gap-3 text-[0.7rem] font-semibold tracking-[0.32em] text-gold uppercase">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              Welcome to my portfolio
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.02]">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 text-lg font-semibold text-primary sm:text-xl">
              {profile.title}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.statement}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                Let&apos;s Connect
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -top-6 -left-6 h-24 w-24 rounded-full border border-gold/40"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
          />
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={portraitAsset.url}
              alt={`Professional portrait of ${profile.name}`}
              width={1405}
              height={1119}
              className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-[60%_20%]"
            />
          </div>
          <div className="glass-card absolute -bottom-6 left-6 rounded-xl px-5 py-3">
            <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Available for
            </p>
            <p className="text-sm font-semibold text-foreground">
              Advisory &amp; Leadership Roles
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
