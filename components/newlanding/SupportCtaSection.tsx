import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function SupportCtaSection() {
  const t = await getTranslations("support");

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <FadeLeft className="flex-1 max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{t("title")}</h2>
            <p className="text-gray-600 text-base leading-relaxed">{t("body")}</p>
          </FadeLeft>

          <FadeRight delay={0.15} className="flex-1 flex justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
              <Image src="/new_images/img_19.svg" alt="Live chat" width={28} height={28} />
            </div>
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
              <Image src="/new_images/img_20.svg" alt="WhatsApp" width={28} height={28} />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
