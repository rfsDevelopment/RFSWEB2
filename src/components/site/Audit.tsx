import { useLocale } from "@/contexts/LocaleContext";
import { Btn, LabelRow, Reveal, Section, SectionHead, stagger } from "@/components/site/primitives";

export const Audit = () => {
  const { c } = useLocale();

  return (
    <Section id="auditoria">
      <Reveal>
        <SectionHead
          index={c.audit.index}
          label={c.audit.label}
          title={c.audit.title}
          accent={c.audit.titleAccent}
          lead={c.audit.lead}
        />
      </Reveal>

      {/* --- What we look for: 10 vectors --- */}
      <Reveal className="mt-20">
        <LabelRow label={c.audit.vectorsLabel} />
      </Reveal>

      <div className="mt-8 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
        {c.audit.vectors.map((vector, i) => (
          <Reveal key={vector.id} delay={stagger(i, 0.04)} className="bg-void">
            <div className="h-full p-5 transition-shadow duration-150 hover:bg-carbon hover:shadow-[inset_2px_0_0_0_#E11021]">
              <span className="label tabular text-signal">{vector.id}</span>
              <h3 className="mt-4 text-[0.9375rem] font-medium leading-snug text-ink">
                {vector.title}
              </h3>
              <p className="mt-2 text-[0.8125rem] leading-relaxed text-ink-dim">{vector.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* --- Process: scope → collection → analysis → remediation --- */}
      <Reveal className="mt-24">
        <LabelRow label={c.audit.phasesLabel} />
      </Reveal>

      <div className="mt-10 grid gap-y-10 md:grid-cols-4 md:gap-x-8">
        {c.audit.phases.map((phase, i) => (
          <Reveal key={phase.n} delay={stagger(i, 0.08)}>
            <div className="relative border-t border-white/10 pt-6">
              {/* node on the timeline rule */}
              <span aria-hidden className="absolute -top-[3px] left-0 h-1.5 w-1.5 bg-signal" />
              <div className="flex items-baseline justify-between gap-3">
                <span className="label tabular text-signal">{phase.n}</span>
                <span className="label text-ink-faint">{phase.meta}</span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-ink">{phase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{phase.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* --- Deliverables --- */}
      <div className="mt-24 grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <LabelRow label={c.audit.deliverablesLabel} />
          <p className="measure mt-8 text-sm leading-relaxed text-ink-dim">
            {c.audit.deliverablesNote}
          </p>
          <Btn href="#contacto" variant="outline" className="mt-8">
            {c.contact.cta}
          </Btn>
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-8">
          <ul className="border-t border-white/10">
            {c.audit.deliverables.map((item, i) => (
              <li
                key={item}
                className="group flex items-start gap-5 border-b border-white/10 py-5 transition-colors duration-150 hover:bg-carbon"
              >
                <span className="label tabular shrink-0 pt-1 text-ink-faint transition-colors group-hover:text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.9375rem] leading-relaxed text-ink">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
};
