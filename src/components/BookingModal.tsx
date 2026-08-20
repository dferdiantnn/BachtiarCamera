"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, CheckCircle2, ShieldAlert, MessageCircle, FileText, Camera, AlertCircle, Sparkles, MapPin, Clock } from "lucide-react";
import { CAMERAS } from "@/lib/data";
import { formatRupiah } from "@/lib/utils";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCameraId?: string;
}

export default function BookingModal({ isOpen, onClose, initialCameraId }: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [instagram, setInstagram] = useState("");
  const [selectedCamId, setSelectedCamId] = useState(initialCameraId || "insta360-x3");
  const [duration, setDuration] = useState<"12h" | "24h" | "3days">("24h");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [location, setLocation] = useState<"bendabaru" | "pamulang-square">("pamulang-square");
  
  // Document checklist
  const [hasKtp, setHasKtp] = useState(true);
  const [hasSimOrKk, setHasSimOrKk] = useState(true);
  const [useDeposit500k, setUseDeposit500k] = useState(false);
  const [agreePhoto, setAgreePhoto] = useState(true);
  const [agreeHoldKtp, setAgreeHoldKtp] = useState(true);
  const [agreeNoRefund, setAgreeNoRefund] = useState(true);

  // File upload state simulation
  const [ktpFile, setKtpFile] = useState<string | null>(null);
  const [simFile, setSimFile] = useState<string | null>(null);
  const [kkFile, setKkFile] = useState<string | null>(null);

  if (!isOpen) return null;

  const selectedCam = CAMERAS.find((c) => c.id === selectedCamId) || CAMERAS[0];

  let calculatedPrice = selectedCam.price24h;
  if (duration === "12h") {
    calculatedPrice = selectedCam.price12h;
  } else if (duration === "3days") {
    // 3 Days with Rp 10.000 / day discount as per Poster 4
    calculatedPrice = (selectedCam.price24h - 10000) * 3;
  }

  const handleFileUpload = (type: "ktp" | "sim" | "kk", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === "ktp") setKtpFile(file.name);
      if (type === "sim") setSimFile(file.name);
      if (type === "kk") setKkFile(file.name);
    }
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone) {
      alert("Mohon lengkapi Nama dan Nomor WhatsApp Anda!");
      return;
    }

    const durationText = duration === "12h" ? "12 Jam" : duration === "24h" ? "24 Jam" : "Sewa 3 Hari (Diskon 10K/hari)";
    const locationText = location === "pamulang-square" ? "Pamulang Square (Standby 24 Jam)" : "Pamulang Bendabaru Basecamp";
    const docStatus = useDeposit500k
      ? "⚠️ Dokumen tidak lengkap -> Bersedia Deposit Tunai Rp 500.000"
      : `✅ Dokumen Lengkap: KTP Asli (${ktpFile ? "File Siap Kirim" : "Terlampir"}) + SIM/KK (${simFile || kkFile ? "File Siap Kirim" : "Terlampir"})`;

    const message = `*FORMULIR PENYEWAAN BACHTIAR CAMERA*\n` +
      `-------------------------------------------\n` +
      `👤 *Data Penyewa:*\n` +
      `• Nama: ${name}\n` +
      `• No. WA: ${phone}\n` +
      `• Alamat: ${address || "-"}\n` +
      `• Akun Instagram: ${instagram || "-"}\n\n` +
      `📸 *Detail Booking Unit:*\n` +
      `• Unit: ${selectedCam.name}\n` +
      `• Durasi: ${durationText}\n` +
      `• Estimasi Biaya: ${formatRupiah(calculatedPrice)}\n` +
      `• Jadwal Ambil: ${pickupDate || "Hari Ini"} (Pukul ${pickupTime} WIB)\n` +
      `• Lokasi Pickup: ${locationText}\n\n` +
      `📑 *Status Dokumen Jaminan:*\n` +
      `${docStatus}\n\n` +
      `🤝 *Persetujuan Ketentuan:*\n` +
      `• KTP Asli Ditahan: ${agreeHoldKtp ? "Ya" : "Tidak"}\n` +
      `• Bersedia Difoto Saat Pengambilan: ${agreePhoto ? "Ya" : "Tidak"}\n` +
      `• DP 50RB Non-Refundable: ${agreeNoRefund ? "Setuju" : "Tidak"}\n` +
      `-------------------------------------------\n` +
      `Halo Admin Bachtiar Camera! Saya sudah mengisi formulir ini dan siap mengirimkan foto dokumen jaminan. Mohon konfirmasi ketersediaan unit. Terima kasih!`;

    const waUrl = `https://wa.me/6289507208615?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#0F101A] border border-white/15 p-5 sm:p-7 shadow-2xl z-10 my-6 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-racing-neon font-bold flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" /> FORMULIR SEWA DIGITAL
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Booking & Verifikasi Dokumen
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-all"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSendToWhatsApp} className="space-y-6 mt-5">
            
            {/* Step 1: Data Diri Penyewa */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-racing-neon text-black flex items-center justify-center text-[10px] font-bold">1</span>
                <span>Data Identitas Penyewa</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Nama Lengkap (Sesuai KTP)*</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Pratama"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-racing-neon focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Nomor WhatsApp Aktif*</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0812xxxxxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-racing-neon focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Alamat Domisili</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Pamulang, Tangsel / Sekitarnya"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-racing-neon focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Akun Instagram (Opsional)</label>
                  <input
                    type="text"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    placeholder="@username"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white text-xs focus:border-racing-neon focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Pilihan Unit & Durasi */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-racing-cyan text-black flex items-center justify-center text-[10px] font-bold">2</span>
                <span>Pilih Unit & Jadwal Sewa</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Unit Kamera</label>
                  <select
                    value={selectedCamId}
                    onChange={(e) => setSelectedCamId(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151622] border border-white/15 text-white text-xs focus:border-racing-cyan focus:outline-none"
                  >
                    {CAMERAS.map((cam) => (
                      <option key={cam.id} value={cam.id}>
                        {cam.name} ({formatRupiah(cam.price24h)}/24h)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Durasi Sewa</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151622] border border-white/15 text-white text-xs focus:border-racing-cyan focus:outline-none"
                  >
                    <option value="12h">12 Jam ({formatRupiah(selectedCam.price12h)})</option>
                    <option value="24h">24 Jam ({formatRupiah(selectedCam.price24h)})</option>
                    <option value="3days">Sewa 3 Hari (Diskon 10K/hari)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Tanggal Pengambilan</label>
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#151622] border border-white/15 text-white text-xs focus:border-racing-cyan focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-zinc-400 block mb-1">Lokasi Pengambilan (24 Jam)</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151622] border border-white/15 text-white text-xs focus:border-racing-cyan focus:outline-none"
                  >
                    <option value="pamulang-square">Pamulang Square (24 Jam)</option>
                    <option value="bendabaru">Pamulang Bendabaru Basecamp</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Input/Upload Dokumen Jaminan Sesuai Poster 3 */}
            <div className="space-y-3 pt-3 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-bold flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-racing-purple text-white flex items-center justify-center text-[10px] font-bold">3</span>
                  <span>Upload Dokumen Jaminan (Poster 3)</span>
                </div>
                <span className="text-[10px] font-mono text-racing-neon bg-racing-neon/10 px-2 py-0.5 rounded border border-racing-neon/20">
                  1 Asli + 1 Fotokopi
                </span>
              </div>

              {/* Upload Box Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {/* KTP */}
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-racing-neon/40 transition-all text-center relative">
                  <input
                    type="file"
                    accept="image/*"
                    id="ktp-upload"
                    onChange={(e) => handleFileUpload("ktp", e)}
                    className="hidden"
                  />
                  <label htmlFor="ktp-upload" className="cursor-pointer block">
                    <Upload className="w-5 h-5 mx-auto text-racing-neon mb-1" />
                    <div className="text-[11px] font-bold text-white">Foto KTP (Wajib Asli)</div>
                    <div className="text-[9px] text-zinc-400 truncate mt-0.5">
                      {ktpFile ? `✅ ${ktpFile}` : "Klik untuk upload"}
                    </div>
                  </label>
                </div>

                {/* SIM */}
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-racing-cyan/40 transition-all text-center relative">
                  <input
                    type="file"
                    accept="image/*"
                    id="sim-upload"
                    onChange={(e) => handleFileUpload("sim", e)}
                    className="hidden"
                  />
                  <label htmlFor="sim-upload" className="cursor-pointer block">
                    <Upload className="w-5 h-5 mx-auto text-racing-cyan mb-1" />
                    <div className="text-[11px] font-bold text-white">Foto SIM Aktif</div>
                    <div className="text-[9px] text-zinc-400 truncate mt-0.5">
                      {simFile ? `✅ ${simFile}` : "Klik untuk upload"}
                    </div>
                  </label>
                </div>

                {/* KK */}
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-racing-purple/40 transition-all text-center relative">
                  <input
                    type="file"
                    accept="image/*"
                    id="kk-upload"
                    onChange={(e) => handleFileUpload("kk", e)}
                    className="hidden"
                  />
                  <label htmlFor="kk-upload" className="cursor-pointer block">
                    <Upload className="w-5 h-5 mx-auto text-racing-purple mb-1" />
                    <div className="text-[11px] font-bold text-white">Foto KK (Fotocopy)</div>
                    <div className="text-[9px] text-zinc-400 truncate mt-0.5">
                      {kkFile ? `✅ ${kkFile}` : "Klik untuk upload"}
                    </div>
                  </label>
                </div>
              </div>

              {/* Toggle Deposit 500rb */}
              <div className="p-3 rounded-2xl bg-yellow-950/20 border border-yellow-500/30 flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="deposit-toggle"
                  checked={useDeposit500k}
                  onChange={(e) => setUseDeposit500k(e.target.checked)}
                  className="mt-0.5 rounded accent-yellow-400"
                />
                <label htmlFor="deposit-toggle" className="text-[11px] text-yellow-200 cursor-pointer">
                  <span className="font-bold text-yellow-400">Dokumen Tidak Lengkap?</span> Saya bersedia membayar <b>Deposit Tunai Rp 500.000</b> (uang deposit akan dikembalikan 100% saat kamera selesai disewa).
                </label>
              </div>

              {/* Checkbox Persetujuan SOP */}
              <div className="space-y-1.5 pt-1">
                <label className="flex items-center gap-2 text-[11px] text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeHoldKtp}
                    onChange={(e) => setAgreeHoldKtp(e.target.checked)}
                    className="rounded accent-racing-neon"
                  />
                  <span>Bersedia dokumen identitas asli (KTP) ditahan selama masa sewa.</span>
                </label>

                <label className="flex items-center gap-2 text-[11px] text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreePhoto}
                    onChange={(e) => setAgreePhoto(e.target.checked)}
                    className="rounded accent-racing-neon"
                  />
                  <span>Bersedia difoto saat serah terima pengambilan unit.</span>
                </label>

                <label className="flex items-center gap-2 text-[11px] text-zinc-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeNoRefund}
                    onChange={(e) => setAgreeNoRefund(e.target.checked)}
                    className="rounded accent-racing-neon"
                  />
                  <span>Menyetujui DP Booking Rp 50.000 tidak bisa di-refund jika batal sewa.</span>
                </label>
              </div>
            </div>

            {/* Total Summary & Submit Button */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase">Total Estimasi Sewa:</div>
                <div className="text-2xl font-black text-racing-neon font-mono">
                  {formatRupiah(calculatedPrice)}
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-racing-neon to-emerald-400 text-black font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-racing-neon/30 hover:scale-105 active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Kirim Formulir ke WhatsApp (0895-0720-8615)</span>
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
