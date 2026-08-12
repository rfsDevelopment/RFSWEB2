import { useLocale } from "@/contexts/LocaleContext";
import { Btn, LabelRow, Reveal, Section } from "@/components/site/primitives";

export const Contact = () => {
  const { c } = useLocale();

  return (
    <Section id="contacto" className="relative overflow-hidden">
      <div aria-hidden className="grid-dots fade-b pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative">
        <Reveal>
          <LabelRow index={c.contact.index} label={c.contact.label} />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal delay={0.06} className="lg:col-span-7">
            <h2 className="text-[clamp(2.1rem,5vw,4rem)] font-bold leading-[0.98] text-ink">
              {c.contact.title}
            </h2>
            <p className="measure mt-8 text-[1.0625rem] leading-relaxed text-ink-dim">
              {c.contact.lead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Btn href={c.contact.channels[0].href}>{c.contact.cta}</Btn>
              <Btn href={c.contact.channels[1].href} variant="outline">
                WhatsApp
              </Btn>
            </div>
            <p className="label mt-8 leading-relaxed text-ink-faint">{c.contact.note}</p>
          </Reveal>

          <Reveal delay={0.14} className="lg:col-span-5">
            <div className="grid gap-px bg-white/10">
              {c.contact.channels.map((channel) => (
                <a
                  key={channel.k}
                  href={channel.href}
                  className="group flex items-center justify-between gap-6 bg-void p-6 transition-colors duration-150 hover:bg-carbon"
                >
                  {/* min-w-0 lets the mono value truncate instead of pushing
                      the arrow off a 320px screen. */}
                  <span className="min-w-0">
                    <span className="label block text-ink-faint">{channel.k}</span>
                    <span className="mt-2 block truncate font-mono text-sm text-ink transition-colors group-hover:text-signal">
                      {channel.v}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-signal transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};
