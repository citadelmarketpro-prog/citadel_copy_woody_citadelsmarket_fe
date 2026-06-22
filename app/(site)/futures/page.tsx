import Image from "next/image";
import {
  Ruler,
  ArrowLeftRight,
  Package,
  DollarSign,
  Star,
  TriangleAlert,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function FuturesPage() {
  const t = await getTranslations("futuresPage");

  const contractParams = [
    { Icon: Ruler, label: t("c1") },
    { Icon: ArrowLeftRight, label: t("c2") },
    { Icon: Package, label: t("c3") },
    { Icon: DollarSign, label: t("c4") },
    { Icon: Star, label: t("c5") },
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

      {/* ── Stock Futures Investing ───────────────────────────────────────── */}
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
              <p className="text-gray-600 leading-relaxed">{t("s2P4")}</p>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/pexels-pnw-prod-8276238.jpg"
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
              {t("contractHead")}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              {t("contractSub")}
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contractParams.map((p, i) => (
              <ZoomIn key={i} delay={0.07 * i}>
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
                {t("risksHead")}
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>{t("risksP1")}</p>
                <p>{t("risksP2")}</p>
                <p>{t("risksP3")}</p>
                <p>{t("risksP4")}</p>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-6 flex gap-4">
                <TriangleAlert size={22} className="text-amber-500 flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t("risksWarning")}
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
