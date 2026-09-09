"use client";

import { useEffect } from "react";

/**
 * Keeps the visual system intact while reducing expensive motion on
 * touch/coarse-pointer devices and for reduced-motion users.
 */
export default function HomePerformance() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    const apply = () => {
      const shouldReduce = reducedMotion.matches || coarsePointer.matches;

      document.querySelectorAll<HTMLElement>(
        ".global-tech-cursor, canvas.network-canvas, canvas.global-network-canvas",
      ).forEach((element) => {
        element.style.display = shouldReduce ? "none" : "";
      });

      document.querySelectorAll<HTMLElement>(
        ".animate-marquee-left, .animate-marquee-right",
      ).forEach((element) => {
        element.style.animationPlayState = reducedMotion.matches ? "paused" : "";
      });

      document.querySelectorAll<HTMLElement>(".global-neural-svg").forEach((element) => {
        element.style.animationPlayState = shouldReduce ? "paused" : "";
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
