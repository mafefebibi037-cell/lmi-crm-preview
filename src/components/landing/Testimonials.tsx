import Image from "next/image";
import { Container } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Star, Quote } from "lucide-react";

// Portraits : randomuser.me (placeholders réalistes, à remplacer par de vrais clients)
const testimonials = [
  {
    name: "Divine K.",
    role: "Étudiante — Hongrie",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Grâce à LMI, j'ai obtenu mon visa étudiant en quelques semaines. L'équipe m'a accompagnée à chaque étape, même pour préparer mon départ.",
  },
  {
    name: "Rachel M.",
    role: "Admise — Univ. de Toronto",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Je pensais que le Canada était inaccessible. Ils ont monté un dossier solide et aujourd'hui j'étudie à Toronto. Merci infiniment !",
  },
  {
    name: "Joseph K.",
    role: "Immigration — Canada",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Un accompagnement vraiment professionnel pour l'Entrée Express. Des conseils clairs, des experts qui connaissent parfaitement les procédures.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-ivory-dark py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Ils nous font confiance</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-navy-900 sm:text-4xl">
              Des parcours réussis, partout dans le monde
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-navy-100/70 bg-white p-7 shadow-[var(--shadow-card)]">
                <Quote className="h-8 w-8 text-gold-300" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-gold-400 text-gold-400"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-navy-700">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-gold-200"
                  />
                  <div>
                    <div className="text-sm font-semibold text-navy-900">
                      {t.name}
                    </div>
                    <div className="text-xs text-navy-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
