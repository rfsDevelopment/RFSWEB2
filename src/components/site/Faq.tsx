import { useId, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { LabelRow, Reveal, Section } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/**
 * Hand-rolled accordion rather than the vendored shadcn one: this needs
 * square rows, a +/− marker instead of a chevron, and no hover underline.
 * Height animates via grid-template-rows, so nothing has to be measured.
 */
export const Faq = () => {
  const { c } = useLocale();
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <LabelRow index={c.faq.index} label={c.faq.label} />
          <h2 className="mt-8 text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.02] text-ink">
            {c.faq.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8">
          <div className="border-t border-white/10">
            {c.faq.items.map((item, i) => {
              const isOpen = open === i;
              const panelId = `${uid}-panel-${i}`;

              return (
                <div key={item.q} className="border-b border-white/10">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors duration-150 hover:text-signal"
                    >
                      <span className="flex items-start gap-5">
                        <span
                          className={cn(
                            "label tabular shrink-0 pt-1 transition-colors",
                            isOpen ? "text-signal" : "text-ink-faint",
                          )}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "text-[1.0625rem] font-medium leading-snug transition-colors",
                            isOpen ? "text-signal" : "text-ink group-hover:text-signal",
                          )}
                        >
                          {item.q}
                        </span>
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "shrink-0 pt-1 font-mono text-sm transition-colors",
                          isOpen ? "text-signal" : "text-ink-faint",
                        )}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="measure pb-6 pl-0 text-[0.9375rem] leading-relaxed text-ink-dim sm:pl-[3.25rem]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
