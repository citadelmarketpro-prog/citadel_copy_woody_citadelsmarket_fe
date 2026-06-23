"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff, Sun, Moon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { BACKEND_URL } from "@/lib/constants";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";
import { useTranslations } from "next-intl";
import AuthLangSwitcher from "@/components/auth/LangSwitcher";

type FormValues = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const t = useTranslations("auth");
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const loginSchema = z.object({
    email: z.string().email(t("common.invalidEmail")),
    password: z.string().min(6, t("common.passwordMin")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");

  const onSubmit = async (data: FormValues) => {
    const newData = { email: data.email, password: data.password };

    try {
      setLoading(true);

      const response = await fetch(`${BACKEND_URL}/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData),
      });

      const result = await response.json();

      if (!response.ok) {
        const backendError = result?.error || t("common.somethingWrong");
        toast.error(backendError);
        return;
      }

      if (result?.requires_2fa) {
        toast.info(t("login.twoFaCodeSent"));
        setTimeout(() => {
          router.push(`/verify-2fa?email=${encodeURIComponent(data.email)}`);
        }, 1500);
        return;
      }

      localStorage.setItem("authToken", result.token);
      toast.success(`✅ ${t("login.loginSuccess")}`);
      router.push("/portfolio");
    } catch (error) {
      console.error(error);
      toast.error(t("common.networkError"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-10 bg-[#090909] dark:bg-white text-white dark:text-black transition-colors duration-300">
      {/* Left side: Login Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm space-y-6 flex flex-col"
        >
          <Link href="/" className="hidden dark:flex self-center">
            <Image
              alt="logo"
              src={"/images/logo_dark.png"}
              className="h-20 w-auto"
              width={400}
              height={120}
            />
          </Link>
          <Link href="/" className="flex dark:hidden self-center">
            <Image
              alt="logo"
              src={"/images/logo_light.png"}
              className="h-20 w-auto"
              width={400}
              height={120}
            />
          </Link>

          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-semibold flex items-center gap-2">
              <Link href={"/"}>
                <ArrowLeft />
              </Link>
              {t("login.title")}
            </h1>

            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-md border border-gray-700 dark:border-gray-300 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4 text-emerald-500" />
                ) : (
                  <Sun className="w-4 h-4 text-emerald-400" />
                )}
              </button>
            )}
          </div>
          <div className="">
            <p className="text-gray-400 dark:text-gray-800">
              {t("login.subtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent focus:outline-none transition-all ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-700 dark:border-gray-400"
                }`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className={`absolute left-3 text-gray-400 dark:text-gray-500 transition-all pointer-events-none ${
                  emailValue
                    ? "text-xs top-1"
                    : "peer-focus:text-xs peer-focus:top-1 top-3"
                }`}
              >
                {t("common.email")}
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent focus:outline-none transition-all ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-700 dark:border-gray-400"
                }`}
                placeholder=" "
              />
              <label
                htmlFor="password"
                className={`absolute left-3 text-gray-400 dark:text-gray-500 transition-all pointer-events-none ${
                  passwordValue
                    ? "text-xs top-1"
                    : "peer-focus:text-xs peer-focus:top-1 top-3"
                }`}
              >
                {t("common.password")}
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-400 dark:text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message as string}
                </p>
              )}
            </div>

            <div className="text-sm text-emerald-500 hover:underline cursor-pointer">
              <Link
                href="/forgot-password"
                className="text-sm text-emerald-500 hover:underline"
              >
                {t("login.forgotPassword")}
              </Link>
            </div>

            <Button
              disabled={loading}
              type="submit"
              className="w-full py-6 bg-emerald-700 hover:bg-emerald-600 text-white rounded-md"
            >
              {!loading ? (
                <span>{t("login.title")}</span>
              ) : (
                <PulseLoader color="#fff" size={15} />
              )}
            </Button>

            <p className="text-center text-sm">
              {t("login.noAccount")}{" "}
              <a href="/register" className="text-emerald-500 hover:underline">
                {t("login.createAccount")}
              </a>
            </p>
          </form>

          <div className="text-left flex flex-col justify-center mx-auto gap-2 w-fit p-5 rounded-2xl">
            <Image
              src={"/trustpilot_images/logo_dark.svg"}
              width={120}
              height={120}
              alt=""
              className="dark:block hidden"
            />
            <Image
              src={"/trustpilot_images/logo.svg"}
              width={120}
              height={120}
              alt=""
              className="dark:hidden block"
            />
            <Image
              src={"/trustpilot_images/star.svg"}
              width={120}
              height={120}
              alt=""
            />
            <div className="text-[12px] text-gray-300 dark:text-gray-600">
              TrustScore <span className="font-bold">4.8</span>
            </div>
          </div>
          <div className="text-center mt-1 text-sm space-y-2.5">
            <p className="text-gray-400 dark:text-gray-700">
              Copyright &copy; {new Date().getFullYear()} Citadels Market
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                className="text-emerald-500 hover:underline"
                href={"/privacy-policy"}
              >
                {t("common.privacyPolicy")}
              </Link>
              <Link
                className="text-emerald-500 hover:underline"
                href={"/terms-and-condition"}
              >
                {t("common.termsOfService")}
              </Link>
            </div>
            {/* Google Translate will be here */}
          </div>

          <AuthLangSwitcher />
        </motion.div>
      </div>

      {/* Right side: Visual section */}
      <div className="md:flex flex-1 items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-950 dark:from-emerald-800 dark:to-emerald-900 p-8 rounded-l-3xl">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md flex flex-col items-center text-center text-white space-y-6"
        >
          <h2 className="text-2xl font-semibold">
            {t("login.rightPanelTitle")}
          </h2>

          {/* Full image */}
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src="/images/trusted.webp"
              alt="Trustpilot and Awards Section"
              width={825}
              height={770}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
