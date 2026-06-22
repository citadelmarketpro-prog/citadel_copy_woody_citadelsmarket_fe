import Link from "next/link";
import { Landmark, TrendingUp, BadgeCheck, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function InsurancePage() {
  const t = await getTranslations("insurancePage");

  const securityPillars = [
    { head: t("p1Head"), body: t("p1Body"), Icon: Landmark },
    { head: t("p2Head"), body: t("p2Body"), Icon: TrendingUp },
    { head: t("p3Head"), body: t("p3Body"), Icon: BadgeCheck },
    { head: t("p4Head"), body: t("p4Body"), Icon: ShieldCheck },
  ];

  const membershipDetails = [
    { label: t("memberLabel1"), value: t("memberVal1") },
    { label: t("memberLabel2"), value: t("memberVal2") },
    { label: t("memberLabel3"), value: t("memberVal3"), highlight: true },
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

      {/* ── Security Pillars ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              {t("protectHead")}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((pillar, i) => (
              <ZoomIn key={i} delay={0.08 * i}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <pillar.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{pillar.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{pillar.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financial Commission Member ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              {t("memberHead")}
            </h2>
          </FadeUp>
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">

            <FadeRight delay={0.15} className="flex-1 flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("memberP")}
              </p>

              <div className="rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-200">
                {membershipDetails.map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-4 bg-white">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span
                      className={`text-sm font-semibold ${
                        item.highlight ? "text-emerald-600" : "text-gray-900"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/register"
                className="inline-block mt-8 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline w-fit"
              >
                {t("memberCta")}
              </Link>
            </FadeRight>

          </div>
        </div>
      </section>

      {/* ── Compliance Statement ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: darkGradient }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              {t("ctaHead")}
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
              {t("ctaSub")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                {t("ctaStart")}
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
