"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Zap, Play, MessageCircle, ShieldCheck, Sparkles, MapPin, ChevronRight, Video, Compass, Award } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import SpeedometerTelemetry from "./SpeedometerTelemetry";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Racing Night Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-[#07070A]/85 to-[#07070A]/40 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07070A]/60 to-[#07070A] z-10" />
        <Image
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=2000&q=80"
          alt="Night Drag Racing Action"
          fill
          priority
          className="object-cover object-center filter brightness-50 contrast-125 scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Neon Speed Streaks Gradient */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-racing-neon/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-racing-purple/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-racing-cyan/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Top Pill / Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-xl shadow-lg shadow-racing-neon/5"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-racing-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-racing-neon" />
            </span>
            <span className="text-xs font-mono tracking-wider uppercase text-zinc-300">
              #1 Rental Kamera 360 & Action Cam Tangsel
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-racing-neon font-semibold">Pamulang Bendabaru</span>
          </motion.div>

          {/* Kinetic Heavy-Hitting Typography */}
          <div className="space-y-4 max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-white"
            >
              CAPTURE SETIAP{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon via-racing-cyan to-racing-purple drop-shadow-[0_0_35px_rgba(0,255,102,0.4)]">
                DETIK BALAPANMU!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto font-normal leading-relaxed"
            >
              Sewa kamera <span className="text-racing-neon font-semibold">GoPro MAX 360°</span>, <span className="text-racing-cyan font-semibold">Insta360 X3/X4</span>, <span className="text-racing-purple font-semibold">Canon DSLR</span>, & Aksesoris Extreme Mounting. Unit terawat, baterai full, siap rekam aksi drag race & rolling shot lo sampai garis finish.
            </motion.p>
          </div>

          {/* Floating Glassmorphic Badges (Framer Motion Staggered Physics) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] backdrop-blur-lg border border-racing-neon/30 text-zinc-200 text-xs font-mono shadow-lg shadow-racing-neon/10"
            >
              <Compass className="w-4 h-4 text-racing-neon animate-spin" style={{ animationDuration: "12s" }} />
              <span>360° Spherical Angle</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] backdrop-blur-lg border border-racing-cyan/30 text-zinc-200 text-xs font-mono shadow-lg shadow-racing-cyan/10"
            >
              <Video className="w-4 h-4 text-racing-cyan" />
              <span>4K/60FPS Hypersmooth POV</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] backdrop-blur-lg border border-racing-purple/30 text-zinc-200 text-xs font-mono shadow-lg shadow-racing-purple/10"
            >
              <ShieldCheck className="w-4 h-4 text-racing-purple" />
              <span>Garansi Unit & Full Acc</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] backdrop-blur-lg border border-racing-yellow/30 text-zinc-200 text-xs font-mono shadow-lg shadow-racing-yellow/10"
            >
              <Award className="w-4 h-4 text-racing-yellow" />
              <span>Mulai Rp 40K / 12 Jam</span>
            </motion.div>
          </motion.div>

          {/* Glowing Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto px-8 py-4 rounded-2xl text-black font-extrabold text-base bg-gradient-to-r from-racing-neon via-emerald-400 to-racing-cyan shadow-xl shadow-racing-neon/40 hover:shadow-racing-neon/70 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 overflow-hidden"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span className="tracking-wide">SEWA SEKARANG (WA)</span>
              <span className="text-xs bg-black/20 text-black px-2 py-0.5 rounded-full font-mono font-bold">Fast Respon</span>
              <span className="absolute top-0 -left-full w-full h-full bg-white/40 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="#katalog"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl text-white font-bold text-base bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-racing-neon/40 backdrop-blur-xl transition-all flex items-center justify-center gap-2 group"
            >
              <span>Lihat Armada Kamera</span>
              <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-1 text-racing-neon transition-transform" />
            </a>
          </motion.div>

          {/* Telemetry Gauge Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-6"
          >
            <SpeedometerTelemetry />
          </motion.div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#07070A] to-transparent pointer-events-none" />
    </section>
  );
}
