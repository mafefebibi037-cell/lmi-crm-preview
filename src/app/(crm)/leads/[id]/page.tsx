import { notFound } from "next/navigation";
import { getLeadById, leads } from "@/data/leads";
import { Topbar } from "@/components/crm/Topbar";
import { LeadDetail } from "@/components/crm/LeadDetail";

// Pré-génère les pages pour chaque lead mock.
export function generateStaticParams() {
  return leads.map((l) => ({ id: l.id }));
}

export default async function LeadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = getLeadById(id);
  if (!lead) notFound();

  return (
    <>
      <Topbar title="Détail du lead" subtitle={lead.fullName} />
      <LeadDetail lead={lead} />
    </>
  );
}
