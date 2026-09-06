"use client";

import { useEffect, useState } from "react";

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


export default function HomeProductPreview() {
  return <ProductPreview />;
}
