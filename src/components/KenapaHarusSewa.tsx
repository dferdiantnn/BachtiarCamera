"use client";

import React from "react";
import Image from "next/image";
import { WHY_CHOOSE_US } from "@/lib/data";
import { getAssetPath } from "@/lib/utils";
import { ShieldCheck, GraduationCap, Box, Sparkles, Camera, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface KenapaHarusSewaProps {
  onOpenBooking: () => void;
}

export default function KenapaHarusSewa({ onOpenBooking }: KenapaHarusSewaProps) {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-racing-neon" />,
    GraduationCap: <GraduationCap className="w-4 h-4 text-racing-cyan" />,
    Box: <Box className="w-4 h-4 text-racing-purple" />,
    Sparkles: <Sparkles className="w-4 h-4 text-racing-yellow" />,
    Camera: <Camera className="w-4 h-4 text-racing-neon" />,
  };

  return (
    <section id="keunggulan" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        
        {/* Left Column: 5 Core Reasons from Media 2 */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-racing-neon/10 border border-racing-neon/20 text-racing-neon text-[11px] font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3 animate-pulse" /> 5 KEUNGGULAN UTAMA
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              KENAPA HARUS SEWA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon via-racing-cyan to-racing-purple">
                DI SINI?
              </span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1 leading-relaxed">
              Jaminan kualitas optik higienis bebas jamur, dan edukasi setting kamera bagi pemula.
            </p>
          </div>

          {/* 5 Reasons Cards List */}
          <div className="space-y-2 sm:space-y-3">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-[#0D0E16] border border-white/10 p-3.5 sm:p-4.5 transition-all duration-300 flex items-start gap-3"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                  {iconMap[item.icon]}
                </div>

                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      {item.number}. {item.title}
                    </h3>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-racing-cyan border border-white/5 shrink-0">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed pt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-1">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-racing-neon text-black font-extrabold text-xs sm:text-sm shadow-md shadow-racing-neon/20 flex items-center justify-center gap-1.5 active:scale-95 transition-transform cursor-pointer"
            >
              <span>Booking Sekarang (Dapat Free Sticker)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Right Column: Embedded Card Preview (No Fullscreen Trap) */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden bg-[#0D0E16] border border-white/15 p-3 shadow-xl">
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-black/60">
              <Image
                src={getAssetPath("/images/posters/poster-kenapa-harus-sewa.jpg")}
                alt="Poster Kenapa Harus Sewa Di Sini"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain object-center"
              />
            </div>
            <div className="text-center pt-2 text-[10px] font-mono text-zinc-400">
              Official Leaflet • Bachtiar Camera Pamulang
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
