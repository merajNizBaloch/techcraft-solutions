"use client";

import { useEffect, useState } from "react";

type BinaryGlyph = {
  id: number;
  value: string;
  left: string;
  top: string;
  delay: string;
  duration: string;
  opacity: number;
};

function buildGlyphs(): BinaryGlyph[] {
  return Array.from({ length: 72 }, (_, id) => ({
    id,
    value: Array.from({ length: 8 + (id % 5) }, () => (Math.random() > 0.5 ? "1" : "0")).join(""),
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * -12}s`,
    duration: `${9 + Math.random() * 11}s`,
    opacity: 0.07 + Math.random() * 0.09,
  }));
}

export default function IdeBinaryBackground() {
  const [glyphs, setGlyphs] = useState<BinaryGlyph[]>([]);

  useEffect(() => {
    setGlyphs(buildGlyphs());
  }, []);

  return (
    <div className="ide-binary-background" aria-hidden="true">
      {glyphs.map((glyph) => (
        <span
          key={glyph.id}
          style={{
            left: glyph.left,
            top: glyph.top,
            animationDelay: glyph.delay,
            animationDuration: glyph.duration,
            opacity: glyph.opacity,
          }}
        >
          {glyph.value}
        </span>
      ))}
    </div>
  );
}
