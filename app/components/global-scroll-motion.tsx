"use client";

import { useAnimate } from "framer-motion";
import { useEffect } from "react";

const SELECTORS = [
  ".techcraft main section:not(.hero)",
  ".about-page > section:not(.about-hero)",
];

function getAnimatedTargets(section: Element) {
  const directChildren = Array.from(section.children).filter(
    (element) => !element.classList.contains("about-grid") && !element.classList.contains("about-scan"),
  );

  const cards = section.querySelectorAll(
    ".service-card, .project-card, .about-stat, .about-capability, .about-process, .about-principle, .about-side-card, article",
  );

  return Array.from(new Set([...directChildren, ...Array.from(cards)]));
}

export default function GlobalScrollMotion() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const sections = SELECTORS.flatMap((selector) =>
      Array.from(root.querySelectorAll<HTMLElement>(selector)),
    );

    if (!sections.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const animatedSections = new Set<Element>();

    const reveal = async (section: Element) => {
      if (animatedSections.has(section)) return;
      animatedSections.add(section);

      const targets = getAnimatedTargets(section);
      if (!targets.length) return;

      await animate(
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
          delay: 0.04,
          stagger: 0.075,
        },
      );
    };

    const prepare = (section: Element) => {
      const targets = getAnimatedTargets(section);
      targets.forEach((target) => {
        target.setAttribute("data-scroll-motion", "pending");
      });

      targets.forEach((target) => {
        Object.assign((target as HTMLElement).style, {
          opacity: "0",
          transform: "translate3d(0, 34px, 0) scale(.985)",
          filter: "blur(4px)",
          willChange: "opacity, transform, filter",
        });
      });
    };

    sections.forEach(prepare);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            void reveal(entry.target);
            observer.unobserve(entry.target);
          }
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

  return <div ref={scope} className="global-scroll-motion-root" aria-hidden="true" />;
}
