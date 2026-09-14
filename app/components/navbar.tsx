"use client";

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeSwitcher from "./theme-switcher";
import BrandLogo from "./brand-logo";
import { freebieCategories, products } from "../data/catalog";

const sections = [
  ["Home", "home"], ["Services", "services"], ["Products", "products"],
  ["Portfolio", "portfolio"], ["Freebies", "freebies"], ["DevCanvas", "about"],
  ["Our Team", "team"], ["Contact", "contact"],
] as const;

const productLinks = [
  ...products.map((product) => ({ label: product.name, description: product.eyebrow.split(" / ")[0], href: "/products#" + product.id })),
  { label: "Dentora", description: "Dental · Coming soon", href: "/products#dentora" },
  { label: "LogiCore", description: "Logistics · Coming soon", href: "/products#logicore" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);

  const closeMenus = () => { setOpenMenu(null); setMobileOpen(false); };
  const isActive = (id: string) => id === "home" ? pathname === "/" : pathname === "/" + id;

  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [pathname]);
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) { setOpenMenu(null); setMobileOpen(false); }
    };
    const onHashChange = () => { setOpenMenu(null); setMobileOpen(false); };
    const media = window.matchMedia("(max-width: 1100px)");
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("hashchange", onHashChange);
    media.addEventListener("change", onHashChange);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("hashchange", onHashChange);
      media.removeEventListener("change", onHashChange);
    };
  }, []);

  const renderItem = ([label, id]: (typeof sections)[number], mobile = false) => {
    const href = id === "home" ? "/" : "/" + id;
    const items = id === "products" ? productLinks : id === "freebies" ? freebieCategories : null;
    if (!items) return <Link key={id} href={href} onClick={closeMenus} className={isActive(id) ? "active" : ""} aria-current={isActive(id) ? "page" : undefined}><span>{label}</span></Link>;

    const menuId = (mobile ? "mobile-" : "desktop-") + id;
    const expanded = openMenu === menuId;
    return (
      <div key={id} className="catalog-nav-group"
        onPointerEnter={(event) => { if (!mobile && event.pointerType === "mouse") setOpenMenu(menuId); }}
        onPointerLeave={(event) => { if (!mobile && event.pointerType === "mouse" && !event.currentTarget.contains(document.activeElement)) setOpenMenu(null); }}
        onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu((current) => current === menuId ? null : current); }}
        onKeyDown={(event) => {
          if (event.key === "Escape" && expanded) {
            event.stopPropagation(); setOpenMenu(null);
            event.currentTarget.querySelector<HTMLButtonElement>(".catalog-nav-toggle")?.focus();
          }
        }}
      >
        <div className="catalog-nav-label">
          <Link href={href} onClick={closeMenus} className={isActive(id) ? "active" : ""} aria-current={isActive(id) ? "page" : undefined}><span>{label}</span></Link>
          <button type="button" className="catalog-nav-toggle" aria-label={label + " submenu"} aria-expanded={expanded} aria-controls={menuId}
            onClick={() => setOpenMenu(expanded ? null : menuId)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault(); setOpenMenu(menuId);
                requestAnimationFrame(() => document.getElementById(menuId)?.querySelector<HTMLAnchorElement>("a")?.focus());
              }
            }}><ChevronDown size={14} /></button>
        </div>
        <div id={menuId} className={"catalog-nav-panel" + (id === "products" ? " catalog-nav-products" : "")} hidden={!expanded}>
          <Link className="catalog-nav-all" href={href} onClick={closeMenus}>Browse all {label.toLowerCase()} <ArrowUpRight size={14} /></Link>
          <ul>{items.map((item) => <li key={item.href}><Link href={item.href} onClick={closeMenus}><strong>{item.label}</strong><small>{item.description}</small></Link></li>)}</ul>
        </div>
      </div>
    );
  };

  return (
    <header ref={headerRef} className="site-navbar-wrap" onKeyDown={(event) => {
      if (event.key === "Escape") { closeMenus(); if (mobileOpen) mobileToggleRef.current?.focus(); }
    }}>
      <div className="site-navbar">
        <Link href="/" className="site-navbar-home" aria-label="TechCraft home" onClick={closeMenus}>
          <span className="site-navbar-brand"><BrandLogo /><span className="site-navbar-name">TECH<span>CRAFT</span></span></span>
        </Link>
        <nav className="site-navbar-nav" aria-label="Primary navigation">{sections.map((section) => renderItem(section))}</nav>
        <div className="site-navbar-actions">
          <ThemeSwitcher />
          <Link href="/contact" className="site-navbar-cta"><span>Let's talk</span><ArrowUpRight size={14} /></Link>
          <button ref={mobileToggleRef} type="button" className="site-navbar-mobile-toggle" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-navigation"
            onClick={() => { setMobileOpen(!mobileOpen); setOpenMenu(null); }}>{mobileOpen ? <X size={18} /> : <Menu size={18} />}</button>
        </div>
      </div>
      <nav id="mobile-navigation" className={"site-navbar-mobile-menu" + (mobileOpen ? " open" : "")} aria-label="Mobile navigation" aria-hidden={!mobileOpen} inert={!mobileOpen}>
        {sections.map((section) => renderItem(section, true))}
        <div className="site-navbar-mobile-theme"><ThemeSwitcher /></div>
      </nav>
    </header>
  );
}
