"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";
import { Button } from "@/components/ui";
import { Check, Glyph } from "@/components/Icons";
import { doctors, services } from "@/lib/site";

const toneMap = {
  blue: "from-[#dfe6ff] to-[#f3f5ff] text-[var(--color-brand)]",
  ink: "from-[#e4e2f0] to-[#f5f4fa] text-[var(--color-ink)]",
  accent: "from-[#ffe4dc] to-[#fff4f0] text-[var(--color-accent)]",
  soft: "from-[#e2ecff] to-[#f4f8ff] text-[var(--color-brand-600)]",
} as const;

/** Compact doctor chip used inside the hero marquee columns. */
function DoctorChip({ d }: { d: (typeof doctors)[number] }) {
  return (
    <div className="group flex items-center gap-3.5 rounded-[16px] bg-white/85 p-3 ring-1 ring-black/[0.05] backdrop-blur-sm transition-[box-shadow,transform] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-[2px] hover:shadow-[0_14px_34px_rgba(27,18,61,0.1)]">
      <span
        className={`grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br font-[family-name:var(--font-display)] text-[16px] font-semibold ${toneMap[d.tone]}`}
      >
        {d.initials}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-[family-name:var(--font-display)] text-[15.5px] font-medium tracking-[-0.02em] text-[var(--color-ink)]">
          {d.name}
        </span>
        <span className="block truncate text-[13px] text-[var(--color-muted)]">
          {d.focus}
        </span>
      </span>
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[var(--color-surface)] text-[var(--color-brand)] transition-colors duration-500 group-hover:bg-[var(--color-brand)] group-hover:text-white">
        <Check className="size-4" />
      </span>
    </div>
  );
}

/** Service chip — the second card species in the marquee columns. */
function ServiceChip({ s }: { s: (typeof services)[number] }) {
  return (
    <div className="group flex items-center gap-3.5 rounded-[16px] bg-[var(--color-ink)] p-3 ring-1 ring-white/10 transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-[2px]">
      <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10 text-white">
        <Glyph name={s.icon} className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-[family-name:var(--font-display)] text-[15.5px] font-medium tracking-[-0.02em] text-white">
          {s.name}
        </span>
        <span className="block truncate text-[13px] text-white/55">{s.short}</span>
      </span>
    </div>
  );
}

function Column({
  items,
  dir,
  dur,
}: {
  items: ReactNode[];
  dir: "up" | "down";
  dur: string;
}) {
  const loop = [...items, ...items];
  return (
    <div className="marquee-pause h-full overflow-hidden">
      <div
        className={dir === "up" ? "marquee-up" : "marquee-down"}
        style={{ ["--dur" as string]: dur }}
      >
        <div className="flex flex-col gap-3 pb-3">
          {loop.map((n, i) => (
            <div key={i}>{n}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const railY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const docChips = doctors.map((d) => <DoctorChip key={d.name} d={d} />);
  const svcChips = services.map((s) => <ServiceChip key={s.slug} s={s} />);

  const colA = [docChips[0], svcChips[0], docChips[3], svcChips[4]];
  const colB = [svcChips[2], docChips[1], svcChips[5], docChips[4], svcChips[1]];
  const colC = [docChips[2], svcChips[3], docChips[0], svcChips[7]];
  const colD = [svcChips[6], docChips[4], svcChips[2], docChips[1]];

  return (
    <header
      ref={ref}
      className="panel relative mt-[88px] min-h-[calc(100svh-104px)] bg-[linear-gradient(180deg,#ffffff_0%,#f2f5ff_38%,#dbe3ff_72%,#1344fe_100%)] pt-16 pb-14 sm:pt-20"
    >
      {/* soft radial bloom behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[560px] opacity-70"
        style={{
          background:
            "radial-gradient(70% 55% at 50% 12%, rgba(19,68,254,0.13), transparent 70%)",
        }}
      />

      <motion.div
        style={{ y: copyY, opacity: copyOpacity }}
        className="shell relative z-10 flex flex-col items-center text-center"
      >
        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex max-w-full items-center gap-2.5 rounded-full bg-white py-2 pr-4 pl-2 shadow-[2px_4px_14px_rgba(27,18,61,0.07)] ring-1 ring-black/[0.04] sm:gap-3 sm:pr-[18px]"
        >
          <span className="flex -space-x-1.5 sm:-space-x-2">
            {doctors.slice(0, 4).map((d) => (
              <span
                key={d.initials}
                className={`grid size-7 place-items-center rounded-full bg-gradient-to-br font-[family-name:var(--font-display)] text-[10px] font-semibold ring-2 ring-white sm:size-8 sm:text-[11px] ${toneMap[d.tone]}`}
              >
                {d.initials}
              </span>
            ))}
            <span className="grid size-7 place-items-center rounded-full bg-[var(--color-accent)] text-[10px] font-semibold text-white ring-2 ring-white sm:size-8 sm:text-[11px]">
              +1
            </span>
          </span>
          <span className="text-[13px] font-medium tracking-[-0.01em] whitespace-nowrap text-[var(--color-ink)] sm:text-[14.5px]">
            <span className="sm:hidden">Five Palmer-trained doctors</span>
            <span className="hidden sm:inline">
              Five Palmer-trained doctors. One Cedar Rapids clinic.
            </span>
          </span>
        </motion.div>

        {/* Headline — word-by-word rise */}
        <h1 className="mt-7 max-w-[19ch]">
          {"Move better, feel better, live with less pain."
            .split(" ")
            .map((word, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{
                    duration: 0.95,
                    delay: 0.12 + i * 0.055,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block pr-[0.26em]"
                >
                  {word}
                </motion.span>
              </span>
            ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-[54ch] text-[var(--color-muted)]"
        >
          Conservative, personalised chiropractic care in Cedar Rapids — a real
          alternative to surgery and long-term medication, from doctors who treat
          your whole family.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 grid w-full max-w-[420px] gap-3 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:items-center sm:justify-center"
        >
          <Button href="/#contact" className="max-sm:w-full">
            Book an Appointment
          </Button>
          <Button href="/#services" variant="white" className="max-sm:w-full">
            Explore Services
          </Button>
        </motion.div>
      </motion.div>

      {/* Card rail */}
      <motion.div
        style={{ y: railY }}
        className="relative z-0 mt-12 h-[360px] sm:mt-14 sm:h-[420px]"
      >
        <div className="shell-wide mask-fade-y h-full">
          <div className="grid h-full grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              { items: colA, dir: "up" as const, dur: "44s", d: 0.55, hide: false },
              { items: colB, dir: "down" as const, dur: "54s", d: 0.66, hide: false },
              { items: colC, dir: "up" as const, dur: "49s", d: 0.77, hide: true },
              { items: colD, dir: "down" as const, dur: "58s", d: 0.88, hide: true },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: c.d, ease: [0.16, 1, 0.3, 1] }}
                className={c.hide ? "hidden h-full lg:block" : "h-full"}
              >
                <Column items={c.items} dir={c.dir} dur={c.dur} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
