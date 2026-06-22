import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const traders = [
  {
    name: "Marcus Johnson",
    photo: "/sample-landing/trader-marcus.jpg",
    winRate: 91,
    intro:
      "Marcus is a seasoned trader with a proven track record of success in the financial markets. With a win rate of 91%, he has consistently delivered exceptional results for his clients. His expertise spans various asset classes, and he employs a disciplined approach to trading, focusing on risk management and strategic decision-making.",
    experience: "Globally licensed and regulated with over 18 years of hands-on trading expertise.",
    philosophy:
      '"Fear of Missing Out (FOMO) kills in trading. Success comes from disciplined emotion control and strategy over impulse."',
    clients: "230+ active clients follow live sessions and copy trades to grow practically and improve their own market understanding.",
    commission: "10% of profits only, ensuring alignment with client success.",
    risk: "Capital drawdown limited to 10% – clients are assured that trading capital will not fall below 90%, regardless of market conditions.",
  },
  {
    name: "Sophia Lee",
    photo: "/sample-landing/trader-sophia.jpg",
    winRate: 87,
    intro:
      "Sophia leverages advanced quantitative models and data analytics to identify high-probability trades. Her systematic approach minimizes emotional bias and maximizes consistency.",
    experience: "12 years in algorithmic trading and financial engineering.",
    philosophy: '"Numbers never lie. Consistency is the key to compounding success."',
    clients: null,
    commission: "8% of profits.",
    risk: "Automated stop-loss and position sizing, with a strict 8% drawdown cap.",
  },
  {
    name: "David Smith",
    photo: "/sample-landing/trader-david.jpg",
    winRate: 83,
    intro:
      "David specializes in swing trading, capturing medium-term trends across forex and commodities. His patient, methodical style delivers steady returns with controlled risk.",
    experience: "15 years in global markets, with a focus on technical analysis.",
    philosophy: '"Let the trend be your friend, but always set your exit."',
    clients: null,
    commission: "9% of profits.",
    risk: "Maximum 12% drawdown, with trailing stops on all trades.",
  },
  {
    name: "Aisha Patel",
    photo: "/sample-landing/trader-aisha.jpg",
    winRate: 89,
    intro:
      "Aisha is renowned for her expertise in options trading, using complex strategies to generate consistent income and hedge risk for her clients.",
    experience: "10+ years in derivatives and structured products.",
    philosophy: '"Options are about probability, not certainty. Manage risk, maximize reward."',
    clients: null,
    commission: "12% of profits.",
    risk: "Portfolio-level hedging, with a 7% capital risk ceiling.",
  },
  {
    name: "Chen Wang",
    photo: "/sample-landing/trader-chen.jpg",
    winRate: 85,
    intro:
      "Chen applies advanced charting and technical indicators to time entries and exits with precision. His disciplined approach is favored by traders seeking tactical edge.",
    experience: "14 years in technical trading and market analysis.",
    philosophy: '"Charts reveal the truth. Patterns repeat, but discipline wins."',
    clients: null,
    commission: "7% of profits.",
    risk: "10% max drawdown, with dynamic stop-loss adjustments.",
  },
  {
    name: "Priya Sharma",
    photo: "/sample-landing/trader-priya.jpg",
    winRate: 88,
    intro:
      "Priya focuses on high-growth opportunities in emerging markets, combining macroeconomic research with local insights to deliver strong returns.",
    experience: "11 years in emerging market equities and currencies.",
    philosophy: '"Growth comes from change. Embrace volatility, but respect the risks."',
    clients: null,
    commission: "11% of profits.",
    risk: "Diversified exposure, with a 9% capital risk limit.",
  },
];

function WinRateBar({ rate }: { rate: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-500"
          style={{ width: `${rate}%` }}
        />
      </div>
      <span className="text-xs font-bold text-emerald-600 w-10 text-right">{rate}%</span>
    </div>
  );
}

export default async function LeadTradersPage() {
  const t = await getTranslations("leadTradersPage");

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

      {/* ── Trader cards ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {t("exploreHead")}
            </h2>
            <p className="text-gray-500 mb-10 max-w-xl">
              {t("exploreSub")}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {traders.map((trader, i) => (
              <ZoomIn key={trader.name} delay={0.06 * i}>
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  {/* Card header */}
                  <div className="flex items-center gap-3 p-5 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-emerald-100">
                      <Image
                        src={trader.photo}
                        alt={trader.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-sm leading-tight truncate">
                        {trader.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">{t("winRate")}</p>
                      <WinRateBar rate={trader.winRate} />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <p className="text-gray-600 text-sm leading-relaxed">{trader.intro}</p>

                    <div className="space-y-2 text-sm">
                      <p className="text-gray-700">
                        <span className="font-semibold">{t("experience")}:</span>{" "}
                        <span className="text-gray-500">{trader.experience}</span>
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">{t("philosophy")}:</span>{" "}
                        <span className="text-gray-500 italic">{trader.philosophy}</span>
                      </p>
                      {trader.clients && (
                        <p className="text-gray-700">
                          <span className="font-semibold">{t("clientBase")}:</span>{" "}
                          <span className="text-gray-500">{trader.clients}</span>
                        </p>
                      )}
                      <p className="text-gray-700">
                        <span className="font-semibold">{t("commission")}:</span>{" "}
                        <span className="text-emerald-600 font-medium">{trader.commission}</span>
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">{t("riskManagement")}:</span>{" "}
                        <span className="text-gray-500">{trader.risk}</span>
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-5">
                    <Link
                      href="/register"
                      className="block text-center w-full py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
                    >
                      {t("copyBtn")}
                    </Link>
                  </div>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: darkGradient }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t("ctaHead")}
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
              {t("ctaSub")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                {t("ctaOpen")}
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors no-underline"
              >
                {t("ctaLearn")}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
