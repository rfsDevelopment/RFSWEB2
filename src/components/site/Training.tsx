import { useLocale } from "@/contexts/LocaleContext";
import { Btn, LabelRow, Reveal, SectionHead, Ticks, stagger } from "@/components/site/primitives";
import { CONTACT } from "@/i18n/content";
import { cn } from "@/lib/utils";

/**
 * The one inverted section. It breaks up an otherwise endless dark scroll and
 * completes the red / black / white brief. `on-bone` retargets the focus ring
 * offset and the outlined numerals in index.css.
 */
export const Training = () => {
  const { c } = useLocale();

  return (
    <section id="formacion" className="on-bone border-t border-white/10 bg-bone text-void">
      <div className="mx-auto w-full max-w-[1440px] border-void/15 px-6 py-20 md:border-x md:px-10 md:py-32">
        <Reveal>
          <SectionHead
            index={c.training.index}
            label={c.training.label}
            title={c.training.title}
            accent={c.training.titleAccent}
            lead={c.training.lead}
            onBone
          />
        </Reveal>

        {/* The differentiator, stated plainly. */}
        <Reveal delay={0.06} className="mt-16">
          <div className="relative border border-void/20 bg-bone-dim p-8 md:p-10">
            <Ticks className="border-signal" />
            <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
              <h3 className="text-2xl font-bold leading-tight text-void lg:col-span-5">
                {c.training.highlight.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-void/70 lg:col-span-7">
                {c.training.highlight.body}
              </p>
            </div>
          </div>
        </Reveal>

        {/* --- Programmes --- */}
        <Reveal className="mt-24">
          <LabelRow label={c.training.programsLabel} ruleClassName="bg-void/15" />
        </Reveal>

        <div className="mt-8 grid gap-px bg-void/15 md:grid-cols-2 xl:grid-cols-4">
          {c.training.programs.map((program, i) => {
            const featured = "featured" in program && program.featured;

            return (
              <Reveal key={program.title} delay={stagger(i, 0.05)} className="bg-bone">
                <div
                  className={cn(
                    "flex h-full flex-col p-6 md:p-8",
                    featured && "shadow-[inset_0_3px_0_0_#E11021]",
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold leading-tight text-void">{program.title}</h3>
                    <span className="label tabular shrink-0 text-void/35">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-void/60">{program.objective}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-void/15 pt-5">
                    {program.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.8125rem] leading-relaxed text-void/80">
                        <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 bg-signal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* --- Format --- */}
        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <LabelRow label={c.training.formatLabel} ruleClassName="bg-void/15" />
            <Btn
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(c.training.cta)}`}
              variant="boneSolid"
              className="mt-8"
            >
              {c.training.cta}
            </Btn>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-8">
            <dl className="border-t border-void/15">
              {c.training.format.map((row) => (
                <div
                  key={row.k}
                  className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-void/15 py-4"
                >
                  <dt className="label text-void/45">{row.k}</dt>
                  <dd className="text-[0.9375rem] text-void">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
