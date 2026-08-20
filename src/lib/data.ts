export interface CameraItem {
  id: string;
  name: string;
  category: "360" | "DSLR" | "Action" | "Vintage";
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
  rating: number;
  reviewCount: number;
  racingUse: string;
  badgeAccent: string;
}

export const CAMERAS: CameraItem[] = [
  {
    id: "gopro-max-360",
    name: "GoPro MAX 360° Spherical",
    category: "360",
    tag: "POV Pembalap",
    tagColor: "green",
    badgeAccent: "from-emerald-400 to-green-500",
    price12h: 120000,
    price24h: 175000,
    featured: true,
    bentoSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    description: "Kamera aksi 360 derajat terbaik untuk drag bike & sirkuit. Reframe video sesuka hati pasca balapan tanpa kehilangan momen sedikit pun.",
    specs: [
      "5.6K 30FPS 360° Spherical Video",
      "Max HyperSmooth Stabilization Ekstrem",
      "PowerPano 270° Anti Distorsi",
      "6 Built-in Spherical Microphones",
      "Waterproof 5M + Tahan Getaran Tinggi"
    ],
    inclusions: [
      "GoPro MAX 360 Body Unit",
      "2x Battery High Capacity",
      "Dual Fast Charger + Kabel Type-C",
      "MicroSD 128GB Sandisk Extreme Pro",
      "Helmet Chin Mount + Handlebar Mount CNC",
      "Invisible Selfie Stick 120cm",
      "Hard Carbon Shell Protective Case"
    ],
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1200&q=80",
    rating: 4.9,
    reviewCount: 148,
    racingUse: "Perekaman sudut helm kokpit 360° & slow motion high-speed tire burnout"
  },
  {
    id: "canon-dslr-pro",
    name: "Canon EOS DSLR Speed Pro",
    category: "DSLR",
    tag: "DSLR Juara",
    tagColor: "purple",
    badgeAccent: "from-purple-400 to-indigo-500",
    price12h: 150000,
    price24h: 220000,
    featured: true,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
    description: "Kamera DSLR andalan fotografer sirkuit dan pit-stop. Sensor jernih dengan shutter speed tinggi untuk freeze aksi balap nocturnal.",
    specs: [
      "24.2 MP APS-C CMOS Sensor Tajam",
      "Dual Pixel CMOS AF High-speed Tracking",
      "Shutter Speed hingga 1/4000s Freeze Action",
      "Full HD 60fps Crisp Night Video",
      "Lensa 18-55mm IS STM + 50mm f/1.8 Bokeh"
    ],
    inclusions: [
      "Body Canon DSLR + 2 Lensa Pilihan",
      "2x Original Batteries + Charger",
      "SD Card High Speed 64GB Extreme Pro",
      "Camera Strap & Lens Hood Anti Flare",
      "Tas Kamera Waterproof Heavy Duty"
    ],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviewCount: 104,
    racingUse: "Foto rolling shot panning malam hari & portrait kemenangan di garis finish"
  },
  {
    id: "insta360-x4-bullet",
    name: "Insta360 X3 / X4 Nitro Pro",
    category: "360",
    tag: "Bullet Time Action",
    tagColor: "cyan",
    badgeAccent: "from-cyan-400 to-blue-500",
    price12h: 140000,
    price24h: 195000,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    description: "Kamera aksi 360 dengan fitur bullet time dan invisible selfie stick, menghasilkan angle seperti drone video yang terbang mengitari motor.",
    specs: [
      "8K 30fps / 5.7K 60fps 360° Capture",
      "FlowState Stabilization + 360 Horizon Lock",
      "Active HDR Night Mode for Racing Lights",
      "AI Gestures & Voice Control 2.0",
      "Touchscreen Besar Ultra Responsive"
    ],
    inclusions: [
      "Unit Insta360 X3/X4",
      "2x Extreme Endurance Batteries",
      "Invisible Stick Carbon Edition 114cm",
      "Lens Cap Silicone & Clamp Mount",
      "MicroSD 128GB V30 Sandisk Extreme"
    ],
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1000&q=80",
    rating: 5.0,
    reviewCount: 182,
    racingUse: "Angle cinematic drone-like dari buntut belakang drag bike"
  },
  {
    id: "dji-action-4",
    name: "DJI Osmo Action 4 Beast",
    category: "Action",
    tag: "Tahan Banting",
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
      "Tahan Suhu Ekstrem & Tahan Banting"
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
    racingUse: "Bumper mount mobil / shock depan motor dengan getaran tinggi"
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
      "Direct SD Card digital export kit",
      "Vintage Date Stamp on-screen"
    ],
    inclusions: [
      "Vintage Camcorder Body Unit",
      "Battery Pack + AC Power Charger",
      "Converter Card Reader to iPhone/Android",
      "Strap Vintage Kulit",
      "Retro Pouch Bag"
    ],
    image: "https://images.unsplash.com/photo-1590291103653-997f5deee905?auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviewCount: 68,
    racingUse: "Video dokumentasi pit-crew & after-party sirkuit bertema Y2K"
  },
  {
    id: "drag-mount-kit",
    name: "Racing Mount & Clamp Pro Kit",
    category: "Action",
    tag: "Aksesoris Juara",
    tagColor: "green",
    badgeAccent: "from-emerald-400 to-teal-500",
    price12h: 40000,
    price24h: 60000,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    description: "Paket mounting heavy-duty all-in-one yang aman hingga kecepatan 200 km/jam. Suction cup double-lock dan jepitan stang CNC aluminium.",
    specs: [
      "Double Vacuum Suction Cup (200km/h rated)",
      "CNC Aluminium Handlebar & Footstep Clamp",
      "Full-Face Helmet Chin Strap Mount",
      "Chesty Chest Mount Harness",
      "Telescopic Invisible Carbon Pole"
    ],
    inclusions: [
      "6x Modul Mounting Pilihan",
      "Safety Tether Wire Cable Baja",
      "Wrench Screw Key + 4x Long Screws",
      "Padded Carry Case"
    ],
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviewCount: 95,
    racingUse: "Pemasangan kamera di tangki, swingarm, helm, dan spakbor motor balap"
  }
];

