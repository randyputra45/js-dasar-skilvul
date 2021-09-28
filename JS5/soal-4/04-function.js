/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function firstNonRepeatedChar(word) {
  let kata = word.split(' ')
  if (kata.length > 1) {
    return "kata tidak boleh dipisah";
  } 
  else {
    for (let i = 0; i < word.length; i++) {
        let j = word.charAt(i);
        if (word.indexOf(j) == i && word.indexOf(j, i + 1) == -1) {
          return j;
        }
    }
    return '';
  }
}

console.log(firstNonRepeatedChar("hello world"))
console.log(firstNonRepeatedChar("alloha"))
console.log(firstNonRepeatedChar("wooohoowh"))