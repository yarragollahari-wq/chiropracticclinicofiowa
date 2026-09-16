"use client";

import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { Button, Reveal } from "@/components/ui";
import { ArrowUpRight, Glyph } from "@/components/Icons";
import { services } from "@/lib/site";
import { useIsDesktop } from "@/lib/useIsDesktop";

function Card({ s, i }: { s: (typeof services)[number]; i: number }) {
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group relative flex h-[400px] w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] bg-white sm:h-[420px] sm:w-[340px] lg:h-[440px] lg:w-[380px]"
    >
      {/* Gradient plate + glyph */}
      <div className="relative flex h-[160px] shrink-0 items-center justify-center overflow-hidden bg-[linear-gradient(145deg,#e6ebff_0%,#f6f8ff_55%,#ffffff_100%)] lg:h-[190px]">
        <span
          aria-hidden
          className="absolute -top-10 -right-10 size-40 rounded-full bg-[var(--color-brand)]/[0.07] transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.5]"
        />
        <span className="relative grid size-[70px] place-items-center rounded-full bg-[var(--color-brand)] text-white shadow-[0_12px_30px_rgba(19,68,254,0.32)] transition-transform duration-[700ms] ease-[var(--ease-out-expo)] group-hover:scale-110 lg:size-[78px]">
          <Glyph name={s.icon} className="size-7 lg:size-8" strokeWidth={1.4} />
        </span>
        <span className="absolute top-4 left-5 font-[family-name:var(--font-display)] text-[13px] font-medium tracking-[0.14em] text-[var(--color-brand)]/45">
          /{String(i + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-[21px] leading-[1.22] lg:text-[23px]">{s.name}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-[24px] text-[var(--color-muted)] lg:text-[15.5px] lg:leading-[25px]">
          {s.blurb}
        </p>
        <span className="mt-5 inline-flex h-11 w-fit items-center gap-2 rounded-full pr-1.5 pl-4 text-[15px] font-medium text-[var(--color-ink)] ring-1 ring-black/[0.09] transition-colors duration-500 group-hover:bg-[var(--color-ink)] group-hover:text-white group-hover:ring-transparent">
          Explore More
          <span className="grid size-8 place-items-center rounded-full bg-[var(--color-brand)] text-white transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45">
            <ArrowUpRight className="size-4" />
          </span>
        </span>
      </div>
    </Link>
  );
}

function TailCard() {
  return (
    <div className="flex h-[400px] w-[280px] shrink-0 snap-start flex-col justify-center rounded-[20px] bg-white/10 p-8 ring-1 ring-inset ring-white/20 backdrop-blur-sm sm:h-[420px] sm:w-[340px] lg:h-[440px] lg:w-[380px]">
      <h3 className="text-white">Not sure which one you need?</h3>
      <p className="mt-3 text-[15.5px] leading-[25px] text-white/75">
        That is what the first consultation is for. Tell us where it hurts and we
        will tell you what actually helps.
      </p>
      <div className="mt-7">
        <Button href="/#contact" variant="white">
          Talk to a Doctor
        </Button>
      </div>
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Drag the rail horizontally across the pinned scroll distance (desktop only).
  const raw = useTransform(scrollYProgress, [0.06, 0.95], ["2%", "-74%"]);
  const x = useSpring(raw, { stiffness: 120, damping: 28, mass: 0.35 });
  const progress = useTransform(scrollYProgress, [0.06, 0.95], ["0%", "100%"]);

  return (
    <section
      id="services"
      ref={ref}
      className="panel mt-4 bg-[var(--color-brand)] py-20 lg:h-[420vh] lg:py-0"
    >
      <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden">
        {/* ambient arcs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.16]">
          <div className="absolute -top-[30%] left-1/2 aspect-square w-[130%] -translate-x-1/2 rounded-full border border-white/40" />
          <div className="absolute -top-[14%] left-1/2 aspect-square w-[96%] -translate-x-1/2 rounded-full border border-white/30" />
        </div>

        <div className="shell-wide relative z-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <Reveal>
              <h2 className="max-w-[19ch] text-white">
                Complete musculoskeletal care.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:max-w-[440px]">
              <p className="text-[17px] leading-[27px] text-white/80 lg:text-[18px] lg:leading-[28px]">
                Eight services under one roof in Cedar Rapids — hands-on
                adjustment alongside the technology most local clinics do not
                carry. Built around your recovery, not a template.
              </p>
              <div className="mt-6 lg:mt-7">
                <Button href="/#contact" variant="white">
                  Book an Appointment
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Rail — scroll-driven on desktop, swipeable on touch */}
        <div className="relative z-10 mt-10 lg:mt-14 lg:overflow-hidden">
          <motion.div
            style={isDesktop ? { x } : undefined}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 will-change-transform lg:overflow-x-visible lg:pb-0"
          >
            {services.map((s, i) => (
              <Card key={s.slug} s={s} i={i} />
            ))}
            <TailCard />
          </motion.div>
        </div>

        {/* progress rail — only meaningful while pinned */}
        <div className="shell-wide relative z-10 mt-8 hidden lg:mt-10 lg:block">
          <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/20">
            <motion.div style={{ width: progress }} className="h-full bg-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
