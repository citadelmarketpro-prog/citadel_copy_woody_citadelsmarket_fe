import Link from "next/link";
import { FadeUp } from "./motion";

export default function CtaSection() {
  return (
    <section
      className="py-28 sm:py-36"
      style={{
        backgroundImage: "url('/sample-landing/66585fe0e1dc7e70cc75d804_cta-10.webp')",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <FadeUp>
          <div className="bg-[#181c25] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                Trade with a trusted broker
              </h2>
              <p className="text-white text-base">
                Use our demo account and learn how to trade by using risk-free virtual funds.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0 w-full sm:w-auto">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-emerald-600 text-white font-extrabold rounded-full text-base hover:bg-emerald-500 transition-colors no-underline w-full sm:w-auto"
              >
                Try free demo
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-extrabold rounded-full text-base hover:bg-emerald-500 transition-colors no-underline w-full sm:w-auto"
              >
                Trader&apos;s Hub
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
