import { leads } from "@/data/leads";
import { LEAD_STATUSES, LEAD_SOURCES, type LeadStatus, type LeadSource } from "@/lib/types";

export function getDashboardStats() {
  const total = leads.length;

  const byStatus = LEAD_STATUSES.map((status) => ({
    status,
    count: leads.filter((l) => l.status === status).length,
  }));

  const bySource = LEAD_SOURCES.map((source) => ({
    source,
    count: leads.filter((l) => l.source === source).length,
  })).filter((s) => s.count > 0);

  const won = leads.filter((l) => l.status === "Gagné").length;
  const active = leads.filter(
    (l) => !["Gagné", "Perdu"].includes(l.status)
  ).length;
  const conversionRate = total > 0 ? Math.round((won / total) * 100) : 0;

  const pipelineValue = leads
    .filter((l) => !["Perdu"].includes(l.status))
    .reduce((sum, l) => sum + l.budgetUsd, 0);

  const recent = [...leads]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  return {
    total,
    byStatus,
    bySource,
    won,
    active,
    conversionRate,
    pipelineValue,
    recent,
  };
}

export type StatusBreakdown = { status: LeadStatus; count: number };
export type SourceBreakdown = { source: LeadSource; count: number };
