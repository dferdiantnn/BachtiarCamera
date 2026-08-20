"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/data";
import { Instagram, Heart, Camera, ExternalLink } from "lucide-react";

export default function PortfolioGallery() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Drag Night", "Rolling Shot", "Aesthetic Y2K"];

  const filteredItems = filter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="galeri" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-racing-cyan/10 border border-racing-cyan/20 text-racing-cyan text-xs font-mono uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5" /> DYNAMIC ACTION GALLERY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
            HASIL JEPRETAN &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-racing-cyan to-racing-neon">
              ACTION FOOTAGE
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mt-2">
            Dokumentasi nyata hasil kamera Bachtiar Camera di arena balap motor, sirkuit malam, rolling shot mobil, dan foto street Y2K.
          </p>
        </div>

        {/* Instagram Profile Links */}
        <div className="flex flex-wrap gap-2.5">
          <a
            href="https://instagram.com/sewa.camera.pamulang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-pink-500/30 text-xs font-mono text-pink-300 hover:text-white hover:border-pink-500 transition-all shadow-lg shadow-pink-500/10"
          >
            <Instagram className="w-4 h-4 text-pink-400" />
            <span>@sewa.camera.pamulang</span>
          </a>

          <a
            href="https://instagram.com/bachtiar._.photography.id"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:text-white hover:border-cyan-500 transition-all shadow-lg shadow-cyan-500/10"
          >
            <Instagram className="w-4 h-4 text-cyan-400" />
            <span>@bachtiar._.photography.id</span>
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              filter === cat
                ? "bg-racing-neon text-black font-bold shadow-lg shadow-racing-neon/30"
                : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-like Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`group relative rounded-3xl overflow-hidden bg-black/60 border border-white/10 hover:border-racing-neon/60 transition-all duration-500 shadow-xl ${item.height}`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-110"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Top Meta */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-racing-cyan border border-white/10 font-bold">
                  {item.category}
                </span>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[11px] font-mono text-zinc-300 border border-white/10">
                  <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                  <span>{item.likes}</span>
                </div>
              </div>

              {/* Bottom Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-1.5 transform transition-transform">
                <div className="text-[11px] font-mono text-racing-neon flex items-center gap-1">
                  <Camera className="w-3 h-3" />
                  <span>{item.camera}</span>
                </div>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {item.title}
                </h4>

                {/* Instagram Direct Tag on Hover */}
                <div className="pt-2 flex items-center justify-between border-t border-white/10">
                  <span className="text-[11px] font-mono text-zinc-400">
                    {item.instaUser}
                  </span>
                  <a
                    href={`https://instagram.com/${item.instaUser.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-mono text-pink-400 hover:text-white transition-colors"
                  >
                    <span>View Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
