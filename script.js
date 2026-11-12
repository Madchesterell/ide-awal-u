// ================= DATA AWAL KARYA SISWA SMKN 4 MADIUN =================
const defaultKarya = [
  {
    id: 1,
    nama: "Jalu Farrel Abyantara",
    jurusan: "Animasi",
    judul: "3D Environment: Sudut Kedai Ramen Malam Hari",
    deskripsi: "Eksplorasi pencahayaan malam (mood lighting) dan texturing di Blender 3D. Proyek ini melatih komposisi kamera dan detail aset lingkungan untuk persiapan portofolio PKL studio animasi.",
    gambar: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    link: "https://abyantportofolio.framer.website",
    kontak: "IG: @abyant.3d",
    apresiasi: 42
  },
  {
    id: 2,
    nama: "Julie Cahya Karmila",
    jurusan: "ULW",
    judul: "Paket Wisata Edukasi & Budaya Madiun Raya",
    deskripsi: "Perancangan itinerary wisata 2 hari 1 malam lengkap dengan perhitungan biaya (tour quotation) dan pemanduan wisata sejarah di Kota Madiun.",
    gambar: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    link: "",
    kontak: "Hubin SMKN 4 Madiun",
    apresiasi: 38
  },
  {
    id: 3,
    nama: "Dimas Arya Saputra",
    jurusan: "DKV",
    judul: "Rebranding Kemasan UMKM Brem Khas Madiun",
    deskripsi: "Tugas proyek desain kemasan modern untuk membantu UMKM lokal naik kelas agar lebih menarik bagi wisatawan muda tanpa meninggalkan identitas budaya.",
    gambar: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    link: "",
    kontak: "IG: @dimas.visual",
    apresiasi: 31
  },
  {
    id: 4,
    nama: "Nabila Putri Rahayu",
    jurusan: "Perhotelan",
    judul: "Standardisasi Towel Art & Making Bed Eksekutif",
    deskripsi: "Dokumentasi praktik tata graha (Housekeeping) standar hotel bintang 4 dengan ketepatan waktu di bawah 15 menit dan kerapian detail.",
    gambar: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    link: "",
    kontak: "Hubin SMKN 4 Madiun",
    apresiasi: 29
  },
  {
    id: 5,
    nama: "Bagas Prakoso",
    jurusan: "Tata Boga",
    judul: "Fusion Pastry: Croissant Isi Pecel & Sambal Kacang",
    deskripsi: "Inovasi produk bakery yang memadukan teknik laminasi adonan Prancis dengan cita rasa autentik kuliner khas Madiun.",
    gambar: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
    link: "",
    kontak: "IG: @bagas.kitchen",
    apresiasi: 47
  }
];

// ================= DATA AWAL PENGALAMAN PKL KAKAK KELAS =================
const defaultPKL = [
  {
    id: 101,
    nama: "Raka Mahendra (Alumni 2025)",
    jurusan: "Animasi",
    tempat: "Studio Animasi & Visual Kreatif",
    kota: "Yogyakarta",
    cerita: "Selama 6 bulan PKL, saya dilibatkan langsung dalam proses 3D asset modeling dan clean-up animasi. Mentornya sangat terbuka membimbing dari nol asalkan kita mau belajar dan tepat waktu.",
    tips: "Jangan menunggu jago baru melamar. Rapikan 3-5 karya terbaikmu di Blender/Maya dalam satu link portofolio, dan tunjukkan etika komunikasi yang sopan saat wawancara."
  },
  {
    id: 102,
    nama: "Sinta Maharani (Kelas XII)",
    jurusan: "Perhotelan",
    tempat: "Hotel Aston Madiun",
    kota: "Madiun",
    cerita: "Pengalaman luar biasa belajar langsung menangani tamu di bagian Front Office dan Housekeeping. Mental kerja terlatih menghadapi situasi ramai saat akhir pekan.",
    tips: "Kuasai bahasa Inggris dasar untuk menyapa tamu, jaga penampilan (grooming) sejak hari pertama tes, dan jangan takut bertanya kepada senior."
  },
  {
    id: 103,
    nama: "Fajar Nugroho (Alumni 2025)",
    jurusan: "DKV",
    tempat: "Agensi Desain & Percetakan Digital",
    kota: "Surabaya",
    cerita: "Di sini belajar cepat mengerjakan desain kebutuhan klien nyata, mulai dari banner event, konten media sosial, hingga persiapan file siap cetak (pre-press).",
    tips: "Biasakan bekerja dengan manajemen layer yang rapi di Illustrator/Photoshop dan pahami ukuran cetak standar agar tidak banyak revisi."
  },
  {
    id: 104,
    nama: "Ayu Lestari (Kelas XII)",
    jurusan: "Tata Boga",
    tempat: "Artisan Bakery & Cafe",
    kota: "Solo",
    cerita: "Belajar manajemen dapur profesional, menimbang bahan dengan presisi tinggi, serta menjaga kebersihan area kerja (hygiene & sanitation) di bawah tekanan jam sibuk.",
    tips: "Siapkan fisik yang kuat karena banyak berdiri, catat setiap resep dan takaran yang diajarkan chef di buku saku kecil."
  }
];

