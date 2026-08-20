"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Star, MessageCircle, Zap, ShieldCheck, Clock, Layers, Sparkles } from "lucide-react";
import { CameraItem } from "@/lib/data";
import { formatRupiah, getWhatsAppLink } from "@/lib/utils";

interface CameraModalProps {
  camera: CameraItem | null;
  onClose: () => void;
}

export default function CameraModal({ camera, onClose }: CameraModalProps) {
  if (!camera) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#0F101A] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black z-10 my-8 overflow-hidden"
        >
          {/* Neon Top Edge Accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-racing-neon via-racing-cyan to-racing-purple" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-2">
            {/* Camera Preview Image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video md:aspect-[4/5] bg-black/40">
              <Image
                src={camera.image}
                alt={camera.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Badges on image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-racing-neon border border-racing-neon/30">
                  {camera.tag}
                </span>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-yellow-400">
                  <Star className="w-3.5 h-3.5 fill-yellow-400" />
                  <span>{camera.rating} ({camera.reviewCount})</span>
                </div>
              </div>
            </div>

            {/* Content & Specs */}
            <div className="space-y-5">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-racing-cyan">
                  Katalog Unit Bachtiar Camera
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {camera.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  {camera.description}
                </p>
              </div>

              {/* Racing Use Case */}
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-[11px] font-mono uppercase text-racing-neon flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5" /> Best For Drag & Track:
                </div>
                <div className="text-xs text-zinc-200 mt-1">
                  {camera.racingUse}
                </div>
              </div>

              {/* Specs List */}
              <div>
                <div className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-racing-purple" /> Spesifikasi Utama:
                </div>
                <ul className="space-y-1.5">
                  {camera.specs.map((spec, i) => (
                    <li key={i} className="text-xs text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-racing-cyan" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inclusions List */}
              <div>
                <div className="text-xs font-mono uppercase text-zinc-400 mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-racing-neon" /> Paket Rental Termasuk:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {camera.inclusions.map((inc, i) => (
                    <div key={i} className="text-[11px] text-zinc-300 flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-lg border border-white/5">
                      <Check className="w-3 h-3 text-racing-neon shrink-0" />
                      <span className="truncate">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono uppercase text-zinc-400">Harga Rental</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-black text-racing-neon font-mono">
                      {formatRupiah(camera.price12h)}
                    </span>
                    <span className="text-xs text-zinc-400">/ 12 Jam</span>
                    <span className="text-xs text-zinc-500">•</span>
                    <span className="text-sm font-bold text-white font-mono">
                      {formatRupiah(camera.price24h)}
                    </span>
                    <span className="text-xs text-zinc-400">/ 24 Jam</span>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink(camera.name, "24 Jam")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-racing-neon to-emerald-400 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-racing-neon/30 hover:shadow-racing-neon/60 hover:scale-105 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Sewa Unit Ini Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
