import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/** Shared easing for every reveal on the site. See DESIGN.md → Motion. */
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * The only scroll animation on the site: 14px up, 550ms, once.
 * Collapses to a plain fade when the visitor asked for reduced motion.
 */
export const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduced ? 0.2 : 0.55, ease: EASE, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
};

/** Stagger helper: caps the delay so long lists never crawl. */
export const stagger = (index: number, step = 0.06, max = 0.36) => Math.min(index * step, max);

/**
 * Four L-shaped corner marks — the house alternative to rounded borders.
 * Parent must be positioned.
 */
export const Ticks = ({ className = "border-signal" }: { className?: string }) => (
  <span aria-hidden className="pointer-events-none absolute inset-0">
    <span className={cn("absolute left-0 top-0 h-2 w-2 border-l border-t", className)} />
    <span className={cn("absolute right-0 top-0 h-2 w-2 border-r border-t", className)} />
    <span className={cn("absolute bottom-0 left-0 h-2 w-2 border-b border-l", className)} />
    <span className={cn("absolute bottom-0 right-0 h-2 w-2 border-b border-r", className)} />
  </span>
);

/** Mono micro-label with an optional trailing hairline that eats the remaining width. */
export const LabelRow = ({
  index,
  label,
  className,
  ruleClassName = "bg-white/10",
}: {
  index?: string;
  label: string;
  className?: string;
  ruleClassName?: string;
}) => (
  <div className={cn("flex items-center gap-4", className)}>
    {index && <span className="label tabular text-signal">{index}</span>}
    <span className="label text-ink-faint">{label}</span>
    <span className={cn("h-px flex-1", ruleClassName)} />
  </div>
);

type BtnVariant = "solid" | "outline" | "boneSolid" | "boneOutline";

const BTN_BASE =
  "group/btn label inline-flex h-12 items-center justify-between gap-6 border px-5 transition-colors duration-150";

const BTN_VARIANTS: Record<BtnVariant, string> = {
  solid: "border-signal bg-signal text-white hover:border-signal-deep hover:bg-signal-deep",
  outline: "border-white/20 text-ink hover:border-signal hover:text-signal",
  boneSolid: "border-void bg-void text-bone hover:border-signal hover:bg-signal",
  boneOutline: "border-void/25 text-void hover:border-signal hover:text-signal",
};

/**
 * Square button with a mono label and an arrow that steps right on hover.
 * Renders an <a> when `href` is set, a <button> otherwise.
 */
export const Btn = ({
  href,
  children,
  variant = "solid",
  className,
  onClick,
  arrow = true,
  ...rest
}: {
  href?: string;
  children: React.ReactNode;
  variant?: BtnVariant;
  className?: string;
  onClick?: () => void;
  arrow?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "onClick">) => {
  const classes = cn(BTN_BASE, BTN_VARIANTS[variant], className);
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <span aria-hidden className="transition-transform duration-200 group-hover/btn:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {inner}
    </button>
  );
};

/**
 * Section wrapper: full-bleed top hairline, blueprint gutters, house rhythm.
 */
export const Section = ({
  id,
  children,
  className,
  inner,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  inner?: string;
}) => (
  <section id={id} className={cn("border-t border-white/10", className)}>
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] border-white/10 px-6 py-20 md:border-x md:px-10 md:py-32",
        inner,
      )}
    >
      {children}
    </div>
  </section>
);

/** Section heading block: index + label, display title, optional lead. */
export const SectionHead = ({
  index,
  label,
  title,
  accent,
  lead,
  onBone = false,
  className,
}: {
  index: string;
  label: string;
  title: string;
  accent?: string;
  lead?: string;
  onBone?: boolean;
  className?: string;
}) => (
  <div className={className}>
    <LabelRow index={index} label={label} ruleClassName={onBone ? "bg-void/15" : "bg-white/10"} />
    <div className="mt-8 grid gap-8 lg:grid-cols-12">
      <h2
        className={cn(
          "text-[clamp(1.9rem,4vw,3.25rem)] font-bold leading-[1.02] lg:col-span-7",
          onBone ? "text-void" : "text-ink",
        )}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-signal">{accent}</span>
          </>
        )}
      </h2>
      {lead && (
        <p
          className={cn(
            "measure self-end text-[1.0625rem] leading-relaxed lg:col-span-5",
            onBone ? "text-void/70" : "text-ink-dim",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  </div>
);

export type Level = "ok" | "med" | "high" | "crit";

const LEVEL_FILL: Record<Level, number> = { ok: 1, med: 2, high: 3, crit: 4 };
const LEVEL_COLOR: Record<Level, string> = {
  ok: "bg-ink-faint",
  med: "bg-signal/50",
  high: "bg-signal/75",
  crit: "bg-signal",
};
const LEVEL_TEXT: Record<Level, string> = {
  ok: "text-ink-faint",
  med: "text-signal/70",
  high: "text-signal/90",
  crit: "text-signal",
};

/** Four-cell severity meter. Never a coloured pill. */
export const Severity = ({ level, showLabel = true }: { level: Level; showLabel?: boolean }) => (
  <span className="inline-flex items-center gap-2">
    <span aria-hidden className="inline-flex gap-[3px]">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={cn("h-2.5 w-1.5", i < LEVEL_FILL[level] ? LEVEL_COLOR[level] : "bg-white/10")}
        />
      ))}
    </span>
    {showLabel && (
      <span className={cn("label tabular", LEVEL_TEXT[level])}>{level.toUpperCase()}</span>
    )}
  </span>
);
