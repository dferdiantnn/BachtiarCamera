"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CAMERAS, CameraItem } from "@/lib/data";
import { formatRupiah, getAssetPath } from "@/lib/utils";
import { Zap, Star, ArrowUpRight, ShieldCheck, Flame, ChevronRight } from "lucide-react";
import CameraModal from "./CameraModal";

interface BentoFleetProps {
  onOpenBooking?: (camId: string) => void;
}

export default function BentoFleet({ onOpenBooking }: BentoFleetProps) {
  const [selectedCamera, setSelectedCamera] = useState<CameraItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "360", "DSLR", "Action", "Jasa"];

  const filteredCameras = activeCategory === "All"
    ? CAMERAS
    : CAMERAS.filter((c) => c.category === activeCategory || (activeCategory === "DSLR" && c.category === "Mirrorless"));

  return (
    <section id="katalog" className="relative py-10 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-racing-neon/10 border border-racing-neon/20 text-racing-neon text-[11px] font-mono uppercase tracking-wider mb-2">
            <Zap className="w-3 h-3 animate-pulse" /> ARMADA KAMERA TANGSEL
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            ARMADA UNIT &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon to-racing-cyan">
              BENTO FLEET
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mt-1">
            Kamera 360°, DSLR/Mirrorless, dan Jasa Fotografer siap tempur di Pamulang Square & Bendabaru.
          </p>
        </div>

        {/* Mobile Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "bg-racing-neon text-black font-bold shadow-md shadow-racing-neon/30"
                  : "bg-white/[0.04] text-zinc-400 border border-white/5"
              }`}
            >
              {cat === "All" ? "Semua Unit" : cat === "360" ? "360° Cam" : cat === "DSLR" ? "DSLR / Fuji" : cat === "Jasa" ? "Jasa Foto" : "Action Cam"}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid (Optimized for Mobile Touch) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
        {filteredCameras.map((cam) => (
          <div
            key={cam.id}
            className="group relative rounded-3xl overflow-hidden bg-[#0C0D14] border border-white/10 hover:border-racing-neon/50 p-4 sm:p-6 flex flex-col justify-between transition-all duration-300 shadow-xl active:scale-[0.99]"
            onClick={() => setSelectedCamera(cam)}
          >
            {/* Ambient Backlight on Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-racing-neon/5 via-transparent to-racing-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Top Meta Bar */}
            <div className="relative z-10 flex items-center justify-between mb-2.5">
              <span
                className={`px-2.5 py-0.5 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider border ${
                  cam.tagColor === "green"
                    ? "bg-emerald-950/80 text-racing-neon border-racing-neon/40"
                    : cam.tagColor === "purple"
                    ? "bg-purple-950/80 text-racing-purple border-racing-purple/40"
                    : cam.tagColor === "cyan"
                    ? "bg-cyan-950/80 text-racing-cyan border-racing-cyan/40"
                    : "bg-yellow-950/80 text-yellow-400 border-yellow-400/40"
                }`}
              >
                {cam.tag}
              </span>

              <div className="flex items-center gap-1 px-2 py-0.5 rounded-lg bg-black/60 border border-white/5 text-[10px] sm:text-[11px] font-mono text-zinc-300">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span>{cam.rating}</span>
              </div>
            </div>

            {/* Image Preview */}
            <div className="relative z-10 my-2 w-full h-44 sm:h-52 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <Image
                src={getAssetPath(cam.image)}
                alt={cam.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D14] via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1">
                <span>Detail Specs</span>
                <ArrowUpRight className="w-3 h-3 text-racing-neon" />
              </div>
            </div>

            {/* Title & Description */}
            <div className="relative z-10 space-y-1 mt-1">
              <h3 className="text-base sm:text-lg font-black text-white group-hover:text-racing-neon transition-colors leading-tight">
                {cam.name}
              </h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                {cam.description}
              </p>

              {/* Specs Pills */}
              <div className="flex flex-wrap gap-1 pt-1">
                {cam.specs.slice(0, 2).map((s, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Price & Direct 1-Tap Booking Button */}
            <div className="relative z-10 pt-3.5 mt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <div>
                <div className="text-[9px] font-mono uppercase text-zinc-500">Tarif Sewa</div>
                <div className="text-sm sm:text-base font-black text-racing-neon font-mono">
                  {formatRupiah(cam.price12h)}
                  <span className="text-[10px] font-normal text-zinc-400 font-sans"> / 12 Jam</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCamera(cam);
                  }}
                  className="px-2.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-300 text-xs font-mono"
                >
                  Detail
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBooking?.(cam.id);
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-racing-neon text-black font-extrabold text-xs flex items-center gap-1 shadow-md shadow-racing-neon/30 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Sewa</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <CameraModal
        camera={selectedCamera}
        onClose={() => setSelectedCamera(null)}
        onOpenBooking={(camId) => {
          setSelectedCamera(null);
          onOpenBooking?.(camId);
        }}
      />
    </section>
  );
}
