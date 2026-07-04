import { Container } from "@/components/ui/Card";

const items = [
  "Universités canadiennes",
  "★",
  "Programmes UK",
  "★",
  "Campus Afrique du Sud",
  "★",
  "Facultés européennes",
  "★",
  "Entrée Express Canada",
  "★",
  "IELTS / Anglais",
  "★",
  "Bourses & financements",
  "★",
];

export function TrustStrip() {
  return (
    <section className="border-y border-navy-100 bg-white py-6">
      <Container>
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-navy-400">
          Ils construisent leur avenir avec nous
        </p>
      </Container>
      <div className="marquee relative overflow-hidden">
        {/* Fades latéraux */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="marquee-track">
          {[...items, ...items].map((it, i) => (
            <span
              key={i}
              className={
                it === "★"
                  ? "mx-6 self-center text-gold-400"
                  : "mx-6 whitespace-nowrap text-lg font-semibold text-navy-700/80"
              }
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
