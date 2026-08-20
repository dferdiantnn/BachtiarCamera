"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, MessageCircle, Sparkles, Plus, Clock, ShieldCheck, Zap } from "lucide-react";
import { CAMERAS } from "@/lib/data";
import { formatRupiah, getWhatsAppLink } from "@/lib/utils";

export default function RentalCalculator() {
  const [selectedCameraId, setSelectedCameraId] = useState(CAMERAS[0].id);
  const [duration, setDuration] = useState<"12h" | "24h" | "weekend">("24h");
  const [includeMountKit, setIncludeMountKit] = useState(true);
  const [includeExtraBattery, setIncludeExtraBattery] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState<"pickup" | "delivery">("pickup");

  const selectedCam = CAMERAS.find((c) => c.id === selectedCameraId) || CAMERAS[0];

  let basePrice = 0;
  if (duration === "12h") {
    basePrice = selectedCam.price12h;
  } else if (duration === "24h") {
    basePrice = selectedCam.price24h;
  } else {
    // Weekend 48h with special 15% discount
    basePrice = Math.round(selectedCam.price24h * 2 * 0.85);
  }

  let addOnPrice = 0;
  if (includeMountKit && selectedCam.id !== "drag-mount-kit") {
    addOnPrice += 25000;
  }
  if (includeExtraBattery) {
    addOnPrice += 20000;
  }

  const totalPrice = basePrice + addOnPrice;

  const durationLabels: Record<string, string> = {
    "12h": "12 Jam (Half Day)",
    "24h": "24 Jam (Full Day)",
    "weekend": "Paket Weekend 2 Hari (Diskon 15%)",
  };

  const notes = [
    includeMountKit ? "+ Heavy Duty Drag Mount" : "",
    includeExtraBattery ? "+ Extra Battery Pack" : "",
    deliveryOption === "delivery" ? "(Kirim Instant Tangsel)" : "(Self Pickup Pamulang)",
  ]
    .filter(Boolean)
    .join(", ");

  const waBookingUrl = getWhatsAppLink(
    selectedCam.name,
    durationLabels[duration],
    `Estimasi Total: ${formatRupiah(totalPrice)} ${notes ? `[${notes}]` : ""}`
  );

  return (
    <section id="kalkulator" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="rounded-3xl bg-gradient-to-b from-[#11121C] to-[#0A0A10] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-racing-neon/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-racing-purple/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-racing-cyan/10 border border-racing-cyan/20 text-racing-cyan text-xs font-mono uppercase tracking-widest mb-3">
                <Calculator className="w-3.5 h-3.5" /> SMART RENTAL ESTIMATOR
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                KALKULATOR ESTIMASI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-cyan to-racing-neon">
                  SEWA CEPAT
                </span>
              </h2>
              <p className="text-zinc-400 text-sm mt-1">
                Pilih unit kamera, durasi waktu sewa, dan aksesoris mounting sesuai kebutuhan event balap atau hunting fotomu.
              </p>
            </div>

            {/* Step 1: Select Camera */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300 flex items-center justify-between">
                <span>1. Pilih Unit Kamera:</span>
                <span className="text-racing-neon">{selectedCam.name}</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {CAMERAS.map((cam) => {
                  const active = cam.id === selectedCameraId;
                  return (
                    <button
                      key={cam.id}
                      onClick={() => setSelectedCameraId(cam.id)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        active
                          ? "bg-racing-neon/15 border-racing-neon text-white shadow-lg shadow-racing-neon/20"
                          : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="text-[11px] font-mono text-zinc-400 truncate">{cam.category}</div>
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
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                2. Pilih Durasi Rental:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: "12h", label: "12 Jam", sub: "Half Day Racing Track", desc: "Cocok buat event malam / sunmori" },
                  { id: "24h", label: "24 Jam", sub: "1 Hari Penuh", desc: "Paling populer & fleksibel" },
                  { id: "weekend", label: "Paket Weekend", sub: "2 Hari Penuh", desc: "Hemat Diskon 15%" },
                ].map((item) => {
                  const active = duration === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setDuration(item.id as any)}
                      className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                        active
                          ? "bg-racing-cyan/15 border-racing-cyan text-white shadow-lg shadow-racing-cyan/20"
                          : "bg-white/[0.03] border-white/10 text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.06]"
                      }`}
                    >
                      {item.id === "weekend" && (
                        <span className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[9px] font-mono bg-racing-yellow text-black font-bold">
                          PROMO
                        </span>
                      )}
                      <div className="text-sm font-extrabold text-white">{item.label}</div>
                      <div className="text-xs font-mono text-racing-cyan">{item.sub}</div>
                      <div className="text-[10px] text-zinc-400 mt-1">{item.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Accessories */}
            <div className="space-y-3">
              <label className="text-xs font-mono uppercase tracking-wider text-zinc-300">
                3. Aksesoris Tambahan (Optional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setIncludeMountKit(!includeMountKit)}
                  className={`p-3 rounded-2xl border flex items-center justify-between text-left transition-all ${
                    includeMountKit
                      ? "bg-white/10 border-racing-neon text-white"
                      : "bg-white/[0.02] border-white/10 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-lg border flex items-center justify-center ${
                      includeMountKit ? "bg-racing-neon border-racing-neon text-black" : "border-white/20"
                    }`}>
                      {includeMountKit && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Full Drag Clamp Mount</div>
                      <div className="text-[10px] text-zinc-400">Helm + Handlebar + Suction</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-racing-neon">+Rp 25K</span>
                </button>

                <button
                  onClick={() => setIncludeExtraBattery(!includeExtraBattery)}
                  className={`p-3 rounded-2xl border flex items-center justify-between text-left transition-all ${
                    includeExtraBattery
                      ? "bg-white/10 border-racing-purple text-white"
                      : "bg-white/[0.02] border-white/10 text-zinc-400"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-lg border flex items-center justify-center ${
                      includeExtraBattery ? "bg-racing-purple border-racing-purple text-white" : "border-white/20"
                    }`}>
                      {includeExtraBattery && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Extra Battery Pack</div>
                      <div className="text-[10px] text-zinc-400">Untuk shooting non-stop</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-racing-purple">+Rp 20K</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Live Estimate Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#090A0F] border border-white/15 p-6 sm:p-8 shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-racing-neon via-racing-cyan to-racing-yellow" />
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                  ESTIMASI STRUK BOOKING
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-racing-neon/20 text-racing-neon border border-racing-neon/40 font-bold">
                  TERSEDIA
                </span>
              </div>

              {/* Summary Items */}
              <div className="py-6 space-y-3 font-mono text-xs text-zinc-300">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Unit Terpilih:</span>
                  <span className="font-bold text-white text-right truncate max-w-[180px]">{selectedCam.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Durasi Sewa:</span>
                  <span className="font-bold text-racing-cyan">{durationLabels[duration]}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Base Unit Rate:</span>
                  <span className="text-white">{formatRupiah(basePrice)}</span>
                </div>
                {addOnPrice > 0 && (
                  <div className="flex justify-between items-center text-racing-neon">
                    <span className="text-zinc-400">Aksesoris Tambahan:</span>
                    <span>+{formatRupiah(addOnPrice)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-zinc-400">Lokasi Pickup:</span>
                  <span className="text-white">Pamulang Bendabaru</span>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="pt-4 border-t border-dashed border-white/15 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-mono uppercase text-zinc-400">Total Biaya Rental:</span>
                  <span className="text-3xl sm:text-4xl font-black text-racing-neon font-mono drop-shadow-[0_0_20px_rgba(0,255,102,0.4)]">
                    {formatRupiah(totalPrice)}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500">
                  *Sudah termasuk kartu memori berkecepatan tinggi & kabel charger. Tanpa biaya tersembunyi.
                </p>
              </div>

              {/* Direct WhatsApp Trigger Button */}
              <div className="mt-6">
                <a
                  href={waBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-racing-neon to-emerald-400 text-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-racing-neon/30 hover:shadow-racing-neon/60 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Lock Jadwal Ini via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
