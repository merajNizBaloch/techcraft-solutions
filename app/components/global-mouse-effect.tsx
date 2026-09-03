"use client";

import { useEffect, useRef } from "react";

export default function GlobalMouseEffect() {
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

    const pointer = { x: -1000, y: -1000 };

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

      for (let i = 0; i < count; i += 1) {
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
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const leave = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const spacing = 70;
      const offset = (performance.now() * 0.008) % spacing;

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

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
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
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseleave", leave);
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="global-network-canvas"
      aria-hidden="true"
    />
  );
}
