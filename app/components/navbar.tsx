"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const sections = [
  ["Services", "services"],
  ["Work", "work"],
  ["About", "about"],
  ["Contact", "contact"],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleSection = (id: string) => {
    setMobileOpen(false);

    if (!isHome) {
      window.location.assign(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const brand = (
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
  );

  return (
    <header className="site-navbar-wrap">
      <div className="site-navbar">
        <Link href="/" className="site-navbar-home" aria-label="TechCraft home">
          {brand}
        </Link>

        <nav className="site-navbar-nav" aria-label="Primary navigation">
          {sections.map(([label, id]) => {
            const active = id === "about" && isAbout;

            if (id === "about") {
              return (
                <Link
                  key={id}
                  href="/about"
                  className={active ? "active" : ""}
                >
                  <span>{label}</span>
                </Link>
              );
            }

            if (isHome) {
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => handleSection(id)}
                >
                  <span>{label}</span>
                </button>
              );
            }

            return (
              <Link key={id} href={`/#${id}`}>
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="site-navbar-actions">
          <Link href="/#contact" className="site-navbar-cta">
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
        {sections.map(([label, id]) => {
          const active = id === "about" && isAbout;

          if (id === "about") {
            return (
              <Link
                key={id}
                href="/about"
                className={active ? "active" : ""}
              >
                <span>{label}</span>
              </Link>
            );
          }

          if (isHome) {
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleSection(id)}
              >
                <span>{label}</span>
              </button>
            );
          }

          return (
            <Link key={id} href={`/#${id}`}>
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
