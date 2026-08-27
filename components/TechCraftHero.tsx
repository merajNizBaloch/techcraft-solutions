"use client";

import { useEffect, useState } from "react";

const expertise = [
  "UI / UX DESIGN",
  "WEB DEVELOPMENT",
  "MOBILE APPS",
  "AI INTEGRATION",
  "SOFTWARE ENGINEERING",
  "CLOUD SOLUTIONS",
  "BRAND EXPERIENCE",
  "DIGITAL PRODUCTS",
];

const motifs = [
  "◇",
  "◆",
  "✦",
  "◇",
  "◆",
  "✧",
  "◇",
  "◆",
];

export default function TechCraftHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#07090d] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden">

        {/* atmospheric blue glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] rounded-full bg-[#075cff]/10 blur-[150px]"
          style={{
            transform: `translate(
              calc(-50% + ${mouse.x * 35}px),
              calc(-50% + ${mouse.y * 35}px)
            )`,
          }}
        />

        {/* Balochi embroidery frame */}
        <div
          className="pointer-events-none absolute left-5 top-5 h-[calc(100%-40px)] w-[calc(100%-40px)] border border-white/10"
          style={{
            transform: `translate(${mouse.x * -3}px, ${mouse.y * -3}px)`,
          }}
        />

        <div className="pointer-events-none absolute left-8 top-8 h-[calc(100%-64px)] w-[calc(100%-64px)] border border-[#075cff]/20" />

        {/* top navigation */}
        <nav className="relative z-20 flex items-center justify-between px-8 py-7 md:px-12">

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-[#075cff]">
              <span className="text-sm text-[#3b82f6]">T</span>
            </div>

            <span className="text-sm font-medium tracking-[0.25em]">
              TECHCRAFT
            </span>
          </div>

          <div className="hidden gap-8 text-xs tracking-[0.2em] text-white/60 md:flex">
            <a href="#work" className="transition hover:text-white">
              WORK
            </a>

            <a href="#expertise" className="transition hover:text-white">
              EXPERTISE
            </a>

            <a href="#about" className="transition hover:text-white">
              ABOUT
            </a>

            <a href="#contact" className="transition hover:text-white">
              CONTACT
            </a>
          </div>

          <div className="text-xs tracking-[0.2em] text-[#3b82f6]">
            PK / 01
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 flex min-h-[calc(100vh-100px)] flex-col justify-center px-8 pb-20 md:px-16 lg:px-24">

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-[#2563ff]" />

            <span className="text-xs tracking-[0.35em] text-[#60a5fa]">
              DESIGN × TECHNOLOGY
            </span>
          </div>

          <h1
            className="max-w-6xl text-[clamp(4rem,11vw,10rem)] font-medium leading-[0.82] tracking-[-0.07em]"
            style={{
              transform: `translate(
                ${mouse.x * -8}px,
                ${mouse.y * -8}px
              )`,
            }}
          >
            WE DESIGN
            <br />

            <span className="text-white/35">
              EXPERIENCES.
            </span>
          </h1>

          <div className="mt-12 flex max-w-2xl flex-col gap-8 md:flex-row md:items-end">

            <p className="text-base leading-7 text-white/55 md:text-lg">
              TechCraft is a design-centric software house creating
              digital products, interfaces and intelligent systems
              where technology becomes experience.
            </p>

            <div className="shrink-0 text-xs tracking-[0.25em] text-white/40">
              <div className="mb-3 text-[#3b82f6]">
                01 — INTRO
              </div>

              SCROLL TO
              <br />
              EXPLORE
            </div>
          </div>

          {/* Balochi motif */}
          <div
            className="absolute bottom-20 right-10 hidden opacity-50 lg:block"
            style={{
              transform: `
                translate(
                  ${mouse.x * 12}px,
                  ${mouse.y * 12}px
                )
                rotate(${mouse.x * 3}deg)
              `,
            }}
          >
            <BalochiMotif size={300} />
          </div>

        </div>
      </section>

      {/* =====================================================
          EXPERTISE MARQUEE
      ====================================================== */}

      <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0d13] py-6">

        <div className="flex w-max animate-marquee">

          {[...expertise, ...expertise].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8 px-8"
            >
              <span className="text-xs tracking-[0.3em] text-white/65 md:text-sm">
                {item}
              </span>

              <span className="text-[#2563ff]">
                ◆
              </span>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          STATEMENT
      ====================================================== */}

      <section
        id="about"
        className="relative px-8 py-32 md:px-16 lg:px-24"
      >

        <div className="grid gap-16 lg:grid-cols-[0.4fr_1fr]">

          <div>
            <div className="mb-5 text-xs tracking-[0.3em] text-[#3b82f6]">
              01 / PHILOSOPHY
            </div>

            <div className="text-xs leading-6 text-white/35">
              DESIGN
              <br />
              ENGINEERING
              <br />
              CULTURE
            </div>
          </div>

          <div>

            <h2 className="max-w-5xl text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Technology should not simply
              <span className="text-white/30">
                {" "}work.
              </span>

              <br />

              It should
              <span className="text-[#3b82f6]">
                {" "}feel.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/45">
              We combine product thinking, visual design and software
              engineering to build digital experiences that are useful,
              memorable and distinctly human.
            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          EXPERTISE
      ====================================================== */}

      <section
        id="expertise"
        className="relative border-t border-white/10 px-8 py-32 md:px-16 lg:px-24"
      >

        <div className="mb-20 flex items-end justify-between">

          <div>
            <div className="mb-5 text-xs tracking-[0.3em] text-[#3b82f6]">
              02 / EXPERTISE
            </div>

            <h2 className="text-5xl tracking-[-0.05em] md:text-7xl">
              WHAT WE BUILD.
            </h2>
          </div>

          <span className="hidden text-xs text-white/30 md:block">
            08 SERVICES
          </span>

        </div>

        <div className="grid border-l border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">

          {expertise.map((item, index) => (

            <div
              key={item}
              className="group relative min-h-[300px] border-b border-r border-white/10 p-7 transition duration-500 hover:bg-[#0b1425]"
            >

              <div className="flex items-start justify-between">

                <span className="text-xs text-white/25">
                  0{index + 1}
                </span>

                <span className="text-[#2563ff] opacity-50 transition group-hover:opacity-100">
                  ↗
                </span>

              </div>

              {/* embroidery motif */}
              <div className="absolute right-5 top-14 opacity-10 transition duration-500 group-hover:opacity-30">
                <BalochiMiniMotif />
              </div>

              <div className="absolute bottom-7 left-7 right-7">

                <h3 className="max-w-[200px] text-2xl leading-tight tracking-[-0.03em]">
                  {item}
                </h3>

                <div className="mt-5 h-px w-0 bg-[#2563ff] transition-all duration-500 group-hover:w-full" />

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          CULTURE
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 px-8 py-32 md:px-16 lg:px-24">

        <div className="absolute inset-0 opacity-[0.035]">
          <BalochiPattern />
        </div>

        <div className="relative z-10 grid gap-16 lg:grid-cols-2">

          <div>

            <div className="mb-6 text-xs tracking-[0.3em] text-[#3b82f6]">
              03 / ORIGIN
            </div>

            <h2 className="text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
              BUILT FROM
              <br />
              <span className="text-white/30">
                BALOCHISTAN.
              </span>
            </h2>

          </div>

          <div className="flex items-end">

            <p className="max-w-xl text-lg leading-8 text-white/45">
              Our visual language draws subtle inspiration from the
              geometry, rhythm and craftsmanship of Balochi embroidery.
              Traditional patterns meet contemporary digital systems.
            </p>

          </div>

        </div>

        {/* embroidery strip */}
        <div className="relative z-10 mt-24 flex justify-center overflow-hidden border-y border-white/10 py-8">

          <div className="flex gap-10 text-4xl text-[#2563ff]/60">

            {motifs.map((motif, index) => (
              <span key={index}>
                {motif}
              </span>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section
        id="contact"
        className="relative min-h-[70vh] overflow-hidden border-t border-white/10 px-8 py-32 md:px-16 lg:px-24"
      >

        <div className="absolute right-0 top-0 opacity-10">
          <BalochiMotif size={600} />
        </div>

        <div className="relative z-10 flex h-full min-h-[50vh] flex-col justify-between">

          <div className="text-xs tracking-[0.3em] text-[#3b82f6]">
            04 / START A PROJECT
          </div>

          <div>

            <h2 className="max-w-5xl text-6xl leading-[0.85] tracking-[-0.07em] md:text-8xl lg:text-9xl">
              LET'S MAKE
              <br />
              SOMETHING
              <br />
              <span className="text-[#2563ff]">
                MATTER.
              </span>
            </h2>

            <button className="group mt-12 flex items-center gap-6 border border-white/20 px-7 py-5 text-xs tracking-[0.25em] transition hover:border-[#2563ff] hover:bg-[#2563ff]">

              START A CONVERSATION

              <span className="transition group-hover:translate-x-2">
                →
              </span>

            </button>

          </div>

          <div className="flex justify-between border-t border-white/10 pt-6 text-xs text-white/30">

            <span>
              TECHCRAFT SOLUTIONS
            </span>

            <span>
              DESIGN × CODE × CULTURE
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          GLOBAL STYLES
      ====================================================== */}

      <style jsx global>{`

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }

      `}</style>

    </main>
  );
}


/* ============================================================
   BALOCHI GEOMETRIC MOTIFS
============================================================ */

function BalochiMotif({ size = 300 }: { size?: number }) {

  return (

    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      <rect
        x="20"
        y="20"
        width="260"
        height="260"
        transform="rotate(45 150 150)"
        stroke="#2563ff"
        strokeWidth="2"
      />

      <rect
        x="55"
        y="55"
        width="190"
        height="190"
        transform="rotate(45 150 150)"
        stroke="#3b82f6"
        strokeWidth="1"
      />

      <rect
        x="90"
        y="90"
        width="120"
        height="120"
        transform="rotate(45 150 150)"
        stroke="#60a5fa"
        strokeWidth="2"
      />

      <path
        d="M150 20L180 120L280 150L180 180L150 280L120 180L20 150L120 120L150 20Z"
        stroke="#2563ff"
        strokeWidth="2"
      />

      <path
        d="M150 70L230 150L150 230L70 150L150 70Z"
        stroke="#60a5fa"
        strokeWidth="2"
      />

      <circle
        cx="150"
        cy="150"
        r="18"
        stroke="#2563ff"
        strokeWidth="3"
      />

      <circle
        cx="150"
        cy="150"
        r="5"
        fill="#2563ff"
      />

      <circle cx="150" cy="20" r="4" fill="#2563ff" />
      <circle cx="280" cy="150" r="4" fill="#2563ff" />
      <circle cx="150" cy="280" r="4" fill="#2563ff" />
      <circle cx="20" cy="150" r="4" fill="#2563ff" />

    </svg>

  );
}


function BalochiMiniMotif() {

  return (

    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
    >

      <rect
        x="12"
        y="12"
        width="66"
        height="66"
        transform="rotate(45 45 45)"
        stroke="#2563ff"
        strokeWidth="2"
      />

      <rect
        x="25"
        y="25"
        width="40"
        height="40"
        transform="rotate(45 45 45)"
        stroke="#60a5fa"
        strokeWidth="2"
      />

      <path
        d="M45 15L55 35L75 45L55 55L45 75L35 55L15 45L35 35L45 15Z"
        stroke="#2563ff"
        strokeWidth="2"
      />

      <circle
        cx="45"
        cy="45"
        r="5"
        fill="#2563ff"
      />

    </svg>

  );
}


function BalochiPattern() {

  const patterns = Array.from({ length: 36 });

  return (

    <div className="grid grid-cols-6 gap-10 p-10">

      {patterns.map((_, index) => (

        <BalochiMiniMotif key={index} />

      ))}

    </div>

  );
}
