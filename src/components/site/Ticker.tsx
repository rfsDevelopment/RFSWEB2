import { useLocale } from "@/contexts/LocaleContext";

/**
 * Thin strip of the open sources we cover. Doubled content + a -50% shift
 * makes the loop seamless; the copy is duplicated for the eye only, so the
 * second pass is hidden from assistive tech.
 */
export const Ticker = () => {
  const { c } = useLocale();
  const items = c.ticker.items;

  // No bottom border: the next <Section> supplies it, and two adjacent
  // hairlines read as a 2px mistake.
  return (
    <div className="flex items-stretch border-t border-white/10 bg-carbon/60">
      <div className="hidden shrink-0 items-center border-r border-white/10 px-6 md:flex">
        <span className="label text-signal">{c.ticker.label}</span>
      </div>

      <div className="fade-x flex-1 overflow-hidden py-3.5">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((pass) => (
            <ul
              key={pass}
              className="flex shrink-0 items-center"
              aria-hidden={pass === 1 ? true : undefined}
            >
              {items.map((item) => (
                <li key={item} className="label flex items-center whitespace-nowrap text-ink-faint">
                  <span aria-hidden className="px-4 text-signal/50">
                    /
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};
