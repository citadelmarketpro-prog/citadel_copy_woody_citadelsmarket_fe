import Image from "next/image";
import {
  Layers,
  PenLine,
  ArrowRightLeft,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function OptionTradingPage() {
  const t = await getTranslations("optionTradingPage");

  const spreadHighlights = [
    {
      Icon: Layers,
      head: t("spread1Head"),
      body: t("spread1Body"),
    },
    {
      Icon: ArrowRightLeft,
      head: t("spread2Head"),
      body: t("spread2Body"),
    },
  ];

  const quickRef = [
    { label: t("qr1Label"), desc: t("qr1Desc") },
    { label: t("qr2Label"), desc: t("qr2Desc") },
    { label: t("qr3Label"), desc: t("qr3Desc") },
    { label: t("qr4Label"), desc: t("qr4Desc") },
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

      {/* ── Option Trading & Investing ───────────────────────────────────── */}
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
                src="/sample-landing/pexels-tima-miroshnichenko-7567228.jpg"
                alt="Options trading"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Options Spreads ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{t("spreadsHead")}</h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              {t("spreadsSub")}
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {spreadHighlights.map((item, i) => (
              <ZoomIn key={i} delay={0.08 * i}>
                <div className="rounded-2xl bg-white border border-gray-100 p-8 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <item.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{item.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
          <FadeUp>
            <div className="max-w-3xl space-y-5 text-gray-600 leading-relaxed">
              <p>{t("spreadsP")}</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Selling & Writing Options ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <FadeLeft className="flex-1 flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t("sellingHead")}
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                {t("sellingSub")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("sellingP1")}</p>
              <p className="text-gray-600 leading-relaxed">{t("sellingP2")}</p>
              <p className="text-gray-600 leading-relaxed">{t("sellingP3")}</p>
              <p className="text-gray-600 leading-relaxed">{t("sellingP4")}</p>
            </FadeLeft>

            <FadeRight delay={0.1} className="flex-1 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-8 flex flex-col gap-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <PenLine size={22} className="text-emerald-600" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{t("qrHead")}</h3>
                <ul className="space-y-4">
                  {quickRef.map((item, i) => (
                    <li key={i} className="flex flex-col gap-1">
                      <span className="font-semibold text-gray-900 text-sm">{item.label}</span>
                      <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
