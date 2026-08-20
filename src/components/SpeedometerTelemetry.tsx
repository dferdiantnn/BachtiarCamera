"use client";

import React, { useState, useEffect } from "react";
import { Gauge, Flame } from "lucide-react";

export default function SpeedometerTelemetry() {
  const [mounted, setMounted] = useState(false);
  const [rpm, setRpm] = useState(8500);
  const [speed, setSpeed] = useState(185);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRpm(Math.floor(7500 + Math.random() * 2500));
      setSpeed(Math.floor(170 + Math.random() * 45));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-3 sm:gap-6 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-racing-neon/10 border border-racing-neon/30 flex items-center justify-center">
          <Gauge className="w-4 h-4 text-racing-neon animate-pulse" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">TELEMETRY SPEED</div>
          <div className="text-sm sm:text-base font-black font-mono text-white tracking-wider">
            {mounted ? speed : 185} <span className="text-[10px] text-racing-neon font-normal">KM/H</span>
          </div>
        </div>
      </div>

      <div className="h-6 w-px bg-white/10" />

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-racing-purple/10 border border-racing-purple/30 flex items-center justify-center">
          <Flame className="w-4 h-4 text-racing-purple animate-bounce" />
        </div>
        <div>
          <div className="text-[10px] uppercase font-mono tracking-widest text-zinc-400">RPM REDLINE</div>
          <div className="text-sm sm:text-base font-black font-mono text-white tracking-wider">
            {mounted ? rpm.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : "8.500"}{" "}
            <span className="text-[10px] text-racing-purple font-normal">RPM</span>
          </div>
        </div>
      </div>

      <div className="hidden md:block h-6 w-px bg-white/10" />

      <div className="hidden md:flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-racing-neon animate-ping" />
        <span className="text-xs font-mono text-zinc-300">4K 60FPS POV STABILIZER ON</span>
      </div>
    </div>
  );
}
