import { getTranslations } from "next-intl/server";
import { Activity, ShoppingBasket } from "lucide-react";
import AssetShowcaseSection from "./AssetShowcaseSection";

export default async function DerivedIndicesSection() {
  const t = await getTranslations("showcase");

  return (
    <AssetShowcaseSection
      title={t("indicesTitle")}
      description={t("indicesDesc")}
      learnMoreLabel={t("learnMore")}
      href="/option-copy-trading"
      badges={[
        { label: "VOL 100", className: "bg-emerald-400 text-gray-900", icon: Activity },
        { label: "USD BASKET", className: "bg-sky-300 text-gray-900", icon: ShoppingBasket },
      ]}
    />
  );
}
