import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");

  const valueCards = [
    {
      bg: "",
      bgColor: "#0c5c45",
      head: t("v1Head"),
      headColor: "text-white",
      body: t("v1Body"),
      textColor: "text-white/90",
    },
    {
      bg: "/sample-landing/chat-bg.jpg",
      bgColor: "",
      head: t("v2Head"),
      headColor: "text-gray-900",
      body: t("v2Body"),
      textColor: "text-gray-700",
    },
    {
      bg: "",
      bgColor: "#0c5c45",
      head: t("v3Head"),
      headColor: "text-white",
      body: t("v3Body"),
      textColor: "text-white/90",
    },
    {
      bg: "/sample-landing/chat-bg.jpg",
      bgColor: "",
      head: t("v4Head"),
      headColor: "text-gray-900",
      body: t("v4Body"),
      textColor: "text-gray-700",
    },
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

      {/* ── About content ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">

            <FadeLeft className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                {t("s2Head")}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t("s2P1")}
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {t("s2P2")}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t("s2P3")}
              </p>
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline w-fit"
              >
                {t("s2Cta")}
              </Link>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1">
              <div className="w-full min-h-[320px] h-full rounded-2xl overflow-hidden">
                <Image
                  src="/sample-landing/pexels-vlada-karpovich-7433853.jpg"
                  alt="Citadels Market trading team"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeRight>

          </div>
        </div>
      </section>

      {/* ── Our Values ─────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{t("valuesHead")}</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueCards.map((card, i) => (
              <ZoomIn key={i} delay={0.08 * i}>
                <div
                  className="relative rounded-2xl overflow-hidden min-h-64 flex flex-col"
                  style={card.bg
                    ? { backgroundImage: `url('${card.bg}')`, backgroundSize: "cover", backgroundPosition: "center" }
                    : { backgroundColor: card.bgColor }
                  }
                >
                  <div className="relative z-10 p-8 flex flex-col gap-3">
                    <h3 className={`font-extrabold text-sm uppercase tracking-widest ${card.headColor}`}>
                      {card.head}
                    </h3>
                    <p className={`text-sm leading-relaxed m-0 ${card.textColor}`}>{card.body}</p>
                  </div>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risk Management / Core Mission ─────────────────────────────── */}
      <section className="py-16 sm:py-24" style={{ background: darkGradient }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            <ZoomIn className="flex-1 flex justify-center items-center bg-white/5 border border-white/10 rounded-2xl p-12">
              <Image
                src="/images/logo_light.png"
                alt="Citadels Market"
                width={280}
                height={100}
                className="w-auto h-20 object-contain"
              />
            </ZoomIn>

            <FadeRight delay={0.15} className="flex-[2]">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                {t("riskHead")}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {t("riskP1")}
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                {t("riskP2")}
              </p>
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline w-fit"
              >
                {t("riskCta")}
              </Link>
            </FadeRight>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
