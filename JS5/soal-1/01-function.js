/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxCalc(salary) {
    if (salary < 5000000) {
        pajak = 0
        console.log(pajak)
    }
    else if (salary >= 5000000 && salary < 10000000) {
        pajak = 0.05 * salary
        console.log(pajak)
    }
    else if (salary >= 10000000 && salary < 20000000) {
        pajak = 0.1 * salary
        console.log(pajak)
    }
    else if (salary >= 20000000) {
        pajak = 0.2 * salary
        console.log(pajak)
    }
}

taxCalc(4500000);
taxCalc(5000000);
taxCalc(20000000);