"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BACKEND_URL } from "@/lib/constants";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const emailValue = watch("email");

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/password-reset/request/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result?.error || "Failed to send reset email");
        return;
      }

      setEmailSent(true);
      toast.success("Password reset link sent! Check your email.");
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (emailSent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#090909] dark:bg-white px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md text-center space-y-6"
        >
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-10 h-10 text-emerald-600" />
          </div>

          <h1 className="text-2xl font-bold text-white dark:text-black">
            Check Your Email
          </h1>

          <p className="text-gray-400 dark:text-gray-600">
            We&apos;ve sent a password reset link to{" "}
            <strong>{emailValue}</strong>. Please check your inbox and spam
            folder.
          </p>

          <div className="pt-4">
            <Link href="/login">
              <Button className="w-full p-5 bg-emerald-700 hover:bg-emerald-600">
                Back to Login
              </Button>
            </Link>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-600">
            Didn&apos;t receive the email?{" "}
            <button
              onClick={() => setEmailSent(false)}
              className="text-emerald-500 hover:underline"
            >
              Try again
            </button>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090909] dark:bg-white px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-6"
      >
        {/* Logo */}
        <Link
          href="/"
          className="hidden dark:flex text-2xl md:text-4xl font-extrabold justify-center"
        >
          <Image
            alt="logo"
            src={"/images/logo_dark.png"}
            className="h-30 md:h-40 w-auto"
            width={1000}
            height={1000}
          />
        </Link>
        <Link
          href="/"
          className="flex dark:hidden text-2xl md:text-4xl font-extrabold justify-center"
        >
          <Image
            alt="logo"
            src={"/images/logo_light.png"}
            className="h-30 md:h-40 w-auto"
            width={1000}
            height={1000}
          />
        </Link>

        <div className="space-y-2">
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-emerald-500 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Login
          </Link>

          <h1 className="text-3xl font-bold text-white dark:text-black">
            Forgot Password?
          </h1>

          <p className="text-gray-400 dark:text-gray-600">
            Enter your email address and we&apos;ll send you a link to reset
            your password.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent text-white dark:text-black focus:outline-none transition-all ${
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
              Email Address
            </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="w-full py-6 bg-emerald-700 hover:bg-emerald-600 text-white rounded-md"
          >
            {!loading ? (
              <span>Send Reset Link</span>
            ) : (
              <PulseLoader color="#fff" size={15} />
            )}
          </Button>

          <p className="text-center text-sm text-gray-400 dark:text-gray-600">
            Remember your password?{" "}
            <Link href="/login" className="text-emerald-500 hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
