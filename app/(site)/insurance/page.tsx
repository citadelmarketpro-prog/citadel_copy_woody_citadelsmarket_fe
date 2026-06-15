import Link from "next/link";
import { Landmark, TrendingUp, BadgeCheck, ShieldCheck } from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const securityPillars = [
  {
    head: "Segregated Client Accounts",
    body: "We maintain separate client accounts without merging company investments. Giving our clients the ultimate investment safety at all times.",
    Icon: Landmark,
  },
  {
    head: "US $32 Million Paid-Out Capitals",
    body: "Due to our accumulated paid-up capital, we are globally recognised as one of the largest online financial derivatives providers.",
    Icon: TrendingUp,
  },
  {
    head: "B Rated with S&P",
    body: "Rated by Standard & Poor's, confirming our ability to meet our financial commitments and uphold the highest standards of fiscal responsibility.",
    Icon: BadgeCheck,
  },
  {
    head: "Tier 1 Banking",
    body: "We want you to have peace of mind when it comes to where your funds are kept, so all our clients' capital is stored in Tier 1 banks.",
    Icon: ShieldCheck,
  },
];

const membershipDetails = [
  { label: "Compensation Fund", value: "US $1,000,000.00 per complaint" },
  { label: "Date of Membership", value: "27/08/2022" },
  { label: "Membership Status", value: "Active", highlight: true },
];

export default function InsurancePage() {
  return (
    <div className="font-sans bg-white">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-72 sm:h-80 flex items-end overflow-hidden bg-[#0a0a0a]">
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
        <div className="absolute inset-0" style={{ background: darkGradient }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <FadeUp>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Insurance</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Your security is our top priority. Protecting your funds and personal data is of paramount
              importance to us. That is why we employ the latest security protocols, so you can trade with
              confidence.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Security Pillars ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              How we protect your investments
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityPillars.map((pillar, i) => (
              <ZoomIn key={pillar.head} delay={0.08 * i}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <pillar.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{pillar.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{pillar.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financial Commission Member ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
              We are a Financial Commission member
            </h2>
          </FadeUp>
          <div className="flex flex-col lg:flex-row gap-10 items-stretch">

            <FadeRight delay={0.15} className="flex-1 flex flex-col justify-center">
              <p className="text-gray-700 leading-relaxed mb-6">
                Being a member of the Financial Commission, we are able to offer you and all our clients an
                extra layer of security. This is in addition to our existing high level of safety, including
                using the latest security protocols to protect clients&apos; data and funds.
              </p>

              <div className="rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-200">
                {membershipDetails.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-5 py-4 bg-white">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span
                      className={`text-sm font-semibold ${
                        item.highlight ? "text-emerald-600" : "text-gray-900"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/register"
                className="inline-block mt-8 px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline w-fit"
              >
                Open free account
              </Link>
            </FadeRight>

          </div>
        </div>
      </section>

      {/* ── Compliance Statement ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: darkGradient }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Regulated, secure, and transparent
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
              Citadel Pros Market operates under strict regulatory oversight and maintains the highest standards
              of financial security. Our commitment to compliance ensures that every transaction you make is
              protected by industry-leading safeguards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                Start trading safely
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors no-underline"
              >
                Learn more about us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
