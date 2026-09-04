"use client";

import { useEffect, useMemo, useState } from "react";

const CODE_LINES = [
  ["01", "const", " techcraft = {"],
  ["02", "  design:", " true,"],
  ["03", "  build:", " true,"],
  ["04", "  intelligence:", " true,"],
  ["05", "  culture:", " true,"],
  ["06", "};", ""],
  ["07", "", ""],
  ["08", "export", " default TechCraft;"],
];

export default function LoadingScreen() {
  const [visibleChars, setVisibleChars] = useState(0);
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(false);
  const fullCode = useMemo(
    () => CODE_LINES.map(([, keyword, tail]) => `${keyword}${tail}`).join("\n"),
    [],
  );

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const startedAt = performance.now();
    let hideTimer: number | undefined;
    let closeTimer: number | undefined;
    let typingTimer: number | undefined;

    if (reduced) {
      setVisibleChars(fullCode.length);
    } else {
      let index = 0;
      const type = () => {
        index += 1;
        setVisibleChars(index);
        if (index < fullCode.length) {
          typingTimer = window.setTimeout(type, index > fullCode.length * 0.72 ? 13 : 20);
        }
      };
      typingTimer = window.setTimeout(type, 80);
    }

    const finish = () => {
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, 1050 - elapsed);
      window.setTimeout(() => {
        setClosing(true);
        closeTimer = window.setTimeout(() => setHidden(true), 360);
      }, remaining);
    };

    const waitForLoad = () => finish();

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", waitForLoad, { once: true });
    }

    hideTimer = window.setTimeout(finish, 1600);

    return () => {
      if (typingTimer) window.clearTimeout(typingTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      if (closeTimer) window.clearTimeout(closeTimer);
      window.removeEventListener("load", waitForLoad);
    };
  }, [fullCode.length]);

  const visibleCode = fullCode.slice(0, visibleChars);
  const visibleLines = visibleCode.split("\n");

  if (hidden) return null;

  return (
    <div className={`boot-screen${closing ? " boot-screen-closing" : ""}`} aria-hidden="true">
      <div className="boot-screen-grid" />
      <div className="boot-screen-glow boot-screen-glow-a" />
      <div className="boot-screen-glow boot-screen-glow-b" />

      <div className="boot-window">
        <div className="boot-window-bar">
          <div className="boot-dots"><i /><i /><i /></div>
          <span>TECHCRAFT / BOOT</span>
          <b>LIVE</b>
        </div>

        <div className="boot-window-body">
          <aside className="boot-sidebar">
            <strong>TC</strong>
            <span>⌘</span>
            <span>&lt;/&gt;</span>
            <span>⌁</span>
          </aside>

          <div className="boot-editor">
            <div className="boot-editor-tabs">
              <span>app.tsx</span>
              <small>main</small>
            </div>

            <div className="boot-code">
              {CODE_LINES.map(([number, keyword, tail], index) => {
                const text = visibleLines[index] ?? "";
                const keywordVisible = Math.min(text.length, keyword.length);
                const shownKeyword = text.slice(0, keywordVisible);
                const shownTail = text.slice(keyword.length);
                const isActive = index === visibleLines.length - 1 && visibleChars < fullCode.length;

                return (
                  <div className="boot-code-line" key={number}>
                    <span className="boot-line-number">{number}</span>
                    <span className="boot-code-text">
                      {shownKeyword && <em>{shownKeyword}</em>}
                      {shownTail}
                      {isActive && <i className="boot-caret" />}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="boot-terminal">
              <span>$</span> compiling <b>techcraft</b><i>_</i>
            </div>
          </div>
        </div>

        <div className="boot-status">
          <span><i /> SYSTEM READY</span>
          <span>{Math.min(100, Math.round((visibleChars / fullCode.length) * 100))}%</span>
        </div>
      </div>

      <div className="boot-brand">CRAFTING DIGITAL EXPERIENCES</div>
    </div>
  );
}
