"use client";

import React, { useState, useEffect, useMemo, useRef, Suspense } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { motion } from "framer-motion";
import countryList from "react-select-country-list";
import { Eye, EyeOff, Sun, Moon, Gift, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { PulseLoader } from "react-spinners";
import { BACKEND_URL } from "@/lib/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

// ----------------------
// Dial code map (ISO2 → calling code)
// ----------------------
const DIAL_CODES: Record<string, string> = {
  AF: "+93",  AL: "+355", DZ: "+213", AD: "+376", AO: "+244",
  AG: "+1",   AR: "+54",  AM: "+374", AU: "+61",  AT: "+43",
  AZ: "+994", BS: "+1",   BH: "+973", BD: "+880", BB: "+1",
  BY: "+375", BE: "+32",  BZ: "+501", BJ: "+229", BT: "+975",
  BO: "+591", BA: "+387", BW: "+267", BR: "+55",  BN: "+673",
  BG: "+359", BF: "+226", BI: "+257", CV: "+238", KH: "+855",
  CM: "+237", CA: "+1",   CF: "+236", TD: "+235", CL: "+56",
  CN: "+86",  CO: "+57",  KM: "+269", CG: "+242", CD: "+243",
  CR: "+506", HR: "+385", CU: "+53",  CY: "+357", CZ: "+420",
  DK: "+45",  DJ: "+253", DM: "+1",   DO: "+1",   EC: "+593",
  EG: "+20",  SV: "+503", GQ: "+240", ER: "+291", EE: "+372",
  SZ: "+268", ET: "+251", FJ: "+679", FI: "+358", FR: "+33",
  GA: "+241", GM: "+220", GE: "+995", DE: "+49",  GH: "+233",
  GR: "+30",  GD: "+1",   GT: "+502", GN: "+224", GW: "+245",
  GY: "+592", HT: "+509", HN: "+504", HU: "+36",  IS: "+354",
  IN: "+91",  ID: "+62",  IR: "+98",  IQ: "+964", IE: "+353",
  IL: "+972", IT: "+39",  JM: "+1",   JP: "+81",  JO: "+962",
  KZ: "+7",   KE: "+254", KI: "+686", KP: "+850", KR: "+82",
  KW: "+965", KG: "+996", LA: "+856", LV: "+371", LB: "+961",
  LS: "+266", LR: "+231", LY: "+218", LI: "+423", LT: "+370",
  LU: "+352", MG: "+261", MW: "+265", MY: "+60",  MV: "+960",
  ML: "+223", MT: "+356", MH: "+692", MR: "+222", MU: "+230",
  MX: "+52",  FM: "+691", MD: "+373", MC: "+377", MN: "+976",
  ME: "+382", MA: "+212", MZ: "+258", MM: "+95",  NA: "+264",
  NR: "+674", NP: "+977", NL: "+31",  NZ: "+64",  NI: "+505",
  NE: "+227", NG: "+234", NO: "+47",  OM: "+968", PK: "+92",
  PW: "+680", PA: "+507", PG: "+675", PY: "+595", PE: "+51",
  PH: "+63",  PL: "+48",  PT: "+351", QA: "+974", RO: "+40",
  RU: "+7",   RW: "+250", KN: "+1",   LC: "+1",   VC: "+1",
  WS: "+685", SM: "+378", ST: "+239", SA: "+966", SN: "+221",
  RS: "+381", SC: "+248", SL: "+232", SG: "+65",  SK: "+421",
  SI: "+386", SB: "+677", SO: "+252", ZA: "+27",  SS: "+211",
  ES: "+34",  LK: "+94",  SD: "+249", SR: "+597", SE: "+46",
  CH: "+41",  SY: "+963", TW: "+886", TJ: "+992", TZ: "+255",
  TH: "+66",  TL: "+670", TG: "+228", TO: "+676", TT: "+1",
  TN: "+216", TR: "+90",  TM: "+993", TV: "+688", UG: "+256",
  UA: "+380", AE: "+971", GB: "+44",  US: "+1",   UY: "+598",
  UZ: "+998", VU: "+678", VE: "+58",  VN: "+84",  YE: "+967",
  ZM: "+260", ZW: "+263",
};

// ----------------------
// Types
// ----------------------
interface CountryOption {
  value: string;
  label: string;
  flag: string;
}

// ----------------------
// Validation Schema
// ----------------------
const registerSchema = z.object({
  firstName: z.string({ required_error: "First name is required" }).min(1, "First name is required"),
  lastName: z.string({ required_error: "Last name is required" }).min(1, "Last name is required"),
  email: z.string({ required_error: "Email is required" }).email("Enter a valid email address"),
  phone: z
    .string({ required_error: "Phone number is required" })
    .min(4, "Enter a valid phone number"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
  agreeToTerms: z.any().refine((val) => val === true, {
    message: "You must agree to the Terms and Conditions to continue",
  }),
  referralCode: z.string().optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

// ----------------------
// Main Component wrapped in Suspense
// ----------------------
function RegisterPageContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [referralCode, setReferralCode] = useState<string>("");
  const [referralValid, setReferralValid] = useState<boolean | null>(null);
  const [referrerName, setReferrerName] = useState<string>("");

  // Phone state
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneIso, setPhoneIso] = useState("US");
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);
  const [phoneSearch, setPhoneSearch] = useState("");
  const phoneDropdownRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const watchedValues = watch();

  // Country options with flags
  const countryOptions: CountryOption[] = useMemo(() => {
    return countryList()
      .getData()
      .map((country) => ({
        value: country.value,
        label: country.label,
        flag: country.value.toLowerCase(),
      }));
  }, []);

  // Close phone dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(e.target as Node)) {
        setShowPhoneDropdown(false);
        setPhoneSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filtered countries for phone dropdown search
  const filteredPhoneCountries = useMemo(() => {
    const q = phoneSearch.toLowerCase();
    return countryOptions.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        (DIAL_CODES[c.value.toUpperCase()] || "").includes(q)
    );
  }, [countryOptions, phoneSearch]);

  // Handle referral code from URL
  useEffect(() => {
    if (typeof window === "undefined") return;
    const refParam = searchParams.get("ref");
    if (refParam) {
      const upperRef = refParam.trim().toUpperCase();
      setReferralCode(upperRef);
      setValue("referralCode", upperRef);
      localStorage.setItem("referral_code", upperRef);
      validateReferralCode(upperRef);
    } else {
      const storedRef = localStorage.getItem("referral_code");
      if (storedRef) {
        setReferralCode(storedRef);
        setValue("referralCode", storedRef);
        validateReferralCode(storedRef);
      }
    }
  }, [searchParams, setValue]);

  const validateReferralCode = async (code: string) => {
    if (!code) { setReferralValid(null); return; }
    try {
      const response = await fetch(`${BACKEND_URL}/referral/validate/?code=${code}`);
      const data = await response.json();
      if (data.success && data.valid) {
        setReferralValid(true);
        setReferrerName(data.referrer.name);
      } else {
        setReferralValid(false);
        setReferrerName("");
      }
    } catch {
      setReferralValid(false);
    }
  };

  // Auto-detect country via IP
  useEffect(() => {
    if (typeof window === "undefined") return;
    async function fetchCountry() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        if (data.country_calling_code) {
          localStorage.setItem("country_calling_code", data.country_calling_code);
        }
        if (data.country_code) {
          setPhoneIso(data.country_code.toUpperCase());
        }
      } catch {
        // silent
      }
    }
    fetchCountry();
  }, []);

  const onSubmit = async (data: RegisterFormData) => {
    setLoading(true);
    setMessage(null);
    try {
      const dialCode = DIAL_CODES[phoneIso] || localStorage.getItem("country_calling_code") || "";
      const fullPhone = `${dialCode}${phoneNumber}`;
      const countryLabel = countryOptions.find(
        (c) => c.value.toUpperCase() === phoneIso
      )?.label || "";

      const payload = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password,
        country: countryLabel,
        referral_code: referralCode || undefined,
        country_calling_code: dialCode,
        phone: fullPhone,
      };

      const res = await fetch(`${BACKEND_URL}/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!res.ok) {
        let errorMessage = "Registration failed. Please try again.";
        if (result?.error) {
          errorMessage = Array.isArray(result.error)
            ? result.error.join(" ")
            : result.error;
        }
        throw new Error(errorMessage);
      }

      setMessage("✅ Registration successful! Redirecting...");
      if (typeof window !== "undefined") {
        localStorage.setItem("authToken", result.token);
        if (result.user?.country_calling_code) {
          localStorage.setItem("country_calling_code", result.user.country_calling_code);
        }
        localStorage.removeItem("referral_code");
      }
      setTimeout(() => router.push("/onboarding"), 1500);
    } catch (error: unknown) {
      setMessage(`❌ ${error instanceof Error ? error.message : "Something went wrong."}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => setMounted(true), []);

  const currentDialCode = DIAL_CODES[phoneIso] || "+?";

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-10 bg-[#090909] dark:bg-white text-white dark:text-black transition-colors duration-300">
      {/* Left side: Register Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm space-y-6 flex flex-col"
        >
          {/* Logo */}
          <Link href="/" className="hidden dark:flex self-center">
            <Image alt="logo" src="/images/logo_dark.png" className="h-20 w-auto" width={400} height={120} />
          </Link>
          <Link href="/" className="flex dark:hidden self-center">
            <Image alt="logo" src="/images/logo_light.png" className="h-20 w-auto" width={400} height={120} />
          </Link>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="p-2 ml-auto rounded-md border fixed top-5 right-1 border-gray-700 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
            >
              {theme === "light" ? <Moon className="w-4 h-4 text-emerald-500" /> : <Sun className="w-4 h-4 text-emerald-400" />}
            </button>
          )}

          {/* Referral Banner */}
          {referralCode && referralValid && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-lg p-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-500/20 rounded-full">
                  <Gift className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-700">🎉 Referred by {referrerName}!</p>
                  <p className="text-xs text-emerald-700 dark:text-emerald-600">You&apos;ll get special bonuses when you join</p>
                </div>
              </div>
            </motion.div>
          )}

          {referralCode && referralValid === false && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/30 rounded-lg p-4"
            >
              <p className="text-sm text-red-700 dark:text-red-600">❌ Invalid referral code</p>
            </motion.div>
          )}

          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Let&apos;s Get Started In Less Than A Minute.</h1>
            <p className="text-left text-sm mt-4">
              Already have an account?{" "}
              <Link href="/login" className="uppercase text-emerald-500 hover:underline">Log In</Link>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First & Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <input
                  id="firstName" type="text" {...register("firstName")}
                  className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent focus:outline-none transition-all ${errors.firstName ? "border-red-500" : "border-gray-700 dark:border-gray-400"}`}
                  placeholder=" "
                />
                <label htmlFor="firstName"
                  className={`absolute left-3 text-gray-400 dark:text-gray-500 transition-all pointer-events-none ${watchedValues.firstName ? "text-xs top-1" : "peer-focus:text-xs peer-focus:top-1 top-3"}`}
                >First Name</label>
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message as string}</p>}
              </div>
              <div className="relative flex-1">
                <input
                  id="lastName" type="text" {...register("lastName")}
                  className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent focus:outline-none transition-all ${errors.lastName ? "border-red-500" : "border-gray-700 dark:border-gray-400"}`}
                  placeholder=" "
                />
                <label htmlFor="lastName"
                  className={`absolute left-3 text-gray-400 dark:text-gray-500 transition-all pointer-events-none ${watchedValues.lastName ? "text-xs top-1" : "peer-focus:text-xs peer-focus:top-1 top-3"}`}
                >Last Name</label>
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message as string}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                id="email" type="email" {...register("email")}
                className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent focus:outline-none transition-all ${errors.email ? "border-red-500" : "border-gray-700 dark:border-gray-400"}`}
                placeholder=" "
              />
              <label htmlFor="email"
                className={`absolute left-3 text-gray-400 dark:text-gray-500 transition-all pointer-events-none ${watchedValues.email ? "text-xs top-1" : "peer-focus:text-xs peer-focus:top-1 top-3"}`}
              >Email</label>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
            </div>

            {/* ── Phone Number ──────────────────────────────────────────── */}
            <div className="relative" ref={phoneDropdownRef}>
              <div className={`flex border rounded-md overflow-visible transition-colors focus-within:border-emerald-500 ${errors.phone ? "border-red-500" : "border-gray-700 dark:border-gray-400"}`}>
                {/* Flag + dial code selector */}
                <button
                  type="button"
                  onClick={() => { setShowPhoneDropdown((v) => !v); setPhoneSearch(""); }}
                  className="flex items-center gap-1.5 px-3 py-3 border-r border-gray-700 dark:border-gray-400 hover:bg-white/5 dark:hover:bg-gray-100 transition-colors flex-shrink-0"
                >
                  <span className={`fi fi-${phoneIso.toLowerCase()} text-base`} />
                  <span className="text-sm text-gray-300 dark:text-gray-600 font-mono">{currentDialCode}</span>
                  <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${showPhoneDropdown ? "rotate-180" : ""}`} />
                </button>

                {/* Phone number input */}
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^\d\s\-()]/g, "");
                    setPhoneNumber(val);
                    setValue("phone", val, { shouldValidate: true });
                  }}
                  placeholder="Phone number"
                  className="flex-1 px-3 py-3 bg-transparent text-sm focus:outline-none placeholder-gray-500 dark:placeholder-gray-400 text-white dark:text-black"
                />
              </div>

              {/* Country dial code dropdown */}
              {showPhoneDropdown && (
                <div className="absolute top-full left-0 mt-1 w-full z-50 rounded-md shadow-xl overflow-hidden border border-gray-700 dark:border-gray-200 bg-[#1a1a1a] dark:bg-white">
                  {/* Search */}
                  <div className="p-2 border-b border-gray-700 dark:border-gray-200">
                    <input
                      type="text"
                      value={phoneSearch}
                      onChange={(e) => setPhoneSearch(e.target.value)}
                      placeholder="Search country or code…"
                      className="w-full px-3 py-1.5 rounded-md bg-white/10 dark:bg-gray-100 text-sm text-white dark:text-black placeholder-gray-500 focus:outline-none"
                      autoFocus
                    />
                  </div>

                  {/* Country list */}
                  <div className="max-h-52 overflow-y-auto">
                    {filteredPhoneCountries.slice(0, 100).map((c) => {
                      const code = DIAL_CODES[c.value.toUpperCase()];
                      if (!code) return null;
                      const isActive = c.value.toUpperCase() === phoneIso;
                      return (
                        <button
                          key={c.value}
                          type="button"
                          onClick={() => {
                            setPhoneIso(c.value.toUpperCase());
                            setShowPhoneDropdown(false);
                            setPhoneSearch("");
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2 text-sm text-left transition-colors ${
                            isActive
                              ? "bg-emerald-600 text-white"
                              : "hover:bg-white/10 dark:hover:bg-gray-100 text-gray-200 dark:text-gray-800"
                          }`}
                        >
                          <span className={`fi fi-${c.flag} text-base flex-shrink-0`} />
                          <span className="flex-1 truncate">{c.label}</span>
                          <span className={`font-mono text-xs flex-shrink-0 ${isActive ? "text-white" : "text-gray-400 dark:text-gray-500"}`}>{code}</span>
                        </button>
                      );
                    })}
                    {filteredPhoneCountries.length === 0 && (
                      <p className="px-4 py-3 text-sm text-gray-500">No results</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm -mt-4">{errors.phone.message}</p>
            )}

            {/* Password */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent focus:outline-none transition-all ${errors.password ? "border-red-500" : "border-gray-700 dark:border-gray-400"}`}
                placeholder=" "
              />
              <label htmlFor="password"
                className={`absolute left-3 text-gray-400 dark:text-gray-500 transition-all pointer-events-none ${watchedValues.password ? "text-xs top-1" : "peer-focus:text-xs peer-focus:top-1 top-3"}`}
              >Password</label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-400 dark:text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message as string}</p>}
            </div>

            <input type="hidden" {...register("referralCode")} />

            {/* Submit */}
            <Button type="submit" disabled={loading} className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-6 rounded-md">
              {!loading ? <span>Create Account</span> : <PulseLoader color="#fff" size={15} />}
            </Button>

            <div className="space-y-1">
              <div className="flex items-start gap-2 text-sm">
                <Controller
                  name="agreeToTerms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="terms"
                      checked={field.value === true}
                      onCheckedChange={(checked) => field.onChange(checked === true)}
                      className={`mt-0.5 flex-shrink-0 ${errors.agreeToTerms ? "border-red-500" : ""}`}
                    />
                  )}
                />
                <label htmlFor="terms" className="cursor-pointer leading-snug">
                  By signing up you agree to{" "}
                  <Link href="/terms-and-condition" className="text-emerald-500 hover:underline">Terms and Condition</Link>{" "}
                  &{" "}
                  <Link href="/privacy-policy" className="text-emerald-500 hover:underline">Privacy Policy</Link>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-500 text-xs pl-6">{errors.agreeToTerms.message}</p>
              )}
            </div>

            {message && (
              <p className={`text-center text-sm ${message.startsWith("✅") ? "text-green-500" : "text-red-500"}`}>
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Right side visual */}
      <div className="md:flex flex-1 items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-950 dark:from-emerald-800 dark:to-emerald-900 p-8 rounded-l-3xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md flex flex-col items-center text-center text-white space-y-6"
        >
          <h2 className="text-2xl font-semibold">Join millions of traders worldwide</h2>
          <div className="relative w-full aspect-square overflow-hidden">
            <Image src="/images/trusted.webp" alt="Trading Community" width={825} height={770} className="object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <RegisterPageContent />
    </Suspense>
  );
}
