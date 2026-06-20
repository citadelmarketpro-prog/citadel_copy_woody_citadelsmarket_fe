import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeLeft, FadeUp } from "./motion";
import { getTranslations } from "next-intl/server";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const features = [
  {
    img: "/sample-landing/margin.webp",
    headKey: "f1Head",
    descKey: "f1Desc",
    linkKey: "f1Link",
    linkHref: "/register",
  },
  {
    img: "/sample-landing/support.webp",
    headKey: "f2Head",
    descKey: "f2Desc",
    linkKey: null,
    linkHref: null,
  },
  {
    img: "/sample-landing/summary.webp",
    headKey: "f3Head",
    descKey: "f3Desc",
    linkKey: "f3Link",
    linkHref: "/regulations",
  },
];

export default async function TrustedSection() {
  const t = await getTranslations("trusted");
  return (
    <section className="py-16 sm:py-20 overflow-hidden" style={{ background: darkGradient }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <FadeLeft className="flex flex-col gap-6 max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight m-0">
              {t("title")}
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href="/register"
                className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg text-base hover:bg-emerald-500 transition-colors w-fit no-underline"
                style={{ boxShadow: "rgba(16,185,129,0.4) 0px 4px 0px 0px, #0a0a0a 0px 0px 0px 1px inset" }}
              >
                {t("openAccount")}
              </Link>
              <span className="text-sm text-gray-400">{t("takesSeconds")}</span>
            </div>
          </FadeLeft>

          <div className="flex flex-col gap-0 flex-1 max-w-xl">
            {features.map((f, i) => (
              <FadeUp key={f.headKey} delay={0.1 * (i + 1)}>
                <div
                  className={`flex items-start gap-4 py-5 ${i < features.length - 1 ? "border-b border-[#555556]" : ""}`}
                >
                  <Image
                    src={f.img}
                    alt={t(f.headKey as any)}
                    width={32}
                    height={32}
                    className="w-8 h-8 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-2xl font-bold text-white mb-2">{t(f.headKey as any)}</p>
                    <p className="text-gray-400 text-base mb-3">{t(f.descKey as any)}</p>
                    {f.linkKey && f.linkHref && (
                      <Link
                        href={f.linkHref}
                        className="flex items-center gap-1 text-white text-sm font-medium w-fit hover:text-emerald-400 transition-colors no-underline"
                      >
                        {t(f.linkKey as any)}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
