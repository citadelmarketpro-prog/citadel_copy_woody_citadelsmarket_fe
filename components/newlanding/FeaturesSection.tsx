import Image from "next/image";
import { FadeUp, ZoomIn } from "./motion";

const features = [
  {
    head: "Fast, Seamless Navigation",
    body: "The interface is built for speed — switch between markets, charts, and orders in seconds with minimal clicks. Whether you're a beginner or a pro, everything is exactly where you'd expect it to be.",
  },
  {
    head: "Powerful Built-In Charts",
    body: "Analyze the market with interactive charts, technical indicators, and drawing tools — all directly in the platform. No need for third-party tools to stay ahead of the trends.",
  },
  {
    head: "Lightning-Fast Order Execution",
    body: "Place trades instantly with one-click execution and manage them easily with advanced order types like stop-loss and limit orders. Every action is responsive and reliable.",
  },
  {
    head: "Real-Time Data & Smart Alerts",
    body: "Stay in control with live price feeds and customizable alerts. Get notified of price movements or trade activity the moment it happens — no delays, no missed opportunities.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-14 sm:py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {features.map((f, i) => (
            <ZoomIn key={f.head} delay={0.08 * i}>
              <div>
                <h3 className="text-gray-900 font-extrabold text-lg mt-0 mb-2">{f.head}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.body}</p>
              </div>
            </ZoomIn>
          ))}
        </div>

        <FadeUp delay={0.1}>
          <div className="mb-8">
            <h3 className="text-gray-900 font-extrabold text-lg mt-0 mb-2">
              Seamless trading with secure funding options
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Fund your account quickly and securely with a variety of trusted payment methods. Our platform ensures
              your deposits and withdrawals are processed efficiently, so you can focus on trading with confidence and
              peace of mind.
            </p>
          </div>
        </FadeUp>
      </div>

      {/* Scrolling payment strip */}
      <div className="overflow-hidden w-full h-28">
        <div className="animate-scroll-strip">
          {[0, 1, 2, 3].map((i) => (
            <img
              key={i}
              src="/sample-landing/strip-b.svg"
              alt=""
              className="h-28 w-auto flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
