"use client";

import React from "react";
import Link from "next/link";
import { Camera, MessageCircle, Instagram, Github, MapPin, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenBooking?: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/10 pt-12 pb-8 text-zinc-400 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-racing-neon to-racing-cyan p-[1px]">
                <div className="w-full h-full bg-[#0B0B12] rounded-[11px] flex items-center justify-center">
                  <Camera className="w-4 h-4 text-racing-neon" />
                </div>
              </div>
              <span className="font-extrabold text-lg tracking-wider text-white">
                bachtiar<span className="text-racing-neon">._.photography.id</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Rental Insta360 X3, Canon 1300D, Fujifilm X-A3, GoPro MAX & Jasa Fotografi Profesional di Pamulang Square & Pamulang Bendabaru, Tangerang Selatan.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <button
                onClick={onOpenBooking}
                className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-racing-neon hover:text-black border border-white/10 flex items-center justify-center transition-all cursor-pointer"
                aria-label="WhatsApp Formulir"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://www.instagram.com/sewa.camera.pamulang/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-pink-600 hover:text-white border border-white/10 flex items-center justify-center transition-all"
                aria-label="Instagram Sewa Camera"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/bachtiar._.photography.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-cyan-600 hover:text-white border border-white/10 flex items-center justify-center transition-all"
                aria-label="Instagram Bachtiar Photography"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/dferdiantnn/BachtiarCamera.git"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-white/[0.04] hover:bg-white hover:text-black border border-white/10 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigasi Layanan
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#katalog" className="hover:text-racing-neon transition-colors">
                  Armada Insta360, Canon & Fuji
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-racing-neon transition-colors">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#alur-sewa" className="hover:text-racing-neon transition-colors">
                  Alur & Syarat Dokumen
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-racing-neon transition-colors">
                  Poster & Galeri Dokumentasi
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-racing-neon transition-colors">
                  Lokasi Pamulang 24 Jam
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Hubungi Kami
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-racing-neon shrink-0 mt-0.5" />
                <span>Pamulang Square & Bendabaru, Tangsel</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-racing-cyan shrink-0" />
                <span>WhatsApp: 0895-0720-8615 (Standby 24 Jam)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="text-center sm:text-left text-zinc-500 text-[11px]">
            © {new Date().getFullYear()} <span className="text-white font-bold">bachtiar._.photography.id</span>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 transition-all font-mono text-[10px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3 text-racing-neon" />
          </button>
        </div>

      </div>
    </footer>
  );
}
