import { Container } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/data/site";

export function Stats() {
  return (
    <section className="relative py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="font-[family-name:var(--font-display)] text-6xl font-bold text-gradient-gold sm:text-7xl lg:text-8xl">
                <CountUp end={s.end} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-wider text-white/55">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
