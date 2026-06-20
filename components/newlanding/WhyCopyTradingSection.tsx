import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeUp, ZoomIn } from "./motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

function ReasonCard({ img, head, body, delay }: { img: string; head: string; body: string; delay?: number }) {
  return (
    <ZoomIn delay={delay}>
      <div className="flex flex-col items-center text-center px-6 sm:px-8 py-8">
        <Image
          src={img}
          alt={head}
          width={85}
          height={85}
          className="h-20 w-auto"
          style={{ filter: "invert(1)" }}
        />
        <h4 className="text-xl font-bold text-white mt-9 mb-3">{head}</h4>
        <p className="text-gray-400 text-base leading-relaxed">{body}</p>
      </div>
    </ZoomIn>
  );
}

export default async function WhyCopyTradingSection() {
  const t = await getTranslations("whyCopyTrading");

  const title = t("title");
  const firstWord = title.split(" ")[0];
  const rest = title.slice(firstWord.length);

  const row1 = [
    { img: "/sample-landing/icon-1.png", head: t("r1Head"), body: t("r1Body") },
    { img: "/sample-landing/icon-2.png", head: t("r2Head"), body: t("r2Body") },
    { img: "/sample-landing/icon-3.png", head: t("r3Head"), body: t("r3Body") },
  ];

  const row2 = [
    { img: "/sample-landing/icon-4.png", head: t("r4Head"), body: t("r4Body") },
    { img: "/sample-landing/icon-5.png", head: t("r5Head"), body: t("r5Body") },
    { img: "/sample-landing/icon-6.png", head: t("r6Head"), body: t("r6Body") },
  ];

  return (
    <section className="py-20 sm:py-32" style={{ background: darkGradient }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
            <span style={{ color: "#0f8a62" }}>{firstWord}</span>{rest}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(64,74,94,0.5)]">
          {row1.map((c, i) => (
            <ReasonCard key={i} {...c} delay={0.08 * i} />
          ))}
        </div>

        <div className="border-t border-[rgba(64,74,94,0.5)]" />

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(64,74,94,0.5)] pt-0">
          {row2.map((c, i) => (
            <ReasonCard key={i} {...c} delay={0.08 * (i + 3)} />
          ))}
        </div>
      </div>
    </section>
  );
}
