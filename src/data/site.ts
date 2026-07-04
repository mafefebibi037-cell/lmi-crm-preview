/* ============================================================
   Configuration centrale du site — MODIFIABLE FACILEMENT
   Change ici le branding, les contacts et le HERO.
   ============================================================ */

export const site = {
  name: "Legal Migration International",
  shortName: "LMI",
  tagline: "La Migration Internationale",
  region: "DRC",
  slogan: "Votre avenir. Notre mission.",
  subSlogan: "Ensemble, ouvrons les portes du monde.",
  contact: {
    phones: ["+243 997 173 630", "+243 892 987 796"],
    whatsapp: "243997173630",
    email: "contact@legalmigration-intl.com",
    address:
      "Croisement Avenue Kilela Balanda et Avenue de la Révolution (En face de la station-service), Lubumbashi",
    offices: ["Lubumbashi, RDC", "Afrique du Sud"],
  },
  social: {
    facebook: "#",
    instagram: "#",
    tiktok: "#",
  },
} as const;

/* ---------- HERO — COMPOSANT CONFIGURABLE ----------
   backgroundType : "gradient" | "image" | "video" | "parallax"
   Pour changer le fond, modifie simplement backgroundType et
   backgroundSrc. Le composant Hero gère les 4 cas.
--------------------------------------------------------- */
export type HeroBackgroundType = "gradient" | "image" | "video" | "parallax";

export interface HeroConfig {
  backgroundType: HeroBackgroundType;
  /** URL image/vidéo si backgroundType = image/video/parallax */
  backgroundSrc?: string;
  eyebrow: string;
  titleLines: string[];
  highlight: string; // mot mis en avant (or)
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  badges: string[];
}

export const heroConfig: HeroConfig = {
  // Par défaut : dégradé marine premium (aucun asset externe requis).
  // Passe à "image" ou "video" + backgroundSrc quand le client fournit un asset.
  backgroundType: "gradient",
  backgroundSrc: undefined,
  eyebrow: "Études • Immigration • IELTS",
  titleLines: ["Étudiez à l'étranger,", "de l'Europe au Canada,"],
  highlight: "construisez votre avenir international",
  subtitle:
    "De votre premier message WhatsApp jusqu'à l'obtention de votre visa, nos experts certifiés vous accompagnent à chaque étape. Des études internationales accessibles dès 3 500 USD la première année.",
  primaryCta: { label: "Démarrer mon dossier", href: "#contact" },
  secondaryCta: { label: "Découvrir nos services", href: "#services" },
  badges: ["Canada", "Royaume-Uni", "Afrique du Sud", "Hongrie", "Bulgarie"],
};

/* ---------- Statistiques (section chiffres) ---------- */
export const stats = [
  { value: "1 200+", label: "Candidats accompagnés" },
  { value: "94%", label: "Taux d'acceptation visa" },
  { value: "5", label: "Destinations partenaires" },
  { value: "3 500$", label: "Dès la 1ère année d'études" },
];

/* ---------- Destinations phares ---------- */
export const destinations = [
  { name: "Canada", flag: "🇨🇦", note: "Études & immigration" },
  { name: "Royaume-Uni", flag: "🇬🇧", note: "Universités de prestige" },
  { name: "Afrique du Sud", flag: "🇿🇦", note: "Passerelle stratégique" },
  { name: "Hongrie", flag: "🇭🇺", note: "Europe accessible" },
  { name: "Bulgarie", flag: "🇧🇬", note: "Diplômes reconnus UE" },
];
