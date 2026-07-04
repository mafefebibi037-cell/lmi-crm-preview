import { Topbar } from "@/components/crm/Topbar";
import { AddLeadForm } from "@/components/crm/AddLeadForm";

export default function NewLeadPage() {
  return (
    <>
      <Topbar title="Ajouter un lead" subtitle="Créer un nouveau candidat" />
      <AddLeadForm />
    </>
  );
}
