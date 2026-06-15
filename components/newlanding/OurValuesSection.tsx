import { FadeUp, ZoomIn } from "./motion";

const values = [
  {
    head: "Transparency",
    body: "We believe in open and honest communication. All trading performance, strategies, and fees are clearly disclosed so users can make informed decisions with full confidence.",
  },
  {
    head: "Trust & Security",
    body: "Our platform is built with robust security measures and a commitment to safeguarding our users' funds and data. We prioritize ethical practices to build long-term trust with every trader.",
  },
  {
    head: "Empowerment",
    body: "We simplify investing by making professional trading accessible to everyone. Through intuitive tools and expert-curated strategies, we help users grow their portfolios with ease and confidence.",
  },
];

export default function OurValuesSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <ZoomIn key={v.head} delay={0.1 * i}>
              <div
                className="rounded-xl p-6 min-h-44"
                style={{
                  backgroundImage: "url('/sample-landing/chat-bg.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3 className="text-gray-900 font-bold text-lg mb-2">{v.head}</h3>
                <p className="text-gray-800 text-sm leading-relaxed m-0">{v.body}</p>
              </div>
            </ZoomIn>
          ))}
        </div>
      </div>
    </section>
  );
}
