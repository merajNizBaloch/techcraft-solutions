"use client";

import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Command,
  Cpu,
  Layers3,
  Menu,
  MousePointer2,
  Palette,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const expertise = [
  "PRODUCT DESIGN",
  "UI / UX",
  "WEB ENGINEERING",
  "MOBILE",
  "AI SYSTEMS",
  "BRAND EXPERIENCE",
  "CLOUD",
  "AUTOMATION",
];

const services = [
  {
    number: "01",
    title: "Product Design",
    description:
      "Research, UX strategy, interface systems and polished digital experiences.",
    icon: Palette,
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Modern web applications, APIs, platforms and production-ready software.",
    icon: Code2,
  },
  {
    number: "03",
    title: "AI & Intelligence",
    description:
      "AI integrations, automation and intelligent workflows built around useful outcomes.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Digital Systems",
    description:
      "Design systems, cloud foundations and scalable digital infrastructure.",
    icon: Layers3,
  },
];

const keyboardItems = [
  ["⌘", "K", "COMMAND"],
  ["⌘", "J", "JUMP"],
  ["ESC", "", "CLOSE"],
];

const projects = [
  {
    number: "01",
    category: "PRODUCT / EDUCATION",
    title: "Academiq",
    description:
      "A school operating system bringing students, teachers, attendance, fees, exams and reporting into one connected digital workspace.",
    mode: "blue",
  },
  {
    number: "02",
    category: "PRODUCT / DIGITAL PLATFORM",
    title: "Estara",
    description:
      "A focused digital product built around a clear experience, connected workflows and a foundation designed to evolve with its users.",
    mode: "light",
  },
];

/* =========================================================
   ANIMATED NETWORK BACKGROUND
========================================================= */

function useTickerLightSmoothing() {
  useEffect(() => {
    const mask = document.querySelector<HTMLElement>(
      ".interactive-ticker .ticker-mask"
    );

    const light = document.querySelector<HTMLElement>(
      ".interactive-ticker .ticker-light"
    );

    if (!mask || !light) return;

    let targetX = -300;
    let targetY = -300;

    let currentX = -300;
    let currentY = -300;

    let animationFrame = 0;

    const updateTarget = () => {
      const computed = getComputedStyle(mask);

      targetX = parseFloat(
        computed.getPropertyValue("--ticker-target-x")
      );

      targetY = parseFloat(
        computed.getPropertyValue("--ticker-target-y")
      );
    };

    const animate = () => {
      updateTarget();

      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      light.style.transform =
        `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);
}

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const pointer = {
      x: -1000,
      y: -1000,
    };

    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
    }[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.length = 0;

      const count = Math.min(
        95,
        Math.max(38, Math.floor((width * height) / 18000)),
      );

      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.5 + 0.4,
        });
      }
    };

    const move = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const leave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      /* Grid */
      const spacing = 70;
      const offset = (time * 0.008) % spacing;

      ctx.strokeStyle = "rgba(17, 24, 39, 0.045)";
      ctx.lineWidth = 0.5;

      for (let x = -spacing + offset; x < width + spacing; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = -spacing + offset; y < height + spacing; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      /* Nodes */
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;

        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      /* Connections */
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 125) {
            const opacity = (1 - distance / 125) * 0.12;

            ctx.strokeStyle = `rgba(37, 99, 255, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      /* Mouse influence */
      if (pointer.x > -500) {
        const radius = 190;

        for (const node of nodes) {
          const dx = pointer.x - node.x;
          const dy = pointer.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < radius && distance > 5) {
            const force = (1 - distance / radius) * 0.016;

            node.vx -= dx * force;
            node.vy -= dy * force;
          }
        }

        const gradient = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          radius,
        );

        gradient.addColorStop(0, "rgba(37, 99, 255, 0.10)");
        gradient.addColorStop(1, "rgba(37, 99, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      /* Draw nodes */
      for (const node of nodes) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(37, 99, 255, 0.26)";
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }

      frame = requestAnimationFrame(draw);
    };

    resize();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
}

/* =========================================================
   BALOCHI-INSPIRED MICRO PATTERN
========================================================= */

function MicroPattern() {
  return (
    <svg viewBox="0 0 120 40" className="micro-pattern" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M2 20L12 10L22 20L12 30Z" />
        <path d="M22 20L32 10L42 20L32 30Z" />
        <path d="M42 20L52 10L62 20L52 30Z" />
        <path d="M62 20L72 10L82 20L72 30Z" />
        <path d="M82 20L92 10L102 20L92 30Z" />
        <path d="M102 20L112 10L122 20" />
      </g>
      <circle cx="12" cy="20" r="2" fill="#C83A32" />
      <circle cx="52" cy="20" r="2" fill="#D7A52A" />
      <circle cx="92" cy="20" r="2" fill="#2563FF" />
    </svg>
  );
}

/* =========================================================
   HERO PRODUCT PREVIEW
========================================================= */


function LiveCodeEditor() {
  const codeLines = [
    'const product = {',
    '  design: true,',
    '  experience: true,',
    '  engineering: true,',
    '};',
    '',
    'return (',
    '  <TechCraft',
    '    mode="craft"',
    '  />',
    ');',
  ];

  const fullCode = codeLines.join("\n");

  const [visibleLength, setVisibleLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && visibleLength < fullCode.length) {
      timer = setTimeout(() => {
        setVisibleLength((value) => value + 1);
      }, 34);
    } else if (!deleting && visibleLength === fullCode.length) {
      timer = setTimeout(() => {
        setDeleting(true);
      }, 3200);
    } else if (deleting && visibleLength > 0) {
      timer = setTimeout(() => {
        setVisibleLength((value) => value - 1);
      }, 16);
    } else {
      timer = setTimeout(() => {
        setDeleting(false);
      }, 900);
    }

    return () => clearTimeout(timer);
  }, [visibleLength, deleting, fullCode.length]);

  const visibleCode = fullCode.slice(0, visibleLength);
  const visibleLines = visibleCode.split("\n");

  let remainingCharacters = visibleLength;
  let activeLine = 0;

  for (let i = 0; i < codeLines.length; i++) {
    const lineLength = codeLines[i].length;

    if (remainingCharacters <= lineLength) {
      activeLine = i;
      break;
    }

    remainingCharacters -= lineLength + 1;
  }

  return (
    <div className="live-code-editor">

      {codeLines.map((line, index) => {

        const text = visibleLines[index] ?? "";

        const isActive =
          index === activeLine &&
          visibleLength < fullCode.length;

        return (
          <div
            className={`live-code-line ${
              isActive ? "live-code-active" : ""
            }`}
            key={`${index}-${line}`}
          >

            <span className="live-line-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="live-code-text">

              {text.includes("const") && text.startsWith("const") ? (
                <>
                  <i>const</i>
                  {text.slice(5)}
                </>
              ) : text.includes("<TechCraft") ? (
                <>
                  {"  <"}
                  <b>TechCraft</b>
                  {text.slice(12)}
                </>
              ) : text.includes('mode="craft"') ? (
                <>
                  {'    mode='}
                  <strong>"craft"</strong>
                </>
              ) : (
                text
              )}

              {isActive && (
                <span className="typing-caret" />
              )}

            </span>

          </div>
        );
      })}

      <span className="live-editor-status">
        {deleting
          ? "UPDATING"
          : visibleLength === fullCode.length
            ? "READY"
            : "TYPING"}
      </span>

    </div>
  );
}

function ProductPreview() {
  return (
    <div className="screen-scene">

      <div className="screen-shadow" />

      <div className="studio-screen">

        <div className="screen-frame">

          <div className="screen-camera" />

          <div className="screen-display">

            <div className="software-topbar">

              <div className="software-dots">
                <span />
                <span />
                <span />
              </div>

              <div className="software-title">
                TECHCRAFT / STUDIO
              </div>

              <div className="software-status">
                ● LIVE
              </div>

            </div>

            <div className="software-body">

              <aside className="software-sidebar">

                <div className="software-logo">
                  TC
                </div>

                <div className="tool-icon active">
                  <PaletteIcon />
                </div>

                <div className="tool-icon">
                  <LayersIcon />
                </div>

                <div className="tool-icon">
                  <CodeIcon />
                </div>

                <div className="tool-icon">
                  <BracesIcon />
                </div>

              </aside>

              <div className="design-area">

                <div className="design-toolbar">

                  <span className="tool-label">
    
                  </span>

                  <div className="design-actions">

                    <button className="fake-button">
                      Preview
                    </button>

                    <button className="fake-button primary">
                      Publish
                    </button>

                  </div>

                </div>

                <div className="design-canvas">

                  <div className="canvas-card">

                    <div className="canvas-eyebrow">
      
                    </div>

                    <div className="canvas-heading">
                      Build
                      <br />
                      <span>beautiful.</span>
                    </div>

                    <div className="canvas-description">
                      Digital products designed around people.
                    </div>

                    <div className="canvas-buttons">

                      <div className="canvas-button dark">
                        Start project
                      </div>

                      <div className="canvas-button light">
                        Explore
                      </div>

                    </div>

                    <div className="canvas-motif">
                      <BalochiMark />
                    </div>

                  </div>

                  <div className="selection-box">
                    <span className="selection-handle one" />
                    <span className="selection-handle two" />
                    <span className="selection-handle three" />
                    <span className="selection-handle four" />
                  </div>

                </div>

              </div>

              <div className="ide-panel">

                <div className="ide-header">
                  <span>APP.TSX</span>
                  <span>●</span>
                </div>

                <LiveCodeEditor />

                <div className="terminal-line">
                  <span />
                  BUILD COMPLETE
                </div>

              </div>

            </div>

            <div className="screen-cursor">

              <div className="cursor-arrow" />

              <span>
                MERAJ
              </span>

            </div>

            <div className="screen-click click-one" />
            <div className="screen-click click-two" />

          </div>

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   SIMPLE SOFTWARE ICONS
========================================================= */

function PaletteIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" />
      <circle cx="6.5" cy="7" r="1" fill="currentColor" />
      <circle cx="10" cy="5.5" r="1" fill="currentColor" />
      <circle cx="13.5" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M3 7L10 3L17 7L10 11L3 7Z" />
      <path d="M3 10L10 14L17 10" />
      <path d="M3 13L10 17L17 13" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M7 5L3 10L7 15" />
      <path d="M13 5L17 10L13 15" />
      <path d="M11 3L9 17" />
    </svg>
  );
}

function BracesIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none">
      <path d="M8 3C5 3 5 5 5 7V8C5 9 4 10 3 10C4 10 5 11 5 12V13C5 15 5 17 8 17" />
      <path d="M12 3C15 3 15 5 15 7V8C15 9 16 10 17 10C16 10 15 11 15 12V13C15 15 15 17 12 17" />
    </svg>
  );
}

/* =========================================================
   BALOCHI MARK
========================================================= */

function BalochiMark() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="balochi-mark"
      aria-hidden="true"
    >
      <path
        d="M50 5L95 50L50 95L5 50L50 5Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M50 16L84 50L50 84L16 50L50 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />

      <path
        d="M50 28L72 50L50 72L28 50L50 28Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M50 35L62 50L50 65L38 50L50 35Z"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M50 16V35M50 65V84M16 50H35M65 50H84"
        stroke="currentColor"
        strokeWidth="1"
      />

      <circle cx="50" cy="50" r="5" fill="#C83A32" />

      <circle cx="50" cy="50" r="2" fill="#D7A52A" />

      <circle cx="50" cy="16" r="2" fill="currentColor" />
      <circle cx="84" cy="50" r="2" fill="currentColor" />
      <circle cx="50" cy="84" r="2" fill="currentColor" />
      <circle cx="16" cy="50" r="2" fill="currentColor" />
    </svg>
  );
}

/* =========================================================
   KEYBOARD PANEL
========================================================= */

