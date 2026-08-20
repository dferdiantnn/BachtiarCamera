import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRupiah(amount: number): string {
  const numStr = Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `Rp ${numStr}`;
}

export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}

export function getWhatsAppLink(cameraName?: string, duration?: string, customText?: string): string {
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
