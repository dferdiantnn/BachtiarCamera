export interface CameraItem {
  id: string;
  name: string;
  category: "360" | "DSLR" | "Mirrorless" | "Action" | "Vintage" | "Jasa";
  tag: string;
  tagColor: "green" | "purple" | "cyan" | "yellow";
  price12h: number;
  price24h: number;
  featured?: boolean;
  bentoSpan?: string;
  description: string;
  specs: string[];
  inclusions: string[];
  image: string;
  posterImage?: string;
  rating: number;
  reviewCount: number;
  racingUse: string;
  badgeAccent: string;
}

export const CAMERAS: CameraItem[] = [
  {
    id: "insta360-x3",
    name: "Insta360 X3 Extreme 360°",
    category: "360",
    tag: "Paling Laris — Pamulang Square",
    tagColor: "cyan",
    badgeAccent: "from-cyan-400 to-blue-500",
    price12h: 165000,
    price24h: 200000,
    featured: true,
    bentoSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    description: "Kamera aksi 360 derajat terbaik untuk drag bike, motovlog & sunmori. Support 5.7K/30FPS, 4K/60FPS, Invisible selfie stick, dan Free Bracket bebas pilih.",
    specs: [
      "5.7K 30fps / 4K 60fps 360° Spherical Video",
      "FlowState Stabilization + 360 Horizon Lock",
      "Active HDR Mode untuk balapan malam",
      "Free Bracket Bebas Pilih (Stang / Helm / Spion)",
      "Opsi Tambah 1 Baterai Extra: +Rp 50.000"
    ],
    inclusions: [
      "Unit Insta360 X3 + Lensguard Baru",
      "Baterai Original + Fast Charger",
      "Invisible Stick 114cm Carbon Style",
      "MicroSD 128GB Sandisk Extreme Pro",
      "1x FREE Bracket Pilihan (Helm/Stang/Suction)",
      "Hard Pouch Case & Lens Cap"
    ],
    image: "/images/posters/poster-insta360-x3.jpg",
    posterImage: "/images/posters/poster-insta360-x3.jpg",
    rating: 5.0,
    reviewCount: 210,
    racingUse: "Cockpit helm 360°, angle drone-like belakang motor drag, dan rolling shot"
  },
  {
    id: "canon-1300d-fuji-xa3",
    name: "Canon 1300D & Fujifilm X-A3",
    category: "DSLR",
    tag: "Promo 130K / Hari",
    tagColor: "purple",
    badgeAccent: "from-purple-400 to-indigo-500",
    price12h: 90000,
    price24h: 130000,
    featured: true,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
    description: "Paket hemat DSLR Canon 1300D & Mirrorless Fujifilm X-A3. Hasil tone warna warm & cinematic, cocok untuk photoshoot paddock, event, dan rolling shot.",
    specs: [
      "24.2 MP APS-C Sensor Tajam & Jernih",
      "Lensa Kit 18-55mm IS STM + 50mm Bokeh",
      "Full HD 60fps Crisp Night Video",
      "Built-in WiFi Transfer Cepat ke HP",
      "Disimpan Dalam Drybox Anti-Jamur"
    ],
    inclusions: [
      "Body Kamera Canon 1300D / Fuji X-A3",
      "Lensa Kit + Lens Hood Anti-Flare",
      "2x Baterai + Charger Desktop",
      "SD Card High Speed 64GB",
      "Strap Kamera + Tas Kamera Waterproof"
    ],
    image: "/images/posters/poster-canon-fuji.jpg",
    posterImage: "/images/posters/poster-canon-fuji.jpg",
    rating: 4.9,
    reviewCount: 165,
    racingUse: "Foto bokeh pit-stop, rolling shot mobil malam, dan portofolio balap"
  },
  {
    id: "gopro-max-360",
    name: "GoPro MAX 360° Spherical",
    category: "360",
    tag: "POV Pembalap Ekstrem",
    tagColor: "green",
    badgeAccent: "from-emerald-400 to-green-500",
    price12h: 120000,
    price24h: 175000,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    description: "Kamera 360 tangguh tahan banting dengan Max HyperSmooth. Audio 6 mikrofon spherical untuk tangkap raungan knalpot balap secara jernih.",
    specs: [
      "5.6K 30FPS 360° Spherical Video",
      "Max HyperSmooth Stabilization",
      "PowerPano 270° Anti-Distorsi",
      "6 Built-in Microphones 360° Audio",
      "Waterproof 5M + Tahan Getaran Tinggi"
    ],
    inclusions: [
      "Unit GoPro MAX 360 + Lens Cap",
      "2x Baterai + Dual Charger Fast",
      "MicroSD 128GB V30",
      "Full Face Chin Mount",
      "Invisible Stick 120cm"
    ],
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewCount: 148,
    racingUse: "Perekaman sudut helm kokpit 360° dan burnout roda belakang"
  },
  {
    id: "dji-action-4",
    name: "DJI Osmo Action 4 Beast",
    category: "Action",
    tag: "Tahan Banting & Panas",
    tagColor: "yellow",
    badgeAccent: "from-yellow-400 to-amber-500",
    price12h: 110000,
    price24h: 160000,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    description: "Body super kokoh magnetic quick-release, tahan getaran RPM ekstrem, sensor 1/1.3 inci yang super terang untuk sirkuit malam hari.",
    specs: [
      "1/1.3-inch Sensor Low-Light Beast",
      "4K 120fps Ultra-Wide 155° FOV",
      "RockSteady 3.0+ & HorizonBalancing",
      "Magnetic Quick-Release Mount",
      "Tahan Getaran Ekstrem & Tahan Banting"
    ],
    inclusions: [
      "DJI Action 4 Unit",
      "Dual Battery + Multifunctional Case",
      "Magnetic Adapter Mount + Curved Adhesive",
      "MicroSD 128GB U3",
      "Safety Lanyard Anti-Jatuh"
    ],
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewCount: 119,
    racingUse: "Bumper mount mobil / swingarm motor balap"
  },
  {
    id: "vintage-camcorder-y2k",
    name: "Vintage 90s Camcorder CCD Retro",
    category: "Vintage",
    tag: "Retro Y2K Vibe",
    tagColor: "purple",
    badgeAccent: "from-fuchsia-400 to-pink-500",
    price12h: 90000,
    price24h: 135000,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    description: "Estetika nostalgia VHS / DV Tape digital tape look untuk video recap balap jalanan, footage paddock aesthetic, dan vibe Gen Z analog.",
    specs: [
      "Original Warm CCD Sensor Tone",
      "Optical Zoom 20x Smooth Rocker",
      "Built-in Night Flash Light",
      "Direct Card Reader to iPhone/Android",
      "Vintage Date Stamp on-screen"
    ],
    inclusions: [
      "Vintage Camcorder Body Unit",
      "Battery Pack + AC Power Charger",
      "Converter Card Reader to iPhone/Android",
      "Strap Vintage Kulit + Pouch Bag"
    ],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewCount: 68,
    racingUse: "Video dokumentasi pit-crew & after-party sirkuit bertema Y2K"
  },
  {
    id: "jasa-fotografi-pro",
    name: "Jasa Foto & Video (Wedding / Party / Photoshoot)",
    category: "Jasa",
    tag: "Buka Jasa Dokumentasi",
    tagColor: "green",
    badgeAccent: "from-emerald-400 to-teal-500",
    price12h: 350000,
    price24h: 600000,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    description: "Kami tidak hanya menyewakan unit kamera, tapi juga melayani jasa fotografer & videografer profesional untuk Wedding, Birthday, Prewedding, Otomotif, dan Photoshoot.",
    specs: [
      "Fotografer & Videografer Berpengalaman",
      "Full Gear DSLR/Mirrorless + Lighting Studio",
      "Termasuk Editing Foto & Color Grading Video",
      "Pengiriman File Cepat via Google Drive HD",
      "Free Konsultasi Konsep & Lokasi Photoshoot"
    ],
    inclusions: [
      "1-2 Fotografer / Videografer Standby",
      "Semua File Foto Mentah (RAW/JPEG)",
      "Puluhan Foto Edited Terbaik",
      "Video Highlight Teaser 1 Menit Instagram"
    ],
    image: "/images/posters/poster-kenapa-harus-sewa.jpg",
    posterImage: "/images/posters/poster-kenapa-harus-sewa.jpg",
    rating: 5.0,
    reviewCount: 88,
    racingUse: "Dokumentasi event balap resmi, photoshoot motor/mobil, dan wedding"
  }
];

