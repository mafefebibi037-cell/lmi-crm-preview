"use client";

import { useState } from "react";
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
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="relative bg-ivory-dark py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Une plateforme, tout votre parcours</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-navy-900 sm:text-4xl">
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
                      ? "border-gold-300 bg-white shadow-[var(--shadow-card)]"
                      : "border-transparent bg-white/50 hover:bg-white"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors",
                      active === i
                        ? "bg-navy-900 text-gold-400"
                        : "bg-navy-50 text-navy-500"
                    )}
                  >
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      active === i ? "text-navy-900" : "text-navy-600"
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
              className="animate-fade-up rounded-3xl border border-navy-100 bg-white p-8 shadow-[var(--shadow-card)] sm:p-10"
            >
              <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
                <div>
                  <h3 className="text-2xl font-semibold text-navy-900">
                    {tab.heading}
                  </h3>
                  <p className="mt-3 text-navy-500">{tab.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {tab.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-navy-700">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visuel */}
                <div className="relative overflow-hidden rounded-2xl bg-mesh-navy p-8 text-center">
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold-400/20 blur-2xl" />
                  <div className="relative">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-gold-400 ring-1 ring-white/15">
                      <tab.icon className="h-8 w-8" />
                    </div>
                    <div className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold text-gradient-gold">
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
