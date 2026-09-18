import { getTranslations } from "next-intl/server";
import AssetShowcaseSection from "./AssetShowcaseSection";

export default async function CommoditiesSection() {
  const t = await getTranslations("showcase");

  return (
    <AssetShowcaseSection
      title={t("commoditiesTitle")}
      description={t("commoditiesDesc")}
      learnMoreLabel={t("learnMore")}
      href="/oil-and-gas"
      badges={[
        { label: "GOLD", className: "bg-amber-400 text-gray-900" },
        { label: "SILVER", className: "bg-gray-300 text-gray-900" },
      ]}
    />
  );
}
