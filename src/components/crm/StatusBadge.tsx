import { Badge } from "@/components/ui/Badge";
import { STATUS_STYLES, type LeadStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

export function StatusBadge({ status }: { status: LeadStatus }) {
  return (
    <Badge className={cn(STATUS_STYLES[status])}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {status}
    </Badge>
  );
}
