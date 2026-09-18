import Navbar from "@/components/newlanding/Navbar";
import HeroSection from "@/components/newlanding/HeroSection";
import StatsSection from "@/components/newlanding/StatsSection";
import DerivedIndicesSection from "@/components/newlanding/DerivedIndicesSection";
import StocksSection from "@/components/newlanding/StocksSection";
import CommoditiesSection from "@/components/newlanding/CommoditiesSection";
import CryptoSection from "@/components/newlanding/CryptoSection";
import TradeAllDayNightSection from "@/components/newlanding/TradeAllDayNightSection";
import TradingFingertipsSection from "@/components/newlanding/TradingFingertipsSection";
import Mt5Section from "@/components/newlanding/Mt5Section";
import MirrorTradingSection from "@/components/newlanding/MirrorTradingSection";
import PayoutsSection from "@/components/newlanding/PayoutsSection";
import AutomateSection from "@/components/newlanding/AutomateSection";
import PayLessSection from "@/components/newlanding/PayLessSection";
import SupportCtaSection from "@/components/newlanding/SupportCtaSection";
import TestimonialsSection from "@/components/newlanding/TestimonialsSection";
import GettingStartedSection from "@/components/newlanding/GettingStartedSection";
import BecomeProSection from "@/components/newlanding/BecomeProSection";
import SiteFooter from "@/components/newlanding/SiteFooter";

export default function SampleLandingPage() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <DerivedIndicesSection />
      <StocksSection />
      <CommoditiesSection />
      <CryptoSection />
      <TradeAllDayNightSection />
      <TradingFingertipsSection />
      <Mt5Section />
      <MirrorTradingSection />
      <PayoutsSection />
      <AutomateSection />
      <PayLessSection />
      <SupportCtaSection />
      <TestimonialsSection />
      <GettingStartedSection />
      <BecomeProSection />
      <SiteFooter />
    </div>
  );
}
