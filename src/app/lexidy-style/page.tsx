import Link from "next/link";
import {
  site,
  stats,
  destinations,
} from "@/data/site";

/**
 * Variante de landing "corporate international" — structure inspirée
 * des cabinets internationaux type Lexidy (hiérarchie sobre, ton
 * institutionnel), habillée avec la marque et les données réelles de
 * Legal Migration International. Route séparée : /lexidy-style
 * n'affecte pas la démo principale ("/").
 */

const services = [
  {
    title: "Immigration & Visas",
    desc: "Accompagnement complet des procédures de visa et d'immigration vers le Canada, le Royaume-Uni et l'Europe.",
  },
  {
    title: "Études à l'étranger",
    desc: "Admissions universitaires, licence et master, dans nos établissements partenaires à l'international.",
  },
  {
    title: "Préparation IELTS",
    desc: "Formation encadrée pour perfectionner votre anglais et sécuriser votre dossier de visa.",
  },
  {
    title: "Passerelle Afrique du Sud",
    desc: "Un tremplin stratégique via notre bureau en Afrique du Sud vers le Canada, le Royaume-Uni et l'Europe.",
  },
];

export default function LexidyStylePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav sobre */}
      <header className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            {site.name}
          </Link>
          <nav className="hidden gap-8 text-sm text-neutral-600 md:flex">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#destinations" className="hover:text-neutral-900">Destinations</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <a
            href={site.social.whatsapp}
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Nous contacter
          </a>
        </div>
      </header>

      {/* Hero épuré, institutionnel */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">
          {site.tagline} — {site.contact.offices.join(" · ")}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Accompagnement international en immigration et études à l&apos;étranger
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-600">
          {site.slogan} {site.subSlogan} Un accompagnement rigoureux, de la
          première évaluation de votre dossier jusqu&apos;à votre installation.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={site.social.whatsapp}
            className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-neutral-700"
          >
            Démarrer mon dossier
          </a>
          <a
            href="#services"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium hover:border-neutral-900"
          >
            Découvrir nos services
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-semibold tracking-tight">
                {s.end}
                {s.suffix}
              </div>
              <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
          Nos services
        </h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-8">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
            Destinations
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {destinations.map((d) => (
              <div
                key={d.name}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <div className="text-sm font-semibold">{d.name}</div>
                <div className="mt-1 text-xs text-neutral-500">{d.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-sm font-medium uppercase tracking-widest text-neutral-500">
          Contact
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-200 p-6">
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              Téléphone / WhatsApp
            </div>
            <div className="mt-2 text-sm">{site.contact.phones[0]}</div>
          </div>
          <div className="rounded-xl border border-neutral-200 p-6">
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              Email
            </div>
            <div className="mt-2 text-sm">{site.contact.email}</div>
          </div>
          <div className="rounded-xl border border-neutral-200 p-6">
            <div className="text-xs uppercase tracking-wide text-neutral-500">
              Bureau principal
            </div>
            <div className="mt-2 text-sm">{site.contact.address}</div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-10 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} {site.name} — {site.contact.offices.join(" · ")}
      </footer>
    </div>
  );
}
