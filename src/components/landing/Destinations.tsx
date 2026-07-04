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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={i * 80}>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-navy-100/70 bg-white p-6 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-[var(--shadow-card-lg)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ivory text-4xl ring-1 ring-navy-100 transition-transform group-hover:scale-110">
                  {d.flag}
                </div>
                <h3 className="mt-4 font-semibold text-navy-900">{d.name}</h3>
                <p className="mt-1 text-xs text-navy-500">{d.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
