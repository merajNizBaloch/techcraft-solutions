"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./theme-switcher";

const sections = [
  ["Services", "services"],
  ["Products", "products"],
  ["Portfolio", "portfolio"],
  ["Freebies", "freebies"],
  ["About", "about"],
  ["Our Team", "team"],
  ["Contact", "contact"],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isPageLink = (id: string) =>
    id === "about" ||
    id === "services" ||
    id === "products" ||
    id === "portfolio" ||
    id === "freebies" ||
    id === "team" ||
    id === "contact";

  const isActive = (id: string) => pathname === `/${id}`;

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const renderItem = ([label, id]: (typeof sections)[number]) => {
    if (isPageLink(id)) {
      return (
        <Link key={id} href={`/${id}`} className={isActive(id) ? "active" : ""}>
          <span>{label}</span>
        </Link>
      );
    }

    return null;
  };

  return (
    <header className="site-navbar-wrap">
      <div className="site-navbar">
        <Link href="/" className="site-navbar-home" aria-label="TechCraft home">
          <span className="site-navbar-brand">
            <span className="site-navbar-symbol" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="site-navbar-name">
              TECH<span>CRAFT</span>
            </span>
          </span>
        </Link>

        <nav className="site-navbar-nav" aria-label="Primary navigation">
          {sections.map(renderItem)}
        </nav>

        <div className="site-navbar-actions">
          <ThemeSwitcher />

          <Link href="/contact" className="site-navbar-cta">
            <span>Let's talk</span>
            <ArrowUpRight size={14} />
          </Link>

          <button
            type="button"
            className="site-navbar-mobile-toggle"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <nav
        className={`site-navbar-mobile-menu${mobileOpen ? " open" : ""}`}
        aria-label="Mobile navigation"
      >
        {sections.map(renderItem)}
        <div className="site-navbar-mobile-theme">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
