"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export function AboutMobileNav() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        className="about-mobile-toggle"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <nav className={`about-mobile-menu ${open ? "open" : ""}`} aria-label="Mobile navigation">
        <a href="/#services" onClick={close}>Services</a>
        <a href="/#work" onClick={close}>Work</a>
        <a href="/about" onClick={close}>About</a>
        <a href="/#contact" onClick={close}>Contact</a>
      </nav>
    </>
  );
}
