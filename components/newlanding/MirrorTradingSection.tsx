import { FadeUp, ZoomIn } from "./motion";

const items = [
  {
    title: "Copy Option Trading",
    desc: "Copy trading is a type of trading where you copy the trades performed by another, more experienced trader. It can be manual, semi-automatic or fully automatic.",
  },
  {
    title: "Advance Trading",
    desc: "The trade entry and exit rules can be based on simple conditions such as a moving average crossover or they can be complicated strategies that require a comprehensive understanding of the programming language specific to the user's trading platform.",
  },
  {
    title: "Cryptocurrency Trading",
    desc: "Trade popular cryptocurrencies like Bitcoin, Ethereum, and more with ease. Our platform offers secure transactions, real-time pricing, and advanced tools to help you capitalize on the dynamic crypto market — whether you're a beginner or an experienced trader.",
  },
  {
    title: "Risk Management Tools",
    desc: "Utilize advanced risk management features such as stop-loss, take-profit, and negative balance protection to help safeguard your investments and trade with greater confidence.",
  },
];

export default function MirrorTradingSection() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Mirror Trading</h2>
        </FadeUp>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl list-none p-0 m-0">
          {items.map((item, i) => (
            <ZoomIn key={item.title} delay={0.08 * i}>
              <li className="p-5 rounded-xl border border-[#333] bg-[#141414] hover:border-emerald-500 hover:bg-emerald-600 transition-colors cursor-default group">
                <div className="text-white font-semibold mb-2">{item.title}</div>
                <p className="text-gray-400 group-hover:text-white text-sm leading-relaxed m-0 transition-colors">{item.desc}</p>
              </li>
            </ZoomIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
