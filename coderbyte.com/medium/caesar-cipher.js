// PROBLEM //

/*
Using the JavaScript language, have the function CaesarCipher(str,num) take
the str parameter and perform a Caesar Cipher shift on it using the num
parameter as the shifting number. A Caesar Cipher works by shifting each
letter in the string N places down in the alphabet (in this case N will be
num). Punctuation, spaces, and capitalization should remain intact. For
example if the string is "Caesar Cipher" and num is 2 the output should be
"Ecguct Ekrjgt".
*/

// ANSWER //

var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = lower.toUpperCase();

function CaesarCipher(str,num) {
  return str.split('').map(function(c) {
    var li = lower.indexOf(c);
    if (li != -1)
      return lower.charAt((li + num) % 26);
    var ui = upper.indexOf(c);
    if (ui != -1)
      return upper.charAt((ui + num) % 26);
    return c;
  }).join('');
}

CaesarCipher(readline());
