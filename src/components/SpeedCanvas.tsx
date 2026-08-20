"use client";

import React, { useEffect, useRef } from "react";

export default function SpeedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const isMobile = width < 768;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    // Optimized particle count: 12 on mobile, 30 on desktop
    const particleCount = isMobile ? 12 : 28;

    const colors = [
      "rgba(0, 255, 102, 0.6)",
      "rgba(0, 240, 255, 0.6)",
      "rgba(168, 85, 247, 0.5)",
      "rgba(255, 229, 0, 0.5)",
    ];

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 50 + 20,
      speed: Math.random() * 4 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: Math.random() * 1.2 + 0.5,
    }));

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Dark background layer
        ctx.fillStyle = "rgba(7, 7, 10, 0.75)";
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.length * 0.7, p.y + p.length * 0.4);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.width;
          ctx.lineCap = "round";
          ctx.stroke();

          p.x += p.speed * 1.2;
          p.y -= p.speed * 0.7;

          if (p.x > width + 50 || p.y < -50) {
            p.x = Math.random() * width * 0.6 - 50;
            p.y = height + Math.random() * 100;
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      aria-hidden="true"
      style={{ transform: "translateZ(0)" }}
    />
  );
}
