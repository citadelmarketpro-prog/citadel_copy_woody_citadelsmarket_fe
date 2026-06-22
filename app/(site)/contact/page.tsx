import { Mail, Phone, MapPin } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeLeft, FadeRight, FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const phones = [
  { label: "+1 305 980 2294", region: "US" },
  { label: "+1 480 920 7528", region: "US" },
  { label: "+44 7456 277697", region: "UK" },
];

const offices = [
  {
    city: "California",
    address: "11264 Playa Court, Culver City, CA 90230, USA",
  },
  {
    city: "London",
    address: "100 Pall Mall, St. James's, London SW1Y 5NQ, United Kingdom",
  },
  {
    city: "Calgary",
    address: "Lower Mount Royal, AB T2T 5H7, Canada",
  },
];

export default async function ContactPage() {
  const t = await getTranslations("contactPage");
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

      {/* ── Contact Details + Map ────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <FadeLeft className="lg:w-80 flex-shrink-0 flex flex-col gap-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{t("getInTouch")}</h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-emerald-600" strokeWidth={1.75} />
                </div>
                <a
                  href="mailto:support@citadelsmarket.com"
                  className="text-gray-700 hover:text-emerald-600 transition-colors text-sm"
                >
                  support@citadelsmarket.com
                </a>
              </div>
              {phones.map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <span className="text-gray-700 text-sm">
                    {p.label}{" "}
                    <span className="text-gray-400 text-xs">({p.region})</span>
                  </span>
                </div>
              ))}
            </FadeLeft>

            <FadeRight delay={0.15} className="flex-1">
              <div className="w-full h-96 sm:h-[480px] rounded-2xl overflow-hidden border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8436.146411215903!2d-73.9691685184291!3d40.781649005836485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589aaaa763a7%3A0x5e9b0bf60fed4cf9!2s225%20Central%20Park%20West%2C%20New%20York%2C%20NY%2010024!5e1!3m2!1sen!2sus!4v1612426792309!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Citadels Market office location"
                />
              </div>
            </FadeRight>
          </div>
        </div>
      </section>

      {/* ── Office Locations ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">{t("ourOffices")}</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {offices.map((office, i) => (
              <ZoomIn key={office.city} delay={0.08 * i}>
                <div className="rounded-2xl border border-gray-100 bg-white p-8 h-full flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                    <MapPin size={22} className="text-emerald-600" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{office.city}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
