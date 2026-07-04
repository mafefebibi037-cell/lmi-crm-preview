import { site } from "@/data/site";
import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  const wa = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
    "Bonjour, je souhaite des informations sur vos services."
  )}`;
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[140px] group-hover:pr-1">
        Discutons !
      </span>
    </a>
  );
}