function KeyboardHint() {
  return (
    <div className="keyboard-hint">

      <div className="keyboard-title">
        <Command size={13} />
        QUICK COMMANDS
      </div>

      <div className="keyboard-items">

        {keyboardItems.map(([key1, key2, label]) => (
          <span key={label} className="keyboard-item">
            <kbd>{key1}</kbd>

            {key2 && <kbd>{key2}</kbd>}

            <small>{label}</small>
          </span>
        ))}

      </div>

    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  useTickerLightSmoothing();


  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {

    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setScrollProgress(
        max > 0 ? window.scrollY / max : 0,
      );
    };

    const onKeyDown = (event: KeyboardEvent) => {

      const modifier = event.metaKey || event.ctrlKey;

      if (modifier && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setCommandOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileOpen(false);
    setCommandOpen(false);
  };

  return (
    <main className="techcraft">

      {/* SCROLL PROGRESS */}

      <div
        className="scroll-progress"
        style={{
          transform: `scaleX(${scrollProgress})`,
        }}
      />

      {/* BACKGROUND */}

      <NetworkCanvas />

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="glass-header">

        <div className="glass-nav">

          <button
            className="brand"
            onClick={() => scrollTo("home")}
          >

            <span className="brand-symbol">
              <span />
              <span />
              <span />
            </span>

            <span className="brand-name">
              TECH<span>CRAFT</span>
            </span>

          </button>

          <nav className={mobileOpen ? "main-nav mobile-open" : "main-nav"}>

            <button onClick={() => scrollTo("services")}>
              Services
            </button>

            <button onClick={() => scrollTo("work")}>
              Work
            </button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("contact")}>
              Contact
            </button>

          </nav>

          <div className="header-actions">

            <button
              className="command-button"
              onClick={() => setCommandOpen(true)}
            >
              <Command size={14} />
              <span>⌘ K</span>
            </button>

            <button
              className="header-cta"
              onClick={() => scrollTo("contact")}
            >
              Let's talk
              <ArrowUpRight size={14} />
            </button>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

          </div>

        </div>

      </header>

      {/* =====================================================
          COMMAND PALETTE
      ====================================================== */}

      {commandOpen && (
        <div
          className="command-overlay"
          onClick={() => setCommandOpen(false)}
        >

          <div
            className="command-palette"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="command-top">

              <div>
                <Command size={15} />
                <span>COMMAND</span>
              </div>

              <button onClick={() => setCommandOpen(false)}>
                ESC
              </button>

            </div>

            <button
              className="command-option"
              onClick={() => scrollTo("services")}
            >
              <span>
                <Layers3 size={17} />
                Services
              </span>

              <kbd>01</kbd>
            </button>

            <button
              className="command-option"
              onClick={() => scrollTo("work")}
            >
              <span>
                <Sparkles size={17} />
                Products
              </span>

              <kbd>02</kbd>
            </button>

            <button
              className="command-option"
              onClick={() => scrollTo("about")}
            >
              <span>
                <MousePointer2 size={17} />
                About TechCraft
              </span>

              <kbd>03</kbd>
            </button>

            <button
              className="command-option"
              onClick={() => scrollTo("contact")}
            >
              <span>
                <Zap size={17} />
                Start a project
              </span>

              <kbd>04</kbd>
            </button>

          </div>

        </div>
      )}

      {/* =====================================================
          HERO
      ====================================================== */}

      <section id="home" className="hero">

        <div className="hero-container">

          <div className="hero-grid">

            <div className="hero-copy">

              <h1>
                We design
                <br />
                <span>digital</span>
                <br />
                futures.
              </h1>

              <p className="hero-text">
                TechCraft is a software house where product design,
                engineering and emerging technology work together
                to create digital experiences with character.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-action"
                  onClick={() => scrollTo("contact")}
                >
                  Start a project
                  <ArrowUpRight size={17} />
                </button>

                <button
                  className="secondary-action"
                  onClick={() => scrollTo("work")}
                >
                  Explore work
                  <ArrowRight size={16} />
                </button>

              </div>

              <KeyboardHint />

            </div>

            <div className="hero-product">

<ProductPreview />

              <div className="hero-floating-mark">
                <BalochiMark />
              </div>

</div>

          </div>

          <div className="hero-micro-pattern">
            <MicroPattern />
          </div>

</div>

      </section>

      {/* =====================================================

      ====================================================== */}

      <section className="ticker-section interactive-ticker">

        <div className="ticker-label">

        </div>

        <div
          className="ticker-mask"
          onMouseEnter={(event) => {
            const element = event.currentTarget;
            element.classList.add("ticker-hovered");

            const rect = element.getBoundingClientRect();

            element.style.setProperty(
              "--ticker-target-x",
              `${event.clientX - rect.left}px`
            );

            element.style.setProperty(
              "--ticker-target-y",
              `${event.clientY - rect.top}px`
            );
          }}
          onMouseLeave={(event) => {
            const element = event.currentTarget;

            element.classList.remove("ticker-hovered");

            element.style.setProperty(
              "--ticker-target-x",
              "-300px"
            );

            element.style.setProperty(
              "--ticker-target-y",
              "-300px"
            );
          }}
          onMouseMove={(event) => {
            const element = event.currentTarget;
            const rect = element.getBoundingClientRect();

            element.style.setProperty(
              "--ticker-target-x",
              `${event.clientX - rect.left}px`
            );

            element.style.setProperty(
              "--ticker-target-y",
              `${event.clientY - rect.top}px`
            );
          }}
        >

          <div className="ticker-light" />

          <div className="ticker-track">

            {[...expertise, ...expertise].map((item, index) => (
              <div
                className="ticker-item"
                key={`${item}-${index}`}
              >

                <span>
                  {item}
                </span>

                <b>
                  ◇
                </b>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section id="about" className="about section">

  <div className="about-grid">

          <h2>
            We don't just
            <br />
            <span>build software.</span>
            <br />
            We shape
            <br />
            <strong>experiences.</strong>
          </h2>

          <div className="about-side">

            <div className="about-line" />

            <p>
              A product is more than code. It is the interface,
              the interaction, the language, the tiny decisions
              and the feeling a person has when everything works.
            </p>

            <p>
              That's why TechCraft brings design and engineering
              into the same conversation from the very beginning.
            </p>

            <button
              className="text-link"
              onClick={() => scrollTo("services")}
            >
              Explore capabilities
              <ArrowUpRight size={15} />
            </button>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section id="services" className="services section">

  <div className="services-layout">

          <div className="services-title">

            <h2>
              Built across
              <br />
              <span>disciplines.</span>
            </h2>

            <MicroPattern />

          </div>

          <div className="service-list">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <button
                  key={service.number}
                  className={
                    activeService === index
                      ? "service-item service-active"
                      : "service-item"
                  }
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                >

                  <span className="service-index">
                    {service.number}
                  </span>

                  <span className="service-icon">
                    <Icon size={19} strokeWidth={1.4} />
                  </span>

                  <span className="service-title">
                    {service.title}
                  </span>

                  <span className="service-description">
                    {service.description}
                  </span>

                  <ArrowUpRight
                    className="service-arrow"
                    size={19}
                  />

                  <span className="service-accent" />

                </button>
              );

            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          CULTURAL + DESIGN SYSTEM
      ====================================================== */}

      <section className="culture">

        <div className="culture-graphic">

          <BalochiMark />

          <div className="culture-square square-one" />
          <div className="culture-square square-two" />
          <div className="culture-square square-three" />

        </div>

        <div className="culture-copy">

          <span className="section-kicker">

          </span>

          <h2>
            Craft is
            <br />
            <span>part of us.</span>
          </h2>

          <p>
            Inspired by the patience, geometry and attention to detail
            found in Balochi craftsmanship, our visual language brings
            that same idea into digital products.
          </p>

          <div className="culture-details">

            <span>
              LOCAL PERSPECTIVE
            </span>

            <span>
              GLOBAL STANDARD
            </span>

            <span>
              DIGITAL CRAFT
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section id="work" aria-label="Products" className="work products-section section">

  <div className="products-heading">
  <div>
    <span className="section-kicker">05 / PRODUCTS</span>
    <h2>We build <span>products</span> too.</h2>
    <p>Our own digital products are where strategy, design and engineering come together to solve problems we understand deeply.</p>
  </div>
</div>

<div className="work-list">

          {projects.map((project) => (
            <article
              className={`work-project ${project.mode}`}
              key={project.number}
            >

              <div className="work-number">
                {project.number}
              </div>

              <div className="work-visual">

                {project.mode === "blue" && (
                  <>
                    <div className="work-interface-card">

                      <span>
        
                      </span>

                      <strong>
                        BUILD
                        <br />
                        DIFFERENT.
                      </strong>

                      <div className="interface-bars">
                        <i />
                        <i />
                        <i />
                      </div>

                    </div>

                    <BalochiMark />

                  </>
                )}

                {project.mode === "light" && (
                  <>
                    <div className="floating-ui ui-one" />
                    <div className="floating-ui ui-two" />
                    <div className="floating-ui ui-three" />
                    <BalochiMark />
                  </>
                )}

                {project.mode === "dark" && (
                  <div className="intelligent-visual">

                    <div className="intelligent-heading">

                      <span className="intelligent-live">
                        <i />
                        LIVE
                      </span>

                    </div>

                    <div className="intelligent-editor">

                      <div className="intelligent-editor-bar">
                        <span>
                          APP.TSX
                        </span>

                        <span>
                          TECHCRAFT
                        </span>
                      </div>

                      <LiveCodeEditor />

                    </div>

                  </div>
                )}

              </div>

              <div className="work-copy">

                <span>
                  {project.category}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <button>
                  View project
                  <ArrowUpRight size={15} />
                </button>

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section className="process section">

  <div className="process-grid">

          <div className="process-heading">

            <h2>
              Think.
              <br />
              Design.
              <br />
              <span>Build.</span>
            </h2>

          </div>

          <div className="process-list">

            {[
              ["01", "Understand", "Context before concepts."],
              ["02", "Design", "Systems before screens."],
              ["03", "Engineer", "Quality before shortcuts."],
              ["04", "Evolve", "Products are never finished."],
            ].map(([number, title, description]) => (

              <div className="process-row" key={number}>

                <span>
                  {number}
                </span>

                <h3>
                  {title}
                </h3>

                <p>
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section id="contact" className="contact">

        <div className="contact-grid">

          <div>

            <span className="section-kicker">
              06 / START A PROJECT
            </span>

            <h2>
              Have an idea?
              <br />
              <span>Let's build it.</span>
            </h2>

          </div>

          <div className="contact-side">

            <p>
              Tell us what you're imagining, what isn't working,
              or what you want to build next.
            </p>

            <button
              className="contact-circle"
              onClick={() => {
                window.location.href =
                  "mailto:hello@techcraft.solutions";
              }}
            >
              <span>
                Let's talk
              </span>

              <ArrowUpRight size={20} />
            </button>

          </div>

        </div>

        <div className="contact-pattern">
          <BalochiMark />
        </div>

        <div className="contact-footer">

          <span>

          </span>

          <span>

          </span>

          <span>
            BALOCHISTAN / PAKISTAN
          </span>

        </div>

      </section>

      {/* =====================================================
          GLOBAL CSS
      ====================================================== */}

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f4f6f8;
          color: #111318;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        button {
          font: inherit;
        }

        ::selection {
          background: #2563ff;
          color: white;
        }

        /* =====================================================
           PAGE
        ====================================================== */

        .techcraft {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 78% 8%,
              rgba(37,99,255,.075),
              transparent 25%
            ),
            #f4f6f8;
        }

        .network-canvas {
          position: fixed;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ambient {
          position: fixed;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }

        .ambient-one {
          top: -180px;
          right: -130px;
          background: rgba(37,99,255,.09);
        }

        .ambient-two {
          bottom: -220px;
          left: -130px;
          background: rgba(91,135,255,.07);
        }

        .scroll-progress {
          position: fixed;
          z-index: 1000;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          transform-origin: left;
          background: #2563ff;
        }

        /* =====================================================
           HEADER / LIQUID GLASS
        ====================================================== */

        .glass-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 15px 18px;
        }

        .glass-nav {
          position: relative;
          width: min(1220px, 100%);
          height: 64px;
          margin: auto;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 7px 8px 7px 16px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.78),
              rgba(255,255,255,.38)
            );

          border: 1px solid rgba(255,255,255,.78);
          border-radius: 21px;

          backdrop-filter:
            blur(30px)
            saturate(180%);

          -webkit-backdrop-filter:
            blur(30px)
            saturate(180%);

          box-shadow:
            0 15px 55px rgba(17,24,39,.09),
            inset 0 1px 0 rgba(255,255,255,.95),
            inset 0 -1px 0 rgba(255,255,255,.28);

          overflow: hidden;
        }

        .glass-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;

          background:
            radial-gradient(
              circle at 18% 0%,
              rgba(255,255,255,.95),
              transparent 28%
            ),
            radial-gradient(
              circle at 88% 100%,
              rgba(37,99,255,.11),
              transparent 33%
            );
        }

        .brand {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          gap: 10px;

          border: 0;
          background: transparent;
          color: #111318;
          padding: 7px 9px;

          cursor: pointer;
        }

        .brand-name {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: -.05em;
        }

        .brand-name span {
          color: #2563ff;
        }

        .brand-symbol {
          position: relative;
          width: 25px;
          height: 25px;
          border: 1px solid #111318;
          transform: rotate(45deg);
        }

        .brand-symbol span {
          position: absolute;
          inset: 4px;
          border: 1px solid #2563ff;
        }

        .brand-symbol span:nth-child(2) {
          inset: 8px;
        }

        .brand-symbol span:nth-child(3) {
          inset: 11px;
          border: 0;
          background: #C83A32;
        }

        .main-nav {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          gap: 3px;

          background: transparent;
        }

        .main-nav button {
          position: relative;
          overflow: hidden;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          border: 0;
          background: transparent;

          color: rgba(17,19,24,.62);

          padding: 10px 17px;

          border-radius: 12px;

          font-size: 13px;
          font-weight: 500;
          letter-spacing: -.01em;

          cursor: pointer;

          transition:
            color .25s ease,
            background .25s ease,
            transform .25s ease,
            padding .25s ease;
        }

        .main-nav button:hover {
          color: #111318;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.78),
              rgba(255,255,255,.34)
            );

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            0 5px 18px rgba(17,24,39,.06);

          transform: translateY(-1px);

          padding-left: 25px;
          padding-right: 25px;
        }

        /* opening coding bracket */
        .main-nav button::before {
          content: "<";

          position: absolute;
          left: 7px;
          top: 50%;

          transform:
            translate(-12px,-50%)
            scale(.7);

          color: #2563ff;

          font-family:
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;

          font-size: 11px;
          font-weight: 500;

          opacity: 0;

          transition:
            opacity .18s ease,
            transform .28s cubic-bezier(.16,1,.3,1);
        }

        .main-nav button:hover::before {
          opacity: 1;

          transform:
            translate(0,-50%)
            scale(1);

          animation: navBracketIn .45s ease-out;
        }

        /* closing coding bracket */
        .main-nav button {
          text-indent: 0;
        }

        .main-nav button::after {
          content: "/>";

          position: absolute;
          right: 7px;
          top: 50%;

          transform:
            translate(12px,-50%)
            scale(.7);

          color: #2563ff;

          font-family:
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;

          font-size: 10px;
          font-weight: 500;

          opacity: 0;

          transition:
            opacity .18s ease,
            transform .28s cubic-bezier(.16,1,.3,1);
        }

        .main-nav button:hover::after {
          opacity: 1;

          transform:
            translate(0,-50%)
            scale(1);

          animation: navBracketIn .45s ease-out;
        }

        @keyframes navBracketIn {
          0% {
            opacity: 0;
            filter: blur(3px);
          }

          45% {
            opacity: .35;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        /* small coding scan underneath the label */
        .main-nav button span {
          position: relative;
          z-index: 2;
        }

        .main-nav button:hover {
          box-shadow:
            inset 0 1px 0 rgba(255,255,255,.95),
            inset 0 -1px 0 rgba(37,99,255,.12),
            0 5px 18px rgba(17,24,39,.06);
        }

        .main-nav button:hover {
          background-image:
            linear-gradient(
              90deg,
              transparent 0%,
              rgba(37,99,255,.04) 45%,
              transparent 100%
            );
          background-size: 200% 100%;

          animation: navCodeSweep 1.2s linear infinite;
        }

        @keyframes navCodeSweep {
          from {
            background-position: 200% 0;
          }

          to {
            background-position: -200% 0;
          }
        }

        .header-actions {
          position: relative;
          z-index: 2;

          display: flex;
          align-items: center;
          gap: 7px;
        }

        .command-button {
          display: flex;
          align-items: center;
          gap: 6px;

          border: 1px solid rgba(17,19,24,.08);
          background: rgba(255,255,255,.3);

          color: rgba(17,19,24,.5);

          padding: 8px 11px;
          border-radius: 11px;

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;

          cursor: pointer;

          transition: .25s ease;
        }

        .command-button:hover {
          background: rgba(255,255,255,.75);
          color: #111318;
        }

        .header-cta {
          display: flex;
          align-items: center;
          gap: 8px;

          border: 0;
          background: #2563ff;
          color: white;

          padding: 10px 15px;
          border-radius: 13px;

          font-size: 10px;

          cursor: pointer;

          box-shadow:
            0 6px 20px rgba(37,99,255,.2),
            inset 0 1px 0 rgba(255,255,255,.3);

          transition: .25s ease;
        }

        .header-cta:hover {
          background: #111318;
          transform: translateY(-1px);
        }

        .mobile-toggle {
          display: none;
          border: 1px solid rgba(17,19,24,.08);
          background: rgba(255,255,255,.45);
          color: #111318;
          width: 38px;
          height: 38px;
          border-radius: 12px;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* =====================================================
           COMMAND PALETTE
        ====================================================== */

        .command-overlay {
          position: fixed;
          inset: 0;
          z-index: 500;

          display: grid;
          place-items: start center;

          padding-top: 105px;

          background: rgba(7,12,23,.20);
          backdrop-filter: blur(12px);
        }

        .command-palette {
          width: min(540px, calc(100% - 32px));

          padding: 10px;

          border: 1px solid rgba(255,255,255,.82);
          border-radius: 20px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.9),
              rgba(245,248,255,.7)
            );

          box-shadow:
            0 30px 90px rgba(17,24,39,.18),
            inset 0 1px 0 rgba(255,255,255,.95);

          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
        }

        .command-top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 12px 13px;

          color: rgba(17,19,24,.45);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          letter-spacing: .13em;
        }

        .command-top > div {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .command-top button {
          border: 0;
          background: transparent;
          color: rgba(17,19,24,.35);
          font-family: inherit;
          font-size: 8px;
          cursor: pointer;
        }

        .command-option {
          width: 100%;

          display: flex;
          justify-content: space-between;
          align-items: center;

          border: 0;
          background: transparent;

          padding: 15px 14px;

          border-radius: 13px;

          color: #111318;

          cursor: pointer;

          transition: .2s ease;
        }

        .command-option:hover {
          background: rgba(37,99,255,.08);
        }

        .command-option span {
          display: flex;
          align-items: center;
          gap: 11px;

          font-size: 13px;
        }

        .command-option span svg {
          color: #2563ff;
        }

        .command-option kbd {
          min-width: 27px;
          padding: 5px 7px;

          border: 1px solid rgba(17,19,24,.08);
          border-radius: 7px;

          background: rgba(255,255,255,.6);

          color: rgba(17,19,24,.4);

          font-size: 8px;
        }

        /* =====================================================
           HERO
        ====================================================== */

        .hero {
          position: relative;
          z-index: 1;

          min-height: 100vh;

          padding: 135px 0 30px;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,.15),
              transparent 60%
            );
        }

        .hero-container {
          position: relative;
          width: min(1450px, calc(100% - 50px));
          min-height: calc(100vh - 165px);
          margin: auto;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.04fr .96fr;
          gap: 50px;

          flex: 1;

          align-items: center;

          padding: 60px 0 40px;
        }

        .hero-copy {
          position: relative;
          z-index: 3;
        }

        .hero h1 {
          margin: 0;

          font-size: clamp(68px, 8.2vw, 135px);
          line-height: .84;

          letter-spacing: -.085em;
          font-weight: 500;
        }

        .hero h1 span {
          color: #2563ff;
        }

        .hero-text {
          max-width: 510px;

          margin: 38px 0 0;

          color: rgba(17,19,24,.56);

          font-size: 15px;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-top: 28px;
        }

        .primary-action,
        .secondary-action {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 13px 17px;

          cursor: pointer;

          font-size: 10px;

          transition: .25s ease;
        }

        .primary-action {
          background: #111318;
          color: white;
          border: 1px solid #111318;
        }

        .primary-action:hover {
          background: #2563ff;
          border-color: #2563ff;
          transform: translateY(-2px);
        }

        .secondary-action {
          background: rgba(255,255,255,.38);
          color: #111318;
          border: 1px solid rgba(17,19,24,.1);
        }

        .secondary-action:hover {
          background: white;
          border-color: rgba(37,99,255,.35);
          color: #2563ff;
        }

        .keyboard-hint {
          margin-top: 55px;

          width: fit-content;

          padding: 9px 11px;

          display: flex;
          align-items: center;
          gap: 15px;

          border: 1px solid rgba(17,19,24,.08);

          background: rgba(255,255,255,.3);

          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .keyboard-title {
          display: flex;
          align-items: center;
          gap: 7px;

          color: rgba(17,19,24,.38);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 7px;
          letter-spacing: .1em;
        }

        .keyboard-items {
          display: flex;
          gap: 10px;
        }

        .keyboard-item {
          display: flex;
          align-items: center;
          gap: 3px;
        }

        .keyboard-item kbd {
          min-width: 20px;

          padding: 4px 5px;

          text-align: center;

          border: 1px solid rgba(17,19,24,.11);

          background: rgba(255,255,255,.65);

          border-radius: 5px;

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 7px;

          color: rgba(17,19,24,.55);

          box-shadow:
            0 1px 0 rgba(17,19,24,.08);
        }

        .keyboard-item small {
          margin-left: 3px;

          color: rgba(17,19,24,.3);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 6px;
        }

        /* PRODUCT VISUAL */

        .hero-product {
          position: relative;

          min-height: 520px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preview-shell {
          position: relative;
          width: min(650px, 100%);

          perspective: 1200px;

          animation: floatingProduct 8s ease-in-out infinite;
        }

        @keyframes floatingProduct {
          0%, 100% {
            transform: translateY(0) rotateX(0deg);
          }

          50% {
            transform: translateY(-10px) rotateX(1deg);
          }
        }

        .preview-glow {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 75%;
          aspect-ratio: 1;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          background: rgba(37,99,255,.11);

          filter: blur(80px);
        }

        .preview-card {
          position: relative;

          overflow: hidden;

          border: 1px solid rgba(255,255,255,.85);

          background: rgba(255,255,255,.7);

          box-shadow:
            0 40px 100px rgba(17,24,39,.13),
            0 10px 30px rgba(17,24,39,.06),
            inset 0 1px 0 rgba(255,255,255,.95);

          backdrop-filter:
            blur(22px)
            saturate(155%);

          -webkit-backdrop-filter:
            blur(22px)
            saturate(155%);

          transform: rotateY(-5deg) rotateX(3deg);
        }

        .preview-header {
          height: 42px;

          display: grid;
          grid-template-columns: 80px 1fr 35px;
          align-items: center;

          padding: 0 14px;

          border-bottom: 1px solid rgba(17,19,24,.07);

          color: rgba(17,19,24,.35);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 7px;
          letter-spacing: .12em;
        }

        .window-dots {
          display: flex;
          gap: 5px;
        }

        .window-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #dfe3e9;
        }

        .window-dots span:first-child {
          background: #2563ff;
        }

        .preview-address {
          text-align: center;
        }

        .preview-id {
          text-align: right;
        }

        .preview-body {
          display: grid;
          grid-template-columns: 56px 1fr;

          min-height: 380px;
        }

        .preview-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;

          padding: 18px 10px;

          border-right: 1px solid rgba(17,19,24,.07);
        }

        .preview-logo {
          width: 30px;
          height: 30px;

          display: grid;
          place-items: center;

          margin-bottom: 40px;

          background: #111318;
          color: white;

          font-size: 8px;
        }

        .preview-sidebar > span {
          width: 17px;
          height: 2px;
          margin-bottom: 18px;
          background: #e2e5e9;
        }

        .preview-sidebar > .sidebar-active {
          width: 24px;
          background: #2563ff;
        }

        .preview-main {
          padding: 26px;
        }

        .preview-title {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .preview-title small {
          color: rgba(17,19,24,.32);
          font-size: 7px;
          letter-spacing: .15em;
        }

        .preview-title strong {
          color: #111318;
          font-size: 24px;
          letter-spacing: -.04em;
          font-weight: 500;
        }

        .preview-dashboard {
          display: grid;
          grid-template-columns: 1.35fr .7fr;
          gap: 10px;

          margin-top: 28px;
        }

        .dashboard-large {
          min-height: 175px;

          padding: 14px;

          border: 1px solid rgba(17,19,24,.07);

          background: rgba(247,248,250,.7);
        }

        .chart-label {
          color: rgba(17,19,24,.27);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 7px;
          letter-spacing: .12em;
        }

        .chart {
          height: 95px;

          display: flex;
          align-items: end;
          gap: 7px;

          margin-top: 18px;
        }

        .chart i {
          flex: 1;
          display: block;
          background: #2563ff;
          opacity: .18;
        }

        .chart i:nth-child(1) { height: 31%; }
        .chart i:nth-child(2) { height: 48%; }
        .chart i:nth-child(3) { height: 39%; }
        .chart i:nth-child(4) { height: 58%; }
        .chart i:nth-child(5) { height: 70%; }
        .chart i:nth-child(6) { height: 82%; }
        .chart i:nth-child(7) {
          height: 100%;
          opacity: 1;
        }

        .dashboard-stack {
          display: grid;
          gap: 10px;
        }

        .dashboard-small {
          min-height: 82px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(17,19,24,.07);
        }

        .pattern-box {
          color: rgba(37,99,255,.45);
          background: rgba(245,247,250,.65);
        }

        .pattern-box .balochi-mark {
          width: 58px;
          height: 58px;
        }

        .blue-box {
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;

          padding: 12px;

          background: #2563ff;
          color: white;

          border-color: #2563ff;
        }

        .blue-box span {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 7px;
          letter-spacing: .12em;
        }

        .preview-bottom {
          display: flex;
          justify-content: space-between;

          margin-top: 18px;
          padding-top: 12px;

          border-top: 1px solid rgba(17,19,24,.07);

          color: rgba(17,19,24,.28);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 6px;
          letter-spacing: .12em;
        }

        .balochi-mark {
          width: 100%;
          height: 100%;
        }

        .hero-floating-mark {
          position: absolute;

          right: -30px;
          top: 78px;

          width: 108px;
          height: 108px;

          color: rgba(37,99,255,.5);

          animation: motifFloat 7s ease-in-out infinite;
        }

        @keyframes motifFloat {
          0%,100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-13px) rotate(7deg);
          }
        }

        .hero-bottom span:last-child {
          text-align: right;
        }

        .micro-pattern {
          width: 130px;
          height: 40px;
          color: rgba(17,19,24,.28);
        }

        /* =====================================================
           3D LAPTOP PRODUCT SHOWCASE
        ====================================================== */

        .laptop-scene {
          position: relative;
          width: min(700px, 100%);
          height: 560px;

          display: flex;
          align-items: center;
          justify-content: center;

          perspective: 1800px;
        }

        .laptop {
          position: relative;
          width: 650px;

          transform-style: preserve-3d;

          animation:
            laptopFloat 7s ease-in-out infinite;

          transition:
            transform .35s ease-out;
        }

        @keyframes laptopFloat {

          0%,
          100% {
            transform:
              translateY(0)
              rotateX(1deg)
              rotateY(-7deg)
              rotateZ(-1deg);
          }

          50% {
            transform:
              translateY(-13px)
              rotateX(2deg)
              rotateY(-4deg)
              rotateZ(0deg);
          }

        }

        .laptop-lid {
          position: relative;

          width: 100%;
          aspect-ratio: 1.58 / 1;

          padding: 12px;

          border-radius: 18px 18px 8px 8px;

          background:
            linear-gradient(
              145deg,
              #eef1f5,
              #cfd4db
            );

          border: 1px solid #b9c0c9;

          box-shadow:
            0 25px 60px rgba(17,24,39,.18),
            inset 0 1px 0 rgba(255,255,255,.95);

          transform:
            rotateX(2deg)
            translateZ(15px);

          transform-origin: bottom center;
        }

        .laptop-camera {
          position: absolute;

          width: 5px;
          height: 5px;

          left: 50%;
          top: 5px;

          transform: translateX(-50%);

          border-radius: 50%;

          background: #7b8189;
        }

        .laptop-screen {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 10px;

          background: #f4f6f9;

          border: 1px solid #aeb5be;

          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.7);
        }

        .software-topbar {
          height: 30px;

          display: grid;
          grid-template-columns: 85px 1fr 50px;
          align-items: center;

          padding: 0 10px;

          background: #eef1f4;

          border-bottom: 1px solid #d5d9df;

          color: #7e848d;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 6px;
          letter-spacing: .1em;
        }

        .software-dots {
          display: flex;
          gap: 4px;
        }

        .software-dots span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c5cad1;
        }

        .software-dots span:first-child {
          background: #2563ff;
        }

        .software-title {
          text-align: center;
        }

        .software-status {
          text-align: right;
          color: #2563ff;
        }

        .software-body {
          display: grid;

          height: calc(100% - 30px);

          grid-template-columns: 38px 1fr 145px;
        }

        .software-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 14px;

          padding: 11px 0;

          border-right: 1px solid #d7dbe0;

          background: #eef1f4;
        }

        .software-logo {
          width: 22px;
          height: 22px;

          display: grid;
          place-items: center;

          margin-bottom: 8px;

          background: #111318;
          color: white;

          font-size: 6px;
          font-weight: 700;
        }

        .tool-icon {
          width: 20px;
          height: 20px;

          display: grid;
          place-items: center;

          color: #a0a6af;

          border-radius: 5px;

          transition: .2s ease;
        }

        .tool-icon.active {
          color: #2563ff;
          background: rgba(37,99,255,.1);
        }

        .tool-icon svg {
          width: 12px;
          height: 12px;
          stroke: currentColor;
          stroke-width: 1.4;
        }

        .design-area {
          min-width: 0;
          background: #f7f8fa;
        }

        .design-toolbar {
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 10px;

          border-bottom: 1px solid #e0e3e7;
        }

        .tool-label {
          color: #8a9098;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 6px;
          letter-spacing: .09em;
        }

        .design-actions {
          display: flex;
          gap: 5px;
        }

        .fake-button {
          border: 1px solid #d7dbe1;

          padding: 4px 7px;

          background: white;

          color: #777e87;

          font-size: 6px;

          animation:
            screenButton 5s ease-in-out infinite;
        }

        .fake-button.primary {
          color: white;
          background: #2563ff;
          border-color: #2563ff;

          animation-delay: 2.1s;
        }

        @keyframes screenButton {

          0%,
          42%,
          100% {
            transform: scale(1);
            box-shadow: none;
          }

          45% {
            transform: scale(.91);
            box-shadow:
              inset 0 2px 4px rgba(0,0,0,.15);
          }

          50% {
            transform: scale(1);
          }

        }

        .design-canvas {
          position: relative;

          height: calc(100% - 34px);

          display: grid;
          place-items: center;

          overflow: hidden;

          background:
            linear-gradient(
              rgba(37,99,255,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(37,99,255,.035) 1px,
              transparent 1px
            );

          background-size: 22px 22px;
        }

        .canvas-card {
          position: relative;

          width: 72%;
          height: 70%;

          padding: 15px;

          overflow: hidden;

          background: white;

          border: 1px solid #dfe3e8;

          box-shadow:
            0 18px 35px rgba(17,24,39,.08);

          animation:
            canvasFloat 6s ease-in-out infinite;
        }

        @keyframes canvasFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }

        }

        .canvas-eyebrow {
          color: #2563ff;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 5px;
          letter-spacing: .12em;
        }

        .canvas-heading {
          margin-top: 12px;

          color: #111318;

          font-size: 24px;
          line-height: .82;

          letter-spacing: -.07em;
        }

        .canvas-heading span {
          color: #2563ff;
        }

        .canvas-description {
          max-width: 115px;

          margin-top: 12px;

          color: #969ca4;

          font-size: 6px;
          line-height: 1.6;
        }

        .canvas-buttons {
          display: flex;
          gap: 5px;

          margin-top: 14px;
        }

        .canvas-button {
          padding: 5px 8px;

          font-size: 5px;
        }

        .canvas-button.dark {
          color: white;
          background: #111318;
        }

        .canvas-button.light {
          color: #717780;
          border: 1px solid #dfe3e8;
        }

        .canvas-motif {
          position: absolute;

          width: 110px;
          height: 110px;

          right: -15px;
          bottom: -12px;

          color: rgba(37,99,255,.18);

          animation:
            canvasMotif 9s linear infinite;
        }

        @keyframes canvasMotif {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        .selection-box {
          position: absolute;

          width: 40%;
          height: 30%;

          right: 11%;
          bottom: 16%;

          border: 1px dashed rgba(37,99,255,.45);

          animation:
            selectionMove 7s ease-in-out infinite;
        }

        @keyframes selectionMove {

          0%,
          100% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(-8px,-5px);
          }

        }

        .selection-handle {
          position: absolute;

          width: 5px;
          height: 5px;

          border: 1px solid #2563ff;
          background: white;
        }

        .selection-handle.one {
          left: -3px;
          top: -3px;
        }

        .selection-handle.two {
          right: -3px;
          top: -3px;
        }

        .selection-handle.three {
          left: -3px;
          bottom: -3px;
        }

        .selection-handle.four {
          right: -3px;
          bottom: -3px;
        }

        /* IDE */

        .ide-panel {
          position: relative;

          overflow: hidden;

          background: #171a20;

          border-left: 1px solid #282d35;

          color: #8f98a8;
        }

        .ide-header {
          height: 34px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 0 10px;

          border-bottom: 1px solid #282d35;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 6px;
          color: #677181;
        }

        .ide-header span:last-child {
          color: #69a1ff;
        }

        /* =====================================================
           LIVE IDE EDITOR
        ====================================================== */

        .code-live {
          position: relative;

          padding: 14px 8px 18px;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            monospace;

          font-size: 6px;
          line-height: 2.05;

          color: #8f98a8;

          overflow: hidden;

          animation:
            editorPulse 8s ease-in-out infinite;
        }

        .code-line {
          position: relative;

          display: grid;

          grid-template-columns: 16px 1fr;

          min-height: 12px;

          padding: 0 4px;

          opacity: 0;

          clip-path: inset(0 100% 0 0);

          animation:
            codeType 8s steps(1, end) infinite;
        }

        .code-line::before {
          content: "";

          position: absolute;

          left: 0;
          right: 0;
          top: 0;
          bottom: 0;

          background:
            rgba(37,99,255,.09);

          opacity: 0;

          transition: opacity .2s ease;
        }

        .code-line > * {
          position: relative;
          z-index: 2;
        }

        .line-number {
          color: #4f5968;
          user-select: none;
        }

        .code-line i {
          color: #7ea9ff;
          font-style: normal;
        }

        .code-line b {
          color: #edf1f7;
          font-weight: 400;
        }

        .code-line strong {
          color: #9fc2ff;
          font-weight: 400;
        }

        .code-space {
          height: 7px;
        }

        /* sequential typing */

        .line-1 {
          animation-delay: 0s;
        }

        .line-2 {
          animation-delay: .45s;
        }

        .line-3 {
          animation-delay: .9s;
        }

        .line-4 {
          animation-delay: 1.35s;
        }

        .line-5 {
          animation-delay: 1.8s;
        }

        .line-6 {
          animation-delay: 2.65s;
        }

        .line-7 {
          animation-delay: 3.1s;
        }

        .line-8 {
          animation-delay: 3.55s;
        }

        .line-9 {
          animation-delay: 4s;
        }

        .line-10 {
          animation-delay: 4.45s;
        }

        @keyframes codeType {

          0%,
          4% {
            opacity: 0;
            clip-path: inset(0 100% 0 0);
          }

          7%,
          92% {
            opacity: 1;
            clip-path: inset(0 0 0 0);
          }

          100% {
            opacity: 0;
            clip-path: inset(0 0 0 0);
          }
        }

        /* moving active-line highlight */

        .line-1::before {
          animation:
            activeLine 8s ease-in-out infinite;
        }

        .line-2::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: .45s;
        }

        .line-3::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: .9s;
        }

        .line-4::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: 1.35s;
        }

        .line-5::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: 1.8s;
        }

        .line-6::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: 2.65s;
        }

        .line-7::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: 3.1s;
        }

        .line-8::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: 3.55s;
        }

        .line-9::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: 4s;
        }

        .line-10::before {
          animation:
            activeLine 8s ease-in-out infinite;
          animation-delay: 4.45s;
        }

        @keyframes activeLine {

          0%,
          10% {
            opacity: 0;
          }

          12%,
          18% {
            opacity: .8;
          }

          20%,
          100% {
            opacity: 0;
          }
        }

        /* blinking coding cursor */

        .live-caret {
          position: absolute;

          width: 1px;
          height: 8px;

          left: 91px;
          top: 16px;

          background: #5d97ff;

          box-shadow:
            0 0 6px rgba(37,99,255,.75);

          animation:
            caretMove 8s steps(1, end) infinite,
            caretBlink .8s steps(2, end) infinite;

          pointer-events: none;
        }

        @keyframes caretMove {

          0% {
            transform: translate(0, 0);
          }

          9% {
            transform: translate(18px, 0);
          }

          17% {
            transform: translate(5px, 12px);
          }

          26% {
            transform: translate(22px, 25px);
          }

          35% {
            transform: translate(12px, 37px);
          }

          44% {
            transform: translate(30px, 49px);
          }

          56% {
            transform: translate(3px, 78px);
          }

          67% {
            transform: translate(25px, 104px);
          }

          76% {
            transform: translate(42px, 117px);
          }

          86% {
            transform: translate(17px, 128px);
          }

          100% {
            transform: translate(0, 0);
          }
        }

        @keyframes caretBlink {

          0%,
          45% {
            opacity: 1;
          }

          46%,
          100% {
            opacity: .15;
          }
        }

        @keyframes editorPulse {

          0%,
          100% {
            opacity: .84;
          }

          50% {
            opacity: 1;
          }
        }

        /* =====================================================
           REAL-TIME REACT CODE EDITOR
        ====================================================== */

        .live-code-editor {
          position: relative;

          padding: 13px 8px 27px;

          min-height: 190px;

          overflow: hidden;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            Monaco,
            Consolas,
            monospace;

          font-size: 6px;

          line-height: 2.15;

          color: #8d97a7;
        }

        .live-code-line {
          position: relative;

          display: grid;

          grid-template-columns: 16px 1fr;

          min-height: 12px;

          padding: 0 4px;

          transition:
            background .12s ease,
            color .12s ease;
        }

        .live-code-active {
          background:
            rgba(37,99,255,.10);
        }

        .live-line-number {
          color: #4e5867;

          user-select: none;
        }

        .live-code-text {
          position: relative;

          white-space: pre;

          color: #8d97a7;
        }

        .live-code-text i {
          color: #79a8ff;

          font-style: normal;
        }

        .live-code-text b {
          color: #e9edf4;

          font-weight: 400;
        }

        .live-code-text strong {
          color: #9dbfff;

          font-weight: 400;
        }

        .typing-caret {
          display: inline-block;

          width: 1px;
          height: 8px;

          margin-left: 1px;

          vertical-align: -1px;

          background: #64a0ff;

          box-shadow:
            0 0 7px rgba(37,99,255,.8);

          animation:
            typingCaretBlink .72s steps(2,end) infinite;
        }

        @keyframes typingCaretBlink {

          0%,
          49% {
            opacity: 1;
          }

          50%,
          100% {
            opacity: 0;
          }

        }

        .live-editor-status {
          position: absolute;

          left: 12px;
          bottom: 7px;

          color: #657080;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 5px;

          letter-spacing: .1em;
        }

        .terminal-line {
          animation:
            terminalStatusPulse 2.5s ease-in-out infinite;
        }

        @keyframes terminalStatusPulse {

          0%,
          100% {
            opacity: .45;
          }

          50% {
            opacity: 1;
          }

        }

        /* SCREEN CURSOR */

        .screen-cursor {
          position: absolute;

          left: 63%;
          top: 65%;

          z-index: 8;

          display: flex;
          align-items: center;
          gap: 4px;

          animation:
            screenCursor 6s ease-in-out infinite;

          pointer-events: none;
        }

        @keyframes screenCursor {

          0% {
            transform: translate(20px, 18px);
          }

          20% {
            transform: translate(-55px, -25px);
          }

          37% {
            transform: translate(50px, -15px);
          }

          49% {
            transform: translate(35px, 22px);
          }

          53% {
            transform: translate(35px, 22px) scale(.94);
          }

          58% {
            transform: translate(35px, 22px) scale(1);
          }

          76% {
            transform: translate(-30px, 5px);
          }

          100% {
            transform: translate(20px, 18px);
          }

        }

        .cursor-arrow {
          width: 0;
          height: 0;

          border-left: 7px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 15px solid #111318;

          transform:
            rotate(-40deg);
        }

        .screen-cursor span {
          padding: 3px 5px;

          border-radius: 4px;

          background: #2563ff;
          color: white;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 5px;
        }

        /* CLICK RIPPLE */

        .screen-click {
          position: absolute;

          width: 11px;
          height: 11px;

          border: 1px solid #2563ff;
          border-radius: 50%;

          opacity: 0;

          pointer-events: none;

          animation:
            screenClick 6s ease-out infinite;
        }

        .click-one {
          left: 79%;
          top: 28%;
        }

        .click-two {
          left: 63%;
          top: 67%;
          animation-delay: 2.8s;
        }

        @keyframes screenClick {

          0%,
          43% {
            opacity: 0;
            transform: scale(.4);
          }

          45% {
            opacity: .7;
            transform: scale(.4);
          }

          58% {
            opacity: 0;
            transform: scale(3);
          }

          100% {
            opacity: 0;
            transform: scale(3);
          }

        }

        /* =====================================================
           3D LAPTOP BASE / REALISTIC KEYBOARD
        ====================================================== */

        /*
         * Recessed keyboard well
         */

        /*
         * KEYBOARD
         */

        .keyboard {
          position: absolute;

          z-index: 5;

          left: 7%;
          right: 7%;
          top: 13px;

          height: 54px;

          display: flex;
          flex-direction: column;

          justify-content: space-between;

          transform:
            perspective(700px)
            rotateX(-3deg);
        }

        .keyboard-row {
          width: 100%;

          display: grid;

          grid-template-columns:
            repeat(12, minmax(0, 1fr));

          gap: 3px;
        }

        .function-row {
          opacity: .68;
          gap: 4px;
        }

        .key {
          position: relative;

          display: block;

          height: 8px;
          min-width: 0;

          border-radius: 2px;

          background:
            linear-gradient(
              180deg,
              #707987 0%,
              #4e5763 100%
            );

          border-top:
            1px solid rgba(255,255,255,.34);

          border-left:
            1px solid rgba(255,255,255,.12);

          border-right:
            1px solid rgba(25,31,40,.18);

          box-shadow:
            0 2px 0 #414955,
            0 3px 4px rgba(15,23,42,.15);

          transition:
            transform .08s ease,
            background .15s ease,
            box-shadow .15s ease;
        }

        /*
         * Tiny highlight on every key
         */

        .key::after {
          content: "";

          position: absolute;

          left: 2px;
          right: 2px;
          top: 1px;

          height: 1px;

          background: rgba(255,255,255,.16);

          border-radius: 2px;
        }

        /*
         * Different sized laptop keys
         */

        .wide-key {
          grid-column: span 1.15;
        }

        .wider-key {
          grid-column: span 1.35;
        }

        /*
         * Bottom modifier keys
         */

        .bottom-row {
          grid-template-columns:
            1.2fr
            .7fr
            .7fr
            4.7fr
            .7fr
            .7fr
            1.2fr;
        }

        .modifier-key {
          height: 8px;
        }

        .space-key {
          height: 8px;

          box-shadow:
            0 2px 0 #414955,
            0 4px 5px rgba(15,23,42,.18);
        }

        /*
         * Blue active keys
         */

        .key.highlighted {
          background:
            linear-gradient(
              180deg,
              #5e95ff 0%,
              #2563ff 100%
            );

          border-top-color:
            rgba(255,255,255,.45);

          box-shadow:
            0 2px 0 #1748b0,
            0 3px 6px rgba(37,99,255,.28);

          animation:
            physicalKeyPress 4.2s ease-in-out infinite;
        }

        .bottom-row .key.highlighted {
          animation-delay: 1.2s;
        }

        .keyboard-row:nth-child(3) .highlighted {
          animation-delay: .55s;
        }

        .keyboard-row:nth-child(4) .highlighted {
          animation-delay: 1.9s;
        }

        @keyframes physicalKeyPress {

          0%,
          68%,
          100% {
            transform:
              translateY(0);

            box-shadow:
              0 2px 0 #1748b0,
              0 3px 6px rgba(37,99,255,.28);
          }

          71% {
            transform:
              translateY(2px);

            box-shadow:
              0 0 0 #1748b0,
              inset 0 2px 3px rgba(15,23,42,.25);
          }

          75% {
            transform:
              translateY(0);
          }
        }

        /*
         * PALM REST
         */

        .palm-rest {
          position: absolute;

          z-index: 4;

          left: 0;
          right: 0;

          bottom: 1px;

          height: 35px;

          background:
            linear-gradient(
              180deg,
              rgba(221,225,230,.45),
              rgba(199,205,212,.7)
            );
        }

        /*
         * Trackpad recess
         */

        .trackpad {
          position: absolute;

          z-index: 6;

          width: 25%;
          height: 19px;

          left: 37.5%;
          top: 6px;

          border-radius: 4px;

          background:
            linear-gradient(
              180deg,
              #d9dde2,
              #c4cad1
            );

          border:
            1px solid rgba(127,136,147,.55);

          box-shadow:
            inset 0 2px 3px rgba(15,23,42,.13),
            0 1px 0 rgba(255,255,255,.55);
        }

        /*
         * Small front bevel
         */

        /*
         * Laptop shadow
         */

        .laptop-shadow {
          position: absolute;

          left: 50%;
          bottom: -2px;

          width: 88%;
          height: 55px;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(15,23,42,.20) 0%,
              rgba(15,23,42,.08) 42%,
              transparent 72%
            );

          filter: blur(18px);

          animation:
            shadowFloat 7s ease-in-out infinite;
        }

        @keyframes shadowFloat {

          0%,
          100% {
            transform:
              translateX(-50%)
              scale(1);
          }

          50% {
            transform:
              translateX(-50%)
              scale(.91);
          }

        }

        @media (max-width: 1050px) {

          .laptop-scene {
            height: 460px;
          }

          .laptop {
            width: 550px;
          }

        }

        @media (max-width: 760px) {
          .hero-floating-mark {
            width: 62px;
            height: 62px;
            right: -4px;
            top: 42px;
          }



          .laptop-scene {
            height: 340px;
          }

          .laptop {
            width: 420px;
          }

          .ide-panel {
            display: none;
          }

          .software-body {
            grid-template-columns: 32px 1fr;
          }

          .hero-floating-mark {
            display: none;
          }

          .keyboard {
            top: 9px;
            height: 37px;
            left: 8%;
            right: 8%;
          }

          .keyboard-row {
            gap: 2px;
          }

          .key {
            height: 5px;
          }

          .palm-rest {
            height: 26px;
          }

          .trackpad {
            width: 24%;
            left: 38%;
            height: 12px;
            top: 5px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .laptop,
          .preview-shell,
          .fake-button,
          .canvas-card,
          .canvas-motif,
          .selection-box,
          .code-live,
          .code-line,
          .live-caret,
          .screen-cursor,
          .screen-click,
          .key.highlighted,
          .laptop-shadow,
          .terminal-line {
            animation: none !important;
          }

        }

        /* =====================================================
           3D LAPTOP PRODUCT SHOWCASE
        ====================================================== */

        .laptop-scene {
          position: relative;
          width: min(700px, 100%);
          height: 560px;

          display: flex;
          align-items: center;
          justify-content: center;

          perspective: 1800px;
        }

        .laptop {
          position: relative;
          width: 620px;

          transform-style: preserve-3d;

          animation:
            laptopFloat 7s ease-in-out infinite;

          transition:
            transform .35s ease-out;
        }

        @keyframes laptopFloat {

          0%,
          100% {
            transform:
              translateY(0)
              rotateX(1deg)
              rotateY(-7deg)
              rotateZ(-1deg);
          }

          50% {
            transform:
              translateY(-13px)
              rotateX(2deg)
              rotateY(-4deg)
              rotateZ(0deg);
          }

        }

        .laptop-lid {
          position: relative;

          width: 100%;
          aspect-ratio: 1.58 / 1;

          padding: 12px;

          border-radius: 18px 18px 8px 8px;

          background:
            linear-gradient(
              145deg,
              #eef1f5,
              #cfd4db
            );

          border: 1px solid #b9c0c9;

          box-shadow:
            0 25px 60px rgba(17,24,39,.18),
            inset 0 1px 0 rgba(255,255,255,.95);

          transform:
            rotateX(2deg)
            translateZ(15px);

          transform-origin: bottom center;
        }

        .laptop-camera {
          position: absolute;

          width: 5px;
          height: 5px;

          left: 50%;
          top: 5px;

          transform: translateX(-50%);

          border-radius: 50%;

          background: #7b8189;
        }

        .laptop-screen {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 10px;

          background: #f4f6f9;

          border: 1px solid #aeb5be;

          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.7);
        }

        .software-topbar {
          height: 30px;

          display: grid;
          grid-template-columns: 85px 1fr 50px;
          align-items: center;

          padding: 0 10px;

          background: #eef1f4;

          border-bottom: 1px solid #d5d9df;

          color: #7e848d;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 6px;
          letter-spacing: .1em;
        }

        .software-dots {
          display: flex;
          gap: 4px;
        }

        .software-dots span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #c5cad1;
        }

        .software-dots span:first-child {
          background: #2563ff;
        }

        .software-title {
          text-align: center;
        }

        .software-status {
          text-align: right;
          color: #2563ff;
        }

        .software-body {
          display: grid;

          height: calc(100% - 30px);

          grid-template-columns: 38px 1fr 145px;
        }

        .software-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 14px;

          padding: 11px 0;

          border-right: 1px solid #d7dbe0;

          background: #eef1f4;
        }

        .software-logo {
          width: 22px;
          height: 22px;

          display: grid;
          place-items: center;

          margin-bottom: 8px;

          background: #111318;
          color: white;

          font-size: 6px;
          font-weight: 700;
        }

        .tool-icon {
          width: 20px;
          height: 20px;

          display: grid;
          place-items: center;

          color: #a0a6af;

          border-radius: 5px;

          transition: .2s ease;
        }

        .tool-icon.active {
          color: #2563ff;
          background: rgba(37,99,255,.1);
        }

        .tool-icon svg {
          width: 12px;
          height: 12px;
          stroke: currentColor;
          stroke-width: 1.4;
        }

        .design-area {
          min-width: 0;
          background: #f7f8fa;
        }

        .design-toolbar {
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 10px;

          border-bottom: 1px solid #e0e3e7;
        }

        .tool-label {
          color: #8a9098;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 6px;
          letter-spacing: .09em;
        }

        .design-actions {
          display: flex;
          gap: 5px;
        }

        .fake-button {
          border: 1px solid #d7dbe1;

          padding: 4px 7px;

          background: white;

          color: #777e87;

          font-size: 6px;

          animation:
            screenButton 5s ease-in-out infinite;
        }

        .fake-button.primary {
          color: white;
          background: #2563ff;
          border-color: #2563ff;

          animation-delay: 2.1s;
        }

        @keyframes screenButton {

          0%,
          42%,
          100% {
            transform: scale(1);
            box-shadow: none;
          }

          45% {
            transform: scale(.91);
            box-shadow:
              inset 0 2px 4px rgba(0,0,0,.15);
          }

          50% {
            transform: scale(1);
          }

        }

        .design-canvas {
          position: relative;

          height: calc(100% - 34px);

          display: grid;
          place-items: center;

          overflow: hidden;

          background:
            linear-gradient(
              rgba(37,99,255,.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(37,99,255,.035) 1px,
              transparent 1px
            );

          background-size: 22px 22px;
        }

        .canvas-card {
          position: relative;

          width: 72%;
          height: 70%;

          padding: 15px;

          overflow: hidden;

          background: white;

          border: 1px solid #dfe3e8;

          box-shadow:
            0 18px 35px rgba(17,24,39,.08);

          animation:
            canvasFloat 6s ease-in-out infinite;
        }

        @keyframes canvasFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }

        }

        .canvas-eyebrow {
          color: #2563ff;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 5px;
          letter-spacing: .12em;
        }

        .canvas-heading {
          margin-top: 12px;

          color: #111318;

          font-size: 24px;
          line-height: .82;

          letter-spacing: -.07em;
        }

        .canvas-heading span {
          color: #2563ff;
        }

        .canvas-description {
          max-width: 115px;

          margin-top: 12px;

          color: #969ca4;

          font-size: 6px;
          line-height: 1.6;
        }

        .canvas-buttons {
          display: flex;
          gap: 5px;

          margin-top: 14px;
        }

        .canvas-button {
          padding: 5px 8px;

          font-size: 5px;
        }

        .canvas-button.dark {
          color: white;
          background: #111318;
        }

        .canvas-button.light {
          color: #717780;
          border: 1px solid #dfe3e8;
        }

        .canvas-motif {
          position: absolute;

          width: 110px;
          height: 110px;

          right: -15px;
          bottom: -12px;

          color: rgba(37,99,255,.18);

          animation:
            canvasMotif 9s linear infinite;
        }

        @keyframes canvasMotif {

          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }

        }

        .selection-box {
          position: absolute;

          width: 40%;
          height: 30%;

          right: 11%;
          bottom: 16%;

          border: 1px dashed rgba(37,99,255,.45);

          animation:
            selectionMove 7s ease-in-out infinite;
        }

        @keyframes selectionMove {

          0%,
          100% {
            transform: translate(0,0);
          }

          50% {
            transform: translate(-8px,-5px);
          }

        }

        .selection-handle {
          position: absolute;

          width: 5px;
          height: 5px;

          border: 1px solid #2563ff;
          background: white;
        }

        .selection-handle.one {
          left: -3px;
          top: -3px;
        }

        .selection-handle.two {
          right: -3px;
          top: -3px;
        }

        .selection-handle.three {
          left: -3px;
          bottom: -3px;
        }

        .selection-handle.four {
          right: -3px;
          bottom: -3px;
        }

        /* IDE */

        .ide-panel {
          position: relative;

          overflow: hidden;

          background: #171a20;

          border-left: 1px solid #282d35;

          color: #8f98a8;
        }

        .ide-header {
          height: 34px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          padding: 0 10px;

          border-bottom: 1px solid #282d35;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 6px;
          color: #677181;
        }

        .ide-header span:last-child {
          color: #69a1ff;
        }

        .code {
          padding: 15px 11px;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 6px;

          line-height: 2;

          animation:
            codePulse 8s ease-in-out infinite;
        }

        @keyframes codePulse {

          0%,
          100% {
            opacity: .78;
          }

          50% {
            opacity: 1;
          }

        }

        .code i {
          color: #7ea9ff;
          font-style: normal;
        }

        .code b {
          color: #e8ecf3;
          font-weight: 400;
        }

        .code strong {
          color: #9fc2ff;
          font-weight: 400;
        }

        .indent {
          padding-left: 10px;
        }

        .indent-2 {
          padding-left: 20px;
        }

        .code-space {
          height: 7px;
        }

        .terminal-line {
          position: absolute;

          left: 10px;
          right: 10px;
          bottom: 10px;

          display: flex;
          align-items: center;
          gap: 5px;

          padding-top: 7px;

          border-top: 1px solid #292e36;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 5px;

          color: #657080;
        }

        .terminal-line span {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #56cf89;

          box-shadow:
            0 0 8px rgba(86,207,137,.7);

          animation:
            terminalPulse 1.5s ease-in-out infinite;
        }

        .terminal-line {
          animation:
            terminalBuild 8s ease-in-out infinite;
        }

        @keyframes terminalBuild {

          0%,
          72% {
            opacity: .45;
          }

          76%,
          90% {
            opacity: 1;
          }

          94%,
          100% {
            opacity: .45;
          }
        }

        @keyframes terminalPulse {

          0%,
          100% {
            opacity: .35;
          }

          50% {
            opacity: 1;
          }

        }

        /* SCREEN CURSOR */

        .screen-cursor {
          position: absolute;

          left: 63%;
          top: 65%;

          z-index: 8;

          display: flex;
          align-items: center;
          gap: 4px;

          animation:
            screenCursor 6s ease-in-out infinite;

          pointer-events: none;
        }

        @keyframes screenCursor {

          0% {
            transform: translate(20px, 18px);
          }

          20% {
            transform: translate(-55px, -25px);
          }

          37% {
            transform: translate(50px, -15px);
          }

          49% {
            transform: translate(35px, 22px);
          }

          53% {
            transform: translate(35px, 22px) scale(.94);
          }

          58% {
            transform: translate(35px, 22px) scale(1);
          }

          76% {
            transform: translate(-30px, 5px);
          }

          100% {
            transform: translate(20px, 18px);
          }

        }

        .cursor-arrow {
          width: 0;
          height: 0;

          border-left: 7px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 15px solid #111318;

          transform:
            rotate(-40deg);
        }

        .screen-cursor span {
          padding: 3px 5px;

          border-radius: 4px;

          background: #2563ff;
          color: white;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 5px;
        }

        /* CLICK RIPPLE */

        .screen-click {
          position: absolute;

          width: 11px;
          height: 11px;

          border: 1px solid #2563ff;
          border-radius: 50%;

          opacity: 0;

          pointer-events: none;

          animation:
            screenClick 6s ease-out infinite;
        }

        .click-one {
          left: 79%;
          top: 28%;
        }

        .click-two {
          left: 63%;
          top: 67%;
          animation-delay: 2.8s;
        }

        @keyframes screenClick {

          0%,
          43% {
            opacity: 0;
            transform: scale(.4);
          }

          45% {
            opacity: .7;
            transform: scale(.4);
          }

          58% {
            opacity: 0;
            transform: scale(3);
          }

          100% {
            opacity: 0;
            transform: scale(3);
          }

        }

        .keyboard {
          position: absolute;

          left: 10%;
          right: 10%;
          top: 5px;

          display: grid;

          grid-template-columns:
            repeat(12, 1fr);

          gap: 3px;

          opacity: .55;
        }

        .key {
          height: 5px;

          border-radius: 1px;

          background: #8f98a4;
        }

        .key.highlighted {
          background: #2563ff;

          animation:
            keyPress 4s ease-in-out infinite;
        }

        .key.highlighted:nth-child(20) {
          animation-delay: .3s;
        }

        .key.highlighted:nth-child(21) {
          animation-delay: .6s;
        }

        @keyframes keyPress {

          0%,
          70%,
          100% {
            transform: translateY(0);
            opacity: .6;
          }

          74% {
            transform: translateY(2px);
            opacity: 1;
          }

          78% {
            transform: translateY(0);
          }

        }

        .trackpad {
          position: absolute;

          width: 24%;
          height: 18px;

          left: 38%;
          bottom: 8px;

          border-radius: 3px;

          border: 1px solid rgba(90,98,108,.4);

          background: rgba(255,255,255,.12);
        }

        .laptop-shadow {
          position: absolute;

          left: 50%;
          bottom: 32px;

          width: 78%;
          height: 50px;

          transform: translateX(-50%);

          border-radius: 50%;

          background: rgba(17,24,39,.16);

          filter: blur(22px);

          animation:
            shadowFloat 7s ease-in-out infinite;
        }

        @keyframes shadowFloat {

          0%,
          100% {
            transform:
              translateX(-50%)
              scale(1);
          }

          50% {
            transform:
              translateX(-50%)
              scale(.92);
          }

        }

        @media (max-width: 1050px) {

          .laptop-scene {
            height: 460px;
          }

          .laptop {
            width: 550px;
          }

        }

        @media (max-width: 760px) {

          .laptop-scene {
            height: 340px;
          }

          .laptop {
            width: 420px;
          }

          .ide-panel {
            display: none;
          }

          .software-body {
            grid-template-columns: 32px 1fr;
          }

          .hero-floating-mark {
            display: none;
          }

          .keyboard {
            gap: 2px;
          }

          .key {
            height: 3px;
          }

          .trackpad {
            height: 11px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .laptop,
          .preview-shell,
          .fake-button,
          .canvas-card,
          .canvas-motif,
          .selection-box,
          .code,
          .screen-cursor,
          .screen-click,
          .key.highlighted,
          .laptop-shadow {
            animation: none !important;
          }

        }



        /* =====================================================
           SCREEN-ONLY PRODUCT SHOWCASE
        ====================================================== */

        .screen-scene {
          position: relative;
          width: min(680px, 100%);
          height: 500px;

          display: flex;
          align-items: center;
          justify-content: center;

          perspective: 1600px;
        }

        .studio-screen {
          position: relative;
          width: min(640px, 100%);

          animation: screenFloat 7s ease-in-out infinite;
        }

        @keyframes screenFloat {
          0%, 100% {
            transform:
              translateY(0)
              rotateY(-5deg)
              rotateX(2deg);
          }

          50% {
            transform:
              translateY(-10px)
              rotateY(-3deg)
              rotateX(1deg);
          }
        }

        .screen-frame {
          position: relative;

          width: 100%;
          aspect-ratio: 16 / 10;

          padding: 11px;

          border-radius: 18px;

          background:
            linear-gradient(
              145deg,
              #eef1f5,
              #cbd1d9
            );

          border: 1px solid #aeb6c1;

          box-shadow:
            0 35px 80px rgba(17,24,39,.18),
            inset 0 1px 0 rgba(255,255,255,.95);
        }

        .screen-camera {
          position: absolute;

          top: 4px;
          left: 50%;

          width: 4px;
          height: 4px;

          transform: translateX(-50%);

          border-radius: 50%;
          background: #6f7782;
        }

        .screen-display {
          position: relative;

          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: 9px;

          background: #f5f7fa;

          border: 1px solid #9fa8b3;

          box-shadow:
            inset 0 0 0 1px rgba(255,255,255,.7);
        }

        .screen-shadow {
          position: absolute;

          left: 50%;
          bottom: 0;

          width: 78%;
          height: 50px;

          transform: translateX(-50%);

          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(15,23,42,.18),
              transparent 70%
            );

          filter: blur(20px);

          animation: screenShadowFloat 7s ease-in-out infinite;
        }

        @keyframes screenShadowFloat {
          0%, 100% {
            transform: translateX(-50%) scale(1);
          }

          50% {
            transform: translateX(-50%) scale(.9);
          }
        }

        @media (max-width: 1050px) {

          .screen-scene {
            height: 440px;
          }

          .studio-screen {
            width: 560px;
          }

        }

        @media (max-width: 760px) {

          .screen-scene {
            height: 330px;
          }

          .studio-screen {
            width: 440px;
          }

          .ide-panel {
            display: none;
          }

          .software-body {
            grid-template-columns: 32px 1fr;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          .studio-screen,
          .screen-shadow {
            animation: none !important;
          }

        }

        .hero-micro-pattern {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;

          margin-top: 8px;
          padding-top: 10px;
        }

        .hero-micro-pattern .micro-pattern {
          width: 150px;
          height: 42px;

          color: rgba(17,19,24,.32);

          opacity: .85;

          animation:
            heroPatternFloat 5s ease-in-out infinite;
        }

        @keyframes heroPatternFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }

        @media (max-width: 760px) {
          .hero-micro-pattern {
            margin-top: 5px;
          }

          .hero-micro-pattern .micro-pattern {
            width: 120px;
            height: 35px;
          }
        }

        /* =====================================================
           TICKER
        ====================================================== */

        .ticker-section {
          position: relative;
          z-index: 2;

          display: grid;
          grid-template-columns: 140px 1fr;

          border-top: 1px solid rgba(17,19,24,.1);
          border-bottom: 1px solid rgba(17,19,24,.1);

          background: #111318;
          color: white;
        }

        .ticker-label {
          display: flex;
          align-items: center;

          padding: 17px 22px;

          border-right: 1px solid rgba(255,255,255,.1);

          color: rgba(255,255,255,.35);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
          letter-spacing: .15em;
        }

        .ticker-mask {
          overflow: hidden;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 28px;

          padding: 0 30px;

          height: 52px;

          white-space: nowrap;

          font-size: 9px;
          letter-spacing: .15em;
        }

        .ticker-item b {
          color: #5f94ff;
          font-size: 14px;
          font-weight: 400;
        }

        @keyframes tickerMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* =====================================================
           INTERACTIVE EXPERTISE LIGHT
        ====================================================== */

        .interactive-ticker {
          --ticker-target-x: -300px;
          --ticker-target-y: -300px;

          position: relative;
        }

        .interactive-ticker .ticker-mask {
          position: relative;
          overflow: hidden;
        }

        .interactive-ticker .ticker-track {
          position: relative;
          z-index: 2;

          display: flex;
          width: max-content;

          animation: tickerMove 32s linear infinite;

          will-change: transform;
        }

        .interactive-ticker .ticker-light {
          position: absolute;
          z-index: 3;

          left: 0;
          top: 0;

          width: 240px;
          height: 240px;

          pointer-events: none;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(255,255,255,.42) 0%,
              rgba(143,183,255,.24) 16%,
              rgba(37,99,255,.14) 34%,
              rgba(37,99,255,.05) 52%,
              transparent 72%
            );

          filter: blur(8px);

          opacity: 0;

          transform:
            translate3d(
              var(--ticker-target-x),
              var(--ticker-target-y),
              0
            )
            translate(-50%, -50%);

          transition:
            opacity .25s ease;

          will-change: transform;
        }

        /*
         * Smooth cursor-following animation.
         * The light itself is moved using transform rather
         * than left/top so browser compositing stays smooth.
         */
        .interactive-ticker .ticker-mask {
          --ticker-light-x: -300px;
          --ticker-light-y: -300px;
        }

        .interactive-ticker.ticker-hovered .ticker-light {
          opacity: 1;
        }

        .interactive-ticker.ticker-hovered .ticker-track {
          animation-play-state: paused;
        }

        .interactive-ticker .ticker-item {
          position: relative;
          z-index: 4;

          transition:
            color .22s ease,
            transform .22s ease;
        }

        .interactive-ticker.ticker-hovered .ticker-item {
          color: rgba(255,255,255,.28);
        }

        .interactive-ticker .ticker-item:hover {
          color: #fff;
          transform: translateY(-1px);
        }

        .interactive-ticker .ticker-item:hover b {
          color: #70a7ff;
          transform: rotate(45deg) scale(1.15);
        }

        .interactive-ticker .ticker-item b {
          transition:
            color .22s ease,
            transform .22s ease;
        }

        /* =====================================================
           SHARED SECTIONS
        ====================================================== */

        .section {
          position: relative;
          z-index: 1;
          padding: 145px 0;
        }

        .section .section-top {
          width: min(1450px, calc(100% - 50px));
          margin: auto;

          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 40px;

          color: rgba(17,19,24,.35);
        }

        .section-top p {
          max-width: 350px;
          margin: 0;

          color: rgba(17,19,24,.46);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =====================================================
           ABOUT
        ====================================================== */

        .about {
          background: rgba(247,248,250,.65);
        }

        .about-grid {
          width: min(1450px, calc(100% - 50px));
          margin: 90px auto 0;

          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 12vw;
        }

        .about h2 {
          margin: 0;

          font-size: clamp(48px, 6.2vw, 95px);
          line-height: .88;
          letter-spacing: -.075em;
          font-weight: 500;
        }

        .about h2 span {
          color: rgba(17,19,24,.25);
        }

        .about h2 strong {
          color: #2563ff;
          font-weight: 500;
        }

        .about-side {
          align-self: end;
          max-width: 460px;
        }

        .about-line {
          width: 60px;
          height: 1px;

          margin-bottom: 30px;

          background: #2563ff;
        }

        .about-side p {
          margin: 0 0 24px;

          color: rgba(17,19,24,.5);

          font-size: 14px;
          line-height: 1.85;
        }

        .text-link {
          display: flex;
          align-items: center;
          gap: 9px;

          margin-top: 35px;

          padding: 0;

          border: 0;
          border-bottom: 1px solid rgba(17,19,24,.5);

          background: transparent;

          padding-bottom: 8px;

          color: #111318;

          font-size: 11px;

          cursor: pointer;
        }

        .text-link svg {
          color: #2563ff;
        }

        /* =====================================================
           TECHCRAFT GLOBAL CODING BUTTONS
           Hover language: < text />
        ====================================================== */

        .primary-action,
        .secondary-action,
        .header-cta,
        .contact-circle {
          position: relative;
          overflow: hidden;
        }

        .primary-action::before,
        .secondary-action::before,
        .header-cta::before,
        .contact-circle::before {
          content: "<";

          position: absolute;
          left: 12px;
          top: 50%;

          transform:
            translate(-14px,-50%)
            scale(.72);

          opacity: 0;

          color: currentColor;

          font-family:
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;

          font-size: 11px;

          transition:
            opacity .2s ease,
            transform .3s cubic-bezier(.16,1,.3,1);
        }

        .primary-action::after,
        .secondary-action::after,
        .header-cta::after,
        .contact-circle::after {
          content: "/>";

          position: absolute;
          right: 12px;
          top: 50%;

          transform:
            translate(14px,-50%)
            scale(.72);

          opacity: 0;

          color: currentColor;

          font-family:
            "SFMono-Regular",
            Consolas,
            "Liberation Mono",
            monospace;

          font-size: 10px;

          transition:
            opacity .2s ease,
            transform .3s cubic-bezier(.16,1,.3,1);
        }

        .primary-action:hover::before,
        .secondary-action:hover::before,
        .header-cta:hover::before,
        .contact-circle:hover::before {
          opacity: 1;

          transform:
            translate(0,-50%)
            scale(1);

          animation: buttonCodeReveal .45s ease-out;
        }

        .primary-action:hover::after,
        .secondary-action:hover::after,
        .header-cta:hover::after,
        .contact-circle:hover::after {
          opacity: 1;

          transform:
            translate(0,-50%)
            scale(1);

          animation: buttonCodeReveal .45s ease-out;
        }

        .primary-action > *,
        .secondary-action > *,
        .header-cta > *,
        .contact-circle > * {
          position: relative;
          z-index: 2;
        }

        .primary-action:hover,
        .secondary-action:hover,
        .header-cta:hover,
        .contact-circle:hover {
          padding-left: 30px;
          padding-right: 30px;

          letter-spacing: .01em;
        }

        .primary-action:hover {
          background:
            linear-gradient(
              90deg,
              #111318 0%,
              #2563ff 50%,
              #111318 100%
            );

          background-size: 220% 100%;

          animation: buttonCodeSweep 1.4s linear infinite;
        }

        .secondary-action:hover {
          background:
            linear-gradient(
              90deg,
              rgba(255,255,255,.5),
              rgba(37,99,255,.08),
              rgba(255,255,255,.5)
            );

          background-size: 220% 100%;

          animation: buttonCodeSweep 1.4s linear infinite;
        }

        .header-cta:hover {
          background:
            linear-gradient(
              90deg,
              #2563ff,
              #4c82ff,
              #2563ff
            );

          background-size: 220% 100%;

          animation: buttonCodeSweep 1.3s linear infinite;
        }

        .contact-circle:hover {
          background:
            linear-gradient(
              135deg,
              #2563ff,
              #4b82ff
            );

          animation: contactButtonPulse 1.2s ease-in-out infinite alternate;
        }

        @keyframes buttonCodeReveal {
          0% {
            opacity: 0;
            filter: blur(3px);
          }

          50% {
            opacity: .5;
            filter: blur(1px);
          }

          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes buttonCodeSweep {
          from {
            background-position: 200% 0;
          }

          to {
            background-position: -200% 0;
          }
        }

        @keyframes contactButtonPulse {
          from {
            box-shadow:
              0 0 0 0 rgba(37,99,255,.2);
          }

          to {
            box-shadow:
              0 0 0 12px rgba(37,99,255,0);
          }
        }

        /* =====================================================
           SERVICES
        ====================================================== */

        .services {
          background: #eceff3;
        }

        .services-layout {
          width: min(1450px, calc(100% - 50px));
          margin: 95px auto 0;

          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 100px;
        }

        .services-title {
          position: sticky;
          top: 150px;
          align-self: start;
        }

        .services-title h2 {
          margin: 0;

          font-size: clamp(55px, 6.5vw, 100px);
          line-height: .87;
          letter-spacing: -.08em;
          font-weight: 500;
        }

        .services-title h2 span {
          color: #2563ff;
        }

        .services-title .micro-pattern {
          margin-top: 45px;
        }

        .service-list {
          border-top: 1px solid rgba(17,19,24,.12);
        }

        .service-item {
          position: relative;

          width: 100%;
          min-height: 145px;

          display: grid;
          grid-template-columns: 50px 50px 1fr 1.1fr 30px;

          align-items: center;

          gap: 18px;

          padding: 25px 0;

          border: 0;
          border-bottom: 1px solid rgba(17,19,24,.12);

          background: transparent;

          color: #111318;

          text-align: left;

          cursor: pointer;

          overflow: hidden;
        }

        .service-item::before {
          content: "";

          position: absolute;
          inset: 0;

          background: rgba(255,255,255,.58);

          transform: translateX(-101%);

          transition: transform .45s cubic-bezier(.76,0,.24,1);
        }

        .service-item > * {
          position: relative;
          z-index: 2;
        }

        .service-item:hover::before,
        .service-active::before {
          transform: translateX(0);
        }

        .service-index {
          color: #2563ff;

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
        }

        .service-icon {
          width: 40px;
          height: 40px;

          display: grid;
          place-items: center;

          border: 1px solid rgba(17,19,24,.12);

          color: #2563ff;

          transition: .35s ease;
        }

        .service-item:hover .service-icon,
        .service-active .service-icon {
          background: #2563ff;
          border-color: #2563ff;
          color: white;
          transform: rotate(45deg);
        }

        .service-title {
          font-size: clamp(22px, 2.5vw, 35px);
          letter-spacing: -.045em;
          font-weight: 500;
        }

        .service-description {
          max-width: 360px;

          color: rgba(17,19,24,.42);

          font-size: 12px;
          line-height: 1.7;

          transition: color .3s ease;
        }

        .service-item:hover .service-description,
        .service-active .service-description {
          color: rgba(17,19,24,.6);
        }

        .service-arrow {
          color: rgba(17,19,24,.25);
          transition: .3s ease;
        }

        .service-item:hover .service-arrow,
        .service-active .service-arrow {
          color: #2563ff;
          transform: translate(3px,-3px);
        }

        /* =====================================================
           CULTURE
        ====================================================== */

        .culture {
          position: relative;

          min-height: 730px;

          display: flex;
          align-items: center;

          padding: 130px 8vw;

          overflow: hidden;

          background: #07182f;
          color: white;
        }

        .culture-copy {
          position: relative;
          z-index: 3;

          width: min(720px,100%);
        }

        .culture-copy .section-kicker {
          color: #73a5ff;
        }

        .culture-copy h2 {
          margin: 30px 0 35px;

          font-size: clamp(65px, 9vw, 130px);
          line-height: .8;
          letter-spacing: -.085em;
          font-weight: 500;
        }

        .culture-copy h2 span {
          color: #70a7ff;
        }

        .culture-copy > p {
          max-width: 470px;

          color: rgba(255,255,255,.55);

          font-size: 14px;
          line-height: 1.85;
        }

        .culture-details {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;

          margin-top: 45px;

          color: rgba(255,255,255,.35);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 7px;
          letter-spacing: .17em;
        }

        .culture-graphic {
          position: absolute;

          right: -160px;
          top: 50%;

          width: 680px;
          height: 680px;

          transform: translateY(-50%);

          color: rgba(110,165,255,.32);

          animation: cultureRotate 70s linear infinite;
        }

        @keyframes cultureRotate {
          to {
            transform: translateY(-50%) rotate(360deg);
          }
        }

        .culture-graphic > .balochi-mark {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 280px;
          height: 280px;

          transform: translate(-50%,-50%);
        }

        .culture-square {
          position: absolute;
          left: 50%;
          top: 50%;

          border: 1px solid currentColor;

          transform: translate(-50%,-50%) rotate(45deg);
        }

        .square-one {
          width: 520px;
          height: 520px;
        }

        .square-two {
          width: 400px;
          height: 400px;
          opacity: .7;
        }

        .square-three {
          width: 280px;
          height: 280px;
          opacity: .5;
        }

        /* =====================================================
           WORK
        ====================================================== */

        .work {
          background: #f4f6f8;
        }

        .work-list {
          width: min(1450px, calc(100% - 50px));
          margin: 90px auto 0;
        }

        .work-project {
          display: grid;
          grid-template-columns: 60px 1fr 390px;

          min-height: 520px;

          border-top: 1px solid rgba(17,19,24,.1);

          align-items: center;
        }

        .work-project:last-child {
          border-bottom: 1px solid rgba(17,19,24,.1);
        }

        .work-number {
          align-self: start;
          padding-top: 25px;

          color: #2563ff;

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
        }

        .work-visual {
          position: relative;

          height: 430px;

          display: grid;
          place-items: center;

          overflow: hidden;
        }

        .work-project.blue .work-visual {
          background:
            radial-gradient(
              circle at center,
              rgba(255,255,255,.18),
              transparent 36%
            ),
            #2563ff;
        }

        .work-project.light .work-visual {
          background: #e2e6eb;
        }

        .work-project.dark .work-visual {
          background: #111318;
        }

        .work-visual > .balochi-mark {
          position: absolute;

          width: 240px;
          height: 240px;

          color: rgba(255,255,255,.45);

          transition: transform .8s cubic-bezier(.16,1,.3,1);
        }

        .work-project.light .work-visual > .balochi-mark {
          color: rgba(37,99,255,.38);
        }

        .work-project:hover .work-visual > .balochi-mark {
          transform: rotate(18deg) scale(1.08);
        }

        .work-interface-card {
          position: relative;
          z-index: 2;

          width: 60%;
          max-width: 420px;

          padding: 28px;

          background: rgba(255,255,255,.94);

          box-shadow:
            0 35px 70px rgba(0,0,0,.15);

          color: #111318;
        }

        .work-interface-card span {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 7px;
          color: rgba(17,19,24,.4);
          letter-spacing: .13em;
        }

        .work-interface-card strong {
          display: block;

          margin-top: 30px;

          font-size: clamp(30px, 4vw, 58px);
          line-height: .86;
          letter-spacing: -.07em;
          font-weight: 500;
        }

        .interface-bars {
          display: flex;
          gap: 7px;
          margin-top: 35px;
          align-items: end;
        }

        .interface-bars i {
          display: block;
          width: 23px;
          background: #2563ff;
        }

        .interface-bars i:nth-child(1) {
          height: 14px;
          opacity: .25;
        }

        .interface-bars i:nth-child(2) {
          height: 29px;
          opacity: .5;
        }

        .interface-bars i:nth-child(3) {
          height: 44px;
        }

        .floating-ui {
          position: absolute;

          border: 1px solid rgba(17,19,24,.1);
          background: rgba(255,255,255,.8);

          box-shadow: 0 25px 50px rgba(17,24,39,.08);
        }

        .ui-one {
          width: 50%;
          height: 55%;

          left: 18%;
          top: 21%;

          animation: uiFloatOne 6s ease-in-out infinite;
        }

        .ui-two {
          width: 34%;
          height: 25%;

          right: 12%;
          top: 15%;

          animation: uiFloatTwo 5s ease-in-out infinite;
        }

        .ui-three {
          width: 40%;
          height: 19%;

          right: 18%;
          bottom: 15%;

          animation: uiFloatOne 7s ease-in-out infinite reverse;
        }

        @keyframes uiFloatOne {
          0%,100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes uiFloatTwo {
          0%,100% {
            transform: rotate(0);
          }

          50% {
            transform: rotate(3deg) translateY(-8px);
          }
        }

        .terminal-card {
          width: 68%;

          padding: 22px;

          background: #171a21;

          box-shadow:
            0 35px 70px rgba(0,0,0,.25);
        }

        .terminal-top {
          display: flex;
          gap: 5px;
          margin-bottom: 26px;
        }

        .terminal-top span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255,255,255,.18);
        }

        .terminal-top span:first-child {
          background: #4f89ff;
        }

        .terminal-card code {
          color: #8e98a9;
          font-size: 12px;
          line-height: 2;
        }

        .terminal-card code i {
          color: #78a9ff;
          font-style: normal;
        }

        .terminal-card code b {
          color: #f1f4f8;
          font-weight: 400;
        }

        .work-copy {
          padding: 45px 0 45px 55px;
        }

        .work-copy > span {
          color: #2563ff;

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
          letter-spacing: .15em;
        }

        .work-copy h3 {
          margin: 17px 0 15px;

          font-size: 37px;
          line-height: .95;
          letter-spacing: -.055em;
          font-weight: 500;
        }

        .work-copy p {
          max-width: 310px;

          margin: 0;

          color: rgba(17,19,24,.45);

          font-size: 13px;
          line-height: 1.75;
        }

        .work-copy button {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-top: 35px;

          border: 0;
          background: transparent;

          padding: 0;

          color: #111318;

          font-size: 10px;

          cursor: pointer;
        }

        .work-copy button svg {
          color: #2563ff;
        }

        /* =====================================================
           INTELLIGENT PRODUCTS
        ====================================================== */

        .intelligent-visual {
          position: relative;

          width: 80%;
          max-width: 520px;

          color: white;
        }

        .intelligent-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;

          margin-bottom: 16px;
        }

        .intelligent-heading > div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .intelligent-heading span {
          color: rgba(255,255,255,.36);

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 7px;
          letter-spacing: .13em;
        }

        .intelligent-heading strong {
          font-size: 23px;
          line-height: 1;
          letter-spacing: -.05em;
          font-weight: 500;
        }

        .intelligent-live {
          display: flex;
          align-items: center;
          gap: 6px;

          color: #70a7ff !important;
        }

        .intelligent-live i {
          width: 5px;
          height: 5px;

          display: block;

          border-radius: 50%;

          background: #4fda91;

          box-shadow:
            0 0 10px rgba(79,218,145,.8);

          animation:
            intelligentPulse 1.4s ease-in-out infinite;
        }

        @keyframes intelligentPulse {
          0%,
          100% {
            opacity: .35;
          }

          50% {
            opacity: 1;
          }
        }

        .intelligent-editor {
          position: relative;

          overflow: hidden;

          border:
            1px solid rgba(112,167,255,.22);

          background:
            linear-gradient(
              145deg,
              #151922,
              #0d1016
            );

          box-shadow:
            0 35px 70px rgba(0,0,0,.28),
            inset 0 1px 0 rgba(255,255,255,.05);
        }

        .intelligent-editor-bar {
          height: 35px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding: 0 11px;

          border-bottom:
            1px solid rgba(255,255,255,.07);

          background:
            rgba(255,255,255,.025);

          color: #596273;

          font-family:
            ui-monospace,
            SFMono-Regular,
            Menlo,
            monospace;

          font-size: 6px;
          letter-spacing: .12em;
        }

        .intelligent-editor .live-code-editor {
          min-height: 230px;
          padding-top: 17px;
          padding-bottom: 28px;
        }

        .intelligent-editor .live-code-line {
          min-height: 15px;
          font-size: 7px;
        }

        .intelligent-editor .live-line-number {
          color: #485364;
        }

        .intelligent-editor .live-editor-status {
          bottom: 9px;
          left: 11px;
        }

        @media (max-width: 1050px) {

          .intelligent-visual {
            width: 75%;
          }

        }

        @media (max-width: 760px) {

          .intelligent-visual {
            width: 88%;
          }

          .intelligent-heading strong {
            font-size: 18px;
          }

          .intelligent-editor .live-code-editor {
            min-height: 190px;
          }

        }

        /* =====================================================
           PROCESS
        ====================================================== */

        .process {
          background: #e9edf2;
        }

        .process-grid {
          width: min(1450px, calc(100% - 50px));
          margin: 90px auto 0;

          display: grid;
          grid-template-columns: .7fr 1.3fr;
          gap: 12vw;
        }

        .process-heading h2 {
          margin: 0;

          font-size: clamp(65px, 8vw, 120px);
          line-height: .8;
          letter-spacing: -.085em;
          font-weight: 500;
        }

        .process-heading span {
          color: #2563ff;
        }

        .process-list {
          border-top: 1px solid rgba(17,19,24,.12);
        }

        .process-row {
          display: grid;
          grid-template-columns: 45px 1fr 1fr;
          gap: 20px;
          align-items: center;

          min-height: 110px;

          border-bottom: 1px solid rgba(17,19,24,.12);
        }

        .process-row > span {
          color: #2563ff;

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
        }

        .process-row h3 {
          margin: 0;

          font-size: 23px;
          letter-spacing: -.04em;
          font-weight: 500;
        }

        .process-row p {
          margin: 0;

          color: rgba(17,19,24,.42);

          font-size: 11px;
          line-height: 1.6;
        }

        /* =====================================================
           CONTACT
        ====================================================== */

        .contact {
          position: relative;
          z-index: 1;

          min-height: 720px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          padding: 130px 8vw 28px;

          background: #07182f;
          color: white;

          overflow: hidden;
        }

        .contact-grid {
          position: relative;
          z-index: 3;

          display: grid;
          grid-template-columns: 1.1fr .9fr;
          gap: 10vw;

          align-items: end;
        }

        .contact .section-kicker {
          color: #70a7ff;
        }

        .contact h2 {
          margin: 35px 0 0;

          font-size: clamp(65px, 9vw, 135px);
          line-height: .79;
          letter-spacing: -.09em;
          font-weight: 500;
        }

        .contact h2 span {
          color: #70a7ff;
        }

        .contact-side {
          max-width: 350px;
        }

        .contact-side p {
          margin: 0;

          color: rgba(255,255,255,.5);

          font-size: 14px;
          line-height: 1.8;
        }

        .contact-circle {
          width: 150px;
          height: 150px;

          margin-top: 50px;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 8px;

          border: 1px solid rgba(112,167,255,.65);
          border-radius: 50%;

          background: #2563ff;
          color: white;

          cursor: pointer;

          font-size: 10px;

          transition:
            transform .4s ease,
            background .4s ease;
        }

        .contact-circle:hover {
          transform: scale(1.06);
          background: #fff;
          color: #111318;
        }

        .contact-pattern {
          position: absolute;

          width: 650px;
          height: 650px;

          right: -180px;
          bottom: -230px;

          color: rgba(106,160,255,.18);

          animation: contactRotate 50s linear infinite;
        }

        @keyframes contactRotate {
          to {
            transform: rotate(360deg);
          }
        }

        .contact-footer {
          position: relative;
          z-index: 3;

          display: flex;
          justify-content: space-between;

          padding-top: 17px;

          border-top: 1px solid rgba(255,255,255,.1);

          color: rgba(255,255,255,.28);

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 7px;
          letter-spacing: .16em;
        }

        /* =====================================================
           RESPONSIVE
        ====================================================== */

        @media (max-width: 1050px) {

          .hero-grid,
          .about-grid,
          .services-layout,
          .process-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .hero-grid {
            gap: 40px;
          }

          .hero-product {
            min-height: 420px;
          }

          .services-title {
            position: static;
          }

          .work-project {
            grid-template-columns: 50px 1fr;
          }

          .work-copy {
            grid-column: 2;
            padding: 10px 0 50px;
          }

          .work-visual {
            min-height: 390px;
          }

          .contact-side {
            max-width: 450px;
          }

        }

        @media (max-width: 760px) {

          .glass-header {
            padding: 10px;
          }

          .glass-nav {
            height: 58px;
            padding-left: 12px;
          }

          .main-nav {
            position: fixed;

            left: 10px;
            right: 10px;
            top: 76px;

            padding: 10px;

            display: flex;
            flex-direction: column;

            background: rgba(255,255,255,.82);

            border: 1px solid rgba(255,255,255,.85);
            border-radius: 18px;

            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);

            box-shadow: 0 20px 60px rgba(17,24,39,.12);

            opacity: 0;
            pointer-events: none;
            transform: translateY(-8px);

            transition: .25s ease;
          }

          .main-nav.mobile-open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          .main-nav button {
            width: 100%;
            text-align: left;
            padding: 14px;
          }

          .command-button {
            display: none;
          }

          .header-cta {
            display: none;
          }

          .mobile-toggle {
            display: flex;
          }

          .hero-container,
          .section .section-top,
          .about-grid,
          .services-layout,
          .work-list,
          .process-grid {
            width: min(100% - 30px, 1450px);
          }

          .hero {
            padding-top: 105px;
          }

          .hero-grid {
            padding-top: 55px;
          }

          .hero h1 {
            font-size: clamp(55px, 17vw, 95px);
          }

          .hero-text {
            font-size: 13px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
            max-width: 270px;
          }

          .primary-action,
          .secondary-action {
            justify-content: center;
          }

          .keyboard-hint {
            display: none;
          }

          .hero-product {
            min-height: 330px;
          }

          .hero-floating-mark {
            width: 70px;
            height: 70px;
            right: -5px;
            top: 40px;
          }

          .preview-card {
            transform: none;
          }

          .preview-body {
            min-height: 270px;
          }

          .preview-main {
            padding: 16px;
          }

          .preview-title strong {
            font-size: 18px;
          }

          .preview-dashboard {
            margin-top: 17px;
          }

          .dashboard-large {
            min-height: 120px;
          }

          .dashboard-small {
            min-height: 55px;
          }

          .ticker-section {
            grid-template-columns: 1fr;
          }

          .ticker-label {
            border-right: 0;
            border-bottom: 1px solid rgba(255,255,255,.1);
          }

          .section {
            padding: 100px 0;
          }

          .section .section-top {
            grid-template-columns: 40px 1fr;
            gap: 20px;
          }

          .about-grid {
            margin-top: 65px;
          }

          .about h2,
          .services-title h2,
          .process-heading h2 {
            font-size: 56px;
          }

          .services-layout {
            margin-top: 65px;
          }

          .service-item {
            grid-template-columns: 35px 45px 1fr 25px;
            gap: 10px;
            min-height: 105px;
          }

          .service-description {
            display: none;
          }

          .service-title {
            font-size: 19px;
          }

          .culture {
            min-height: 720px;
            padding: 100px 7vw;
          }

          .culture-graphic {
            width: 500px;
            height: 500px;
            right: -290px;
          }

          .culture-copy h2 {
            font-size: 64px;
          }

          .work-project {
            min-height: auto;
            grid-template-columns: 35px 1fr;
          }

          .work-visual {
            height: 300px;
            min-height: 300px;
          }

          .work-interface-card {
            width: 62%;
          }

          .work-copy h3 {
            font-size: 27px;
          }

          .process-row {
            grid-template-columns: 38px 1fr;
            min-height: 120px;
          }

          .process-row p {
            grid-column: 2;
          }

          .contact {
            min-height: 700px;
            padding: 100px 7vw 25px;
          }

          .contact-circle {
            width: 120px;
            height: 120px;
          }

          .contact-footer {
            flex-direction: column;
            gap: 10px;
          }

        }

        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }

        }

      `}
      </style>

    </main>
  );
}
