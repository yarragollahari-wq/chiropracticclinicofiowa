"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Framer-grade inertial scrolling. Everything scroll-linked on the page
 * (sticky service rail, parallax panels, progress bars) reads from the
 * same rAF loop, so nothing drifts out of sync.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // in-page anchors route through Lenis so they ease instead of jumping
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || !href.includes("#")) return;
      const hash = href.slice(href.indexOf("#"));
      if (hash.length < 2) return;
      const path = href.split("#")[0];
      if (path && path !== "/" && path !== window.location.pathname) return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96, duration: 1.3 });
      history.replaceState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
