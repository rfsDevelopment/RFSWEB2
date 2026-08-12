import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useLocale } from "@/contexts/LocaleContext";
import { Severity, Ticks, type Level } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

/**
 * The signature panel: a sample exposure scan, read as an instrument rather
 * than a paragraph — short label, count, severity. Rows arrive one by one.
 *
 * The data is synthetic and the domain is fictional (`*.example` is reserved
 * by RFC 2606). It is labelled as a sample on purpose — never wire real
 * findings, real credentials or a real third-party domain into this component.
 */
export const ExposureReport = () => {
  const { c, locale } = useLocale();
  const reduced = useReducedMotion();
  const rows = c.report.rows;
  /* +1 step for the credential line, which lands last. */
  const steps = rows.length + 1;
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (reduced) {
      setVisible(steps);
      return;
    }

    setVisible(0);
    const id = window.setInterval(() => {
      setVisible((n) => {
        if (n >= steps) {
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 260);

    return () => window.clearInterval(id);
    /* Restart the sweep when the locale swaps the row set. */
  }, [steps, reduced, locale]);

  const done = visible >= steps;
  const total = rows.reduce((sum, row) => sum + Number(row.v), 0);
  const critical = rows.filter((row) => row.level === "crit").length;

  return (
    <div className="relative border border-white/15 bg-carbon">
      <Ticks />

      {/* Header */}
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
        <span className="label text-ink-dim">{c.report.title}</span>
        <span className="label border border-signal/50 px-2 py-0.5 text-signal">
          {c.report.badge}
        </span>
      </div>

      {/* Command */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 font-mono text-xs text-ink">
        <span className="text-signal">$</span>
        <span className="truncate">{c.report.command}</span>
        {!done && <span className="inline-block h-3.5 w-2 shrink-0 animate-blink bg-signal" />}
      </div>

      {/* Findings matrix */}
      <div>
        {rows.map((row, i) => {
          const shown = i < visible;

          return (
            <div
              key={`${locale}-${row.k}`}
              className={cn(
                "flex items-center justify-between gap-4 border-t border-white/[0.06] px-4 py-3 transition-opacity duration-300 first:border-t-0",
                shown ? "opacity-100" : "opacity-0",
              )}
              aria-hidden={!shown}
            >
              <span className="label truncate text-ink-faint">{row.k}</span>
              <span className="flex shrink-0 items-center gap-4">
                <span className="font-display text-lg font-bold tabular leading-none text-ink">
                  {row.v}
                </span>
                <Severity level={row.level as Level} showLabel={false} />
              </span>
            </div>
          );
        })}
      </div>

      {/* The one line of evidence. Everything else is a count. */}
      <div
        className={cn(
          "flex items-center justify-between gap-3 border-t border-white/10 bg-signal/[0.04] px-4 py-3 transition-opacity duration-300",
          visible > rows.length ? "opacity-100" : "opacity-0",
        )}
        aria-hidden={visible <= rows.length}
      >
        <span className="truncate font-mono text-[0.6875rem] text-ink-dim">
          {c.report.leak.user}
        </span>
        <span className="redact shrink-0">
          {"•".repeat(Math.min(c.report.leak.pass.length, 12))}
        </span>
      </div>

      {/* Totals + disclaimer, one line each */}
      <div className="flex items-baseline justify-between gap-4 border-t border-white/10 px-4 py-3">
        <span className="label text-ink-faint">
          <span className="tabular text-ink">{total}</span> {c.report.findings}
        </span>
        <span className="label text-signal">
          <span className="tabular">{critical}</span> {c.report.critical}
        </span>
      </div>

      <p className="border-t border-white/10 px-4 py-2.5 font-mono text-[0.625rem] text-ink-faint">
        {c.report.footnote}
      </p>
    </div>
  );
};
