"use client";

import { useEffect, useState } from "react";

/**
 * True at Tailwind's `lg` breakpoint and above.
 * Starts false so the server render and first client render agree — the
 * pinned-scroll variants only mount once we know we are on a wide screen.
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isDesktop;
}
