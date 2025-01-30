// Mendapatkan semua tombol beli sekarang
const beliSekarangButtons = document.querySelectorAll('.beli-sekarang');

// Menambahkan event listener pada setiap tombol beli sekarang
beliSekarangButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Mendapatkan ID produk dari tombol yang diklik
        const produkId = button.dataset.id;

        // Mengirimkan permintaan ke server untuk membeli produk
        fetch('/beli-produk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ produkId })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Menampilkan pesan sukses atau gagal
            alert(data.pesan);
        })
        .catch(error => {
            console.error(error);
            alert('Terjadi kesalahan!');
        });
    });
});

// Mendapatkan elemen keranjang
const keranjangList = document.getElementById('keranjang-list');

// Mendapatkan elemen total harga
const totalHarga = document.getElementById('total-harga');

// Mendapatkan elemen lanjutkan pembayaran
const lanjutkanPembayaran = document.getElementById('lanjutkan-pembayaran');

// Menampilkan daftar produk di keranjang
const produkDiKeranjang = [
    { id: 1, nama: 'Produk 1', jumlah: 2, harga: 10000 },
    { id: 2, nama: 'Produk 2', jumlah: 1, harga: 20000 },
];

produkDiKeranjang.forEach((produk) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${produk.id}</td>
        <td>${produk.nama}</td>
        <td>${produk.jumlah}</td>
        <td>Rp ${produk.harga}</td>
        <td>Rp ${produk.jumlah * produk.harga}</td>
        <td><button>Hapus</button></td>
    `;
    keranjangList.appendChild(row);
});

// Menghitung total harga
const totalHargaProduk = produkDiKeranjang.reduce((total, produk) => {
    return total + produk.jumlah * produk.harga;
},

// Mendapatkan semua tombol tambah keranjang
const tambahKeranjangButtons = document.querySelectorAll('.tambah-keranjang');

// Menambahkan event listener pada setiap tombol tambah keranjang
tambahKeranjangButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Mendapatkan ID produk dari tombol yang diklik
        const produkId = button.dataset.id;

        // Mengirimkan permintaan ke server untuk menambahkan produk ke keranjang
        fetch('/tambah-keranjang', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ produkId })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Menampilkan pesan sukses atau gagal
            alert(data.pesan);
        })
        .catch(error => {
            console.error(error);
            alert('Terjadi kesalahan!');
        });
    });
});
