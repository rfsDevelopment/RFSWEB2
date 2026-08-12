import { useLocale } from "@/contexts/LocaleContext";
import { Logo } from "@/components/site/Logo";
import { Btn, LabelRow, Ticks } from "@/components/site/primitives";

const NotFound = () => {
  const { c } = useLocale();

  return (
    <div className="grain relative flex min-h-screen flex-col bg-void">
      <div aria-hidden className="grid-dots fade-b pointer-events-none absolute inset-0" />

      <header className="relative border-b border-white/10">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-5 md:px-10">
          <a href="/" aria-label="RFS">
            <Logo />
          </a>
        </div>
      </header>

      <main className="relative flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-24 md:px-10">
          <div className="relative max-w-2xl border border-white/15 bg-carbon p-8 md:p-12">
            <Ticks />
            <LabelRow label={c.notFound.label} />
            <h1 className="mt-8 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.02] text-ink">
              {c.notFound.title}
            </h1>
            <p className="measure mt-6 text-[0.9375rem] leading-relaxed text-ink-dim">
              {c.notFound.body}
            </p>
            <Btn href="/" className="mt-10">
              {c.notFound.cta}
            </Btn>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
