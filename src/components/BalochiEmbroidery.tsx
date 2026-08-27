"use client";

import React from "react";

type MotifProps = {
  className?: string;
};

function DiamondMotif({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      {/* outer stitched diamond */}
      <path
        d="M60 5 L115 60 L60 115 L5 60 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="4 4"
      />

      {/* second embroidered layer */}
      <path
        d="M60 17 L103 60 L60 103 L17 60 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="2 5"
      />

      {/* inner diamond */}
      <path
        d="M60 30 L90 60 L60 90 L30 60 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* cross */}
      <path
        d="M60 35 V85 M35 60 H85"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 3"
      />

      {/* central diamond */}
      <path
        d="M60 44 L76 60 L60 76 L44 60 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* center */}
      <rect
        x="54"
        y="54"
        width="12"
        height="12"
        transform="rotate(45 60 60)"
        fill="currentColor"
      />

      {/* four outer stitches */}
      <circle cx="60" cy="8" r="3" fill="currentColor" />
      <circle cx="112" cy="60" r="3" fill="currentColor" />
      <circle cx="60" cy="112" r="3" fill="currentColor" />
      <circle cx="8" cy="60" r="3" fill="currentColor" />
    </svg>
  );
}

function StarMotif({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      {/* eight point star */}
      <path
        d="
          M60 4
          L70 40
          L95 20
          L80 47
          L116 60
          L80 70
          L100 96
          L73 80
          L60 116
          L50 80
          L23 100
          L40 73
          L4 60
          L40 50
          L20 24
          L47 40
          Z
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* inner star */}
      <path
        d="
          M60 22
          L68 48
          L94 60
          L68 68
          L60 96
          L52 68
          L26 60
          L52 48
          Z
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 3"
      />

      {/* center */}
      <circle
        cx="60"
        cy="60"
        r="8"
        fill="currentColor"
      />
    </svg>
  );
}

