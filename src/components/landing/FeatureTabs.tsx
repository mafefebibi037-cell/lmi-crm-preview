"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import {
  Compass,
  GraduationCap,
  FileCheck2,
  Globe2,
  Check,
} from "lucide-react";

const tabs = [
  {
    id: "orientation",
    icon: Compass,
    title: "Orientation personnalisée",
    heading: "Un conseiller dédié, du premier message au départ",
    desc: "Nous analysons votre profil, votre budget et vos ambitions pour bâtir le meilleur plan d'études ou d'immigration.",
    points: [
      "Évaluation gratuite de votre dossier",
      "Choix de la destination idéale",
      "Plan personnalisé étape par étape",
    ],
    stat: { value: "1 200+", label: "profils accompagnés" },
    advisor: "Ayesha N.",
    role: "Conseillère senior",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "admission",
    icon: GraduationCap,
    title: "Admissions universitaires",
    heading: "Un réseau d'universités partenaires",
    desc: "Nous montons votre candidature et obtenons votre lettre d'admission auprès d'établissements reconnus.",
    points: [
      "Licence, Master, filières techniques",
      "Dossiers de candidature complets",
      "Études dès 3 500 USD la 1ère année",
    ],
    stat: { value: "5", label: "pays de destination" },
    advisor: "Didier M.",
    role: "Responsable admissions",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "visa",
    icon: FileCheck2,
    title: "Visa & Immigration",
    heading: "Des dossiers de visa solides et suivis",
    desc: "Nos experts certifiés préparent et suivent votre dossier de visa jusqu'à l'obtention.",
    points: [
      "Visa étudiant & permis de travail",
      "Entrée Express, résidence permanente",
      "Suivi jusqu'à la décision finale",
    ],
    stat: { value: "94%", label: "de visas acceptés" },
    advisor: "Sarah I.",
    role: "Experte visa & immigration",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "passerelle",
    icon: Globe2,
    title: "Passerelle Afrique du Sud",
    heading: "Perfectionnez votre anglais, accélérez votre visa",
    desc: "Utilisez l'Afrique du Sud comme tremplin stratégique vers le Canada, le Royaume-Uni et l'Europe.",
    points: [
      "Préparation IELTS encadrée",
      "Immersion en environnement anglophone",
      "Transition facilitée vers l'Ouest",
    ],
    stat: { value: "2", label: "bureaux (RDC & Afrique du Sud)" },
    advisor: "Jean K.",
    role: "Coordinateur Afrique du Sud",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Une plateforme, tout votre parcours</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
              Tout ce dont vous avez besoin, au même endroit
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr]">
            {/* Onglets */}
            <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group flex flex-shrink-0 items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all lg:flex-shrink",
                    active === i
                      ? "glass-strong border-gold-300/40"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06]"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors",
                      active === i
                        ? "bg-gold-400 text-navy-950"
                        : "bg-white/10 text-white/60"
                    )}
                  >
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      active === i ? "text-white" : "text-white/70"
                    )}
                  >
                    {t.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Panneau */}
            <div
              key={tab.id}
              className="glass-strong animate-fade-up rounded-3xl p-8 sm:p-10"
            >
              <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {tab.heading}
                  </h3>
                  <p className="mt-3 text-white/65">{tab.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {tab.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-white/80">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visuel : photo du conseiller + stat */}
                <div className="relative overflow-hidden rounded-2xl bg-mesh-navy p-8 text-center">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-400/20 blur-2xl" />
                  <div className="relative">
                    <Image
                      src={tab.photo}
                      alt={tab.advisor}
                      width={96}
                      height={96}
                      className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-white/15"
                    />
                    <div className="mt-4 text-base font-semibold text-white">
                      {tab.advisor}
                    </div>
                    <div className="text-xs text-gold-300">{tab.role}</div>
                    <div className="mx-auto mt-5 h-px w-16 bg-white/15" />
                    <div className="mt-5 font-[family-name:var(--font-display)] text-5xl font-bold text-gradient-gold">
                      {tab.stat.value}
                    </div>
                    <div className="mt-2 text-sm text-white/70">
                      {tab.stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
