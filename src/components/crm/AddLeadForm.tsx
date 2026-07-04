"use client";

import { useState } from "react";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Button, ButtonLink } from "@/components/ui/Button";
import {
  LEAD_SOURCES,
  LEAD_STATUSES,
  SERVICES,
  DESTINATIONS,
} from "@/lib/types";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const fieldCls =
  "h-11 w-full rounded-xl border border-navy-100 bg-white px-4 text-sm outline-none transition-colors placeholder:text-navy-400 focus:border-gold-300 focus:ring-2 focus:ring-gold-100";
const labelCls = "mb-1.5 block text-sm font-medium text-navy-700";

export function AddLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  if (submitted) {
    return (
      <div className="p-5 lg:p-8">
        <Card className="mx-auto max-w-lg p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="mt-5 text-xl font-semibold text-navy-900">
            Lead enregistré !
          </h2>
          <p className="mt-2 text-sm text-navy-500">
            {name || "Le nouveau candidat"} a bien été ajouté à votre pipeline.
            <br />
            <span className="text-xs text-navy-400">
              (Démo — aucune donnée n&apos;est réellement sauvegardée.)
            </span>
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <ButtonLink href="/leads" variant="primary" size="sm">
              Voir les leads
            </ButtonLink>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                setName("");
              }}
            >
              Ajouter un autre
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-5 lg:p-8">
      <Link
        href="/leads"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-navy-900"
      >
        <ArrowLeft className="h-4 w-4" /> Retour aux leads
      </Link>

      <Card className="mx-auto mt-5 max-w-2xl p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-navy-900">
          Nouveau lead
        </h2>
        <p className="mt-1 text-sm text-navy-500">
          Renseignez les informations du candidat pour l&apos;ajouter au
          pipeline.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-6 grid gap-5 sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <label className={labelCls}>Nom complet *</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex : Grâce Mwamba"
              className={fieldCls}
            />
          </div>

          <div>
            <label className={labelCls}>Téléphone *</label>
            <input
              required
              type="tel"
              placeholder="+243 …"
              className={fieldCls}
            />
          </div>
          <div>
            <label className={labelCls}>Email</label>
            <input type="email" placeholder="email@exemple.com" className={fieldCls} />
          </div>

          <div>
            <label className={labelCls}>Source</label>
            <select className={fieldCls} defaultValue={LEAD_SOURCES[0]}>
              {LEAD_SOURCES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Statut</label>
            <select className={fieldCls} defaultValue={LEAD_STATUSES[0]}>
              {LEAD_STATUSES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Service</label>
            <select className={fieldCls} defaultValue={SERVICES[0]}>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls}>Destination</label>
            <select className={fieldCls} defaultValue={DESTINATIONS[0]}>
              {DESTINATIONS.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Ville</label>
            <input placeholder="Ex : Lubumbashi" className={fieldCls} />
          </div>
          <div>
            <label className={labelCls}>Budget estimé (USD)</label>
            <input type="number" placeholder="Ex : 8500" className={fieldCls} />
          </div>

          <div className="sm:col-span-2">
            <label className={labelCls}>Note initiale</label>
            <textarea
              rows={3}
              placeholder="Contexte, objectifs du candidat…"
              className="w-full resize-none rounded-xl border border-navy-100 bg-white px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-navy-400 focus:border-gold-300 focus:ring-2 focus:ring-gold-100"
            />
          </div>

          <div className="sm:col-span-2 flex justify-end gap-3 pt-2">
            <ButtonLink href="/leads" variant="outline" size="md">
              Annuler
            </ButtonLink>
            <Button type="submit" variant="gold" size="md">
              Enregistrer le lead
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
