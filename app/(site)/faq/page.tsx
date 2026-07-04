import type { Metadata } from "next";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import FAQMajor from "@/components/site/FAQMajor";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | Citadels Market",
  description:
    "Find answers to common questions about digital options trading, deposits, withdrawals, account verification, and more on Citadels Market.",
};

export default function FAQPage() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <div className="pt-2">
        <FAQMajor showHeader={true} />
      </div>
      <SiteFooter />
    </div>
  );
}
