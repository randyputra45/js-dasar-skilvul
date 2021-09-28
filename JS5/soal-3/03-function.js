/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function convToUpperCase(text) {
    return text.toLowerCase().split(' ').map(value => {
      return value.charAt(0).toUpperCase() + value.substring(1);
    }).join(' ');
}
  
console.log(convToUpperCase("hello bandung"));
console.log(convToUpperCase("helloworldwide"));