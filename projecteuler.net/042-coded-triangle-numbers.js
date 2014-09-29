// PROBLEM //

// http://jsfiddle.net/3tnrkoet/

/*
The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so
the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its
alphabetical position and adding these values we form a word value. For
example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value
is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), a 16K text file
containing nearly two-thousand common English words, how many are triangle
words?
*/


// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a};
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

String.prototype.wordValue = function() {
  return this.split('').map(function(c) { return c.charCodeAt(0)-64; }).sum();
}

function getTriangleMap(max) {
  return Array.range(1, max + 1).reduce(function(m,i) {
    m[(i/2) * (i+1)]=true;
    return m;
  }, {});
}

function getTriangleWordCount(words) {
  var triangleMap = getTriangleMap(100);
  return words.filter(function(w) { return triangleMap[w.wordValue()]; }).length;
}

var result = getTriangleWordCount(Words.allWords);

console.log(result);

// 162
