import { getTranslations } from "next-intl/server";
import AssetShowcaseSection from "./AssetShowcaseSection";

export default async function ForexSection() {
  const t = await getTranslations("showcase");

  return (
    <AssetShowcaseSection
      title={t("forexTitle")}
      description={t("forexDesc")}
      learnMoreLabel={t("learnMore")}
      href="/lead-traders"
      badges={[
        { label: "EUR/USD", className: "bg-sky-300 text-gray-900" },
        { label: "USD/JPY", className: "bg-red-300 text-gray-900" },
      ]}
    />
  );
}
