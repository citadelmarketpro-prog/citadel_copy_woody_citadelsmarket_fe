import Image from "next/image";
import Link from "next/link";
import { FadeLeft, FadeRight } from "./motion";

export default function PlatformSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeLeft>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              A user-friendly trading platform
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Invest alongside top investors without micromanaging.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8 mt-4">
              Gain exposure to professionally managed investment strategies. Entries, exits, and
              rebalancing are automatically adjusted to your investment amount—helping remove emotion
              from long-term investing.
            </p>
            <Link
              href="/register"
              className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-500 transition-colors no-underline"
            >
              Try now
            </Link>
          </FadeLeft>

          <FadeRight delay={0.15}>
            <div className="rounded-3xl overflow-hidden bg-gray-100 flex justify-center">
              <Image
                src="/sample-landing/6757d2193bf331c84b5fd1be_dtrader-revamped-hero-row.webp"
                alt="Trading platform preview"
                width={600}
                height={420}
                className="w-full h-auto object-contain"
              />
            </div>
          </FadeRight>
        </div>
      </div>
    </section>
  );
}
