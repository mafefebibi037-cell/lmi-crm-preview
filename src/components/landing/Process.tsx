import { Container } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { MessageCircle, ClipboardCheck, GraduationCap, PlaneTakeoff } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Premier contact",
    desc: "Vous nous écrivez sur WhatsApp, Facebook ou Instagram. Un conseiller évalue gratuitement votre projet.",
  },
  {
    icon: ClipboardCheck,
    title: "Évaluation du dossier",
    desc: "Nous analysons votre profil, votre budget et vos objectifs pour choisir la meilleure destination.",
  },
  {
    icon: GraduationCap,
    title: "Admission & inscription",
    desc: "Nous montons votre candidature et obtenons votre lettre d'admission auprès de nos établissements partenaires.",
  },
  {
    icon: PlaneTakeoff,
    title: "Visa & départ",
    desc: "Préparation du dossier de visa, suivi jusqu'à l'obtention, et accompagnement avant le grand départ.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-ivory-dark py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Comment ça marche</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-navy-900 sm:text-4xl">
              Votre parcours en 4 étapes simples
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-4">
          {/* Ligne de connexion */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent md:block" />

          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-300 bg-white text-navy-900 shadow-sm">
                  <s.icon className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold-400 text-xs font-bold text-navy-950">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
