"use client";

import { useEffect } from "react";

/**
 * Applies lightweight runtime safeguards to the existing homepage effects.
 *
 * The visual design stays unchanged on capable desktop devices, while
 * reduced-motion users and touch-first devices avoid the heaviest animation
 * loops already present in the homepage.
 */
export default function HomePerformance() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const apply = () => {
      root.toggleAttribute("data-reduced-motion", reducedMotion.matches);
      root.toggleAttribute("data-coarse-pointer", coarsePointer.matches);

      document.querySelectorAll<HTMLCanvasElement>("canvas.network-canvas").forEach((canvas) => {
        canvas.toggleAttribute("data-performance-hidden", reducedMotion.matches || coarsePointer.matches);
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