// ================= INISIALISASI STATE & LOCALSTORAGE =================
let karyaList = JSON.parse(localStorage.getItem('smkn4_karya')) || defaultKarya;
let pklList = JSON.parse(localStorage.getItem('smkn4_pkl')) || defaultPKL;

let currentKaryaFilter = 'Semua';
let currentSearchQuery = '';
let currentPklFilter = 'Semua';

// Simpan ke LocalStorage
function saveData() {
  localStorage.setItem('smkn4_karya', JSON.stringify(karyaList));
  localStorage.setItem('smkn4_pkl', JSON.stringify(pklList));
  updateStats();
}

// Perbarui Angka Statistik
function updateStats() {
  document.getElementById('stat-karya').textContent = karyaList.length;
  document.getElementById('stat-pkl').textContent = pklList.length;
}

// ================= RENDER ETALASE KARYA =================
function renderKarya() {
  const grid = document.getElementById('karya-grid');
  const emptyState = document.getElementById('karya-empty');

  const filtered = karyaList.filter(item => {
    const matchJurusan = currentKaryaFilter === 'Semua' || item.jurusan === currentKaryaFilter;
    const matchSearch = item.judul.toLowerCase().includes(currentSearchQuery) ||
                        item.nama.toLowerCase().includes(currentSearchQuery) ||
                        item.deskripsi.toLowerCase().includes(currentSearchQuery);
    return matchJurusan && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  grid.innerHTML = filtered.map(item => `
    <article class="bg-white rounded-2xl border border-slate-200/90 overflow-hidden flex flex-col card-hover">
      <div class="relative aspect-[16/10] bg-slate-100 overflow-hidden cursor-pointer" onclick="openDetail(${item.id})">
        <img src="${item.gambar}" alt="${item.judul}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-900/80 text-white backdrop-blur-sm">
          ${item.jurusan}
        </span>
      </div>
      
      <div class="p-5 flex-1 flex flex-col">
        <h3 onclick="openDetail(${item.id})" class="font-display font-bold text-lg text-slate-900 hover:text-blue-600 cursor-pointer line-clamp-1">
          ${item.judul}
        </h3>
        <p class="text-xs font-semibold text-blue-600 mt-1">Karya: ${item.nama}</p>
        <p class="text-xs text-slate-600 mt-2.5 line-clamp-2 leading-relaxed flex-1">
          ${item.deskripsi}
        </p>

        <div class="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <button onclick="beriApresiasi(${item.id})" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-rose-600 transition-colors">
            <i data-lucide="heart" class="w-4 h-4 text-rose-500 fill-rose-500"></i>
            <span>${item.apresiasi} Apresiasi</span>
          </button>
          <button onclick="openDetail(${item.id})" class="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1">
            Lihat Detail
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </article>
  `).join('');

  lucide.createIcons();
}

// ================= RENDER JEJAK PKL KAKAK KELAS =================
function renderPKL() {
  const grid = document.getElementById('pkl-grid');

  const filtered = pklList.filter(item => {
    return currentPklFilter === 'Semua' || item.jurusan === currentPklFilter;
  });

  grid.innerHTML = filtered.map(item => `
    <div class="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 flex flex-col justify-between">
      <div>
        <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span class="px-3 py-1 rounded-lg text-xs font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            ${item.jurusan}
          </span>
          <span class="inline-flex items-center gap-1 text-xs font-semibold text-slate-400">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-400"></i>
            ${item.kota}
          </span>
        </div>

        <h3 class="font-display text-lg font-bold text-white">${item.tempat}</h3>
        <p class="text-xs text-amber-400 font-semibold mt-0.5">Oleh: ${item.nama}</p>

        <p class="text-sm text-slate-300 mt-3.5 leading-relaxed">
          "${item.cerita}"
        </p>
      </div>

      <div class="mt-5 p-4 rounded-xl bg-amber-500/10 border border-amber-500/25">
        <div class="flex items-center gap-1.5 text-xs font-bold text-amber-300 mb-1">
          <i data-lucide="lightbulb" class="w-4 h-4"></i>
          Tips Lolos & Persiapan Adik Kelas:
        </div>
        <p class="text-xs text-slate-200 leading-relaxed">
          ${item.tips}
        </p>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

// ================= INTERAKSI & EVENT LISTENERS =================
function beriApresiasi(id) {
  const index = karyaList.findIndex(k => k.id === id);
  if (index !== -1) {
    karyaList[index].apresiasi += 1;
    saveData();
    renderKarya();
  }
}

// Filter Jurusan Karya
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('bg-blue-600', 'text-white', 'shadow-sm');
      b.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
    });
    btn.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
    btn.classList.add('bg-blue-600', 'text-white', 'shadow-sm');
    
    currentKaryaFilter = btn.dataset.filter;
    renderKarya();
  });
});

// Pencarian Karya
document.getElementById('search-karya').addEventListener('input', (e) => {
  currentSearchQuery = e.target.value.toLowerCase();
  renderKarya();
});

// Filter Jurusan PKL
document.querySelectorAll('.pkl-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.pkl-filter-btn').forEach(b => {
      b.classList.remove('bg-amber-500', 'text-slate-950');
      b.classList.add('bg-slate-800', 'text-slate-300');
    });
    btn.classList.remove('bg-slate-800', 'text-slate-300');
    btn.classList.add('bg-amber-500', 'text-slate-950');

    currentPklFilter = btn.dataset.pklFilter;
    renderPKL();
  });
});

// Modal Controls
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// Detail Modal Karya
function openDetail(id) {
  const item = karyaList.find(k => k.id === id);
  if (!item) return;

  const content = document.getElementById('detail-content');
  content.innerHTML = `
    <div class="relative">
      <img src="${item.gambar}" alt="${item.judul}" class="w-full max-h-80 object-cover" />
      <button onclick="closeModal('modal-detail')" class="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900">
        <i data-lucide="x" class="w-5 h-5"></i>
      </button>
    </div>
    <div class="p-6 sm:p-8">
      <span class="px-3 py-1 rounded-lg text-xs font-bold bg-blue-100 text-blue-700">${item.jurusan}</span>
      <h3 class="font-display text-2xl font-bold text-slate-900 mt-3">${item.judul}</h3>
      <p class="text-sm font-semibold text-slate-600 mt-1">Kreator: <span class="text-blue-600">${item.nama}</span></p>
      
      <p class="text-sm text-slate-600 mt-4 leading-relaxed">${item.deskripsi}</p>

      <div class="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div class="text-xs text-slate-500">
          <span class="font-bold text-slate-700 block">Kontak / Hubin untuk Rekrutmen PKL:</span>
          ${item.kontak || 'Hubin SMKN 4 Madiun'}
        </div>
        ${item.link ? `
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700">
            Buka Portofolio Lengkap
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        ` : ''}
      </div>
    </div>
  `;
  openModal('modal-detail');
  lucide.createIcons();
}

// Submit Form Unggah Karya
document.getElementById('form-karya').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nama = document.getElementById('karya-nama').value;
  const jurusan = document.getElementById('karya-jurusan').value;
  const judul = document.getElementById('karya-judul').value;
  const deskripsi = document.getElementById('karya-deskripsi').value;
  const link = document.getElementById('karya-link').value;
  const kontak = document.getElementById('karya-kontak').value;
  const fileInput = document.getElementById('karya-file');

  const simpanKaryaBaru = (imgSrc) => {
    const newKarya = {
      id: Date.now(),
      nama,
      jurusan,
      judul,
      deskripsi,
      gambar: imgSrc,
      link,
      kontak: kontak || 'Hubin SMKN 4 Madiun',
      apresiasi: 1
    };
    karyaList.unshift(newKarya);
    saveData();
    renderKarya();
    this.reset();
    closeModal('modal-karya');
  };

  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => simpanKaryaBaru(event.target.result);
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    simpanKaryaBaru('https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80');
  }
});

// Submit Form Pengalaman PKL
document.getElementById('form-pkl').addEventListener('submit', function(e) {
  e.preventDefault();

  const newPKL = {
    id: Date.now(),
    nama: document.getElementById('pkl-nama').value,
    jurusan: document.getElementById('pkl-jurusan').value,
    tempat: document.getElementById('pkl-tempat').value,
    kota: document.getElementById('pkl-kota').value,
    cerita: document.getElementById('pkl-cerita').value,
    tips: document.getElementById('pkl-tips').value
  };

  pklList.unshift(newPKL);
  saveData();
  renderPKL();
  this.reset();
  closeModal('modal-pkl');
});

// Jalankan Render Awal saat Halaman Dimuat
document.addEventListener('DOMContentLoaded', () => {
  updateStats();
  renderKarya();
  renderPKL();
  lucide.createIcons();
});
