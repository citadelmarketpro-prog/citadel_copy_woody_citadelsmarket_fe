"use client";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export default function EnhancedNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500",
          scrolled
            ? "bg-gradient-to-r from-emerald-100 via-green-100 to-teal-100 dark:bg-gradient-to-r dark:from-slate-900 dark:via-emerald-900/70 dark:to-slate-900 shadow-lg shadow-emerald-500/20 backdrop-blur-md"
            : "bg-gradient-to-r from-emerald-100/90 via-green-100/90 to-teal-100/90 dark:bg-gradient-to-r dark:from-slate-900/90 dark:via-emerald-900/60 dark:to-slate-900/90 backdrop-blur-sm",
          "border-b border-emerald-300/50 dark:border-emerald-600/40"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex dark:hidden text-2xl md:text-4xl font-extrabold self-center tracking-tight items-center gap-1 text-emerald-800 z-50 hover:scale-105 transition-transform duration-300"
            >
              <Image
                alt="logo"
                src={"/images/logo_dark.png"}
                className="h-12 md:h-16 w-auto drop-shadow-md"
                width={1000}
                height={1000}
              />
            </Link>
            <Link
              href="/"
              className="hidden dark:flex text-2xl md:text-4xl font-extrabold self-center tracking-tight items-center gap-1 z-50 hover:scale-105 transition-transform duration-300"
            >
              <Image
                alt="logo"
                src={"/images/logo_light.png"}
                className="h-12 md:h-16 w-auto drop-shadow-2xl"
                width={1000}
                height={1000}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <NavigationMenu>
                <NavigationMenuList>
                  {/* Home */}
                  <NavigationMenuItem>
                    <Link
                      href="/"
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent hover:bg-emerald-200 dark:hover:bg-emerald-800/40 text-gray-900 dark:text-gray-100 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-semibold"
                      )}
                    >
                      Home
                    </Link>
                  </NavigationMenuItem>

                  {/* Features */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-200 dark:hover:bg-emerald-800/40 text-gray-900 dark:text-gray-100 hover:text-emerald-800 dark:hover:text-emerald-200 font-semibold">
                      Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/50 shadow-xl">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-between rounded-lg bg-gradient-to-br from-emerald-100 via-green-100 to-teal-100 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950 p-6 no-underline outline-none hover:shadow-lg transition-all duration-300 border border-emerald-200 dark:border-emerald-800 group relative overflow-hidden"
                              href="/copy-trading"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/0 via-emerald-300/10 to-emerald-400/20 dark:from-emerald-400/0 dark:via-emerald-500/5 dark:to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                              <div className="relative flex items-center justify-center flex-1 py-4">
                                <Image
                                  src="/copytrading-image.jpg"
                                  alt="Copy Trading"
                                  width={200}
                                  height={200}
                                  className="w-full h-auto max-w-[160px] object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                                />
                              </div>

                              <div className="relative space-y-2">
                                <div className="text-lg font-bold text-emerald-800 dark:text-emerald-100">
                                  Copy Trading
                                </div>
                                <p className="text-sm leading-tight text-gray-700 dark:text-gray-300">
                                  Mirror trades from top-performing traders in
                                  real-time
                                </p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <ListItem href="/copy-trading" title="Copy Trading">
                          Automatically replicate expert traders&apos;
                          strategies
                        </ListItem>
                        <ListItem href="/copy-trading" title="Social Trading">
                          Connect and learn from trading community
                        </ListItem>
                        <ListItem href="/disclaimer" title="Risk Management">
                          Advanced tools to protect your investments
                        </ListItem>
                        <ListItem
                          href="/portfolio-analytics"
                          title="Portfolio Analytics"
                        >
                          Comprehensive performance tracking and insights
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Partnerships */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-200 dark:hover:bg-emerald-800/40 text-gray-900 dark:text-gray-100 hover:text-emerald-800 dark:hover:text-emerald-200 font-semibold">
                      Partnerships
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/50 shadow-xl">
                        <ListItem href="/affiliates" title="Affiliate Program">
                          Join our affiliate network and earn commissions
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Support */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-200 dark:hover:bg-emerald-800/40 text-gray-900 dark:text-gray-100 hover:text-emerald-800 dark:hover:text-emerald-200 font-semibold">
                      Support
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/50 shadow-xl">
                        <ListItem href="/support" title="Support Center">
                          24/7 customer support and help center
                        </ListItem>
                        <ListItem href="/email-us" title="Email Us">
                          Get in touch with our team directly
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Legal */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-emerald-200 dark:hover:bg-emerald-800/40 text-gray-900 dark:text-gray-100 hover:text-emerald-800 dark:hover:text-emerald-200 font-semibold">
                      Legal
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/50 shadow-xl">
                        <ListItem
                          href="/terms-service"
                          title="Terms Of Service"
                        >
                          Read our terms and conditions
                        </ListItem>
                        <ListItem href="/privacy-policy" title="Privacy Policy">
                          How we protect your data
                        </ListItem>
                        <ListItem href="/cookies" title="Cookies Policy">
                          Information about cookies usage
                        </ListItem>
                        <ListItem href="/disclaimer" title="Risk Disclaimer">
                          Important trading risk information
                        </ListItem>
                        <ListItem
                          href="/conflict-interest"
                          title="Conflict of Interest"
                        >
                          Our conflict of interest policy
                        </ListItem>
                        <ListItem
                          href="/declaration-consent"
                          title="Declaration of Consent"
                        >
                          User consent and declarations
                        </ListItem>
                        <ListItem
                          href="/user-agreement"
                          title="End-User Agreement"
                        >
                          License agreement and terms
                        </ListItem>
                        <ListItem href="/regulations" title="Regulations">
                          Trading Regulations
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right Side Actions */}
            <div className="flex gap-2 items-center">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-full bg-emerald-200 dark:bg-emerald-800/60 border border-emerald-400 dark:border-emerald-600 hover:bg-emerald-300 dark:hover:bg-emerald-700/70 transition-all hover:scale-110 z-[60]"
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4 text-emerald-800" />
                ) : (
                  <Sun className="w-4 h-4 text-emerald-200" />
                )}
              </button>

              {/* Desktop Buttons */}
              <div className="hidden lg:flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-2 border-emerald-700 dark:border-emerald-400 bg-transparent hover:bg-emerald-200 dark:hover:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200 hover:text-emerald-900 dark:hover:text-emerald-100 font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <Link href="/register">Open Account</Link>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 dark:from-emerald-500 dark:to-green-500 dark:hover:from-emerald-600 dark:hover:to-green-600 text-white font-bold shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-full bg-emerald-200 dark:bg-emerald-800/60 border border-emerald-400 dark:border-emerald-600 hover:bg-emerald-300 dark:hover:bg-emerald-700/70 transition-all hover:scale-110 z-[60]"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-emerald-800 dark:text-emerald-200" />
                ) : (
                  <Menu className="w-5 h-5 text-emerald-800 dark:text-emerald-200" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Slides from Left */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-0 transition-all duration-500 ease-in-out z-[55]",
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content - Slides from Left */}
        <div
          className={cn(
            "absolute top-0 left-0 bottom-0 w-[85%] max-w-sm h-full bg-gradient-to-b from-emerald-100 via-green-100 to-teal-100 dark:bg-gradient-to-b dark:from-slate-900 dark:via-emerald-900/70 dark:to-slate-900 border-r border-emerald-300 dark:border-emerald-700/50 transition-transform duration-500 ease-in-out overflow-y-auto shadow-2xl",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* Logo at Top */}
          <div className="sticky top-0 bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200 dark:from-slate-800 dark:via-emerald-800 dark:to-slate-800 border-b border-emerald-300 dark:border-emerald-700 px-6 py-4 z-10">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex dark:hidden items-center justify-center"
            >
              <Image
                alt="logo"
                src={"/images/logo_dark.png"}
                className="h-14 w-auto drop-shadow-lg"
                width={1000}
                height={1000}
              />
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hidden dark:flex items-center justify-center"
            >
              <Image
                alt="logo"
                src={"/images/logo_light.png"}
                className="h-14 w-auto drop-shadow-2xl"
                width={1000}
                height={1000}
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col gap-3 py-6 px-6">
            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
              Home
            </MobileNavLink>

            <MobileDropdown title="Features">
              <MobileNavLink
                href="/copy-trading"
                onClick={() => setIsOpen(false)}
              >
                Copy Trading
              </MobileNavLink>
              <MobileNavLink
                href="/copy-trading"
                onClick={() => setIsOpen(false)}
              >
                Social Trading
              </MobileNavLink>
              <MobileNavLink
                href="/disclaimer"
                onClick={() => setIsOpen(false)}
              >
                Risk Management
              </MobileNavLink>
              <MobileNavLink
                href="/portfolio-analytics"
                onClick={() => setIsOpen(false)}
              >
                Portfolio Analytics
              </MobileNavLink>
            </MobileDropdown>

            <MobileDropdown title="Partnerships">
              <MobileNavLink
                href="/affiliates"
                onClick={() => setIsOpen(false)}
              >
                Affiliate Program
              </MobileNavLink>
            </MobileDropdown>

            <MobileDropdown title="Support">
              <MobileNavLink href="/support" onClick={() => setIsOpen(false)}>
                Support Center
              </MobileNavLink>
              <MobileNavLink href="/email-us" onClick={() => setIsOpen(false)}>
                Email Us
              </MobileNavLink>
            </MobileDropdown>

            <MobileDropdown title="Legal">
              <MobileNavLink
                href="/terms-service"
                onClick={() => setIsOpen(false)}
              >
                Terms Of Service
              </MobileNavLink>
              <MobileNavLink
                href="/privacy-policy"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </MobileNavLink>
              <MobileNavLink href="/cookies" onClick={() => setIsOpen(false)}>
                Cookies Policy
              </MobileNavLink>
              <MobileNavLink
                href="/disclaimer"
                onClick={() => setIsOpen(false)}
              >
                Risk Disclaimer
              </MobileNavLink>
              <MobileNavLink
                href="/conflict-interest"
                onClick={() => setIsOpen(false)}
              >
                Conflict of Interest Policy
              </MobileNavLink>
              <MobileNavLink
                href="/declaration-consent"
                onClick={() => setIsOpen(false)}
              >
                Declaration of Consent
              </MobileNavLink>
              <MobileNavLink
                href="/user-agreement"
                onClick={() => setIsOpen(false)}
              >
                End-User License Agreement
              </MobileNavLink>
              <MobileNavLink
                href="/regulations"
                onClick={() => setIsOpen(false)}
              >
                Trading Regulations
              </MobileNavLink>
            </MobileDropdown>

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-emerald-400 dark:border-emerald-700">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-2 border-emerald-700 dark:border-emerald-400 bg-transparent hover:bg-emerald-200 dark:hover:bg-emerald-800/40 text-emerald-800 dark:text-emerald-200 font-bold"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/register">Open Account</Link>
              </Button>
              <Button
                asChild
                className="w-full rounded-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 dark:from-emerald-500 dark:to-green-500 text-white font-bold"
                onClick={() => setIsOpen(false)}
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Desktop List Item Component
const ListItem = ({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-800 dark:hover:text-emerald-200",
            className
          )}
        >
          <div className="text-sm font-bold leading-none text-gray-900 dark:text-gray-100">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-700 dark:text-gray-400">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

// Mobile Navigation Link Component
const MobileNavLink = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-4 py-2 rounded-lg text-gray-900 dark:text-gray-100 hover:bg-emerald-200 dark:hover:bg-emerald-800/40 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors font-semibold"
    >
      {children}
    </Link>
  );
};

// Mobile Dropdown Component
const MobileDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-l-2 border-emerald-400 dark:border-emerald-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left text-gray-900 dark:text-gray-100 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors flex justify-between items-center font-bold"
      >
        <span>{title}</span>
        <span
          className={cn(
            "transition-transform duration-300 text-emerald-700 dark:text-emerald-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        >
          ▼
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1 pl-4 py-2">{children}</div>
      </div>
    </div>
  );
};
