"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { WHY_CHOOSE_US } from "@/lib/data";
import { ShieldCheck, GraduationCap, Box, Sparkles, Camera, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function KenapaHarusSewa({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [showPosterZoom, setShowPosterZoom] = useState(false);

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-racing-neon" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-racing-cyan" />,
    Box: <Box className="w-5 h-5 text-racing-purple" />,
    Sparkles: <Sparkles className="w-5 h-5 text-racing-yellow" />,
    Camera: <Camera className="w-5 h-5 text-racing-neon" />,
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: 5 Core Reasons from Media 2 */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-neon/10 border border-racing-neon/20 text-racing-neon text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> 5 KEUNGGULAN BACHTIAR CAMERA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              KENAPA HARUS SEWA{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon via-racing-cyan to-racing-purple">
                DI SINI?
              </span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
              Kami menjamin kualitas lensa terbaik, penyimpanan unit higienis bebas jamur, dan edukasi setting kamera untuk pemula sampai mahir.
            </p>
          </div>

          {/* 5 Reasons Cards List */}
          <div className="space-y-3">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl bg-[#0D0E16] border border-white/10 hover:border-racing-neon/40 p-4 sm:p-5 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-racing-neon/10 group-hover:border-racing-neon/30 transition-all">
                  {iconMap[item.icon]}
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-racing-neon transition-colors">
                      {item.number}. {item.title}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-racing-cyan border border-white/5">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 rounded-xl bg-racing-neon text-black font-bold text-xs sm:text-sm hover:scale-105 transition-all shadow-lg shadow-racing-neon/20 flex items-center gap-2"
            >
              <span>Booking Sekarang (Dapat Free Sticker)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Right Column: Original Poster Showcase (Media 2) */}
        <div className="lg:col-span-5">
          <div
            onClick={() => setShowPosterZoom(true)}
            className="group relative rounded-3xl overflow-hidden bg-black/60 border border-white/15 hover:border-racing-neon/60 p-3 shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/posters/poster-kenapa-harus-sewa.jpg"
                alt="Poster Kenapa Harus Sewa Di Sini"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-white bg-black/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                  🔍 Klik untuk Perbesar Poster
                </span>
                <span className="text-xs font-mono text-racing-neon bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-racing-neon/30">
                  Official Leaflet
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Poster Zoom Modal */}
      {showPosterZoom && (
        <div
          onClick={() => setShowPosterZoom(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
        >
          <div className="relative max-w-lg w-full rounded-2xl overflow-hidden border border-white/20">
            <Image
              src="/images/posters/poster-kenapa-harus-sewa.jpg"
              alt="Poster Kenapa Harus Sewa Di Sini"
              width={600}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
