"use client";

import { useEffect } from "react";

export default function NavRouter() {
  useEffect(() => {
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(".main-nav button")
    );

    const aboutButton = buttons.find(
      (button) => button.textContent?.trim().toLowerCase() === "about"
    );

    if (!aboutButton) return;

    const handleAbout = () => {
      window.location.href = "/about";
    };

    aboutButton.addEventListener("click", handleAbout);

    return () => {
      aboutButton.removeEventListener("click", handleAbout);
    };
  }, []);

  return null;
}
