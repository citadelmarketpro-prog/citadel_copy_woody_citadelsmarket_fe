import Image from "next/image";
import Link from "next/link";
import {
  Vault,
  Building2,
  BarChart3,
  Smartphone,
  KeyRound,
  GraduationCap,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const pillars = [
  {
    Icon: Vault,
    head: "Segregated Funds",
    body: "Client funds are held in fully segregated accounts, completely separate from company operating capital. Your money is always yours.",
  },
  {
    Icon: Building2,
    head: "Top-Tier Banks",
    body: "All client deposits are held exclusively at Tier 1 banking institutions, ensuring the highest level of financial stability and security.",
  },
  {
    Icon: BarChart3,
    head: "Capital Adequacy",
    body: "We maintain capital reserves well above regulatory minimums, guaranteeing our ability to meet all client obligations at any time.",
  },
];

const features = [
  {
    Icon: Smartphone,
    head: "Two-Factor Authentication (2FA)",
    body: "Add an extra layer of protection to your account. With 2FA enabled, every login requires a one-time code from your mobile device — even if your password is compromised, your account stays safe.",
  },
  {
    Icon: KeyRound,
    head: "One-Time Password Verification",
    body: "Sensitive account actions — withdrawals, profile changes — trigger an OTP sent to your registered email or phone. This ensures only you can authorise critical changes.",
  },
  {
    Icon: GraduationCap,
    head: "Risk Awareness & Education",
    body: "We equip our clients with the knowledge to trade responsibly. From risk disclosure documents to in-platform education, we help you make informed decisions at every step.",
  },
];

const dos = [
  "Use a strong, unique password for your Citadel Pros Market account.",
  "Enable Two-Factor Authentication (2FA) in your account settings.",
  "Verify the website URL is correct before logging in.",
  "Contact our official support if you receive suspicious communications.",
  "Keep your registered email and phone number up to date.",
  "Log out of your account when using a shared or public device.",
];

const donts = [
  "Never share your password, OTP, or 2FA code with anyone — including support staff.",
  "Do not click links in unsolicited emails claiming to be from Citadel Pros Market.",
  "Never install software or apps recommended by unsolicited callers.",
  "Do not use public Wi-Fi networks to access your trading account.",
  "Never send funds to an account you cannot independently verify.",
  "Do not ignore browser security warnings when visiting our site.",
];

export default function SecurityPage() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Security</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Your security is our top priority. We employ industry-leading encryption, multi-factor
              authentication, and continuous monitoring to keep your account and funds protected at all times.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Security Pillars ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              How we keep your funds safe
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
              Citadel Pros Market is built on a foundation of financial integrity. Every structural
              safeguard below is in place specifically to protect your capital.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <ZoomIn key={p.head} delay={0.08 * i}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <p.Icon size={24} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{p.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{p.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security of Accounts ─────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <FadeLeft className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
                Account Security
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Security of your account
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We take a multi-layered approach to securing every client account. From the moment you
                register, your data and funds are protected by advanced encryption, strict access controls,
                and continuous threat monitoring — so you can focus on trading, not on security concerns.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our security infrastructure is regularly audited by independent third-party experts to
                ensure we meet and exceed industry standards. Any vulnerability identified is patched
                immediately, and all client data is stored in compliance with global data protection regulations.
              </p>
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                Open secure account
              </Link>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/11463297.png"
                alt="Account security illustration"
                width={640}
                height={480}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Feature Cards ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Built-in protection features
            </h2>
            <p className="text-gray-500 max-w-2xl mb-12 leading-relaxed">
              Every Citadel Pros Market account comes equipped with multiple layers of active security
              tools designed to prevent unauthorised access.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ZoomIn key={f.head} delay={0.08 * i}>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 p-7 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <f.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug">{f.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{f.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Staying Safe Online ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 text-center">
              Staying safe online
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Security is a shared responsibility. Follow these guidelines to protect your account
              and avoid falling victim to fraud or phishing attacks.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DOs */}
            <FadeLeft>
              <div className="rounded-2xl bg-white border border-emerald-100 p-8 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-emerald-600" strokeWidth={2} />
                  Do&apos;s
                </h3>
                <ul className="space-y-4">
                  {dos.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-emerald-500 flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeLeft>

            {/* DON'Ts */}
            <FadeRight delay={0.1}>
              <div className="rounded-2xl bg-white border border-red-100 p-8 h-full">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <XCircle size={20} className="text-red-500" strokeWidth={2} />
                  Don&apos;ts
                </h3>
                <ul className="space-y-4">
                  {donts.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle
                        size={18}
                        className="text-red-400 flex-shrink-0 mt-0.5"
                        strokeWidth={2}
                      />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Suspicious Communications ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <FadeRight className="flex-1 rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/2512687.png"
                alt="Suspicious communications warning"
                width={640}
                height={480}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </FadeRight>

            <FadeLeft delay={0.15} className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-red-500 mb-4">
                Stay Vigilant
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                Suspicious communications
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Citadel Pros Market will <strong>never</strong> contact you unsolicited to request your
                password, OTP, or payment details. We will never ask you to install remote-access
                software or transfer funds to a &quot;safe account.&quot;
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                If you receive a phone call, email, or message claiming to be from Citadel Pros Market
                and it feels suspicious — do not engage. Hang up or close the message immediately and
                contact us through our official support channels to verify.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our official domain is always <strong>citadelmarketsprotrading.com</strong>. Any communication
                from a different domain should be treated as fraudulent.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                Contact official support
              </Link>
            </FadeLeft>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: darkGradient }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Trade with complete peace of mind
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
              Citadel Pros Market combines institutional-grade security with a seamless trading experience.
              Your funds are protected. Your data is private. Your account is yours alone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                Open free account
              </Link>
              <Link
                href="/insurance"
                className="inline-block px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors no-underline"
              >
                View insurance details
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
