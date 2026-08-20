import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bachtiar._.photography.id — Sewa Kamera 360° & Action Cam Pamulang Tangsel",
  description: "Rental GoPro MAX 360, Insta360 X3/X4, Canon DSLR, Vintage Camcorder & Action Cam di Pamulang Bendabaru, Tangerang Selatan. Siap rekam aksi balap drag race, motovlog, dan rolling shot.",
  keywords: [
    "sewa gopro pamulang",
    "rental kamera 360 tangsel",
    "bachtiar._.photography.id",
    "sewa insta360 pamulang",
    "sewa action cam balap drag",
    "rental dslr tangsel",
    "sewa kamera bendabaru"
  ],
  authors: [{ name: "bachtiar._.photography.id" }],
  openGraph: {
    title: "bachtiar._.photography.id — Sewa Kamera 360° & Action Cam Pamulang Tangsel",
    description: "Capture setiap detik balapanmu dengan armada kamera 360° dan action cam terbaik di Pamulang, Tangsel.",
    url: "https://bachtiarphotography.id",
    siteName: "bachtiar._.photography.id",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className="bg-[#07070A] text-foreground antialiased selection:bg-racing-neon selection:text-black">
        {children}
      </body>
    </html>
  );
}
