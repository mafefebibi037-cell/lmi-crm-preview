"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Settings,
  MessageSquare,
  BarChart3,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

const nav = [
  { label: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard },
  { label: "Leads", href: "/leads", icon: Users },
  { label: "Ajouter un lead", href: "/leads/new", icon: UserPlus },
];

const soon = [
  { label: "Messagerie", icon: MessageSquare },
  { label: "Analytics", icon: BarChart3 },
  { label: "Paramètres", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-40 rounded-lg border border-navy-100 bg-white p-2 text-navy-900 shadow-sm lg:hidden"
        aria-label="Ouvrir le menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-navy-100 bg-white transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-navy-100 px-5 py-4">
          <Link href="/">
            <Logo />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-navy-500 lg:hidden"
            aria-label="Fermer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-5">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-navy-400">
            Menu
          </p>
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href === "/leads" && pathname.startsWith("/leads") && pathname !== "/leads/new");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-navy-900 text-white shadow-sm"
                    : "text-navy-600 hover:bg-navy-50"
                )}
              >
                <item.icon className="h-[18px] w-[18px]" />
                {item.label}
              </Link>
            );
          })}

          <p className="px-3 pb-2 pt-6 text-[11px] font-semibold uppercase tracking-wider text-navy-400">
            Bientôt disponible
          </p>
          {soon.map((item) => (
            <div
              key={item.label}
              className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-300"
            >
              <item.icon className="h-[18px] w-[18px]" />
              {item.label}
              <span className="ml-auto rounded-full bg-navy-50 px-2 py-0.5 text-[10px] text-navy-400">
                Soon
              </span>
            </div>
          ))}
        </nav>

        <div className="border-t border-navy-100 p-3">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-navy-600 hover:bg-navy-50"
          >
            <ExternalLink className="h-[18px] w-[18px]" />
            Voir le site public
          </Link>
        </div>
      </aside>
    </>
  );
}
