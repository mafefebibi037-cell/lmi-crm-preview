import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function StatCard({
  label,
  value,
  icon: Icon,
  trend,
  accent = "navy",
}: {
  label: string;
  value: string;
  icon: React.ElementType;
  trend?: string;
  accent?: "navy" | "gold" | "emerald" | "sky";
}) {
  const accents = {
    navy: "bg-navy-900 text-gold-400",
    gold: "bg-gold-400 text-navy-950",
    emerald: "bg-emerald-500 text-white",
    sky: "bg-sky-500 text-white",
  };
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between">
        <span
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl",
            accents[accent]
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        {trend && (
          <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
            <ArrowUpRight className="h-3 w-3" />
            {trend}
          </span>
        )}
      </div>
      <div className="mt-4 text-2xl font-bold text-navy-900">{value}</div>
      <div className="mt-1 text-sm text-navy-500">{label}</div>
    </Card>
  );
}
