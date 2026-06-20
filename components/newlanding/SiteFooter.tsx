"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, ZoomIn } from "./motion";
import LiquidityProvidersSection from "@/components/site/LiquidityProvidersSection";

// ── Our Values ──────────────────────────────────────────────────────────────

const values = [
  {
    head: "Transparency",
    body: "We believe in open and honest communication. All trading performance, strategies, and fees are clearly disclosed so users can make informed decisions with full confidence.",
  },
  {
    head: "Trust & Security",
    body: "Our platform is built with robust security measures and a commitment to safeguarding our users' funds and data. We prioritize ethical practices to build long-term trust with every trader.",
  },
  {
    head: "Empowerment",
    body: "We simplify investing by making professional trading accessible to everyone. Through intuitive tools and expert-curated strategies, we help users grow their portfolios with ease and confidence.",
  },
];

// ── Achievements ─────────────────────────────────────────────────────────────

const awards = [
  "/sample-landing/best-partners-program-global-2024-min.svg",
  "/sample-landing/top-trusted-financial-institution-2024-min.svg",
  "/sample-landing/most-trusted-forex-broker-global-2024-min.svg",
  "/sample-landing/best-fx-broker-global-2024-min.svg",
  "/sample-landing/best-customer-support-global-2024-min.svg",
  "/sample-landing/best-partners-program-global-2024-min.svg",
  "/sample-landing/most-transparent-broker-asia-2024-min.svg",
];

// ── Footer nav ────────────────────────────────────────────────────────────────

const footerCols = [
  {
    head: "Trades",
    links: [
      { label: "Swing Trading", href: "/swing-trading" },
      { label: "FX & Futures", href: "/futures" },
      { label: "Buy Options", href: "/option-trading" },
      { label: "Oil & Gas", href: "/oil-and-gas" },
    ],
  },
  {
    head: "Tools",
    links: [
      { label: "Option Copy Trading", href: "/option-trading" },
      { label: "FX & Advance Trading", href: "/advance-trading" },
      { label: "Buy Live Trading", href: "/trading-live" },
      { label: "Copy Trading", href: "/option-copy-trading" },
    ],
  },
  {
    head: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Insurance", href: "/insurance" },
      { label: "Demo Account", href: "/register" },
    ],
  },
  {
    head: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "System Status", href: "/system-status" },
      { label: "Latest market news", href: "/trade-news" },
      { label: "Refer a Friend", href: "/refer-a-friend" },
    ],
  },
  {
    head: "Legals",
    links: [
      { label: "Terms & Conditions", href: "/terms-and-condition" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "AML Policy", href: "/aml-policy" },
      { label: "Regulations (SEC)", href: "/regulations" },
    ],
  },
];

// ── Combined component ────────────────────────────────────────────────────────

export default function SiteFooter() {
  return (
    <>
      {/* Our Values */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <ZoomIn key={v.head} delay={0.1 * i}>
                <div
                  className="rounded-xl p-6 min-h-44"
                  style={{
                    backgroundImage: "url('/sample-landing/chat-bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{v.head}</h3>
                  <p className="text-gray-800 text-sm leading-relaxed m-0">{v.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Everywhere banner */}
      <section>
        <ZoomIn>
          <Image
            src="/sample-landing/trade_everywhere.webp"
            alt="Trade Anywhere"
            width={1920}
            height={600}
            className="w-full h-auto"
          />
        </ZoomIn>
      </section>

      {/* Achievements */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-4xl font-bold text-gray-900 mb-10">Achievements</h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
            {awards.map((src, i) => (
              <ZoomIn key={i} delay={0.06 * i} className="flex justify-center">
                <Image
                  src={src}
                  alt="Award"
                  width={130}
                  height={110}
                  className="h-20 w-auto object-contain opacity-60"
                />
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      <LiquidityProvidersSection />

      {/* CTA */}
      <section
        className="py-28 sm:py-36"
        style={{
          backgroundImage: "url('/sample-landing/66585fe0e1dc7e70cc75d804_cta-10.webp')",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10">
          <FadeUp>
            <div className="bg-[#181c25] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                  Trade with a trusted broker
                </h2>
                <p className="text-white text-base">
                  Use our demo account and learn how to trade by using risk-free virtual funds.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-emerald-600 text-white font-extrabold rounded-full text-base hover:bg-emerald-500 transition-colors no-underline w-full sm:w-auto"
                >
                  Try free demo
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-full text-base hover:bg-emerald-500 transition-colors no-underline w-full sm:w-auto"
                >
                  Trader&apos;s Hub
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-gray-400 text-xs"
        style={{
          background: "linear-gradient(229deg,rgb(75,75,75) 1.87%,rgb(10,10,10) 95.11%)",
        }}
      >
        <FadeUp>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex flex-col lg:flex-row gap-10 justify-between">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/images/logo_light.png"
                    alt="Citadels Market"
                    width={200}
                    height={72}
                    className="h-24 w-auto object-contain"
                  />
                </Link>
              </div>

              <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 flex-1 max-w-4xl">
                {footerCols.map((col) => (
                  <div key={col.head}>
                    <h3 className="text-white text-base font-semibold mb-3">{col.head}</h3>
                    <ul className="space-y-3 list-none p-0 m-0">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link
                            href={l.href}
                            className="text-gray-400 hover:text-white transition-colors text-xs no-underline"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>

            <div className="mt-8 border border-[#383838] rounded-xl p-5">
              <div className="space-y-4 text-gray-400 text-xs leading-relaxed">
                <p>
                  <strong>Risk Warning:</strong> CFDs are complex instruments and come with a high risk of losing money
                  rapidly due to leverage. You should consider copying a Lead Trader we provide that understand how CFDs
                  work without the risk of losing your money. Trading derivatives is risky. It isn&apos;t suitable for
                  everyone but only suitable for Lead Traders; you could lose substantially more than your initial
                  investment if you don&apos;t copy trades from Lead Traders.
                </p>
                <p>
                  <strong>Citadels Market</strong> is a global financial services provider. Citadels Market is a
                  registered trademark of the group, that operates among various entities.
                </p>
                <p>
                  Citadels Market Limited is registered in Canada, registration number: 2023-00465. Registered
                  address: Lower Mount Royal, AB T2T 5H7, Canada.
                </p>
                <p>
                  Citadels Market Limited is registered in the United Kingdom, Company number 1054675. Registered
                  address: 100 Pall Mall, St. James&apos;s London SW1Y 5NQ, United Kingdom.
                </p>
                <p>
                  Citadels Market is a Global financial service provider. Citadels Market is a registered
                  trademark of the Citadel Group. All trading involves risk. Past performance is not indicative of
                  future results. The content of this website must not be construed as personal advice.
                </p>
                <p>
                  © 2025 This website and technology/platform services are owned and operated by Citadels Market
                  Limited, with Registered address: 11264 Playa Court Culver City, California. SEC: (000-56441).
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </footer>
    </>
  );
}
