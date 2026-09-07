import { useState } from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const fields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
  { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { id: "subject", label: "Subject", type: "text", placeholder: "How can I help?" },
] as const;

const details = [
  { icon: Mail, label: "Email", value: profile.email },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin },
  { icon: Github, label: "GitHub", value: profile.github },
  { icon: MapPin, label: "Location", value: profile.location },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have an idea, project, or opportunity in mind? I'd love to hear from you."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="glass-card rounded-2xl p-7 sm:p-9">
            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
                event.currentTarget.reset();
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    className={field.id === "subject" ? "sm:col-span-2" : undefined}
                  >
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="mt-2 w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a little about what you have in mind."
                  className="mt-2 w-full resize-y rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-ring/40 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:w-auto"
              >
                Send Message
              </button>

              <p
                role="status"
                aria-live="polite"
                className="min-h-5 text-sm text-gold"
              >
                {sent
                  ? "Thank you — your message has been noted. I'll be in touch shortly."
                  : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <ul className="space-y-px overflow-hidden rounded-2xl border border-border bg-border">
              {details.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4 bg-card p-6">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border text-gold">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                      {label}
                    </p>
                    <p className="truncate text-sm font-semibold text-foreground">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
