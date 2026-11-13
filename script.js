// Daftar Jurusan Resmi dengan singkatan (KUL untuk Kuliner)
const jurusans = [
    { id: 'Semua', name: 'Semua Karya' },
    { id: 'PH', name: 'Perhotelan' },
    { id: 'ULW', name: 'Usaha Layanan Wisata' },
    { id: 'ANM', name: 'Animasi' },
    { id: 'DPB', name: 'Desain Produksi Busana' },
    { id: 'TKKR', name: 'Tata Kecantikan' },
    { id: 'KUL', name: 'Kuliner' } // Singkatan agung yang telah diubah
];

// Data Dummy Mahakarya Siswa
let karyaSiswa = [
    { id: 1, judul: "Animasi Pendek 3D: Petualangan Angin", penulis: "Jalu Farrel", jurusan: "ANM", deskripsi: "Eksplorasi viewport lighting dan rigging karakter menggunakan Blender." },
    { id: 2, judul: "Gaun Daur Ulang Elegan", penulis: "Siti Aisyah", jurusan: "DPB", deskripsi: "Merancang gaun simetris dari bahan sisa industri tekstil lokal." },
    { id: 3, judul: "Inovasi Plating Nasi Pecel Modern", penulis: "Budi Santoso", jurusan: "KUL", deskripsi: "Menyajikan cita rasa klasik Madiun dengan sentuhan fine dining." },
    { id: 4, judul: "Tour Guide Virtual Madiun", penulis: "Julie Cahya", jurusan: "ULW", deskripsi: "Peta interaktif untuk rute wisata bersejarah di karesidenan." }
];

// Data Dummy Pengalaman PKL
const ceritaPKL = [
    { id: 1, nama: "Kak Raka", jurusan: "ANM", tempat: "Imajiwa Creative Studio", cerita: "Fokus pada rendering video mapping. Rekomendasi: Kuasai After Effects sebelum magang di sini!", kecocokan: "Tinggi untuk Animator" },
    { id: 2, nama: "Kak Dinda", jurusan: "KUL", tempat: "Hotel Aston Madiun", cerita: "Banyak belajar manajemen dapur profesional dan cold kitchen. Rekomendasi: Persiapkan mental dan kecepatan tangan.", kecocokan: "Tinggi untuk Chef" }
];

// Fungsi Mengganti Halaman (Section)
function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(sec => {
        sec.classList.remove('active-section');
        sec.classList.add('hidden-section');
    });
    document.getElementById(sectionId).classList.remove('hidden-section');
    document.getElementById(sectionId).classList.add('active-section');
}

// Render Tombol Filter
function renderFilters() {
    const filterContainer = document.getElementById('jurusan-filters');
    filterContainer.innerHTML = '';
    
    jurusans.forEach(jurusan => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${jurusan.id === 'Semua' ? 'active' : ''}`;
        // Menggunakan singkatan sebagai label agar ringkas, kecuali untuk 'Semua'
        btn.innerText = jurusan.id === 'Semua' ? jurusan.id : jurusan.id; 
        btn.onclick = () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderKarya(jurusan.id);
        };
        filterContainer.appendChild(btn);
    });
}

// Render Kartu Karya (Menggunakan Singkatan di Badge)
function renderKarya(filterJurusan = 'Semua') {
    const container = document.getElementById('works-container');
    container.innerHTML = '';

    const filteredKarya = filterJurusan === 'Semua' 
        ? karyaSiswa 
        : karyaSiswa.filter(k => k.jurusan === filterJurusan);

    filteredKarya.forEach(karya => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <span class="badge badge-${karya.jurusan.toLowerCase()}">${karya.jurusan}</span>
            </div>
            <h3 class="card-title">${karya.judul}</h3>
            <p class="card-author">Oleh: <strong>${karya.penulis}</strong></p>
            <p class="card-desc">${karya.deskripsi}</p>
        `;
        container.appendChild(card);
    });
}

// Render Cerita PKL Kakak Kelas
function renderPKL() {
    const container = document.getElementById('pkl-container');
    container.innerHTML = '';

    ceritaPKL.forEach(pkl => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <span class="badge badge-${pkl.jurusan.toLowerCase()}">${pkl.jurusan}</span>
            </div>
            <h3 class="card-title">${pkl.tempat}</h3>
            <p class="card-author">Pengalaman: <strong>${pkl.nama}</strong></p>
            <p class="card-desc">"${pkl.cerita}"</p>
            <hr style="margin: 10px 0; border: 0; border-top: 1px solid #eee;">
            <p style="font-size: 0.85rem; color: #2ecc71;"><strong>Rekomendasi:</strong> ${pkl.kecocokan}</p>
        `;
        container.appendChild(card);
    });
}

// Handle Form Unggah Karya Baru
document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const judul = document.getElementById('title-input').value;
    const jurusan = document.getElementById('jurusan-input').value;
    const deskripsi = document.getElementById('desc-input').value;

    const karyaBaru = {
        id: karyaSiswa.length + 1,
        judul: judul,
        penulis: "Siswa Kreatif (Anda)",
        jurusan: jurusan,
        deskripsi: deskripsi
    };

    karyaSiswa.unshift(karyaBaru); // Masukkan ke urutan teratas
    renderKarya(); // Render ulang galeri
    alert('Mahakarya berhasil diabadikan di ruang pamer!');
    this.reset();
    showSection('gallery'); // Langsung bawa ke halaman galeri setelah unggah
});

// Inisialisasi awal saat halaman dimuat
window.onload = () => {
    renderFilters();
    renderKarya();
    renderPKL();
};