function FlowerMotif({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      {/* petals */}
      <path
        d="
          M60 8
          C72 25 76 38 60 60
          C44 38 48 25 60 8 Z

          M112 60
          C95 72 82 76 60 60
          C82 44 95 48 112 60 Z

          M60 112
          C48 95 44 82 60 60
          C76 82 72 95 60 112 Z

          M8 60
          C25 48 38 44 60 60
          C38 76 25 72 8 60 Z
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* diagonals */}
      <path
        d="M25 25 L95 95 M95 25 L25 95"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 4"
      />

      {/* center */}
      <circle
        cx="60"
        cy="60"
        r="13"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />

      <circle
        cx="60"
        cy="60"
        r="5"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronMotif({ className = "" }: MotifProps) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 40 L25 15 L45 40 L65 15 L85 40 L105 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M15 55 L30 35 L45 55 L60 35 L75 55 L90 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="3 4"
      />

      <path
        d="M5 65 L20 50 L35 65 L50 50 L65 65 L80 50 L95 65"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function Stitch({ className = "" }: MotifProps) {
  return (
    <span
      className={`
        inline-block
        h-[5px]
        w-[5px]
        rotate-45
        bg-current
        ${className}
      `}
    />
  );
}

/* =========================================================
   SMALL EMBROIDERY BORDER
========================================================= */

export function BalochiBorder() {
  const items = Array.from({ length: 18 });

  return (
    <div className="relative overflow-hidden border-y border-white/10 py-3">

      <div className="flex min-w-max items-center">

        {items.map((_, index) => (

          <div
            key={index}
            className="mx-3 flex items-center gap-2"
          >

            <Stitch />

            <div className="relative h-8 w-8">

              <div className="absolute inset-1 rotate-45 border border-[#D24A3A]" />

              <div className="absolute inset-2 rotate-45 border border-[#D6A62C]" />

              <div className="absolute inset-3 rotate-45 border border-[#2563FF]" />

              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#D6A62C]" />

            </div>

            <Stitch />

          </div>

        ))}

      </div>

    </div>
  );
}

/* =========================================================
   LARGE VERTICAL PANEL
========================================================= */

export function BalochiPanel({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        pointer-events-none
        relative
        h-[760px]
        w-[270px]
        overflow-hidden
        ${className}
      `}
    >

      {/* outer textile border */}

      <div className="absolute inset-0 border-[8px] border-[#9E302C]" />

      <div className="absolute inset-[12px] border-[3px] border-[#D6A62C]" />

      <div className="absolute inset-[20px] border-2 border-[#2563FF]" />

      {/* inner repeated pattern */}

      <div className="absolute inset-[38px] flex flex-col items-center justify-between py-8">

        <DiamondMotif className="h-24 w-24 text-[#D24A3A]" />

        <StarMotif className="h-28 w-28 text-[#D6A62C]" />

        <FlowerMotif className="h-28 w-28 text-[#2563FF]" />

        <DiamondMotif className="h-24 w-24 text-[#D24A3A]" />

        <StarMotif className="h-28 w-28 text-[#D6A62C]" />

      </div>

      {/* tiny stitch columns */}

      <div className="absolute left-[27px] top-10 bottom-10 flex flex-col justify-between">
        {Array.from({ length: 18 }).map((_, i) => (
          <Stitch
            key={i}
            className={
              i % 3 === 0
                ? "bg-[#D24A3A]"
                : i % 3 === 1
                ? "bg-[#D6A62C]"
                : "bg-[#2563FF]"
            }
          />
        ))}
      </div>

      <div className="absolute right-[27px] top-10 bottom-10 flex flex-col justify-between">
        {Array.from({ length: 18 }).map((_, i) => (
          <Stitch
            key={i}
            className={
              i % 3 === 0
                ? "bg-[#2563FF]"
                : i % 3 === 1
                ? "bg-[#D24A3A]"
                : "bg-[#D6A62C]"
            }
          />
        ))}
      </div>

    </div>
  );
}

/* =========================================================
   CORNER ORNAMENT
========================================================= */

export function BalochiCorner({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        pointer-events-none
        relative
        h-64
        w-64
        ${className}
      `}
    >

      {/* outer frame */}

      <div className="absolute inset-0 border-l-[5px] border-t-[5px] border-[#D24A3A]" />

      <div className="absolute left-4 top-4 h-[calc(100%-16px)] w-[calc(100%-16px)] border-l-2 border-t-2 border-[#D6A62C]" />

      {/* geometric rays */}

      <div className="absolute left-8 top-8 h-36 w-36 rotate-45 border-[3px] border-[#2563FF]" />

      <div className="absolute left-14 top-14 h-24 w-24 rotate-45 border-2 border-[#D24A3A]" />

      <div className="absolute left-20 top-20 h-12 w-12 rotate-45 border-2 border-[#D6A62C]" />

      {/* star */}

      <StarMotif className="absolute left-3 top-3 h-28 w-28 text-[#D6A62C]" />

      {/* stitch trail */}

      <div className="absolute bottom-5 left-8 flex gap-3">

        {Array.from({ length: 8 }).map((_, i) => (
          <Stitch
            key={i}
            className={
              i % 3 === 0
                ? "bg-[#D24A3A]"
                : i % 3 === 1
                ? "bg-[#D6A62C]"
                : "bg-[#2563FF]"
            }
          />
        ))}

      </div>

    </div>
  );
}

/* =========================================================
   HERO EMBROIDERY
========================================================= */

export function BalochiHeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* left textile */}

      <BalochiPanel
        className="
          absolute
          -left-36
          top-1/2
          -translate-y-1/2
          -rotate-[8deg]
          opacity-[0.18]
          transition-transform
          duration-1000
        "
      />

      {/* right textile */}

      <BalochiPanel
        className="
          absolute
          -right-36
          top-1/2
          -translate-y-1/2
          rotate-[8deg]
          opacity-[0.15]
        "
      />

      {/* top-left corner */}

      <BalochiCorner
        className="
          absolute
          -left-10
          -top-10
          opacity-[0.2]
        "
      />

      {/* bottom-right corner */}

      <BalochiCorner
        className="
          absolute
          -bottom-10
          -right-10
          rotate-180
          opacity-[0.15]
        "
      />

    </div>
  );
}

/* =========================================================
   FULL EMBROIDERY FIELD
========================================================= */

export function BalochiEmbroideryField() {
  const motifs = Array.from({ length: 24 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      <div className="absolute inset-0 grid grid-cols-4 opacity-[0.08] md:grid-cols-6">

        {motifs.map((_, index) => {

          const type = index % 4;

          if (type === 0) {
            return (
              <DiamondMotif
                key={index}
                className="h-24 w-24 text-[#D24A3A]"
              />
            );
          }

          if (type === 1) {
            return (
              <StarMotif
                key={index}
                className="h-24 w-24 text-[#D6A62C]"
              />
            );
          }

          if (type === 2) {
            return (
              <FlowerMotif
                key={index}
                className="h-24 w-24 text-[#2563FF]"
              />
            );
          }

          return (
            <ChevronMotif
              key={index}
              className="h-20 w-28 text-[#D24A3A]"
            />
          );
        })}

      </div>

    </div>
  );
}