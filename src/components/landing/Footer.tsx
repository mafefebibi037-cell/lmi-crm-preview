import Link from "next/link";
import { Container } from "@/components/ui/Card";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/data/site";
import { FacebookIcon, InstagramIcon } from "@/components/ui/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-500">
              {site.slogan} {site.subSlogan} Votre partenaire de confiance pour
              les études à l&apos;étranger, l&apos;immigration et la préparation
              IELTS.
            </p>
            <div className="mt-5 flex gap-3">
              {[FacebookIcon, InstagramIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-100 text-navy-600 transition-colors hover:border-gold-300 hover:bg-gold-50 hover:text-gold-700"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-900">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-500">
              <li><a href="#services" className="hover:text-navy-900">Études à l&apos;étranger</a></li>
              <li><a href="#services" className="hover:text-navy-900">Visa & Immigration</a></li>
              <li><a href="#services" className="hover:text-navy-900">Préparation IELTS</a></li>
              <li><a href="#services" className="hover:text-navy-900">Recrutement étudiant</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-navy-900">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-500">
              {site.contact.phones.map((p) => (
                <li key={p}>{p}</li>
              ))}
              <li className="pt-1">{site.contact.offices.join(" • ")}</li>
              <li>
                <Link href="/dashboard" className="font-medium text-gold-700 hover:text-gold-800">
                  Accès Espace CRM →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-navy-100 pt-6 text-xs text-navy-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name} {site.region}. Tous droits réservés.</p>
          <p>Démo — Preview client. Construit avec Next.js & Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
