"use client";

import React, { useState } from "react";
import { Calculator, Check, MessageCircle, Sparkles } from "lucide-react";
import { CAMERAS } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";

interface RentalCalculatorProps {
  onOpenBooking?: (camId: string) => void;
}

export default function RentalCalculator({ onOpenBooking }: RentalCalculatorProps) {
  const [selectedCameraId, setSelectedCameraId] = useState(CAMERAS[0].id);
  const [duration, setDuration] = useState<"12h" | "24h" | "3days">("24h");
  const [includeMountKit, setIncludeMountKit] = useState(true);
  const [includeExtraBattery, setIncludeExtraBattery] = useState(false);

  const selectedCam = CAMERAS.find((c) => c.id === selectedCameraId) || CAMERAS[0];

  let basePrice = 0;
  if (duration === "12h") {
    basePrice = selectedCam.price12h;
  } else if (duration === "24h") {
    basePrice = selectedCam.price24h;
  } else {
    // 3 Days with Rp 10.000 / day discount as per Poster 4
    basePrice = (selectedCam.price24h - 10000) * 3;
  }

  let addOnPrice = 0;
  if (includeMountKit && selectedCam.id !== "jasa-fotografi-pro") {
    addOnPrice += 25000;
  }
  if (includeExtraBattery) {
    addOnPrice += 50000; // As per Insta360 poster: +1 Batre 50K
  }

  const totalPrice = basePrice + addOnPrice;

  const durationLabels: Record<string, string> = {
    "12h": "12 Jam",
    "24h": "24 Jam",
    "3days": "Sewa 3 Hari (Diskon 10K/Hari)",
  };

  return (
    <section id="kalkulator" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-3xl bg-gradient-to-b from-[#11121C] to-[#0A0A10] border border-white/10 p-5 sm:p-10 shadow-2xl relative overflow-hidden">
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-racing-cyan/10 border border-racing-cyan/20 text-racing-cyan text-xs font-mono uppercase tracking-widest mb-2">
                <Calculator className="w-3.5 h-3.5" /> SMART RENTAL ESTIMATOR
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight">
                KALKULATOR ESTIMASI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-cyan to-racing-neon">
                  SEWA CEPAT
                </span>
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Pilih unit kamera, durasi sewa, dan aksesoris. Otomatis hitung diskon sewa jangka panjang Rp 10.000/hari.
              </p>
            </div>

            {/* Step 1: Select Camera */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center justify-between">
                <span>1. Pilih Unit Kamera:</span>
                <span className="text-racing-neon font-bold">{selectedCam.name}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {CAMERAS.map((cam) => {
                  const active = cam.id === selectedCameraId;
                  return (
                    <button
                      key={cam.id}
                      onClick={() => setSelectedCameraId(cam.id)}
                      className={`p-2.5 rounded-2xl border text-left transition-all ${
                        active
                          ? "bg-racing-neon/15 border-racing-neon text-white shadow-md shadow-racing-neon/20"
                          : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="text-[10px] font-mono text-zinc-400 truncate">{cam.category}</div>
                      <div className="text-xs font-bold text-white truncate mt-0.5">{cam.name}</div>
                      <div className="text-[11px] font-mono text-racing-neon mt-1">
                        {formatRupiah(cam.price24h)}<span className="text-zinc-500">/24h</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration Selector */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                2. Pilih Durasi Rental:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "12h", label: "12 Jam", sub: "Half Day Racing", desc: "Cocok balap malam / sunmori" },
                  { id: "24h", label: "24 Jam", sub: "1 Hari Penuh", desc: "Toleransi telat 1 jam" },
                  { id: "3days", label: "Sewa 3 Hari", sub: "Diskon 10K/Hari", desc: "Potongan Rp 30.000" },
                ].map((item) => {
                  const active = duration === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setDuration(item.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden ${
                        active
                          ? "bg-racing-cyan/15 border-racing-cyan text-white shadow-md shadow-racing-cyan/20"
                          : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"
                      }`}
                    >
                      {item.id === "3days" && (
                        <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[8px] font-mono bg-racing-yellow text-black font-bold">
                          PROMO
                        </span>
                      )}
                      <div className="text-xs sm:text-sm font-extrabold text-white">{item.label}</div>
                      <div className="text-[11px] font-mono text-racing-cyan">{item.sub}</div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Accessories */}
            <div className="space-y-2.5">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                3. Aksesoris Tambahan (Optional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={() => setIncludeMountKit(!includeMountKit)}
                  className={`p-2.5 rounded-2xl border flex items-center justify-between text-left transition-all ${
                    includeMountKit
                      ? "bg-white/10 border-racing-neon text-white"
                      : "bg-white/[0.02] border-white/10 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      includeMountKit ? "bg-racing-neon border-racing-neon text-black" : "border-white/20"
                    }`}>
                      {includeMountKit && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Full Bracket Set</div>
                      <div className="text-[10px] text-zinc-400">Helm + Handlebar + Spion</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-racing-neon">+Rp 25K</span>
                </button>

                <button
                  onClick={() => setIncludeExtraBattery(!includeExtraBattery)}
                  className={`p-2.5 rounded-2xl border flex items-center justify-between text-left transition-all ${
                    includeExtraBattery
                      ? "bg-white/10 border-racing-purple text-white"
                      : "bg-white/[0.02] border-white/10 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                      includeExtraBattery ? "bg-racing-purple border-racing-purple text-white" : "border-white/20"
                    }`}>
                      {includeExtraBattery && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">+1 Batre Extra (Poster 5)</div>
                      <div className="text-[10px] text-zinc-400">Untuk shooting non-stop</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-racing-purple">+Rp 50K</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Live Estimate Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#090A0F] border border-white/15 p-5 sm:p-7 shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-racing-neon via-racing-cyan to-racing-yellow" />
              
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  ESTIMASI STRUK BOOKING
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-racing-neon/20 text-racing-neon border border-racing-neon/40 font-bold">
                  24 JAM STANDBY
                </span>
              </div>

              {/* Summary Items */}
              <div className="py-4 space-y-2.5 font-mono text-xs text-zinc-300">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Unit:</span>
                  <span className="font-bold text-white text-right truncate max-w-[170px]">{selectedCam.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Durasi:</span>
                  <span className="font-bold text-racing-cyan">{durationLabels[duration]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Tarif Dasar:</span>
                  <span className="text-white">{formatRupiah(basePrice)}</span>
                </div>
                {addOnPrice > 0 && (
                  <div className="flex justify-between items-center text-racing-neon">
                    <span className="text-zinc-400">Aksesoris/Batre:</span>
                    <span>+{formatRupiah(addOnPrice)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Lokasi:</span>
                  <span className="text-white">Pamulang Square & Bendabaru</span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="pt-3 border-t border-dashed border-white/15 space-y-1.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono uppercase text-zinc-400">Total Biaya:</span>
                  <span className="text-2xl sm:text-3xl font-black text-racing-neon font-mono drop-shadow-[0_0_15px_rgba(0,255,102,0.4)]">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>
                <p className="text-[10px] text-zinc-400">
                  *DP Booking Rp 50.000 untuk lock unit. DP tidak dapat di-refund.
                </p>
              </div>

              {/* Action Button: Opens Booking Modal */}
              <div className="mt-5">
                <button
                  onClick={() => onOpenBooking?.(selectedCam.id)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-racing-neon to-emerald-400 text-black font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-racing-neon/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Isi Formulir & Verifikasi Dokumen</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
