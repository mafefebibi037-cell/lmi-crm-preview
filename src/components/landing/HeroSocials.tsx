import { site } from "@/data/site";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/ui/BrandIcons";
import { Mail } from "lucide-react";

const items = [
  { label: "WhatsApp", href: site.social.whatsapp, Icon: WhatsappIcon, color: "#25D366" },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon, color: "#1877F2" },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon, color: "#E1306C" },
  { label: "TikTok", href: site.social.tiktok, Icon: TiktokIcon, color: "#ffffff" },
  { label: "Email", href: `mailto:${site.contact.email}`, Icon: Mail, color: "#EA4335" },
];

/**
 * Rangée de logos réseaux sociaux affichée en haut du site (hero),
 * alignée horizontalement. `pointer-events` réactivé (le hero les coupe).
 */
export function HeroSocials() {
  return (
    <div className="mt-9 flex flex-col items-center" style={{ pointerEvents: "auto" }}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
        Restons connectés
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="group flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-white/15 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:ring-white/40 sm:h-14 sm:w-14"
          style={{ backgroundColor: `${s.color}22`, color: s.color }}
        >
          <s.Icon className="h-6 w-6 sm:h-7 sm:w-7" />
        </a>
        ))}
      </div>
    </div>
  );
}
