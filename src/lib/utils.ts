import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number): string {
  const numStr = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp ${numStr}`;
}

export function getWhatsAppLink(cameraName?: string, duration?: string, customText?: string): string {
  // Primary WhatsApp from official poster: 0895-0720-8615 (also supported: 0896-5428-0181)
  const phone = "6289507208615";
  let message = "Halo Admin Bachtiar Camera! Saya ingin booking rental kamera.\n";
  
  if (cameraName) {
    message += `\n📸 Unit: ${cameraName}`;
  }
  if (duration) {
    message += `\n⏱ Durasi: ${duration}`;
  }
  if (customText) {
    message += `\n📝 Catatan/Dokumen: ${customText}`;
  }
  
  message += "\n\nSaya telah membaca persyaratan (KTP Asli + SIM/KK / Deposit) dan siap kirim foto dokumen. Mohon info ketersediaan unit di Pamulang Bendabaru / Pamulang Square. Terima kasih!";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
