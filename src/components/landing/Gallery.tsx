import Image from "next/image";
import { Container } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { gallery, galleryVideo, scrollingWords } from "@/data/site";
import { Play } from "lucide-react";

export function Gallery() {
  return (
    <section id="galerie" className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>En images & en vidéo</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-navy-900 sm:text-4xl">
              L&apos;aventure de nos étudiants
            </h2>
          </Reveal>
        </div>

        {/* Grille média : 1 grande vidéo + 2 images */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-2">
          <Reveal className="lg:col-span-2 lg:row-span-2">
            <div className="group relative h-full min-h-80 overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={gallery.videoPoster}
              >
                <source src={galleryVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent" />
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">
                  Découvrez leurs parcours
                </h3>
                <p className="mt-1 text-sm text-white/70">
                  De Lubumbashi aux campus du monde entier.
                </p>
              </div>
            </div>
          </Reveal>

          {gallery.images.map((img, i) => (
            <Reveal key={img.src} delay={i * 100}>
              <div className="group relative h-56 overflow-hidden rounded-3xl shadow-[var(--shadow-card)] lg:h-full">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                <p className="absolute inset-x-0 bottom-0 p-5 text-sm font-medium text-white">
                  {img.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Texte défilant géant (scrolling text) — 2 lignes en sens opposés */}
      <div className="mt-16 space-y-3">
        <div className="marquee overflow-hidden">
          <div className="marquee-track slow">
            {[...scrollingWords, ...scrollingWords].map((w, i) => (
              <span
                key={i}
                className="mx-5 font-[family-name:var(--font-display)] text-5xl font-bold text-navy-900/90 sm:text-7xl"
              >
                {w}
                <span className="mx-5 text-gold-400">✦</span>
              </span>
            ))}
          </div>
        </div>
        <div className="marquee overflow-hidden">
          <div className="marquee-track slow reverse">
            {[...scrollingWords, ...scrollingWords].map((w, i) => (
              <span
                key={i}
                className="mx-5 font-[family-name:var(--font-display)] text-5xl font-bold text-transparent sm:text-7xl"
                style={{ WebkitTextStroke: "1px rgba(11,23,64,0.25)" }}
              >
                {w}
                <span className="mx-5 text-gold-400/60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
