import { FadeUp, FadeLeft } from "./motion";

const darkGradient =
  "linear-gradient(transparent 0%,#000 95%),radial-gradient(194.14% 91.43% at 2.43% 88.15%,rgba(10,10,10,.8) 0%,rgba(10,10,10,0) 100%),conic-gradient(from 5deg at 92.78% 73.8%,rgba(65,64,62,.4) 0deg,rgba(37,37,35,.4) 360deg),conic-gradient(from -49deg at 85.69% 75.64%,rgba(98,97,97,.3) 0deg,rgba(37,37,37,.3) 360deg),#0a0a0a";

export default function BecomeProSection() {
  return (
    <section className="py-14 sm:py-20" style={{ background: darkGradient }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <h2 className="text-2xl font-bold text-white mb-6">Become a Pro Trader</h2>
        </FadeUp>
        <FadeLeft className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            A reliable trading platform is the foundation of success
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Every trader wants to profit in the best conditions and doesn&apos;t want to fear for the safety of personal
            funds. The first obvious thing a novice trader does is to study different online trading sites.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The main criteria for a successful internet trading platform are international reputation, unwavering
            reliability, constant support at all stages, and unique useful trading features. These qualities are
            combined in the award-winning Citadel Pros Market broker and electronic trading platform.
          </p>
        </FadeLeft>
      </div>
    </section>
  );
}
