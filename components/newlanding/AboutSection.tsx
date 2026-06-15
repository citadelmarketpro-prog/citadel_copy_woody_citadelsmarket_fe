import Image from "next/image";
import { FadeUp, FadeLeft, FadeRight } from "./motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default function AboutSection() {
  return (
    <section className="py-14 sm:py-20" style={{ background: darkGradient }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-semibold text-emerald-400 mb-6">About Us</h2>
        </FadeUp>
        <div className="flex flex-col md:flex-row gap-10">
          <FadeLeft className="flex-[3]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Time to take action with the international Citadel Pros Market broker
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Trading will bring you profit with proper support, constant education, and a reasonable approach.
              Citadel Pros Market is a broker platform that has created all the conditions to help you improve your
              trading life in every possible way.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From educational broker&apos;s tools, demo accounts, and 24/7 support to your financial success, Citadel
              Pros Market works tirelessly to remain at the forefront in trading online. Join now! Take full
              advantage of this online trading leader and make your way into the world of professional trading.
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
