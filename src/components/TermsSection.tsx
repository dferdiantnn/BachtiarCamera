"use client";

import React from "react";
import Image from "next/image";
import { RENTAL_TERMS } from "@/lib/data";
import { FileCheck, ShieldAlert, CheckCircle2, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function TermsSection({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-3xl bg-[#0B0C14] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-purple/10 border border-racing-purple/20 text-racing-purple text-xs font-mono uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5" /> SOP & KETENTUAN SEWA RESMI
          </div>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
            SYARAT DOKUMEN & KETENTUAN BIAYA
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Harap dibaca dengan teliti sebelum melakukan reservasi unit di bachtiar._.photography.id Pamulang Bendabaru / Pamulang Square.
          </p>
        </div>

        {/* 2 Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left: Persyaratan Dokumen Identitas (Poster 3) */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold uppercase text-racing-neon flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" /> 1. DOKUMEN JAMINAN IDENTITAS
              </span>
              <span className="text-[10px] font-mono bg-racing-neon/10 text-racing-neon px-2 py-0.5 rounded">
                Wajib Asli
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-zinc-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-racing-neon shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">1 Dokumen Identitas Asli:</span> KTP Asli (Wajib) atas nama penyewa sendiri.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-racing-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">1 Dokumen Fotokopi / Pendukung:</span> SIM Aktif / Kartu Keluarga (KK) / Kartu Mahasiswa.
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-racing-purple shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white">Identitas Asli Ditahan:</span> Dititipkan dengan aman selama masa sewa berlangsung.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-yellow-950/20 border border-yellow-500/30 text-yellow-300 text-[11px]">
                ⚠️ <b>Jika Dokumen Tidak Lengkap:</b> Wajib membayar <b>Deposit Tunai Rp 500.000</b> (dikembalikan 100% saat kamera dikembalikan utuh).
              </div>

              <div className="flex items-start gap-2 text-[11px] text-zinc-400">
                <span>📸 Bersedia difoto saat serah terima barang di Pamulang. Durasi sewa dihitung sejak barang diambil.</span>
              </div>
            </div>
          </div>

          {/* Right: Ketentuan Biaya & Durasi (Poster 4) */}
          <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono font-bold uppercase text-racing-cyan flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> 2. KETENTUAN BIAYA & DURASI
              </span>
              <span className="text-[10px] font-mono bg-racing-cyan/10 text-racing-cyan px-2 py-0.5 rounded">
                24 Jam Standby
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {RENTAL_TERMS.map((term, i) => (
                <div key={i} className="pb-2.5 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{term.title}</span>
                    <span className="text-[10px] font-mono text-racing-neon bg-white/5 px-2 py-0.5 rounded">
                      {term.highlight}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-[11px] mt-0.5 leading-relaxed">
                    {term.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-racing-neon to-emerald-400 text-black font-black text-xs sm:text-sm hover:scale-105 transition-all shadow-xl shadow-racing-neon/20 inline-flex items-center gap-2"
          >
            <span>Isi Formulir Sewa & Kirim Dokumen via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </button>
        </div>

      </div>
    </section>
  );
}
