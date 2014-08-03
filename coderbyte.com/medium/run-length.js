// PROBLEM //

/*
Using the JavaScript language, have the function RunLength(str) take the
str parameter being passed and return a compressed version of the string
using the Run-length encoding algorithm. This algorithm works by taking
the occurrence of each repeating character and outputting that number
along with a single character of the repeating sequence. For example:
"wwwggopp" would return 3w2g1o2p. The string will not contain any numbers,
punctuation, or symbols.
*/

// ANSWER //

function RunLength(str) {
  var letter = str.charAt(0);
  var count = 0;
  var result = '';
  str.split('').forEach(function(c) {
    if (c == letter)
      count++;
    else {
      result += count + letter;
      letter = c;
      count = 1;
    }
  });
  result += count + letter;
  return result;
}

RunLength(readline());
