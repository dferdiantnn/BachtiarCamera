"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { OFFICIAL_POSTERS } from "@/lib/data";
import { Sparkles, Eye, ArrowUpRight, MessageCircle, ChevronRight, ChevronLeft, ShieldCheck, Flame } from "lucide-react";

interface PosterSpotlightProps {
  onOpenBooking: (camId?: string) => void;
}

export default function PosterSpotlight({ onOpenBooking }: PosterSpotlightProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [zoomPoster, setZoomPoster] = useState<string | null>(null);

  const activePoster = OFFICIAL_POSTERS[activeIdx];

  return (
    <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-racing-cyan/10 border border-racing-cyan/20 text-racing-cyan text-xs font-mono uppercase tracking-widest mb-2">
            <Flame className="w-3.5 h-3.5 text-racing-cyan animate-pulse" /> SPOTLIGHT PROMO & LEAFLET RESMI
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            PROMO KHUSUS &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-cyan to-racing-neon">
              LEAFLET RESMI
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base max-w-2xl mt-1">
            Geser dan eksplorasi flyer promo resmi Insta360 X3, Canon & Fuji 130K/hari, serta panduan SOP sewa.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {OFFICIAL_POSTERS.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                activeIdx === idx
                  ? "bg-racing-neon text-black font-bold shadow-md shadow-racing-neon/30"
                  : "bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5"
              }`}
            >
              {p.badge}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Interactive Spotlight Card */}
      <div className="rounded-3xl bg-gradient-to-br from-[#12131F] via-[#0D0E17] to-[#08080E] border border-white/15 p-5 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Ambient Neon Backlight */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-racing-neon/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-racing-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Left: Poster Preview with Holographic Tilt & Zoom */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => setZoomPoster(activePoster.image)}
              className="group relative max-w-xs sm:max-w-sm w-full aspect-[3/4] rounded-2xl overflow-hidden bg-black/80 border-2 border-white/10 hover:border-racing-neon/60 shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <Image
                src={activePoster.image}
                alt={activePoster.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-racing-cyan">
                {activePoster.category}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-300 bg-black/80 px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-racing-neon" /> Klik untuk Zoom HD
                </span>
                <span className="text-[11px] font-mono font-bold bg-racing-neon text-black px-2.5 py-1 rounded-lg">
                  {activePoster.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Feature Highlights for this Poster */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-racing-cyan font-bold">
                {activePoster.category} • Bachtiar Camera
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-1">
                {activePoster.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                {activePoster.subtitle}
              </p>
            </div>

            {/* Dynamic Content based on Active Poster */}
            {activeIdx === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-purple font-bold font-mono">📸 Canon EOS 1300D</div>
                  <div className="text-zinc-400 text-[11px] mt-1">Sensor APS-C 24.2 MP tajam, shutter responsif freeze aksi balap malam.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-cyan font-bold font-mono">✨ Fujifilm X-A3</div>
                  <div className="text-zinc-400 text-[11px] mt-1">Tone warna warm khas Fuji film simulation, cocok buat photoshoot paddock.</div>
                </div>
              </div>
            )}

            {activeIdx === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-cyan font-bold font-mono">⚡ 12 Jam (165K) | 24 Jam (200K)</div>
                  <div className="text-zinc-400 text-[11px] mt-1">Sudah include invisible selfie stick 114cm & MicroSD 128GB Extreme.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-neon font-bold font-mono">🎁 FREE Bracket Pilihan</div>
                  <div className="text-zinc-400 text-[11px] mt-1">Bebas pilih bracket chin mount helm, stang CNC, atau spion motor.</div>
                </div>
              </div>
            )}

            {activeIdx === 2 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-neon font-bold font-mono">🛡️ Lensguard Baru</div>
                  <div className="text-zinc-400 text-[11px] mt-1">Lensa selalu bersih bebas goresan demi rekaman optik maksimal.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-yellow font-bold font-mono">🎓 Diajarin Sampai Bisa</div>
                  <div className="text-zinc-400 text-[11px] mt-1">Admin siap memandu cara setting angle 360 saat serah terima unit.</div>
                </div>
              </div>
            )}

            {activeIdx >= 3 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-neon font-bold font-mono">📑 Jaminan KTP Asli + SIM/KK</div>
                  <div className="text-zinc-400 text-[11px] mt-1">Tanpa ribet! Opsi deposit Rp 500.000 jika dokumen tidak lengkap.</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-racing-purple font-bold font-mono">⏰ Standby 24 JAM</div>
                  <div className="text-zinc-400 text-[11px] mt-1">Diskon sewa jangka panjang Rp 10.000/hari (sewa minimal 3 hari).</div>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenBooking(activeIdx === 1 ? "insta360-x3" : "canon-1300d-fuji-xa3")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-racing-neon to-emerald-400 text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-racing-neon/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Booking Promo Ini Sekarang</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : OFFICIAL_POSTERS.length - 1))}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer"
                  aria-label="Previous poster"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev < OFFICIAL_POSTERS.length - 1 ? prev + 1 : 0))}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white cursor-pointer"
                  aria-label="Next poster"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Poster Zoom Modal */}
      {zoomPoster && (
        <div
          onClick={() => setZoomPoster(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
        >
          <div className="relative max-w-md w-full rounded-2xl overflow-hidden border border-white/20">
            <Image
              src={zoomPoster}
              alt="Poster Preview"
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
