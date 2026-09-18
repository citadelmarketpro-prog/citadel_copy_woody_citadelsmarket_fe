import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight, ZoomIn } from "./motion";

const logos = [
  { src: "/new_images/img_18.svg", alt: "Visa" },
  { src: "/new_images/img_49.svg", alt: "Mastercard" },
  { src: "/new_images/img_4.svg", alt: "Maestro" },
  { src: "/new_images/img_17.svg", alt: "Skrill" },
  { src: "/new_images/img_21.svg", alt: "Neteller" },
  { src: "/new_images/img_51.svg", alt: "Jeton" },
];

export default async function PayLessSection() {
  const t = await getTranslations("moneyYourWay");

  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <FadeLeft className="flex-1 grid grid-cols-3 gap-3 max-w-md">
            {logos.map((logo, i) => (
              <ZoomIn key={logo.alt} delay={0.05 * i}>
                <div className="rounded-xl bg-[#141414] border border-white/10 h-20 flex items-center justify-center p-4">
                  <Image src={logo.src} alt={logo.alt} width={64} height={32} className="max-h-8 w-auto object-contain" />
                </div>
              </ZoomIn>
            ))}
          </FadeLeft>

          <FadeRight delay={0.15} className="flex-1 max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">{t("title")}</h2>
            <p className="text-gray-400 text-base leading-relaxed mb-3">{t("body")}</p>
            <p className="text-gray-500 text-xs mb-5">{t("disclaimer")}</p>
            <Link
              href="/security"
              className="inline-flex items-center gap-1.5 text-red-500 font-semibold hover:text-red-400 transition-colors no-underline"
            >
              {t("cta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
