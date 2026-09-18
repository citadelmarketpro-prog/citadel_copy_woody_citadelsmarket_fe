import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function SupportCtaSection() {
  const t = await getTranslations("support");

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
          <FadeLeft className="order-2 w-full max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">{t("title")}</h2>
            <p className="text-gray-600 text-base leading-relaxed">{t("body")}</p>
          </FadeLeft>

          <FadeRight delay={0.15} className="relative order-1 w-full flex justify-center pb-6">
            <div className="relative w-full max-w-xs">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/front_images/theinvestorpost-man-5782415_1920.jpg"
                  alt="Trader getting support any time of day"
                  fill
                  sizes="(min-width: 1024px) 320px, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white rounded-full shadow-xl px-4 py-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Image src="/new_images/img_19.svg" alt="Live chat" width={20} height={20} />
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Image src="/new_images/img_20.svg" alt="WhatsApp" width={20} height={20} />
                </div>
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
