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

/* ---------- Statistiques (section chiffres, compteur animé) ---------- */
export const stats = [
  { end: 1200, suffix: "+", prefix: "", label: "Candidats accompagnés" },
  { end: 94, suffix: "%", prefix: "", label: "Taux d'acceptation visa" },
  { end: 5, suffix: "", prefix: "", label: "Destinations partenaires" },
  { end: 3500, suffix: " $", prefix: "", label: "Dès la 1ère année d'études" },
];

/* ---------- Destinations phares ----------
   Images : Unsplash (libres de droits), contenu vérifié.
   Pour changer une image, remplace simplement l'URL.
--------------------------------------------------------- */
export const destinations = [
  {
    name: "Canada",
    code: "ca",
    note: "Études & immigration",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",
  },
  {
    name: "Royaume-Uni",
    code: "gb",
    note: "Universités de prestige",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
  },
  {
    name: "Afrique du Sud",
    code: "za",
    note: "Passerelle stratégique",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80",
  },
  {
    name: "Hongrie",
    code: "hu",
    note: "Europe accessible",
    image:
      "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=800&q=80",
  },
  {
    name: "Bulgarie",
    code: "bg",
    note: "Diplômes reconnus UE",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
];

/* Image d'ambiance "études" (remise de diplômes) — fond CTA */
export const graduationImage =
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1400&q=80";

/* Vidéo de fond cinématique (Pexels, libre de droits) */
export const cinematicVideo =
  "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4";
