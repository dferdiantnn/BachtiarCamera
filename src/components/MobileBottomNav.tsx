"use client";

import React from "react";
import { MessageCircle, Camera, Calculator, MapPin, Sparkles } from "lucide-react";

interface MobileBottomNavProps {
  onOpenBooking: () => void;
}

export default function MobileBottomNav({ onOpenBooking }: MobileBottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-3 bg-[#07070A]/90 backdrop-blur-xl border-t border-white/10 sm:hidden">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          href="#katalog"
          className="flex-1 py-2 px-1 rounded-xl bg-white/[0.04] active:bg-white/[0.08] text-center border border-white/5 flex flex-col items-center justify-center gap-0.5"
        >
          <Camera className="w-4 h-4 text-racing-cyan" />
          <span className="text-[10px] font-mono text-zinc-300">Armada</span>
        </a>

        <a
          href="#kalkulator"
          className="flex-1 py-2 px-1 rounded-xl bg-white/[0.04] active:bg-white/[0.08] text-center border border-white/5 flex flex-col items-center justify-center gap-0.5"
        >
          <Calculator className="w-4 h-4 text-racing-purple" />
          <span className="text-[10px] font-mono text-zinc-300">Hitung</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-[2.5] py-2.5 px-3 rounded-xl bg-gradient-to-r from-racing-neon via-emerald-400 to-racing-cyan text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-racing-neon/30 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          <span className="tracking-tight">Sewa Sekarang (WA)</span>
        </button>
      </div>
    </div>
  );
}
