/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/// - Code akan menampilkan "Mariah"
/// - Hal itu karena parameter name pada fungsi printFirstName(name) bersifat variabel lokal dan diinsisalisasi saat fungsi
///   itu dipanggil, sehingga tidak memanggil variabel global 'name'

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}
console.log(printFirstName("Mariah Carey"));
