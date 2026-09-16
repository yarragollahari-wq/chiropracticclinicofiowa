"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/ui";
import { ArrowLeft, ArrowRight, Quote, Star } from "@/components/Icons";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const t = testimonials[index];

  const go = useCallback((next: number, d: number) => {
    setState([(next + testimonials.length) % testimonials.length, d]);
  }, []);

  useEffect(() => {
    const id = setInterval(() => go(index + 1, 1), 7500);
    return () => clearInterval(id);
  }, [index, go]);

  return (
    <section className="panel mt-4 bg-white py-24 lg:py-28">
      <div className="shell">
        <Reveal y={40}>
          <div className="grid overflow-hidden rounded-[20px] bg-[var(--color-surface)] lg:grid-cols-[1fr_440px]">
            {/* quote side */}
            <div className="relative flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <Quote className="h-9 w-12 text-[var(--color-accent)]" />

              <div className="relative mt-7 min-h-[210px] sm:min-h-[190px]">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="font-[family-name:var(--font-display)] text-[21px] leading-[1.42] font-normal tracking-[-0.025em] text-[var(--color-ink)] sm:text-[24px]">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="relative size-11 overflow-hidden rounded-full ring-2 ring-white">
                          <Image
                            src={t.image}
                            alt=""
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </span>
                        <span>
                          <span className="block font-[family-name:var(--font-display)] text-[16px] font-medium tracking-[-0.02em]">
                            {t.name}
                          </span>
                          <span className="block text-[13.5px] text-[var(--color-muted)]">
                            {t.role}
                          </span>
                        </span>
                      </div>
                      <span className="flex gap-1 text-[var(--color-accent)]">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="size-[18px]" />
                        ))}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* controls */}
              <div className="mt-9 flex items-center gap-4 rounded-full bg-white p-2 pr-4">
                <button
                  onClick={() => go(index - 1, -1)}
                  aria-label="Previous testimonial"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-brand)] text-white transition-transform duration-300 hover:-translate-x-0.5"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <div className="flex flex-1 items-center justify-center gap-4">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => go(i, i > index ? 1 : -1)}
                      aria-label={`Testimonial ${i + 1}`}
                      className={`font-[family-name:var(--font-display)] text-[15px] font-medium tabular-nums transition-colors duration-300 ${
                        i === index
                          ? "text-[var(--color-ink)]"
                          : "text-[var(--color-muted)]/45 hover:text-[var(--color-muted)]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => go(index + 1, 1)}
                  aria-label="Next testimonial"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--color-ink)] text-white transition-transform duration-300 hover:translate-x-0.5"
                >
                  <ArrowRight className="size-5" />
                </button>
              </div>
            </div>

            {/* image side */}
            <div className="relative order-first min-h-[280px] overflow-hidden lg:order-last lg:min-h-full">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={t.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
