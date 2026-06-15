import Image from "next/image";
import { ZoomIn } from "./motion";

export default function TradeEverywhereSection() {
  return (
    <section>
      <ZoomIn>
        <Image
          src="/sample-landing/trade_everywhere.webp"
          alt="Trade Anywhere"
          width={1920}
          height={600}
          className="w-full h-auto"
        />
      </ZoomIn>
    </section>
  );
}
