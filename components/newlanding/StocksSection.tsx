import { getTranslations } from "next-intl/server";
import { Cpu, Package } from "lucide-react";
import AssetShowcaseSection from "./AssetShowcaseSection";

export default async function StocksSection() {
  const t = await getTranslations("showcase");

  return (
    <AssetShowcaseSection
      title={t("stocksTitle")}
      description={t("stocksDesc")}
      learnMoreLabel={t("learnMore")}
      href="/swing-trading"
      dark
      badges={[
        { label: "NVDA", className: "bg-lime-400 text-gray-900", icon: Cpu },
        { label: "AMZN", className: "bg-orange-300 text-gray-900", icon: Package },
      ]}
    />
  );
}
