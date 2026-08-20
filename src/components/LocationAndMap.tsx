"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, MessageCircle, Clock, ShieldCheck, ChevronDown, Check, Sparkles } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";
import { getWhatsAppLink } from "@/lib/utils";

export default function LocationAndMap() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="lokasi" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Map & Basecamp Details */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-neon/10 border border-racing-neon/20 text-racing-neon text-xs font-mono uppercase tracking-widest mb-3">
              <MapPin className="w-3.5 h-3.5" /> BASECAMP & AREA LAYANAN
            </div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              LOKASI RENTAL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon to-racing-cyan">
                PAMULANG BENDABARU
              </span>
            </h2>
            <p className="text-zinc-400 text-sm mt-2">
              Ambil unit langsung di basecamp kami atau order delivery instant GoSend / Grab Express ke sirkuit atau rumahmu.
            </p>
          </div>

          {/* Interactive Dark Map Card */}
          <div className="rounded-3xl overflow-hidden bg-[#0F101A] border border-white/15 p-6 shadow-2xl relative">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group">
              {/* Stylized Dark Map Preview Image with Grid */}
              <iframe
                title="Bachtiar Camera Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.49826048123!2d106.7126!3d-6.3314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknNTMuMCJTIDEwNsKwNDInNDUuNCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }}
                loading="lazy"
                aria-hidden="false"
              />
              
              {/* Map Floating Card */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-racing-neon animate-pulse" />
                    Bachtiar Camera Basecamp
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">Pamulang, Bendabaru, Tangsel</div>
                </div>

                <a
                  href="https://maps.app.goo.gl/vdjsMDERsLie4VwW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-racing-neon text-black font-mono font-bold text-xs flex items-center gap-1 hover:scale-105 transition-all shadow-md shadow-racing-neon/20"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Buka Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Contact & Operation Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-racing-cyan" /> Jam Operasional:
                </div>
                <div className="text-xs font-bold text-white">08:00 - 23:00 WIB (Setiap Hari)</div>
                <div className="text-[10px] text-zinc-400">*Bisa janjian sewa malam untuk event drag</div>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-zinc-400 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-racing-neon" /> Kontak WhatsApp:
                </div>
                <div className="text-xs font-bold text-racing-neon font-mono">+62 896-5428-0181</div>
                <div className="text-[10px] text-zinc-400">Fast Respon Admin 24/7</div>
              </div>
            </div>

            {/* Area Coverage Badges */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="text-[11px] font-mono text-zinc-400 mb-2">Area COD & Delivery Cepat:</div>
              <div className="flex flex-wrap gap-1.5">
                {["Pamulang", "Bendabaru", "Ciputat", "BSD City", "Serpong", "Bintaro", "UNPAM", "Cinere"].map((area) => (
                  <span key={area} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-300 border border-white/5">
                    ✓ {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-purple/10 border border-racing-purple/20 text-racing-purple text-xs font-mono uppercase tracking-widest mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> FAQ & PERTANYAAN UMUM
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">
              TANYA JAWAB SEPUTAR SEWA
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Semua info yang perlu lo tahu sebelum menyewa unit kamera di Bachtiar Camera.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0D0E16] border border-white/10 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-racing-neon transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-racing-neon" : "text-zinc-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Chat Help */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-racing-neon/10 via-racing-cyan/10 to-transparent border border-racing-neon/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-white">Masih ada pertanyaan lain?</div>
              <div className="text-[11px] text-zinc-400">Tim kami siap bantu rekomendasi kamera terbaik untuk event lo.</div>
            </div>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-racing-neon text-black font-bold text-xs shrink-0 shadow-lg shadow-racing-neon/20 hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
