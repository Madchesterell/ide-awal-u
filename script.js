// =========================================================
// KONFIGURASI 6 JURUSAN RESMI SMKN 4 MADIUN
// =========================================================
const JURUSAN_STYLES = {
  'PH':   { code:'PH',   fullName:'Perhotelan (PH)',                        badge:'bg-amber-100 text-amber-800 border-amber-200',   gradient:'from-amber-500 via-orange-500 to-yellow-600',   icon:'🏨' },
  'ULW':  { code:'ULW',  fullName:'Usaha Layanan Wisata (ULW)',             badge:'bg-emerald-100 text-emerald-800 border-emerald-200', gradient:'from-emerald-500 via-teal-600 to-cyan-600',   icon:'✈️' },
  'ANM':  { code:'ANM',  fullName:'Animasi (ANM)',                          badge:'bg-purple-100 text-purple-800 border-purple-200',  gradient:'from-purple-600 via-indigo-600 to-blue-600',    icon:'🎬' },
  'DPB':  { code:'DPB',  fullName:'Desain Produksi Busana (DPB)',           badge:'bg-rose-100 text-rose-800 border-rose-200',        gradient:'from-rose-500 via-pink-600 to-purple-600',      icon:'🧵' },
  'TKKR': { code:'TKKR', fullName:'Tata Kecantikan Kulit & Rambut (TKKR)',  badge:'bg-pink-100 text-pink-800 border-pink-200',        gradient:'from-pink-500 via-fuchsia-600 to-rose-500',     icon:'💄' },
  'KLN':  { code:'KLN',  fullName:'Kuliner (KLN)',                          badge:'bg-orange-100 text-orange-800 border-orange-200',  gradient:'from-orange-500 via-red-500 to-amber-500',      icon:'🍳' }
};

const defaultStudents = [
  { id:'s1', nama:'Raka Aditya Pratama', jurusan:'ANM', kelas:'XI ANM 1',
    headline:'3D Character Artist & Rigging Enthusiast | Pencipta Karakter Lokal Madiun',
    bio:'Saya mungkin tidak selalu peringkat 1 di pelajaran hitungan, tetapi saat membuka Blender 3D dan menghidupkan karakter, saya merasa menemukan dunia saya. Bercita-cita PKL di studio animasi nasional.',
    skills:['Blender 3D','Character Modeling','Rigging','Storyboard','2D Animation'],
    status:'Siap Mencari Tempat PKL' },
  { id:'s2', nama:'Farhan Maulana Yusuf', jurusan:'PH', kelas:'XI PH 2',
    headline:'Front Office Hospitality & Towel Art Creator | Service Excellence',
    bio:'Senang berinteraksi dengan tamu dari berbagai daerah, menguasai standar grooming perhotelan, reservasi digital, serta seni dekorasi kamar (making bed & towel origami).',
    skills:['Front Office','Housekeeping','Towel Art','Customer Service','English Hospitality'],
    status:'Siap Mencari Tempat PKL' },
  { id:'s3', nama:'Alya Nabila Khairunnisa', jurusan:'TKKR', kelas:'XI TKKR 1',
    headline:'Bridal Makeup Artist, Hair Styling & Facial Aesthetic Specialist',
    bio:'Kecantikan adalah seni merawat kepercayaan diri seseorang. Saya mendalami rias pengantin tradisional & modern, sanggul gala, serta perawatan facial kulit wajah higienis.',
    skills:['Bridal Makeup','Hair Styling','Facial Treatment','Nail Art','Skin Analysis'],
    status:'Siap Mencari Tempat PKL' },
  { id:'s4', nama:'Salsabila Maharani', jurusan:'DPB', kelas:'XI DPB 1',
    headline:'Eco-Print & Contemporary Batik Fashion Designer | Pola & Draping',
    bio:'Menjahit dan merancang pola adalah bahasa ekspresi saya. Fokus pada busana siap pakai (ready-to-wear) yang memadukan motif batik khas Madiun dengan siluet modern anak muda.',
    skills:['Fashion Illustration','Pattern Making','Draping','Batik Contemporary','Sewing'],
    status:'Siap Mencari Tempat PKL' },
  { id:'s5', nama:'Dinda Ayu Lestari', jurusan:'ULW', kelas:'XI ULW 1',
    headline:'Edu-Tourism Planner & Bilingual Tour Guide | Eksplorasi Lereng Wilis',
    bio:'Menyusun paket wisata edukasi dan sejarah di kawasan Madiun & Ponorogo lengkap dengan itinerary, perhitungan harga paket, serta pemanduan wisata berbahasa Inggris.',
    skills:['Tour Guiding','Itinerary Planning','Ticketing','Public Speaking','MICE Event'],
    status:'Siap Mencari Tempat PKL' },
  { id:'s6', nama:'Bagas Satrio Wibowo', jurusan:'KLN', kelas:'XI KLN 1',
    headline:'Indonesian Fusion Pastry & Plating Specialist | Kreator Kuliner Vokasi',
    bio:'Memasak bagi saya adalah seni menyatukan rasa dan visual. Saya bereksperimen mengolah bahan tradisional Jawa Timur menjadi hidangan dessert modern kelas hotel berbintang.',
    skills:['Pastry & Bakery','Food Plating','Indonesian Fusion','Kitchen Hygiene','Menu Costing'],
    status:'Terbuka untuk Tawaran Industri' }
];

