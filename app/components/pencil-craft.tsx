"use client";

import { useEffect, useState } from "react";

const strokes = [
  "M62 118 C 126 72, 210 80, 286 116 S 430 166, 520 110",
  "M92 156 C 166 112, 224 122, 292 150 S 420 184, 496 146",
  "M72 212 C 150 170, 214 176, 292 210 S 418 244, 500 202",
  "M116 266 C 178 228, 246 236, 308 260 S 424 286, 474 260",
];

function PencilIcon({ accent = false }: { accent?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={`pencil-icon${accent ? " accent" : ""}`} aria-hidden="true">
      <path d="M12 33L29 16L34 21L17 38L10 39L12 33Z" />
      <path d="M28 17L32 13L37 18L33 22" />
      <path d="M10 39L11 33L17 38Z" />
      <path d="M15 28L21 34" />
    </svg>
  );
}

export default function PencilCraft() {
  const [stroke, setStroke] = useState(0);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setStroke((value) => (value + 1) % strokes.length);
      setPulse(true);
      window.setTimeout(() => setPulse(false), 520);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="pencil-craft" aria-label="Animated TechCraft pencil sketch">
      <div className="pencil-craft-grain" />
      <div className="pencil-craft-header">
        <span>01 / CRAFT STUDY</span>
        <span className="pencil-craft-status"><i /> DRAWING</span>
      </div>

      <div className="pencil-craft-paper">
        <div className="pencil-craft-grid" />

        <svg className="pencil-craft-sketch" viewBox="0 0 580 360" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
          <g className="pencil-outline">
            <path d="M94 92 L 482 92 L 514 116 L 514 300 L 76 300 L 76 116 Z" />
            <path d="M76 116 L 514 116" />
            <circle cx="102" cy="104" r="4" />
            <circle cx="119" cy="104" r="4" />
            <circle cx="136" cy="104" r="4" />
          </g>

          <g className="pencil-ui">
            <path d="M108 140 L 198 140 L 198 278 L 108 278 Z" />
            <path d="M218 140 L 478 140 L 478 170 L 218 170 Z" />
            <path d="M218 184 L 332 184 L 332 278 L 218 278 Z" />
            <path d="M350 184 L 478 184 L 478 232 L 350 232 Z" />
            <path d="M350 246 L 478 246 L 478 278 L 350 278 Z" />
          </g>

          <g className="pencil-bar-chart">
            <path d="M236 259 L 236 224" />
            <path d="M252 259 L 252 208" />
            <path d="M268 259 L 268 234" />
            <path d="M284 259 L 284 196" />
            <path d="M300 259 L 300 216" />
            <path d="M316 259 L 316 188" />
          </g>

          <path className="pencil-sweep" d={strokes[stroke]} />
          <circle className={`pencil-node${pulse ? " pulsing" : ""}`} cx="422" cy="202" r="7" />
          <path className="pencil-link" d="M422 202 C 444 190, 462 180, 480 161" />
        </svg>

        <div className="pencil-note pencil-note-one">IDEA →</div>
        <div className="pencil-note pencil-note-two">SYSTEM</div>
        <div className="pencil-note pencil-note-three">SHIP</div>

        <div className="pencil-tool pencil-tool-one"><PencilIcon /></div>
        <div className="pencil-tool pencil-tool-two"><PencilIcon accent /></div>
        <div className="pencil-measure">320 × 220</div>
        <div className="pencil-cursor" />
      </div>

      <div className="pencil-craft-footer">
        <span>SKETCH / INTERFACE / BUILD</span>
        <span>TECHCRAFT™</span>
      </div>
    </div>
  );
}
