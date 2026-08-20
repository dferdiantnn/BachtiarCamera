"use client";

import React from "react";
import { RENTAL_STEPS } from "@/lib/data";
import { Camera, FileCheck, ShieldCheck, Flame, Award, MapPin, ChevronRight } from "lucide-react";

interface DragRaceTimelineProps {
  onOpenBooking?: () => void;
}

export default function DragRaceTimeline({ onOpenBooking }: DragRaceTimelineProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Camera: <Camera className="w-4 h-4 text-racing-neon" />,
    FileCheck: <FileCheck className="w-4 h-4 text-racing-cyan" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-racing-purple" />,
    Flame: <Flame className="w-4 h-4 text-racing-yellow" />,
    Award: <Award className="w-4 h-4 text-racing-neon" />,
  };

  return (
    <section id="alur-sewa" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-purple/10 border border-racing-purple/20 text-racing-purple text-xs font-mono uppercase tracking-widest">
          <Flame className="w-3.5 h-3.5" /> 5 TAHAPAN ALUR SEWA CEPAT
        </div>
        <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
          PROSES SEWA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-purple via-racing-cyan to-racing-neon">
            SUPER CEPAT & MUDAH
          </span>
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm">
          Verifikasi instan 5 menit, unit bersih dari drybox langsung siap tempur di sirkuit atau hunting foto.
        </p>
      </div>

      {/* Grid Timeline Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {RENTAL_STEPS.map((item) => (
          <div
            key={item.step}
            className="rounded-2xl bg-[#0E0F17] border border-white/10 hover:border-racing-neon/40 p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono font-black text-racing-neon">
                  {item.step}
                </span>
                <div className="p-1.5 rounded-lg bg-white/[0.04]">
                  {iconMap[item.icon]}
                </div>
              </div>

              <h3 className="text-sm font-extrabold text-white group-hover:text-racing-neon transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-white/5 text-[9px] font-mono text-racing-cyan">
              {item.badge}
            </div>
          </div>
        ))}
      </div>

      {/* Fast CTA */}
      <div className="mt-10 text-center">
        <button
          onClick={onOpenBooking}
          className="px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-racing-neon/40 text-white font-bold text-xs sm:text-sm hover:scale-105 transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Mulai Isi Formulir Sewa Sekarang</span>
          <ChevronRight className="w-4 h-4 text-racing-neon" />
        </button>
      </div>
    </section>
  );
}
