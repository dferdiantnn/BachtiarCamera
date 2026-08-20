"use client";

import React from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { Star, Quote, CheckCircle, Zap } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-neon/10 border border-racing-neon/20 text-racing-neon text-xs font-mono uppercase tracking-widest">
          <Star className="w-3.5 h-3.5 fill-racing-neon" /> TESTIMONI RACER & KONTEN KREATOR
        </div>
        <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
          APA KATA MEREKA TENTANG{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-neon to-racing-cyan">
            BACHTIAR CAMERA
          </span>
        </h2>
        <p className="text-zinc-400 text-sm">
          Kepercayaan ratusan bikers, drag racers, motovlogger, dan automotive photographer di Tangerang Selatan & sekitarnya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="rounded-3xl bg-[#0D0E16] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-racing-neon/40 transition-all shadow-xl"
          >
            <div className="space-y-4">
              {/* Star Rating & Unit */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-racing-cyan border border-white/5">
                  {item.unit}
                </span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
                \"{item.quote}\"
              </p>
            </div>

            {/* Author Meta */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-racing-neon to-racing-purple flex items-center justify-center font-bold text-black text-sm">
                {item.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{item.name}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-racing-neon" />
                </div>
                <div className="text-[11px] font-mono text-zinc-500">{item.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
