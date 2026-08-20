"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Phone, MessageCircle, Clock, ShieldCheck, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";

interface LocationAndMapProps {
  onOpenBooking?: () => void;
}

export default function LocationAndMap({ onOpenBooking }: LocationAndMapProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="lokasi" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Map & Basecamp Details */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-neon/10 border border-racing-neon/20 text-racing-neon text-xs font-mono uppercase tracking-widest mb-2">
              <MapPin className="w-3.5 h-3.5" /> BASECAMP & PAMULANG SQUARE
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
              LOKASI RENTAL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon to-racing-cyan">
                PAMULANG 24 JAM
              </span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              Pengambilan dan pengembalian unit standby 24 jam di Pamulang Square & Pamulang Bendabaru.
            </p>
          </div>

          {/* Map Card */}
          <div className="rounded-3xl overflow-hidden bg-[#0F101A] border border-white/15 p-4 sm:p-5 shadow-2xl relative">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group">
              <iframe
                title="Bachtiar Camera Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.49826048123!2d106.7126!3d-6.3314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTknNTMuMCJTIDEwNsKwNDInNDUuNCJF!5e0!3m2!1sid!2sid!4v1620000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%)" }}
                loading="lazy"
                aria-hidden="false"
              />
              
              <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-black/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-racing-neon animate-pulse" />
                    Bachtiar Camera Pamulang
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">Pamulang Square & Bendabaru</div>
                </div>

                <a
                  href="https://maps.app.goo.gl/vdjsMDERsLie4VwW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-racing-neon text-black font-mono font-bold text-[11px] flex items-center gap-1 hover:scale-105 transition-all"
                >
                  <Navigation className="w-3 h-3" />
                  <span>Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Contact & Operation Hours */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
              <div className="space-y-0.5">
                <div className="font-mono uppercase text-zinc-400 flex items-center gap-1 text-[10px]">
                  <Clock className="w-3 h-3 text-racing-cyan" /> Jam Operasional:
                </div>
                <div className="font-bold text-white">24 JAM NONSTOP</div>
                <div className="text-[10px] text-zinc-400">Siap janjian balap malam & subuh</div>
              </div>

              <div className="space-y-0.5">
                <div className="font-mono uppercase text-zinc-400 flex items-center gap-1 text-[10px]">
                  <Phone className="w-3 h-3 text-racing-neon" /> Kontak WhatsApp:
                </div>
                <div className="font-bold text-racing-neon font-mono">0895-0720-8615</div>
                <div className="text-[10px] text-zinc-400">Fast Respon Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="lg:col-span-6 space-y-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-purple/10 border border-racing-purple/20 text-racing-purple text-xs font-mono uppercase tracking-widest mb-2">
              <ShieldCheck className="w-3.5 h-3.5" /> FAQ PERTANYAAN UMUM
            </div>
            <h3 className="text-xl sm:text-3xl font-black uppercase text-white">
              TANYA JAWAB SEPUTAR SEWA
            </h3>
          </div>

          <div className="space-y-2">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0D0E16] border border-white/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 font-bold text-xs sm:text-sm text-white hover:text-racing-neon transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-racing-neon" : "text-zinc-400"
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-3.5 sm:px-4 pb-4 text-xs text-zinc-300 leading-relaxed border-t border-white/5 pt-2">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Chat Help */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-racing-neon/10 via-racing-cyan/10 to-transparent border border-racing-neon/20 flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-white">Siap Booking Unit?</div>
              <div className="text-[10px] text-zinc-400">Isi formulir sewa online dan kirim dokumen identitas.</div>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-2 rounded-xl bg-racing-neon text-black font-bold text-xs shrink-0 shadow-md shadow-racing-neon/20 hover:scale-105 transition-all flex items-center gap-1 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>Isi Formulir</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
