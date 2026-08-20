"use client";

import React, { useState } from "react";
import Image from "next/image";
import { OFFICIAL_POSTERS } from "@/lib/data";
import { getAssetPath } from "@/lib/utils";
import { Sparkles, ArrowUpRight, MessageCircle, ChevronRight, ChevronLeft, Flame, X } from "lucide-react";

interface PosterSpotlightProps {
  onOpenBooking: (camId?: string) => void;
}

export default function PosterSpotlight({ onOpenBooking }: PosterSpotlightProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const activePoster = OFFICIAL_POSTERS[activeIdx];

  return (
    <section className="relative py-8 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-8 gap-2.5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-racing-cyan/10 border border-racing-cyan/20 text-racing-cyan text-[11px] font-mono uppercase tracking-wider mb-1.5">
            <Flame className="w-3 h-3 text-racing-cyan animate-pulse" /> SPOTLIGHT PROMO & LEAFLET
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            PROMO KHUSUS &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-cyan to-racing-neon">
              LEAFLET RESMI
            </span>
          </h2>
        </div>

        {/* Mobile Horizontal Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 max-w-full">
          {OFFICIAL_POSTERS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                activeIdx === idx
                  ? "bg-racing-neon text-black font-bold shadow-md shadow-racing-neon/30"
                  : "bg-white/[0.04] text-zinc-400 border border-white/5"
              }`}
            >
              {p.badge}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Interactive Spotlight Card */}
      <div className="rounded-3xl bg-[#0F101A] border border-white/15 p-4 sm:p-7 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left: Poster Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => setIsZoomOpen(true)}
              className="relative max-w-xs w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/80 border border-white/10 shadow-xl cursor-pointer"
            >
              <Image
                src={getAssetPath(activePoster.image)}
                alt={activePoster.title}
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-contain object-center"
              />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-zinc-300 bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                <span>🔍 Ketuk untuk Perbesar</span>
                <span className="text-racing-neon font-bold">{activePoster.badge}</span>
              </div>
            </div>
          </div>

          {/* Right: Feature Highlights */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-racing-cyan font-bold">
                {activePoster.category} • Bachtiar Camera
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white mt-0.5">
                {activePoster.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 leading-relaxed">
                {activePoster.subtitle}
              </p>
            </div>

            {/* Dynamic Highlights */}
            {activeIdx === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-purple font-bold font-mono">📸 Canon EOS 1300D (130K/Hari)</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">Sensor tajam 24.2 MP, shutter tinggi untuk freeze aksi balap malam.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-cyan font-bold font-mono">✨ Fujifilm X-A3 (130K/Hari)</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">Tone warna warm cinematic khas Fuji film simulation.</div>
                </div>
              </div>
            )}

            {activeIdx === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-cyan font-bold font-mono">⚡ 12 Jam (165K) | 24 Jam (200K)</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">Include invisible selfie stick 114cm & MicroSD 128GB Extreme.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-neon font-bold font-mono">🎁 FREE Bracket Pilihan</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">Bebas pilih bracket chin mount helm, stang CNC, atau spion.</div>
                </div>
              </div>
            )}

            {activeIdx >= 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-neon font-bold font-mono">📑 Jaminan KTP Asli + SIM/KK</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">Opsi deposit Rp 500.000 jika dokumen tidak lengkap.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-purple font-bold font-mono">⏰ Standby 24 JAM Nonstop</div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">Diskon jangka panjang Rp 10.000/hari (sewa minimal 3 hari).</div>
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => onOpenBooking(activeIdx === 1 ? "insta360-x3" : "canon-1300d-fuji-xa3")}
                className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gradient-to-r from-racing-neon to-emerald-400 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-md shadow-racing-neon/30 active:scale-95 transition-transform cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Booking Promo Ini</span>
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : OFFICIAL_POSTERS.length - 1))}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev < OFFICIAL_POSTERS.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal Zoom with CLEAR CLOSE BUTTON */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/95 backdrop-blur-md">
          <div className="relative max-w-sm sm:max-w-md w-full bg-[#0F101A] border border-white/20 rounded-3xl p-3 shadow-2xl flex flex-col items-center">
            {/* Top Close Header */}
            <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <span className="text-xs font-mono text-zinc-300 font-bold">{activePoster.title}</span>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="px-3 py-1 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-mono font-bold flex items-center gap-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
                <span>Tutup</span>
              </button>
            </div>

            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black">
              <Image
                src={getAssetPath(activePoster.image)}
                alt={activePoster.title}
                fill
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-contain object-center"
              />
            </div>

            <button
              onClick={() => {
                setIsZoomOpen(false);
                onOpenBooking(activeIdx === 1 ? "insta360-x3" : "canon-1300d-fuji-xa3");
              }}
              className="w-full mt-3 py-2.5 rounded-xl bg-racing-neon text-black font-extrabold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Sewa Sesuai Promo Ini (WA)</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
