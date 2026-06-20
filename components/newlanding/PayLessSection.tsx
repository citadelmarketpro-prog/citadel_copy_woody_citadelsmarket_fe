import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeLeft, FadeRight } from "./motion";

export default async function PayLessSection() {
  const t = await getTranslations("payLess");

  const bullets = [t("b1"), t("b2"), t("b3")];

  return (
    <section className="py-14 sm:py-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141414] rounded-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-end gap-8 px-6 sm:px-12 pt-16">
            <FadeLeft className="flex-1 pb-8 lg:pb-16">
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                {t("title")}
              </h3>
              <p className="text-gray-400 text-base mb-6">
                {t("subtitle")}
              </p>
              <ul className="space-y-4 mb-8 list-none p-0 m-0">
                {bullets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="flex-shrink-0 mt-0.5 text-gray-400"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3.75V20.25M9.75 20.25H14.25M5.25 8.25L18.75 5.25M2.25 15.75C2.25 17.4066 4.125 18 5.25 18C6.375 18 8.25 17.4066 8.25 15.75L5.25 8.25L2.25 15.75ZM15.75 12.75C15.75 14.4066 17.625 15 18.75 15C19.875 15 21.75 14.4066 21.75 12.75L18.75 5.25L15.75 12.75Z" />
                    </svg>
                    <p className="text-white text-base m-0">{item}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/register"
                  className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-500 transition-colors no-underline"
                  style={{ boxShadow: "rgba(16,185,129,0.4) 0px 4px 0px 0px, #0a0a0a 0px 0px 0px 1px inset" }}
                >
                  {t("getStarted")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <span className="text-gray-400 text-sm">{t("disclaimer")}</span>
              </div>
            </FadeLeft>
            <FadeRight delay={0.15} className="flex-shrink-0 self-end">
              <Image
                src="/sample-landing/image.fcb36e3b.svg"
                alt="Trading dashboard"
                width={390}
                height={368}
                className="w-full max-w-xs sm:max-w-sm h-auto block"
              />
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}
