import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#07070A] text-white p-4 text-center">
      <h2 className="text-4xl font-black font-mono text-racing-neon mb-2">404</h2>
      <p className="text-zinc-400 text-sm mb-6">Halaman tidak ditemukan.</p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-racing-neon text-black font-bold text-xs"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
