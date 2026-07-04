import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { heroConfig, type HeroConfig } from "@/data/site";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

/* ============================================================
   HERO — COMPOSANT CONFIGURABLE
   Le fond s'adapte à config.backgroundType :
     - "gradient" : dégradé marine premium (défaut, sans asset)
     - "image"    : <img> plein écran + overlay
     - "video"    : <video> autoplay en boucle + overlay
     - "parallax" : image avec effet fixe
   Change simplement heroConfig dans src/data/site.ts.
   ============================================================ */

function HeroBackground({ config }: { config: HeroConfig }) {
  const overlay = (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(6,15,46,0.72) 0%, rgba(6,15,46,0.85) 60%, rgba(6,15,46,0.95) 100%)",
      }}
    />
  );

  if (config.backgroundType === "image" && config.backgroundSrc) {
    return (
      <div className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={config.backgroundSrc}
          alt=""
          className="h-full w-full object-cover"
        />
        {overlay}
      </div>
    );
  }

  if (config.backgroundType === "video" && config.backgroundSrc) {
    return (
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={config.backgroundSrc} type="video/mp4" />
        </video>
        {overlay}
      </div>
    );
  }

  if (config.backgroundType === "parallax" && config.backgroundSrc) {
    return (
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${config.backgroundSrc})` }}
        />
        {overlay}
      </div>
    );
  }

  // Défaut : dégradé marine premium + surface de points animée (Three.js)
  return (
    <div className="absolute inset-0 -z-10 bg-mesh-navy overflow-hidden">
      {/* Surface de points dorés animée (21st.dev, adaptée) */}
      <DottedSurface className="opacity-60" />
      {/* Halo doré flottant */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-400/20 blur-[120px] animate-[float_7s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-navy-500/40 blur-[100px]" />
      {/* Voile pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-transparent to-navy-950/60" />
    </div>
  );
}

export function Hero({ config = heroConfig }: { config?: HeroConfig }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-32">
      <HeroBackground config={config} />

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <Eyebrow light>{config.eyebrow}</Eyebrow>
          </div>

          <h1 className="mt-7 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] text-white sm:text-6xl">
            <span className="block animate-fade-up">{config.titleLines[0]}</span>
            {config.titleLines.slice(1).map((line, i) => (
              <span
                key={i}
                className="block animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                {line}
              </span>
            ))}
            <span
              className="mt-2 block text-gradient-gold animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              {config.highlight}
            </span>
          </h1>

          <p
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            {config.subtitle}
          </p>

          <div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <ButtonLink href={config.primaryCta.href} variant="gold" size="lg">
              {config.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
            <ButtonLink
              href={config.secondaryCta.href}
              variant="white"
              size="lg"
              className="bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
            >
              {config.secondaryCta.label}
            </ButtonLink>
          </div>

          {/* Trust badges */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-gold-400" /> Experts certifiés
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-gold-400" /> 94% de visas acceptés
            </span>
          </div>

          {/* Destinations pills */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-2.5 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            {config.badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
