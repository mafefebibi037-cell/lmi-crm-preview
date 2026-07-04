import { Container } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="relative py-16">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-mesh-navy px-6 py-12 sm:px-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="text-center">
                <div className="font-[family-name:var(--font-display)] text-4xl font-bold text-gradient-gold sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/70">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
