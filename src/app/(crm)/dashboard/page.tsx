import Link from "next/link";
import { Topbar } from "@/components/crm/Topbar";
import { Card } from "@/components/ui/Card";
import { StatCard } from "@/components/crm/StatCard";
import { StatusBadge } from "@/components/crm/StatusBadge";
import { SourceIcon } from "@/components/crm/SourceIcon";
import { getDashboardStats } from "@/lib/analytics";
import { timeAgo, cn } from "@/lib/utils";
import {
  Users,
  TrendingUp,
  Trophy,
  Wallet,
  ArrowRight,
} from "lucide-react";

const barColors: Record<string, string> = {
  Nouveau: "bg-navy-400",
  Contacté: "bg-sky-400",
  Qualifié: "bg-gold-400",
  "Dossier en cours": "bg-amber-400",
  Gagné: "bg-emerald-500",
  Perdu: "bg-rose-400",
};

export default function DashboardPage() {
  const s = getDashboardStats();
  const maxStatus = Math.max(...s.byStatus.map((b) => b.count), 1);
  const maxSource = Math.max(...s.bySource.map((b) => b.count), 1);

  return (
    <>
      <Topbar
        title="Tableau de bord"
        subtitle="Vue d'ensemble de votre activité"
      />
      <div className="space-y-6 p-5 lg:p-8">
        {/* KPI cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Total leads"
            value={String(s.total)}
            icon={Users}
            accent="navy"
            trend="+12%"
          />
          <StatCard
            label="Dossiers actifs"
            value={String(s.active)}
            icon={TrendingUp}
            accent="sky"
          />
          <StatCard
            label="Taux de conversion"
            value={`${s.conversionRate}%`}
            icon={Trophy}
            accent="emerald"
            trend="+4%"
          />
          <StatCard
            label="Valeur pipeline"
            value={`${(s.pipelineValue / 1000).toFixed(0)}k $`}
            icon={Wallet}
            accent="gold"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Répartition par statut */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-navy-900">
                Répartition par statut
              </h3>
              <Link
                href="/leads"
                className="inline-flex items-center gap-1 text-sm font-medium text-gold-700 hover:text-gold-800"
              >
                Voir tout <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-6 space-y-4">
              {s.byStatus.map((b) => (
                <div key={b.status} className="flex items-center gap-3">
                  <div className="w-32 flex-shrink-0">
                    <StatusBadge status={b.status} />
                  </div>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-navy-50">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        barColors[b.status]
                      )}
                      style={{ width: `${(b.count / maxStatus) * 100}%` }}
                    />
                  </div>
                  <span className="w-6 text-right text-sm font-semibold text-navy-900">
                    {b.count}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Sources */}
          <Card className="p-6">
            <h3 className="font-semibold text-navy-900">Sources d&apos;acquisition</h3>
            <div className="mt-6 space-y-4">
              {s.bySource
                .sort((a, b) => b.count - a.count)
                .map((b) => (
                  <div key={b.source} className="flex items-center gap-3">
                    <SourceIcon source={b.source} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-navy-700">{b.source}</span>
                        <span className="font-semibold text-navy-900">
                          {b.count}
                        </span>
                      </div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-navy-50">
                        <div
                          className="h-full rounded-full bg-navy-900"
                          style={{ width: `${(b.count / maxSource) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </div>

        {/* Leads récents */}
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <h3 className="font-semibold text-navy-900">Leads récents</h3>
            <Link
              href="/leads"
              className="inline-flex items-center gap-1 text-sm font-medium text-gold-700 hover:text-gold-800"
            >
              Tous les leads <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="divide-y divide-navy-50 border-t border-navy-100">
            {s.recent.map((l) => (
              <Link
                key={l.id}
                href={`/leads/${l.id}`}
                className="flex items-center gap-4 px-6 py-3.5 transition-colors hover:bg-navy-50/40"
              >
                <span
                  className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: l.avatarColor }}
                >
                  {l.fullName.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-navy-900">{l.fullName}</div>
                  <div className="text-xs text-navy-400">
                    {l.service} • {l.destination}
                  </div>
                </div>
                <div className="hidden sm:block">
                  <SourceIcon source={l.source} withLabel />
                </div>
                <StatusBadge status={l.status} />
                <span className="hidden w-20 text-right text-xs text-navy-400 sm:block">
                  {timeAgo(l.createdAt)}
                </span>
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
