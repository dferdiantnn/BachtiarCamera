"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, ChevronRight, Video, Compass, Award } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import SpeedometerTelemetry from "./SpeedometerTelemetry";

export default function HeroSection() {
  return (
    <section className="relative pt-20 sm:pt-28 pb-8 sm:pb-12 flex items-center justify-center overflow-hidden">
      {/* Background Racing Night Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-[#07070A]/85 to-[#07070A]/40 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#07070A]/60 to-[#07070A] z-10" />
        <Image
          src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center filter brightness-50 contrast-125 scale-105"
        />
        {/* Neon Speed Streaks Gradient */}
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-racing-neon/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-racing-purple/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-xl shadow-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-racing-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-racing-neon" />
            </span>
            <span className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-zinc-300">
              #1 Rental Kamera 360 & Action Cam Tangsel
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-[10px] sm:text-xs font-mono text-racing-neon font-semibold hidden sm:inline">Pamulang Bendabaru</span>
          </div>

          {/* Kinetic Heavy-Hitting Typography */}
          <div className="space-y-2 max-w-5xl">
            <h1 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[1.05] text-white">
              CAPTURE SETIAP{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon via-racing-cyan to-racing-purple drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">
                DETIK BALAPANMU!
              </span>
            </h1>

            <p className="text-xs sm:text-base text-zinc-300 max-w-2xl mx-auto font-normal leading-relaxed px-2">
              Sewa <span className="text-racing-neon font-semibold">GoPro MAX 360°</span>, <span className="text-racing-cyan font-semibold">Insta360 X3/X4</span>, <span className="text-racing-purple font-semibold">Canon DSLR</span>, & Aksesoris Extreme Mounting Pamulang.
            </p>
          </div>

          {/* Floating Glassmorphic Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 pt-1">
            <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-lg border border-racing-neon/30 text-zinc-200 text-[10px] sm:text-xs font-mono">
              <Compass className="w-3 h-3 text-racing-neon" />
              <span>360° Spherical Angle</span>
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-lg border border-racing-cyan/30 text-zinc-200 text-[10px] sm:text-xs font-mono">
              <Video className="w-3 h-3 text-racing-cyan" />
              <span>4K/60FPS Hypersmooth POV</span>
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-lg border border-racing-purple/30 text-zinc-200 text-[10px] sm:text-xs font-mono">
              <ShieldCheck className="w-3 h-3 text-racing-purple" />
              <span>Garansi Unit & Acc</span>
            </div>

            <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-white/[0.04] backdrop-blur-lg border border-racing-yellow/30 text-zinc-200 text-[10px] sm:text-xs font-mono">
              <Award className="w-3 h-3 text-racing-yellow" />
              <span>Mulai Rp 40K</span>
            </div>
          </div>

          {/* Glowing Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1 w-full max-w-sm sm:max-w-none sm:w-auto">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group w-full sm:w-auto px-6 py-3 rounded-2xl text-black font-extrabold text-xs sm:text-sm bg-gradient-to-r from-racing-neon via-emerald-400 to-racing-cyan shadow-lg shadow-racing-neon/30 hover:shadow-racing-neon/60 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 overflow-hidden"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span className="tracking-wide">SEWA SEKARANG (WA)</span>
              <span className="text-[9px] bg-black/20 text-black px-1.5 py-0.5 rounded-full font-mono font-bold">Fast Respon</span>
              <span className="absolute top-0 -left-full w-full h-full bg-white/40 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
            </a>

            <a
              href="#katalog"
              className="w-full sm:w-auto px-5 py-3 rounded-2xl text-white font-bold text-xs sm:text-sm bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-racing-neon/40 backdrop-blur-xl transition-all flex items-center justify-center gap-1 group"
            >
              <span>Lihat Armada Kamera</span>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 text-racing-neon transition-transform" />
            </a>
          </div>

          {/* Telemetry Gauge Display */}
          <div className="pt-1">
            <SpeedometerTelemetry />
          </div>

        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#07070A] to-transparent pointer-events-none" />
    </section>
  );
}
