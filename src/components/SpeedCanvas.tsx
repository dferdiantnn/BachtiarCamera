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
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Speed lines & sparks array
    interface Particle {
      x: number;
      y: number;
      length: number;
      speed: number;
      color: string;
      opacity: number;
      width: number;
    }

    const colors = [
      "rgba(0, 255, 102, 0.7)",   // Neon Lime
      "rgba(0, 240, 255, 0.7)",   // Nitro Cyan
      "rgba(168, 85, 247, 0.7)",  // Cyber Purple
      "rgba(255, 229, 0, 0.6)",   // Speed Yellow
      "rgba(255, 255, 255, 0.5)", // White Spark
    ];

    const particles: Particle[] = Array.from({ length: 65 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 80 + 30,
      speed: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.7 + 0.2,
      width: Math.random() * 1.5 + 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle atmospheric dark gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(7, 7, 10, 0.7)");
      gradient.addColorStop(1, "rgba(11, 11, 16, 0.85)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.length * 0.8, p.y + p.length * 0.5);
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.width;
        ctx.lineCap = "round";
        ctx.stroke();

        p.x += p.speed * 1.5;
        p.y -= p.speed * 0.9;

        if (p.x > width + 100 || p.y < -100) {
          p.x = Math.random() * width * 0.6 - 100;
          p.y = height + Math.random() * 200;
          p.speed = Math.random() * 6 + 4;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40"
      aria-hidden="true"
    />
  );
}
