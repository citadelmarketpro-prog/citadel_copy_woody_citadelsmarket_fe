import Image from "next/image";
import { Shuffle, TrendingUp } from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const pros = [
  {
    head: "Authorised practice",
    body: "Copy trading is generally recognised by key regulatory frameworks, including CySEC, ESMA, MiFID and the FCA. Choosing a licensed and reputable broker will ensure your funds are safe and not exposed to scams.",
  },
  {
    head: "Portfolio diversification",
    body: "Traders can gain exposure to opportunities or trends that they wouldn't usually consider without the help of another trader's expertise.",
  },
];

const cons = [
  {
    head: "Risk",
    body: "The risks can be high even if you choose an experienced trader to copy. If a strategy is unsuccessful, the risk will also translate onto a follower's account and can result in a financial loss.",
  },
  {
    head: "Control",
    body: "One of the main disadvantages is the lack of control a trader will have once they begin copying an account; traders are essentially entrusting their portfolio to a stranger.",
  },
];

export default function OptionCopyTradingPage() {
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
              Option Copy Trading
            </h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Citadel Pros Market has been sharing financial freedom with traders since 2014 — continuously
              improving the platform so traders can enjoy the freedom to trade whenever and wherever they like.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── What is Copy Trading ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Option Copy Trading
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                Copy trading is replicating another trader&apos;s positions using social platforms,
                automated tools and signals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Copy trading is a type of trading where you copy the trades performed by another, more
                experienced trader. It can be manual, semi-automatic or fully automatic.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Copy trading allows individuals to automatically copy another trader&apos;s positions when
                they are opened or closed. Experienced traders communicate their stock positions using
                signals, where followers can replicate the same entries and exits in real time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Citadel Pros Market, copy trading is focused exclusively on equities. You can copy
                positions across a broad range of publicly listed stocks — from high-growth technology
                companies to stable, dividend-paying blue chips — all within a regulated, transparent
                environment.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Copy trading can be a good way to grow your stock portfolio, but it is important to
                understand that wealth builds gradually. Diversification and disciplined risk management
                are the foundation of long-term success in equity copy trading.
              </p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-anna-nekrashevich-6801872.jpg"
                alt="Option copy trading"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              Pros and Cons
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
                <div className="space-y-6">
                  {cons.map((item) => (
                    <div key={item.head}>
                      <p className="font-semibold text-gray-900 mb-1">{item.head}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Risk ─────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Risk</h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  All types of trading are associated with risk. You always risk losing part or all of
                  your investment. Never invest money you cannot afford to lose. The risk associated with
                  copy trading depends on the type of stock you choose to copy trade. Copying the trades
                  of a trader that focuses on high-growth, speculative equities carries higher risk.
                  Copying the trades of a trader that focuses on established, blue-chip stocks carries
                  comparatively lower risk.
                </p>
                <p>
                  You should follow a trader that trades using a risk profile that you feel comfortable
                  with. Many platforms will give you a risk indicator for each trader you can choose to
                  copy, but it is always best to manually inspect their trade history and see if you feel
                  comfortable with their trading strategies and risk profile. When in doubt, choose a
                  broker with a lower-risk profile. You can increase your risk exposure later on, but if
                  you choose a high-risk strategy and lose money, it will be too late to move that money
                  to a lower-risk option since the money is already lost.
                </p>
                <p>
                  A common beginner&apos;s mistake is only copying one trader. A profitable trading history
                  does not guarantee future returns. All traders can produce a period of poor returns or
                  losses. It is always best to split your money and follow more than one trader. This will
                  give you better diversification and will allow you to earn a profit even if one trader
                  has a bad month or year.
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
