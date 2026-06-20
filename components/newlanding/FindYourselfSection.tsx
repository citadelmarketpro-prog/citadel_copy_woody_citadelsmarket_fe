import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { FadeUp, ZoomIn } from "./motion";

const cardStyles = [
  { bg: "", bgColor: "#0c5c45", headColor: "text-white", textColor: "text-white/90" },
  { bg: "/sample-landing/chat-bg.jpg", bgColor: "", headColor: "text-gray-900", textColor: "text-gray-700" },
  { bg: "", bgColor: "#0c5c45", headColor: "text-white", textColor: "text-white/90" },
  { bg: "/sample-landing/chat-bg.jpg", bgColor: "", headColor: "text-gray-900", textColor: "text-gray-700" },
];

export default async function FindYourselfSection() {
  const t = await getTranslations("findYourself");

  const cards = [
    { head: t("c1Head"), body: t("c1Body") },
    { head: t("c2Head"), body: t("c2Body") },
    { head: t("c3Head"), body: t("c3Body") },
    { head: t("c4Head"), body: t("c4Body") },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-10 leading-tight">
            {t("title")}
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <ZoomIn key={i} delay={0.08 * i}>
              <div
                className="relative rounded-2xl overflow-hidden min-h-72 flex flex-col"
                style={
                  cardStyles[i].bg
                    ? { backgroundImage: `url('${cardStyles[i].bg}')`, backgroundSize: "cover", backgroundPosition: "center" }
                    : { backgroundColor: cardStyles[i].bgColor }
                }
              >
                <div className="relative z-10 p-8 flex flex-col gap-4">
                  <h3 className={`text-sm font-extrabold uppercase tracking-widest ${cardStyles[i].headColor}`}>
                    {card.head}
                  </h3>
                  <p className={`text-sm leading-relaxed m-0 ${cardStyles[i].textColor}`}>{card.body}</p>
                </div>
              </div>
            </ZoomIn>
          ))}
        </div>
        <div className="mt-10 flex justify-start">
          <Link
            href="/register"
            className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
          >
            {t("getStarted")}
          </Link>
        </div>
      </div>
    </section>
  );
}
