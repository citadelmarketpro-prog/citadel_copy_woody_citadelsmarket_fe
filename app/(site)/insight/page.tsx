import Image from "next/image";
import {
  Smartphone,
  KeyRound,
  Lock,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const authBenefits = [
  {
    Icon: Lock,
    head: "Enhanced Security",
    body: "2FA adds an extra layer of security beyond just usernames and passwords. It requires users to provide a second form of identification, making it significantly harder for unauthorised individuals to gain access. Even if a password is compromised, an additional authentication factor is required.",
  },
  {
    Icon: AlertCircle,
    head: "Protection Against Credential Theft",
    body: "With the prevalence of data breaches and phishing attacks, username and password combinations can be easily compromised. 2FA helps mitigate the risk of credential theft by introducing a separate authentication factor that is difficult for attackers to obtain or replicate.",
  },
  {
    Icon: RefreshCw,
    head: "Time-Based One-Time Passwords",
    body: "Mobile authenticator apps generate time-based one-time passwords (TOTPs) that are unique for each login attempt. These passwords are typically valid for only a short period, making them difficult for attackers to intercept or guess — significantly reducing the risk of unauthorised access.",
  },
  {
    Icon: Smartphone,
    head: "Convenience & User-Friendly Experience",
    body: "Mobile authenticator apps are typically easy to use and offer a convenient way to generate verification codes. Users can quickly access the app on their smartphones and retrieve the code required for authentication, eliminating the need to wait for codes sent via SMS or email.",
  },
];

export default function InsightPage() {
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Insight</h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Account security is as important as your trading strategy. Here is what you need to
              know to keep your Citadel Pros Market account safe.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Two-Factor Authentication ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            <FadeLeft className="flex-1 flex flex-col justify-center gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Two-Factor Authentication
              </h2>
              <h3 className="text-xl font-semibold text-gray-700 leading-snug">
                Two-factor authentication (2FA) is an essential security measure for financial
                services to protect user accounts and transactions.
              </h3>
              <p className="text-gray-600 leading-relaxed">
                It adds an extra layer of security by requiring users to provide two forms of
                identification before accessing their accounts. This means that even if an attacker
                obtains your password, they still cannot log in without the second factor — typically
                a time-sensitive code generated on your phone.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At Citadel Pros Market, we strongly recommend enabling 2FA on your account. It is
                one of the most effective steps you can take to protect your portfolio and personal
                information from unauthorised access.
              </p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <KeyRound size={20} className="text-emerald-600" strokeWidth={1.75} />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Enable 2FA in your account settings under Security &rarr; Two-Factor Authentication.
                </p>
              </div>
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1 min-h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="/sample-landing/5191079.jpg"
                alt="Two-factor authentication"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-2xl"
              />
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Why 2FA Matters ──────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Why 2FA Matters
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
              Financial accounts are high-value targets for attackers. Two-factor authentication
              addresses the most common attack vectors and gives you meaningful protection even when
              passwords are compromised.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {authBenefits.map((item, i) => (
              <ZoomIn key={item.head} delay={0.07 * i}>
                <div className="rounded-2xl bg-white border border-gray-100 p-8 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <item.Icon size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{item.head}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.body}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommended Apps ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Setting Up Your Authenticator
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  To get started with 2FA on your Citadel Pros Market account, you will need a
                  mobile authenticator app. The most widely used and trusted apps include Google
                  Authenticator and Microsoft Authenticator, both of which are available for free on
                  iOS and Android.
                </p>
                <p>
                  Once installed, navigate to your account security settings and select
                  Two-Factor Authentication. You will be shown a QR code which you scan with your
                  authenticator app. From that point forward, every login will require you to enter
                  the six-digit code shown in the app — a code that changes every 30 seconds and
                  cannot be reused.
                </p>
                <p>
                  Keep a secure backup of your recovery codes in case you lose access to your device.
                  These codes are provided during setup and allow you to regain access to your account
                  without your authenticator app. Store them somewhere safe and offline — never in the
                  same place as your password.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
