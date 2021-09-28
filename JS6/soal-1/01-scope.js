/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// - Terdapat 2 variabel scope, yaitu global scope dan local scope
/// - Global scope dideklarasikan di luar blocks sehingga dapat diakses pada seluruh bagian code; 
///   Local scope dideklarasikan di dalam blocks sehingga hanya dapat diakses pada bagian bloks tersebut saja
/// - Implementasi code:

let name = 'Supardi'
function word() {
    let name = 'Budi Setiawan'
    console.log(name)    
}
word(); //Output Output Budi Setiawan
console.log(name); //Output Supardi
