"use client";

import { useState } from "react";
import Link from "next/link";
import type { Lead, LeadStatus, LeadNote } from "@/lib/types";
import { LEAD_STATUSES } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";
import { SourceIcon } from "./SourceIcon";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatDate, timeAgo } from "@/lib/utils";
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Wallet,
  GraduationCap,
  User,
  Calendar,
  ChevronDown,
  MessageCircle,
  Send,
} from "lucide-react";

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("");
}

export function LeadDetail({ lead }: { lead: Lead }) {
  const [status, setStatus] = useState<LeadStatus>(lead.status);
  const [statusOpen, setStatusOpen] = useState(false);
  const [notes, setNotes] = useState<LeadNote[]>(lead.notes);
  const [draft, setDraft] = useState("");

  function addNote() {
    if (!draft.trim()) return;
    setNotes((prev) => [
      ...prev,
      {
        id: `n${prev.length + 1}`,
        author: "Ayesha N.",
        date: new Date().toISOString(),
        text: draft.trim(),
      },
    ]);
    setDraft("");
  }

  const info = [
    { icon: Phone, label: "Téléphone", value: lead.phone },
    { icon: Mail, label: "Email", value: lead.email ?? "—" },
    { icon: MapPin, label: "Ville", value: lead.city },
    { icon: GraduationCap, label: "Service", value: lead.service },
    { icon: MapPin, label: "Destination", value: lead.destination },
    {
      icon: Wallet,
      label: "Budget estimé",
      value: `${lead.budgetUsd.toLocaleString("fr-FR")} USD`,
    },
    { icon: User, label: "Conseiller", value: lead.assignedTo },
    { icon: Calendar, label: "Créé le", value: formatDate(lead.createdAt) },
  ];

  const wa = `https://wa.me/${lead.phone.replace(/[^0-9]/g, "")}`;

  return (
    <div className="p-5 lg:p-8">
      <Link
        href="/leads"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-500 hover:text-navy-900"
      >
        <ArrowLeft className="h-4 w-4" /> Retour aux leads
      </Link>

      <div className="mt-5 grid gap-6 lg:grid-cols-3">
        {/* Colonne principale */}
        <div className="lg:col-span-2 space-y-6">
          {/* En-tête */}
          <Card className="overflow-hidden">
            <div className="h-20 bg-mesh-navy" />
            <div className="px-6 pb-6">
              <div className="-mt-10 flex flex-wrap items-end justify-between gap-4">
                <div className="flex items-end gap-4">
                  <span
                    className="flex h-20 w-20 items-center justify-center rounded-2xl text-2xl font-bold text-white ring-4 ring-white"
                    style={{ backgroundColor: lead.avatarColor }}
                  >
                    {initials(lead.fullName)}
                  </span>
                  <div className="pb-1">
                    <h2 className="text-xl font-semibold text-navy-900">
                      {lead.fullName}
                    </h2>
                    <div className="mt-1 flex items-center gap-2 text-sm text-navy-400">
                      <span>{lead.id}</span>
                      <span>•</span>
                      <SourceIcon source={lead.source} withLabel />
                    </div>
                  </div>
                </div>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-white hover:bg-[#1fb757]"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>
          </Card>

          {/* Infos */}
          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
              Informations
            </h3>
            <div className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2">
              {info.map((it) => (
                <div key={it.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-500">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-xs text-navy-400">{it.label}</div>
                    <div className="text-sm font-medium text-navy-900">
                      {it.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Notes */}
          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
              Notes & historique
            </h3>

            <div className="mt-4 space-y-4">
              {notes.length === 0 && (
                <p className="text-sm text-navy-400">
                  Aucune note pour l&apos;instant. Ajoutez la première ci-dessous.
                </p>
              )}
              {notes.map((n) => (
                <div key={n.id} className="flex gap-3">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy-900 text-[11px] font-bold text-gold-400">
                    {initials(n.author)}
                  </span>
                  <div className="flex-1 rounded-xl rounded-tl-none bg-navy-50 px-4 py-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-navy-700">
                        {n.author}
                      </span>
                      <span className="text-xs text-navy-400">
                        {timeAgo(n.date)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-navy-700">{n.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-end gap-2">
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                rows={2}
                placeholder="Ajouter une note…"
                className="flex-1 resize-none rounded-xl border border-navy-100 bg-white px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-navy-400 focus:border-gold-300 focus:ring-2 focus:ring-gold-100"
              />
              <Button onClick={addNote} variant="primary" className="h-11">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Colonne latérale : statut */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
              Statut du dossier
            </h3>
            <div className="mt-3">
              <StatusBadge status={status} />
            </div>

            <div className="relative mt-4">
              <button
                onClick={() => setStatusOpen((v) => !v)}
                className="flex w-full items-center justify-between rounded-xl border border-navy-100 bg-white px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50"
              >
                Changer le statut
                <ChevronDown className="h-4 w-4 text-navy-400" />
              </button>
              {statusOpen && (
                <div className="absolute z-10 mt-2 w-full overflow-hidden rounded-xl border border-navy-100 bg-white shadow-[var(--shadow-card-lg)]">
                  {LEAD_STATUSES.map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setStatus(s);
                        setStatusOpen(false);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm text-navy-700 hover:bg-navy-50"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="mt-3 text-xs text-navy-400">
              Démo — le changement de statut est local (aucun backend connecté).
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-400">
              Résumé
            </h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-navy-500">Service</dt>
                <dd className="font-medium text-navy-900">{lead.service}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-navy-500">Destination</dt>
                <dd className="font-medium text-navy-900">{lead.destination}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-navy-500">Budget</dt>
                <dd className="font-medium text-navy-900">
                  {lead.budgetUsd.toLocaleString("fr-FR")} $
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-navy-500">Dernière activité</dt>
                <dd className="font-medium text-navy-900">
                  {timeAgo(lead.lastActivity)}
                </dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>
    </div>
  );
}
