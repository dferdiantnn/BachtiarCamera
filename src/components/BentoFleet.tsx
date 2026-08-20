"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CAMERAS, CameraItem } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";
import { Zap, Star, ArrowUpRight } from "lucide-react";
import CameraModal from "./CameraModal";

export default function BentoFleet() {
  const [selectedCamera, setSelectedCamera] = useState<CameraItem | null>(null);

  return (
    <section id="katalog" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-neon/10 border border-racing-neon/20 text-racing-neon text-xs font-mono uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5 animate-pulse" /> ARMADA KAMERA RACING TANGSEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            ARMADA KAMERA &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon to-racing-cyan">
              BENTO FLEET
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2 font-normal">
            Pilihan unit kamera 360°, DSLR, Action Cam, hingga Vintage Camcorder. Dilengkapi aksesoris mounting motor & mobil untuk rekaman drag race tanpa kompromi.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#kalkulator"
            className="px-5 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs sm:text-sm font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-2"
          >
            <span>Hitung Estimasi Harga</span>
            <ArrowUpRight className="w-4 h-4 text-racing-neon" />
          </a>
        </div>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {CAMERAS.map((cam, idx) => (
          <motion.div
            key={cam.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden bg-[#0C0D14] border border-white/10 hover:border-racing-neon/50 p-6 flex flex-col justify-between transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-racing-neon/10 ${
              cam.bentoSpan || "col-span-1"
            }`}
            onClick={() => setSelectedCamera(cam)}
          >
            {/* Background Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-racing-neon/5 via-transparent to-racing-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Carbon pattern texture overlay */}
            <div className="absolute inset-0 bg-carbon-pattern bg-[length:18px_18px] opacity-20 pointer-events-none" />

            {/* Top Meta Bar */}
            <div className="relative z-10 flex items-center justify-between mb-4">
              <span
                className={`px-3 py-1 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border shadow-md ${
                  cam.tagColor === "green"
                    ? "bg-emerald-950/80 text-racing-neon border-racing-neon/40 shadow-racing-neon/20"
                    : cam.tagColor === "purple"
                    ? "bg-purple-950/80 text-racing-purple border-racing-purple/40 shadow-racing-purple/20"
                    : cam.tagColor === "cyan"
                    ? "bg-cyan-950/80 text-racing-cyan border-racing-cyan/40 shadow-racing-cyan/20"
                    : "bg-yellow-950/80 text-yellow-400 border-yellow-400/40 shadow-yellow-400/20"
                }`}
              >
                {cam.tag}
              </span>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 border border-white/5 text-xs font-mono text-zinc-300">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span>{cam.rating}</span>
              </div>
            </div>

            {/* Image Preview with 3D Zoom Effect */}
            <div className="relative z-10 my-4 w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all bg-black/40">
              <Image
                src={cam.image}
                alt={cam.name}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D14] via-transparent to-transparent opacity-80" />
              
              {/* Floating Quick View Hint */}
              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-300 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1.5">
                <span>Lihat Detail Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-racing-neon" />
              </div>
            </div>

            {/* Title & Description */}
            <div className="relative z-10 space-y-2 mt-2">
              <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-racing-neon transition-colors">
                {cam.name}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                {cam.description}
              </p>

              {/* Key Specs Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {cam.specs.slice(0, 2).map((s, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Price & Booking Button */}
            <div className="relative z-10 pt-5 mt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-zinc-500">Mulai dari</div>
                <div className="text-lg sm:text-xl font-black text-racing-neon font-mono">
                  {formatRupiah(cam.price12h)}
                  <span className="text-xs font-normal text-zinc-400 font-sans"> / 12 Jam</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-racing-neon text-white group-hover:text-black transition-all">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <CameraModal
        camera={selectedCamera}
        onClose={() => setSelectedCamera(null)}
      />
    </section>
  );
}
