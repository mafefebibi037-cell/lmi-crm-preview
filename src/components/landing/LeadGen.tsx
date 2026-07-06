"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";
import { DESTINATIONS } from "@/lib/types";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/ui/BrandIcons";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

const fieldCls =
  "h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-gold-300/60 focus:bg-white/10";

const socials = [
  {
    label: "WhatsApp",
    href: site.social.whatsapp,
    Icon: WhatsappIcon,
    color: "#25D366",
    handle: "Écrivez-nous",
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    Icon: FacebookIcon,
    color: "#1877F2",
    handle: "Legal Migration Intl",
  },
  {
    label: "Instagram",
    href: site.social.instagram,
    Icon: InstagramIcon,
    color: "#E1306C",
    handle: "@legalmigration",
  },
  {
    label: "TikTok",
    href: site.social.tiktok,
    Icon: TiktokIcon,
    color: "#ffffff",
    handle: "@legalmigration",
  },
];

export function LeadGen() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: DESTINATIONS[0] as string,
    message: "",
  });

  function update(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Le lead est envoyé sur le WhatsApp de l'agence, pré-rempli.
    const text =
      `Bonjour, je souhaite être accompagné(e) pour mon projet international.%0A%0A` +
      `👤 Nom : ${form.name}%0A` +
      `📧 Email : ${form.email || "—"}%0A` +
      `📞 Téléphone : ${form.phone || "—"}%0A` +
      `🌍 Destination : ${form.destination}%0A` +
      `📝 Message : ${form.message || "—"}`;
    const url = `https://wa.me/${site.contact.whatsapp}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow>Contact & inscription</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
              Parlons de votre projet
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-white/70">
              Laissez-nous vos coordonnées ou écrivez-nous directement sur vos
              réseaux préférés — un conseiller vous répond rapidement.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Formulaire */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-6 sm:p-8">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Merci {form.name || ""} !
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-white/70">
                    Votre demande a été ouverte sur WhatsApp. Envoyez le message
                    et notre équipe vous recontacte au plus vite.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-sm font-medium text-gold-300 hover:text-gold-200"
                  >
                    ← Nouveau formulaire
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-white/80">
                      Nom complet *
                    </label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Votre nom"
                      className={fieldCls}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="email@exemple.com"
                      className={fieldCls}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-white/80">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+243 …"
                      className={fieldCls}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-white/80">
                      Destination souhaitée
                    </label>
                    <select
                      value={form.destination}
                      onChange={(e) => update("destination", e.target.value)}
                      className={fieldCls}
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d} className="bg-navy-900">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-white/80">
                      Votre projet en quelques mots
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Ex : Master en informatique au Canada…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/40 focus:border-gold-300/60 focus:bg-white/10"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gold-400 font-semibold text-navy-950 transition-colors hover:bg-gold-300"
                    >
                      <Send className="h-4 w-4" />
                      Envoyer ma demande
                    </button>
                    <p className="mt-2 text-center text-xs text-white/45">
                      En envoyant, votre demande s&apos;ouvre sur WhatsApp.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>

          {/* Réseaux sociaux + coordonnées */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-4">
              <div className="glass rounded-3xl p-6 sm:p-7">
                <h3 className="text-base font-semibold text-white">
                  Suivez-nous & écrivez-nous
                </h3>
                <p className="mt-1 text-sm text-white/55">
                  Retrouvez-nous sur vos réseaux préférés.
                </p>
                <div className="mt-5 grid gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                    >
                      <span
                        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl transition-transform group-hover:scale-105"
                        style={{ backgroundColor: `${s.color}22`, color: s.color }}
                      >
                        <s.Icon className="h-7 w-7" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-base font-semibold text-white">
                          {s.label}
                        </span>
                        <span className="block truncate text-sm text-white/50">
                          {s.handle}
                        </span>
                      </span>
                      <span className="text-white/30 transition-colors group-hover:text-gold-300">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass rounded-3xl p-6">
                <div className="space-y-3.5 text-sm">
                  <a
                    href={`tel:${site.contact.phones[0].replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-white/80 hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-gold-300" />
                    {site.contact.phones[0]}
                  </a>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="flex items-center gap-3 text-white/80 hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-gold-300" />
                    {site.contact.email}
                  </a>
                  <div className="flex items-start gap-3 text-white/70">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-300" />
                    {site.contact.address}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
