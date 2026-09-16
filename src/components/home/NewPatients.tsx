"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Button, Pill, Reveal } from "@/components/ui";
import { Clock, Pin, Phone } from "@/components/Icons";
import { clinic, hours } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Call or request a time",
    body: "Ring (319) 378-1515 or text us. We verify your insurance benefits before you arrive, so cost is not a surprise.",
  },
  {
    n: "02",
    title: "Consultation and exam",
    body: "You sit down with one of our doctors. We work out what is actually driving the pain — not just where you feel it.",
  },
  {
    n: "03",
    title: "Your plan, in plain language",
    body: "Findings explained without jargon, and a care plan built around your goals and your schedule. Most first visits include treatment the same day.",
  },
];

export default function NewPatients() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      id="new-patients"
      ref={ref}
      className="panel mt-4 overflow-hidden bg-[var(--color-ink)] py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 78% 8%, rgba(19,68,254,0.5), transparent 68%)",
        }}
      />

      <div className="shell relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          {/* left — process */}
          <div>
            <Reveal>
              <Pill tone="onBlue">New patients</Pill>
            </Reveal>
            <Reveal delay={0.08} className="mt-6">
              <h2 className="max-w-[14ch] text-white">
                Your first visit, start to finish.
              </h2>
            </Reveal>

            <div className="mt-10 space-y-px overflow-hidden rounded-[20px] bg-white/[0.08]">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={0.1 + i * 0.09}>
                  <div className="group flex gap-5 bg-[var(--color-ink)] p-6 transition-colors duration-500 hover:bg-white/[0.04]">
                    <span className="font-[family-name:var(--font-display)] text-[15px] font-medium tracking-[0.1em] text-[var(--color-brand)]">
                      /{s.n}
                    </span>
                    <span className="flex-1">
                      <span className="block font-[family-name:var(--font-display)] text-[19px] font-medium tracking-[-0.025em] text-white">
                        {s.title}
                      </span>
                      <span className="mt-2 block text-[15px] leading-[24px] text-white/60">
                        {s.body}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4} className="mt-9">
              <Button href="/#contact" variant="white">
                Request an Appointment
              </Button>
            </Reveal>
          </div>

          {/* right — hours + image */}
          <div className="grid gap-4">
            <Reveal y={40}>
              <div className="relative h-[280px] overflow-hidden rounded-[20px] lg:h-[340px]">
                <motion.div style={{ y: imgY }} className="absolute inset-[-10%]">
                  <Image
                    src="/images/clinic-1.jpg"
                    alt="A clinician at work in a consultation room"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center gap-2">
                  <a
                    href={clinic.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/95 py-2 pr-4 pl-2.5 text-[13.5px] font-medium text-[var(--color-ink)] backdrop-blur-sm transition-colors hover:bg-white"
                  >
                    <Pin className="size-4 text-[var(--color-brand)]" />
                    {clinic.addressLine1}
                  </a>
                  <a
                    href={clinic.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] py-2 pr-4 pl-2.5 text-[13.5px] font-medium text-white transition-colors hover:bg-[var(--color-brand-600)]"
                  >
                    <Phone className="size-4" />
                    {clinic.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal y={40} delay={0.12}>
              <div className="rounded-[20px] bg-white p-7">
                <div className="flex items-center gap-2.5">
                  <span className="grid size-9 place-items-center rounded-full bg-[var(--color-surface)] text-[var(--color-brand)]">
                    <Clock className="size-[18px]" />
                  </span>
                  <h3 className="text-[20px]">Office hours</h3>
                </div>
                <dl className="mt-5 divide-y divide-black/[0.07]">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-baseline justify-between gap-4 py-[11px]"
                    >
                      <dt
                        className={`text-[15px] ${
                          h.open
                            ? "text-[var(--color-ink)]"
                            : "text-[var(--color-muted)]"
                        }`}
                      >
                        {h.day}
                      </dt>
                      <dd
                        className={`text-right text-[14.5px] tabular-nums ${
                          h.open
                            ? "font-medium text-[var(--color-ink)]"
                            : "text-[var(--color-muted)]"
                        }`}
                      >
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 rounded-[12px] bg-[var(--color-surface)] p-4 text-[13.5px] leading-[21px] text-[var(--color-muted)]">
                  Early-morning slots book out first. Text{" "}
                  <a
                    href={clinic.textHref}
                    className="font-medium text-[var(--color-brand)] underline-offset-2 hover:underline"
                  >
                    {clinic.textLine}
                  </a>{" "}
                  if calling is awkward during your workday.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
