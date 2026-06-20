import Image from "next/image";
import { FadeUp, FadeLeft, FadeRight } from "./motion";
import { getTranslations } from "next-intl/server";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function AboutSection() {
  const t = await getTranslations("about");
  return (
    <section className="py-14 sm:py-20 overflow-hidden" style={{ background: darkGradient }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "#0f8a62" }}>{t("heading")}</h2>
        </FadeUp>
        <div className="flex flex-col md:flex-row gap-10">
          <FadeLeft className="flex-[3]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              {t("p1")}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {t("p2")}
            </p>
          </FadeLeft>
          <FadeRight delay={0.15} className="flex-[2]">
            <Image
              src="/sample-landing/euro-copy.webp"
              alt="Copy trading"
              width={500}
              height={340}
              className="w-full rounded-lg object-cover"
            />
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
