import Image from "next/image";
import {
  Brain,
  FlaskConical,
  TriangleAlert,
} from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const advantages = [
  {
    Icon: Brain,
    head: "Minimizing Emotions",
    body: "Automated trading systems minimize emotions throughout the trading process. By keeping emotions in check, traders typically have an easier time sticking to the plan. Since trade orders are executed automatically once the trade rules have been met, traders will not be able to hesitate or question the trade. In addition to helping traders who are afraid to pull the trigger, automated trading can curb those who are apt to overtrade — buying and selling at every perceived opportunity in the stock market.",
  },
  {
    Icon: FlaskConical,
    head: "Backtesting",
    body: "Backtesting applies trading rules to historical stock market data to determine the viability of the idea. When designing a system for automated trading, all rules need to be absolute, with no room for interpretation. The computer cannot make guesses and it has to be told exactly what to do. Traders can take these precise sets of rules and test them on historical stock data before risking money in live trading. Careful backtesting allows traders to evaluate and fine-tune a trading idea, and to determine the system's expectancy — i.e., the average amount a trader can expect to win or lose per unit of risk.",
  },
];

export default function AdvanceTradingPage() {
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
              Advanced Trading Account
            </h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Citadel Pros Market has been sharing financial freedom with traders since 2014 — continuously
              improving the platform so traders can enjoy the freedom to trade whenever and wherever they like.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── What is Advanced Trading ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Advanced Trading Account
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                Advanced Trading Account / Mechanical trading systems
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced Trading Accounts — also referred to as mechanical trading systems, algorithmic
                trading, automated trading, or system trading — allow traders to establish specific rules
                for both stock trade entries and exits that, once programmed, can be automatically
                executed via a computer. Various platforms report 70% to 80% or more of shares traded on
                U.S. stock exchanges come from automatic trading systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Traders and investors can turn precise entry, exit, and money management rules into
                automated stock trading systems that allow computers to execute and monitor the trades.
                One of the biggest attractions of strategy automation is that it can take some of the
                emotion out of trading since trades are automatically placed once certain criteria are met.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The trade entry and exit rules can be based on simple conditions such as a moving average
                crossover, or they can be more sophisticated strategies built around a comprehensive
                understanding of stock market behaviour and the programming language specific to the
                user&apos;s trading platform.
              </p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-alesia-kozik-6771900.jpg"
                alt="Advanced trading account"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Advantages of Automated Systems ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              Advantages of Automated Systems
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <ZoomIn key={adv.head} delay={0.08 * i}>
                <div className="rounded-2xl bg-white border border-gray-100 p-8 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <adv.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{adv.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{adv.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Important Note ───────────────────────────────────────────────── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="max-w-3xl rounded-2xl border border-amber-100 bg-amber-50 p-8 flex gap-5">
              <div className="flex-shrink-0 mt-0.5">
                <TriangleAlert size={22} className="text-amber-500" strokeWidth={1.75} />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">
                Although appealing for a variety of reasons, automated trading systems should not be
                considered a substitute for carefully executed stock trading. Technology failures can
                happen, and as such, these systems do require monitoring. Server-based platforms may
                provide a solution for traders wishing to minimize the risks of mechanical failures.
                Remember, you should have some trading experience and knowledge before you decide to
                use automated trading systems.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
