import { getTranslations } from "next-intl/server";
import { Bitcoin, Hexagon } from "lucide-react";
import AssetShowcaseSection from "./AssetShowcaseSection";

export default async function CryptoSection() {
  const t = await getTranslations("showcase");

  return (
    <AssetShowcaseSection
      title={t("cryptoTitle")}
      description={t("cryptoDesc")}
      learnMoreLabel={t("learnMore")}
      href="/advance-trading"
      dark
      badges={[
        { label: "BTC", className: "bg-amber-400 text-gray-900", icon: Bitcoin },
        { label: "ETH", className: "bg-[#141414] text-white border border-white/20", icon: Hexagon },
      ]}
    />
  );
}
