import { Container } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { site, cinematicVideo, graduationImage } from "@/data/site";
import { ArrowRight } from "lucide-react";

/**
 * Bandeau cinématique plein écran avec vidéo de fond (libre de droits).
 * `poster` = image affichée pendant le chargement de la vidéo.
 */
export function CinematicBand() {
  return (
    <section className="relative overflow-hidden">
      {/* Vidéo de fond */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={graduationImage}
      >
        <source src={cinematicVideo} type="video/mp4" />
      </video>
      {/* Voile marine pour lisibilité */}
      <div className="absolute inset-0 bg-navy-950/75" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(6,15,46,0.85) 0%, rgba(6,15,46,0.45) 100%)",
        }}
      />

      <Container className="relative py-28 sm:py-36">
        <div className="max-w-2xl">
          <div className="gold-divider mb-6 w-16" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-white sm:text-5xl">
            {site.slogan}
          </h2>
          <p className="mt-4 text-lg text-white/75">{site.subSlogan}</p>
          <p className="mt-6 max-w-xl text-white/70">
            Où que vous rêviez d&apos;étudier ou de vous installer, nos experts
            transforment votre projet en réalité — de la première question
            jusqu&apos;à votre arrivée.
          </p>
          <ButtonLink href="#contact" variant="gold" size="lg" className="mt-8">
            Commencer mon projet
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
