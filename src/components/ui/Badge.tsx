import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Petite étiquette "eyebrow" dorée au-dessus des titres de section. */
export function Eyebrow({
  children,
  light = true,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]",
        light
          ? "border-white/15 bg-white/5 text-gold-300"
          : "border-gold-300/40 bg-gold-50 text-gold-700"
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
      {children}
    </span>
  );
}