export const RENTAL_STEPS = [
  {
    step: "01",
    title: "Pilih Unit & Jadwal",
    subtitle: "Tentukan Senjata Rekamanmu",
    desc: "Pilih kamera (GoPro 360, Insta360, DSLR, Action Cam) dan tentukan durasi sewa (12 Jam / 24 Jam / Paket Weekend). Klik WhatsApp untuk konsultasi cepat.",
    icon: "Camera",
    badge: "Stage 1 — Grid Start"
  },
  {
    step: "02",
    title: "Siapkan KTP / SIM / KK",
    subtitle: "Verifikasi Tanpa Ribet",
    desc: "Siapkan minimal 2 identitas asli yang masih berlaku (KTP / SIM C / KK / Kartu Pelajar / Mahasiswa) sebagai jaminan keamanan penyewaan.",
    icon: "FileCheck",
    badge: "Stage 2 — Scrutineering"
  },
  {
    step: "03",
    title: "Deposit / Verifikasi Kilat",
    subtitle: "Proses Cepat 5 Menit",
    desc: "Admin memverifikasi data secara instan dalam 5 menit. Tanpa birokrasi berbelit, unit langsung di-lock dan disiapkan siap gas.",
    icon: "ShieldCheck",
    badge: "Stage 3 — Pit Lane Green Light"
  },
  {
    step: "04",
    title: "Ambil Unit & Gaspol!",
    subtitle: "Tangsel Pamulang Bendabaru",
    desc: "Self-pickup langsung di basecamp Bachtiar Camera Pamulang Bendabaru, atau kirim via Gosend / Grab Express instant ke lokasi balapanmu.",
    icon: "Flame",
    badge: "Stage 4 — Launch Control"
  },
  {
    step: "05",
    title: "Kembalikan & Share Footage",
    subtitle: "Tag & Dapatkan Diskon Next Order",
    desc: "Kembalikan unit tepat waktu dalam kondisi baik. Upload karya video balapanmu dan tag @sewa.camera.pamulang & @bachtiar._.photography.id untuk diskon 15%!",
    icon: "Award",
    badge: "Finish Line — Podium Juara"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Nocturnal Drag 201M High Speed",
    camera: "GoPro MAX 360° Spherical",
    category: "Drag Night",
    likes: "1.8k",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80",
    instaUser: "@bachtiar._.photography.id",
    height: "h-96",
    caption: "Night race panning shot documentation @bachtiar._.photography.id"
  },
  {
    id: 2,
    title: "Pit Stop Burnout & Flame Exhaust",
    camera: "Canon EOS DSLR Speed Pro",
    category: "Rolling Shot",
    likes: "2.4k",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    instaUser: "@bachtiar._.photography.id",
    height: "h-80",
    caption: "Trackside bokeh shot by Bachtiar Photography"
  },
  {
    id: 3,
    title: "Biker Cockpit POV 360 Extreme",
    camera: "Insta360 X3 / X4 Nitro Pro",
    category: "Drag Night",
    likes: "1.3k",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80",
    instaUser: "@sewa.camera.pamulang",
    height: "h-96",
    caption: "Cockpit camera chin-mount rental unit @sewa.camera.pamulang"
  },
  {
    id: 4,
    title: "Night Rolling Shot BSD Speedway",
    camera: "Canon Speed Pro + 50mm f/1.8",
    category: "Rolling Shot",
    likes: "3.9k",
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
    instaUser: "@bachtiar._.photography.id",
    height: "h-80",
    caption: "High shutter night photography @bachtiar._.photography.id"
  },
  {
    id: 5,
    title: "Vintage VHS Aesthetic Garage Vibe",
    camera: "Vintage 90s Camcorder CCD",
    category: "Aesthetic Y2K",
    likes: "2.2k",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80",
    instaUser: "@bachtiar._.photography.id",
    height: "h-96",
    caption: "Y2K Street nostalgia garage reel @bachtiar._.photography.id"
  },
  {
    id: 6,
    title: "Low-Angle Flame Spark Action",
    camera: "DJI Osmo Action 4 Beast",
    category: "Drag Night",
    likes: "1.6k",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
    instaUser: "@sewa.camera.pamulang",
    height: "h-80",
    caption: "Swingarm crashproof mount test @sewa.camera.pamulang"
  }
];

