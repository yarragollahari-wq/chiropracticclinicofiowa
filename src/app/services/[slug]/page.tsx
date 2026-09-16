import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Pill, Reveal } from "@/components/ui";
import { ArrowUpRight, Check, Glyph, Mail, Phone, Pin } from "@/components/Icons";
import ServiceFaq from "@/components/service/ServiceFaq";
import { clinic, services } from "@/lib/site";
import { servicePages } from "@/lib/serviceContent";

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) return { title: "Service" };
  return {
    title: `${page.name} in Cedar Rapids`,
    description: page.intro.slice(0, 165),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) notFound();

  const meta = services.find((s) => s.slug === slug);
  const related = page.related
    .map((r) => services.find((s) => s.slug === r))
    .filter(Boolean) as typeof services;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: page.name,
            description: page.intro,
            provider: { "@type": "Chiropractic", name: clinic.name },
          }),
        }}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="panel mt-[88px] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7ff_100%)] pt-16 pb-20 lg:pt-20">
        <div className="shell">
          <Reveal>
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-[14px] text-[var(--color-muted)]"
            >
              <Link href="/" className="transition-colors hover:text-[var(--color-ink)]">
                Home
              </Link>
              <span aria-hidden>/</span>
              <Link
                href="/#services"
                className="transition-colors hover:text-[var(--color-ink)]"
              >
                Services
              </Link>
              <span aria-hidden>/</span>
              <span className="text-[var(--color-ink)]">{page.name}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-14">
            <div>
              <Reveal>
                <Pill>
                  <span className="flex items-center gap-2">
                    {meta && (
                      <Glyph name={meta.icon} className="size-[18px] text-[var(--color-brand)]" />
                    )}
                    {page.tagline}
                  </span>
                </Pill>
              </Reveal>
              <Reveal delay={0.08} className="mt-6">
                <h1 className="max-w-[14ch]">{page.name}</h1>
              </Reveal>
              <Reveal delay={0.16} className="mt-6 max-w-[62ch]">
                <p className="text-[var(--color-muted)]">{page.intro}</p>
              </Reveal>

              <Reveal delay={0.24} className="mt-9">
                <div className="flex flex-wrap gap-3">
                  <Button href={clinic.phoneHref}>Book an Appointment</Button>
                  <Button href="/#doctors" variant="outline">
                    Meet the Doctors
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* contact card */}
            <Reveal delay={0.16} y={34}>
              <aside className="rounded-[20px] bg-white p-7 shadow-[0_18px_50px_rgba(27,18,61,0.09)] ring-1 ring-black/[0.04]">
                <h2 className="text-[20px]">Visit or call us</h2>
                <dl className="mt-5 divide-y divide-black/[0.07]">
                  {[
                    {
                      icon: <Pin className="size-[18px]" />,
                      label: "Clinic",
                      value: `${clinic.addressLine1}, ${clinic.addressLine2}`,
                      href: clinic.mapsHref,
                    },
                    {
                      icon: <Phone className="size-[18px]" />,
                      label: "Phone",
                      value: clinic.phone,
                      href: clinic.phoneHref,
                    },
                    {
                      icon: <Mail className="size-[18px]" />,
                      label: "Email",
                      value: clinic.email,
                      href: clinic.emailHref,
                    },
                  ].map((row) => (
                    <div key={row.label} className="flex gap-3.5 py-3.5">
                      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-[var(--color-surface)] text-[var(--color-brand)]">
                        {row.icon}
                      </span>
                      <span className="min-w-0 flex-1">
                        <dt className="text-[12.5px] tracking-[0.06em] text-[var(--color-muted)] uppercase">
                          {row.label}
                        </dt>
                        <dd className="mt-0.5">
                          <a
                            href={row.href}
                            className="text-[15px] leading-[22px] break-words text-[var(--color-ink)] transition-colors hover:text-[var(--color-brand)]"
                          >
                            {row.value}
                          </a>
                        </dd>
                      </span>
                    </div>
                  ))}
                </dl>
                <div className="mt-5">
                  <Button href={clinic.phoneHref} full>
                    Call {clinic.phone}
                  </Button>
                </div>
                <p className="mt-4 text-center text-[13px] leading-[20px] text-[var(--color-muted)]">
                  Mon · Tue · Thu 7:30–11:30 am &amp; 1:30–5:30 pm · Fri mornings
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Hero image ---------------- */}
      <section className="panel mt-4 bg-white">
        <Reveal y={40}>
          <div className="shell">
            <div className="relative h-[280px] overflow-hidden rounded-[20px] sm:h-[400px] lg:h-[480px]">
              <Image
                src={page.heroImage}
                alt={page.heroAlt}
                fill
                priority
                sizes="(max-width: 1120px) 100vw, 1072px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- What it helps with ---------------- */}
      <section className="panel mt-4 bg-white pt-16 lg:pt-20">
        <div className="shell">
          <Reveal>
            <h2 className="max-w-[18ch]">What decompression is used for</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8">
            <ul className="grid gap-x-8 gap-y-3.5 rounded-[20px] bg-[var(--color-surface)] p-7 sm:grid-cols-2 lg:p-9">
              {page.helpsWith.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--color-brand)] text-white">
                    <Check className="size-3.5" strokeWidth={2.4} />
                  </span>
                  <span className="text-[15.5px] leading-[24px] text-[var(--color-ink)]">
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Long-form sections ---------------- */}
      <section className="panel mt-4 bg-white py-16 lg:py-20">
        <div className="shell space-y-20 lg:space-y-24">
          {page.sections.map((s, i) => (
            <article key={s.heading}>
              <Reveal>
                <h2 className="max-w-[20ch]">{s.heading}</h2>
              </Reveal>
              <div className="mt-6 grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start lg:gap-14">
                <div className="space-y-5">
                  {s.body.map((p, j) => (
                    <Reveal key={j} delay={0.06 * j}>
                      <p className="text-[var(--color-muted)]">{p}</p>
                    </Reveal>
                  ))}
                  {s.list && (
                    <Reveal delay={0.12}>
                      <ul className="mt-2 space-y-3 rounded-[16px] bg-[var(--color-surface)] p-6">
                        {s.list.map((l) => (
                          <li key={l} className="flex items-start gap-3">
                            <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                            <span className="text-[15.5px] leading-[24px] text-[var(--color-ink)]">
                              {l}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  )}
                </div>

                {s.image && (
                  <Reveal delay={0.12} y={34}>
                    <div
                      className={`relative h-[300px] overflow-hidden rounded-[20px] lg:h-[380px] ${
                        i % 2 === 1 ? "lg:order-first" : ""
                      }`}
                    >
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 430px"
                        className="object-cover"
                      />
                    </div>
                  </Reveal>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------------- Visit steps ---------------- */}
      <section className="panel mt-4 overflow-hidden bg-[var(--color-ink)] py-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(55% 45% at 82% 6%, rgba(19,68,254,0.5), transparent 68%)",
          }}
        />
        <div className="shell relative z-10">
          <Reveal>
            <Pill tone="onBlue">Getting started</Pill>
          </Reveal>
          <Reveal delay={0.08} className="mt-6">
            <h2 className="max-w-[16ch] text-white">
              Three steps from first call to relief.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {page.visit.map((v, i) => (
              <Reveal key={v.n} delay={0.1 + i * 0.09}>
                <div className="h-full rounded-[20px] bg-white/[0.06] p-7 ring-1 ring-inset ring-white/10 transition-colors duration-500 hover:bg-white/[0.1]">
                  <span className="font-[family-name:var(--font-display)] text-[15px] font-medium tracking-[0.1em] text-[var(--color-brand)]">
                    /{v.n}
                  </span>
                  <h3 className="mt-3 text-[21px] text-white">{v.title}</h3>
                  <p className="mt-3 text-[15px] leading-[24px] text-white/60">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4} className="mt-10">
            <Button href={clinic.phoneHref} variant="white">
              Start With a Consultation
            </Button>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FAQ ---------------- */}
      <ServiceFaq faqs={page.faqs} />

      {/* ---------------- Related ---------------- */}
      <section className="panel mt-4 bg-white pt-4 pb-20 lg:pb-24">
        <div className="shell">
          <Reveal>
            <h2 className="max-w-[18ch]">Often paired with</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex h-full flex-col rounded-[20px] bg-[var(--color-surface)] p-7 transition-colors duration-500 hover:bg-[#eef1fb]"
                >
                  <span className="grid size-14 place-items-center rounded-full bg-[var(--color-brand)] text-white transition-transform duration-[700ms] ease-[var(--ease-out-expo)] group-hover:scale-110">
                    <Glyph name={r.icon} className="size-6" strokeWidth={1.4} />
                  </span>
                  <h3 className="mt-5 text-[20px]">{r.name}</h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-[24px] text-[var(--color-muted)]">
                    {r.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-[var(--color-brand)]">
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="panel mt-4 overflow-hidden bg-[linear-gradient(140deg,#1344fe_0%,#3d63ff_55%,#1b123d_100%)] py-20 lg:py-24">
        <div className="shell relative z-10 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="max-w-[17ch] text-white">
              Find out whether this is the right treatment for you.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-5 max-w-[48ch]">
            <p className="text-white/75">
              It starts with an exam, not a sales pitch. {clinic.addressFull}
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-9">
            <div className="flex flex-wrap justify-center gap-3">
              <Button href={clinic.phoneHref} variant="white">
                Call {clinic.phone}
              </Button>
              <Button href={clinic.textHref} variant="ink">
                Text Us Instead
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