const defaultWorks = [
  { id:'w1', studentId:'s1',
    judul:'Pendekar Cyber: Karakter 3D Terinspirasi Pencak Silat Madiun', jurusan:'ANM',
    deskripsi:'Model karakter 3D low-to-mid poly yang dibuat di Blender dengan rigging siap animasi. Menggabungkan filosofi busana pencak silat khas Madiun dengan gaya futuristik.',
    skills:['Blender 3D','Character Modeling','Rigging'],
    image:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    claps:48, comments:[{author:'Bu Ratna (Guru ANM)', text:'Detail lipatan kain dan topologi mesh-nya sangat rapi, Raka! Siap diajukan ke studio.'}],
    createdAt:'2 hari lalu' },
  { id:'w2', studentId:'s3',
    judul:'Rias Pengantin Jawa Modifikasi & Sanggul Modern Soft Glam', jurusan:'TKKR',
    deskripsi:'Proyek ujian praktik tata rias wajah dan penataan rambut sanggul modern dengan teknik complexion tahan lama serta perawatan pra-rias (skin prep) higienis.',
    skills:['Bridal Makeup','Hair Styling','Skin Analysis'],
    image:'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
    claps:63, comments:[{author:'Bu Sari (Kaprog TKKR)', text:'Blending eyeshadow dan kerapian hair-do kamu sudah setara MUA profesional, Alya!'}],
    createdAt:'3 hari lalu' },
  { id:'w3', studentId:'s4',
    judul:'Koleksi Kapsul "Sekar Wilis": Outer Batik Tulis & Linen Organik', jurusan:'DPB',
    deskripsi:'Busana outer semi-formal menggunakan teknik draping dan pewarnaan alam daun jati. Dirancang dari sketsa ilustrasi hingga jahit halus di bengkel Desain Produksi Busana.',
    skills:['Fashion Illustration','Pattern Making','Batik Contemporary','Sewing'],
    image:'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80',
    claps:54, comments:[], createdAt:'4 hari lalu' },
  { id:'w4', studentId:'s2',
    judul:'Simulasi VIP Check-In & Dekorasi Kamar Honeymoon Suite', jurusan:'PH',
    deskripsi:'Dokumentasi praktik housekeeping dan front office: teknik hospital corner making bed presisi, towel art angsa berpasangan, serta greeting tamu VIP.',
    skills:['Front Office','Housekeeping','Towel Art','Customer Service'],
    image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    claps:41, comments:[], createdAt:'5 hari lalu' },
  { id:'w5', studentId:'s5',
    judul:'Paket Wisata Sehari "Jejak Sejarah Kereta & Kopi Kare Madiun"', jurusan:'ULW',
    deskripsi:'Perancangan itinerary wisata edukasi 1 hari penuh meliputi Heritage Tour Kota Madiun, wisata alam Perkebunan Kopi Kandangan Kare, lengkap dengan rincian RAB.',
    skills:['Tour Guiding','Itinerary Planning','MICE Event'],
    image:'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    claps:45, comments:[], createdAt:'6 hari lalu' },
  { id:'w6', studentId:'s6',
    judul:'Mille-Feuille Klepon Pandan & Gula Aren Bakar', jurusan:'KLN',
    deskripsi:'Eksperimen pastry Prancis puff pastry renyah yang dipadukan dengan diplomat cream pandan wangi, unti kelapa karamel, dan teknik fine-dining plating.',
    skills:['Pastry & Bakery','Food Plating','Indonesian Fusion'],
    image:'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80',
    claps:67, comments:[{author:'Chef Roni (Mitra Hotel)', text:'Komposisi warna dan tekstur plating-nya sudah setara standar kitchen hotel bintang 4.'}],
    createdAt:'1 minggu lalu' }
];

const pklPartners = [
  { id:'p1', nama:'Aston Madiun Hotel & Conference Center', kategori:'PH', lokasi:'Jl. Mayjen Sungkono, Kota Madiun',
    posisi:'Front Office, Housekeeping & Guest Relation Trainee',
    requiredSkills:['Front Office','Housekeeping','Towel Art','Customer Service','English Hospitality'],
    kuota:'8 Siswa PKL',
    deskripsi:'Hotel bintang 4 terbesar di Madiun dengan program pembinaan trainee terstruktur lintas departemen perhotelan.' },
  { id:'p2', nama:'Wilis Heritage Tour & MICE Organizer', kategori:'ULW', lokasi:'Kota Madiun & Ponorogo',
    posisi:'Tour Planner, Ticketing & Junior Tour Leader',
    requiredSkills:['Tour Guiding','Itinerary Planning','Ticketing','Public Speaking','MICE Event'],
    kuota:'5 Siswa PKL',
    deskripsi:'Biro perjalanan wisata edukasi dan penyelenggara event MICE yang aktif mempromosikan destinasi eks-Karesidenan Madiun.' },
  { id:'p3', nama:'MNC Animation & Partner Studio', kategori:'ANM', lokasi:'Jakarta / Remote Hybrid Madiun',
    posisi:'Junior 3D Modeler & In-Between Animator',
    requiredSkills:['Blender 3D','Character Modeling','Rigging','2D Animation','Storyboard'],
    kuota:'4 Siswa PKL',
    deskripsi:'Studio produksi serial animasi anak dan IP lokal yang membuka kesempatan magang berbasis portofolio karya 3D/2D.' },
  { id:'p4', nama:'Rumah Mode Sekar Jagad & Batik Boutique', kategori:'DPB', lokasi:'Solo & Madiun',
    posisi:'Asisten Desainer Pola, Draping & Produksi Butik',
    requiredSkills:['Fashion Illustration','Pattern Making','Draping','Batik Contemporary','Sewing'],
    kuota:'4 Siswa PKL',
    deskripsi:'Butik busana kontemporer dan atelier garmen yang rutin tampil di ajang fashion show regional Jawa Timur dan Jawa Tengah.' },
  { id:'p5', nama:'Larissa Aesthetic Center & Larasati Bridal Salon', kategori:'TKKR', lokasi:'Kota Madiun & Surabaya',
    posisi:'Junior Beautician, Facial Therapist & Bridal Assistant',
    requiredSkills:['Bridal Makeup','Hair Styling','Facial Treatment','Nail Art','Skin Analysis'],
    kuota:'6 Siswa PKL',
    deskripsi:'Klinik estetika kulit dan sanggar rias pengantin profesional yang mengutamakan higienitas perawatan serta keterampilan tata rias.' },
  { id:'p6', nama:'The Sun Hotel & Pastry Kitchen Madiun', kategori:'KLN', lokasi:'Kawasan Bisnis Suncity, Madiun',
    posisi:'Commis Pastry & Hot Kitchen Intern',
    requiredSkills:['Pastry & Bakery','Food Plating','Indonesian Fusion','Kitchen Hygiene','Menu Costing'],
    kuota:'6 Siswa PKL',
    deskripsi:'Dapur profesional hotel dan banquet yang mengutamakan kreativitas plating serta standar higienitas tinggi.' }
];

const defaultStories = [
  { id:'c1', author:'Putri Wulandari (Kelas XII PH)', jurusan:'PH', tempat:'Aston Madiun Hotel & Conference Center', rating:5,
    kisah:'PKL di bagian Front Office dan Housekeeping melatih mental dan komunikasi saya luar biasa. Minggu pertama sempat gugup menyapa tamu ekspatriat, tapi karena sudah terbiasa praktik di sekolah, minggu ketiga saya sudah dipercaya handle check-in rombongan.',
    tips:'Jaga grooming (kerapian seragam, senyum, postur), latih percakapan bahasa Inggris dasar perhotelan, dan tunjukkan inisiatif membantu tim tanpa menunggu disuruh.' },
  { id:'c2', author:'Kevin Ardiansyah (Alumni 2025 ANM)', jurusan:'ANM', tempat:'Studio Animasi Kreatif Yogyakarta', rating:5,
    kisah:'Awalnya saya minder karena nilai matematika saya pas-pasan. Ternyata saat wawancara PKL, mentor studio sama sekali tidak menanyakan nilai rapor—mereka langsung membuka karya rigging dan turntable 3D yang saya buat di sekolah! Selama 6 bulan PKL, saya ikut mengerjakan aset background serial animasi.',
    tips:'Unggah minimal 3 karya terbaikmu (meski masih berupa tugas sekolah) dan jelaskan proses pembuatannya. Studio suka siswa yang mau belajar revisi cepat.' },
  { id:'c3', author:'Nadia Safitri (Kelas XII TKKR)', jurusan:'TKKR', tempat:'Klinik Kecantikan & Sanggar Rias Madiun', rating:5,
    kisah:'Selama PKL di TKKR, saya banyak menangani treatment facial wajah, hair spa, hingga menjadi asisten MUA saat acara wisuda dan pernikahan. Klien sangat senang kalau kita ramah dan telaten menjelaskan tahapan perawatan kulit.',
    tips:'Dokumentasikan foto before-after hasil makeup dan hair styling-mu dengan pencahayaan bagus di Etalase Karya. Pemilik salon dan klinik sangat menghargai kebersihan alat dan portofolio visual.' },
  { id:'c4', author:'Rizky Ramadhan (Alumni 2025 DPB)', jurusan:'DPB', tempat:'Atelier Busana & Konveksi Modern Solo', rating:4,
    kisah:'Di industri busana, ketepatan pecah pola dan kecepatan menjahit mesin industri sangat diuji. Berkat sering mengerjakan proyek busana di bengkel DPB SMKN 4 Madiun, saya langsung dipercaya membantu fitting busana pesta klien.',
    tips:'Simpan foto detail jahitan dalam, sketsa desain, dan hasil jadi busana di lamanmu agar industri tahu ketelitian tanganmu.' }
];

// =========================================================
// STATE APLIKASI
// =========================================================
let state = {
  students: JSON.parse(localStorage.getItem('smkn4_v2_students')) || defaultStudents,
  works: JSON.parse(localStorage.getItem('smkn4_v2_works')) || defaultWorks,
  stories: JSON.parse(localStorage.getItem('smkn4_v2_stories')) || defaultStories,
  currentUserId: localStorage.getItem('smkn4_v2_current_user') || null,
  activeTab: 'galeri',
  filterJurusan: 'Semua',
  filterCeritaJurusan: 'Semua',
  uploadedImageBase64: null
};

function saveState() {
  localStorage.setItem('smkn4_v2_students', JSON.stringify(state.students));
  localStorage.setItem('smkn4_v2_works', JSON.stringify(state.works));
  localStorage.setItem('smkn4_v2_stories', JSON.stringify(state.stories));
  if (state.currentUserId) localStorage.setItem('smkn4_v2_current_user', state.currentUserId);
  else localStorage.removeItem('smkn4_v2_current_user');
}

function getCurrentUser() { return state.students.find(s => s.id === state.currentUserId) || null; }
function getInitials(name) { return name.split(' ').slice(0,2).map(n => n[0]).join('').toUpperCase(); }
function getJurusanMeta(code) { return JURUSAN_STYLES[code] || JURUSAN_STYLES['PH']; }

// =========================================================
// TOAST NOTIFIKASI
// =========================================================
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const colors = type === 'success'
    ? 'bg-slate-900 text-white border-emerald-500/50'
    : 'bg-orange-600 text-white border-orange-300';
  toast.className = `pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl border text-xs sm:text-sm font-medium transition-all duration-300 translate-y-2 opacity-0 ${colors}`;
  toast.innerHTML = `<i data-lucide="${type === 'success' ? 'check-circle-2' : 'info'}" class="w-4 h-4 text-amber-400 shrink-0"></i><span>${message}</span>`;
  container.appendChild(toast);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  requestAnimationFrame(() => toast.classList.remove('translate-y-2','opacity-0'));
  setTimeout(() => {
    toast.classList.add('translate-y-2','opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// =========================================================
// NAVIGASI TAB
// =========================================================
function switchTab(tabName) {
  state.activeTab = tabName;
  ['galeri','profil','rekomendasi','cerita'].forEach(t => {
    document.getElementById(`tab-${t}`).classList.add('hidden');
    const dBtn = document.getElementById(`nav-${t}`);
    if (dBtn) dBtn.className = 'nav-btn px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 transition-all flex items-center gap-2';
    const mBtn = document.getElementById(`mnav-${t}`);
    if (mBtn) mBtn.className = 'mnav-btn shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 flex items-center gap-1.5';
  });
  document.getElementById(`tab-${tabName}`).classList.remove('hidden');
  const activeDesktop = document.getElementById(`nav-${tabName}`);
  if (activeDesktop) activeDesktop.className = 'nav-btn px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 bg-white text-slate-900 shadow-sm';
  const activeMobile = document.getElementById(`mnav-${tabName}`);
  if (activeMobile) activeMobile.className = 'mnav-btn shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-500 text-white flex items-center gap-1.5';

  if (tabName === 'galeri') renderGaleri();
  if (tabName === 'profil') renderProfilTab();
  if (tabName === 'rekomendasi') renderRekomendasiPKL();
  if (tabName === 'cerita') renderCeritaPKL();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =========================================================
// HEADER & STATISTIK
// =========================================================
function updateHeaderAndStats() {
  const user = getCurrentUser();
  const avatarEl = document.getElementById('header-avatar');
  const nameEl = document.getElementById('header-user-name');
  const subEl = document.getElementById('header-user-sub');
  if (user) {
    avatarEl.textContent = getInitials(user.nama);
    avatarEl.className = 'w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center text-xs font-bold';
    nameEl.textContent = user.nama.split(' ')[0];
    subEl.textContent = `${user.jurusan} • Laman Aktif`;
  } else {
    avatarEl.textContent = '?';
    avatarEl.className = 'w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-xs font-bold';
    nameEl.textContent = 'Masuk / Buat Laman';
    subEl.textContent = 'Siswa SMKN 4 Madiun';
  }
  document.getElementById('stat-total-karya').textContent = state.works.length;
  document.getElementById('stat-total-siswa').textContent = state.students.length;
  document.getElementById('stat-total-claps').textContent = state.works.reduce((s,w) => s + (w.claps || 0), 0);
}

// =========================================================
// TAB 1: GALERI
// =========================================================
function filterGaleri(jurusan) {
  state.filterJurusan = jurusan;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.className = btn.dataset.jurusan === jurusan
      ? 'filter-pill shrink-0 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white transition-all shadow-xs'
      : 'filter-pill shrink-0 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-orange-700 transition-all';
  });
  renderGaleri();
}

function renderGaleri() {
  const grid = document.getElementById('galeri-grid');
  const searchVal = (document.getElementById('search-karya')?.value || '').toLowerCase().trim();

  const filtered = state.works.filter(work => {
    const student = state.students.find(s => s.id === work.studentId);
    const matchJurusan = state.filterJurusan === 'Semua' || work.jurusan === state.filterJurusan;
    const matchSearch = !searchVal ||
      work.judul.toLowerCase().includes(searchVal) ||
      work.deskripsi.toLowerCase().includes(searchVal) ||
      work.skills.some(sk => sk.toLowerCase().includes(searchVal)) ||
      (student && student.nama.toLowerCase().includes(searchVal));
    return matchJurusan && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-3">
        <div class="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 mx-auto flex items-center justify-center">
          <i data-lucide="search-x" class="w-6 h-6"></i>
        </div>
        <h3 class="font-display font-bold text-slate-800">Belum ada karya yang cocok dengan filter</h3>
        <p class="text-xs text-slate-500">Coba pilih kategori jurusan lain atau jadilah yang pertama mengunggah karya di bidang ini!</p>
      </div>`;
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  grid.innerHTML = filtered.map(work => {
    const student = state.students.find(s => s.id === work.studentId) || { nama:'Siswa SMKN 4', kelas:'XI', id:'' };
    const style = getJurusanMeta(work.jurusan);
    const fallbackImg = `https://placehold.co/800x500/1e293b/f8fafc?text=${encodeURIComponent(work.judul)}`;
    return `
      <article class="bg-white rounded-3xl border border-slate-200/90 overflow-hidden flex flex-col card-hover">
        <div class="relative h-52 bg-slate-100 overflow-hidden group">
          <img src="${work.image || fallbackImg}" onerror="this.onerror=null;this.src='${fallbackImg}'" alt="${work.judul}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div class="absolute top-3 left-3">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-bold border backdrop-blur-md bg-white/95 ${style.badge}">
              ${style.icon} ${style.fullName}
            </span>
          </div>
          <span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs text-[11px] text-white font-medium">${work.createdAt}</span>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-2.5">
            <div onclick="openStudentProfileModal('${student.id}')" class="flex items-center gap-2.5 cursor-pointer group/author">
              <div class="w-8 h-8 rounded-full bg-gradient-to-br ${style.gradient} text-white flex items-center justify-center text-xs font-bold shrink-0">${getInitials(student.nama)}</div>
              <div class="min-w-0">
                <p class="text-xs font-bold text-slate-800 group-hover/author:text-orange-600 transition-colors truncate flex items-center gap-1">
                  ${student.nama} <i data-lucide="arrow-up-right" class="w-3 h-3 opacity-60"></i>
                </p>
                <p class="text-[11px] text-slate-500 truncate">${student.kelas} • Lihat Laman Portofolio</p>
              </div>
            </div>
            <h3 class="font-display font-bold text-base text-slate-900 leading-snug">${work.judul}</h3>
            <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">${work.deskripsi}</p>
            <div class="flex flex-wrap gap-1.5 pt-1">
              ${work.skills.map(sk => `<span class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60">#${sk}</span>`).join('')}
            </div>
          </div>
          <div class="pt-3 border-t border-slate-100 space-y-3">
            <div class="flex items-center justify-between">
              <button onclick="clapWork('${work.id}', this)" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 text-xs font-bold transition-all">
                <span>👏</span><span>Apresiasi</span>
                <span class="px-1.5 py-0.2 rounded-full bg-white text-amber-900 text-[11px]">${work.claps}</span>
              </button>
              <button onclick="toggleCommentBox('${work.id}')" class="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800">
                <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
                <span>${work.comments.length} Komentar</span>
              </button>
            </div>
            <div id="comment-box-${work.id}" class="hidden space-y-2 pt-2 border-t border-slate-100">
              <div class="space-y-1.5 max-h-28 overflow-y-auto">
                ${work.comments.length === 0
                  ? '<p class="text-[11px] text-slate-400 italic">Belum ada catatan apresiasi. Jadilah yang pertama!</p>'
                  : work.comments.map(c => `<div class="p-2 rounded-xl bg-slate-50 text-[11px]"><span class="font-bold text-slate-800">${c.author}:</span> <span class="text-slate-600">${c.text}</span></div>`).join('')}
              </div>
              <form onsubmit="addComment(event, '${work.id}')" class="flex gap-1.5">
                <input type="text" id="comment-input-${work.id}" required placeholder="Tulis apresiasi guru/teman..." class="flex-1 px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-orange-500" />
                <button type="submit" class="px-2.5 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-orange-600">Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </article>`;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function clapWork(workId, btnEl) {
  const work = state.works.find(w => w.id === workId);
  if (!work) return;
  work.claps += 1;
  saveState();
  updateHeaderAndStats();
  btnEl.classList.add('clap-animate');
  setTimeout(() => renderGaleri(), 280);
  showToast('Apresiasi terkirim! Terima kasih telah menghargai karya siswa SMKN 4 Madiun.');
}

function toggleCommentBox(workId) {
  const box = document.getElementById(`comment-box-${workId}`);
  if (box) box.classList.toggle('hidden');
}

function addComment(e, workId) {
  e.preventDefault();
  const input = document.getElementById(`comment-input-${workId}`);
  const text = input.value.trim();
  if (!text) return;
  const work = state.works.find(w => w.id === workId);
  const user = getCurrentUser();
  const authorName = user ? `${user.nama} (${user.jurusan})` : 'Pengunjung / Guru SMKN 4';
  work.comments.push({ author: authorName, text });
  saveState();
  renderGaleri();
  document.getElementById(`comment-box-${workId}`).classList.remove('hidden');
  showToast('Komentar apresiasi berhasil ditambahkan.');
}

// =========================================================
// TAB 2: PROFIL & UPLOAD
// =========================================================
function renderProfilTab() {
  const user = getCurrentUser();
  const gate = document.getElementById('profil-auth-gate');
  const dash = document.getElementById('profil-dashboard');

  if (!user) {
    gate.classList.remove('hidden');
    dash.classList.add('hidden');
    dash.classList.remove('grid');
    const quickList = document.getElementById('quick-login-list');
    quickList.innerHTML = state.students.map(s => `
      <button onclick="loginAsStudent('${s.id}')" class="px-3 py-1.5 rounded-xl bg-white hover:bg-orange-500 hover:text-white border border-amber-300/80 text-xs font-semibold text-slate-800 transition-all shadow-2xs">
        ${s.nama.split(' ')[0]} (${s.jurusan})
      </button>`).join('');
    if (typeof lucide !== 'undefined') lucide.createIcons();
    return;
  }

  gate.classList.add('hidden');
  dash.classList.remove('hidden');
  dash.classList.add('grid');

  const style = getJurusanMeta(user.jurusan);
  document.getElementById('my-cover-banner').className = `h-32 sm:h-40 bg-gradient-to-r ${style.gradient} relative p-4 flex justify-end items-start`;
  document.getElementById('my-avatar-box').textContent = getInitials(user.nama);
  document.getElementById('my-name').textContent = user.nama;
  document.getElementById('my-jurusan-tag').textContent = `${style.icon} ${style.fullName}`;
  document.getElementById('my-kelas-tag').textContent = `• ${user.kelas}`;
  document.getElementById('my-headline').textContent = user.headline;
  document.getElementById('my-bio').textContent = user.bio || 'Belum ada bio. Klik "Edit Laman Profil" untuk menceritakan minat dan keahlianmu.';
  document.getElementById('my-status-badge').innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> ${user.status}`;
  document.getElementById('karya-jurusan').value = user.jurusan;

  const myWorks = state.works.filter(w => w.studentId === user.id);
  const allUserSkills = Array.from(new Set([...user.skills, ...myWorks.flatMap(w => w.skills)]));

  document.getElementById('my-skills-container').innerHTML = allUserSkills.map(sk => `
    <span class="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1.5">
      <i data-lucide="badge-check" class="w-3.5 h-3.5 text-emerald-600"></i>${sk}
    </span>`).join('');

  document.getElementById('my-karya-count').textContent = `${myWorks.length} Karya`;
  const myKaryaList = document.getElementById('my-karya-list');

  if (myWorks.length === 0) {
    myKaryaList.innerHTML = `
      <div class="col-span-full p-8 rounded-2xl border-2 border-dashed border-slate-200 text-center space-y-2">
        <p class="text-sm font-bold text-slate-700">Laman portofoliomu masih kosong</p>
        <p class="text-xs text-slate-500">Gunakan formulir di sebelah kanan untuk mengunggah hasil tugas atau karya pertamamu!</p>
      </div>`;
  } else {
    myKaryaList.innerHTML = myWorks.map(w => {
      const wStyle = getJurusanMeta(w.jurusan);
      const fallbackImg = `https://placehold.co/600x400/1e293b/f8fafc?text=${encodeURIComponent(w.judul)}`;
      return `
        <div class="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 flex flex-col">
          <img src="${w.image || fallbackImg}" onerror="this.onerror=null;this.src='${fallbackImg}'" class="w-full h-36 object-cover" />
          <div class="p-4 flex-1 flex flex-col justify-between space-y-2">
            <div>
              <div class="flex items-center justify-between gap-2">
                <span class="text-[11px] font-bold text-orange-600">${wStyle.fullName}</span>
                <button onclick="deleteMyWork('${w.id}')" title="Hapus karya" class="text-slate-400 hover:text-rose-600 transition-colors">
                  <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                </button>
              </div>
              <h4 class="font-display font-bold text-sm text-slate-900 mt-0.5">${w.judul}</h4>
              <p class="text-xs text-slate-600 line-clamp-2 mt-1">${w.deskripsi}</p>
            </div>
            <div class="flex flex-wrap gap-1 pt-2">
              ${w.skills.map(sk => `<span class="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-medium text-slate-600">#${sk}</span>`).join('')}
            </div>
          </div>
        </div>`;
    }).join('');
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function loginAsStudent(studentId) {
  state.currentUserId = studentId;
  saveState();
  updateHeaderAndStats();
  renderProfilTab();
  showToast(`Selamat datang kembali di lamanmu, ${getCurrentUser().nama}!`);
}

function logoutSiswa() {
  state.currentUserId = null;
  saveState();
  updateHeaderAndStats();
  renderProfilTab();
  showToast('Kamu keluar dari laman pribadi. Silakan masuk atau buat akun baru.', 'info');
}

function handleRegisterSiswa(e) {
  e.preventDefault();
  const nama = document.getElementById('reg-nama').value.trim();
  const jurusan = document.getElementById('reg-jurusan').value;
  const kelas = document.getElementById('reg-kelas').value.trim();
  const headline = document.getElementById('reg-headline').value.trim();
  const bio = document.getElementById('reg-bio').value.trim();
  const skills = document.getElementById('reg-skills').value.split(',').map(s => s.trim()).filter(Boolean);

  const newStudent = {
    id: 's_' + Date.now(), nama, jurusan, kelas, headline,
    bio: bio || `Siswa aktif ${kelas} SMKN 4 Madiun yang antusias mengembangkan karya nyata di bidang ${getJurusanMeta(jurusan).fullName}.`,
    skills: skills.length ? skills : [jurusan],
    status: 'Siap Mencari Tempat PKL'
  };
  state.students.unshift(newStudent);
  state.currentUserId = newStudent.id;
  saveState();
  updateHeaderAndStats();
  renderProfilTab();
  showToast(`Laman portofolio pribadi untuk ${nama} berhasil dibuat!`);
}

function toggleEditProfil() {
  const user = getCurrentUser();
  if (!user) return;
  const viewMode = document.getElementById('profil-view-mode');
  const editMode = document.getElementById('profil-edit-mode');
  const isEditing = !editMode.classList.contains('hidden');
  if (!isEditing) {
    document.getElementById('edit-nama').value = user.nama;
    document.getElementById('edit-status').value = user.status;
    document.getElementById('edit-jurusan').value = user.jurusan;
    document.getElementById('edit-kelas').value = user.kelas;
    document.getElementById('edit-headline').value = user.headline;
    document.getElementById('edit-bio').value = user.bio;
    document.getElementById('edit-skills').value = user.skills.join(', ');
    viewMode.classList.add('hidden');
    editMode.classList.remove('hidden');
  } else {
    viewMode.classList.remove('hidden');
    editMode.classList.add('hidden');
  }
}

function saveEditProfil(e) {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user) return;
  user.nama = document.getElementById('edit-nama').value.trim();
  user.status = document.getElementById('edit-status').value;
  user.jurusan = document.getElementById('edit-jurusan').value;
  user.kelas = document.getElementById('edit-kelas').value.trim();
  user.headline = document.getElementById('edit-headline').value.trim();
  user.bio = document.getElementById('edit-bio').value.trim();
  user.skills = document.getElementById('edit-skills').value.split(',').map(s => s.trim()).filter(Boolean);
  saveState();
  updateHeaderAndStats();
  toggleEditProfil();
  renderProfilTab();
  showToast('Perubahan laman profil berhasil disimpan!');
}

function previewLocalImage(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    state.uploadedImageBase64 = e.target.result;
    document.getElementById('upload-preview-img').src = e.target.result;
    document.getElementById('upload-preview-box').classList.remove('hidden');
  };
  reader.readAsDataURL(file);
}

function handleUploadKarya(e) {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user) { showToast('Silakan buat atau masuk ke laman pribadimu terlebih dahulu!', 'info'); return; }

  const judul = document.getElementById('karya-judul').value.trim();
  const jurusan = document.getElementById('karya-jurusan').value;
  const skills = document.getElementById('karya-skills').value.split(',').map(s => s.trim()).filter(Boolean);
  const deskripsi = document.getElementById('karya-deskripsi').value.trim();
  const urlInput = document.getElementById('karya-url').value.trim();

  const defaultPics = {
    'PH':'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    'ULW':'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    'ANM':'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    'DPB':'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&w=800&q=80',
    'TKKR':'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    'KLN':'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'
  };
  const finalImage = state.uploadedImageBase64 || urlInput || defaultPics[jurusan];

  const newWork = {
    id: 'w_' + Date.now(), studentId: user.id, judul, jurusan, deskripsi, skills,
    image: finalImage, claps: 1, comments: [], createdAt: 'Baru saja'
  };

  skills.forEach(sk => {
    if (!user.skills.some(existing => existing.toLowerCase() === sk.toLowerCase())) user.skills.push(sk);
  });

  state.works.unshift(newWork);
  state.uploadedImageBase64 = null;
  saveState();
  document.getElementById('form-upload-karya').reset();
  document.getElementById('upload-preview-box').classList.add('hidden');
  document.getElementById('karya-jurusan').value = user.jurusan;
  updateHeaderAndStats();
  renderProfilTab();
  showToast('Karya berhasil dipublikasikan ke Lamanmu & Galeri Utama!');
}

function deleteMyWork(workId) {
  state.works = state.works.filter(w => w.id !== workId);
  saveState();
  updateHeaderAndStats();
  renderProfilTab();
  showToast('Karya dihapus dari portofolio.', 'info');
}

// =========================================================
// TAB 3: REKOMENDASI PKL
// =========================================================
function renderRekomendasiPKL(targetStudentId = null) {
  const user = targetStudentId ? state.students.find(s => s.id === targetStudentId) : getCurrentUser();
  const labelEl = document.getElementById('rek-profile-label');
  const skillsBox = document.getElementById('rek-detected-skills');
  const grid = document.getElementById('rekomendasi-grid');

  let activeSkills = [], activeJurusan = null;

  if (user) {
    const userWorks = state.works.filter(w => w.studentId === user.id);
    activeSkills = Array.from(new Set([...user.skills, ...userWorks.flatMap(w => w.skills)]));
    activeJurusan = user.jurusan;
    labelEl.textContent = `Profil Dianalisis: ${user.nama} (${getJurusanMeta(user.jurusan).fullName})`;
    skillsBox.innerHTML = activeSkills.map(sk => `<span class="px-2.5 py-1 rounded-lg bg-white border border-emerald-200 text-emerald-800 text-[11px] font-semibold">✓ ${sk}</span>`).join('');
  } else {
    labelEl.textContent = 'Mode Pratinjau Umum (Masuk ke Laman Saya untuk Skor Personal)';
    skillsBox.innerHTML = `<span class="text-xs text-slate-500">Menampilkan mitra PKL unggulan untuk 6 jurusan SMKN 4 Madiun (PH, ULW, ANM, DPB, TKKR, KLN).</span>`;
  }

  const scoredPartners = pklPartners.map(partner => {
    if (!user) return { ...partner, score: 85, matchedSkills: partner.requiredSkills.slice(0, 2) };
    const userSkillsLower = activeSkills.map(s => s.toLowerCase());
    const matchedSkills = partner.requiredSkills.filter(req =>
      userSkillsLower.some(us => us.includes(req.toLowerCase()) || req.toLowerCase().includes(us))
    );
    let score = 40;
    if (partner.kategori === activeJurusan) score += 30;
    score += Math.round((matchedSkills.length / partner.requiredSkills.length) * 29);
    if (score > 99) score = 99;
    return { ...partner, score, matchedSkills };
  }).sort((a, b) => b.score - a.score);

  grid.innerHTML = scoredPartners.map(p => {
    const style = getJurusanMeta(p.kategori);
    const scoreColor = p.score >= 85 ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
      : p.score >= 65 ? 'bg-amber-50 text-amber-700 border-amber-200'
      : 'bg-slate-100 text-slate-600 border-slate-200';
    return `
      <div class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between space-y-5 card-hover">
        <div class="space-y-3">
          <div class="flex items-start justify-between gap-3">
            <div>
              <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold border ${style.badge}">${style.icon} ${style.fullName}</span>
              <h3 class="font-display text-lg font-extrabold text-slate-900 mt-2">${p.nama}</h3>
              <p class="text-xs font-semibold text-orange-600 mt-0.5">${p.posisi}</p>
            </div>
            <div class="shrink-0 px-3 py-2 rounded-2xl border text-center ${scoreColor}">
              <p class="font-display text-lg font-extrabold leading-none">${p.score}%</p>
              <p class="text-[10px] font-semibold mt-0.5">Kecocokan</p>
            </div>
          </div>
          <p class="text-xs text-slate-600 leading-relaxed">${p.deskripsi}</p>
          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
            <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i> ${p.lokasi}</span>
            <span class="flex items-center gap-1"><i data-lucide="users" class="w-3.5 h-3.5 text-slate-400"></i> Kuota: ${p.kuota}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <p class="text-[11px] font-bold text-slate-700">
              ${user ? (p.matchedSkills.length > 0 ? '✨ Cocok karena karya & profilmu menguasai:' : '💡 Rekomendasi eksplorasi lintas bidang (tingkatkan skill berikut):') : '🎯 Keahlian yang dicari industri ini:'}
            </p>
            <div class="flex flex-wrap gap-1.5">
              ${p.requiredSkills.map(req => {
                const isMatched = p.matchedSkills.includes(req);
                return `<span class="px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${isMatched ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' : 'bg-white text-slate-600 border border-slate-200'}">${isMatched ? '✓ ' : ''}${req}</span>`;
              }).join('')}
            </div>
          </div>
        </div>
        <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <span class="text-[11px] text-s          <span class="text-[11px] text-slate-400">Terhubung dengan Pokja PKL SMKN 4 Madiun</span>
          <button onclick="ajukanMinatPKL('${p.nama}')" class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-orange-600 text-white text-xs font-semibold transition-all flex items-center gap-1.5">
            <i data-lucide="send" class="w-3.5 h-3.5"></i>
            Ajukan Portofolio
          </button>
        </div>
      </div>`;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function ajukanMinatPKL(partnerName) {
  const user = getCurrentUser();
  if (!user) {
    showToast('Aktifkan laman portofoliomu terlebih dahulu di tab "Laman Saya" sebelum mengajukan PKL.', 'info');
    switchTab('profil');
    return;
  }
  showToast(`Tautan Laman Portofolio ${user.nama} (${user.jurusan}) berhasil dikirim ke Pokja PKL untuk ${partnerName}!`);
}

// =========================================================
// TAB 4: CERITA PKL KAKAK KELAS
// =========================================================
function filterCerita(jurusan) {
  state.filterCeritaJurusan = jurusan;
  document.querySelectorAll('.cerita-pill').forEach(btn => {
    btn.className = btn.dataset.ceritaJurusan === jurusan
      ? 'cerita-pill shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-orange-500 text-white'
      : 'cerita-pill shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-white border border-slate-200 text-slate-700 hover:border-orange-400';
  });
  renderCeritaPKL();
}

function renderCeritaPKL() {
  const grid = document.getElementById('cerita-grid');
  const filtered = state.stories.filter(st =>
    state.filterCeritaJurusan === 'Semua' || st.jurusan === state.filterCeritaJurusan
  );

  grid.innerHTML = filtered.map(st => {
    const style = getJurusanMeta(st.jurusan);
    const stars = '⭐'.repeat(st.rating);
    return `
      <article class="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4 card-hover">
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center gap-3">
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-br ${style.gradient} text-white flex items-center justify-center font-display font-bold text-sm shrink-0">
              ${getInitials(st.author)}
            </div>
            <div>
              <h3 class="font-display font-bold text-base text-slate-900">${st.author}</h3>
              <div class="flex flex-wrap items-center gap-2 mt-0.5">
                <span class="px-2 py-0.5 rounded-md text-[11px] font-bold border ${style.badge}">${style.fullName}</span>
                <span class="text-xs font-medium text-slate-500">@ ${st.tempat}</span>
              </div>
            </div>
          </div>
          <span class="text-xs bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200/70 shrink-0">${stars}</span>
        </div>
        <div class="space-y-3">
          <div>
            <h4 class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Pengalaman Nyata di Industri</h4>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">"${st.kisah}"</p>
          </div>
          <div class="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200/70">
            <h4 class="text-[11px] font-bold text-orange-900 flex items-center gap-1.5 mb-1">
              <i data-lucide="lightbulb" class="w-3.5 h-3.5 text-orange-600"></i>
              Tips Lolos & Bekal Portofolio untuk Adik Kelas:
            </h4>
            <p class="text-xs text-orange-950/80 leading-relaxed">${st.tips}</p>
          </div>
        </div>
      </article>`;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function toggleModalCerita(show) {
  const modal = document.getElementById('modal-tambah-cerita');
  if (show) { modal.classList.remove('hidden'); modal.classList.add('flex'); }
  else { modal.classList.add('hidden'); modal.classList.remove('flex'); }
}

function handleTambahCerita(e) {
  e.preventDefault();
  const newStory = {
    id: 'c_' + Date.now(),
    author: document.getElementById('cerita-nama').value.trim(),
    jurusan: document.getElementById('cerita-jurusan').value,
    tempat: document.getElementById('cerita-tempat').value.trim(),
    rating: parseInt(document.getElementById('cerita-rating').value, 10),
    kisah: document.getElementById('cerita-kisah').value.trim(),
    tips: document.getElementById('cerita-tips').value.trim()
  };
  state.stories.unshift(newStory);
  saveState();
  e.target.reset();
  toggleModalCerita(false);
  renderCeritaPKL();
  showToast('Terima kasih! Cerita pengalaman PKL-mu sudah tayang untuk adik kelas.');
}

// =========================================================
// MODAL PROFIL SISWA ALA LINKEDIN
// =========================================================
function openStudentProfileModal(studentId) {
  const student = state.students.find(s => s.id === studentId);
  if (!student) return;

  const style = getJurusanMeta(student.jurusan);
  const studentWorks = state.works.filter(w => w.studentId === student.id);
  const allSkills = Array.from(new Set([...student.skills, ...studentWorks.flatMap(w => w.skills)]));

  document.getElementById('modal-banner').className = `h-32 bg-gradient-to-r ${style.gradient} relative p-4 flex justify-end`;
  document.getElementById('modal-avatar').textContent = getInitials(student.nama);
  document.getElementById('modal-status').textContent = student.status;
  document.getElementById('modal-nama').textContent = student.nama;
  document.getElementById('modal-jurusan').textContent = `${style.icon} ${style.fullName}`;
  document.getElementById('modal-kelas').textContent = `• ${student.kelas}`;
  document.getElementById('modal-headline').textContent = student.headline;
  document.getElementById('modal-bio').textContent = student.bio;
  document.getElementById('modal-karya-total').textContent = studentWorks.length;

  document.getElementById('modal-skills').innerHTML = allSkills.map(sk => `
    <span class="px-2.5 py-1 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1">
      <i data-lucide="check-circle" class="w-3 h-3 text-emerald-600"></i> ${sk}
    </span>`).join('');

  document.getElementById('modal-karya-grid').innerHTML = studentWorks.map(w => {
    const fallbackImg = `https://placehold.co/600x400/1e293b/f8fafc?text=${encodeURIComponent(w.judul)}`;
    return `
      <div class="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50">
        <img src="${w.image || fallbackImg}" onerror="this.onerror=null;this.src='${fallbackImg}'" class="w-full h-32 object-cover" />
        <div class="p-3">
          <p class="font-display font-bold text-xs text-slate-900">${w.judul}</p>
          <p class="text-[11px] text-slate-600 line-clamp-2 mt-1">${w.deskripsi}</p>
          <div class="flex items-center justify-between mt-2 text-[11px] text-slate-500">
            <span>👏 ${w.claps} Apresiasi</span>
            <span>${w.createdAt}</span>
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('modal-btn-match').onclick = () => {
    closeModalProfil();
    switchTab('rekomendasi');
    renderRekomendasiPKL(student.id);
  };

  const modal = document.getElementById('modal-profil-siswa');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeModalProfil() {
  const modal = document.getElementById('modal-profil-siswa');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

window.addEventListener('click', (e) => {
  const modalProfil = document.getElementById('modal-profil-siswa');
  const modalCerita = document.getElementById('modal-tambah-cerita');
  if (e.target === modalProfil) closeModalProfil();
  if (e.target === modalCerita) toggleModalCerita(false);
});

// =========================================================
// INISIALISASI
// =========================================================
window.addEventListener('DOMContentLoaded', () => {
  updateHeaderAndStats();
  renderGaleri();
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
