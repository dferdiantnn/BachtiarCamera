import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getWhatsAppLink(cameraName?: string, duration?: string, customText?: string): string {
  const phone = "6289654280181";
  let message = "Halo Admin Bachtiar Camera! Saya ingin booking rental kamera.\n";
  
  if (cameraName) {
    message += `\n📸 Unit: ${cameraName}`;
  }
  if (duration) {
    message += `\n⏱ Durasi: ${duration}`;
  }
  if (customText) {
    message += `\n📝 Catatan/Aksesoris: ${customText}`;
  }
  
  message += "\n\nMohon info ketersediaan unit dan jadwal pickup di Pamulang Bendabaru. Terima kasih!";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
