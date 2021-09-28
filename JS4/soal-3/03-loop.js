/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd = 0;

/// EDIT HERE
do {
    oddCounter++
    if (oddCounter&2 != 0){
        fiftiethOdd++
    }
} while (fiftiethOdd != 50)
console.log(oddCounter)