export const OFFICIAL_POSTERS = [
  {
    id: 1,
    title: "Open Sewa Canon 1300D & Fujifilm X-A3",
    subtitle: "Hanya 130K / Hari — Syarat & Ketentuan Berlaku",
    image: "/images/posters/poster-canon-fuji.jpg",
    category: "Promo DSLR & Mirrorless",
    badge: "130K/Hari"
  },
  {
    id: 2,
    title: "Open Sewa Insta360 X3 24 Jam",
    subtitle: "12 Jam 165K | 24 Jam 200K + Free Bracket & Batre",
    image: "/images/posters/poster-insta360-x3.jpg",
    category: "Promo 360° Action Cam",
    badge: "Best Seller"
  },
  {
    id: 3,
    title: "5 Alasan Kenapa Harus Sewa di bachtiar._.photography.id",
    subtitle: "Lensguard Baru, Diajarin Sampai Bisa, Drybox, Free Sticker, Buka Jasa Foto",
    image: "/images/posters/poster-kenapa-harus-sewa.jpg",
    category: "Keunggulan Layanan",
    badge: "Pelayanan Juara"
  },
  {
    id: 4,
    title: "Persyaratan Umum Dokumen Identitas Jaminan",
    subtitle: "KTP Wajib Asli + SIM/KK Fotokopi / Deposit 500K",
    image: "/images/posters/poster-persyaratan-dokumen.jpg",
    category: "Syarat Sewa",
    badge: "Wajib Baca"
  },
  {
    id: 5,
    title: "Ketentuan Biaya & Durasi Sewa",
    subtitle: "Diskon 10K/hari (sewa >= 3 hari), Toleransi 1 jam, Buka 24 Jam",
    image: "/images/posters/poster-ketentuan-biaya.jpg",
    category: "Aturan Biaya",
    badge: "24 Jam Operasional"
  }
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Lensguard Selalu Diganti",
    desc: "Meskipun lecet sedikit, kami selalu ganti baru demi kejernihan & hasil video maksimal tanpa glare atau baret.",
    icon: "ShieldCheck",
    badge: "Optik Bersih 100%"
  },
  {
    number: "02",
    title: "Pemula Diajarin Sampai Bisa",
    desc: "Belum pernah pakai kamera 360 atau DSLR? Tenang! Admin siap tutorial langsung cara setting & reframe saat serah terima unit.",
    icon: "GraduationCap",
    badge: "Free Tutorial"
  },
  {
    number: "03",
    title: "Unit Disimpan Dalam Drybox",
    desc: "Semua kamera dan lensa disimpan dalam electric drybox khusus dengan kelembaban terjaga agar terhindar dari jamur & debu.",
    icon: "Box",
    badge: "Anti-Jamur"
  },
  {
    number: "04",
    title: "FREE Sticker Eksklusif",
    desc: "Setiap penyewaan dapat bonus stiker resmi bachtiar._.photography.id Pamulang & Bachtiarphotography.id untuk ditempel di helm / motor.",
    icon: "Sparkles",
    badge: "Free Merchandise"
  },
  {
    number: "05",
    title: "Tidak Hanya Sewa, Tapi Buka Jasa",
    desc: "Kami juga melayani jasa fotografer & videografer profesional untuk Wedding, Birthday Party, Event Drag, dan Photoshoot Outdoor.",
    icon: "Camera",
    badge: "Jasa Foto & Video"
  }
];

