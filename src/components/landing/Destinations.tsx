import Image from "next/image";
import { Container } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { destinations } from "@/data/site";

export function Destinations() {
  return (
    <section id="destinations" className="relative py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Nos destinations phares</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-navy-900 sm:text-4xl">
              De l&apos;Europe au Canada, le monde s&apos;ouvre à vous
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[20rem] gap-5 sm:grid-cols-2 sm:auto-rows-[22rem] lg:grid-cols-6">
          {destinations.map((d, i) => (
            <Reveal
              key={d.name}
              delay={i * 80}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-lg)]">
                <Image
                  src={d.image}
                  alt={`${d.name} — ${d.note}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Voile dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/25 to-transparent" />
                {/* Badge drapeau (flagcdn) */}
                <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white/90 shadow-sm ring-1 ring-white/50 backdrop-blur">
                  <Image
                    src={`https://flagcdn.com/w80/${d.code}.png`}
                    alt={`Drapeau ${d.name}`}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Texte */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-lg font-semibold text-white">{d.name}</h3>
                  <p className="mt-0.5 text-xs text-white/75">{d.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
