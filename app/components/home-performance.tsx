"use client";

import { useEffect } from "react";

/**
 * Keeps the visual system intact while reducing work the browser performs
 * for effects that are not currently visible.
 */
export default function HomePerformance() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const networkCanvases = Array.from(
      document.querySelectorAll<HTMLCanvasElement>("canvas.network-canvas"),
    );

    const restoreNetworkCanvas = (canvas: HTMLCanvasElement) => {
      if (canvas.dataset.performanceCollapsed !== "true") return;

      canvas.style.width = "";
      canvas.style.height = "";
      canvas.style.visibility = "";
      canvas.dataset.performanceCollapsed = "false";
      window.dispatchEvent(new Event("resize"));
    };

    const collapseNetworkCanvas = (canvas: HTMLCanvasElement) => {
      if (canvas.dataset.performanceCollapsed === "true") return;

      canvas.dataset.performanceCollapsed = "true";
      canvas.style.visibility = "hidden";
      canvas.style.width = "1px";
      canvas.style.height = "1px";
      window.dispatchEvent(new Event("resize"));
    };

    const apply = () => {
      const shouldReduce = reducedMotion.matches || coarsePointer.matches;

      document.querySelectorAll<HTMLElement>(
        ".global-tech-cursor, canvas.global-network-canvas",
      ).forEach((element) => {
        element.style.display = shouldReduce ? "none" : "";
      });

      networkCanvases.forEach((canvas) => {
        if (shouldReduce) {
          canvas.style.display = "none";
        } else {
          canvas.style.display = "";
        }
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

    const canvasObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const canvas = entry.target;
          if (!(canvas instanceof HTMLCanvasElement)) return;

          if (entry.isIntersecting && !document.hidden) {
            restoreNetworkCanvas(canvas);
          } else {
            collapseNetworkCanvas(canvas);
          }
        });
      },
      { rootMargin: "160px 0px", threshold: 0.01 },
    );

    networkCanvases.forEach((canvas) => canvasObserver.observe(canvas));

    const handleVisibility = () => {
      networkCanvases.forEach((canvas) => {
        const rect = canvas.getBoundingClientRect();
        const nearViewport = rect.bottom >= -160 && rect.top <= window.innerHeight + 160;

        if (document.hidden || !nearViewport) {
          collapseNetworkCanvas(canvas);
        } else {
          restoreNetworkCanvas(canvas);
        }
      });
    };

    apply();
    handleVisibility();

    reducedMotion.addEventListener("change", apply);
    coarsePointer.addEventListener("change", apply);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      canvasObserver.disconnect();
      networkCanvases.forEach(restoreNetworkCanvas);
      reducedMotion.removeEventListener("change", apply);
      coarsePointer.removeEventListener("change", apply);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return null;
}
