import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { Services } from "@/components/landing/Services";
import { FeatureTabs } from "@/components/landing/FeatureTabs";
import { Stats } from "@/components/landing/Stats";
import { Process } from "@/components/landing/Process";
import { Destinations } from "@/components/landing/Destinations";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import { WhatsappFab } from "@/components/landing/WhatsappFab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <FeatureTabs />
        <Stats />
        <Process />
        <Destinations />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
