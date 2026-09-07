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

    // On mobile only, Explore work is navigation rather than a theme interaction.
    // Capture the pointer gesture before the homepage React handler can process it.
    const isMobile = () => window.matchMedia("(max-width: 900px)").matches;

    const handleExplorePointerDown = (event: PointerEvent) => {
      if (!isMobile()) return;

      const target = event.target as Element | null;
      const explore = target?.closest(".techcraft .secondary-action");
      if (!explore) return;

      event.preventDefault();
      event.stopPropagation();
      window.location.assign("/portfolio");
    };

    const handleExploreTouchStart = (event: TouchEvent) => {
      if (!isMobile()) return;

      const target = event.target as Element | null;
      const explore = target?.closest(".techcraft .secondary-action");
      if (!explore) return;

      event.preventDefault();
      event.stopPropagation();
      window.location.assign("/portfolio");
    };

    const handleExploreClick = (event: MouseEvent) => {
      if (!isMobile()) return;

      const target = event.target as Element | null;
      const explore = target?.closest(".techcraft .secondary-action");
      if (!explore) return;

      event.preventDefault();
      event.stopPropagation();
    };

    document.addEventListener("pointerdown", handleExplorePointerDown, true);
    document.addEventListener("touchstart", handleExploreTouchStart, true);
    document.addEventListener("click", handleExploreClick, true);

    return () => {
      document.removeEventListener("pointerdown", handleExplorePointerDown, true);
      document.removeEventListener("touchstart", handleExploreTouchStart, true);
      document.removeEventListener("click", handleExploreClick, true);
    };
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
