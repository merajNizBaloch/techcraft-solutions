"use client";

import { motion, useAnimate } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect } from "react";

const SECTION_SELECTORS = [
  ".techcraft main section:not(.hero)",
  ".about-page > section:not(.about-hero)",
  ".services-page > section:not(:first-child)",
  ".products-page > section:not(:first-child)",
  ".freebies-page > section:not(:first-child)",
  ".contact-page > section:not(:first-child)",
  ".portfolio-page > section:not(.portfolio-hero)",
];

const HERO_SELECTORS = [
  ".techcraft .hero",
  ".about-page .about-hero",
  ".services-page > section:first-of-type",
  ".products-page > section:first-of-type",
  ".freebies-page > section:first-of-type",
  ".contact-page > section:first-of-type",
  ".portfolio-page .portfolio-hero",
];

const TARGET_SELECTOR =
  ".service-card, .project-card, .service-detail-card, .service-process, .about-stat, .about-capability, .about-process, .about-principle, .about-side-card";

function getTargets(section: Element): HTMLElement[] {
  const direct = Array.from(section.children).filter(
    (element): element is HTMLElement =>
      element instanceof HTMLElement &&
      !element.classList.contains("about-grid") &&
      !element.classList.contains("about-scan"),
  );

  const cards = Array.from(section.querySelectorAll(TARGET_SELECTOR)).filter(
    (element): element is HTMLElement => element instanceof HTMLElement,
  );

  return Array.from(new Set([...direct, ...cards]));
}

function setInitialState(targets: HTMLElement[]) {
  targets.forEach((target, index) => {
    target.dataset.scrollReveal = "pending";
    target.style.opacity = "0";
    target.style.transform = index % 3 === 0
      ? "translate3d(-54px, 18px, 0)"
      : index % 3 === 1
        ? "translate3d(0, 54px, 0)"
        : "translate3d(54px, 18px, 0)";
    target.style.filter = "blur(5px)";
    target.style.willChange = "opacity, transform, filter";
  });
}

export default function GlobalScrollMotion({ children }: { children: ReactNode }) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const root = scope.current as HTMLElement | null;
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
      target.style.opacity = "0";
      target.style.transform = index % 2 === 0
        ? "translate3d(-32px, 18px, 0)"
        : "translate3d(32px, 24px, 0)";
      target.style.filter = "blur(4px)";
      target.style.willChange = "opacity, transform, filter";
    });

    const heroTimer = window.setTimeout(() => {
      if (heroTargets.length === 0) return;

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
          target.style.willChange = "auto";
        });
      });
    }, 80);

    sections.forEach((section) => setInitialState(getTargets(section)));

    const revealed = new WeakSet<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement) || revealed.has(entry.target)) return;
          revealed.add(entry.target);

          const targets = getTargets(entry.target);
          if (targets.length === 0) {
            observer.unobserve(entry.target);
            return;
          }

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
              target.dataset.scrollReveal = "revealed";
              target.style.willChange = "auto";
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
