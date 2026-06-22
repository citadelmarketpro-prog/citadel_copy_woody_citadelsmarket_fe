import Image from "next/image";
import {
  Brain,
  FlaskConical,
  TriangleAlert,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function AdvanceTradingPage() {
  const t = await getTranslations("advanceTradingPage");

  const advantages = [
    { Icon: Brain, head: t("adv1Head"), body: t("adv1Body") },
    { Icon: FlaskConical, head: t("adv2Head"), body: t("adv2Body") },
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
              {t("heroTitle")}
            </h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              {t("heroSub")}
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
                {t("s2Head")}
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                {t("s2Sub")}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t("s2P1")}</p>
              <p className="text-gray-600 leading-relaxed">{t("s2P2")}</p>
              <p className="text-gray-600 leading-relaxed">{t("s2P3")}</p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-yankrukov-7691753.jpg"
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
              {t("advantagesHead")}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <ZoomIn key={i} delay={0.08 * i}>
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
                {t("noteText")}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
