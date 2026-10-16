import Image from "next/image";
import { FadeUp } from "./motion";

const PARTNERS = [
  { name: "Saxo Bank", src: "/svg_financials/broker9.svg" },
  { name: "IG Group", src: "/svg_financials/broker10.svg" },
  { name: "Interactive Brokers", src: "/svg_financials/broker1.svg" },
  { name: "Charles Schwab", src: "/svg_financials/broker2.svg" },
  { name: "Fidelity", src: "/svg_financials/broker3.svg" },
  { name: "AvaTrade", src: "/svg_financials/broker8.svg" },
  { name: "TD Ameritrade", src: "/svg_financials/broker4.svg" },
  { name: "BlackBull", src: "/svg_financials/broker5.svg" },
  { name: "eToro", src: "/svg_financials/broker7.svg" },
];

export default function FundsTrustSection() {
  return (
    <section className="bg-cream-100 py-16 sm:py-20">
      <div className="mx-auto max-w-[1100px] px-6">
        <FadeUp className="overflow-hidden rounded-[32px] bg-white px-8 py-12 text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-olive-ink/50">
            Your funds are held in top-tier institutions
          </p>
          <p className="mx-auto mt-4 max-w-[560px] bg-cream-100 text-[14px] text-olive-ink/55">
            OsaicMarkets works with globally renowned banking partners including:
          </p>

          <div
            className="group relative mt-8 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused]">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div key={`${p.name}-${i}`} className="flex h-10 shrink-0 items-center">
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={140}
                    height={40}
                    className="h-7 w-auto object-contain sm:h-9"
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
