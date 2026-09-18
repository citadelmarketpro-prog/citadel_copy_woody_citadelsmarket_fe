import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { FadeLeft, FadeRight } from "./motion";

type Badge = { label: string; className: string; icon?: LucideIcon };

export default function AssetShowcaseSection({
  title,
  description,
  learnMoreLabel,
  href,
  badges,
  reverse = false,
  dark = false,
}: {
  title: string;
  description: string;
  learnMoreLabel: string;
  href: string;
  badges: [Badge, Badge];
  reverse?: boolean;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-[#0a0a0a]" : "bg-white"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div
          className={`flex flex-col-reverse ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-10 lg:gap-16`}
        >
          <FadeLeft className="flex-1 max-w-md text-left">
            <h2 className={`text-4xl sm:text-5xl font-extrabold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
              {title}
            </h2>
            <p className={`text-base leading-relaxed mb-5 ${dark ? "text-gray-400" : "text-gray-600"}`}>
              {description}
            </p>
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 text-red-500 font-semibold hover:text-red-400 transition-colors no-underline"
            >
              {learnMoreLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeLeft>

          <FadeRight delay={0.15} className="flex-1 flex justify-center">
            <div className="relative flex items-center gap-8 sm:gap-10">
              <div
                className="relative w-[170px] sm:w-[200px] lg:w-[230px] flex-shrink-0"
                style={{ aspectRatio: "3 / 6.1" }}
              >
                <Image
                  src="/new_images/phone_mockup_1.webp"
                  alt=""
                  fill
                  sizes="230px"
                  className="object-contain"
                />
              </div>

              <div className="relative flex flex-col gap-12 sm:gap-14">
                <div
                  className="absolute border-t-2 border-r-2 border-red-500 rounded-tr-2xl pointer-events-none"
                  style={{ left: -32, top: 26, width: 32, height: 108 }}
                />
                {badges.map((b) => {
                  const Icon = b.icon;
                  return (
                    <span
                      key={b.label}
                      className={`relative z-10 flex items-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl font-bold text-sm sm:text-lg min-w-[120px] sm:min-w-[150px] ${b.className}`}
                    >
                      {Icon ? <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" /> : null}
                      {b.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
