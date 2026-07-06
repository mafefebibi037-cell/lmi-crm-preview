import Image from "next/image";
import { Container } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site, graduationImage } from "@/data/site";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function CTA() {
  const wa = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Bonjour, je souhaite des informations sur vos services d'études à l'étranger."
  )}`;

  return (
    <section className="relative py-14 sm:py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-6 py-20 text-center sm:px-16 sm:py-28">
            {/* Image d'ambiance (remise de diplômes) */}
            <Image
              src={graduationImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/60" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/20 blur-[90px]" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-6xl">
                Inscrivez-vous dès aujourd&apos;hui
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
                Assurez votre avenir professionnel avec des experts certifiés.
                Contactez-nous sur WhatsApp pour une évaluation gratuite de votre
                dossier.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink
                  href={wa}
                  variant="gold"
                  size="lg"
                  className="bg-[#25D366] text-white hover:bg-[#1fb757]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Écrire sur WhatsApp
                </ButtonLink>
                <ButtonLink
                  href={`tel:${site.contact.phones[0].replace(/\s/g, "")}`}
                  variant="white"
                  size="lg"
                  className="bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
                >
                  <Phone className="h-5 w-5" />
                  Nous appeler
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-left sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Bureau de Lubumbashi
                    </div>
                    <div className="text-sm text-white/60">
                      {site.contact.address}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Téléphones / WhatsApp
                    </div>
                    <div className="text-sm text-white/60">
                      {site.contact.phones.join("  |  ")}
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
