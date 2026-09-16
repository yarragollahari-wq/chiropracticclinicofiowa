import Link from "next/link";
import { Button } from "./ui";
import { Logo, Mail, Phone, Pin } from "./Icons";
import { clinic, services } from "@/lib/site";

const columns = [
  {
    title: "Clinic",
    links: [
      { label: "Our Doctors", href: "/#doctors" },
      { label: "New Patients", href: "/#new-patients" },
      { label: "Patient Education", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: services.slice(0, 4).map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
    })),
  },
  {
    title: "Also offered",
    links: services.slice(4).map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
    })),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-brand)] pt-24 pb-6">
      {/* oversized watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-4 text-center font-[family-name:var(--font-display)] text-[clamp(56px,13vw,196px)] leading-none font-semibold tracking-[-0.05em] whitespace-nowrap text-white/[0.09] select-none"
      >
        Move Better
      </span>

      <div className="shell relative z-10">
        <div className="overflow-hidden rounded-[20px] bg-white">
          {/* top: promise + CTA */}
          <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[270px_1fr] lg:items-center lg:gap-12">
            <div className="flex items-center gap-3">
              <Logo className="size-14" />
              <span className="leading-[1.1]">
                <span className="block font-[family-name:var(--font-display)] text-[19px] leading-[1.15] font-semibold tracking-[-0.035em] whitespace-nowrap text-[var(--color-ink)]">
                  Chiropractic Clinic
                </span>
                <span className="block font-[family-name:var(--font-display)] text-[13px] font-medium tracking-[0.16em] text-[var(--color-brand)] uppercase">
                  of Iowa
                </span>
              </span>
            </div>

            <div className="lg:border-l lg:border-black/[0.08] lg:pl-12">
              <h3 className="max-w-[22ch] text-[26px] leading-[1.2] lg:text-[30px]">
                Helping you move better, feel better, and live with less pain.
              </h3>
              <div className="mt-6">
                <Button href={clinic.phoneHref}>Book an Appointment</Button>
              </div>
            </div>
          </div>

          {/* middle: contact + link columns */}
          <div className="grid gap-10 border-t border-black/[0.08] p-8 sm:p-10 lg:grid-cols-[270px_1fr] lg:gap-12">
            <address className="space-y-3.5 not-italic">
              <a
                href={clinic.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-3 text-[15px] leading-[23px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <Pin className="mt-0.5 size-[18px] shrink-0 text-[var(--color-brand)]" />
                <span>
                  {clinic.addressLine1}
                  <br />
                  {clinic.addressLine2}
                </span>
              </a>
              <a
                href={clinic.phoneHref}
                className="flex items-center gap-3 text-[15px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <Phone className="size-[18px] shrink-0 text-[var(--color-brand)]" />
                {clinic.phone}
              </a>
              <a
                href={clinic.textHref}
                className="flex items-center gap-3 text-[15px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <span className="grid size-[18px] shrink-0 place-items-center text-[11px] font-semibold text-[var(--color-brand)]">
                  TXT
                </span>
                {clinic.textLine}
              </a>
              <a
                href={clinic.emailHref}
                className="flex items-center gap-3 text-[14px] leading-[21px] break-all text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
              >
                <Mail className="size-[18px] shrink-0 text-[var(--color-brand)]" />
                {clinic.email}
              </a>

              <div className="flex gap-2 pt-2">
                {[
                  { label: "Facebook", href: clinic.facebook, mark: "f" },
                  { label: "LinkedIn", href: clinic.linkedin, mark: "in" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid size-10 place-items-center rounded-full bg-[var(--color-surface)] font-[family-name:var(--font-display)] text-[14px] font-semibold text-[var(--color-ink)] transition-colors duration-300 hover:bg-[var(--color-brand)] hover:text-white"
                  >
                    {s.mark}
                  </a>
                ))}
              </div>
            </address>

            <div className="grid gap-8 sm:grid-cols-3 lg:border-l lg:border-black/[0.08] lg:pl-12">
              {columns.map((c) => (
                <div key={c.title}>
                  <p className="font-[family-name:var(--font-display)] text-[15px] font-medium tracking-[-0.02em] text-[var(--color-ink)]">
                    {c.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="group inline-flex text-[14.5px] text-[var(--color-muted)] transition-colors duration-300 hover:text-[var(--color-brand)]"
                        >
                          <span className="bg-[linear-gradient(var(--color-brand),var(--color-brand))] bg-[length:0%_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover:bg-[length:100%_1px]">
                            {l.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* bottom bar */}
          <div className="flex flex-col gap-2 border-t border-black/[0.08] px-8 py-5 text-[13.5px] text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <p>
              © {new Date().getFullYear()} {clinic.name}. All rights reserved.
            </p>
            <p>
              Closed Wednesdays &amp; weekends · Serving {clinic.serviceArea}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-[12.5px] leading-[19px] text-white/55">
          This site is for general information only and is not medical advice. If
          you are having a medical emergency, call 911.
        </p>
      </div>
    </footer>
  );
}
