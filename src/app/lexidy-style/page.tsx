import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";
import { site, stats, destinations } from "@/data/site";

/**
 * Variante "marque LMI" — identité bordeaux / or / noir (comme le site
 * Legal Migration International Johannesburg), structure moderne façon
 * cabinet international. Route séparée /lexidy-style (n'affecte pas "/").
 * Données réelles LMI uniquement (aucune donnée tierce non confirmée).
 */

const nav = [
  { label: "Accueil", href: "#top" },
  { label: "À propos", href: "#about" },
  { label: "Nos services", href: "#services" },
  { label: "Carrières", href: "#jobs" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Visas & Immigration",
    desc: "Accompagnement complet des procédures de visa et d'immigration vers le Canada, le Royaume-Uni et l'Europe.",
  },
  {
    title: "Études à l'étranger",
    desc: "Admissions universitaires — licence et master — dans nos établissements partenaires à l'international.",
  },
  {
    title: "Préparation IELTS",
    desc: "Formation encadrée pour perfectionner votre anglais et sécuriser votre dossier de visa.",
  },
  {
    title: "Permis de travail",
    desc: "Constitution et suivi des dossiers de permis de travail et de résidence, jusqu'à la décision finale.",
  },
];

const why = [
  { k: "94%", v: "Taux d'acceptation de visa" },
  { k: "Experts", v: "Conseillers certifiés & expérimentés" },
  { k: "2 bureaux", v: "RDC & Afrique du Sud" },
];

const goldBtn =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#e7cb6a] via-[#d4af37] to-[#a97e1f] px-6 py-3 text-sm font-semibold text-[#2a0606] shadow-[0_6px_20px_-6px_rgba(212,175,55,0.6)] transition-transform hover:scale-[1.03]";

export default function LmiBrandPage() {
  return (
    <div id="top" className="min-h-screen bg-[#0a0404] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-[#d4af37]/15 bg-[#3a0a0a]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark className="h-9 w-9" />
            <span className="text-[13px] font-bold leading-none text-[#e7cb6a]">
              LEGAL MIGRATION
              <br />
              <span className="text-[11px] tracking-[0.18em] text-white/70">
                INTERNATIONAL
              </span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/80 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-[#e7cb6a]">
                {n.label}
              </a>
            ))}
          </nav>
          <a href={site.social.whatsapp} className={goldBtn}>
            Let&apos;s Talk
          </a>
        </div>
      </header>

      {/* HERO (noir) */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 0%, rgba(90,15,15,0.9), transparent 60%), radial-gradient(50% 50% at 10% 30%, rgba(212,175,55,0.08), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7cb6a]">
            {site.contact.offices.join(" · ")}
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Assistance experte en{" "}
            <span className="text-[#e7cb6a]">visa &amp; immigration</span>,
            de la RDC au reste du monde
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            {site.slogan} {site.subSlogan} Un accompagnement rigoureux, de la
            première évaluation de votre dossier jusqu&apos;à votre installation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className={goldBtn}>
              Démarrer mon dossier
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:border-[#e7cb6a] hover:text-[#e7cb6a]"
            >
              Nos services
            </a>
          </div>
        </div>
      </section>

      {/* BANDE BORDEAUX — consultation gratuite */}
      <section className="bg-[#4a0d0d]">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-2">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Besoin d&apos;aide pour votre visa ou vos études&nbsp;?
          </h2>
          <div>
            <p className="text-white/80">
              Obtenez une consultation gratuite et des premiers conseils. Nos
              experts répondent à vos questions et vous indiquent les prochaines
              étapes.
            </p>
            <a href={site.social.whatsapp} className={`${goldBtn} mt-6`}>
              Consultation gratuite
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7cb6a]">
          Nos services
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">
          Un accompagnement complet, à chaque étape
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-[#d4af37]/20 bg-[#1a0808] p-7 transition-colors hover:border-[#d4af37]/50"
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-to-b from-[#e7cb6a] to-[#a97e1f]" />
              <h3 className="mt-5 text-lg font-bold text-[#e7cb6a]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* À PROPOS / POURQUOI NOUS */}
      <section id="about" className="border-y border-[#d4af37]/15 bg-[#120505]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7cb6a]">
                À propos
              </p>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Votre partenaire de confiance pour la migration internationale
              </h2>
              <p className="mt-5 text-white/70">
                Legal Migration International accompagne les étudiants, les
                travailleurs et les familles dans leurs projets d&apos;études et
                d&apos;immigration. Avec des bureaux en {site.contact.offices.join(" et en ")},
                nous combinons expertise locale et réseau international pour
                transformer votre projet en réalité.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
              {why.map((w) => (
                <div
                  key={w.v}
                  className="rounded-xl border border-[#d4af37]/20 bg-[#1a0808] p-5"
                >
                  <div className="text-2xl font-extrabold text-[#e7cb6a]">
                    {w.k}
                  </div>
                  <div className="mt-1 text-sm text-white/70">{w.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[#d4af37]/15 pt-12 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-[#e7cb6a]">
                  {s.end}
                  {s.suffix}
                </div>
                <div className="mt-1 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7cb6a]">
          Destinations
        </p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          De l&apos;Europe au Canada
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="rounded-xl border border-[#d4af37]/20 bg-[#1a0808] p-5"
            >
              <div className="font-bold text-white">{d.name}</div>
              <div className="mt-1 text-xs text-white/60">{d.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* JOBS / CARRIÈRES */}
      <section id="jobs" className="bg-[#4a0d0d]">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7cb6a]">
              Carrières
            </p>
            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Rejoignez une équipe internationale
            </h2>
            <p className="mt-2 max-w-xl text-white/75">
              Nous recherchons des professionnels sérieux et motivés. Envoyez-nous
              votre candidature.
            </p>
          </div>
          <a href={site.social.whatsapp} className={goldBtn}>
            Postuler
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#e7cb6a]">
          Contact
        </p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Parlons de votre projet</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className="rounded-xl border border-[#d4af37]/20 bg-[#1a0808] p-6">
            <div className="text-xs uppercase tracking-wide text-[#e7cb6a]">
              Téléphone / WhatsApp
            </div>
            <div className="mt-2 text-sm text-white/85">{site.contact.phones[0]}</div>
          </div>
          <div className="rounded-xl border border-[#d4af37]/20 bg-[#1a0808] p-6">
            <div className="text-xs uppercase tracking-wide text-[#e7cb6a]">Email</div>
            <div className="mt-2 text-sm text-white/85">{site.contact.email}</div>
          </div>
          <div className="rounded-xl border border-[#d4af37]/20 bg-[#1a0808] p-6">
            <div className="text-xs uppercase tracking-wide text-[#e7cb6a]">
              Bureau principal
            </div>
            <div className="mt-2 text-sm text-white/85">{site.contact.address}</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/15 bg-[#3a0a0a]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-8 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-7 w-7" />
            <span>© {new Date().getFullYear()} {site.name}</span>
          </div>
          <div>{site.contact.offices.join(" · ")}</div>
        </div>
      </footer>
    </div>
  );
}
