import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);
export const ArrowLeft = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 12H4M10 6l-6 6 6 6" />
  </svg>
);
export const Plus = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.6 3h3l1.5 4-2 1.4a12.5 12.5 0 0 0 5.5 5.5l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3Z" />
  </svg>
);
export const Pin = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);
export const Mail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.6 7 7.5 5.4a1.5 1.5 0 0 0 1.8 0L20.4 7" />
  </svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="m12 2.8 2.7 5.9 6.3.7-4.7 4.3 1.3 6.3-5.6-3.2-5.6 3.2 1.3-6.3L3 9.4l6.3-.7Z" />
  </svg>
);
export const Quote = (p: P) => (
  <svg viewBox="0 0 48 36" fill="currentColor" {...p}>
    <path d="M0 36V22.2C0 9.9 6.4 2 18.6 0l2 5.4C13.4 7.6 9.7 11.6 9.4 17.2H19V36H0Zm29 0V22.2C29 9.9 35.4 2 47.6 0l2 5.4c-7.2 2.2-10.9 6.2-11.2 11.8H48V36H29Z" />
  </svg>
);

/* ---- Service glyphs ---- */
export const IconSpine = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3v18" />
    <path d="M8.6 5.4h6.8M8 9h8M8 13h8M8.6 16.8h6.8" />
    <circle cx="12" cy="7.2" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="14.9" r="1" fill="currentColor" stroke="none" />
  </svg>
);
export const IconWave = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 12h3l2.5-6 3 12L13 8l2.2 6 1.8-3h5" />
  </svg>
);
export const IconDecompress = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2v5M12 17v5" />
    <path d="m9 5 3-3 3 3M9 19l3 3 3-3" />
    <rect x="4.5" y="9" width="15" height="6" rx="2.4" />
  </svg>
);
export const IconPulse = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 12h4l2-5 3.5 10L15 8l2 4h5" />
  </svg>
);
export const IconRehab = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="4.6" r="2.1" />
    <path d="M12 7v6M8 10.5 12 9l4 1.5M9.5 21l2.5-8 2.5 8" />
  </svg>
);
export const IconShield = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2.8 20 6v6c0 5-3.4 8-8 9.2C7.4 20 4 17 4 12V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const IconAthlete = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="14.5" cy="4.5" r="2" />
    <path d="M9 21.5 12 16l-2.8-2.8a2 2 0 0 1 0-2.8L12 7.5l3.4 3H19M12 16l4 1.5 1.5 4M9.5 11.5 6 12" />
  </svg>
);
export const IconTruck = (p: P) => (
  <svg {...base} {...p}>
    <path d="M2 7.5h11v9H2zM13 11h4l3 3v2.5h-7z" />
    <circle cx="6.5" cy="18.5" r="1.8" />
    <circle cx="16.5" cy="18.5" r="1.8" />
  </svg>
);
export const IconTeam = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M2.5 19.5a6.5 6.5 0 0 1 13 0" />
    <path d="M16 6.2a3 3 0 0 1 0 5.8M17.5 14.4a6.5 6.5 0 0 1 4 5.1" />
  </svg>
);
export const IconHeart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 20.5s-8-4.9-8-10.2A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 3.3c0 5.3-8 10.2-8 10.2Z" />
  </svg>
);
export const IconSpark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 2.5 14 9l6.5 2-6.5 2-2 6.5-2-6.5L3.5 11 10 9Z" />
  </svg>
);

const glyphs = {
  spine: IconSpine,
  wave: IconWave,
  decompress: IconDecompress,
  pulse: IconPulse,
  rehab: IconRehab,
  shield: IconShield,
  athlete: IconAthlete,
  truck: IconTruck,
  team: IconTeam,
  heart: IconHeart,
  spark: IconSpark,
} as const;

export type GlyphName = keyof typeof glyphs;

export function Glyph({ name, ...rest }: { name: string } & P) {
  const C = glyphs[name as GlyphName] ?? IconSpark;
  return <C {...rest} />;
}

/**
 * Mark: a stylised spinal column — four stacked vertebrae tapering as they
 * rise, with the topmost picked out in the accent colour.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" className={className} aria-hidden>
      <rect x="6" y="24.5" width="24" height="7.5" rx="3.75" fill="var(--color-brand)" />
      <rect
        x="8.5"
        y="16.2"
        width="19"
        height="7"
        rx="3.5"
        fill="var(--color-brand)"
        opacity=".72"
      />
      <rect
        x="11"
        y="8.4"
        width="14"
        height="6.5"
        rx="3.25"
        fill="var(--color-brand)"
        opacity=".48"
      />
      <rect x="13.4" y="1.6" width="9.2" height="5.6" rx="2.8" fill="var(--color-accent)" />
    </svg>
  );
}
