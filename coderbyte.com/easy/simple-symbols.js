// PROBLEM //

/*
Have the function SimpleSymbols(str) take the str parameter being passed
and determine if it is an acceptable sequence by either returning the
string true or false. The str parameter will be composed of + and = symbols
with several letters between them (ie. ++d+===+c++==a) and for the string
to be true each letter must be surrounded by a + symbol. So the string to
the left would be false. The string will not be empty and will have at
least one letter.
*/

// ANSWER //

var letters = 'abcdefghijklmnopqrstuvwxyz';

function SimpleSymbols(str) {
  var tokens = str.split('');
  var index = 0;
  var readToken = function() { return tokens[index++]; };
  var peekToken = function() { return tokens[index]; };
  var isLetter = function(c) { return letters.indexOf(c) != -1; };
  var isPlus = function(c) { return c == '+'; };
  var isEOL = function() { return index == str.length; };

  while (!isEOL()) {
    var token = readToken();
    if (isLetter(token))
      return false;

    if (isPlus(token)) {
      if (isEOL())
        continue;

      var peek = peekToken();
      if (isLetter(peek)) {
        token = readToken();

        if (isEOL())
          return false;

        peek = peekToken();

        if (!isPlus(peek))
          return false;
      }
    }
  }
  return true;
}

SimpleSymbols(readline());

// ALTERNATE //

// This is not a 100% working soltion. +d=+t+ will incorrectly return true.

// HELPERS //

Array.prototype.all=function(f){for(var i=0;i<this.length;)if(!f(this[i++]))return !1;return !0}

// ANSWER //

function isPlus(chr) { return chr == '+'; }
function isLetter(chr) { return 'abcdefghijklmnopqrstuvwxyz'.indexOf(chr) != -1; }

function SimpleSymbols(str) {
    var temp = str.replace(/[^a-z\+]/g, '');
    var str = temp.replace(/\+\+/g, '+');
    while (temp != str) {
        temp = str;
        str = temp.replace(/\+\+/g, '+');
    }
    var pluses = [];
    var letters = [];
    str.split('').forEach(function(chr, index) {
        (index % 2) ? letters.push(chr) : pluses.push(chr);
    });
    return pluses.all(isPlus) && letters.all(isLetter) && pluses.length > letters.length;
}

SimpleSymbols(readline());
