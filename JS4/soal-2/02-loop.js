/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime = 0;

/// EDIT HERE
fiftiethPrime = 1
primeCounter = 2
while (fiftiethPrime != 50) {
    primeCounter++
    var notPrime = false;
    for (var i = 2; i <= primeCounter; i++) {
        if (primeCounter%i===0 && i!==primeCounter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        fiftiethPrime++
    }
}
console.log(primeCounter);

