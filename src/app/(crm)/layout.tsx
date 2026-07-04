import { Sidebar } from "@/components/crm/Sidebar";

export default function CrmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ivory">
      <Sidebar />
      <div className="lg:pl-64">{children}</div>
    </div>
  );
}
