/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/// - Code akan mengeluarkan pesan error saat dijalankan
/// - Termasuk ke dalam Reference Error 
/// - Karena console.log(salaryWithVar) dan console.log(salaryWithConst) dijalankan terlebih dahulu tanpa mendeklarasikan
///   variabel salaryWithVar dan salaryWithConst terlebih dahulu

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

