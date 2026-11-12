// DATA UMKM (Sinuhun cukup menambah atau mengubah daftar di sini)
const daftarUMKM = [
    {
        nama: "Warung Berkah Bu Siti",
        kategori: "Kuliner & Jajanan",
        alamat: "Jl. Mawar No. 12, RT 01/RW 02",
        mapsUrl: "https://maps.google.com/?q=-7.6298,111.5239", // Ganti dengan link Google Maps asli
        telepon: "6281234567890",
        teleponTampil: "0812-3456-7890",
        pesanOnline: "Tersedia (WhatsApp & GrabFood)",
        menu: [
            "Lemper Ayam Spesial - Rp 2.500",
            "Kue Nagasari - Rp 2.000",
            "Onde-onde Ketawa - Rp 10.000 / bungkus"
        ]
    },
    {
        nama: "Kedai Kopi Senja",
        kategori: "Minuman & Nongkrong",
        alamat: "Jl. Melati No. 45, Sebelah Balai Desa",
        mapsUrl: "https://maps.google.com/?q=-7.6300,111.5250",
        telepon: "6289876543210",
        teleponTampil: "0898-7654-3210",
        pesanOnline: "Tersedia (WhatsApp Antar Gratis < 2km)",
        menu: [
            "Es Kopi Susu Gula Aren - Rp 12.000",
            "Teh Tarik Dingin - Rp 8.000",
            "Pisang Goreng Keju - Rp 10.000"
        ]
    },
    {
        nama: "Jahit Rapi Pak Budi",
        kategori: "Jasa Permak & Jahit",
        alamat: "Gang Kenanga No. 3",
        mapsUrl: "https://maps.google.com/?q=-7.6310,111.5260",
        telepon: "6285678901234",
        teleponTampil: "0856-7890-1234",
        pesanOnline: "Tidak Tersedia (Datang langsung ke lokasi)",
        menu: [
            "Potong / Permak Celana - Mulai Rp 10.000",
            "Ganti Resleting Jaket - Rp 15.000",
            "Jahit Seragam Sekolah - Sesuai Pesanan"
        ]
    }
];

// Fungsi menampilkan kartu UMKM ke layar
const container = document.getElementById("umkmContainer");

daftarUMKM.forEach((umkm, index) => {
    const card = document.createElement("div");
    card.className = "umkm-card";
    card.onclick = () => bukaDetail(index);

    card.innerHTML = `
        <div>
            <span class="badge">${umkm.kategori}</span>
            <h3>${umkm.nama}</h3>
            <p style="font-size: 0.9rem; color: #666;">📍 ${umkm.alamat}</p>
        </div>
        <div class="card-footer">Lihat Menu & Info &rarr;</div>
    `;
    container.appendChild(card);
});

// Fungsi membuka jendela detail (Modal)
function bukaDetail(index) {
    const data = daftarUMKM[index];
    document.getElementById("modalNama").innerText = data.nama;
    document.getElementById("modalKategori").innerText = data.kategori;
    document.getElementById("modalAlamat").innerText = data.alamat;
    document.getElementById("modalMaps").href = data.mapsUrl;
    
    const telpLink = document.getElementById("modalTelepon");
    telpLink.href = `https://wa.me/${data.telepon}?text=Halo%20${encodeURIComponent(data.nama)},%20saya%20melihat%20profil%20usaha%20Anda%20di%20Direktori%20UMKM.`;
    telpLink.innerText = data.teleponTampil + " (Chat WA)";

    document.getElementById("modalOnline").innerText = data.pesanOnline;

    // Mengisi daftar menu
    const menuList = document.getElementById("modalMenu");
    menuList.innerHTML = "";
    data.menu.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        menuList.appendChild(li);
    });

    document.getElementById("detailModal").style.display = "flex";
}

// Fungsi menutup jendela detail
function tutupDetail() {
    document.getElementById("detailModal").style.display = "none";
}

// Menutup modal jika klik di luar kotak putih
window.onclick = function(event) {
    const modal = document.getElementById("detailModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
