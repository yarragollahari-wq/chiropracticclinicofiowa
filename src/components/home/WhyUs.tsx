"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Button, Pill, Reveal } from "@/components/ui";
import { Glyph, Plus } from "@/components/Icons";
import { differentiators } from "@/lib/site";

/**
 * Scroll-linked word reveal: each word brightens as the section passes
 * through the viewport — the reference theme's headline treatment.
 */
function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "start 0.38"],
  });
  const words = text.split(" ");

  return (
    <h2 ref={ref} className={className}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1.6) / words.length]}>
          {w}
        </Word>
      ))}
    </h2>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const blur = useTransform(progress, range, ["blur(6px)", "blur(0px)"]);
  return (
    <motion.span style={{ opacity, filter: blur }} className="inline-block pr-[0.25em]">
      {children}
    </motion.span>
  );
}

export default function WhyUs() {
  const [open, setOpen] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={ref}
      className="panel mt-4 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#eef2ff_40%,#6f8bff_78%,#1344fe_100%)] pt-28 pb-0 lg:pt-36"
    >
      {/* concentric arcs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[38%] left-1/2 aspect-square w-[150%] -translate-x-1/2 rounded-full border border-white/25" />
        <div className="absolute top-[52%] left-1/2 aspect-square w-[118%] -translate-x-1/2 rounded-full border border-white/20" />
        <div className="absolute top-[66%] left-1/2 aspect-square w-[86%] -translate-x-1/2 rounded-full border border-white/20" />
      </div>

      <div className="shell relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <Pill>Why choose us</Pill>
        </Reveal>
        <ScrollWords
          text="Leading with heart and expertise."
          className="mt-6 max-w-[15ch]"
        />
        <Reveal delay={0.16} className="mt-9">
          <Button href="/#contact">Book Appointment</Button>
        </Reveal>
      </div>

      {/* Feature card */}
      <div className="shell relative z-10 mt-16 pb-16 lg:mt-24 lg:pb-24">
        <Reveal y={40}>
          <div className="relative grid overflow-visible rounded-[20px] bg-white p-7 shadow-[0_28px_70px_rgba(19,42,120,0.18)] lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 lg:p-8">
            {/* left copy */}
            <div className="lg:pr-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#fff1ed] py-1.5 pr-4 pl-1.5 text-[13.5px] font-medium text-[var(--color-accent)]">
                <span className="grid size-6 place-items-center rounded-full bg-[var(--color-accent)] text-white">
                  <Glyph name="heart" className="size-3.5" />
                </span>
                Conservative first
              </span>
              <h3 className="mt-5 max-w-[14ch] text-[30px] leading-[1.14] lg:text-[34px]">
                Outstanding care for every patient
              </h3>
              <p className="mt-4 max-w-[38ch] text-[15.5px] leading-[25px] text-[var(--color-muted)]">
                Personalised treatment plans built around your goals, your
                schedule and your pain — not a fixed package of visits.
              </p>
            </div>

            {/* centre oval image — breaks the card edge, as in the reference */}
            <div className="relative mx-auto my-8 h-[300px] w-[230px] shrink-0 overflow-hidden rounded-full ring-8 ring-white lg:-my-16 lg:h-[400px] lg:w-[290px]">
              <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
                <Image
                  src="/images/adjust-1.jpg"
                  alt="A chiropractor performing an adjustment on a patient"
                  fill
                  sizes="(max-width: 1024px) 230px, 290px"
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* right accordion */}
            <div className="lg:pl-4">
              {differentiators.map((d, i) => {
                const isOpen = open === i;
                return (
                  <div
                    key={d.title}
                    className={`border-black/[0.08] ${i > 0 ? "border-t" : ""}`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-3 py-4 text-left"
                    >
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-full transition-colors duration-500 ${
                          isOpen
                            ? "bg-[var(--color-brand)] text-white"
                            : "bg-[var(--color-surface)] text-[var(--color-brand)]"
                        }`}
                      >
                        <Glyph name={d.icon} className="size-[18px]" />
                      </span>
                      <span className="flex-1 font-[family-name:var(--font-display)] text-[17px] font-medium tracking-[-0.02em]">
                        {d.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="grid size-7 shrink-0 place-items-center rounded-full text-[var(--color-muted)]"
                      >
                        <Plus className="size-4" />
                      </motion.span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 pl-[52px] text-[14.5px] leading-[23px] text-[var(--color-muted)]">
                        {d.body}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
