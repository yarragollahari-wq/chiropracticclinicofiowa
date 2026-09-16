"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { clinic, navLinks } from "@/lib/site";
import { ArrowUpRight, Logo, Phone } from "./Icons";

export default function Nav() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 260 && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace("/#", "/"));

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
            scrolled
              ? "bg-white/85 shadow-[0_1px_0_rgba(27,18,61,0.07)] backdrop-blur-xl"
              : "bg-white"
          }`}
        >
          <div className="shell-wide flex h-[88px] items-center justify-between gap-6">
            {/* Wordmark */}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-2.5"
              aria-label={clinic.name}
            >
              <Logo className="size-8 shrink-0 sm:size-9 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-[8deg]" />
              <span className="leading-[1.05]">
                <span className="block font-[family-name:var(--font-display)] text-[16px] font-semibold tracking-[-0.035em] text-[var(--color-ink)] sm:text-[19px]">
                  Chiropractic Clinic
                </span>
                <span className="block font-[family-name:var(--font-display)] text-[10.5px] font-medium tracking-[0.16em] text-[var(--color-brand)] uppercase sm:text-[12.5px]">
                  of Iowa
                </span>
              </span>
            </Link>

            {/* Desktop links — pill rail with a sliding active chip */}
            <nav className="hidden items-center rounded-full p-1 ring-1 ring-black/[0.07] lg:flex">
              {navLinks.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="relative rounded-full px-4 py-2 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-300"
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-chip"
                        className="absolute inset-0 rounded-full bg-[var(--color-ink)]"
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        active
                          ? "text-white"
                          : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {l.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href={clinic.phoneHref}
                className="group hidden h-12 items-center gap-2.5 rounded-full bg-white py-2 pr-4 pl-2 ring-1 ring-black/[0.07] transition-shadow duration-300 hover:shadow-[0_6px_20px_rgba(27,18,61,0.09)] md:inline-flex"
              >
                <span className="grid size-8 place-items-center rounded-full bg-[var(--color-brand)] text-white">
                  <Phone className="size-4" />
                </span>
                <span className="text-[15px] font-medium tracking-[-0.01em] text-[var(--color-ink)]">
                  {clinic.phone}
                </span>
              </Link>

              <Link
                href="/#contact"
                className="group hidden h-12 items-center gap-2 rounded-full bg-[var(--color-brand)] px-5 text-[15px] font-medium text-white transition-colors duration-300 hover:bg-[var(--color-brand-600)] xl:inline-flex"
              >
                Book Appointment
                <ArrowUpRight className="size-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
              </Link>

              {/* Burger */}
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--color-brand)] text-white transition-colors duration-300 hover:bg-[var(--color-brand-600)] lg:hidden"
              >
                <span className="relative block h-[11px] w-[18px]">
                  <motion.span
                    animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 top-0 h-[1.8px] rounded-full bg-current"
                  />
                  <motion.span
                    animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-x-0 bottom-0 h-[1.8px] rounded-full bg-current"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--color-ink)]/35 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-4 top-[100px] overflow-hidden rounded-[24px] bg-white p-3 shadow-[0_28px_60px_rgba(27,18,61,0.18)]"
            >
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-[16px] px-4 py-3.5 font-[family-name:var(--font-display)] text-[22px] font-medium tracking-[-0.03em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface)]"
                  >
                    {l.label}
                    <ArrowUpRight className="size-5 text-[var(--color-muted)]" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 grid gap-2 border-t border-black/[0.07] p-2 pt-4">
                <Link
                  href={clinic.phoneHref}
                  className="flex h-[54px] items-center justify-center gap-2 rounded-[14px] bg-[var(--color-surface)] font-medium text-[var(--color-ink)]"
                >
                  <Phone className="size-4" /> {clinic.phone}
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex h-[54px] items-center justify-center rounded-[14px] bg-[var(--color-brand)] font-medium text-white"
                >
                  Book an Appointment
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
