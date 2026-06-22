import Link from "next/link";
import { CheckCircle2, Gift } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function ReferralPage() {
  const t = await getTranslations("referFriendPage");

  const yourRequirements = [t("yr1"), t("yr2"), t("yr3")];
  const friendRequirements = [t("fr1"), t("fr2"), t("fr3")];

  const steps = [
    { number: "1", title: t("step1Title"), body: t("step1Body") },
    { number: "2", title: t("step2Title"), body: t("step2Body") },
    { number: "3", title: t("step3Title"), body: t("step3Body") },
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

      {/* ── Reward Banner ────────────────────────────────────────────────── */}
      <section className="bg-emerald-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-center gap-5 justify-center text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <Gift size={28} className="text-emerald-600" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">
                  {t("rewardTitle")}
                </p>
                <p className="text-gray-600 text-sm mt-1 max-w-xl">
                  {t("rewardSub")}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Eligibility Requirements ─────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              {t("eligibilityHead")}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* You — the referrer */}
            <FadeLeft>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t("referrerHead")}</h3>
                <ul className="space-y-4">
                  {yourRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-emerald-600 flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeLeft>

            {/* Friend — the referee */}
            <FadeRight delay={0.1}>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t("refereeHead")}</h3>
                <ul className="space-y-4">
                  {friendRequirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-emerald-600 flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-gray-700 text-sm leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 text-center">
              {t("howHead")}
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">
            {steps.map((step, i) => (
              <ZoomIn key={i} delay={0.08 * i}>
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
          <FadeUp>
            <div className="flex justify-center">
              <Link
                href="/register"
                className="inline-block px-10 py-4 bg-emerald-600 text-white font-semibold text-base rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                {t("ctaBtn")}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
