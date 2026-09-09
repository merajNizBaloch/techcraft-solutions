"use client";

import { useEffect, useRef } from "react";

export default function GlobalMouseEffect() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let frame = 0;
    let x = -100;
    let y = -100;
    let visible = false;

    const render = () => {
      frame = 0;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursor.style.opacity = visible ? "1" : "0";
    };

    const scheduleRender = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      visible = true;
      scheduleRender();
    };

    const leave = () => {
      visible = false;
      scheduleRender();
    };

    const applyPreference = () => {
      const enabled = finePointer.matches && !reducedMotion.matches;
      cursor.style.display = enabled ? "block" : "none";
      if (!enabled) visible = false;
    };

    applyPreference();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave, { passive: true });
    finePointer.addEventListener("change", applyPreference);
    reducedMotion.addEventListener("change", applyPreference);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      finePointer.removeEventListener("change", applyPreference);
      reducedMotion.removeEventListener("change", applyPreference);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="global-tech-cursor" aria-hidden="true">
        <span className="global-tech-cursor__ring" />
        <span className="global-tech-cursor__diamond" />
        <span className="global-tech-cursor__left">&lt;</span>
        <span className="global-tech-cursor__right">/&gt;</span>
        <span className="global-tech-cursor__status" />
      </div>

      <style jsx global>{`
        .global-tech-cursor {
          position: fixed;
          left: 0;
          top: 0;
          width: 34px;
          height: 34px;
          margin-left: -17px;
          margin-top: -17px;
          z-index: 99999;
          pointer-events: none;
          opacity: 0;
          transform: translate3d(-100px, -100px, 0);
          will-change: transform;
          contain: layout paint style;
          transition: opacity 120ms ease;
        }

        .global-tech-cursor__ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          border: 1px solid rgba(0, 155, 190, 0.52);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 12px rgba(0, 155, 190, 0.1);
        }

        .global-tech-cursor__ring::after {
          content: "";
          position: absolute;
          inset: 3px;
          border-top: 1px dashed rgba(0, 155, 190, 0.45);
          border-right: 1px dashed rgba(0, 155, 190, 0.2);
          border-radius: 50%;
          animation: techCursorSpin 3.8s linear infinite;
        }

        .global-tech-cursor__diamond {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 7px;
          height: 7px;
          background: #f4f6f8;
          border: 1px solid #111318;
          transform: translate(-50%, -50%) rotate(45deg);
        }

        .global-tech-cursor__diamond::after {
          content: "";
          position: absolute;
          inset: 2px;
          background: #087e9b;
        }

        .global-tech-cursor__left,
        .global-tech-cursor__right {
          position: absolute;
          top: 50%;
          color: rgba(0, 155, 190, 0.9);
          font: 600 6.5px/1 SFMono-Regular, Consolas, "Liberation Mono", monospace;
          transform: translateY(-50%);
        }

        .global-tech-cursor__left { left: -2px; }
        .global-tech-cursor__right { right: -4px; }

        .global-tech-cursor__status {
          position: absolute;
          left: 50%;
          top: -1px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #c83a32;
          transform: translateX(-50%);
        }

        @keyframes techCursorSpin {
          to { transform: rotate(360deg); }
        }

        @media (pointer: coarse), (prefers-reduced-motion: reduce) {
          .global-tech-cursor { display: none !important; }
          .global-tech-cursor__ring::after { animation: none; }
        }
      `}</style>
    </>
  );
}
