"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button, SectionHeading } from "@/components/ui";
import { ArrowUpRight } from "@/components/Icons";
import { articles } from "@/lib/site";

export default function Insights() {
  return (
    <section className="panel mt-4 bg-[linear-gradient(180deg,#ffffff_0%,#f5f7ff_100%)] py-24 lg:py-32">
      <div className="shell">
        <SectionHeading
          eyebrow="Patient education"
          lines={["Answers before", "your first visit"]}
        />

        <div className="mt-14 grid gap-4 lg:mt-16 lg:grid-cols-3">
          {articles.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 44, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/#contact"
                className="group flex h-full flex-col overflow-hidden rounded-[20px] bg-white ring-1 ring-black/[0.05] transition-shadow duration-500 hover:shadow-[0_22px_52px_rgba(27,18,61,0.11)]"
              >
                <div className="relative h-[230px] overflow-hidden">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover transition-transform duration-[1100ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.07]"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/92 px-3 py-1.5 text-[12.5px] font-medium text-[var(--color-ink)] backdrop-blur-sm">
                    {a.readTime}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-[21px] leading-[1.24]">{a.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-[24px] text-[var(--color-muted)]">
                    {a.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-black/[0.07] pt-5">
                    <span>
                      <span className="block text-[14.5px] font-medium text-[var(--color-ink)]">
                        {a.author}
                      </span>
                      <span className="block text-[13px] text-[var(--color-muted)]">
                        {a.role}
                      </span>
                    </span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[var(--color-surface)] text-[var(--color-ink)] transition-colors duration-500 group-hover:bg-[var(--color-brand)] group-hover:text-white">
                      <ArrowUpRight className="size-[18px] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/#contact" variant="outline">
            Ask Us a Question
          </Button>
        </div>
      </div>
    </section>
  );
}
