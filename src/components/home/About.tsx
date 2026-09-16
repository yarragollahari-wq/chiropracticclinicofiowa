"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button, Pill, Reveal } from "@/components/ui";

/** Lifestyle stills that orbit the statement. */
const orbit = [
  { src: "/images/family-1.jpg", alt: "A family walking outdoors together", angle: -90, r: 1 },
  { src: "/images/senior-1.jpg", alt: "An active older couple outdoors", angle: -28, r: 1 },
  { src: "/images/runner-1.jpg", alt: "A runner mid-stride on a track", angle: 32, r: 1 },
  { src: "/images/prenatal-1.jpg", alt: "An expectant mother", angle: 90, r: 1 },
  { src: "/images/therapy-2.jpg", alt: "An athlete stretching", angle: 148, r: 1 },
  { src: "/images/adjust-4.jpg", alt: "Hands performing a spinal adjustment", angle: 212, r: 1 },
];

const stats = [
  { value: "5", label: "Palmer-trained doctors" },
  { value: "30+", label: "Years serving the Corridor" },
  { value: "8", label: "Services under one roof" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const spin = useTransform(scrollYProgress, [0, 1], [-14, 14]);
  // keeps each orbiting still upright while the ring itself rotates
  const counterSpin = useTransform(spin, (v) => -v);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);

  return (
    <section
      id="about"
      ref={ref}
      className="panel mt-4 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f9ff_50%,#ffffff_100%)] py-28 lg:py-36"
    >
      <div className="shell relative">
        {/* concentric rings + orbiting stills */}
        <motion.div
          style={{ scale }}
          aria-hidden
          className="pointer-events-none absolute inset-0 grid place-items-center"
        >
          <div className="relative aspect-square w-[min(108%,780px)]">
            <div className="absolute inset-0 rounded-full bg-[#f2f5ff] ring-1 ring-[#e2e8ff]" />
            <div className="absolute inset-[13%] rounded-full bg-[#eef2ff] ring-1 ring-[#e2e8ff]" />
            <div className="absolute inset-[27%] rounded-full bg-[#e9eeff]/70" />
          </div>
        </motion.div>

        <motion.div
          style={{ rotate: spin }}
          className="pointer-events-none absolute inset-0 grid place-items-center"
        >
          <div className="relative aspect-square w-[min(108%,780px)]">
            {orbit.map((o, i) => {
              const rad = (o.angle * Math.PI) / 180;
              const left = 50 + 50 * Math.cos(rad);
              const top = 50 + 50 * Math.sin(rad);
              return (
                <motion.div
                  key={o.src}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ left: `${left}%`, top: `${top}%`, rotate: counterSpin }}
                  className="absolute size-[68px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full ring-4 ring-white shadow-[0_10px_28px_rgba(27,18,61,0.13)] sm:size-[84px] lg:size-[96px]"
                >
                  <Image
                    src={o.src}
                    alt={o.alt}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* statement */}
        <div className="relative z-10 flex flex-col items-center py-16 text-center sm:py-24">
          <Reveal>
            <Pill>About the clinic</Pill>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <h2 className="max-w-[13ch]">
              Conservative care, personally delivered.
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="mt-6 max-w-[52ch]">
            <p className="text-[var(--color-muted)]">
              We are an independent practice on Blairs Ferry Road — five doctors,
              all Palmer College graduates, who would rather find the cause of
              your pain than manage it forever. Adjustment, rehab and modern
              adjunct therapy, matched to you.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-9">
            <Button href="/#doctors">Meet Our Doctors</Button>
          </Reveal>
        </div>
      </div>

      {/* stat strip */}
      <div className="shell relative z-10 mt-6">
        <div className="grid gap-px overflow-hidden rounded-[20px] bg-black/[0.07] sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-white">
              <div className="flex flex-col items-center gap-1 bg-white px-6 py-9 text-center">
                <span className="font-[family-name:var(--font-display)] text-[44px] leading-none font-medium tracking-[-0.045em] text-[var(--color-brand)]">
                  {s.value}
                </span>
                <span className="text-[15px] text-[var(--color-muted)]">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
