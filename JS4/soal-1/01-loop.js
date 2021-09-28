/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
var j = 0
for (var count = 2; count <= 100; count++) {
    var notPrime = false;
    for (var i = 2; i <= count; i++) {
        if (count%i===0 && i!==count) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(count);
    }
}