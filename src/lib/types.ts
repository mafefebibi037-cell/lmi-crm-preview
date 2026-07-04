/* ============================================================
   Domain types — CRM immigration / éducation
   ============================================================ */

export type LeadSource =
  | "WhatsApp"
  | "Facebook"
  | "Instagram"
  | "TikTok"
  | "Site web"
  | "Référence"
  | "Google Ads";

export type LeadStatus =
  | "Nouveau"
  | "Contacté"
  | "Qualifié"
  | "Dossier en cours"
  | "Gagné"
  | "Perdu";

export type ServiceType =
  | "Études à l'étranger"
  | "Visa & Immigration"
  | "Préparation IELTS"
  | "Recrutement étudiant";

export type Destination =
  | "Canada"
  | "Royaume-Uni"
  | "Afrique du Sud"
  | "Hongrie"
  | "Bulgarie";

export interface LeadNote {
  id: string;
  author: string;
  date: string; // ISO
  text: string;
}

export interface Lead {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  source: LeadSource;
  status: LeadStatus;
  service: ServiceType;
  destination: Destination;
  city: string;
  budgetUsd: number;
  createdAt: string; // ISO
  lastActivity: string; // ISO
  assignedTo: string;
  avatarColor: string;
  notes: LeadNote[];
}

export const LEAD_STATUSES: LeadStatus[] = [
  "Nouveau",
  "Contacté",
  "Qualifié",
  "Dossier en cours",
  "Gagné",
  "Perdu",
];

export const LEAD_SOURCES: LeadSource[] = [
  "WhatsApp",
  "Facebook",
  "Instagram",
  "TikTok",
  "Site web",
  "Référence",
  "Google Ads",
];

export const SERVICES: ServiceType[] = [
  "Études à l'étranger",
  "Visa & Immigration",
  "Préparation IELTS",
  "Recrutement étudiant",
];

export const DESTINATIONS: Destination[] = [
  "Canada",
  "Royaume-Uni",
  "Afrique du Sud",
  "Hongrie",
  "Bulgarie",
];

/** Tailwind classes per status for badges. */
export const STATUS_STYLES: Record<LeadStatus, string> = {
  Nouveau: "bg-navy-100 text-navy-700 ring-navy-200",
  Contacté: "bg-sky-100 text-sky-700 ring-sky-200",
  Qualifié: "bg-gold-100 text-gold-800 ring-gold-300",
  "Dossier en cours": "bg-amber-100 text-amber-800 ring-amber-300",
  Gagné: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  Perdu: "bg-rose-100 text-rose-700 ring-rose-200",
};

/** Brand color per source for source pills / icons. */
export const SOURCE_COLORS: Record<LeadSource, string> = {
  WhatsApp: "#25D366",
  Facebook: "#1877F2",
  Instagram: "#E1306C",
  TikTok: "#010101",
  "Site web": "#0b1740",
  Référence: "#a87c22",
  "Google Ads": "#EA4335",
};
