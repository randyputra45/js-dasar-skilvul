/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(weight, height) {
    bmi = (weight / (height ** 2)) * 10000;
    if (bmi < 18.5) {
        console.log("under weight")
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        console.log("normal")
    }
    else if (bmi > 25 && bmi < 29.9) {
        console.log("over weight")
    }
    else if (bmi > 30 && bmi < 34.9) {
        console.log("obese")
    }   
    else if (bmi > 35) {
        console.log("extremely obese")
    }   
}

checkBMI(80, 170)
checkBMI(80, 160)
