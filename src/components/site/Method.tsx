import { useLocale } from "@/contexts/LocaleContext";
import { Reveal, Section, SectionHead, stagger } from "@/components/site/primitives";

export const Method = () => {
  const { c } = useLocale();

  return (
    <Section id="metodo">
      <Reveal>
        <SectionHead
          index={c.method.index}
          label={c.method.label}
          title={c.method.title}
          lead={c.method.lead}
        />
      </Reveal>

      <ol className="mt-16 md:mt-20">
        {c.method.rules.map((rule, i) => (
          <Reveal key={rule.n} delay={stagger(i, 0.05)}>
            <li className="group grid grid-cols-1 gap-4 border-t border-white/10 py-8 transition-colors duration-150 hover:bg-carbon md:grid-cols-12 md:gap-10 md:px-2">
              <span className="numeral text-4xl md:col-span-2 md:text-6xl">{rule.n}</span>
              <h3 className="text-xl font-medium leading-snug text-ink md:col-span-4">
                {rule.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-ink-dim md:col-span-6">
                {rule.body}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
      <div className="h-px w-full bg-white/10" />
    </Section>
  );
};
