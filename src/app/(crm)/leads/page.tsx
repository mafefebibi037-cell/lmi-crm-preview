import { Topbar } from "@/components/crm/Topbar";
import { LeadsTable } from "@/components/crm/LeadsTable";
import { ButtonLink } from "@/components/ui/Button";
import { UserPlus } from "lucide-react";

export default function LeadsPage() {
  return (
    <>
      <Topbar title="Leads" subtitle="Gérez tous vos candidats et prospects" />
      <div className="p-5 lg:p-8">
        <div className="mb-6 flex items-center justify-end">
          <ButtonLink href="/leads/new" variant="gold" size="sm">
            <UserPlus className="h-4 w-4" />
            Ajouter un lead
          </ButtonLink>
        </div>
        <LeadsTable />
      </div>
    </>
  );
}
