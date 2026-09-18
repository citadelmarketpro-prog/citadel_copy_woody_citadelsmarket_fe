import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeUp, ZoomIn } from "./motion";

export default async function GettingStartedSection() {
  const t = await getTranslations("gettingStarted");

  const steps = [
    { title: t("step1Title"), body: t("step1Body"), img: "/new_images/img_70.webp", bg: "bg-gray-100 text-gray-900" },
    { title: t("step2Title"), body: t("step2Body"), img: "/new_images/img_54.webp", bg: "bg-red-500 text-white" },
    { title: t("step3Title"), body: t("step3Body"), img: "/new_images/img_57.webp", bg: "bg-[#0a0a0a] text-white" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12">{t("title")}</h2>
        </FadeUp>
        <div className="space-y-6">
          {steps.map((s, i) => (
            <ZoomIn key={s.title} delay={0.1 * i}>
              <div className={`rounded-2xl overflow-hidden flex flex-col sm:flex-row ${s.bg}`}>
                <div className="flex-1 p-8 sm:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-extrabold mb-3">{s.title}</h3>
                  <p className="text-sm sm:text-base opacity-80 max-w-sm">{s.body}</p>
                </div>
                <div className="relative flex-1 min-h-[220px]">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
}
