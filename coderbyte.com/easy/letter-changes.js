// PROBLEM //

/*
Have the function LetterChanges(str) take the str parameter being passed
and modify it using the following algorithm. Replace every letter in the
string with the letter following it in the alphabet (ie. c becomes d,
z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u)
and finally return this modified string.
*/

// ANSWER //

var letters = 'abcdefghijklmnopqrstuvwxyz';
var replace = 'bcdEfghIjklmnOpqrstUvwxyzA';

function LetterChanges(str) {
  return str.split('')
    .map(function(chr) {
      var i = letters.indexOf(chr);
      if (i == -1)
        return chr;
      return replace.charAt(i);
    }).join('');
}

LetterChanges(readline());
