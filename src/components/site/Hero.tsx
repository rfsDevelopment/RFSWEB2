import { useLocale } from "@/contexts/LocaleContext";
import { ExposureReport } from "@/components/site/ExposureReport";
import { Btn, Reveal } from "@/components/site/primitives";

export const Hero = () => {
  const { c } = useLocale();

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      {/* Dot grid, masked so it fades instead of tiling to the horizon. */}
      <div aria-hidden className="grid-dots fade-b pointer-events-none absolute inset-0" />
      {/* One slow red sweep. The only ambient motion on the page. */}
      <div
        aria-hidden
        className="animate-scan pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-signal to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1440px] border-white/10 px-6 pb-20 pt-20 md:border-x md:px-10 md:pb-28 md:pt-28">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Claim */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-signal" />
                <span className="label text-ink-dim">{c.hero.kicker}</span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-8 text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.94] text-ink">
                {c.hero.titleA} <span className="text-signal">{c.hero.titleAccent}</span>.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="measure mt-8 text-[1.0625rem] leading-relaxed text-ink-dim">
                {c.hero.lead}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Btn href="#contacto" className="w-full sm:w-auto">
                  {c.hero.ctaPrimary}
                </Btn>
                <Btn href="#auditoria" variant="outline" className="w-full sm:w-auto">
                  {c.hero.ctaSecondary}
                </Btn>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              {/* Two shared rows via subgrid: every figure sits on one baseline
                  and every label on another, however many lines a label takes.
                  Below sm each cell stacks on its own (flex-col-reverse keeps
                  dt→dd in the DOM while showing the figure first). */}
              <dl className="mt-14 grid grid-cols-1 border-t border-white/10 sm:grid-cols-3 sm:grid-rows-[auto_auto]">
                {c.hero.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col-reverse border-b border-white/10 py-5 sm:row-span-2 sm:grid sm:grid-rows-subgrid sm:gap-y-2 sm:border-b-0 sm:border-r sm:px-5 sm:py-6 sm:first:pl-0 sm:last:border-r-0"
                  >
                    <dt className="label mt-2 leading-relaxed text-ink-faint sm:row-start-2 sm:mt-0">
                      {fact.label}
                    </dt>
                    <dd className="font-display text-3xl font-bold tabular leading-none text-ink sm:row-start-1">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Sample report */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <ExposureReport />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
