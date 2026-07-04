import { Container } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export function CTA() {
  const wa = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Bonjour, je souhaite des informations sur vos services d'études à l'étranger."
  )}`;

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-mesh-navy px-6 py-14 text-center sm:px-16">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-400/20 blur-[90px]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
                Inscrivez-vous dès aujourd&apos;hui
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
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
