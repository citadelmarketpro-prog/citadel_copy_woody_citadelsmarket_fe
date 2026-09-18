import Link from "next/link";

function LogoText({ tone, className = "" }: { tone: "green" | "white"; className?: string }) {
  return (
    <span
      className={`font-extrabold tracking-tight lowercase whitespace-nowrap ${
        tone === "green" ? "text-emerald-600" : "text-white"
      } ${className}`}
    >
      citamarkets
    </span>
  );
}

/**
 * Static text logo for single-background contexts (e.g. a fixed dark navbar).
 */
export function BrandLogo({
  tone = "white",
  className = "text-2xl sm:text-3xl",
  wrapperClassName = "",
  href = "/",
}: {
  tone?: "green" | "white";
  className?: string;
  wrapperClassName?: string;
  href?: string;
}) {
  return (
    <Link href={href} className={`inline-flex items-center ${wrapperClassName}`}>
      <LogoText tone={tone} className={className} />
    </Link>
  );
}

/**
 * Logo pair that follows the app's light/dark theme (next-themes `dark` class),
 * always showing green text on a light background and white text on a dark one.
 *
 * `scheme` controls which theme class maps to which background:
 * - "standard" (most pages): no `dark` class = light bg, `dark` class = dark bg.
 * - "inverted" (auth pages / dashboard sidebar): no `dark` class = dark bg,
 *   `dark` class = light bg — these screens use the `dark` class the other way round.
 */
export function ThemedBrandLogo({
  className = "text-2xl sm:text-3xl",
  wrapperClassName = "",
  href = "/",
  scheme = "inverted",
}: {
  className?: string;
  wrapperClassName?: string;
  href?: string;
  scheme?: "standard" | "inverted";
}) {
  const noDarkTone = scheme === "standard" ? "green" : "white";
  const darkTone = scheme === "standard" ? "white" : "green";
  return (
    <>
      <Link href={href} className={`flex dark:hidden ${wrapperClassName}`}>
        <LogoText tone={noDarkTone} className={className} />
      </Link>
      <Link href={href} className={`hidden dark:flex ${wrapperClassName}`}>
        <LogoText tone={darkTone} className={className} />
      </Link>
    </>
  );
}
