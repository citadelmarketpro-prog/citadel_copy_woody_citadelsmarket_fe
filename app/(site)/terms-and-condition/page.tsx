import Link from "next/link";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeUp } from "@/components/newlanding/motion";
import { getTranslations } from "next-intl/server";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function TermsAndConditionPage() {
  const t = await getTranslations("termsPage");
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
              {t("heroTitle")}
            </h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              {t("heroSub")}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Document ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeUp>
            <p className="text-sm text-gray-400 mb-10">Last Updated: November 2024</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using Citadels Market services, you acknowledge that you have
              read, understood, and agree to be bound by these Terms &amp; Conditions and all
              applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These terms apply to all visitors, users, and others who access or use our trading
              platform, including both Demo and Live trading accounts.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Account Registration and Security
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use our services, you must create an account and provide accurate, complete, and
              current information. You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your account.
            </p>
            <ul className="space-y-4 ml-6 list-none">
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Eligibility</span> — You must be at
                least 18 years of age and have the legal capacity to enter into binding contracts
                to use our services.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Account Security</span> — You agree
                to immediately notify Citadels Market of any unauthorized use of your account
                or any other breach of security. We will not be liable for any loss or damage
                arising from your failure to protect your account information.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Accurate Information</span> — You
                agree to provide true, accurate, current, and complete information about yourself
                as prompted by our registration forms and to maintain and promptly update such
                information.
              </li>
            </ul>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Trading Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citadels Market provides access to financial trading services including, but not
              limited to, equities, options, and futures contracts. All trading activities are
              subject to market conditions and our platform terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to refuse service, terminate accounts, or cancel orders at our
              sole discretion. This includes, but is not limited to, situations where we believe
              there is fraudulent activity, violation of these terms, or other unlawful conduct.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Risk Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Trading in financial instruments carries a high level of risk and may not be suitable
              for all investors. The high degree of leverage that is often obtainable in trading can
              work against you as well as for you. Before deciding to trade, you should carefully
              consider your investment objectives, level of experience, and risk appetite.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You acknowledge that you may lose some or all of your invested capital, and you should
              not invest money that you cannot afford to lose. You should be aware of all the risks
              associated with trading and seek advice from an independent financial advisor if you
              have any doubts.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Prohibited Activities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul className="space-y-3 ml-6 list-disc text-gray-700">
              <li className="leading-relaxed">Using our services for any illegal or unauthorized purpose</li>
              <li className="leading-relaxed">Attempting to interfere with, compromise, or manipulate our platform or services</li>
              <li className="leading-relaxed">Engaging in any form of market manipulation or abusive trading practices</li>
              <li className="leading-relaxed">Using automated trading systems or robots without prior written consent</li>
              <li className="leading-relaxed">Sharing your account credentials with third parties</li>
              <li className="leading-relaxed">Attempting to exploit system errors or gaps in our service</li>
            </ul>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, features, and functionality of our platform — including but not limited to
              text, graphics, logos, icons, images, software, and data compilations — are the
              exclusive property of Citadels Market and are protected by international copyright,
              trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly
              display, or exploit any of our content without our express written permission.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by applicable law, Citadels Market shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages, or
              any loss of profits or revenues, whether incurred directly or indirectly, or any loss
              of data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not guarantee that our services will be uninterrupted, timely, secure, or
              error-free. Market data, quotes, and other information provided through our platform
              may be delayed or inaccurate, and we are not responsible for any trading decisions
              made based on such information.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your account and access to our services immediately,
              without prior notice or liability, for any reason, including but not limited to breach
              of these Terms &amp; Conditions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, your right to use the services will immediately cease. If you wish
              to terminate your account, you may simply discontinue using the service and contact
              our support team to close your account properly.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Citadels Market reserves the right to modify or replace these Terms &amp;
              Conditions at any time at our sole discretion. We will provide notice of any material
              changes by posting the new terms on this page and updating the &quot;Last Updated&quot;
              date. Your continued use of our services after any such changes constitutes your
              acceptance of the new terms.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms &amp; Conditions shall be governed by and construed in accordance with
              applicable international financial regulations and the laws of the jurisdiction in
              which Citadels Market operates, without regard to its conflict of law provisions.
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction
              of the courts in that jurisdiction.
            </p>
          </FadeUp>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: darkGradient }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              {t("ctaHead")}
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto mb-8">
              {t("ctaSub")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-500 transition-colors no-underline"
              >
                {t("ctaContact")}
              </Link>
              <Link
                href="/register"
                className="inline-block px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors no-underline"
              >
                {t("ctaOpen")}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
