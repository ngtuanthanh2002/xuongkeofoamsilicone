import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { PromoProvider } from "@/components/PromoProvider";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import PromotionSection from "@/components/sections/PromotionSection";
import VideoSection from "@/components/sections/VideoSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import UsageSection from "@/components/sections/UsageSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <PromoProvider>
      <Header />
      <main className="flex-1 pt-16 lg:pt-[4.5rem]">
        <HeroSection />
        <TrustStrip />
        <SolutionsSection />
        <AboutSection />
        <div className="section-divider max-w-4xl mx-auto" />
        <ProductsSection />
        <PromotionSection />
        <VideoSection />
        <FeaturesSection />
        <UsageSection />
        <WhyUsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileBar />
    </PromoProvider>
  );
}
