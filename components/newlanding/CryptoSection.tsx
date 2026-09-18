import { getTranslations } from "next-intl/server";
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
      reverse
      badges={[
        { label: "BTC", className: "bg-amber-400 text-gray-900" },
        { label: "ETH", className: "bg-[#141414] text-white border border-white/20" },
      ]}
    />
  );
}
