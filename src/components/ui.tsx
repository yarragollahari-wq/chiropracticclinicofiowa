"use client";

import Link from "next/link";
import { motion, useInView, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

/* ------------------------------------------------------------------ *
 * Button — the reference theme's split "label pill + square arrow"    *
 * ------------------------------------------------------------------ */

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "white" | "ink" | "outline";
  className?: string;
  full?: boolean;
};

const variants = {
  primary: "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-600)]",
  white: "bg-white text-[var(--color-ink)] hover:bg-[var(--color-surface)]",
  ink: "bg-[var(--color-ink)] text-white hover:bg-[#2a1c5c]",
  outline:
    "bg-transparent text-[var(--color-ink)] ring-1 ring-inset ring-black/10 hover:bg-[var(--color-surface)]",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  full = false,
}: ButtonProps) {
  const v = variants[variant];
  return (
    <Link
      href={href}
      className={`group/btn inline-flex h-[60px] items-center gap-[2px] ${
        full ? "w-full" : ""
      } ${className}`}
    >
      {/* flex-1 lets the label fill any width the link is given (e.g. w-full
          on mobile) while still shrinking to its content by default */}
      <span
        className={`relative flex h-full flex-1 items-center justify-center overflow-hidden rounded-[12px] px-6 text-[16px] font-medium tracking-[-0.01em] transition-colors duration-300 ${v}`}
      >
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-[450ms] ease-[var(--ease-out-expo)] group-hover/btn:-translate-y-full">
            {children}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 block translate-y-full transition-transform duration-[450ms] ease-[var(--ease-out-expo)] group-hover/btn:translate-y-0"
          >
            {children}
          </span>
        </span>
      </span>
      <span
        className={`grid h-full w-[60px] shrink-0 place-items-center rounded-[12px] transition-colors duration-300 ${v}`}
      >
        <ArrowUpRight className="size-5 transition-transform duration-[450ms] ease-[var(--ease-out-expo)] group-hover/btn:translate-x-[3px] group-hover/btn:-translate-y-[3px]" />
      </span>
    </Link>
  );
}

/* ------------------------------------------------------------------ *
 * Eyebrow pill                                                        *
 * ------------------------------------------------------------------ */

export function Pill({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "onBlue";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 items-center rounded-full px-[18px] text-[15px] font-medium tracking-[-0.01em] ${
        tone === "light"
          ? "bg-white text-[var(--color-ink)] shadow-[0_2px_10px_rgba(27,18,61,0.06)] ring-1 ring-black/[0.04]"
          : "bg-white/12 text-white ring-1 ring-inset ring-white/20 backdrop-blur-sm"
      } ${className}`}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Reveal — the theme's signature soft rise-and-focus on scroll        *
 * ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  y = 26,
  blur = true,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  blur?: boolean;
  className?: string;
  once?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-12% 0px -12% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }
      }
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Stagger container + item for grids */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  return (
    <motion.div
      ref={ref}
      variants={staggerParent}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ *
 * SectionHeading — centred eyebrow + two-line display heading         *
 * ------------------------------------------------------------------ */

export function SectionHeading({
  eyebrow,
  lines,
  tone = "ink",
  className = "",
}: {
  eyebrow: string;
  lines: [string, string];
  tone?: "ink" | "white";
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <Reveal>
        <Pill tone={tone === "white" ? "onBlue" : "light"}>{eyebrow}</Pill>
      </Reveal>
      <Reveal delay={0.08} className="mt-6">
        <h2 className={tone === "white" ? "text-white" : ""}>
          <span className="block">{lines[0]}</span>
          <span className="block">{lines[1]}</span>
        </h2>
      </Reveal>
    </div>
  );
}
