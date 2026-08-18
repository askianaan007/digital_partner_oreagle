"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Home,
  Zap,
  Layers,
  TrendingUp,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Manage", href: "#what-we-manage" },
  { label: "Performance Model", href: "#performance-model" },
  { label: "Proof", href: "#proof" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const LEFT_ICONS = [
  { label: "Home", href: "#top", icon: Home },
  { label: "How It Works", href: "#how-it-works", icon: Zap },
  { label: "What We Manage", href: "#what-we-manage", icon: Layers },
];

const RIGHT_ICONS = [
  { label: "Performance Model", href: "#performance-model", icon: TrendingUp },
  { label: "Proof", href: "#proof", icon: ShieldCheck },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (const link of LINKS) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const showExpanded = isHovered || open;

  return (
    <header className="fixed inset-x-0 top-4 sm:top-6 z-50 px-4 sm:px-6 pointer-events-none flex justify-center">
      <motion.nav
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{
          width: showExpanded ? "100%" : "340px",
          maxWidth: showExpanded ? "1150px" : "340px",
        }}
        transition={{
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "pointer-events-auto relative flex items-center justify-between px-3 sm:px-4 py-2 h-[64px] sm:h-[70px]",
          "rounded-full transition-colors duration-500 border overflow-hidden cursor-pointer",
          scrolled || open || isHovered
            ? "bg-[#0b0c0f]/90 backdrop-blur-2xl border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.2)]"
            : "bg-[#0b0c0f]/75 backdrop-blur-xl border-white/15 shadow-[0_8px_24px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)]"
        )}
      >
        <AnimatePresence mode="wait">
          {!showExpanded ? (
            /* Collapsed State: 3 Outlined Icons + Centered Logo + 3 Outlined Icons */
            <motion.div
              key="collapsed-navbar"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="w-full flex items-center justify-between px-1"
            >
              {/* Left Side: 3 Outlined Tab Icons */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {LEFT_ICONS.map(({ label, href, icon: Icon }) => {
                  const isActive = activeSection === href;
                  return (
                    <a
                      key={href}
                      href={href}
                      title={label}
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "p-1.5 sm:p-2 rounded-full transition-all duration-200",
                        isActive
                          ? "bg-white/15 text-white border border-white/20 shadow-xs"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      )}
                    >
                      <Icon className="size-4 stroke-[1.5]" />
                    </a>
                  );
                })}
              </div>

              {/* Center: OREAGLE Logo Symbol */}
              <a
                href="#top"
                className="flex items-center justify-center px-2.5"
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt="OREAGLE Logo"
                  className="h-9 sm:h-11 w-auto brightness-0 invert opacity-100 transition-transform hover:scale-110"
                />
              </a>

              {/* Right Side: 3 Outlined Tab Icons */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {RIGHT_ICONS.map(({ label, href, icon: Icon }) => {
                  const isActive = activeSection === href;
                  return (
                    <a
                      key={href}
                      href={href}
                      title={label}
                      onClick={(e) => e.stopPropagation()}
                      className={cn(
                        "p-1.5 sm:p-2 rounded-full transition-all duration-200",
                        isActive
                          ? "bg-white/15 text-white border border-white/20 shadow-xs"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      )}
                    >
                      <Icon className="size-4 stroke-[1.5]" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* Expanded State: Full Navbar Navigation */
            <motion.div
              key="expanded-navbar"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex w-full items-center justify-between"
            >
              {/* Left: OREAGLE Abstract Logo Icon */}
              <a href="#top" className="flex items-center group shrink-0 py-0.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt="OREAGLE Logo"
                  className="h-7 sm:h-8 w-auto brightness-0 invert opacity-95 transition-transform group-hover:scale-105"
                />
              </a>

              {/* Center: Desktop Navigation Links */}
              <ul className="hidden items-center gap-1 xl:flex">
                {LINKS.map((link) => {
                  const isActive = activeSection === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setActiveSection(link.href)}
                        className={cn(
                          "text-xs sm:text-sm font-medium transition-all duration-200 px-3.5 py-1.5 rounded-full inline-block",
                          isActive
                            ? "bg-white/12 text-white border border-white/15 shadow-xs"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Right: Primary CTA Button */}
              <div className="hidden xl:flex items-center gap-3">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#f0d468] via-accent to-[#d4af37] px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-950 shadow-md shadow-accent/25 transition-all duration-300 hover:shadow-lg hover:shadow-accent/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {/* Shimmer Light Beam Effect */}
                  <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 -translate-x-full transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />

                  <span className="relative z-10">Talk About Your Business</span>

                  <span className="relative z-10 flex size-5 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover:bg-zinc-950 group-hover:text-accent group-hover:rotate-45">
                    <ArrowUpRight className="size-3.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                aria-label="Toggle menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white xl:hidden cursor-pointer"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto absolute top-full left-4 right-4 sm:left-6 sm:right-6 max-w-6xl mx-auto mt-3 overflow-hidden rounded-3xl border border-white/15 bg-[#0b0c0f]/94 backdrop-blur-2xl p-5 shadow-2xl xl:hidden"
          >
            <ul className="flex flex-col gap-1.5">
              {LINKS.map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href);
                        setOpen(false);
                      }}
                      className={cn(
                        "block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200",
                        isActive
                          ? "bg-white/12 text-white border border-white/15"
                          : "text-white/70 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: LINKS.length * 0.04 }}
                className="mt-3 pt-2 border-t border-white/10"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#f0d468] via-accent to-[#d4af37] px-5 py-3 text-sm font-semibold text-accent-ink transition-transform active:scale-[0.98]"
                >
                  <span className="relative z-10">Talk About Your Business</span>
                  <span className="relative z-10 flex size-5 items-center justify-center rounded-full bg-black/10 text-black">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
