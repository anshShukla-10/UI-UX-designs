import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoMarquee from "@/components/LogoMarquee";
import BentoGrid from "@/components/BentoGrid";
import CoreFeatures from "@/components/CoreFeatures";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import FAQAccordion from "@/components/FAQAccordion";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoMarquee />
      <BentoGrid />
      <CoreFeatures />
      <Testimonials />
      <PricingSection />
      <FAQAccordion />
      <FooterCTA />
    </main>
  );
}
