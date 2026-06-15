import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const valueCards = [
  {
    bg: "/sample-landing/social-bg.jpg",
    overlay: "bg-emerald-900/80",
    head: "Corporate Governance",
    headColor: "text-white",
    body: "The Board of Directors and management of Citadel Pros Market have long recognised the importance of corporate governance practices that ensure effective oversight and strong accountability. Our goal is to generate superior financial returns for our investors by building stronger and more valuable businesses.",
    textColor: "text-white/90",
  },
  {
    bg: "/sample-landing/chat-bg.jpg",
    overlay: "",
    head: "Global Impact",
    headColor: "text-gray-900",
    body: "As a major global financial institution, we consider the effects our business has on the environment and people around the world. We strive to uncover new ways of ensuring sustainable economic growth that protects healthy markets and delivers value to our clients, communities, businesses, and governments everywhere.",
    textColor: "text-gray-700",
  },
  {
    bg: "/sample-landing/social-bg.jpg",
    overlay: "bg-emerald-900/80",
    head: "ESG Commitment",
    headColor: "text-white",
    body: "At Citadel Pros Market, we aim to accelerate the evolution of ESG on behalf of clients, investors, communities and all stakeholders — to make a positive impact on people and the planet. With our scale at the heart of the financial system, we are uniquely positioned to drive transparency, insight, and impact.",
    textColor: "text-white/90",
  },
  {
    bg: "/sample-landing/chat-bg.jpg",
    overlay: "",
    head: "Investment Philosophy",
    headColor: "text-gray-900",
    body: "We know that the best way to achieve our objective is to be disciplined in our approach. We begin by investing in portfolios that meet well-defined criteria in industries where we have relevant knowledge, then leverage our accumulated experience and work closely with managers to energise our businesses.",
    textColor: "text-gray-700",
  },
];

export default function AboutPage() {
  return (
    <div className="font-sans bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────
          bg-[#0a0a0a] provides a solid base so the fixed body::before
          gradient never bleeds through on scroll.                        */}
      <section className="relative h-72 sm:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
        {/* hero-bg accent image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/sample-landing/hero-bg.png')",
            backgroundPosition: "right center",
            backgroundSize: "500px",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          }}
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0" style={{ background: darkGradient }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <FadeUp>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">About Us</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Citadel Pros Market has been sharing financial freedom with traders since 2014 — continuously
              improving our platform so traders can enjoy and make use of that freedom wherever they are.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── About content ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">

            <FadeLeft className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Time to take action with the international Citadel Pros Market broker
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Trading will bring you profit with proper support, constant education, and a reasonable approach.
                Citadel Pros Market is a broker platform that has created all the conditions to help you improve
                your trading life in every possible way.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                From educational broker&apos;s tools, demo accounts, and 24/7 support to your financial success,
                Citadel Pros Market works tirelessly to remain at the forefront of online trading. Join now and
                take full advantage of this online trading leader to make your way into the world of professional
                trading.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our people are our greatest asset. It is only with the determination and dedication of our team
                that we can serve our clients, generate long-term value for our shareholders, and contribute to
                the broader public. At every step of our employees&apos; careers we invest in them, ensuring their
                interests remain aligned with those of our clients and shareholders.
              </p>
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline w-fit"
              >
                Open free account
              </Link>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1">
              <div className="w-full min-h-[320px] h-full rounded-2xl overflow-hidden">
                <Image
                  src="/sample-landing/pexels-vlada-karpovich-7433853.jpg"
                  alt="Citadel Pros Market trading team"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeRight>

          </div>
        </div>
      </section>

      {/* ── Our Values ─────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Values</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {valueCards.map((card, i) => (
              <ZoomIn key={card.head} delay={0.08 * i}>
                <div
                  className="relative rounded-2xl overflow-hidden min-h-64 flex flex-col"
                  style={{
                    backgroundImage: `url('${card.bg}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {card.overlay && (
                    <div className={`absolute inset-0 ${card.overlay}`} />
                  )}
                  <div className="relative z-10 p-8 flex flex-col gap-3">
                    <h3 className={`font-extrabold text-sm uppercase tracking-widest ${card.headColor}`}>
                      {card.head}
                    </h3>
                    <p className={`text-sm leading-relaxed m-0 ${card.textColor}`}>{card.body}</p>
                  </div>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Risk Management / Core Mission ─────────────────────────────── */}
      <section className="py-16 sm:py-24" style={{ background: darkGradient }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">

            <ZoomIn className="flex-1 flex justify-center items-center bg-white/5 border border-white/10 rounded-2xl p-12">
              <Image
                src="/images/logo_light.png"
                alt="Citadel Pros Market"
                width={280}
                height={100}
                className="w-auto h-20 object-contain"
              />
            </ZoomIn>

            <FadeRight delay={0.15} className="flex-[2]">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                Risk Management at the Center
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We seek to manage risk in order to capitalise on opportunities and improve our performance.
                Disciplined risk estimation and management are deeply integrated components of the investment
                process across each of our strategies. We believe a well-constructed portfolio upfront will
                outperform in good markets and protect our clients&apos; capital in difficult markets.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Citadel Pros Market, we advance sustainable economic growth and financial opportunity. Drawing
                on years of experience working with the world&apos;s leading businesses, entrepreneurs, and
                institutions, we mobilise our people, culture, technologies, and ideas to advance the success of
                our clients. Our purpose comes to life through four core values:{" "}
                <strong className="text-white">Client Service</strong>,{" "}
                <strong className="text-white">Excellence</strong>,{" "}
                <strong className="text-white">Integrity</strong>, and{" "}
                <strong className="text-white">Partnership</strong>.
              </p>
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline w-fit"
              >
                Join Citadel Pros Market
              </Link>
            </FadeRight>

          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
