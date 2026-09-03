"use client";

import { motion, useInView } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

const sectionSelectors = [
  ".techcraft main section:not(.hero)",
  ".about-page > section:not(.about-hero)",
];

const slideVariants = {
  hidden: { opacity: 0, x: -70, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 70, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 70, scale: 0.985, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

function Reveal({
  children,
  variant = "left",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.16, margin: "0px 0px -10% 0px" });

  const variants =
    variant === "right" ? slideRightVariants : variant === "up" ? slideUpVariants : slideVariants;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export default function GlobalScrollMotion({ children }: { children: ReactNode }) {
  return (
    <div className="global-scroll-motion-root">
      <div className="global-scroll-progress" aria-hidden="true" />
      {children}
    </div>
  );
}

export { Reveal, sectionSelectors };
