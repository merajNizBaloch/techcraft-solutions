"use client";

import { motion, useAnimate } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect } from "react";

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
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const sections = SECTION_SELECTORS.flatMap((selector) =>
      Array.from(root.querySelectorAll<HTMLElement>(selector)),
    );

    if (!sections.length) return;

    sections.forEach((section) => {
      getAnimatedTargets(section).forEach((target) => {
        const element = target as HTMLElement;
        element.dataset.scrollMotion = "pending";
        element.style.opacity = "0";
        element.style.transform = "translate3d(0, 34px, 0) scale(.985)";
        element.style.filter = "blur(4px)";
        element.style.willChange = "opacity, transform, filter";
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const targets = getAnimatedTargets(entry.target);

          void animate(
            targets,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
            {
              duration: 0.72,
              ease: [0.16, 1, 0.3, 1],
              stagger: 0.075,
            },
          ).then(() => {
            targets.forEach((target) => {
              const element = target as HTMLElement;
              element.style.willChange = "auto";
              element.dataset.scrollMotion = "revealed";
            });
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [animate, scope]);

  return <motion.div ref={scope} className="global-scroll-motion-root">{children}</motion.div>;
}
