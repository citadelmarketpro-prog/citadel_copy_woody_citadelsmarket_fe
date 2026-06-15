import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeLeft, FadeUp } from "./motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const features = [
  {
    img: "/sample-landing/margin.webp",
    head: "Transparent trading conditions",
    desc: "Fees from 0% with no hidden costs.",
    link: { label: "Start trading", href: "/register" },
  },
  {
    img: "/sample-landing/support.webp",
    head: "Always by your side",
    desc: "24/7 live support with a 30-second average response time.",
    link: null,
  },
  {
    img: "/sample-landing/summary.webp",
    head: "Licensed and regulated",
    desc: "Citadel Pros Market is authorized financial services provider and cryptocurrency exchange.",
    link: { label: "Our licenses", href: "/regulations" },
  },
];

export default function TrustedSection() {
  return (
    <section className="py-16 sm:py-20" style={{ background: darkGradient }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          <FadeLeft className="flex flex-col gap-6 max-w-lg">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight m-0">
              Trusted by millions of traders
            </h2>
            <div className="flex flex-col gap-3">
              <Link
                href="/register"
                className="inline-block px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg text-base hover:bg-emerald-500 transition-colors w-fit no-underline"
                style={{ boxShadow: "rgba(16,185,129,0.4) 0px 4px 0px 0px, #0a0a0a 0px 0px 0px 1px inset" }}
              >
                Open free account
              </Link>
              <span className="text-sm text-gray-400">It takes 30 seconds to register</span>
            </div>
          </FadeLeft>

          <div className="flex flex-col gap-0 flex-1 max-w-xl">
            {features.map((f, i) => (
              <FadeUp key={f.head} delay={0.1 * (i + 1)}>
                <div
                  className={`flex items-start gap-4 py-5 ${i < features.length - 1 ? "border-b border-[#555556]" : ""}`}
                >
                  <Image
                    src={f.img}
                    alt={f.head}
                    width={32}
                    height={32}
                    className="w-8 h-8 mt-1 flex-shrink-0"
                  />
                  <div>
                    <p className="text-2xl font-bold text-white mb-2">{f.head}</p>
                    <p className="text-gray-400 text-base mb-3">{f.desc}</p>
                    {f.link && (
                      <Link
                        href={f.link.href}
                        className="flex items-center gap-1 text-white text-sm font-medium w-fit hover:text-emerald-400 transition-colors no-underline"
                      >
                        {f.link.label}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
