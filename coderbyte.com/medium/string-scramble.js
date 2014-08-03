// PROBLEM //

/*
Using the JavaScript language, have the function StringScramble(str1,str2)
take both parameters being passed and return the string true if a portion of
str1 characters can be rearranged to match str2, otherwise return the string
false. For example: if str1 is "rkqodlw" and str2 is "world" the output should
return true. Punctuation and symbols will not be entered with the parameters.
*/

// ANSWER //

function StringScramble(str1,str2) {
  for (var i = 0; i < str2.length; i++) {
    c = str2.charAt(i);
    var n = str1.indexOf(c);
    if (n == -1)
      return false;
    str1 = str1.substr(0, n) + str1.substr(n);
  }
  return true;
}

StringScramble(readline());
