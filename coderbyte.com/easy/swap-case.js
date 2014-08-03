// PROBLEM //

/*
Using the JavaScript language, have the function SwapCase(str) take the str
parameter and swap the case of each character. For example: if str is
"Hello World" the output should be hELLO wORLD. Let numbers and symbols stay
the way they are.
*/

// ANSWER //

var letters = "abcdefghijklmnopqrstuvwxyz";

function SwapCase(str) {
  return str.split('').map(function(c) {
    if (letters.indexOf(c.toLowerCase()) != -1)
      if (c == c.toLowerCase())
        return c.toUpperCase();
      else
        return c.toLowerCase();
    return c;
  }).join('');
}

SwapCase(readline());
