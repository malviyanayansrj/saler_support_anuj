import HeroSection from "@/components/sections/HeroSection";
import MarketplacesStrip from "@/components/sections/MarketplacesStrip";
import StatsStrip from "@/components/sections/StatsStrip";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaBannerSection from "@/components/sections/CtaBannerSection";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-16">
      <HeroSection />
      <MarketplacesStrip />
      <StatsStrip />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBannerSection />
    </div>
  );
}