export const RENTAL_TERMS = [
  {
    title: "Diskon Sewa Jangka Panjang",
    desc: "Potongan Rp 10.000 / hari untuk sewa minimal 3 hari (berlaku kelipatan). Makin lama sewa, makin hemat!",
    highlight: "Diskon Rp 10K/Hari"
  },
  {
    title: "Pembayaran Lunas di Awal",
    desc: "Wajib dibayar lunas di awal saat serah terima barang. Tidak menerima sistem hutang atau bayar belakangan.",
    highlight: "No Hutang"
  },
  {
    title: "Toleransi Keterlambatan",
    desc: "Sewa 24 Jam: Toleransi keterlambatan maksimal 1 jam (lewat dari itu dikenakan denda). Sewa 12 Jam / 6 Jam: Tanpa toleransi.",
    highlight: "Toleransi 1 Jam (24h)"
  },
  {
    title: "Jam Operasional 24 JAM",
    desc: "Siap melayani pengambilan dan pengembalian unit kapan saja 24 jam nonstop untuk event balap malam & subuh.",
    highlight: "Standby 24 Jam"
  },
  {
    title: "Tanggung Jawab Kerusakan / Kehilangan",
    desc: "Segala bentuk kerusakan atau kehilangan unit menjadi tanggung jawab penuh penyewa sesuai nilai perbaikan/penggantian unit.",
    highlight: "Garansi Tanggung Jawab"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Open Sewa Insta360 X3 Action",
    camera: "Insta360 X3 5.7K",
    category: "Poster Resmi",
    likes: "2.4k",
    image: "/images/posters/poster-insta360-x3.jpg",
    instaUser: "@sewa.camera.pamulang",
    height: "h-96",
    caption: "Unit Insta360 X3 ready 24 Jam di Pamulang Square"
  },
  {
    id: 2,
    title: "Open Sewa Canon 1300D & Fuji X-A3",
    camera: "Canon DSLR & Fujifilm Mirrorless",
    category: "Poster Resmi",
    likes: "3.1k",
    image: "/images/posters/poster-canon-fuji.jpg",
    instaUser: "@bachtiar._.photography.id",
    height: "h-96",
    caption: "Paket kamera 130K/hari di Pamulang Bendabaru"
  },
  {
    id: 3,
    title: "5 Keunggulan bachtiar._.photography.id",
    camera: "Service & Drybox Care",
    category: "Informasi",
    likes: "1.9k",
    image: "/images/posters/poster-kenapa-harus-sewa.jpg",
    instaUser: "@sewa.camera.pamulang",
    height: "h-96",
    caption: "Lensguard baru & diajarin sampai bisa"
  },
  {
    id: 4,
    title: "Persyaratan Identitas Jaminan",
    camera: "SOP & Verifikasi",
    category: "Syarat Sewa",
    likes: "1.5k",
    image: "/images/posters/poster-persyaratan-dokumen.jpg",
    instaUser: "@sewa.camera.pamulang",
    height: "h-96",
    caption: "KTP Asli + SIM/KK atau Deposit 500K"
  },
  {
    id: 5,
    title: "Ketentuan Biaya & Durasi Sewa",
    camera: "Aturan Sewa 24 Jam",
    category: "Aturan Sewa",
    likes: "2.8k",
    image: "/images/posters/poster-ketentuan-biaya.jpg",
    instaUser: "@bachtiar._.photography.id",
    height: "h-96",
    caption: "Diskon sewa jangka panjang 10K/hari & operasional 24 jam"
  },
  {
    id: 6,
    title: "Nocturnal Drag 201M High Speed",
    camera: "GoPro MAX 360° Spherical",
    category: "Action Footage",
    likes: "3.5k",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    instaUser: "@bachtiar._.photography.id",
    height: "h-96",
    caption: "Dokumentasi balap malam Pamulang Tangsel"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rian Speedy Pratama",
    role: "Drag Racer & Content Creator BSD",
    quote: "Sewa Insta360 X3 di bachtiar._.photography.id buat event drag night Tangsel. Bracket-nya super kokoh, footage 360-nya gak getar sama sekali walau motor tembus 160km/h!",
    rating: 5,
    unit: "Insta360 X3 360°"
  },
  {
    name: "Dimas Aditya",
    role: "Automotive Photographer Jakarta",
    quote: "DSLR Canon & Fuji-nya super fresh, sensor bersih dari drybox, lensa tajem banget buat rolling shot mobil malam hari. Admin fast respon 24 jam di Pamulang Square!",
    rating: 5,
    unit: "Canon 1300D & Fuji X-A3"
  },
  {
    name: "Fathir Zaky",
    role: "Bikers Motovlog Tangsel",
    quote: "Lensguard beneran diganti mulus no lecet, diajarin cara reframe video 360 pas ambil unit. Dikasih free stiker juga! Recommended rental no 1 di Tangsel!",
    rating: 5,
    unit: "Insta360 X3 + Bracket"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Apa saja syarat dokumen untuk sewa di bachtiar._.photography.id?",
    a: "Serahkan 1 dokumen identitas ASLI (bukan fotokopi) seperti KTP (Wajib) + 1 dokumen fotokopi seperti SIM Aktif atau KK. Identitas harus atas nama penyewa sendiri dan ditahan selama masa sewa. Jika dokumen tidak lengkap, wajib membayar Deposit Tunai Rp 500.000 (dikembalikan saat unit selesai disewa)."
  },
  {
    q: "Berapa biaya sewa Insta360 X3 & Kamera Canon/Fuji?",
    a: "Insta360 X3: 12 Jam Rp 165.000 | 24 Jam Rp 200.000 (Free bracket pilihan). Canon 1300D & Fujifilm X-A3: Promo Rp 130.000 / Hari. Sewa >= 3 hari dapat potongan diskon Rp 10.000/hari (berlaku kelipatan)!"
  },
  {
    q: "Berapa DP booking dan apakah bisa di-refund?",
    a: "Booking unit cukup dengan DP Rp 50.000 untuk mengunci jadwal. Catatan penting: Bagi yang sudah booking, DP tidak bisa di-refund karena sudah kesepakatan di awal."
  },
  {
    q: "Apakah ada toleransi waktu saat pengembalian?",
    a: "Untuk sewa 24 Jam, kami berikan toleransi keterlambatan maksimal 1 jam. Sedangkan untuk sewa 12 Jam atau 6 Jam tidak ada toleransi keterlambatan (wajib tepat waktu)."
  },
  {
    q: "Dimana lokasi pengambilan unit?",
    a: "Basecamp kami berlokasi di Pamulang Bendabaru & Pamulang Square, Tangerang Selatan. Operasional 24 JAM nonstop untuk pengambilan dan pengembalian unit."
  },
  {
    q: "Apakah bachtiar._.photography.id juga melayani jasa fotografer/videografer?",
    a: "YA! Kami tidak hanya menyewakan unit, tetapi juga menyediakan jasa fotografi & videografi profesional untuk Wedding, Birthday Party, Event Otomotif/Drag, dan Photoshoot."
  }
];


