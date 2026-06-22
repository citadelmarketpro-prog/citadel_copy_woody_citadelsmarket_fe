import Link from "next/link";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeUp } from "@/components/newlanding/motion";
import { getTranslations } from "next-intl/server";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default async function AmlPolicyPage() {
  const t = await getTranslations("amlPage");
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
            <p className="text-sm text-gray-400 mb-10">Last Updated: November 2024</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">About This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citadels Market is a global financial services provider regulated by the SEC
              (CRD 298461), the FCA in the United Kingdom (Reference Number 573263), and CIRO
              (Reference Number 9290). The Company may extend its services to various regions,
              including the European Economic Area (&quot;EEA&quot;) countries.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This Anti-Money Laundering (AML) Policy sets out the measures Citadels Market
              takes to detect, prevent, and report money laundering and the financing of terrorism.
              All employees, officers, and associated persons are required to comply fully with this
              policy. Failure to do so may result in disciplinary action or referral to the relevant
              authorities.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Customer Due Diligence (KYC)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In compliance with anti-money laundering (AML) and know your customer (KYC)
              regulations, Citadels Market requires all clients to complete identity
              verification before accessing live trading services. By creating an account, you
              consent to providing identity verification documents and authorize us to verify your
              identity through third-party verification services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This may include background checks, credit checks, and verification of your identity
              documents with government databases and other authoritative sources. Failure to
              complete identity verification may result in restrictions or termination of your
              account.
            </p>
            <ul className="space-y-4 ml-6 list-none">
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Identity verification</span> —
                Government-issued photo ID (passport or national ID card) and proof of address
                issued within the last three months.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Source of funds</span> — For
                larger deposits, we may request documentation evidencing the origin of funds to
                ensure they are not proceeds of criminal activity.
              </li>
              <li className="text-gray-700 leading-relaxed">
                <span className="font-semibold text-gray-900">Enhanced due diligence</span> —
                Higher-risk clients, including politically exposed persons (PEPs), are subject to
                enhanced due diligence procedures and ongoing monitoring.
              </li>
            </ul>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Data Collection &amp; Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You expressly consent to Citadels Market processing your personal data for the
              purposes of providing our services, including but not limited to account management,
              transaction processing, identity verification, fraud prevention, and regulatory
              compliance. This includes:
            </p>
            <ul className="space-y-3 ml-6 list-disc text-gray-700">
              <li className="leading-relaxed">Collecting and storing your personal identification documents</li>
              <li className="leading-relaxed">Processing your financial information and transaction history</li>
              <li className="leading-relaxed">Analysing your trading patterns for security and compliance purposes</li>
              <li className="leading-relaxed">Sharing your information with regulatory authorities when required by law</li>
              <li className="leading-relaxed">Using secure third-party service providers to facilitate our services</li>
            </ul>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Risk Assessment</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citadels Market conducts regular risk assessments to identify and evaluate the
              money laundering and terrorist financing risks associated with our products, services,
              clients, and geographic exposure. Risk ratings are assigned to all client accounts
              and are reviewed on an ongoing basis.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Past performance displayed by traders is not necessarily indicative of future
              outcomes. All trading activities are subject to market risk, and clients should be
              aware that the high degree of leverage obtainable in trading can work against you as
              well as for you. All client funds are held in segregated accounts and are not used
              for operational purposes.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Conflict of Interest Controls
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citadels Market is committed to maintaining the highest standards of integrity
              and fairness. We identify, manage, and mitigate potential conflicts of interest that
              may arise between our interests and those of our clients.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate measures including disclosure, information barriers, and
              segregation of duties. Where conflicts cannot be adequately managed, we may decline
              to provide certain services to protect client interests.
            </p>
            <p className="text-gray-700 leading-relaxed">
              All employees are subject to strict personal trading policies and must obtain prior
              approval for personal trading activities. Employees may not use confidential client
              information for personal benefit or trade in instruments where they hold non-public
              information.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Monitoring &amp; Suspicious Activity Reporting
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Citadels Market maintains ongoing transaction monitoring systems designed to
              detect unusual or suspicious activity. All employees are trained to recognise and
              report indicators of potential money laundering, including unusual transaction
              volumes, structuring, and inconsistent account behaviour.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Where suspicious activity is identified, we are required by law to file a Suspicious
              Activity Report (SAR) with the relevant financial intelligence unit. We are prohibited
              from tipping off the subject of a SAR filing. Our compliance team reviews all flagged
              transactions and escalates to regulatory authorities where appropriate.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Record Keeping</h2>
            <p className="text-gray-700 leading-relaxed">
              We maintain detailed records of all client identification documents, transaction
              history, due diligence assessments, and suspicious activity reports for a minimum of
              five years from the end of the client relationship, or such longer period as required
              by applicable law. These records are available for review by regulatory authorities
              upon request.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Consent to Recording &amp; Communications
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You consent to the recording and monitoring of your communications with Citadel Pros
              Market, including telephone conversations, video calls, live chat sessions, and
              electronic communications. These recordings may be used for quality assurance,
              training, dispute resolution, and regulatory compliance purposes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You also consent to receive regulatory communications including updates to our terms,
              policies, or other legal notices required by law or regulation.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Regulatory Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This AML Policy is designed to comply with all applicable regulatory requirements,
              including but not limited to the Bank Secrecy Act (BSA), the USA Patriot Act, FATF
              Recommendations, FCA rules, and CIRO guidelines. Citadels Market cooperates
              fully with regulatory authorities in their oversight of our AML compliance programme.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our AML compliance programme is reviewed and updated regularly to reflect changes in
              our business, regulatory requirements, and industry best practices. All employees
              receive AML training as part of their onboarding and ongoing professional development.
            </p>
          </FadeUp>

          <FadeUp>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Reporting Concerns &amp; Complaints
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe that Citadels Market has not adequately managed a compliance
              concern, or if you wish to report a potential AML issue, please contact us immediately
              through:
            </p>
            <ul className="space-y-3 ml-6 list-disc text-gray-700">
              <li className="leading-relaxed">Our customer support team via live chat or email</li>
              <li className="leading-relaxed">Our dedicated compliance department</li>
              <li className="leading-relaxed">Our formal complaints procedure outlined in your client agreement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              All complaints will be investigated thoroughly and promptly, and you will receive a
              written response detailing our findings and any remedial action taken.
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
                href="/regulations"
                className="inline-block px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors no-underline"
              >
                {t("ctaRegulations")}
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
