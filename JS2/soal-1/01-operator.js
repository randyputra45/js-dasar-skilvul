/// Soal - 01
/// Dibawah ini akan ditampilkan daftar pengeluaran bulan ini beserta gaji yang akan diterima, tugas-mu adalah untuk menghitung gaji yang tersisa

/// Pegeluaran
/// gundam = 750000
/// makan = 2000000
/// kost = 1000000
/// subscription = 250000

/// Gaji
/// gajiPokok = 5000000
/// gajiBonus = 10% dari gajiPokok
/// gajiLembur = 5% dari gajiPokok
let gajiPokok = 5000000;
let gajiBonus = 0.1 * gajiPokok;
let gajiLembur = 0.5 * gajiPokok;
let Gaji = gajiPokok + gajiBonus + gajiLembur;

let gundam = 750000
let makan = 2000000
let kost = 1000000
let subscription = 250000
let Pengeluaran = gundam + makan + kost + subscription;

const sisaGaji = Gaji - Pengeluaran;
console.log(sisaGaji);
