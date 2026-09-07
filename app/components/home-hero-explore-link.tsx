"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function HomeHeroExploreLink() {
  const pathname = usePathname();
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setHost(null);
      return;
    }

    const findHost = () =>
      document.querySelector<HTMLElement>(".techcraft .hero-buttons");

    const existingHost = findHost();
    if (existingHost) {
      setHost(existingHost);
      return;
    }

    const observer = new MutationObserver(() => {
      const nextHost = findHost();
      if (!nextHost) return;

      setHost(nextHost);
      observer.disconnect();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [pathname]);

  if (!host || pathname !== "/") return null;

  return createPortal(
    <Link
      href="/portfolio"
      className="secondary-action hero-explore-action"
      aria-label="Explore TechCraft portfolio"
    >
      <span>Explore work</span>
      <ArrowRight size={16} aria-hidden="true" />
    </Link>,
    host,
  );
}
