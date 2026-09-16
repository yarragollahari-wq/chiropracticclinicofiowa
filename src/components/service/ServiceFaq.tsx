"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Reveal } from "@/components/ui";
import { Plus } from "@/components/Icons";

export default function ServiceFaq({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="panel mt-4 bg-white py-20 lg:py-24">
      <div className="shell">
        <Reveal>
          <h2 className="max-w-[18ch]">Questions patients ask</h2>
        </Reveal>

        <div className="mt-8 rounded-[20px] bg-[var(--color-surface)] p-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-[14px] bg-white transition-shadow duration-500 ${
                  i > 0 ? "mt-2" : ""
                } ${isOpen ? "shadow-[0_10px_30px_rgba(27,18,61,0.08)]" : ""}`}
              >
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="hidden font-[family-name:var(--font-display)] text-[15px] font-medium tracking-[0.08em] text-[var(--color-muted)]/60 sm:block">
                      /{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-[family-name:var(--font-display)] text-[17px] leading-[1.35] font-medium tracking-[-0.025em] text-[var(--color-ink)] sm:text-[19px]">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{
                        rotate: isOpen ? 45 : 0,
                        backgroundColor: isOpen ? "#1b123d" : "#f5f6f9",
                        color: isOpen ? "#ffffff" : "#1b123d",
                      }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="grid size-9 shrink-0 place-items-center rounded-full"
                    >
                      <Plus className="size-[18px]" />
                    </motion.span>
                  </button>
                </h3>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-6 text-[15.5px] leading-[26px] text-[var(--color-muted)] sm:px-6 sm:pl-[68px]">
                    {f.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
