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
      const start = 9;
      const end = start + length;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      const gradient = ctx.createLinearGradient(
        centerX + cos * start,
        centerY + sin * start,
        centerX + cos * end,
        centerY + sin * end,
      );
      gradient.addColorStop(0, `rgba(0,155,190, ${opacity})`);
      gradient.addColorStop(0.55, `rgba(0,155,190, ${opacity * 0.62})`);
      gradient.addColorStop(1, "rgba(0,155,190, 0)");

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
        const rayBoost = 0.75 + speed * 0.55;

        ctx.save();
        ctx.translate(cursor.x, cursor.y);

        // Design/dev rays: compact four-axis + diagonal accents.
        for (let i = 0; i < 8; i += 1) {
          const angle = (Math.PI * 2 * i) / 8 - Math.PI / 8;
          const length = (i % 2 === 0 ? 20 : 13) * rayBoost;
          drawRay(0, 0, angle, length, (i % 2 === 0 ? 0.42 : 0.2) * pulse);
        }

        // Soft technical halo.
        const halo = ctx.createRadialGradient(0, 0, 3, 0, 0, 19 + speed * 5);
        halo.addColorStop(0, "rgba(0,155,190, 0.14)");
        halo.addColorStop(0.45, "rgba(0,155,190, 0.045)");
        halo.addColorStop(1, "rgba(0,155,190, 0)");
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(0, 0, 19 + speed * 5, 0, Math.PI * 2);
        ctx.fill();

        // Outer precision ring.
        ctx.strokeStyle = "rgba(0,155,190, 0.48)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, 8.5 + speed, 0, Math.PI * 2);
        ctx.stroke();

        // Rotating engineering guide.
        ctx.save();
        ctx.rotate(time * 0.00045);
        ctx.strokeStyle = "rgba(0,155,190, 0.34)";
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.arc(0, 0, 11.5, -0.9, 1.15);
        ctx.stroke();
        ctx.restore();

        // Central diamond / design marker.
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = "rgba(244, 246, 248, 0.96)";
        ctx.strokeStyle = "#111318";
        ctx.lineWidth = 0.9;
        ctx.fillRect(-3.8, -3.8, 7.6, 7.6);
        ctx.strokeRect(-3.8, -3.8, 7.6, 7.6);
        ctx.fillStyle = "#087e9b";
        ctx.fillRect(-1.4, -1.4, 2.8, 2.8);
        ctx.restore();

        // Code markers: < />
        ctx.save();
        ctx.fillStyle = "rgba(0,155,190, 0.88)";
        ctx.font = "600 6.5px SFMono-Regular, Consolas, Liberation Mono, monospace";
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        ctx.fillText("<", cursor.x - 15 - speed * 1.5, cursor.y);
        ctx.fillText("/>", cursor.x + 16 + speed * 1.5, cursor.y);
        ctx.restore();

        // Tiny live status point.
        ctx.fillStyle = "#c83a32";
        ctx.beginPath();
        ctx.arc(cursor.x, cursor.y - 13, 1.3 + speed * 0.6, 0, Math.PI * 2);
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
