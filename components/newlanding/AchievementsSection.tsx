import Image from "next/image";
import { FadeUp, ZoomIn } from "./motion";

const awards = [
  "/sample-landing/best-partners-program-global-2024-min.svg",
  "/sample-landing/top-trusted-financial-institution-2024-min.svg",
  "/sample-landing/most-trusted-forex-broker-global-2024-min.svg",
  "/sample-landing/best-fx-broker-global-2024-min.svg",
  "/sample-landing/best-customer-support-global-2024-min.svg",
  "/sample-landing/best-partners-program-global-2024-min.svg",
  "/sample-landing/most-transparent-broker-asia-2024-min.svg",
];

export default function AchievementsSection() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl font-bold text-gray-900 mb-10">Achievements</h2>
        </FadeUp>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {awards.map((src, i) => (
            <ZoomIn key={i} delay={0.06 * i} className="flex justify-center">
              <Image
                src={src}
                alt="Award"
                width={130}
                height={110}
                className="h-20 w-auto object-contain opacity-60"
              />
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
}
