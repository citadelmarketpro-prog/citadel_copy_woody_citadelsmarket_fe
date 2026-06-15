import Image from "next/image";
import { FadeUp, ZoomIn } from "./motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const row1 = [
  {
    img: "/sample-landing/icon-1.png",
    head: "Get results while others do the work",
    body: "Spend less time analyzing markets or manually setting strategies. Sit back and watch as your portfolio replicates automatically.",
  },
  {
    img: "/sample-landing/icon-2.png",
    head: "A trading masterclass in real-time",
    body: "Gain valuable insights into market trends, strategies, and risk management — all while observing real-world trading in action.",
  },
  {
    img: "/sample-landing/icon-3.png",
    head: "Trade at the same price as the top traders",
    body: "Get the same execution price as the trader you are copying through a built-in price-matching algorithm.",
  },
];

const row2 = [
  {
    img: "/sample-landing/icon-4.png",
    head: "Maintain full control",
    body: "Customize your risk exposure with individual Stop Loss and Take Profit limits for each trade.",
  },
  {
    img: "/sample-landing/icon-5.png",
    head: "Real traders, real results",
    body: "Tap into the expertise of real traders and mirror their tried and tested strategies to achieve your desired results.",
  },
  {
    img: "/sample-landing/icon-6.png",
    head: "Complete flexibility",
    body: "Enjoy the freedom to start, stop, or modify your copy trading settings at any time, adapting to changing market conditions.",
  },
];

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

export default function WhyCopyTradingSection() {
  return (
    <section className="py-20 sm:py-32" style={{ background: darkGradient }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
            <span className="text-emerald-400">Why</span> mirror trading?
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(64,74,94,0.5)]">
          {row1.map((c, i) => (
            <ReasonCard key={c.head} {...c} delay={0.08 * i} />
          ))}
        </div>

        <div className="border-t border-[rgba(64,74,94,0.5)]" />

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(64,74,94,0.5)] pt-0">
          {row2.map((c, i) => (
            <ReasonCard key={c.head} {...c} delay={0.08 * (i + 3)} />
          ))}
        </div>
      </div>
    </section>
  );
}
