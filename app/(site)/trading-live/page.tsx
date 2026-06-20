import Image from "next/image";
import {
  Crosshair,
  Activity,
  ScanSearch,
  Zap,
  Shield,
  CircleStop,
} from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const whyItems = [
  {
    Icon: Crosshair,
    head: "Trading Strategy",
    body: "Traders focus intently on building their own personal stock trading strategies with focused criteria for entering and exiting trades, risk management, and profit targets. Strategy is essential to help maintain discipline and consistent decision-making.",
  },
  {
    Icon: Activity,
    head: "Market Monitoring",
    body: "Traders actively monitor the stock market, watching price movements, trading volumes, market news, and a host of other factors that could impact their target securities. They depend on real-time data to track the market.",
  },
  {
    Icon: ScanSearch,
    head: "Evaluate Opportunities",
    body: "With constant market monitoring and a solid strategy comes the ability to evaluate opportunities that align with set criteria — identifying technical factors like support and resistance levels, chart patterns, and trend reversals that suggest future price movements in stocks.",
  },
  {
    Icon: Zap,
    head: "Trading Execution",
    body: "Once an opportunity arises, traders need to decisively enter stock trades to capitalise on short-term price movements. They use different order types — like market orders and limit orders — to get the right prices.",
  },
  {
    Icon: Shield,
    head: "Risk Management",
    body: "Stock trading carries inherent risk, making risk management an essential skill. This includes setting stop-loss orders that automatically exit a trade if the price moves against them beyond a certain threshold, limiting potential losses, and using position sizing to determine the appropriate amount of capital per trade.",
  },
  {
    Icon: CircleStop,
    head: "Closing Positions",
    body: "Traders aim to close out their positions at the right time to avoid overnight risk. This ensures they are not exposed to potential market gaps or news events that may occur when they are not actively monitoring the stock market.",
  },
];

export default function LiveTradingPage() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
              Live Trading Interface
            </h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              The Citadels Market trading platform is a software system offered to investors and
              traders — enabling you to place stock trades and monitor your account in real time,
              whenever and wherever you like.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── What is the Live Trading Interface ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Live Trading Interface
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                A trading platform is a software system, typically offered through a brokerage, that
                lets you trade online, on your own — accessing stock markets, placing trades, monitoring
                positions, and managing your account.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Trading platforms can offer a number of powerful features. Broadly speaking, these
                include real-time stock quotes, live business and financial news feeds, instant access
                to streaming and historical stock market data, technical analysis tools, investment
                research, and educational resources.
              </p>
              <p className="text-gray-600 leading-relaxed">
                There are two main types of trading platforms: commercial platforms and proprietary
                platforms. Commercial platforms are designed for active traders and retail investors.
                They are characterised by ease of use and helpful features such as real-time stock
                quotes, market news feeds, live interactive charts, educational content, and research
                tools tailored for equity markets.
              </p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-artem-podrez-5715853.jpg"
                alt="Live trading interface"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Why our live trading interface is important ───────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Why our live trading interface is important
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
              A professional-grade stock trading interface gives you every tool you need to execute
              with precision, manage risk, and stay ahead of market movements in real time.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyItems.map((item, i) => (
              <ZoomIn key={item.head} delay={0.06 * i}>
                <div className="rounded-2xl bg-white border border-gray-100 p-7 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <item.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{item.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.body}</p>
                </div>
              </ZoomIn>
            ))}
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
                  The key factors necessary to succeed in active stock trading are fast, reliable
                  execution of trades and the lowest possible trading commissions. A trader can have a
                  majority of winning stock trades, yet still lose money at the end of the day if their
                  commissions outweigh their profits. Since active traders are continually buying and
                  selling equities, they may rack up substantial costs in the form of trading commissions.
                </p>
                <p>
                  Similarly, optimal execution of orders is essential. Getting in and out of the stock
                  market and taking small profits continually throughout the day requires efficient order
                  execution. During fast-moving market conditions — such as at the market open or just
                  after an important earnings release or economic announcement — it is especially
                  important to be working with a broker that can provide reliable, low-latency order
                  execution on equity positions.
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
