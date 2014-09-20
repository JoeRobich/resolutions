#! node

// http://repl.it/Z25

// PROBLEM //

/*
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial
of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

// HELPERS //

Array.range=function(s,e){var a=[];while(s<e)a.push(s++);return a}
Number.prototype.factorial=function(){var p=1,n=2;while(n<=this)p*=n++;return p}
Array.prototype.sum=function(f){f=f||function(i){return i};return this.reduce(function(s,n){return s+f(n)})}

// ANSWER //

function calculateDigitFactorialsSum(max) {
  var factorialMap = Array.range(0, 10).map(function(n){return n.factorial();});
  return Array.range(3, max).filter(function(n) {
    return n.toString().split('').map(function(v){return factorialMap[v];}).sum() == n;
  }).sum();
}

var result = calculateDigitFactorialsSum(2540160); //9! * 7

console.log(result);

// 40730