export const TESTIMONIALS = [
  {
    name: "Rian \"Speedy\" Pratama",
    role: "Drag Racer & Content Creator BSD",
    quote: "Sewa GoPro MAX 360 di Bachtiar Camera buat event drag night Tangsel. Bracket-nya super kokoh, footage 360-nya gak getar sama sekali walau motor tembus 160km/h!",
    rating: 5,
    unit: "GoPro MAX 360°"
  },
  {
    name: "Dimas Aditya",
    role: "Automotive Photographer Jakarta",
    quote: "DSLR Canon-nya super fresh, sensor bersih, shutter responsif abis buat rolling shot mobil malam hari. Admin Bachtiar Camera fast respon dan deket di Pamulang!",
    rating: 5,
    unit: "Canon EOS DSLR Pro"
  },
  {
    name: "Fathir Zaky",
    role: "Vlogger Motovlog Tangsel",
    quote: "Insta360 X3 nya lengkap sama invis pole & dual batre. Gak perlu pusing kehabisan baterai pas sunmori ke Bogor. Recommended rental no 1 di Pamulang Bendabaru!",
    rating: 5,
    unit: "Insta360 X3 / X4"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Apa saja syarat untuk sewa kamera di Bachtiar Camera?",
    a: "Cukup siapkan minimal 2 kartu identitas asli yang masih berlaku (KTP, SIM, KK, Paspor, atau Kartu Mahasiswa/Pelajar). Dokumen dititipkan selama masa sewa sebagai jaminan keamanan."
  },
  {
    q: "Dimana lokasi penjemputan unit Bachtiar Camera?",
    a: "Basecamp kami berlokasi di Pamulang, Bendabaru, Tangerang Selatan (Dekat UNPAM & RS Permata Pamulang). Kami juga melayani COD sekitar Pamulang, Ciputat, BSD, Serpong, dan kirim via GoSend/Grab Express."
  },
  {
    q: "Apakah include memori dan aksesoris mounting motor?",
    a: "YA! Setiap rental sudah INCLUDE MicroSD/SD Card Sandisk Extreme kecepatan tinggi, 2x baterai, charger, dan opsi mounting helm / stang / suction cup siap pakai."
  },
  {
    q: "Bagaimana jika mau sewa lebih dari 24 jam atau mingguan?",
    a: "Kami sediakan Paket Weekend & Paket Mingguan dengan diskon khusus hingga 25%. Langsung klik tombol WhatsApp untuk nego paket hemat."
  },
  {
    q: "Bagaimana cara booking agar unit tidak keduluan orang lain?",
    a: "Hubungi WhatsApp kami di 0896-5428-0181 untuk lock tanggal & unit dengan DP minimal 50rb. Unit dijamin standby saat jadwal sewa."
  }
];