export const RENTAL_STEPS = [
  {
    step: "01",
    title: "Pilih Unit & Jadwal",
    desc: "Pilih kamera Insta360 X3, Canon, Fuji, atau GoPro dan tentukan durasi sewa (12 Jam / 24 Jam / 3+ Hari).",
    icon: "Camera",
    badge: "Tahap 1 — Booking"
  },
  {
    step: "02",
    title: "Siapkan KTP & SIM/KK",
    desc: "Siapkan 1 dokumen identitas ASLI (KTP) + 1 fotokopi (SIM/KK). Tanpa dokumen lengkap? Opsi deposit 500K.",
    icon: "FileCheck",
    badge: "Tahap 2 — Identitas"
  },
  {
    step: "03",
    title: "Verifikasi Kilat (5 Menit)",
    desc: "Admin memverifikasi data dan mengunci unit dengan DP Rp 50.000 (tidak bisa di-refund).",
    icon: "ShieldCheck",
    badge: "Tahap 3 — Lock Jadwal"
  },
  {
    step: "04",
    title: "Ambil Unit 24 Jam",
    desc: "Ambil langsung di Pamulang Square / Pamulang Bendabaru (24 Jam) dan difoto saat serah terima.",
    icon: "Flame",
    badge: "Tahap 4 — Gaspol"
  },
  {
    step: "05",
    title: "Kembalikan Tepat Waktu",
    desc: "Toleransi 1 jam untuk sewa 24 jam. Tag @sewa.camera.pamulang & @bachtiar._.photography.id!",
    icon: "Award",
    badge: "Tahap 5 — Selesai"
  }
];
