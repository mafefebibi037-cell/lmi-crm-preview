"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { Menu, X, LayoutDashboard } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Comment ça marche", href: "#process" },
  { label: "Destinations", href: "#destinations" },
  { label: "Avis", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-navy-100/70 bg-ivory/85 backdrop-blur-lg py-2.5"
          : "py-4"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" aria-label="Accueil">
          <Logo variant={scrolled ? "dark" : "light"} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled
                  ? "text-navy-600 hover:text-navy-900"
                  : "text-white/80 hover:text-white"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href="/dashboard"
            variant="ghost"
            size="sm"
            className={cn(
              !scrolled && "text-white/90 hover:bg-white/10 hover:text-white"
            )}
          >
            <LayoutDashboard className="h-4 w-4" />
            Espace CRM
          </ButtonLink>
          <ButtonLink href="#contact" variant="gold" size="sm">
            Prendre rendez-vous
          </ButtonLink>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "lg:hidden rounded-lg p-2",
            scrolled ? "text-navy-900" : "text-white"
          )}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden">
          <Container className="mt-3">
            <div className="rounded-2xl border border-navy-100 bg-white p-4 shadow-[var(--shadow-card-lg)]">
              <nav className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="mt-3 grid gap-2">
                  <ButtonLink href="/dashboard" variant="outline" size="sm">
                    <LayoutDashboard className="h-4 w-4" /> Espace CRM
                  </ButtonLink>
                  <ButtonLink href="#contact" variant="gold" size="sm">
                    Prendre rendez-vous
                  </ButtonLink>
                </div>
              </nav>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
