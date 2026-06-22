import Link from "next/link";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeUp } from "@/components/newlanding/motion";
import { getTranslations } from "next-intl/server";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("privacyPage");
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
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">{t("heroTitle")}</h1>
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
            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">Personal Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you apply for or maintain a Citadels Market Demo or Live account, we collect
              personal information about you for business purposes — to evaluate your financial
              needs, to process your requests and transactions, to inform you about products and
              services that may be of interest to you, and to provide client service. You may choose
              what you will receive from us at any point by accessing the notification option in your
              account. Such information may include:
            </p>
            <ul className="space-y-4 ml-6 list-none">
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Application information</span> —
                Information that you provide on applications and other forms: your name, address,
                birth date, occupation, assets, and income.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Transaction information</span> —
                Information about your transactions with us or our affiliates, including account
                balances, trading activity, your inquiries, and our responses.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Verification information</span> —
                Information necessary to verify your identity, such as a passport or
                driver&apos;s licence. This includes background information we receive from public
                records. The USA Patriot Act requires us to collect information and take necessary
                actions to confirm your identity.
              </li>
            </ul>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Security Technology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citadels Market uses Secure Socket Layer (SSL) encryption technology to protect
              certain information that you submit. This type of technology protects you from having
              your information intercepted by anyone other than Citadels Market while it is
              being transmitted to us. We work hard to ensure that our websites are secure and that
              they meet industry standards.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also use other safeguards such as firewalls, authentication systems (e.g.,
              passwords and personal identification numbers), and access control mechanisms to
              control unauthorized access to systems and data.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Sharing Information with Our Affiliates
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share personal information described above with our affiliates for business
              purposes, such as servicing client accounts and informing clients about new products
              and services, or to aid in the trading activity of the company, its affiliates, or
              employees, and as permitted by applicable law.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our affiliates may include companies controlled or owned by us as well as companies
              that have an ownership interest in our company. The information we share with
              affiliates may include any of the information described above, such as your name,
              address, trading, and account information.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Sharing Information with Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citadels Market does not disclose your personal information to third parties,
              except as described in this policy. Third-party disclosures may include sharing such
              information with non-affiliated companies that perform support services for your
              account or facilitate your transactions with Citadels Market, including those that
              provide professional, legal, or accounting advice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Non-affiliated companies that assist Citadels Market in providing services to you
              are required to maintain the confidentiality of such information to the extent they
              receive it, and to use your personal information only in the course of providing such
              services and only for the purposes that Citadels Market dictates.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Regulatory Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              Under limited circumstances, Citadels Market may disclose your personal
              information to third parties as permitted by, or to comply with, applicable laws and
              regulations. For example, we may disclose personal information to cooperate with
              regulatory authorities and law enforcement agencies, to comply with subpoenas or other
              official requests, and as necessary to protect our rights or property.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Your Rights &amp; Opt-Out</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are not required to supply any of the personal information that we may request;
              however, failure to do so may result in our being unable to open or maintain your
              account or to provide services to you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While we make every effort to ensure that all information we hold about you is
              accurate, complete, and up to date, you can help us considerably by promptly notifying
              us if there are any changes to your personal information. To update your preferences or
              request removal of your data, please contact our support team.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cookies &amp; Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience, analyse
              platform usage, and deliver personalised content. We use both essential cookies
              necessary for platform functionality and optional cookies for analytics and marketing
              purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You can manage your cookie preferences through your browser settings. Please note that
              disabling certain cookies may affect the functionality of the platform.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or legal requirements. Any material changes will be communicated to you via
              email or through a prominent notice on our platform. Your continued use of our
              services after such notification constitutes your acceptance of the updated policy.
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
