"use client";

import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

const SECTION_SELECTORS = [
  ".techcraft main section:not(.hero)",
  ".about-page > section:not(.about-hero)",
];

function getAnimatedTargets(section: Element) {
  const directChildren = Array.from(section.children).filter(
    (element) =>
      !element.classList.contains("about-grid") &&
      !element.classList.contains("about-scan"),
  );

  const cards = Array.from(
    section.querySelectorAll<HTMLElement>(
      ".service-card, .project-card, .about-stat, .about-capability, .about-process, .about-principle, .about-side-card, article",
    ),
  );

  return Array.from(new Set([...directChildren, ...cards]));
}

export default function GlobalScrollMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 115,
    damping: 28,
    mass: 0.55,
  });

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = SECTION_SELECTORS.flatMap((selector) =>
      Array.from(root.querySelectorAll<HTMLElement>(selector)),
    );

    sections.forEach((section) => {
      const targets = getAnimatedTargets(section);
      targets.forEach((target) => {
        (target as HTMLElement).dataset.scrollMotion = "ready";
      });
    });
  }, [children]);

  useMotionValueEvent(smoothScrollY, "change", (latest) => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const viewportHeight = window.innerHeight || 1;
    const viewportCenter = latest + viewportHeight * 0.52;
    const sections = SECTION_SELECTORS.flatMap((selector) =>
      Array.from(root.querySelectorAll<HTMLElement>(selector)),
    );

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = latest + rect.top;
      const sectionCenter = sectionTop + rect.height * 0.5;
      const distance = sectionCenter - viewportCenter;
      const normalized = Math.max(-1, Math.min(1, distance / (viewportHeight * 0.9)));
      const intensity = 1 - Math.min(1, Math.abs(normalized));

      section.style.setProperty("--scroll-shift", `${normalized * -16}px`);
      section.style.setProperty("--scroll-scale", `${0.985 + intensity * 0.015}`);
      section.style.setProperty("--scroll-tilt", `${normalized * -0.45}deg`);
      section.style.setProperty("--scroll-glow", `${intensity}`);
    });
  });

  return (
    <div ref={rootRef} className="global-scroll-motion-root">
      <div className="global-scroll-progress" aria-hidden="true" />
      {children}
    </div>
  );
}
