import { Navbar } from "@/components/landing/Navbar";
import { HorizonHero } from "@/components/ui/horizon-hero-section";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Services } from "@/components/landing/Services";
import { FeatureTabs } from "@/components/landing/FeatureTabs";
import { Stats } from "@/components/landing/Stats";
import { Process } from "@/components/landing/Process";
import { Destinations } from "@/components/landing/Destinations";
import { CinematicBand } from "@/components/landing/CinematicBand";
import { Testimonials } from "@/components/landing/Testimonials";
import { Gallery } from "@/components/landing/Gallery";
import { LeadGen } from "@/components/landing/LeadGen";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsappFab } from "@/components/landing/WhatsappFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HorizonHero />
        <TrustStrip />
        <Services />
        <FeatureTabs />
        <Stats />
        <Process />
        <Destinations />
        <CinematicBand />
        <Testimonials />
        <Gallery />
        <LeadGen />
        <CTA />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
