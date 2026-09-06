"use client";

import { useEffect } from "react";

/**
 * Keeps the existing visual system intact while reducing the cost of
 * animation-heavy effects on touch devices and for reduced-motion users.
 */
export default function HomePerformance() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const apply = () => {
      const shouldReduce = reducedMotion.matches || coarsePointer.matches;

      document.querySelectorAll<HTMLCanvasElement>("canvas.network-canvas").forEach((canvas) => {
        canvas.style.display = shouldReduce ? "none" : "";
      });

      document.querySelectorAll<HTMLElement>(
        ".animate-marquee-left, .animate-marquee-right"
      ).forEach((element) => {
        element.style.animationPlayState = reducedMotion.matches ? "paused" : "";
      });
    };

    apply();

    reducedMotion.addEventListener("change", apply);
    coarsePointer.addEventListener("change", apply);

    return () => {
      reducedMotion.removeEventListener("change", apply);
      coarsePointer.removeEventListener("change", apply);
    };
  }, []);

  return null;
}
