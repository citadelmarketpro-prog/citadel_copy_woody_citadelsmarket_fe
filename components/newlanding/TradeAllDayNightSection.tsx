import { getTranslations } from "next-intl/server";
import TradeAllDayNightScroll from "./TradeAllDayNightScroll";

export default async function TradeAllDayNightSection() {
  const t = await getTranslations("tradeAllDay");

  return (
    <TradeAllDayNightScroll
      dayTitle={t("dayTitle")}
      nightTitle={t("nightTitle")}
      subtitle={t("subtitle")}
      cta={t("cta")}
    />
  );
}
