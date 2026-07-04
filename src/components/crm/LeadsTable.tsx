"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { leads as allLeads } from "@/data/leads";
import { LEAD_STATUSES, type LeadStatus } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";
import { SourceIcon } from "./SourceIcon";
import { cn, timeAgo } from "@/lib/utils";
import { Search, SlidersHorizontal, ChevronRight, MapPin } from "lucide-react";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export function LeadsTable() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<LeadStatus | "Tous">("Tous");

  const filtered = useMemo(() => {
    return allLeads.filter((l) => {
      const matchesQuery =
        query.trim() === "" ||
        l.fullName.toLowerCase().includes(query.toLowerCase()) ||
        l.phone.includes(query) ||
        l.id.toLowerCase().includes(query.toLowerCase()) ||
        l.destination.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = status === "Tous" || l.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status]);

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un nom, téléphone, ID…"
            className="h-11 w-full rounded-xl border border-navy-100 bg-white pl-9 pr-4 text-sm outline-none transition-colors placeholder:text-navy-400 focus:border-gold-300 focus:ring-2 focus:ring-gold-100"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <SlidersHorizontal className="h-4 w-4 flex-shrink-0 text-navy-400" />
          {(["Tous", ...LEAD_STATUSES] as const).map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                status === s
                  ? "bg-navy-900 text-white"
                  : "bg-white text-navy-600 ring-1 ring-navy-100 hover:bg-navy-50"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-navy-500">
        {filtered.length} lead{filtered.length > 1 ? "s" : ""} affiché
        {filtered.length > 1 ? "s" : ""}
      </p>

      {/* Table (desktop) */}
      <div className="mt-3 hidden overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-[var(--shadow-card)] md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-navy-100 bg-navy-50/50 text-xs uppercase tracking-wider text-navy-500">
              <th className="px-5 py-3.5 font-semibold">Candidat</th>
              <th className="px-5 py-3.5 font-semibold">Téléphone</th>
              <th className="px-5 py-3.5 font-semibold">Source</th>
              <th className="px-5 py-3.5 font-semibold">Destination</th>
              <th className="px-5 py-3.5 font-semibold">Statut</th>
              <th className="px-5 py-3.5 font-semibold">Activité</th>
              <th className="px-5 py-3.5" />
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-50">
            {filtered.map((l) => (
              <tr key={l.id} className="group transition-colors hover:bg-navy-50/40">
                <td className="px-5 py-3.5">
                  <Link href={`/leads/${l.id}`} className="flex items-center gap-3">
                    <span
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: l.avatarColor }}
                    >
                      {initials(l.fullName)}
                    </span>
                    <span>
                      <span className="block font-medium text-navy-900">
                        {l.fullName}
                      </span>
                      <span className="block text-xs text-navy-400">{l.id}</span>
                    </span>
                  </Link>
                </td>
                <td className="px-5 py-3.5 text-navy-600">{l.phone}</td>
                <td className="px-5 py-3.5">
                  <SourceIcon source={l.source} withLabel />
                </td>
                <td className="px-5 py-3.5">
                  <span className="inline-flex items-center gap-1 text-navy-600">
                    <MapPin className="h-3.5 w-3.5 text-navy-400" />
                    {l.destination}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  <StatusBadge status={l.status} />
                </td>
                <td className="px-5 py-3.5 text-xs text-navy-400">
                  {timeAgo(l.lastActivity)}
                </td>
                <td className="px-5 py-3.5">
                  <Link
                    href={`/leads/${l.id}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-navy-400 opacity-0 transition-all hover:bg-navy-100 hover:text-navy-900 group-hover:opacity-100"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-16 text-center text-sm text-navy-400">
            Aucun lead ne correspond à votre recherche.
          </div>
        )}
      </div>

      {/* Cards (mobile) */}
      <div className="mt-3 grid gap-3 md:hidden">
        {filtered.map((l) => (
          <Link
            key={l.id}
            href={`/leads/${l.id}`}
            className="rounded-2xl border border-navy-100 bg-white p-4 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: l.avatarColor }}
              >
                {initials(l.fullName)}
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-medium text-navy-900">{l.fullName}</div>
                <div className="text-xs text-navy-400">{l.phone}</div>
              </div>
              <StatusBadge status={l.status} />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-navy-500">
              <SourceIcon source={l.source} withLabel />
              <span>{l.destination}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
