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
    const saved = window.localStorage.getItem("techcraft-theme") as Theme | null;
    const initial = saved && themes.includes(saved) ? saved : "light";
    setTheme(initial);
    applyTheme(initial);

    // Explore work is a navigation action, not a theme action. Intercept it
    // before document-level click handlers can accidentally alter the theme.
    const handleExploreClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const button = target?.closest(".techcraft .secondary-action");
      if (!button) return;

      event.preventDefault();
      event.stopPropagation();

      const root = document.documentElement;
      const activeTheme = root.dataset.theme as Theme | undefined;

      document.getElementById("work")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Preserve the theme that was active before navigation.
      window.requestAnimationFrame(() => {
        if (activeTheme && themes.includes(activeTheme)) {
          root.dataset.theme = activeTheme;
        } else {
          root.removeAttribute("data-theme");
        }
      });
    };

    document.addEventListener("click", handleExploreClick, true);

    return () => {
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
