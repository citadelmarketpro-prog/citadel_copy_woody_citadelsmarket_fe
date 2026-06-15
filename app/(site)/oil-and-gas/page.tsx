import Image from "next/image";
import {
  TrendingUp,
  Shuffle,
  Flame,
  BarChart2,
} from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const pros = [
  {
    head: "Inflation & Interest Rate Hedge",
    body: "Historically, rising inflation has been correlated with higher energy prices, offering investors a potential portfolio hedge by investing in oil and gas stocks. According to research on WTI crude futures, prices have risen by an average of 16% in the six months following a rate-tightening cycle — making energy sector equities a useful counterbalance in diversified stock portfolios.",
  },
  {
    head: "Tax Advantages",
    body: "Investing in oil and gas stocks provides investors with a range of unique tax benefits. Some key advantages include the favourable treatment of active and passive income and the deduction of certain drilling and lease costs relevant to companies in the sector. This can enable investors to offset production revenue losses against other forms of income, such as capital gains.",
  },
];

const cons = [
  "Positions in energy sector stocks are subject to overnight and weekend market risk.",
  "Abrupt commodity price reversals can result in substantial losses on energy equity positions.",
  "Investors in individual oil and gas stocks often miss longer-term secular trends in favour of short-term price moves.",
];

export default function OilAndGasPage() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Oil and Gas</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Natural gas is one of the more popular energy fuels in the world right now — and the
              publicly listed companies that produce and distribute it represent a compelling sector
              for stock investors seeking exposure to energy markets.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Oil and Gas Trading ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Oil and Gas Stocks</h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                Data from the Energy Information Administration (EIA) shows that natural gas was the
                second most widely used fuel in the U.S., accounting for 32% of energy consumption.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                While petroleum was still the largest energy source overall, it was used mostly for
                transportation. Natural gas was the dominant fuel of choice in residential, industrial,
                and commercial use cases. Within the electricity sector, natural gas led the pack,
                accounting for 32% of total usage and 36% of U.S. primary energy production overall.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The top-performing oil and gas stocks in recent years include names such as TORM PLC,
                Teekay Tankers, and Scorpio Tankers. Despite oil prices dropping significantly from
                their peaks, these companies saw their shares rise by well over 100%, handily beating
                the broader Russell 1000 Index.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Oil and gas stocks as a group — measured by the benchmark Energy Select Sector SPDR
                ETF (XLE) — have climbed significantly over recent periods, outperforming the broader
                market. However, declining energy prices can pressure margins and revenues across the
                sector, making stock selection and timing important considerations for investors.
              </p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-johannes-havn-1716008.jpg"
                alt="Oil and gas industry"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Advantages of Oil and Gas Stocks ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              Advantages of Oil and Gas Stocks
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pros */}
            <FadeLeft>
              <div className="rounded-2xl bg-white border border-emerald-100 p-8 h-full">
                <h3 className="text-lg font-bold text-emerald-700 mb-6 flex items-center gap-2">
                  <TrendingUp size={20} className="text-emerald-600" strokeWidth={2} />
                  Pros
                </h3>
                <div className="space-y-6">
                  {pros.map((item) => (
                    <div key={item.head}>
                      <p className="font-semibold text-gray-900 mb-1">{item.head}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeLeft>

            {/* Cons */}
            <FadeRight delay={0.1}>
              <div className="rounded-2xl bg-white border border-orange-100 p-8 h-full">
                <h3 className="text-lg font-bold text-orange-600 mb-6 flex items-center gap-2">
                  <Shuffle size={20} className="text-orange-500" strokeWidth={2} />
                  Cons
                </h3>
                <ul className="space-y-4">
                  {cons.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Sector Outlook ───────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1 max-w-3xl">
              <FadeUp>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                  Sector Outlook &amp; Investment Tactics
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    The global natural gas market was estimated to be worth $955 billion in 2022 and
                    has been growing at a compounded annual growth rate of over 7%. This ongoing
                    expansion reflects rising global energy demand, particularly in emerging markets
                    transitioning away from coal-based power generation.
                  </p>
                  <p>
                    For stock investors, this creates long-term opportunities in publicly listed energy
                    producers, pipeline operators, and liquefied natural gas (LNG) exporters. Companies
                    such as Coterra Energy (NYSE: CTRA) and others in the sector have benefited from both
                    volume growth and price tailwinds — though sector-specific volatility means position
                    sizing and diversification remain essential.
                  </p>
                  <p>
                    At Citadel Pros Market, energy sector stocks form part of a broader universe of
                    publicly listed equities available through our platform. Whether you are looking to
                    add oil and gas exposure to a diversified portfolio or to copy experienced traders
                    who specialise in the energy sector, our platform provides the tools to do so
                    in a transparent, regulated environment.
                  </p>
                </div>
              </FadeUp>
            </div>

            <FadeRight delay={0.12} className="flex-1 lg:max-w-sm">
              <div className="grid grid-cols-1 gap-5">
                {[
                  {
                    Icon: Flame,
                    head: "Energy Sector ETFs",
                    body: "ETFs such as the Energy Select Sector SPDR (XLE) offer broad exposure to U.S. oil and gas stocks, spreading risk across multiple energy producers.",
                  },
                  {
                    Icon: BarChart2,
                    head: "Individual Stock Picks",
                    body: "Top-performing names like tanker operators and integrated energy producers have delivered outsized returns in periods of supply tightening, rewarding selective stock investors.",
                  },
                ].map((card) => (
                  <ZoomIn key={card.head}>
                    <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <card.Icon size={20} className="text-emerald-600" strokeWidth={1.75} />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm">{card.head}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
                    </div>
                  </ZoomIn>
                ))}
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
