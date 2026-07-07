import Link from "next/link";
import { LogoMark } from "@/components/ui/Logo";
import { site, stats, destinations } from "@/data/site";

/**
 * Site vitrine complet — identité marque LMI (bordeaux / or / noir),
 * agencement complet façon cabinet international (type Lexidy) :
 * nav, hero, avis, services, process, pourquoi nous, stats, destinations,
 * témoignages, équipe, FAQ, ressources, CTA, newsletter, footer riche.
 * Données réelles LMI uniquement. Route séparée /lexidy-style.
 */

const nav = [
  { label: "Accueil", href: "#top" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Destinations", href: "#destinations" },
  { label: "Ressources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { title: "Visas & Immigration", desc: "Procédures de visa et d'immigration vers le Canada, le Royaume-Uni et l'Europe, montées par des experts." },
  { title: "Études à l'étranger", desc: "Admissions universitaires — licence et master — dans nos établissements partenaires internationaux." },
  { title: "Préparation IELTS", desc: "Formation encadrée pour perfectionner votre anglais et sécuriser votre dossier de visa." },
  { title: "Permis de travail", desc: "Constitution et suivi des dossiers de permis de travail et de résidence, jusqu'à la décision finale." },
  { title: "Regroupement familial", desc: "Accompagnement des démarches de regroupement familial et d'installation à l'étranger." },
  { title: "Conseil & évaluation", desc: "Évaluation gratuite de votre profil et orientation vers la meilleure destination pour votre projet." },
];

const process = [
  { n: "01", title: "Consultation gratuite", desc: "Vous nous contactez, nous évaluons votre profil et vos objectifs sans engagement." },
  { n: "02", title: "Plan personnalisé", desc: "Nous définissons la meilleure stratégie : destination, programme, budget, calendrier." },
  { n: "03", title: "Montage du dossier", desc: "Nos experts préparent votre candidature et votre dossier de visa, pièce par pièce." },
  { n: "04", title: "Suivi jusqu'au départ", desc: "Nous suivons votre dossier jusqu'à la décision finale et préparons votre installation." },
];

const features = [
  { title: "Experts certifiés", desc: "Une équipe de conseillers expérimentés en immigration et éducation internationale." },
  { title: "Accompagnement humain", desc: "Un interlocuteur dédié, du premier message jusqu'à votre arrivée à destination." },
  { title: "Réseau international", desc: "Des bureaux en RDC et en Afrique du Sud, et des partenaires partout dans le monde." },
  { title: "Transparence totale", desc: "Des étapes claires, des tarifs annoncés à l'avance, aucune mauvaise surprise." },
  { title: "Fort taux de réussite", desc: "94 % de nos dossiers de visa aboutissent favorablement." },
  { title: "Multilingue", desc: "Nous vous accompagnons en français, anglais et langues locales." },
];

const testimonials = [
  { name: "Divine K.", role: "Étudiante — Hongrie", quote: "Grâce à LMI, j'ai obtenu mon visa étudiant en quelques semaines. Un accompagnement du début à la fin." },
  { name: "Joseph K.", role: "Immigration — Canada", quote: "Des conseils clairs et des experts qui maîtrisent parfaitement les procédures. Je recommande." },
  { name: "Rachel M.", role: "Admise — Univ. de Toronto", quote: "Je pensais que le Canada était inaccessible. Aujourd'hui j'y étudie. Merci infiniment." },
];

const team = [
  { name: "Ayesha N.", role: "Conseillère senior" },
  { name: "Didier M.", role: "Responsable admissions" },
  { name: "Sarah I.", role: "Experte visa & immigration" },
  { name: "Jean K.", role: "Coordinateur Afrique du Sud" },
];

const faqs = [
  { q: "Combien coûte un accompagnement ?", a: "Les études internationales sont accessibles dès 3 500 USD la première année. Chaque dossier est évalué gratuitement avant tout devis." },
  { q: "Quelles destinations proposez-vous ?", a: "Canada, Royaume-Uni, Afrique du Sud, Hongrie et Bulgarie, avec un réseau d'établissements partenaires." },
  { q: "Combien de temps prend une procédure ?", a: "Cela dépend de la destination et du type de dossier, mais nous vous donnons un calendrier réaliste dès le départ." },
  { q: "Proposez-vous la préparation IELTS ?", a: "Oui, une préparation encadrée pour perfectionner votre anglais et renforcer votre dossier de visa." },
  { q: "Comment démarrer ?", a: "Contactez-nous sur WhatsApp pour une évaluation gratuite de votre dossier — nous vous indiquons les prochaines étapes." },
];

const resources = [
  { cat: "Immigration", title: "Réussir sa demande de visa étudiant pour le Canada", excerpt: "Les étapes clés, les pièces à préparer et les erreurs à éviter." },
  { cat: "Études", title: "Étudier en Europe dès 3 500 USD : guide complet", excerpt: "Hongrie, Bulgarie : des diplômes reconnus dans l'UE à coût accessible." },
  { cat: "IELTS", title: "Atteindre le score IELTS exigé par votre programme", excerpt: "Nos conseils pour progresser vite et viser le bon niveau." },
];

const goldBtn =
  "inline-flex items-center justify-center rounded-full bg-gradient-to-b from-[#e7cb6a] via-[#d4af37] to-[#a97e1f] px-6 py-3 text-sm font-semibold text-[#2a0606] shadow-[0_6px_20px_-6px_rgba(212,175,55,0.6)] transition-transform hover:scale-[1.03]";
const eyebrow = "text-sm font-semibold uppercase tracking-[0.22em] text-[#e7cb6a]";
const card = "rounded-2xl border border-[#d4af37]/20 bg-[#1a0808]";

function initials(n: string) {
  return n.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

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
              <span className="text-[11px] tracking-[0.18em] text-white/70">INTERNATIONAL</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/80 lg:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-[#e7cb6a]">{n.label}</a>
            ))}
          </nav>
          <a href={site.social.whatsapp} className={goldBtn}>Let&apos;s Talk</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70" style={{ background: "radial-gradient(60% 60% at 80% 0%, rgba(90,15,15,0.9), transparent 60%), radial-gradient(50% 50% at 10% 30%, rgba(212,175,55,0.08), transparent 60%)" }} />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <p className={eyebrow}>{site.contact.offices.join(" · ")}</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Assistance experte en <span className="text-[#e7cb6a]">visa &amp; immigration</span>, de la RDC au reste du monde
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            {site.slogan} {site.subSlogan} Un accompagnement rigoureux, de la première évaluation de votre dossier jusqu&apos;à votre installation.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className={goldBtn}>Démarrer mon dossier</a>
            <a href="#services" className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white hover:border-[#e7cb6a] hover:text-[#e7cb6a]">Nos services</a>
            <span className="text-sm text-white/60">★★★★★ &nbsp;Consultation gratuite</span>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-[#d4af37]/15 bg-[#120505]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-sm text-white/60">
          <span>Ils construisent leur avenir avec nous</span>
          <span className="text-[#e7cb6a]">✦ Canada ✦ Royaume-Uni ✦ Afrique du Sud ✦ Hongrie ✦ Bulgarie</span>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <p className={eyebrow}>Nos services</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">Un accompagnement complet, à chaque étape</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className={`${card} p-7 transition-colors hover:border-[#d4af37]/50`}>
              <div className="h-9 w-9 rounded-lg bg-gradient-to-b from-[#e7cb6a] to-[#a97e1f]" />
              <h3 className="mt-5 text-lg font-bold text-[#e7cb6a]">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-sm font-medium text-[#e7cb6a] hover:underline">En savoir plus →</a>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-[#d4af37]/15 bg-[#120505]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className={eyebrow}>Comment ça marche</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Votre parcours en 4 étapes</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {process.map((p) => (
              <div key={p.n}>
                <div className="text-4xl font-extrabold text-[#d4af37]/40">{p.n}</div>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
          <a href="#contact" className={`${goldBtn} mt-10`}>Commencer maintenant</a>
        </div>
      </section>

      {/* WHY US */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className={eyebrow}>Pourquoi nous choisir</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold sm:text-4xl">Votre partenaire de confiance pour la migration internationale</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className={`${card} p-6`}>
              <h3 className="text-base font-bold text-[#e7cb6a]">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#4a0d0d]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold text-[#e7cb6a]">{s.end}{s.suffix}</div>
              <div className="mt-1 text-sm text-white/75">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="mx-auto max-w-6xl px-6 py-24">
        <p className={eyebrow}>Destinations</p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">De l&apos;Europe au Canada, le monde s&apos;ouvre à vous</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {destinations.map((d) => (
            <div key={d.name} className={`${card} p-5`}>
              <div className="font-bold text-white">{d.name}</div>
              <div className="mt-1 text-xs text-white/60">{d.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-[#d4af37]/15 bg-[#120505]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className={eyebrow}>Ils nous font confiance</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Des parcours réussis, partout dans le monde</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className={`${card} flex h-full flex-col p-7`}>
                <div className="text-[#e7cb6a]">★★★★★</div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/80">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#e7cb6a] to-[#a97e1f] text-sm font-bold text-[#2a0606]">{initials(t.name)}</span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-white/55">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className={eyebrow}>Notre équipe</p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Des experts à votre écoute</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name} className={`${card} p-6 text-center`}>
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-b from-[#e7cb6a] to-[#a97e1f] text-xl font-bold text-[#2a0606]">{initials(m.name)}</span>
              <div className="mt-4 font-bold">{m.name}</div>
              <div className="text-sm text-[#e7cb6a]">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-[#d4af37]/15 bg-[#120505]">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <p className={eyebrow}>Questions fréquentes</p>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Vous vous posez ces questions ?</h2>
          <div className="mt-10 divide-y divide-[#d4af37]/15 overflow-hidden rounded-2xl border border-[#d4af37]/20">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-[#1a0808] p-5 [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between text-sm font-semibold text-white marker:hidden">
                  {f.q}<span className="text-[#e7cb6a] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES / BLOG */}
      <section id="resources" className="mx-auto max-w-6xl px-6 py-24">
        <p className={eyebrow}>Ressources</p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Conseils & guides pour votre projet</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <article key={r.title} className={`${card} overflow-hidden`}>
              <div className="h-40 bg-gradient-to-br from-[#4a0d0d] to-[#1a0808]" />
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wide text-[#e7cb6a]">{r.cat}</div>
                <h3 className="mt-2 font-bold leading-snug">{r.title}</h3>
                <p className="mt-2 text-sm text-white/65">{r.excerpt}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium text-[#e7cb6a] hover:underline">Lire l&apos;article →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-[#4a0d0d]">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold sm:text-4xl">Prêt à construire votre avenir international ?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Contactez-nous dès aujourd&apos;hui pour une évaluation gratuite de votre dossier.</p>
          <a href={site.social.whatsapp} className={`${goldBtn} mt-8`}>Consultation gratuite sur WhatsApp</a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
        <p className={eyebrow}>Contact</p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Parlons de votre projet</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <div className={`${card} p-6`}>
            <div className="text-xs uppercase tracking-wide text-[#e7cb6a]">Téléphone / WhatsApp</div>
            <div className="mt-2 text-sm text-white/85">{site.contact.phones[0]}</div>
          </div>
          <div className={`${card} p-6`}>
            <div className="text-xs uppercase tracking-wide text-[#e7cb6a]">Email</div>
            <div className="mt-2 text-sm text-white/85">{site.contact.email}</div>
          </div>
          <div className={`${card} p-6`}>
            <div className="text-xs uppercase tracking-wide text-[#e7cb6a]">Bureau principal</div>
            <div className="mt-2 text-sm text-white/85">{site.contact.address}</div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-[#d4af37]/15 bg-[#120505]">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-bold">Restez informé</h3>
            <p className="mt-1 text-sm text-white/65">Recevez nos conseils et opportunités d&apos;études à l&apos;étranger.</p>
          </div>
          <form className="flex w-full max-w-md gap-3">
            <input type="email" placeholder="Votre email" className="h-11 flex-1 rounded-full border border-[#d4af37]/25 bg-[#1a0808] px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#e7cb6a]" />
            <button type="button" className={goldBtn}>S&apos;abonner</button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#3a0a0a]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8" />
              <span className="text-sm font-bold text-[#e7cb6a]">LEGAL MIGRATION<br /><span className="text-[10px] tracking-[0.18em] text-white/70">INTERNATIONAL</span></span>
            </div>
            <p className="mt-4 text-sm text-white/60">{site.slogan} {site.subSlogan}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold">Services</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><a href="#services" className="hover:text-[#e7cb6a]">Visas & Immigration</a></li>
              <li><a href="#services" className="hover:text-[#e7cb6a]">Études à l&apos;étranger</a></li>
              <li><a href="#services" className="hover:text-[#e7cb6a]">Préparation IELTS</a></li>
              <li><a href="#services" className="hover:text-[#e7cb6a]">Permis de travail</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Entreprise</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li><a href="#about" className="hover:text-[#e7cb6a]">À propos</a></li>
              <li><a href="#resources" className="hover:text-[#e7cb6a]">Ressources</a></li>
              <li><a href="#contact" className="hover:text-[#e7cb6a]">Contact</a></li>
              <li><a href={site.social.whatsapp} className="hover:text-[#e7cb6a]">Carrières</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>{site.contact.phones[0]}</li>
              <li>{site.contact.email}</li>
              <li>{site.contact.offices.join(" · ")}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#d4af37]/15 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
}
