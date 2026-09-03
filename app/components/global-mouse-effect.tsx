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
    let visible = false;

    const pointer = { x: -1000, y: -1000 };
    const cursor = { x: -1000, y: -1000 };
    const velocity = { x: 0, y: 0 };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const move = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      visible = true;
    };

    const leave = () => {
      visible = false;
    };

    const drawRay = (
      centerX: number,
      centerY: number,
      angle: number,
      length: number,
      opacity: number,
      widthPx = 1,
    ) => {
      const start = 21;
      const end = start + length;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      const gradient = ctx.createLinearGradient(
        centerX + cos * start,
        centerY + sin * start,
        centerX + cos * end,
        centerY + sin * end,
      );
      gradient.addColorStop(0, `rgba(37, 99, 255, ${opacity})`);
      gradient.addColorStop(0.55, `rgba(37, 99, 255, ${opacity * 0.62})`);
      gradient.addColorStop(1, "rgba(37, 99, 255, 0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = widthPx;
      ctx.beginPath();
      ctx.moveTo(centerX + cos * start, centerY + sin * start);
      ctx.lineTo(centerX + cos * end, centerY + sin * end);
      ctx.stroke();
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      if (visible) {
        cursor.x += (pointer.x - cursor.x) * 0.2;
        cursor.y += (pointer.y - cursor.y) * 0.2;

        velocity.x += (pointer.x - cursor.x) * 0.02;
        velocity.y += (pointer.y - cursor.y) * 0.02;
        velocity.x *= 0.82;
        velocity.y *= 0.82;

        const speed = Math.min(1, Math.hypot(velocity.x, velocity.y) / 5);
        const pulse = 0.92 + Math.sin(time * 0.006) * 0.08;
        const rayBoost = 0.75 + speed * 0.7;

        ctx.save();
        ctx.translate(cursor.x, cursor.y);

        // Design/dev rays: four primary axes plus four diagonal accents.
        for (let i = 0; i < 8; i += 1) {
          const angle = (Math.PI * 2 * i) / 8 - Math.PI / 8;
          const length = (i % 2 === 0 ? 42 : 27) * rayBoost;
          drawRay(0, 0, angle, length, (i % 2 === 0 ? 0.42 : 0.2) * pulse);
        }

        // Soft technical halo.
        const halo = ctx.createRadialGradient(0, 0, 5, 0, 0, 43 + speed * 13);
        halo.addColorStop(0, "rgba(37, 99, 255, 0.14)");
        halo.addColorStop(0.45, "rgba(37, 99, 255, 0.045)");
        halo.addColorStop(1, "rgba(37, 99, 255, 0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(0, 0, 43 + speed * 13, 0, Math.PI * 2);
        ctx.fill();

        // Outer precision ring.
        ctx.strokeStyle = "rgba(37, 99, 255, 0.48)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, 17 + speed * 2, 0, Math.PI * 2);
        ctx.stroke();

        // Rotating engineering guides.
        ctx.save();
        ctx.rotate(time * 0.00045);
        ctx.strokeStyle = "rgba(37, 99, 255, 0.34)";
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.arc(0, 0, 23, -0.9, 1.15);
        ctx.stroke();
        ctx.restore();

        // Central diamond / design marker.
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = "rgba(244, 246, 248, 0.96)";
        ctx.strokeStyle = "#111318";
        ctx.lineWidth = 1.1;
        ctx.fillRect(-7, -7, 14, 14);
        ctx.strokeRect(-7, -7, 14, 14);
        ctx.fillStyle = "#2563ff";
        ctx.fillRect(-2.5, -2.5, 5, 5);
        ctx.restore();

        // Code markers: < />
        ctx.save();
        ctx.fillStyle = "rgba(37, 99, 255, 0.88)";
        ctx.font = "600 11px SFMono-Regular, Consolas, Liberation Mono, monospace";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText("<", cursor.x - 30 - speed * 3, cursor.y);
        ctx.fillText("/>", cursor.x + 32 + speed * 3, cursor.y);
        ctx.restore();

        // Tiny live status point.
        ctx.fillStyle = "#c83a32";
        ctx.beginPath();
        ctx.arc(cursor.x + 0, cursor.y - 27, 2.4 + speed * 1.2, 0, Math.PI * 2);
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
