import Image from "next/image";
import {
  TrendingUp,
  Shuffle,
  Flame,
  BarChart2,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function OilAndGasPage() {
  const t = await getTranslations("oilGasPage");

  const pros = [
    { head: t("pro1Head"), body: t("pro1Body") },
    { head: t("pro2Head"), body: t("pro2Body") },
  ];

  const cons = [t("con1"), t("con2"), t("con3")];

  const outlookCards = [
    { Icon: Flame, head: t("card1Head"), body: t("card1Body") },
    { Icon: BarChart2, head: t("card2Head"), body: t("card2Body") },
  ];

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

      {/* ── Oil and Gas Trading ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t("s2Head")}</h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                {t("s2Sub")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("s2P1")}</p>
              <p className="text-gray-600 leading-relaxed">{t("s2P2")}</p>
              <p className="text-gray-600 leading-relaxed">{t("s2P3")}</p>
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
              {t("advantagesHead")}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pros */}
            <FadeLeft>
              <div className="rounded-2xl bg-white border border-emerald-100 p-8 h-full">
                <h3 className="text-lg font-bold text-emerald-700 mb-6 flex items-center gap-2">
                  <TrendingUp size={20} className="text-emerald-600" strokeWidth={2} />
                  {t("pros")}
                </h3>
                <div className="space-y-6">
                  {pros.map((item, i) => (
                    <div key={i}>
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
                  {t("cons")}
                </h3>
                <ul className="space-y-4">
                  {cons.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
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
                  {t("outlookHead")}
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>{t("outlookP1")}</p>
                  <p>{t("outlookP2")}</p>
                  <p>{t("outlookP3")}</p>
                </div>
              </FadeUp>
            </div>

            <FadeRight delay={0.12} className="flex-1 lg:max-w-sm">
              <div className="grid grid-cols-1 gap-5">
                {outlookCards.map((card, i) => (
                  <ZoomIn key={i}>
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
