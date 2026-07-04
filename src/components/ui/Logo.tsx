import { cn } from "@/lib/utils";

/**
 * Logo LMI — boussole stylisée (or) inspirée de l'identité
 * "Legal Migration International". 100% SVG, aucun asset externe.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lmi-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e3c25f" />
          <stop offset="50%" stopColor="#d9ad38" />
          <stop offset="100%" stopColor="#a87c22" />
        </linearGradient>
      </defs>
      {/* Anneau extérieur */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="none"
        stroke="url(#lmi-gold)"
        strokeWidth="4"
      />
      {/* Étoile / rose des vents */}
      <path
        d="M50 8 L58 42 L92 50 L58 58 L50 92 L42 58 L8 50 L42 42 Z"
        fill="url(#lmi-gold)"
      />
      <path
        d="M50 22 L55 45 L78 50 L55 55 L50 78 L45 55 L22 50 L45 45 Z"
        fill="#0b1740"
        opacity="0.85"
      />
      <circle cx="50" cy="50" r="7" fill="url(#lmi-gold)" />
    </svg>
  );
}

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <div className="leading-none">
        <div
          className={cn(
            "font-semibold tracking-tight text-[15px]",
            variant === "light" ? "text-white" : "text-navy-900"
          )}
        >
          LEGAL MIGRATION
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "text-[10px] font-medium tracking-[0.2em]",
              variant === "light" ? "text-white/70" : "text-navy-500"
            )}
          >
            INTERNATIONAL
          </span>
          <span className="text-[10px] font-bold text-gold-500">DRC</span>
        </div>
      </div>
    </div>
  );
}
