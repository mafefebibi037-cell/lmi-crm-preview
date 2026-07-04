import { SOURCE_COLORS, type LeadSource } from "@/lib/types";
import { Globe, Users, Search } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  WhatsappIcon,
} from "@/components/ui/BrandIcons";

const icons: Record<LeadSource, React.ElementType> = {
  WhatsApp: WhatsappIcon,
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  TikTok: TiktokIcon,
  "Site web": Globe,
  Référence: Users,
  "Google Ads": Search,
};

export function SourceIcon({
  source,
  withLabel = false,
}: {
  source: LeadSource;
  withLabel?: boolean;
}) {
  const Icon = icons[source];
  const color = SOURCE_COLORS[source];
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${color}1a`, color }}
      >
        <Icon className="h-4 w-4" />
      </span>
      {withLabel && (
        <span className="text-sm text-navy-700">{source}</span>
      )}
    </span>
  );
}
