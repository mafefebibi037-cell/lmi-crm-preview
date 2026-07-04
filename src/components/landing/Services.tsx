import { Container } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { GraduationCap, Plane, Languages, Users, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Études à l'étranger",
    desc: "Admission dans les meilleures universités du Canada, du Royaume-Uni et d'Europe. Licence, Master, filières techniques et administratives.",
    points: ["Licence / Bachelor", "Master's Degree", "Dès 3 500 USD/an"],
  },
  {
    icon: Plane,
    title: "Visa & Immigration",
    desc: "Accompagnement complet de la procédure d'immigration vers le Canada, la Bulgarie et l'Europe. Dossiers montés par des experts certifiés.",
    points: ["Visa étudiant", "Résidence permanente", "Regroupement familial"],
  },
  {
    icon: Languages,
    title: "Préparation IELTS",
    desc: "Perfectionnez votre anglais et accélérez l'obtention de votre visa. Formation encadrée et passerelle stratégique via l'Afrique du Sud.",
    points: ["Cours intensifs", "Tests blancs", "Coaching personnalisé"],
  },
  {
    icon: Users,
    title: "Recrutement étudiant",
    desc: "Nous connectons les étudiants aux établissements partenaires et gérons l'ensemble du parcours, de la candidature à l'inscription.",
    points: ["Orientation", "Candidatures", "Suivi de dossier"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Nos services</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-navy-900 sm:text-4xl">
              Un accompagnement complet, de A à Z
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-navy-500">
              Quatre pôles d'expertise pour transformer votre projet
              international en réalité.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100/70 bg-white p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)]">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-gold-50 transition-colors group-hover:bg-gold-100" />
                <div className="relative">
                  <div className="flex h-13 w-13 items-center justify-center rounded-xl bg-navy-900 p-3.5 text-gold-400 shadow-sm">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-navy-900">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-navy-500">
                    {s.desc}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gold-700 opacity-0 transition-opacity group-hover:opacity-100">
                    En savoir plus <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
