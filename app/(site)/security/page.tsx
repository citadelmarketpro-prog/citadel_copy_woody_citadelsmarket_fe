import Image from "next/image";
import Link from "next/link";
import {
  Vault,
  Building2,
  BarChart3,
  Smartphone,
  KeyRound,
  GraduationCap,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function SecurityPage() {
  const t = await getTranslations("securityPage");

  const pillars = [
    { Icon: Vault, head: t("p1Head"), body: t("p1Body") },
    { Icon: Building2, head: t("p2Head"), body: t("p2Body") },
    { Icon: BarChart3, head: t("p3Head"), body: t("p3Body") },
  ];

  const features = [
    { Icon: Smartphone, head: t("f1Head"), body: t("f1Body") },
    { Icon: KeyRound, head: t("f2Head"), body: t("f2Body") },
    { Icon: GraduationCap, head: t("f3Head"), body: t("f3Body") },
  ];

  const dos = [t("do1"), t("do2"), t("do3"), t("do4"), t("do5"), t("do6")];
  const donts = [t("dont1"), t("dont2"), t("dont3"), t("dont4"), t("dont5"), t("dont6")];

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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {t("pillarsHead")}
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
              {t("pillarsSub")}
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <ZoomIn key={i} delay={0.08 * i}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <p.Icon size={24} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{p.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{p.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security of Accounts ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <FadeLeft className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                {t("accountLabel")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                {t("accountHead")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">{t("accountP1")}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t("accountP2")}</p>
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                {t("accountCta")}
              </Link>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/11463297.png"
                alt="Account security illustration"
                width={640}
                height={480}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {t("featuresHead")}
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
              {t("featuresSub")}
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ZoomIn key={i} delay={0.08 * i}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <f.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{f.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{f.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Staying Safe Online ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
              {t("safeHead")}
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              {t("safeSub")}
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DOs */}
            <FadeLeft>
              <div className="rounded-2xl bg-white border border-emerald-100 p-8 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-emerald-600" strokeWidth={2} />
                  {t("dos")}
                </h3>
                <ul className="space-y-4">
                  {dos.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-500 flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeLeft>

            {/* DON'Ts */}
            <FadeRight delay={0.1}>
              <div className="rounded-2xl bg-white border border-red-100 p-8 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <XCircle size={20} className="text-red-500" strokeWidth={2} />
                  {t("donts")}
                </h3>
                <ul className="space-y-4">
                  {donts.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle
                        size={18}
                        className="text-red-400 flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Suspicious Communications ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <FadeRight className="flex-1 rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/2512687.png"
                alt="Suspicious communications warning"
                width={640}
                height={480}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </FadeRight>

            <FadeLeft delay={0.15} className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4">
                {t("suspiciousLabel")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                {t("suspiciousHead")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">{t("suspiciousP1")}</p>
              <p className="text-gray-600 leading-relaxed mb-5">{t("suspiciousP2")}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{t("suspiciousP3")}</p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                {t("suspiciousCta")}
              </Link>
            </FadeLeft>
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
                href="/insurance"
                className="inline-block px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors no-underline"
              >
                {t("ctaInsurance")}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
