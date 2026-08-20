"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, MessageCircle, Menu, X, MapPin, ChevronRight, Phone } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Kamera & Unit", href: "#katalog" },
    { label: "Kalkulator Sewa", href: "#kalkulator" },
    { label: "Cara Sewa", href: "#alur-sewa" },
    { label: "Galeri Balap", href: "#galeri" },
    { label: "Lokasi & Kontak", href: "#lokasi" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0B12]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 py-2.5 px-4 sm:px-6"
            : "bg-[#0B0B12]/70 backdrop-blur-md border border-white/10 py-2.5 px-4 sm:px-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-racing-neon via-racing-cyan to-racing-purple p-[1px] shadow-md shadow-racing-neon/20 group-hover:shadow-racing-neon/40 transition-all shrink-0">
              <div className="w-full h-full bg-[#0B0B12] rounded-[11px] flex items-center justify-center">
                <Camera className="w-4 h-4 text-racing-neon group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-lg tracking-wider text-white flex items-center gap-1">
                BACHTIAR<span className="text-racing-neon">.CAMERA</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-mono text-zinc-400 flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-racing-neon animate-pulse" />
                Pamulang • 360° Rental
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-zinc-300 hover:text-racing-neon hover:bg-white/[0.04] rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://maps.app.goo.gl/vdjsMDERsLie4VwW9"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/5 hover:border-racing-neon/40 hover:text-white transition-all"
            >
              <MapPin className="w-3.5 h-3.5 text-racing-neon" />
              <span>Bendabaru, Tangsel</span>
            </a>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-racing-neon via-emerald-400 to-racing-cyan shadow-lg shadow-racing-neon/30 hover:shadow-racing-neon/60 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-black fill-black" />
              <span>Booking WhatsApp</span>
              <span className="absolute top-0 -left-full w-full h-full bg-white/30 transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-racing-neon text-black font-bold text-xs flex items-center justify-center shadow-md shadow-racing-neon/30"
              aria-label="WhatsApp Fast Contact"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-white/5 rounded-lg border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl bg-[#0F0F17]/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl space-y-3"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] text-xs font-medium text-zinc-200 hover:text-racing-neon hover:bg-white/[0.07] transition-all"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-center font-bold text-xs bg-racing-neon text-black shadow-lg shadow-racing-neon/30 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Chat WhatsApp Admin (+62 896-5428-0181)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
