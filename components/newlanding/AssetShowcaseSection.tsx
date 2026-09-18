import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeLeft, FadeRight } from "./motion";

type Badge = { label: string; className: string };

const bars = [40, 65, 30, 80, 55, 70, 45];

function MockChart({ dark }: { dark: boolean }) {
  return (
    <div
      className={`rounded-2xl p-6 w-full max-w-[280px] ${
        dark ? "bg-[#0e0e10] border border-white/10" : "bg-white border border-gray-200 shadow-sm"
      }`}
    >
      <div className="flex items-end gap-1.5 h-32">
        {bars.map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-sm ${i % 2 === 0 ? "bg-emerald-500" : "bg-red-400"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <span className="flex-1 text-center py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold">Rise</span>
        <span className="flex-1 text-center py-2 rounded-lg bg-red-400 text-white text-sm font-semibold">Fall</span>
      </div>
    </div>
  );
}

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
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}>
          <FadeLeft className="flex-1 max-w-md">
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
            <div className="relative flex items-center gap-4">
              <div className="flex flex-col gap-4">
                {badges.map((b) => (
                  <span
                    key={b.label}
                    className={`px-6 py-6 rounded-2xl font-bold text-lg text-center min-w-[140px] ${b.className}`}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
              <MockChart dark={dark} />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
