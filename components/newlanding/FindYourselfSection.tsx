import Link from "next/link";
import { FadeUp, ZoomIn } from "./motion";

const cards = [
  {
    bg: "/sample-landing/social-bg.jpg",
    overlay: "bg-emerald-900/80",
    head: "Clear Investment Processes",
    headColor: "text-white",
    body: "Our transparent investment processes detail how each investment team identifies and implements investment opportunities and the risk/return profile to be expected. We believe that strict adherence to these guidelines is one of the most effective forms of risk management.",
    textColor: "text-white/90",
  },
  {
    bg: "/sample-landing/chat-bg.jpg",
    overlay: "",
    head: "ESG Integration",
    headColor: "text-gray-900",
    body: "As a signatory of the United Nations-supported Principles for Responsible Investment (UN PRI) initiative, we're committed to investing responsibly and supported by a global team of dedicated ESG specialists whose recommendations help shape the investment process.",
    textColor: "text-gray-700",
  },
  {
    bg: "/sample-landing/social-bg.jpg",
    overlay: "bg-emerald-900/80",
    head: "Robust Oversight",
    headColor: "text-white",
    body: "Portfolio risk management is supplemented by our independent risk and quantitative analytics team — which partners with investment teams to measure behavioral biases and other risks but reports to senior investment management — and an operational risk management function that assesses risk across the complex.",
    textColor: "text-white/90",
  },
  {
    bg: "/sample-landing/chat-bg.jpg",
    overlay: "",
    head: "High-Conviction, Risk-Aware Portfolios",
    headColor: "text-gray-900",
    body: "Our focus on proprietary, security-level research allows us to build high-conviction, differentiated portfolios. Our risk management processes provide valuable insight to help our teams understand potential outcomes.",
    textColor: "text-gray-700",
  },
];

export default function FindYourselfSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-10 leading-tight">
            Find Yourself on Citadel Pros Market
          </h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <ZoomIn key={card.head} delay={0.08 * i}>
              <div
                className="relative rounded-2xl overflow-hidden min-h-72 flex flex-col"
                style={{
                  backgroundImage: `url('${card.bg}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {card.overlay && <div className={`absolute inset-0 ${card.overlay}`} />}
                <div className="relative z-10 p-8 flex flex-col gap-4">
                  <h3 className={`text-sm font-extrabold uppercase tracking-widest ${card.headColor}`}>
                    {card.head}
                  </h3>
                  <p className={`text-sm leading-relaxed m-0 ${card.textColor}`}>{card.body}</p>
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
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
