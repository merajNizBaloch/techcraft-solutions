"use client";

import { Code2, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "ide";

const themes: Theme[] = ["light", "dark", "ide"];
const labels: Record<Theme, string> = {
  light: "LIGHT",
  dark: "DARK",
  ide: "IDE",
};

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "light") {
    root.removeAttribute("data-theme");
  } else {
    root.dataset.theme = theme;
  }
}

function replaceHeroExploreControl() {
  const existing = document.querySelector<HTMLElement>(
    ".hero-buttons .secondary-action"
  );

  if (!existing || document.querySelector(".hero-buttons .hero-explore-action")) {
    return;
  }

  const link = document.createElement("a");
  link.href = "/portfolio";
  link.className = "hero-explore-action";
  link.setAttribute("aria-label", "Explore work");
  link.innerHTML = `
    <span>Explore work</span>
    <span aria-hidden="true">→</span>
  `;

  Object.assign(link.style, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    minHeight: "46px",
    padding: "12px 18px",
    textDecoration: "none",
    cursor: "pointer",
    touchAction: "manipulation",
    position: "relative",
    zIndex: "6",
  });

  existing.replaceWith(link);
}

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const rootTheme = document.documentElement.dataset.theme as Theme | undefined;
    const saved = window.localStorage.getItem("techcraft-theme") as Theme | null;
    const initial =
      rootTheme && themes.includes(rootTheme)
        ? rootTheme
        : saved && themes.includes(saved)
          ? saved
          : "light";

    setTheme(initial);
    replaceHeroExploreControl();
  }, []);

  const cycleTheme = () => {
    const next = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(next);
    applyTheme(next);
    window.localStorage.setItem("techcraft-theme", next);
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Code2;

  return (
    <button
      type="button"
      className="site-theme-switcher"
      onClick={cycleTheme}
      aria-label={`Theme: ${labels[theme]}. Click to switch theme.`}
      title={`Theme: ${labels[theme]}`}
    >
      <Icon size={14} strokeWidth={1.8} />
      <span>{labels[theme]}</span>
      <i aria-hidden="true"><b /><b /><b /></i>
    </button>
  );
}
