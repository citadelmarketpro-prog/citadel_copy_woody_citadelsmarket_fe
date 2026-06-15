"use client";

import { useState, useEffect, Suspense } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BACKEND_URL } from "@/lib/constants";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";

const resetPasswordSchema = z
  .object({
    new_password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z
      .string()
      .min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

function ResetPasswordContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validating, setValidating] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const newPasswordValue = watch("new_password");
  const confirmPasswordValue = watch("confirm_password");

  // Validate token on mount
  useEffect(() => {
    const validateToken = async () => {
      if (!uid || !token) {
        toast.error("Invalid reset link");
        setValidating(false);
        return;
      }

      try {
        const response = await fetch(
          `${BACKEND_URL}/password-reset/validate/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uid, token }),
          }
        );

        const result = await response.json();

        if (response.ok && result.valid) {
          setTokenValid(true);
          setUserEmail(result.user?.email || "");
        } else {
          toast.error(result.error || "Invalid or expired reset link");
          setTokenValid(false);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to validate reset link");
        setTokenValid(false);
      } finally {
        setValidating(false);
      }
    };

    validateToken();
  }, [uid, token]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    if (!uid || !token) {
      toast.error("Invalid reset link");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/password-reset/confirm/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid,
          token,
          new_password: data.new_password,
          confirm_password: data.confirm_password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = Array.isArray(result?.error)
          ? result.error.join(" ")
          : result?.error || "Failed to reset password";
        toast.error(errorMessage);
        return;
      }

      setResetSuccess(true);
      toast.success("Password reset successful!");

      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (validating) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#090909] dark:bg-white">
        <div className="text-center">
          <PulseLoader color="#10b981" size={15} />
          <p className="text-gray-400 dark:text-gray-600 mt-4">
            Validating reset link...
          </p>
        </div>
      </div>
    );
  }

  // Invalid token state
  if (!tokenValid) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#090909] dark:bg-white px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md text-center space-y-6"
        >
          <div className="w-20 h-20 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl">❌</span>
          </div>

          <h1 className="text-2xl font-bold text-white dark:text-black">
            Invalid Reset Link
          </h1>

          <p className="text-gray-400 dark:text-gray-600">
            This password reset link is invalid or has expired. Please request a
            new one.
          </p>

          <div className="space-y-3">
            <Link href="/forgot-password">
              <Button className="w-full bg-emerald-700 hover:bg-emerald-600 mb-4">
                Request New Reset Link
              </Button>
            </Link>

            <Link href="/login">
              <Button variant="outline" className="w-full">
                Back to Login
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Success state
  if (resetSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#090909] dark:bg-white px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md text-center space-y-6"
        >
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-10 h-10 text-emerald-600" />
          </div>

          <h1 className="text-2xl font-bold text-white dark:text-black">
            Password Reset Successful!
          </h1>

          <p className="text-gray-400 dark:text-gray-600">
            Your password has been reset successfully. You can now log in with
            your new password.
          </p>

          <div className="pt-4">
            <Link href="/login">
              <Button className="w-full bg-emerald-700 hover:bg-emerald-600">
                Continue to Login
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // Reset password form
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
          <h1 className="text-3xl font-bold text-white dark:text-black">
            Reset Your Password
          </h1>

          {userEmail && (
            <p className="text-sm text-gray-400 dark:text-gray-600">
              Resetting password for: <strong>{userEmail}</strong>
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* New Password Input */}
          <div className="relative">
            <input
              id="new_password"
              type={showPassword ? "text" : "password"}
              {...register("new_password")}
              className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent text-white dark:text-black focus:outline-none transition-all ${
                errors.new_password
                  ? "border-red-500"
                  : "border-gray-700 dark:border-gray-400"
              }`}
              placeholder=" "
            />
            <label
              htmlFor="new_password"
              className={`absolute left-3 text-gray-400 dark:text-gray-500 transition-all pointer-events-none ${
                newPasswordValue
                  ? "text-xs top-1"
                  : "peer-focus:text-xs peer-focus:top-1 top-3"
              }`}
            >
              New Password
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-4 text-gray-400 dark:text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.new_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.new_password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <input
              id="confirm_password"
              type={showConfirmPassword ? "text" : "password"}
              {...register("confirm_password")}
              className={`peer w-full border rounded-md px-3 pt-5 pb-2 bg-transparent text-white dark:text-black focus:outline-none transition-all ${
                errors.confirm_password
                  ? "border-red-500"
                  : "border-gray-700 dark:border-gray-400"
              }`}
              placeholder=" "
            />
            <label
              htmlFor="confirm_password"
              className={`absolute left-3 text-gray-400 dark:text-gray-500 transition-all pointer-events-none ${
                confirmPasswordValue
                  ? "text-xs top-1"
                  : "peer-focus:text-xs peer-focus:top-1 top-3"
              }`}
            >
              Confirm New Password
            </label>
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-4 text-gray-400 dark:text-gray-500"
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            {errors.confirm_password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirm_password.message}
              </p>
            )}
          </div>

          <Button
            disabled={loading}
            type="submit"
            className="w-full py-6 bg-emerald-700 hover:bg-emerald-600 text-white rounded-md"
          >
            {!loading ? (
              <span>Reset Password</span>
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

export default function ResetPasswordPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#090909] dark:bg-white">
          <PulseLoader color="#10b981" size={15} />
        </div>
      }
    >
      <ResetPasswordContent />
    </Suspense>
  );
}
