"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button, Pill, Reveal } from "@/components/ui";
import { Glyph } from "@/components/Icons";
import { clinic, services } from "@/lib/site";

/**
 * Service glyphs sit on a semicircle struck from the bottom-centre of the
 * arched image. Angles are measured anticlockwise from due right, so 90° is
 * straight up — matching the reference theme's halo of specialisms.
 */
const arc = [
  { icon: "spine", angle: 166 },
  { icon: "decompress", angle: 128 },
  { icon: "wave", angle: 90 },
  { icon: "athlete", angle: 52 },
  { icon: "truck", angle: 14 },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);

  return (
    <section
      id="contact"
      ref={ref}
      className="panel mt-4 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#e8edff_28%,#8ba1ff_66%,#1344fe_100%)] pt-24 pb-0 lg:pt-32"
    >
      <div className="shell relative z-20 flex flex-col items-center text-center">
        <Reveal>
          <Pill>Get in touch</Pill>
        </Reveal>
        <Reveal delay={0.08} className="mt-6">
          <h2 className="max-w-[15ch]">Relief starts with one phone call.</h2>
        </Reveal>
        <Reveal delay={0.16} className="mt-5 max-w-[50ch]">
          <p className="text-[var(--color-muted)]">
            {clinic.addressFull} · Serving {clinic.serviceArea}
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-9">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href={clinic.phoneHref}>Call {clinic.phone}</Button>
            <Button href={clinic.textHref} variant="white">
              Text Us Instead
            </Button>
          </div>
        </Reveal>
      </div>

      {/* arc of service glyphs + arched image */}
      <div className="relative mt-16 h-[420px] lg:mt-20 lg:h-[560px]">
        {/* concentric halo rings, struck from the base of the arch */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2"
        >
          {[1, 1.18, 1.36].map((k, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-1/2 aspect-square -translate-x-1/2 rounded-full border border-white/30"
              style={{
                width: `${640 * k}px`,
                marginBottom: `-${320 * k}px`,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 mx-auto w-[min(92%,640px)]">
          {/* the arch */}
          <div className="relative z-0 h-[300px] overflow-hidden rounded-t-[999px] lg:h-[400px]">
            <motion.div style={{ scale: imgScale }} className="absolute inset-0">
              <Image
                src="/images/adjust-3.jpg"
                alt="A chiropractor treating a patient's back"
                fill
                sizes="(max-width: 1024px) 92vw, 640px"
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* glyphs on the arc */}
          {arc.map((a, i) => {
            const rad = (a.angle * Math.PI) / 180;
            const s = services.find((x) => x.icon === a.icon);
            return (
              <motion.span
                key={a.icon}
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                title={s?.name}
                style={{
                  left: `calc(50% + ${(Math.cos(rad) * 56).toFixed(2)}%)`,
                  bottom: `${(Math.sin(rad) * 104).toFixed(2)}%`,
                }}
                className="absolute z-10 grid size-[52px] -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-white text-[var(--color-brand)] shadow-[0_10px_26px_rgba(19,42,120,0.18)] lg:size-[62px]"
              >
                <Glyph name={a.icon} className="size-6 lg:size-7" strokeWidth={1.4} />
              </motion.span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
