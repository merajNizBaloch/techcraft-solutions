"use client";

import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import PencilCraft from "./pencil-craft";

export default function PencilCraftHero() {
  const pathname = usePathname();
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setTarget(null);
      return;
    }

    const findTarget = () => {
      const element = document.querySelector<HTMLElement>(".techcraft .hero-product");
      if (element) setTarget(element);
    };

    findTarget();

    const observer = new MutationObserver(findTarget);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== "/" || !target) return null;

  return createPortal(
    <div className="pencil-craft-portal" aria-hidden="true">
      <PencilCraft />
    </div>,
    target,
  );
}
