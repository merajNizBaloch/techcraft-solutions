"use client";

import { motion, useAnimate } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect } from "react";

const SECTION_SELECTORS = [
  ".techcraft main section:not(.hero)",
  ".about-page > section:not(.about-hero)",
  ".services-page > section:not(:first-child)",
];

const HERO_SELECTORS = [
  ".techcraft .hero",
  ".about-page .about-hero",
  ".services-page > section:first-of-type",
];

const TARGET_SELECTOR =
  ".service-card, .project-card, .service-detail-card, .service-process, .about-stat, .about-capability, .about-process, .about-principle, .about-side-card";

function getTargets(section: Element) {
  const direct = Array.from(section.children).filter(
    (element) =>
      !element.classList.contains("about-grid") &&
      !element.classList.contains("about-scan"),
  );

  const cards = Array.from(section.querySelectorAll<HTMLElement>(TARGET_SELECTOR));

  return Array.from(new Set([...direct, ...cards]));
}

function setInitialState(targets: Element[]) {
  targets.forEach((target, index) => {
    const element = target as HTMLElement;
    element.dataset.scrollReveal = "pending";
    element.style.opacity = "0";
    element.style.transform = index % 3 === 0
      ? "translate3d(-54px, 18px, 0)"
      : index % 3 === 1
        ? "translate3d(0, 54px, 0)"
        : "translate3d(54px, 18px, 0)";
    element.style.filter = "blur(5px)";
    element.style.willChange = "opacity, transform, filter";
  });
}

export default function GlobalScrollMotion({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const heroes = HERO_SELECTORS.flatMap((selector) =>
      Array.from(root.querySelectorAll<HTMLElement>(selector)),
    );

    const sections = SECTION_SELECTORS.flatMap((selector) =>
      Array.from(root.querySelectorAll<HTMLElement>(selector)),
    );

    const heroTargets = heroes.flatMap((hero) => getTargets(hero));
    heroTargets.forEach((target, index) => {
      const element = target as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = index % 2 === 0
        ? "translate3d(-32px, 18px, 0)"
        : "translate3d(32px, 24px, 0)";
      element.style.filter = "blur(4px)";
      element.style.willChange = "opacity, transform, filter";
    });

    const heroTimer = window.setTimeout(() => {
      void animate(
        heroTargets,
        { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
        {
          duration: 0.9,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.08,
          stagger: 0.1,
        },
      ).then(() => {
        heroTargets.forEach((target) => {
          (target as HTMLElement).style.willChange = "auto";
        });
      });
    }, 80);

    sections.forEach((section) => setInitialState(getTargets(section)));

    const revealed = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || revealed.has(entry.target)) return;
          revealed.add(entry.target);

          const targets = getTargets(entry.target);

          void animate(
            targets,
            { opacity: 1, x: 0, y: 0, filter: "blur(0px)" },
            {
              duration: 0.78,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.03,
              stagger: 0.09,
            },
          ).then(() => {
            targets.forEach((target) => {
              const element = target as HTMLElement;
              element.dataset.scrollReveal = "revealed";
              element.style.willChange = "auto";
            });
          });

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -12% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, [animate, scope, children]);

  return (
    <motion.div ref={scope} className="global-scroll-motion-root">
      <div className="global-scroll-progress" aria-hidden="true" />
      {children}
    </motion.div>
  );
}
