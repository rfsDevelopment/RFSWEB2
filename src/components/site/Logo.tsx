import { cn } from "@/lib/utils";

/**
 * The mark is three redaction bars — what someone else already has on you,
 * partly blacked out. The top bar is the signal.
 */
export const Logo = ({
  onBone = false,
  withWordmark = true,
  className,
}: {
  onBone?: boolean;
  withWordmark?: boolean;
  className?: string;
}) => (
  <span className={cn("flex items-center gap-3", className)}>
    <svg width="24" height="24" viewBox="0 0 28 30" aria-hidden className="shrink-0">
      <rect x="0" y="3" width="26" height="5" className="fill-signal" />
      <rect x="0" y="12" width="17" height="5" className={onBone ? "fill-void" : "fill-ink"} />
      <rect x="0" y="21" width="10" height="5" className="fill-ink-faint" />
    </svg>
    {withWordmark && (
      <span className="flex flex-col gap-[3px] leading-none">
        <span
          className={cn(
            "font-display text-[1.0625rem] font-bold leading-none tracking-display",
            onBone ? "text-void" : "text-ink",
          )}
        >
          RFS
        </span>
        {/* Hidden on the narrowest screens: with 0.18em tracking this line is
            ~110px wide and would push the nav past 360px. */}
        <span className="label hidden text-[0.5625rem] leading-none text-ink-faint sm:block">
          RedFort Security
        </span>
      </span>
    )}
  </span>
);
