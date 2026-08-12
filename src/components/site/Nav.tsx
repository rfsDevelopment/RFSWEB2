import { useEffect, useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { Logo } from "@/components/site/Logo";
import { Btn } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/content";

const LangToggle = ({ className }: { className?: string }) => {
  const { locale, setLocale, c } = useLocale();
  const options: Locale[] = ["es", "en"];

  return (
    <div
      className={cn("flex border border-white/15", className)}
      role="group"
      aria-label={c.meta.switchTo}
    >
      {options.map((option) => {
        const active = locale === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLocale(option)}
            aria-pressed={active}
            className={cn(
              "label px-2.5 py-1.5 transition-colors duration-150",
              active ? "bg-signal text-white" : "text-ink-faint hover:text-ink",
            )}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export const Nav = () => {
  const { c } = useLocale();
  const [open, setOpen] = useState(false);

  /* Lock the page behind the mobile panel and let Escape close it. */
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#exposicion"
        className="label sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:border focus:border-signal focus:bg-void focus:px-4 focus:py-2 focus:text-ink"
      >
        {c.nav.skip}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between gap-6 border-white/10 px-6 md:border-x md:px-10">
          <a href="#top" className="shrink-0" aria-label="RFS">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {c.nav.items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="label link-rule text-ink-dim hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LangToggle />
            <Btn href="#contacto" className="hidden h-9 px-4 sm:inline-flex" arrow={false}>
              {c.nav.cta}
            </Btn>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="label border border-white/15 px-3 py-1.5 text-ink-dim transition-colors hover:border-signal hover:text-ink lg:hidden"
              aria-expanded={open}
            >
              {c.nav.menu}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile panel: oversized display links, no hamburger theatre. */}
      {open && (
        <div className="fixed inset-0 z-[65] flex flex-col bg-void lg:hidden">
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-white/10 px-6">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="label border border-white/15 px-3 py-1.5 text-ink-dim transition-colors hover:border-signal hover:text-ink"
            >
              {c.nav.close}
            </button>
          </div>

          {/* min-h-full on the inner wrapper instead of justify-center on the
              scroller: centred when it fits, scrollable from the top when it
              does not (a centred flex scroller clips its own overflow). */}
          <nav className="flex-1 overflow-y-auto px-6 py-6" aria-label="Primary mobile">
            <div className="flex min-h-full flex-col justify-center">
              {c.nav.items.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-white/10 py-5 font-display text-3xl font-bold tracking-display text-ink"
                >
                  <span className="label tabular text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex shrink-0 items-center justify-between gap-4 border-t border-white/10 p-6">
            <LangToggle />
            <Btn href="#contacto" onClick={() => setOpen(false)}>
              {c.nav.cta}
            </Btn>
          </div>
        </div>
      )}
    </>
  );
};
