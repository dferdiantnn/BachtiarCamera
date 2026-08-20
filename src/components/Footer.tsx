"use client";

import React from "react";
import Link from "next/link";
import { Camera, MessageCircle, Instagram, Github, MapPin, Heart, ArrowUp, ShieldCheck, Zap } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/10 pt-16 pb-12 text-zinc-400 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-racing-neon to-racing-cyan p-[1px]">
                <div className="w-full h-full bg-[#0B0B12] rounded-[11px] flex items-center justify-center">
                  <Camera className="w-5 h-5 text-racing-neon" />
                </div>
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                BACHTIAR<span className="text-racing-neon">.CAMERA</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
              Pusat rental kamera 360°, action camera, dan DSLR terbaik di Pamulang, Tangerang Selatan. Siap abadikan momen balap drag, motovlog, rolling shot, dan dokumentasi event berkecepatan tinggi.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-racing-neon hover:text-black border border-white/10 flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/sewa.camera.pamulang"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-pink-600 hover:text-white border border-white/10 flex items-center justify-center transition-all"
                aria-label="Instagram Sewa Camera"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/bachtiar._.photography.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-cyan-600 hover:text-white border border-white/10 flex items-center justify-center transition-all"
                aria-label="Instagram Bachtiar Photography"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/dferdiantnn/BachtiarCamera.git"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white hover:text-black border border-white/10 flex items-center justify-center transition-all"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigasi Cepat
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#katalog" className="hover:text-racing-neon transition-colors">
                  Katalog Unit Kamera 360
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-racing-neon transition-colors">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#alur-sewa" className="hover:text-racing-neon transition-colors">
                  Alur & Syarat Rental
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-racing-neon transition-colors">
                  Galeri Action Balap Drag
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-racing-neon transition-colors">
                  Lokasi Basecamp Pamulang
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Hubungi Basecamp
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-racing-neon shrink-0 mt-0.5" />
                <span>Jl. Pamulang Bendabaru, Tangerang Selatan, Banten (Dekat UNPAM)</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-racing-cyan shrink-0" />
                <span>WhatsApp: +62 896-5428-0181</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href="https://github.com/dferdiantnn/BachtiarCamera.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline font-mono text-[11px]"
                >
                  github.com/dferdiantnn/BachtiarCamera
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-white font-bold">Bachtiar Camera</span>. All rights reserved. Built with UI/UX Pro Max & Framer Motion.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 transition-all font-mono text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-racing-neon" />
          </button>
        </div>

      </div>
    </footer>
  );
}
