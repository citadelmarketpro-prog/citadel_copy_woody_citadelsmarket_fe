import { Clock, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/newlanding/Navbar";
import SiteFooter from "@/components/newlanding/SiteFooter";
import { FadeUp, ZoomIn } from "@/components/newlanding/motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

const maintenanceWindows = [
  { name: "Trading Platform", window: "09:00 AM – 01:00 PM GMT+2" },
  { name: "Mobile Platform", window: "09:00 AM – 01:00 PM GMT+2" },
  { name: "Core Systems", window: "09:00 AM – 01:00 PM GMT+2" },
  { name: "Trading API", window: "09:00 AM – 01:00 PM GMT+2" },
];

const services = [
  { name: "Trading Platform" },
  { name: "Mobile App" },
  { name: "Web Portal" },
  { name: "APIs" },
  { name: "Connectivity" },
  { name: "Funding" },
  { name: "Copy Trading" },
  { name: "Support" },
  { name: "Client Portal" },
];

export default function SystemStatusPage() {
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
              System Status
            </h1>
            <p className="text-gray-300 text-base max-w-xl leading-relaxed">
              Find out if there are any planned or unplanned outages to our systems. If you need
              any assistance, please contact us.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Weekly Server Maintenance ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Weekly Server Maintenance
            </h2>
            <p className="text-gray-500 text-base mb-10 max-w-2xl">
              Scheduled maintenance is performed weekly during the window below. Services may be
              briefly unavailable during this period.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {maintenanceWindows.map((item, i) => (
              <ZoomIn key={item.name} delay={0.07 * i}>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-amber-500" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{item.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.window}</p>
                </div>
              </ZoomIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Status Grid ───────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Citadel Pros Market System Status
            </h2>
            <p className="text-gray-500 text-base mb-10 max-w-2xl">
              Live status of all Citadel Pros Market services and infrastructure components.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, i) => (
              <ZoomIn key={service.name} delay={0.05 * i}>
                <div className="rounded-xl border border-gray-100 bg-white px-6 py-5 flex items-center justify-between gap-4 hover:shadow-sm transition-shadow">
                  <h3 className="font-semibold text-gray-900 text-sm">{service.name}</h3>
                  <span className="flex items-center gap-1.5 text-emerald-600 text-sm font-medium flex-shrink-0">
                    <CheckCircle2 size={16} strokeWidth={2} />
                    Operational
                  </span>
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
