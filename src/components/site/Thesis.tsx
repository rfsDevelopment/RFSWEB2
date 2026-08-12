import { useLocale } from "@/contexts/LocaleContext";
import { Reveal, Section, SectionHead, stagger } from "@/components/site/primitives";

export const Thesis = () => {
  const { c } = useLocale();

  return (
    <Section id="exposicion">
      <Reveal>
        <SectionHead
          index={c.thesis.index}
          label={c.thesis.label}
          title={c.thesis.title}
          lead={c.thesis.lead}
        />
      </Reveal>

      {/* gap-px over a hairline background: a true 1px grid, no double borders. */}
      <div className="mt-16 grid gap-px bg-white/10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
        {c.thesis.points.map((point, i) => (
          <Reveal key={point.n} delay={stagger(i)} className="bg-void">
            <div className="group flex h-full flex-col p-6 transition-colors duration-150 hover:bg-carbon md:p-8">
              <span className="numeral text-5xl">{point.n}</span>
              <h3 className="mt-6 text-lg font-medium text-ink">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">{point.body}</p>
              <span className="mt-6 h-px w-8 bg-signal transition-all duration-200 group-hover:w-16" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
