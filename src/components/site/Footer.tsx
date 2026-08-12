import { useLocale } from "@/contexts/LocaleContext";
import { Logo } from "@/components/site/Logo";
import { CONTACT } from "@/i18n/content";

const YEAR = new Date().getFullYear();

export const Footer = () => {
  const { c } = useLocale();

  const columns = [
    { title: c.footer.columns.services, links: c.footer.services },
    { title: c.footer.columns.company, links: c.footer.company },
  ];

  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="mx-auto w-full max-w-[1440px] border-white/10 px-6 md:border-x md:px-10">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="measure mt-6 text-sm leading-relaxed text-ink-dim">{c.footer.tagline}</p>
            <div className="mt-6 flex flex-col gap-1.5">
              <a
                href={`mailto:${CONTACT.email}`}
                className="link-rule w-fit font-mono text-sm text-ink hover:text-signal"
              >
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.whatsapp}
                className="link-rule w-fit font-mono text-sm text-ink-dim hover:text-signal"
              >
                {CONTACT.whatsappLabel}
              </a>
              <a
                href={CONTACT.linkedin}
                className="link-rule w-fit font-mono text-sm text-ink-dim hover:text-signal"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} className="md:col-span-2" aria-label={column.title}>
              <h2 className="label text-ink-faint">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-dim transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="md:col-span-3">
            <h2 className="label text-ink-faint">{c.footer.columns.legal}</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.legalEmail}?subject=${encodeURIComponent(c.footer.privacy)}`}
                  className="text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  {c.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.legalEmail}?subject=${encodeURIComponent(c.footer.terms)}`}
                  className="text-sm text-ink-dim transition-colors hover:text-ink"
                >
                  {c.footer.terms}
                </a>
              </li>
            </ul>
            <p className="label mt-6 text-ink-faint">{c.footer.location}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-ink-faint">
            © {YEAR} RFS · RedFort Security. {c.footer.rights}
          </p>
          <p className="label text-ink-faint">
            {c.hero.facts[1].value} {c.hero.facts[1].label}
          </p>
        </div>
      </div>

      {/* Oversized wordmark, clipped by the viewport edge. */}
      <div aria-hidden className="overflow-hidden border-t border-white/10">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <span className="numeral block translate-y-[18%] text-[clamp(5rem,20vw,17rem)] leading-[0.8] tracking-[-0.05em]">
            RFS
          </span>
        </div>
      </div>
    </footer>
  );
};
