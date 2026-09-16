"use client";

import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Button, Pill, Reveal } from "@/components/ui";
import { ArrowLeft, ArrowRight, Check } from "@/components/Icons";
import { doctors } from "@/lib/site";

const tone = {
  blue: "from-[#1344fe] to-[#4d74ff]",
  ink: "from-[#1b123d] to-[#3e2f7a]",
  accent: "from-[#ff623a] to-[#ff9370]",
  soft: "from-[#3f63ff] to-[#7e9bff]",
} as const;

export default function Doctors() {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const onScroll = () => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  };

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : 320;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <section
      id="doctors"
      className="panel mt-4 overflow-hidden bg-[linear-gradient(180deg,#1344fe_0%,#7b93ff_34%,#eef2ff_72%,#ffffff_100%)] py-28 lg:py-36"
    >
      <div className="shell flex flex-col items-center text-center">
        <Reveal>
          <Pill tone="onBlue">Our care team</Pill>
        </Reveal>
        <Reveal delay={0.08} className="mt-6">
          <h2 className="max-w-[16ch] text-white">
            Five doctors. One standard of care.
          </h2>
        </Reveal>
        <Reveal delay={0.16} className="mt-5 max-w-[52ch]">
          <p className="text-white/80">
            Every one a Palmer College graduate — spanning 30-year veterans to
            newly licensed, general adjustment to pediatric, occupational health
            to sports performance.
          </p>
        </Reveal>
      </div>

      {/* Rail */}
      <div className="relative mt-14 lg:mt-16">
        <div
          ref={railRef}
          onScroll={onScroll}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 lg:px-[max(24px,calc((100vw-1120px)/2))]"
        >
          {doctors.map((d, i) => (
            <motion.article
              key={d.name}
              data-card
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.85, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group w-[276px] shrink-0 snap-start overflow-hidden rounded-[20px] bg-white p-3 shadow-[0_18px_50px_rgba(19,42,120,0.13)] sm:w-[300px]"
            >
              <div
                className={`relative flex h-[230px] items-center justify-center overflow-hidden rounded-[14px] bg-gradient-to-br ${tone[d.tone]}`}
              >
                <span
                  aria-hidden
                  className="absolute -bottom-12 -left-10 size-44 rounded-full bg-white/10 transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-125"
                />
                <span
                  aria-hidden
                  className="absolute -top-14 -right-12 size-40 rounded-full bg-white/10 transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-125"
                />
                <span className="relative font-[family-name:var(--font-display)] text-[68px] leading-none font-medium tracking-[-0.05em] text-white/95 transition-transform duration-[700ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.08]">
                  {d.initials}
                </span>
                <span className="absolute bottom-3.5 left-3.5 rounded-full bg-white/[0.18] px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                  {d.focus}
                </span>
              </div>

              <div className="px-3 pt-5 pb-3">
                <h3 className="text-[19px] leading-tight">{d.name}</h3>
                <p className="mt-1.5 text-[13.5px] leading-[20px] text-[var(--color-muted)]">
                  {d.credential}
                </p>
                <p className="mt-3 text-[13.5px] leading-[21px] text-[var(--color-muted)]">
                  {d.detail}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] py-1.5 pr-3.5 pl-1.5 text-[12.5px] font-medium text-[var(--color-ink)]">
                  <span className="grid size-5 place-items-center rounded-full bg-[var(--color-accent)] text-white">
                    <Check className="size-3" strokeWidth={2.4} />
                  </span>
                  {d.school}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="shell mt-10 flex flex-wrap items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => nudge(-1)}
            disabled={atStart}
            aria-label="Previous doctor"
            className="grid size-12 place-items-center rounded-full bg-white text-[var(--color-ink)] shadow-[0_8px_22px_rgba(27,18,61,0.1)] transition-[opacity,transform] duration-300 hover:-translate-x-0.5 disabled:pointer-events-none disabled:opacity-35"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            onClick={() => nudge(1)}
            disabled={atEnd}
            aria-label="Next doctor"
            className="grid size-12 place-items-center rounded-full bg-[var(--color-ink)] text-white shadow-[0_8px_22px_rgba(27,18,61,0.18)] transition-[opacity,transform] duration-300 hover:translate-x-0.5 disabled:pointer-events-none disabled:opacity-35"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
        <Button href="/#contact">Book With a Doctor</Button>
      </div>
    </section>
  );
}
