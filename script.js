// ---------------------------------------------------------
// 1. KONFIGURASI 6 JURUSAN RESMI SMKN 4 MADIUN
// ---------------------------------------------------------
const JURUSAN_STYLES = {
  'PH': {
    code: 'PH',
    fullName: 'Perhotelan (PH)',
    badge: 'bg-amber-100 text-amber-800 border-amber-200',
    gradient: 'from-amber-500 via-orange-500 to-yellow-600',
    icon: '🏨'
  },
  'ULW': {
    code: 'ULW',
    fullName: 'Usaha Layanan Wisata (ULW)',
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    gradient: 'from-emerald-500 via-teal-600 to-cyan-600',
    icon: '✈️'
  },
  'ANM': {
    code: 'ANM',
    fullName: 'Animasi (ANM)',
    badge: 'bg-purple-100 text-purple-800 border-purple-200',
    gradient: 'from-purple-600 via-indigo-600 to-blue-600',
    icon: '🎬'
  },
  'DPB': {
    code: 'DPB',
    fullName: 'Desain Produksi Busana (DPB)',
    badge: 'bg-rose-100 text-rose-800 border-rose-200',
    gradient: 'from-rose-500 via-pink-600 to-purple-600',
    icon: '🧵'
  },
  'TKKR': {
    code: 'TKKR',
    fullName: 'Tata Kecantikan Kulit & Rambut (TKKR)',
    badge: 'bg-pink-100 text-pink-800 border-pink-200',
    gradient: 'from-pink-500 via-fuchsia-600 to-rose-500',
    icon: '💄'
  },
  'KLN': {
    code: 'KLN',
    fullName: 'Kuliner (KLN)',
    badge: 'bg-orange-100 text-orange-800 border-orange-200',
    gradient: 'from-orange-500 via-red-500 to-amber-500',
    icon: '🍳'
  }
};

const defaultStudents = [
  {
    id: 's1',
    nama: 'Raka Aditya Pratama',
    jurusan: 'ANM',
    kelas: 'XI ANM 1',
    headline: '3D Character Artist & Rigging Enthusiast | Pencipta Karakter Lokal Madiun',
    bio: 'Saya mungkin tidak selalu peringkat 1 di pelajaran hitungan, tetapi saat membuka Blender 3D dan menghidupkan karakter, saya merasa menemukan dunia saya. Bercita-cita PKL di studio animasi nasional.',
    skills: ['Blender 3D', 'Character Modeling', 'Rigging', 'Storyboard', '2D Animation'],
    status: 'Siap Mencari Tempat PKL'
  },
  {
    id: 's2',
    nama: 'Farhan Maulana Yusuf',
    jurusan: 'PH',
    kelas: 'XI PH 2',
    headline: 'Front Office Hospitality & Towel Art Creator | Service Excellence',
    bio: 'Senang berinteraksi dengan tamu dari berbagai daerah, menguasai standar grooming perhotelan, reservasi digital, serta seni dekorasi kamar (making bed & towel origami).',
    skills: ['Front Office', 'Housekeeping', 'Towel Art', 'Customer Service', 'English Hospitality'],
    status: 'Siap Mencari Tempat PKL'
  },
  {
    id: 's3',
    nama: 'Alya Nabila Khairunnisa',
    jurusan: 'TKKR',
    kelas: 'XI TKKR 1',
    headline: 'Bridal Makeup Artist, Hair Styling & Facial Aesthetic Specialist',
    bio: 'Kecantikan adalah seni merawat kepercayaan diri seseorang. Saya mendalami rias pengantin tradisional & modern, sanggul gala, serta perawatan facial kulit wajah higienis.',
    skills: ['Bridal Makeup', 'Hair Styling', 'Facial Treatment', 'Nail Art', 'Skin Analysis'],
    status: 'Siap Mencari Tempat PKL'
  },
  {
    id: 's4',
    nama: 'Salsabila Maharani',
    jurusan: 'DPB',
    kelas: 'XI DPB 1',
    headline: 'Eco-Print & Contemporary Batik Fashion Designer | Pola & Draping',
    bio: 'Menjahit dan merancang pola adalah bahasa ekspresi saya. Fokus pada busana siap pakai (ready-to-wear) yang memadukan motif batik khas Madiun dengan siluet modern anak muda.',
    skills: ['Fashion Illustration', 'Pattern Making', 'Draping', 'Batik Contemporary', 'Sewing'],
    status: 'Siap Mencari Tempat PKL'
  },
  {
    id: 's5',
    nama: 'Dinda Ayu Lestari',
    jurusan: 'ULW',
    kelas: 'XI ULW 1',
    headline: 'Edu-Tourism Planner & Bilingual Tour Guide | Eksplorasi Lereng Wilis',
    bio: 'Menyusun paket wisata edukasi dan sejarah di kawasan Madiun & Ponorogo lengkap dengan itinerary, perhitungan harga paket, serta pemanduan wisata berbahasa Inggris.',
    skills: ['Tour Guiding', 'Itinerary Planning', 'Ticketing', 'Public Speaking', 'MICE Event'],
    status: 'Siap Mencari Tempat PKL'
  },
  {
    id: 's6',
    nama: 'Bagas Satrio Wibowo',
    jurusan: 'KLN',
    kelas: 'XI KLN 1',
    headline: 'Indonesian Fusion Pastry & Plating Specialist | Kreator Kuliner Vokasi',
    bio: 'Memasak bagi saya adalah seni menyatukan rasa dan visual. Saya bereksperimen mengolah bahan tradisional Jawa Timur menjadi hidangan dessert modern kelas hotel berbintang.',
    skills: ['Pastry & Bakery', 'Food Plating', 'Indonesian Fusion', 'Kitchen Hygiene', 'Menu Costing'],
    status: 'Terbuka untuk Tawaran Industri'
  }
];

const defaultWorks = [
  {
