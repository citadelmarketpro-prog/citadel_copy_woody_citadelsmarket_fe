import { renderSocialImage, OG_SIZE } from "./og-shared";

export const runtime = "edge";
export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "OsaicMarkets - Copy Futures, Options & Contracts with Precision";

export default function Image() {
  return renderSocialImage();
}
