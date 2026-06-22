import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import {
  FadeLeft,
  FadeRight,
  FadeUp,
} from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const platforms = [
  {
    name: "Tastytrade",
    description:
      "Tastytrade gives you every edge possible with the technology, rates, and support that help you succeed more easily on your own. We're as serious about your money as you are, and we work for you — those brave enough to take your finances into your own hands.",
    logo: "/sample-landing/tastytrade-logo.svg",
    logoBg: true,
  },
  {
    name: "Tradier",
    description:
      "Tradier provides all the tools to help make investing easy. Our open collaboration platform allows investors to truly customise their trading experience with powerful, flexible tools built for both active traders and long-term investors.",
    logo: "/sample-landing/tradier-logo.svg",
    logoBg: true,
  },
  {
    name: "Interactive Brokers",
    description:
      "Interactive Brokers is for sophisticated investors and active traders. It accesses IB SmartRouting℠, which helps support best execution by searching for the best available prices for stocks, options, and combinations across exchanges and dark pools.",
    logo: "/sample-landing/ib-logo-text-black.svg",
    logoBg: true,
  },
  {
    name: "Magnifi",
    description:
      "Magnifi simplifies investing and democratises investing intelligence — bringing professional-grade portfolio analysis and AI-powered investment search tools to individual investors who want smarter access to the stock market.",
    logo: "/sample-landing/magnifi-logo.svg",
    logoBg: true,
  },
  {
    name: "Olive Invest",
    description:
      "Olive Invest helps you improve portfolio performance by reducing volatility with options strategies that the pros have historically kept to themselves. A modern platform designed to make sophisticated hedging and income strategies accessible to all investors.",
    logo: "/sample-landing/olive-invest-logo.svg",
    logoBg: true,
  },
  {
    name: "EOption",
    description:
      "EOption was created with a clear purpose in mind: low-cost trades combined with fast, efficient execution. Today, ultra-low commission rates combined with the eOption Trader platform have elevated the original mission to an entirely new level for active equity and options traders.",
    logo: "/sample-landing/eoption-logo.png",
    logoBg: true,
  },
];

export default async function SoftwarePage() {
  const t = await getTranslations("softwarePage");
  return (
    <div className="font-sans bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-72 sm:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/sample-landing/hero-bg.png')",
            backgroundPosition: "right center",
            backgroundSize: "500px",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        />
        <div className="absolute inset-0" style={{ background: darkGradient }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <FadeUp>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{t("heroTitle")}</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              {t("heroSub")}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Platform List ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {t("s2Head")}
            </h2>
            <p className="text-gray-500 text-base mb-12 max-w-2xl">
              {t("s2Sub")}
            </p>
          </FadeUp>

          <div className="flex flex-col divide-y divide-gray-100">
            {platforms.map((platform, i) => (
              <div key={platform.name}>
                {i % 2 === 0 ? (
                  <FadeLeft>
                    <div className="flex flex-col lg:flex-row gap-8 items-center py-12">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{platform.description}</p>
                      </div>
                      <div className="w-full lg:w-72 flex-shrink-0 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-8 min-h-[140px]">
                        <Image
                          src={platform.logo}
                          alt={`${platform.name} logo`}
                          width={200}
                          height={80}
                          className="max-h-16 w-auto object-contain"
                        />
                      </div>
                    </div>
                  </FadeLeft>
                ) : (
                  <FadeRight>
                    <div className="flex flex-col lg:flex-row-reverse gap-8 items-center py-12">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{platform.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{platform.description}</p>
                      </div>
                      <div className="w-full lg:w-72 flex-shrink-0 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center p-8 min-h-[140px]">
                        <Image
                          src={platform.logo}
                          alt={`${platform.name} logo`}
                          width={200}
                          height={80}
                          className="max-h-16 w-auto object-contain"
                        />
                      </div>
                    </div>
                  </FadeRight>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
