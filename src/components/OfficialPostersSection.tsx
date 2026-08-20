"use client";

import React, { useState } from "react";
import Image from "next/image";
import { OFFICIAL_POSTERS } from "@/lib/data";
import { Sparkles, Eye, ArrowUpRight, MessageCircle } from "lucide-react";

export default function OfficialPostersSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-cyan/10 border border-racing-cyan/20 text-racing-cyan text-xs font-mono uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" /> OFFICIAL POSTERS & PRICE LIST
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            POSTER RESMI &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-cyan to-racing-neon">
              LEAFLET LAYANAN
            </span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-base max-w-2xl mt-1">
            Klik poster resmi di bawah ini untuk melihat detail harga, syarat jaminan identitas KTP/SIM/KK, dan promo sewa jangka panjang.
          </p>
        </div>

        <button
          onClick={onOpenBooking}
          className="px-4 py-2.5 rounded-xl bg-racing-neon text-black font-extrabold text-xs font-mono hover:scale-105 transition-all shadow-md shadow-racing-neon/20 flex items-center gap-1.5 shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-black" />
          <span>Isi Formulir Sewa</span>
        </button>
      </div>

      {/* Grid of 5 Official Posters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {OFFICIAL_POSTERS.map((poster) => (
          <div
            key={poster.id}
            onClick={() => setSelectedPoster(poster.image)}
            className="group relative rounded-2xl overflow-hidden bg-[#0D0E16] border border-white/10 hover:border-racing-neon/60 p-2 sm:p-2.5 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-racing-neon/10"
          >
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-black/40">
              <Image
                src={poster.image}
                alt={poster.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-racing-neon text-black">
                {poster.badge}
              </div>

              <div className="absolute bottom-2 left-2 right-2 text-left">
                <div className="text-[9px] font-mono text-racing-cyan uppercase truncate">{poster.category}</div>
                <div className="text-[11px] font-bold text-white line-clamp-1 leading-tight">{poster.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Zoom Poster */}
      {selectedPoster && (
        <div
          onClick={() => setSelectedPoster(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
        >
          <div className="relative max-w-md w-full rounded-2xl overflow-hidden border border-white/20">
            <Image
              src={selectedPoster}
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
