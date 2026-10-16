import Navbar from "@/components/newlanding/Navbar";
import HeroSection from "@/components/newlanding/HeroSection";
import HowItWorksSection from "@/components/newlanding/HowItWorksSection";
import YouShouldKnowSection from "@/components/newlanding/YouShouldKnowSection";
import BestTradersSection, { type Trader } from "@/components/newlanding/BestTradersSection";
import WhyChooseSection from "@/components/newlanding/WhyChooseSection";
import WhatYouCanCopySection from "@/components/newlanding/WhatYouCanCopySection";
import NewFAQSection from "@/components/newlanding/NewFAQSection";
import ReadyToInvestSection from "@/components/newlanding/ReadyToInvestSection";
import FundsTrustSection from "@/components/newlanding/FundsTrustSection";
import NewSiteFooter from "@/components/newlanding/NewSiteFooter";

const API_BASE = (process.env.NEXT_PUBLIC_APP_BACKEND_URL ?? "http://127.0.0.1:8000/api").replace(/\/$/, "");

async function getTopTraders(): Promise<Trader[]> {
  try {
    const res = await fetch(`${API_BASE}/traders/`, { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const data: Trader[] = await res.json();
    return data
      .filter((t) => t.is_active)
      .sort((a, b) => Number(b.gain) - Number(a.gain))
      .slice(0, 9);
  } catch {
    return [];
  }
}

export default async function SampleLandingPage() {
  const traders = await getTopTraders();

  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <YouShouldKnowSection />
      <BestTradersSection traders={traders} />
      <WhyChooseSection />
      <WhatYouCanCopySection />
      <NewFAQSection />
      <ReadyToInvestSection />
      <FundsTrustSection />
      <NewSiteFooter />
    </div>
  );
}
