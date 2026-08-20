"use client";

import React from "react";
import { motion } from "framer-motion";
import { RENTAL_STEPS } from "@/lib/data";
import { Camera, FileCheck, ShieldCheck, Flame, Award, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export default function DragRaceTimeline() {
  const iconMap: Record<string, React.ReactNode> = {
    Camera: <Camera className="w-5 h-5 text-racing-neon" />,
    FileCheck: <FileCheck className="w-5 h-5 text-racing-cyan" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5 text-racing-purple" />,
    Flame: <Flame className="w-5 h-5 text-racing-yellow animate-bounce" />,
    Award: <Award className="w-5 h-5 text-racing-neon" />,
  };

  return (
    <section id="alur-sewa" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-purple/10 border border-racing-purple/20 text-racing-purple text-xs font-mono uppercase tracking-widest">
          <Flame className="w-3.5 h-3.5" /> 5 TAHAPAN QUARTER-MILE DRAG STRIP
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
          PROSES SEWA{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-purple via-racing-cyan to-racing-neon">
            SUPER CEPAT & MUDAH
          </span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Sistem rental anti-ribet khusus anak motor & fotografer. Proses verifikasi instan hanya 5 menit, unit langsung siap tempur di sirkuit atau jalanan.
        </p>
        <div className="pt-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
            <MapPin className="w-3.5 h-3.5 text-racing-neon" /> Tangsel Pamulang Bendabaru
          </span>
        </div>
      </div>

      {/* Vertical Animated Timeline Strip */}
      <div className="relative max-w-4xl mx-auto">
        {/* Glowing Center Line for Desktop */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-racing-neon via-racing-cyan to-racing-purple shadow-[0_0_15px_rgba(0,255,102,0.5)] rounded-full hidden sm:block" />

        <div className="space-y-12 sm:space-y-16">
          {RENTAL_STEPS.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } gap-6 sm:gap-12`}
              >
                {/* Center Node Badge */}
                <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F101A] border-2 border-racing-neon/60 shadow-lg shadow-racing-neon/30 flex items-center justify-center font-mono font-black text-white text-sm">
                    {item.step}
                  </div>
                </div>

                {/* Timeline Card */}
                <div className="w-full sm:w-[calc(50%-2rem)]">
                  <div className="rounded-3xl bg-[#0E0F17]/90 border border-white/10 hover:border-racing-neon/40 p-6 sm:p-7 shadow-xl hover:shadow-racing-neon/5 transition-all duration-300 relative group overflow-hidden">
                    {/* Top racing accent border */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-racing-neon/50 to-transparent group-hover:from-racing-neon transition-all" />

                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-400">
                        {item.badge}
                      </span>
                      <div className="p-2 rounded-xl bg-white/[0.04] border border-white/5">
                        {iconMap[item.icon]}
                      </div>
                    </div>

                    <h3 className="text-xl font-extrabold text-white group-hover:text-racing-neon transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-racing-cyan mt-0.5">{item.subtitle}</div>
                    
                    <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Empty Space for balancing grid on desktop */}
                <div className="hidden sm:block w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fast CTA Banner at Timeline End */}
      <div className="mt-16 text-center">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-racing-neon/40 text-white font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-racing-neon/10"
        >
          <span>Siap Sewa Sekarang? Chat WhatsApp (+62 896-5428-0181)</span>
          <ChevronRight className="w-4 h-4 text-racing-neon" />
        </a>
      </div>
    </section>
  );
}
