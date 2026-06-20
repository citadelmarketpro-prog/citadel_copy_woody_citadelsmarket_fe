import Image from "next/image";
import { TrendingUp, Shuffle } from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const pros = [
  "Swing trading requires less time to trade than day trading.",
  "It maximises short-term profit potential by capturing the bulk of market swings in individual stocks.",
  "Swing traders can rely exclusively on technical analysis, simplifying the trading process.",
];

const cons = [
  "Swing trade positions are subject to overnight and weekend stock market risk.",
  "Abrupt market reversals can result in substantial losses on equity positions.",
  "Swing traders often miss longer-term trends in favour of short-term stock price moves.",
];

export default function SwingTradingPage() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Swing Trading</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Citadels Market has been sharing financial freedom with traders since 2014 — continuously
              improving the platform so traders can enjoy the freedom to trade whenever and wherever they like.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── What is Swing Trading ────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Swing Trading</h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                Swing trading is one of the most popular forms of active stock trading, where traders
                look for intermediate-term opportunities using various forms of technical analysis.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Swing trading is a style of trading that attempts to capture short- to medium-term gains
                in a stock over a period of a few days to several weeks. Swing traders primarily use
                technical analysis to identify trading opportunities in equity markets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Many swing traders assess stock trades on a risk/reward basis. By analysing the chart of
                a stock, they determine where they will enter, where they will place a stop-loss order,
                and then anticipate where they can exit with a profit. If they are risking $1 per share
                on a setup that could reasonably produce a $3 gain, that is a favourable risk/reward
                ratio. On the other hand, risking $1 only to make $0.75 is not quite as favourable.
              </p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-artem-podrez-5715853.jpg"
                alt="Swing trading"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Pros and Cons ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">Pros and Cons</h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pros */}
            <FadeLeft>
              <div className="rounded-2xl bg-white border border-emerald-100 p-8 h-full">
                <h3 className="text-lg font-bold text-emerald-700 mb-6 flex items-center gap-2">
                  <TrendingUp size={20} className="text-emerald-600" strokeWidth={2} />
                  Pros
                </h3>
                <ul className="space-y-4">
                  {pros.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                      <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
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

      {/* ── Swing Trading Tactics ────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Swing Trading Tactics
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  A swing trader tends to look for multiday stock chart patterns. Some of the more common
                  patterns involve moving average crossovers, cup and handle patterns, head and shoulders
                  patterns, flags, and triangles in equity price action. Key reversal candlesticks may be
                  used in addition to other technical indicators to devise a solid stock trading plan.
                </p>
                <p>
                  Ultimately, each swing trader devises a plan and strategy that gives them an edge across
                  many trades. This involves looking for trade setups in specific stocks that tend to lead
                  to predictable price movements. This is not easy, and no strategy or setup works every
                  time. With a favourable risk/reward, winning every trade is not required. The more
                  favourable the risk/reward of a trading strategy, the fewer times it needs to win to
                  produce an overall profit over many equity trades.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
