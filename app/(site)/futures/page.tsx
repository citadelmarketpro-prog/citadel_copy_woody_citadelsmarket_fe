import Image from "next/image";
import {
  Ruler,
  ArrowLeftRight,
  Package,
  DollarSign,
  Star,
  TriangleAlert,
} from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const contractParams = [
  { Icon: Ruler, label: "The unit of measurement." },
  {
    Icon: ArrowLeftRight,
    label: "How the trade will be settled — either with physical delivery of a given quantity of shares or with a cash settlement.",
  },
  { Icon: Package, label: "The quantity of shares or units to be delivered or covered under the contract." },
  { Icon: DollarSign, label: "The currency in which the futures contract is quoted." },
  { Icon: Star, label: "Grade or quality considerations, where applicable — for example, the class of stock or ETF unit type." },
];

export default function FuturesPage() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Futures Trading</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Futures are derivative contracts to buy or sell a stock or ETF at a future date at an
              agreed-upon price — giving traders the ability to hedge or speculate on equity price movements.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Stock Futures Investing ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Futures Trading</h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                Stock futures investing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Stock futures investing lets you trade futures of individual publicly listed companies
                and shares of ETFs. Futures contracts represent a significant part of the equity
                derivatives world, enabling traders to gain leveraged exposure to stock price movements
                without directly owning the underlying shares.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Some traders prefer stock futures because they can take a substantial position while
                putting up a relatively small amount of capital, giving them greater potential leverage
                than owning the securities outright.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Most investors think about buying a stock anticipating that its price will rise. But
                short-selling through futures lets traders do the opposite — bet that a stock&apos;s price
                will fall, so they can profit from the decline and buy back at a lower price.
              </p>
              <p className="text-gray-600 leading-relaxed">
                One common application involves hedging equity exposure. Someone wanting to hedge
                exposure to stocks may short-sell a futures contract on the S&amp;P 500 index. If stocks
                fall, they make money on the short position, balancing out their exposure to the index.
                Conversely, the same investor may feel confident about future performance and buy a long
                contract — gaining significant upside if stocks move higher.
              </p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-tima-miroshnichenko-7567441.jpg"
                alt="Futures trading"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── What are futures contracts? ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              What are futures contracts?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Futures contracts, which you can readily buy and sell over exchanges, are standardised.
              Each futures contract will typically specify all the different contract parameters:
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contractParams.map((p, i) => (
              <ZoomIn key={p.label} delay={0.07 * i}>
                <div className="rounded-2xl bg-white border border-gray-100 p-6 flex gap-4 items-start hover:shadow-md transition-shadow h-full">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <p.Icon size={20} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pt-1">{p.label}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risks: margin and leverage ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                The risks of futures trading: margin and leverage
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Many speculators borrow a substantial amount of money to play the stock futures market
                  because leverage is the primary way to magnify relatively small equity price movements
                  into profits that justify the time and effort involved.
                </p>
                <p>
                  But borrowing money also increases risk: if markets move against you — and do so more
                  dramatically than you expect — you could lose more money than you initially invested.
                  Futures are complex instruments and are not recommended for inexperienced individual
                  investors without appropriate risk controls in place.
                </p>
                <p>
                  Leverage and margin rules in the stock futures world allow traders to control large
                  positions with a fraction of the total value. The exchange sets the margin requirements.
                  Depending on the contract, traders may be able to leverage their exposure significantly
                  higher than in direct stock ownership.
                </p>
                <p>
                  The greater the leverage, the greater the potential gains — but also the greater the
                  potential loss. A 5% change in stock prices can cause a highly leveraged position to
                  gain or lose a much larger percentage of the invested capital. This volatility means
                  that traders need strict discipline to avoid overexposing themselves to undue risk when
                  investing in stock futures.
                </p>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-6 flex gap-4">
                <TriangleAlert size={22} className="text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-gray-700 text-sm leading-relaxed">
                  Futures trading carries significant risk of loss and is not suitable for all investors.
                  You should only trade with capital you can afford to lose and should fully understand
                  the risks involved before opening a position.
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
